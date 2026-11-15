import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export function plantLotuses(scene:T.Scene, random:()=>number) {
  // Opening controls both the spread of each whorl and how far the tips curl inward.
  const flowers=[
    {x:-2.95,z:-1.95,height:1.04,size:.68,open:.96,tip:0xdd85a1},
    {x:2.87,z:1.93,height:1.24,size:.64,open:.48,tip:0xd1517f},
    {x:-2.83,z:2.55,height:1.37,size:.59,open:.06,tip:0xb94571},
    {x:3.39,z:-2.55,height:.90,size:.49,open:.82,tip:0xf0b1ac}
  ];
  const petals=new T.MeshStandardMaterial({vertexColors:true,side:T.DoubleSide,roughness:.62});
  const stalk=new T.MeshStandardMaterial({color:0x667347,roughness:.76});
  const gold=new T.MeshStandardMaterial({color:0xe6ad45,roughness:.78});
  const pod=new T.MeshStandardMaterial({color:0xada749,roughness:.76});
  for(const flower of flowers){
    const {x,z,height,size,open}=flower;
    const lean=(random()-.5)*.36;
    const curve=new T.QuadraticBezierCurve3(new T.Vector3(x-.16,-1.1,z+.11),
      new T.Vector3(x+lean,.30,z+.16),new T.Vector3(x,height,z));
    scene.add(new T.Mesh(new T.TubeGeometry(curve,18,.022,8,false),stalk));
    const bloom=new T.Group();bloom.position.set(x,height,z);
    bloom.rotation.set(.13+random()*.21,random()*6,(random()-.5)*.38);
    bloom.scale.setScalar(size);scene.add(bloom);
    const blades:T.BufferGeometry[]=[];
    for(let layer=0;layer<4;layer++){
      const sepal=layer===0, count=[5,9,8,7][layer];
      for(let j=0;j<count;j++){
        const angle=(j+.42*layer+(random()-.5)*.14)*2*Math.PI/count;
        const long=(1.07-.105*layer)*(sepal?.81:1)*(.94+.12*random());
        const spread=.16+open*(1.45-.24*layer)+(sepal?.12:0);
        const tint=new T.Color(sepal?0x8a9163:flower.tip);
        const base=new T.Color(sepal?0x556d47:0xf5dddd);
        const pos:number[]=[], colors:number[]=[], indices:number[]=[];
        for(let row=0;row<=20;row++)for(let col=0;col<=16;col++){
          const t=row/20,u=col/8-1, belly=Math.sin(Math.PI*t);
          const width=(.012+.29*belly**.80)*(.87+.18*t);
          const radial=.035+.05*(3-layer)+long*(Math.sin(spread)*t+.23*belly*(1-open))
            -.09*u*u*belly;
          const y=.048*layer+long*(Math.cos(spread)*t+.17*belly)+.11*u*u*belly;
          pos.push(radial*Math.cos(angle)-u*width*Math.sin(angle),y,radial*Math.sin(angle)+u*width*Math.cos(angle));
          const blush=Math.min(1,.10+.67*t**2+.17*Math.abs(u)**3+.055*Math.cos(19*u+t)*belly);
          const c=base.clone().lerp(tint,blush);colors.push(c.r,c.g,c.b);
          const n=row*17+col;if(row<20&&col<16)indices.push(n,n+17,n+1,n+1,n+17,n+18);
        }
        const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));
        g.setAttribute('color',new T.Float32BufferAttribute(colors,3));g.setIndex(indices);g.computeVertexNormals();blades.push(g);
      }
    }
    bloom.add(new T.Mesh(mergeGeometries(blades),petals));
    if(open>.3){
      const center=new T.Mesh(new T.CylinderGeometry(.126,.074,.11,24),pod);
      center.position.y=.19;bloom.add(center);
      const tips=new T.InstancedMesh(new T.SphereGeometry(1,8,6),gold,42);
      const transform=new T.Object3D();
      for(let j=0;j<42;j++){
        const angle=j*2.40,r=.142+random()*.061;
        transform.position.set(r*Math.cos(angle),.22+random()*.055,r*Math.sin(angle));
        transform.scale.set(.015,.048,.015);transform.rotation.set(.22*Math.sin(angle),0,-.22*Math.cos(angle));
        transform.updateMatrix();tips.setMatrixAt(j,transform.matrix);
      }
      bloom.add(tips);
    }
  }
}
