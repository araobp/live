# Live

**(Work in Progress)**

## Introduction

This project is an exploration into creating a Unified Communications (UC) application that leverages Generative AI for voice chat over WebSocket. The author, a former IP Telephony engineer with 20 years of experience in SIP and UC, is revisiting the field to build this innovative solution.

## Base Code

The `live-audio-sveltekit5` directory contains a SvelteKit version of an application originally written in React. The conversion was performed using the Gemini CLI, with subsequent modifications and comments added for clarity. This codebase serves as the starting point for exploring Gemini Live.

## Application

The goal is to develop a web application for mobile Chrome browsers, designed for use in a corporate showroom. Key features include:

- A QR code reader to determine the user's local context.
- Augmented Reality (AR) for visual guidance.

## Deployment on Raspberry Pi

To deploy the SvelteKit 5 application to a Raspberry Pi, follow these steps:

1.  **Copy the application files:**
    ```bash
    PASSWORD="YOUR_PASSWORD"
    HOST="USER@HOST_IP"
    sshpass -p "$PASSWORD" ssh $HOST "rm -rf ~/live/build/*"
    sshpass -p "$PASSWORD" scp -r ./live-audio-sveltekit5/build $HOST:/home/arao/live
    sshpass -p "$PASSWORD" scp ./live-audio-sveltekit5/package.json $HOST:/home/arao/live
    sshpass -p "$PASSWORD" scp ./live-audio-sveltekit5/package-lock.json $HOST:/home/arao/live
    ```

2.  **Install dependencies:**
    After copying the files, SSH into your Raspberry Pi and run `npm install` in the project directory.

3.  **Configure Chrome for Android:**
    If you are running the application with Node.js as an HTTP server, you need to enable the following flag in Chrome for Android:
    `chrome://flags/#unsafely-treat-insecure-origin-as-secure`

## References

- [Web Audio API Tutorial](https://web-audio-api.firebaseapp.com/)
