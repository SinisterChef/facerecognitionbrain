"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[7728],{7728:(t,i,n)=>{n.d(i,{ParticlesLighter:()=>e});var o=n(4409),a=n(2557);class e extends o.U4{constructor(t){super(t)}clear(){}init(){}async interact(t){const i=this.container,n=i.actualOptions,o=i.interactivity;if(!n.interactivity.events.onHover.enable||"pointermove"!==o.status)return;const e=o.mouse.position;e&&(i.canvas.draw((n=>{(0,a.No)(i,n,t,e)})),await Promise.resolve())}isEnabled(t){var i;const n=this.container,e=null!==(i=t.interactivity)&&void 0!==i?i:n.actualOptions.interactivity,s=n.interactivity.mouse,r=e.events;if(!r.onHover.enable||!s.position)return!1;const c=(0,o.hn)(a.EF,r.onHover.mode);if(c&&e.modes.light){const i=e.modes.light.shadow;t.lightShadow=(0,o.BN)(i.color)}return c}reset(){}}},2557:(t,i,n)=>{n.d(i,{EF:()=>l,No:()=>h,tM:()=>d});var o=n(4409);const a={max:1,min:0},e=.5*Math.PI,s=2*Math.PI,r=.25*Math.PI,c=0,l="light";function d(t,i,n){var e;const r=null===(e=t.actualOptions.interactivity.modes.light)||void 0===e?void 0:e.area;if(!r)return;i.beginPath(),i.arc(n.x,n.y,r.radius,c,s);const l=i.createRadialGradient(n.x,n.y,c,n.x,n.y,r.radius),d=t.canvas.mouseLight;null!==d&&void 0!==d&&d.start&&d.stop&&(l.addColorStop(a.min,(0,o.xx)(d.start)),l.addColorStop(a.max,(0,o.xx)(d.stop)),i.fillStyle=l,i.fill())}function h(t,i,n,a){var c;const l=n.getPosition(),d=null===(c=t.actualOptions.interactivity.modes.light)||void 0===c?void 0:c.shadow;if(!d)return;const h=n.lightShadow;if(!h)return;const u=n.getRadius(),v=n.sides,y=s/v,x=-n.rotation+r,f=[];for(let o=0;o<v;o++)f.push({x:l.x+u*Math.sin(x+y*o)*1,y:l.y+u*Math.cos(x+y*o)*1});const g=[],p=d.length;for(const o of f){const t=Math.atan2(a.y-o.y,a.x-o.x),i={x:o.x+p*Math.sin(-t-e),y:o.y+p*Math.cos(-t-e)};g.push({end:i,start:o})}const m=(0,o.xx)(h);for(let o=g.length-1,e=0;o>=0;e=o--)i.beginPath(),i.moveTo(g[o].start.x,g[o].start.y),i.lineTo(g[e].start.x,g[e].start.y),i.lineTo(g[e].end.x,g[e].end.y),i.lineTo(g[o].end.x,g[o].end.y),i.fillStyle=m,i.fill()}}}]);
//# sourceMappingURL=7728.6c018b6a.chunk.js.map