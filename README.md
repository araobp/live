# Gemini Live web app for showrooms

**(Work in Progress)**

<img src="docs/screenshot_pixel9a.jpg" width=200>

## Introduction

## Base Code: "live-audio-sveltekit5" folder

The `live-audio-sveltekit5` folder contains a SvelteKit version of [this app](https://aistudio.google.com/apps/bundled/live_audio?showPreview=true&showCode=true&showAssistant=false&_gl=1*1ugdznd*_ga*MjA1MDExODM5My4xNzU2MDE1MzMx*_ga_P1DBVKWT6V*czE3NTk5Mjc1MzYkbzIyJGcxJHQxNzU5OTI4MTEyJGo2MCRsMCRoMTY3NDY2MjA3..) originally written in React. The conversion was performed using the Gemini CLI, with subsequent modifications and comments added for clarity. This codebase serves as the starting point for exploring Gemini Live.

## Application: "app" folder

The goal is to develop a web application for mobile Chrome browsers, designed for use in a corporate showroom. Key features include:

- A QR code reader to determine the user's local context.
- Augmented Reality (AR) for visual guidance.

<img src="docs/screenshot_qr_pixel9a.jpg" width=200>

### Observation

Gemini Live Native Audio work with English language very well, but not with Japanese language.

### Current status

Scan QR Code (HTTPS URL) as a system instruction for live chat.

### Next step: Context Caching

Scan QR Code (file ID) and upload the corresponding text file to Gemini.

## Deployment on Raspberry Pi

```
                                 nodejs
[Development PC]---- SCP --->[Raspberry Pi]<--- HTTP --->[Browser on Smartphone]
```

To deploy the SvelteKit 5 application to a Raspberry Pi, follow these steps:

1.  **Copy the application files:**
   Create a shell script like this for automating building and copying the app from the local folder to the remote folder:
    ```bash
    PASSWORD="******"
    HOST="arao@xxx.xxx.xxx.xxx"
    LOCAL_DIR="/Users/shiny/Documents/GitHub/live/app"
    REMOTE_DIR="/home/arao/live"

    cd $LOCAL_DIR
    echo ">>> App directory: "`pwd`
    
    echo ">>> Building the app..."
    npm run build
    
    echo ">>> Copying the app to the server..."
    sshpass -p "$PASSWORD" ssh $HOST "rm -rf ~/live/build/*"
    sshpass -p "$PASSWORD" scp -r $LOCAL_DIR/build $HOST:$REMOTE_DIR
    sshpass -p "$PASSWORD" scp $LOCAL_DIR/package.json $HOST:$REMOTE_DIR
    sshpass -p "$PASSWORD" scp $LOCAL_DIR/package-lock.json $HOST:$REMOTE_DIR
    ```

3.  **Install dependencies:**
    After copying the files, SSH into your Raspberry Pi and run `npm install` in the project directory.

4.  **Configure Chrome for Android:**
    If you are running the application with Node.js as an HTTP server, you need to enable the following flag in Chrome for Android:
    `chrome://flags/#unsafely-treat-insecure-origin-as-secure`

## References

- [Web Audio API Tutorial](https://web-audio-api.firebaseapp.com/)
- [jsQRを使ってブラウザQRコードリーダーを作る](https://qiita.com/U_sagi/items/12cc39487a863e0136a0)
- [WebXR/ARCore](https://developers.google.com/ar/develop/webxr)













