"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[7149],{7149:(s,i,e)=>{e.d(i,{CircleWarp:()=>t});var n=e(4409);class t extends n.jl{constructor(s,i,e,n){super(s,i,e),this.canvasSize=n,this.canvasSize={...n}}contains(s){const{width:i,height:e}=this.canvasSize,{x:n,y:t}=s;return super.contains(s)||super.contains({x:n-i,y:t})||super.contains({x:n-i,y:t-e})||super.contains({x:n,y:t-e})}intersects(s){if(super.intersects(s))return!0;const i=s,e=s,t={x:s.position.x-this.canvasSize.width,y:s.position.y-this.canvasSize.height};if(void 0!==e.radius){const s=new n.jl(t.x,t.y,2*e.radius);return super.intersects(s)}if(void 0!==i.size){const s=new n.M_(t.x,t.y,2*i.size.width,2*i.size.height);return super.intersects(s)}return!1}}}}]);
//# sourceMappingURL=7149.8d62c8b5.chunk.js.map