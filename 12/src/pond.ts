import * as T from 'three';
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

const stones = new T.InstancedMesh(new T.IcosahedronGeometry(1,1),new T.MeshStandardMaterial({roughness:1}),420);
const dummy=new T.Object3D();
for(let i=0;i<stones.count;i++){
  dummy.position.set((random()-.5)*23,-1.08,(random()-.5)*16);
  const size=.04+random()**3*.36;
  dummy.scale.set(size*1.5,size*.55,size); dummy.rotation.y=random()*6;
  dummy.updateMatrix(); stones.setMatrixAt(i,dummy.matrix);
  stones.setColorAt(i,new T.Color().setHSL(.13+random()*.08,.12,.13+random()*.13));
}
scene.add(stones);

// Water lilies share a radial notch and fine raised veins.
for(const [cx,cz] of [[-4,-2.4],[3.9,2.8],[-3.6,3.8],[4.8,-3.3]]){
  for(let j=0;j<6;j++){
    const leaf=new T.Group(), r=.29+random()*.43;
    const shape=new T.Shape(); shape.moveTo(0,0);
    for(let k=0;k<=64;k++){
      const a=.18+k/64*5.98, rr=r*(1+.019*Math.sin(a*9));
      shape.lineTo(rr*Math.cos(a),rr*Math.sin(a));
    }
    shape.closePath();
    leaf.add(new T.Mesh(new T.ShapeGeometry(shape),new T.MeshStandardMaterial({color:new T.Color().setHSL(.23+random()*.04,.34,.20+random()*.10),side:T.DoubleSide})));
    for(let k=0;k<10;k++){
      const a=.3+k*.6;
      leaf.add(new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(0,0,.003),new T.Vector3(r*.86*Math.cos(a),r*.86*Math.sin(a),.003)]),new T.LineBasicMaterial({color:0x82975c,transparent:true,opacity:.32})));
    }
    leaf.rotation.set(-Math.PI/2,0,random()*6);
    leaf.position.set(cx+(random()-.5)*2,.46+j*.012,cz+(random()-.5)*1.7); scene.add(leaf);
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
canvas.addEventListener('pointerdown',e=>{
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
  renderer.render(scene,camera);
});
