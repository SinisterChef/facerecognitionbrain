"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[3600],{3600:(e,i,t)=>{t.d(i,{initPjs:()=>s});var a=t(4409);class n{static init(e){var i,t,o,s,l,r,c;const d=new n,p=e.selector;if(!p)throw new Error("No selector provided");const m=document.querySelector(p);if(!m)throw new Error("No element found for selector");return a.$k.load({element:m,id:p.replace(".","").replace("!",""),options:{fullScreen:{enable:!1},particles:{color:{value:null!==(i=e.color)&&void 0!==i?i:"!000000"},links:{color:"random",distance:null!==(t=e.minDistance)&&void 0!==t?t:120,enable:null!==(o=e.connectParticles)&&void 0!==o&&o},move:{enable:!0,speed:null!==(s=e.speed)&&void 0!==s?s:.5},number:{value:null!==(l=e.maxParticles)&&void 0!==l?l:100},size:{value:{min:1,max:null!==(r=e.sizeVariations)&&void 0!==r?r:3}}},responsive:null===(c=e.responsive)||void 0===c?void 0:c.map((i=>{var t,a,n,o,s;return{maxWidth:i.breakpoint,options:{particles:{color:{value:null===(t=i.options)||void 0===t?void 0:t.color},links:{distance:null===(a=i.options)||void 0===a?void 0:a.minDistance,enable:null===(n=i.options)||void 0===n?void 0:n.connectParticles},number:{value:e.maxParticles},move:{enable:!0,speed:null===(o=i.options)||void 0===o?void 0:o.speed},size:{value:null===(s=i.options)||void 0===s?void 0:s.sizeVariations}}}}}))}}).then((e=>{d._container=e})),d}destroy(){const e=this._container;null===e||void 0===e||e.destroy()}pauseAnimation(){const e=this._container;null===e||void 0===e||e.pause()}resumeAnimation(){const e=this._container;null===e||void 0===e||e.play()}}const o={particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1},s=e=>{const{particlesJS:i,pJSDom:t}=(e=>{const i=(i,t)=>{const n=(0,a.zw)(o,t);return e.load({id:i,options:{fullScreen:{enable:!1},detectRetina:n.retina_detect,smooth:!0,interactivity:{detectsOn:n.interactivity.detect_on,events:{onHover:{enable:n.interactivity.events.onhover.enable,mode:n.interactivity.events.onhover.mode},onClick:{enable:n.interactivity.events.onclick.enable,mode:n.interactivity.events.onclick.mode},resize:{enable:n.interactivity.events.resize}},modes:{grab:{distance:n.interactivity.modes.grab.distance,links:{opacity:n.interactivity.modes.grab.line_linked.opacity}},bubble:{distance:n.interactivity.modes.bubble.distance,size:n.interactivity.modes.bubble.size,duration:n.interactivity.modes.bubble.duration,opacity:n.interactivity.modes.bubble.opacity,speed:n.interactivity.modes.bubble.speed},repulse:{distance:n.interactivity.modes.repulse.distance,duration:n.interactivity.modes.repulse.duration},push:{quantity:n.interactivity.modes.push.particles_nb},remove:{quantity:n.interactivity.modes.remove.particles_nb}}},particles:{collisions:{enable:n.particles.move.bounce},number:{value:n.particles.number.value,density:{enable:n.particles.number.density.enable,width:n.particles.number.density.value_area}},color:{value:n.particles.color.value},stroke:{width:n.particles.shape.stroke.width,color:{value:n.particles.shape.stroke.color}},shape:{type:n.particles.shape.type,options:{polygon:{sides:n.particles.shape.polygon.nb_sides},image:{src:n.particles.shape.image.src,width:n.particles.shape.image.width,height:n.particles.shape.image.height}}},opacity:{value:n.particles.opacity.random?{min:n.particles.opacity.anim.enable?n.particles.opacity.anim.opacity_min:0,max:n.particles.opacity.value}:n.particles.opacity.value,animation:{enable:n.particles.opacity.anim.enable,speed:n.particles.opacity.anim.speed,sync:n.particles.opacity.anim.sync}},size:{value:n.particles.size.random?{min:n.particles.size.anim.enable?n.particles.size.anim.size_min:0,max:n.particles.size.value}:n.particles.size.value,animation:{enable:n.particles.size.anim.enable,speed:n.particles.size.anim.speed,sync:n.particles.size.anim.sync}},links:{enable:n.particles.line_linked.enable,distance:n.particles.line_linked.distance,color:n.particles.line_linked.color,opacity:n.particles.line_linked.opacity,width:n.particles.line_linked.width},move:{enable:n.particles.move.enable,speed:n.particles.move.speed/3,direction:n.particles.move.direction,random:n.particles.move.random,straight:n.particles.move.straight,outModes:n.particles.move.out_mode,attract:{enable:n.particles.move.attract.enable,rotate:{x:n.particles.move.attract.rotateX,y:n.particles.move.attract.rotateY}}}}}})};return i.load=(i,t,a)=>{e.load({id:i,url:t}).then((e=>{e&&a(e)})).catch((()=>{a(void 0)}))},i.setOnClickHandler=i=>{e.setOnClickHandler(i)},{particlesJS:i,pJSDom:e.dom()}})(e);return window.particlesJS=i,window.pJSDom=t,window.Particles=n,{particlesJS:i,pJSDom:t,Particles:n}}}}]);
//# sourceMappingURL=3600.c4ac7f74.chunk.js.map