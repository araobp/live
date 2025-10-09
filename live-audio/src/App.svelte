<script>
  import { onMount } from 'svelte';
  import { GoogleGenAI, LiveServerMessage, Modality, Session } from '@google/genai';
  import { createBlob, decode, decodeAudioData } from './utils';
  import Visual3d from './Visual3d.svelte';

  var isRecording = false;
  var status = '';
  var error = '';

  var client;
  var session;
  var inputAudioContext;
  var outputAudioContext;
  var inputNode;
  var outputNode;
  var nextStartTime = 0;
  var mediaStream;
  var sourceNode;
  var audioWorkletNode;
  var sources = new Set();

  onMount(() => {
    inputAudioContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 16000 });
    outputAudioContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 24000 });
    inputNode = inputAudioContext.createGain();
    outputNode = outputAudioContext.createGain();
    initClient();
  });

  const initAudio = () => {
    nextStartTime = outputAudioContext.currentTime;
  };

  const initClient = async () => {
    initAudio();

    client = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    outputNode.connect(outputAudioContext.destination);

    initSession();
  }

  const initSession = async () => {
    const model = 'gemini-2.5-flash-preview-native-audio-dialog';

    try {
      session = await client.live.connect({
        model: model,
        callbacks: {
          onopen: () => {
            updateStatus('Opened');
          },
          onmessage: async (message) => {
            const audio = message.serverContent?.modelTurn?.parts[0]?.inlineData;

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
              source.addEventListener('ended', () => {
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
            updateStatus('Close:' + e.reason);
          },
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Orus' } },
            // languageCode: 'en-GB'
          },
        },
      });
    } catch (e) {
      console.error(e);
    }
  }

  const updateStatus = (msg) => {
    status = msg;
  };

  const updateError = (msg) => {
    error = msg;
  };

  const startRecording = async () => {
    if (isRecording) {
      return;
    }

    inputAudioContext.resume();

    updateStatus('Requesting microphone access...');

    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      updateStatus('Microphone access granted. Starting capture...');

      sourceNode = inputAudioContext.createMediaStreamSource(mediaStream);
      sourceNode.connect(inputNode);

      await inputAudioContext.audioWorklet.addModule('audio-processor.js');
      audioWorkletNode = new AudioWorkletNode(inputAudioContext, 'audio-processor');

      audioWorkletNode.port.onmessage = (event) => {
        if (!isRecording) return;
        const pcmData = event.data;
        session.sendRealtimeInput({ media: createBlob(pcmData) });
      };

      sourceNode.connect(audioWorkletNode);
      audioWorkletNode.connect(inputAudioContext.destination);

      isRecording = true;
      updateStatus('🔴 Recording... Capturing PCM chunks.');
    } catch (err) {
      console.error('Error starting recording:', err);
      updateStatus(`Error: ${err.message}`);
      stopRecording();
    }
  }

  const stopRecording = () => {
    if (!isRecording && !mediaStream && !inputAudioContext) return;

    updateStatus('Stopping recording...');

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

    updateStatus('Recording stopped. Click Start to begin again.');
  }

  const reset = () => {
    session?.close();
    initSession();
    updateStatus('Session cleared.');
  }
</script>

<style>
  #status {
    position: absolute;
    bottom: 5vh;
    left: 0;
    right: 0;
    z-index: 10;
    text-align: center;
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

<div>
  <div class="controls">
    <button id="resetButton" on:click={reset} disabled={isRecording}>
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
    <button id="startButton" on:click={startRecording} disabled={isRecording}>
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
    <button id="stopButton" on:click={stopRecording} disabled={!isRecording}>
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

  <div id="status">{error}</div>
  <Visual3d {inputNode} {outputNode} />
</div>
