import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { modelKoi } from './koi';
import { plantLotuses } from './lotus';
import './pond.css';

const canvas = document.querySelector('canvas')!;
const renderer = new T.WebGLRenderer({canvas, antialias:true});
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
const scene = new T.Scene();
scene.background = new T.Color(0x28554b);
const camera = new T.OrthographicCamera();
camera.position.set(0, 12, 3);
camera.lookAt(0, 0, 0);
scene.add(new T.HemisphereLight(0xfff6db, 0x466951, 2));
const sun = new T.DirectionalLight(0xffeed0, 2.1);
sun.position.set(-4, 8, 2);
scene.add(sun);

let seed = crypto.getRandomValues(new Uint32Array(1))[0];
const random = () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 4294967296);
const clockUniform = {value:0};
const bed = new T.Mesh(new T.PlaneGeometry(100,100), new T.ShaderMaterial({
  uniforms:{time:clockUniform},
  vertexShader:'varying vec3 p; void main(){p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}',
  fragmentShader:`varying vec3 p; uniform float time;
  void main(){
    vec2 q=p.xz; float t=time*.21;
    float s=sin(q.x*2.3+sin(q.y*2.+t))+sin(q.y*2.5+sin(q.x*1.8-t));
    float c=pow(max(0.,1.-abs(s)*1.85),4.);
    float d=.5+.5*sin(q.x*.54+cos(q.y*.74));
    vec3 col=mix(vec3(.016,.085,.075),vec3(.07,.23,.17),d)+vec3(.09,.14,.08)*c;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`
}));
bed.rotation.x=-Math.PI/2; bed.position.y=-1.12; scene.add(bed);

const controls = new OrbitControls(camera, canvas);
controls.enablePan = false;
controls.enableDamping = true;
controls.minZoom = .75;
controls.maxZoom = 2.5;
controls.minPolarAngle = .06;
controls.maxPolarAngle = Math.PI * .33;
controls.update();
controls.saveState();
canvas.addEventListener('dblclick', () => controls.reset());

function textureCanvas(size: number) {
  const tile = document.createElement('canvas');
  tile.width = tile.height = size;
  return tile.getContext('2d')!;
}

// Broad mineral bands under a much finer crystalline grain.
const stonePaint = textureCanvas(384);
const pixels = stonePaint.createImageData(384, 384);
for (let y = 0; y < 384; y++) for (let x = 0; x < 384; x++) {
  const u = x / 384 * Math.PI * 2, v = y / 384 * Math.PI * 2;
  const strata = Math.sin(3*u + 2*v + 1.3*Math.sin(v) + .5*Math.sin(4*u-v));
  const quartz = Math.exp(-95*strata*strata);
  const value = 154 + 5*strata + 7*quartz + 6*Math.cos(8*u+3*Math.sin(5*v))*Math.sin(7*v-u) + (random()-.5)*44;
  const i = (y*384+x)*4;
  pixels.data.set([value+5,value+4,value,255],i);
}
stonePaint.putImageData(pixels,0,0);
const minerals = new T.CanvasTexture(stonePaint.canvas);
minerals.colorSpace = T.SRGBColorSpace;
const pebbles:T.BufferGeometry[]=[];
minerals.wrapS=minerals.wrapT=T.RepeatWrapping;
for(let i=0;i<380;i++){
  const shape=new T.SphereGeometry(1,18,12);
  const pos=shape.attributes.position, uv=shape.attributes.uv, colors=[];
  const phase=random()*6, twist=random()*5, drift=random()*.28, flat=.25+random()*.7;
  const size=.04+random()**2.4*.32, stretch=.78+random()*1.1;
  const stoneColor=new T.Color().setHSL(.07+random()*.16,.035+random()*.23,.18+random()*.36);
  const offset=random(), frequency=.55+random()*2;
  for(let n=0;n<pos.count;n++){
    const x=pos.getX(n),y=pos.getY(n),z=pos.getZ(n);
    const grain=Math.sin(3*x+phase)*Math.cos(2*z-y+twist);
    const r=1+.15*grain+.055*Math.sin(5*z+2*y+phase);
    pos.setXYZ(n,x*r+drift*y*y,y*r,z*r+.07*x*y);
    uv.setXY(n,offset+uv.getX(n)*frequency,phase+uv.getY(n)*frequency);
    const tint=.88+.12*grain+.12*y;
    colors.push(stoneColor.r*tint,stoneColor.g*tint,stoneColor.b*tint);
  }
  shape.setAttribute('color',new T.Float32BufferAttribute(colors,3));
  shape.computeVertexNormals();shape.scale(size*stretch,size*flat,size);
  shape.rotateY(random()*6);shape.translate((random()-.5)*22,-1.10,(random()-.5)*15);
  pebbles.push(shape);
}
scene.add(new T.Mesh(mergeGeometries(pebbles),new T.MeshStandardMaterial({
  vertexColors:true,map:minerals,bumpMap:minerals,bumpScale:.003,roughness:.55
})));

// Paint branching veins in the same radial coordinates as the folded blade.
function leafMaterial(age:number, veins:number, bend:number){
const blade = textureCanvas(512);
const green = blade.createRadialGradient(256,256,0,256,256,252);
green.addColorStop(0,'#809653');green.addColorStop(.25,'#557848');
green.addColorStop(.84,age>.7?'#86864a':age<.3?'#679155':'#416c46');green.addColorStop(1,age>.7?'#ab8348':'#849052');
blade.fillStyle=green;blade.fillRect(0,0,512,512);
for(let i=0;i<22000;i++){
  blade.fillStyle=random()>.5?'rgba(220,207,137,.095)':'rgba(35,65,33,.09)';
  blade.fillRect(random()*512,random()*512,1+random()*3,1+random()*2);
}
for(let i=0;i<veins;i++){
  blade.save();blade.translate(256,256);blade.rotate(i*Math.PI*2/veins);
  blade.strokeStyle='rgba(170,186,109,.52)';blade.lineWidth=1.8;
  blade.beginPath();blade.moveTo(0,0);blade.quadraticCurveTo(136,bend,246,0);blade.stroke();
  for(let j=1;j<11;j++) for(const side of [-1,1]){
    const x=j*21;blade.strokeStyle='rgba(159,178,111,.32)';blade.lineWidth=.9;
    blade.beginPath();blade.moveTo(x,3);blade.quadraticCurveTo(x+13,side*x*.07,x+24,side*x*.16);blade.stroke();
  }
  blade.restore();
}
const leafMap=new T.CanvasTexture(blade.canvas);leafMap.colorSpace=T.SRGBColorSpace;
return new T.MeshStandardMaterial({map:leafMap,bumpMap:leafMap,bumpScale:.012,roughness:.42,side:T.DoubleSide});
}
for(const [cx,cz] of [[-4,-2.4],[3.9,2.8],[-3.6,3.8],[4.8,-3.3]]){
  const count=3+Math.floor(random()*4), rotation=random()*6;
  for(let j=0;j<count;j++){
    const age=random(),r=.24+age*.52+random()*.12,phase=random()*6;
    const waves=3+Math.floor(random()*6), cup=.04+(1-age)**2*.65;
    const split=age>.77?.08+random()*.22:0, aspect=.74+random()*.32;
    const leaves=leafMaterial(age,10+Math.floor(random()*11),random()*28-14);
    const vertices:number[]=[], coords:number[]=[], faces:number[]=[];
    for(let k=0;k<=12;k++) for(let m=0;m<=80;m++){
      const t=k/12, a=split+m/80*(Math.PI*2-2*split);
      const rim=1+.065*Math.sin(waves*a+phase)+.023*Math.sin(9*a-phase);
      const x=Math.cos(a)*t*rim, z=Math.sin(a)*t*rim;
      const h=cup*t*t+.044*t*Math.cos(9*a+phase)+.12*t**5*Math.sin(4*a+phase);
      vertices.push(x*r,h*r,z*r*aspect);coords.push(.5+.46*x,.5-.46*z);
      if(k<12 && m<80){const n=k*81+m;faces.push(n,n+1,n+81,n+1,n+82,n+81);}
    }
    const geometry=new T.BufferGeometry();
    geometry.setAttribute('position',new T.Float32BufferAttribute(vertices,3));
    geometry.setAttribute('uv',new T.Float32BufferAttribute(coords,2));
    geometry.setIndex(faces);geometry.computeVertexNormals();
    const leaf=new T.Mesh(geometry,leaves);
    const angle=rotation+j*2.4+random()*.45;
    leaf.position.set(cx+Math.cos(angle)*.54*Math.sqrt(j),.47+j*.015,cz+Math.sin(angle)*.54*Math.sqrt(j));
    leaf.rotation.set(.07*Math.sin(phase),phase,.08*Math.cos(phase));
    scene.add(leaf);
  }
}

plantLotuses(scene,random);

function createKoi(index:number){
const {fish,moving,rest}=modelKoi(index,random,clockUniform);
scene.add(fish);
const size=.74+random()*.28;
fish.scale.set(size,size*(.92+random()*.14),size*(.9+random()*.21));
const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=128;
const sc=shadowCanvas.getContext('2d')!, gradient=sc.createRadialGradient(64,64,0,64,64,64);
gradient.addColorStop(0,'rgba(0,20,16,.48)');gradient.addColorStop(1,'rgba(0,20,16,0)');
sc.fillStyle=gradient;sc.fillRect(0,0,128,128);
const shadow=new T.Mesh(new T.PlaneGeometry(3.6,1.25),new T.MeshBasicMaterial({map:new T.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}));
shadow.rotation.order='YXZ';shadow.rotation.x=-Math.PI/2;scene.add(shadow);

const route=index*2*Math.PI/5+random()*.24;
fish.position.set(Math.cos(route)*2.8,0,Math.sin(route)*1.85);
shadow.scale.setScalar(size);
return {fish,shadow,moving,rest,route,tempo:.21+random()*.10,depth:-random()*.35,phase:random()*6,heading:route+Math.PI/2};
}
const school=Array.from({length:5},(_,i)=>createKoi(i));

let spanX=5,spanZ=4;
function resize(){
  const w=canvas.clientWidth,h=canvas.clientHeight;
  spanX=Math.max(3.35,4.3*w/h);spanZ=spanX*h/w;
  Object.assign(camera,{left:-spanX,right:spanX,top:spanZ,bottom:-spanZ,near:.1,far:60});
  camera.updateProjectionMatrix();renderer.setSize(w,h,false);
}
resize();window.addEventListener('resize',resize);
const ray=new T.Raycaster(),surface=new T.Plane(new T.Vector3(0,1,0),-.45);
const target=new T.Vector3(), waypoint=new T.Vector3();
let attention=0,elapsed=0;
const ripples:{mesh:T.Mesh<T.RingGeometry,T.MeshBasicMaterial>,age:number}[]=[];
let tap: {id:number,x:number,y:number} | undefined;
canvas.addEventListener('pointerdown',e=>{
  tap=e.isPrimary && e.button===0 ? {id:e.pointerId,x:e.clientX,y:e.clientY} : undefined;
});
canvas.addEventListener('pointermove',e=>{
  if(tap && Math.hypot(e.clientX-tap.x,e.clientY-tap.y)>5) tap=undefined;
});
canvas.addEventListener('pointercancel',()=>{tap=undefined;});
canvas.addEventListener('pointerup',e=>{
  if(!tap || tap.id!==e.pointerId) return;
  tap=undefined;
  ray.setFromCamera(new T.Vector2(e.clientX/canvas.clientWidth*2-1,1-e.clientY/canvas.clientHeight*2),camera);
  if(!ray.ray.intersectPlane(surface,target))return;
  attention=5;
  for(let i=0;i<3;i++){
    const mesh=new T.Mesh(new T.RingGeometry(.975,1,72),new T.MeshBasicMaterial({color:0xd8efda,transparent:true,depthWrite:false}));
    mesh.rotation.x=-Math.PI/2;mesh.position.copy(target);mesh.scale.setScalar(.01);scene.add(mesh);ripples.push({mesh,age:-i*.2});
  }
});
let previous=performance.now();
renderer.setAnimationLoop(now=>{
  const dt=Math.min((now-previous)/1000,.05);previous=now;elapsed+=dt;clockUniform.value=elapsed;
  attention=Math.max(0,attention-dt);
  for(const koi of school){
  const {fish,shadow,moving,rest,route,tempo}=koi;
  let {heading,phase}=koi;
  const angle=elapsed*tempo+route;
  waypoint.set(Math.cos(angle)*Math.min(3.6,spanX*.68),0,Math.sin(angle+Math.sin(angle*2+route)*.35)*Math.min(2.65,spanZ*.62));
  if(attention>0) waypoint.set(target.x+Math.cos(route)*1.18,0,target.z+Math.sin(route)*1.18);
  for(const other of school){
    if(other===koi)continue;
    const x=fish.position.x-other.fish.position.x,z=fish.position.z-other.fish.position.z;
    const d=Math.hypot(x,z);
    if(d<1.8 && d>.001){waypoint.x+=x/d*(1.8-d)*2;waypoint.z+=z/d*(1.8-d)*2;}
  }
  const dx=waypoint.x-fish.position.x,dz=waypoint.z-fish.position.z,dist=Math.hypot(dx,dz);
  const diff=Math.atan2(Math.sin(Math.atan2(dz,dx)-heading),Math.cos(Math.atan2(dz,dx)-heading));
  if(dist>.12)heading+=T.MathUtils.clamp(diff,-1.45*dt,1.45*dt);
  const effort=.65+.35*Math.sin(elapsed*1.8+route);
  const speed=Math.min(attention>0?1.65:.76+.45*effort,dist*1.7);
  fish.position.x+=Math.cos(heading)*speed*dt;fish.position.z+=Math.sin(heading)*speed*dt;
  fish.position.y=koi.depth+.05*Math.sin(elapsed*1.4+route);fish.rotation.y=-heading;fish.rotation.x=.085*Math.sin(diff)*speed;
  phase+=dt*(1.7+effort*1.4+speed*1.9);
  moving.forEach((g,k)=>{
    const p=g.getAttribute('position'),base=rest[k];
    for(let i=0;i<p.count;i++){
      const x=base[i*3],weight=Math.max(0,(.86-x)/2.35);
      const z=base[i*3+2];
      p.setZ(i,z+weight*weight*((.30+.25*effort)*Math.sin(phase+x*2.15)+.24*Math.sin(diff)));
      if(g.userData.paired)p.setY(i,base[i*3+1]+Math.max(0,Math.abs(z)-.26)*.21*Math.sin(phase*.68+Math.sign(z)*.4));
    }
    p.needsUpdate=true;
  });
  shadow.position.set(fish.position.x+.20,-.81,fish.position.z+.17);shadow.rotation.y=-heading;
  koi.heading=heading;koi.phase=phase;
  }
  for(let i=ripples.length-1;i>=0;i--){
    const r=ripples[i];r.age+=dt;r.mesh.visible=r.age>=0;
    r.mesh.scale.setScalar(Math.max(.01,r.age*.88));r.mesh.material.opacity=Math.max(0,.45*(1-r.age/2));
    if(r.age>=2){scene.remove(r.mesh);r.mesh.geometry.dispose();r.mesh.material.dispose();ripples.splice(i,1);}
  }
  controls.update();
  renderer.render(scene,camera);
});
