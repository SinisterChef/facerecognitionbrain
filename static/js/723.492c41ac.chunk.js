"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[723],{723:(i,s,t)=>{t.d(s,{CanvasMaskPlugin:()=>d});class e{constructor(){this.color=!0,this.opacity=!1}load(i){i&&(void 0!==i.color&&(this.color=i.color),void 0!==i.opacity&&(this.opacity=i.opacity))}}var o=t(4409);class a{constructor(){this.filter=i=>i.a>0,this.offset=4}load(i){if(i){if(void 0!==i.filter)if((0,o.Kg)(i.filter)){if(Object.hasOwn(window,i.filter)){const s=window[i.filter];(0,o.Tn)(s)&&(this.filter=s)}}else this.filter=i.filter;void 0!==i.offset&&(this.offset=i.offset)}}}class n{constructor(){this.src=""}load(i){i&&void 0!==i.src&&(this.src=i.src)}}class l{constructor(){this.family="sans-serif",this.size=100}load(i){i&&(void 0!==i.family&&(this.family=i.family),void 0!==i.size&&(this.size=i.size),void 0!==i.style&&(this.style=i.style),void 0!==i.variant&&(this.variant=i.variant),void 0!==i.weight&&(this.weight=i.weight))}}class r{constructor(){this.separator="\n",this.spacing=10}load(i){i&&(void 0!==i.separator&&(this.separator=i.separator),void 0!==i.spacing&&(this.spacing=i.spacing))}}class c{constructor(){this.color="#000000",this.font=new l,this.lines=new r,this.text=""}load(i){i&&(void 0!==i.color&&(this.color=i.color),this.font.load(i.font),this.lines.load(i.lines),void 0!==i.text&&(this.text=i.text))}}class h{constructor(){this.enable=!1,this.override=new e,this.pixels=new a,this.position={x:50,y:50},this.scale=1}load(i){if(i){var s,t;if(void 0!==i.element&&i.element instanceof HTMLCanvasElement&&(this.element=i.element),void 0!==i.enable&&(this.enable=i.enable),i.image&&(this.image||(this.image=new n),this.image.load(i.image)),this.pixels.load(i.pixels),i.position)this.position={x:null!==(s=i.position.x)&&void 0!==s?s:this.position.x,y:null!==(t=i.position.y)&&void 0!==t?t:this.position.y};this.override.load(i.override),void 0!==i.scale&&(this.scale=i.scale),void 0!==i.selector&&(this.selector=i.selector),i.text&&(this.text||(this.text=new c),this.text.load(i.text))}}}class d{constructor(){this.id="canvasMask"}async getPlugin(i){const{CanvasMaskInstance:s}=await t.e(3427).then(t.bind(t,3427));return new s(i)}loadOptions(i,s){var t;if(!this.needsPlugin(i)&&!this.needsPlugin(s))return;let e=i.canvasMask;void 0===(null===(t=e)||void 0===t?void 0:t.load)&&(i.canvasMask=e=new h),e.load(null===s||void 0===s?void 0:s.canvasMask)}needsPlugin(i){var s,t;return null!==(s=null===i||void 0===i||null===(t=i.canvasMask)||void 0===t?void 0:t.enable)&&void 0!==s&&s}}}}]);
//# sourceMappingURL=723.492c41ac.chunk.js.map