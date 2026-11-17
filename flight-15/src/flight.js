import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import * as T from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {cloudMap,exhaust} from './launch-look.js';
import './style.css';

const stages=[
  [0,'发射台待命','得克萨斯州 Starbase，二号发射台。星舰与 Super Heavy 助推器叠放，箭体周围可见冷凝蒸气。'],
  [7,'点火与升空','2026 年 11 月 13 日 22:47 UTC，Flight 15 离开发射台。'],
  [19,'上升段','组合体向高空爬升，发射塔逐渐消失在尾焰和蒸汽云之后。'],
  [33,'热分离','上面级继续飞行，Super Heavy 与星舰分离。镜头跟随上面级。'],
  [45,'上面级飞行','星舰继续加速。助推器转往近海，未完成塔架回收。'],
  [58,'入轨','星舰进入轨道。次日，上面级返回 Starbase，首次从轨道返回并由塔臂捕获。']
];
const duration=66, canvas=document.querySelector('canvas'), renderer=new T.WebGLRenderer({canvas,antialias:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.8));renderer.toneMapping=T.ACESFilmicToneMapping;
const scene=new T.Scene(), camera=new T.PerspectiveCamera(34,1,.1,6000);
const pmrem=new T.PMREMGenerator(renderer), studio=new RoomEnvironment();
scene.environment=pmrem.fromScene(studio,.04).texture;studio.dispose();pmrem.dispose();
scene.environmentIntensity=.65;
const light=new T.DirectionalLight(0xffdbac,3);light.position.set(-40,65,35);scene.add(light,new T.HemisphereLight(0xb2d2ea,0x665044,1.45));
const mat=(color,metalness=0,roughness=.65)=>new T.MeshStandardMaterial({color,metalness,roughness});
const frost=mat(0xd8dedc,.47,.46),iron=mat(0x454d50,.7);
function mesh(parent,geo,material,x=0,y=0,z=0){const m=new T.Mesh(geo,material);m.position.set(x,y,z);parent.add(m);return m;}
function box(parent,x,y,z,w,h,d,m){return mesh(parent,new T.BoxGeometry(w,h,d),m,x,y,z);}
function tube(parent,a,b,r,m){const v=b.clone().sub(a),o=mesh(parent,new T.CylinderGeometry(r,r,v.length(),7),m);o.position.copy(a).lerp(b,.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());return o;}
const V=(x,y,z)=>new T.Vector3(x,y,z);
const pad=new T.Group();scene.add(pad);
const ground=mesh(pad,new T.PlaneGeometry(5000,5000),mat(0x687262),0,-.08);ground.rotation.x=-Math.PI/2;
const terrain=document.createElement('canvas');terrain.width=terrain.height=512;
const ctx=terrain.getContext('2d');ctx.fillStyle='#888f7e';ctx.fillRect(0,0,512,512);
let seed=150;const noise=()=>((seed=(1664525*seed+1013904223)>>>0)/4294967296);
for(let i=0;i<12000;i++){
 const x=noise()*512,y=noise()*512,r=noise()*5+.7;
 ctx.fillStyle=noise()>.5?'rgba(50,69,54,.22)':'rgba(187,165,125,.31)';
 ctx.beginPath();ctx.ellipse(x,y,r*1.6,r,noise()*3,0,Math.PI*2);ctx.fill();
}
const land=new T.CanvasTexture(terrain);land.wrapS=land.wrapT=T.RepeatWrapping;land.repeat.set(95,95);
land.colorSpace=T.SRGBColorSpace;ground.material.map=land;ground.material.color.setHex(0xd9d5c4);
const shore=mesh(pad,new T.PlaneGeometry(4000,1500),mat(0x637d88,.25,.32),0,-.06,-870);
shore.rotation.x=-Math.PI/2;
box(pad,0,.05,0,92,.2,60,mat(0x91928a));
for(let j=0;j<5;j++){const m=mesh(pad,new T.CylinderGeometry(4,4,6,36),frost,-42+j*10,3,-35);mesh(pad,new T.SphereGeometry(4,24,12),frost,m.position.x,6,-35).scale.y=.25;}
// MikeNotBrick's assembled tower has separate meshes for both arms and the carriage.
const towerAnchor=V(-8.4,.15,0),towerScale=40/146;
async function loadTower(){
 const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
 const {scene:tower}=await loader.loadAsync(import.meta.env.BASE_URL+'models/mechazilla.glb');
 tower.position.copy(towerAnchor);tower.scale.setScalar(towerScale);
 const frame=mat(0x939fa1,.54,.48),hardware=mat(0x645f55,.60,.51);
 tower.traverse(part=>{if(part.isMesh)part.material=part.name==='TowerStatic'?frame:hardware;});
 // Mesh compression recentres each mesh. Recreate the kit's original
 // attachment frames before applying rotations about the hinge pins.
 function mount(name,x,z){
   const part=tower.getObjectByName(name),pivot=new T.Group();
   pivot.position.set(x,91,z);
   part.position.sub(pivot.position);
   tower.add(pivot);pivot.add(part);pivot.position.y-=17;
   return pivot;
 }
 tower.getObjectByName('TowerStatic').rotateY(T.MathUtils.degToRad(44));
 const carriage=mount('Carriage',0,0);
 carriage.position.x+=4;
 carriage.rotation.set(0,Math.PI,Math.PI/2);
 mount('LeftChopstick',2.274,-.884).rotation.y=.54;
 mount('RightChopstick',2.274,.884).rotation.y=-.54;
 pad.add(tower);
}
// The distributed GLB omits the ship quick-disconnect arm. Mount a separate
// swing-out service truss to the rocket-facing corner of the imported column.
const qd=new T.Group();qd.position.set(towerAnchor.x+1.9,24.3,-1.35);pad.add(qd);
const qdSteel=mat(0x727d7c,.64,.49), conduit=mat(0xaab3ad,.65,.36);
// A stationary cantilever carries both bearings; only the truss swings.
for(const level of [-.58,.62]){
 const y=qd.position.y+level;
 for(const z of [-1.7,.25]){
   tube(pad,V(towerAnchor.x-.55,y,z),V(qd.position.x,y,qd.position.z),.14,qdSteel);
   tube(pad,V(towerAnchor.x-.55,y-1.05,z),V(qd.position.x,y,qd.position.z),.10,qdSteel);
 }
 mesh(pad,new T.CylinderGeometry(.41,.41,.20,24),qdSteel,qd.position.x,y,qd.position.z);
}
mesh(qd,new T.CylinderGeometry(.34,.34,1.68,24),iron);
for(const side of [-1,1]){
 const z=side*.34;
 tube(qd,V(0,0,z),V(5.5,0,z),.085,qdSteel);
 tube(qd,V(0,1.04,z),V(5.5,.38,z),.075,qdSteel);
 for(let k=0;k<6;k++){
  const x=k*.9,h=1.04-x*.12;
  tube(qd,V(x,h,z),V(x+.9,0,z),.045,qdSteel);
  tube(qd,V(x,0,z),V(x,h,z),.047,qdSteel);
  tube(qd,V(x,h,-.34),V(x,h,.34),.04,qdSteel);
 }
 tube(qd,V(.1,-.16,z),V(5.48,-.16,z),.09,conduit);
}
box(qd,5.56,.1,0,.46,.62,.89,qdSteel);
for(const x of [-2,2])for(const z of [-2,2])box(pad,x,1.3,z,.65,2.6,.65,iron);
mesh(pad,new T.CylinderGeometry(3.45,3.7,.9,48),iron,0,2.5);

const booster=new T.Group(),ship=new T.Group();scene.add(booster,ship);
const boosterHeight=19,shipHeight=14;
async function loadStage(parent,file,height,enginePattern){
 const engineCenters=[];
 const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
 const {scene:model}=await loader.loadAsync(import.meta.env.BASE_URL+'models/'+file);
 const bounds=new T.Box3().setFromObject(model,true);
 const scale=height/(bounds.max.y-bounds.min.y);
 const engines=[];
 model.traverse(node=>{if(enginePattern.test(node.name))engines.push(node);});
 for(const node of engines){
   const box=new T.Box3().setFromObject(node,true),center=box.getCenter(new T.Vector3());
   center.y=box.min.y;engineCenters.push(center);
 }
 const center=bounds.getCenter(new T.Vector3());
 if(engineCenters.length){
   center.set(0,0,0);for(const engine of engineCenters)center.add(engine);center.divideScalar(engineCenters.length);
 }
 model.scale.multiplyScalar(scale);model.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);
 for(const engine of engineCenters)engine.multiplyScalar(scale).add(model.position);
 parent.add(model);
 return engineCenters;
}
function spriteTexture(){const c=document.createElement('canvas');c.width=c.height=96;const ctx=c.getContext('2d'),g=ctx.createRadialGradient(48,48,0,48,48,48);g.addColorStop(0,'white');g.addColorStop(.42,'rgba(255,255,255,.64)');g.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g;ctx.fillRect(0,0,96,96);return new T.CanvasTexture(c);}
const soft=spriteTexture();
function particles(n,additive){return Array.from({length:n},(_,i)=>{
 const m=new T.SpriteMaterial({map:soft,transparent:true,depthWrite:false,blending:additive?T.AdditiveBlending:T.NormalBlending});
 const p=new T.Sprite(m);scene.add(p);return {p,a:i*2.39996,h:(i*.6180339)%1};
});}
const vapor=particles(35,false);
const smoke=particles(110,false),clouds=[41,82,163,299].map(cloudMap);
smoke.forEach(({p},i)=>{p.material.map=clouds[i%4];});
booster.name='Super Heavy';
let boosterFlame,shipFlame;
const modelsReady=Promise.all([
 loadStage(booster,'super-heavy.glb',boosterHeight,/^RAPTOR[_ ](inner|middle|outer)/i),
 loadStage(ship,'starship.glb',shipHeight,/^Raptor[_ ]3/i),
 loadTower()
]).then(([boosterCenters,shipCenters])=>{
 boosterFlame=exhaust(booster,1.42,13,boosterCenters);
 shipFlame=exhaust(ship,1.04,10,shipCenters);
});
const ignitionLight=new T.PointLight(0xff955c,0,32);scene.add(ignitionLight);
const sky=new T.Mesh(new T.SphereGeometry(3000,40,24),new T.ShaderMaterial({side:T.BackSide,depthWrite:false,uniforms:{space:{value:0}},vertexShader:'varying vec3 d;void main(){d=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec3 d;uniform float space;
void main(){vec3 n=normalize(d);float h=max(n.y,0.);vec3 c=mix(vec3(.40,.53,.54),vec3(.045,.19,.34),smoothstep(0.,.36,h));float streak=sin(n.x*22.+n.y*83.+sin(n.x*9.+n.z*11.)*2.)*.5+.5;c+=vec3(.08,.071,.059)*pow(streak,4.)*smoothstep(.003,.07,h)*(1.-smoothstep(.13,.39,h));
float sun=max(dot(n,normalize(vec3(-.6,.12,-.75))),0.);c+=vec3(.29,.21,.13)*pow(sun,48.);
gl_FragColor=vec4(mix(c,vec3(.0004,.001,.003),space),1.);
#include <colorspace_fragment>
}`}));
scene.add(sky);
const earth=mesh(scene,new T.SphereGeometry(820,128,80),new T.ShaderMaterial({vertexShader:'varying vec3 n;void main(){n=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec3 n;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 f=fract(p);f=f*f*(3.-2.*f);vec2 i=floor(p);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
void main(){vec2 p=n.xz*21.;float f=noise(p)*.5+noise(p*2.2)*.3+noise(p*5.1)*.15+noise(p*11.)*.05;
vec3 c=mix(vec3(.045,.21,.38),vec3(.32,.43,.34),smoothstep(.52,.59,f));c=mix(c,vec3(.78,.85,.86),smoothstep(.48,.72,f+.13*sin(p.x*2.+p.y)));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));
const ease=(a,b,x)=>T.MathUtils.smoothstep(x,a,b), clamp=T.MathUtils.clamp;
const timeline=document.querySelector('input'),select=document.querySelector('select'),play=document.querySelector('#play');
stages.forEach(([t,label])=>select.add(new Option(label,String(t))));
let time=0,playing=true,angle=0,last=performance.now(),stage=-1;
select.onchange=()=>{time=Number(select.value);};timeline.oninput=()=>{time=duration*Number(timeline.value)/1000;};
play.onclick=()=>{if(time>=duration)time=0;playing=!playing;};
const orbit=new OrbitControls(camera,canvas);
orbit.enableDamping=false;orbit.minDistance=7;orbit.maxDistance=260;
orbit.minPolarAngle=.04;orbit.maxPolarAngle=Math.PI*.64;
let previousAim=null,previousDistance=0;
document.querySelector('#view').onclick=()=>{angle=(angle+1)%3;previousAim=null;};
function draw(now){
 const dt=Math.min((now-last)/1000,.15);last=now;if(playing)time=Math.min(duration,time+dt);if(time===duration)playing=false;
 const t=time, lift=Math.max(t-7,0),split=Math.max(0,t-33),air=ease(17,48,t);
 qd.rotation.y=-.205+.99*ease(6.2,8.4,t);
 const height=2.95+.098*lift*lift,tilt=-.83*ease(12,54,t);
 const direction=V(-Math.sin(tilt),Math.cos(tilt),0),foot=V(lift*lift*.037,height,0);
 booster.position.copy(foot);booster.rotation.z=tilt;
 ship.position.copy(foot).addScaledVector(direction,boosterHeight+split*.68);ship.rotation.z=tilt;
 booster.position.y-=split*split*.21;booster.position.x-=split*.65;booster.rotation.z+=split*.19;booster.visible=t<49;
 const aim=foot.clone().addScaledVector(direction,16).lerp(ship.position.clone().addScaledVector(direction,7),ease(28,39,t));
 const distance=(canvas.clientWidth/canvas.clientHeight<.85?108:85)+19*ease(6,15,t)-ease(23,48,t)*53;
 const bearing=[.43,-.57,1.05][angle];
 aim.y-=5*ease(6,15,t)*(1-ease(25,38,t));
 if(!previousAim){
   orbit.target.copy(aim);
   camera.position.copy(aim).add(V(Math.sin(bearing)*distance,-8+air*25,Math.cos(bearing)*distance));
 }else{
   const offset=camera.position.clone().sub(orbit.target).multiplyScalar(distance/previousDistance);
   orbit.target.add(aim.clone().sub(previousAim));
   camera.position.copy(orbit.target).add(offset);
 }
 orbit.update();previousAim=aim;previousDistance=distance;
 sky.position.copy(camera.position);sky.material.uniforms.space.value=ease(22,46,t);
 earth.visible=t>42;if(earth.visible)earth.position.copy(aim).add(V(0,-843,-195));
 pad.visible=t<44;
 vapor.forEach(({p,h,a})=>{const age=(t*.32+h)%1;p.visible=t<12;
 p.position.set(1.25+age*3,19+Math.sin(a)*.28-age*1.45,Math.sin(a)*age);
 p.scale.setScalar(.25+age*1.65);p.material.opacity=.37*Math.sin(age*Math.PI)*(1-ease(6,12,t));p.material.color.setHex(0xe8eef1);});
 smoke.forEach(({p,a,h},i)=>{
   const age=(t*.084+h)%1, power=ease(6,8.2,t)*(1-ease(18,34,t));
   p.visible=power>.001;
   const side=i%2?1:-1, spread=(3+age*24)*power;
   p.position.set(side*spread+Math.sin(a)*3,1+age*age*(6+4*h),-2+Math.cos(a)*5+age*2);
   const size=(3+age*15)*(.85+h*.35);p.scale.set(size*1.23,size,1);
   p.material.opacity=.91*power*Math.sin(age*Math.PI)**.45;
   p.material.color.setRGB(1,.83+.15*age,.70+.25*age);
 });
 const burn=ease(6,7.4,t)*(1-ease(32,34,t));
 boosterFlame(t,burn);shipFlame(t,ease(32,34,t)*(1-ease(54,58,t)));
 ignitionLight.position.copy(booster.position);ignitionLight.position.y-=1;
 ignitionLight.intensity=burn*(1-ease(12,22,t))*(145+14*Math.sin(t*31));
 const next=stages.findLastIndex(s=>t>=s[0]);if(next!==stage){stage=next;document.querySelector('h2').textContent=stages[next][1];document.querySelector('#caption').textContent=stages[next][2];select.value=String(stages[next][0]);}
 play.textContent=playing?'暂停':time>=duration?'重播':'播放';timeline.value=String(Math.round(time/duration*1000));
 renderer.render(scene,camera);
}
function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);}
resize();window.addEventListener('resize',resize);modelsReady.then(()=>{last=performance.now();renderer.setAnimationLoop(draw);}).catch(error=>{document.querySelector('#caption').textContent='场景模型加载失败，请刷新重试。';console.error(error);});
