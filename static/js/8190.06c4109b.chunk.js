"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[8190],{8190:(t,i,n)=>{n.d(i,{EmittersPathShapeGenerator:()=>x});var s=n(3532),o=n(4409);const e=.5;const h=.5;class c extends s.B{constructor(t,i,n,s){super(t,i,n,s);const e=document.createElement("canvas").getContext("2d");if(!e)throw new Error("".concat(o.dI," No 2d context available"));this.checkContext=e,this.points=s.points;const c=this.points,r=new Path2D,a=t.x-i.width*h,l=t.y-i.height*h;for(const[h,y]of c.entries()){const t={x:a+y.x*i.width/o.a5,y:l+y.y*i.height/o.a5};h?r.lineTo(t.x,t.y):r.moveTo(t.x,t.y)}const x=c[0];if(x){const t={x:a+x.x*i.width/o.a5,y:l+x.y*i.height/o.a5};r.lineTo(t.x,t.y)}this.path=r}async init(){}async randomPosition(){const t=this.checkContext,i=this.position,n=this.size,s=this.fill,h=this.path,c=s?function(t,i,n,s){let h=null;for(let c=0;c<100;c++){const c={x:n.x+(0,o.G0)()*s.width-s.width*e,y:n.y+(0,o.G0)()*s.height-s.height*e};if(t.isPointInPath(i,c.x,c.y)){h=c;break}}return h}(t,h,i,n):function(t,i,n,s){let h=null;for(let c=0;c<100;c++){const c={x:n.x+(0,o.G0)()*s.width-s.width*e,y:n.y+(0,o.G0)()*s.height-s.height*e};if(t.isPointInStroke(i,c.x,c.y)){h=c;break}}return h}(t,h,i,n);return Promise.resolve(c?{position:c}:null)}resize(t,i){super.resize(t,i);const n=this.points,s=new Path2D,e=t.x-i.width*h,c=t.y-i.height*h;for(const[h,a]of n.entries()){const t={x:e+a.x*i.width/o.a5,y:c+a.y*i.height/o.a5};h?s.lineTo(t.x,t.y):s.moveTo(t.x,t.y)}const r=n[0];if(r){const t={x:e+r.x*i.width/o.a5,y:c+r.y*i.height/o.a5};s.lineTo(t.x,t.y)}this.path=s}}const r=50,a=50;class l{constructor(){this.points=[]}load(t){t&&void 0!==t.points&&(this.points=t.points.map((t=>{var i,n;return{x:null!==(i=t.x)&&void 0!==i?i:r,y:null!==(n=t.y)&&void 0!==n?n:a}})))}}class x{generate(t,i,n,s){const o=new l;return o.load(s),new c(t,i,n,o)}}},3532:(t,i,n)=>{n.d(i,{B:()=>s});class s{constructor(t,i,n,s){this.position=t,this.size=i,this.fill=n,this.options=s}resize(t,i){this.position=t,this.size=i}}}}]);
//# sourceMappingURL=8190.06c4109b.chunk.js.map