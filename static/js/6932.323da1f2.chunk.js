"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[6932],{6932:(s,e,t)=>{t.d(e,{SoundsPlugin:()=>w});var i=t(4409);class n{constructor(){this.loop=!1,this.source=""}load(s){void 0!==s&&((0,i.Gv)(s)?(void 0!==s.loop&&(this.loop=s.loop),void 0!==s.source&&(this.source=s.source)):this.source=s)}}class o{constructor(){this.duration=500,this.value=[]}load(s){s&&(void 0!==s.duration&&(this.duration=s.duration),void 0!==s.value&&(this.value=s.value))}}class l{constructor(){this.loop=!1,this.melodies=[],this.notes=[]}load(s){void 0!==s&&(void 0!==s.loop&&(this.loop=s.loop),void 0!==s.melodies&&(this.melodies=s.melodies.map((s=>{const e=new l;return e.load(s),e}))),void 0!==s.notes&&(this.notes=s.notes.map((s=>{const e=new o;return e.load(s),e}))))}}class c{constructor(){this.event=[],this.notes=[]}load(s){if(s&&(void 0!==s.event&&(this.event=s.event),void 0!==s.audio&&((0,i.cy)(s.audio)?this.audio=s.audio.map((s=>{const e=new n;return e.load(s),e})):(this.audio=new n,this.audio.load(s.audio))),void 0!==s.notes&&(this.notes=s.notes.map((s=>{const e=new o;return e.load(s),e}))),void 0!==s.melodies&&(this.melodies=s.melodies.map((s=>{const e=new l;return e.load(s),e}))),s.filter))if((0,i.Kg)(s.filter)){const e=window[s.filter];(0,i.Tn)(e)&&(this.filter=e)}else this.filter=s.filter}}class v{constructor(){this.width=24,this.height=24,this.style=""}load(s){s&&(void 0!==s.path&&(this.path=s.path),void 0!==s.svg&&(this.svg=s.svg),void 0!==s.width&&(this.width=s.width),void 0!==s.height&&(this.height=s.height))}}class a{constructor(){this.mute=new v,this.unmute=new v,this.volumeDown=new v,this.volumeUp=new v,this.enable=!1,this.mute.svg='<?xml version="1.0"?>\n<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"\n    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Layer_1">\n        <path fill="#fff" d="M19.707,5.293c-0.391-0.391-1.023-0.391-1.414,0l-1.551,1.551c-0.345-0.688-0.987-1.02-1.604-1.02c-0.449,0-0.905,0.152-1.356,0.453l-2.672,1.781C10.357,8.561,8.904,9,8,9c-1.654,0-3,1.346-3,3v2c0,1.237,0.754,2.302,1.826,2.76l-1.533,1.533c-0.391,0.391-0.391,1.023,0,1.414C5.488,19.902,5.744,20,6,20s0.512-0.098,0.707-0.293l2.527-2.527c0.697,0.174,1.416,0.455,1.875,0.762l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C16.035,20.176,17,19.495,17,18V9.414l2.707-2.707C20.098,6.316,20.098,5.684,19.707,5.293z M14.891,7.941c0.038-0.025,0.073-0.046,0.104-0.062C14.998,7.914,15,7.954,15,8v1.293l-2,2V9.202L14.891,7.941z M7,12c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146v2.439l-2.83,2.83C8.757,15.046,8.356,15,8,15c-0.552,0-1-0.448-1-1V12z M10.301,15.406L12,13.707v2.439C11.519,15.859,10.925,15.604,10.301,15.406z M14.994,18.12c-0.03-0.016-0.065-0.036-0.104-0.062L13,16.798v-4.091l2-2V18C15,18.046,14.998,18.086,14.994,18.12z"/>\n    </g>\n</svg>',this.unmute.svg='<?xml version="1.0"?>\n<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"\n    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Layer_1">\n        <path fill="#fff" d="M17.138,5.824c-0.449,0-0.905,0.152-1.356,0.453l-2.672,1.781C12.357,8.561,10.904,9,10,9c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3c0.904,0,2.357,0.439,3.109,0.941l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C18.035,20.176,19,19.495,19,18V8C19,6.505,18.035,5.824,17.138,5.824z M14,16.146C12.907,15.495,11.211,15,10,15c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146V16.146z M17,18c0,0.046-0.002,0.086-0.006,0.12c-0.03-0.016-0.065-0.036-0.104-0.062L15,16.798V9.202l1.891-1.261c0.038-0.025,0.073-0.046,0.104-0.062C16.998,7.914,17,7.954,17,8V18z"/>\n    </g>\n</svg>',this.volumeDown.svg='<?xml version="1.0"?>\n<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"\n    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Layer_1">\n        <path fill="#fff" d="M15.138,5.824c-0.449,0-0.905,0.152-1.356,0.453l-2.672,1.781C10.357,8.561,8.904,9,8,9c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3c0.904,0,2.357,0.439,3.109,0.941l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C16.035,20.176,17,19.495,17,18V8C17,6.505,16.035,5.824,15.138,5.824z M8,15c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146v6.293C10.907,15.495,9.211,15,8,15z M15,18c0,0.046-0.002,0.086-0.006,0.12c-0.03-0.016-0.065-0.036-0.104-0.062L13,16.798V9.202l1.891-1.261c0.038-0.025,0.073-0.046,0.104-0.062C14.998,7.914,15,7.954,15,8V18z"/>\n        <path fill="#fff" d="M18.292,10.294c-0.39,0.391-0.39,1.023,0.002,1.414c0.345,0.345,0.535,0.803,0.535,1.291c0,0.489-0.19,0.948-0.536,1.294c-0.391,0.39-0.391,1.023,0,1.414C18.488,15.902,18.744,16,19,16s0.512-0.098,0.707-0.293c0.724-0.723,1.122-1.685,1.122-2.708s-0.398-1.984-1.123-2.707C19.317,9.903,18.683,9.901,18.292,10.294z"/>\n    </g>\n</svg>',this.volumeUp.svg='<?xml version="1.0"?>\n<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px"\n    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Layer_1">\n        <path fill="#fff" d="M16.706,10.292c-0.389-0.389-1.023-0.391-1.414,0.002c-0.39,0.391-0.39,1.023,0.002,1.414c0.345,0.345,0.535,0.803,0.535,1.291c0,0.489-0.19,0.948-0.536,1.294c-0.391,0.39-0.391,1.023,0,1.414C15.488,15.902,15.744,16,16,16s0.512-0.098,0.707-0.293c0.724-0.723,1.122-1.685,1.122-2.708S17.431,11.015,16.706,10.292z"/>\n        <path fill="#fff" d="M18.706,8.292c-0.391-0.389-1.023-0.39-1.414,0.002c-0.39,0.391-0.39,1.024,0.002,1.414c0.879,0.877,1.363,2.044,1.364,3.287c0.001,1.246-0.484,2.417-1.365,3.298c-0.391,0.391-0.391,1.023,0,1.414C17.488,17.902,17.744,18,18,18s0.512-0.098,0.707-0.293c1.259-1.259,1.952-2.933,1.951-4.713C20.657,11.217,19.964,9.547,18.706,8.292z"/>\n        <path fill="#fff" d="M20.706,6.292c-0.391-0.389-1.023-0.39-1.414,0.002c-0.39,0.391-0.39,1.024,0.002,1.414c1.412,1.409,2.191,3.285,2.192,5.284c0.002,2.002-0.777,3.885-2.193,5.301c-0.391,0.391-0.391,1.023,0,1.414C19.488,19.902,19.744,20,20,20s0.512-0.098,0.707-0.293c1.794-1.794,2.781-4.18,2.779-6.717C23.485,10.457,22.497,8.078,20.706,6.292z"/>\n        <path fill="#fff" d="M12.138,5.824c-0.449,0-0.905,0.152-1.356,0.453L8.109,8.059C7.357,8.561,5.904,9,5,9c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3c0.904,0,2.357,0.439,3.109,0.941l2.672,1.781c0.451,0.301,0.907,0.453,1.356,0.453C13.035,20.176,14,19.495,14,18V8C14,6.505,13.035,5.824,12.138,5.824z M5,15c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1c1.211,0,2.907-0.495,4-1.146v6.293C7.907,15.495,6.211,15,5,15z M12,18c0,0.046-0.002,0.086-0.006,0.12c-0.03-0.016-0.065-0.036-0.104-0.062L10,16.798V9.202l1.891-1.261c0.038-0.025,0.073-0.046,0.104-0.062C11.998,7.914,12,7.954,12,8V18z"/>\n    </g>\n</svg>'}load(s){s&&(void 0!==s.enable&&(this.enable=s.enable),this.mute.load(s.mute),this.unmute.load(s.unmute),this.volumeDown.load(s.volumeDown),this.volumeUp.load(s.volumeUp))}}class d{constructor(){this.value=100,this.max=100,this.min=0,this.step=10}load(s){void 0!==s&&((0,i.Gv)(s)?(void 0!==s.max&&(this.max=s.max),void 0!==s.min&&(this.min=s.min),void 0!==s.step&&(this.step=s.step),void 0!==s.value&&(this.value=s.value)):this.value=s)}}class h{constructor(){this.autoPlay=!0,this.enable=!1,this.events=[],this.icons=new a,this.volume=new d}load(s){s&&(void 0!==s.autoPlay&&(this.autoPlay=s.autoPlay),void 0!==s.enable&&(this.enable=s.enable),void 0!==s.events&&(this.events=s.events.map((s=>{const e=new c;return e.load(s),e}))),this.icons.load(s.icons),void 0!==s.volume&&this.volume.load(s.volume))}}var r=t(4206);const u=()=>{removeEventListener(i.ms,u),removeEventListener(i.s7,u),(0,r.XK)()};class w{constructor(s){this.id="sounds",this._engine=s;const e={capture:!0,once:!0};addEventListener(i.ms,u,e),addEventListener(i.s7,u,e)}async getPlugin(s){const{SoundsInstance:e}=await t.e(4060).then(t.bind(t,4060));return new e(s,this._engine)}loadOptions(s,e){var t;if(!this.needsPlugin(s)&&!this.needsPlugin(e))return;let i=s.sounds;void 0===(null===(t=i)||void 0===t?void 0:t.load)&&(s.sounds=i=new h),i.load(null===e||void 0===e?void 0:e.sounds)}needsPlugin(s){var e,t;return null!==(e=null===s||void 0===s||null===(t=s.sounds)||void 0===t?void 0:t.enable)&&void 0!==e&&e}}},4206:(s,e,t)=>{t.d(e,{E3:()=>l,XK:()=>c,jE:()=>n});const i=new Map;function n(s){const e=/(([A-G]b?)(\d))|pause/i.exec(s);if(null===e||void 0===e||!e.length)return;const t=e[2]||e[0],n=i.get(t);return n?n[parseInt(e[3]||"0")]:void 0}i.set("C",[16.35,32.7,65.41,130.81,261.63,523.25,1046.5,2093,4186.01]),i.set("Db",[17.32,34.65,69.3,138.59,277.18,554.37,1108.73,2217.46,4434.92]),i.set("D",[18.35,36.71,73.42,146.83,293.66,587.33,1174.66,2349.32,4698.63]),i.set("Eb",[19.45,38.89,77.78,155.56,311.13,622.25,1244.51,2489.02,4978.03]),i.set("E",[20.6,41.2,82.41,164.81,329.63,659.25,1318.51,2637.02,5274.04]),i.set("F",[21.83,43.65,87.31,174.61,349.23,698.46,1396.91,2793.83,5587.65]),i.set("Gb",[23.12,46.25,92.5,185,369.99,739.99,1479.98,2959.96,5919.91]),i.set("G",[24.5,49,98,196,392,783.99,1567.98,3135.96,6271.93]),i.set("Ab",[25.96,51.91,103.83,207.65,415.3,830.61,1661.22,3322.44,6644.88]),i.set("A",[27.5,55,110,220,440,880,1760,3520,7040]),i.set("Bb",[29.14,58.27,116.54,233.08,466.16,932.33,1864.66,3729.31,7458.62]),i.set("B",[30.87,61.74,123.47,246.94,493.88,987.77,1975.53,3951.07,7902.13]),i.set("pause",[0]);let o=!0;const l=()=>o,c=()=>{o=!1}}}]);
//# sourceMappingURL=6932.323da1f2.chunk.js.map