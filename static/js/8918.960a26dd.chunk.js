"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[8918],{8918:(t,e,n)=>{n.d(e,{InfectionInstance:()=>a});var i=n(4409);class o{constructor(t){this._nextInfectionStage=t=>{const e=this._container.actualOptions.infection,{infection:n}=t;if(!e||!n)return;const i=e.stages.length;i<=0||void 0===n.stage||(n.time=0,i<=++n.stage&&(e.cure?(delete n.stage,delete n.time):(n.stage=0,n.time=0)))},this._container=t}startInfection(t,e){const n=this._container.actualOptions.infection,{infection:i}=t;if(!n||!i)return;e>n.stages.length||e<0||(i.delay=0,i.delayStage=e)}updateInfection(t,e){const n=this._container.actualOptions.infection,{infection:o}=t;if(!n||!o)return;const a=n.stages,c=a.length;if(void 0!==o.delay&&void 0!==o.delayStage){const t=o.delayStage;if(t>c||t<0)return;o.delay>=n.delay*i.Xu?(o.stage=t,o.time=0,delete o.delay,delete o.delayStage):o.delay+=e}else delete o.delay,delete o.delayStage;if(void 0!==o.stage&&void 0!==o.time){const n=a[o.stage];void 0!==n.duration&&n.duration>=0&&o.time>n.duration*i.Xu?this._nextInfectionStage(t):o.time+=e}else delete o.stage,delete o.time}updateInfectionStage(t,e){const n=this._container.actualOptions,{infection:i}=t;if(!n.infection||!i)return;e>n.infection.stages.length||e<0||void 0!==i.stage&&i.stage>e||(i.stage=e,i.time=0)}}class a{constructor(t){this._container=t,this._container.infecter=new o(this._container)}particleFillColor(t){const e=this._container.actualOptions;if(!t.infection||!e.infection)return;const n=t.infection.stage,i=e.infection.stages;return void 0!==n?i[n].color:void 0}particleStrokeColor(t){return this.particleFillColor(t)}particlesSetup(){const t=this._container.actualOptions;if(t.infection)for(let n=0;n<t.infection.infections;n++){var e;const t=this._container.particles.filter((t=>{const e=t;return e.infection||(e.infection={}),void 0===e.infection.stage})),n=(0,i.Vh)(t);null===(e=this._container.infecter)||void 0===e||e.startInfection(n,0)}}}}}]);
//# sourceMappingURL=8918.960a26dd.chunk.js.map