import { y as bind_props, z as attr } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/context.js";
import "@google/genai";
import * as THREE from "three";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
class Analyser {
  constructor(node) {
    this.bufferLength = 0;
    this.analyser = node.context.createAnalyser();
    this.analyser.fftSize = 32;
    this.bufferLength = this.analyser.frequencyBinCount;
    const buffer = new ArrayBuffer(this.bufferLength);
    this.dataArray = new Uint8Array(buffer);
    node.connect(this.analyser);
  }
  update() {
    this.analyser.getByteFrequencyData(this.dataArray);
  }
  get data() {
    return this.dataArray;
  }
}
function Visual3d($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var inputNode = $$props["inputNode"];
    var outputNode = $$props["outputNode"];
    new THREE.Vector3(0, 0, 0);
    if (inputNode) {
      new Analyser(inputNode);
    }
    if (outputNode) {
      new Analyser(outputNode);
    }
    $$renderer2.push(`<canvas class="svelte-8eyrkw"></canvas>`);
    bind_props($$props, { inputNode, outputNode });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var isRecording = false;
    var error = "";
    var inputNode;
    var outputNode;
    $$renderer2.push(`<div><div class="controls svelte-1uha8ag"><button id="resetButton"${attr("disabled", isRecording, true)} aria-label="Reset Session" class="svelte-1uha8ag"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffffff"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg></button> <button id="startButton"${attr("disabled", isRecording, true)} aria-label="Start Recording" class="svelte-1uha8ag"><svg viewBox="0 0 100 100" width="32px" height="32px" fill="#c80000" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></button> <button id="stopButton"${attr("disabled", !isRecording, true)} aria-label="Stop Recording" class="svelte-1uha8ag"><svg viewBox="0 0 100 100" width="32px" height="32px" fill="#000000" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="100" rx="15"></rect></svg></button></div> <div id="status" class="svelte-1uha8ag">${escape_html(error)}</div> `);
    Visual3d($$renderer2, { inputNode, outputNode });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
