"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[8e3],{8e3:(t,i,c)=>{c.d(i,{clickAttract:()=>s,hoverAttract:()=>u});var n=c(4409);const e=1,a=1,o=0;function r(t,i,c,o,r){const s=t.actualOptions.interactivity.modes.attract;if(!s)return;const u=t.particles.quadTree.query(o,r);for(const f of u){const{dx:t,dy:o,distance:r}=(0,n.vr)(f.position,i),u=s.speed*s.factor,l=(0,n.qE)((0,n.il)(s.easing)(a-r/c)*u,e,s.maxSpeed),p=n.Mi.create(r?t/r*l:u,r?o/r*l:u);f.position.subFrom(p)}}function s(t,i){t.attract||(t.attract={particles:[]});const{attract:c}=t;if(c.finish||(c.count||(c.count=0),c.count++,c.count===t.particles.count&&(c.finish=!0)),c.clicking){const c=t.interactivity.mouse.clickPosition,e=t.retina.attractModeDistance;if(!e||e<o||!c)return;r(t,c,e,new n.jl(c.x,c.y,e),(t=>i(t)))}else!1===c.clicking&&(c.particles=[])}function u(t,i){const c=t.interactivity.mouse.position,e=t.retina.attractModeDistance;!e||e<o||!c||r(t,c,e,new n.jl(c.x,c.y,e),(t=>i(t)))}}}]);
//# sourceMappingURL=8000.9c1500ce.chunk.js.map