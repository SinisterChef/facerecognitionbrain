"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[6805],{6805:(e,n,o)=>{o.d(n,{Collider:()=>t});var i=o(4409);async function s(e,n,i,s){switch(e.options.collisions.mode){case"absorb":{const{absorb:t}=await o.e(9824).then(o.bind(o,9824));t(e,n,i,s);break}case"bounce":{const{bounce:i}=await o.e(4845).then(o.bind(o,4845));i(e,n);break}case"destroy":{const{destroy:i}=await o.e(1059).then(o.bind(o,1059));i(e,n);break}}}class t extends i.U4{constructor(e){super(e)}clear(){}init(){}async interact(e,n){if(e.destroyed||e.spawning)return;const o=this.container,t=e.getPosition(),a=e.getRadius(),c=o.particles.quadTree.queryCircle(t,2*a);for(const r of c){if(e===r||!r.options.collisions.enable||e.options.collisions.mode!==r.options.collisions.mode||r.destroyed||r.spawning)continue;const c=r.getPosition(),l=r.getRadius();if(Math.abs(Math.round(t.z)-Math.round(c.z))>a+l)continue;(0,i.Yf)(t,c)>a+l||await s(e,r,n,o.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=6805.35ccbebb.chunk.js.map