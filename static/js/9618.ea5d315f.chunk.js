"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[9618],{9618:(t,i,a)=>{a.d(i,{Attractor:()=>s});var e=a(4409);class n{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),void 0!==t.duration&&(this.duration=t.duration),void 0!==t.easing&&(this.easing=t.easing),void 0!==t.factor&&(this.factor=t.factor),void 0!==t.maxSpeed&&(this.maxSpeed=t.maxSpeed),void 0!==t.speed&&(this.speed=t.speed))}}const c="attract";class s extends e.sJ{constructor(t,i){super(i),this._engine=t,i.attract||(i.attract={particles:[]}),this.handleClickMode=t=>{const a=this.container.actualOptions.interactivity.modes.attract;if(a&&t===c){i.attract||(i.attract={particles:[]}),i.attract.clicking=!0,i.attract.count=0;for(const t of i.attract.particles)this.isEnabled(t)&&t.velocity.setTo(t.initialVelocity);i.attract.particles=[],i.attract.finish=!1,setTimeout((()=>{i.destroyed||(i.attract||(i.attract={particles:[]}),i.attract.clicking=!1)}),a.duration*e.Xu)}}}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.attract;i&&(t.retina.attractModeDistance=i.distance*t.retina.pixelRatio)}async interact(){const t=this.container,i=t.actualOptions,n=t.interactivity.status===e.Rb,s=i.interactivity.events,{enable:o,mode:r}=s.onHover,{enable:d,mode:l}=s.onClick;if(n&&o&&(0,e.hn)(c,r)){const{hoverAttract:t}=await a.e(8e3).then(a.bind(a,8e3));t(this.container,(t=>this.isEnabled(t)))}else if(d&&(0,e.hn)(c,l)){const{clickAttract:t}=await a.e(8e3).then(a.bind(a,8e3));t(this.container,(t=>this.isEnabled(t)))}}isEnabled(t){var i;const a=this.container,n=a.actualOptions,s=a.interactivity.mouse,o=(null!==(i=null===t||void 0===t?void 0:t.interactivity)&&void 0!==i?i:n.interactivity).events;if((!s.position||!o.onHover.enable)&&(!s.clickPosition||!o.onClick.enable))return!1;const r=o.onHover.mode,d=o.onClick.mode;return(0,e.hn)(c,r)||(0,e.hn)(c,d)}loadModeOptions(t){t.attract||(t.attract=new n);for(var i=arguments.length,a=new Array(i>1?i-1:0),e=1;e<i;e++)a[e-1]=arguments[e];for(const n of a)t.attract.load(null===n||void 0===n?void 0:n.attract)}reset(){}}}}]);
//# sourceMappingURL=9618.ea5d315f.chunk.js.map