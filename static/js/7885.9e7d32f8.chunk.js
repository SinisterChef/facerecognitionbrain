"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[7885],{7885:(i,t,o)=>{o.d(t,{OutOutMode:()=>n});var e=o(4409);class n{constructor(i){this.container=i,this.modes=["out"]}async update(i,t,o,n){if(!this.modes.includes(n))return;const s=this.container;switch(i.outType){case"inside":{const{x:t,y:o}=i.velocity,n=e.Mi.origin;n.length=i.moveCenter.radius,n.angle=i.velocity.angle+Math.PI,n.addTo(e.Mi.create(i.moveCenter));const{dx:a,dy:r}=(0,e.vr)(i.position,n);if(t<=0&&a>=0||o<=0&&r>=0||t>=0&&a<=0||o>=0&&r<=0)return;i.position.x=Math.floor((0,e.BH)({min:0,max:s.canvas.size.width})),i.position.y=Math.floor((0,e.BH)({min:0,max:s.canvas.size.height}));const{dx:c,dy:d}=(0,e.vr)(i.position,i.moveCenter);i.direction=Math.atan2(-d,-c),i.velocity.angle=i.direction;break}default:if((0,e.Tj)(i.position,s.canvas.size,e.Mi.origin,i.getRadius(),t))return;switch(i.outType){case"outside":{i.position.x=Math.floor((0,e.BH)({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.x,i.position.y=Math.floor((0,e.BH)({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.y;const{dx:t,dy:o}=(0,e.vr)(i.position,i.moveCenter);i.moveCenter.radius&&(i.direction=Math.atan2(o,t),i.velocity.angle=i.direction);break}case"normal":{const o=i.options.move.warp,n=s.canvas.size,a={bottom:n.height+i.getRadius()+i.offset.y,left:-i.getRadius()-i.offset.x,right:n.width+i.getRadius()+i.offset.x,top:-i.getRadius()-i.offset.y},r=i.getRadius(),c=(0,e.AE)(i.position,r);"right"===t&&c.left>n.width+i.offset.x?(i.position.x=a.left,i.initialPosition.x=i.position.x,o||(i.position.y=(0,e.G0)()*n.height,i.initialPosition.y=i.position.y)):"left"===t&&c.right<-i.offset.x&&(i.position.x=a.right,i.initialPosition.x=i.position.x,o||(i.position.y=(0,e.G0)()*n.height,i.initialPosition.y=i.position.y)),"bottom"===t&&c.top>n.height+i.offset.y?(o||(i.position.x=(0,e.G0)()*n.width,i.initialPosition.x=i.position.x),i.position.y=a.top,i.initialPosition.y=i.position.y):"top"===t&&c.bottom<-i.offset.y&&(o||(i.position.x=(0,e.G0)()*n.width,i.initialPosition.x=i.position.x),i.position.y=a.bottom,i.initialPosition.y=i.position.y);break}}}await Promise.resolve()}}}}]);
//# sourceMappingURL=7885.9e7d32f8.chunk.js.map