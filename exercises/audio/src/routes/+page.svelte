<script>
    import audioUrl from "$lib/assets/Bach,_BWV_147,_10._Jesus_bleibet_meine_Freude.ogg";

    /**
     * @type {HTMLAudioElement | null}
     */
    var audio = null;
    var playing = $state(false);
    
    const play = () => {
        // HTMLAudioElement
        audio = new Audio(audioUrl);
        audio.play();
        playing = true;
    };

    const stop = () => {
        if (audio && playing) {
            audio.pause();
            audio.currentTime = 0;
            playing = false;
        }
    };

</script>

<h1>Web Audio API tests</h1>

<button
    onclick={() => {
        if (!playing) {
            play();
        } else {
            stop();
        }
    }}>{playing ? "Stop" : "Play"}</button
>
