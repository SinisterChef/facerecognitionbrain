"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[6181],{6181:(e,n,a)=>{a.d(n,{updateWobble:()=>c});var o=a(4409);const t=0,i=2*Math.PI,l=60;function c(e,n){var a;const{wobble:c}=e.options,{wobble:b}=e;if(null===c||void 0===c||!c.enable||!b)return;const s=b.angleSpeed*n.factor,r=b.moveSpeed*n.factor*((null!==(a=e.retina.wobbleDistance)&&void 0!==a?a:t)*n.factor)/(o.Xu/l),u=i,{position:f}=e;b.angle+=s,b.angle>u&&(b.angle-=u),f.x+=r*Math.cos(b.angle),f.y+=r*Math.abs(Math.sin(b.angle))}}}]);
//# sourceMappingURL=6181.a3fc4c2b.chunk.js.map