import * as T from 'three';

function paint(w,h,draw) {
  const c=document.createElement('canvas'); c.width=w;c.height=h;
  draw(c.getContext('2d'),w,h);
  const map=new T.CanvasTexture(c); map.colorSpace=T.SRGBColorSpace;map.anisotropy=4;
  return map;
}
export function heatShield(){
  const map=paint(384,512,(ctx,w,h)=>{
    ctx.fillStyle='#202329';ctx.fillRect(0,0,w,h);
    for(let row=-1;row<=32;row++)for(let col=-1;col<=16;col++){
      const x=col*24+(row%2)*12,y=row*16;
      const shade=43+Math.round(9*Math.sin(row*5.3+col*13.2));
      ctx.fillStyle='rgb('+[shade,shade+2,shade+5]+')';ctx.beginPath();
      for(let j=0;j<6;j++){const a=j*Math.PI/3;ctx.lineTo(x+11.6*Math.sin(a),y+10.2*Math.cos(a));}
      ctx.closePath();ctx.fill();
    }
  });
  map.wrapS=map.wrapT=T.RepeatWrapping;map.repeat.set(3,6);
  return new T.MeshStandardMaterial({map,roughness:.86,bumpMap:map,bumpScale:.009});
}
export function frostedShell(){
  const map=paint(512,1024,(ctx,w,h)=>{
    const im=ctx.createImageData(w,h);
    for(let y=0;y<h;y++)for(let x=0;x<w;x++){
      const line=(y%36)<1.2?13:0;
      const edge=Math.sin(x/w*Math.PI*10)*.008+Math.cos(x/w*Math.PI*18)*.005;
      const frost=T.MathUtils.smoothstep(y/h+edge,.07,.13)*(1-T.MathUtils.smoothstep(y/h-edge,.90,.97));
      const s=137+frost*91+5*Math.sin(x*.12)+3*Math.cos(y*.12+x*.035)-line+(Math.random()-.5)*8;
      const k=(y*w+x)*4;im.data.set([s,s+1,s+2,255],k);
    }
    ctx.putImageData(im,0,0);
  });return new T.MeshStandardMaterial({map,roughness:.58,metalness:.30});
}

// A shaded cloud impostor: overlapping ellipsoids give the cloud a lit crown,
// a dense underside and an irregular silhouette even when several banks overlap.
export function cloudMap(seed){
  let state=seed;
  const rnd=()=>((state=(1664525*state+1013904223)>>>0)/4294967296);
  return paint(192,192,(ctx)=>{
    for(let j=0;j<80;j++){
      const a=rnd()*2*Math.PI, r=55*Math.sqrt(rnd()), x=96+Math.cos(a)*r, y=96+Math.sin(a)*r*.73;
      const size=14+rnd()*22, light=Math.round(217+(96-y)*.64);
      const gradient=ctx.createRadialGradient(x-size*.19,y-size*.25,size*.07,x,y,size);
      gradient.addColorStop(0,'rgba('+[light,light-2,light-7]+',.85)');
      gradient.addColorStop(.61,'rgba('+[light-15,light-18,light-22]+',.84)');
      gradient.addColorStop(1,'rgba(102,103,107,0)');
      ctx.fillStyle=gradient;ctx.fillRect(x-size,y-size,size*2,size*2);
    }
  });
}

export function exhaust(parent,radius,length){
  const group=new T.Group();parent.add(group);
  const shader=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.FrontSide,
    blending:T.NormalBlending,uniforms:{clock:{value:0},power:{value:0}},
    vertexShader:`varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec2 v;uniform float clock,power;
    void main(){float d=1.-v.y;
      float ripple=sin(v.x*75.+sin(d*17.-clock*8.)*1.8+d*54.-clock*21.);
      float bands=.5+.5*cos(d*37.+.5*sin(clock*4.));
      vec3 hot=mix(vec3(1.,.88,.57),vec3(1.,.31,.36),smoothstep(0.,.22,d));
      vec3 color=mix(hot,vec3(.61,.27,.94),smoothstep(.22,.92,d));
      float fade=(1.-smoothstep(.38,1.,d))*(.58+.22*bands+.17*ripple);
      gl_FragColor=vec4(color,fade*power);
      #include <colorspace_fragment>
    }`});
  const points=[[.015,-1],[.36,-.86],[.66,-.63],[.88,-.38],[1,-.20],[.85,-.08],[.78,0]];
  const geo=new T.LatheGeometry(points.map(([r,y])=>new T.Vector2(r*radius,y*length)),60);
  const plume=new T.Mesh(geo,shader);group.add(plume);
  const rings=parent.name==='Super Heavy'?[[3,.30],[10,.70],[20,1.07]]:[[3,.47],[3,.92]];
  const glow=new T.MeshBasicMaterial({color:0xffedd1,toneMapped:false});
  const outlets=new T.InstancedMesh(new T.CircleGeometry(.155,16),glow,rings.reduce((sum,[n])=>sum+n,0));
  const jets=new T.InstancedMesh(new T.ConeGeometry(.16,length*.3,12),new T.MeshBasicMaterial({
    color:0xffc7b3,transparent:true,opacity:.13,depthWrite:false,blending:T.AdditiveBlending}),outlets.count);
  const dummy=new T.Object3D();let k=0;
  for(const [count,r] of rings)for(let n=0;n<count;n++){
    const a=n*2*Math.PI/count;dummy.position.set(r*Math.sin(a),-.36,r*Math.cos(a));dummy.rotation.set(Math.PI/2,0,0);dummy.updateMatrix();outlets.setMatrixAt(k,dummy.matrix);
    dummy.position.y-=length*.15;dummy.rotation.set(Math.PI,0,0);dummy.updateMatrix();jets.setMatrixAt(k++,dummy.matrix);
  }
  group.add(outlets,jets);group.position.y=-.04;
  return (t,p)=>{group.visible=p>.002;plume.scale.y=p*(1+.025*Math.sin(t*31));jets.visible=p>.2;
    shader.uniforms.clock.value=t;shader.uniforms.power.value=p;};
}
