"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[5513],{5513:(e,s,t)=>{t.d(s,{Repulser:()=>r});var i=t(4409);class o extends i.PV{constructor(){super(),this.enabled=!1,this.distance=1,this.duration=1,this.factor=1,this.speed=1}load(e){super.load(e),e&&(void 0!==e.enabled&&(this.enabled=e.enabled),void 0!==e.distance&&(this.distance=(0,i.DT)(e.distance)),void 0!==e.duration&&(this.duration=(0,i.DT)(e.duration)),void 0!==e.factor&&(this.factor=(0,i.DT)(e.factor)),void 0!==e.speed&&(this.speed=(0,i.DT)(e.speed)))}}class r extends i.U4{constructor(e){super(e)}clear(){}init(){}async interact(e){const s=this.container;if(!e.repulse){const t=e.options.repulse;if(!t)return;e.repulse={distance:(0,i.VG)(t.distance)*s.retina.pixelRatio,speed:(0,i.VG)(t.speed),factor:(0,i.VG)(t.factor)}}const t=e.getPosition(),o=s.particles.quadTree.queryCircle(t,e.repulse.distance);for(const r of o){if(e===r||r.destroyed)continue;const s=r.getPosition(),{dx:o,dy:n,distance:a}=(0,i.vr)(s,t),d=e.repulse.speed*e.repulse.factor;if(a>0){const s=(0,i.qE)((1-Math.pow(a/e.repulse.distance,2))*d,0,d),t=i.Mi.create(o/a*s,n/a*s);r.position.addTo(t)}else{const e=i.Mi.create(d,d);r.position.addTo(e)}}await Promise.resolve()}isEnabled(e){var s,t;return null!==(s=null===(t=e.options.repulse)||void 0===t?void 0:t.enabled)&&void 0!==s&&s}loadParticlesOptions(e){e.repulse||(e.repulse=new o);for(var s=arguments.length,t=new Array(s>1?s-1:0),i=1;i<s;i++)t[i-1]=arguments[i];for(const o of t)e.repulse.load(null===o||void 0===o?void 0:o.repulse)}reset(){}}}}]);
//# sourceMappingURL=5513.071f4c96.chunk.js.map