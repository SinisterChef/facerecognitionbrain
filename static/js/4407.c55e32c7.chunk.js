"use strict";(self.webpackChunkfacerecognitionbrain=self.webpackChunkfacerecognitionbrain||[]).push([[4407],{4407:(e,t,i)=>{i.d(t,{PolygonPathGenerator:()=>o});var s=i(4409);class o{constructor(){this._createDirs=()=>{this.dirsList=[];for(let e=0;e<360;e+=360/this.options.sides){const t=this.options.angle+e;this.dirsList.push(s.Mi.create(Math.cos(t*Math.PI/180),Math.sin(t*Math.PI/180)))}},this.dirsList=[],this.options={sides:6,turnSteps:20,angle:30}}generate(e){const{sides:t}=this.options;void 0===e.hexStep&&(e.hexStep=0),void 0===e.hexDirection&&(e.hexDirection=6===t?2*(3*(0,s.G0)()|0):(0,s.G0)()*t|0),void 0===e.hexSpeed&&(e.hexSpeed=e.velocity.length),e.hexStep%this.options.turnSteps===0&&(e.hexDirection=(0,s.G0)()>.5?(e.hexDirection+1)%t:(e.hexDirection+t-1)%t),e.velocity.x=0,e.velocity.y=0,e.hexStep++;const i=this.dirsList[e.hexDirection];return Promise.resolve(s.Mi.create(i.x*e.hexSpeed,i.y*e.hexSpeed))}async init(e){var t;const i=e.actualOptions.particles.move.path.options;this.options.sides=i.sides>0?i.sides:6,this.options.angle=null!==(t=i.angle)&&void 0!==t?t:30,this.options.turnSteps=i.turnSteps>=0?i.turnSteps:20,this._createDirs(),await Promise.resolve()}reset(e){delete e.hexStep,delete e.hexDirection,delete e.hexSpeed}update(){}}}}]);
//# sourceMappingURL=4407.c55e32c7.chunk.js.map