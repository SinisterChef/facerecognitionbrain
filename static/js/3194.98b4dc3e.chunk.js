"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[3194],{8754:(a,e,t)=>{t.d(e,{TextDrawer:()=>s,u:()=>i});var n=t(4409);const i=["text","character","char","multiline-text"];class s{async draw(a){const{drawText:e}=await t.e(8987).then(t.bind(t,8987));e(a)}async init(a){const e=a.actualOptions;if(i.find((a=>(0,n.hn)(a,e.particles.shape.type)))){const a=i.map((a=>e.particles.shape.options[a])).find((a=>!!a)),t=[];(0,n.wJ)(a,(a=>{t.push((0,n.Al)(a.font,a.weight))})),await Promise.all(t)}}async particleInit(a,e){if(!e.shape||!i.includes(e.shape))return;const t=e.shapeData;if(void 0===t)return;const s=t.value;void 0!==s&&(e.text=(0,n.TA)(s,e.randomIndexData),await Promise.resolve())}}},3194:(a,e,t)=>{t.d(e,{loadTextShape:()=>i});var n=t(8754);async function i(a){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const{TextDrawer:i}=await Promise.resolve().then(t.bind(t,8754));await a.addShape(n.u,new i,e)}}}]);
//# sourceMappingURL=3194.98b4dc3e.chunk.js.map