"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[3815],{3815:(i,e,n)=>{n.d(e,{MotionPlugin:()=>s});class t{constructor(){this.factor=4,this.value=!0}load(i){i&&(void 0!==i.factor&&(this.factor=i.factor),void 0!==i.value&&(this.value=i.value))}}class o{constructor(){this.disable=!1,this.reduce=new t}load(i){i&&(void 0!==i.disable&&(this.disable=i.disable),this.reduce.load(i.reduce))}}class s{constructor(i){this.id="motion",this._engine=i}async getPlugin(i){const{MotionInstance:e}=await n.e(4488).then(n.bind(n,4488));return new e(i,this._engine)}loadOptions(i,e){var n;if(!this.needsPlugin())return;let t=i.motion;null!==(n=t)&&void 0!==n&&n.load||(i.motion=t=new o),t.load(null===e||void 0===e?void 0:e.motion)}needsPlugin(){return!0}}}}]);
//# sourceMappingURL=3815.2437f4c4.chunk.js.map