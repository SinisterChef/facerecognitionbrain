"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[1313],{1313:(i,e,o)=>{o.d(e,{NoneOutMode:()=>n});var t=o(4409);class n{constructor(i){this.container=i,this.modes=["none"]}async update(i,e,o,n){var s;if(!this.modes.includes(n))return;if(null!==(s=i.options.move.distance.horizontal&&("left"===e||"right"===e))&&void 0!==s?s:i.options.move.distance.vertical&&("top"===e||"bottom"===e))return;const r=i.options.move.gravity,a=this.container,c=a.canvas.size,v=i.getRadius();if(r.enable){const o=i.position;(!r.inverse&&o.y>c.height+v&&"bottom"===e||r.inverse&&o.y<-v&&"top"===e)&&a.particles.remove(i)}else{if(i.velocity.y>0&&i.position.y<=c.height+v||i.velocity.y<0&&i.position.y>=-v||i.velocity.x>0&&i.position.x<=c.width+v||i.velocity.x<0&&i.position.x>=-v)return;(0,t.Tj)(i.position,a.canvas.size,t.Mi.origin,v,e)||a.particles.remove(i)}await Promise.resolve()}}}}]);
//# sourceMappingURL=1313.cc867dd9.chunk.js.map