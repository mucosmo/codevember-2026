import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
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

let seed = 73819;
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
const rockMaterial = new T.MeshStandardMaterial({map:minerals,bumpMap:minerals,bumpScale:.003,roughness:.58});
const dummy = new T.Object3D();
for (let variant=0; variant<4; variant++) {
  const shape = new T.SphereGeometry(1,32,20);
  const points = shape.attributes.position;
  for (let i=0;i<points.count;i++) {
    const x=points.getX(i), y=points.getY(i), z=points.getZ(i);
    const r=1+.09*Math.sin(3*x+variant)*Math.cos(2*z-y)+.045*Math.sin(5*z+2*y+variant);
    points.setXYZ(i,x*r+.07*y*y,y*r,z*r);
  }
  shape.computeVertexNormals();
  const rocks = new T.InstancedMesh(shape,rockMaterial,110);
  for(let i=0;i<rocks.count;i++){
    const size=.045+random()**3*.38;
    dummy.position.set((random()-.5)*23,-1.11+size*.13,(random()-.5)*16);
    dummy.scale.set(size*(1.1+random()*.7),size*(.45+random()*.35),size);
    dummy.rotation.set(random()*.3,random()*6,random()*.2);
    dummy.updateMatrix(); rocks.setMatrixAt(i,dummy.matrix);
    rocks.setColorAt(i,new T.Color().setHSL(.09+random()*.10,.09+random()*.15,.30+random()*.29));
  }
  scene.add(rocks);
}

// Paint branching veins in the same radial coordinates as the folded blade.
const blade = textureCanvas(512);
const green = blade.createRadialGradient(256,256,0,256,256,252);
green.addColorStop(0,'#809653');green.addColorStop(.25,'#557848');
green.addColorStop(.84,'#416c46');green.addColorStop(1,'#849052');
blade.fillStyle=green;blade.fillRect(0,0,512,512);
for(let i=0;i<22000;i++){
  blade.fillStyle=random()>.5?'rgba(220,207,137,.095)':'rgba(35,65,33,.09)';
  blade.fillRect(random()*512,random()*512,1+random()*3,1+random()*2);
}
for(let i=0;i<18;i++){
  blade.save();blade.translate(256,256);blade.rotate(i*Math.PI/9);
  blade.strokeStyle='rgba(170,186,109,.52)';blade.lineWidth=1.8;
  blade.beginPath();blade.moveTo(0,0);blade.quadraticCurveTo(136,7,246,0);blade.stroke();
  for(let j=1;j<11;j++) for(const side of [-1,1]){
    const x=j*21;blade.strokeStyle='rgba(159,178,111,.32)';blade.lineWidth=.9;
    blade.beginPath();blade.moveTo(x,3);blade.quadraticCurveTo(x+13,side*x*.07,x+24,side*x*.16);blade.stroke();
  }
  blade.restore();
}
const leafMap=new T.CanvasTexture(blade.canvas);leafMap.colorSpace=T.SRGBColorSpace;
const leaves=new T.MeshStandardMaterial({map:leafMap,bumpMap:leafMap,bumpScale:.012,roughness:.42,side:T.DoubleSide});
for(const [cx,cz] of [[-4,-2.4],[3.9,2.8],[-3.6,3.8],[4.8,-3.3]]){
  for(let j=0;j<5;j++){
    const r=.34+random()*.41, phase=random()*6;
    const vertices:number[]=[], coords:number[]=[], faces:number[]=[];
    for(let k=0;k<=12;k++) for(let m=0;m<=80;m++){
      const t=k/12, a=m/80*Math.PI*2;
      const rim=1+.038*Math.sin(5*a+phase)+.023*Math.sin(9*a-phase);
      const x=Math.cos(a)*t*rim, z=Math.sin(a)*t*rim;
      const h=.12*t*t+.044*t*Math.cos(9*a+phase)+.12*t**5*Math.sin(4*a+phase);
      vertices.push(x*r,h*r,z*r*.94);coords.push(.5+.46*x,.5-.46*z);
      if(k<12 && m<80){const n=k*81+m;faces.push(n,n+1,n+81,n+1,n+82,n+81);}
    }
    const geometry=new T.BufferGeometry();
    geometry.setAttribute('position',new T.Float32BufferAttribute(vertices,3));
    geometry.setAttribute('uv',new T.Float32BufferAttribute(coords,2));
    geometry.setIndex(faces);geometry.computeVertexNormals();
    const leaf=new T.Mesh(geometry,leaves);
    const angle=j*2.4;
    leaf.position.set(cx+Math.cos(angle)*.54*Math.sqrt(j),.47+j*.015,cz+Math.sin(angle)*.54*Math.sqrt(j));
    leaf.rotation.set(.07*Math.sin(phase),phase,.08*Math.cos(phase));
    scene.add(leaf);
  }
}

const fish=new T.Group(); scene.add(fish);
const skin=new T.BufferGeometry(), pos:number[]=[], indices:number[]=[], uv:number[]=[];
const rings=62, sides=44;
for(let i=0;i<=rings;i++){
  const u=i/rings, x=-1.12+2.28*u;
  const profile=Math.pow(Math.sin(Math.PI*u),.59)*(.37+.82*u);
  for(let j=0;j<=sides;j++){
    const a=j/sides*Math.PI*2;
    pos.push(x,Math.cos(a)*profile*.49,Math.sin(a)*profile*.56);
    uv.push(u,j/sides);
    if(i<rings&&j<sides){const n=i*(sides+1)+j; indices.push(n,n+1,n+sides+1,n+1,n+sides+2,n+sides+1);}
  }
}
skin.setAttribute('position',new T.Float32BufferAttribute(pos,3));
skin.setAttribute('uv',new T.Float32BufferAttribute(uv,2)); skin.setIndex(indices); skin.computeVertexNormals();
const paint=document.createElement('canvas'); paint.width=1024; paint.height=512;
const ctx=paint.getContext('2d')!;
ctx.fillStyle='#efe5cb'; ctx.fillRect(0,0,1024,512);
for(const [x,y,rx,ry] of [[820,0,84,98],[615,12,100,145],[405,-38,85,117],[240,48,77,111],[98,-23,48,80]]){
  const edges=Array.from({length:32},(_,i)=>1+.12*Math.sin(i*.65)+random()*.13);
  for(const offset of [0,512]){
    ctx.fillStyle='#c84726';ctx.beginPath();
    edges.forEach((v,i)=>{const a=i/32*Math.PI*2;ctx.lineTo(x+Math.cos(a)*rx*v,y+offset+Math.sin(a)*ry*v);});
    ctx.closePath();ctx.fill();
  }
}
ctx.strokeStyle='rgba(87,58,33,.18)';ctx.lineWidth=1.4;
for(let row=0;row<48;row++)for(let col=4;col<47;col++){
  ctx.beginPath();ctx.ellipse(col*18+(row%2)*9,row*11,10,6,0,-Math.PI/2,Math.PI/2);ctx.stroke();
}
const map=new T.CanvasTexture(paint);map.colorSpace=T.SRGBColorSpace;
const body=new T.Mesh(skin,new T.MeshStandardMaterial({map,roughness:.38,side:T.DoubleSide}));fish.add(body);

// All parts use the same body-space travelling wave, including the tail root.
const moving:T.BufferGeometry[]=[skin];
function fin(outline:number[][], shade:number){
  const g=new T.BufferGeometry(), verts=outline.flat(), faces:number[]=[];
  for(let i=1;i<outline.length-1;i++)faces.push(0,i,i+1);
  g.setAttribute('position',new T.Float32BufferAttribute(verts,3));g.setIndex(faces);g.computeVertexNormals();
  fish.add(new T.Mesh(g,new T.MeshStandardMaterial({color:shade,side:T.DoubleSide,transparent:true,opacity:.83})));moving.push(g);
}
for(const sign of [-1,1]){
  fin([[-.96,0,0],[-1.57,.38*sign,.04],[-1.47,.18*sign,.04],[-1.34,0,.02]],0xde9a68);
  fin([[.50,-.02,.38*sign],[.29,-.11,.68*sign],[-.09,-.12,.81*sign],[-.04,-.06,.57*sign],[.24,0,.37*sign]],0xe6b98a);
  const eye=new T.Mesh(new T.SphereGeometry(.054,16,12),new T.MeshStandardMaterial({color:0x171c16,roughness:.22}));
  eye.position.set(.88,.12,.27*sign);fish.add(eye);
}
fin([[.45,.30,0],[.08,.57,0],[-.24,.45,0],[-.63,.22,0]],0xd4ac80);
const rest=moving.map(g=>Float32Array.from(g.getAttribute('position').array));
const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=128;
const sc=shadowCanvas.getContext('2d')!, gradient=sc.createRadialGradient(64,64,0,64,64,64);
gradient.addColorStop(0,'rgba(0,20,16,.48)');gradient.addColorStop(1,'rgba(0,20,16,0)');
sc.fillStyle=gradient;sc.fillRect(0,0,128,128);
const shadow=new T.Mesh(new T.PlaneGeometry(3.6,1.25),new T.MeshBasicMaterial({map:new T.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}));
shadow.rotation.order='YXZ';shadow.rotation.x=-Math.PI/2;scene.add(shadow);

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
let attention=0,heading=0,phase=0,elapsed=0;
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
  waypoint.set(Math.sin(elapsed*.33)*Math.min(3.4,spanX*.65),0,Math.sin(elapsed*.53)*Math.min(2.3,spanZ*.55));
  if(attention>0){waypoint.copy(target);attention-=dt;}
  const dx=waypoint.x-fish.position.x,dz=waypoint.z-fish.position.z,dist=Math.hypot(dx,dz);
  const diff=Math.atan2(Math.sin(Math.atan2(dz,dx)-heading),Math.cos(Math.atan2(dz,dx)-heading));
  if(dist>.12)heading+=T.MathUtils.clamp(diff,-1.45*dt,1.45*dt);
  const speed=Math.min(attention>0?1.7:1.12,dist*1.7);
  fish.position.x+=Math.cos(heading)*speed*dt;fish.position.z+=Math.sin(heading)*speed*dt;
  fish.position.y=.045*Math.sin(elapsed*1.4);fish.rotation.y=-heading;
  phase+=dt*(3.1+speed*2.3);
  moving.forEach((g,k)=>{
    const p=g.getAttribute('position'),base=rest[k];
    for(let i=0;i<p.count;i++){
      const x=base[i*3],weight=Math.max(0,(.86-x)/2.35);
      p.setZ(i,base[i*3+2]+weight*weight*.48*Math.sin(phase+x*2.15));
    }
    p.needsUpdate=true;
  });
  shadow.position.set(fish.position.x+.20,-.81,fish.position.z+.17);shadow.rotation.y=-heading;
  for(let i=ripples.length-1;i>=0;i--){
    const r=ripples[i];r.age+=dt;r.mesh.visible=r.age>=0;
    r.mesh.scale.setScalar(Math.max(.01,r.age*.88));r.mesh.material.opacity=Math.max(0,.45*(1-r.age/2));
    if(r.age>=2){scene.remove(r.mesh);r.mesh.geometry.dispose();r.mesh.material.dispose();ripples.splice(i,1);}
  }
  controls.update();
  renderer.render(scene,camera);
});
