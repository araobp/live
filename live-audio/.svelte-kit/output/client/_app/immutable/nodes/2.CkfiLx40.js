import"../chunks/Bzak7iHL.js";import"../chunks/CDKKvNe5.js";import{o as Yu,e as xr,s as _f}from"../chunks/D63t2gaR.js";import{p as $u,aQ as Aa,aR as vf,n as Ju,m as Ku,o as Zu,aS as ct,B as Gn,aM as oi,e as Ra,t as Tf,q as yr,v as yo,s as Mr}from"../chunks/PT1dyEdA.js";import{i as Qu}from"../chunks/vJABxF_S.js";import{p as wa,b as Sf}from"../chunks/wVZxdE04.js";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let xf,yf;function Mf(){return{geminiUrl:xf,vertexUrl:yf}}function Ef(n,e,t,i){var o,r;if(!(n!=null&&n.baseUrl)){const l=Mf();return e?(o=l.vertexUrl)!==null&&o!==void 0?o:t:(r=l.geminiUrl)!==null&&r!==void 0?r:i}return n.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ai{}function Ae(n,e){const t=/\{([^}]+)\}/g;return n.replace(t,(i,o)=>{if(Object.prototype.hasOwnProperty.call(e,o)){const r=e[o];return r!=null?String(r):""}else throw new Error(`Key '${o}' not found in valueMap.`)})}function a(n,e,t){for(let r=0;r<e.length-1;r++){const l=e[r];if(l.endsWith("[]")){const u=l.slice(0,-2);if(!(u in n))if(Array.isArray(t))n[u]=Array.from({length:t.length},()=>({}));else throw new Error(`Value must be a list given an array path ${l}`);if(Array.isArray(n[u])){const c=n[u];if(Array.isArray(t))for(let f=0;f<c.length;f++){const d=c[f];a(d,e.slice(r+1),t[f])}else for(const f of c)a(f,e.slice(r+1),t)}return}else if(l.endsWith("[0]")){const u=l.slice(0,-3);u in n||(n[u]=[{}]);const c=n[u];a(c[0],e.slice(r+1),t);return}(!n[l]||typeof n[l]!="object")&&(n[l]={}),n=n[l]}const i=e[e.length-1],o=n[i];if(o!==void 0){if(!t||typeof t=="object"&&Object.keys(t).length===0||t===o)return;if(typeof o=="object"&&typeof t=="object"&&o!==null&&t!==null)Object.assign(o,t);else throw new Error(`Cannot set value for an existing key. Key: ${i}`)}else i==="_self"&&typeof t=="object"&&t!==null&&!Array.isArray(t)?Object.assign(n,t):n[i]=t}function s(n,e){try{if(e.length===1&&e[0]==="_self")return n;for(let t=0;t<e.length;t++){if(typeof n!="object"||n===null)return;const i=e[t];if(i.endsWith("[]")){const o=i.slice(0,-2);if(o in n){const r=n[o];return Array.isArray(r)?r.map(l=>s(l,e.slice(t+1))):void 0}else return}else n=n[i]}return n}catch(t){if(t instanceof TypeError)return;throw t}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ra(n){if(typeof n!="string")throw new Error("fromImageBytes must be a string");return n}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Cf(n){const e={},t=s(n,["operationName"]);t!=null&&a(e,["operationName"],t);const i=s(n,["resourceName"]);return i!=null&&a(e,["_url","resourceName"],i),e}function Af(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["metadata"]);i!=null&&a(e,["metadata"],i);const o=s(n,["done"]);o!=null&&a(e,["done"],o);const r=s(n,["error"]);r!=null&&a(e,["error"],r);const l=s(n,["response","generateVideoResponse"]);return l!=null&&a(e,["response"],wf(l)),e}function Rf(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["metadata"]);i!=null&&a(e,["metadata"],i);const o=s(n,["done"]);o!=null&&a(e,["done"],o);const r=s(n,["error"]);r!=null&&a(e,["error"],r);const l=s(n,["response"]);return l!=null&&a(e,["response"],If(l)),e}function wf(n){const e={},t=s(n,["generatedSamples"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(l=>Pf(l))),a(e,["generatedVideos"],r)}const i=s(n,["raiMediaFilteredCount"]);i!=null&&a(e,["raiMediaFilteredCount"],i);const o=s(n,["raiMediaFilteredReasons"]);return o!=null&&a(e,["raiMediaFilteredReasons"],o),e}function If(n){const e={},t=s(n,["videos"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(l=>Df(l))),a(e,["generatedVideos"],r)}const i=s(n,["raiMediaFilteredCount"]);i!=null&&a(e,["raiMediaFilteredCount"],i);const o=s(n,["raiMediaFilteredReasons"]);return o!=null&&a(e,["raiMediaFilteredReasons"],o),e}function Pf(n){const e={},t=s(n,["_self"]);return t!=null&&a(e,["video"],Nf(t)),e}function Df(n){const e={},t=s(n,["_self"]);return t!=null&&a(e,["video"],Lf(t)),e}function bf(n){const e={},t=s(n,["operationName"]);return t!=null&&a(e,["_url","operationName"],t),e}function Uf(n){const e={},t=s(n,["operationName"]);return t!=null&&a(e,["_url","operationName"],t),e}function Nf(n){const e={},t=s(n,["video","uri"]);t!=null&&a(e,["uri"],t);const i=s(n,["video","encodedVideo"]);i!=null&&a(e,["videoBytes"],ra(i));const o=s(n,["encoding"]);return o!=null&&a(e,["mimeType"],o),e}function Lf(n){const e={},t=s(n,["gcsUri"]);t!=null&&a(e,["uri"],t);const i=s(n,["bytesBase64Encoded"]);i!=null&&a(e,["videoBytes"],ra(i));const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Ia;(function(n){n.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",n.OUTCOME_OK="OUTCOME_OK",n.OUTCOME_FAILED="OUTCOME_FAILED",n.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(Ia||(Ia={}));var Pa;(function(n){n.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",n.PYTHON="PYTHON"})(Pa||(Pa={}));var Hn;(function(n){n.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",n.STRING="STRING",n.NUMBER="NUMBER",n.INTEGER="INTEGER",n.BOOLEAN="BOOLEAN",n.ARRAY="ARRAY",n.OBJECT="OBJECT",n.NULL="NULL"})(Hn||(Hn={}));var Da;(function(n){n.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",n.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",n.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",n.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",n.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT"})(Da||(Da={}));var ba;(function(n){n.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",n.SEVERITY="SEVERITY",n.PROBABILITY="PROBABILITY"})(ba||(ba={}));var Ua;(function(n){n.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE",n.OFF="OFF"})(Ua||(Ua={}));var Na;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(Na||(Na={}));var La;(function(n){n.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",n.NO_AUTH="NO_AUTH",n.API_KEY_AUTH="API_KEY_AUTH",n.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",n.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",n.OAUTH="OAUTH",n.OIDC_AUTH="OIDC_AUTH"})(La||(La={}));var Fa;(function(n){n.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",n.SIMPLE_SEARCH="SIMPLE_SEARCH",n.ELASTIC_SEARCH="ELASTIC_SEARCH"})(Fa||(Fa={}));var Ba;(function(n){n.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",n.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",n.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",n.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",n.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(Ba||(Ba={}));var ka;(function(n){n.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",n.STOP="STOP",n.MAX_TOKENS="MAX_TOKENS",n.SAFETY="SAFETY",n.RECITATION="RECITATION",n.LANGUAGE="LANGUAGE",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.SPII="SPII",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.IMAGE_SAFETY="IMAGE_SAFETY",n.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",n.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT"})(ka||(ka={}));var Va;(function(n){n.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",n.NEGLIGIBLE="NEGLIGIBLE",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(Va||(Va={}));var Oa;(function(n){n.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",n.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",n.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",n.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",n.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(Oa||(Oa={}));var Ga;(function(n){n.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",n.SAFETY="SAFETY",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.IMAGE_SAFETY="IMAGE_SAFETY"})(Ga||(Ga={}));var Ha;(function(n){n.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",n.ON_DEMAND="ON_DEMAND",n.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(Ha||(Ha={}));var ro;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.AUDIO="AUDIO"})(ro||(ro={}));var za;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(za||(za={}));var rs;(function(n){n.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",n.JOB_STATE_QUEUED="JOB_STATE_QUEUED",n.JOB_STATE_PENDING="JOB_STATE_PENDING",n.JOB_STATE_RUNNING="JOB_STATE_RUNNING",n.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",n.JOB_STATE_FAILED="JOB_STATE_FAILED",n.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",n.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",n.JOB_STATE_PAUSED="JOB_STATE_PAUSED",n.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",n.JOB_STATE_UPDATING="JOB_STATE_UPDATING",n.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(rs||(rs={}));var Wa;(function(n){n.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",n.TUNING_MODE_FULL="TUNING_MODE_FULL",n.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(Wa||(Wa={}));var qa;(function(n){n.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",n.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",n.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",n.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",n.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",n.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",n.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(qa||(qa={}));var Xa;(function(n){n.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",n.TUNING_TASK_I2V="TUNING_TASK_I2V",n.TUNING_TASK_T2V="TUNING_TASK_T2V"})(Xa||(Xa={}));var Ya;(function(n){n.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",n.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",n.BALANCED="BALANCED",n.PRIORITIZE_COST="PRIORITIZE_COST"})(Ya||(Ya={}));var $a;(function(n){n.UNSPECIFIED="UNSPECIFIED",n.BLOCKING="BLOCKING",n.NON_BLOCKING="NON_BLOCKING"})($a||($a={}));var Ja;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(Ja||(Ja={}));var Ka;(function(n){n.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",n.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(Ka||(Ka={}));var Za;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.AUTO="AUTO",n.ANY="ANY",n.NONE="NONE",n.VALIDATED="VALIDATED"})(Za||(Za={}));var Qa;(function(n){n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE"})(Qa||(Qa={}));var ja;(function(n){n.DONT_ALLOW="DONT_ALLOW",n.ALLOW_ADULT="ALLOW_ADULT",n.ALLOW_ALL="ALLOW_ALL"})(ja||(ja={}));var el;(function(n){n.auto="auto",n.en="en",n.ja="ja",n.ko="ko",n.hi="hi",n.zh="zh",n.pt="pt",n.es="es"})(el||(el={}));var tl;(function(n){n.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",n.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",n.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",n.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",n.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(tl||(tl={}));var nl;(function(n){n.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",n.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",n.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",n.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(nl||(nl={}));var il;(function(n){n.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",n.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",n.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",n.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(il||(il={}));var ol;(function(n){n.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",n.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",n.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",n.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",n.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",n.EDIT_MODE_STYLE="EDIT_MODE_STYLE",n.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",n.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(ol||(ol={}));var rl;(function(n){n.FOREGROUND="FOREGROUND",n.BACKGROUND="BACKGROUND",n.PROMPT="PROMPT",n.SEMANTIC="SEMANTIC",n.INTERACTIVE="INTERACTIVE"})(rl||(rl={}));var sl;(function(n){n.ASSET="ASSET",n.STYLE="STYLE"})(sl||(sl={}));var al;(function(n){n.INSERT="INSERT",n.REMOVE="REMOVE",n.REMOVE_STATIC="REMOVE_STATIC",n.OUTPAINT="OUTPAINT"})(al||(al={}));var ll;(function(n){n.OPTIMIZED="OPTIMIZED",n.LOSSLESS="LOSSLESS"})(ll||(ll={}));var ul;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.PROCESSING="PROCESSING",n.ACTIVE="ACTIVE",n.FAILED="FAILED"})(ul||(ul={}));var cl;(function(n){n.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",n.UPLOADED="UPLOADED",n.GENERATED="GENERATED"})(cl||(cl={}));var fl;(function(n){n.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.RESPONSE_REJECTED="RESPONSE_REJECTED",n.NEED_MORE_INPUT="NEED_MORE_INPUT"})(fl||(fl={}));var dl;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.VIDEO="VIDEO",n.AUDIO="AUDIO",n.DOCUMENT="DOCUMENT"})(dl||(dl={}));var hl;(function(n){n.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",n.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",n.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(hl||(hl={}));var pl;(function(n){n.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",n.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",n.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(pl||(pl={}));var ml;(function(n){n.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",n.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",n.NO_INTERRUPTION="NO_INTERRUPTION"})(ml||(ml={}));var gl;(function(n){n.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",n.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",n.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(gl||(gl={}));var _l;(function(n){n.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",n.SILENT="SILENT",n.WHEN_IDLE="WHEN_IDLE",n.INTERRUPT="INTERRUPT"})(_l||(_l={}));var vl;(function(n){n.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",n.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",n.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",n.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",n.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",n.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",n.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",n.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",n.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",n.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",n.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",n.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",n.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(vl||(vl={}));var Tl;(function(n){n.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",n.QUALITY="QUALITY",n.DIVERSITY="DIVERSITY",n.VOCALIZATION="VOCALIZATION"})(Tl||(Tl={}));var Ai;(function(n){n.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",n.PLAY="PLAY",n.PAUSE="PAUSE",n.STOP="STOP",n.RESET_CONTEXT="RESET_CONTEXT"})(Ai||(Ai={}));class ss{constructor(e){const t={};for(const i of e.headers.entries())t[i[0]]=i[1];this.headers=t,this.responseInternal=e}json(){return this.responseInternal.json()}}class Ki{get text(){var e,t,i,o,r,l,u,c;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let f="",d=!1;const h=[];for(const p of(c=(u=(l=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||l===void 0?void 0:l.content)===null||u===void 0?void 0:u.parts)!==null&&c!==void 0?c:[]){for(const[m,S]of Object.entries(p))m!=="text"&&m!=="thought"&&(S!==null||S!==void 0)&&h.push(m);if(typeof p.text=="string"){if(typeof p.thought=="boolean"&&p.thought)continue;d=!0,f+=p.text}}return h.length>0&&console.warn(`there are non-text parts ${h} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),d?f:void 0}get data(){var e,t,i,o,r,l,u,c;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let f="";const d=[];for(const h of(c=(u=(l=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||l===void 0?void 0:l.content)===null||u===void 0?void 0:u.parts)!==null&&c!==void 0?c:[]){for(const[p,m]of Object.entries(h))p!=="inlineData"&&(m!==null||m!==void 0)&&d.push(p);h.inlineData&&typeof h.inlineData.data=="string"&&(f+=atob(h.inlineData.data))}return d.length>0&&console.warn(`there are non-data parts ${d} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),f.length>0?btoa(f):void 0}get functionCalls(){var e,t,i,o,r,l,u,c;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const f=(c=(u=(l=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||l===void 0?void 0:l.content)===null||u===void 0?void 0:u.parts)===null||c===void 0?void 0:c.filter(d=>d.functionCall).map(d=>d.functionCall).filter(d=>d!==void 0);if((f==null?void 0:f.length)!==0)return f}get executableCode(){var e,t,i,o,r,l,u,c,f;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const d=(c=(u=(l=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||l===void 0?void 0:l.content)===null||u===void 0?void 0:u.parts)===null||c===void 0?void 0:c.filter(h=>h.executableCode).map(h=>h.executableCode).filter(h=>h!==void 0);if((d==null?void 0:d.length)!==0)return(f=d==null?void 0:d[0])===null||f===void 0?void 0:f.code}get codeExecutionResult(){var e,t,i,o,r,l,u,c,f;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const d=(c=(u=(l=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||l===void 0?void 0:l.content)===null||u===void 0?void 0:u.parts)===null||c===void 0?void 0:c.filter(h=>h.codeExecutionResult).map(h=>h.codeExecutionResult).filter(h=>h!==void 0);if((d==null?void 0:d.length)!==0)return(f=d==null?void 0:d[0])===null||f===void 0?void 0:f.output}}class Sl{}class xl{}class Ff{}class Bf{}class kf{}class Vf{}class yl{}class Ml{}class El{}class Of{}class rr{_fromAPIResponse({apiResponse:e,isVertexAI:t}){const i=new rr;let o;const r=e;return t?o=Rf(r):o=Af(r),Object.assign(i,o),i}}class Cl{}class Al{}class Rl{}class Gf{}class Hf{}class zf{}class wl{}class Wf{get text(){var e,t,i;let o="",r=!1;const l=[];for(const u of(i=(t=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||t===void 0?void 0:t.parts)!==null&&i!==void 0?i:[]){for(const[c,f]of Object.entries(u))c!=="text"&&c!=="thought"&&f!==null&&l.push(c);if(typeof u.text=="string"){if(typeof u.thought=="boolean"&&u.thought)continue;r=!0,o+=u.text}}return l.length>0&&console.warn(`there are non-text parts ${l} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),r?o:void 0}get data(){var e,t,i;let o="";const r=[];for(const l of(i=(t=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||t===void 0?void 0:t.parts)!==null&&i!==void 0?i:[]){for(const[u,c]of Object.entries(l))u!=="inlineData"&&c!==null&&r.push(u);l.inlineData&&typeof l.inlineData.data=="string"&&(o+=atob(l.inlineData.data))}return r.length>0&&console.warn(`there are non-data parts ${r} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),o.length>0?btoa(o):void 0}}class qf{get audioChunk(){if(this.serverContent&&this.serverContent.audioChunks&&this.serverContent.audioChunks.length>0)return this.serverContent.audioChunks[0]}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function at(n,e){if(!e||typeof e!="string")throw new Error("model is required and must be a string");if(n.isVertexAI()){if(e.startsWith("publishers/")||e.startsWith("projects/")||e.startsWith("models/"))return e;if(e.indexOf("/")>=0){const t=e.split("/",2);return`publishers/${t[0]}/models/${t[1]}`}else return`publishers/google/models/${e}`}else return e.startsWith("models/")||e.startsWith("tunedModels/")?e:`models/${e}`}function ju(n,e){const t=at(n,e);return t?t.startsWith("publishers/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/${t}`:t.startsWith("models/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/publishers/google/${t}`:t:""}function ec(n){return Array.isArray(n)?n.map(e=>sr(e)):[sr(n)]}function sr(n){if(typeof n=="object"&&n!==null)return n;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof n}`)}function tc(n){const e=sr(n);if(e.mimeType&&e.mimeType.startsWith("image/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function nc(n){const e=sr(n);if(e.mimeType&&e.mimeType.startsWith("audio/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function Il(n){if(n==null)throw new Error("PartUnion is required");if(typeof n=="object")return n;if(typeof n=="string")return{text:n};throw new Error(`Unsupported part type: ${typeof n}`)}function ic(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("PartListUnion is required");return Array.isArray(n)?n.map(e=>Il(e)):[Il(n)]}function as(n){return n!=null&&typeof n=="object"&&"parts"in n&&Array.isArray(n.parts)}function Pl(n){return n!=null&&typeof n=="object"&&"functionCall"in n}function Dl(n){return n!=null&&typeof n=="object"&&"functionResponse"in n}function bt(n){if(n==null)throw new Error("ContentUnion is required");return as(n)?n:{role:"user",parts:ic(n)}}function sa(n,e){if(!e)return[];if(n.isVertexAI()&&Array.isArray(e))return e.flatMap(t=>{const i=bt(t);return i.parts&&i.parts.length>0&&i.parts[0].text!==void 0?[i.parts[0].text]:[]});if(n.isVertexAI()){const t=bt(e);return t.parts&&t.parts.length>0&&t.parts[0].text!==void 0?[t.parts[0].text]:[]}return Array.isArray(e)?e.map(t=>bt(t)):[bt(e)]}function jt(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("contents are required");if(!Array.isArray(n)){if(Pl(n)||Dl(n))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[bt(n)]}const e=[],t=[],i=as(n[0]);for(const o of n){const r=as(o);if(r!=i)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(r)e.push(o);else{if(Pl(o)||Dl(o))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");t.push(o)}}return i||e.push({role:"user",parts:ic(t)}),e}function Xf(n,e){n.includes("null")&&(e.nullable=!0);const t=n.filter(i=>i!=="null");if(t.length===1)e.type=Object.values(Hn).includes(t[0].toUpperCase())?t[0].toUpperCase():Hn.TYPE_UNSPECIFIED;else{e.anyOf=[];for(const i of t)e.anyOf.push({type:Object.values(Hn).includes(i.toUpperCase())?i.toUpperCase():Hn.TYPE_UNSPECIFIED})}}function Ii(n){const e={},t=["items"],i=["anyOf"],o=["properties"];if(n.type&&n.anyOf)throw new Error("type and anyOf cannot be both populated.");const r=n.anyOf;r!=null&&r.length==2&&(r[0].type==="null"?(e.nullable=!0,n=r[1]):r[1].type==="null"&&(e.nullable=!0,n=r[0])),n.type instanceof Array&&Xf(n.type,e);for(const[l,u]of Object.entries(n))if(u!=null)if(l=="type"){if(u==="null")throw new Error("type: null can not be the only possible type for the field.");if(u instanceof Array)continue;e.type=Object.values(Hn).includes(u.toUpperCase())?u.toUpperCase():Hn.TYPE_UNSPECIFIED}else if(t.includes(l))e[l]=Ii(u);else if(i.includes(l)){const c=[];for(const f of u){if(f.type=="null"){e.nullable=!0;continue}c.push(Ii(f))}e[l]=c}else if(o.includes(l)){const c={};for(const[f,d]of Object.entries(u))c[f]=Ii(d);e[l]=c}else{if(l==="additionalProperties")continue;e[l]=u}return e}function aa(n){return Ii(n)}function la(n){if(typeof n=="object")return n;if(typeof n=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:n}}};throw new Error(`Unsupported speechConfig type: ${typeof n}`)}function ua(n){if("multiSpeakerVoiceConfig"in n)throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");return n}function Vi(n){if(n.functionDeclarations)for(const e of n.functionDeclarations)e.parameters&&(Object.keys(e.parameters).includes("$schema")?e.parametersJsonSchema||(e.parametersJsonSchema=e.parameters,delete e.parameters):e.parameters=Ii(e.parameters)),e.response&&(Object.keys(e.response).includes("$schema")?e.responseJsonSchema||(e.responseJsonSchema=e.response,delete e.response):e.response=Ii(e.response));return n}function Oi(n){if(n==null)throw new Error("tools is required");if(!Array.isArray(n))throw new Error("tools is required and must be an array of Tools");const e=[];for(const t of n)e.push(t);return e}function Yf(n,e,t,i=1){const o=!e.startsWith(`${t}/`)&&e.split("/").length===i;return n.isVertexAI()?e.startsWith("projects/")?e:e.startsWith("locations/")?`projects/${n.getProject()}/${e}`:e.startsWith(`${t}/`)?`projects/${n.getProject()}/locations/${n.getLocation()}/${e}`:o?`projects/${n.getProject()}/locations/${n.getLocation()}/${t}/${e}`:e:o?`${t}/${e}`:e}function Dn(n,e){if(typeof e!="string")throw new Error("name must be a string");return Yf(n,e,"cachedContents")}function oc(n){switch(n){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return n}}function li(n){return ra(n)}function $f(n){return n!=null&&typeof n=="object"&&"name"in n}function Jf(n){return n!=null&&typeof n=="object"&&"video"in n}function Kf(n){return n!=null&&typeof n=="object"&&"uri"in n}function rc(n){var e;let t;if($f(n)&&(t=n.name),!(Kf(n)&&(t=n.uri,t===void 0))&&!(Jf(n)&&(t=(e=n.video)===null||e===void 0?void 0:e.uri,t===void 0))){if(typeof n=="string"&&(t=n),t===void 0)throw new Error("Could not extract file name from the provided input.");if(t.startsWith("https://")){const o=t.split("files/")[1].match(/[a-z0-9]+/);if(o===null)throw new Error(`Could not extract file name from URI ${t}`);t=o[0]}else t.startsWith("files/")&&(t=t.split("files/")[1]);return t}}function sc(n,e){let t;return n.isVertexAI()?t=e?"publishers/google/models":"models":t=e?"models":"tunedModels",t}function ac(n){for(const e of["models","tunedModels","publisherModels"])if(Zf(n,e))return n[e];return[]}function Zf(n,e){return n!==null&&typeof n=="object"&&e in n}function Qf(n,e={}){const t=n,i={name:t.name,description:t.description,parametersJsonSchema:t.inputSchema};return t.outputSchema&&(i.responseJsonSchema=t.outputSchema),e.behavior&&(i.behavior=e.behavior),{functionDeclarations:[i]}}function jf(n,e={}){const t=[],i=new Set;for(const o of n){const r=o.name;if(i.has(r))throw new Error(`Duplicate function name ${r} found in MCP tools. Please ensure function names are unique.`);i.add(r);const l=Qf(o,e);l.functionDeclarations&&t.push(...l.functionDeclarations)}return{functionDeclarations:t}}function lc(n,e){let t;if(typeof e=="string")if(n.isVertexAI())if(e.startsWith("gs://"))t={format:"jsonl",gcsUri:[e]};else if(e.startsWith("bq://"))t={format:"bigquery",bigqueryUri:e};else throw new Error(`Unsupported string source for Vertex AI: ${e}`);else if(e.startsWith("files/"))t={fileName:e};else throw new Error(`Unsupported string source for Gemini API: ${e}`);else if(Array.isArray(e)){if(n.isVertexAI())throw new Error("InlinedRequest[] is not supported in Vertex AI.");t={inlinedRequests:e}}else t=e;const i=[t.gcsUri,t.bigqueryUri].filter(Boolean).length,o=[t.inlinedRequests,t.fileName].filter(Boolean).length;if(n.isVertexAI()){if(o>0||i!==1)throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")}else if(i>0||o!==1)throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");return t}function ed(n){if(typeof n!="string")return n;const e=n;if(e.startsWith("gs://"))return{format:"jsonl",gcsUri:e};if(e.startsWith("bq://"))return{format:"bigquery",bigqueryUri:e};throw new Error(`Unsupported destination: ${e}`)}function uc(n){if(typeof n!="object"||n===null)return{};const e=n,t=e.inlinedResponses;if(typeof t!="object"||t===null)return n;const o=t.inlinedResponses;if(!Array.isArray(o)||o.length===0)return n;let r=!1;for(const l of o){if(typeof l!="object"||l===null)continue;const c=l.response;if(typeof c!="object"||c===null)continue;if(c.embedding!==void 0){r=!0;break}}return r&&(e.inlinedEmbedContentResponses=e.inlinedResponses,delete e.inlinedResponses),n}function Gi(n,e){const t=e;if(!n.isVertexAI()){if(/batches\/[^/]+$/.test(t))return t.split("/").pop();throw new Error(`Invalid batch job name: ${t}.`)}if(/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(t))return t.split("/").pop();if(/^\d+$/.test(t))return t;throw new Error(`Invalid batch job name: ${t}.`)}function cc(n){const e=n;return e==="BATCH_STATE_UNSPECIFIED"?"JOB_STATE_UNSPECIFIED":e==="BATCH_STATE_PENDING"?"JOB_STATE_PENDING":e==="BATCH_STATE_RUNNING"?"JOB_STATE_RUNNING":e==="BATCH_STATE_SUCCEEDED"?"JOB_STATE_SUCCEEDED":e==="BATCH_STATE_FAILED"?"JOB_STATE_FAILED":e==="BATCH_STATE_CANCELLED"?"JOB_STATE_CANCELLED":e==="BATCH_STATE_EXPIRED"?"JOB_STATE_EXPIRED":e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function td(n){const e={},t=s(n,["responsesFile"]);t!=null&&a(e,["fileName"],t);const i=s(n,["inlinedResponses","inlinedResponses"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(l=>zd(l))),a(e,["inlinedResponses"],r)}const o=s(n,["inlinedEmbedContentResponses","inlinedResponses"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(l=>Gd(l))),a(e,["inlinedEmbedContentResponses"],r)}return e}function nd(n){const e={},t=s(n,["predictionsFormat"]);t!=null&&a(e,["format"],t);const i=s(n,["gcsDestination","outputUriPrefix"]);i!=null&&a(e,["gcsUri"],i);const o=s(n,["bigqueryDestination","outputUri"]);return o!=null&&a(e,["bigqueryUri"],o),e}function id(n){const e={},t=s(n,["format"]);t!=null&&a(e,["predictionsFormat"],t);const i=s(n,["gcsUri"]);i!=null&&a(e,["gcsDestination","outputUriPrefix"],i);const o=s(n,["bigqueryUri"]);if(o!=null&&a(e,["bigqueryDestination","outputUri"],o),s(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(s(n,["inlinedResponses"])!==void 0)throw new Error("inlinedResponses parameter is not supported in Vertex AI.");if(s(n,["inlinedEmbedContentResponses"])!==void 0)throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");return e}function Ci(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["metadata","displayName"]);i!=null&&a(e,["displayName"],i);const o=s(n,["metadata","state"]);o!=null&&a(e,["state"],cc(o));const r=s(n,["metadata","createTime"]);r!=null&&a(e,["createTime"],r);const l=s(n,["metadata","endTime"]);l!=null&&a(e,["endTime"],l);const u=s(n,["metadata","updateTime"]);u!=null&&a(e,["updateTime"],u);const c=s(n,["metadata","model"]);c!=null&&a(e,["model"],c);const f=s(n,["metadata","output"]);return f!=null&&a(e,["dest"],td(uc(f))),e}function ls(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["displayName"]);i!=null&&a(e,["displayName"],i);const o=s(n,["state"]);o!=null&&a(e,["state"],cc(o));const r=s(n,["error"]);r!=null&&a(e,["error"],dc(r));const l=s(n,["createTime"]);l!=null&&a(e,["createTime"],l);const u=s(n,["startTime"]);u!=null&&a(e,["startTime"],u);const c=s(n,["endTime"]);c!=null&&a(e,["endTime"],c);const f=s(n,["updateTime"]);f!=null&&a(e,["updateTime"],f);const d=s(n,["model"]);d!=null&&a(e,["model"],d);const h=s(n,["inputConfig"]);h!=null&&a(e,["src"],od(h));const p=s(n,["outputConfig"]);return p!=null&&a(e,["dest"],nd(uc(p))),e}function od(n){const e={},t=s(n,["instancesFormat"]);t!=null&&a(e,["format"],t);const i=s(n,["gcsSource","uris"]);i!=null&&a(e,["gcsUri"],i);const o=s(n,["bigquerySource","inputUri"]);return o!=null&&a(e,["bigqueryUri"],o),e}function rd(n,e){const t={};if(s(e,["format"])!==void 0)throw new Error("format parameter is not supported in Gemini API.");if(s(e,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(s(e,["bigqueryUri"])!==void 0)throw new Error("bigqueryUri parameter is not supported in Gemini API.");const i=s(e,["fileName"]);i!=null&&a(t,["fileName"],i);const o=s(e,["inlinedRequests"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(l=>Hd(n,l))),a(t,["requests","requests"],r)}return t}function sd(n){const e={},t=s(n,["format"]);t!=null&&a(e,["instancesFormat"],t);const i=s(n,["gcsUri"]);i!=null&&a(e,["gcsSource","uris"],i);const o=s(n,["bigqueryUri"]);if(o!=null&&a(e,["bigquerySource","inputUri"],o),s(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(s(n,["inlinedRequests"])!==void 0)throw new Error("inlinedRequests parameter is not supported in Vertex AI.");return e}function ad(n){const e={},t=s(n,["data"]);t!=null&&a(e,["data"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function ld(n){const e={};if(s(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=s(n,["data"]);t!=null&&a(e,["data"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function ud(n,e){const t={},i=s(e,["name"]);return i!=null&&a(t,["_url","name"],Gi(n,i)),t}function cd(n,e){const t={},i=s(e,["name"]);return i!=null&&a(t,["_url","name"],Gi(n,i)),t}function fd(n){const e={},t=s(n,["content"]);t!=null&&a(e,["content"],md(t));const i=s(n,["citationMetadata"]);i!=null&&a(e,["citationMetadata"],dd(i));const o=s(n,["tokenCount"]);o!=null&&a(e,["tokenCount"],o);const r=s(n,["finishReason"]);r!=null&&a(e,["finishReason"],r);const l=s(n,["urlContextMetadata"]);l!=null&&a(e,["urlContextMetadata"],fh(l));const u=s(n,["avgLogprobs"]);u!=null&&a(e,["avgLogprobs"],u);const c=s(n,["groundingMetadata"]);c!=null&&a(e,["groundingMetadata"],c);const f=s(n,["index"]);f!=null&&a(e,["index"],f);const d=s(n,["logprobsResult"]);d!=null&&a(e,["logprobsResult"],d);const h=s(n,["safetyRatings"]);return h!=null&&a(e,["safetyRatings"],h),e}function dd(n){const e={},t=s(n,["citationSources"]);return t!=null&&a(e,["citations"],t),e}function hd(n){const e={},t=s(n,["environment"]);t!=null&&a(e,["environment"],t);const i=s(n,["excludedPredefinedFunctions"]);return i!=null&&a(e,["excludedPredefinedFunctions"],i),e}function pd(n){const e={},t=s(n,["values"]);return t!=null&&a(e,["values"],t),e}function md(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>jd(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function fc(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>eh(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function gd(n,e){const t={},i=s(n,["displayName"]);if(e!==void 0&&i!=null&&a(e,["batch","displayName"],i),s(n,["dest"])!==void 0)throw new Error("dest parameter is not supported in Gemini API.");return t}function _d(n,e){const t={},i=s(n,["displayName"]);e!==void 0&&i!=null&&a(e,["displayName"],i);const o=s(n,["dest"]);return e!==void 0&&o!=null&&a(e,["outputConfig"],id(ed(o))),t}function Er(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["src"]);o!=null&&a(t,["batch","inputConfig"],rd(n,lc(n,o)));const r=s(e,["config"]);return r!=null&&gd(r,t),t}function vd(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["model"],at(n,i));const o=s(e,["src"]);o!=null&&a(t,["inputConfig"],sd(lc(n,o)));const r=s(e,["config"]);return r!=null&&_d(r,t),t}function Td(n,e){const t={},i=s(n,["displayName"]);return e!==void 0&&i!=null&&a(e,["batch","displayName"],i),t}function Cr(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["src"]);o!=null&&a(t,["batch","inputConfig"],Rd(n,o));const r=s(e,["config"]);return r!=null&&Td(r,t),t}function Sd(n,e){const t={},i=s(e,["name"]);return i!=null&&a(t,["_url","name"],Gi(n,i)),t}function xd(n,e){const t={},i=s(e,["name"]);return i!=null&&a(t,["_url","name"],Gi(n,i)),t}function yd(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["name"]);i!=null&&a(e,["name"],i);const o=s(n,["done"]);o!=null&&a(e,["done"],o);const r=s(n,["error"]);return r!=null&&a(e,["error"],ca(r)),e}function Md(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["name"]);i!=null&&a(e,["name"],i);const o=s(n,["done"]);o!=null&&a(e,["done"],o);const r=s(n,["error"]);return r!=null&&a(e,["error"],dc(r)),e}function Ed(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["dynamicThreshold"]);return i!=null&&a(e,["dynamicThreshold"],i),e}function Cd(n,e){const t={},i=s(e,["contents"]);i!=null&&a(t,["requests[]","request","content"],sa(n,i));const o=s(e,["config"]);return o!=null&&a(t,["config"],Ad(o,t)),t}function Ad(n,e){const t={},i=s(n,["taskType"]);e!==void 0&&i!=null&&a(e,["requests[]","taskType"],i);const o=s(n,["title"]);e!==void 0&&o!=null&&a(e,["requests[]","title"],o);const r=s(n,["outputDimensionality"]);if(e!==void 0&&r!=null&&a(e,["requests[]","outputDimensionality"],r),s(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(s(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return t}function Rd(n,e){const t={},i=s(e,["fileName"]);i!=null&&a(t,["file_name"],i);const o=s(e,["inlinedRequests"]);return o!=null&&a(t,["requests"],Cd(n,o)),t}function wd(n){const e={},t=s(n,["fileUri"]);t!=null&&a(e,["fileUri"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function Id(n){const e={};if(s(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=s(n,["fileUri"]);t!=null&&a(e,["fileUri"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function Pd(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function Dd(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function bd(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["allowedFunctionNames"]);return i!=null&&a(e,["allowedFunctionNames"],i),e}function Ud(n){const e={},t=s(n,["behavior"]);t!=null&&a(e,["behavior"],t);const i=s(n,["description"]);i!=null&&a(e,["description"],i);const o=s(n,["name"]);o!=null&&a(e,["name"],o);const r=s(n,["parameters"]);r!=null&&a(e,["parameters"],r);const l=s(n,["parametersJsonSchema"]);l!=null&&a(e,["parametersJsonSchema"],l);const u=s(n,["response"]);u!=null&&a(e,["response"],u);const c=s(n,["responseJsonSchema"]);return c!=null&&a(e,["responseJsonSchema"],c),e}function Nd(n,e,t){const i={},o=s(e,["systemInstruction"]);t!==void 0&&o!=null&&a(t,["systemInstruction"],fc(bt(o)));const r=s(e,["temperature"]);r!=null&&a(i,["temperature"],r);const l=s(e,["topP"]);l!=null&&a(i,["topP"],l);const u=s(e,["topK"]);u!=null&&a(i,["topK"],u);const c=s(e,["candidateCount"]);c!=null&&a(i,["candidateCount"],c);const f=s(e,["maxOutputTokens"]);f!=null&&a(i,["maxOutputTokens"],f);const d=s(e,["stopSequences"]);d!=null&&a(i,["stopSequences"],d);const h=s(e,["responseLogprobs"]);h!=null&&a(i,["responseLogprobs"],h);const p=s(e,["logprobs"]);p!=null&&a(i,["logprobs"],p);const m=s(e,["presencePenalty"]);m!=null&&a(i,["presencePenalty"],m);const S=s(e,["frequencyPenalty"]);S!=null&&a(i,["frequencyPenalty"],S);const x=s(e,["seed"]);x!=null&&a(i,["seed"],x);const T=s(e,["responseMimeType"]);T!=null&&a(i,["responseMimeType"],T);const g=s(e,["responseSchema"]);g!=null&&a(i,["responseSchema"],oh(aa(g)));const w=s(e,["responseJsonSchema"]);if(w!=null&&a(i,["responseJsonSchema"],w),s(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(s(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const A=s(e,["safetySettings"]);if(t!==void 0&&A!=null){let q=A;Array.isArray(q)&&(q=q.map($=>ih($))),a(t,["safetySettings"],q)}const M=s(e,["tools"]);if(t!==void 0&&M!=null){let q=Oi(M);Array.isArray(q)&&(q=q.map($=>ch(Vi($)))),a(t,["tools"],q)}const B=s(e,["toolConfig"]);if(t!==void 0&&B!=null&&a(t,["toolConfig"],uh(B)),s(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const b=s(e,["cachedContent"]);t!==void 0&&b!=null&&a(t,["cachedContent"],Dn(n,b));const N=s(e,["responseModalities"]);N!=null&&a(i,["responseModalities"],N);const V=s(e,["mediaResolution"]);V!=null&&a(i,["mediaResolution"],V);const E=s(e,["speechConfig"]);if(E!=null&&a(i,["speechConfig"],ah(la(E))),s(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const y=s(e,["thinkingConfig"]);y!=null&&a(i,["thinkingConfig"],lh(y));const k=s(e,["imageConfig"]);return k!=null&&a(i,["imageConfig"],Od(k)),i}function Ld(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["candidates"]);if(i!=null){let c=i;Array.isArray(c)&&(c=c.map(f=>fd(f))),a(e,["candidates"],c)}const o=s(n,["modelVersion"]);o!=null&&a(e,["modelVersion"],o);const r=s(n,["promptFeedback"]);r!=null&&a(e,["promptFeedback"],r);const l=s(n,["responseId"]);l!=null&&a(e,["responseId"],l);const u=s(n,["usageMetadata"]);return u!=null&&a(e,["usageMetadata"],u),e}function Fd(n,e){const t={},i=s(e,["name"]);return i!=null&&a(t,["_url","name"],Gi(n,i)),t}function Bd(n,e){const t={},i=s(e,["name"]);return i!=null&&a(t,["_url","name"],Gi(n,i)),t}function kd(n){const e={},t=s(n,["dynamicRetrievalConfig"]);return t!=null&&a(e,["dynamicRetrievalConfig"],Ed(t)),e}function Vd(n){const e={},t=s(n,["timeRangeFilter"]);if(t!=null&&a(e,["timeRangeFilter"],Wd(t)),s(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");return e}function Od(n){const e={},t=s(n,["aspectRatio"]);return t!=null&&a(e,["aspectRatio"],t),e}function Gd(n){const e={},t=s(n,["response"]);t!=null&&a(e,["response"],rh(t));const i=s(n,["error"]);return i!=null&&a(e,["error"],ca(i)),e}function Hd(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["request","model"],at(n,i));const o=s(e,["contents"]);if(o!=null){let l=jt(o);Array.isArray(l)&&(l=l.map(u=>fc(u))),a(t,["request","contents"],l)}const r=s(e,["config"]);return r!=null&&a(t,["request","generationConfig"],Nd(n,r,t)),t}function zd(n){const e={},t=s(n,["response"]);t!=null&&a(e,["response"],Ld(t));const i=s(n,["error"]);return i!=null&&a(e,["error"],ca(i)),e}function Wd(n){const e={},t=s(n,["startTime"]);t!=null&&a(e,["startTime"],t);const i=s(n,["endTime"]);return i!=null&&a(e,["endTime"],i),e}function ca(n){const e={},t=s(n,["details"]);t!=null&&a(e,["details"],t);const i=s(n,["code"]);i!=null&&a(e,["code"],i);const o=s(n,["message"]);return o!=null&&a(e,["message"],o),e}function dc(n){const e={},t=s(n,["details"]);t!=null&&a(e,["details"],t);const i=s(n,["code"]);i!=null&&a(e,["code"],i);const o=s(n,["message"]);return o!=null&&a(e,["message"],o),e}function qd(n){const e={},t=s(n,["latitude"]);t!=null&&a(e,["latitude"],t);const i=s(n,["longitude"]);return i!=null&&a(e,["longitude"],i),e}function Xd(n,e){const t={},i=s(n,["pageSize"]);e!==void 0&&i!=null&&a(e,["_query","pageSize"],i);const o=s(n,["pageToken"]);if(e!==void 0&&o!=null&&a(e,["_query","pageToken"],o),s(n,["filter"])!==void 0)throw new Error("filter parameter is not supported in Gemini API.");return t}function Yd(n,e){const t={},i=s(n,["pageSize"]);e!==void 0&&i!=null&&a(e,["_query","pageSize"],i);const o=s(n,["pageToken"]);e!==void 0&&o!=null&&a(e,["_query","pageToken"],o);const r=s(n,["filter"]);return e!==void 0&&r!=null&&a(e,["_query","filter"],r),t}function $d(n){const e={},t=s(n,["config"]);return t!=null&&Xd(t,e),e}function Jd(n){const e={},t=s(n,["config"]);return t!=null&&Yd(t,e),e}function Kd(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["nextPageToken"]);i!=null&&a(e,["nextPageToken"],i);const o=s(n,["operations"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(l=>Ci(l))),a(e,["batchJobs"],r)}return e}function Zd(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["nextPageToken"]);i!=null&&a(e,["nextPageToken"],i);const o=s(n,["batchPredictionJobs"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(l=>ls(l))),a(e,["batchJobs"],r)}return e}function Qd(n){const e={},t=s(n,["speakerVoiceConfigs"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>sh(o))),a(e,["speakerVoiceConfigs"],i)}return e}function jd(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],ph(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],ad(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],wd(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],Pd(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function eh(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],mh(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],ld(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],Id(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],Dd(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function th(n){const e={},t=s(n,["voiceName"]);return t!=null&&a(e,["voiceName"],t),e}function nh(n){const e={},t=s(n,["latLng"]);t!=null&&a(e,["latLng"],qd(t));const i=s(n,["languageCode"]);return i!=null&&a(e,["languageCode"],i),e}function ih(n){const e={};if(s(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const t=s(n,["category"]);t!=null&&a(e,["category"],t);const i=s(n,["threshold"]);return i!=null&&a(e,["threshold"],i),e}function oh(n){const e={},t=s(n,["anyOf"]);t!=null&&a(e,["anyOf"],t);const i=s(n,["default"]);i!=null&&a(e,["default"],i);const o=s(n,["description"]);o!=null&&a(e,["description"],o);const r=s(n,["enum"]);r!=null&&a(e,["enum"],r);const l=s(n,["example"]);l!=null&&a(e,["example"],l);const u=s(n,["format"]);u!=null&&a(e,["format"],u);const c=s(n,["items"]);c!=null&&a(e,["items"],c);const f=s(n,["maxItems"]);f!=null&&a(e,["maxItems"],f);const d=s(n,["maxLength"]);d!=null&&a(e,["maxLength"],d);const h=s(n,["maxProperties"]);h!=null&&a(e,["maxProperties"],h);const p=s(n,["maximum"]);p!=null&&a(e,["maximum"],p);const m=s(n,["minItems"]);m!=null&&a(e,["minItems"],m);const S=s(n,["minLength"]);S!=null&&a(e,["minLength"],S);const x=s(n,["minProperties"]);x!=null&&a(e,["minProperties"],x);const T=s(n,["minimum"]);T!=null&&a(e,["minimum"],T);const g=s(n,["nullable"]);g!=null&&a(e,["nullable"],g);const w=s(n,["pattern"]);w!=null&&a(e,["pattern"],w);const A=s(n,["properties"]);A!=null&&a(e,["properties"],A);const M=s(n,["propertyOrdering"]);M!=null&&a(e,["propertyOrdering"],M);const B=s(n,["required"]);B!=null&&a(e,["required"],B);const b=s(n,["title"]);b!=null&&a(e,["title"],b);const N=s(n,["type"]);return N!=null&&a(e,["type"],N),e}function rh(n){const e={},t=s(n,["embedding"]);t!=null&&a(e,["embedding"],pd(t));const i=s(n,["tokenCount"]);return i!=null&&a(e,["tokenCount"],i),e}function sh(n){const e={},t=s(n,["speaker"]);t!=null&&a(e,["speaker"],t);const i=s(n,["voiceConfig"]);return i!=null&&a(e,["voiceConfig"],hc(i)),e}function ah(n){const e={},t=s(n,["voiceConfig"]);t!=null&&a(e,["voiceConfig"],hc(t));const i=s(n,["multiSpeakerVoiceConfig"]);i!=null&&a(e,["multiSpeakerVoiceConfig"],Qd(i));const o=s(n,["languageCode"]);return o!=null&&a(e,["languageCode"],o),e}function lh(n){const e={},t=s(n,["includeThoughts"]);t!=null&&a(e,["includeThoughts"],t);const i=s(n,["thinkingBudget"]);return i!=null&&a(e,["thinkingBudget"],i),e}function uh(n){const e={},t=s(n,["functionCallingConfig"]);t!=null&&a(e,["functionCallingConfig"],bd(t));const i=s(n,["retrievalConfig"]);return i!=null&&a(e,["retrievalConfig"],nh(i)),e}function ch(n){const e={},t=s(n,["functionDeclarations"]);if(t!=null){let c=t;Array.isArray(c)&&(c=c.map(f=>Ud(f))),a(e,["functionDeclarations"],c)}if(s(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=s(n,["googleSearch"]);i!=null&&a(e,["googleSearch"],Vd(i));const o=s(n,["googleSearchRetrieval"]);if(o!=null&&a(e,["googleSearchRetrieval"],kd(o)),s(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");if(s(n,["googleMaps"])!==void 0)throw new Error("googleMaps parameter is not supported in Gemini API.");s(n,["urlContext"])!=null&&a(e,["urlContext"],dh());const l=s(n,["computerUse"]);l!=null&&a(e,["computerUse"],hd(l));const u=s(n,["codeExecution"]);return u!=null&&a(e,["codeExecution"],u),e}function fh(n){const e={},t=s(n,["urlMetadata"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>hh(o))),a(e,["urlMetadata"],i)}return e}function dh(){return{}}function hh(n){const e={},t=s(n,["retrievedUrl"]);t!=null&&a(e,["retrievedUrl"],t);const i=s(n,["urlRetrievalStatus"]);return i!=null&&a(e,["urlRetrievalStatus"],i),e}function ph(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function mh(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function hc(n){const e={},t=s(n,["prebuiltVoiceConfig"]);return t!=null&&a(e,["prebuiltVoiceConfig"],th(t)),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var ri;(function(n){n.PAGED_ITEM_BATCH_JOBS="batchJobs",n.PAGED_ITEM_MODELS="models",n.PAGED_ITEM_TUNING_JOBS="tuningJobs",n.PAGED_ITEM_FILES="files",n.PAGED_ITEM_CACHED_CONTENTS="cachedContents"})(ri||(ri={}));class co{constructor(e,t,i,o){this.pageInternal=[],this.paramsInternal={},this.requestInternal=t,this.init(e,i,o)}init(e,t,i){var o,r;this.nameInternal=e,this.pageInternal=t[this.nameInternal]||[],this.sdkHttpResponseInternal=t==null?void 0:t.sdkHttpResponse,this.idxInternal=0;let l={config:{}};!i||Object.keys(i).length===0?l={config:{}}:typeof i=="object"?l=Object.assign({},i):l=i,l.config&&(l.config.pageToken=t.nextPageToken),this.paramsInternal=l,this.pageInternalSize=(r=(o=l.config)===null||o===void 0?void 0:o.pageSize)!==null&&r!==void 0?r:this.pageInternal.length}initNextPage(e){this.init(this.nameInternal,e,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get sdkHttpResponse(){return this.sdkHttpResponseInternal}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(e){return this.pageInternal[e]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const e=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:e,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const e=await this.requestInternal(this.params);return this.initNextPage(e),this.page}hasNextPage(){var e;return((e=this.params.config)===null||e===void 0?void 0:e.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gh extends ai{constructor(e){super(),this.apiClient=e,this.create=async t=>{var i,o;if(this.apiClient.isVertexAI())return t.config=this.formatDestination(t.src,t.config),this.createInternal(t);const r=t.src;if(!(Array.isArray(t.src)||r.inlinedRequests!==void 0))return this.createInternal(t);const u=this.createInlinedGenerateContentRequest(t),c=u.path,f=u.body,d=Er(this.apiClient,t)._query||{};return this.apiClient.request({path:c,queryParams:d,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()).then(p=>Ci(p))},this.createEmbeddings=async t=>{var i,o;if(console.warn("batches.createEmbeddings() is experimental and may change without notice."),this.apiClient.isVertexAI())throw new Error("Vertex AI does not support batches.createEmbeddings.");if(!(t.src.inlinedRequests!==void 0))return this.createEmbeddingsInternal(t);const u=this.createInlinedEmbedContentRequest(t),c=u.path,f=u.body,d=Cr(this.apiClient,t)._query||{};return this.apiClient.request({path:c,queryParams:d,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()).then(p=>Ci(p))},this.list=async(t={})=>new co(ri.PAGED_ITEM_BATCH_JOBS,i=>this.listInternal(i),await this.listInternal(t),t)}createInlinedGenerateContentRequest(e){const t=Er(this.apiClient,e),i=t._url,o=Ae("{model}:batchGenerateContent",i),u=t.batch.inputConfig.requests,c=u.requests,f=[];for(const d of c){const h=Object.assign({},d);if(h.systemInstruction){const p=h.systemInstruction;delete h.systemInstruction;const m=h.request;m.systemInstruction=p,h.request=m}f.push(h)}return u.requests=f,delete t.config,delete t._url,delete t._query,{path:o,body:t}}createInlinedEmbedContentRequest(e){const t=Cr(this.apiClient,e),i=t._url,o=Ae("{model}:asyncBatchEmbedContent",i),u=t.batch.inputConfig.requests,c=u.requests,f=[];delete u.config;for(const d of c){const h=Object.assign({},d),p=h.request;for(const m in h)m!=="request"&&(p[m]=h[m],delete h[m]);f.push(h)}return u.requests=f,delete t.config,delete t._url,delete t._query,{path:o,body:t}}getGcsUri(e){if(typeof e=="string")return e.startsWith("gs://")?e:void 0;if(!Array.isArray(e)&&e.gcsUri&&e.gcsUri.length>0)return e.gcsUri[0]}getBigqueryUri(e){if(typeof e=="string")return e.startsWith("bq://")?e:void 0;if(!Array.isArray(e))return e.bigqueryUri}formatDestination(e,t){const i=t?Object.assign({},t):{},o=Date.now().toString();if(i.displayName||(i.displayName=`genaiBatchJob_${o}`),i.dest===void 0){const r=this.getGcsUri(e),l=this.getBigqueryUri(e);if(r)r.endsWith(".jsonl")?i.dest=`${r.slice(0,-6)}/dest`:i.dest=`${r}_dest_${o}`;else if(l)i.dest=`${l}_dest_${o}`;else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")}return i}async createInternal(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=vd(this.apiClient,e);return u=Ae("batchPredictionJobs",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),l.then(d=>ls(d))}else{const f=Er(this.apiClient,e);return u=Ae("{model}:batchGenerateContent",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json()),l.then(d=>Ci(d))}}async createEmbeddingsInternal(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const u=Cr(this.apiClient,e);return r=Ae("{model}:asyncBatchEmbedContent",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>Ci(c))}}async get(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=Bd(this.apiClient,e);return u=Ae("batchPredictionJobs/{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),l.then(d=>ls(d))}else{const f=Fd(this.apiClient,e);return u=Ae("batches/{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json()),l.then(d=>Ci(d))}}async cancel(e){var t,i,o,r;let l="",u={};if(this.apiClient.isVertexAI()){const c=cd(this.apiClient,e);l=Ae("batchPredictionJobs/{name}:cancel",c._url),u=c._query,delete c._url,delete c._query,await this.apiClient.request({path:l,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal})}else{const c=ud(this.apiClient,e);l=Ae("batches/{name}:cancel",c._url),u=c._query,delete c._url,delete c._query,await this.apiClient.request({path:l,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal})}}async listInternal(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=Jd(e);return u=Ae("batchPredictionJobs",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=Zd(d),p=new wl;return Object.assign(p,h),p})}else{const f=$d(e);return u=Ae("batches",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=Kd(d),p=new wl;return Object.assign(p,h),p})}}async delete(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=xd(this.apiClient,e);return u=Ae("batchPredictionJobs/{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>Md(d))}else{const f=Sd(this.apiClient,e);return u=Ae("batches/{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>yd(d))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function _h(n){const e={},t=s(n,["apiKeyString"]);return t!=null&&a(e,["apiKeyString"],t),e}function vh(n){const e={},t=s(n,["apiKeyConfig"]);t!=null&&a(e,["apiKeyConfig"],_h(t));const i=s(n,["authType"]);i!=null&&a(e,["authType"],i);const o=s(n,["googleServiceAccountConfig"]);o!=null&&a(e,["googleServiceAccountConfig"],o);const r=s(n,["httpBasicAuthConfig"]);r!=null&&a(e,["httpBasicAuthConfig"],r);const l=s(n,["oauthConfig"]);l!=null&&a(e,["oauthConfig"],l);const u=s(n,["oidcConfig"]);return u!=null&&a(e,["oidcConfig"],u),e}function Th(n){const e={};if(s(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=s(n,["data"]);t!=null&&a(e,["data"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function Sh(n){const e={},t=s(n,["displayName"]);t!=null&&a(e,["displayName"],t);const i=s(n,["data"]);i!=null&&a(e,["data"],i);const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function Jo(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["displayName"]);i!=null&&a(e,["displayName"],i);const o=s(n,["model"]);o!=null&&a(e,["model"],o);const r=s(n,["createTime"]);r!=null&&a(e,["createTime"],r);const l=s(n,["updateTime"]);l!=null&&a(e,["updateTime"],l);const u=s(n,["expireTime"]);u!=null&&a(e,["expireTime"],u);const c=s(n,["usageMetadata"]);return c!=null&&a(e,["usageMetadata"],c),e}function Ko(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["displayName"]);i!=null&&a(e,["displayName"],i);const o=s(n,["model"]);o!=null&&a(e,["model"],o);const r=s(n,["createTime"]);r!=null&&a(e,["createTime"],r);const l=s(n,["updateTime"]);l!=null&&a(e,["updateTime"],l);const u=s(n,["expireTime"]);u!=null&&a(e,["expireTime"],u);const c=s(n,["usageMetadata"]);return c!=null&&a(e,["usageMetadata"],c),e}function xh(n){const e={},t=s(n,["environment"]);t!=null&&a(e,["environment"],t);const i=s(n,["excludedPredefinedFunctions"]);return i!=null&&a(e,["excludedPredefinedFunctions"],i),e}function yh(n){const e={},t=s(n,["environment"]);t!=null&&a(e,["environment"],t);const i=s(n,["excludedPredefinedFunctions"]);return i!=null&&a(e,["excludedPredefinedFunctions"],i),e}function bl(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>rp(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function Ul(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>sp(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function Mh(n,e){const t={},i=s(n,["ttl"]);e!==void 0&&i!=null&&a(e,["ttl"],i);const o=s(n,["expireTime"]);e!==void 0&&o!=null&&a(e,["expireTime"],o);const r=s(n,["displayName"]);e!==void 0&&r!=null&&a(e,["displayName"],r);const l=s(n,["contents"]);if(e!==void 0&&l!=null){let d=jt(l);Array.isArray(d)&&(d=d.map(h=>bl(h))),a(e,["contents"],d)}const u=s(n,["systemInstruction"]);e!==void 0&&u!=null&&a(e,["systemInstruction"],bl(bt(u)));const c=s(n,["tools"]);if(e!==void 0&&c!=null){let d=c;Array.isArray(d)&&(d=d.map(h=>fp(h))),a(e,["tools"],d)}const f=s(n,["toolConfig"]);if(e!==void 0&&f!=null&&a(e,["toolConfig"],up(f)),s(n,["kmsKeyName"])!==void 0)throw new Error("kmsKeyName parameter is not supported in Gemini API.");return t}function Eh(n,e){const t={},i=s(n,["ttl"]);e!==void 0&&i!=null&&a(e,["ttl"],i);const o=s(n,["expireTime"]);e!==void 0&&o!=null&&a(e,["expireTime"],o);const r=s(n,["displayName"]);e!==void 0&&r!=null&&a(e,["displayName"],r);const l=s(n,["contents"]);if(e!==void 0&&l!=null){let h=jt(l);Array.isArray(h)&&(h=h.map(p=>Ul(p))),a(e,["contents"],h)}const u=s(n,["systemInstruction"]);e!==void 0&&u!=null&&a(e,["systemInstruction"],Ul(bt(u)));const c=s(n,["tools"]);if(e!==void 0&&c!=null){let h=c;Array.isArray(h)&&(h=h.map(p=>dp(p))),a(e,["tools"],h)}const f=s(n,["toolConfig"]);e!==void 0&&f!=null&&a(e,["toolConfig"],cp(f));const d=s(n,["kmsKeyName"]);return e!==void 0&&d!=null&&a(e,["encryption_spec","kmsKeyName"],d),t}function Ch(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["model"],ju(n,i));const o=s(e,["config"]);return o!=null&&Mh(o,t),t}function Ah(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["model"],ju(n,i));const o=s(e,["config"]);return o!=null&&Eh(o,t),t}function Rh(n,e){const t={},i=s(e,["name"]);return i!=null&&a(t,["_url","name"],Dn(n,i)),t}function wh(n,e){const t={},i=s(e,["name"]);return i!=null&&a(t,["_url","name"],Dn(n,i)),t}function Ih(n){const e={},t=s(n,["sdkHttpResponse"]);return t!=null&&a(e,["sdkHttpResponse"],t),e}function Ph(n){const e={},t=s(n,["sdkHttpResponse"]);return t!=null&&a(e,["sdkHttpResponse"],t),e}function Dh(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["dynamicThreshold"]);return i!=null&&a(e,["dynamicThreshold"],i),e}function bh(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["dynamicThreshold"]);return i!=null&&a(e,["dynamicThreshold"],i),e}function Uh(n){const e={},t=s(n,["excludeDomains"]);return t!=null&&a(e,["excludeDomains"],t),e}function Nh(n){const e={};if(s(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=s(n,["fileUri"]);t!=null&&a(e,["fileUri"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function Lh(n){const e={},t=s(n,["displayName"]);t!=null&&a(e,["displayName"],t);const i=s(n,["fileUri"]);i!=null&&a(e,["fileUri"],i);const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function Fh(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function Bh(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function kh(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["allowedFunctionNames"]);return i!=null&&a(e,["allowedFunctionNames"],i),e}function Vh(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["allowedFunctionNames"]);return i!=null&&a(e,["allowedFunctionNames"],i),e}function Oh(n){const e={},t=s(n,["behavior"]);t!=null&&a(e,["behavior"],t);const i=s(n,["description"]);i!=null&&a(e,["description"],i);const o=s(n,["name"]);o!=null&&a(e,["name"],o);const r=s(n,["parameters"]);r!=null&&a(e,["parameters"],r);const l=s(n,["parametersJsonSchema"]);l!=null&&a(e,["parametersJsonSchema"],l);const u=s(n,["response"]);u!=null&&a(e,["response"],u);const c=s(n,["responseJsonSchema"]);return c!=null&&a(e,["responseJsonSchema"],c),e}function Gh(n){const e={};if(s(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const t=s(n,["description"]);t!=null&&a(e,["description"],t);const i=s(n,["name"]);i!=null&&a(e,["name"],i);const o=s(n,["parameters"]);o!=null&&a(e,["parameters"],o);const r=s(n,["parametersJsonSchema"]);r!=null&&a(e,["parametersJsonSchema"],r);const l=s(n,["response"]);l!=null&&a(e,["response"],l);const u=s(n,["responseJsonSchema"]);return u!=null&&a(e,["responseJsonSchema"],u),e}function Hh(n,e){const t={},i=s(e,["name"]);return i!=null&&a(t,["_url","name"],Dn(n,i)),t}function zh(n,e){const t={},i=s(e,["name"]);return i!=null&&a(t,["_url","name"],Dn(n,i)),t}function Wh(n){const e={},t=s(n,["authConfig"]);return t!=null&&a(e,["authConfig"],vh(t)),e}function qh(n){const e={},t=s(n,["dynamicRetrievalConfig"]);return t!=null&&a(e,["dynamicRetrievalConfig"],Dh(t)),e}function Xh(n){const e={},t=s(n,["dynamicRetrievalConfig"]);return t!=null&&a(e,["dynamicRetrievalConfig"],bh(t)),e}function Yh(n){const e={},t=s(n,["timeRangeFilter"]);if(t!=null&&a(e,["timeRangeFilter"],Jh(t)),s(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");return e}function $h(n){const e={},t=s(n,["timeRangeFilter"]);t!=null&&a(e,["timeRangeFilter"],Kh(t));const i=s(n,["excludeDomains"]);return i!=null&&a(e,["excludeDomains"],i),e}function Jh(n){const e={},t=s(n,["startTime"]);t!=null&&a(e,["startTime"],t);const i=s(n,["endTime"]);return i!=null&&a(e,["endTime"],i),e}function Kh(n){const e={},t=s(n,["startTime"]);t!=null&&a(e,["startTime"],t);const i=s(n,["endTime"]);return i!=null&&a(e,["endTime"],i),e}function Zh(n){const e={},t=s(n,["latitude"]);t!=null&&a(e,["latitude"],t);const i=s(n,["longitude"]);return i!=null&&a(e,["longitude"],i),e}function Qh(n){const e={},t=s(n,["latitude"]);t!=null&&a(e,["latitude"],t);const i=s(n,["longitude"]);return i!=null&&a(e,["longitude"],i),e}function jh(n,e){const t={},i=s(n,["pageSize"]);e!==void 0&&i!=null&&a(e,["_query","pageSize"],i);const o=s(n,["pageToken"]);return e!==void 0&&o!=null&&a(e,["_query","pageToken"],o),t}function ep(n,e){const t={},i=s(n,["pageSize"]);e!==void 0&&i!=null&&a(e,["_query","pageSize"],i);const o=s(n,["pageToken"]);return e!==void 0&&o!=null&&a(e,["_query","pageToken"],o),t}function tp(n){const e={},t=s(n,["config"]);return t!=null&&jh(t,e),e}function np(n){const e={},t=s(n,["config"]);return t!=null&&ep(t,e),e}function ip(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["nextPageToken"]);i!=null&&a(e,["nextPageToken"],i);const o=s(n,["cachedContents"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(l=>Jo(l))),a(e,["cachedContents"],r)}return e}function op(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["nextPageToken"]);i!=null&&a(e,["nextPageToken"],i);const o=s(n,["cachedContents"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(l=>Ko(l))),a(e,["cachedContents"],r)}return e}function rp(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],Tp(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],Th(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],Nh(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],Fh(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function sp(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],Sp(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],Sh(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],Lh(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],Bh(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function ap(n){const e={},t=s(n,["latLng"]);t!=null&&a(e,["latLng"],Zh(t));const i=s(n,["languageCode"]);return i!=null&&a(e,["languageCode"],i),e}function lp(n){const e={},t=s(n,["latLng"]);t!=null&&a(e,["latLng"],Qh(t));const i=s(n,["languageCode"]);return i!=null&&a(e,["languageCode"],i),e}function up(n){const e={},t=s(n,["functionCallingConfig"]);t!=null&&a(e,["functionCallingConfig"],kh(t));const i=s(n,["retrievalConfig"]);return i!=null&&a(e,["retrievalConfig"],ap(i)),e}function cp(n){const e={},t=s(n,["functionCallingConfig"]);t!=null&&a(e,["functionCallingConfig"],Vh(t));const i=s(n,["retrievalConfig"]);return i!=null&&a(e,["retrievalConfig"],lp(i)),e}function fp(n){const e={},t=s(n,["functionDeclarations"]);if(t!=null){let c=t;Array.isArray(c)&&(c=c.map(f=>Oh(f))),a(e,["functionDeclarations"],c)}if(s(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=s(n,["googleSearch"]);i!=null&&a(e,["googleSearch"],Yh(i));const o=s(n,["googleSearchRetrieval"]);if(o!=null&&a(e,["googleSearchRetrieval"],qh(o)),s(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");if(s(n,["googleMaps"])!==void 0)throw new Error("googleMaps parameter is not supported in Gemini API.");s(n,["urlContext"])!=null&&a(e,["urlContext"],_p());const l=s(n,["computerUse"]);l!=null&&a(e,["computerUse"],xh(l));const u=s(n,["codeExecution"]);return u!=null&&a(e,["codeExecution"],u),e}function dp(n){const e={},t=s(n,["functionDeclarations"]);if(t!=null){let h=t;Array.isArray(h)&&(h=h.map(p=>Gh(p))),a(e,["functionDeclarations"],h)}const i=s(n,["retrieval"]);i!=null&&a(e,["retrieval"],i);const o=s(n,["googleSearch"]);o!=null&&a(e,["googleSearch"],$h(o));const r=s(n,["googleSearchRetrieval"]);r!=null&&a(e,["googleSearchRetrieval"],Xh(r));const l=s(n,["enterpriseWebSearch"]);l!=null&&a(e,["enterpriseWebSearch"],Uh(l));const u=s(n,["googleMaps"]);u!=null&&a(e,["googleMaps"],Wh(u)),s(n,["urlContext"])!=null&&a(e,["urlContext"],vp());const f=s(n,["computerUse"]);f!=null&&a(e,["computerUse"],yh(f));const d=s(n,["codeExecution"]);return d!=null&&a(e,["codeExecution"],d),e}function hp(n,e){const t={},i=s(n,["ttl"]);e!==void 0&&i!=null&&a(e,["ttl"],i);const o=s(n,["expireTime"]);return e!==void 0&&o!=null&&a(e,["expireTime"],o),t}function pp(n,e){const t={},i=s(n,["ttl"]);e!==void 0&&i!=null&&a(e,["ttl"],i);const o=s(n,["expireTime"]);return e!==void 0&&o!=null&&a(e,["expireTime"],o),t}function mp(n,e){const t={},i=s(e,["name"]);i!=null&&a(t,["_url","name"],Dn(n,i));const o=s(e,["config"]);return o!=null&&hp(o,t),t}function gp(n,e){const t={},i=s(e,["name"]);i!=null&&a(t,["_url","name"],Dn(n,i));const o=s(e,["config"]);return o!=null&&pp(o,t),t}function _p(){return{}}function vp(){return{}}function Tp(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function Sp(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class xp extends ai{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new co(ri.PAGED_ITEM_CACHED_CONTENTS,i=>this.listInternal(i),await this.listInternal(t),t)}async create(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=Ah(this.apiClient,e);return u=Ae("cachedContents",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),l.then(d=>Ko(d))}else{const f=Ch(this.apiClient,e);return u=Ae("cachedContents",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json()),l.then(d=>Jo(d))}}async get(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=zh(this.apiClient,e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),l.then(d=>Ko(d))}else{const f=Hh(this.apiClient,e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json()),l.then(d=>Jo(d))}}async delete(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=wh(this.apiClient,e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=Ph(d),p=new Al;return Object.assign(p,h),p})}else{const f=Rh(this.apiClient,e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=Ih(d),p=new Al;return Object.assign(p,h),p})}}async update(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=gp(this.apiClient,e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),l.then(d=>Ko(d))}else{const f=mp(this.apiClient,e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json()),l.then(d=>Jo(d))}}async listInternal(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=np(e);return u=Ae("cachedContents",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=op(d),p=new Rl;return Object.assign(p,h),p})}else{const f=tp(e);return u=Ae("cachedContents",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=ip(d),p=new Rl;return Object.assign(p,h),p})}}}function Nl(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function gt(n){return this instanceof gt?(this.v=n,this):new gt(n)}function Pi(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),o,r=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",l),o[Symbol.asyncIterator]=function(){return this},o;function l(m){return function(S){return Promise.resolve(S).then(m,h)}}function u(m,S){i[m]&&(o[m]=function(x){return new Promise(function(T,g){r.push([m,x,T,g])>1||c(m,x)})},S&&(o[m]=S(o[m])))}function c(m,S){try{f(i[m](S))}catch(x){p(r[0][3],x)}}function f(m){m.value instanceof gt?Promise.resolve(m.value.v).then(d,h):p(r[0][2],m)}function d(m){c("next",m)}function h(m){c("throw",m)}function p(m,S){m(S),r.shift(),r.length&&c(r[0][0],r[0][1])}}function io(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Nl=="function"?Nl(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(r){t[r]=n[r]&&function(l){return new Promise(function(u,c){l=n[r](l),o(u,c,l.done,l.value)})}}function o(r,l,u,c){Promise.resolve(c).then(function(f){r({value:f,done:u})},l)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function yp(n){var e;if(n.candidates==null||n.candidates.length===0)return!1;const t=(e=n.candidates[0])===null||e===void 0?void 0:e.content;return t===void 0?!1:pc(t)}function pc(n){if(n.parts===void 0||n.parts.length===0)return!1;for(const e of n.parts)if(e===void 0||Object.keys(e).length===0)return!1;return!0}function Mp(n){if(n.length!==0){for(const e of n)if(e.role!=="user"&&e.role!=="model")throw new Error(`Role must be user or model, but got ${e.role}.`)}}function Ll(n){if(n===void 0||n.length===0)return[];const e=[],t=n.length;let i=0;for(;i<t;)if(n[i].role==="user")e.push(n[i]),i++;else{const o=[];let r=!0;for(;i<t&&n[i].role==="model";)o.push(n[i]),r&&!pc(n[i])&&(r=!1),i++;r?e.push(...o):e.pop()}return e}class Ep{constructor(e,t){this.modelsModule=e,this.apiClient=t}create(e){return new Cp(this.apiClient,this.modelsModule,e.model,e.config,structuredClone(e.history))}}class Cp{constructor(e,t,i,o={},r=[]){this.apiClient=e,this.modelsModule=t,this.model=i,this.config=o,this.history=r,this.sendPromise=Promise.resolve(),Mp(r)}async sendMessage(e){var t;await this.sendPromise;const i=bt(e.message),o=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(i),config:(t=e.config)!==null&&t!==void 0?t:this.config});return this.sendPromise=(async()=>{var r,l,u;const c=await o,f=(l=(r=c.candidates)===null||r===void 0?void 0:r[0])===null||l===void 0?void 0:l.content,d=c.automaticFunctionCallingHistory,h=this.getHistory(!0).length;let p=[];d!=null&&(p=(u=d.slice(h))!==null&&u!==void 0?u:[]);const m=f?[f]:[];this.recordHistory(i,m,p)})(),await this.sendPromise.catch(()=>{this.sendPromise=Promise.resolve()}),o}async sendMessageStream(e){var t;await this.sendPromise;const i=bt(e.message),o=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(i),config:(t=e.config)!==null&&t!==void 0?t:this.config});this.sendPromise=o.then(()=>{}).catch(()=>{});const r=await o;return this.processStreamResponse(r,i)}getHistory(e=!1){const t=e?Ll(this.history):this.history;return structuredClone(t)}processStreamResponse(e,t){var i,o;return Pi(this,arguments,function*(){var l,u,c,f;const d=[];try{for(var h=!0,p=io(e),m;m=yield gt(p.next()),l=m.done,!l;h=!0){f=m.value,h=!1;const S=f;if(yp(S)){const x=(o=(i=S.candidates)===null||i===void 0?void 0:i[0])===null||o===void 0?void 0:o.content;x!==void 0&&d.push(x)}yield yield gt(S)}}catch(S){u={error:S}}finally{try{!h&&!l&&(c=p.return)&&(yield gt(c.call(p)))}finally{if(u)throw u.error}}this.recordHistory(t,d)})}recordHistory(e,t,i){let o=[];t.length>0&&t.every(r=>r.role!==void 0)?o=t:o.push({role:"model",parts:[]}),i&&i.length>0?this.history.push(...Ll(i)):this.history.push(e),this.history.push(...o)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class hr extends Error{constructor(e){super(e.message),this.name="ApiError",this.status=e.status,Object.setPrototypeOf(this,hr.prototype)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ap(n){const e={},t=s(n,["file"]);return t!=null&&a(e,["file"],bp(t)),e}function Rp(n){const e={},t=s(n,["sdkHttpResponse"]);return t!=null&&a(e,["sdkHttpResponse"],t),e}function wp(n){const e={},t=s(n,["name"]);return t!=null&&a(e,["_url","file"],rc(t)),e}function Ip(n){const e={},t=s(n,["sdkHttpResponse"]);return t!=null&&a(e,["sdkHttpResponse"],t),e}function us(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["displayName"]);i!=null&&a(e,["displayName"],i);const o=s(n,["mimeType"]);o!=null&&a(e,["mimeType"],o);const r=s(n,["sizeBytes"]);r!=null&&a(e,["sizeBytes"],r);const l=s(n,["createTime"]);l!=null&&a(e,["createTime"],l);const u=s(n,["expirationTime"]);u!=null&&a(e,["expirationTime"],u);const c=s(n,["updateTime"]);c!=null&&a(e,["updateTime"],c);const f=s(n,["sha256Hash"]);f!=null&&a(e,["sha256Hash"],f);const d=s(n,["uri"]);d!=null&&a(e,["uri"],d);const h=s(n,["downloadUri"]);h!=null&&a(e,["downloadUri"],h);const p=s(n,["state"]);p!=null&&a(e,["state"],p);const m=s(n,["source"]);m!=null&&a(e,["source"],m);const S=s(n,["videoMetadata"]);S!=null&&a(e,["videoMetadata"],S);const x=s(n,["error"]);return x!=null&&a(e,["error"],Pp(x)),e}function Pp(n){const e={},t=s(n,["details"]);t!=null&&a(e,["details"],t);const i=s(n,["message"]);i!=null&&a(e,["message"],i);const o=s(n,["code"]);return o!=null&&a(e,["code"],o),e}function Dp(n){const e={},t=s(n,["details"]);t!=null&&a(e,["details"],t);const i=s(n,["message"]);i!=null&&a(e,["message"],i);const o=s(n,["code"]);return o!=null&&a(e,["code"],o),e}function bp(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["displayName"]);i!=null&&a(e,["displayName"],i);const o=s(n,["mimeType"]);o!=null&&a(e,["mimeType"],o);const r=s(n,["sizeBytes"]);r!=null&&a(e,["sizeBytes"],r);const l=s(n,["createTime"]);l!=null&&a(e,["createTime"],l);const u=s(n,["expirationTime"]);u!=null&&a(e,["expirationTime"],u);const c=s(n,["updateTime"]);c!=null&&a(e,["updateTime"],c);const f=s(n,["sha256Hash"]);f!=null&&a(e,["sha256Hash"],f);const d=s(n,["uri"]);d!=null&&a(e,["uri"],d);const h=s(n,["downloadUri"]);h!=null&&a(e,["downloadUri"],h);const p=s(n,["state"]);p!=null&&a(e,["state"],p);const m=s(n,["source"]);m!=null&&a(e,["source"],m);const S=s(n,["videoMetadata"]);S!=null&&a(e,["videoMetadata"],S);const x=s(n,["error"]);return x!=null&&a(e,["error"],Dp(x)),e}function Up(n){const e={},t=s(n,["name"]);return t!=null&&a(e,["_url","file"],rc(t)),e}function Np(n,e){const t={},i=s(n,["pageSize"]);e!==void 0&&i!=null&&a(e,["_query","pageSize"],i);const o=s(n,["pageToken"]);return e!==void 0&&o!=null&&a(e,["_query","pageToken"],o),t}function Lp(n){const e={},t=s(n,["config"]);return t!=null&&Np(t,e),e}function Fp(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["nextPageToken"]);i!=null&&a(e,["nextPageToken"],i);const o=s(n,["files"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(l=>us(l))),a(e,["files"],r)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Bp extends ai{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new co(ri.PAGED_ITEM_FILES,i=>this.listInternal(i),await this.listInternal(t),t)}async upload(e){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(e.file,e.config).then(t=>us(t))}async download(e){await this.apiClient.downloadFile(e)}async listInternal(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const u=Lp(e);return r=Ae("files",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(f=>{const d=f;return d.sdkHttpResponse={headers:c.headers},d})),o.then(c=>{const f=Fp(c),d=new Gf;return Object.assign(d,f),d})}}async createInternal(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const u=Ap(e);return r=Ae("upload/v1beta/files",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>{const f=Rp(c),d=new Hf;return Object.assign(d,f),d})}}async get(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const u=Up(e);return r=Ae("files/{file}",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>us(c))}}async delete(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const u=wp(e);return r=Ae("files/{file}",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(f=>{const d=f;return d.sdkHttpResponse={headers:c.headers},d})),o.then(c=>{const f=Ip(c),d=new zf;return Object.assign(d,f),d})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function kp(){return{}}function Vp(){return{}}function Op(){return{}}function Gp(){return{}}function Hp(n){const e={},t=s(n,["apiKeyString"]);return t!=null&&a(e,["apiKeyString"],t),e}function zp(n){const e={},t=s(n,["data"]);t!=null&&a(e,["data"],t);const i=s(n,["mimeType"]);i!=null&&a(e,["mimeType"],i);const o=s(n,["sourceMetadata"]);return o!=null&&a(e,["sourceMetadata"],Lm(o)),e}function Fl(){return{}}function Bl(){return{}}function Wp(n){const e={},t=s(n,["apiKeyConfig"]);t!=null&&a(e,["apiKeyConfig"],Hp(t));const i=s(n,["authType"]);i!=null&&a(e,["authType"],i);const o=s(n,["googleServiceAccountConfig"]);o!=null&&a(e,["googleServiceAccountConfig"],o);const r=s(n,["httpBasicAuthConfig"]);r!=null&&a(e,["httpBasicAuthConfig"],r);const l=s(n,["oauthConfig"]);l!=null&&a(e,["oauthConfig"],l);const u=s(n,["oidcConfig"]);return u!=null&&a(e,["oidcConfig"],u),e}function qp(n){const e={},t=s(n,["disabled"]);t!=null&&a(e,["disabled"],t);const i=s(n,["startOfSpeechSensitivity"]);i!=null&&a(e,["startOfSpeechSensitivity"],i);const o=s(n,["endOfSpeechSensitivity"]);o!=null&&a(e,["endOfSpeechSensitivity"],o);const r=s(n,["prefixPaddingMs"]);r!=null&&a(e,["prefixPaddingMs"],r);const l=s(n,["silenceDurationMs"]);return l!=null&&a(e,["silenceDurationMs"],l),e}function Xp(n){const e={},t=s(n,["disabled"]);t!=null&&a(e,["disabled"],t);const i=s(n,["startOfSpeechSensitivity"]);i!=null&&a(e,["startOfSpeechSensitivity"],i);const o=s(n,["endOfSpeechSensitivity"]);o!=null&&a(e,["endOfSpeechSensitivity"],o);const r=s(n,["prefixPaddingMs"]);r!=null&&a(e,["prefixPaddingMs"],r);const l=s(n,["silenceDurationMs"]);return l!=null&&a(e,["silenceDurationMs"],l),e}function Yp(n){const e={},t=s(n,["data"]);t!=null&&a(e,["data"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function $p(n){const e={},t=s(n,["displayName"]);t!=null&&a(e,["displayName"],t);const i=s(n,["data"]);i!=null&&a(e,["data"],i);const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function Jp(n){const e={};if(s(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=s(n,["data"]);t!=null&&a(e,["data"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function Kp(n){const e={},t=s(n,["displayName"]);t!=null&&a(e,["displayName"],t);const i=s(n,["data"]);i!=null&&a(e,["data"],i);const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function Zp(n){const e={},t=s(n,["environment"]);t!=null&&a(e,["environment"],t);const i=s(n,["excludedPredefinedFunctions"]);return i!=null&&a(e,["excludedPredefinedFunctions"],i),e}function Qp(n){const e={},t=s(n,["environment"]);t!=null&&a(e,["environment"],t);const i=s(n,["excludedPredefinedFunctions"]);return i!=null&&a(e,["excludedPredefinedFunctions"],i),e}function jp(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>jm(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function em(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>eg(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function tm(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>tg(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function nm(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>ng(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function im(n){const e={},t=s(n,["triggerTokens"]);t!=null&&a(e,["triggerTokens"],t);const i=s(n,["slidingWindow"]);return i!=null&&a(e,["slidingWindow"],fg(i)),e}function om(n){const e={},t=s(n,["triggerTokens"]);t!=null&&a(e,["triggerTokens"],t);const i=s(n,["slidingWindow"]);return i!=null&&a(e,["slidingWindow"],dg(i)),e}function rm(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["dynamicThreshold"]);return i!=null&&a(e,["dynamicThreshold"],i),e}function sm(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["dynamicThreshold"]);return i!=null&&a(e,["dynamicThreshold"],i),e}function am(n){const e={},t=s(n,["excludeDomains"]);return t!=null&&a(e,["excludeDomains"],t),e}function lm(n){const e={},t=s(n,["fileUri"]);t!=null&&a(e,["fileUri"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function um(n){const e={},t=s(n,["displayName"]);t!=null&&a(e,["displayName"],t);const i=s(n,["fileUri"]);i!=null&&a(e,["fileUri"],i);const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function cm(n){const e={};if(s(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=s(n,["fileUri"]);t!=null&&a(e,["fileUri"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function fm(n){const e={},t=s(n,["displayName"]);t!=null&&a(e,["displayName"],t);const i=s(n,["fileUri"]);i!=null&&a(e,["fileUri"],i);const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function mc(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function gc(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function dm(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function hm(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function pm(n){const e={},t=s(n,["behavior"]);t!=null&&a(e,["behavior"],t);const i=s(n,["description"]);i!=null&&a(e,["description"],i);const o=s(n,["name"]);o!=null&&a(e,["name"],o);const r=s(n,["parameters"]);r!=null&&a(e,["parameters"],r);const l=s(n,["parametersJsonSchema"]);l!=null&&a(e,["parametersJsonSchema"],l);const u=s(n,["response"]);u!=null&&a(e,["response"],u);const c=s(n,["responseJsonSchema"]);return c!=null&&a(e,["responseJsonSchema"],c),e}function mm(n){const e={};if(s(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const t=s(n,["description"]);t!=null&&a(e,["description"],t);const i=s(n,["name"]);i!=null&&a(e,["name"],i);const o=s(n,["parameters"]);o!=null&&a(e,["parameters"],o);const r=s(n,["parametersJsonSchema"]);r!=null&&a(e,["parametersJsonSchema"],r);const l=s(n,["response"]);l!=null&&a(e,["response"],l);const u=s(n,["responseJsonSchema"]);return u!=null&&a(e,["responseJsonSchema"],u),e}function gm(n){const e={},t=s(n,["authConfig"]);return t!=null&&a(e,["authConfig"],Wp(t)),e}function _m(n){const e={},t=s(n,["dynamicRetrievalConfig"]);return t!=null&&a(e,["dynamicRetrievalConfig"],rm(t)),e}function vm(n){const e={},t=s(n,["dynamicRetrievalConfig"]);return t!=null&&a(e,["dynamicRetrievalConfig"],sm(t)),e}function Tm(n){const e={},t=s(n,["timeRangeFilter"]);if(t!=null&&a(e,["timeRangeFilter"],xm(t)),s(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");return e}function Sm(n){const e={},t=s(n,["timeRangeFilter"]);t!=null&&a(e,["timeRangeFilter"],ym(t));const i=s(n,["excludeDomains"]);return i!=null&&a(e,["excludeDomains"],i),e}function xm(n){const e={},t=s(n,["startTime"]);t!=null&&a(e,["startTime"],t);const i=s(n,["endTime"]);return i!=null&&a(e,["endTime"],i),e}function ym(n){const e={},t=s(n,["startTime"]);t!=null&&a(e,["startTime"],t);const i=s(n,["endTime"]);return i!=null&&a(e,["endTime"],i),e}function Mm(n,e){const t={},i=s(n,["generationConfig"]);e!==void 0&&i!=null&&a(e,["setup","generationConfig"],i);const o=s(n,["responseModalities"]);e!==void 0&&o!=null&&a(e,["setup","generationConfig","responseModalities"],o);const r=s(n,["temperature"]);e!==void 0&&r!=null&&a(e,["setup","generationConfig","temperature"],r);const l=s(n,["topP"]);e!==void 0&&l!=null&&a(e,["setup","generationConfig","topP"],l);const u=s(n,["topK"]);e!==void 0&&u!=null&&a(e,["setup","generationConfig","topK"],u);const c=s(n,["maxOutputTokens"]);e!==void 0&&c!=null&&a(e,["setup","generationConfig","maxOutputTokens"],c);const f=s(n,["mediaResolution"]);e!==void 0&&f!=null&&a(e,["setup","generationConfig","mediaResolution"],f);const d=s(n,["seed"]);e!==void 0&&d!=null&&a(e,["setup","generationConfig","seed"],d);const h=s(n,["speechConfig"]);e!==void 0&&h!=null&&a(e,["setup","generationConfig","speechConfig"],pg(ua(h)));const p=s(n,["thinkingConfig"]);e!==void 0&&p!=null&&a(e,["setup","generationConfig","thinkingConfig"],gg(p));const m=s(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&a(e,["setup","generationConfig","enableAffectiveDialog"],m);const S=s(n,["systemInstruction"]);e!==void 0&&S!=null&&a(e,["setup","systemInstruction"],tm(bt(S)));const x=s(n,["tools"]);if(e!==void 0&&x!=null){let b=Oi(x);Array.isArray(b)&&(b=b.map(N=>vg(Vi(N)))),a(e,["setup","tools"],b)}const T=s(n,["sessionResumption"]);e!==void 0&&T!=null&&a(e,["setup","sessionResumption"],ug(T));const g=s(n,["inputAudioTranscription"]);e!==void 0&&g!=null&&a(e,["setup","inputAudioTranscription"],Fl());const w=s(n,["outputAudioTranscription"]);e!==void 0&&w!=null&&a(e,["setup","outputAudioTranscription"],Fl());const A=s(n,["realtimeInputConfig"]);e!==void 0&&A!=null&&a(e,["setup","realtimeInputConfig"],ag(A));const M=s(n,["contextWindowCompression"]);e!==void 0&&M!=null&&a(e,["setup","contextWindowCompression"],im(M));const B=s(n,["proactivity"]);return e!==void 0&&B!=null&&a(e,["setup","proactivity"],rg(B)),t}function Em(n,e){const t={},i=s(n,["generationConfig"]);e!==void 0&&i!=null&&a(e,["setup","generationConfig"],i);const o=s(n,["responseModalities"]);e!==void 0&&o!=null&&a(e,["setup","generationConfig","responseModalities"],o);const r=s(n,["temperature"]);e!==void 0&&r!=null&&a(e,["setup","generationConfig","temperature"],r);const l=s(n,["topP"]);e!==void 0&&l!=null&&a(e,["setup","generationConfig","topP"],l);const u=s(n,["topK"]);e!==void 0&&u!=null&&a(e,["setup","generationConfig","topK"],u);const c=s(n,["maxOutputTokens"]);e!==void 0&&c!=null&&a(e,["setup","generationConfig","maxOutputTokens"],c);const f=s(n,["mediaResolution"]);e!==void 0&&f!=null&&a(e,["setup","generationConfig","mediaResolution"],f);const d=s(n,["seed"]);e!==void 0&&d!=null&&a(e,["setup","generationConfig","seed"],d);const h=s(n,["speechConfig"]);e!==void 0&&h!=null&&a(e,["setup","generationConfig","speechConfig"],mg(ua(h)));const p=s(n,["thinkingConfig"]);e!==void 0&&p!=null&&a(e,["setup","generationConfig","thinkingConfig"],_g(p));const m=s(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&a(e,["setup","generationConfig","enableAffectiveDialog"],m);const S=s(n,["systemInstruction"]);e!==void 0&&S!=null&&a(e,["setup","systemInstruction"],nm(bt(S)));const x=s(n,["tools"]);if(e!==void 0&&x!=null){let b=Oi(x);Array.isArray(b)&&(b=b.map(N=>Tg(Vi(N)))),a(e,["setup","tools"],b)}const T=s(n,["sessionResumption"]);e!==void 0&&T!=null&&a(e,["setup","sessionResumption"],cg(T));const g=s(n,["inputAudioTranscription"]);e!==void 0&&g!=null&&a(e,["setup","inputAudioTranscription"],Bl());const w=s(n,["outputAudioTranscription"]);e!==void 0&&w!=null&&a(e,["setup","outputAudioTranscription"],Bl());const A=s(n,["realtimeInputConfig"]);e!==void 0&&A!=null&&a(e,["setup","realtimeInputConfig"],lg(A));const M=s(n,["contextWindowCompression"]);e!==void 0&&M!=null&&a(e,["setup","contextWindowCompression"],om(M));const B=s(n,["proactivity"]);return e!==void 0&&B!=null&&a(e,["setup","proactivity"],sg(B)),t}function Cm(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["setup","model"],at(n,i));const o=s(e,["config"]);return o!=null&&a(t,["config"],Mm(o,t)),t}function Am(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["setup","model"],at(n,i));const o=s(e,["config"]);return o!=null&&a(t,["config"],Em(o,t)),t}function Rm(n){const e={},t=s(n,["weightedPrompts"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>Dg(o))),a(e,["weightedPrompts"],i)}return e}function _c(n){const e={},t=s(n,["weightedPrompts"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>xc(o))),a(e,["weightedPrompts"],i)}return e}function cs(n){const e={},t=s(n,["setup"]);t!=null&&a(e,["setup"],vc(t));const i=s(n,["clientContent"]);i!=null&&a(e,["clientContent"],_c(i));const o=s(n,["musicGenerationConfig"]);o!=null&&a(e,["musicGenerationConfig"],Tc(o));const r=s(n,["playbackControl"]);return r!=null&&a(e,["playbackControl"],r),e}function vc(n){const e={},t=s(n,["model"]);return t!=null&&a(e,["model"],t),e}function wm(n){const e={},t=s(n,["text"]);t!=null&&a(e,["text"],t);const i=s(n,["filteredReason"]);return i!=null&&a(e,["filteredReason"],i),e}function Im(n){const e={},t=s(n,["temperature"]);t!=null&&a(e,["temperature"],t);const i=s(n,["topK"]);i!=null&&a(e,["topK"],i);const o=s(n,["seed"]);o!=null&&a(e,["seed"],o);const r=s(n,["guidance"]);r!=null&&a(e,["guidance"],r);const l=s(n,["bpm"]);l!=null&&a(e,["bpm"],l);const u=s(n,["density"]);u!=null&&a(e,["density"],u);const c=s(n,["brightness"]);c!=null&&a(e,["brightness"],c);const f=s(n,["scale"]);f!=null&&a(e,["scale"],f);const d=s(n,["muteBass"]);d!=null&&a(e,["muteBass"],d);const h=s(n,["muteDrums"]);h!=null&&a(e,["muteDrums"],h);const p=s(n,["onlyBassAndDrums"]);p!=null&&a(e,["onlyBassAndDrums"],p);const m=s(n,["musicGenerationMode"]);return m!=null&&a(e,["musicGenerationMode"],m),e}function Tc(n){const e={},t=s(n,["temperature"]);t!=null&&a(e,["temperature"],t);const i=s(n,["topK"]);i!=null&&a(e,["topK"],i);const o=s(n,["seed"]);o!=null&&a(e,["seed"],o);const r=s(n,["guidance"]);r!=null&&a(e,["guidance"],r);const l=s(n,["bpm"]);l!=null&&a(e,["bpm"],l);const u=s(n,["density"]);u!=null&&a(e,["density"],u);const c=s(n,["brightness"]);c!=null&&a(e,["brightness"],c);const f=s(n,["scale"]);f!=null&&a(e,["scale"],f);const d=s(n,["muteBass"]);d!=null&&a(e,["muteBass"],d);const h=s(n,["muteDrums"]);h!=null&&a(e,["muteDrums"],h);const p=s(n,["onlyBassAndDrums"]);p!=null&&a(e,["onlyBassAndDrums"],p);const m=s(n,["musicGenerationMode"]);return m!=null&&a(e,["musicGenerationMode"],m),e}function Pm(n){const e={},t=s(n,["audioChunks"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>zp(o))),a(e,["audioChunks"],i)}return e}function Dm(n){const e={};s(n,["setupComplete"])!=null&&a(e,["setupComplete"],bm());const i=s(n,["serverContent"]);i!=null&&a(e,["serverContent"],Pm(i));const o=s(n,["filteredPrompt"]);return o!=null&&a(e,["filteredPrompt"],wm(o)),e}function bm(){return{}}function Um(n){const e={},t=s(n,["musicGenerationConfig"]);return t!=null&&a(e,["musicGenerationConfig"],Tc(t)),e}function Nm(n){const e={},t=s(n,["weightedPrompts"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>xc(o))),a(e,["weightedPrompts"],i)}return e}function Lm(n){const e={},t=s(n,["clientContent"]);t!=null&&a(e,["clientContent"],Rm(t));const i=s(n,["musicGenerationConfig"]);return i!=null&&a(e,["musicGenerationConfig"],Im(i)),e}function Fm(n){const e={},t=s(n,["media"]);if(t!=null){let f=ec(t);Array.isArray(f)&&(f=f.map(d=>d)),a(e,["mediaChunks"],f)}const i=s(n,["audio"]);i!=null&&a(e,["audio"],nc(i));const o=s(n,["audioStreamEnd"]);o!=null&&a(e,["audioStreamEnd"],o);const r=s(n,["video"]);r!=null&&a(e,["video"],tc(r));const l=s(n,["text"]);return l!=null&&a(e,["text"],l),s(n,["activityStart"])!=null&&a(e,["activityStart"],Op()),s(n,["activityEnd"])!=null&&a(e,["activityEnd"],kp()),e}function Bm(n){const e={},t=s(n,["media"]);if(t!=null){let f=ec(t);Array.isArray(f)&&(f=f.map(d=>d)),a(e,["mediaChunks"],f)}const i=s(n,["audio"]);i!=null&&a(e,["audio"],nc(i));const o=s(n,["audioStreamEnd"]);o!=null&&a(e,["audioStreamEnd"],o);const r=s(n,["video"]);r!=null&&a(e,["video"],tc(r));const l=s(n,["text"]);return l!=null&&a(e,["text"],l),s(n,["activityStart"])!=null&&a(e,["activityStart"],Gp()),s(n,["activityEnd"])!=null&&a(e,["activityEnd"],Vp()),e}function km(n){const e={},t=s(n,["modelTurn"]);t!=null&&a(e,["modelTurn"],jp(t));const i=s(n,["turnComplete"]);i!=null&&a(e,["turnComplete"],i);const o=s(n,["interrupted"]);o!=null&&a(e,["interrupted"],o);const r=s(n,["groundingMetadata"]);r!=null&&a(e,["groundingMetadata"],r);const l=s(n,["generationComplete"]);l!=null&&a(e,["generationComplete"],l);const u=s(n,["inputTranscription"]);u!=null&&a(e,["inputTranscription"],kl(u));const c=s(n,["outputTranscription"]);c!=null&&a(e,["outputTranscription"],kl(c));const f=s(n,["urlContextMetadata"]);f!=null&&a(e,["urlContextMetadata"],Sg(f));const d=s(n,["turnCompleteReason"]);d!=null&&a(e,["turnCompleteReason"],d);const h=s(n,["waitingForInput"]);return h!=null&&a(e,["waitingForInput"],h),e}function Vm(n){const e={},t=s(n,["modelTurn"]);t!=null&&a(e,["modelTurn"],em(t));const i=s(n,["turnComplete"]);i!=null&&a(e,["turnComplete"],i);const o=s(n,["interrupted"]);o!=null&&a(e,["interrupted"],o);const r=s(n,["groundingMetadata"]);r!=null&&a(e,["groundingMetadata"],r);const l=s(n,["generationComplete"]);l!=null&&a(e,["generationComplete"],l);const u=s(n,["inputTranscription"]);u!=null&&a(e,["inputTranscription"],Vl(u));const c=s(n,["outputTranscription"]);c!=null&&a(e,["outputTranscription"],Vl(c));const f=s(n,["turnCompleteReason"]);f!=null&&a(e,["turnCompleteReason"],f);const d=s(n,["waitingForInput"]);return d!=null&&a(e,["waitingForInput"],d),e}function Om(n){const e={},t=s(n,["timeLeft"]);return t!=null&&a(e,["timeLeft"],t),e}function Gm(n){const e={},t=s(n,["timeLeft"]);return t!=null&&a(e,["timeLeft"],t),e}function Hm(n){const e={};s(n,["setupComplete"])!=null&&a(e,["setupComplete"],Xm());const i=s(n,["serverContent"]);i!=null&&a(e,["serverContent"],km(i));const o=s(n,["toolCall"]);o!=null&&a(e,["toolCall"],Km(o));const r=s(n,["toolCallCancellation"]);r!=null&&a(e,["toolCallCancellation"],$m(r));const l=s(n,["usageMetadata"]);l!=null&&a(e,["usageMetadata"],Eg(l));const u=s(n,["goAway"]);u!=null&&a(e,["goAway"],Om(u));const c=s(n,["sessionResumptionUpdate"]);return c!=null&&a(e,["sessionResumptionUpdate"],Wm(c)),e}function zm(n){const e={},t=s(n,["setupComplete"]);t!=null&&a(e,["setupComplete"],Ym(t));const i=s(n,["serverContent"]);i!=null&&a(e,["serverContent"],Vm(i));const o=s(n,["toolCall"]);o!=null&&a(e,["toolCall"],Zm(o));const r=s(n,["toolCallCancellation"]);r!=null&&a(e,["toolCallCancellation"],Jm(r));const l=s(n,["usageMetadata"]);l!=null&&a(e,["usageMetadata"],Cg(l));const u=s(n,["goAway"]);u!=null&&a(e,["goAway"],Gm(u));const c=s(n,["sessionResumptionUpdate"]);return c!=null&&a(e,["sessionResumptionUpdate"],qm(c)),e}function Wm(n){const e={},t=s(n,["newHandle"]);t!=null&&a(e,["newHandle"],t);const i=s(n,["resumable"]);i!=null&&a(e,["resumable"],i);const o=s(n,["lastConsumedClientMessageIndex"]);return o!=null&&a(e,["lastConsumedClientMessageIndex"],o),e}function qm(n){const e={},t=s(n,["newHandle"]);t!=null&&a(e,["newHandle"],t);const i=s(n,["resumable"]);i!=null&&a(e,["resumable"],i);const o=s(n,["lastConsumedClientMessageIndex"]);return o!=null&&a(e,["lastConsumedClientMessageIndex"],o),e}function Xm(){return{}}function Ym(n){const e={},t=s(n,["sessionId"]);return t!=null&&a(e,["sessionId"],t),e}function $m(n){const e={},t=s(n,["ids"]);return t!=null&&a(e,["ids"],t),e}function Jm(n){const e={},t=s(n,["ids"]);return t!=null&&a(e,["ids"],t),e}function Km(n){const e={},t=s(n,["functionCalls"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>mc(o))),a(e,["functionCalls"],i)}return e}function Zm(n){const e={},t=s(n,["functionCalls"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>gc(o))),a(e,["functionCalls"],i)}return e}function Mo(n){const e={},t=s(n,["modality"]);t!=null&&a(e,["modality"],t);const i=s(n,["tokenCount"]);return i!=null&&a(e,["tokenCount"],i),e}function Eo(n){const e={},t=s(n,["modality"]);t!=null&&a(e,["modality"],t);const i=s(n,["tokenCount"]);return i!=null&&a(e,["tokenCount"],i),e}function Qm(n){const e={},t=s(n,["speakerVoiceConfigs"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>hg(o))),a(e,["speakerVoiceConfigs"],i)}return e}function jm(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],Ag(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],Yp(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],lm(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],mc(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function eg(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],Rg(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],$p(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],um(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],gc(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function tg(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],wg(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],Jp(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],cm(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],dm(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function ng(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],Ig(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],Kp(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],fm(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],hm(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function ig(n){const e={},t=s(n,["voiceName"]);return t!=null&&a(e,["voiceName"],t),e}function og(n){const e={},t=s(n,["voiceName"]);return t!=null&&a(e,["voiceName"],t),e}function rg(n){const e={},t=s(n,["proactiveAudio"]);return t!=null&&a(e,["proactiveAudio"],t),e}function sg(n){const e={},t=s(n,["proactiveAudio"]);return t!=null&&a(e,["proactiveAudio"],t),e}function ag(n){const e={},t=s(n,["automaticActivityDetection"]);t!=null&&a(e,["automaticActivityDetection"],qp(t));const i=s(n,["activityHandling"]);i!=null&&a(e,["activityHandling"],i);const o=s(n,["turnCoverage"]);return o!=null&&a(e,["turnCoverage"],o),e}function lg(n){const e={},t=s(n,["automaticActivityDetection"]);t!=null&&a(e,["automaticActivityDetection"],Xp(t));const i=s(n,["activityHandling"]);i!=null&&a(e,["activityHandling"],i);const o=s(n,["turnCoverage"]);return o!=null&&a(e,["turnCoverage"],o),e}function ug(n){const e={},t=s(n,["handle"]);if(t!=null&&a(e,["handle"],t),s(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function cg(n){const e={},t=s(n,["handle"]);t!=null&&a(e,["handle"],t);const i=s(n,["transparent"]);return i!=null&&a(e,["transparent"],i),e}function fg(n){const e={},t=s(n,["targetTokens"]);return t!=null&&a(e,["targetTokens"],t),e}function dg(n){const e={},t=s(n,["targetTokens"]);return t!=null&&a(e,["targetTokens"],t),e}function hg(n){const e={},t=s(n,["speaker"]);t!=null&&a(e,["speaker"],t);const i=s(n,["voiceConfig"]);return i!=null&&a(e,["voiceConfig"],Sc(i)),e}function pg(n){const e={},t=s(n,["voiceConfig"]);t!=null&&a(e,["voiceConfig"],Sc(t));const i=s(n,["multiSpeakerVoiceConfig"]);i!=null&&a(e,["multiSpeakerVoiceConfig"],Qm(i));const o=s(n,["languageCode"]);return o!=null&&a(e,["languageCode"],o),e}function mg(n){const e={},t=s(n,["voiceConfig"]);if(t!=null&&a(e,["voiceConfig"],Pg(t)),s(n,["multiSpeakerVoiceConfig"])!==void 0)throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");const i=s(n,["languageCode"]);return i!=null&&a(e,["languageCode"],i),e}function gg(n){const e={},t=s(n,["includeThoughts"]);t!=null&&a(e,["includeThoughts"],t);const i=s(n,["thinkingBudget"]);return i!=null&&a(e,["thinkingBudget"],i),e}function _g(n){const e={},t=s(n,["includeThoughts"]);t!=null&&a(e,["includeThoughts"],t);const i=s(n,["thinkingBudget"]);return i!=null&&a(e,["thinkingBudget"],i),e}function vg(n){const e={},t=s(n,["functionDeclarations"]);if(t!=null){let c=t;Array.isArray(c)&&(c=c.map(f=>pm(f))),a(e,["functionDeclarations"],c)}if(s(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=s(n,["googleSearch"]);i!=null&&a(e,["googleSearch"],Tm(i));const o=s(n,["googleSearchRetrieval"]);if(o!=null&&a(e,["googleSearchRetrieval"],_m(o)),s(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");if(s(n,["googleMaps"])!==void 0)throw new Error("googleMaps parameter is not supported in Gemini API.");s(n,["urlContext"])!=null&&a(e,["urlContext"],xg());const l=s(n,["computerUse"]);l!=null&&a(e,["computerUse"],Zp(l));const u=s(n,["codeExecution"]);return u!=null&&a(e,["codeExecution"],u),e}function Tg(n){const e={},t=s(n,["functionDeclarations"]);if(t!=null){let h=t;Array.isArray(h)&&(h=h.map(p=>mm(p))),a(e,["functionDeclarations"],h)}const i=s(n,["retrieval"]);i!=null&&a(e,["retrieval"],i);const o=s(n,["googleSearch"]);o!=null&&a(e,["googleSearch"],Sm(o));const r=s(n,["googleSearchRetrieval"]);r!=null&&a(e,["googleSearchRetrieval"],vm(r));const l=s(n,["enterpriseWebSearch"]);l!=null&&a(e,["enterpriseWebSearch"],am(l));const u=s(n,["googleMaps"]);u!=null&&a(e,["googleMaps"],gm(u)),s(n,["urlContext"])!=null&&a(e,["urlContext"],yg());const f=s(n,["computerUse"]);f!=null&&a(e,["computerUse"],Qp(f));const d=s(n,["codeExecution"]);return d!=null&&a(e,["codeExecution"],d),e}function kl(n){const e={},t=s(n,["text"]);t!=null&&a(e,["text"],t);const i=s(n,["finished"]);return i!=null&&a(e,["finished"],i),e}function Vl(n){const e={},t=s(n,["text"]);t!=null&&a(e,["text"],t);const i=s(n,["finished"]);return i!=null&&a(e,["finished"],i),e}function Sg(n){const e={},t=s(n,["urlMetadata"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>Mg(o))),a(e,["urlMetadata"],i)}return e}function xg(){return{}}function yg(){return{}}function Mg(n){const e={},t=s(n,["retrievedUrl"]);t!=null&&a(e,["retrievedUrl"],t);const i=s(n,["urlRetrievalStatus"]);return i!=null&&a(e,["urlRetrievalStatus"],i),e}function Eg(n){const e={},t=s(n,["promptTokenCount"]);t!=null&&a(e,["promptTokenCount"],t);const i=s(n,["cachedContentTokenCount"]);i!=null&&a(e,["cachedContentTokenCount"],i);const o=s(n,["responseTokenCount"]);o!=null&&a(e,["responseTokenCount"],o);const r=s(n,["toolUsePromptTokenCount"]);r!=null&&a(e,["toolUsePromptTokenCount"],r);const l=s(n,["thoughtsTokenCount"]);l!=null&&a(e,["thoughtsTokenCount"],l);const u=s(n,["totalTokenCount"]);u!=null&&a(e,["totalTokenCount"],u);const c=s(n,["promptTokensDetails"]);if(c!=null){let p=c;Array.isArray(p)&&(p=p.map(m=>Mo(m))),a(e,["promptTokensDetails"],p)}const f=s(n,["cacheTokensDetails"]);if(f!=null){let p=f;Array.isArray(p)&&(p=p.map(m=>Mo(m))),a(e,["cacheTokensDetails"],p)}const d=s(n,["responseTokensDetails"]);if(d!=null){let p=d;Array.isArray(p)&&(p=p.map(m=>Mo(m))),a(e,["responseTokensDetails"],p)}const h=s(n,["toolUsePromptTokensDetails"]);if(h!=null){let p=h;Array.isArray(p)&&(p=p.map(m=>Mo(m))),a(e,["toolUsePromptTokensDetails"],p)}return e}function Cg(n){const e={},t=s(n,["promptTokenCount"]);t!=null&&a(e,["promptTokenCount"],t);const i=s(n,["cachedContentTokenCount"]);i!=null&&a(e,["cachedContentTokenCount"],i);const o=s(n,["candidatesTokenCount"]);o!=null&&a(e,["responseTokenCount"],o);const r=s(n,["toolUsePromptTokenCount"]);r!=null&&a(e,["toolUsePromptTokenCount"],r);const l=s(n,["thoughtsTokenCount"]);l!=null&&a(e,["thoughtsTokenCount"],l);const u=s(n,["totalTokenCount"]);u!=null&&a(e,["totalTokenCount"],u);const c=s(n,["promptTokensDetails"]);if(c!=null){let m=c;Array.isArray(m)&&(m=m.map(S=>Eo(S))),a(e,["promptTokensDetails"],m)}const f=s(n,["cacheTokensDetails"]);if(f!=null){let m=f;Array.isArray(m)&&(m=m.map(S=>Eo(S))),a(e,["cacheTokensDetails"],m)}const d=s(n,["candidatesTokensDetails"]);if(d!=null){let m=d;Array.isArray(m)&&(m=m.map(S=>Eo(S))),a(e,["responseTokensDetails"],m)}const h=s(n,["toolUsePromptTokensDetails"]);if(h!=null){let m=h;Array.isArray(m)&&(m=m.map(S=>Eo(S))),a(e,["toolUsePromptTokensDetails"],m)}const p=s(n,["trafficType"]);return p!=null&&a(e,["trafficType"],p),e}function Ag(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function Rg(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function wg(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function Ig(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function Sc(n){const e={},t=s(n,["prebuiltVoiceConfig"]);return t!=null&&a(e,["prebuiltVoiceConfig"],ig(t)),e}function Pg(n){const e={},t=s(n,["prebuiltVoiceConfig"]);return t!=null&&a(e,["prebuiltVoiceConfig"],og(t)),e}function Dg(n){const e={},t=s(n,["text"]);t!=null&&a(e,["text"],t);const i=s(n,["weight"]);return i!=null&&a(e,["weight"],i),e}function xc(n){const e={},t=s(n,["text"]);t!=null&&a(e,["text"],t);const i=s(n,["weight"]);return i!=null&&a(e,["weight"],i),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function bg(n){const e={},t=s(n,["apiKeyString"]);return t!=null&&a(e,["apiKeyString"],t),e}function Ug(n){const e={},t=s(n,["apiKeyConfig"]);t!=null&&a(e,["apiKeyConfig"],bg(t));const i=s(n,["authType"]);i!=null&&a(e,["authType"],i);const o=s(n,["googleServiceAccountConfig"]);o!=null&&a(e,["googleServiceAccountConfig"],o);const r=s(n,["httpBasicAuthConfig"]);r!=null&&a(e,["httpBasicAuthConfig"],r);const l=s(n,["oauthConfig"]);l!=null&&a(e,["oauthConfig"],l);const u=s(n,["oidcConfig"]);return u!=null&&a(e,["oidcConfig"],u),e}function Ng(n){const e={},t=s(n,["data"]);t!=null&&a(e,["data"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function Lg(n){const e={},t=s(n,["displayName"]);t!=null&&a(e,["displayName"],t);const i=s(n,["data"]);i!=null&&a(e,["data"],i);const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function Fg(n){const e={};if(s(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=s(n,["data"]);t!=null&&a(e,["data"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function Bg(n){const e={},t=s(n,["displayName"]);t!=null&&a(e,["displayName"],t);const i=s(n,["data"]);i!=null&&a(e,["data"],i);const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function kg(n){const e={},t=s(n,["content"]);t!=null&&a(e,["content"],Kg(t));const i=s(n,["citationMetadata"]);i!=null&&a(e,["citationMetadata"],Gg(i));const o=s(n,["tokenCount"]);o!=null&&a(e,["tokenCount"],o);const r=s(n,["finishReason"]);r!=null&&a(e,["finishReason"],r);const l=s(n,["urlContextMetadata"]);l!=null&&a(e,["urlContextMetadata"],g0(l));const u=s(n,["avgLogprobs"]);u!=null&&a(e,["avgLogprobs"],u);const c=s(n,["groundingMetadata"]);c!=null&&a(e,["groundingMetadata"],c);const f=s(n,["index"]);f!=null&&a(e,["index"],f);const d=s(n,["logprobsResult"]);d!=null&&a(e,["logprobsResult"],d);const h=s(n,["safetyRatings"]);return h!=null&&a(e,["safetyRatings"],h),e}function Vg(n){const e={},t=s(n,["content"]);t!=null&&a(e,["content"],Zg(t));const i=s(n,["citationMetadata"]);i!=null&&a(e,["citationMetadata"],Hg(i));const o=s(n,["finishMessage"]);o!=null&&a(e,["finishMessage"],o);const r=s(n,["finishReason"]);r!=null&&a(e,["finishReason"],r);const l=s(n,["urlContextMetadata"]);l!=null&&a(e,["urlContextMetadata"],_0(l));const u=s(n,["avgLogprobs"]);u!=null&&a(e,["avgLogprobs"],u);const c=s(n,["groundingMetadata"]);c!=null&&a(e,["groundingMetadata"],c);const f=s(n,["index"]);f!=null&&a(e,["index"],f);const d=s(n,["logprobsResult"]);d!=null&&a(e,["logprobsResult"],d);const h=s(n,["safetyRatings"]);return h!=null&&a(e,["safetyRatings"],h),e}function Og(n){const e={},t=s(n,["checkpointId"]);t!=null&&a(e,["checkpointId"],t);const i=s(n,["epoch"]);i!=null&&a(e,["epoch"],i);const o=s(n,["step"]);return o!=null&&a(e,["step"],o),e}function Gg(n){const e={},t=s(n,["citationSources"]);return t!=null&&a(e,["citations"],t),e}function Hg(n){const e={},t=s(n,["citations"]);return t!=null&&a(e,["citations"],t),e}function zg(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["contents"]);if(o!=null){let r=jt(o);Array.isArray(r)&&(r=r.map(l=>Hi(l))),a(t,["contents"],r)}return t}function Wg(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["tokensInfo"]);return i!=null&&a(e,["tokensInfo"],i),e}function qg(n){const e={},t=s(n,["environment"]);t!=null&&a(e,["environment"],t);const i=s(n,["excludedPredefinedFunctions"]);return i!=null&&a(e,["excludedPredefinedFunctions"],i),e}function Xg(n){const e={},t=s(n,["environment"]);t!=null&&a(e,["environment"],t);const i=s(n,["excludedPredefinedFunctions"]);return i!=null&&a(e,["excludedPredefinedFunctions"],i),e}function Yg(n){const e={},t=s(n,["values"]);return t!=null&&a(e,["values"],t),e}function $g(n){const e={},t=s(n,["values"]);t!=null&&a(e,["values"],t);const i=s(n,["statistics"]);return i!=null&&a(e,["statistics"],Jg(i)),e}function Jg(n){const e={},t=s(n,["truncated"]);t!=null&&a(e,["truncated"],t);const i=s(n,["token_count"]);return i!=null&&a(e,["tokenCount"],i),e}function Kg(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>wv(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function Zg(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>Iv(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function pr(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>Pv(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function Hi(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>Dv(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function Qg(n){const e={},t=s(n,["controlType"]);t!=null&&a(e,["controlType"],t);const i=s(n,["enableControlImageComputation"]);return i!=null&&a(e,["computeControl"],i),e}function jg(n){const e={};if(s(n,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(s(n,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(s(n,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return e}function e_(n,e){const t={},i=s(n,["systemInstruction"]);e!==void 0&&i!=null&&a(e,["systemInstruction"],Hi(bt(i)));const o=s(n,["tools"]);if(e!==void 0&&o!=null){let l=o;Array.isArray(l)&&(l=l.map(u=>Ac(u))),a(e,["tools"],l)}const r=s(n,["generationConfig"]);return e!==void 0&&r!=null&&a(e,["generationConfig"],r),t}function t_(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["contents"]);if(o!=null){let l=jt(o);Array.isArray(l)&&(l=l.map(u=>pr(u))),a(t,["contents"],l)}const r=s(e,["config"]);return r!=null&&jg(r),t}function n_(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["contents"]);if(o!=null){let l=jt(o);Array.isArray(l)&&(l=l.map(u=>Hi(u))),a(t,["contents"],l)}const r=s(e,["config"]);return r!=null&&e_(r,t),t}function i_(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["totalTokens"]);i!=null&&a(e,["totalTokens"],i);const o=s(n,["cachedContentTokenCount"]);return o!=null&&a(e,["cachedContentTokenCount"],o),e}function o_(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["totalTokens"]);return i!=null&&a(e,["totalTokens"],i),e}function r_(n,e){const t={},i=s(e,["model"]);return i!=null&&a(t,["_url","name"],at(n,i)),t}function s_(n,e){const t={},i=s(e,["model"]);return i!=null&&a(t,["_url","name"],at(n,i)),t}function a_(n){const e={},t=s(n,["sdkHttpResponse"]);return t!=null&&a(e,["sdkHttpResponse"],t),e}function l_(n){const e={},t=s(n,["sdkHttpResponse"]);return t!=null&&a(e,["sdkHttpResponse"],t),e}function u_(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["dynamicThreshold"]);return i!=null&&a(e,["dynamicThreshold"],i),e}function c_(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["dynamicThreshold"]);return i!=null&&a(e,["dynamicThreshold"],i),e}function f_(n,e){const t={},i=s(n,["outputGcsUri"]);e!==void 0&&i!=null&&a(e,["parameters","storageUri"],i);const o=s(n,["negativePrompt"]);e!==void 0&&o!=null&&a(e,["parameters","negativePrompt"],o);const r=s(n,["numberOfImages"]);e!==void 0&&r!=null&&a(e,["parameters","sampleCount"],r);const l=s(n,["aspectRatio"]);e!==void 0&&l!=null&&a(e,["parameters","aspectRatio"],l);const u=s(n,["guidanceScale"]);e!==void 0&&u!=null&&a(e,["parameters","guidanceScale"],u);const c=s(n,["seed"]);e!==void 0&&c!=null&&a(e,["parameters","seed"],c);const f=s(n,["safetyFilterLevel"]);e!==void 0&&f!=null&&a(e,["parameters","safetySetting"],f);const d=s(n,["personGeneration"]);e!==void 0&&d!=null&&a(e,["parameters","personGeneration"],d);const h=s(n,["includeSafetyAttributes"]);e!==void 0&&h!=null&&a(e,["parameters","includeSafetyAttributes"],h);const p=s(n,["includeRaiReason"]);e!==void 0&&p!=null&&a(e,["parameters","includeRaiReason"],p);const m=s(n,["language"]);e!==void 0&&m!=null&&a(e,["parameters","language"],m);const S=s(n,["outputMimeType"]);e!==void 0&&S!=null&&a(e,["parameters","outputOptions","mimeType"],S);const x=s(n,["outputCompressionQuality"]);e!==void 0&&x!=null&&a(e,["parameters","outputOptions","compressionQuality"],x);const T=s(n,["addWatermark"]);e!==void 0&&T!=null&&a(e,["parameters","addWatermark"],T);const g=s(n,["editMode"]);e!==void 0&&g!=null&&a(e,["parameters","editMode"],g);const w=s(n,["baseSteps"]);return e!==void 0&&w!=null&&a(e,["parameters","editConfig","baseSteps"],w),t}function d_(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["prompt"]);o!=null&&a(t,["instances[0]","prompt"],o);const r=s(e,["referenceImages"]);if(r!=null){let u=r;Array.isArray(u)&&(u=u.map(c=>Vv(c))),a(t,["instances[0]","referenceImages"],u)}const l=s(e,["config"]);return l!=null&&f_(l,t),t}function h_(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["predictions"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>mr(r))),a(e,["generatedImages"],o)}return e}function p_(n,e){const t={},i=s(n,["taskType"]);e!==void 0&&i!=null&&a(e,["requests[]","taskType"],i);const o=s(n,["title"]);e!==void 0&&o!=null&&a(e,["requests[]","title"],o);const r=s(n,["outputDimensionality"]);if(e!==void 0&&r!=null&&a(e,["requests[]","outputDimensionality"],r),s(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(s(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return t}function m_(n,e){const t={},i=s(n,["taskType"]);e!==void 0&&i!=null&&a(e,["instances[]","task_type"],i);const o=s(n,["title"]);e!==void 0&&o!=null&&a(e,["instances[]","title"],o);const r=s(n,["outputDimensionality"]);e!==void 0&&r!=null&&a(e,["parameters","outputDimensionality"],r);const l=s(n,["mimeType"]);e!==void 0&&l!=null&&a(e,["instances[]","mimeType"],l);const u=s(n,["autoTruncate"]);return e!==void 0&&u!=null&&a(e,["parameters","autoTruncate"],u),t}function g_(){return{}}function __(n){const e={},t=s(n,["billableCharacterCount"]);return t!=null&&a(e,["billableCharacterCount"],t),e}function v_(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["contents"]);o!=null&&a(t,["requests[]","content"],sa(n,o));const r=s(e,["config"]);r!=null&&p_(r,t);const l=s(e,["model"]);return l!==void 0&&a(t,["requests[]","model"],at(n,l)),t}function T_(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["contents"]);o!=null&&a(t,["instances[]","content"],sa(n,o));const r=s(e,["config"]);return r!=null&&m_(r,t),t}function S_(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["embeddings"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(l=>Yg(l))),a(e,["embeddings"],r)}return s(n,["metadata"])!=null&&a(e,["metadata"],g_()),e}function x_(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["predictions[]","embeddings"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(l=>$g(l))),a(e,["embeddings"],r)}const o=s(n,["metadata"]);return o!=null&&a(e,["metadata"],__(o)),e}function y_(n){const e={},t=s(n,["endpoint"]);t!=null&&a(e,["name"],t);const i=s(n,["deployedModelId"]);return i!=null&&a(e,["deployedModelId"],i),e}function M_(n){const e={},t=s(n,["excludeDomains"]);return t!=null&&a(e,["excludeDomains"],t),e}function E_(n){const e={},t=s(n,["label"]);t!=null&&a(e,["label"],t);const i=s(n,["score"]);return i!=null&&a(e,["score"],i),e}function C_(n){const e={},t=s(n,["fileUri"]);t!=null&&a(e,["fileUri"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function A_(n){const e={},t=s(n,["displayName"]);t!=null&&a(e,["displayName"],t);const i=s(n,["fileUri"]);i!=null&&a(e,["fileUri"],i);const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function R_(n){const e={};if(s(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=s(n,["fileUri"]);t!=null&&a(e,["fileUri"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function w_(n){const e={},t=s(n,["displayName"]);t!=null&&a(e,["displayName"],t);const i=s(n,["fileUri"]);i!=null&&a(e,["fileUri"],i);const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function I_(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function P_(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function D_(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function b_(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function U_(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["allowedFunctionNames"]);return i!=null&&a(e,["allowedFunctionNames"],i),e}function N_(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["allowedFunctionNames"]);return i!=null&&a(e,["allowedFunctionNames"],i),e}function L_(n){const e={},t=s(n,["behavior"]);t!=null&&a(e,["behavior"],t);const i=s(n,["description"]);i!=null&&a(e,["description"],i);const o=s(n,["name"]);o!=null&&a(e,["name"],o);const r=s(n,["parameters"]);r!=null&&a(e,["parameters"],r);const l=s(n,["parametersJsonSchema"]);l!=null&&a(e,["parametersJsonSchema"],l);const u=s(n,["response"]);u!=null&&a(e,["response"],u);const c=s(n,["responseJsonSchema"]);return c!=null&&a(e,["responseJsonSchema"],c),e}function F_(n){const e={};if(s(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const t=s(n,["description"]);t!=null&&a(e,["description"],t);const i=s(n,["name"]);i!=null&&a(e,["name"],i);const o=s(n,["parameters"]);o!=null&&a(e,["parameters"],o);const r=s(n,["parametersJsonSchema"]);r!=null&&a(e,["parametersJsonSchema"],r);const l=s(n,["response"]);l!=null&&a(e,["response"],l);const u=s(n,["responseJsonSchema"]);return u!=null&&a(e,["responseJsonSchema"],u),e}function B_(n,e,t){const i={},o=s(e,["systemInstruction"]);t!==void 0&&o!=null&&a(t,["systemInstruction"],pr(bt(o)));const r=s(e,["temperature"]);r!=null&&a(i,["temperature"],r);const l=s(e,["topP"]);l!=null&&a(i,["topP"],l);const u=s(e,["topK"]);u!=null&&a(i,["topK"],u);const c=s(e,["candidateCount"]);c!=null&&a(i,["candidateCount"],c);const f=s(e,["maxOutputTokens"]);f!=null&&a(i,["maxOutputTokens"],f);const d=s(e,["stopSequences"]);d!=null&&a(i,["stopSequences"],d);const h=s(e,["responseLogprobs"]);h!=null&&a(i,["responseLogprobs"],h);const p=s(e,["logprobs"]);p!=null&&a(i,["logprobs"],p);const m=s(e,["presencePenalty"]);m!=null&&a(i,["presencePenalty"],m);const S=s(e,["frequencyPenalty"]);S!=null&&a(i,["frequencyPenalty"],S);const x=s(e,["seed"]);x!=null&&a(i,["seed"],x);const T=s(e,["responseMimeType"]);T!=null&&a(i,["responseMimeType"],T);const g=s(e,["responseSchema"]);g!=null&&a(i,["responseSchema"],Wv(aa(g)));const w=s(e,["responseJsonSchema"]);if(w!=null&&a(i,["responseJsonSchema"],w),s(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(s(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const A=s(e,["safetySettings"]);if(t!==void 0&&A!=null){let q=A;Array.isArray(q)&&(q=q.map($=>Hv($))),a(t,["safetySettings"],q)}const M=s(e,["tools"]);if(t!==void 0&&M!=null){let q=Oi(M);Array.isArray(q)&&(q=q.map($=>s0(Vi($)))),a(t,["tools"],q)}const B=s(e,["toolConfig"]);if(t!==void 0&&B!=null&&a(t,["toolConfig"],o0(B)),s(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const b=s(e,["cachedContent"]);t!==void 0&&b!=null&&a(t,["cachedContent"],Dn(n,b));const N=s(e,["responseModalities"]);N!=null&&a(i,["responseModalities"],N);const V=s(e,["mediaResolution"]);V!=null&&a(i,["mediaResolution"],V);const E=s(e,["speechConfig"]);if(E!=null&&a(i,["speechConfig"],Qv(la(E))),s(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const y=s(e,["thinkingConfig"]);y!=null&&a(i,["thinkingConfig"],n0(y));const k=s(e,["imageConfig"]);return k!=null&&a(i,["imageConfig"],dv(k)),i}function k_(n,e,t){const i={},o=s(e,["systemInstruction"]);t!==void 0&&o!=null&&a(t,["systemInstruction"],Hi(bt(o)));const r=s(e,["temperature"]);r!=null&&a(i,["temperature"],r);const l=s(e,["topP"]);l!=null&&a(i,["topP"],l);const u=s(e,["topK"]);u!=null&&a(i,["topK"],u);const c=s(e,["candidateCount"]);c!=null&&a(i,["candidateCount"],c);const f=s(e,["maxOutputTokens"]);f!=null&&a(i,["maxOutputTokens"],f);const d=s(e,["stopSequences"]);d!=null&&a(i,["stopSequences"],d);const h=s(e,["responseLogprobs"]);h!=null&&a(i,["responseLogprobs"],h);const p=s(e,["logprobs"]);p!=null&&a(i,["logprobs"],p);const m=s(e,["presencePenalty"]);m!=null&&a(i,["presencePenalty"],m);const S=s(e,["frequencyPenalty"]);S!=null&&a(i,["frequencyPenalty"],S);const x=s(e,["seed"]);x!=null&&a(i,["seed"],x);const T=s(e,["responseMimeType"]);T!=null&&a(i,["responseMimeType"],T);const g=s(e,["responseSchema"]);g!=null&&a(i,["responseSchema"],qv(aa(g)));const w=s(e,["responseJsonSchema"]);w!=null&&a(i,["responseJsonSchema"],w);const A=s(e,["routingConfig"]);A!=null&&a(i,["routingConfig"],A);const M=s(e,["modelSelectionConfig"]);M!=null&&a(i,["modelConfig"],Av(M));const B=s(e,["safetySettings"]);if(t!==void 0&&B!=null){let J=B;Array.isArray(J)&&(J=J.map(fe=>zv(fe))),a(t,["safetySettings"],J)}const b=s(e,["tools"]);if(t!==void 0&&b!=null){let J=Oi(b);Array.isArray(J)&&(J=J.map(fe=>Ac(Vi(fe)))),a(t,["tools"],J)}const N=s(e,["toolConfig"]);t!==void 0&&N!=null&&a(t,["toolConfig"],r0(N));const V=s(e,["labels"]);t!==void 0&&V!=null&&a(t,["labels"],V);const E=s(e,["cachedContent"]);t!==void 0&&E!=null&&a(t,["cachedContent"],Dn(n,E));const y=s(e,["responseModalities"]);y!=null&&a(i,["responseModalities"],y);const k=s(e,["mediaResolution"]);k!=null&&a(i,["mediaResolution"],k);const q=s(e,["speechConfig"]);q!=null&&a(i,["speechConfig"],jv(la(q)));const $=s(e,["audioTimestamp"]);$!=null&&a(i,["audioTimestamp"],$);const te=s(e,["thinkingConfig"]);te!=null&&a(i,["thinkingConfig"],i0(te));const oe=s(e,["imageConfig"]);return oe!=null&&a(i,["imageConfig"],hv(oe)),i}function Ol(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["contents"]);if(o!=null){let l=jt(o);Array.isArray(l)&&(l=l.map(u=>pr(u))),a(t,["contents"],l)}const r=s(e,["config"]);return r!=null&&a(t,["generationConfig"],B_(n,r,t)),t}function Gl(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["contents"]);if(o!=null){let l=jt(o);Array.isArray(l)&&(l=l.map(u=>Hi(u))),a(t,["contents"],l)}const r=s(e,["config"]);return r!=null&&a(t,["generationConfig"],k_(n,r,t)),t}function Hl(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["candidates"]);if(i!=null){let c=i;Array.isArray(c)&&(c=c.map(f=>kg(f))),a(e,["candidates"],c)}const o=s(n,["modelVersion"]);o!=null&&a(e,["modelVersion"],o);const r=s(n,["promptFeedback"]);r!=null&&a(e,["promptFeedback"],r);const l=s(n,["responseId"]);l!=null&&a(e,["responseId"],l);const u=s(n,["usageMetadata"]);return u!=null&&a(e,["usageMetadata"],u),e}function zl(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["candidates"]);if(i!=null){let f=i;Array.isArray(f)&&(f=f.map(d=>Vg(d))),a(e,["candidates"],f)}const o=s(n,["createTime"]);o!=null&&a(e,["createTime"],o);const r=s(n,["modelVersion"]);r!=null&&a(e,["modelVersion"],r);const l=s(n,["promptFeedback"]);l!=null&&a(e,["promptFeedback"],l);const u=s(n,["responseId"]);u!=null&&a(e,["responseId"],u);const c=s(n,["usageMetadata"]);return c!=null&&a(e,["usageMetadata"],c),e}function V_(n,e){const t={};if(s(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(s(n,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const i=s(n,["numberOfImages"]);e!==void 0&&i!=null&&a(e,["parameters","sampleCount"],i);const o=s(n,["aspectRatio"]);e!==void 0&&o!=null&&a(e,["parameters","aspectRatio"],o);const r=s(n,["guidanceScale"]);if(e!==void 0&&r!=null&&a(e,["parameters","guidanceScale"],r),s(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const l=s(n,["safetyFilterLevel"]);e!==void 0&&l!=null&&a(e,["parameters","safetySetting"],l);const u=s(n,["personGeneration"]);e!==void 0&&u!=null&&a(e,["parameters","personGeneration"],u);const c=s(n,["includeSafetyAttributes"]);e!==void 0&&c!=null&&a(e,["parameters","includeSafetyAttributes"],c);const f=s(n,["includeRaiReason"]);e!==void 0&&f!=null&&a(e,["parameters","includeRaiReason"],f);const d=s(n,["language"]);e!==void 0&&d!=null&&a(e,["parameters","language"],d);const h=s(n,["outputMimeType"]);e!==void 0&&h!=null&&a(e,["parameters","outputOptions","mimeType"],h);const p=s(n,["outputCompressionQuality"]);if(e!==void 0&&p!=null&&a(e,["parameters","outputOptions","compressionQuality"],p),s(n,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");const m=s(n,["imageSize"]);if(e!==void 0&&m!=null&&a(e,["parameters","sampleImageSize"],m),s(n,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return t}function O_(n,e){const t={},i=s(n,["outputGcsUri"]);e!==void 0&&i!=null&&a(e,["parameters","storageUri"],i);const o=s(n,["negativePrompt"]);e!==void 0&&o!=null&&a(e,["parameters","negativePrompt"],o);const r=s(n,["numberOfImages"]);e!==void 0&&r!=null&&a(e,["parameters","sampleCount"],r);const l=s(n,["aspectRatio"]);e!==void 0&&l!=null&&a(e,["parameters","aspectRatio"],l);const u=s(n,["guidanceScale"]);e!==void 0&&u!=null&&a(e,["parameters","guidanceScale"],u);const c=s(n,["seed"]);e!==void 0&&c!=null&&a(e,["parameters","seed"],c);const f=s(n,["safetyFilterLevel"]);e!==void 0&&f!=null&&a(e,["parameters","safetySetting"],f);const d=s(n,["personGeneration"]);e!==void 0&&d!=null&&a(e,["parameters","personGeneration"],d);const h=s(n,["includeSafetyAttributes"]);e!==void 0&&h!=null&&a(e,["parameters","includeSafetyAttributes"],h);const p=s(n,["includeRaiReason"]);e!==void 0&&p!=null&&a(e,["parameters","includeRaiReason"],p);const m=s(n,["language"]);e!==void 0&&m!=null&&a(e,["parameters","language"],m);const S=s(n,["outputMimeType"]);e!==void 0&&S!=null&&a(e,["parameters","outputOptions","mimeType"],S);const x=s(n,["outputCompressionQuality"]);e!==void 0&&x!=null&&a(e,["parameters","outputOptions","compressionQuality"],x);const T=s(n,["addWatermark"]);e!==void 0&&T!=null&&a(e,["parameters","addWatermark"],T);const g=s(n,["imageSize"]);e!==void 0&&g!=null&&a(e,["parameters","sampleImageSize"],g);const w=s(n,["enhancePrompt"]);return e!==void 0&&w!=null&&a(e,["parameters","enhancePrompt"],w),t}function G_(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["prompt"]);o!=null&&a(t,["instances[0]","prompt"],o);const r=s(e,["config"]);return r!=null&&V_(r,t),t}function H_(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["prompt"]);o!=null&&a(t,["instances[0]","prompt"],o);const r=s(e,["config"]);return r!=null&&O_(r,t),t}function z_(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["predictions"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(l=>tv(l))),a(e,["generatedImages"],r)}const o=s(n,["positivePromptSafetyAttributes"]);return o!=null&&a(e,["positivePromptSafetyAttributes"],Ec(o)),e}function W_(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["predictions"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(l=>mr(l))),a(e,["generatedImages"],r)}const o=s(n,["positivePromptSafetyAttributes"]);return o!=null&&a(e,["positivePromptSafetyAttributes"],Cc(o)),e}function q_(n,e){const t={},i=s(n,["numberOfVideos"]);if(e!==void 0&&i!=null&&a(e,["parameters","sampleCount"],i),s(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(s(n,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const o=s(n,["durationSeconds"]);if(e!==void 0&&o!=null&&a(e,["parameters","durationSeconds"],o),s(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const r=s(n,["aspectRatio"]);e!==void 0&&r!=null&&a(e,["parameters","aspectRatio"],r);const l=s(n,["resolution"]);e!==void 0&&l!=null&&a(e,["parameters","resolution"],l);const u=s(n,["personGeneration"]);if(e!==void 0&&u!=null&&a(e,["parameters","personGeneration"],u),s(n,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const c=s(n,["negativePrompt"]);e!==void 0&&c!=null&&a(e,["parameters","negativePrompt"],c);const f=s(n,["enhancePrompt"]);if(e!==void 0&&f!=null&&a(e,["parameters","enhancePrompt"],f),s(n,["generateAudio"])!==void 0)throw new Error("generateAudio parameter is not supported in Gemini API.");if(s(n,["lastFrame"])!==void 0)throw new Error("lastFrame parameter is not supported in Gemini API.");if(s(n,["referenceImages"])!==void 0)throw new Error("referenceImages parameter is not supported in Gemini API.");if(s(n,["mask"])!==void 0)throw new Error("mask parameter is not supported in Gemini API.");if(s(n,["compressionQuality"])!==void 0)throw new Error("compressionQuality parameter is not supported in Gemini API.");return t}function X_(n,e){const t={},i=s(n,["numberOfVideos"]);e!==void 0&&i!=null&&a(e,["parameters","sampleCount"],i);const o=s(n,["outputGcsUri"]);e!==void 0&&o!=null&&a(e,["parameters","storageUri"],o);const r=s(n,["fps"]);e!==void 0&&r!=null&&a(e,["parameters","fps"],r);const l=s(n,["durationSeconds"]);e!==void 0&&l!=null&&a(e,["parameters","durationSeconds"],l);const u=s(n,["seed"]);e!==void 0&&u!=null&&a(e,["parameters","seed"],u);const c=s(n,["aspectRatio"]);e!==void 0&&c!=null&&a(e,["parameters","aspectRatio"],c);const f=s(n,["resolution"]);e!==void 0&&f!=null&&a(e,["parameters","resolution"],f);const d=s(n,["personGeneration"]);e!==void 0&&d!=null&&a(e,["parameters","personGeneration"],d);const h=s(n,["pubsubTopic"]);e!==void 0&&h!=null&&a(e,["parameters","pubsubTopic"],h);const p=s(n,["negativePrompt"]);e!==void 0&&p!=null&&a(e,["parameters","negativePrompt"],p);const m=s(n,["enhancePrompt"]);e!==void 0&&m!=null&&a(e,["parameters","enhancePrompt"],m);const S=s(n,["generateAudio"]);e!==void 0&&S!=null&&a(e,["parameters","generateAudio"],S);const x=s(n,["lastFrame"]);e!==void 0&&x!=null&&a(e,["instances[0]","lastFrame"],fn(x));const T=s(n,["referenceImages"]);if(e!==void 0&&T!=null){let A=T;Array.isArray(A)&&(A=A.map(M=>C0(M))),a(e,["instances[0]","referenceImages"],A)}const g=s(n,["mask"]);e!==void 0&&g!=null&&a(e,["instances[0]","mask"],E0(g));const w=s(n,["compressionQuality"]);return e!==void 0&&w!=null&&a(e,["parameters","compressionQuality"],w),t}function Y_(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["metadata"]);i!=null&&a(e,["metadata"],i);const o=s(n,["done"]);o!=null&&a(e,["done"],o);const r=s(n,["error"]);r!=null&&a(e,["error"],r);const l=s(n,["response","generateVideoResponse"]);return l!=null&&a(e,["response"],Z_(l)),e}function $_(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["metadata"]);i!=null&&a(e,["metadata"],i);const o=s(n,["done"]);o!=null&&a(e,["done"],o);const r=s(n,["error"]);r!=null&&a(e,["error"],r);const l=s(n,["response"]);return l!=null&&a(e,["response"],Q_(l)),e}function J_(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["prompt"]);o!=null&&a(t,["instances[0]","prompt"],o);const r=s(e,["image"]);if(r!=null&&a(t,["instances[0]","image"],Mc(r)),s(e,["video"])!==void 0)throw new Error("video parameter is not supported in Gemini API.");const l=s(e,["source"]);l!=null&&j_(l,t);const u=s(e,["config"]);return u!=null&&q_(u,t),t}function K_(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["prompt"]);o!=null&&a(t,["instances[0]","prompt"],o);const r=s(e,["image"]);r!=null&&a(t,["instances[0]","image"],fn(r));const l=s(e,["video"]);l!=null&&a(t,["instances[0]","video"],Rc(l));const u=s(e,["source"]);u!=null&&ev(u,t);const c=s(e,["config"]);return c!=null&&X_(c,t),t}function Z_(n){const e={},t=s(n,["generatedSamples"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(l=>iv(l))),a(e,["generatedVideos"],r)}const i=s(n,["raiMediaFilteredCount"]);i!=null&&a(e,["raiMediaFilteredCount"],i);const o=s(n,["raiMediaFilteredReasons"]);return o!=null&&a(e,["raiMediaFilteredReasons"],o),e}function Q_(n){const e={},t=s(n,["videos"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(l=>ov(l))),a(e,["generatedVideos"],r)}const i=s(n,["raiMediaFilteredCount"]);i!=null&&a(e,["raiMediaFilteredCount"],i);const o=s(n,["raiMediaFilteredReasons"]);return o!=null&&a(e,["raiMediaFilteredReasons"],o),e}function j_(n,e){const t={},i=s(n,["prompt"]);e!==void 0&&i!=null&&a(e,["instances[0]","prompt"],i);const o=s(n,["image"]);if(e!==void 0&&o!=null&&a(e,["instances[0]","image"],Mc(o)),s(n,["video"])!==void 0)throw new Error("video parameter is not supported in Gemini API.");return t}function ev(n,e){const t={},i=s(n,["prompt"]);e!==void 0&&i!=null&&a(e,["instances[0]","prompt"],i);const o=s(n,["image"]);e!==void 0&&o!=null&&a(e,["instances[0]","image"],fn(o));const r=s(n,["video"]);return e!==void 0&&r!=null&&a(e,["instances[0]","video"],Rc(r)),t}function tv(n){const e={},t=s(n,["_self"]);t!=null&&a(e,["image"],pv(t));const i=s(n,["raiFilteredReason"]);i!=null&&a(e,["raiFilteredReason"],i);const o=s(n,["_self"]);return o!=null&&a(e,["safetyAttributes"],Ec(o)),e}function mr(n){const e={},t=s(n,["_self"]);t!=null&&a(e,["image"],yc(t));const i=s(n,["raiFilteredReason"]);i!=null&&a(e,["raiFilteredReason"],i);const o=s(n,["_self"]);o!=null&&a(e,["safetyAttributes"],Cc(o));const r=s(n,["prompt"]);return r!=null&&a(e,["enhancedPrompt"],r),e}function nv(n){const e={},t=s(n,["_self"]);t!=null&&a(e,["mask"],yc(t));const i=s(n,["labels"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>E_(r))),a(e,["labels"],o)}return e}function iv(n){const e={},t=s(n,["_self"]);return t!=null&&a(e,["video"],y0(t)),e}function ov(n){const e={},t=s(n,["_self"]);return t!=null&&a(e,["video"],M0(t)),e}function rv(n,e){const t={},i=s(e,["model"]);return i!=null&&a(t,["_url","name"],at(n,i)),t}function sv(n,e){const t={},i=s(e,["model"]);return i!=null&&a(t,["_url","name"],at(n,i)),t}function av(n){const e={},t=s(n,["authConfig"]);return t!=null&&a(e,["authConfig"],Ug(t)),e}function lv(n){const e={},t=s(n,["dynamicRetrievalConfig"]);return t!=null&&a(e,["dynamicRetrievalConfig"],u_(t)),e}function uv(n){const e={},t=s(n,["dynamicRetrievalConfig"]);return t!=null&&a(e,["dynamicRetrievalConfig"],c_(t)),e}function cv(n){const e={},t=s(n,["timeRangeFilter"]);if(t!=null&&a(e,["timeRangeFilter"],mv(t)),s(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");return e}function fv(n){const e={},t=s(n,["timeRangeFilter"]);t!=null&&a(e,["timeRangeFilter"],gv(t));const i=s(n,["excludeDomains"]);return i!=null&&a(e,["excludeDomains"],i),e}function dv(n){const e={},t=s(n,["aspectRatio"]);return t!=null&&a(e,["aspectRatio"],t),e}function hv(n){const e={},t=s(n,["aspectRatio"]);return t!=null&&a(e,["aspectRatio"],t),e}function pv(n){const e={},t=s(n,["bytesBase64Encoded"]);t!=null&&a(e,["imageBytes"],li(t));const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function yc(n){const e={},t=s(n,["gcsUri"]);t!=null&&a(e,["gcsUri"],t);const i=s(n,["bytesBase64Encoded"]);i!=null&&a(e,["imageBytes"],li(i));const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function Mc(n){const e={};if(s(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const t=s(n,["imageBytes"]);t!=null&&a(e,["bytesBase64Encoded"],li(t));const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function fn(n){const e={},t=s(n,["gcsUri"]);t!=null&&a(e,["gcsUri"],t);const i=s(n,["imageBytes"]);i!=null&&a(e,["bytesBase64Encoded"],li(i));const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function mv(n){const e={},t=s(n,["startTime"]);t!=null&&a(e,["startTime"],t);const i=s(n,["endTime"]);return i!=null&&a(e,["endTime"],i),e}function gv(n){const e={},t=s(n,["startTime"]);t!=null&&a(e,["startTime"],t);const i=s(n,["endTime"]);return i!=null&&a(e,["endTime"],i),e}function _v(n){const e={},t=s(n,["latitude"]);t!=null&&a(e,["latitude"],t);const i=s(n,["longitude"]);return i!=null&&a(e,["longitude"],i),e}function vv(n){const e={},t=s(n,["latitude"]);t!=null&&a(e,["latitude"],t);const i=s(n,["longitude"]);return i!=null&&a(e,["longitude"],i),e}function Tv(n,e,t){const i={},o=s(e,["pageSize"]);t!==void 0&&o!=null&&a(t,["_query","pageSize"],o);const r=s(e,["pageToken"]);t!==void 0&&r!=null&&a(t,["_query","pageToken"],r);const l=s(e,["filter"]);t!==void 0&&l!=null&&a(t,["_query","filter"],l);const u=s(e,["queryBase"]);return t!==void 0&&u!=null&&a(t,["_url","models_url"],sc(n,u)),i}function Sv(n,e,t){const i={},o=s(e,["pageSize"]);t!==void 0&&o!=null&&a(t,["_query","pageSize"],o);const r=s(e,["pageToken"]);t!==void 0&&r!=null&&a(t,["_query","pageToken"],r);const l=s(e,["filter"]);t!==void 0&&l!=null&&a(t,["_query","filter"],l);const u=s(e,["queryBase"]);return t!==void 0&&u!=null&&a(t,["_url","models_url"],sc(n,u)),i}function xv(n,e){const t={},i=s(e,["config"]);return i!=null&&Tv(n,i,t),t}function yv(n,e){const t={},i=s(e,["config"]);return i!=null&&Sv(n,i,t),t}function Mv(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["nextPageToken"]);i!=null&&a(e,["nextPageToken"],i);const o=s(n,["_self"]);if(o!=null){let r=ac(o);Array.isArray(r)&&(r=r.map(l=>fs(l))),a(e,["models"],r)}return e}function Ev(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["nextPageToken"]);i!=null&&a(e,["nextPageToken"],i);const o=s(n,["_self"]);if(o!=null){let r=ac(o);Array.isArray(r)&&(r=r.map(l=>ds(l))),a(e,["models"],r)}return e}function Cv(n){const e={},t=s(n,["maskMode"]);t!=null&&a(e,["maskMode"],t);const i=s(n,["segmentationClasses"]);i!=null&&a(e,["maskClasses"],i);const o=s(n,["maskDilation"]);return o!=null&&a(e,["dilation"],o),e}function fs(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["displayName"]);i!=null&&a(e,["displayName"],i);const o=s(n,["description"]);o!=null&&a(e,["description"],o);const r=s(n,["version"]);r!=null&&a(e,["version"],r);const l=s(n,["_self"]);l!=null&&a(e,["tunedModelInfo"],a0(l));const u=s(n,["inputTokenLimit"]);u!=null&&a(e,["inputTokenLimit"],u);const c=s(n,["outputTokenLimit"]);c!=null&&a(e,["outputTokenLimit"],c);const f=s(n,["supportedGenerationMethods"]);return f!=null&&a(e,["supportedActions"],f),e}function ds(n){const e={},t=s(n,["name"]);t!=null&&a(e,["name"],t);const i=s(n,["displayName"]);i!=null&&a(e,["displayName"],i);const o=s(n,["description"]);o!=null&&a(e,["description"],o);const r=s(n,["versionId"]);r!=null&&a(e,["version"],r);const l=s(n,["deployedModels"]);if(l!=null){let h=l;Array.isArray(h)&&(h=h.map(p=>y_(p))),a(e,["endpoints"],h)}const u=s(n,["labels"]);u!=null&&a(e,["labels"],u);const c=s(n,["_self"]);c!=null&&a(e,["tunedModelInfo"],l0(c));const f=s(n,["defaultCheckpointId"]);f!=null&&a(e,["defaultCheckpointId"],f);const d=s(n,["checkpoints"]);if(d!=null){let h=d;Array.isArray(h)&&(h=h.map(p=>Og(p))),a(e,["checkpoints"],h)}return e}function Av(n){const e={},t=s(n,["featureSelectionPreference"]);return t!=null&&a(e,["featureSelectionPreference"],t),e}function Rv(n){const e={},t=s(n,["speakerVoiceConfigs"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>Zv(o))),a(e,["speakerVoiceConfigs"],i)}return e}function wv(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],A0(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],Ng(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],C_(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],I_(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function Iv(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],R0(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],Lg(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],A_(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],P_(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function Pv(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],w0(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],Fg(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],R_(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],D_(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function Dv(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],I0(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],Bg(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],w_(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],b_(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function bv(n){const e={},t=s(n,["voiceName"]);return t!=null&&a(e,["voiceName"],t),e}function Uv(n){const e={},t=s(n,["voiceName"]);return t!=null&&a(e,["voiceName"],t),e}function Nv(n){const e={},t=s(n,["productImage"]);return t!=null&&a(e,["image"],fn(t)),e}function Lv(n,e){const t={},i=s(n,["numberOfImages"]);e!==void 0&&i!=null&&a(e,["parameters","sampleCount"],i);const o=s(n,["baseSteps"]);e!==void 0&&o!=null&&a(e,["parameters","editConfig","baseSteps"],o);const r=s(n,["outputGcsUri"]);e!==void 0&&r!=null&&a(e,["parameters","storageUri"],r);const l=s(n,["seed"]);e!==void 0&&l!=null&&a(e,["parameters","seed"],l);const u=s(n,["safetyFilterLevel"]);e!==void 0&&u!=null&&a(e,["parameters","safetySetting"],u);const c=s(n,["personGeneration"]);e!==void 0&&c!=null&&a(e,["parameters","personGeneration"],c);const f=s(n,["addWatermark"]);e!==void 0&&f!=null&&a(e,["parameters","addWatermark"],f);const d=s(n,["outputMimeType"]);e!==void 0&&d!=null&&a(e,["parameters","outputOptions","mimeType"],d);const h=s(n,["outputCompressionQuality"]);e!==void 0&&h!=null&&a(e,["parameters","outputOptions","compressionQuality"],h);const p=s(n,["enhancePrompt"]);return e!==void 0&&p!=null&&a(e,["parameters","enhancePrompt"],p),t}function Fv(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["source"]);o!=null&&kv(o,t);const r=s(e,["config"]);return r!=null&&Lv(r,t),t}function Bv(n){const e={},t=s(n,["predictions"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>mr(o))),a(e,["generatedImages"],i)}return e}function kv(n,e){const t={},i=s(n,["prompt"]);e!==void 0&&i!=null&&a(e,["instances[0]","prompt"],i);const o=s(n,["personImage"]);e!==void 0&&o!=null&&a(e,["instances[0]","personImage","image"],fn(o));const r=s(n,["productImages"]);if(e!==void 0&&r!=null){let l=r;Array.isArray(l)&&(l=l.map(u=>Nv(u))),a(e,["instances[0]","productImages"],l)}return t}function Vv(n){const e={},t=s(n,["referenceImage"]);t!=null&&a(e,["referenceImage"],fn(t));const i=s(n,["referenceId"]);i!=null&&a(e,["referenceId"],i);const o=s(n,["referenceType"]);o!=null&&a(e,["referenceType"],o);const r=s(n,["maskImageConfig"]);r!=null&&a(e,["maskImageConfig"],Cv(r));const l=s(n,["controlImageConfig"]);l!=null&&a(e,["controlImageConfig"],Qg(l));const u=s(n,["styleImageConfig"]);u!=null&&a(e,["styleImageConfig"],e0(u));const c=s(n,["subjectImageConfig"]);return c!=null&&a(e,["subjectImageConfig"],t0(c)),e}function Ov(n){const e={},t=s(n,["latLng"]);t!=null&&a(e,["latLng"],_v(t));const i=s(n,["languageCode"]);return i!=null&&a(e,["languageCode"],i),e}function Gv(n){const e={},t=s(n,["latLng"]);t!=null&&a(e,["latLng"],vv(t));const i=s(n,["languageCode"]);return i!=null&&a(e,["languageCode"],i),e}function Ec(n){const e={},t=s(n,["safetyAttributes","categories"]);t!=null&&a(e,["categories"],t);const i=s(n,["safetyAttributes","scores"]);i!=null&&a(e,["scores"],i);const o=s(n,["contentType"]);return o!=null&&a(e,["contentType"],o),e}function Cc(n){const e={},t=s(n,["safetyAttributes","categories"]);t!=null&&a(e,["categories"],t);const i=s(n,["safetyAttributes","scores"]);i!=null&&a(e,["scores"],i);const o=s(n,["contentType"]);return o!=null&&a(e,["contentType"],o),e}function Hv(n){const e={};if(s(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const t=s(n,["category"]);t!=null&&a(e,["category"],t);const i=s(n,["threshold"]);return i!=null&&a(e,["threshold"],i),e}function zv(n){const e={},t=s(n,["method"]);t!=null&&a(e,["method"],t);const i=s(n,["category"]);i!=null&&a(e,["category"],i);const o=s(n,["threshold"]);return o!=null&&a(e,["threshold"],o),e}function Wv(n){const e={},t=s(n,["anyOf"]);t!=null&&a(e,["anyOf"],t);const i=s(n,["default"]);i!=null&&a(e,["default"],i);const o=s(n,["description"]);o!=null&&a(e,["description"],o);const r=s(n,["enum"]);r!=null&&a(e,["enum"],r);const l=s(n,["example"]);l!=null&&a(e,["example"],l);const u=s(n,["format"]);u!=null&&a(e,["format"],u);const c=s(n,["items"]);c!=null&&a(e,["items"],c);const f=s(n,["maxItems"]);f!=null&&a(e,["maxItems"],f);const d=s(n,["maxLength"]);d!=null&&a(e,["maxLength"],d);const h=s(n,["maxProperties"]);h!=null&&a(e,["maxProperties"],h);const p=s(n,["maximum"]);p!=null&&a(e,["maximum"],p);const m=s(n,["minItems"]);m!=null&&a(e,["minItems"],m);const S=s(n,["minLength"]);S!=null&&a(e,["minLength"],S);const x=s(n,["minProperties"]);x!=null&&a(e,["minProperties"],x);const T=s(n,["minimum"]);T!=null&&a(e,["minimum"],T);const g=s(n,["nullable"]);g!=null&&a(e,["nullable"],g);const w=s(n,["pattern"]);w!=null&&a(e,["pattern"],w);const A=s(n,["properties"]);A!=null&&a(e,["properties"],A);const M=s(n,["propertyOrdering"]);M!=null&&a(e,["propertyOrdering"],M);const B=s(n,["required"]);B!=null&&a(e,["required"],B);const b=s(n,["title"]);b!=null&&a(e,["title"],b);const N=s(n,["type"]);return N!=null&&a(e,["type"],N),e}function qv(n){const e={},t=s(n,["anyOf"]);t!=null&&a(e,["anyOf"],t);const i=s(n,["default"]);i!=null&&a(e,["default"],i);const o=s(n,["description"]);o!=null&&a(e,["description"],o);const r=s(n,["enum"]);r!=null&&a(e,["enum"],r);const l=s(n,["example"]);l!=null&&a(e,["example"],l);const u=s(n,["format"]);u!=null&&a(e,["format"],u);const c=s(n,["items"]);c!=null&&a(e,["items"],c);const f=s(n,["maxItems"]);f!=null&&a(e,["maxItems"],f);const d=s(n,["maxLength"]);d!=null&&a(e,["maxLength"],d);const h=s(n,["maxProperties"]);h!=null&&a(e,["maxProperties"],h);const p=s(n,["maximum"]);p!=null&&a(e,["maximum"],p);const m=s(n,["minItems"]);m!=null&&a(e,["minItems"],m);const S=s(n,["minLength"]);S!=null&&a(e,["minLength"],S);const x=s(n,["minProperties"]);x!=null&&a(e,["minProperties"],x);const T=s(n,["minimum"]);T!=null&&a(e,["minimum"],T);const g=s(n,["nullable"]);g!=null&&a(e,["nullable"],g);const w=s(n,["pattern"]);w!=null&&a(e,["pattern"],w);const A=s(n,["properties"]);A!=null&&a(e,["properties"],A);const M=s(n,["propertyOrdering"]);M!=null&&a(e,["propertyOrdering"],M);const B=s(n,["required"]);B!=null&&a(e,["required"],B);const b=s(n,["title"]);b!=null&&a(e,["title"],b);const N=s(n,["type"]);return N!=null&&a(e,["type"],N),e}function Xv(n){const e={},t=s(n,["image"]);return t!=null&&a(e,["image"],fn(t)),e}function Yv(n,e){const t={},i=s(n,["mode"]);e!==void 0&&i!=null&&a(e,["parameters","mode"],i);const o=s(n,["maxPredictions"]);e!==void 0&&o!=null&&a(e,["parameters","maxPredictions"],o);const r=s(n,["confidenceThreshold"]);e!==void 0&&r!=null&&a(e,["parameters","confidenceThreshold"],r);const l=s(n,["maskDilation"]);e!==void 0&&l!=null&&a(e,["parameters","maskDilation"],l);const u=s(n,["binaryColorThreshold"]);return e!==void 0&&u!=null&&a(e,["parameters","binaryColorThreshold"],u),t}function $v(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["source"]);o!=null&&Kv(o,t);const r=s(e,["config"]);return r!=null&&Yv(r,t),t}function Jv(n){const e={},t=s(n,["predictions"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>nv(o))),a(e,["generatedMasks"],i)}return e}function Kv(n,e){const t={},i=s(n,["prompt"]);e!==void 0&&i!=null&&a(e,["instances[0]","prompt"],i);const o=s(n,["image"]);e!==void 0&&o!=null&&a(e,["instances[0]","image"],fn(o));const r=s(n,["scribbleImage"]);return e!==void 0&&r!=null&&a(e,["instances[0]","scribble"],Xv(r)),t}function Zv(n){const e={},t=s(n,["speaker"]);t!=null&&a(e,["speaker"],t);const i=s(n,["voiceConfig"]);return i!=null&&a(e,["voiceConfig"],wc(i)),e}function Qv(n){const e={},t=s(n,["voiceConfig"]);t!=null&&a(e,["voiceConfig"],wc(t));const i=s(n,["multiSpeakerVoiceConfig"]);i!=null&&a(e,["multiSpeakerVoiceConfig"],Rv(i));const o=s(n,["languageCode"]);return o!=null&&a(e,["languageCode"],o),e}function jv(n){const e={},t=s(n,["voiceConfig"]);if(t!=null&&a(e,["voiceConfig"],P0(t)),s(n,["multiSpeakerVoiceConfig"])!==void 0)throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");const i=s(n,["languageCode"]);return i!=null&&a(e,["languageCode"],i),e}function e0(n){const e={},t=s(n,["styleDescription"]);return t!=null&&a(e,["styleDescription"],t),e}function t0(n){const e={},t=s(n,["subjectType"]);t!=null&&a(e,["subjectType"],t);const i=s(n,["subjectDescription"]);return i!=null&&a(e,["subjectDescription"],i),e}function n0(n){const e={},t=s(n,["includeThoughts"]);t!=null&&a(e,["includeThoughts"],t);const i=s(n,["thinkingBudget"]);return i!=null&&a(e,["thinkingBudget"],i),e}function i0(n){const e={},t=s(n,["includeThoughts"]);t!=null&&a(e,["includeThoughts"],t);const i=s(n,["thinkingBudget"]);return i!=null&&a(e,["thinkingBudget"],i),e}function o0(n){const e={},t=s(n,["functionCallingConfig"]);t!=null&&a(e,["functionCallingConfig"],U_(t));const i=s(n,["retrievalConfig"]);return i!=null&&a(e,["retrievalConfig"],Ov(i)),e}function r0(n){const e={},t=s(n,["functionCallingConfig"]);t!=null&&a(e,["functionCallingConfig"],N_(t));const i=s(n,["retrievalConfig"]);return i!=null&&a(e,["retrievalConfig"],Gv(i)),e}function s0(n){const e={},t=s(n,["functionDeclarations"]);if(t!=null){let c=t;Array.isArray(c)&&(c=c.map(f=>L_(f))),a(e,["functionDeclarations"],c)}if(s(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=s(n,["googleSearch"]);i!=null&&a(e,["googleSearch"],cv(i));const o=s(n,["googleSearchRetrieval"]);if(o!=null&&a(e,["googleSearchRetrieval"],lv(o)),s(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");if(s(n,["googleMaps"])!==void 0)throw new Error("googleMaps parameter is not supported in Gemini API.");s(n,["urlContext"])!=null&&a(e,["urlContext"],v0());const l=s(n,["computerUse"]);l!=null&&a(e,["computerUse"],qg(l));const u=s(n,["codeExecution"]);return u!=null&&a(e,["codeExecution"],u),e}function Ac(n){const e={},t=s(n,["functionDeclarations"]);if(t!=null){let h=t;Array.isArray(h)&&(h=h.map(p=>F_(p))),a(e,["functionDeclarations"],h)}const i=s(n,["retrieval"]);i!=null&&a(e,["retrieval"],i);const o=s(n,["googleSearch"]);o!=null&&a(e,["googleSearch"],fv(o));const r=s(n,["googleSearchRetrieval"]);r!=null&&a(e,["googleSearchRetrieval"],uv(r));const l=s(n,["enterpriseWebSearch"]);l!=null&&a(e,["enterpriseWebSearch"],M_(l));const u=s(n,["googleMaps"]);u!=null&&a(e,["googleMaps"],av(u)),s(n,["urlContext"])!=null&&a(e,["urlContext"],T0());const f=s(n,["computerUse"]);f!=null&&a(e,["computerUse"],Xg(f));const d=s(n,["codeExecution"]);return d!=null&&a(e,["codeExecution"],d),e}function a0(n){const e={},t=s(n,["baseModel"]);t!=null&&a(e,["baseModel"],t);const i=s(n,["createTime"]);i!=null&&a(e,["createTime"],i);const o=s(n,["updateTime"]);return o!=null&&a(e,["updateTime"],o),e}function l0(n){const e={},t=s(n,["labels","google-vertex-llm-tuning-base-model-id"]);t!=null&&a(e,["baseModel"],t);const i=s(n,["createTime"]);i!=null&&a(e,["createTime"],i);const o=s(n,["updateTime"]);return o!=null&&a(e,["updateTime"],o),e}function u0(n,e){const t={},i=s(n,["displayName"]);e!==void 0&&i!=null&&a(e,["displayName"],i);const o=s(n,["description"]);e!==void 0&&o!=null&&a(e,["description"],o);const r=s(n,["defaultCheckpointId"]);return e!==void 0&&r!=null&&a(e,["defaultCheckpointId"],r),t}function c0(n,e){const t={},i=s(n,["displayName"]);e!==void 0&&i!=null&&a(e,["displayName"],i);const o=s(n,["description"]);e!==void 0&&o!=null&&a(e,["description"],o);const r=s(n,["defaultCheckpointId"]);return e!==void 0&&r!=null&&a(e,["defaultCheckpointId"],r),t}function f0(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","name"],at(n,i));const o=s(e,["config"]);return o!=null&&u0(o,t),t}function d0(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["config"]);return o!=null&&c0(o,t),t}function h0(n,e){const t={},i=s(n,["outputGcsUri"]);e!==void 0&&i!=null&&a(e,["parameters","storageUri"],i);const o=s(n,["includeRaiReason"]);e!==void 0&&o!=null&&a(e,["parameters","includeRaiReason"],o);const r=s(n,["outputMimeType"]);e!==void 0&&r!=null&&a(e,["parameters","outputOptions","mimeType"],r);const l=s(n,["outputCompressionQuality"]);e!==void 0&&l!=null&&a(e,["parameters","outputOptions","compressionQuality"],l);const u=s(n,["enhanceInputImage"]);e!==void 0&&u!=null&&a(e,["parameters","upscaleConfig","enhanceInputImage"],u);const c=s(n,["imagePreservationFactor"]);e!==void 0&&c!=null&&a(e,["parameters","upscaleConfig","imagePreservationFactor"],c);const f=s(n,["numberOfImages"]);e!==void 0&&f!=null&&a(e,["parameters","sampleCount"],f);const d=s(n,["mode"]);return e!==void 0&&d!=null&&a(e,["parameters","mode"],d),t}function p0(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["_url","model"],at(n,i));const o=s(e,["image"]);o!=null&&a(t,["instances[0]","image"],fn(o));const r=s(e,["upscaleFactor"]);r!=null&&a(t,["parameters","upscaleConfig","upscaleFactor"],r);const l=s(e,["config"]);return l!=null&&h0(l,t),t}function m0(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["predictions"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>mr(r))),a(e,["generatedImages"],o)}return e}function g0(n){const e={},t=s(n,["urlMetadata"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>S0(o))),a(e,["urlMetadata"],i)}return e}function _0(n){const e={},t=s(n,["urlMetadata"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>x0(o))),a(e,["urlMetadata"],i)}return e}function v0(){return{}}function T0(){return{}}function S0(n){const e={},t=s(n,["retrievedUrl"]);t!=null&&a(e,["retrievedUrl"],t);const i=s(n,["urlRetrievalStatus"]);return i!=null&&a(e,["urlRetrievalStatus"],i),e}function x0(n){const e={},t=s(n,["retrievedUrl"]);t!=null&&a(e,["retrievedUrl"],t);const i=s(n,["urlRetrievalStatus"]);return i!=null&&a(e,["urlRetrievalStatus"],i),e}function y0(n){const e={},t=s(n,["video","uri"]);t!=null&&a(e,["uri"],t);const i=s(n,["video","encodedVideo"]);i!=null&&a(e,["videoBytes"],li(i));const o=s(n,["encoding"]);return o!=null&&a(e,["mimeType"],o),e}function M0(n){const e={},t=s(n,["gcsUri"]);t!=null&&a(e,["uri"],t);const i=s(n,["bytesBase64Encoded"]);i!=null&&a(e,["videoBytes"],li(i));const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function E0(n){const e={},t=s(n,["image"]);t!=null&&a(e,["_self"],fn(t));const i=s(n,["maskMode"]);return i!=null&&a(e,["maskMode"],i),e}function C0(n){const e={},t=s(n,["image"]);t!=null&&a(e,["image"],fn(t));const i=s(n,["referenceType"]);return i!=null&&a(e,["referenceType"],i),e}function A0(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function R0(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function w0(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function I0(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function Rc(n){const e={},t=s(n,["uri"]);t!=null&&a(e,["gcsUri"],t);const i=s(n,["videoBytes"]);i!=null&&a(e,["bytesBase64Encoded"],li(i));const o=s(n,["mimeType"]);return o!=null&&a(e,["mimeType"],o),e}function wc(n){const e={},t=s(n,["prebuiltVoiceConfig"]);return t!=null&&a(e,["prebuiltVoiceConfig"],bv(t)),e}function P0(n){const e={},t=s(n,["prebuiltVoiceConfig"]);return t!=null&&a(e,["prebuiltVoiceConfig"],Uv(t)),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const D0="Content-Type",b0="X-Server-Timeout",U0="User-Agent",hs="x-goog-api-client",N0="1.22.0",L0=`google-genai-sdk/${N0}`,F0="v1beta1",B0="v1beta",Wl=/^\s*data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;class k0{constructor(e){var t,i;this.clientOptions=Object.assign(Object.assign({},e),{project:e.project,location:e.location,apiKey:e.apiKey,vertexai:e.vertexai});const o={};this.clientOptions.vertexai?(o.apiVersion=(t=this.clientOptions.apiVersion)!==null&&t!==void 0?t:F0,o.baseUrl=this.baseUrlFromProjectLocation(),this.normalizeAuthParameters()):(o.apiVersion=(i=this.clientOptions.apiVersion)!==null&&i!==void 0?i:B0,o.baseUrl="https://generativelanguage.googleapis.com/"),o.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=o,e.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(o,e.httpOptions))}baseUrlFromProjectLocation(){return this.clientOptions.project&&this.clientOptions.location&&this.clientOptions.location!=="global"?`https://${this.clientOptions.location}-aiplatform.googleapis.com/`:"https://aiplatform.googleapis.com/"}normalizeAuthParameters(){if(this.clientOptions.project&&this.clientOptions.location){this.clientOptions.apiKey=void 0;return}this.clientOptions.project=void 0,this.clientOptions.location=void 0}isVertexAI(){var e;return(e=this.clientOptions.vertexai)!==null&&e!==void 0?e:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(e){if(!e||e.baseUrl===void 0||e.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const i=[e.baseUrl.endsWith("/")?e.baseUrl.slice(0,-1):e.baseUrl];return e.apiVersion&&e.apiVersion!==""&&i.push(e.apiVersion),i.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const e=this.getBaseUrl(),t=new URL(e);return t.protocol=t.protocol=="http:"?"ws":"wss",t.toString()}setBaseUrl(e){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=e;else throw new Error("HTTP options are not correctly set.")}constructUrl(e,t,i){const o=[this.getRequestUrlInternal(t)];return i&&o.push(this.getBaseResourcePath()),e!==""&&o.push(e),new URL(`${o.join("/")}`)}shouldPrependVertexProjectPath(e){return!(this.clientOptions.apiKey||!this.clientOptions.vertexai||e.path.startsWith("projects/")||e.httpMethod==="GET"&&e.path.startsWith("publishers/google/models"))}async request(e){let t=this.clientOptions.httpOptions;e.httpOptions&&(t=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const i=this.shouldPrependVertexProjectPath(e),o=this.constructUrl(e.path,t,i);if(e.queryParams)for(const[l,u]of Object.entries(e.queryParams))o.searchParams.append(l,String(u));let r={};if(e.httpMethod==="GET"){if(e.body&&e.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else r.body=e.body;return r=await this.includeExtraHttpOptionsToRequestInit(r,t,e.abortSignal),this.unaryApiCall(o,r,e.httpMethod)}patchHttpOptions(e,t){const i=JSON.parse(JSON.stringify(e));for(const[o,r]of Object.entries(t))typeof r=="object"?i[o]=Object.assign(Object.assign({},i[o]),r):r!==void 0&&(i[o]=r);return i}async requestStream(e){let t=this.clientOptions.httpOptions;e.httpOptions&&(t=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const i=this.shouldPrependVertexProjectPath(e),o=this.constructUrl(e.path,t,i);(!o.searchParams.has("alt")||o.searchParams.get("alt")!=="sse")&&o.searchParams.set("alt","sse");let r={};return r.body=e.body,r=await this.includeExtraHttpOptionsToRequestInit(r,t,e.abortSignal),this.streamApiCall(o,r,e.httpMethod)}async includeExtraHttpOptionsToRequestInit(e,t,i){if(t&&t.timeout||i){const o=new AbortController,r=o.signal;if(t.timeout&&(t==null?void 0:t.timeout)>0){const l=setTimeout(()=>o.abort(),t.timeout);l&&typeof l.unref=="function"&&l.unref()}i&&i.addEventListener("abort",()=>{o.abort()}),e.signal=r}return t&&t.extraBody!==null&&V0(e,t.extraBody),e.headers=await this.getHeadersInternal(t),e}async unaryApiCall(e,t,i){return this.apiCall(e.toString(),Object.assign(Object.assign({},t),{method:i})).then(async o=>(await ql(o),new ss(o))).catch(o=>{throw o instanceof Error?o:new Error(JSON.stringify(o))})}async streamApiCall(e,t,i){return this.apiCall(e.toString(),Object.assign(Object.assign({},t),{method:i})).then(async o=>(await ql(o),this.processStreamResponse(o))).catch(o=>{throw o instanceof Error?o:new Error(JSON.stringify(o))})}processStreamResponse(e){var t;return Pi(this,arguments,function*(){const o=(t=e==null?void 0:e.body)===null||t===void 0?void 0:t.getReader(),r=new TextDecoder("utf-8");if(!o)throw new Error("Response body is empty");try{let l="";for(;;){const{done:u,value:c}=yield gt(o.read());if(u){if(l.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const f=r.decode(c,{stream:!0});try{const h=JSON.parse(f);if("error"in h){const p=JSON.parse(JSON.stringify(h.error)),m=p.status,S=p.code,x=`got status: ${m}. ${JSON.stringify(h)}`;if(S>=400&&S<600)throw new hr({message:x,status:S})}}catch(h){if(h.name==="ApiError")throw h}l+=f;let d=l.match(Wl);for(;d;){const h=d[1];try{const p=new Response(h,{headers:e==null?void 0:e.headers,status:e==null?void 0:e.status,statusText:e==null?void 0:e.statusText});yield yield gt(new ss(p)),l=l.slice(d[0].length),d=l.match(Wl)}catch(p){throw new Error(`exception parsing stream chunk ${h}. ${p}`)}}}}finally{o.releaseLock()}})}async apiCall(e,t){return fetch(e,t).catch(i=>{throw new Error(`exception ${i} sending request`)})}getDefaultHeaders(){const e={},t=L0+" "+this.clientOptions.userAgentExtra;return e[U0]=t,e[hs]=t,e[D0]="application/json",e}async getHeadersInternal(e){const t=new Headers;if(e&&e.headers){for(const[i,o]of Object.entries(e.headers))t.append(i,o);e.timeout&&e.timeout>0&&t.append(b0,String(Math.ceil(e.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(t),t}async uploadFile(e,t){var i;const o={};t!=null&&(o.mimeType=t.mimeType,o.name=t.name,o.displayName=t.displayName),o.name&&!o.name.startsWith("files/")&&(o.name=`files/${o.name}`);const r=this.clientOptions.uploader,l=await r.stat(e);o.sizeBytes=String(l.size);const u=(i=t==null?void 0:t.mimeType)!==null&&i!==void 0?i:l.type;if(u===void 0||u==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");o.mimeType=u;const c=await this.fetchUploadUrl(o,t);return r.upload(e,c,this)}async downloadFile(e){await this.clientOptions.downloader.download(e,this)}async fetchUploadUrl(e,t){var i;let o={};t!=null&&t.httpOptions?o=t.httpOptions:o={apiVersion:"",headers:{"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${e.sizeBytes}`,"X-Goog-Upload-Header-Content-Type":`${e.mimeType}`}};const r={file:e},l=await this.request({path:Ae("upload/v1beta/files",r._url),body:JSON.stringify(r),httpMethod:"POST",httpOptions:o});if(!l||!(l!=null&&l.headers))throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const u=(i=l==null?void 0:l.headers)===null||i===void 0?void 0:i["x-goog-upload-url"];if(u===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return u}}async function ql(n){var e;if(n===void 0)throw new Error("response is undefined");if(!n.ok){const t=n.status;let i;!((e=n.headers.get("content-type"))===null||e===void 0)&&e.includes("application/json")?i=await n.json():i={error:{message:await n.text(),code:n.status,status:n.statusText}};const o=JSON.stringify(i);throw t>=400&&t<600?new hr({message:o,status:t}):new Error(o)}}function V0(n,e){if(!e||Object.keys(e).length===0)return;if(n.body instanceof Blob){console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");return}let t={};if(typeof n.body=="string"&&n.body.length>0)try{const r=JSON.parse(n.body);if(typeof r=="object"&&r!==null&&!Array.isArray(r))t=r;else{console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");return}}catch{console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");return}function i(r,l){const u=Object.assign({},r);for(const c in l)if(Object.prototype.hasOwnProperty.call(l,c)){const f=l[c],d=u[c];f&&typeof f=="object"&&!Array.isArray(f)&&d&&typeof d=="object"&&!Array.isArray(d)?u[c]=i(d,f):(d&&f&&typeof d!=typeof f&&console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${c}". Original type: ${typeof d}, New type: ${typeof f}. Overwriting.`),u[c]=f)}return u}const o=i(t,e);n.body=JSON.stringify(o)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const O0="mcp_used/unknown";let G0=!1;function Ic(n){for(const e of n)if(H0(e)||typeof e=="object"&&"inputSchema"in e)return!0;return G0}function Pc(n){var e;const t=(e=n[hs])!==null&&e!==void 0?e:"";n[hs]=(t+` ${O0}`).trimStart()}function H0(n){return n!==null&&typeof n=="object"&&n instanceof fa}function z0(n,e=100){return Pi(this,arguments,function*(){let i,o=0;for(;o<e;){const r=yield gt(n.listTools({cursor:i}));for(const l of r.tools)yield yield gt(l),o++;if(!r.nextCursor)break;i=r.nextCursor}})}class fa{constructor(e=[],t){this.mcpTools=[],this.functionNameToMcpClient={},this.mcpClients=e,this.config=t}static create(e,t){return new fa(e,t)}async initialize(){var e,t,i,o;if(this.mcpTools.length>0)return;const r={},l=[];for(const d of this.mcpClients)try{for(var u=!0,c=(t=void 0,io(z0(d))),f;f=await c.next(),e=f.done,!e;u=!0){o=f.value,u=!1;const h=o;l.push(h);const p=h.name;if(r[p])throw new Error(`Duplicate function name ${p} found in MCP tools. Please ensure function names are unique.`);r[p]=d}}catch(h){t={error:h}}finally{try{!u&&!e&&(i=c.return)&&await i.call(c)}finally{if(t)throw t.error}}this.mcpTools=l,this.functionNameToMcpClient=r}async tool(){return await this.initialize(),jf(this.mcpTools,this.config)}async callTool(e){await this.initialize();const t=[];for(const i of e)if(i.name in this.functionNameToMcpClient){const o=this.functionNameToMcpClient[i.name];let r;this.config.timeout&&(r={timeout:this.config.timeout});const l=await o.callTool({name:i.name,arguments:i.args},void 0,r);t.push({functionResponse:{name:i.name,response:l.isError?{error:l}:l}})}return t}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function W0(n,e,t){const i=new qf;let o;t.data instanceof Blob?o=JSON.parse(await t.data.text()):o=JSON.parse(t.data);const r=Dm(o);Object.assign(i,r),e(i)}class q0{constructor(e,t,i){this.apiClient=e,this.auth=t,this.webSocketFactory=i}async connect(e){var t,i;if(this.apiClient.isVertexAI())throw new Error("Live music is not supported for Vertex AI.");console.warn("Live music generation is experimental and may change in future versions.");const o=this.apiClient.getWebsocketBaseUrl(),r=this.apiClient.getApiVersion(),l=$0(this.apiClient.getDefaultHeaders()),u=this.apiClient.getApiKey(),c=`${o}/ws/google.ai.generativelanguage.${r}.GenerativeService.BidiGenerateMusic?key=${u}`;let f=()=>{};const d=new Promise(A=>{f=A}),h=e.callbacks,p=function(){f({})},m=this.apiClient,S={onopen:p,onmessage:A=>{W0(m,h.onmessage,A)},onerror:(t=h==null?void 0:h.onerror)!==null&&t!==void 0?t:function(A){},onclose:(i=h==null?void 0:h.onclose)!==null&&i!==void 0?i:function(A){}},x=this.webSocketFactory.create(c,Y0(l),S);x.connect(),await d;const T=at(this.apiClient,e.model),g=vc({model:T}),w=cs({setup:g});return x.send(JSON.stringify(w)),new X0(x,this.apiClient)}}class X0{constructor(e,t){this.conn=e,this.apiClient=t}async setWeightedPrompts(e){if(!e.weightedPrompts||Object.keys(e.weightedPrompts).length===0)throw new Error("Weighted prompts must be set and contain at least one entry.");const t=Nm(e),i=_c(t);this.conn.send(JSON.stringify({clientContent:i}))}async setMusicGenerationConfig(e){e.musicGenerationConfig||(e.musicGenerationConfig={});const t=Um(e),i=cs(t);this.conn.send(JSON.stringify(i))}sendPlaybackControl(e){const t=cs({playbackControl:e});this.conn.send(JSON.stringify(t))}play(){this.sendPlaybackControl(Ai.PLAY)}pause(){this.sendPlaybackControl(Ai.PAUSE)}stop(){this.sendPlaybackControl(Ai.STOP)}resetContext(){this.sendPlaybackControl(Ai.RESET_CONTEXT)}close(){this.conn.close()}}function Y0(n){const e={};return n.forEach((t,i)=>{e[i]=t}),e}function $0(n){const e=new Headers;for(const[t,i]of Object.entries(n))e.append(t,i);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const J0="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function K0(n,e,t){const i=new Wf;let o;t.data instanceof Blob?o=await t.data.text():t.data instanceof ArrayBuffer?o=new TextDecoder().decode(t.data):o=t.data;const r=JSON.parse(o);if(n.isVertexAI()){const l=zm(r);Object.assign(i,l)}else{const l=Hm(r);Object.assign(i,l)}e(i)}class Z0{constructor(e,t,i){this.apiClient=e,this.auth=t,this.webSocketFactory=i,this.music=new q0(this.apiClient,this.auth,this.webSocketFactory)}async connect(e){var t,i,o,r,l,u;if(e.config&&e.config.httpOptions)throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");const c=this.apiClient.getWebsocketBaseUrl(),f=this.apiClient.getApiVersion();let d;const h=this.apiClient.getHeaders();e.config&&e.config.tools&&Ic(e.config.tools)&&Pc(h);const p=tT(h);if(this.apiClient.isVertexAI())d=`${c}/ws/google.cloud.aiplatform.${f}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(p);else{const E=this.apiClient.getApiKey();let y="BidiGenerateContent",k="key";E!=null&&E.startsWith("auth_tokens/")&&(console.warn("Warning: Ephemeral token support is experimental and may change in future versions."),f!=="v1alpha"&&console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."),y="BidiGenerateContentConstrained",k="access_token"),d=`${c}/ws/google.ai.generativelanguage.${f}.GenerativeService.${y}?${k}=${E}`}let m=()=>{};const S=new Promise(E=>{m=E}),x=e.callbacks,T=function(){var E;(E=x==null?void 0:x.onopen)===null||E===void 0||E.call(x),m({})},g=this.apiClient,w={onopen:T,onmessage:E=>{K0(g,x.onmessage,E)},onerror:(t=x==null?void 0:x.onerror)!==null&&t!==void 0?t:function(E){},onclose:(i=x==null?void 0:x.onclose)!==null&&i!==void 0?i:function(E){}},A=this.webSocketFactory.create(d,eT(p),w);A.connect(),await S;let M=at(this.apiClient,e.model);if(this.apiClient.isVertexAI()&&M.startsWith("publishers/")){const E=this.apiClient.getProject(),y=this.apiClient.getLocation();M=`projects/${E}/locations/${y}/`+M}let B={};this.apiClient.isVertexAI()&&((o=e.config)===null||o===void 0?void 0:o.responseModalities)===void 0&&(e.config===void 0?e.config={responseModalities:[ro.AUDIO]}:e.config.responseModalities=[ro.AUDIO]),!((r=e.config)===null||r===void 0)&&r.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const b=(u=(l=e.config)===null||l===void 0?void 0:l.tools)!==null&&u!==void 0?u:[],N=[];for(const E of b)if(this.isCallableTool(E)){const y=E;N.push(await y.tool())}else N.push(E);N.length>0&&(e.config.tools=N);const V={model:M,config:e.config,callbacks:e.callbacks};return this.apiClient.isVertexAI()?B=Am(this.apiClient,V):B=Cm(this.apiClient,V),delete B.config,A.send(JSON.stringify(B)),new j0(A,this.apiClient)}isCallableTool(e){return"callTool"in e&&typeof e.callTool=="function"}}const Q0={turnComplete:!0};class j0{constructor(e,t){this.conn=e,this.apiClient=t}tLiveClientContent(e,t){if(t.turns!==null&&t.turns!==void 0){let i=[];try{i=jt(t.turns),e.isVertexAI()?i=i.map(o=>Hi(o)):i=i.map(o=>pr(o))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof t.turns}'`)}return{clientContent:{turns:i,turnComplete:t.turnComplete}}}return{clientContent:{turnComplete:t.turnComplete}}}tLiveClienttToolResponse(e,t){let i=[];if(t.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(t.functionResponses)?i=t.functionResponses:i=[t.functionResponses],i.length===0)throw new Error("functionResponses is required.");for(const r of i){if(typeof r!="object"||r===null||!("name"in r)||!("response"in r))throw new Error(`Could not parse function response, type '${typeof r}'.`);if(!e.isVertexAI()&&!("id"in r))throw new Error(J0)}return{toolResponse:{functionResponses:i}}}sendClientContent(e){e=Object.assign(Object.assign({},Q0),e);const t=this.tLiveClientContent(this.apiClient,e);this.conn.send(JSON.stringify(t))}sendRealtimeInput(e){let t={};this.apiClient.isVertexAI()?t={realtimeInput:Bm(e)}:t={realtimeInput:Fm(e)},this.conn.send(JSON.stringify(t))}sendToolResponse(e){if(e.functionResponses==null)throw new Error("Tool response parameters are required.");const t=this.tLiveClienttToolResponse(this.apiClient,e);this.conn.send(JSON.stringify(t))}close(){this.conn.close()}}function eT(n){const e={};return n.forEach((t,i)=>{e[i]=t}),e}function tT(n){const e=new Headers;for(const[t,i]of Object.entries(n))e.append(t,i);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Xl=10;function Yl(n){var e,t,i;if(!((e=n==null?void 0:n.automaticFunctionCalling)===null||e===void 0)&&e.disable)return!0;let o=!1;for(const l of(t=n==null?void 0:n.tools)!==null&&t!==void 0?t:[])if(Di(l)){o=!0;break}if(!o)return!0;const r=(i=n==null?void 0:n.automaticFunctionCalling)===null||i===void 0?void 0:i.maximumRemoteCalls;return r&&(r<0||!Number.isInteger(r))||r==0?(console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",r),!0):!1}function Di(n){return"callTool"in n&&typeof n.callTool=="function"}function nT(n){var e,t,i;return(i=(t=(e=n.config)===null||e===void 0?void 0:e.tools)===null||t===void 0?void 0:t.some(o=>Di(o)))!==null&&i!==void 0?i:!1}function iT(n){var e,t,i;return(i=(t=(e=n.config)===null||e===void 0?void 0:e.tools)===null||t===void 0?void 0:t.some(o=>!Di(o)))!==null&&i!==void 0?i:!1}function $l(n){var e;return!(!((e=n==null?void 0:n.automaticFunctionCalling)===null||e===void 0)&&e.ignoreCallHistory)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class oT extends ai{constructor(e){super(),this.apiClient=e,this.generateContent=async t=>{var i,o,r,l,u;const c=await this.processParamsMaybeAddMcpUsage(t);if(this.maybeMoveToResponseJsonSchem(t),!nT(t)||Yl(t.config))return await this.generateContentInternal(c);if(iT(t))throw new Error("Automatic function calling with CallableTools and Tools is not yet supported.");let f,d;const h=jt(c.contents),p=(r=(o=(i=c.config)===null||i===void 0?void 0:i.automaticFunctionCalling)===null||o===void 0?void 0:o.maximumRemoteCalls)!==null&&r!==void 0?r:Xl;let m=0;for(;m<p&&(f=await this.generateContentInternal(c),!(!f.functionCalls||f.functionCalls.length===0));){const S=f.candidates[0].content,x=[];for(const T of(u=(l=t.config)===null||l===void 0?void 0:l.tools)!==null&&u!==void 0?u:[])if(Di(T)){const w=await T.callTool(f.functionCalls);x.push(...w)}m++,d={role:"user",parts:x},c.contents=jt(c.contents),c.contents.push(S),c.contents.push(d),$l(c.config)&&(h.push(S),h.push(d))}return $l(c.config)&&(f.automaticFunctionCallingHistory=h),f},this.generateContentStream=async t=>{if(this.maybeMoveToResponseJsonSchem(t),Yl(t.config)){const i=await this.processParamsMaybeAddMcpUsage(t);return await this.generateContentStreamInternal(i)}else return await this.processAfcStream(t)},this.generateImages=async t=>await this.generateImagesInternal(t).then(i=>{var o;let r;const l=[];if(i!=null&&i.generatedImages)for(const c of i.generatedImages)c&&(c!=null&&c.safetyAttributes)&&((o=c==null?void 0:c.safetyAttributes)===null||o===void 0?void 0:o.contentType)==="Positive Prompt"?r=c==null?void 0:c.safetyAttributes:l.push(c);let u;return r?u={generatedImages:l,positivePromptSafetyAttributes:r,sdkHttpResponse:i.sdkHttpResponse}:u={generatedImages:l,sdkHttpResponse:i.sdkHttpResponse},u}),this.list=async t=>{var i;const l={config:Object.assign(Object.assign({},{queryBase:!0}),t==null?void 0:t.config)};if(this.apiClient.isVertexAI()&&!l.config.queryBase){if(!((i=l.config)===null||i===void 0)&&i.filter)throw new Error("Filtering tuned models list for Vertex AI is not currently supported");l.config.filter="labels.tune-type:*"}return new co(ri.PAGED_ITEM_MODELS,u=>this.listInternal(u),await this.listInternal(l),l)},this.editImage=async t=>{const i={model:t.model,prompt:t.prompt,referenceImages:[],config:t.config};return t.referenceImages&&t.referenceImages&&(i.referenceImages=t.referenceImages.map(o=>o.toReferenceImageAPI())),await this.editImageInternal(i)},this.upscaleImage=async t=>{let i={numberOfImages:1,mode:"upscale"};t.config&&(i=Object.assign(Object.assign({},i),t.config));const o={model:t.model,image:t.image,upscaleFactor:t.upscaleFactor,config:i};return await this.upscaleImageInternal(o)},this.generateVideos=async t=>{if((t.prompt||t.image||t.video)&&t.source)throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");return await this.generateVideosInternal(t)}}maybeMoveToResponseJsonSchem(e){e.config&&e.config.responseSchema&&(e.config.responseJsonSchema||Object.keys(e.config.responseSchema).includes("$schema")&&(e.config.responseJsonSchema=e.config.responseSchema,delete e.config.responseSchema))}async processParamsMaybeAddMcpUsage(e){var t,i,o;const r=(t=e.config)===null||t===void 0?void 0:t.tools;if(!r)return e;const l=await Promise.all(r.map(async c=>Di(c)?await c.tool():c)),u={model:e.model,contents:e.contents,config:Object.assign(Object.assign({},e.config),{tools:l})};if(u.config.tools=l,e.config&&e.config.tools&&Ic(e.config.tools)){const c=(o=(i=e.config.httpOptions)===null||i===void 0?void 0:i.headers)!==null&&o!==void 0?o:{};let f=Object.assign({},c);Object.keys(f).length===0&&(f=this.apiClient.getDefaultHeaders()),Pc(f),u.config.httpOptions=Object.assign(Object.assign({},e.config.httpOptions),{headers:f})}return u}async initAfcToolsMap(e){var t,i,o;const r=new Map;for(const l of(i=(t=e.config)===null||t===void 0?void 0:t.tools)!==null&&i!==void 0?i:[])if(Di(l)){const u=l,c=await u.tool();for(const f of(o=c.functionDeclarations)!==null&&o!==void 0?o:[]){if(!f.name)throw new Error("Function declaration name is required.");if(r.has(f.name))throw new Error(`Duplicate tool declaration name: ${f.name}`);r.set(f.name,u)}}return r}async processAfcStream(e){var t,i,o;const r=(o=(i=(t=e.config)===null||t===void 0?void 0:t.automaticFunctionCalling)===null||i===void 0?void 0:i.maximumRemoteCalls)!==null&&o!==void 0?o:Xl;let l=!1,u=0;const c=await this.initAfcToolsMap(e);return(function(f,d,h){var p,m;return Pi(this,arguments,function*(){for(var S,x,T,g;u<r;){l&&(u++,l=!1);const B=yield gt(f.processParamsMaybeAddMcpUsage(h)),b=yield gt(f.generateContentStreamInternal(B)),N=[],V=[];try{for(var w=!0,A=(x=void 0,io(b)),M;M=yield gt(A.next()),S=M.done,!S;w=!0){g=M.value,w=!1;const E=g;if(yield yield gt(E),E.candidates&&(!((p=E.candidates[0])===null||p===void 0)&&p.content)){V.push(E.candidates[0].content);for(const y of(m=E.candidates[0].content.parts)!==null&&m!==void 0?m:[])if(u<r&&y.functionCall){if(!y.functionCall.name)throw new Error("Function call name was not returned by the model.");if(d.has(y.functionCall.name)){const k=yield gt(d.get(y.functionCall.name).callTool([y.functionCall]));N.push(...k)}else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${d.keys()}, mising tool: ${y.functionCall.name}`)}}}}catch(E){x={error:E}}finally{try{!w&&!S&&(T=A.return)&&(yield gt(T.call(A)))}finally{if(x)throw x.error}}if(N.length>0){l=!0;const E=new Ki;E.candidates=[{content:{role:"user",parts:N}}],yield yield gt(E);const y=[];y.push(...V),y.push({role:"user",parts:N});const k=jt(h.contents).concat(y);h.contents=k}else break}})})(this,c,e)}async generateContentInternal(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=Gl(this.apiClient,e);return u=Ae("{model}:generateContent",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=zl(d),p=new Ki;return Object.assign(p,h),p})}else{const f=Ol(this.apiClient,e);return u=Ae("{model}:generateContent",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=Hl(d),p=new Ki;return Object.assign(p,h),p})}}async generateContentStreamInternal(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=Gl(this.apiClient,e);return u=Ae("{model}:streamGenerateContent?alt=sse",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.requestStream({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}),l.then(function(h){return Pi(this,arguments,function*(){var p,m,S,x;try{for(var T=!0,g=io(h),w;w=yield gt(g.next()),p=w.done,!p;T=!0){x=w.value,T=!1;const A=x,M=zl(yield gt(A.json()));M.sdkHttpResponse={headers:A.headers};const B=new Ki;Object.assign(B,M),yield yield gt(B)}}catch(A){m={error:A}}finally{try{!T&&!p&&(S=g.return)&&(yield gt(S.call(g)))}finally{if(m)throw m.error}}})})}else{const f=Ol(this.apiClient,e);return u=Ae("{model}:streamGenerateContent?alt=sse",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.requestStream({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}),l.then(function(h){return Pi(this,arguments,function*(){var p,m,S,x;try{for(var T=!0,g=io(h),w;w=yield gt(g.next()),p=w.done,!p;T=!0){x=w.value,T=!1;const A=x,M=Hl(yield gt(A.json()));M.sdkHttpResponse={headers:A.headers};const B=new Ki;Object.assign(B,M),yield yield gt(B)}}catch(A){m={error:A}}finally{try{!T&&!p&&(S=g.return)&&(yield gt(S.call(g)))}finally{if(m)throw m.error}}})})}}async embedContent(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=T_(this.apiClient,e);return u=Ae("{model}:predict",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=x_(d),p=new Sl;return Object.assign(p,h),p})}else{const f=v_(this.apiClient,e);return u=Ae("{model}:batchEmbedContents",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=S_(d),p=new Sl;return Object.assign(p,h),p})}}async generateImagesInternal(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=H_(this.apiClient,e);return u=Ae("{model}:predict",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=W_(d),p=new xl;return Object.assign(p,h),p})}else{const f=G_(this.apiClient,e);return u=Ae("{model}:predict",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=z_(d),p=new xl;return Object.assign(p,h),p})}}async editImageInternal(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI()){const u=d_(this.apiClient,e);return r=Ae("{model}:predict",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(f=>{const d=f;return d.sdkHttpResponse={headers:c.headers},d})),o.then(c=>{const f=h_(c),d=new Ff;return Object.assign(d,f),d})}else throw new Error("This method is only supported by the Vertex AI.")}async upscaleImageInternal(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI()){const u=p0(this.apiClient,e);return r=Ae("{model}:predict",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(f=>{const d=f;return d.sdkHttpResponse={headers:c.headers},d})),o.then(c=>{const f=m0(c),d=new Bf;return Object.assign(d,f),d})}else throw new Error("This method is only supported by the Vertex AI.")}async recontextImage(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI()){const u=Fv(this.apiClient,e);return r=Ae("{model}:predict",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>{const f=Bv(c),d=new kf;return Object.assign(d,f),d})}else throw new Error("This method is only supported by the Vertex AI.")}async segmentImage(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI()){const u=$v(this.apiClient,e);return r=Ae("{model}:predict",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>{const f=Jv(c),d=new Vf;return Object.assign(d,f),d})}else throw new Error("This method is only supported by the Vertex AI.")}async get(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=sv(this.apiClient,e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),l.then(d=>ds(d))}else{const f=rv(this.apiClient,e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json()),l.then(d=>fs(d))}}async listInternal(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=yv(this.apiClient,e);return u=Ae("{models_url}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=Ev(d),p=new yl;return Object.assign(p,h),p})}else{const f=xv(this.apiClient,e);return u=Ae("{models_url}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=Mv(d),p=new yl;return Object.assign(p,h),p})}}async update(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=d0(this.apiClient,e);return u=Ae("{model}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),l.then(d=>ds(d))}else{const f=f0(this.apiClient,e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json()),l.then(d=>fs(d))}}async delete(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=s_(this.apiClient,e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=l_(d),p=new Ml;return Object.assign(p,h),p})}else{const f=r_(this.apiClient,e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=a_(d),p=new Ml;return Object.assign(p,h),p})}}async countTokens(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=n_(this.apiClient,e);return u=Ae("{model}:countTokens",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=o_(d),p=new El;return Object.assign(p,h),p})}else{const f=t_(this.apiClient,e);return u=Ae("{model}:countTokens",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=i_(d),p=new El;return Object.assign(p,h),p})}}async computeTokens(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI()){const u=zg(this.apiClient,e);return r=Ae("{model}:computeTokens",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(f=>{const d=f;return d.sdkHttpResponse={headers:c.headers},d})),o.then(c=>{const f=Wg(c),d=new Of;return Object.assign(d,f),d})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideosInternal(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=K_(this.apiClient,e);return u=Ae("{model}:predictLongRunning",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),l.then(d=>{const h=$_(d),p=new rr;return Object.assign(p,h),p})}else{const f=J_(this.apiClient,e);return u=Ae("{model}:predictLongRunning",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json()),l.then(d=>{const h=Y_(d),p=new rr;return Object.assign(p,h),p})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rT extends ai{constructor(e){super(),this.apiClient=e}async getVideosOperation(e){const t=e.operation,i=e.config;if(t.name===void 0||t.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const o=t.name.split("/operations/")[0];let r;i&&"httpOptions"in i&&(r=i.httpOptions);const l=await this.fetchPredictVideosOperationInternal({operationName:t.name,resourceName:o,config:{httpOptions:r}});return t._fromAPIResponse({apiResponse:l,isVertexAI:!0})}else{const o=await this.getVideosOperationInternal({operationName:t.name,config:i});return t._fromAPIResponse({apiResponse:o,isVertexAI:!1})}}async get(e){const t=e.operation,i=e.config;if(t.name===void 0||t.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const o=t.name.split("/operations/")[0];let r;i&&"httpOptions"in i&&(r=i.httpOptions);const l=await this.fetchPredictVideosOperationInternal({operationName:t.name,resourceName:o,config:{httpOptions:r}});return t._fromAPIResponse({apiResponse:l,isVertexAI:!0})}else{const o=await this.getVideosOperationInternal({operationName:t.name,config:i});return t._fromAPIResponse({apiResponse:o,isVertexAI:!1})}}async getVideosOperationInternal(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=Uf(e);return u=Ae("{operationName}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),l}else{const f=bf(e);return u=Ae("{operationName}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json()),l}}async fetchPredictVideosOperationInternal(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI()){const u=Cf(e);return r=Ae("{resourceName}:fetchPredictOperation",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Jl(){return{}}function sT(n){const e={},t=s(n,["name"]);return t!=null&&a(e,["name"],t),e}function aT(n){const e={},t=s(n,["disabled"]);t!=null&&a(e,["disabled"],t);const i=s(n,["startOfSpeechSensitivity"]);i!=null&&a(e,["startOfSpeechSensitivity"],i);const o=s(n,["endOfSpeechSensitivity"]);o!=null&&a(e,["endOfSpeechSensitivity"],o);const r=s(n,["prefixPaddingMs"]);r!=null&&a(e,["prefixPaddingMs"],r);const l=s(n,["silenceDurationMs"]);return l!=null&&a(e,["silenceDurationMs"],l),e}function lT(n){const e={};if(s(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=s(n,["data"]);t!=null&&a(e,["data"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function uT(n){const e={},t=s(n,["environment"]);t!=null&&a(e,["environment"],t);const i=s(n,["excludedPredefinedFunctions"]);return i!=null&&a(e,["excludedPredefinedFunctions"],i),e}function cT(n){const e={},t=s(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>ET(r))),a(e,["parts"],o)}const i=s(n,["role"]);return i!=null&&a(e,["role"],i),e}function fT(n){const e={},t=s(n,["triggerTokens"]);t!=null&&a(e,["triggerTokens"],t);const i=s(n,["slidingWindow"]);return i!=null&&a(e,["slidingWindow"],IT(i)),e}function dT(n,e,t){const i={},o=s(e,["expireTime"]);t!==void 0&&o!=null&&a(t,["expireTime"],o);const r=s(e,["newSessionExpireTime"]);t!==void 0&&r!=null&&a(t,["newSessionExpireTime"],r);const l=s(e,["uses"]);t!==void 0&&l!=null&&a(t,["uses"],l);const u=s(e,["liveConnectConstraints"]);t!==void 0&&u!=null&&a(t,["bidiGenerateContentSetup"],yT(n,u));const c=s(e,["lockAdditionalFields"]);return t!==void 0&&c!=null&&a(t,["fieldMask"],c),i}function hT(n,e){const t={},i=s(e,["config"]);return i!=null&&a(t,["config"],dT(n,i,t)),t}function pT(n){const e={},t=s(n,["mode"]);t!=null&&a(e,["mode"],t);const i=s(n,["dynamicThreshold"]);return i!=null&&a(e,["dynamicThreshold"],i),e}function mT(n){const e={};if(s(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=s(n,["fileUri"]);t!=null&&a(e,["fileUri"],t);const i=s(n,["mimeType"]);return i!=null&&a(e,["mimeType"],i),e}function gT(n){const e={},t=s(n,["id"]);t!=null&&a(e,["id"],t);const i=s(n,["args"]);i!=null&&a(e,["args"],i);const o=s(n,["name"]);return o!=null&&a(e,["name"],o),e}function _T(n){const e={},t=s(n,["behavior"]);t!=null&&a(e,["behavior"],t);const i=s(n,["description"]);i!=null&&a(e,["description"],i);const o=s(n,["name"]);o!=null&&a(e,["name"],o);const r=s(n,["parameters"]);r!=null&&a(e,["parameters"],r);const l=s(n,["parametersJsonSchema"]);l!=null&&a(e,["parametersJsonSchema"],l);const u=s(n,["response"]);u!=null&&a(e,["response"],u);const c=s(n,["responseJsonSchema"]);return c!=null&&a(e,["responseJsonSchema"],c),e}function vT(n){const e={},t=s(n,["dynamicRetrievalConfig"]);return t!=null&&a(e,["dynamicRetrievalConfig"],pT(t)),e}function TT(n){const e={},t=s(n,["timeRangeFilter"]);if(t!=null&&a(e,["timeRangeFilter"],ST(t)),s(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");return e}function ST(n){const e={},t=s(n,["startTime"]);t!=null&&a(e,["startTime"],t);const i=s(n,["endTime"]);return i!=null&&a(e,["endTime"],i),e}function xT(n,e){const t={},i=s(n,["generationConfig"]);e!==void 0&&i!=null&&a(e,["setup","generationConfig"],i);const o=s(n,["responseModalities"]);e!==void 0&&o!=null&&a(e,["setup","generationConfig","responseModalities"],o);const r=s(n,["temperature"]);e!==void 0&&r!=null&&a(e,["setup","generationConfig","temperature"],r);const l=s(n,["topP"]);e!==void 0&&l!=null&&a(e,["setup","generationConfig","topP"],l);const u=s(n,["topK"]);e!==void 0&&u!=null&&a(e,["setup","generationConfig","topK"],u);const c=s(n,["maxOutputTokens"]);e!==void 0&&c!=null&&a(e,["setup","generationConfig","maxOutputTokens"],c);const f=s(n,["mediaResolution"]);e!==void 0&&f!=null&&a(e,["setup","generationConfig","mediaResolution"],f);const d=s(n,["seed"]);e!==void 0&&d!=null&&a(e,["setup","generationConfig","seed"],d);const h=s(n,["speechConfig"]);e!==void 0&&h!=null&&a(e,["setup","generationConfig","speechConfig"],DT(ua(h)));const p=s(n,["thinkingConfig"]);e!==void 0&&p!=null&&a(e,["setup","generationConfig","thinkingConfig"],bT(p));const m=s(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&a(e,["setup","generationConfig","enableAffectiveDialog"],m);const S=s(n,["systemInstruction"]);e!==void 0&&S!=null&&a(e,["setup","systemInstruction"],cT(bt(S)));const x=s(n,["tools"]);if(e!==void 0&&x!=null){let b=Oi(x);Array.isArray(b)&&(b=b.map(N=>UT(Vi(N)))),a(e,["setup","tools"],b)}const T=s(n,["sessionResumption"]);e!==void 0&&T!=null&&a(e,["setup","sessionResumption"],wT(T));const g=s(n,["inputAudioTranscription"]);e!==void 0&&g!=null&&a(e,["setup","inputAudioTranscription"],Jl());const w=s(n,["outputAudioTranscription"]);e!==void 0&&w!=null&&a(e,["setup","outputAudioTranscription"],Jl());const A=s(n,["realtimeInputConfig"]);e!==void 0&&A!=null&&a(e,["setup","realtimeInputConfig"],RT(A));const M=s(n,["contextWindowCompression"]);e!==void 0&&M!=null&&a(e,["setup","contextWindowCompression"],fT(M));const B=s(n,["proactivity"]);return e!==void 0&&B!=null&&a(e,["setup","proactivity"],AT(B)),t}function yT(n,e){const t={},i=s(e,["model"]);i!=null&&a(t,["setup","model"],at(n,i));const o=s(e,["config"]);return o!=null&&a(t,["config"],xT(o,t)),t}function MT(n){const e={},t=s(n,["speakerVoiceConfigs"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>PT(o))),a(e,["speakerVoiceConfigs"],i)}return e}function ET(n){const e={},t=s(n,["videoMetadata"]);t!=null&&a(e,["videoMetadata"],LT(t));const i=s(n,["thought"]);i!=null&&a(e,["thought"],i);const o=s(n,["inlineData"]);o!=null&&a(e,["inlineData"],lT(o));const r=s(n,["fileData"]);r!=null&&a(e,["fileData"],mT(r));const l=s(n,["thoughtSignature"]);l!=null&&a(e,["thoughtSignature"],l);const u=s(n,["functionCall"]);u!=null&&a(e,["functionCall"],gT(u));const c=s(n,["codeExecutionResult"]);c!=null&&a(e,["codeExecutionResult"],c);const f=s(n,["executableCode"]);f!=null&&a(e,["executableCode"],f);const d=s(n,["functionResponse"]);d!=null&&a(e,["functionResponse"],d);const h=s(n,["text"]);return h!=null&&a(e,["text"],h),e}function CT(n){const e={},t=s(n,["voiceName"]);return t!=null&&a(e,["voiceName"],t),e}function AT(n){const e={},t=s(n,["proactiveAudio"]);return t!=null&&a(e,["proactiveAudio"],t),e}function RT(n){const e={},t=s(n,["automaticActivityDetection"]);t!=null&&a(e,["automaticActivityDetection"],aT(t));const i=s(n,["activityHandling"]);i!=null&&a(e,["activityHandling"],i);const o=s(n,["turnCoverage"]);return o!=null&&a(e,["turnCoverage"],o),e}function wT(n){const e={},t=s(n,["handle"]);if(t!=null&&a(e,["handle"],t),s(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function IT(n){const e={},t=s(n,["targetTokens"]);return t!=null&&a(e,["targetTokens"],t),e}function PT(n){const e={},t=s(n,["speaker"]);t!=null&&a(e,["speaker"],t);const i=s(n,["voiceConfig"]);return i!=null&&a(e,["voiceConfig"],Dc(i)),e}function DT(n){const e={},t=s(n,["voiceConfig"]);t!=null&&a(e,["voiceConfig"],Dc(t));const i=s(n,["multiSpeakerVoiceConfig"]);i!=null&&a(e,["multiSpeakerVoiceConfig"],MT(i));const o=s(n,["languageCode"]);return o!=null&&a(e,["languageCode"],o),e}function bT(n){const e={},t=s(n,["includeThoughts"]);t!=null&&a(e,["includeThoughts"],t);const i=s(n,["thinkingBudget"]);return i!=null&&a(e,["thinkingBudget"],i),e}function UT(n){const e={},t=s(n,["functionDeclarations"]);if(t!=null){let c=t;Array.isArray(c)&&(c=c.map(f=>_T(f))),a(e,["functionDeclarations"],c)}if(s(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=s(n,["googleSearch"]);i!=null&&a(e,["googleSearch"],TT(i));const o=s(n,["googleSearchRetrieval"]);if(o!=null&&a(e,["googleSearchRetrieval"],vT(o)),s(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");if(s(n,["googleMaps"])!==void 0)throw new Error("googleMaps parameter is not supported in Gemini API.");s(n,["urlContext"])!=null&&a(e,["urlContext"],NT());const l=s(n,["computerUse"]);l!=null&&a(e,["computerUse"],uT(l));const u=s(n,["codeExecution"]);return u!=null&&a(e,["codeExecution"],u),e}function NT(){return{}}function LT(n){const e={},t=s(n,["fps"]);t!=null&&a(e,["fps"],t);const i=s(n,["endOffset"]);i!=null&&a(e,["endOffset"],i);const o=s(n,["startOffset"]);return o!=null&&a(e,["startOffset"],o),e}function Dc(n){const e={},t=s(n,["prebuiltVoiceConfig"]);return t!=null&&a(e,["prebuiltVoiceConfig"],CT(t)),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function FT(n){const e=[];for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)){const i=n[t];if(typeof i=="object"&&i!=null&&Object.keys(i).length>0){const o=Object.keys(i).map(r=>`${t}.${r}`);e.push(...o)}else e.push(t)}return e.join(",")}function BT(n,e){let t=null;const i=n.bidiGenerateContentSetup;if(typeof i=="object"&&i!==null&&"setup"in i){const r=i.setup;typeof r=="object"&&r!==null?(n.bidiGenerateContentSetup=r,t=r):delete n.bidiGenerateContentSetup}else i!==void 0&&delete n.bidiGenerateContentSetup;const o=n.fieldMask;if(t){const r=FT(t);if(Array.isArray(e==null?void 0:e.lockAdditionalFields)&&(e==null?void 0:e.lockAdditionalFields.length)===0)r?n.fieldMask=r:delete n.fieldMask;else if(e!=null&&e.lockAdditionalFields&&e.lockAdditionalFields.length>0&&o!==null&&Array.isArray(o)&&o.length>0){const l=["temperature","topK","topP","maxOutputTokens","responseModalities","seed","speechConfig"];let u=[];o.length>0&&(u=o.map(f=>l.includes(f)?`generationConfig.${f}`:f));const c=[];r&&c.push(r),u.length>0&&c.push(...u),c.length>0?n.fieldMask=c.join(","):delete n.fieldMask}else delete n.fieldMask}else o!==null&&Array.isArray(o)&&o.length>0?n.fieldMask=o.join(","):delete n.fieldMask;return n}class kT extends ai{constructor(e){super(),this.apiClient=e}async create(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI())throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");{const u=hT(this.apiClient,e);r=Ae("auth_tokens",u._url),l=u._query,delete u.config,delete u._url,delete u._query;const c=BT(u,e.config);return o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),o.then(f=>sT(f))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function VT(n){const e={},t=s(n,["name"]);return t!=null&&a(e,["_url","name"],t),e}function OT(n){const e={},t=s(n,["name"]);return t!=null&&a(e,["_url","name"],t),e}function GT(n,e){const t={};if(s(n,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const i=s(n,["tunedModelDisplayName"]);if(e!==void 0&&i!=null&&a(e,["displayName"],i),s(n,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const o=s(n,["epochCount"]);e!==void 0&&o!=null&&a(e,["tuningTask","hyperparameters","epochCount"],o);const r=s(n,["learningRateMultiplier"]);if(r!=null&&a(t,["tuningTask","hyperparameters","learningRateMultiplier"],r),s(n,["exportLastCheckpointOnly"])!==void 0)throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");if(s(n,["preTunedModelCheckpointId"])!==void 0)throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");if(s(n,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");const l=s(n,["batchSize"]);e!==void 0&&l!=null&&a(e,["tuningTask","hyperparameters","batchSize"],l);const u=s(n,["learningRate"]);if(e!==void 0&&u!=null&&a(e,["tuningTask","hyperparameters","learningRate"],u),s(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");return t}function HT(n,e){const t={},i=s(n,["validationDataset"]);e!==void 0&&i!=null&&a(e,["supervisedTuningSpec"],sS(i,t));const o=s(n,["tunedModelDisplayName"]);e!==void 0&&o!=null&&a(e,["tunedModelDisplayName"],o);const r=s(n,["description"]);e!==void 0&&r!=null&&a(e,["description"],r);const l=s(n,["epochCount"]);e!==void 0&&l!=null&&a(e,["supervisedTuningSpec","hyperParameters","epochCount"],l);const u=s(n,["learningRateMultiplier"]);e!==void 0&&u!=null&&a(e,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],u);const c=s(n,["exportLastCheckpointOnly"]);e!==void 0&&c!=null&&a(e,["supervisedTuningSpec","exportLastCheckpointOnly"],c);const f=s(n,["adapterSize"]);if(e!==void 0&&f!=null&&a(e,["supervisedTuningSpec","hyperParameters","adapterSize"],f),s(n,["batchSize"])!==void 0)throw new Error("batchSize parameter is not supported in Vertex AI.");if(s(n,["learningRate"])!==void 0)throw new Error("learningRate parameter is not supported in Vertex AI.");const d=s(n,["labels"]);return e!==void 0&&d!=null&&a(e,["labels"],d),t}function zT(n){const e={},t=s(n,["baseModel"]);t!=null&&a(e,["baseModel"],t);const i=s(n,["preTunedModel"]);i!=null&&a(e,["preTunedModel"],i);const o=s(n,["trainingDataset"]);o!=null&&a(e,["tuningTask","trainingData"],nS(o));const r=s(n,["config"]);return r!=null&&GT(r,e),e}function WT(n){const e={},t=s(n,["baseModel"]);t!=null&&a(e,["baseModel"],t);const i=s(n,["preTunedModel"]);i!=null&&a(e,["preTunedModel"],i);const o=s(n,["trainingDataset"]);o!=null&&a(e,["supervisedTuningSpec","trainingDatasetUri"],iS(o,e));const r=s(n,["config"]);return r!=null&&HT(r,e),e}function qT(n){const e={},t=s(n,["name"]);return t!=null&&a(e,["_url","name"],t),e}function XT(n){const e={},t=s(n,["name"]);return t!=null&&a(e,["_url","name"],t),e}function YT(n,e){const t={},i=s(n,["pageSize"]);e!==void 0&&i!=null&&a(e,["_query","pageSize"],i);const o=s(n,["pageToken"]);e!==void 0&&o!=null&&a(e,["_query","pageToken"],o);const r=s(n,["filter"]);return e!==void 0&&r!=null&&a(e,["_query","filter"],r),t}function $T(n,e){const t={},i=s(n,["pageSize"]);e!==void 0&&i!=null&&a(e,["_query","pageSize"],i);const o=s(n,["pageToken"]);e!==void 0&&o!=null&&a(e,["_query","pageToken"],o);const r=s(n,["filter"]);return e!==void 0&&r!=null&&a(e,["_query","filter"],r),t}function JT(n){const e={},t=s(n,["config"]);return t!=null&&YT(t,e),e}function KT(n){const e={},t=s(n,["config"]);return t!=null&&$T(t,e),e}function ZT(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["nextPageToken"]);i!=null&&a(e,["nextPageToken"],i);const o=s(n,["tunedModels"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(l=>bc(l))),a(e,["tuningJobs"],r)}return e}function QT(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["nextPageToken"]);i!=null&&a(e,["nextPageToken"],i);const o=s(n,["tuningJobs"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(l=>ps(l))),a(e,["tuningJobs"],r)}return e}function jT(n){const e={},t=s(n,["checkpointId"]);t!=null&&a(e,["checkpointId"],t);const i=s(n,["epoch"]);i!=null&&a(e,["epoch"],i);const o=s(n,["step"]);o!=null&&a(e,["step"],o);const r=s(n,["endpoint"]);return r!=null&&a(e,["endpoint"],r),e}function eS(n){const e={},t=s(n,["name"]);t!=null&&a(e,["model"],t);const i=s(n,["name"]);return i!=null&&a(e,["endpoint"],i),e}function tS(n){const e={},t=s(n,["model"]);t!=null&&a(e,["model"],t);const i=s(n,["endpoint"]);i!=null&&a(e,["endpoint"],i);const o=s(n,["checkpoints"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(l=>jT(l))),a(e,["checkpoints"],r)}return e}function nS(n){const e={};if(s(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(s(n,["vertexDatasetResource"])!==void 0)throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");const t=s(n,["examples"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>oS(o))),a(e,["examples","examples"],i)}return e}function iS(n,e){const t={},i=s(n,["gcsUri"]);e!==void 0&&i!=null&&a(e,["supervisedTuningSpec","trainingDatasetUri"],i);const o=s(n,["vertexDatasetResource"]);if(e!==void 0&&o!=null&&a(e,["supervisedTuningSpec","trainingDatasetUri"],o),s(n,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return t}function oS(n){const e={},t=s(n,["textInput"]);t!=null&&a(e,["textInput"],t);const i=s(n,["output"]);return i!=null&&a(e,["output"],i),e}function bc(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["name"]);i!=null&&a(e,["name"],i);const o=s(n,["state"]);o!=null&&a(e,["state"],oc(o));const r=s(n,["createTime"]);r!=null&&a(e,["createTime"],r);const l=s(n,["tuningTask","startTime"]);l!=null&&a(e,["startTime"],l);const u=s(n,["tuningTask","completeTime"]);u!=null&&a(e,["endTime"],u);const c=s(n,["updateTime"]);c!=null&&a(e,["updateTime"],c);const f=s(n,["description"]);f!=null&&a(e,["description"],f);const d=s(n,["baseModel"]);d!=null&&a(e,["baseModel"],d);const h=s(n,["_self"]);h!=null&&a(e,["tunedModel"],eS(h));const p=s(n,["customBaseModel"]);p!=null&&a(e,["customBaseModel"],p);const m=s(n,["experiment"]);m!=null&&a(e,["experiment"],m);const S=s(n,["labels"]);S!=null&&a(e,["labels"],S);const x=s(n,["outputUri"]);x!=null&&a(e,["outputUri"],x);const T=s(n,["pipelineJob"]);T!=null&&a(e,["pipelineJob"],T);const g=s(n,["serviceAccount"]);g!=null&&a(e,["serviceAccount"],g);const w=s(n,["tunedModelDisplayName"]);w!=null&&a(e,["tunedModelDisplayName"],w);const A=s(n,["veoTuningSpec"]);return A!=null&&a(e,["veoTuningSpec"],A),e}function ps(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["name"]);i!=null&&a(e,["name"],i);const o=s(n,["state"]);o!=null&&a(e,["state"],oc(o));const r=s(n,["createTime"]);r!=null&&a(e,["createTime"],r);const l=s(n,["startTime"]);l!=null&&a(e,["startTime"],l);const u=s(n,["endTime"]);u!=null&&a(e,["endTime"],u);const c=s(n,["updateTime"]);c!=null&&a(e,["updateTime"],c);const f=s(n,["error"]);f!=null&&a(e,["error"],f);const d=s(n,["description"]);d!=null&&a(e,["description"],d);const h=s(n,["baseModel"]);h!=null&&a(e,["baseModel"],h);const p=s(n,["tunedModel"]);p!=null&&a(e,["tunedModel"],tS(p));const m=s(n,["preTunedModel"]);m!=null&&a(e,["preTunedModel"],m);const S=s(n,["supervisedTuningSpec"]);S!=null&&a(e,["supervisedTuningSpec"],S);const x=s(n,["tuningDataStats"]);x!=null&&a(e,["tuningDataStats"],x);const T=s(n,["encryptionSpec"]);T!=null&&a(e,["encryptionSpec"],T);const g=s(n,["partnerModelTuningSpec"]);g!=null&&a(e,["partnerModelTuningSpec"],g);const w=s(n,["customBaseModel"]);w!=null&&a(e,["customBaseModel"],w);const A=s(n,["experiment"]);A!=null&&a(e,["experiment"],A);const M=s(n,["labels"]);M!=null&&a(e,["labels"],M);const B=s(n,["outputUri"]);B!=null&&a(e,["outputUri"],B);const b=s(n,["pipelineJob"]);b!=null&&a(e,["pipelineJob"],b);const N=s(n,["serviceAccount"]);N!=null&&a(e,["serviceAccount"],N);const V=s(n,["tunedModelDisplayName"]);V!=null&&a(e,["tunedModelDisplayName"],V);const E=s(n,["veoTuningSpec"]);return E!=null&&a(e,["veoTuningSpec"],E),e}function rS(n){const e={},t=s(n,["sdkHttpResponse"]);t!=null&&a(e,["sdkHttpResponse"],t);const i=s(n,["name"]);i!=null&&a(e,["name"],i);const o=s(n,["metadata"]);o!=null&&a(e,["metadata"],o);const r=s(n,["done"]);r!=null&&a(e,["done"],r);const l=s(n,["error"]);return l!=null&&a(e,["error"],l),e}function sS(n,e){const t={},i=s(n,["gcsUri"]);i!=null&&a(t,["validationDatasetUri"],i);const o=s(n,["vertexDatasetResource"]);return e!==void 0&&o!=null&&a(e,["supervisedTuningSpec","trainingDatasetUri"],o),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class aS extends ai{constructor(e){super(),this.apiClient=e,this.get=async t=>await this.getInternal(t),this.list=async(t={})=>new co(ri.PAGED_ITEM_TUNING_JOBS,i=>this.listInternal(i),await this.listInternal(t),t),this.tune=async t=>{var i;if(this.apiClient.isVertexAI())if(t.baseModel.startsWith("projects/")){const o={tunedModelName:t.baseModel};!((i=t.config)===null||i===void 0)&&i.preTunedModelCheckpointId&&(o.checkpointId=t.config.preTunedModelCheckpointId);const r=Object.assign(Object.assign({},t),{preTunedModel:o});return r.baseModel=void 0,await this.tuneInternal(r)}else{const o=Object.assign({},t);return await this.tuneInternal(o)}else{const o=Object.assign({},t),r=await this.tuneMldevInternal(o);let l="";return r.metadata!==void 0&&r.metadata.tunedModel!==void 0?l=r.metadata.tunedModel:r.name!==void 0&&r.name.includes("/operations/")&&(l=r.name.split("/operations/")[0]),{name:l,state:rs.JOB_STATE_QUEUED}}}}async getInternal(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=XT(e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>ps(d))}else{const f=qT(e);return u=Ae("{name}",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>bc(d))}}async listInternal(e){var t,i,o,r;let l,u="",c={};if(this.apiClient.isVertexAI()){const f=KT(e);return u=Ae("tuningJobs",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=QT(d),p=new Cl;return Object.assign(p,h),p})}else{const f=JT(e);return u=Ae("tunedModels",f._url),c=f._query,delete f._url,delete f._query,l=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(d=>d.json().then(h=>{const p=h;return p.sdkHttpResponse={headers:d.headers},p})),l.then(d=>{const h=ZT(d),p=new Cl;return Object.assign(p,h),p})}}async cancel(e){var t,i,o,r;let l="",u={};if(this.apiClient.isVertexAI()){const c=OT(e);l=Ae("{name}:cancel",c._url),u=c._query,delete c._url,delete c._query,await this.apiClient.request({path:l,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal})}else{const c=VT(e);l=Ae("{name}:cancel",c._url),u=c._query,delete c._url,delete c._query,await this.apiClient.request({path:l,queryParams:u,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal})}}async tuneInternal(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI()){const u=WT(e);return r=Ae("tuningJobs",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(f=>{const d=f;return d.sdkHttpResponse={headers:c.headers},d})),o.then(c=>ps(c))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(e){var t,i;let o,r="",l={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const u=zT(e);return r=Ae("tunedModels",u._url),l=u._query,delete u._url,delete u._query,o=this.apiClient.request({path:r,queryParams:l,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json().then(f=>{const d=f;return d.sdkHttpResponse={headers:c.headers},d})),o.then(c=>rS(c))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class lS{async download(e,t){throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")}}const uS=1024*1024*8,cS=3,fS=1e3,dS=2,Ar="x-goog-upload-status";async function hS(n,e,t){var i,o,r;let l=0,u=0,c=new ss(new Response),f="upload";for(l=n.size;u<l;){const h=Math.min(uS,l-u),p=n.slice(u,u+h);u+h>=l&&(f+=", finalize");let m=0,S=fS;for(;m<cS&&(c=await t.request({path:"",body:p,httpMethod:"POST",httpOptions:{apiVersion:"",baseUrl:e,headers:{"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":String(u),"Content-Length":String(h)}}}),!(!((i=c==null?void 0:c.headers)===null||i===void 0)&&i[Ar]));)m++,await mS(S),S=S*dS;if(u+=h,((o=c==null?void 0:c.headers)===null||o===void 0?void 0:o[Ar])!=="active")break;if(l<=u)throw new Error("All content has been uploaded, but the upload status is not finalized.")}const d=await(c==null?void 0:c.json());if(((r=c==null?void 0:c.headers)===null||r===void 0?void 0:r[Ar])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return d.file}async function pS(n){return{size:n.size,type:n.type}}function mS(n){return new Promise(e=>setTimeout(e,n))}class gS{async upload(e,t,i){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await hS(e,t,i)}async stat(e){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await pS(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class _S{create(e,t,i){return new vS(e,t,i)}}class vS{constructor(e,t,i){this.url=e,this.headers=t,this.callbacks=i}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(e){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(e)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Kl="x-goog-api-key";class TS{constructor(e){this.apiKey=e}async addAuthHeaders(e){if(e.get(Kl)===null){if(this.apiKey.startsWith("auth_tokens/"))throw new Error("Ephemeral tokens are only supported by the live API.");if(!this.apiKey)throw new Error("API key is missing. Please provide a valid API key.");e.append(Kl,this.apiKey)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const SS="gl-node/";class xS{constructor(e){var t;if(e.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(e.project||e.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(t=e.vertexai)!==null&&t!==void 0?t:!1,this.apiKey=e.apiKey;const i=Ef(e.httpOptions,e.vertexai,void 0,void 0);i&&(e.httpOptions?e.httpOptions.baseUrl=i:e.httpOptions={baseUrl:i}),this.apiVersion=e.apiVersion;const o=new TS(this.apiKey);this.apiClient=new k0({auth:o,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:e.httpOptions,userAgentExtra:SS+"web",uploader:new gS,downloader:new lS}),this.models=new oT(this.apiClient),this.live=new Z0(this.apiClient,o,new _S),this.batches=new gh(this.apiClient),this.chats=new Ep(this.models,this.apiClient),this.caches=new xp(this.apiClient),this.files=new Bp(this.apiClient),this.operations=new rT(this.apiClient),this.authTokens=new kT(this.apiClient),this.tunings=new aS(this.apiClient)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/const yS=n=>{var e="";const t=n.byteLength;for(var i=0;i<t;i++)e+=String.fromCharCode(n[i]);return btoa(e)},MS=n=>{const e=atob(n),t=e.length,i=new Uint8Array(t);for(var o=0;o<t;o++)i[o]=e.charCodeAt(o);return i},ES=n=>{const e=n.length,t=new Int16Array(e);for(var i=0;i<e;i++)t[i]=n[i]*32768;return{data:yS(new Uint8Array(t.buffer)),mimeType:"audio/pcm;rate=16000"}},CS=async(n,e,t,i)=>{const o=e.createBuffer(i,n.length/2/i,t),r=new Int16Array(n.buffer),l=r.length,u=new Float32Array(l);for(var c=0;c<l;c++)u[c]=r[c]/32768;for(var c=0;c<i;c++){const d=u.filter((h,p)=>p%i===c);o.copyToChannel(d,c)}return o};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/class Co{constructor(e){this.bufferLength=0,this.analyser=e.context.createAnalyser(),this.analyser.fftSize=32,this.bufferLength=this.analyser.frequencyBinCount,this.dataArray=new Uint8Array(this.bufferLength),e.connect(this.analyser)}update(){this.analyser.getByteFrequencyData(this.dataArray)}get data(){return this.dataArray}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="176",AS=0,Zl=1,RS=2,Uc=1,wS=2,yn=3,qn=0,Bt=1,Mn=2,wn=0,bi=1,ms=2,Ql=3,jl=4,IS=5,ni=100,PS=101,DS=102,bS=103,US=104,NS=200,LS=201,FS=202,BS=203,gs=204,_s=205,kS=206,VS=207,OS=208,GS=209,HS=210,zS=211,WS=212,qS=213,XS=214,vs=0,Ts=1,Ss=2,Ni=3,xs=4,ys=5,Ms=6,Es=7,Nc=0,YS=1,$S=2,Wn=0,JS=1,KS=2,ZS=3,QS=4,jS=5,ex=6,tx=7,Lc=300,Li=301,Fi=302,ar=303,Cs=304,gr=306,As=1e3,An=1001,Rs=1002,Wt=1003,nx=1004,Ao=1005,Lt=1006,Rr=1007,zn=1008,Pn=1009,Fc=1010,Bc=1011,so=1012,ha=1013,si=1014,Kt=1015,zt=1016,pa=1017,ma=1018,ao=1020,kc=35902,Vc=1021,Oc=1022,Zt=1023,lo=1026,uo=1027,ga=1028,_a=1029,Gc=1030,va=1031,Ta=1033,Zo=33776,Qo=33777,jo=33778,er=33779,ws=35840,Is=35841,Ps=35842,Ds=35843,bs=36196,Us=37492,Ns=37496,Ls=37808,Fs=37809,Bs=37810,ks=37811,Vs=37812,Os=37813,Gs=37814,Hs=37815,zs=37816,Ws=37817,qs=37818,Xs=37819,Ys=37820,$s=37821,tr=36492,Js=36494,Ks=36495,Hc=36283,Zs=36284,Qs=36285,js=36286,ix=3200,ox=3201,zc=0,rx=1,En="",Yt="srgb",Xn="srgb-linear",lr="linear",dt="srgb",fi=7680,eu=519,sx=512,ax=513,lx=514,Wc=515,ux=516,cx=517,fx=518,dx=519,tu=35044,ea="300 es",Rn=2e3,ur=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const r=o.indexOf(t);r!==-1&&o.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let r=0,l=o.length;r<l;r++)o[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wr=Math.PI/180,ta=180/Math.PI;function fo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function hx(n,e){return(n%e+e)%e}function Ir(n,e,t){return(1-t)*n+t*e}function Zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),r=this.x-e.x,l=this.y-e.y;return this.x=r*i-l*o+e.x,this.y=r*o+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,o,r,l,u,c,f){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,r,l,u,c,f)}set(e,t,i,o,r,l,u,c,f){const d=this.elements;return d[0]=e,d[1]=o,d[2]=u,d[3]=t,d[4]=r,d[5]=c,d[6]=i,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,r=this.elements,l=i[0],u=i[3],c=i[6],f=i[1],d=i[4],h=i[7],p=i[2],m=i[5],S=i[8],x=o[0],T=o[3],g=o[6],w=o[1],A=o[4],M=o[7],B=o[2],b=o[5],N=o[8];return r[0]=l*x+u*w+c*B,r[3]=l*T+u*A+c*b,r[6]=l*g+u*M+c*N,r[1]=f*x+d*w+h*B,r[4]=f*T+d*A+h*b,r[7]=f*g+d*M+h*N,r[2]=p*x+m*w+S*B,r[5]=p*T+m*A+S*b,r[8]=p*g+m*M+S*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],l=e[4],u=e[5],c=e[6],f=e[7],d=e[8];return t*l*d-t*u*f-i*r*d+i*u*c+o*r*f-o*l*c}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],l=e[4],u=e[5],c=e[6],f=e[7],d=e[8],h=d*l-u*f,p=u*c-d*r,m=f*r-l*c,S=t*h+i*p+o*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/S;return e[0]=h*x,e[1]=(o*f-d*i)*x,e[2]=(u*i-o*l)*x,e[3]=p*x,e[4]=(d*t-o*c)*x,e[5]=(o*r-u*t)*x,e[6]=m*x,e[7]=(i*c-f*t)*x,e[8]=(l*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,r,l,u){const c=Math.cos(r),f=Math.sin(r);return this.set(i*c,i*f,-i*(c*l+f*u)+l+e,-o*f,o*c,-o*(-f*l+c*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Pr.makeScale(e,t)),this}rotate(e){return this.premultiply(Pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Ke;function qc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function px(){const n=cr("canvas");return n.style.display="block",n}const nu={};function nr(n){n in nu||(nu[n]=!0,console.warn(n))}function mx(n,e,t){return new Promise(function(i,o){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function gx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _x(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const iu=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vx(){const n={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(o,r,l){return this.enabled===!1||r===l||!r||!l||(this.spaces[r].transfer===dt&&(o.r=In(o.r),o.g=In(o.g),o.b=In(o.b)),this.spaces[r].primaries!==this.spaces[l].primaries&&(o.applyMatrix3(this.spaces[r].toXYZ),o.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===dt&&(o.r=Ui(o.r),o.g=Ui(o.g),o.b=Ui(o.b))),o},fromWorkingColorSpace:function(o,r){return this.convert(o,this.workingColorSpace,r)},toWorkingColorSpace:function(o,r){return this.convert(o,r,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===En?lr:this.spaces[o].transfer},getLuminanceCoefficients:function(o,r=this.workingColorSpace){return o.fromArray(this.spaces[r].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,r,l){return o.copy(this.spaces[r].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xn]:{primaries:e,whitePoint:i,transfer:lr,toXYZ:iu,fromXYZ:ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:iu,fromXYZ:ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}const st=vx();function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ui(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let di;class Tx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{di===void 0&&(di=cr("canvas")),di.width=e.width,di.height=e.height;const o=di.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=di}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),r=o.data;for(let l=0;l<r.length;l++)r[l]=In(r[l]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(In(t[i]/255)*255):t[i]=In(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sx=0;class Sa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=fo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let l=0,u=o.length;l<u;l++)o[l].isDataTexture?r.push(Dr(o[l].image)):r.push(Dr(o[l]))}else r=Dr(o);i.url=r}return t||(e.images[this.uuid]=i),i}}function Dr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xx=0;class kt extends zi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=An,o=An,r=Lt,l=zn,u=Zt,c=Pn,f=kt.DEFAULT_ANISOTROPY,d=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=fo(),this.name="",this.source=new Sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=r,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Lc;kt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,o=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,r=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*o+l[12]*r,this.y=l[1]*t+l[5]*i+l[9]*o+l[13]*r,this.z=l[2]*t+l[6]*i+l[10]*o+l[14]*r,this.w=l[3]*t+l[7]*i+l[11]*o+l[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,r;const c=e.elements,f=c[0],d=c[4],h=c[8],p=c[1],m=c[5],S=c[9],x=c[2],T=c[6],g=c[10];if(Math.abs(d-p)<.01&&Math.abs(h-x)<.01&&Math.abs(S-T)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+x)<.1&&Math.abs(S+T)<.1&&Math.abs(f+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(f+1)/2,M=(m+1)/2,B=(g+1)/2,b=(d+p)/4,N=(h+x)/4,V=(S+T)/4;return A>M&&A>B?A<.01?(i=0,o=.707106781,r=.707106781):(i=Math.sqrt(A),o=b/i,r=N/i):M>B?M<.01?(i=.707106781,o=0,r=.707106781):(o=Math.sqrt(M),i=b/o,r=V/o):B<.01?(i=.707106781,o=.707106781,r=0):(r=Math.sqrt(B),i=N/r,o=V/r),this.set(i,o,r,t),this}let w=Math.sqrt((T-S)*(T-S)+(h-x)*(h-x)+(p-d)*(p-d));return Math.abs(w)<.001&&(w=1),this.x=(T-S)/w,this.y=(h-x)/w,this.z=(p-d)/w,this.w=Math.acos((f+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yx extends zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const o={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const r=new kt(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let u=0;u<l;u++)this.textures[u]=r.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,r=this.textures.length;o<r;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Sa(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends yx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xc extends kt{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mx extends kt{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,r,l,u){let c=i[o+0],f=i[o+1],d=i[o+2],h=i[o+3];const p=r[l+0],m=r[l+1],S=r[l+2],x=r[l+3];if(u===0){e[t+0]=c,e[t+1]=f,e[t+2]=d,e[t+3]=h;return}if(u===1){e[t+0]=p,e[t+1]=m,e[t+2]=S,e[t+3]=x;return}if(h!==x||c!==p||f!==m||d!==S){let T=1-u;const g=c*p+f*m+d*S+h*x,w=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const B=Math.sqrt(A),b=Math.atan2(B,g*w);T=Math.sin(T*b)/B,u=Math.sin(u*b)/B}const M=u*w;if(c=c*T+p*M,f=f*T+m*M,d=d*T+S*M,h=h*T+x*M,T===1-u){const B=1/Math.sqrt(c*c+f*f+d*d+h*h);c*=B,f*=B,d*=B,h*=B}}e[t]=c,e[t+1]=f,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,o,r,l){const u=i[o],c=i[o+1],f=i[o+2],d=i[o+3],h=r[l],p=r[l+1],m=r[l+2],S=r[l+3];return e[t]=u*S+d*h+c*m-f*p,e[t+1]=c*S+d*p+f*h-u*m,e[t+2]=f*S+d*m+u*p-c*h,e[t+3]=d*S-u*h-c*p-f*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,r=e._z,l=e._order,u=Math.cos,c=Math.sin,f=u(i/2),d=u(o/2),h=u(r/2),p=c(i/2),m=c(o/2),S=c(r/2);switch(l){case"XYZ":this._x=p*d*h+f*m*S,this._y=f*m*h-p*d*S,this._z=f*d*S+p*m*h,this._w=f*d*h-p*m*S;break;case"YXZ":this._x=p*d*h+f*m*S,this._y=f*m*h-p*d*S,this._z=f*d*S-p*m*h,this._w=f*d*h+p*m*S;break;case"ZXY":this._x=p*d*h-f*m*S,this._y=f*m*h+p*d*S,this._z=f*d*S+p*m*h,this._w=f*d*h-p*m*S;break;case"ZYX":this._x=p*d*h-f*m*S,this._y=f*m*h+p*d*S,this._z=f*d*S-p*m*h,this._w=f*d*h+p*m*S;break;case"YZX":this._x=p*d*h+f*m*S,this._y=f*m*h+p*d*S,this._z=f*d*S-p*m*h,this._w=f*d*h-p*m*S;break;case"XZY":this._x=p*d*h-f*m*S,this._y=f*m*h-p*d*S,this._z=f*d*S+p*m*h,this._w=f*d*h+p*m*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],r=t[8],l=t[1],u=t[5],c=t[9],f=t[2],d=t[6],h=t[10],p=i+u+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-f)*m,this._z=(l-o)*m}else if(i>u&&i>h){const m=2*Math.sqrt(1+i-u-h);this._w=(d-c)/m,this._x=.25*m,this._y=(o+l)/m,this._z=(r+f)/m}else if(u>h){const m=2*Math.sqrt(1+u-i-h);this._w=(r-f)/m,this._x=(o+l)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+h-i-u);this._w=(l-o)/m,this._x=(r+f)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,r=e._z,l=e._w,u=t._x,c=t._y,f=t._z,d=t._w;return this._x=i*d+l*u+o*f-r*c,this._y=o*d+l*c+r*u-i*f,this._z=r*d+l*f+i*c-o*u,this._w=l*d-i*u-o*c-r*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,r=this._z,l=this._w;let u=l*e._w+i*e._x+o*e._y+r*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=o,this._z=r,this;const c=1-u*u;if(c<=Number.EPSILON){const m=1-t;return this._w=m*l+t*this._w,this._x=m*i+t*this._x,this._y=m*o+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const f=Math.sqrt(c),d=Math.atan2(f,u),h=Math.sin((1-t)*d)/f,p=Math.sin(t*d)/f;return this._w=l*h+this._w*p,this._x=i*h+this._x*p,this._y=o*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*o,this.y=r[1]*t+r[4]*i+r[7]*o,this.z=r[2]*t+r[5]*i+r[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,r=e.elements,l=1/(r[3]*t+r[7]*i+r[11]*o+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*o+r[12])*l,this.y=(r[1]*t+r[5]*i+r[9]*o+r[13])*l,this.z=(r[2]*t+r[6]*i+r[10]*o+r[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,r=e.x,l=e.y,u=e.z,c=e.w,f=2*(l*o-u*i),d=2*(u*t-r*o),h=2*(r*i-l*t);return this.x=t+c*f+l*h-u*d,this.y=i+c*d+u*f-r*h,this.z=o+c*h+r*d-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*o,this.y=r[1]*t+r[5]*i+r[9]*o,this.z=r[2]*t+r[6]*i+r[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,r=e.z,l=t.x,u=t.y,c=t.z;return this.x=o*c-r*u,this.y=r*l-i*c,this.z=i*u-o*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return br.copy(this).projectOnVector(e),this.sub(br)}reflect(e){return this.sub(br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new X,ru=new Wi;class ho{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=r.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,nn):nn.fromBufferAttribute(r,l),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const o=e.children;for(let r=0,l=o.length;r<l;r++)this.expandByObject(o[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),wo.subVectors(this.max,Qi),hi.subVectors(e.a,Qi),pi.subVectors(e.b,Qi),mi.subVectors(e.c,Qi),Nn.subVectors(pi,hi),Ln.subVectors(mi,pi),$n.subVectors(hi,mi);let t=[0,-Nn.z,Nn.y,0,-Ln.z,Ln.y,0,-$n.z,$n.y,Nn.z,0,-Nn.x,Ln.z,0,-Ln.x,$n.z,0,-$n.x,-Nn.y,Nn.x,0,-Ln.y,Ln.x,0,-$n.y,$n.x,0];return!Ur(t,hi,pi,mi,wo)||(t=[1,0,0,0,1,0,0,0,1],!Ur(t,hi,pi,mi,wo))?!1:(Io.crossVectors(Nn,Ln),t=[Io.x,Io.y,Io.z],Ur(t,hi,pi,mi,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new X,new X,new X,new X,new X,new X,new X,new X],nn=new X,Ro=new ho,hi=new X,pi=new X,mi=new X,Nn=new X,Ln=new X,$n=new X,Qi=new X,wo=new X,Io=new X,Jn=new X;function Ur(n,e,t,i,o){for(let r=0,l=n.length-3;r<=l;r+=3){Jn.fromArray(n,r);const u=o.x*Math.abs(Jn.x)+o.y*Math.abs(Jn.y)+o.z*Math.abs(Jn.z),c=e.dot(Jn),f=t.dot(Jn),d=i.dot(Jn);if(Math.max(-Math.max(c,f,d),Math.min(c,f,d))>u)return!1}return!0}const Ex=new ho,ji=new X,Nr=new X;class xa{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ex.setFromPoints(e).getCenter(i);let o=0;for(let r=0,l=e.length;r<l;r++)o=Math.max(o,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(ji,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(Nr)),this.expandByPoint(ji.copy(e.center).sub(Nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new X,Lr=new X,Po=new X,Fn=new X,Fr=new X,Do=new X,Br=new X;class Cx{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Lr.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Lr);const r=e.distanceTo(t)*.5,l=-this.direction.dot(Po),u=Fn.dot(this.direction),c=-Fn.dot(Po),f=Fn.lengthSq(),d=Math.abs(1-l*l);let h,p,m,S;if(d>0)if(h=l*c-u,p=l*u-c,S=r*d,h>=0)if(p>=-S)if(p<=S){const x=1/d;h*=x,p*=x,m=h*(h+l*p+2*u)+p*(l*h+p+2*c)+f}else p=r,h=Math.max(0,-(l*p+u)),m=-h*h+p*(p+2*c)+f;else p=-r,h=Math.max(0,-(l*p+u)),m=-h*h+p*(p+2*c)+f;else p<=-S?(h=Math.max(0,-(-l*r+u)),p=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+p*(p+2*c)+f):p<=S?(h=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+f):(h=Math.max(0,-(l*r+u)),p=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+p*(p+2*c)+f);else p=l>0?-r:r,h=Math.max(0,-(l*p+u)),m=-h*h+p*(p+2*c)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,h),o&&o.copy(Lr).addScaledVector(Po,p),m}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),o=_n.dot(_n)-i*i,r=e.radius*e.radius;if(o>r)return null;const l=Math.sqrt(r-o),u=i-l,c=i+l;return c<0?null:u<0?this.at(c,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,r,l,u,c;const f=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return f>=0?(i=(e.min.x-p.x)*f,o=(e.max.x-p.x)*f):(i=(e.max.x-p.x)*f,o=(e.min.x-p.x)*f),d>=0?(r=(e.min.y-p.y)*d,l=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,l=(e.min.y-p.y)*d),i>l||r>o||((r>i||isNaN(i))&&(i=r),(l<o||isNaN(o))&&(o=l),h>=0?(u=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(u=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),i>c||u>o)||((u>i||i!==i)&&(i=u),(c<o||o!==o)&&(o=c),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,o,r){Fr.subVectors(t,e),Do.subVectors(i,e),Br.crossVectors(Fr,Do);let l=this.direction.dot(Br),u;if(l>0){if(o)return null;u=1}else if(l<0)u=-1,l=-l;else return null;Fn.subVectors(this.origin,e);const c=u*this.direction.dot(Do.crossVectors(Fn,Do));if(c<0)return null;const f=u*this.direction.dot(Fr.cross(Fn));if(f<0||c+f>l)return null;const d=-u*Fn.dot(Br);return d<0?null:this.at(d/l,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,o,r,l,u,c,f,d,h,p,m,S,x,T){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,r,l,u,c,f,d,h,p,m,S,x,T)}set(e,t,i,o,r,l,u,c,f,d,h,p,m,S,x,T){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=o,g[1]=r,g[5]=l,g[9]=u,g[13]=c,g[2]=f,g[6]=d,g[10]=h,g[14]=p,g[3]=m,g[7]=S,g[11]=x,g[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/gi.setFromMatrixColumn(e,0).length(),r=1/gi.setFromMatrixColumn(e,1).length(),l=1/gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,r=e.z,l=Math.cos(i),u=Math.sin(i),c=Math.cos(o),f=Math.sin(o),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const p=l*d,m=l*h,S=u*d,x=u*h;t[0]=c*d,t[4]=-c*h,t[8]=f,t[1]=m+S*f,t[5]=p-x*f,t[9]=-u*c,t[2]=x-p*f,t[6]=S+m*f,t[10]=l*c}else if(e.order==="YXZ"){const p=c*d,m=c*h,S=f*d,x=f*h;t[0]=p+x*u,t[4]=S*u-m,t[8]=l*f,t[1]=l*h,t[5]=l*d,t[9]=-u,t[2]=m*u-S,t[6]=x+p*u,t[10]=l*c}else if(e.order==="ZXY"){const p=c*d,m=c*h,S=f*d,x=f*h;t[0]=p-x*u,t[4]=-l*h,t[8]=S+m*u,t[1]=m+S*u,t[5]=l*d,t[9]=x-p*u,t[2]=-l*f,t[6]=u,t[10]=l*c}else if(e.order==="ZYX"){const p=l*d,m=l*h,S=u*d,x=u*h;t[0]=c*d,t[4]=S*f-m,t[8]=p*f+x,t[1]=c*h,t[5]=x*f+p,t[9]=m*f-S,t[2]=-f,t[6]=u*c,t[10]=l*c}else if(e.order==="YZX"){const p=l*c,m=l*f,S=u*c,x=u*f;t[0]=c*d,t[4]=x-p*h,t[8]=S*h+m,t[1]=h,t[5]=l*d,t[9]=-u*d,t[2]=-f*d,t[6]=m*h+S,t[10]=p-x*h}else if(e.order==="XZY"){const p=l*c,m=l*f,S=u*c,x=u*f;t[0]=c*d,t[4]=-h,t[8]=f*d,t[1]=p*h+x,t[5]=l*d,t[9]=m*h-S,t[2]=S*h-m,t[6]=u*d,t[10]=x*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ax,e,Rx)}lookAt(e,t,i){const o=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Bn.crossVectors(i,Gt),Bn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Bn.crossVectors(i,Gt)),Bn.normalize(),bo.crossVectors(Gt,Bn),o[0]=Bn.x,o[4]=bo.x,o[8]=Gt.x,o[1]=Bn.y,o[5]=bo.y,o[9]=Gt.y,o[2]=Bn.z,o[6]=bo.z,o[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,r=this.elements,l=i[0],u=i[4],c=i[8],f=i[12],d=i[1],h=i[5],p=i[9],m=i[13],S=i[2],x=i[6],T=i[10],g=i[14],w=i[3],A=i[7],M=i[11],B=i[15],b=o[0],N=o[4],V=o[8],E=o[12],y=o[1],k=o[5],q=o[9],$=o[13],te=o[2],oe=o[6],J=o[10],fe=o[14],j=o[3],ge=o[7],ve=o[11],Ie=o[15];return r[0]=l*b+u*y+c*te+f*j,r[4]=l*N+u*k+c*oe+f*ge,r[8]=l*V+u*q+c*J+f*ve,r[12]=l*E+u*$+c*fe+f*Ie,r[1]=d*b+h*y+p*te+m*j,r[5]=d*N+h*k+p*oe+m*ge,r[9]=d*V+h*q+p*J+m*ve,r[13]=d*E+h*$+p*fe+m*Ie,r[2]=S*b+x*y+T*te+g*j,r[6]=S*N+x*k+T*oe+g*ge,r[10]=S*V+x*q+T*J+g*ve,r[14]=S*E+x*$+T*fe+g*Ie,r[3]=w*b+A*y+M*te+B*j,r[7]=w*N+A*k+M*oe+B*ge,r[11]=w*V+A*q+M*J+B*ve,r[15]=w*E+A*$+M*fe+B*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],r=e[12],l=e[1],u=e[5],c=e[9],f=e[13],d=e[2],h=e[6],p=e[10],m=e[14],S=e[3],x=e[7],T=e[11],g=e[15];return S*(+r*c*h-o*f*h-r*u*p+i*f*p+o*u*m-i*c*m)+x*(+t*c*m-t*f*p+r*l*p-o*l*m+o*f*d-r*c*d)+T*(+t*f*h-t*u*m-r*l*h+i*l*m+r*u*d-i*f*d)+g*(-o*u*d-t*c*h+t*u*p+o*l*h-i*l*p+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],l=e[4],u=e[5],c=e[6],f=e[7],d=e[8],h=e[9],p=e[10],m=e[11],S=e[12],x=e[13],T=e[14],g=e[15],w=h*T*f-x*p*f+x*c*m-u*T*m-h*c*g+u*p*g,A=S*p*f-d*T*f-S*c*m+l*T*m+d*c*g-l*p*g,M=d*x*f-S*h*f+S*u*m-l*x*m-d*u*g+l*h*g,B=S*h*c-d*x*c-S*u*p+l*x*p+d*u*T-l*h*T,b=t*w+i*A+o*M+r*B;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/b;return e[0]=w*N,e[1]=(x*p*r-h*T*r-x*o*m+i*T*m+h*o*g-i*p*g)*N,e[2]=(u*T*r-x*c*r+x*o*f-i*T*f-u*o*g+i*c*g)*N,e[3]=(h*c*r-u*p*r-h*o*f+i*p*f+u*o*m-i*c*m)*N,e[4]=A*N,e[5]=(d*T*r-S*p*r+S*o*m-t*T*m-d*o*g+t*p*g)*N,e[6]=(S*c*r-l*T*r-S*o*f+t*T*f+l*o*g-t*c*g)*N,e[7]=(l*p*r-d*c*r+d*o*f-t*p*f-l*o*m+t*c*m)*N,e[8]=M*N,e[9]=(S*h*r-d*x*r-S*i*m+t*x*m+d*i*g-t*h*g)*N,e[10]=(l*x*r-S*u*r+S*i*f-t*x*f-l*i*g+t*u*g)*N,e[11]=(d*u*r-l*h*r-d*i*f+t*h*f+l*i*m-t*u*m)*N,e[12]=B*N,e[13]=(d*x*o-S*h*o+S*i*p-t*x*p-d*i*T+t*h*T)*N,e[14]=(S*u*o-l*x*o-S*i*c+t*x*c+l*i*T-t*u*T)*N,e[15]=(l*h*o-d*u*o+d*i*c-t*h*c-l*i*p+t*u*p)*N,this}scale(e){const t=this.elements,i=e.x,o=e.y,r=e.z;return t[0]*=i,t[4]*=o,t[8]*=r,t[1]*=i,t[5]*=o,t[9]*=r,t[2]*=i,t[6]*=o,t[10]*=r,t[3]*=i,t[7]*=o,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),r=1-i,l=e.x,u=e.y,c=e.z,f=r*l,d=r*u;return this.set(f*l+i,f*u-o*c,f*c+o*u,0,f*u+o*c,d*u+i,d*c-o*l,0,f*c-o*u,d*c+o*l,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,r,l){return this.set(1,i,r,0,e,1,l,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,r=t._x,l=t._y,u=t._z,c=t._w,f=r+r,d=l+l,h=u+u,p=r*f,m=r*d,S=r*h,x=l*d,T=l*h,g=u*h,w=c*f,A=c*d,M=c*h,B=i.x,b=i.y,N=i.z;return o[0]=(1-(x+g))*B,o[1]=(m+M)*B,o[2]=(S-A)*B,o[3]=0,o[4]=(m-M)*b,o[5]=(1-(p+g))*b,o[6]=(T+w)*b,o[7]=0,o[8]=(S+A)*N,o[9]=(T-w)*N,o[10]=(1-(p+x))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let r=gi.set(o[0],o[1],o[2]).length();const l=gi.set(o[4],o[5],o[6]).length(),u=gi.set(o[8],o[9],o[10]).length();this.determinant()<0&&(r=-r),e.x=o[12],e.y=o[13],e.z=o[14],on.copy(this);const f=1/r,d=1/l,h=1/u;return on.elements[0]*=f,on.elements[1]*=f,on.elements[2]*=f,on.elements[4]*=d,on.elements[5]*=d,on.elements[6]*=d,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),i.x=r,i.y=l,i.z=u,this}makePerspective(e,t,i,o,r,l,u=Rn){const c=this.elements,f=2*r/(t-e),d=2*r/(i-o),h=(t+e)/(t-e),p=(i+o)/(i-o);let m,S;if(u===Rn)m=-(l+r)/(l-r),S=-2*l*r/(l-r);else if(u===ur)m=-l/(l-r),S=-l*r/(l-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,o,r,l,u=Rn){const c=this.elements,f=1/(t-e),d=1/(i-o),h=1/(l-r),p=(t+e)*f,m=(i+o)*d;let S,x;if(u===Rn)S=(l+r)*h,x=-2*h;else if(u===ur)S=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gi=new X,on=new yt,Ax=new X(0,0,0),Rx=new X(1,1,1),Bn=new X,bo=new X,Gt=new X,su=new yt,au=new Wi;class cn{constructor(e=0,t=0,i=0,o=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,r=o[0],l=o[4],u=o[8],c=o[1],f=o[5],d=o[9],h=o[2],p=o[6],m=o[10];switch(t){case"XYZ":this._y=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(p,f),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(u,m),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(u,m));break;case"XZY":this._z=Math.asin(-tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,f),this._y=Math.atan2(u,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return au.setFromEuler(this),this.setFromQuaternion(au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wx=0;const lu=new X,_i=new Wi,vn=new yt,Uo=new X,eo=new X,Ix=new X,Px=new Wi,uu=new X(1,0,0),cu=new X(0,1,0),fu=new X(0,0,1),du={type:"added"},Dx={type:"removed"},vi={type:"childadded",child:null},kr={type:"childremoved",child:null};class qt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new X,t=new cn,i=new Wi,o=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ke}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return lu.copy(e).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uo.copy(e):Uo.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(eo,Uo,this.up):vn.lookAt(Uo,eo,this.up),this.quaternion.setFromRotationMatrix(vn),o&&(vn.extractRotation(o.matrixWorld),_i.setFromRotationMatrix(vn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(du),vi.child=e,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dx),kr.child=e,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(du),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let r=0,l=o.length;r<l;r++)o[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,Px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let r=0,l=o.length;r<l;r++)o[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?{min:u.boundingBox.min.toArray(),max:u.boundingBox.max.toArray()}:void 0,boundingSphere:u.boundingSphere?{radius:u.boundingSphere.radius,center:u.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(u,c){return u[c.uuid]===void 0&&(u[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const c=u.shapes;if(Array.isArray(c))for(let f=0,d=c.length;f<d;f++){const h=c[f];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let c=0,f=this.material.length;c<f;c++)u.push(r(e.materials,this.material[c]));o.material=u}else o.material=r(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const c=this.animations[u];o.animations.push(r(e.animations,c))}}if(t){const u=l(e.geometries),c=l(e.materials),f=l(e.textures),d=l(e.images),h=l(e.shapes),p=l(e.skeletons),m=l(e.animations),S=l(e.nodes);u.length>0&&(i.geometries=u),c.length>0&&(i.materials=c),f.length>0&&(i.textures=f),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),S.length>0&&(i.nodes=S)}return i.object=o,i;function l(u){const c=[];for(const f in u){const d=u[f];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}qt.DEFAULT_UP=new X(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new X,Tn=new X,Vr=new X,Sn=new X,Ti=new X,Si=new X,hu=new X,Or=new X,Gr=new X,Hr=new X,zr=new Tt,Wr=new Tt,qr=new Tt;class ln{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),rn.subVectors(e,t),o.cross(rn);const r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(e,t,i,o,r){rn.subVectors(o,t),Tn.subVectors(i,t),Vr.subVectors(e,t);const l=rn.dot(rn),u=rn.dot(Tn),c=rn.dot(Vr),f=Tn.dot(Tn),d=Tn.dot(Vr),h=l*f-u*u;if(h===0)return r.set(0,0,0),null;const p=1/h,m=(f*c-u*d)*p,S=(l*d-u*c)*p;return r.set(1-m-S,S,m)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,i,o,r,l,u,c){return this.getBarycoord(e,t,i,o,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(l,Sn.y),c.addScaledVector(u,Sn.z),c)}static getInterpolatedAttribute(e,t,i,o,r,l){return zr.setScalar(0),Wr.setScalar(0),qr.setScalar(0),zr.fromBufferAttribute(e,t),Wr.fromBufferAttribute(e,i),qr.fromBufferAttribute(e,o),l.setScalar(0),l.addScaledVector(zr,r.x),l.addScaledVector(Wr,r.y),l.addScaledVector(qr,r.z),l}static isFrontFacing(e,t,i,o){return rn.subVectors(i,t),Tn.subVectors(e,t),rn.cross(Tn).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),rn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,o,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,r=this.c;let l,u;Ti.subVectors(o,i),Si.subVectors(r,i),Or.subVectors(e,i);const c=Ti.dot(Or),f=Si.dot(Or);if(c<=0&&f<=0)return t.copy(i);Gr.subVectors(e,o);const d=Ti.dot(Gr),h=Si.dot(Gr);if(d>=0&&h<=d)return t.copy(o);const p=c*h-d*f;if(p<=0&&c>=0&&d<=0)return l=c/(c-d),t.copy(i).addScaledVector(Ti,l);Hr.subVectors(e,r);const m=Ti.dot(Hr),S=Si.dot(Hr);if(S>=0&&m<=S)return t.copy(r);const x=m*f-c*S;if(x<=0&&f>=0&&S<=0)return u=f/(f-S),t.copy(i).addScaledVector(Si,u);const T=d*S-m*h;if(T<=0&&h-d>=0&&m-S>=0)return hu.subVectors(r,o),u=(h-d)/(h-d+(m-S)),t.copy(o).addScaledVector(hu,u);const g=1/(T+x+p);return l=x*g,u=p*g,t.copy(i).addScaledVector(Ti,l).addScaledVector(Si,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},No={h:0,s:0,l:0};function Xr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=st.workingColorSpace){if(e=hx(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,l=2*i-r;this.r=Xr(l,r,e+1/3),this.g=Xr(l,r,e),this.b=Xr(l,r,e-1/3)}return st.toWorkingColorSpace(this,o),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const l=o[1],u=o[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=o[1],l=r.length;if(l===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=$c[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return st.fromWorkingColorSpace(Dt.copy(this),e),Math.round(tt(Dt.r*255,0,255))*65536+Math.round(tt(Dt.g*255,0,255))*256+Math.round(tt(Dt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,o=Dt.g,r=Dt.b,l=Math.max(i,o,r),u=Math.min(i,o,r);let c,f;const d=(u+l)/2;if(u===l)c=0,f=0;else{const h=l-u;switch(f=d<=.5?h/(l+u):h/(2-l-u),l){case i:c=(o-r)/h+(o<r?6:0);break;case o:c=(r-i)/h+2;break;case r:c=(i-o)/h+4;break}c/=6}return e.h=c,e.s=f,e.l=d,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Yt){st.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,o=Dt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(No);const i=Ir(kn.h,No.h,t),o=Ir(kn.s,No.s,t),r=Ir(kn.l,No.l,t);return this.setHSL(i,o,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*o,this.g=r[1]*t+r[4]*i+r[7]*o,this.b=r[2]*t+r[5]*i+r[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new ot;ot.NAMES=$c;let bx=0;class po extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=bi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gs,this.blendDst=_s,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(i.blending=this.blending),this.side!==qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gs&&(i.blendSrc=this.blendSrc),this.blendDst!==_s&&(i.blendDst=this.blendDst),this.blendEquation!==ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(r){const l=[];for(const u in r){const c=r[u];delete c.metadata,l.push(c)}return l}if(t){const r=o(e.textures),l=o(e.images);r.length>0&&(i.textures=r),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let r=0;r!==o;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ya extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=Ux();function Ux(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),o=new Uint32Array(512);for(let c=0;c<256;++c){const f=c-127;f<-27?(i[c]=0,i[c|256]=32768,o[c]=24,o[c|256]=24):f<-14?(i[c]=1024>>-f-14,i[c|256]=1024>>-f-14|32768,o[c]=-f-1,o[c|256]=-f-1):f<=15?(i[c]=f+15<<10,i[c|256]=f+15<<10|32768,o[c]=13,o[c|256]=13):f<128?(i[c]=31744,i[c|256]=64512,o[c]=24,o[c|256]=24):(i[c]=31744,i[c|256]=64512,o[c]=13,o[c|256]=13)}const r=new Uint32Array(2048),l=new Uint32Array(64),u=new Uint32Array(64);for(let c=1;c<1024;++c){let f=c<<13,d=0;for(;(f&8388608)===0;)f<<=1,d-=8388608;f&=-8388609,d+=947912704,r[c]=f|d}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)l[c]=c<<23;l[31]=1199570944,l[32]=2147483648;for(let c=33;c<63;++c)l[c]=2147483648+(c-32<<23);l[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(u[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:o,mantissaTable:r,exponentTable:l,offsetTable:u}}function Nx(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=tt(n,-65504,65504),Cn.floatView[0]=n;const e=Cn.uint32View[0],t=e>>23&511;return Cn.baseTable[t]+((e&8388607)>>Cn.shiftTable[t])}function Lx(n){const e=n>>10;return Cn.uint32View[0]=Cn.mantissaTable[Cn.offsetTable[e]+(n&1023)]+Cn.exponentTable[e],Cn.floatView[0]}class pu{static toHalfFloat(e){return Nx(e)}static fromHalfFloat(e){return Lx(e)}}const xt=new X,Lo=new qe;let Fx=0;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tu,this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),o=Vt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),o=Vt(o,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tu&&(e.usage=this.usage),e}}class Jc extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kc extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class en extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bx=0;const Xt=new yt,Yr=new qt,xi=new X,Ht=new ho,to=new ho,It=new X;class bn extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qc(e)?Kc:Jc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,r=e.length;o<r;o++){const l=e[o];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new en(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const r=e[o];t.setXYZ(o,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const r=t[i];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,l=t.length;r<l;r++){const u=t[r];to.setFromBufferAttribute(u),this.morphTargetsRelative?(It.addVectors(Ht.min,to.min),Ht.expandByPoint(It),It.addVectors(Ht.max,to.max),Ht.expandByPoint(It)):(Ht.expandByPoint(to.min),Ht.expandByPoint(to.max))}Ht.getCenter(i);let o=0;for(let r=0,l=e.count;r<l;r++)It.fromBufferAttribute(e,r),o=Math.max(o,i.distanceToSquared(It));if(t)for(let r=0,l=t.length;r<l;r++){const u=t[r],c=this.morphTargetsRelative;for(let f=0,d=u.count;f<d;f++)It.fromBufferAttribute(u,f),c&&(xi.fromBufferAttribute(e,f),It.add(xi)),o=Math.max(o,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),u=[],c=[];for(let V=0;V<i.count;V++)u[V]=new X,c[V]=new X;const f=new X,d=new X,h=new X,p=new qe,m=new qe,S=new qe,x=new X,T=new X;function g(V,E,y){f.fromBufferAttribute(i,V),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),p.fromBufferAttribute(r,V),m.fromBufferAttribute(r,E),S.fromBufferAttribute(r,y),d.sub(f),h.sub(f),m.sub(p),S.sub(p);const k=1/(m.x*S.y-S.x*m.y);isFinite(k)&&(x.copy(d).multiplyScalar(S.y).addScaledVector(h,-m.y).multiplyScalar(k),T.copy(h).multiplyScalar(m.x).addScaledVector(d,-S.x).multiplyScalar(k),u[V].add(x),u[E].add(x),u[y].add(x),c[V].add(T),c[E].add(T),c[y].add(T))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let V=0,E=w.length;V<E;++V){const y=w[V],k=y.start,q=y.count;for(let $=k,te=k+q;$<te;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const A=new X,M=new X,B=new X,b=new X;function N(V){B.fromBufferAttribute(o,V),b.copy(B);const E=u[V];A.copy(E),A.sub(B.multiplyScalar(B.dot(E))).normalize(),M.crossVectors(b,E);const k=M.dot(c[V])<0?-1:1;l.setXYZW(V,A.x,A.y,A.z,k)}for(let V=0,E=w.length;V<E;++V){const y=w[V],k=y.start,q=y.count;for(let $=k,te=k+q;$<te;$+=3)N(e.getX($+0)),N(e.getX($+1)),N(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const o=new X,r=new X,l=new X,u=new X,c=new X,f=new X,d=new X,h=new X;if(e)for(let p=0,m=e.count;p<m;p+=3){const S=e.getX(p+0),x=e.getX(p+1),T=e.getX(p+2);o.fromBufferAttribute(t,S),r.fromBufferAttribute(t,x),l.fromBufferAttribute(t,T),d.subVectors(l,r),h.subVectors(o,r),d.cross(h),u.fromBufferAttribute(i,S),c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,T),u.add(d),c.add(d),f.add(d),i.setXYZ(S,u.x,u.y,u.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(T,f.x,f.y,f.z)}else for(let p=0,m=t.count;p<m;p+=3)o.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),l.fromBufferAttribute(t,p+2),d.subVectors(l,r),h.subVectors(o,r),d.cross(h),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(u,c){const f=u.array,d=u.itemSize,h=u.normalized,p=new f.constructor(c.length*d);let m=0,S=0;for(let x=0,T=c.length;x<T;x++){u.isInterleavedBufferAttribute?m=c[x]*u.data.stride+u.offset:m=c[x]*d;for(let g=0;g<d;g++)p[S++]=f[m++]}return new hn(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,i=this.index.array,o=this.attributes;for(const u in o){const c=o[u],f=e(c,i);t.setAttribute(u,f)}const r=this.morphAttributes;for(const u in r){const c=[],f=r[u];for(let d=0,h=f.length;d<h;d++){const p=f[d],m=e(p,i);c.push(m)}t.morphAttributes[u]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,c=l.length;u<c;u++){const f=l[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const f=i[c];e.data.attributes[c]=f.toJSON(e.data)}const o={};let r=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],d=[];for(let h=0,p=f.length;h<p;h++){const m=f[h];d.push(m.toJSON(e.data))}d.length>0&&(o[c]=d,r=!0)}r&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const f in o){const d=o[f];this.setAttribute(f,d.clone(t))}const r=e.morphAttributes;for(const f in r){const d=[],h=r[f];for(let p=0,m=h.length;p<m;p++)d.push(h[p].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,d=l.length;f<d;f++){const h=l[f];this.addGroup(h.start,h.count,h.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new yt,Kn=new Cx,Fo=new xa,gu=new X,Bo=new X,ko=new X,Vo=new X,$r=new X,Oo=new X,_u=new X,Go=new X;class Qt extends qt{constructor(e=new bn,t=new ya){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=o.length;r<l;r++){const u=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=r}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,r=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(r&&u){Oo.set(0,0,0);for(let c=0,f=r.length;c<f;c++){const d=u[c],h=r[c];d!==0&&($r.fromBufferAttribute(h,e),l?Oo.addScaledVector($r,d):Oo.addScaledVector($r.sub(t),d))}t.add(Oo)}return t}raycast(e,t){const i=this.geometry,o=this.material,r=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),Kn.copy(e.ray).recast(e.near),!(Fo.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Fo,gu)===null||Kn.origin.distanceToSquared(gu)>(e.far-e.near)**2))&&(mu.copy(r).invert(),Kn.copy(e.ray).applyMatrix4(mu),!(i.boundingBox!==null&&Kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,i){let o;const r=this.geometry,l=this.material,u=r.index,c=r.attributes.position,f=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,p=r.groups,m=r.drawRange;if(u!==null)if(Array.isArray(l))for(let S=0,x=p.length;S<x;S++){const T=p[S],g=l[T.materialIndex],w=Math.max(T.start,m.start),A=Math.min(u.count,Math.min(T.start+T.count,m.start+m.count));for(let M=w,B=A;M<B;M+=3){const b=u.getX(M),N=u.getX(M+1),V=u.getX(M+2);o=Ho(this,g,e,i,f,d,h,b,N,V),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=T.materialIndex,t.push(o))}}else{const S=Math.max(0,m.start),x=Math.min(u.count,m.start+m.count);for(let T=S,g=x;T<g;T+=3){const w=u.getX(T),A=u.getX(T+1),M=u.getX(T+2);o=Ho(this,l,e,i,f,d,h,w,A,M),o&&(o.faceIndex=Math.floor(T/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(l))for(let S=0,x=p.length;S<x;S++){const T=p[S],g=l[T.materialIndex],w=Math.max(T.start,m.start),A=Math.min(c.count,Math.min(T.start+T.count,m.start+m.count));for(let M=w,B=A;M<B;M+=3){const b=M,N=M+1,V=M+2;o=Ho(this,g,e,i,f,d,h,b,N,V),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=T.materialIndex,t.push(o))}}else{const S=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let T=S,g=x;T<g;T+=3){const w=T,A=T+1,M=T+2;o=Ho(this,l,e,i,f,d,h,w,A,M),o&&(o.faceIndex=Math.floor(T/3),t.push(o))}}}}function kx(n,e,t,i,o,r,l,u){let c;if(e.side===Bt?c=i.intersectTriangle(l,r,o,!0,u):c=i.intersectTriangle(o,r,l,e.side===qn,u),c===null)return null;Go.copy(u),Go.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(Go);return f<t.near||f>t.far?null:{distance:f,point:Go.clone(),object:n}}function Ho(n,e,t,i,o,r,l,u,c,f){n.getVertexPosition(u,Bo),n.getVertexPosition(c,ko),n.getVertexPosition(f,Vo);const d=kx(n,e,t,i,Bo,ko,Vo,_u);if(d){const h=new X;ln.getBarycoord(_u,Bo,ko,Vo,h),o&&(d.uv=ln.getInterpolatedAttribute(o,u,c,f,h,new qe)),r&&(d.uv1=ln.getInterpolatedAttribute(r,u,c,f,h,new qe)),l&&(d.normal=ln.getInterpolatedAttribute(l,u,c,f,h,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:u,b:c,c:f,normal:new X,materialIndex:0};ln.getNormal(Bo,ko,Vo,p.normal),d.face=p,d.barycoord=h}return d}class mo extends bn{constructor(e=1,t=1,i=1,o=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:r,depthSegments:l};const u=this;o=Math.floor(o),r=Math.floor(r),l=Math.floor(l);const c=[],f=[],d=[],h=[];let p=0,m=0;S("z","y","x",-1,-1,i,t,e,l,r,0),S("z","y","x",1,-1,i,t,-e,l,r,1),S("x","z","y",1,1,e,i,t,o,l,2),S("x","z","y",1,-1,e,i,-t,o,l,3),S("x","y","z",1,-1,e,t,i,o,r,4),S("x","y","z",-1,-1,e,t,-i,o,r,5),this.setIndex(c),this.setAttribute("position",new en(f,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(h,2));function S(x,T,g,w,A,M,B,b,N,V,E){const y=M/N,k=B/V,q=M/2,$=B/2,te=b/2,oe=N+1,J=V+1;let fe=0,j=0;const ge=new X;for(let ve=0;ve<J;ve++){const Ie=ve*k-$;for(let Ve=0;Ve<oe;Ve++){const We=Ve*y-q;ge[x]=We*w,ge[T]=Ie*A,ge[g]=te,f.push(ge.x,ge.y,ge.z),ge[x]=0,ge[T]=0,ge[g]=b>0?1:-1,d.push(ge.x,ge.y,ge.z),h.push(Ve/N),h.push(1-ve/V),fe+=1}}for(let ve=0;ve<V;ve++)for(let Ie=0;Ie<N;Ie++){const Ve=p+Ie+oe*ve,We=p+Ie+oe*(ve+1),ee=p+(Ie+1)+oe*(ve+1),pe=p+(Ie+1)+oe*ve;c.push(Ve,We,pe),c.push(We,ee,pe),j+=6}u.addGroup(m,j,E),m+=j,p+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=Bi(n[t]);for(const o in i)e[o]=i[o]}return e}function Vx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const fr={clone:Bi,merge:Nt};var Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const l=this.uniforms[o].value;l&&l.isTexture?t.uniforms[o]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[o]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[o]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[o]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[o]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[o]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[o]={type:"m4",value:l.toArray()}:t.uniforms[o]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Qc extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new X,vu=new qe,Tu=new qe;class $t extends Qc{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,vu,Tu),t.subVectors(Tu,vu)}setViewOffset(e,t,i,o,r,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wr*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,r=-.5*o;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,f=l.fullHeight;r+=l.offsetX*o/c,t-=l.offsetY*i/f,o*=l.width/c,i*=l.height/f}const u=this.filmOffset;u!==0&&(r+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Mi=1;class Hx extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $t(yi,Mi,e,t);o.layers=this.layers,this.add(o);const r=new $t(yi,Mi,e,t);r.layers=this.layers,this.add(r);const l=new $t(yi,Mi,e,t);l.layers=this.layers,this.add(l);const u=new $t(yi,Mi,e,t);u.layers=this.layers,this.add(u);const c=new $t(yi,Mi,e,t);c.layers=this.layers,this.add(c);const f=new $t(yi,Mi,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,r,l,u,c]=t;for(const f of t)this.remove(f);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,l,u,c,f,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,r),e.setRenderTarget(i,1,o),e.render(t,l),e.setRenderTarget(i,2,o),e.render(t,u),e.setRenderTarget(i,3,o),e.render(t,c),e.setRenderTarget(i,4,o),e.render(t,f),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,o),e.render(t,d),e.setRenderTarget(h,p,m),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class jc extends kt{constructor(e=[],t=Li,i,o,r,l,u,c,f,d){super(e,t,i,o,r,l,u,c,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zx extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new jc(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new mo(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:wn});r.uniforms.tEquirect.value=t;const l=new Qt(o,r),u=t.minFilter;return t.minFilter===zn&&(t.minFilter=Lt),new Hx(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const r=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,o);e.setRenderTarget(r)}}class zo extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wx={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,r=null,l=null;const u=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const x of e.hand.values()){const T=t.getJointPose(x,i),g=this._getHandJoint(f,x);T!==null&&(g.matrix.fromArray(T.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=T.radius),g.visible=T!==null}const d=f.joints["index-finger-tip"],h=f.joints["thumb-tip"],p=d.position.distanceTo(h.position),m=.02,S=.005;f.inputState.pinching&&p>m+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&p<=m-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&r!==null&&(o=r),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Wx)))}return u!==null&&(u.visible=o!==null),c!==null&&(c.visible=r!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class qx extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xx extends kt{constructor(e=null,t=1,i=1,o,r,l,u,c,f=Wt,d=Wt,h,p){super(null,l,u,c,f,d,o,r,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kr=new X,Yx=new X,$x=new Ke;class ei{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Kr.subVectors(i,t).cross(Yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Kr),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$x.getNormalMatrix(e),o=this.coplanarPoint(Kr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new xa,Wo=new X;class ef{constructor(e=new ei,t=new ei,i=new ei,o=new ei,r=new ei,l=new ei){this.planes=[e,t,i,o,r,l]}set(e,t,i,o,r,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(r),u[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn){const i=this.planes,o=e.elements,r=o[0],l=o[1],u=o[2],c=o[3],f=o[4],d=o[5],h=o[6],p=o[7],m=o[8],S=o[9],x=o[10],T=o[11],g=o[12],w=o[13],A=o[14],M=o[15];if(i[0].setComponents(c-r,p-f,T-m,M-g).normalize(),i[1].setComponents(c+r,p+f,T+m,M+g).normalize(),i[2].setComponents(c+l,p+d,T+S,M+w).normalize(),i[3].setComponents(c-l,p-d,T-S,M-w).normalize(),i[4].setComponents(c-u,p-h,T-x,M-A).normalize(),t===Rn)i[5].setComponents(c+u,p+h,T+x,M+A).normalize();else if(t===ur)i[5].setComponents(u,h,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Wo.x=o.normal.x>0?e.max.x:e.min.x,Wo.y=o.normal.y>0?e.max.y:e.min.y,Wo.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tf extends kt{constructor(e,t,i=si,o,r,l,u=Wt,c=Wt,f,d=lo){if(d!==lo&&d!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,r,l,u,c,d,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ma extends bn{constructor(e=[],t=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:o};const r=[],l=[];u(o),f(i),d(),this.setAttribute("position",new en(r,3)),this.setAttribute("normal",new en(r.slice(),3)),this.setAttribute("uv",new en(l,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function u(w){const A=new X,M=new X,B=new X;for(let b=0;b<t.length;b+=3)m(t[b+0],A),m(t[b+1],M),m(t[b+2],B),c(A,M,B,w)}function c(w,A,M,B){const b=B+1,N=[];for(let V=0;V<=b;V++){N[V]=[];const E=w.clone().lerp(M,V/b),y=A.clone().lerp(M,V/b),k=b-V;for(let q=0;q<=k;q++)q===0&&V===b?N[V][q]=E:N[V][q]=E.clone().lerp(y,q/k)}for(let V=0;V<b;V++)for(let E=0;E<2*(b-V)-1;E++){const y=Math.floor(E/2);E%2===0?(p(N[V][y+1]),p(N[V+1][y]),p(N[V][y])):(p(N[V][y+1]),p(N[V+1][y+1]),p(N[V+1][y]))}}function f(w){const A=new X;for(let M=0;M<r.length;M+=3)A.x=r[M+0],A.y=r[M+1],A.z=r[M+2],A.normalize().multiplyScalar(w),r[M+0]=A.x,r[M+1]=A.y,r[M+2]=A.z}function d(){const w=new X;for(let A=0;A<r.length;A+=3){w.x=r[A+0],w.y=r[A+1],w.z=r[A+2];const M=T(w)/2/Math.PI+.5,B=g(w)/Math.PI+.5;l.push(M,1-B)}S(),h()}function h(){for(let w=0;w<l.length;w+=6){const A=l[w+0],M=l[w+2],B=l[w+4],b=Math.max(A,M,B),N=Math.min(A,M,B);b>.9&&N<.1&&(A<.2&&(l[w+0]+=1),M<.2&&(l[w+2]+=1),B<.2&&(l[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function m(w,A){const M=w*3;A.x=e[M+0],A.y=e[M+1],A.z=e[M+2]}function S(){const w=new X,A=new X,M=new X,B=new X,b=new qe,N=new qe,V=new qe;for(let E=0,y=0;E<r.length;E+=9,y+=6){w.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),b.set(l[y+0],l[y+1]),N.set(l[y+2],l[y+3]),V.set(l[y+4],l[y+5]),B.copy(w).add(A).add(M).divideScalar(3);const k=T(B);x(b,y+0,w,k),x(N,y+2,A,k),x(V,y+4,M,k)}}function x(w,A,M,B){B<0&&w.x===1&&(l[A]=w.x-1),M.x===0&&M.z===0&&(l[A]=B/2/Math.PI+.5)}function T(w){return Math.atan2(w.z,-w.x)}function g(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.vertices,e.indices,e.radius,e.details)}}class dr extends Ma{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,o=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dr(e.radius,e.detail)}}class _r extends bn{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const r=e/2,l=t/2,u=Math.floor(i),c=Math.floor(o),f=u+1,d=c+1,h=e/u,p=t/c,m=[],S=[],x=[],T=[];for(let g=0;g<d;g++){const w=g*p-l;for(let A=0;A<f;A++){const M=A*h-r;S.push(M,-w,0),x.push(0,0,1),T.push(A/u),T.push(1-g/c)}}for(let g=0;g<c;g++)for(let w=0;w<u;w++){const A=w+f*g,M=w+f*(g+1),B=w+1+f*(g+1),b=w+1+f*g;m.push(A,M,b),m.push(M,B,b)}this.setIndex(m),this.setAttribute("position",new en(S,3)),this.setAttribute("normal",new en(x,3)),this.setAttribute("uv",new en(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jx extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kx extends po{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zx extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qx extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Su={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class jx{constructor(e,t,i){const o=this;let r=!1,l=0,u=0,c;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){u++,r===!1&&o.onStart!==void 0&&o.onStart(d,l,u),r=!0},this.itemEnd=function(d){l++,o.onProgress!==void 0&&o.onProgress(d,l,u),l===u&&(r=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(d){o.onError!==void 0&&o.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return f.push(d,h),this},this.removeHandler=function(d){const h=f.indexOf(d);return h!==-1&&f.splice(h,2),this},this.getHandler=function(d){for(let h=0,p=f.length;h<p;h+=2){const m=f[h],S=f[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return S}return null}}}const ey=new jx;class Ea{constructor(e){this.manager=e!==void 0?e:ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,r){i.load(e,o,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";const xn={};class ty extends Error{constructor(e,t){super(e),this.response=t}}class ny extends Ea{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Su.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xn[e]!==void 0){xn[e].push({onLoad:t,onProgress:i,onError:o});return}xn[e]=[],xn[e].push({onLoad:t,onProgress:i,onError:o});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,c=this.responseType;fetch(l).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const d=xn[e],h=f.body.getReader(),p=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),m=p?parseInt(p):0,S=m!==0;let x=0;const T=new ReadableStream({start(g){w();function w(){h.read().then(({done:A,value:M})=>{if(A)g.close();else{x+=M.byteLength;const B=new ProgressEvent("progress",{lengthComputable:S,loaded:x,total:m});for(let b=0,N=d.length;b<N;b++){const V=d[b];V.onProgress&&V.onProgress(B)}g.enqueue(M),w()}},A=>{g.error(A)})}}});return new Response(T)}else throw new ty(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(c){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(d=>new DOMParser().parseFromString(d,u));case"json":return f.json();default:if(u==="")return f.text();{const h=/charset="?([^;"\s]*)"?/i.exec(u),p=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(p);return f.arrayBuffer().then(S=>m.decode(S))}}}).then(f=>{Su.add(e,f);const d=xn[e];delete xn[e];for(let h=0,p=d.length;h<p;h++){const m=d[h];m.onLoad&&m.onLoad(f)}}).catch(f=>{const d=xn[e];if(d===void 0)throw this.manager.itemError(e),f;delete xn[e];for(let h=0,p=d.length;h<p;h++){const m=d[h];m.onError&&m.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class iy extends Ea{constructor(e){super(e)}load(e,t,i,o){const r=this,l=new Xx,u=new ny(this.manager);return u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setPath(this.path),u.setWithCredentials(r.withCredentials),u.load(e,function(c){let f;try{f=r.parse(c)}catch(d){if(o!==void 0)o(d);else{console.error(d);return}}f.image!==void 0?l.image=f.image:f.data!==void 0&&(l.image.width=f.width,l.image.height=f.height,l.image.data=f.data),l.wrapS=f.wrapS!==void 0?f.wrapS:An,l.wrapT=f.wrapT!==void 0?f.wrapT:An,l.magFilter=f.magFilter!==void 0?f.magFilter:Lt,l.minFilter=f.minFilter!==void 0?f.minFilter:Lt,l.anisotropy=f.anisotropy!==void 0?f.anisotropy:1,f.colorSpace!==void 0&&(l.colorSpace=f.colorSpace),f.flipY!==void 0&&(l.flipY=f.flipY),f.format!==void 0&&(l.format=f.format),f.type!==void 0&&(l.type=f.type),f.mipmaps!==void 0&&(l.mipmaps=f.mipmaps,l.minFilter=zn),f.mipmapCount===1&&(l.minFilter=Lt),f.generateMipmaps!==void 0&&(l.generateMipmaps=f.generateMipmaps),l.needsUpdate=!0,t&&t(l,f)},i,o),l}}class nf extends Qc{constructor(e=-1,t=1,i=1,o=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let r=i-e,l=i+e,u=o+t,c=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=f*this.view.offsetX,l=r+f*this.view.width,u-=d*this.view.offsetY,c=u-d*this.view.height}this.projectionMatrix.makeOrthographic(r,l,u,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class oy extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ry{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xu(){return performance.now()}function yu(n,e,t,i){const o=sy(i);switch(t){case Vc:return n*e;case ga:return n*e/o.components*o.byteLength;case _a:return n*e/o.components*o.byteLength;case Gc:return n*e*2/o.components*o.byteLength;case va:return n*e*2/o.components*o.byteLength;case Oc:return n*e*3/o.components*o.byteLength;case Zt:return n*e*4/o.components*o.byteLength;case Ta:return n*e*4/o.components*o.byteLength;case Zo:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jo:case er:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Is:case Ds:return Math.max(n,16)*Math.max(e,8)/4;case ws:case Ps:return Math.max(n,8)*Math.max(e,8)/2;case bs:case Us:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ls:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fs:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ks:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vs:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Os:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hs:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ws:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qs:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xs:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ys:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $s:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case tr:case Js:case Ks:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hc:case Zs:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qs:case js:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sy(n){switch(n){case Pn:case Fc:return{byteLength:1,components:1};case so:case Bc:case zt:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case si:case ha:case Kt:return{byteLength:4,components:1};case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function of(){let n=null,e=!1,t=null,i=null;function o(r,l){t(r,l),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ay(n){const e=new WeakMap;function t(u,c){const f=u.array,d=u.usage,h=f.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,f,d),u.onUploadCallback();let m;if(f instanceof Float32Array)m=n.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=n.SHORT;else if(f instanceof Uint32Array)m=n.UNSIGNED_INT;else if(f instanceof Int32Array)m=n.INT;else if(f instanceof Int8Array)m=n.BYTE;else if(f instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:h}}function i(u,c,f){const d=c.array,h=c.updateRanges;if(n.bindBuffer(f,u),h.length===0)n.bufferSubData(f,0,d);else{h.sort((m,S)=>m.start-S.start);let p=0;for(let m=1;m<h.length;m++){const S=h[p],x=h[m];x.start<=S.start+S.count+1?S.count=Math.max(S.count,x.start+x.count-S.start):(++p,h[p]=x)}h.length=p+1;for(let m=0,S=h.length;m<S;m++){const x=h[m];n.bufferSubData(f,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function r(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=e.get(u);c&&(n.deleteBuffer(c.buffer),e.delete(u))}function l(u,c){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const d=e.get(u);(!d||d.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,c),f.version=u.version}}return{get:o,remove:r,update:l}}var ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,py=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,my=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,by=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,By=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$M=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:ly,alphahash_pars_fragment:uy,alphamap_fragment:cy,alphamap_pars_fragment:fy,alphatest_fragment:dy,alphatest_pars_fragment:hy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:gy,batching_vertex:_y,begin_vertex:vy,beginnormal_vertex:Ty,bsdfs:Sy,iridescence_fragment:xy,bumpmap_pars_fragment:yy,clipping_planes_fragment:My,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:Ay,color_fragment:Ry,color_pars_fragment:wy,color_pars_vertex:Iy,color_vertex:Py,common:Dy,cube_uv_reflection_fragment:by,defaultnormal_vertex:Uy,displacementmap_pars_vertex:Ny,displacementmap_vertex:Ly,emissivemap_fragment:Fy,emissivemap_pars_fragment:By,colorspace_fragment:ky,colorspace_pars_fragment:Vy,envmap_fragment:Oy,envmap_common_pars_fragment:Gy,envmap_pars_fragment:Hy,envmap_pars_vertex:zy,envmap_physical_pars_fragment:eM,envmap_vertex:Wy,fog_vertex:qy,fog_pars_vertex:Xy,fog_fragment:Yy,fog_pars_fragment:$y,gradientmap_pars_fragment:Jy,lightmap_pars_fragment:Ky,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Qy,lights_pars_begin:jy,lights_toon_fragment:tM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:oM,lights_physical_fragment:rM,lights_physical_pars_fragment:sM,lights_fragment_begin:aM,lights_fragment_maps:lM,lights_fragment_end:uM,logdepthbuf_fragment:cM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:hM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:gM,map_particle_pars_fragment:_M,metalnessmap_fragment:vM,metalnessmap_pars_fragment:TM,morphinstance_vertex:SM,morphcolor_vertex:xM,morphnormal_vertex:yM,morphtarget_pars_vertex:MM,morphtarget_vertex:EM,normal_fragment_begin:CM,normal_fragment_maps:AM,normal_pars_fragment:RM,normal_pars_vertex:wM,normal_vertex:IM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:bM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:NM,opaque_fragment:LM,packing:FM,premultiplied_alpha_fragment:BM,project_vertex:kM,dithering_fragment:VM,dithering_pars_fragment:OM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:HM,shadowmap_pars_fragment:zM,shadowmap_pars_vertex:WM,shadowmap_vertex:qM,shadowmask_pars_fragment:XM,skinbase_vertex:YM,skinning_pars_vertex:$M,skinning_vertex:JM,skinnormal_vertex:KM,specularmap_fragment:ZM,specularmap_pars_fragment:QM,tonemapping_fragment:jM,tonemapping_pars_fragment:eE,transmission_fragment:tE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:oE,uv_vertex:rE,worldpos_vertex:sE,background_vert:aE,background_frag:lE,backgroundCube_vert:uE,backgroundCube_frag:cE,cube_vert:fE,cube_frag:dE,depth_vert:hE,depth_frag:pE,distanceRGBA_vert:mE,distanceRGBA_frag:gE,equirect_vert:_E,equirect_frag:vE,linedashed_vert:TE,linedashed_frag:SE,meshbasic_vert:xE,meshbasic_frag:yE,meshlambert_vert:ME,meshlambert_frag:EE,meshmatcap_vert:CE,meshmatcap_frag:AE,meshnormal_vert:RE,meshnormal_frag:wE,meshphong_vert:IE,meshphong_frag:PE,meshphysical_vert:DE,meshphysical_frag:bE,meshtoon_vert:UE,meshtoon_frag:NE,points_vert:LE,points_frag:FE,shadow_vert:BE,shadow_frag:kE,sprite_vert:VE,sprite_frag:OE},Te={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},dn={basic:{uniforms:Nt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Nt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ot(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Nt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Nt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Nt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ot(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Nt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Nt([Te.points,Te.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Nt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Nt([Te.common,Te.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Nt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Nt([Te.sprite,Te.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Nt([Te.common,Te.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Nt([Te.lights,Te.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};dn.physical={uniforms:Nt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const qo={r:0,b:0,g:0},Qn=new cn,GE=new yt;function HE(n,e,t,i,o,r,l){const u=new ot(0);let c=r===!0?0:1,f,d,h=null,p=0,m=null;function S(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?t:e).get(M)),M}function x(A){let M=!1;const B=S(A);B===null?g(u,c):B&&B.isColor&&(g(B,1),M=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,l):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(A,M){const B=S(M);B&&(B.isCubeTexture||B.mapping===gr)?(d===void 0&&(d=new Qt(new mo(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Bi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),Qn.copy(M.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),d.material.uniforms.envMap.value=B,d.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(GE.makeRotationFromEuler(Qn)),d.material.toneMapped=st.getTransfer(B.colorSpace)!==dt,(h!==B||p!==B.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,h=B,p=B.version,m=n.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):B&&B.isTexture&&(f===void 0&&(f=new Qt(new _r(2,2),new Ft({name:"BackgroundMaterial",uniforms:Bi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=B,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.toneMapped=st.getTransfer(B.colorSpace)!==dt,B.matrixAutoUpdate===!0&&B.updateMatrix(),f.material.uniforms.uvTransform.value.copy(B.matrix),(h!==B||p!==B.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,h=B,p=B.version,m=n.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function g(A,M){A.getRGB(qo,Zc(n)),i.buffers.color.setClear(qo.r,qo.g,qo.b,M,l)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(A,M=1){u.set(A),c=M,g(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,g(u,c)},render:x,addToRenderList:T,dispose:w}}function zE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=p(null);let r=o,l=!1;function u(y,k,q,$,te){let oe=!1;const J=h($,q,k);r!==J&&(r=J,f(r.object)),oe=m(y,$,q,te),oe&&S(y,$,q,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(oe||l)&&(l=!1,M(y,k,q,$),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function c(){return n.createVertexArray()}function f(y){return n.bindVertexArray(y)}function d(y){return n.deleteVertexArray(y)}function h(y,k,q){const $=q.wireframe===!0;let te=i[y.id];te===void 0&&(te={},i[y.id]=te);let oe=te[k.id];oe===void 0&&(oe={},te[k.id]=oe);let J=oe[$];return J===void 0&&(J=p(c()),oe[$]=J),J}function p(y){const k=[],q=[],$=[];for(let te=0;te<t;te++)k[te]=0,q[te]=0,$[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:$,object:y,attributes:{},index:null}}function m(y,k,q,$){const te=r.attributes,oe=k.attributes;let J=0;const fe=q.getAttributes();for(const j in fe)if(fe[j].location>=0){const ve=te[j];let Ie=oe[j];if(Ie===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(Ie=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(Ie=y.instanceColor)),ve===void 0||ve.attribute!==Ie||Ie&&ve.data!==Ie.data)return!0;J++}return r.attributesNum!==J||r.index!==$}function S(y,k,q,$){const te={},oe=k.attributes;let J=0;const fe=q.getAttributes();for(const j in fe)if(fe[j].location>=0){let ve=oe[j];ve===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor));const Ie={};Ie.attribute=ve,ve&&ve.data&&(Ie.data=ve.data),te[j]=Ie,J++}r.attributes=te,r.attributesNum=J,r.index=$}function x(){const y=r.newAttributes;for(let k=0,q=y.length;k<q;k++)y[k]=0}function T(y){g(y,0)}function g(y,k){const q=r.newAttributes,$=r.enabledAttributes,te=r.attributeDivisors;q[y]=1,$[y]===0&&(n.enableVertexAttribArray(y),$[y]=1),te[y]!==k&&(n.vertexAttribDivisor(y,k),te[y]=k)}function w(){const y=r.newAttributes,k=r.enabledAttributes;for(let q=0,$=k.length;q<$;q++)k[q]!==y[q]&&(n.disableVertexAttribArray(q),k[q]=0)}function A(y,k,q,$,te,oe,J){J===!0?n.vertexAttribIPointer(y,k,q,te,oe):n.vertexAttribPointer(y,k,q,$,te,oe)}function M(y,k,q,$){x();const te=$.attributes,oe=q.getAttributes(),J=k.defaultAttributeValues;for(const fe in oe){const j=oe[fe];if(j.location>=0){let ge=te[fe];if(ge===void 0&&(fe==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),fe==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const ve=ge.normalized,Ie=ge.itemSize,Ve=e.get(ge);if(Ve===void 0)continue;const We=Ve.buffer,ee=Ve.type,pe=Ve.bytesPerElement,me=ee===n.INT||ee===n.UNSIGNED_INT||ge.gpuType===ha;if(ge.isInterleavedBufferAttribute){const _e=ge.data,De=_e.stride,je=ge.offset;if(_e.isInstancedInterleavedBuffer){for(let He=0;He<j.locationSize;He++)g(j.location+He,_e.meshPerAttribute);y.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let He=0;He<j.locationSize;He++)T(j.location+He);n.bindBuffer(n.ARRAY_BUFFER,We);for(let He=0;He<j.locationSize;He++)A(j.location+He,Ie/j.locationSize,ee,ve,De*pe,(je+Ie/j.locationSize*He)*pe,me)}else{if(ge.isInstancedBufferAttribute){for(let _e=0;_e<j.locationSize;_e++)g(j.location+_e,ge.meshPerAttribute);y.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let _e=0;_e<j.locationSize;_e++)T(j.location+_e);n.bindBuffer(n.ARRAY_BUFFER,We);for(let _e=0;_e<j.locationSize;_e++)A(j.location+_e,Ie/j.locationSize,ee,ve,Ie*pe,Ie/j.locationSize*_e*pe,me)}}else if(J!==void 0){const ve=J[fe];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(j.location,ve);break;case 3:n.vertexAttrib3fv(j.location,ve);break;case 4:n.vertexAttrib4fv(j.location,ve);break;default:n.vertexAttrib1fv(j.location,ve)}}}}w()}function B(){V();for(const y in i){const k=i[y];for(const q in k){const $=k[q];for(const te in $)d($[te].object),delete $[te];delete k[q]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;const k=i[y.id];for(const q in k){const $=k[q];for(const te in $)d($[te].object),delete $[te];delete k[q]}delete i[y.id]}function N(y){for(const k in i){const q=i[k];if(q[y.id]===void 0)continue;const $=q[y.id];for(const te in $)d($[te].object),delete $[te];delete q[y.id]}}function V(){E(),l=!0,r!==o&&(r=o,f(r.object))}function E(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:V,resetDefaultState:E,dispose:B,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:T,disableUnusedAttributes:w}}function WE(n,e,t){let i;function o(f){i=f}function r(f,d){n.drawArrays(i,f,d),t.update(d,i,1)}function l(f,d,h){h!==0&&(n.drawArraysInstanced(i,f,d,h),t.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,h);let m=0;for(let S=0;S<h;S++)m+=d[S];t.update(m,i,1)}function c(f,d,h,p){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let S=0;S<f.length;S++)l(f[S],d[S],p[S]);else{m.multiDrawArraysInstancedWEBGL(i,f,0,d,0,p,0,h);let S=0;for(let x=0;x<h;x++)S+=d[x]*p[x];t.update(S,i,1)}}this.setMode=o,this.render=r,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function qE(n,e,t,i){let o;function r(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function l(N){return!(N!==Zt&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const V=N===zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Pn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Kt&&!V)}function c(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const d=c(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const h=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),T=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=S>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:S,maxTextureSize:x,maxCubemapSize:T,maxAttributes:g,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:B,maxSamples:b}}function XE(n){const e=this;let t=null,i=0,o=!1,r=!1;const l=new ei,u=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||o;return o=p,i=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=d(h,p,0)},this.setState=function(h,p,m){const S=h.clippingPlanes,x=h.clipIntersection,T=h.clipShadows,g=n.get(h);if(!o||S===null||S.length===0||r&&!T)r?d(null):f();else{const w=r?0:i,A=w*4;let M=g.clippingState||null;c.value=M,M=d(S,p,A,m);for(let B=0;B!==A;++B)M[B]=t[B];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,p,m,S){const x=h!==null?h.length:0;let T=null;if(x!==0){if(T=c.value,S!==!0||T===null){const g=m+x*4,w=p.matrixWorldInverse;u.getNormalMatrix(w),(T===null||T.length<g)&&(T=new Float32Array(g));for(let A=0,M=m;A!==x;++A,M+=4)l.copy(h[A]).applyMatrix4(w,u),l.normal.toArray(T,M),T[M+3]=l.constant}c.value=T,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,T}}function YE(n){let e=new WeakMap;function t(l,u){return u===ar?l.mapping=Li:u===Cs&&(l.mapping=Fi),l}function i(l){if(l&&l.isTexture){const u=l.mapping;if(u===ar||u===Cs)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const f=new zx(c.height);return f.fromEquirectangularTexture(n,l),e.set(l,f),l.addEventListener("dispose",o),t(f.texture,l.mapping)}else return null}}return l}function o(l){const u=l.target;u.removeEventListener("dispose",o);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ri=4,Mu=[.125,.215,.35,.446,.526,.582],ii=20,Zr=new nf,Eu=new ot;let Qr=null,jr=0,es=0,ts=!1;const ti=(1+Math.sqrt(5))/2,Ei=1/ti,Cu=[new X(-ti,Ei,0),new X(ti,Ei,0),new X(-Ei,0,ti),new X(Ei,0,ti),new X(0,ti,-Ei),new X(0,ti,Ei),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],$E=new X;class na{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100,r={}){const{size:l=256,position:u=$E}=r;Qr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,o,c,u),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qr,jr,es),this._renderer.xr.enabled=ts,e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:zt,format:Zt,colorSpace:Xn,depthBuffer:!1},o=Au(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JE(r)),this._blurMaterial=KE(r,e,t)}return o}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,i,o,r){const c=new $t(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(Eu),h.toneMapping=Wn,h.autoClear=!1;const S=new ya({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),x=new Qt(new mo,S);let T=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,T=!0):(S.color.copy(Eu),T=!0);for(let w=0;w<6;w++){const A=w%3;A===0?(c.up.set(0,f[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[w],r.y,r.z)):A===1?(c.up.set(0,0,f[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[w],r.z)):(c.up.set(0,f[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[w]));const M=this._cubeSize;Xo(o,A*M,w>2?M:0,M,M),h.setRenderTarget(o),T&&h.render(x,c),h.render(e,c)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Li||e.mapping===Fi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const r=o?this._cubemapMaterial:this._equirectMaterial,l=new Qt(this._lodPlanes[0],r),u=r.uniforms;u.envMap.value=e;const c=this._cubeSize;Xo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(l,Zr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let r=1;r<o;r++){const l=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),u=Cu[(o-r-1)%Cu.length];this._blur(e,r-1,r,l,u)}t.autoClear=i}_blur(e,t,i,o,r){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,o,"latitudinal",r),this._halfBlur(l,e,i,i,o,"longitudinal",r)}_halfBlur(e,t,i,o,r,l,u){const c=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Qt(this._lodPlanes[o],f),p=f.uniforms,m=this._sizeLods[i]-1,S=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ii-1),x=r/S,T=isFinite(r)?1+Math.floor(d*x):ii;T>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${ii}`);const g=[];let w=0;for(let N=0;N<ii;++N){const V=N/x,E=Math.exp(-V*V/2);g.push(E),N===0?w+=E:N<T&&(w+=2*E)}for(let N=0;N<g.length;N++)g[N]=g[N]/w;p.envMap.value=e.texture,p.samples.value=T,p.weights.value=g,p.latitudinal.value=l==="latitudinal",u&&(p.poleAxis.value=u);const{_lodMax:A}=this;p.dTheta.value=S,p.mipInt.value=A-i;const M=this._sizeLods[o],B=3*M*(o>A-Ri?o-A+Ri:0),b=4*(this._cubeSize-M);Xo(t,B,b,3*M,2*M),c.setRenderTarget(t),c.render(h,Zr)}}function JE(n){const e=[],t=[],i=[];let o=n;const r=n-Ri+1+Mu.length;for(let l=0;l<r;l++){const u=Math.pow(2,o);t.push(u);let c=1/u;l>n-Ri?c=Mu[l-n+Ri-1]:l===0&&(c=0),i.push(c);const f=1/(u-2),d=-f,h=1+f,p=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,S=6,x=3,T=2,g=1,w=new Float32Array(x*S*m),A=new Float32Array(T*S*m),M=new Float32Array(g*S*m);for(let b=0;b<m;b++){const N=b%3*2/3-1,V=b>2?0:-1,E=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];w.set(E,x*S*b),A.set(p,T*S*b);const y=[b,b,b,b,b,b];M.set(y,g*S*b)}const B=new bn;B.setAttribute("position",new hn(w,x)),B.setAttribute("uv",new hn(A,T)),B.setAttribute("faceIndex",new hn(M,g)),e.push(B),o>Ri&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Au(n,e,t){const i=new un(n,e,t);return i.texture.mapping=gr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function KE(n,e,t){const i=new Float32Array(ii),o=new X(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ru(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function wu(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZE(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const c=u.mapping,f=c===ar||c===Cs,d=c===Li||c===Fi;if(f||d){let h=e.get(u);const p=h!==void 0?h.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return t===null&&(t=new na(n)),h=f?t.fromEquirectangular(u,h):t.fromCubemap(u,h),h.texture.pmremVersion=u.pmremVersion,e.set(u,h),h.texture;if(h!==void 0)return h.texture;{const m=u.image;return f&&m&&m.height>0||d&&m&&o(m)?(t===null&&(t=new na(n)),h=f?t.fromEquirectangular(u):t.fromCubemap(u),h.texture.pmremVersion=u.pmremVersion,e.set(u,h),u.addEventListener("dispose",r),h.texture):null}}}return u}function o(u){let c=0;const f=6;for(let d=0;d<f;d++)u[d]!==void 0&&c++;return c===f}function r(u){const c=u.target;c.removeEventListener("dispose",r);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:l}}function QE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&nr("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function jE(n,e,t,i){const o={},r=new WeakMap;function l(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const S in p.attributes)e.remove(p.attributes[S]);p.removeEventListener("dispose",l),delete o[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function u(h,p){return o[p.id]===!0||(p.addEventListener("dispose",l),o[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function f(h){const p=[],m=h.index,S=h.attributes.position;let x=0;if(m!==null){const w=m.array;x=m.version;for(let A=0,M=w.length;A<M;A+=3){const B=w[A+0],b=w[A+1],N=w[A+2];p.push(B,b,b,N,N,B)}}else if(S!==void 0){const w=S.array;x=S.version;for(let A=0,M=w.length/3-1;A<M;A+=3){const B=A+0,b=A+1,N=A+2;p.push(B,b,b,N,N,B)}}else return;const T=new(qc(p)?Kc:Jc)(p,1);T.version=x;const g=r.get(h);g&&e.remove(g),r.set(h,T)}function d(h){const p=r.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&f(h)}else f(h);return r.get(h)}return{get:u,update:c,getWireframeAttribute:d}}function eC(n,e,t){let i;function o(p){i=p}let r,l;function u(p){r=p.type,l=p.bytesPerElement}function c(p,m){n.drawElements(i,m,r,p*l),t.update(m,i,1)}function f(p,m,S){S!==0&&(n.drawElementsInstanced(i,m,r,p*l,S),t.update(m,i,S))}function d(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,S);let T=0;for(let g=0;g<S;g++)T+=m[g];t.update(T,i,1)}function h(p,m,S,x){if(S===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let g=0;g<p.length;g++)f(p[g]/l,m[g],x[g]);else{T.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,x,0,S);let g=0;for(let w=0;w<S;w++)g+=m[w]*x[w];t.update(g,i,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function tC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,l,u){switch(t.calls++,l){case n.TRIANGLES:t.triangles+=u*(r/3);break;case n.LINES:t.lines+=u*(r/2);break;case n.LINE_STRIP:t.lines+=u*(r-1);break;case n.LINE_LOOP:t.lines+=u*r;break;case n.POINTS:t.points+=u*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function nC(n,e,t){const i=new WeakMap,o=new Tt;function r(l,u,c){const f=l.morphTargetInfluences,d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=d!==void 0?d.length:0;let p=i.get(u);if(p===void 0||p.count!==h){let E=function(){N.dispose(),i.delete(u),u.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const m=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],g=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let A=0;m===!0&&(A=1),S===!0&&(A=2),x===!0&&(A=3);let M=u.attributes.position.count*A,B=1;M>e.maxTextureSize&&(B=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*B*4*h),N=new Xc(b,M,B,h);N.type=Kt,N.needsUpdate=!0;const V=A*4;for(let y=0;y<h;y++){const k=T[y],q=g[y],$=w[y],te=M*B*4*y;for(let oe=0;oe<k.count;oe++){const J=oe*V;m===!0&&(o.fromBufferAttribute(k,oe),b[te+J+0]=o.x,b[te+J+1]=o.y,b[te+J+2]=o.z,b[te+J+3]=0),S===!0&&(o.fromBufferAttribute(q,oe),b[te+J+4]=o.x,b[te+J+5]=o.y,b[te+J+6]=o.z,b[te+J+7]=0),x===!0&&(o.fromBufferAttribute($,oe),b[te+J+8]=o.x,b[te+J+9]=o.y,b[te+J+10]=o.z,b[te+J+11]=$.itemSize===4?o.w:1)}}p={count:h,texture:N,size:new qe(M,B)},i.set(u,p),u.addEventListener("dispose",E)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",l.morphTexture,t);else{let m=0;for(let x=0;x<f.length;x++)m+=f[x];const S=u.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",f)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function iC(n,e,t,i){let o=new WeakMap;function r(c){const f=i.render.frame,d=c.geometry,h=e.get(c,d);if(o.get(h)!==f&&(e.update(h),o.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",u)===!1&&c.addEventListener("dispose",u),o.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),o.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;o.get(p)!==f&&(p.update(),o.set(p,f))}return h}function l(){o=new WeakMap}function u(c){const f=c.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:r,dispose:l}}const rf=new kt,Iu=new tf(1,1),sf=new Xc,af=new Mx,lf=new jc,Pu=[],Du=[],bu=new Float32Array(16),Uu=new Float32Array(9),Nu=new Float32Array(4);function qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let r=Pu[o];if(r===void 0&&(r=new Float32Array(o),Pu[o]=r),e!==0){i.toArray(r,0);for(let l=1,u=0;l!==e;++l)u+=t,n[l].toArray(r,u)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vr(n,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function sC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function aC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function lC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,i))return;Nu.set(i),n.uniformMatrix2fv(this.addr,!1,Nu),At(t,i)}}function uC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,i))return;Uu.set(i),n.uniformMatrix3fv(this.addr,!1,Uu),At(t,i)}}function cC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,i))return;bu.set(i),n.uniformMatrix4fv(this.addr,!1,bu),At(t,i)}}function fC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function hC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function pC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function mC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function _C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function vC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function TC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let r;this.type===n.SAMPLER_2D_SHADOW?(Iu.compareFunction=Wc,r=Iu):r=rf,t.setTexture2D(e||r,o)}function SC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||af,o)}function xC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||lf,o)}function yC(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||sf,o)}function MC(n){switch(n){case 5126:return oC;case 35664:return rC;case 35665:return sC;case 35666:return aC;case 35674:return lC;case 35675:return uC;case 35676:return cC;case 5124:case 35670:return fC;case 35667:case 35671:return dC;case 35668:case 35672:return hC;case 35669:case 35673:return pC;case 5125:return mC;case 36294:return gC;case 36295:return _C;case 36296:return vC;case 35678:case 36198:case 36298:case 36306:case 35682:return TC;case 35679:case 36299:case 36307:return SC;case 35680:case 36300:case 36308:case 36293:return xC;case 36289:case 36303:case 36311:case 36292:return yC}}function EC(n,e){n.uniform1fv(this.addr,e)}function CC(n,e){const t=qi(e,this.size,2);n.uniform2fv(this.addr,t)}function AC(n,e){const t=qi(e,this.size,3);n.uniform3fv(this.addr,t)}function RC(n,e){const t=qi(e,this.size,4);n.uniform4fv(this.addr,t)}function wC(n,e){const t=qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IC(n,e){const t=qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function PC(n,e){const t=qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function DC(n,e){n.uniform1iv(this.addr,e)}function bC(n,e){n.uniform2iv(this.addr,e)}function UC(n,e){n.uniform3iv(this.addr,e)}function NC(n,e){n.uniform4iv(this.addr,e)}function LC(n,e){n.uniform1uiv(this.addr,e)}function FC(n,e){n.uniform2uiv(this.addr,e)}function BC(n,e){n.uniform3uiv(this.addr,e)}function kC(n,e){n.uniform4uiv(this.addr,e)}function VC(n,e,t){const i=this.cache,o=e.length,r=vr(t,o);Ct(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let l=0;l!==o;++l)t.setTexture2D(e[l]||rf,r[l])}function OC(n,e,t){const i=this.cache,o=e.length,r=vr(t,o);Ct(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let l=0;l!==o;++l)t.setTexture3D(e[l]||af,r[l])}function GC(n,e,t){const i=this.cache,o=e.length,r=vr(t,o);Ct(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let l=0;l!==o;++l)t.setTextureCube(e[l]||lf,r[l])}function HC(n,e,t){const i=this.cache,o=e.length,r=vr(t,o);Ct(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let l=0;l!==o;++l)t.setTexture2DArray(e[l]||sf,r[l])}function zC(n){switch(n){case 5126:return EC;case 35664:return CC;case 35665:return AC;case 35666:return RC;case 35674:return wC;case 35675:return IC;case 35676:return PC;case 5124:case 35670:return DC;case 35667:case 35671:return bC;case 35668:case 35672:return UC;case 35669:case 35673:return NC;case 5125:return LC;case 36294:return FC;case 36295:return BC;case 36296:return kC;case 35678:case 36198:case 36298:case 36306:case 35682:return VC;case 35679:case 36299:case 36307:return OC;case 35680:case 36300:case 36308:case 36293:return GC;case 36289:case 36303:case 36311:case 36292:return HC}}class WC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MC(t.type)}}class qC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zC(t.type)}}class XC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let r=0,l=o.length;r!==l;++r){const u=o[r];u.setValue(e,t[u.id],i)}}}const ns=/(\w+)(\])?(\[|\.)?/g;function Lu(n,e){n.seq.push(e),n.map[e.id]=e}function YC(n,e,t){const i=n.name,o=i.length;for(ns.lastIndex=0;;){const r=ns.exec(i),l=ns.lastIndex;let u=r[1];const c=r[2]==="]",f=r[3];if(c&&(u=u|0),f===void 0||f==="["&&l+2===o){Lu(t,f===void 0?new WC(u,n,e):new qC(u,n,e));break}else{let h=t.map[u];h===void 0&&(h=new XC(u),Lu(t,h)),t=h}}}class ir{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const r=e.getActiveUniform(t,o),l=e.getUniformLocation(t,r.name);YC(r,l,this)}}setValue(e,t,i,o){const r=this.map[t];r!==void 0&&r.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let r=0,l=t.length;r!==l;++r){const u=t[r],c=i[u.id];c.needsUpdate!==!1&&u.setValue(e,c.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,r=e.length;o!==r;++o){const l=e[o];l.id in t&&i.push(l)}return i}}function Fu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $C=37297;let JC=0;function KC(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let l=o;l<r;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return i.join(`
`)}const Bu=new Ke;function ZC(n){st._getMatrix(Bu,st.workingColorSpace,n);const e=`mat3( ${Bu.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case lr:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ku(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(i&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const l=parseInt(r[1]);return t.toUpperCase()+`

`+o+`

`+KC(n.getShaderSource(e),l)}else return o}function QC(n,e){const t=ZC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jC(n,e){let t;switch(e){case JS:t="Linear";break;case KS:t="Reinhard";break;case ZS:t="Cineon";break;case QS:t="ACESFilmic";break;case ex:t="AgX";break;case tx:t="Neutral";break;case jS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yo=new X;function eA(){st.getLuminanceCoefficients(Yo);const n=Yo.x.toFixed(4),e=Yo.y.toFixed(4),t=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function nA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const r=n.getActiveAttrib(e,o),l=r.name;let u=1;r.type===n.FLOAT_MAT2&&(u=2),r.type===n.FLOAT_MAT3&&(u=3),r.type===n.FLOAT_MAT4&&(u=4),t[l]={type:r.type,location:n.getAttribLocation(e,l),locationSize:u}}return t}function no(n){return n!==""}function Vu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(n){return n.replace(oA,sA)}const rA=new Map;function sA(n,e){let t=Qe[e];if(t===void 0){const i=rA.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ia(t)}const aA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(n){return n.replace(aA,lA)}function lA(n,e,t,i){let o="";for(let r=parseInt(e);r<parseInt(t);r++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function Hu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function cA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Li:case Fi:e="ENVMAP_TYPE_CUBE";break;case gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fi:e="ENVMAP_MODE_REFRACTION";break}return e}function dA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nc:e="ENVMAP_BLENDING_MULTIPLY";break;case YS:e="ENVMAP_BLENDING_MIX";break;case $S:e="ENVMAP_BLENDING_ADD";break}return e}function hA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function pA(n,e,t,i){const o=n.getContext(),r=t.defines;let l=t.vertexShader,u=t.fragmentShader;const c=uA(t),f=cA(t),d=fA(t),h=dA(t),p=hA(t),m=tA(t),S=nA(r),x=o.createProgram();let T,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(no).join(`
`),T.length>0&&(T+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(no).join(`
`),g.length>0&&(g+=`
`)):(T=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),g=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Wn?jC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,QC("linearToOutputTexel",t.outputColorSpace),eA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),l=ia(l),l=Vu(l,t),l=Ou(l,t),u=ia(u),u=Vu(u,t),u=Ou(u,t),l=Gu(l),u=Gu(u),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,T=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,g=["#define varying in",t.glslVersion===ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=w+T+l,M=w+g+u,B=Fu(o,o.VERTEX_SHADER,A),b=Fu(o,o.FRAGMENT_SHADER,M);o.attachShader(x,B),o.attachShader(x,b),t.index0AttributeName!==void 0?o.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function N(k){if(n.debug.checkShaderErrors){const q=o.getProgramInfoLog(x).trim(),$=o.getShaderInfoLog(B).trim(),te=o.getShaderInfoLog(b).trim();let oe=!0,J=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,x,B,b);else{const fe=ku(o,B,"vertex"),j=ku(o,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+q+`
`+fe+`
`+j)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):($===""||te==="")&&(J=!1);J&&(k.diagnostics={runnable:oe,programLog:q,vertexShader:{log:$,prefix:T},fragmentShader:{log:te,prefix:g}})}o.deleteShader(B),o.deleteShader(b),V=new ir(o,x),E=iA(o,x)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=o.getProgramParameter(x,$C)),y},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=b,this}let mA=0;class gA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),r=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(o)===!1&&(l.add(o),o.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _A(e),t.set(e,i)),i}}class _A{constructor(e){this.id=mA++,this.code=e,this.usedTimes=0}}function vA(n,e,t,i,o,r,l){const u=new Yc,c=new gA,f=new Set,d=[],h=o.logarithmicDepthBuffer,p=o.vertexTextures;let m=o.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return f.add(E),E===0?"uv":`uv${E}`}function T(E,y,k,q,$){const te=q.fog,oe=$.geometry,J=E.isMeshStandardMaterial?q.environment:null,fe=(E.isMeshStandardMaterial?t:e).get(E.envMap||J),j=fe&&fe.mapping===gr?fe.image.height:null,ge=S[E.type];E.precision!==null&&(m=o.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ve=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ie=ve!==void 0?ve.length:0;let Ve=0;oe.morphAttributes.position!==void 0&&(Ve=1),oe.morphAttributes.normal!==void 0&&(Ve=2),oe.morphAttributes.color!==void 0&&(Ve=3);let We,ee,pe,me;if(ge){const lt=dn[ge];We=lt.vertexShader,ee=lt.fragmentShader}else We=E.vertexShader,ee=E.fragmentShader,c.update(E),pe=c.getVertexShaderID(E),me=c.getFragmentShaderID(E);const _e=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),je=$.isInstancedMesh===!0,He=$.isBatchedMesh===!0,ht=!!E.map,ft=!!E.matcap,Ze=!!fe,O=!!E.aoMap,Ut=!!E.lightMap,nt=!!E.bumpMap,et=!!E.normalMap,Fe=!!E.displacementMap,pt=!!E.emissiveMap,Ne=!!E.metalnessMap,D=!!E.roughnessMap,C=E.anisotropy>0,Y=E.clearcoat>0,re=E.dispersion>0,ue=E.iridescence>0,ne=E.sheen>0,be=E.transmission>0,Se=C&&!!E.anisotropyMap,Be=Y&&!!E.clearcoatMap,ze=Y&&!!E.clearcoatNormalMap,de=Y&&!!E.clearcoatRoughnessMap,Ee=ue&&!!E.iridescenceMap,Pe=ue&&!!E.iridescenceThicknessMap,Ue=ne&&!!E.sheenColorMap,Me=ne&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,ke=!!E.specularColorMap,Ye=!!E.specularIntensityMap,H=be&&!!E.transmissionMap,K=be&&!!E.thicknessMap,Q=!!E.gradientMap,ae=!!E.alphaMap,ye=E.alphaTest>0,xe=!!E.alphaHash,$e=!!E.extensions;let vt=Wn;E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Rt={shaderID:ge,shaderType:E.type,shaderName:E.name,vertexShader:We,fragmentShader:ee,defines:E.defines,customVertexShaderID:pe,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:He,batchingColor:He&&$._colorsTexture!==null,instancing:je,instancingColor:je&&$.instanceColor!==null,instancingMorph:je&&$.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Xn,alphaToCoverage:!!E.alphaToCoverage,map:ht,matcap:ft,envMap:Ze,envMapMode:Ze&&fe.mapping,envMapCubeUVHeight:j,aoMap:O,lightMap:Ut,bumpMap:nt,normalMap:et,displacementMap:p&&Fe,emissiveMap:pt,normalMapObjectSpace:et&&E.normalMapType===rx,normalMapTangentSpace:et&&E.normalMapType===zc,metalnessMap:Ne,roughnessMap:D,anisotropy:C,anisotropyMap:Se,clearcoat:Y,clearcoatMap:Be,clearcoatNormalMap:ze,clearcoatRoughnessMap:de,dispersion:re,iridescence:ue,iridescenceMap:Ee,iridescenceThicknessMap:Pe,sheen:ne,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:Xe,specularColorMap:ke,specularIntensityMap:Ye,transmission:be,transmissionMap:H,thicknessMap:K,gradientMap:Q,opaque:E.transparent===!1&&E.blending===bi&&E.alphaToCoverage===!1,alphaMap:ae,alphaTest:ye,alphaHash:xe,combine:E.combine,mapUv:ht&&x(E.map.channel),aoMapUv:O&&x(E.aoMap.channel),lightMapUv:Ut&&x(E.lightMap.channel),bumpMapUv:nt&&x(E.bumpMap.channel),normalMapUv:et&&x(E.normalMap.channel),displacementMapUv:Fe&&x(E.displacementMap.channel),emissiveMapUv:pt&&x(E.emissiveMap.channel),metalnessMapUv:Ne&&x(E.metalnessMap.channel),roughnessMapUv:D&&x(E.roughnessMap.channel),anisotropyMapUv:Se&&x(E.anisotropyMap.channel),clearcoatMapUv:Be&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ze&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(E.sheenRoughnessMap.channel),specularMapUv:Xe&&x(E.specularMap.channel),specularColorMapUv:ke&&x(E.specularColorMap.channel),specularIntensityMapUv:Ye&&x(E.specularIntensityMap.channel),transmissionMapUv:H&&x(E.transmissionMap.channel),thicknessMapUv:K&&x(E.thicknessMap.channel),alphaMapUv:ae&&x(E.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(et||C),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!oe.attributes.uv&&(ht||ae),fog:!!te,useFog:E.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:De,skinning:$.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:ht&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===dt,decodeVideoTextureEmissive:pt&&E.emissiveMap.isVideoTexture===!0&&st.getTransfer(E.emissiveMap.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mn,flipSided:E.side===Bt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$e&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&E.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Rt.vertexUv1s=f.has(1),Rt.vertexUv2s=f.has(2),Rt.vertexUv3s=f.has(3),f.clear(),Rt}function g(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)y.push(k),y.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(w(y,E),A(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function w(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function A(E,y){u.disableAll(),y.supportsVertexTextures&&u.enable(0),y.instancing&&u.enable(1),y.instancingColor&&u.enable(2),y.instancingMorph&&u.enable(3),y.matcap&&u.enable(4),y.envMap&&u.enable(5),y.normalMapObjectSpace&&u.enable(6),y.normalMapTangentSpace&&u.enable(7),y.clearcoat&&u.enable(8),y.iridescence&&u.enable(9),y.alphaTest&&u.enable(10),y.vertexColors&&u.enable(11),y.vertexAlphas&&u.enable(12),y.vertexUv1s&&u.enable(13),y.vertexUv2s&&u.enable(14),y.vertexUv3s&&u.enable(15),y.vertexTangents&&u.enable(16),y.anisotropy&&u.enable(17),y.alphaHash&&u.enable(18),y.batching&&u.enable(19),y.dispersion&&u.enable(20),y.batchingColor&&u.enable(21),E.push(u.mask),u.disableAll(),y.fog&&u.enable(0),y.useFog&&u.enable(1),y.flatShading&&u.enable(2),y.logarithmicDepthBuffer&&u.enable(3),y.reverseDepthBuffer&&u.enable(4),y.skinning&&u.enable(5),y.morphTargets&&u.enable(6),y.morphNormals&&u.enable(7),y.morphColors&&u.enable(8),y.premultipliedAlpha&&u.enable(9),y.shadowMapEnabled&&u.enable(10),y.doubleSided&&u.enable(11),y.flipSided&&u.enable(12),y.useDepthPacking&&u.enable(13),y.dithering&&u.enable(14),y.transmission&&u.enable(15),y.sheen&&u.enable(16),y.opaque&&u.enable(17),y.pointsUvs&&u.enable(18),y.decodeVideoTexture&&u.enable(19),y.decodeVideoTextureEmissive&&u.enable(20),y.alphaToCoverage&&u.enable(21),E.push(u.mask)}function M(E){const y=S[E.type];let k;if(y){const q=dn[y];k=fr.clone(q.uniforms)}else k=E.uniforms;return k}function B(E,y){let k;for(let q=0,$=d.length;q<$;q++){const te=d[q];if(te.cacheKey===y){k=te,++k.usedTimes;break}}return k===void 0&&(k=new pA(n,y,E,r),d.push(k)),k}function b(E){if(--E.usedTimes===0){const y=d.indexOf(E);d[y]=d[d.length-1],d.pop(),E.destroy()}}function N(E){c.remove(E)}function V(){c.dispose()}return{getParameters:T,getProgramCacheKey:g,getUniforms:M,acquireProgram:B,releaseProgram:b,releaseShaderCache:N,programs:d,dispose:V}}function TA(){let n=new WeakMap;function e(l){return n.has(l)}function t(l){let u=n.get(l);return u===void 0&&(u={},n.set(l,u)),u}function i(l){n.delete(l)}function o(l,u,c){n.get(l)[u]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:r}}function SA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wu(){const n=[];let e=0;const t=[],i=[],o=[];function r(){e=0,t.length=0,i.length=0,o.length=0}function l(h,p,m,S,x,T){let g=n[e];return g===void 0?(g={id:h.id,object:h,geometry:p,material:m,groupOrder:S,renderOrder:h.renderOrder,z:x,group:T},n[e]=g):(g.id=h.id,g.object=h,g.geometry=p,g.material=m,g.groupOrder=S,g.renderOrder=h.renderOrder,g.z=x,g.group=T),e++,g}function u(h,p,m,S,x,T){const g=l(h,p,m,S,x,T);m.transmission>0?i.push(g):m.transparent===!0?o.push(g):t.push(g)}function c(h,p,m,S,x,T){const g=l(h,p,m,S,x,T);m.transmission>0?i.unshift(g):m.transparent===!0?o.unshift(g):t.unshift(g)}function f(h,p){t.length>1&&t.sort(h||SA),i.length>1&&i.sort(p||zu),o.length>1&&o.sort(p||zu)}function d(){for(let h=e,p=n.length;h<p;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:o,init:r,push:u,unshift:c,finish:d,sort:f}}function xA(){let n=new WeakMap;function e(i,o){const r=n.get(i);let l;return r===void 0?(l=new Wu,n.set(i,[l])):o>=r.length?(l=new Wu,r.push(l)):l=r[o],l}function t(){n=new WeakMap}return{get:e,dispose:t}}function yA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ot};break;case"SpotLight":t={position:new X,direction:new X,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function MA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let EA=0;function CA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AA(n){const e=new yA,t=MA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new X);const o=new X,r=new yt,l=new yt;function u(f){let d=0,h=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,S=0,x=0,T=0,g=0,w=0,A=0,M=0,B=0,b=0,N=0;f.sort(CA);for(let E=0,y=f.length;E<y;E++){const k=f[E],q=k.color,$=k.intensity,te=k.distance,oe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=q.r*$,h+=q.g*$,p+=q.b*$;else if(k.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(k.sh.coefficients[J],$);N++}else if(k.isDirectionalLight){const J=e.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const fe=k.shadow,j=t.get(k);j.shadowIntensity=fe.intensity,j.shadowBias=fe.bias,j.shadowNormalBias=fe.normalBias,j.shadowRadius=fe.radius,j.shadowMapSize=fe.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=oe,i.directionalShadowMatrix[m]=k.shadow.matrix,w++}i.directional[m]=J,m++}else if(k.isSpotLight){const J=e.get(k);J.position.setFromMatrixPosition(k.matrixWorld),J.color.copy(q).multiplyScalar($),J.distance=te,J.coneCos=Math.cos(k.angle),J.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),J.decay=k.decay,i.spot[x]=J;const fe=k.shadow;if(k.map&&(i.spotLightMap[B]=k.map,B++,fe.updateMatrices(k),k.castShadow&&b++),i.spotLightMatrix[x]=fe.matrix,k.castShadow){const j=t.get(k);j.shadowIntensity=fe.intensity,j.shadowBias=fe.bias,j.shadowNormalBias=fe.normalBias,j.shadowRadius=fe.radius,j.shadowMapSize=fe.mapSize,i.spotShadow[x]=j,i.spotShadowMap[x]=oe,M++}x++}else if(k.isRectAreaLight){const J=e.get(k);J.color.copy(q).multiplyScalar($),J.halfWidth.set(k.width*.5,0,0),J.halfHeight.set(0,k.height*.5,0),i.rectArea[T]=J,T++}else if(k.isPointLight){const J=e.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity),J.distance=k.distance,J.decay=k.decay,k.castShadow){const fe=k.shadow,j=t.get(k);j.shadowIntensity=fe.intensity,j.shadowBias=fe.bias,j.shadowNormalBias=fe.normalBias,j.shadowRadius=fe.radius,j.shadowMapSize=fe.mapSize,j.shadowCameraNear=fe.camera.near,j.shadowCameraFar=fe.camera.far,i.pointShadow[S]=j,i.pointShadowMap[S]=oe,i.pointShadowMatrix[S]=k.shadow.matrix,A++}i.point[S]=J,S++}else if(k.isHemisphereLight){const J=e.get(k);J.skyColor.copy(k.color).multiplyScalar($),J.groundColor.copy(k.groundColor).multiplyScalar($),i.hemi[g]=J,g++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=p;const V=i.hash;(V.directionalLength!==m||V.pointLength!==S||V.spotLength!==x||V.rectAreaLength!==T||V.hemiLength!==g||V.numDirectionalShadows!==w||V.numPointShadows!==A||V.numSpotShadows!==M||V.numSpotMaps!==B||V.numLightProbes!==N)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=T,i.point.length=S,i.hemi.length=g,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+B-b,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=N,V.directionalLength=m,V.pointLength=S,V.spotLength=x,V.rectAreaLength=T,V.hemiLength=g,V.numDirectionalShadows=w,V.numPointShadows=A,V.numSpotShadows=M,V.numSpotMaps=B,V.numLightProbes=N,i.version=EA++)}function c(f,d){let h=0,p=0,m=0,S=0,x=0;const T=d.matrixWorldInverse;for(let g=0,w=f.length;g<w;g++){const A=f[g];if(A.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(T),h++}else if(A.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(T),M.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(T),m++}else if(A.isRectAreaLight){const M=i.rectArea[S];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(T),l.identity(),r.copy(A.matrixWorld),r.premultiply(T),l.extractRotation(r),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(l),M.halfHeight.applyMatrix4(l),S++}else if(A.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(T),p++}else if(A.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(T),x++}}}return{setup:u,setupView:c,state:i}}function qu(n){const e=new AA(n),t=[],i=[];function o(d){f.camera=d,t.length=0,i.length=0}function r(d){t.push(d)}function l(d){i.push(d)}function u(){e.setup(t)}function c(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:u,setupLightsView:c,pushLight:r,pushShadow:l}}function RA(n){let e=new WeakMap;function t(o,r=0){const l=e.get(o);let u;return l===void 0?(u=new qu(n),e.set(o,[u])):r>=l.length?(u=new qu(n),l.push(u)):u=l[r],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PA(n,e,t){let i=new ef;const o=new qe,r=new qe,l=new Tt,u=new Zx({depthPacking:ox}),c=new Qx,f={},d=t.maxTextureSize,h={[qn]:Bt,[Bt]:qn,[Mn]:Mn},p=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:wA,fragmentShader:IA}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const S=new bn;S.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qt(S,p),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let g=this.type;this.render=function(b,N,V){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||b.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),q=n.state;q.setBlending(wn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const $=g!==yn&&this.type===yn,te=g===yn&&this.type!==yn;for(let oe=0,J=b.length;oe<J;oe++){const fe=b[oe],j=fe.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const ge=j.getFrameExtents();if(o.multiply(ge),r.copy(j.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(r.x=Math.floor(d/ge.x),o.x=r.x*ge.x,j.mapSize.x=r.x),o.y>d&&(r.y=Math.floor(d/ge.y),o.y=r.y*ge.y,j.mapSize.y=r.y)),j.map===null||$===!0||te===!0){const Ie=this.type!==yn?{minFilter:Wt,magFilter:Wt}:{};j.map!==null&&j.map.dispose(),j.map=new un(o.x,o.y,Ie),j.map.texture.name=fe.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const ve=j.getViewportCount();for(let Ie=0;Ie<ve;Ie++){const Ve=j.getViewport(Ie);l.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),q.viewport(l),j.updateMatrices(fe,Ie),i=j.getFrustum(),M(N,V,j.camera,fe,this.type)}j.isPointLightShadow!==!0&&this.type===yn&&w(j,V),j.needsUpdate=!1}g=this.type,T.needsUpdate=!1,n.setRenderTarget(E,y,k)};function w(b,N){const V=e.update(x);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new un(o.x,o.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(N,null,V,p,x,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(N,null,V,m,x,null)}function A(b,N,V,E){let y=null;const k=V.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(k!==void 0)y=k;else if(y=V.isPointLight===!0?c:u,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const q=y.uuid,$=N.uuid;let te=f[q];te===void 0&&(te={},f[q]=te);let oe=te[$];oe===void 0&&(oe=y.clone(),te[$]=oe,N.addEventListener("dispose",B)),y=oe}if(y.visible=N.visible,y.wireframe=N.wireframe,E===yn?y.side=N.shadowSide!==null?N.shadowSide:N.side:y.side=N.shadowSide!==null?N.shadowSide:h[N.side],y.alphaMap=N.alphaMap,y.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,y.map=N.map,y.clipShadows=N.clipShadows,y.clippingPlanes=N.clippingPlanes,y.clipIntersection=N.clipIntersection,y.displacementMap=N.displacementMap,y.displacementScale=N.displacementScale,y.displacementBias=N.displacementBias,y.wireframeLinewidth=N.wireframeLinewidth,y.linewidth=N.linewidth,V.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const q=n.properties.get(y);q.light=V}return y}function M(b,N,V,E,y){if(b.visible===!1)return;if(b.layers.test(N.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===yn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld);const $=e.update(b),te=b.material;if(Array.isArray(te)){const oe=$.groups;for(let J=0,fe=oe.length;J<fe;J++){const j=oe[J],ge=te[j.materialIndex];if(ge&&ge.visible){const ve=A(b,ge,E,y);b.onBeforeShadow(n,b,N,V,$,ve,j),n.renderBufferDirect(V,null,$,ve,b,j),b.onAfterShadow(n,b,N,V,$,ve,j)}}}else if(te.visible){const oe=A(b,te,E,y);b.onBeforeShadow(n,b,N,V,$,oe,null),n.renderBufferDirect(V,null,$,oe,b,null),b.onAfterShadow(n,b,N,V,$,oe,null)}}const q=b.children;for(let $=0,te=q.length;$<te;$++)M(q[$],N,V,E,y)}function B(b){b.target.removeEventListener("dispose",B);for(const V in f){const E=f[V],y=b.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const DA={[vs]:Ts,[Ss]:Ms,[xs]:Es,[Ni]:ys,[Ts]:vs,[Ms]:Ss,[Es]:xs,[ys]:Ni};function bA(n,e){function t(){let H=!1;const K=new Tt;let Q=null;const ae=new Tt(0,0,0,0);return{setMask:function(ye){Q!==ye&&!H&&(n.colorMask(ye,ye,ye,ye),Q=ye)},setLocked:function(ye){H=ye},setClear:function(ye,xe,$e,vt,Rt){Rt===!0&&(ye*=vt,xe*=vt,$e*=vt),K.set(ye,xe,$e,vt),ae.equals(K)===!1&&(n.clearColor(ye,xe,$e,vt),ae.copy(K))},reset:function(){H=!1,Q=null,ae.set(-1,0,0,0)}}}function i(){let H=!1,K=!1,Q=null,ae=null,ye=null;return{setReversed:function(xe){if(K!==xe){const $e=e.get("EXT_clip_control");xe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),K=xe;const vt=ye;ye=null,this.setClear(vt)}},getReversed:function(){return K},setTest:function(xe){xe?_e(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(xe){Q!==xe&&!H&&(n.depthMask(xe),Q=xe)},setFunc:function(xe){if(K&&(xe=DA[xe]),ae!==xe){switch(xe){case vs:n.depthFunc(n.NEVER);break;case Ts:n.depthFunc(n.ALWAYS);break;case Ss:n.depthFunc(n.LESS);break;case Ni:n.depthFunc(n.LEQUAL);break;case xs:n.depthFunc(n.EQUAL);break;case ys:n.depthFunc(n.GEQUAL);break;case Ms:n.depthFunc(n.GREATER);break;case Es:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=xe}},setLocked:function(xe){H=xe},setClear:function(xe){ye!==xe&&(K&&(xe=1-xe),n.clearDepth(xe),ye=xe)},reset:function(){H=!1,Q=null,ae=null,ye=null,K=!1}}}function o(){let H=!1,K=null,Q=null,ae=null,ye=null,xe=null,$e=null,vt=null,Rt=null;return{setTest:function(lt){H||(lt?_e(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(lt){K!==lt&&!H&&(n.stencilMask(lt),K=lt)},setFunc:function(lt,Ot,tn){(Q!==lt||ae!==Ot||ye!==tn)&&(n.stencilFunc(lt,Ot,tn),Q=lt,ae=Ot,ye=tn)},setOp:function(lt,Ot,tn){(xe!==lt||$e!==Ot||vt!==tn)&&(n.stencilOp(lt,Ot,tn),xe=lt,$e=Ot,vt=tn)},setLocked:function(lt){H=lt},setClear:function(lt){Rt!==lt&&(n.clearStencil(lt),Rt=lt)},reset:function(){H=!1,K=null,Q=null,ae=null,ye=null,xe=null,$e=null,vt=null,Rt=null}}}const r=new t,l=new i,u=new o,c=new WeakMap,f=new WeakMap;let d={},h={},p=new WeakMap,m=[],S=null,x=!1,T=null,g=null,w=null,A=null,M=null,B=null,b=null,N=new ot(0,0,0),V=0,E=!1,y=null,k=null,q=null,$=null,te=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,fe=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=fe>=1):j.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=fe>=2);let ge=null,ve={};const Ie=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),We=new Tt().fromArray(Ie),ee=new Tt().fromArray(Ve);function pe(H,K,Q,ae){const ye=new Uint8Array(4),xe=n.createTexture();n.bindTexture(H,xe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<Q;$e++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(K+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return xe}const me={};me[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),u.setClear(0),_e(n.DEPTH_TEST),l.setFunc(Ni),nt(!1),et(Zl),_e(n.CULL_FACE),O(wn);function _e(H){d[H]!==!0&&(n.enable(H),d[H]=!0)}function De(H){d[H]!==!1&&(n.disable(H),d[H]=!1)}function je(H,K){return h[H]!==K?(n.bindFramebuffer(H,K),h[H]=K,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=K),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=K),!0):!1}function He(H,K){let Q=m,ae=!1;if(H){Q=p.get(K),Q===void 0&&(Q=[],p.set(K,Q));const ye=H.textures;if(Q.length!==ye.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,$e=ye.length;xe<$e;xe++)Q[xe]=n.COLOR_ATTACHMENT0+xe;Q.length=ye.length,ae=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ae=!0);ae&&n.drawBuffers(Q)}function ht(H){return S!==H?(n.useProgram(H),S=H,!0):!1}const ft={[ni]:n.FUNC_ADD,[PS]:n.FUNC_SUBTRACT,[DS]:n.FUNC_REVERSE_SUBTRACT};ft[bS]=n.MIN,ft[US]=n.MAX;const Ze={[NS]:n.ZERO,[LS]:n.ONE,[FS]:n.SRC_COLOR,[gs]:n.SRC_ALPHA,[HS]:n.SRC_ALPHA_SATURATE,[OS]:n.DST_COLOR,[kS]:n.DST_ALPHA,[BS]:n.ONE_MINUS_SRC_COLOR,[_s]:n.ONE_MINUS_SRC_ALPHA,[GS]:n.ONE_MINUS_DST_COLOR,[VS]:n.ONE_MINUS_DST_ALPHA,[zS]:n.CONSTANT_COLOR,[WS]:n.ONE_MINUS_CONSTANT_COLOR,[qS]:n.CONSTANT_ALPHA,[XS]:n.ONE_MINUS_CONSTANT_ALPHA};function O(H,K,Q,ae,ye,xe,$e,vt,Rt,lt){if(H===wn){x===!0&&(De(n.BLEND),x=!1);return}if(x===!1&&(_e(n.BLEND),x=!0),H!==IS){if(H!==T||lt!==E){if((g!==ni||M!==ni)&&(n.blendEquation(n.FUNC_ADD),g=ni,M=ni),lt)switch(H){case bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ms:n.blendFunc(n.ONE,n.ONE);break;case Ql:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ms:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ql:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}w=null,A=null,B=null,b=null,N.set(0,0,0),V=0,T=H,E=lt}return}ye=ye||K,xe=xe||Q,$e=$e||ae,(K!==g||ye!==M)&&(n.blendEquationSeparate(ft[K],ft[ye]),g=K,M=ye),(Q!==w||ae!==A||xe!==B||$e!==b)&&(n.blendFuncSeparate(Ze[Q],Ze[ae],Ze[xe],Ze[$e]),w=Q,A=ae,B=xe,b=$e),(vt.equals(N)===!1||Rt!==V)&&(n.blendColor(vt.r,vt.g,vt.b,Rt),N.copy(vt),V=Rt),T=H,E=!1}function Ut(H,K){H.side===Mn?De(n.CULL_FACE):_e(n.CULL_FACE);let Q=H.side===Bt;K&&(Q=!Q),nt(Q),H.blending===bi&&H.transparent===!1?O(wn):O(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),r.setMask(H.colorWrite);const ae=H.stencilWrite;u.setTest(ae),ae&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),pt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(H){y!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),y=H)}function et(H){H!==AS?(_e(n.CULL_FACE),H!==k&&(H===Zl?n.cullFace(n.BACK):H===RS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),k=H}function Fe(H){H!==q&&(J&&n.lineWidth(H),q=H)}function pt(H,K,Q){H?(_e(n.POLYGON_OFFSET_FILL),($!==K||te!==Q)&&(n.polygonOffset(K,Q),$=K,te=Q)):De(n.POLYGON_OFFSET_FILL)}function Ne(H){H?_e(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function D(H){H===void 0&&(H=n.TEXTURE0+oe-1),ge!==H&&(n.activeTexture(H),ge=H)}function C(H,K,Q){Q===void 0&&(ge===null?Q=n.TEXTURE0+oe-1:Q=ge);let ae=ve[Q];ae===void 0&&(ae={type:void 0,texture:void 0},ve[Q]=ae),(ae.type!==H||ae.texture!==K)&&(ge!==Q&&(n.activeTexture(Q),ge=Q),n.bindTexture(H,K||me[H]),ae.type=H,ae.texture=K)}function Y(){const H=ve[ge];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function re(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(H){We.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),We.copy(H))}function Me(H){ee.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),ee.copy(H))}function Xe(H,K){let Q=f.get(K);Q===void 0&&(Q=new WeakMap,f.set(K,Q));let ae=Q.get(H);ae===void 0&&(ae=n.getUniformBlockIndex(K,H.name),Q.set(H,ae))}function ke(H,K){const ae=f.get(K).get(H);c.get(K)!==ae&&(n.uniformBlockBinding(K,ae,H.__bindingPointIndex),c.set(K,ae))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ge=null,ve={},h={},p=new WeakMap,m=[],S=null,x=!1,T=null,g=null,w=null,A=null,M=null,B=null,b=null,N=new ot(0,0,0),V=0,E=!1,y=null,k=null,q=null,$=null,te=null,We.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),l.reset(),u.reset()}return{buffers:{color:r,depth:l,stencil:u},enable:_e,disable:De,bindFramebuffer:je,drawBuffers:He,useProgram:ht,setBlending:O,setMaterial:Ut,setFlipSided:nt,setCullFace:et,setLineWidth:Fe,setPolygonOffset:pt,setScissorTest:Ne,activeTexture:D,bindTexture:C,unbindTexture:Y,compressedTexImage2D:re,compressedTexImage3D:ue,texImage2D:Ee,texImage3D:Pe,updateUBOMapping:Xe,uniformBlockBinding:ke,texStorage2D:ze,texStorage3D:de,texSubImage2D:ne,texSubImage3D:be,compressedTexSubImage2D:Se,compressedTexSubImage3D:Be,scissor:Ue,viewport:Me,reset:Ye}}function UA(n,e,t,i,o,r,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new qe,d=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(D,C){return m?new OffscreenCanvas(D,C):cr("canvas")}function x(D,C,Y){let re=1;const ue=Ne(D);if((ue.width>Y||ue.height>Y)&&(re=Y/Math.max(ue.width,ue.height)),re<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ne=Math.floor(re*ue.width),be=Math.floor(re*ue.height);h===void 0&&(h=S(ne,be));const Se=C?S(ne,be):h;return Se.width=ne,Se.height=be,Se.getContext("2d").drawImage(D,0,0,ne,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ne+"x"+be+")."),Se}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),D;return D}function T(D){return D.generateMipmaps}function g(D){n.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(D,C,Y,re,ue=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ne=C;if(C===n.RED&&(Y===n.FLOAT&&(ne=n.R32F),Y===n.HALF_FLOAT&&(ne=n.R16F),Y===n.UNSIGNED_BYTE&&(ne=n.R8)),C===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.R8UI),Y===n.UNSIGNED_SHORT&&(ne=n.R16UI),Y===n.UNSIGNED_INT&&(ne=n.R32UI),Y===n.BYTE&&(ne=n.R8I),Y===n.SHORT&&(ne=n.R16I),Y===n.INT&&(ne=n.R32I)),C===n.RG&&(Y===n.FLOAT&&(ne=n.RG32F),Y===n.HALF_FLOAT&&(ne=n.RG16F),Y===n.UNSIGNED_BYTE&&(ne=n.RG8)),C===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ne=n.RG16UI),Y===n.UNSIGNED_INT&&(ne=n.RG32UI),Y===n.BYTE&&(ne=n.RG8I),Y===n.SHORT&&(ne=n.RG16I),Y===n.INT&&(ne=n.RG32I)),C===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),Y===n.UNSIGNED_INT&&(ne=n.RGB32UI),Y===n.BYTE&&(ne=n.RGB8I),Y===n.SHORT&&(ne=n.RGB16I),Y===n.INT&&(ne=n.RGB32I)),C===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ne=n.RGBA32UI),Y===n.BYTE&&(ne=n.RGBA8I),Y===n.SHORT&&(ne=n.RGBA16I),Y===n.INT&&(ne=n.RGBA32I)),C===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),C===n.RGBA){const be=ue?lr:st.getTransfer(re);Y===n.FLOAT&&(ne=n.RGBA32F),Y===n.HALF_FLOAT&&(ne=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ne=be===dt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(D,C){let Y;return D?C===null||C===si||C===ao?Y=n.DEPTH24_STENCIL8:C===Kt?Y=n.DEPTH32F_STENCIL8:C===so&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===si||C===ao?Y=n.DEPTH_COMPONENT24:C===Kt?Y=n.DEPTH_COMPONENT32F:C===so&&(Y=n.DEPTH_COMPONENT16),Y}function B(D,C){return T(D)===!0||D.isFramebufferTexture&&D.minFilter!==Wt&&D.minFilter!==Lt?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function b(D){const C=D.target;C.removeEventListener("dispose",b),V(C),C.isVideoTexture&&d.delete(C)}function N(D){const C=D.target;C.removeEventListener("dispose",N),y(C)}function V(D){const C=i.get(D);if(C.__webglInit===void 0)return;const Y=D.source,re=p.get(Y);if(re){const ue=re[C.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&E(D),Object.keys(re).length===0&&p.delete(Y)}i.remove(D)}function E(D){const C=i.get(D);n.deleteTexture(C.__webglTexture);const Y=D.source,re=p.get(Y);delete re[C.__cacheKey],l.memory.textures--}function y(D){const C=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(C.__webglFramebuffer[re]))for(let ue=0;ue<C.__webglFramebuffer[re].length;ue++)n.deleteFramebuffer(C.__webglFramebuffer[re][ue]);else n.deleteFramebuffer(C.__webglFramebuffer[re]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[re])}else{if(Array.isArray(C.__webglFramebuffer))for(let re=0;re<C.__webglFramebuffer.length;re++)n.deleteFramebuffer(C.__webglFramebuffer[re]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let re=0;re<C.__webglColorRenderbuffer.length;re++)C.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[re]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Y=D.textures;for(let re=0,ue=Y.length;re<ue;re++){const ne=i.get(Y[re]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),l.memory.textures--),i.remove(Y[re])}i.remove(D)}let k=0;function q(){k=0}function $(){const D=k;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),k+=1,D}function te(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function oe(D,C){const Y=i.get(D);if(D.isVideoTexture&&Fe(D),D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){const re=D.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Y,D,C);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+C)}function J(D,C){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){ee(Y,D,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+C)}function fe(D,C){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){ee(Y,D,C);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+C)}function j(D,C){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){pe(Y,D,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+C)}const ge={[As]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[Rs]:n.MIRRORED_REPEAT},ve={[Wt]:n.NEAREST,[nx]:n.NEAREST_MIPMAP_NEAREST,[Ao]:n.NEAREST_MIPMAP_LINEAR,[Lt]:n.LINEAR,[Rr]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},Ie={[sx]:n.NEVER,[dx]:n.ALWAYS,[ax]:n.LESS,[Wc]:n.LEQUAL,[lx]:n.EQUAL,[fx]:n.GEQUAL,[ux]:n.GREATER,[cx]:n.NOTEQUAL};function Ve(D,C){if(C.type===Kt&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Lt||C.magFilter===Rr||C.magFilter===Ao||C.magFilter===zn||C.minFilter===Lt||C.minFilter===Rr||C.minFilter===Ao||C.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ge[C.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ge[C.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ge[C.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ve[C.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ve[C.minFilter]),C.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Ie[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Wt||C.minFilter!==Ao&&C.minFilter!==zn||C.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function We(D,C){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",b));const re=C.source;let ue=p.get(re);ue===void 0&&(ue={},p.set(re,ue));const ne=te(C);if(ne!==D.__cacheKey){ue[ne]===void 0&&(ue[ne]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,Y=!0),ue[ne].usedTimes++;const be=ue[D.__cacheKey];be!==void 0&&(ue[D.__cacheKey].usedTimes--,be.usedTimes===0&&E(C)),D.__cacheKey=ne,D.__webglTexture=ue[ne].texture}return Y}function ee(D,C,Y){let re=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(re=n.TEXTURE_3D);const ue=We(D,C),ne=C.source;t.bindTexture(re,D.__webglTexture,n.TEXTURE0+Y);const be=i.get(ne);if(ne.version!==be.__version||ue===!0){t.activeTexture(n.TEXTURE0+Y);const Se=st.getPrimaries(st.workingColorSpace),Be=C.colorSpace===En?null:st.getPrimaries(C.colorSpace),ze=C.colorSpace===En||Se===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let de=x(C.image,!1,o.maxTextureSize);de=pt(C,de);const Ee=r.convert(C.format,C.colorSpace),Pe=r.convert(C.type);let Ue=A(C.internalFormat,Ee,Pe,C.colorSpace,C.isVideoTexture);Ve(re,C);let Me;const Xe=C.mipmaps,ke=C.isVideoTexture!==!0,Ye=be.__version===void 0||ue===!0,H=ne.dataReady,K=B(C,de);if(C.isDepthTexture)Ue=M(C.format===uo,C.type),Ye&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Ue,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ue,de.width,de.height,0,Ee,Pe,null));else if(C.isDataTexture)if(Xe.length>0){ke&&Ye&&t.texStorage2D(n.TEXTURE_2D,K,Ue,Xe[0].width,Xe[0].height);for(let Q=0,ae=Xe.length;Q<ae;Q++)Me=Xe[Q],ke?H&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Me.width,Me.height,Ee,Pe,Me.data):t.texImage2D(n.TEXTURE_2D,Q,Ue,Me.width,Me.height,0,Ee,Pe,Me.data);C.generateMipmaps=!1}else ke?(Ye&&t.texStorage2D(n.TEXTURE_2D,K,Ue,de.width,de.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Ee,Pe,de.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,de.width,de.height,0,Ee,Pe,de.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ke&&Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,K,Ue,Xe[0].width,Xe[0].height,de.depth);for(let Q=0,ae=Xe.length;Q<ae;Q++)if(Me=Xe[Q],C.format!==Zt)if(Ee!==null)if(ke){if(H)if(C.layerUpdates.size>0){const ye=yu(Me.width,Me.height,C.format,C.type);for(const xe of C.layerUpdates){const $e=Me.data.subarray(xe*ye/Me.data.BYTES_PER_ELEMENT,(xe+1)*ye/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,xe,Me.width,Me.height,1,Ee,$e)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Me.width,Me.height,de.depth,Ee,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ue,Me.width,Me.height,de.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Me.width,Me.height,de.depth,Ee,Pe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ue,Me.width,Me.height,de.depth,0,Ee,Pe,Me.data)}else{ke&&Ye&&t.texStorage2D(n.TEXTURE_2D,K,Ue,Xe[0].width,Xe[0].height);for(let Q=0,ae=Xe.length;Q<ae;Q++)Me=Xe[Q],C.format!==Zt?Ee!==null?ke?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?H&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Me.width,Me.height,Ee,Pe,Me.data):t.texImage2D(n.TEXTURE_2D,Q,Ue,Me.width,Me.height,0,Ee,Pe,Me.data)}else if(C.isDataArrayTexture)if(ke){if(Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,K,Ue,de.width,de.height,de.depth),H)if(C.layerUpdates.size>0){const Q=yu(de.width,de.height,C.format,C.type);for(const ae of C.layerUpdates){const ye=de.data.subarray(ae*Q/de.data.BYTES_PER_ELEMENT,(ae+1)*Q/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,de.width,de.height,1,Ee,Pe,ye)}C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ee,Pe,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,de.width,de.height,de.depth,0,Ee,Pe,de.data);else if(C.isData3DTexture)ke?(Ye&&t.texStorage3D(n.TEXTURE_3D,K,Ue,de.width,de.height,de.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ee,Pe,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,de.width,de.height,de.depth,0,Ee,Pe,de.data);else if(C.isFramebufferTexture){if(Ye)if(ke)t.texStorage2D(n.TEXTURE_2D,K,Ue,de.width,de.height);else{let Q=de.width,ae=de.height;for(let ye=0;ye<K;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ue,Q,ae,0,Ee,Pe,null),Q>>=1,ae>>=1}}else if(Xe.length>0){if(ke&&Ye){const Q=Ne(Xe[0]);t.texStorage2D(n.TEXTURE_2D,K,Ue,Q.width,Q.height)}for(let Q=0,ae=Xe.length;Q<ae;Q++)Me=Xe[Q],ke?H&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ee,Pe,Me):t.texImage2D(n.TEXTURE_2D,Q,Ue,Ee,Pe,Me);C.generateMipmaps=!1}else if(ke){if(Ye){const Q=Ne(de);t.texStorage2D(n.TEXTURE_2D,K,Ue,Q.width,Q.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Pe,de)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Ee,Pe,de);T(C)&&g(re),be.__version=ne.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function pe(D,C,Y){if(C.image.length!==6)return;const re=We(D,C),ue=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);const ne=i.get(ue);if(ue.version!==ne.__version||re===!0){t.activeTexture(n.TEXTURE0+Y);const be=st.getPrimaries(st.workingColorSpace),Se=C.colorSpace===En?null:st.getPrimaries(C.colorSpace),Be=C.colorSpace===En||be===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const ze=C.isCompressedTexture||C.image[0].isCompressedTexture,de=C.image[0]&&C.image[0].isDataTexture,Ee=[];for(let ae=0;ae<6;ae++)!ze&&!de?Ee[ae]=x(C.image[ae],!0,o.maxCubemapSize):Ee[ae]=de?C.image[ae].image:C.image[ae],Ee[ae]=pt(C,Ee[ae]);const Pe=Ee[0],Ue=r.convert(C.format,C.colorSpace),Me=r.convert(C.type),Xe=A(C.internalFormat,Ue,Me,C.colorSpace),ke=C.isVideoTexture!==!0,Ye=ne.__version===void 0||re===!0,H=ue.dataReady;let K=B(C,Pe);Ve(n.TEXTURE_CUBE_MAP,C);let Q;if(ze){ke&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,K,Xe,Pe.width,Pe.height);for(let ae=0;ae<6;ae++){Q=Ee[ae].mipmaps;for(let ye=0;ye<Q.length;ye++){const xe=Q[ye];C.format!==Zt?Ue!==null?ke?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,xe.width,xe.height,Ue,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,Xe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,xe.width,xe.height,Ue,Me,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,Xe,xe.width,xe.height,0,Ue,Me,xe.data)}}}else{if(Q=C.mipmaps,ke&&Ye){Q.length>0&&K++;const ae=Ne(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,K,Xe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(de){ke?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ee[ae].width,Ee[ae].height,Ue,Me,Ee[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,Ee[ae].width,Ee[ae].height,0,Ue,Me,Ee[ae].data);for(let ye=0;ye<Q.length;ye++){const $e=Q[ye].image[ae].image;ke?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,$e.width,$e.height,Ue,Me,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,Xe,$e.width,$e.height,0,Ue,Me,$e.data)}}else{ke?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,Me,Ee[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,Ue,Me,Ee[ae]);for(let ye=0;ye<Q.length;ye++){const xe=Q[ye];ke?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,Ue,Me,xe.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,Xe,Ue,Me,xe.image[ae])}}}T(C)&&g(n.TEXTURE_CUBE_MAP),ne.__version=ue.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function me(D,C,Y,re,ue,ne){const be=r.convert(Y.format,Y.colorSpace),Se=r.convert(Y.type),Be=A(Y.internalFormat,be,Se,Y.colorSpace),ze=i.get(C),de=i.get(Y);if(de.__renderTarget=C,!ze.__hasExternalTextures){const Ee=Math.max(1,C.width>>ne),Pe=Math.max(1,C.height>>ne);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,ne,Be,Ee,Pe,C.depth,0,be,Se,null):t.texImage2D(ue,ne,Be,Ee,Pe,0,be,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),et(C)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ue,de.__webglTexture,0,nt(C)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ue,de.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(D,C,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),C.depthBuffer){const re=C.depthTexture,ue=re&&re.isDepthTexture?re.type:null,ne=M(C.stencilBuffer,ue),be=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=nt(C);et(C)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ne,C.width,C.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ne,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,ne,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,D)}else{const re=C.textures;for(let ue=0;ue<re.length;ue++){const ne=re[ue],be=r.convert(ne.format,ne.colorSpace),Se=r.convert(ne.type),Be=A(ne.internalFormat,be,Se,ne.colorSpace),ze=nt(C);Y&&et(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Be,C.width,C.height):et(C)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,Be,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,Be,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(C.depthTexture);re.__renderTarget=C,(!re.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),oe(C.depthTexture,0);const ue=re.__webglTexture,ne=nt(C);if(C.depthTexture.format===lo)et(C)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(C.depthTexture.format===uo)et(C)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function je(D){const C=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const re=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),re){const ue=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,re.removeEventListener("dispose",ue)};re.addEventListener("dispose",ue),C.__depthDisposeCallback=ue}C.__boundDepthTexture=re}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const re=D.texture.mipmaps;re&&re.length>0?De(C.__webglFramebuffer[0],D):De(C.__webglFramebuffer,D)}else if(Y){C.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[re]),C.__webglDepthbuffer[re]===void 0)C.__webglDepthbuffer[re]=n.createRenderbuffer(),_e(C.__webglDepthbuffer[re],D,!1);else{const ue=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=C.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,ne)}}else{const re=D.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),_e(C.__webglDepthbuffer,D,!1);else{const ue=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(D,C,Y){const re=i.get(D);C!==void 0&&me(re.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&je(D)}function ht(D){const C=D.texture,Y=i.get(D),re=i.get(C);D.addEventListener("dispose",N);const ue=D.textures,ne=D.isWebGLCubeRenderTarget===!0,be=ue.length>1;if(be||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=C.version,l.memory.textures++),ne){Y.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer[Se]=[];for(let Be=0;Be<C.mipmaps.length;Be++)Y.__webglFramebuffer[Se][Be]=n.createFramebuffer()}else Y.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Se=0;Se<C.mipmaps.length;Se++)Y.__webglFramebuffer[Se]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(be)for(let Se=0,Be=ue.length;Se<Be;Se++){const ze=i.get(ue[Se]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),l.memory.textures++)}if(D.samples>0&&et(D)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Se=0;Se<ue.length;Se++){const Be=ue[Se];Y.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Se]);const ze=r.convert(Be.format,Be.colorSpace),de=r.convert(Be.type),Ee=A(Be.internalFormat,ze,de,Be.colorSpace,D.isXRRenderTarget===!0),Pe=nt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ee,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,C);for(let Se=0;Se<6;Se++)if(C.mipmaps&&C.mipmaps.length>0)for(let Be=0;Be<C.mipmaps.length;Be++)me(Y.__webglFramebuffer[Se][Be],D,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be);else me(Y.__webglFramebuffer[Se],D,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);T(C)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let Se=0,Be=ue.length;Se<Be;Se++){const ze=ue[Se],de=i.get(ze);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Ve(n.TEXTURE_2D,ze),me(Y.__webglFramebuffer,D,ze,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),T(ze)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Se=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,re.__webglTexture),Ve(Se,C),C.mipmaps&&C.mipmaps.length>0)for(let Be=0;Be<C.mipmaps.length;Be++)me(Y.__webglFramebuffer[Be],D,C,n.COLOR_ATTACHMENT0,Se,Be);else me(Y.__webglFramebuffer,D,C,n.COLOR_ATTACHMENT0,Se,0);T(C)&&g(Se),t.unbindTexture()}D.depthBuffer&&je(D)}function ft(D){const C=D.textures;for(let Y=0,re=C.length;Y<re;Y++){const ue=C[Y];if(T(ue)){const ne=w(D),be=i.get(ue).__webglTexture;t.bindTexture(ne,be),g(ne),t.unbindTexture()}}}const Ze=[],O=[];function Ut(D){if(D.samples>0){if(et(D)===!1){const C=D.textures,Y=D.width,re=D.height;let ue=n.COLOR_BUFFER_BIT;const ne=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(D),Se=C.length>1;if(Se)for(let ze=0;ze<C.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Be=D.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ze=0;ze<C.length;ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),Se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[ze]);const de=i.get(C[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,Y,re,0,0,Y,re,ue,n.NEAREST),c===!0&&(Ze.length=0,O.length=0,Ze.push(n.COLOR_ATTACHMENT0+ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ze.push(ne),O.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let ze=0;ze<C.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,be.__webglColorRenderbuffer[ze]);const de=i.get(C[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const C=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function nt(D){return Math.min(o.maxSamples,D.samples)}function et(D){const C=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Fe(D){const C=l.render.frame;d.get(D)!==C&&(d.set(D,C),D.update())}function pt(D,C){const Y=D.colorSpace,re=D.format,ue=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Xn&&Y!==En&&(st.getTransfer(Y)===dt?(re!==Zt||ue!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),C}function Ne(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(f.width=D.naturalWidth||D.width,f.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(f.width=D.displayWidth,f.height=D.displayHeight):(f.width=D.width,f.height=D.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=q,this.setTexture2D=oe,this.setTexture2DArray=J,this.setTexture3D=fe,this.setTextureCube=j,this.rebindTextures=He,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=me,this.useMultisampledRTT=et}function NA(n,e){function t(i,o=En){let r;const l=st.getTransfer(o);if(i===Pn)return n.UNSIGNED_BYTE;if(i===pa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ma)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fc)return n.BYTE;if(i===Bc)return n.SHORT;if(i===so)return n.UNSIGNED_SHORT;if(i===ha)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===Kt)return n.FLOAT;if(i===zt)return n.HALF_FLOAT;if(i===Vc)return n.ALPHA;if(i===Oc)return n.RGB;if(i===Zt)return n.RGBA;if(i===lo)return n.DEPTH_COMPONENT;if(i===uo)return n.DEPTH_STENCIL;if(i===ga)return n.RED;if(i===_a)return n.RED_INTEGER;if(i===Gc)return n.RG;if(i===va)return n.RG_INTEGER;if(i===Ta)return n.RGBA_INTEGER;if(i===Zo||i===Qo||i===jo||i===er)if(l===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ws||i===Is||i===Ps||i===Ds)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ws)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Is)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ps)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ds)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bs||i===Us||i===Ns)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bs||i===Us)return l===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ns)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ls||i===Fs||i===Bs||i===ks||i===Vs||i===Os||i===Gs||i===Hs||i===zs||i===Ws||i===qs||i===Xs||i===Ys||i===$s)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ls)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fs)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bs)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ks)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vs)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Os)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gs)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hs)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zs)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ws)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qs)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xs)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ys)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$s)return l===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tr||i===Js||i===Ks)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===tr)return l===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Js)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ks)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hc||i===Zs||i===Qs||i===js)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===tr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zs)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===js)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ao?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const LA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new kt,r=e.properties.get(o);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ft({vertexShader:LA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new _r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends zi{constructor(e,t){super();const i=this;let o=null,r=1,l=null,u="local-floor",c=1,f=null,d=null,h=null,p=null,m=null,S=null;const x=new BA,T=t.getContextAttributes();let g=null,w=null;const A=[],M=[],B=new qe;let b=null;const N=new $t;N.viewport=new Tt;const V=new $t;V.viewport=new Tt;const E=[N,V],y=new oy;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let pe=A[ee];return pe===void 0&&(pe=new Jr,A[ee]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ee){let pe=A[ee];return pe===void 0&&(pe=new Jr,A[ee]=pe),pe.getGripSpace()},this.getHand=function(ee){let pe=A[ee];return pe===void 0&&(pe=new Jr,A[ee]=pe),pe.getHandSpace()};function $(ee){const pe=M.indexOf(ee.inputSource);if(pe===-1)return;const me=A[pe];me!==void 0&&(me.update(ee.inputSource,ee.frame,f||l),me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",oe);for(let ee=0;ee<A.length;ee++){const pe=M[ee];pe!==null&&(M[ee]=null,A[ee].disconnect(pe))}k=null,q=null,x.reset(),e.setRenderTarget(g),m=null,p=null,h=null,o=null,w=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){u=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(ee){f=ee},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",te),o.addEventListener("inputsourceschange",oe),T.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,_e=null,De=null;T.depth&&(De=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=T.stencil?uo:lo,_e=T.stencil?ao:si);const je={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};h=new XRWebGLBinding(o,t),p=h.createProjectionLayer(je),o.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new un(p.textureWidth,p.textureHeight,{format:Zt,type:Pn,depthTexture:new tf(p.textureWidth,p.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const me={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new un(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),f=null,l=await o.requestReferenceSpace(u),We.setContext(o),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function oe(ee){for(let pe=0;pe<ee.removed.length;pe++){const me=ee.removed[pe],_e=M.indexOf(me);_e>=0&&(M[_e]=null,A[_e].disconnect(me))}for(let pe=0;pe<ee.added.length;pe++){const me=ee.added[pe];let _e=M.indexOf(me);if(_e===-1){for(let je=0;je<A.length;je++)if(je>=M.length){M.push(me),_e=je;break}else if(M[je]===null){M[je]=me,_e=je;break}if(_e===-1)break}const De=A[_e];De&&De.connect(me)}}const J=new X,fe=new X;function j(ee,pe,me){J.setFromMatrixPosition(pe.matrixWorld),fe.setFromMatrixPosition(me.matrixWorld);const _e=J.distanceTo(fe),De=pe.projectionMatrix.elements,je=me.projectionMatrix.elements,He=De[14]/(De[10]-1),ht=De[14]/(De[10]+1),ft=(De[9]+1)/De[5],Ze=(De[9]-1)/De[5],O=(De[8]-1)/De[0],Ut=(je[8]+1)/je[0],nt=He*O,et=He*Ut,Fe=_e/(-O+Ut),pt=Fe*-O;if(pe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(pt),ee.translateZ(Fe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),De[10]===-1)ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ne=He+Fe,D=ht+Fe,C=nt-pt,Y=et+(_e-pt),re=ft*ht/D*Ne,ue=Ze*ht/D*Ne;ee.projectionMatrix.makePerspective(C,Y,re,ue,Ne,D),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ge(ee,pe){pe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(pe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let pe=ee.near,me=ee.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(me=x.depthFar)),y.near=V.near=N.near=pe,y.far=V.far=N.far=me,(k!==y.near||q!==y.far)&&(o.updateRenderState({depthNear:y.near,depthFar:y.far}),k=y.near,q=y.far),N.layers.mask=ee.layers.mask|2,V.layers.mask=ee.layers.mask|4,y.layers.mask=N.layers.mask|V.layers.mask;const _e=ee.parent,De=y.cameras;ge(y,_e);for(let je=0;je<De.length;je++)ge(De[je],_e);De.length===2?j(y,N,V):y.projectionMatrix.copy(N.projectionMatrix),ve(ee,y,_e)};function ve(ee,pe,me){me===null?ee.matrix.copy(pe.matrixWorld):(ee.matrix.copy(me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(pe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ta*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(ee){c=ee,p!==null&&(p.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Ie=null;function Ve(ee,pe){if(d=pe.getViewerPose(f||l),S=pe,d!==null){const me=d.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let _e=!1;me.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let He=0;He<me.length;He++){const ht=me[He];let ft=null;if(m!==null)ft=m.getViewport(ht);else{const O=h.getViewSubImage(p,ht);ft=O.viewport,He===0&&(e.setRenderTargetTextures(w,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(w))}let Ze=E[He];Ze===void 0&&(Ze=new $t,Ze.layers.enable(He),Ze.viewport=new Tt,E[He]=Ze),Ze.matrix.fromArray(ht.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(ht.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ft.x,ft.y,ft.width,ft.height),He===0&&(y.matrix.copy(Ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(Ze)}const De=o.enabledFeatures;if(De&&De.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&h){const He=h.getDepthInformation(me[0]);He&&He.isValid&&He.texture&&x.init(e,He,o.renderState)}}for(let me=0;me<A.length;me++){const _e=M[me],De=A[me];_e!==null&&De!==void 0&&De.update(_e,pe,f||l)}Ie&&Ie(ee,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),S=null}const We=new of;We.setAnimationLoop(Ve),this.setAnimationLoop=function(ee){Ie=ee},this.dispose=function(){}}}const jn=new cn,VA=new yt;function OA(n,e){function t(T,g){T.matrixAutoUpdate===!0&&T.updateMatrix(),g.value.copy(T.matrix)}function i(T,g){g.color.getRGB(T.fogColor.value,Zc(n)),g.isFog?(T.fogNear.value=g.near,T.fogFar.value=g.far):g.isFogExp2&&(T.fogDensity.value=g.density)}function o(T,g,w,A,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(T,g):g.isMeshToonMaterial?(r(T,g),h(T,g)):g.isMeshPhongMaterial?(r(T,g),d(T,g)):g.isMeshStandardMaterial?(r(T,g),p(T,g),g.isMeshPhysicalMaterial&&m(T,g,M)):g.isMeshMatcapMaterial?(r(T,g),S(T,g)):g.isMeshDepthMaterial?r(T,g):g.isMeshDistanceMaterial?(r(T,g),x(T,g)):g.isMeshNormalMaterial?r(T,g):g.isLineBasicMaterial?(l(T,g),g.isLineDashedMaterial&&u(T,g)):g.isPointsMaterial?c(T,g,w,A):g.isSpriteMaterial?f(T,g):g.isShadowMaterial?(T.color.value.copy(g.color),T.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(T,g){T.opacity.value=g.opacity,g.color&&T.diffuse.value.copy(g.color),g.emissive&&T.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(T.map.value=g.map,t(g.map,T.mapTransform)),g.alphaMap&&(T.alphaMap.value=g.alphaMap,t(g.alphaMap,T.alphaMapTransform)),g.bumpMap&&(T.bumpMap.value=g.bumpMap,t(g.bumpMap,T.bumpMapTransform),T.bumpScale.value=g.bumpScale,g.side===Bt&&(T.bumpScale.value*=-1)),g.normalMap&&(T.normalMap.value=g.normalMap,t(g.normalMap,T.normalMapTransform),T.normalScale.value.copy(g.normalScale),g.side===Bt&&T.normalScale.value.negate()),g.displacementMap&&(T.displacementMap.value=g.displacementMap,t(g.displacementMap,T.displacementMapTransform),T.displacementScale.value=g.displacementScale,T.displacementBias.value=g.displacementBias),g.emissiveMap&&(T.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,T.emissiveMapTransform)),g.specularMap&&(T.specularMap.value=g.specularMap,t(g.specularMap,T.specularMapTransform)),g.alphaTest>0&&(T.alphaTest.value=g.alphaTest);const w=e.get(g),A=w.envMap,M=w.envMapRotation;A&&(T.envMap.value=A,jn.copy(M),jn.x*=-1,jn.y*=-1,jn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),T.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(jn)),T.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=g.reflectivity,T.ior.value=g.ior,T.refractionRatio.value=g.refractionRatio),g.lightMap&&(T.lightMap.value=g.lightMap,T.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,T.lightMapTransform)),g.aoMap&&(T.aoMap.value=g.aoMap,T.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,T.aoMapTransform))}function l(T,g){T.diffuse.value.copy(g.color),T.opacity.value=g.opacity,g.map&&(T.map.value=g.map,t(g.map,T.mapTransform))}function u(T,g){T.dashSize.value=g.dashSize,T.totalSize.value=g.dashSize+g.gapSize,T.scale.value=g.scale}function c(T,g,w,A){T.diffuse.value.copy(g.color),T.opacity.value=g.opacity,T.size.value=g.size*w,T.scale.value=A*.5,g.map&&(T.map.value=g.map,t(g.map,T.uvTransform)),g.alphaMap&&(T.alphaMap.value=g.alphaMap,t(g.alphaMap,T.alphaMapTransform)),g.alphaTest>0&&(T.alphaTest.value=g.alphaTest)}function f(T,g){T.diffuse.value.copy(g.color),T.opacity.value=g.opacity,T.rotation.value=g.rotation,g.map&&(T.map.value=g.map,t(g.map,T.mapTransform)),g.alphaMap&&(T.alphaMap.value=g.alphaMap,t(g.alphaMap,T.alphaMapTransform)),g.alphaTest>0&&(T.alphaTest.value=g.alphaTest)}function d(T,g){T.specular.value.copy(g.specular),T.shininess.value=Math.max(g.shininess,1e-4)}function h(T,g){g.gradientMap&&(T.gradientMap.value=g.gradientMap)}function p(T,g){T.metalness.value=g.metalness,g.metalnessMap&&(T.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,T.metalnessMapTransform)),T.roughness.value=g.roughness,g.roughnessMap&&(T.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,T.roughnessMapTransform)),g.envMap&&(T.envMapIntensity.value=g.envMapIntensity)}function m(T,g,w){T.ior.value=g.ior,g.sheen>0&&(T.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),T.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(T.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,T.sheenColorMapTransform)),g.sheenRoughnessMap&&(T.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,T.sheenRoughnessMapTransform))),g.clearcoat>0&&(T.clearcoat.value=g.clearcoat,T.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(T.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,T.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(T.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bt&&T.clearcoatNormalScale.value.negate())),g.dispersion>0&&(T.dispersion.value=g.dispersion),g.iridescence>0&&(T.iridescence.value=g.iridescence,T.iridescenceIOR.value=g.iridescenceIOR,T.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(T.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,T.iridescenceMapTransform)),g.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),g.transmission>0&&(T.transmission.value=g.transmission,T.transmissionSamplerMap.value=w.texture,T.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(T.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,T.transmissionMapTransform)),T.thickness.value=g.thickness,g.thicknessMap&&(T.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=g.attenuationDistance,T.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(T.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(T.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=g.specularIntensity,T.specularColor.value.copy(g.specularColor),g.specularColorMap&&(T.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,T.specularColorMapTransform)),g.specularIntensityMap&&(T.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,T.specularIntensityMapTransform))}function S(T,g){g.matcap&&(T.matcap.value=g.matcap)}function x(T,g){const w=e.get(g).light;T.referencePosition.value.setFromMatrixPosition(w.matrixWorld),T.nearDistance.value=w.shadow.camera.near,T.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function GA(n,e,t,i){let o={},r={},l=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,A){const M=A.program;i.uniformBlockBinding(w,M)}function f(w,A){let M=o[w.id];M===void 0&&(S(w),M=d(w),o[w.id]=M,w.addEventListener("dispose",T));const B=A.program;i.updateUBOMapping(w,B);const b=e.render.frame;r[w.id]!==b&&(p(w),r[w.id]=b)}function d(w){const A=h();w.__bindingPointIndex=A;const M=n.createBuffer(),B=w.__size,b=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,B,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,M),M}function h(){for(let w=0;w<u;w++)if(l.indexOf(w)===-1)return l.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const A=o[w.id],M=w.uniforms,B=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let b=0,N=M.length;b<N;b++){const V=Array.isArray(M[b])?M[b]:[M[b]];for(let E=0,y=V.length;E<y;E++){const k=V[E];if(m(k,b,E,B)===!0){const q=k.__offset,$=Array.isArray(k.value)?k.value:[k.value];let te=0;for(let oe=0;oe<$.length;oe++){const J=$[oe],fe=x(J);typeof J=="number"||typeof J=="boolean"?(k.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,q+te,k.__data)):J.isMatrix3?(k.__data[0]=J.elements[0],k.__data[1]=J.elements[1],k.__data[2]=J.elements[2],k.__data[3]=0,k.__data[4]=J.elements[3],k.__data[5]=J.elements[4],k.__data[6]=J.elements[5],k.__data[7]=0,k.__data[8]=J.elements[6],k.__data[9]=J.elements[7],k.__data[10]=J.elements[8],k.__data[11]=0):(J.toArray(k.__data,te),te+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,A,M,B){const b=w.value,N=A+"_"+M;if(B[N]===void 0)return typeof b=="number"||typeof b=="boolean"?B[N]=b:B[N]=b.clone(),!0;{const V=B[N];if(typeof b=="number"||typeof b=="boolean"){if(V!==b)return B[N]=b,!0}else if(V.equals(b)===!1)return V.copy(b),!0}return!1}function S(w){const A=w.uniforms;let M=0;const B=16;for(let N=0,V=A.length;N<V;N++){const E=Array.isArray(A[N])?A[N]:[A[N]];for(let y=0,k=E.length;y<k;y++){const q=E[y],$=Array.isArray(q.value)?q.value:[q.value];for(let te=0,oe=$.length;te<oe;te++){const J=$[te],fe=x(J),j=M%B,ge=j%fe.boundary,ve=j+ge;M+=ge,ve!==0&&B-ve<fe.storage&&(M+=B-ve),q.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=fe.storage}}}const b=M%B;return b>0&&(M+=B-b),w.__size=M,w.__cache={},this}function x(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function T(w){const A=w.target;A.removeEventListener("dispose",T);const M=l.indexOf(A.__bindingPointIndex);l.splice(M,1),n.deleteBuffer(o[A.id]),delete o[A.id],delete r[A.id]}function g(){for(const w in o)n.deleteBuffer(o[w]);l=[],o={},r={}}return{bind:c,update:f,dispose:g}}class HA{constructor(e={}){const{canvas:t=px(),context:i=null,depth:o=!0,stencil:r=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=l;const S=new Uint32Array(4),x=new Int32Array(4);let T=null,g=null;const w=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let B=!1;this._outputColorSpace=Yt;let b=0,N=0,V=null,E=-1,y=null;const k=new Tt,q=new Tt;let $=null;const te=new ot(0);let oe=0,J=t.width,fe=t.height,j=1,ge=null,ve=null;const Ie=new Tt(0,0,J,fe),Ve=new Tt(0,0,J,fe);let We=!1;const ee=new ef;let pe=!1,me=!1;const _e=new yt,De=new yt,je=new X,He=new Tt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Ze(){return V===null?j:1}let O=i;function Ut(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:o,stencil:r,antialias:u,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",xe,!1),O===null){const I="webgl2";if(O=Ut(I,v),O===null)throw Ut(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let nt,et,Fe,pt,Ne,D,C,Y,re,ue,ne,be,Se,Be,ze,de,Ee,Pe,Ue,Me,Xe,ke,Ye,H;function K(){nt=new QE(O),nt.init(),ke=new NA(O,nt),et=new qE(O,nt,e,ke),Fe=new bA(O,nt),et.reverseDepthBuffer&&p&&Fe.buffers.depth.setReversed(!0),pt=new tC(O),Ne=new TA,D=new UA(O,nt,Fe,Ne,et,ke,pt),C=new YE(M),Y=new ZE(M),re=new ay(O),Ye=new zE(O,re),ue=new jE(O,re,pt,Ye),ne=new iC(O,ue,re,pt),Ue=new nC(O,et,D),de=new XE(Ne),be=new vA(M,C,Y,nt,et,Ye,de),Se=new OA(M,Ne),Be=new xA,ze=new RA(nt),Pe=new HE(M,C,Y,Fe,ne,m,c),Ee=new PA(M,ne,et),H=new GA(O,pt,et,Fe),Me=new WE(O,nt,pt),Xe=new eC(O,nt,pt),pt.programs=be.programs,M.capabilities=et,M.extensions=nt,M.properties=Ne,M.renderLists=Be,M.shadowMap=Ee,M.state=Fe,M.info=pt}K();const Q=new kA(M,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const v=nt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=nt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(J,fe,!1))},this.getSize=function(v){return v.set(J,fe)},this.setSize=function(v,I,P=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=v,fe=I,t.width=Math.floor(v*j),t.height=Math.floor(I*j),P===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(J*j,fe*j).floor()},this.setDrawingBufferSize=function(v,I,P){J=v,fe=I,j=P,t.width=Math.floor(v*P),t.height=Math.floor(I*P),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(k)},this.getViewport=function(v){return v.copy(Ie)},this.setViewport=function(v,I,P,F){v.isVector4?Ie.set(v.x,v.y,v.z,v.w):Ie.set(v,I,P,F),Fe.viewport(k.copy(Ie).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,I,P,F){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,I,P,F),Fe.scissor(q.copy(Ve).multiplyScalar(j).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(v){Fe.setScissorTest(We=v)},this.setOpaqueSort=function(v){ge=v},this.setTransparentSort=function(v){ve=v},this.getClearColor=function(v){return v.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,P=!0){let F=0;if(v){let U=!1;if(V!==null){const G=V.texture.format;U=G===Ta||G===va||G===_a}if(U){const G=V.texture.type,z=G===Pn||G===si||G===so||G===ao||G===pa||G===ma,W=Pe.getClearColor(),Z=Pe.getClearAlpha(),se=W.r,ie=W.g,le=W.b;z?(S[0]=se,S[1]=ie,S[2]=le,S[3]=Z,O.clearBufferuiv(O.COLOR,0,S)):(x[0]=se,x[1]=ie,x[2]=le,x[3]=Z,O.clearBufferiv(O.COLOR,0,x))}else F|=O.COLOR_BUFFER_BIT}I&&(F|=O.DEPTH_BUFFER_BIT),P&&(F|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Pe.dispose(),Be.dispose(),ze.dispose(),Ne.dispose(),C.dispose(),Y.dispose(),ne.dispose(),Ye.dispose(),H.dispose(),be.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",vo),Q.removeEventListener("sessionend",To),pn.stop()};function ae(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const v=pt.autoReset,I=Ee.enabled,P=Ee.autoUpdate,F=Ee.needsUpdate,U=Ee.type;K(),pt.autoReset=v,Ee.enabled=I,Ee.autoUpdate=P,Ee.needsUpdate=F,Ee.type=U}function xe(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function $e(v){const I=v.target;I.removeEventListener("dispose",$e),vt(I)}function vt(v){Rt(v),Ne.remove(v)}function Rt(v){const I=Ne.get(v).programs;I!==void 0&&(I.forEach(function(P){be.releaseProgram(P)}),v.isShaderMaterial&&be.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,P,F,U,G){I===null&&(I=ht);const z=U.isMesh&&U.matrixWorld.determinant()<0,W=Tr(v,I,P,F,U);Fe.setMaterial(F,z);let Z=P.index,se=1;if(F.wireframe===!0){if(Z=ue.getWireframeAttribute(P),Z===void 0)return;se=2}const ie=P.drawRange,le=P.attributes.position;let ce=ie.start*se,he=(ie.start+ie.count)*se;G!==null&&(ce=Math.max(ce,G.start*se),he=Math.min(he,(G.start+G.count)*se)),Z!==null?(ce=Math.max(ce,0),he=Math.min(he,Z.count)):le!=null&&(ce=Math.max(ce,0),he=Math.min(he,le.count));const Re=he-ce;if(Re<0||Re===1/0)return;Ye.setup(U,F,W,P,Z);let Oe,Le=Me;if(Z!==null&&(Oe=re.get(Z),Le=Xe,Le.setIndex(Oe)),U.isMesh)F.wireframe===!0?(Fe.setLineWidth(F.wireframeLinewidth*Ze()),Le.setMode(O.LINES)):Le.setMode(O.TRIANGLES);else if(U.isLine){let Ce=F.linewidth;Ce===void 0&&(Ce=1),Fe.setLineWidth(Ce*Ze()),U.isLineSegments?Le.setMode(O.LINES):U.isLineLoop?Le.setMode(O.LINE_LOOP):Le.setMode(O.LINE_STRIP)}else U.isPoints?Le.setMode(O.POINTS):U.isSprite&&Le.setMode(O.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))Le.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ce=U._multiDrawStarts,Je=U._multiDrawCounts,we=U._multiDrawCount,ut=Z?re.get(Z).bytesPerElement:1,Mt=Ne.get(F).currentProgram.getUniforms();for(let rt=0;rt<we;rt++)Mt.setValue(O,"_gl_DrawID",rt),Le.render(Ce[rt]/ut,Je[rt])}else if(U.isInstancedMesh)Le.renderInstances(ce,Re,U.count);else if(P.isInstancedBufferGeometry){const Ce=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,Je=Math.min(P.instanceCount,Ce);Le.renderInstances(ce,Re,Je)}else Le.render(ce,Re)};function lt(v,I,P){v.transparent===!0&&v.side===Mn&&v.forceSinglePass===!1?(v.side=Bt,v.needsUpdate=!0,ci(v,I,P),v.side=qn,v.needsUpdate=!0,ci(v,I,P),v.side=Mn):ci(v,I,P)}this.compile=function(v,I,P=null){P===null&&(P=v),g=ze.get(P),g.init(I),A.push(g),P.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),v!==P&&v.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights();const F=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const G=U.material;if(G)if(Array.isArray(G))for(let z=0;z<G.length;z++){const W=G[z];lt(W,P,U),F.add(W)}else lt(G,P,U),F.add(G)}),g=A.pop(),F},this.compileAsync=function(v,I,P=null){const F=this.compile(v,I,P);return new Promise(U=>{function G(){if(F.forEach(function(z){Ne.get(z).currentProgram.isReady()&&F.delete(z)}),F.size===0){U(v);return}setTimeout(G,10)}nt.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let Ot=null;function tn(v){Ot&&Ot(v)}function vo(){pn.stop()}function To(){pn.start()}const pn=new of;pn.setAnimationLoop(tn),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(v){Ot=v,Q.setAnimationLoop(v),v===null?pn.stop():pn.start()},Q.addEventListener("sessionstart",vo),Q.addEventListener("sessionend",To),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(I),I=Q.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,I,V),g=ze.get(v,A.length),g.init(I),A.push(g),De.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ee.setFromProjectionMatrix(De),me=this.localClippingEnabled,pe=de.init(this.clippingPlanes,me),T=Be.get(v,w.length),T.init(),w.push(T),Q.enabled===!0&&Q.isPresenting===!0){const G=M.xr.getDepthSensingMesh();G!==null&&Xi(G,I,-1/0,M.sortObjects)}Xi(v,I,0,M.sortObjects),T.finish(),M.sortObjects===!0&&T.sort(ge,ve),ft=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ft&&Pe.addToRenderList(T,v),this.info.render.frame++,pe===!0&&de.beginShadows();const P=g.state.shadowsArray;Ee.render(P,v,I),pe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=T.opaque,U=T.transmissive;if(g.setupLights(),I.isArrayCamera){const G=I.cameras;if(U.length>0)for(let z=0,W=G.length;z<W;z++){const Z=G[z];So(F,U,v,Z)}ft&&Pe.render(v);for(let z=0,W=G.length;z<W;z++){const Z=G[z];Yi(T,v,Z,Z.viewport)}}else U.length>0&&So(F,U,v,I),ft&&Pe.render(v),Yi(T,v,I);V!==null&&N===0&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V)),v.isScene===!0&&v.onAfterRender(M,v,I),Ye.resetDefaultState(),E=-1,y=null,A.pop(),A.length>0?(g=A[A.length-1],pe===!0&&de.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,w.pop(),w.length>0?T=w[w.length-1]:T=null};function Xi(v,I,P,F){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)P=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)g.pushLight(v),v.castShadow&&g.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ee.intersectsSprite(v)){F&&He.setFromMatrixPosition(v.matrixWorld).applyMatrix4(De);const z=ne.update(v),W=v.material;W.visible&&T.push(v,z,W,P,He.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ee.intersectsObject(v))){const z=ne.update(v),W=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),He.copy(v.boundingSphere.center)):(z.boundingSphere===null&&z.computeBoundingSphere(),He.copy(z.boundingSphere.center)),He.applyMatrix4(v.matrixWorld).applyMatrix4(De)),Array.isArray(W)){const Z=z.groups;for(let se=0,ie=Z.length;se<ie;se++){const le=Z[se],ce=W[le.materialIndex];ce&&ce.visible&&T.push(v,z,ce,P,He.z,le)}}else W.visible&&T.push(v,z,W,P,He.z,null)}}const G=v.children;for(let z=0,W=G.length;z<W;z++)Xi(G[z],I,P,F)}function Yi(v,I,P,F){const U=v.opaque,G=v.transmissive,z=v.transparent;g.setupLightsView(P),pe===!0&&de.setGlobalState(M.clippingPlanes,P),F&&Fe.viewport(k.copy(F)),U.length>0&&ui(U,I,P),G.length>0&&ui(G,I,P),z.length>0&&ui(z,I,P),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function So(v,I,P,F){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[F.id]===void 0&&(g.state.transmissionRenderTarget[F.id]=new un(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?zt:Pn,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const G=g.state.transmissionRenderTarget[F.id],z=F.viewport||k;G.setSize(z.z*M.transmissionResolutionScale,z.w*M.transmissionResolutionScale);const W=M.getRenderTarget();M.setRenderTarget(G),M.getClearColor(te),oe=M.getClearAlpha(),oe<1&&M.setClearColor(16777215,.5),M.clear(),ft&&Pe.render(P);const Z=M.toneMapping;M.toneMapping=Wn;const se=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),g.setupLightsView(F),pe===!0&&de.setGlobalState(M.clippingPlanes,F),ui(v,P,F),D.updateMultisampleRenderTarget(G),D.updateRenderTargetMipmap(G),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let le=0,ce=I.length;le<ce;le++){const he=I[le],Re=he.object,Oe=he.geometry,Le=he.material,Ce=he.group;if(Le.side===Mn&&Re.layers.test(F.layers)){const Je=Le.side;Le.side=Bt,Le.needsUpdate=!0,xo(Re,P,F,Oe,Le,Ce),Le.side=Je,Le.needsUpdate=!0,ie=!0}}ie===!0&&(D.updateMultisampleRenderTarget(G),D.updateRenderTargetMipmap(G))}M.setRenderTarget(W),M.setClearColor(te,oe),se!==void 0&&(F.viewport=se),M.toneMapping=Z}function ui(v,I,P){const F=I.isScene===!0?I.overrideMaterial:null;for(let U=0,G=v.length;U<G;U++){const z=v[U],W=z.object,Z=z.geometry,se=z.group;let ie=z.material;ie.allowOverride===!0&&F!==null&&(ie=F),W.layers.test(P.layers)&&xo(W,I,P,Z,ie,se)}}function xo(v,I,P,F,U,G){v.onBeforeRender(M,I,P,F,U,G),v.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(M,I,P,F,v,G),U.transparent===!0&&U.side===Mn&&U.forceSinglePass===!1?(U.side=Bt,U.needsUpdate=!0,M.renderBufferDirect(P,I,F,U,v,G),U.side=qn,U.needsUpdate=!0,M.renderBufferDirect(P,I,F,U,v,G),U.side=Mn):M.renderBufferDirect(P,I,F,U,v,G),v.onAfterRender(M,I,P,F,U,G)}function ci(v,I,P){I.isScene!==!0&&(I=ht);const F=Ne.get(v),U=g.state.lights,G=g.state.shadowsArray,z=U.state.version,W=be.getParameters(v,U.state,G,I,P),Z=be.getProgramCacheKey(W);let se=F.programs;F.environment=v.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(v.isMeshStandardMaterial?Y:C).get(v.envMap||F.environment),F.envMapRotation=F.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,se===void 0&&(v.addEventListener("dispose",$e),se=new Map,F.programs=se);let ie=se.get(Z);if(ie!==void 0){if(F.currentProgram===ie&&F.lightsStateVersion===z)return Ji(v,W),ie}else W.uniforms=be.getUniforms(v),v.onBeforeCompile(W,M),ie=be.acquireProgram(W,Z),se.set(Z,ie),F.uniforms=W.uniforms;const le=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(le.clippingPlanes=de.uniform),Ji(v,W),F.needsLights=Un(v),F.lightsStateVersion=z,F.needsLights&&(le.ambientLightColor.value=U.state.ambient,le.lightProbe.value=U.state.probe,le.directionalLights.value=U.state.directional,le.directionalLightShadows.value=U.state.directionalShadow,le.spotLights.value=U.state.spot,le.spotLightShadows.value=U.state.spotShadow,le.rectAreaLights.value=U.state.rectArea,le.ltc_1.value=U.state.rectAreaLTC1,le.ltc_2.value=U.state.rectAreaLTC2,le.pointLights.value=U.state.point,le.pointLightShadows.value=U.state.pointShadow,le.hemisphereLights.value=U.state.hemi,le.directionalShadowMap.value=U.state.directionalShadowMap,le.directionalShadowMatrix.value=U.state.directionalShadowMatrix,le.spotShadowMap.value=U.state.spotShadowMap,le.spotLightMatrix.value=U.state.spotLightMatrix,le.spotLightMap.value=U.state.spotLightMap,le.pointShadowMap.value=U.state.pointShadowMap,le.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=ie,F.uniformsList=null,ie}function $i(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=ir.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Ji(v,I){const P=Ne.get(v);P.outputColorSpace=I.outputColorSpace,P.batching=I.batching,P.batchingColor=I.batchingColor,P.instancing=I.instancing,P.instancingColor=I.instancingColor,P.instancingMorph=I.instancingMorph,P.skinning=I.skinning,P.morphTargets=I.morphTargets,P.morphNormals=I.morphNormals,P.morphColors=I.morphColors,P.morphTargetsCount=I.morphTargetsCount,P.numClippingPlanes=I.numClippingPlanes,P.numIntersection=I.numClipIntersection,P.vertexAlphas=I.vertexAlphas,P.vertexTangents=I.vertexTangents,P.toneMapping=I.toneMapping}function Tr(v,I,P,F,U){I.isScene!==!0&&(I=ht),D.resetTextureUnits();const G=I.fog,z=F.isMeshStandardMaterial?I.environment:null,W=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Xn,Z=(F.isMeshStandardMaterial?Y:C).get(F.envMap||z),se=F.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,ie=!!P.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),le=!!P.morphAttributes.position,ce=!!P.morphAttributes.normal,he=!!P.morphAttributes.color;let Re=Wn;F.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Re=M.toneMapping);const Oe=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Le=Oe!==void 0?Oe.length:0,Ce=Ne.get(F),Je=g.state.lights;if(pe===!0&&(me===!0||v!==y)){const mt=v===y&&F.id===E;de.setState(F,v,mt)}let we=!1;F.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Je.state.version||Ce.outputColorSpace!==W||U.isBatchedMesh&&Ce.batching===!1||!U.isBatchedMesh&&Ce.batching===!0||U.isBatchedMesh&&Ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ce.instancing===!1||!U.isInstancedMesh&&Ce.instancing===!0||U.isSkinnedMesh&&Ce.skinning===!1||!U.isSkinnedMesh&&Ce.skinning===!0||U.isInstancedMesh&&Ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ce.instancingMorph===!1&&U.morphTexture!==null||Ce.envMap!==Z||F.fog===!0&&Ce.fog!==G||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==de.numPlanes||Ce.numIntersection!==de.numIntersection)||Ce.vertexAlphas!==se||Ce.vertexTangents!==ie||Ce.morphTargets!==le||Ce.morphNormals!==ce||Ce.morphColors!==he||Ce.toneMapping!==Re||Ce.morphTargetsCount!==Le)&&(we=!0):(we=!0,Ce.__version=F.version);let ut=Ce.currentProgram;we===!0&&(ut=ci(F,I,U));let Mt=!1,rt=!1,it=!1;const Ge=ut.getUniforms(),St=Ce.uniforms;if(Fe.useProgram(ut.program)&&(Mt=!0,rt=!0,it=!0),F.id!==E&&(E=F.id,rt=!0),Mt||y!==v){Fe.buffers.depth.getReversed()?(_e.copy(v.projectionMatrix),gx(_e),_x(_e),Ge.setValue(O,"projectionMatrix",_e)):Ge.setValue(O,"projectionMatrix",v.projectionMatrix),Ge.setValue(O,"viewMatrix",v.matrixWorldInverse);const Et=Ge.map.cameraPosition;Et!==void 0&&Et.setValue(O,je.setFromMatrixPosition(v.matrixWorld)),et.logarithmicDepthBuffer&&Ge.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ge.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,rt=!0,it=!0)}if(U.isSkinnedMesh){Ge.setOptional(O,U,"bindMatrix"),Ge.setOptional(O,U,"bindMatrixInverse");const mt=U.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),Ge.setValue(O,"boneTexture",mt.boneTexture,D))}U.isBatchedMesh&&(Ge.setOptional(O,U,"batchingTexture"),Ge.setValue(O,"batchingTexture",U._matricesTexture,D),Ge.setOptional(O,U,"batchingIdTexture"),Ge.setValue(O,"batchingIdTexture",U._indirectTexture,D),Ge.setOptional(O,U,"batchingColorTexture"),U._colorsTexture!==null&&Ge.setValue(O,"batchingColorTexture",U._colorsTexture,D));const wt=P.morphAttributes;if((wt.position!==void 0||wt.normal!==void 0||wt.color!==void 0)&&Ue.update(U,P,ut),(rt||Ce.receiveShadow!==U.receiveShadow)&&(Ce.receiveShadow=U.receiveShadow,Ge.setValue(O,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(St.envMap.value=Z,St.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&I.environment!==null&&(St.envMapIntensity.value=I.environmentIntensity),rt&&(Ge.setValue(O,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&mn(St,it),G&&F.fog===!0&&Se.refreshFogUniforms(St,G),Se.refreshMaterialUniforms(St,F,j,fe,g.state.transmissionRenderTarget[v.id]),ir.upload(O,$i(Ce),St,D)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ir.upload(O,$i(Ce),St,D),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ge.setValue(O,"center",U.center),Ge.setValue(O,"modelViewMatrix",U.modelViewMatrix),Ge.setValue(O,"normalMatrix",U.normalMatrix),Ge.setValue(O,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const mt=F.uniformsGroups;for(let Et=0,Sr=mt.length;Et<Sr;Et++){const Yn=mt[Et];H.update(Yn,ut),H.bind(Yn,ut)}}return ut}function mn(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Un(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(v,I,P){const F=Ne.get(v);F.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Ne.get(v.texture).__webglTexture=I,Ne.get(v.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:P,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const P=Ne.get(v);P.__webglFramebuffer=I,P.__useDefaultFramebuffer=I===void 0};const _=O.createFramebuffer();this.setRenderTarget=function(v,I=0,P=0){V=v,b=I,N=P;let F=!0,U=null,G=!1,z=!1;if(v){const Z=Ne.get(v);if(Z.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(O.FRAMEBUFFER,null),F=!1;else if(Z.__webglFramebuffer===void 0)D.setupRenderTarget(v);else if(Z.__hasExternalTextures)D.rebindTextures(v,Ne.get(v.texture).__webglTexture,Ne.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const le=v.depthTexture;if(Z.__boundDepthTexture!==le){if(le!==null&&Ne.has(le)&&(v.width!==le.image.width||v.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(v)}}const se=v.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(z=!0);const ie=Ne.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ie[I])?U=ie[I][P]:U=ie[I],G=!0):v.samples>0&&D.useMultisampledRTT(v)===!1?U=Ne.get(v).__webglMultisampledFramebuffer:Array.isArray(ie)?U=ie[P]:U=ie,k.copy(v.viewport),q.copy(v.scissor),$=v.scissorTest}else k.copy(Ie).multiplyScalar(j).floor(),q.copy(Ve).multiplyScalar(j).floor(),$=We;if(P!==0&&(U=_),Fe.bindFramebuffer(O.FRAMEBUFFER,U)&&F&&Fe.drawBuffers(v,U),Fe.viewport(k),Fe.scissor(q),Fe.setScissorTest($),G){const Z=Ne.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,Z.__webglTexture,P)}else if(z){const Z=Ne.get(v.texture),se=I;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.__webglTexture,P,se)}else if(v!==null&&P!==0){const Z=Ne.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Z.__webglTexture,P)}E=-1},this.readRenderTargetPixels=function(v,I,P,F,U,G,z){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=Ne.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&z!==void 0&&(W=W[z]),W){Fe.bindFramebuffer(O.FRAMEBUFFER,W);try{const Z=v.texture,se=Z.format,ie=Z.type;if(!et.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-F&&P>=0&&P<=v.height-U&&O.readPixels(I,P,F,U,ke.convert(se),ke.convert(ie),G)}finally{const Z=V!==null?Ne.get(V).__webglFramebuffer:null;Fe.bindFramebuffer(O.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(v,I,P,F,U,G,z){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let W=Ne.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&z!==void 0&&(W=W[z]),W)if(I>=0&&I<=v.width-F&&P>=0&&P<=v.height-U){Fe.bindFramebuffer(O.FRAMEBUFFER,W);const Z=v.texture,se=Z.format,ie=Z.type;if(!et.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,le),O.bufferData(O.PIXEL_PACK_BUFFER,G.byteLength,O.STREAM_READ),O.readPixels(I,P,F,U,ke.convert(se),ke.convert(ie),0);const ce=V!==null?Ne.get(V).__webglFramebuffer:null;Fe.bindFramebuffer(O.FRAMEBUFFER,ce);const he=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await mx(O,he,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,le),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,G),O.deleteBuffer(le),O.deleteSync(he),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,P=0){const F=Math.pow(2,-P),U=Math.floor(v.image.width*F),G=Math.floor(v.image.height*F),z=I!==null?I.x:0,W=I!==null?I.y:0;D.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,P,0,0,z,W,U,G),Fe.unbindTexture()};const R=O.createFramebuffer(),L=O.createFramebuffer();this.copyTextureToTexture=function(v,I,P=null,F=null,U=0,G=null){G===null&&(U!==0?(nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),G=U,U=0):G=0);let z,W,Z,se,ie,le,ce,he,Re;const Oe=v.isCompressedTexture?v.mipmaps[G]:v.image;if(P!==null)z=P.max.x-P.min.x,W=P.max.y-P.min.y,Z=P.isBox3?P.max.z-P.min.z:1,se=P.min.x,ie=P.min.y,le=P.isBox3?P.min.z:0;else{const wt=Math.pow(2,-U);z=Math.floor(Oe.width*wt),W=Math.floor(Oe.height*wt),v.isDataArrayTexture?Z=Oe.depth:v.isData3DTexture?Z=Math.floor(Oe.depth*wt):Z=1,se=0,ie=0,le=0}F!==null?(ce=F.x,he=F.y,Re=F.z):(ce=0,he=0,Re=0);const Le=ke.convert(I.format),Ce=ke.convert(I.type);let Je;I.isData3DTexture?(D.setTexture3D(I,0),Je=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(D.setTexture2DArray(I,0),Je=O.TEXTURE_2D_ARRAY):(D.setTexture2D(I,0),Je=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const we=O.getParameter(O.UNPACK_ROW_LENGTH),ut=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Mt=O.getParameter(O.UNPACK_SKIP_PIXELS),rt=O.getParameter(O.UNPACK_SKIP_ROWS),it=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Oe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Oe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,se),O.pixelStorei(O.UNPACK_SKIP_ROWS,ie),O.pixelStorei(O.UNPACK_SKIP_IMAGES,le);const Ge=v.isDataArrayTexture||v.isData3DTexture,St=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const wt=Ne.get(v),mt=Ne.get(I),Et=Ne.get(wt.__renderTarget),Sr=Ne.get(mt.__renderTarget);Fe.bindFramebuffer(O.READ_FRAMEBUFFER,Et.__webglFramebuffer),Fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Yn=0;Yn<Z;Yn++)Ge&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(v).__webglTexture,U,le+Yn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(I).__webglTexture,G,Re+Yn)),O.blitFramebuffer(se,ie,z,W,ce,he,z,W,O.DEPTH_BUFFER_BIT,O.NEAREST);Fe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||Ne.has(v)){const wt=Ne.get(v),mt=Ne.get(I);Fe.bindFramebuffer(O.READ_FRAMEBUFFER,R),Fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,L);for(let Et=0;Et<Z;Et++)Ge?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.__webglTexture,U,le+Et):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,wt.__webglTexture,U),St?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mt.__webglTexture,G,Re+Et):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mt.__webglTexture,G),U!==0?O.blitFramebuffer(se,ie,z,W,ce,he,z,W,O.COLOR_BUFFER_BIT,O.NEAREST):St?O.copyTexSubImage3D(Je,G,ce,he,Re+Et,se,ie,z,W):O.copyTexSubImage2D(Je,G,ce,he,se,ie,z,W);Fe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else St?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(Je,G,ce,he,Re,z,W,Z,Le,Ce,Oe.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(Je,G,ce,he,Re,z,W,Z,Le,Oe.data):O.texSubImage3D(Je,G,ce,he,Re,z,W,Z,Le,Ce,Oe):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,ce,he,z,W,Le,Ce,Oe.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,ce,he,Oe.width,Oe.height,Le,Oe.data):O.texSubImage2D(O.TEXTURE_2D,G,ce,he,z,W,Le,Ce,Oe);O.pixelStorei(O.UNPACK_ROW_LENGTH,we),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ut),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Mt),O.pixelStorei(O.UNPACK_SKIP_ROWS,rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,it),G===0&&I.generateMipmaps&&O.generateMipmap(Je),Fe.unbindTexture()},this.copyTextureToTexture3D=function(v,I,P=null,F=null,U=0){return nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,I,P,F,U)},this.initRenderTarget=function(v){Ne.get(v).__webglFramebuffer===void 0&&D.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?D.setTextureCube(v,0):v.isData3DTexture?D.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?D.setTexture2DArray(v,0):D.setTexture2D(v,0),Fe.unbindTexture()},this.resetState=function(){b=0,N=0,V=null,Fe.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Jt=Uint8Array,wi=Uint16Array,zA=Int32Array,uf=new Jt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),cf=new Jt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),WA=new Jt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ff=function(n,e){for(var t=new wi(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var o=new zA(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)o[r]=r-t[i]<<5|i;return{b:t,r:o}},df=ff(uf,2),hf=df.b,qA=df.r;hf[28]=258,qA[258]=28;var XA=ff(cf,0),YA=XA.b,oa=new wi(32768);for(var _t=0;_t<32768;++_t){var On=(_t&43690)>>1|(_t&21845)<<1;On=(On&52428)>>2|(On&13107)<<2,On=(On&61680)>>4|(On&3855)<<4,oa[_t]=((On&65280)>>8|(On&255)<<8)>>1}var oo=(function(n,e,t){for(var i=n.length,o=0,r=new wi(e);o<i;++o)n[o]&&++r[n[o]-1];var l=new wi(e);for(o=1;o<e;++o)l[o]=l[o-1]+r[o-1]<<1;var u;if(t){u=new wi(1<<e);var c=15-e;for(o=0;o<i;++o)if(n[o])for(var f=o<<4|n[o],d=e-n[o],h=l[n[o]-1]++<<d,p=h|(1<<d)-1;h<=p;++h)u[oa[h]>>c]=f}else for(u=new wi(i),o=0;o<i;++o)n[o]&&(u[o]=oa[l[n[o]-1]++]>>15-n[o]);return u}),go=new Jt(288);for(var _t=0;_t<144;++_t)go[_t]=8;for(var _t=144;_t<256;++_t)go[_t]=9;for(var _t=256;_t<280;++_t)go[_t]=7;for(var _t=280;_t<288;++_t)go[_t]=8;var pf=new Jt(32);for(var _t=0;_t<32;++_t)pf[_t]=5;var $A=oo(go,9,1),JA=oo(pf,5,1),is=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},sn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},os=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},KA=function(n){return(n+7)/8|0},ZA=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Jt(n.subarray(e,t))},QA=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],an=function(n,e,t){var i=new Error(e||QA[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,an),!t)throw i;return i},jA=function(n,e,t,i){var o=n.length,r=0;if(!o||e.f&&!e.l)return t||new Jt(0);var l=!t,u=l||e.i!=2,c=e.i;l&&(t=new Jt(o*3));var f=function(ht){var ft=t.length;if(ht>ft){var Ze=new Jt(Math.max(ft*2,ht));Ze.set(t),t=Ze}},d=e.f||0,h=e.p||0,p=e.b||0,m=e.l,S=e.d,x=e.m,T=e.n,g=o*8;do{if(!m){d=sn(n,h,1);var w=sn(n,h+1,3);if(h+=3,w)if(w==1)m=$A,S=JA,x=9,T=5;else if(w==2){var b=sn(n,h,31)+257,N=sn(n,h+10,15)+4,V=b+sn(n,h+5,31)+1;h+=14;for(var E=new Jt(V),y=new Jt(19),k=0;k<N;++k)y[WA[k]]=sn(n,h+k*3,7);h+=N*3;for(var q=is(y),$=(1<<q)-1,te=oo(y,q,1),k=0;k<V;){var oe=te[sn(n,h,$)];h+=oe&15;var A=oe>>4;if(A<16)E[k++]=A;else{var J=0,fe=0;for(A==16?(fe=3+sn(n,h,3),h+=2,J=E[k-1]):A==17?(fe=3+sn(n,h,7),h+=3):A==18&&(fe=11+sn(n,h,127),h+=7);fe--;)E[k++]=J}}var j=E.subarray(0,b),ge=E.subarray(b);x=is(j),T=is(ge),m=oo(j,x,1),S=oo(ge,T,1)}else an(1);else{var A=KA(h)+4,M=n[A-4]|n[A-3]<<8,B=A+M;if(B>o){c&&an(0);break}u&&f(p+M),t.set(n.subarray(A,B),p),e.b=p+=M,e.p=h=B*8,e.f=d;continue}if(h>g){c&&an(0);break}}u&&f(p+131072);for(var ve=(1<<x)-1,Ie=(1<<T)-1,Ve=h;;Ve=h){var J=m[os(n,h)&ve],We=J>>4;if(h+=J&15,h>g){c&&an(0);break}if(J||an(2),We<256)t[p++]=We;else if(We==256){Ve=h,m=null;break}else{var ee=We-254;if(We>264){var k=We-257,pe=uf[k];ee=sn(n,h,(1<<pe)-1)+hf[k],h+=pe}var me=S[os(n,h)&Ie],_e=me>>4;me||an(3),h+=me&15;var ge=YA[_e];if(_e>3){var pe=cf[_e];ge+=os(n,h)&(1<<pe)-1,h+=pe}if(h>g){c&&an(0);break}u&&f(p+131072);var De=p+ee;if(p<ge){var je=r-ge,He=Math.min(ge,De);for(je+p<0&&an(3);p<He;++p)t[p]=i[je+p]}for(;p<De;++p)t[p]=t[p-ge]}}e.l=m,e.p=Ve,e.b=p,e.f=d,m&&(d=1,e.m=x,e.d=S,e.n=T)}while(!d);return p!=t.length&&l?ZA(t,0,p):t.subarray(0,p)},eR=new Jt(0),tR=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&an(6,"invalid zlib data"),(n[1]>>5&1)==1&&an(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function $o(n,e){return jA(n.subarray(tR(n),-4),{i:2},e,e)}var nR=typeof TextDecoder<"u"&&new TextDecoder,iR=0;try{nR.decode(eR,{stream:!0}),iR=1}catch{}class oR extends iy{constructor(e){super(e),this.type=zt}parse(e){const E=Math.pow(2.7182818,2.2);function y(_,R){let L=0;for(let I=0;I<65536;++I)(I==0||_[I>>3]&1<<(I&7))&&(R[L++]=I);const v=L-1;for(;L<65536;)R[L++]=0;return v}function k(_){for(let R=0;R<16384;R++)_[R]={},_[R].len=0,_[R].lit=0,_[R].p=null}const q={l:0,c:0,lc:0};function $(_,R,L,v,I){for(;L<_;)R=R<<8|Me(v,I),L+=8;L-=_,q.l=R>>L&(1<<_)-1,q.c=R,q.lc=L}const te=new Array(59);function oe(_){for(let L=0;L<=58;++L)te[L]=0;for(let L=0;L<65537;++L)te[_[L]]+=1;let R=0;for(let L=58;L>0;--L){const v=R+te[L]>>1;te[L]=R,R=v}for(let L=0;L<65537;++L){const v=_[L];v>0&&(_[L]=v|te[v]++<<6)}}function J(_,R,L,v,I,P){const F=R;let U=0,G=0;for(;v<=I;v++){if(F.value-R.value>L)return!1;$(6,U,G,_,F);const z=q.l;if(U=q.c,G=q.lc,P[v]=z,z==63){if(F.value-R.value>L)throw new Error("Something wrong with hufUnpackEncTable");$(8,U,G,_,F);let W=q.l+6;if(U=q.c,G=q.lc,v+W>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)P[v++]=0;v--}else if(z>=59){let W=z-59+2;if(v+W>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)P[v++]=0;v--}}oe(P)}function fe(_){return _&63}function j(_){return _>>6}function ge(_,R,L,v){for(;R<=L;R++){const I=j(_[R]),P=fe(_[R]);if(I>>P)throw new Error("Invalid table entry");if(P>14){const F=v[I>>P-14];if(F.len)throw new Error("Invalid table entry");if(F.lit++,F.p){const U=F.p;F.p=new Array(F.lit);for(let G=0;G<F.lit-1;++G)F.p[G]=U[G]}else F.p=new Array(1);F.p[F.lit-1]=R}else if(P){let F=0;for(let U=1<<14-P;U>0;U--){const G=v[(I<<14-P)+F];if(G.len||G.p)throw new Error("Invalid table entry");G.len=P,G.lit=R,F++}}}return!0}const ve={c:0,lc:0};function Ie(_,R,L,v){_=_<<8|Me(L,v),R+=8,ve.c=_,ve.lc=R}const Ve={c:0,lc:0};function We(_,R,L,v,I,P,F,U,G){if(_==R){v<8&&(Ie(L,v,I,P),L=ve.c,v=ve.lc),v-=8;let z=L>>v;if(z=new Uint8Array([z])[0],U.value+z>G)return!1;const W=F[U.value-1];for(;z-- >0;)F[U.value++]=W}else if(U.value<G)F[U.value++]=_;else return!1;Ve.c=L,Ve.lc=v}function ee(_){return _&65535}function pe(_){const R=ee(_);return R>32767?R-65536:R}const me={a:0,b:0};function _e(_,R){const L=pe(_),I=pe(R),P=L+(I&1)+(I>>1),F=P,U=P-I;me.a=F,me.b=U}function De(_,R){const L=ee(_),v=ee(R),I=L-(v>>1)&65535,P=v+I-32768&65535;me.a=P,me.b=I}function je(_,R,L,v,I,P,F){const U=F<16384,G=L>I?I:L;let z=1,W,Z;for(;z<=G;)z<<=1;for(z>>=1,W=z,z>>=1;z>=1;){Z=0;const se=Z+P*(I-W),ie=P*z,le=P*W,ce=v*z,he=v*W;let Re,Oe,Le,Ce;for(;Z<=se;Z+=le){let Je=Z;const we=Z+v*(L-W);for(;Je<=we;Je+=he){const ut=Je+ce,Mt=Je+ie,rt=Mt+ce;U?(_e(_[Je+R],_[Mt+R]),Re=me.a,Le=me.b,_e(_[ut+R],_[rt+R]),Oe=me.a,Ce=me.b,_e(Re,Oe),_[Je+R]=me.a,_[ut+R]=me.b,_e(Le,Ce),_[Mt+R]=me.a,_[rt+R]=me.b):(De(_[Je+R],_[Mt+R]),Re=me.a,Le=me.b,De(_[ut+R],_[rt+R]),Oe=me.a,Ce=me.b,De(Re,Oe),_[Je+R]=me.a,_[ut+R]=me.b,De(Le,Ce),_[Mt+R]=me.a,_[rt+R]=me.b)}if(L&z){const ut=Je+ie;U?_e(_[Je+R],_[ut+R]):De(_[Je+R],_[ut+R]),Re=me.a,_[ut+R]=me.b,_[Je+R]=Re}}if(I&z){let Je=Z;const we=Z+v*(L-W);for(;Je<=we;Je+=he){const ut=Je+ce;U?_e(_[Je+R],_[ut+R]):De(_[Je+R],_[ut+R]),Re=me.a,_[ut+R]=me.b,_[Je+R]=Re}}W=z,z>>=1}return Z}function He(_,R,L,v,I,P,F,U,G){let z=0,W=0;const Z=F,se=Math.trunc(v.value+(I+7)/8);for(;v.value<se;)for(Ie(z,W,L,v),z=ve.c,W=ve.lc;W>=14;){const le=z>>W-14&16383,ce=R[le];if(ce.len)W-=ce.len,We(ce.lit,P,z,W,L,v,U,G,Z),z=Ve.c,W=Ve.lc;else{if(!ce.p)throw new Error("hufDecode issues");let he;for(he=0;he<ce.lit;he++){const Re=fe(_[ce.p[he]]);for(;W<Re&&v.value<se;)Ie(z,W,L,v),z=ve.c,W=ve.lc;if(W>=Re&&j(_[ce.p[he]])==(z>>W-Re&(1<<Re)-1)){W-=Re,We(ce.p[he],P,z,W,L,v,U,G,Z),z=Ve.c,W=Ve.lc;break}}if(he==ce.lit)throw new Error("hufDecode issues")}}const ie=8-I&7;for(z>>=ie,W-=ie;W>0;){const le=R[z<<14-W&16383];if(le.len)W-=le.len,We(le.lit,P,z,W,L,v,U,G,Z),z=Ve.c,W=Ve.lc;else throw new Error("hufDecode issues")}return!0}function ht(_,R,L,v,I,P){const F={value:0},U=L.value,G=Ue(R,L),z=Ue(R,L);L.value+=4;const W=Ue(R,L);if(L.value+=4,G<0||G>=65537||z<0||z>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const Z=new Array(65537),se=new Array(16384);k(se);const ie=v-(L.value-U);if(J(_,L,ie,G,z,Z),W>8*(v-(L.value-U)))throw new Error("Something wrong with hufUncompress");ge(Z,G,z,se),He(Z,se,_,L,W,z,P,I,F)}function ft(_,R,L){for(let v=0;v<L;++v)R[v]=_[R[v]]}function Ze(_){for(let R=1;R<_.length;R++){const L=_[R-1]+_[R]-128;_[R]=L}}function O(_,R){let L=0,v=Math.floor((_.length+1)/2),I=0;const P=_.length-1;for(;!(I>P||(R[I++]=_[L++],I>P));)R[I++]=_[v++]}function Ut(_){let R=_.byteLength;const L=new Array;let v=0;const I=new DataView(_);for(;R>0;){const P=I.getInt8(v++);if(P<0){const F=-P;R-=F+1;for(let U=0;U<F;U++)L.push(I.getUint8(v++))}else{const F=P;R-=2;const U=I.getUint8(v++);for(let G=0;G<F+1;G++)L.push(U)}}return L}function nt(_,R,L,v,I,P){let F=new DataView(P.buffer);const U=L[_.idx[0]].width,G=L[_.idx[0]].height,z=3,W=Math.floor(U/8),Z=Math.ceil(U/8),se=Math.ceil(G/8),ie=U-(Z-1)*8,le=G-(se-1)*8,ce={value:0},he=new Array(z),Re=new Array(z),Oe=new Array(z),Le=new Array(z),Ce=new Array(z);for(let we=0;we<z;++we)Ce[we]=R[_.idx[we]],he[we]=we<1?0:he[we-1]+Z*se,Re[we]=new Float32Array(64),Oe[we]=new Uint16Array(64),Le[we]=new Uint16Array(Z*64);for(let we=0;we<se;++we){let ut=8;we==se-1&&(ut=le);let Mt=8;for(let it=0;it<Z;++it){it==Z-1&&(Mt=ie);for(let Ge=0;Ge<z;++Ge)Oe[Ge].fill(0),Oe[Ge][0]=I[he[Ge]++],et(ce,v,Oe[Ge]),Fe(Oe[Ge],Re[Ge]),pt(Re[Ge]);Ne(Re);for(let Ge=0;Ge<z;++Ge)D(Re[Ge],Le[Ge],it*64)}let rt=0;for(let it=0;it<z;++it){const Ge=L[_.idx[it]].type;for(let St=8*we;St<8*we+ut;++St){rt=Ce[it][St];for(let wt=0;wt<W;++wt){const mt=wt*64+(St&7)*8;F.setUint16(rt+0*Ge,Le[it][mt+0],!0),F.setUint16(rt+2*Ge,Le[it][mt+1],!0),F.setUint16(rt+4*Ge,Le[it][mt+2],!0),F.setUint16(rt+6*Ge,Le[it][mt+3],!0),F.setUint16(rt+8*Ge,Le[it][mt+4],!0),F.setUint16(rt+10*Ge,Le[it][mt+5],!0),F.setUint16(rt+12*Ge,Le[it][mt+6],!0),F.setUint16(rt+14*Ge,Le[it][mt+7],!0),rt+=16*Ge}}if(W!=Z)for(let St=8*we;St<8*we+ut;++St){const wt=Ce[it][St]+8*W*2*Ge,mt=W*64+(St&7)*8;for(let Et=0;Et<Mt;++Et)F.setUint16(wt+Et*2*Ge,Le[it][mt+Et],!0)}}}const Je=new Uint16Array(U);F=new DataView(P.buffer);for(let we=0;we<z;++we){L[_.idx[we]].decoded=!0;const ut=L[_.idx[we]].type;if(L[we].type==2)for(let Mt=0;Mt<G;++Mt){const rt=Ce[we][Mt];for(let it=0;it<U;++it)Je[it]=F.getUint16(rt+it*2*ut,!0);for(let it=0;it<U;++it)F.setFloat32(rt+it*2*ut,K(Je[it]),!0)}}}function et(_,R,L){let v,I=1;for(;I<64;)v=R[_.value],v==65280?I=64:v>>8==255?I+=v&255:(L[I]=v,I++),_.value++}function Fe(_,R){R[0]=K(_[0]),R[1]=K(_[1]),R[2]=K(_[5]),R[3]=K(_[6]),R[4]=K(_[14]),R[5]=K(_[15]),R[6]=K(_[27]),R[7]=K(_[28]),R[8]=K(_[2]),R[9]=K(_[4]),R[10]=K(_[7]),R[11]=K(_[13]),R[12]=K(_[16]),R[13]=K(_[26]),R[14]=K(_[29]),R[15]=K(_[42]),R[16]=K(_[3]),R[17]=K(_[8]),R[18]=K(_[12]),R[19]=K(_[17]),R[20]=K(_[25]),R[21]=K(_[30]),R[22]=K(_[41]),R[23]=K(_[43]),R[24]=K(_[9]),R[25]=K(_[11]),R[26]=K(_[18]),R[27]=K(_[24]),R[28]=K(_[31]),R[29]=K(_[40]),R[30]=K(_[44]),R[31]=K(_[53]),R[32]=K(_[10]),R[33]=K(_[19]),R[34]=K(_[23]),R[35]=K(_[32]),R[36]=K(_[39]),R[37]=K(_[45]),R[38]=K(_[52]),R[39]=K(_[54]),R[40]=K(_[20]),R[41]=K(_[22]),R[42]=K(_[33]),R[43]=K(_[38]),R[44]=K(_[46]),R[45]=K(_[51]),R[46]=K(_[55]),R[47]=K(_[60]),R[48]=K(_[21]),R[49]=K(_[34]),R[50]=K(_[37]),R[51]=K(_[47]),R[52]=K(_[50]),R[53]=K(_[56]),R[54]=K(_[59]),R[55]=K(_[61]),R[56]=K(_[35]),R[57]=K(_[36]),R[58]=K(_[48]),R[59]=K(_[49]),R[60]=K(_[57]),R[61]=K(_[58]),R[62]=K(_[62]),R[63]=K(_[63])}function pt(_){const R=.5*Math.cos(.7853975),L=.5*Math.cos(3.14159/16),v=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),P=.5*Math.cos(5*3.14159/16),F=.5*Math.cos(3*3.14159/8),U=.5*Math.cos(7*3.14159/16),G=new Array(4),z=new Array(4),W=new Array(4),Z=new Array(4);for(let se=0;se<8;++se){const ie=se*8;G[0]=v*_[ie+2],G[1]=F*_[ie+2],G[2]=v*_[ie+6],G[3]=F*_[ie+6],z[0]=L*_[ie+1]+I*_[ie+3]+P*_[ie+5]+U*_[ie+7],z[1]=I*_[ie+1]-U*_[ie+3]-L*_[ie+5]-P*_[ie+7],z[2]=P*_[ie+1]-L*_[ie+3]+U*_[ie+5]+I*_[ie+7],z[3]=U*_[ie+1]-P*_[ie+3]+I*_[ie+5]-L*_[ie+7],W[0]=R*(_[ie+0]+_[ie+4]),W[3]=R*(_[ie+0]-_[ie+4]),W[1]=G[0]+G[3],W[2]=G[1]-G[2],Z[0]=W[0]+W[1],Z[1]=W[3]+W[2],Z[2]=W[3]-W[2],Z[3]=W[0]-W[1],_[ie+0]=Z[0]+z[0],_[ie+1]=Z[1]+z[1],_[ie+2]=Z[2]+z[2],_[ie+3]=Z[3]+z[3],_[ie+4]=Z[3]-z[3],_[ie+5]=Z[2]-z[2],_[ie+6]=Z[1]-z[1],_[ie+7]=Z[0]-z[0]}for(let se=0;se<8;++se)G[0]=v*_[16+se],G[1]=F*_[16+se],G[2]=v*_[48+se],G[3]=F*_[48+se],z[0]=L*_[8+se]+I*_[24+se]+P*_[40+se]+U*_[56+se],z[1]=I*_[8+se]-U*_[24+se]-L*_[40+se]-P*_[56+se],z[2]=P*_[8+se]-L*_[24+se]+U*_[40+se]+I*_[56+se],z[3]=U*_[8+se]-P*_[24+se]+I*_[40+se]-L*_[56+se],W[0]=R*(_[se]+_[32+se]),W[3]=R*(_[se]-_[32+se]),W[1]=G[0]+G[3],W[2]=G[1]-G[2],Z[0]=W[0]+W[1],Z[1]=W[3]+W[2],Z[2]=W[3]-W[2],Z[3]=W[0]-W[1],_[0+se]=Z[0]+z[0],_[8+se]=Z[1]+z[1],_[16+se]=Z[2]+z[2],_[24+se]=Z[3]+z[3],_[32+se]=Z[3]-z[3],_[40+se]=Z[2]-z[2],_[48+se]=Z[1]-z[1],_[56+se]=Z[0]-z[0]}function Ne(_){for(let R=0;R<64;++R){const L=_[0][R],v=_[1][R],I=_[2][R];_[0][R]=L+1.5747*I,_[1][R]=L-.1873*v-.4682*I,_[2][R]=L+1.8556*v}}function D(_,R,L){for(let v=0;v<64;++v)R[L+v]=pu.toHalfFloat(C(_[v]))}function C(_){return _<=1?Math.sign(_)*Math.pow(Math.abs(_),2.2):Math.sign(_)*Math.pow(E,Math.abs(_)-1)}function Y(_){return new DataView(_.array.buffer,_.offset.value,_.size)}function re(_){const R=_.viewer.buffer.slice(_.offset.value,_.offset.value+_.size),L=new Uint8Array(Ut(R)),v=new Uint8Array(L.length);return Ze(L),O(L,v),new DataView(v.buffer)}function ue(_){const R=_.array.slice(_.offset.value,_.offset.value+_.size),L=$o(R),v=new Uint8Array(L.length);return Ze(L),O(L,v),new DataView(v.buffer)}function ne(_){const R=_.viewer,L={value:_.offset.value},v=new Uint16Array(_.columns*_.lines*(_.inputChannels.length*_.type)),I=new Uint8Array(8192);let P=0;const F=new Array(_.inputChannels.length);for(let le=0,ce=_.inputChannels.length;le<ce;le++)F[le]={},F[le].start=P,F[le].end=F[le].start,F[le].nx=_.columns,F[le].ny=_.lines,F[le].size=_.type,P+=F[le].nx*F[le].ny*F[le].size;const U=Q(R,L),G=Q(R,L);if(G>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(U<=G)for(let le=0;le<G-U+1;le++)I[le+U]=Xe(R,L);const z=new Uint16Array(65536),W=y(I,z),Z=Ue(R,L);ht(_.array,R,L,Z,v,P);for(let le=0;le<_.inputChannels.length;++le){const ce=F[le];for(let he=0;he<F[le].size;++he)je(v,ce.start+he,ce.nx,ce.size,ce.ny,ce.nx*ce.size,W)}ft(z,v,P);let se=0;const ie=new Uint8Array(v.buffer.byteLength);for(let le=0;le<_.lines;le++)for(let ce=0;ce<_.inputChannels.length;ce++){const he=F[ce],Re=he.nx*he.size,Oe=new Uint8Array(v.buffer,he.end*2,Re*2);ie.set(Oe,se),se+=Re*2,he.end+=Re}return new DataView(ie.buffer)}function be(_){const R=_.array.slice(_.offset.value,_.offset.value+_.size),L=$o(R),v=_.inputChannels.length*_.lines*_.columns*_.totalBytes,I=new ArrayBuffer(v),P=new DataView(I);let F=0,U=0;const G=new Array(4);for(let z=0;z<_.lines;z++)for(let W=0;W<_.inputChannels.length;W++){let Z=0;switch(_.inputChannels[W].pixelType){case 1:G[0]=F,G[1]=G[0]+_.columns,F=G[1]+_.columns;for(let ie=0;ie<_.columns;++ie){const le=L[G[0]++]<<8|L[G[1]++];Z+=le,P.setUint16(U,Z,!0),U+=2}break;case 2:G[0]=F,G[1]=G[0]+_.columns,G[2]=G[1]+_.columns,F=G[2]+_.columns;for(let ie=0;ie<_.columns;++ie){const le=L[G[0]++]<<24|L[G[1]++]<<16|L[G[2]++]<<8;Z+=le,P.setUint32(U,Z,!0),U+=4}break}}return P}function Se(_){const R=_.viewer,L={value:_.offset.value},v=new Uint8Array(_.columns*_.lines*(_.inputChannels.length*_.type*2)),I={version:ke(R,L),unknownUncompressedSize:ke(R,L),unknownCompressedSize:ke(R,L),acCompressedSize:ke(R,L),dcCompressedSize:ke(R,L),rleCompressedSize:ke(R,L),rleUncompressedSize:ke(R,L),rleRawSize:ke(R,L),totalAcUncompressedCount:ke(R,L),totalDcUncompressedCount:ke(R,L),acCompression:ke(R,L)};if(I.version<2)throw new Error("EXRLoader.parse: "+mn.compression+" version "+I.version+" is unsupported");const P=new Array;let F=Q(R,L)-2;for(;F>0;){const ce=Be(R.buffer,L),he=Xe(R,L),Re=he>>2&3,Oe=(he>>4)-1,Le=new Int8Array([Oe])[0],Ce=Xe(R,L);P.push({name:ce,index:Le,type:Ce,compression:Re}),F-=ce.length+3}const U=mn.channels,G=new Array(_.inputChannels.length);for(let ce=0;ce<_.inputChannels.length;++ce){const he=G[ce]={},Re=U[ce];he.name=Re.name,he.compression=0,he.decoded=!1,he.type=Re.pixelType,he.pLinear=Re.pLinear,he.width=_.columns,he.height=_.lines}const z={idx:new Array(3)};for(let ce=0;ce<_.inputChannels.length;++ce){const he=G[ce];for(let Re=0;Re<P.length;++Re){const Oe=P[Re];he.name==Oe.name&&(he.compression=Oe.compression,Oe.index>=0&&(z.idx[Oe.index]=ce),he.offset=ce)}}let W,Z,se;if(I.acCompressedSize>0)switch(I.acCompression){case 0:W=new Uint16Array(I.totalAcUncompressedCount),ht(_.array,R,L,I.acCompressedSize,W,I.totalAcUncompressedCount);break;case 1:const ce=_.array.slice(L.value,L.value+I.totalAcUncompressedCount),he=$o(ce);W=new Uint16Array(he.buffer),L.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){const ce={array:_.array,offset:L,size:I.dcCompressedSize};Z=new Uint16Array(ue(ce).buffer),L.value+=I.dcCompressedSize}if(I.rleRawSize>0){const ce=_.array.slice(L.value,L.value+I.rleCompressedSize),he=$o(ce);se=Ut(he.buffer),L.value+=I.rleCompressedSize}let ie=0;const le=new Array(G.length);for(let ce=0;ce<le.length;++ce)le[ce]=new Array;for(let ce=0;ce<_.lines;++ce)for(let he=0;he<G.length;++he)le[he].push(ie),ie+=G[he].width*_.type*2;nt(z,le,G,W,Z,v);for(let ce=0;ce<G.length;++ce){const he=G[ce];if(!he.decoded)switch(he.compression){case 2:let Re=0,Oe=0;for(let Le=0;Le<_.lines;++Le){let Ce=le[ce][Re];for(let Je=0;Je<he.width;++Je){for(let we=0;we<2*he.type;++we)v[Ce++]=se[Oe+we*he.width*he.height];Oe++}Re++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(v.buffer)}function Be(_,R){const L=new Uint8Array(_);let v=0;for(;L[R.value+v]!=0;)v+=1;const I=new TextDecoder().decode(L.slice(R.value,R.value+v));return R.value=R.value+v+1,I}function ze(_,R,L){const v=new TextDecoder().decode(new Uint8Array(_).slice(R.value,R.value+L));return R.value=R.value+L,v}function de(_,R){const L=Pe(_,R),v=Ue(_,R);return[L,v]}function Ee(_,R){const L=Ue(_,R),v=Ue(_,R);return[L,v]}function Pe(_,R){const L=_.getInt32(R.value,!0);return R.value=R.value+4,L}function Ue(_,R){const L=_.getUint32(R.value,!0);return R.value=R.value+4,L}function Me(_,R){const L=_[R.value];return R.value=R.value+1,L}function Xe(_,R){const L=_.getUint8(R.value);return R.value=R.value+1,L}const ke=function(_,R){let L;return"getBigInt64"in DataView.prototype?L=Number(_.getBigInt64(R.value,!0)):L=_.getUint32(R.value+4,!0)+Number(_.getUint32(R.value,!0)<<32),R.value+=8,L};function Ye(_,R){const L=_.getFloat32(R.value,!0);return R.value+=4,L}function H(_,R){return pu.toHalfFloat(Ye(_,R))}function K(_){const R=(_&31744)>>10,L=_&1023;return(_>>15?-1:1)*(R?R===31?L?NaN:1/0:Math.pow(2,R-15)*(1+L/1024):6103515625e-14*(L/1024))}function Q(_,R){const L=_.getUint16(R.value,!0);return R.value+=2,L}function ae(_,R){return K(Q(_,R))}function ye(_,R,L,v){const I=L.value,P=[];for(;L.value<I+v-1;){const F=Be(R,L),U=Pe(_,L),G=Xe(_,L);L.value+=3;const z=Pe(_,L),W=Pe(_,L);P.push({name:F,pixelType:U,pLinear:G,xSampling:z,ySampling:W})}return L.value+=1,P}function xe(_,R){const L=Ye(_,R),v=Ye(_,R),I=Ye(_,R),P=Ye(_,R),F=Ye(_,R),U=Ye(_,R),G=Ye(_,R),z=Ye(_,R);return{redX:L,redY:v,greenX:I,greenY:P,blueX:F,blueY:U,whiteX:G,whiteY:z}}function $e(_,R){const L=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],v=Xe(_,R);return L[v]}function vt(_,R){const L=Pe(_,R),v=Pe(_,R),I=Pe(_,R),P=Pe(_,R);return{xMin:L,yMin:v,xMax:I,yMax:P}}function Rt(_,R){const L=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],v=Xe(_,R);return L[v]}function lt(_,R){const L=["ENVMAP_LATLONG","ENVMAP_CUBE"],v=Xe(_,R);return L[v]}function Ot(_,R){const L=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],v=["ROUND_DOWN","ROUND_UP"],I=Ue(_,R),P=Ue(_,R),F=Xe(_,R);return{xSize:I,ySize:P,levelMode:L[F&15],roundingMode:v[F>>4]}}function tn(_,R){const L=Ye(_,R),v=Ye(_,R);return[L,v]}function vo(_,R){const L=Ye(_,R),v=Ye(_,R),I=Ye(_,R);return[L,v,I]}function To(_,R,L,v,I){if(v==="string"||v==="stringvector"||v==="iccProfile")return ze(R,L,I);if(v==="chlist")return ye(_,R,L,I);if(v==="chromaticities")return xe(_,L);if(v==="compression")return $e(_,L);if(v==="box2i")return vt(_,L);if(v==="envmap")return lt(_,L);if(v==="tiledesc")return Ot(_,L);if(v==="lineOrder")return Rt(_,L);if(v==="float")return Ye(_,L);if(v==="v2f")return tn(_,L);if(v==="v3f")return vo(_,L);if(v==="int")return Pe(_,L);if(v==="rational")return de(_,L);if(v==="timecode")return Ee(_,L);if(v==="preview")return L.value+=I,"skipped";L.value+=I}function pn(_,R){const L=Math.log2(_);return R=="ROUND_DOWN"?Math.floor(L):Math.ceil(L)}function Xi(_,R,L){let v=0;switch(_.levelMode){case"ONE_LEVEL":v=1;break;case"MIPMAP_LEVELS":v=pn(Math.max(R,L),_.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return v}function Yi(_,R,L,v){const I=new Array(_);for(let P=0;P<_;P++){const F=1<<P;let U=R/F|0;v=="ROUND_UP"&&U*F<R&&(U+=1);const G=Math.max(U,1);I[P]=(G+L-1)/L|0}return I}function So(){const _=this,R=_.offset,L={value:0};for(let v=0;v<_.tileCount;v++){const I=Pe(_.viewer,R),P=Pe(_.viewer,R);R.value+=8,_.size=Ue(_.viewer,R);const F=I*_.blockWidth,U=P*_.blockHeight;_.columns=F+_.blockWidth>_.width?_.width-F:_.blockWidth,_.lines=U+_.blockHeight>_.height?_.height-U:_.blockHeight;const G=_.columns*_.totalBytes,W=_.size<_.lines*G?_.uncompress(_):Y(_);R.value+=_.size;for(let Z=0;Z<_.lines;Z++){const se=Z*_.columns*_.totalBytes;for(let ie=0;ie<_.inputChannels.length;ie++){const le=mn.channels[ie].name,ce=_.channelByteOffsets[le]*_.columns,he=_.decodeChannels[le];if(he===void 0)continue;L.value=se+ce;const Re=(_.height-(1+U+Z))*_.outLineWidth;for(let Oe=0;Oe<_.columns;Oe++){const Le=Re+(Oe+F)*_.outputChannels+he;_.byteArray[Le]=_.getter(W,L)}}}}}function ui(){const _=this,R=_.offset,L={value:0};for(let v=0;v<_.height/_.blockHeight;v++){const I=Pe(_.viewer,R)-mn.dataWindow.yMin;_.size=Ue(_.viewer,R),_.lines=I+_.blockHeight>_.height?_.height-I:_.blockHeight;const P=_.columns*_.totalBytes,U=_.size<_.lines*P?_.uncompress(_):Y(_);R.value+=_.size;for(let G=0;G<_.blockHeight;G++){const z=v*_.blockHeight,W=G+_.scanOrder(z);if(W>=_.height)continue;const Z=G*P,se=(_.height-1-W)*_.outLineWidth;for(let ie=0;ie<_.inputChannels.length;ie++){const le=mn.channels[ie].name,ce=_.channelByteOffsets[le]*_.columns,he=_.decodeChannels[le];if(he!==void 0){L.value=Z+ce;for(let Re=0;Re<_.columns;Re++){const Oe=se+Re*_.outputChannels+he;_.byteArray[Oe]=_.getter(U,L)}}}}}}function xo(_,R,L){const v={};if(_.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");v.version=_.getUint8(4);const I=_.getUint8(5);v.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},L.value=8;let P=!0;for(;P;){const F=Be(R,L);if(F==="")P=!1;else{const U=Be(R,L),G=Ue(_,L),z=To(_,R,L,U,G);z===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${U}'.`):v[F]=z}}if((I&-7)!=0)throw console.error("THREE.EXRHeader:",v),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return v}function ci(_,R,L,v,I){const P={size:0,viewer:R,array:L,offset:v,width:_.dataWindow.xMax-_.dataWindow.xMin+1,height:_.dataWindow.yMax-_.dataWindow.yMin+1,inputChannels:_.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Xn};switch(_.compression){case"NO_COMPRESSION":P.blockHeight=1,P.uncompress=Y;break;case"RLE_COMPRESSION":P.blockHeight=1,P.uncompress=re;break;case"ZIPS_COMPRESSION":P.blockHeight=1,P.uncompress=ue;break;case"ZIP_COMPRESSION":P.blockHeight=16,P.uncompress=ue;break;case"PIZ_COMPRESSION":P.blockHeight=32,P.uncompress=ne;break;case"PXR24_COMPRESSION":P.blockHeight=16,P.uncompress=be;break;case"DWAA_COMPRESSION":P.blockHeight=32,P.uncompress=Se;break;case"DWAB_COMPRESSION":P.blockHeight=256,P.uncompress=Se;break;default:throw new Error("EXRLoader.parse: "+_.compression+" is unsupported")}const F={};for(const W of _.channels)switch(W.name){case"Y":case"R":case"G":case"B":case"A":F[W.name]=!0,P.type=W.pixelType}let U=!1;if(F.R&&F.G&&F.B)U=!F.A,P.outputChannels=4,P.decodeChannels={R:0,G:1,B:2,A:3};else if(F.Y)P.outputChannels=1,P.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(P.type==1)switch(I){case Kt:P.getter=ae;break;case zt:P.getter=Q;break}else if(P.type==2)switch(I){case Kt:P.getter=Ye;break;case zt:P.getter=H}else throw new Error("EXRLoader.parse: unsupported pixelType "+P.type+" for "+_.compression+".");P.columns=P.width;const G=P.width*P.height*P.outputChannels;switch(I){case Kt:P.byteArray=new Float32Array(G),U&&P.byteArray.fill(1,0,G);break;case zt:P.byteArray=new Uint16Array(G),U&&P.byteArray.fill(15360,0,G);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let z=0;for(const W of _.channels)P.decodeChannels[W.name]!==void 0&&(P.channelByteOffsets[W.name]=z),z+=W.pixelType*2;if(P.totalBytes=z,P.outLineWidth=P.width*P.outputChannels,_.lineOrder==="INCREASING_Y"?P.scanOrder=W=>W:P.scanOrder=W=>P.height-1-W,P.outputChannels==4?(P.format=Zt,P.colorSpace=Xn):(P.format=ga,P.colorSpace=En),_.spec.singleTile){P.blockHeight=_.tiles.ySize,P.blockWidth=_.tiles.xSize;const W=Xi(_.tiles,P.width,P.height),Z=Yi(W,P.width,_.tiles.xSize,_.tiles.roundingMode),se=Yi(W,P.height,_.tiles.ySize,_.tiles.roundingMode);P.tileCount=Z[0]*se[0];for(let ie=0;ie<W;ie++)for(let le=0;le<se[ie];le++)for(let ce=0;ce<Z[ie];ce++)ke(R,v);P.decode=So.bind(P)}else{P.blockWidth=P.width;const W=Math.ceil(P.height/P.blockHeight);for(let Z=0;Z<W;Z++)ke(R,v);P.decode=ui.bind(P)}return P}const $i={value:0},Ji=new DataView(e),Tr=new Uint8Array(e),mn=xo(Ji,e,$i),Un=ci(mn,Ji,Tr,$i,this.type);return Un.decode(),{header:mn,width:Un.width,height:Un.height,data:Un.byteArray,format:Un.format,colorSpace:Un.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,o){function r(l,u){l.colorSpace=u.colorSpace,l.minFilter=Lt,l.magFilter=Lt,l.generateMipmaps=!1,l.flipY=!1,t&&t(l,u)}return super.load(e,r,i,o)}}const or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class _o{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rR=new nf(-1,1,1,-1,0,1);class sR extends bn{constructor(){super(),this.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new en([0,2,0,0,2,0],2))}}const aR=new sR;class mf{constructor(e){this._mesh=new Qt(aR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class gf extends _o{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fr.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new mf(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Xu extends _o{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const o=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let l,u;this.inverse?(l=0,u=1):(l=1,u=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),r.buffers.stencil.setFunc(o.ALWAYS,l,4294967295),r.buffers.stencil.setClear(u),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(o.EQUAL,1,4294967295),r.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),r.buffers.stencil.setLocked(!0)}}class lR extends _o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class uR{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new qe);this._width=i.width,this._height=i.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gf(or),this.copyPass.material.blending=wn,this.clock=new ry}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let o=0,r=this.passes.length;o<r;o++){const l=this.passes[o];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),l.needsSwap){if(i){const u=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Xu!==void 0&&(l instanceof Xu?i=!0:l instanceof lR&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(i,o),this.renderTarget2.setSize(i,o);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cR extends _o{constructor(e,t,i=null,o=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=o,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(e,t,i){const o=e.autoClear;e.autoClear=!1;let r,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=o}}const fR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ki extends _o{constructor(e,t=1,i,o){super(),this.strength=t,this.radius=i,this.threshold=o,this.resolution=e!==void 0?new qe(e.x,e.y):new qe(256,256),this.clearColor=new ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,l,{type:zt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new un(r,l,{type:zt});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new un(r,l,{type:zt});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),l=Math.round(l/2)}const u=fR;this.highPassUniforms=fr.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new qe(1/r,1/l),r=Math.round(r/2),l=Math.round(l/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fr.clone(or.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,blending:ms,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ot,this._oldClearAlpha=1,this._basic=new ya,this._fsQuad=new mf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(i,o);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,o),this.renderTargetsVertical[r].setSize(i,o),this.separableBlurMaterials[r].uniforms.invSize.value=new qe(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2)}render(e,t,i,o,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[c].uniforms.direction.value=ki.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ki.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=l}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new qe(.5,.5)},direction:{value:new qe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ki.BlurDirectionX=new qe(1,0);ki.BlurDirectionY=new qe(0,1);const dR={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new qe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/const hR=`precision highp float;

in vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,pR=`precision highp float;

out vec4 fragmentColor;

uniform vec2 resolution;
uniform float rand;

void main() {
  float aspectRatio = resolution.x / resolution.y; 
  vec2 vUv = gl_FragCoord.xy / resolution;
  float noise = (fract(sin(dot(vUv, vec2(12.9898 + rand,78.233)*2.0)) * 43758.5453));

  vUv -= .5;
  vUv.x *= aspectRatio;

  float factor = 4.;
  float d = factor * length(vUv);
  vec3 from = vec3(3.) / 255.;
  vec3 to = vec3(16., 12., 20.) / 2550.;

  fragmentColor = vec4(mix(from, to, d) + .005 * noise, 1.);
}
`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/const mR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
  varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

uniform float time;

uniform vec4 inputData;
uniform vec4 outputData;

vec3 calc( vec3 pos ) {

  vec3 dir = normalize( pos );
  vec3 p = dir + vec3( time, 0., 0. );
  return pos +
    1. * inputData.x * inputData.y * dir * (.5 + .5 * sin(inputData.z * pos.x + time)) +
    1. * outputData.x * outputData.y * dir * (.5 + .5 * sin(outputData.z * pos.y + time))
  ;
}

vec3 spherical( float r, float theta, float phi ) {
  return r * vec3(
    cos( theta ) * cos( phi ),
    sin( theta ) * cos( phi ),
    sin( phi )
  );
}

void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>

  float inc = 0.001;

  float r = length( position );
  float theta = ( uv.x + 0.5 ) * 2. * PI;
  float phi = -( uv.y + 0.5 ) * PI;

  vec3 np = calc( spherical( r, theta, phi )  );

  vec3 tangent = normalize( calc( spherical( r, theta + inc, phi ) ) - np );
  vec3 bitangent = normalize( calc( spherical( r, theta, phi + inc ) ) - np );
  transformedNormal = -normalMatrix * normalize( cross( tangent, bitangent ) );

  vNormal = normalize( transformedNormal );

  transformed = np;

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
  #ifdef USE_TRANSMISSION
    vWorldPosition = worldPosition.xyz;
  #endif
}`;var gR=Ju('<canvas class="svelte-8eyrkw"></canvas>');function _R(n,e){$u(e,!1);var t=wa(e,"inputNode",8),i=wa(e,"outputNode",8),o=oi(),r=oi(),l=oi(),u,c,f,d,h=0,p=new X(0,0,0);Yu(()=>m());const m=()=>{const T=new qx;T.background=new ot(1051668),c=new Qt(new dr(10,5),new Jx({uniforms:{resolution:{value:new qe(1,1)},rand:{value:0}},vertexShader:hR,fragmentShader:pR,glslVersion:ea})),c.material.side=Bt,T.add(c),u=new $t(75,window.innerWidth/window.innerHeight,.1,1e3),u.position.set(2,-2,5);const g=new HA({canvas:ct(o),antialias:!1});g.setSize(window.innerWidth,window.innerHeight),g.setPixelRatio(window.devicePixelRatio/1);const w=new dr(1,10);new oR().load("piz_compressed.exr",E=>{E.mapping=ar;const y=A.fromEquirectangular(E);M.envMap=y.texture,d.visible=!0});const A=new na(g);A.compileEquirectangularShader();const M=new Kx({color:16,metalness:.5,roughness:.1,emissive:16,emissiveIntensity:1.5});M.onBeforeCompile=E=>{E.uniforms.time={value:0},E.uniforms.inputData={value:new Tt},E.uniforms.outputData={value:new Tt},M.userData.shader=E,E.vertexShader=mR},d=new Qt(w,M),T.add(d),d.visible=!1;const B=new cR(T,u),b=new ki(new qe(window.innerWidth,window.innerHeight),5,.5,0),N=new gf(dR);f=new uR(g),f.addPass(B),f.addPass(b);const V=()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix();const E=g.getPixelRatio(),y=window.innerWidth,k=window.innerHeight;c.material.uniforms.resolution.value.set(y*E,k*E),g.setSize(y,k),f.setSize(y,k),N.material.uniforms.resolution.value.set(1/(y*E),1/(k*E))};window.addEventListener("resize",V),V(),S()},S=()=>{if(requestAnimationFrame(S),!ct(r)||!ct(l)){f&&f.render();return}ct(r).update(),ct(l).update();const T=performance.now(),g=(T-h)/(1e3/60);h=T;const w=c.material,A=d.material;if(w.uniforms.rand.value=Math.random()*1e4,A.userData.shader){d.scale.setScalar(1+.2*ct(l).data[1]/255);const M=.001;p.x+=g*M*.5*ct(l).data[1]/255,p.z+=g*M*.5*ct(r).data[1]/255,p.y+=g*M*.25*ct(r).data[2]/255,p.y+=g*M*.25*ct(l).data[2]/255;const B=new cn(p.x,p.y,p.z),b=new Wi().setFromEuler(B),N=new X(0,0,5);N.applyQuaternion(b),u.position.copy(N),u.lookAt(d.position),A.userData.shader.uniforms.time.value+=g*.1*ct(l).data[0]/255,A.userData.shader.uniforms.inputData.value.set(1*ct(r).data[0]/255,.1*ct(r).data[1]/255,10*ct(r).data[2]/255,0),A.userData.shader.uniforms.outputData.value.set(2*ct(l).data[0]/255,.1*ct(l).data[1]/255,10*ct(l).data[2]/255,0)}f.render()};Aa(()=>(Ra(t()),Co),()=>{t()&&Gn(r,new Co(t()))}),Aa(()=>(Ra(i()),Co),()=>{i()&&Gn(l,new Co(i()))}),vf(),Qu();var x=gR();Sf(x,T=>Gn(o,T),()=>ct(o)),Ku(n,x),Zu()}var vR=Ju('<div><div class="controls svelte-1uha8ag"><button id="resetButton" aria-label="Reset Session" class="svelte-1uha8ag"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffffff"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg></button> <button id="startButton" aria-label="Start Recording" class="svelte-1uha8ag"><svg viewBox="0 0 100 100" width="32px" height="32px" fill="#c80000" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></button> <button id="stopButton" aria-label="Stop Recording" class="svelte-1uha8ag"><svg viewBox="0 0 100 100" width="32px" height="32px" fill="#000000" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="100" rx="15"></rect></svg></button></div> <div id="status" class="svelte-1uha8ag"> </div> <!></div>');function CR(n,e){$u(e,!1);var t=oi(!1),i=oi(""),o,r,l,u,c=oi(),f=oi(),d=0,h,p,m,S=new Set;Yu(()=>{l=new(window.AudioContext||window.webkitAudioContext)({sampleRate:16e3}),u=new(window.AudioContext||window.webkitAudioContext)({sampleRate:24e3}),Gn(c,l.createGain()),Gn(f,u.createGain()),T()});const x=()=>{d=u.currentTime},T=async()=>{x(),o=new xS({apiKey:"AIzaSyAugytjnDjFQ10XjmH2Sy-UPOUARWPL9PM"}),ct(f).connect(u.destination),g()},g=async()=>{const oe="gemini-2.5-flash-preview-native-audio-dialog";try{r=await o.live.connect({model:oe,callbacks:{onopen:()=>{w("Opened")},onmessage:async J=>{var ge,ve,Ie,Ve;const fe=(Ie=(ve=(ge=J.serverContent)==null?void 0:ge.modelTurn)==null?void 0:ve.parts[0])==null?void 0:Ie.inlineData;if(fe){d=Math.max(d,u.currentTime);const We=await CS(MS(fe.data),u,24e3,1),ee=u.createBufferSource();ee.buffer=We,ee.connect(ct(f)),ee.addEventListener("ended",()=>{S.delete(ee)}),ee.start(d),d=d+We.duration,S.add(ee)}if((Ve=J.serverContent)==null?void 0:Ve.interrupted){for(const We of S.values())We.stop(),S.delete(We);d=0}},onerror:J=>{A(J.message)},onclose:J=>{w("Close:"+J.reason)}},config:{responseModalities:[ro.AUDIO],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:"Orus"}}}}})}catch(J){console.error(J)}},w=oe=>{},A=oe=>{Gn(i,oe)},M=async()=>{if(!ct(t)){l.resume();try{h=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1}),w("Microphone access granted. Starting capture..."),p=l.createMediaStreamSource(h),p.connect(ct(c)),await l.audioWorklet.addModule("audio-processor.js"),m=new AudioWorkletNode(l,"audio-processor"),m.port.onmessage=oe=>{if(!ct(t))return;const J=oe.data;r.sendRealtimeInput({media:ES(J)})},p.connect(m),m.connect(l.destination),Gn(t,!0),w("🔴 Recording... Capturing PCM chunks.")}catch(oe){console.error("Error starting recording:",oe),w(`Error: ${oe.message}`),B()}}},B=()=>{!ct(t)&&!h&&!l||(Gn(t,!1),m&&p&&l&&(m.disconnect(),p.disconnect()),m=null,p=null,h&&(h.getTracks().forEach(oe=>oe.stop()),h=null))},b=()=>{r==null||r.close(),g()};Qu();var N=vR(),V=yr(N),E=yr(V),y=yo(E,2),k=yo(y,2);Mr(V);var q=yo(V,2),$=yr(q,!0);Mr(q);var te=yo(q,2);_R(te,{get inputNode(){return ct(c)},get outputNode(){return ct(f)}}),Mr(N),Tf(()=>{E.disabled=ct(t),y.disabled=ct(t),k.disabled=!ct(t),_f($,ct(i))}),xr("click",E,b),xr("click",y,M),xr("click",k,B),Ku(n,N),Zu()}export{CR as component};
