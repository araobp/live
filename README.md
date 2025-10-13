# Live

(Work in progress)

## Base code

[live-audio-sveltekit5](live-audio-sveltekit5) folder contains SvelteKit-version of [this app](https://aistudio.google.com/apps/bundled/live_audio?showPreview=true&showCode=true&showAssistant=false&_gl=1*1ugdznd*_ga*MjA1MDExODM5My4xNzU2MDE1MzMx*_ga_P1DBVKWT6V*czE3NTk5Mjc1MzYkbzIyJGcxJHQxNzU5OTI4MTEyJGo2MCRsMCRoMTY3NDY2MjA3..) originally written in React.

I used Gemini CLI for the conversion. I modified part of the code and added comments to make it more readable.

I will start with this code to explore Gemini Live.

## App

A web app is being developed to run on mobile Chrome browsers. It will feature a QR code reader to determine the user's local context and is intended for use in a corporate showroom. It will also feature Augmented Reality (AR) as a visual guidance system for visitors to the showroom.

## Copying SvelteKit 5 app on RaspberryPi

I made this shell script to copy the app to RaspberryPi:

```
PASSWORD="******"
HOST="***@***.***.***.***"
sshpass -p "$PASSWORD" ssh $HOST "rm -rf ~/live/build/*"
sshpass -p "$PASSWORD" scp -r ./live-audio-sveltekit5/build $HOST:/home/arao/live
sshpass -p "$PASSWORD" scp ./live-audio-sveltekit5/package.json $HOST:/home/arao/live
sshpass -p "$PASSWORD" scp ./live-audio-sveltekit5/package-lock.json $HOST:/home/arao/live
```

## References

- [Web Audio API Tutorial](https://web-audio-api.firebaseapp.com/)







