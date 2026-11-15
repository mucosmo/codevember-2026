import * as T from 'three';

// Cross sections measured from the caudal peduncle to the upper lip.
// Each station gives longitudinal position, half width, back height and belly depth.
const stations = [
  [-1.16,.024,.062,.052],[-1.05,.069,.115,.095],[-.88,.10,.14,.11],
  [-.63,.17,.22,.17],[-.30,.245,.30,.225],[.08,.31,.345,.278],
  [.36,.327,.342,.285],[.54,.303,.299,.258],[.74,.253,.222,.213],
  [.92,.191,.15,.155],[1.06,.122,.094,.115],[1.13,.064,.035,.075],[1.15,.004,-.012,.024],
];
function section(x:number) {
  const end=stations.findIndex(s=>s[0]>=x);
  const j=end<0?stations.length-1:Math.max(1,end), a=stations[j-1], b=stations[j];
  const t=T.MathUtils.clamp((x-a[0])/(b[0]-a[0]),0,1);
  return [1,2,3].map(k=>{
    const prev=stations[Math.max(0,j-2)], next=stations[Math.min(j+1,stations.length-1)];
    const m=(b[k]-prev[k])/(b[0]-prev[0])*(b[0]-a[0]);
    const n=(next[k]-a[k])/(next[0]-a[0])*(b[0]-a[0]);
    return (2*t**3-3*t*t+1)*a[k]+(t**3-2*t*t+t)*m+(-2*t**3+3*t*t)*b[k]+(t**3-t*t)*n;
  });
}
function surface(x:number,angle:number,lift=0) {
  const [width,back,belly]=section(x);
  return new T.Vector3(x,(back-belly)/2+Math.cos(angle)*((back+belly)/2+lift),Math.sin(angle)*(width+lift));
}
function canvas(w:number,h:number){
  const c=document.createElement('canvas');c.width=w;c.height=h;
  return c.getContext('2d')!;
}
function texture(ctx:CanvasRenderingContext2D,color=true){
  const tex=new T.CanvasTexture(ctx.canvas);
  if(color)tex.colorSpace=T.SRGBColorSpace;
  tex.anisotropy=4; return tex;
}
function skinMaterial(index:number,random:()=>number, time:{value:number}){
  const w=1024,h=512, ctx=canvas(w,h), relief=canvas(w,h);
  const image=ctx.createImageData(w,h);
  const base=[[226,213,180],[214,210,190],[215,169,66],[232,218,183],[188,192,180]][index];
  const red=[183,58,29], black=[45,48,43];
  const patches=Array.from({length:index===2?0:7},(_,i)=>({
    x:(i+.45+random()*.32)/7,y:.46+(random()-.5)*.33,
    rx:.064+random()*.063,ry:.085+random()*.12, phase:random()*6,
    ink:index===4 || (index%2===1 && i%3===1)?black:red
  }));
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const u=x/w,v=y/h;
    const warp=.013*Math.sin(29*u+19*v)+.009*Math.sin(51*v-33*u)+.004*Math.sin(120*u+96*v);
    const back=.5+.5*Math.cos((v-.5)*Math.PI*2);
    const tone=.94+.05*Math.sin(11*u+4*v)-.074*back+(random()-.5)*.035;
    let pigment=base, cover=0;
    for(const p of patches){
      const dx=(u+warp-p.x)/p.rx,dy=(v+warp+.018*Math.sin(18*u+p.phase)-p.y)/p.ry;
      const d=1-dx*dx-dy*dy+.16*Math.sin(6*dx+2*dy+p.phase);
      if(d>0){pigment=p.ink;cover=Math.min(1,d*15);}
    }
    const i=(y*w+x)*4;
    for(let k=0;k<3;k++) image.data[i+k]=(base[k]+(pigment[k]-base[k])*cover)*tone;
    image.data[i+3]=255;
  }
  ctx.putImageData(image,0,0);
  relief.fillStyle='#808080';relief.fillRect(0,0,w,h);
  // Staggered overlapping scales stop at the operculum, leaving the head smooth.
  for(let row=0;row<30;row++)for(let col=1;col<35;col++){
    const x=col*21+(row%2)*10.5,y=row*17.6+Math.sin(col*.13)*3;
    const sheen=random();
    for(const layer of [ctx,relief]){
      layer.beginPath();layer.ellipse(x,y,12,8.5,0,Math.PI*.53,Math.PI*1.47);
      layer.lineWidth=layer===ctx?1.15:2.3;
      layer.strokeStyle=layer===ctx?'rgba(59,50,37,.28)':'#505050';layer.stroke();
      layer.beginPath();layer.ellipse(x+1.7,y-.8,11,7.8,0,Math.PI*.83,Math.PI*1.44);
      layer.strokeStyle=layer===ctx?'rgba(255,247,205,'+(.10+sheen*.35)+')':'#bcbcbc';layer.stroke();
    }
  }
  const material=new T.MeshPhysicalMaterial({map:texture(ctx),bumpMap:texture(relief,false),bumpScale:.009,
    roughness:.43,clearcoat:.26,clearcoatRoughness:.30});
  // Moving light is anchored to the pond, so a swimming fish passes through it.
  material.onBeforeCompile=shader=>{
    shader.uniforms.pondTime=time;
    shader.vertexShader='varying vec3 pondPoint;\n'+shader.vertexShader.replace('#include <project_vertex>',
      '#include <project_vertex>\npondPoint=(modelMatrix*vec4(transformed,1.)).xyz;');
    shader.fragmentShader='varying vec3 pondPoint; uniform float pondTime;\n'+shader.fragmentShader.replace('#include <color_fragment>',`
      #include <color_fragment>
      vec2 q=pondPoint.xz; float t=pondTime*.21;
      float wave=sin(q.x*2.3+sin(q.y*2.+t))+sin(q.y*2.5+sin(q.x*1.8-t));
      float lightBand=pow(max(0.,1.-abs(wave)*1.85),3.);
      diffuseColor.rgb*=vec3(.91,.96,.93)+lightBand*vec3(.19,.22,.13);
    `);
  };
  return material;
}

export function modelKoi(index:number,random:()=>number,time:{value:number}){
  const fish=new T.Group(), moving:T.BufferGeometry[]=[];
  const shape=new T.BufferGeometry(),vertices:number[]=[],uv:number[]=[],faces:number[]=[];
  for(let i=0;i<=70;i++)for(let j=0;j<=48;j++){
    const u=i/70,v=j/48,p=surface(-1.16+2.31*u,(v-.5)*Math.PI*2);
    vertices.push(p.x,p.y,p.z);uv.push(u,v);
    const n=i*49+j;
    if(i<70 && j<48)faces.push(n,n+1,n+49,n+1,n+50,n+49);
  }
  shape.setAttribute('position',new T.Float32BufferAttribute(vertices,3));
  shape.setAttribute('uv',new T.Float32BufferAttribute(uv,2));shape.setIndex(faces);shape.computeVertexNormals();
  fish.add(new T.Mesh(shape,skinMaterial(index,random,time)));moving.push(shape);

  function line(points:T.Vector3[],radius:number,color:number){
    const g=new T.TubeGeometry(new T.CatmullRomCurve3(points),18,radius,6,false);
    fish.add(new T.Mesh(g,new T.MeshStandardMaterial({color,roughness:.55})));
  }
  function oval(center:T.Vector3,scale:number[],color:number){
    const o=new T.Mesh(new T.SphereGeometry(1,18,14),new T.MeshStandardMaterial({color,roughness:.28}));
    o.position.copy(center);o.scale.set(scale[0],scale[1],scale[2]);fish.add(o);
  }
  const membrane=canvas(256,256);
  const grad=membrane.createLinearGradient(0,256,0,0);
  grad.addColorStop(0,'rgba(186,151,105,.91)');grad.addColorStop(.68,'rgba(224,196,151,.69)');grad.addColorStop(1,'rgba(242,224,190,.40)');
  membrane.fillStyle=grad;membrane.fillRect(0,0,256,256);
  for(let ray=0;ray<=16;ray++){
    const x=ray*16;membrane.strokeStyle='rgba(138,114,78,.65)';membrane.lineWidth=2.4;
    membrane.beginPath();membrane.moveTo(x,256);membrane.lineTo(x,82);membrane.lineTo(x-3,3);membrane.stroke();
    membrane.lineWidth=1.2;membrane.beginPath();membrane.moveTo(x,82);membrane.lineTo(x+4,2);membrane.stroke();
  }
  const finMat=new T.MeshStandardMaterial({map:texture(membrane),transparent:true,depthWrite:false,side:T.DoubleSide,roughness:.55});
  function fin(point:(t:number,r:number)=>T.Vector3,paired=false){
    const g=new T.BufferGeometry(),p:number[]=[],tex:number[]=[],idx:number[]=[];
    for(let j=0;j<=7;j++)for(let i=0;i<=48;i++){
      const t=i/48,r=j/7,v=point(t,r);p.push(v.x,v.y,v.z);tex.push(t,r);
      const n=j*49+i;if(i<48&&j<7)idx.push(n,n+1,n+49,n+1,n+50,n+49);
    }
    g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(tex,2));
    g.setIndex(idx);g.computeVertexNormals();g.userData.paired=paired;
    moving.push(g);fish.add(new T.Mesh(g,finMat));
  }
  fin((t,r)=>{
    const lobe=Math.abs(t*2-1),length=.27+.31*Math.sin(lobe*1.83)+.012*Math.cos(t*32*Math.PI);
    return new T.Vector3(-1.05-r*length,(2*t-1)*(.086+r*.26),r*(.07*Math.sin(t*5)+.09*Math.sin(r*2)));
  });
  fin((t,r)=>{
    const x=.33-t*.99, crest=(.07+.20*Math.exp(-((t-.14)**2)/.012)+.07*Math.sin(Math.PI*t))*(1-.75*t);
    return surface(x,0).add(new T.Vector3(-r*.13,r*(crest+.012*Math.cos(t*32*Math.PI)),.024*r*Math.sin(t*6)));
  });
  for(const side of [-1,1]){
    for(const pelvic of [false,true])fin((t,r)=>{
      const root=surface(pelvic?-.28:.49,side*(pelvic?2.37:1.87));
      const fan=Math.sin(Math.PI*t)**.66, length=(pelvic?.57:1)*(.18+.34*fan);
      return root.add(new T.Vector3(-.12*t-r*(.04+.37*t),-.045*r+.048*fan*r,side*r*length*(1+.035*Math.cos(t*32*Math.PI))));
    },true);
    const eye=surface(.81,side*1.12,.013);
    oval(eye,[.055,.049,.042],0x937845);
    oval(eye.clone().add(new T.Vector3(.007,.011,side*.026)),[.037,.033,.022],0x161b19);
    oval(eye.clone().add(new T.Vector3(.015,.025,side*.043)),[.009,.008,.005],0xeeeedc);
    const cheek=Array.from({length:12},(_,i)=>surface(.55-.065*Math.sin(i/11*Math.PI),side*(.53+i/11*1.91),.003));
    line(cheek,.006,0x9e9276);
    oval(surface(.976,side*.89,.005),[.017,.007,.012],0x796b54);
    line([surface(1.065,side*1.95),new T.Vector3(1.12,-.073,.14*side),new T.Vector3(1.035,-.147,.19*side)],.008,0xc7ac83);
  }
  line([new T.Vector3(1.069,-.047,-.102),new T.Vector3(1.14,-.044,-.041),new T.Vector3(1.149,-.047,0),new T.Vector3(1.14,-.044,.041),new T.Vector3(1.069,-.047,.102)],.009,0x937665);
  return {fish,moving,rest:moving.map(g=>Float32Array.from(g.attributes.position.array))};
}
