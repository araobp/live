<script>
    import jsQR from "jsqr";

    /**
     * Component properties for configuring the QR code reader.
     * @prop {number} [z_index=10] - The z-index for the overlay canvas.
     * @prop {boolean} [enabled=false] - Toggles the QR code reader's active state.
     * @prop {string | null} [qr_code=null] - A bindable property that holds the decoded QR code data.
     * @prop {(msg: string) => void | null} [updateStatus=null] - A callback function to update the status message in the parent component.
     */
    let {
        z_index = 10,
        enabled = false,
        qr_code = $bindable(),
        updateStatus = null,
        captureImage = $bindable()
    } = $props();

    /**
     * DOM element bindings for the video and canvases used in QR code reading.
     * - video: The <video> element that displays the live camera feed.
     * - canvas: An off-screen canvas to capture video frames for analysis.
     * - rectCanvas: An on-screen canvas to draw a rectangle around a detected QR code.
     */
    let video = $state();
    let canvas = $state();
    let rectCanvas = $state();

    /**
     * Draws a rectangle on the canvas to highlight the detected QR code.
     * This is done by creating a single path connecting the corner points and stroking it.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas to draw on.
     * @param {object} location - The location object from the jsQR library, containing the corner points of the QR code.
     */
    const drawRect = (ctx, location) => {
        ctx.beginPath();
        ctx.moveTo(location.topLeftCorner.x, location.topLeftCorner.y);
        ctx.lineTo(location.topRightCorner.x, location.topRightCorner.y);
        ctx.lineTo(location.bottomRightCorner.x, location.bottomRightCorner.y);
        ctx.lineTo(location.bottomLeftCorner.x, location.bottomLeftCorner.y);
        ctx.closePath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "blue";
        ctx.stroke();
    };

    /**
     * Manages the QR code reading process. When enabled, it requests access to the
     * device's rear camera. Once the video stream is active, it continuously
     * captures frames, scans them for a QR code using jsQR, and highlights any
     * detected code on an overlay canvas. When disabled, it stops the camera stream
     * to release resources. It also handles and reports errors, such as when
     * camera access is denied.
     */
    const startReadingQrCode = async () => {
        /**
         * Defines the media constraints for `getUserMedia`. It requests only video
         * from the rear-facing camera ("environment") and disables audio.
         */
        const constraints = {
            audio: false,
            video: {
                facingMode: "environment", // Specifies the rear camera
            },
        };

        if (enabled) {
            try {
                // Prompt for camera access and assign the resulting MediaStream to the video element.
                video.srcObject =
                    await navigator.mediaDevices.getUserMedia(constraints);

                //updateStatus("Camera access granted. Starting capture...");

                /**
                 * This event handler is triggered once the video's metadata is loaded.
                 * It starts video playback, sets up the canvases for QR code scanning,
                 * and initiates a recurring loop (`checkImage`) to continuously analyze
                 * video frames for QR codes.
                 */
                video.onloadeddata = () => {
                    video.play();

                    // Set the dimensions of both the off-screen capture canvas and the
                    // on-screen overlay canvas to match the video element's display size.
                    // This ensures that the captured image data and the drawn rectangle
                    // align correctly with the visible video feed.
                    const contentWidth = video.clientWidth;
                    const contentHeight = video.clientHeight;
                    canvas.width = contentWidth;
                    canvas.height = contentHeight;
                    rectCanvas.width = contentWidth;
                    rectCanvas.height = contentHeight;

                    /**
                     * Get the 2D rendering contexts for both canvases.
                     * - `ctx`: For the off-screen canvas to capture and analyze video frames.
                     *   The `willReadFrequently: true` hint optimizes performance for frequent reads.
                     * - `rectCtx`: For the on-screen canvas to draw the highlight rectangle.
                     */
                    const ctx = canvas.getContext("2d", {
                        willReadFrequently: true,
                    });
                    const rectCtx = rectCanvas.getContext("2d");

                    /**
                     * A recursive function that continuously scans for QR codes.
                     * It draws the current video frame to a canvas, gets the image data,
                     * and uses the jsQR library to detect a code. If a code is found, it's
                     * highlighted and its data is stored. The function then uses
                     * `requestAnimationFrame` to schedule the next scan, synchronizing it
                     * with the browser's rendering cycle for optimal performance.
                     */
                    const scanFrame = () => {
                        
                        // Draw the current video frame onto the off-screen canvas and then
                        // extract its raw pixel data. This data is what the jsQR library
                        // will analyze to find a QR code.
                        ctx.drawImage(video, 0, 0, contentWidth, contentHeight);
                        const imageData = ctx.getImageData(
                            0,
                            0,
                            contentWidth,
                            contentHeight,
                        );

                        // Use the jsQR library to scan the captured image data for a QR code.
                        // It returns a code object if found, otherwise null.
                        const code = jsQR(
                            imageData.data,
                            contentWidth,
                            contentHeight,
                        );

                        rectCtx.clearRect(0, 0, contentWidth, contentHeight);
                        // If a QR code is detected, clear the previous rectangle, draw a new
                        // one around the code's location, update the parent component's status,
                        // log the result, and update the bindable `qr_code` property with the
                        // decoded data, ensuring the data is not empty.
                        if (code && code.data !== "") {
                            drawRect(rectCtx, code.location);
                            updateStatus(`QR code found: ${code.data}`);
                            console.log(`QR code found: ${code.data}`);
                            qr_code = code.data;
                        }

                        // If the reader is still enabled, schedule the next frame scan.
                        if (enabled) {
                            requestAnimationFrame(scanFrame);
                        }
                    };
                    // Start the scanning loop.
                    scanFrame();
                };
            } catch (e) {
                console.error("Error accessing camera:", e);
                updateStatus(`Camera Error: ${e.message}`);
            }
        } else {
            // If the reader is disabled, stop all video tracks to release the camera
            // and turn off the recording indicator. This is a crucial cleanup step
            // to free up resources when the component is no longer active.
            if (video.srcObject) {
                const tracks = video.srcObject.getTracks();
                tracks.forEach((track) => {
                    track.stop();
                });
                video.srcObject = null;
            }
        }
    };

    /**
     * Captures the current video frame, converts it to a base64-encoded JPEG image,
     * and returns the data. This can be used for features like taking a snapshot.
     * @returns {string} The base64-encoded JPEG image data.
     */
    captureImage = () => {
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageURL = canvas.toDataURL("image/jpeg").split(",")[1];
        return imageURL;
    };

    /**
     * A reactive effect that triggers whenever the `enabled` prop changes.
     * It calls `startReadingQrCode()` to either initiate or terminate the
     * camera stream and scanning process based on the new value of `enabled`.
     */
    $effect(() => {
        enabled;
        startReadingQrCode();
    });
</script>

<div
    style="width: 100%; height: 100%; background-color: #100C14; {enabled
        ? 'display: block'
        : 'display: none'}"
>
    <!-- svelte-ignore a11y_media_has_caption -->
    <video style="width: 100%;" autoplay bind:this={video}></video>
    <canvas
        style="width: 100%; visibility: hidden; position: absolute; top: 0; left: 0;"
        bind:this={canvas}
    ></canvas>
    <canvas
        style="width: 100%;  position: absolute; top: 0; left: 0; z-index: {z_index};"
        bind:this={rectCanvas}
    ></canvas>
</div>
1
