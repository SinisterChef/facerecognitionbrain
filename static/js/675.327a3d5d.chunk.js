"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[675],{675:(e,l,n)=>{n.d(l,{initParticle:()=>r,updateRoll:()=>i});var a=n(4409);const o=2*Math.PI,t=360;function r(e){const l=e.options.roll;if(null!==l&&void 0!==l&&l.enable)if(e.roll={enable:l.enable,horizontal:"horizontal"===l.mode||"both"===l.mode,vertical:"vertical"===l.mode||"both"===l.mode,angle:(0,a.G0)()*o,speed:(0,a.VG)(l.speed)/t},l.backColor)e.backColor=(0,a.R5)(l.backColor);else if(l.darken.enable&&l.enlighten.enable){const n=(0,a.G0)()>=a.N3?"darken":"enlighten";e.roll.alter={type:n,value:(0,a.VG)("darken"===n?l.darken.value:l.enlighten.value)}}else l.darken.enable?e.roll.alter={type:"darken",value:(0,a.VG)(l.darken.value)}:l.enlighten.enable&&(e.roll.alter={type:"enlighten",value:(0,a.VG)(l.enlighten.value)});else e.roll={enable:!1,horizontal:!1,vertical:!1,angle:0,speed:0}}function i(e,l){const n=e.options.roll,a=e.roll;if(!a||null===n||void 0===n||!n.enable)return;const t=a.speed*l.factor,r=o;a.angle+=t,a.angle>r&&(a.angle-=r)}}}]);
//# sourceMappingURL=675.327a3d5d.chunk.js.map