"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[7688],{7688:(t,e,o)=>{o.d(e,{OutOfCanvasUpdater:()=>i});const s=(t,e)=>t.default===e||t.bottom===e||t.left===e||t.right===e||t.top===e;class i{constructor(t){this._updateOutMode=async(t,e,o,s)=>{for(const i of this.updaters)await i.update(t,s,e,o)},this.container=t,this.updaters=[]}async init(t){this.updaters=[];const e=t.options.move.outModes;if(s(e,"bounce")){const{BounceOutMode:t}=await o.e(5411).then(o.bind(o,5411));this.updaters.push(new t(this.container))}else if(s(e,"out")){const{OutOutMode:t}=await o.e(7885).then(o.bind(o,7885));this.updaters.push(new t(this.container))}else if(s(e,"destroy")){const{DestroyOutMode:t}=await o.e(683).then(o.bind(o,683));this.updaters.push(new t(this.container))}else if(s(e,"none")){const{NoneOutMode:t}=await o.e(1313).then(o.bind(o,1313));this.updaters.push(new t(this.container))}}isEnabled(t){return!t.destroyed&&!t.spawning}async update(t,e){var o,s,i,n;const a=t.options.move.outModes;await this._updateOutMode(t,e,null!==(o=a.bottom)&&void 0!==o?o:a.default,"bottom"),await this._updateOutMode(t,e,null!==(s=a.left)&&void 0!==s?s:a.default,"left"),await this._updateOutMode(t,e,null!==(i=a.right)&&void 0!==i?i:a.default,"right"),await this._updateOutMode(t,e,null!==(n=a.top)&&void 0!==n?n:a.default,"top")}}}}]);
//# sourceMappingURL=7688.4287dcc0.chunk.js.map