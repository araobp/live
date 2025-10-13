<script>
  import { onMount } from "svelte";
  import { GoogleGenAI, Modality } from "@google/genai";
  import { createBlob, decode, decodeAudioData } from "$lib/utils";
  import Visual3d from "$lib/Visual3d.svelte";

  var isRecording = $state(false);
  var status = $state("");
  var error = $state(null);

  var client;
  var session;
  var inputAudioContext;
  var outputAudioContext;
  var inputNode = $state();
  var outputNode = $state();
  var nextStartTime = 0;
  var mediaStream;
  var sourceNode;
  var audioWorkletNode;
  var sources = new Set();

  onMount(() => {
    // The window.AudioContext is the main entry point and container
    // for all audio operations within the Web Audio API. 
    inputAudioContext = new (window.AudioContext || window.webkitAudioContext)({
      sampleRate: 16000,
    });
    outputAudioContext = new (window.AudioContext || window.webkitAudioContext)(
      { sampleRate: 24000 },
    );

    // The createGain() method in the Web Audio API creates a GainNode,
    // which is used to control the overall volume (or gain) of an audio signal.
    inputNode = inputAudioContext.createGain();
    outputNode = outputAudioContext.createGain();

    initClient();
  });


  /**
   * Initializes the Google Gemini client and Web Audio API components.
   */
  const initClient = async () => {
    // The AudioContext.currentTime property is a read-only value
    // that returns the current time in seconds, measured from the moment
    // the AudioContext was first created.
    nextStartTime = outputAudioContext.currentTime;

    // Google Gemini Client
    client = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    // Connect the output gain node to the speakers (final destination),
    // so we can hear the audio.
    outputNode.connect(outputAudioContext.destination);

    initSession();
  };

  /**
   * Establishes a real-time, bidirectional communication session with the
   * Google Gemini model. It configures the model to use and sets up
   * callbacks to handle the entire lifecycle of the connection, including
   * receiving audio data and managing interruptions.
   */
  const initSession = async () => {
    // Specifies the Gemini model optimized for real-time, native audio dialogue.
    // This model is designed for fast, conversational interactions.
    const model = "gemini-2.5-flash-preview-native-audio-dialog";

    // Establish a real-time, bidirectional connection to the Gemini model,
    // setting up callbacks to handle incoming audio data, interruptions,
    // and connection status changes.
    try {
      session = await client.live.connect({
        model: model,
        callbacks: {
          // This function is called once the connection to the model is
          // successfully established.
          onopen: () => {
            updateStatus("Opened");
          },
          // This callback handles messages from the server. It processes incoming
          // audio chunks for seamless playback and manages interruptions if the
          // user starts speaking over the model's response.
          onmessage: async (message) => {
            const audio =
              message.serverContent?.modelTurn?.parts[0]?.inlineData;

            if (audio) {
              nextStartTime = Math.max(
                nextStartTime,
                outputAudioContext.currentTime,
              );

              const audioBuffer = await decodeAudioData(
                decode(audio.data),
                outputAudioContext,
                24000,
                1,
              );
              const source = outputAudioContext.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputNode);
              source.addEventListener("ended", () => {
                sources.delete(source);
              });

              source.start(nextStartTime);
              nextStartTime = nextStartTime + audioBuffer.duration;
              sources.add(source);
            }

            const interrupted = message.serverContent?.interrupted;
            if (interrupted) {
              for (const source of sources.values()) {
                source.stop();
                sources.delete(source);
              }
              nextStartTime = 0;
            }
          },
          onerror: (e) => {
            updateError(e.message);
          },
          onclose: (e) => {
            updateStatus("Close:" + e.reason);
          },
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Orus" } },
            // languageCode: 'en-GB'
          },
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * Updates the status message displayed to the user.
   * @param {string} msg The new status message.
   */
  const updateStatus = (msg) => {
    status = msg;
  };

  const updateError = (msg) => {
    error = msg ? `Error: ${msg}` : null;
  };

  /**
   * Asynchronously starts the recording process. It requests microphone access,
   * sets up the Web Audio API graph to capture the input, and loads an
   * AudioWorklet to process the audio. The processed audio data (PCM) is then
   * sent in real-time to the Gemini session. It also handles UI state updates
   * and error management for the recording process.
   */
  const startRecording = async () => {
    if (isRecording) {
      return;
    }

    inputAudioContext.resume();

    updateStatus("Requesting microphone access...");

    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      updateStatus("Microphone access granted. Starting capture...");

      sourceNode = inputAudioContext.createMediaStreamSource(mediaStream);
      sourceNode.connect(inputNode);

      await inputAudioContext.audioWorklet.addModule("audio-processor.js");
      audioWorkletNode = new AudioWorkletNode(
        inputAudioContext,
        "audio-processor",
      );

      audioWorkletNode.port.onmessage = (event) => {
        if (!isRecording) return;
        const pcmData = event.data;
        session.sendRealtimeInput({ media: createBlob(pcmData) });
      };

      sourceNode.connect(audioWorkletNode);
      audioWorkletNode.connect(inputAudioContext.destination);

      isRecording = true;
      updateStatus("🔴 Recording... Capturing PCM chunks.");
    } catch (err) {
      console.error("Error starting recording:", err);
      updateStatus(`Error: ${err.message}`);
      stopRecording();
    }
  };

  const stopRecording = () => {
    if (!isRecording && !mediaStream && !inputAudioContext) return;

    updateStatus("Stopping recording...");

    isRecording = false;

    if (audioWorkletNode && sourceNode && inputAudioContext) {
      audioWorkletNode.disconnect();
      sourceNode.disconnect();
    }

    audioWorkletNode = null;
    sourceNode = null;

    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      mediaStream = null;
    }

    updateStatus("Recording stopped. Click Start to begin again.");
  };

  const reset = () => {
    session?.close();
    initSession();
    updateStatus("Session cleared.");
  };
</script>

<div>
  <div class="controls">
    <button
      id="resetButton"
      onclick={reset}
      disabled={isRecording}
      aria-label="Reset Session"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#ffffff"
      >
        <path
          d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"
        />
      </svg>
    </button>
    <button
      id="startButton"
      onclick={startRecording}
      disabled={isRecording}
      aria-label="Start Recording"
    >
      <svg
        viewBox="0 0 100 100"
        width="32px"
        height="32px"
        fill="#c80000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
    </button>
    <button
      id="stopButton"
      onclick={stopRecording}
      disabled={!isRecording}
      aria-label="Stop Recording"
    >
      <svg
        viewBox="0 0 100 100"
        width="32px"
        height="32px"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="100" height="100" rx="15" />
      </svg>
    </button>
  </div>

  <div id="status">{error || status}</div>
  <Visual3d {inputNode} {outputNode} />
</div>

<style>
  #status {
    position: absolute;
    bottom: 5vh;
    left: 0;
    right: 0;
    z-index: 10;
    text-align: center;
    color: #ffffff;
  }

  .controls {
    z-index: 10;
    position: absolute;
    bottom: 10vh;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  button {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    width: 64px;
    height: 64px;
    cursor: pointer;
    font-size: 24px;
    padding: 0;
    margin: 0;
  }

  button:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  button[disabled] {
    display: none;
  }
</style>
