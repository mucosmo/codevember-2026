(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Dc="187",As={ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hp=0,Dh=1,Gp=2,xr=1,Vp=2,ur=3,ki=0,dn=1,Oe=2,Rs=0,vr=1,Rl=2,Nh=3,Uh=4,Wp=5,Es=100,Xp=101,qp=102,Yp=103,Kp=104,Zp=200,$p=201,Jp=202,jp=203,tf=204,ef=205,Qp=206,tm=207,em=208,nm=209,im=210,sm=211,rm=212,om=213,am=214,Cl=0,Pl=1,Ll=2,Tr=3,Il=4,Dl=5,Nl=6,Ul=7,nf=0,lm=1,cm=2,ni=0,sf=1,Nc=2,rf=3,Uc=4,of=5,Fc=6,Oc=7,Fh="attached",hm="detached",af=300,Is=301,Ar=302,ba=303,wa=304,is=1e3,ti=1001,Ko=1002,Ne=1003,lf=1004,dr=1005,$e=1006,Oo=1007,ei=1008,wn=1009,cf=1010,hf=1011,Rr=1012,kc=1013,Gn=1014,Ln=1015,xn=1016,Bc=1017,zc=1018,Ds=1020,uf=35902,df=35899,ff=1021,pf=1022,Bn=1023,Bi=1026,Oi=1027,Hc=1028,Gc=1029,ss=1030,Vc=1031,Wc=1033,ko=33776,Bo=33777,zo=33778,Ho=33779,Fl=35840,Ol=35841,kl=35842,Bl=35843,zl=36196,Hl=37492,Gl=37496,Vl=37488,Wl=37489,Zo=37490,Xl=37491,ql=37808,Yl=37809,Kl=37810,Zl=37811,$l=37812,Jl=37813,jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,oc=36492,ac=36494,lc=36495,cc=36283,hc=36284,$o=36285,uc=36286,Cr=2300,Pr=2301,Ea=2302,Oh=2303,kh=2400,Bh=2401,zh=2402,um=2500,dm=0,mf=1,dc=2,fm=3200,fc=0,pm=1,Ui="",Ve="srgb",vn="srgb-linear",Jo="linear",ye="srgb",Ta=7680,mm=519,gm=512,_m=513,xm=514,gf=515,vm=516,ym=517,_f=518,xf=519,vf=35044,Hh=35048,Gh="300 es",zn=2e3,Lr=2001;function Mm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bm(){const i=Ir("canvas");return i.style.display="block",i}const Vh={};function jo(...i){const t="THREE."+i.shift();console.log(t,...i)}function yf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=yf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=yf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cs(...i){const t=i.join(" ");t in Vh||(Vh[t]=!0,zt(...i))}function wm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Em={[Cl]:Cl,[Ll]:Nl,[Il]:Il,[Tr]:Dl,[Pl]:Pl,[Nl]:Ll,[Ul]:Ul,[Dl]:Tr};class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wh=1234567;const yr=Math.PI/180,Ns=180/Math.PI;function oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function Xc(i,t){return(i%t+t)%t}function Tm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Am(i,t,e){return i!==t?(e-i)/(t-i):0}function Mr(i,t,e){return(1-e)*i+e*t}function Rm(i,t,e,n){return Mr(i,t,1-Math.exp(-e*n))}function Cm(i,t=1){return t-Math.abs(Xc(i,t*2)-t)}function Pm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Lm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Im(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dm(i,t){return i+Math.random()*(t-i)}function Nm(i){return i*(.5-Math.random())}function Um(i){i!==void 0&&(Wh=i);let t=Wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fm(i){return i*yr}function Om(i){return i*Ns}function km(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Bm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zm(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function la(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qc(i,t){if(t.constructor===Float32Array)return i;const e=la(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Yc(i,t){if(t.constructor===Float32Array)return i;const e=la(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Qe={DEG2RAD:yr,RAD2DEG:Ns,generateUUID:oi,clamp:ie,euclideanModulo:Xc,mapLinear:Tm,inverseLerp:Am,lerp:Mr,damp:Rm,pingpong:Cm,smoothstep:Pm,smootherstep:Lm,randInt:Im,randFloat:Dm,randFloatSpread:Nm,seededRandom:Um,degToRad:Fm,radToDeg:Om,isPowerOfTwo:km,ceilPowerOfTwo:Bm,floorPowerOfTwo:Mf,setQuaternionFromProperEuler:zm,normalize:Yc,denormalize:qc};class Dt{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(u!==_||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const M=Math.acos(p),b=Math.sin(M);g=Math.sin(g*M)/b,a=Math.sin(a*M)/b,l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+_*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+_*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new y,Xh=new ge;class Kt{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],p=s[3],g=s[6],M=s[1],b=s[4],v=s[7],w=s[2],A=s[5],x=s[8];return r[0]=o*_+a*M+l*w,r[3]=o*p+a*b+l*A,r[6]=o*g+a*v+l*x,r[1]=c*_+h*M+u*w,r[4]=c*p+h*b+u*A,r[7]=c*g+h*v+u*x,r[2]=d*_+f*M+m*w,r[5]=d*p+f*b+m*A,r[8]=d*g+f*v+m*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Kt,qh=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hm(){const i={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?Jo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vn]:{primaries:t,whitePoint:n,transfer:Jo,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}const ae=Hm();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let cs;class Gm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cs===void 0&&(cs=Ir("canvas")),cs.width=t.width,cs.height=t.height;const s=cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vm=0;class Kc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ca(s[o].image)):r.push(Ca(s[o]))}else r=Ca(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let Wm=0;const Pa=new y;class We extends Hi{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=ti,s=ti,r=$e,o=ei,a=Bn,l=wn,c=We.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=oi(),this.name="",this.source=new Kc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=af;We.DEFAULT_ANISOTROPY=1;class Ee{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,v=(f+1)/2,w=(g+1)/2,A=(h+d)/4,x=(u+_)/4,S=(m+p)/4;return b>v&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=x/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=S/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=x/r,s=S/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xm extends Hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new We({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Kc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Xm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sf extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qm extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Vt{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,_,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ym,t,Km)}lookAt(t,e,n){const s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),bi.crossVectors(n,yn),bi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),bi.crossVectors(n,yn)),bi.normalize(),Wr.crossVectors(yn,bi),s[0]=bi.x,s[4]=Wr.x,s[8]=yn.x,s[1]=bi.y,s[5]=Wr.y,s[9]=yn.y,s[2]=bi.z,s[6]=Wr.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],M=n[3],b=n[7],v=n[11],w=n[15],A=s[0],x=s[4],S=s[8],F=s[12],C=s[1],L=s[5],D=s[9],I=s[13],R=s[2],O=s[6],k=s[10],U=s[14],X=s[3],N=s[7],G=s[11],W=s[15];return r[0]=o*A+a*C+l*R+c*X,r[4]=o*x+a*L+l*O+c*N,r[8]=o*S+a*D+l*k+c*G,r[12]=o*F+a*I+l*U+c*W,r[1]=h*A+u*C+d*R+f*X,r[5]=h*x+u*L+d*O+f*N,r[9]=h*S+u*D+d*k+f*G,r[13]=h*F+u*I+d*U+f*W,r[2]=m*A+_*C+p*R+g*X,r[6]=m*x+_*L+p*O+g*N,r[10]=m*S+_*D+p*k+g*G,r[14]=m*F+_*I+p*U+g*W,r[3]=M*A+b*C+v*R+w*X,r[7]=M*x+b*L+v*O+w*N,r[11]=M*S+b*D+v*k+w*G,r[15]=M*F+b*I+v*U+w*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],M=l*f-c*d,b=a*f-c*u,v=a*d-l*u,w=o*f-c*h,A=o*d-l*h,x=o*u-a*h;return e*(_*M-p*b+g*v)-n*(m*M-p*w+g*A)+s*(m*b-_*w+g*x)-r*(m*v-_*A+p*x)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],M=e*a-n*o,b=e*l-s*o,v=e*c-r*o,w=n*l-s*a,A=n*c-r*a,x=s*c-r*l,S=h*_-u*m,F=h*p-d*m,C=h*g-f*m,L=u*p-d*_,D=u*g-f*_,I=d*g-f*p,R=M*I-b*D+v*L+w*C-A*F+x*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/R;return t[0]=(a*I-l*D+c*L)*O,t[1]=(s*D-n*I-r*L)*O,t[2]=(_*x-p*A+g*w)*O,t[3]=(d*A-u*x-f*w)*O,t[4]=(l*C-o*I-c*F)*O,t[5]=(e*I-s*C+r*F)*O,t[6]=(p*v-m*x-g*b)*O,t[7]=(h*x-d*v+f*b)*O,t[8]=(o*D-a*C+c*S)*O,t[9]=(n*C-e*D-r*S)*O,t[10]=(m*A-_*v+g*M)*O,t[11]=(u*v-h*A-f*M)*O,t[12]=(a*F-o*L-l*S)*O,t[13]=(e*L-n*F+s*S)*O,t[14]=(_*b-m*w-p*M)*O,t[15]=(h*w-u*b+d*M)*O,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,_=o*h,p=o*u,g=a*u,M=l*c,b=l*h,v=l*u,w=n.x,A=n.y,x=n.z;return s[0]=(1-(_+g))*w,s[1]=(f+v)*w,s[2]=(m-b)*w,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(d+g))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(m+b)*x,s[9]=(p-M)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=hs.set(s[0],s[1],s[2]).length();const a=hs.set(s[4],s[5],s[6]).length(),l=hs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Fn.copy(this);const c=1/o,h=1/a,u=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=zn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===zn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===zn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Lr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hs=new y,Fn=new Vt,Ym=new y(0,0,0),Km=new y(1,1,1),bi=new y,Wr=new y,yn=new y,Kh=new Vt,Zh=new ge;class Vn{constructor(t=0,e=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zm=0;const $h=new y,us=new ge,ci=new Vt,Xr=new y,Xs=new y,$m=new y,Jm=new ge,Jh=new y(1,0,0),jh=new y(0,1,0),Qh=new y(0,0,1),tu={type:"added"},jm={type:"removed"},ds={type:"childadded",child:null},La={type:"childremoved",child:null};class Le extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new y,e=new Vn,n=new ge,s=new y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Kt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Jh,t)}rotateY(t){return this.rotateOnAxis(jh,t)}rotateZ(t){return this.rotateOnAxis(Qh,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jh,t)}translateY(t){return this.translateOnAxis(jh,t)}translateZ(t){return this.translateOnAxis(Qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Xs,Xr,this.up):ci.lookAt(Xr,Xs,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),us.setFromRotationMatrix(ci),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tu),ds.child=t,this.dispatchEvent(ds),ds.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jm),La.child=t,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tu),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,$m),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Jm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Le.DEFAULT_UP=new y(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class an extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qm={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Xc(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Da(o,r,t+1/3),this.g=Da(o,r,t),this.b=Da(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return ae.workingToColorSpace(rn.copy(this),t),Math.round(ie(rn.r*255,0,255))*65536+Math.round(ie(rn.g*255,0,255))*256+Math.round(ie(rn.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(rn.copy(this),e);const n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Ve){ae.workingToColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,s=rn.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(qr);const n=Mr(wi.h,qr.h,e),s=Mr(wi.s,qr.s,e),r=Mr(wi.l,qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Lt;Lt.NAMES=bf;class $c extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const On=new y,hi=new y,Na=new y,ui=new y,fs=new y,ps=new y,eu=new y,Ua=new y,Fa=new y,Oa=new y,ka=new Ee,Ba=new Ee,za=new Ee;class Pn{constructor(t=new y,e=new y,n=new y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),hi.subVectors(n,e),Na.subVectors(t,e);const o=On.dot(On),a=On.dot(hi),l=On.dot(Na),c=hi.dot(hi),h=hi.dot(Na),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ka.setScalar(0),Ba.setScalar(0),za.setScalar(0),ka.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,n),za.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ka,r.x),o.addScaledVector(Ba,r.y),o.addScaledVector(za,r.z),o}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),hi.subVectors(t,e),On.cross(hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;fs.subVectors(s,n),ps.subVectors(r,n),Ua.subVectors(t,n);const l=fs.dot(Ua),c=ps.dot(Ua);if(l<=0&&c<=0)return e.copy(n);Fa.subVectors(t,s);const h=fs.dot(Fa),u=ps.dot(Fa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(fs,o);Oa.subVectors(t,r);const f=fs.dot(Oa),m=ps.dot(Oa);if(m>=0&&f<=m)return e.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ps,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return eu.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(eu,a);const g=1/(p+_+d);return o=_*g,a=d*g,e.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ai{constructor(t=new y(1/0,1/0,1/0),e=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Kr.subVectors(this.max,qs),ms.subVectors(t.a,qs),gs.subVectors(t.b,qs),_s.subVectors(t.c,qs),Ei.subVectors(gs,ms),Ti.subVectors(_s,gs),Ki.subVectors(ms,_s);let e=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Ki.z,Ki.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Ki.z,0,-Ki.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Ki.y,Ki.x,0];return!Ha(e,ms,gs,_s,Kr)||(e=[1,0,0,0,1,0,0,0,1],!Ha(e,ms,gs,_s,Kr))?!1:(Zr.crossVectors(Ei,Ti),e=[Zr.x,Zr.y,Zr.z],Ha(e,ms,gs,_s,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const di=[new y,new y,new y,new y,new y,new y,new y,new y],kn=new y,Yr=new ai,ms=new y,gs=new y,_s=new y,Ei=new y,Ti=new y,Ki=new y,qs=new y,Kr=new y,Zr=new y,Zi=new y;function Ha(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zi.fromArray(i,r);const a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ze=new y,$r=new Dt;let t0=0;class Re extends Hi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vf,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=t!==void 0?la(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):qc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Yc(t,this.array)}}class ca extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wf extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}const e0=new ai,Ys=new y,Ga=new y;class Nn{constructor(t=new y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):e0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);const e=Ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(Ga)),this.expandByPoint(Ys.copy(t.center).sub(Ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let n0=0;const An=new Vt,Va=new Le,xs=new y,Mn=new ai,Ks=new ai,Ze=new y;class Se extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mm(t)?wf:ca)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(t){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(Mn.min,Ks.min),Mn.expandByPoint(Ze),Ze.addVectors(Mn.max,Ks.max),Mn.expandByPoint(Ze)):(Mn.expandByPoint(Ks.min),Mn.expandByPoint(Ks.max))}Mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(t,c),Ze.add(xs)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Re(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)a[F]=new y,l[F]=new y;const h=new y,u=new y,d=new y,f=new Dt,m=new Dt,_=new Dt,p=new y,g=new y;function M(F,C,L){c[F]=c[C]=c[L]=1,h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,L),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,L),u.sub(h),d.sub(h),m.sub(f),_.sub(f);const D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(D),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(D),a[F].add(p),a[C].add(p),a[L].add(p),l[F].add(g),l[C].add(g),l[L].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let F=0,C=b.length;F<C;++F){const L=b[F],D=L.start,I=L.count;for(let R=D,O=D+I;R<O;R+=3)M(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const v=new y,w=new y,A=new y,x=new y;function S(F){A.fromBufferAttribute(s,F),x.copy(A);const C=a[F];v.copy(C),v.sub(A.multiplyScalar(A.dot(C))).normalize(),w.crossVectors(x,C);const D=w.dot(l[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,D)}for(let F=0,C=n.count;F<C;++F)c[F]&&S(F);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new y,r=new y,o=new y,a=new y,l=new y,c=new y,h=new y,u=new y;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new Re(d,h,u)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class i0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vf,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=nu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=nu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function nu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=oi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const cn=new y;class Jc{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?la(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){jo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){jo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):qc(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Yc(t,this.data.array)}}const Wa=new y,s0=new y,r0=new Kt;class Sn{constructor(t=new y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wa.subVectors(n,e).cross(s0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Wa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||r0.getNormalMatrix(t),s=this.coplanarPoint(Wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let o0=0;class ii extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=vr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=ef,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Sn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const fi=new y,Xa=new y,Jr=new y,jr=new y;class Os{constructor(t=new y,e=new y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xa.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),jr.copy(this.origin).sub(Xa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Jr),a=jr.dot(this.direction),l=-jr.dot(Jr),c=jr.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xa).addScaledVector(Jr,d),f}intersectSphere(t,e){if(t.radius<0)return null;fi.subVectors(t.center,this.origin);const n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,M=n.y-o.y,b=n.z-o.z,v=Math.abs(l),w=Math.abs(c),A=Math.abs(h);let x,S,F,C,L,D,I,R,O,k,U,X;if(v>=w&&v>=A?(F=l,D=u,O=m,X=g,l>=0?(x=c,S=h,C=d,L=f,I=_,R=p,k=M,U=b):(x=h,S=c,C=f,L=d,I=p,R=_,k=b,U=M)):w>=A?(F=c,D=d,O=_,X=M,c>=0?(x=h,S=l,C=f,L=u,I=p,R=m,k=b,U=g):(x=l,S=h,C=u,L=f,I=m,R=p,k=g,U=b)):(F=h,D=f,O=p,X=b,h>=0?(x=l,S=c,C=u,L=d,I=m,R=_,k=g,U=M):(x=c,S=l,C=d,L=u,I=_,R=m,k=M,U=g)),F===0)return null;const N=x/F,G=S/F,W=1/F,tt=C-N*D,Z=L-G*D,H=I-N*O,J=R-G*O,Y=k-N*X,lt=U-G*X,st=Y*J-lt*H,bt=tt*lt-Z*Y,Qt=H*Z-J*tt;if(s){if(st<0||bt<0||Qt<0)return null}else if((st<0||bt<0||Qt<0)&&(st>0||bt>0||Qt>0))return null;const dt=st+bt+Qt;if(dt===0)return null;const Pt=W*(st*D+bt*O+Qt*X);return(dt>0?Pt<0:Pt>0)?null:this.at(Pt/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hn extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const iu=new Vt,$i=new Os,Qr=new Nn,su=new y,to=new y,eo=new y,no=new y,qa=new y,io=new y,ru=new y,so=new y;class de extends Le{constructor(t=new Se,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(qa.fromBufferAttribute(u,t),o?io.addScaledVector(qa,h):io.addScaledVector(qa.sub(e),h))}e.add(io)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(Qr.containsPoint($i.origin)===!1&&($i.intersectSphere(Qr,su)===null||$i.origin.distanceToSquared(su)>(t.far-t.near)**2))&&(iu.copy(r).invert(),$i.copy(t.ray).applyMatrix4(iu),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,w=b;v<w;v+=3){const A=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);s=ro(this,g,t,n,c,h,u,A,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const M=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);s=ro(this,o,t,n,c,h,u,M,b,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,w=b;v<w;v+=3){const A=v,x=v+1,S=v+2;s=ro(this,g,t,n,c,h,u,A,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const M=p,b=p+1,v=p+2;s=ro(this,o,t,n,c,h,u,M,b,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function a0(i,t,e,n,s,r,o,a){let l;if(t.side===dn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ki,a),l===null)return null;so.copy(a),so.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(so);return c<e.near||c>e.far?null:{distance:c,point:so.clone(),object:i}}function ro(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,to),i.getVertexPosition(l,eo),i.getVertexPosition(c,no);const h=a0(i,t,e,n,to,eo,no,ru);if(h){const u=new y;Pn.getBarycoord(ru,to,eo,no,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,a,l,c,u,new Dt)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,a,l,c,u,new Dt)),o&&(h.normal=Pn.getInterpolatedAttribute(o,a,l,c,u,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new y,materialIndex:0};Pn.getNormal(to,eo,no,d.normal),h.face=d,h.barycoord=u}return h}const Zs=new Ee,ou=new Ee,au=new Ee,l0=new Ee,lu=new Vt,oo=new y,Ya=new Nn,cu=new Vt,Ka=new Os;class jn extends de{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new Vt,this.bindMatrixInverse=new Vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,oo),this.boundingBox.expandByPoint(oo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,oo),this.boundingSphere.expandByPoint(oo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ya.copy(this.boundingSphere),Ya.applyMatrix4(s),t.ray.intersectsSphere(Ya)!==!1&&(cu.copy(s).invert(),Ka.copy(t.ray).applyMatrix4(cu),!(this.boundingBox!==null&&Ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ka)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ee,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():zt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;ou.fromBufferAttribute(s.attributes.skinIndex,t),au.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(Zs.copy(e),e.set(0,0,0,0)):(Zs.set(e.x,e.y,e.z,1),e.set(0,0,0)),Zs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=au.getComponent(r);if(o!==0){const a=ou.getComponent(r);lu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(l0.copy(Zs).applyMatrix4(lu),o)}}return e.isVector4&&(e.w=Zs.w),e.applyMatrix4(this.bindMatrixInverse)}}class jc extends Le{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ha extends We{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ne,h=Ne,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=new Vt,c0=new Vt;class ua{constructor(t=[],e=[]){this.uuid=oi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){zt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Vt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Vt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:c0;hu.multiplyMatrices(a,e[r]),hu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ua(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ha(e,t,t,Bn,Ln);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(zt("Skeleton: No bone found with UUID:",r),o=new jc),this.bones.push(o),this.boneInverses.push(new Vt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Qo extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new Vt,uu=new Vt,ao=[],du=new ai,h0=new Vt,$s=new de,Js=new Nn;class u0 extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,h0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),du.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(du)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),Js.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),uu.multiplyMatrices(n,vs),$s.matrixWorld=uu,$s.raycast(t,ao);for(let o=0,a=ao.length;o<a;o++){const l=ao[o];l.instanceId=r,l.object=this,e.push(l)}ao.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ha(new Float32Array(s*this.count),s,this.count,Hc,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ji=new Nn,d0=new Dt(.5,.5),lo=new y;class Dr{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],M=r[12],b=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,f-h,g-m,w-M).normalize(),s[1].setComponents(c+o,f+h,g+m,w+M).normalize(),s[2].setComponents(c+a,f+u,g+_,w+b).normalize(),s[3].setComponents(c-a,f-u,g-_,w-b).normalize(),n)s[4].setComponents(l,d,p,v).normalize(),s[5].setComponents(c-l,f-d,g-p,w-v).normalize();else if(s[4].setComponents(c-l,f-d,g-p,w-v).normalize(),e===zn)s[5].setComponents(c+l,f+d,g+p,w+v).normalize();else if(e===Lr)s[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){Ji.center.set(0,0,0);const e=d0.distanceTo(t.center);return Ji.radius=.7071067811865476+e,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(lo.x=s.normal.x>0?t.max.x:t.min.x,lo.y=s.normal.y>0?t.max.y:t.min.y,lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const fu=new Vt;class Qc{constructor(){this.coordinateSystem=zn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];fu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Dr),n[s].setFromProjectionMatrix(fu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Dr),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Qc().copy(this)}}class da extends ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ta=new y,ea=new y,pu=new Vt,js=new Os,co=new Nn,Za=new y,mu=new y;class th extends Le{constructor(t=new Se,e=new da){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ta.fromBufferAttribute(e,s-1),ea.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ta.distanceTo(ea);t.setAttribute("lineDistance",new jt(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,t.ray.intersectsSphere(co)===!1)return;pu.copy(s).invert(),js.copy(t.ray).applyMatrix4(pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=c){const g=h.getX(_),M=h.getX(_+1),b=ho(this,t,js,l,g,M,_);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(m-1),p=h.getX(f),g=ho(this,t,js,l,_,p,m-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=c){const g=ho(this,t,js,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){const _=ho(this,t,js,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ho(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(ta.fromBufferAttribute(a,s),ea.fromBufferAttribute(a,r),e.distanceSqToSegment(ta,ea,Za,mu)>n)return;Za.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Za);if(!(c<t.near||c>t.far))return{distance:c,point:mu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const gu=new y,_u=new y;class na extends th{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gu.fromBufferAttribute(e,s),_u.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gu.distanceTo(_u);t.setAttribute("lineDistance",new jt(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class f0 extends th{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ef extends ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xu=new Vt,pc=new Os,uo=new Nn,fo=new y;class Tf extends Le{constructor(t=new Se,e=new Ef){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,t.ray.intersectsSphere(uo)===!1)return;xu.copy(s).invert(),pc.copy(t.ray).applyMatrix4(xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const p=c.getX(m);fo.fromBufferAttribute(u,p),vu(fo,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)fo.fromBufferAttribute(u,m),vu(fo,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vu(i,t,e,n,s,r,o){const a=pc.distanceSqToPoint(i);if(a<e){const l=new y;pc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Af extends We{constructor(t=[],e=Is,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class p0 extends We{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rs extends We{constructor(t,e,n=Gn,s,r,o,a=Ne,l=Ne,c,h=Bi,u=1){if(h!==Bi&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Rf extends rs{constructor(t,e=Gn,n=Is,s,r,o=Ne,a=Ne,l,c=Bi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Cf extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class zr extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function m(_,p,g,M,b,v,w,A,x,S,F){const C=v/x,L=w/S,D=v/2,I=w/2,R=A/2,O=x+1,k=S+1;let U=0,X=0;const N=new y;for(let G=0;G<k;G++){const W=G*L-I;for(let tt=0;tt<O;tt++){const Z=tt*C-D;N[_]=Z*M,N[p]=W*b,N[g]=R,c.push(N.x,N.y,N.z),N[_]=0,N[p]=0,N[g]=A>0?1:-1,h.push(N.x,N.y,N.z),u.push(tt/x),u.push(1-G/S),U+=1}}for(let G=0;G<S;G++)for(let W=0;W<x;W++){const tt=d+W+O*G,Z=d+W+O*(G+1),H=d+(W+1)+O*(G+1),J=d+(W+1)+O*G;l.push(tt,Z,J),l.push(Z,H,J),X+=6}a.addGroup(f,X,F),f+=X,d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class eh extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new y,h=new Dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class fa extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],p=n/2;let g=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function M(){const v=new y,w=new y;let A=0;const x=(e-t)/n;for(let S=0;S<=r;S++){const F=[],C=S/r,L=C*(e-t)+t;for(let D=0;D<=s;D++){const I=D/s,R=I*l+a,O=Math.sin(R),k=Math.cos(R);w.x=L*O,w.y=-C*n+p,w.z=L*k,u.push(w.x,w.y,w.z),v.set(O,x,k).normalize(),d.push(v.x,v.y,v.z),f.push(I,1-C),F.push(m++)}_.push(F)}for(let S=0;S<s;S++)for(let F=0;F<r;F++){const C=_[F][S],L=_[F+1][S],D=_[F+1][S+1],I=_[F][S+1];(t>0||F!==0)&&(h.push(C,L,I),A+=3),(e>0||F!==r-1)&&(h.push(L,D,I),A+=3)}c.addGroup(g,A,0),g+=A}function b(v){const w=m,A=new Dt,x=new y;let S=0;const F=v===!0?t:e,C=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,p*C,0),d.push(0,C,0),f.push(.5,.5),m++;const L=m;for(let D=0;D<=s;D++){const R=D/s*l+a,O=Math.cos(R),k=Math.sin(R);x.x=F*k,x.y=p*C,x.z=F*O,u.push(x.x,x.y,x.z),d.push(0,C,0),A.x=O*.5+.5,A.y=k*.5*C+.5,f.push(A.x,A.y),m++}for(let D=0;D<s;D++){const I=w+D,R=L+D;v===!0?h.push(R,R+1,I):h.push(R+1,R,I),S+=3}c.addGroup(g,S,v===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class m0{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Dt:new y);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new y,s=[],r=[],o=[],a=new y,l=new Vt;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new y)}r[0]=new y,o[0]=new y;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function nh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const yu=new y,Mu=new y,$a=new nh,Ja=new nh,ja=new nh;class mc extends m0{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new y){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Mu.subVectors(s[0],s[1]).add(s[0]),c=Mu);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),$a.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,p),Ja.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,p),ja.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&($a.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ja.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ja.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set($a.calc(l),Ja.calc(l),ja.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class ls extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const M=g*d-o;for(let b=0;b<c;b++){const v=b*u-r;m.push(v,-M,0),_.push(0,0,1),p.push(b/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const b=M+c*g,v=M+c*(g+1),w=M+1+c*(g+1),A=M+1+c*g;f.push(b,v,A),f.push(v,w,A)}this.setIndex(f),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gi extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new y,d=new y,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const M=[],b=g/n,v=o+b*a,w=t*Math.cos(v),A=Math.sqrt(t*t-w*w);let x=0;g===0&&o===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){const F=S/e,C=s+F*r;u.x=-A*Math.cos(C),u.y=w,u.z=A*Math.sin(C),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(F+x,1-b),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const b=h[g][M+1],v=h[g][M],w=h[g+1][M],A=h[g+1][M+1];(g!==0||o>0)&&f.push(b,v,A),(g!==n-1||l<Math.PI)&&f.push(v,w,A)}this.setIndex(f),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Su(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Su(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function hn(i){const t={};for(let e=0;e<i.length;e++){const n=Us(i[e]);for(const s in n)t[s]=n[s]}return t}function Su(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function g0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const _0={clone:Us,merge:hn};var x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=g0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Vt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class y0 extends _n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fn extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pn extends fn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Lf extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class M0 extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Li(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function S0(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function bu(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function b0(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class ks{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class w0 extends ks{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kh,endingEnd:kh}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bh:r=t,a=2*e-n;break;case zh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:o=t,l=2*n-e;break;case zh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,M=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,b=(-1-f)*p+(1.5+f)*_+.5*m,v=f*p-f*_;for(let w=0;w!==a;++w)r[w]=g*o[h+w]+M*o[c+w]+b*o[l+w]+v*o[u+w];return r}}class E0 extends ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class T0 extends ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class A0 extends ks{interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){const m=(n-e)/(s-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}const d=a*2,f=t-1;for(let m=0;m!==a;++m){const _=o[c+m],p=o[l+m],g=f*d+m*2,M=u[g],b=u[g+1],v=t*d+m*2,w=h[v],A=h[v+1],x=C0(n,e,M,w,s);r[m]=If(x,_,b,A,p)}return r}}function If(i,t,e,n,s){const r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function R0(i,t,e,n,s){const r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function C0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){const a=If(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;const l=R0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class qn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Li(e,this.TimeBufferType),this.values=Li(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Li(t.times,Array),values:Li(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),fr(t.settings)&&(n.settings={inTangents:Li(t.settings.inTangents,Array),outTangents:Li(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new T0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new E0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new w0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new A0(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case Pr:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case Oh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Pr;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return Oh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;fr(this.settings)&&(wu(this.settings.inTangents,t),wu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;fr(this.settings)&&(Eu(this.settings.inTangents,t),Eu(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Sm(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,fr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}}function wu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Eu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Pr;class Bs extends qn{constructor(t,e,n){super(t,e,n)}}Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Cr;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Df extends qn{constructor(t,e,n,s){super(t,e,n,s)}}Df.prototype.ValueTypeName="color";class Nr extends qn{constructor(t,e,n,s){super(t,e,n,s)}}Nr.prototype.ValueTypeName="number";class P0 extends ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e);let c=t*a;for(let h=c+a;c!==h;c+=4)ge.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ur extends qn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new P0(this.times,this.values,this.getValueSize(),t)}}Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends qn{constructor(t,e,n){super(t,e,n)}}zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Cr;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class ia extends qn{constructor(t,e,n,s){super(t,e,n,s)}}ia.prototype.ValueTypeName="vector";class L0{constructor(t="",e=-1,n=[],s=um){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(D0(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(qn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=S0(l);l=bu(l,1,h),c=bu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Nr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function I0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nr;case"vector":case"vector2":case"vector3":case"vector4":return ia;case"color":return Df;case"quaternion":return Ur;case"bool":case"boolean":return Bs;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function D0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=I0(i.type);if(i.times===void 0){const n=[],s=[];b0(i.keys,n,s,"value"),i.times=n,i.values=s}let e;return t.parse!==void 0?e=t.parse(i):e=new t(i.name,i.times,i.values,i.interpolation),fr(i.settings)&&(e.settings={inTangents:Li(i.settings.inTangents,Float32Array),outTangents:Li(i.settings.outTangents,Float32Array)}),e}const _i={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Tu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Tu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Tu(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class N0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const U0=new N0;class Hs{constructor(t){this.manager=t!==void 0?t:U0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Hs.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class F0 extends Error{constructor(t,e){super(t),this.response=e}}class Nf extends Hs{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=_i.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(pi[t]!==void 0){pi[t].push({onLoad:e,onProgress:n,onError:s});return}pi[t]=[],pi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&zt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=pi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const p=new ReadableStream({start(g){M();function M(){u.read().then(({done:b,value:v})=>{if(b)g.close();else{_+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let A=0,x=h.length;A<x;A++){const S=h[A];S.onProgress&&S.onProgress(w)}g.enqueue(v),M()}},b=>{g.error(b)})}}});return new Response(p)}else throw new F0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{_i.add(`file:${t}`,c);const h=pi[t];delete pi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=pi[t];if(h===void 0)throw this.manager.itemError(t),c;delete pi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ys=new WeakMap;class O0 extends Hs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=_i.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=ys.get(o);u===void 0&&(u=[],ys.set(o,u)),u.push({onLoad:e,onError:s})}return o}const a=Ir("img");function l(){h(),e&&e(this);const u=ys.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ys.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),_i.remove(`image:${t}`);const d=ys.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}ys.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),_i.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class k0 extends Hs{constructor(t){super(t)}load(t,e,n,s){const r=new We,o=new O0(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class pa extends Le{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class B0 extends pa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Qa=new Vt,Au=new y,Ru=new y;class ih{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Au.setFromMatrixPosition(t.matrixWorld),e.position.copy(Au),Ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ru),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Qa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Lr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const po=new y,mo=new ge,Yn=new y;class Uf extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(po,mo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(po,mo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new y,Cu=new Dt,Pu=new Dt;class gn extends Uf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,Cu,Pu),e.subVectors(Pu,Cu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class z0 extends ih{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ns*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class H0 extends pa{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new z0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class G0 extends ih{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class V0 extends pa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new G0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ma extends Uf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class W0 extends ih{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sh extends pa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new W0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Sr{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const tl=new WeakMap;class X0 extends Hs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&zt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&zt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=_i.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{tl.has(o)===!0?(s&&s(tl.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),tl.set(l,c),_i.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});_i.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ms=-90,Ss=1;class gc extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(Ms,Ss,t,e);s.layers=this.layers,this.add(s);const r=new gn(Ms,Ss,t,e);r.layers=this.layers,this.add(r);const o=new gn(Ms,Ss,t,e);o.layers=this.layers,this.add(o);const a=new gn(Ms,Ss,t,e);a.layers=this.layers,this.add(a);const l=new gn(Ms,Ss,t,e);l.layers=this.layers,this.add(l);const c=new gn(Ms,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class q0 extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Y0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=K0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function K0(){this._document.hidden===!1&&this.reset()}const rh="\\[\\]\\.:\\/",Z0=new RegExp("["+rh+"]","g"),oh="[^"+rh+"]",$0="[^"+rh.replace("\\.","")+"]",J0=/((?:WC+[\/:])*)/.source.replace("WC",oh),j0=/(WCOD+)?/.source.replace("WCOD",$0),Q0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),eg=new RegExp("^"+J0+j0+Q0+tg+"$"),ng=["material","materials","bones","map"];class ig{constructor(t,e,n){const s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Me{constructor(t,e,n){this.path=e,this.parsedPath=n||Me.parseTrackName(e),this.node=Me.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Me.Composite(t,e,n):new Me(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Z0,"")}static parseTrackName(t){const e=eg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);ng.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Me.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[s];if(o===void 0){const c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Me.Composite=ig;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Lu=new Vt;class Ff{constructor(t,e,n=0,s=1/0){this.ray=new Os(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(t,e=!0,n=[]){return _c(t,this,n,e),n.sort(Iu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_c(t[s],this,n,e);return n.sort(Iu),n}}function Iu(i,t){return i.distance-t.distance}function _c(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)_c(r[o],t,e,!0)}}class xc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ri=new y,go=new Vt,el=new Vt;class sg extends na{constructor(t){const e=Of(t),n=new Se,s=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new jt(s,3)),n.setAttribute("color",new jt(r,3));const o=new da({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const a=new Lt(255),l=new Lt(65280);this.setColors(a,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,s=n.getAttribute("position");el.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(go.multiplyMatrices(el,a.matrixWorld),Ri.setFromMatrixPosition(go),s.setXYZ(o,Ri.x,Ri.y,Ri.z),go.multiplyMatrices(el,a.parent.matrixWorld),Ri.setFromMatrixPosition(go),s.setXYZ(o+1,Ri.x,Ri.y,Ri.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,t.r,t.g,t.b),s.setXYZ(r+1,e.r,e.g,e.b);return s.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Of(i){const t=[];i.isBone===!0&&t.push(i);for(let e=0;e<i.children.length;e++)t.push(...Of(i.children[e]));return t}class rg extends Hi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Du(i,t,e,n){const s=og(n);switch(e){case ff:return i*t;case Hc:return i*t/s.components*s.byteLength;case Gc:return i*t/s.components*s.byteLength;case ss:return i*t*2/s.components*s.byteLength;case Vc:return i*t*2/s.components*s.byteLength;case pf:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case Wc:return i*t*4/s.components*s.byteLength;case ko:case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ol:case Bl:return Math.max(i,16)*Math.max(t,8)/4;case Fl:case kl:return Math.max(i,8)*Math.max(t,8)/2;case zl:case Hl:case Vl:case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gl:case Zo:case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oc:case ac:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $o:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function og(i){switch(i){case wn:case cf:return{byteLength:1,components:1};case Rr:case hf:case xn:return{byteLength:2,components:1};case Bc:case zc:return{byteLength:2,components:4};case Gn:case kc:case Ln:return{byteLength:4,components:1};case uf:case df:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);function kf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ag(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ig=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,h_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,__=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ix=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:lg,alphahash_pars_fragment:cg,alphamap_fragment:hg,alphamap_pars_fragment:ug,alphatest_fragment:dg,alphatest_pars_fragment:fg,aomap_fragment:pg,aomap_pars_fragment:mg,batching_pars_vertex:gg,batching_vertex:_g,begin_vertex:xg,beginnormal_vertex:vg,bsdfs:yg,iridescence_fragment:Mg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:wg,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:Tg,color_fragment:Ag,color_pars_fragment:Rg,color_pars_vertex:Cg,color_vertex:Pg,common:Lg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ng,emissivemap_fragment:Ug,emissivemap_pars_fragment:Fg,colorspace_fragment:Og,colorspace_pars_fragment:kg,envmap_fragment:Bg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Hg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:Qg,envmap_vertex:Vg,fog_vertex:Wg,fog_pars_vertex:Xg,fog_fragment:qg,fog_pars_fragment:Yg,gradientmap_pars_fragment:Kg,lightmap_pars_fragment:Zg,lights_lambert_fragment:$g,lights_lambert_pars_fragment:Jg,lights_pars_begin:jg,lights_toon_fragment:t_,lights_toon_pars_fragment:e_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:s_,lights_physical_pars_fragment:r_,lights_fragment_begin:o_,lights_fragment_maps:a_,lights_fragment_end:l_,lightprobes_pars_fragment:c_,logdepthbuf_fragment:h_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:f_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:__,metalnessmap_fragment:x_,metalnessmap_pars_fragment:v_,morphinstance_vertex:y_,morphcolor_vertex:M_,morphnormal_vertex:S_,morphtarget_pars_vertex:b_,morphtarget_vertex:w_,normal_fragment_begin:E_,normal_fragment_maps:T_,normal_pars_fragment:A_,normal_pars_vertex:R_,normal_vertex:C_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:I_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:N_,opaque_fragment:U_,packing:F_,premultiplied_alpha_fragment:O_,project_vertex:k_,dithering_fragment:B_,dithering_pars_fragment:z_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:G_,shadowmap_pars_fragment:V_,shadowmap_pars_vertex:W_,shadowmap_vertex:X_,shadowmask_pars_fragment:q_,skinbase_vertex:Y_,skinning_pars_vertex:K_,skinning_vertex:Z_,skinnormal_vertex:$_,specularmap_fragment:J_,specularmap_pars_fragment:j_,tonemapping_fragment:Q_,tonemapping_pars_fragment:tx,transmission_fragment:ex,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ox,background_vert:ax,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:hx,cube_vert:ux,cube_frag:dx,depth_vert:fx,depth_frag:px,distance_vert:mx,distance_frag:gx,equirect_vert:_x,equirect_frag:xx,linedashed_vert:vx,linedashed_frag:yx,meshbasic_vert:Mx,meshbasic_frag:Sx,meshlambert_vert:bx,meshlambert_frag:wx,meshmatcap_vert:Ex,meshmatcap_frag:Tx,meshnormal_vert:Ax,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Lx,meshphysical_frag:Ix,meshtoon_vert:Dx,meshtoon_frag:Nx,points_vert:Ux,points_frag:Fx,shadow_vert:Ox,shadow_frag:kx,sprite_vert:Bx,sprite_frag:zx},Et={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Qn={basic:{uniforms:hn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:hn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:hn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:hn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:hn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:hn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:hn([Et.points,Et.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:hn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:hn([Et.common,Et.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:hn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:hn([Et.sprite,Et.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:hn([Et.common,Et.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:hn([Et.lights,Et.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Qn.physical={uniforms:hn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const _o={r:0,b:0,g:0},Hx=new Vt,Bf=new Kt;Bf.set(-1,0,0,0,1,0,0,0,1);function Gx(i,t,e,n,s,r){const o=new Lt(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const v=M.backgroundBlurriness>0;b=t.get(b,v)}return b}function m(M){let b=!1;const v=f(M);v===null?p(o,a):v&&v.isColor&&(p(v,1),b=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,b){const v=f(b);v&&v.isCubeTexture?(c===void 0&&(c=new de(new zr(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Us(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bf),c.material.toneMapped=ae.getTransfer(v.colorSpace)!==ye,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new de(new ls(2,2),new _n({name:"BackgroundMaterial",uniforms:Us(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ae.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,b){M.getRGB(_o,Pf(i)),e.buffers.color.setClear(_o.r,_o.g,_o.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:m,addToRenderList:_,dispose:g}}function Vx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(L,D,I,R,O){let k=!1;const U=u(L,R,I,D);r!==U&&(r=U,c(r.object)),k=f(L,R,I,O),k&&m(L,R,I,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(L,D,I,R),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,D,I,R){const O=R.wireframe===!0;let k=n[D.id];k===void 0&&(k={},n[D.id]=k);const U=L.isInstancedMesh===!0?L.id:0;let X=k[U];X===void 0&&(X={},k[U]=X);let N=X[I.id];N===void 0&&(N={},X[I.id]=N);let G=N[O];return G===void 0&&(G=d(l()),N[O]=G),G}function d(L){const D=[],I=[],R=[];for(let O=0;O<e;O++)D[O]=0,I[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:R,object:L,attributes:{},index:null}}function f(L,D,I,R){const O=r.attributes,k=D.attributes;let U=0;const X=I.getAttributes();for(const N in X)if(X[N].location>=0){const W=O[N];let tt=k[N];if(tt===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),W===void 0||W.attribute!==tt||tt&&W.data!==tt.data)return!0;U++}return r.attributesNum!==U||r.index!==R}function m(L,D,I,R){const O={},k=D.attributes;let U=0;const X=I.getAttributes();for(const N in X)if(X[N].location>=0){let W=k[N];W===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(W=L.instanceColor));const tt={};tt.attribute=W,W&&W.data&&(tt.data=W.data),O[N]=tt,U++}r.attributes=O,r.attributesNum=U,r.index=R}function _(){const L=r.newAttributes;for(let D=0,I=L.length;D<I;D++)L[D]=0}function p(L){g(L,0)}function g(L,D){const I=r.newAttributes,R=r.enabledAttributes,O=r.attributeDivisors;I[L]=1,R[L]===0&&(i.enableVertexAttribArray(L),R[L]=1),O[L]!==D&&(i.vertexAttribDivisor(L,D),O[L]=D)}function M(){const L=r.newAttributes,D=r.enabledAttributes;for(let I=0,R=D.length;I<R;I++)D[I]!==L[I]&&(i.disableVertexAttribArray(I),D[I]=0)}function b(L,D,I,R,O,k,U){U===!0?i.vertexAttribIPointer(L,D,I,O,k):i.vertexAttribPointer(L,D,I,R,O,k)}function v(L,D,I,R){_();const O=R.attributes,k=I.getAttributes(),U=D.defaultAttributeValues;for(const X in k){const N=k[X];if(N.location>=0){let G=O[X];if(G===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const W=G.normalized,tt=G.itemSize,Z=t.get(G);if(Z===void 0)continue;const H=Z.buffer,J=Z.type,Y=Z.bytesPerElement,lt=J===i.INT||J===i.UNSIGNED_INT||G.gpuType===kc;if(G.isInterleavedBufferAttribute){const st=G.data,bt=st.isInterleavedBuffer===!0?st.stride:st.itemSize,Qt=G.offset;if(st.isInstancedInterleavedBuffer||st.isInstancedBufferAttribute){for(let dt=0;dt<N.locationSize;dt++)g(N.location+dt,st.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let dt=0;dt<N.locationSize;dt++)p(N.location+dt);i.bindBuffer(i.ARRAY_BUFFER,H);for(let dt=0;dt<N.locationSize;dt++)b(N.location+dt,tt/N.locationSize,J,W,bt*Y,(Qt+tt/N.locationSize*dt)*Y,lt)}else{if(G.isInstancedBufferAttribute){for(let st=0;st<N.locationSize;st++)g(N.location+st,G.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let st=0;st<N.locationSize;st++)p(N.location+st);i.bindBuffer(i.ARRAY_BUFFER,H);for(let st=0;st<N.locationSize;st++)b(N.location+st,tt/N.locationSize,J,W,tt*Y,tt/N.locationSize*st*Y,lt)}}else if(U!==void 0){const W=U[X];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(N.location,W);break;case 3:i.vertexAttrib3fv(N.location,W);break;case 4:i.vertexAttrib4fv(N.location,W);break;default:i.vertexAttrib1fv(N.location,W)}}}}M()}function w(){F();for(const L in n){const D=n[L];for(const I in D){const R=D[I];for(const O in R){const k=R[O];for(const U in k)h(k[U].object),delete k[U];delete R[O]}}delete n[L]}}function A(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const I in D){const R=D[I];for(const O in R){const k=R[O];for(const U in k)h(k[U].object),delete k[U];delete R[O]}}delete n[L.id]}function x(L){for(const D in n){const I=n[D];for(const R in I){const O=I[R];if(O[L.id]===void 0)continue;const k=O[L.id];for(const U in k)h(k[U].object),delete k[U];delete O[L.id]}}}function S(L){for(const D in n){const I=n[D],R=L.isInstancedMesh===!0?L.id:0,O=I[R];if(O!==void 0){for(const k in O){const U=O[k];for(const X in U)h(U[X].object),delete U[X];delete O[k]}delete I[R],Object.keys(I).length===0&&delete n[D]}}}function F(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Wx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Xx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Bn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const S=x===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==wn&&x!==Ln&&!S&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,maxSamples:w,samples:A}}function qx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Sn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,b=M*4;let v=g.clippingState||null;l.value=v,v=h(m,d,b,f);for(let w=0;w!==b;++w)v[w]=e[w];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,v=f;b!==_;++b,v+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}class ah extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Af(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zr(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Rs});r.uniforms.tEquirect.value=e;const o=new de(s,r),a=e.minFilter;return e.minFilter===ei&&(e.minFilter=$e),new gc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Nu=256,Yx=3,Kx=20,zf=256,Hf=16,Zx=3,$x=new y,Jx=new Lt;class Fr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gc(1,10,null),this._boxMesh=new de(new zr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=$x}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Jx));const p=new gc(n,s,h);return p.position.copy(a),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Nu,Mf(t))}_fromTexture(t,e){t.mapping===Is||t.mapping===Ar?this._setSize(t.image.length===0?Nu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Uu(t,!1,!1),n=Math.log2(t)-Yx;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Uu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Is||t.mapping===Ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=jx(),this._integrationMaterial=Qx());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Hf);for(let o=0;o<=n;o++){const a=Fr.lodToRoughness(o,n);if(o>n-Zx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(zf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=tv());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Uu(i,t,e){return new ah(i,{minFilter:ei,generateMipmaps:t,type:xn,colorSpace:vn,depthBuffer:e})}function Hr(i,t,e){return new _n({name:i,uniforms:t,vertexShader:re.cube_vert,fragmentShader:e,side:dn,blending:Rs,depthTest:!1,depthWrite:!1})}function jx(){return Hr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Qx(){return Hr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function tv(){return Hr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Kx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Fu(){return Hr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ou(){return Hr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ev(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===ba||f===wa)if(t.has(d)){const m=t.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new ah(m.height);return _.fromEquirectangularTexture(i,d),t.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,m=f===ba||f===wa,_=f===Is||f===Ar;if(m||_){let p=e.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Fr(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Fr(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===ba?d.mapping=Is:f===wa&&(d.mapping=Ar),d}function l(d){let f=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function nv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function iv(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);const _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){const _=m.attributes;for(const p in _)t.update(_[p],i.ARRAY_BUFFER)}function u(m){const _=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const M=_!==null?_.array.length:p.array.length/3-1,b=p.count>=65535?wf:ca,v=new b(Math.ceil(M/3)*6,1),w=v.array;if(_!==null){const x=_.array;g=_.version;for(let S=0,F=0;S<M;S+=3){const C=x[S+0],L=x[S+1],D=x[S+2];w[F++]=C,w[F++]=L,w[F++]=L,w[F++]=D,w[F++]=D,w[F++]=C}}else{g=p.version;for(let x=0,S=0;x<M;x+=3){const F=x+0,C=x+1,L=x+2;w[S++]=F,w[S++]=C,w[S++]=C,w[S++]=L,w[S++]=L,w[S++]=F}}v.version=g;const A=r.get(m);A&&t.remove(A),r.set(m,v)}function d(m){const _=r.get(m);if(_){const p=m.index;p!==null&&_.version<p.version&&u(m)}else u(m);return r.get(m)}function f(){for(const m in s){const _=s[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function sv(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function rv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ov(i,t,e){const n=new WeakMap,s=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let C=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var f=C;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let w=a.attributes.position.count*v,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const x=new Float32Array(w*A*4*u),S=new Sf(x,w,A,u);S.type=Ln,S.needsUpdate=!0;const F=v*4;for(let L=0;L<u;L++){const D=g[L],I=M[L],R=b[L],O=w*A*4*L;for(let k=0;k<D.count;k++){const U=k*F;m===!0&&(s.fromBufferAttribute(D,k),x[O+U+0]=s.x,x[O+U+1]=s.y,x[O+U+2]=s.z,x[O+U+3]=0),_===!0&&(s.fromBufferAttribute(I,k),x[O+U+4]=s.x,x[O+U+5]=s.y,x[O+U+6]=s.z,x[O+U+7]=0),p===!0&&(s.fromBufferAttribute(R,k),x[O+U+8]=s.x,x[O+U+9]=s.y,x[O+U+10]=s.z,x[O+U+11]=R.itemSize===4?s.w:1)}}d={count:u,texture:S,size:new Dt(w,A)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function av(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const lv={[sf]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[rf]:"CINEON_TONE_MAPPING",[Uc]:"ACES_FILMIC_TONE_MAPPING",[Fc]:"AGX_TONE_MAPPING",[Oc]:"NEUTRAL_TONE_MAPPING",[of]:"CUSTOM_TONE_MAPPING"};function cv(i,t,e,n,s,r){const o=new on(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Se;h.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new jt([0,2,0,0,2,0],2));const u=new y0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new de(h,u),f=new ma(-1,1,1,-1,0,1);let m=null,_=null,p=!1,g,M=null,b=[],v=!1;this.setSize=function(w,A){o.setSize(w,A),a!==null&&a.setSize(w,A),l!==null&&l.setSize(w,A);for(let x=0;x<b.length;x++){const S=b[x];S.setSize&&S.setSize(w,A)}},this.setEffects=function(w){b=w,v=b.length>0&&b[0].isRenderPass===!0;const A=o.width,x=o.height;b.length>0&&a===null&&(a=new on(A,x,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new on(A,x,{type:xn,depthBuffer:!1,stencilBuffer:!1}));const S=s===!0&&b.some(F=>F.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new rs(A,x),r===!0&&(c.format=Oi,c.type=Ds)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let F=0;F<b.length;F++){const C=b[F];C.setSize&&C.setSize(A,x),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,A){if(p||w.toneMapping===ni&&b.length===0)return!1;if(M=A,A!==null){const x=A.width,S=A.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return v===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=ni,!0},this.hasRenderPass=function(){return v},this.end=function(w,A){w.toneMapping=g,p=!0;let x=o,S=a;for(let F=0;F<b.length;F++){const C=b[F];C.enabled!==!1&&(C.render(w,S,x,A),C.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(m!==w.outputColorSpace||_!==w.toneMapping){m=w.outputColorSpace,_=w.toneMapping,u.defines={},ae.getTransfer(m)===ye&&(u.defines.SRGB_TRANSFER="");const F=lv[_];F&&(u.defines[F]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(M),w.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Gf=new We,Vf=new rs(1,1),Wf=new Rf(1),Xf=new Sf,qf=new qm,Yf=new Af,ku=[],Bu=[],zu=new Float32Array(16),Hu=new Float32Array(9),Gu=new Float32Array(4);function Gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ku[s];if(r===void 0&&(r=new Float32Array(s),ku[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ga(i,t){let e=Bu[t];e===void 0&&(e=new Int32Array(t),Bu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function pv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),qe(e,n)}}function mv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Hu.set(n),i.uniformMatrix3fv(this.addr,!1,Hu),qe(e,n)}}function gv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;zu.set(n),i.uniformMatrix4fv(this.addr,!1,zu),qe(e,n)}}function _v(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function Mv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function _a(i){return i.version===0&&(i.compareFunction=xf,i.needsUpdate=!0),i}function Ev(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=_a(Vf):r=Gf,e.setTexture2D(t||r,s)}function Tv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qf,s)}function Av(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=_a(Wf):r=Yf,e.setTextureCube(t||r,s)}function Rv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xf,s)}function Cv(i){switch(i){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Sv;case 36295:return bv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}function Pv(i,t){i.uniform1fv(this.addr,t)}function Lv(i,t){const e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Iv(i,t){const e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Dv(i,t){const e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Nv(i,t){const e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Uv(i,t){const e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fv(i,t){const e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ov(i,t){i.uniform1iv(this.addr,t)}function kv(i,t){i.uniform2iv(this.addr,t)}function Bv(i,t){i.uniform3iv(this.addr,t)}function zv(i,t){i.uniform4iv(this.addr,t)}function Hv(i,t){i.uniform1uiv(this.addr,t)}function Gv(i,t){i.uniform2uiv(this.addr,t)}function Vv(i,t){i.uniform3uiv(this.addr,t)}function Wv(i,t){i.uniform4uiv(this.addr,t)}function Xv(i,t,e){const n=this.cache,s=t.length,r=ga(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=_a(Vf):o=Gf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function qv(i,t,e){const n=this.cache,s=t.length,r=ga(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qf,r[o])}function Yv(i,t,e){const n=this.cache,s=t.length,r=ga(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=_a(Wf):o=Yf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Kv(i,t,e){const n=this.cache,s=t.length,r=ga(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xf,r[o])}function Zv(i){switch(i){case 5126:return Pv;case 35664:return Lv;case 35665:return Iv;case 35666:return Dv;case 35674:return Nv;case 35675:return Uv;case 35676:return Fv;case 5124:case 35670:return Ov;case 35667:case 35671:return kv;case 35668:case 35672:return Bv;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return Gv;case 36295:return Vv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return Kv}}class $v{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cv(e.type)}}class Jv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zv(e.type)}}class jv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function Vu(i,t){i.seq.push(t),i.map[t.id]=t}function Qv(i,t,e){const n=i.name,s=n.length;for(nl.lastIndex=0;;){const r=nl.exec(n),o=nl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vu(e,c===void 0?new $v(a,i,t):new Jv(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new jv(a),Vu(e,u)),e=u}}}class Go{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Qv(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Wu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ty=37297;let ey=0;function ny(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Xu=new Kt;function iy(i){ae._getMatrix(Xu,ae.workingColorSpace,i);const t=`mat3( ${Xu.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Jo:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ny(i.getShaderSource(t),a)}else return r}function sy(i,t){const e=iy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const ry={[sf]:"Linear",[Nc]:"Reinhard",[rf]:"Cineon",[Uc]:"ACESFilmic",[Fc]:"AgX",[Oc]:"Neutral",[of]:"Custom"};function oy(i,t){const e=ry[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xo=new y;function ay(){ae.getLuminanceCoefficients(xo);const i=xo.x.toFixed(4),t=xo.y.toFixed(4),e=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function cy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function Yu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ku(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(uy,dy)}function dy(i,t){const e=re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return vc(e)}const fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(i){return i.replace(fy,py)}function py(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $u(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const my={[xr]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function gy(i){return my[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _y={[Ar]:"ENVMAP_MODE_REFRACTION"};function xy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_y[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vy={[nf]:"ENVMAP_BLENDING_MULTIPLY",[lm]:"ENVMAP_BLENDING_MIX",[cm]:"ENVMAP_BLENDING_ADD"};function yy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vy[i.combine]||"ENVMAP_BLENDING_NONE"}function My(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gy(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=xy(e),u=yy(e),d=ly(e),f=cy(r),m=s.createProgram();let _,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(pr).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(_=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?re.tonemapping_pars_fragment:"",e.toneMapping!==ni?oy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,sy("linearToOutputTexel",e.outputColorSpace),ay(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=vc(o),o=Yu(o,e),o=Ku(o,e),a=vc(a),a=Yu(a,e),a=Ku(a,e),o=Zu(o),a=Zu(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=g+_+o,b=g+p+a,v=Wu(s,s.VERTEX_SHADER,M),w=Wu(s,s.FRAGMENT_SHADER,b);s.attachShader(m,v),s.attachShader(m,w),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(C){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(v)||"",I=s.getShaderInfoLog(w)||"",R=L.trim(),O=D.trim(),k=I.trim();let U=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,v,w);else{const N=qu(s,v,"vertex"),G=qu(s,w,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+N+`
`+G)}else R!==""?zt("WebGLProgram: Program Info Log:",R):(O===""||k==="")&&(X=!1);X&&(C.diagnostics={runnable:U,programLog:R,vertexShader:{log:O,prefix:_},fragmentShader:{log:k,prefix:p}})}s.deleteShader(v),s.deleteShader(w),x=new Go(s,m),S=hy(s,m)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,ty)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ey++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=w,this}let Sy=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wy(t),e.set(t,n)),n}}class wy{constructor(t){this.id=Sy++,this.code=t,this.usedTimes=0}}function Ey(i){return i===ss||i===Zo||i===$o}function Ty(i,t,e,n,s,r){const o=new Zc,a=new by,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,F,C,L,D){const I=C.fog,R=L.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=t.get(x.envMap||O,k),X=d[x.type];let N=n.precision;x.precision!==null&&(N=n.getMaxPrecision(x.precision),N!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",N,"instead."));const G=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,W=G!==void 0?G.length:0;let tt=0;R.morphAttributes.position!==void 0&&(tt=1),R.morphAttributes.normal!==void 0&&(tt=2),R.morphAttributes.color!==void 0&&(tt=3);let Z,H,J,Y;if(X){const wt=Qn[X];Z=wt.vertexShader,H=wt.fragmentShader}else{Z=x.vertexShader,H=x.fragmentShader;const wt=a.getVertexShaderStage(x),ve=a.getFragmentShaderStage(x);a.update(x,wt,ve),J=wt.id,Y=ve.id}const lt=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),bt=L.isInstancedMesh===!0,Qt=L.isBatchedMesh===!0,dt=!!x.map,Pt=!!x.matcap,kt=!!U,Ut=kt&&U.isPMREMTexture===!0,pe=!!x.aoMap,Xt=!!x.lightMap,qt=!!x.bumpMap&&x.wireframe===!1,ct=!!x.normalMap,te=!!x.displacementMap,Yt=!!x.emissiveMap,le=!!x.metalnessMap,ce=!!x.roughnessMap,Ae=x.anisotropy>0,V=x.clearcoat>0,Fe=x.diffuseRoughness>0,be=x.dispersion>0,xe=x.retroreflectivity>0,at=x.iridescence>0,$t=x.sheen>0,Rt=x.transmission>0,Ht=Ae&&!!x.anisotropyMap,P=V&&!!x.clearcoatMap,E=V&&!!x.clearcoatNormalMap,q=V&&!!x.clearcoatRoughnessMap,ut=Fe&&!!x.diffuseRoughnessMap,rt=at&&!!x.iridescenceMap,mt=at&&!!x.iridescenceThicknessMap,Mt=$t&&!!x.sheenColorMap,et=$t&&!!x.sheenRoughnessMap,nt=!!x.specularMap,_t=!!x.specularColorMap,B=!!x.specularIntensityMap,it=Rt&&!!x.transmissionMap,Q=Rt&&!!x.thicknessMap,xt=!!x.gradientMap,pt=!!x.alphaMap,gt=x.alphaTest>0,Gt=!!x.alphaHash,se=!!x.extensions;let ft=ni;x.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ft=i.toneMapping);const Wt=Ut?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,ee={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:Z,fragmentShader:H,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:N,batching:Qt,batchingColor:Qt&&L._colorsTexture!==null,instancing:bt,instancingColor:bt&&L.instanceColor!==null,instancingMorph:bt&&L.morphTexture!==null,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:dt,matcap:Pt,envMap:kt,envMapMode:kt&&U.mapping,envMapPMREM:Ut,envMapMaxLod:Ut?Wt.length-1:null,envMapSize:Ut?Wt[0].width:null,aoMap:pe,lightMap:Xt,bumpMap:qt,normalMap:ct,displacementMap:te,emissiveMap:Yt,normalMapObjectSpace:ct&&x.normalMapType===pm,normalMapTangentSpace:ct&&x.normalMapType===fc,packedNormalMap:ct&&x.normalMapType===fc&&Ey(x.normalMap.format),metalnessMap:le,roughnessMap:ce,anisotropy:Ae,anisotropyMap:Ht,clearcoat:V,clearcoatMap:P,clearcoatNormalMap:E,clearcoatRoughnessMap:q,diffuseRoughness:Fe,diffuseRoughnessMap:ut,dispersion:be,retroreflection:xe,iridescence:at,iridescenceMap:rt,iridescenceThicknessMap:mt,sheen:$t,sheenColorMap:Mt,sheenRoughnessMap:et,specularMap:nt,specularColorMap:_t,specularIntensityMap:B,transmission:Rt,transmissionMap:it,thicknessMap:Q,gradientMap:xt,opaque:x.transparent===!1&&x.blending===vr&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:gt,alphaHash:Gt,combine:x.combine,mapUv:dt&&f(x.map.channel),aoMapUv:pe&&f(x.aoMap.channel),lightMapUv:Xt&&f(x.lightMap.channel),bumpMapUv:qt&&f(x.bumpMap.channel),normalMapUv:ct&&f(x.normalMap.channel),displacementMapUv:te&&f(x.displacementMap.channel),emissiveMapUv:Yt&&f(x.emissiveMap.channel),metalnessMapUv:le&&f(x.metalnessMap.channel),roughnessMapUv:ce&&f(x.roughnessMap.channel),anisotropyMapUv:Ht&&f(x.anisotropyMap.channel),clearcoatMapUv:P&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:et&&f(x.sheenRoughnessMap.channel),specularMapUv:nt&&f(x.specularMap.channel),specularColorMapUv:_t&&f(x.specularColorMap.channel),specularIntensityMapUv:B&&f(x.specularIntensityMap.channel),transmissionMapUv:it&&f(x.transmissionMap.channel),thicknessMapUv:Q&&f(x.thicknessMap.channel),alphaMapUv:pt&&f(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ct||Ae),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(dt||pt),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:st,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:tt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(wt=>wt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:dt&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:Yt&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Oe,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||Qt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function _(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)S.push(F),S.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){const S=d[x.type];let F;if(S){const C=Qn[S];F=_0.clone(C.uniforms)}else F=x.uniforms;return F}function b(x,S){let F=h.get(S);return F!==void 0?++F.usedTimes:(F=new My(i,S,x,s),c.push(F),h.set(S,F)),F}function v(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function A(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:M,acquireProgram:b,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:A}}function Ay(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ry(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ju(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ju(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,_,p,g){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=p,M.group=g),t++,M}function l(d,f,m,_,p,g,M){M.reversedDepth===!0&&(p=-p);const b=a(d,f,m,_,p,g);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):e.push(b)}function c(d,f,m,_,p,g){const M=a(d,f,m,_,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||Ry),n.length>1&&n.sort(f||Ju),s.length>1&&s.sort(f||Ju)}function u(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Cy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ju,i.set(n,[o])):s>=r.length?(o=new ju,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Py(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new y,color:new Lt};break;case"SpotLight":e={position:new y,direction:new y,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new y,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new y,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new y,halfWidth:new y,halfHeight:new y};break}return i[t.id]=e,e}}}function Ly(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Iy=0;function Dy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ny(i){const t=new Py,e=Ly(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new y);const s=new y,r=new Vt,o=new Vt;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,M=0,b=0,v=0,w=0,A=0,x=0,S=0,F=0,C=0;c.sort(Dy);for(let D=0,I=c.length;D<I;D++){const R=c[D],O=R.color,k=R.intensity,U=R.distance;let X=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ss?X=R.shadow.map.texture:X=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=O.r*k,u+=O.g*k,d+=O.b*k;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],k);C++}else if(R.isSunLight){const N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,W=e.get(R);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[m]=W,n.sunShadowMap[m]=X;const tt=G.getViewportCount();for(let Z=0;Z<tt;Z++)n.sunShadowMatrix[_+Z]=G.getMatrix(Z),n.sunShadowCascade[_+Z]=G._cascadeData[Z];_+=tt,m++}n.sun[f]=N,f++}else if(R.isDirectionalLight){const N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,W=e.get(R);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=N,p++}else if(R.isSpotLight){const N=t.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(O).multiplyScalar(k),N.distance=U,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[M]=N;const G=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,G.updateMatrices(R),R.castShadow&&F++),n.spotLightMatrix[M]=G.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,n.spotShadow[M]=W,n.spotShadowMap[M]=X,x++}M++}else if(R.isRectAreaLight){const N=t.get(R);N.color.copy(O).multiplyScalar(k),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[b]=N,b++}else if(R.isPointLight){const N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const G=R.shadow,W=e.get(R);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,A++}n.point[g]=N,g++}else if(R.isHemisphereLight){const N=t.get(R);N.skyColor.copy(R.color).multiplyScalar(k),N.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[v]=N,v++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==M||L.rectAreaLength!==b||L.hemiLength!==v||L.numSunShadows!==m||L.numDirectionalShadows!==w||L.numPointShadows!==A||L.numSpotShadows!==x||L.numSpotMaps!==S||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=b,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-F,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=C,L.sunLength=f,L.directionalLength=p,L.pointLength=g,L.spotLength=M,L.rectAreaLength=b,L.hemiLength=v,L.numSunShadows=m,L.numDirectionalShadows=w,L.numPointShadows=A,L.numSpotShadows=x,L.numSpotMaps=S,L.numLightProbes=C,n.version=Iy++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0,p=0;const g=h.matrixWorldInverse;for(let M=0,b=c.length;M<b;M++){const v=c[M];if(v.isSunLight){const w=n.sun[u];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(g),u++}else if(v.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(v.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const w=n.hemi[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Qu(i){const t=new Ny(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Uy(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Qu(i),t.set(s,[a])):r>=o.length?(a=new Qu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ky=[new y(1,0,0),new y(-1,0,0),new y(0,1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1)],By=[new y(0,-1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1),new y(0,-1,0),new y(0,-1,0)],td=new Vt,Qs=new y,il=new y;function zy(i,t,e){let n=new Dr;const s=new Dt,r=new Dt,o=new Ee,a=new Lf,l=new M0,c={},h=e.maxTextureSize,u={[ki]:dn,[dn]:ki,[Oe]:Oe},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Fy,fragmentShader:Oy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Se;m.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new de(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let g=this.type;this.render=function(A,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Vp&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xr);const F=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Rs),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=g!==this.type;I&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(O=>O.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,O=A.length;R<O;R++){const k=A[R],U=k.shadow;if(U===void 0){zt("WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const X=U.getFrameExtents();s.multiply(X),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,U.mapSize.y=r.y));const N=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=N,U.map===null||I===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ur){if(k.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new on(s.x,s.y,{format:ss,type:xn,minFilter:$e,magFilter:$e,generateMipmaps:!1}),U.map.texture.name=k.name+".shadowMap",U.map.depthTexture=new rs(s.x,s.y,Ln),U.map.depthTexture.name=k.name+".shadowMapDepth",U.map.depthTexture.format=Bi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ne,U.map.depthTexture.magFilter=Ne}else k.isPointLight?(U.map=new ah(s.x),U.map.depthTexture=new Rf(s.x,Gn)):(U.map=new on(s.x,s.y),U.map.depthTexture=new rs(s.x,s.y,Gn)),U.map.depthTexture.name=k.name+".shadowMap",U.map.depthTexture.format=Bi,this.type===xr?(U.map.depthTexture.compareFunction=N?_f:gf,U.map.depthTexture.minFilter=$e,U.map.depthTexture.magFilter=$e):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ne,U.map.depthTexture.magFilter=Ne);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);const G=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();k.isPointLight!==!0&&U.updateMatrices(k,S);const W=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:S.layers;for(let tt=0;tt<G;tt++){const Z=U.getCamera(tt);if(k.isPointLight){const H=U.camera,J=U.matrix,Y=k.distance||H.far;Y!==H.far&&(H.far=Y,H.updateProjectionMatrix()),Qs.setFromMatrixPosition(k.matrixWorld),H.position.copy(Qs),il.copy(H.position),il.add(ky[tt]),H.up.copy(By[tt]),H.lookAt(il),H.updateMatrixWorld(),J.makeTranslation(-Qs.x,-Qs.y,-Qs.z),td.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),U._frustum.setFromProjectionMatrix(td,H.coordinateSystem,H.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(U.map),i.clear());const H=U.getViewport(tt);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),D.viewport(o)}n=U.getFrustum(tt),v(x,S,Z,k,W,this.type)}U.isPointLightShadow!==!0&&this.type===ur&&M(U,S),U.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(F,C,L)};function M(A,x){const S=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new on(s.x,s.y,{format:ss,type:xn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(x,null,S,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(x,null,S,f,_,null)}function b(A,x,S,F){let C=null;const L=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)C=L;else if(C=S.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const D=C.uuid,I=x.uuid;let R=c[D];R===void 0&&(R={},c[D]=R);let O=R[I];O===void 0&&(O=C.clone(),R[I]=O,x.addEventListener("dispose",w)),C=O}if(C.visible=x.visible,C.wireframe=x.wireframe,F===ur?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=i.properties.get(C);D.light=S}return C}function v(A,x,S,F,C,L){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===ur)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const R=t.update(A),O=A.material;if(Array.isArray(O)){const k=R.groups;for(let U=0,X=k.length;U<X;U++){const N=k[U],G=O[N.materialIndex];if(G&&G.visible){const W=b(A,G,F,L);A.onBeforeShadow(i,A,x,S,R,W,N),i.renderBufferDirect(S,null,R,W,A,N),A.onAfterShadow(i,A,x,S,R,W,N)}}}else if(O.visible){const k=b(A,O,F,L);A.onBeforeShadow(i,A,x,S,R,k,null),i.renderBufferDirect(S,null,R,k,A,null),A.onAfterShadow(i,A,x,S,R,k,null)}}const I=A.children;for(let R=0,O=I.length;R<O;R++)v(I[R],x,S,F,C,L)}function w(A){A.target.removeEventListener("dispose",w);for(const S in c){const F=c[S],C=A.target.uuid;C in F&&(F[C].dispose(),delete F[C])}}}function Hy(i,t){function e(){let B=!1;const it=new Ee;let Q=null;const xt=new Ee(0,0,0,0);return{setMask:function(pt){Q!==pt&&!B&&(i.colorMask(pt,pt,pt,pt),Q=pt)},setLocked:function(pt){B=pt},setClear:function(pt,gt,Gt,se,ft){ft===!0&&(pt*=se,gt*=se,Gt*=se),it.set(pt,gt,Gt,se),xt.equals(it)===!1&&(i.clearColor(pt,gt,Gt,se),xt.copy(it))},reset:function(){B=!1,Q=null,xt.set(-1,0,0,0)}}}function n(){let B=!1,it=!1,Q=null,xt=null,pt=null;return{setReversed:function(gt){if(it!==gt){const Gt=t.get("EXT_clip_control");gt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),it=gt;const se=pt;pt=null,this.setClear(se)}},getReversed:function(){return it},setTest:function(gt){gt?st(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(gt){Q!==gt&&!B&&(i.depthMask(gt),Q=gt)},setFunc:function(gt){if(it&&(gt=Em[gt]),xt!==gt){switch(gt){case Cl:i.depthFunc(i.NEVER);break;case Pl:i.depthFunc(i.ALWAYS);break;case Ll:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case Il:i.depthFunc(i.EQUAL);break;case Dl:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case Ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=gt}},setLocked:function(gt){B=gt},setClear:function(gt){pt!==gt&&(pt=gt,it&&(gt=1-gt),i.clearDepth(gt))},reset:function(){B=!1,Q=null,xt=null,pt=null,it=!1}}}function s(){let B=!1,it=null,Q=null,xt=null,pt=null,gt=null,Gt=null,se=null,ft=null;return{setTest:function(Wt){B||(Wt?st(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Wt){it!==Wt&&!B&&(i.stencilMask(Wt),it=Wt)},setFunc:function(Wt,ee,wt){(Q!==Wt||xt!==ee||pt!==wt)&&(i.stencilFunc(Wt,ee,wt),Q=Wt,xt=ee,pt=wt)},setOp:function(Wt,ee,wt){(gt!==Wt||Gt!==ee||se!==wt)&&(i.stencilOp(Wt,ee,wt),gt=Wt,Gt=ee,se=wt)},setLocked:function(Wt){B=Wt},setClear:function(Wt){ft!==Wt&&(i.clearStencil(Wt),ft=Wt)},reset:function(){B=!1,it=null,Q=null,xt=null,pt=null,gt=null,Gt=null,se=null,ft=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,m=[],_=null,p=!1,g=null,M=null,b=null,v=null,w=null,A=null,x=null,S=new Lt(0,0,0),F=0,C=!1,L=null,D=null,I=null,R=null,O=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,X=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(N)[1]),U=X>=1):N.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),U=X>=2);let G=null,W={};const tt=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),H=new Ee().fromArray(tt),J=new Ee().fromArray(Z);function Y(B,it,Q,xt){const pt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(B,gt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<Q;Gt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(it+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return gt}const lt={};lt[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Tr),qt(!1),ct(Dh),st(i.CULL_FACE),pe(Rs);function st(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function bt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Qt(B,it){return d[B]!==it?(i.bindFramebuffer(B,it),d[B]=it,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function dt(B,it){let Q=m,xt=!1;if(B){Q=f.get(it),Q===void 0&&(Q=[],f.set(it,Q));const pt=B.textures;if(Q.length!==pt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Gt=pt.length;gt<Gt;gt++)Q[gt]=i.COLOR_ATTACHMENT0+gt;Q.length=pt.length,xt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,xt=!0);xt&&i.drawBuffers(Q)}function Pt(B){return _!==B?(i.useProgram(B),_=B,!0):!1}const kt={[Es]:i.FUNC_ADD,[Xp]:i.FUNC_SUBTRACT,[qp]:i.FUNC_REVERSE_SUBTRACT};kt[Yp]=i.MIN,kt[Kp]=i.MAX;const Ut={[Zp]:i.ZERO,[$p]:i.ONE,[Jp]:i.SRC_COLOR,[tf]:i.SRC_ALPHA,[im]:i.SRC_ALPHA_SATURATE,[em]:i.DST_COLOR,[Qp]:i.DST_ALPHA,[jp]:i.ONE_MINUS_SRC_COLOR,[ef]:i.ONE_MINUS_SRC_ALPHA,[nm]:i.ONE_MINUS_DST_COLOR,[tm]:i.ONE_MINUS_DST_ALPHA,[sm]:i.CONSTANT_COLOR,[rm]:i.ONE_MINUS_CONSTANT_COLOR,[om]:i.CONSTANT_ALPHA,[am]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(B,it,Q,xt,pt,gt,Gt,se,ft,Wt){if(B===Rs){p===!0&&(bt(i.BLEND),p=!1);return}if(p===!1&&(st(i.BLEND),p=!0),B!==Wp){if(B!==g||Wt!==C){if((M!==Es||w!==Es)&&(i.blendEquation(i.FUNC_ADD),M=Es,w=Es),Wt)switch(B){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.ONE,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",B);break}else switch(B){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nh:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uh:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",B);break}b=null,v=null,A=null,x=null,S.set(0,0,0),F=0,g=B,C=Wt}return}pt=pt||it,gt=gt||Q,Gt=Gt||xt,(it!==M||pt!==w)&&(i.blendEquationSeparate(kt[it],kt[pt]),M=it,w=pt),(Q!==b||xt!==v||gt!==A||Gt!==x)&&(i.blendFuncSeparate(Ut[Q],Ut[xt],Ut[gt],Ut[Gt]),b=Q,v=xt,A=gt,x=Gt),(se.equals(S)===!1||ft!==F)&&(i.blendColor(se.r,se.g,se.b,ft),S.copy(se),F=ft),g=B,C=!1}function Xt(B,it){B.side===Oe?bt(i.CULL_FACE):st(i.CULL_FACE);let Q=B.side===dn;it&&(Q=!Q),qt(Q),B.blending===vr&&B.transparent===!1?pe(Rs):pe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const xt=B.stencilWrite;a.setTest(xt),xt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Yt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(B){L!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),L=B)}function ct(B){B!==Hp?(st(i.CULL_FACE),B!==D&&(B===Dh?i.cullFace(i.BACK):B===Gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),D=B}function te(B){B!==I&&(U&&i.lineWidth(B),I=B)}function Yt(B,it,Q){B?(st(i.POLYGON_OFFSET_FILL),(R!==it||O!==Q)&&(R=it,O=Q,o.getReversed()&&(it=-it,Q=-Q),i.polygonOffset(it,Q))):bt(i.POLYGON_OFFSET_FILL)}function le(B){B?st(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function ce(B){B===void 0&&(B=i.TEXTURE0+k-1),G!==B&&(i.activeTexture(B),G=B)}function Ae(B,it,Q){Q===void 0&&(G===null?Q=i.TEXTURE0+k-1:Q=G);let xt=W[Q];xt===void 0&&(xt={type:void 0,texture:void 0},W[Q]=xt),(xt.type!==B||xt.texture!==it)&&(G!==Q&&(i.activeTexture(Q),G=Q),i.bindTexture(B,it||lt[B]),xt.type=B,xt.texture=it)}function V(){const B=W[G];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Fe(){try{i.compressedTexImage2D(...arguments)}catch(B){Zt("WebGLState:",B)}}function be(){try{i.compressedTexImage3D(...arguments)}catch(B){Zt("WebGLState:",B)}}function xe(){try{i.texSubImage2D(...arguments)}catch(B){Zt("WebGLState:",B)}}function at(){try{i.texSubImage3D(...arguments)}catch(B){Zt("WebGLState:",B)}}function $t(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Zt("WebGLState:",B)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Zt("WebGLState:",B)}}function Ht(){try{i.texStorage2D(...arguments)}catch(B){Zt("WebGLState:",B)}}function P(){try{i.texStorage3D(...arguments)}catch(B){Zt("WebGLState:",B)}}function E(){try{i.texImage2D(...arguments)}catch(B){Zt("WebGLState:",B)}}function q(){try{i.texImage3D(...arguments)}catch(B){Zt("WebGLState:",B)}}function ut(B){return u[B]!==void 0?u[B]:i.getParameter(B)}function rt(B,it){u[B]!==it&&(i.pixelStorei(B,it),u[B]=it)}function mt(B){H.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),H.copy(B))}function Mt(B){J.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function et(B,it){let Q=c.get(it);Q===void 0&&(Q=new WeakMap,c.set(it,Q));let xt=Q.get(B);xt===void 0&&(xt=i.getUniformBlockIndex(it,B.name),i.uniformBlockBinding(it,xt,xt),Q.set(B,xt))}function nt(B,it,Q){const pt=c.get(it).get(B);l[pt]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,pt,Q),l[pt]=Q)}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},G=null,W={},d={},l={},f=new WeakMap,m=[],_=null,p=!1,g=null,M=null,b=null,v=null,w=null,A=null,x=null,S=new Lt(0,0,0),F=0,C=!1,L=null,D=null,I=null,R=null,O=null,H.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:bt,bindFramebuffer:Qt,drawBuffers:dt,useProgram:Pt,setBlending:pe,setMaterial:Xt,setFlipSided:qt,setCullFace:ct,setLineWidth:te,setPolygonOffset:Yt,setScissorTest:le,activeTexture:ce,bindTexture:Ae,unbindTexture:V,compressedTexImage2D:Fe,compressedTexImage3D:be,texImage2D:E,texImage3D:q,pixelStorei:rt,getParameter:ut,updateUBOMapping:et,uniformBlockBinding:nt,texStorage2D:Ht,texStorage3D:P,texSubImage2D:xe,texSubImage3D:at,compressedTexSubImage2D:$t,compressedTexSubImage3D:Rt,scissor:mt,viewport:Mt,reset:_t}}function Gy(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap,u=new Set;let d;const f=new WeakMap,m=new Set,_=new FinalizationRegistry(P=>m.delete(P));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):Ir("canvas")}function M(P,E,q){let ut=1;const rt=Ht(P);if((rt.width>q||rt.height>q)&&(ut=q/Math.max(rt.width,rt.height)),ut<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const mt=Math.floor(ut*rt.width),Mt=Math.floor(ut*rt.height);d===void 0&&(d=g(mt,Mt));const et=E?g(mt,Mt):d;return et.width=mt,et.height=Mt,et.getContext("2d").drawImage(P,0,0,mt,Mt),zt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+mt+"x"+Mt+")."),et}else return"data"in P&&zt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function b(P){return P.generateMipmaps}function v(P){i.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(P,E,q,ut,rt,mt=!1){if(P!==null){if(i[P]!==void 0)return i[P];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Mt;ut&&(Mt=t.get("EXT_texture_norm16"),Mt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=E;if(E===i.RED&&(q===i.FLOAT&&(et=i.R32F),q===i.HALF_FLOAT&&(et=i.R16F),q===i.UNSIGNED_BYTE&&(et=i.R8),q===i.UNSIGNED_SHORT&&Mt&&(et=Mt.R16_EXT),q===i.SHORT&&Mt&&(et=Mt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.R8UI),q===i.UNSIGNED_SHORT&&(et=i.R16UI),q===i.UNSIGNED_INT&&(et=i.R32UI),q===i.BYTE&&(et=i.R8I),q===i.SHORT&&(et=i.R16I),q===i.INT&&(et=i.R32I)),E===i.RG&&(q===i.FLOAT&&(et=i.RG32F),q===i.HALF_FLOAT&&(et=i.RG16F),q===i.UNSIGNED_BYTE&&(et=i.RG8),q===i.UNSIGNED_SHORT&&Mt&&(et=Mt.RG16_EXT),q===i.SHORT&&Mt&&(et=Mt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RG8UI),q===i.UNSIGNED_SHORT&&(et=i.RG16UI),q===i.UNSIGNED_INT&&(et=i.RG32UI),q===i.BYTE&&(et=i.RG8I),q===i.SHORT&&(et=i.RG16I),q===i.INT&&(et=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGB8UI),q===i.UNSIGNED_SHORT&&(et=i.RGB16UI),q===i.UNSIGNED_INT&&(et=i.RGB32UI),q===i.BYTE&&(et=i.RGB8I),q===i.SHORT&&(et=i.RGB16I),q===i.INT&&(et=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),q===i.UNSIGNED_INT&&(et=i.RGBA32UI),q===i.BYTE&&(et=i.RGBA8I),q===i.SHORT&&(et=i.RGBA16I),q===i.INT&&(et=i.RGBA32I)),E===i.RGB&&(q===i.UNSIGNED_SHORT&&Mt&&(et=Mt.RGB16_EXT),q===i.SHORT&&Mt&&(et=Mt.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),E===i.RGBA){const nt=mt?Jo:ae.getTransfer(rt);q===i.FLOAT&&(et=i.RGBA32F),q===i.HALF_FLOAT&&(et=i.RGBA16F),q===i.UNSIGNED_BYTE&&(et=nt===ye?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Mt&&(et=Mt.RGBA16_EXT),q===i.SHORT&&Mt&&(et=Mt.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(P,E){let q;return P?E===null||E===Gn||E===Ds?q=i.DEPTH24_STENCIL8:E===Ln?q=i.DEPTH32F_STENCIL8:E===Rr&&(q=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gn||E===Ds?q=i.DEPTH_COMPONENT24:E===Ln?q=i.DEPTH_COMPONENT32F:E===Rr&&(q=i.DEPTH_COMPONENT16),q}function S(P,E){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ne&&P.minFilter!==$e?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function F(P){const E=new WeakRef(P);n.get(P).__ref=E,m.add(E),_.register(P,E,E)}function C(P){const E=n.get(P).__ref;E!==void 0&&(m.delete(E),_.unregister(E))}function L(P){I(P.target)}function D(P){R(P.target)}function I(P){P.removeEventListener("dispose",L),C(P),k(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function R(P){P.removeEventListener("dispose",D),C(P),X(P)}function O(){for(const P of m){const E=P.deref();E!==void 0&&(E.isRenderTarget===!0?R(E):I(E))}m.clear(),u.clear()}function k(P){const E=n.get(P);if(E.__webglInit===void 0)return;const q=P.source,ut=f.get(q);if(ut){const rt=ut[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&U(P),Object.keys(ut).length===0&&f.delete(q)}n.remove(P)}function U(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const q=P.source,ut=f.get(q);delete ut[E.__cacheKey],o.memory.textures--}function X(P){const E=n.get(P);E.__depthDisposeCallback&&E.__depthDisposeCallback();const q=P.depthTexture;if(q&&q.renderTarget===P&&I(q),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(E.__webglFramebuffer[rt]))for(let mt=0;mt<E.__webglFramebuffer[rt].length;mt++)i.deleteFramebuffer(E.__webglFramebuffer[rt][mt]);else i.deleteFramebuffer(E.__webglFramebuffer[rt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[rt])}else{if(Array.isArray(E.__webglFramebuffer))for(let rt=0;rt<E.__webglFramebuffer.length;rt++)i.deleteFramebuffer(E.__webglFramebuffer[rt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let rt=0;rt<E.__webglColorRenderbuffer.length;rt++)E.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[rt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ut=P.textures;for(let rt=0,mt=ut.length;rt<mt;rt++){const Mt=n.get(ut[rt]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(ut[rt])}n.remove(P)}let N=0;function G(){N=0}function W(){return N}function tt(P){N=P}function Z(){const P=N;return P>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.mipmapsAutoUpdate),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function J(P,E){const q=n.get(P);if(P.isVideoTexture&&$t(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){const ut=P.image;if(ut===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(q,P,E);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function Y(P,E){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Xt(q,P,E);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function lt(P,E){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Xt(q,P,E);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function st(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){qt(q,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}const bt={[is]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},Qt={[Ne]:i.NEAREST,[lf]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[Oo]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},dt={[gm]:i.NEVER,[xf]:i.ALWAYS,[_m]:i.LESS,[gf]:i.LEQUAL,[xm]:i.EQUAL,[_f]:i.GEQUAL,[vm]:i.GREATER,[ym]:i.NOTEQUAL};function Pt(P,E){if(E.type===Ln&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===$e||E.magFilter===Oo||E.magFilter===dr||E.magFilter===ei||E.minFilter===$e||E.minFilter===Oo||E.minFilter===dr||E.minFilter===ei)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,bt[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,bt[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,bt[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Qt[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Qt[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,dt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ne||E.minFilter!==dr&&E.minFilter!==ei||E.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function kt(P,E){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",L),F(E));const ut=E.source;let rt=f.get(ut);rt===void 0&&(rt={},f.set(ut,rt));const mt=H(E);if(mt!==P.__cacheKey){rt[mt]===void 0&&(rt[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),rt[mt].usedTimes++;const Mt=rt[P.__cacheKey];Mt!==void 0&&(rt[P.__cacheKey].usedTimes--,Mt.usedTimes===0&&U(E)),P.__cacheKey=mt,P.__webglTexture=rt[mt].texture}return q}function Ut(P,E,q){return Math.floor(Math.floor(P/q)/E)}function pe(P,E,q,ut){const mt=P.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,q,ut,E.data);else{mt.sort((B,it)=>B.start-it.start);let Mt=0;for(let B=1;B<mt.length;B++){const it=mt[Mt],Q=mt[B],xt=it.start+it.count,pt=Ut(Q.start,E.width,4),gt=Ut(it.start,E.width,4);Q.start<=xt+1&&pt===gt&&Ut(Q.start+Q.count-1,E.width,4)===pt?it.count=Math.max(it.count,Q.start+Q.count-it.start):(++Mt,mt[Mt]=Q)}mt.length=Mt+1;const et=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let B=0,it=mt.length;B<it;B++){const Q=mt[B],xt=Math.floor(Q.start/4),pt=Math.ceil(Q.count/4),gt=xt%E.width,Gt=Math.floor(xt/E.width),se=pt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(i.TEXTURE_2D,0,gt,Gt,se,ft,q,ut,E.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function Xt(P,E,q){let ut=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=i.TEXTURE_3D);const rt=kt(P,E),mt=E.source;e.bindTexture(ut,P.__webglTexture,i.TEXTURE0+q);const Mt=n.get(mt);if(mt.version!==Mt.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ft=ae.getPrimaries(ae.workingColorSpace),Wt=E.colorSpace===Ui?null:ae.getPrimaries(E.colorSpace),ee=E.colorSpace===Ui||ft===Wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let nt=M(E.image,!1,s.maxTextureSize);nt=Rt(E,nt);const _t=r.convert(E.format,E.colorSpace),B=r.convert(E.type);let it=A(E.internalFormat,_t,B,E.normalized,E.colorSpace,E.isVideoTexture);Pt(ut,E);let Q;const xt=E.mipmaps,pt=E.isVideoTexture!==!0,gt=Mt.__version===void 0||rt===!0,Gt=mt.dataReady,se=S(E,nt);if(E.isDepthTexture)it=x(E.format===Oi,E.type),gt&&(pt?e.texStorage2D(i.TEXTURE_2D,1,it,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,it,nt.width,nt.height,0,_t,B,null));else if(E.isDataTexture)if(xt.length>0){pt&&gt&&e.texStorage2D(i.TEXTURE_2D,se,it,xt[0].width,xt[0].height);for(let ft=0,Wt=xt.length;ft<Wt;ft++)Q=xt[ft],pt?Gt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Q.width,Q.height,_t,B,Q.data):e.texImage2D(i.TEXTURE_2D,ft,it,Q.width,Q.height,0,_t,B,Q.data);E.generateMipmaps=!1}else pt?(gt&&e.texStorage2D(i.TEXTURE_2D,se,it,nt.width,nt.height),Gt&&pe(E,nt,_t,B)):e.texImage2D(i.TEXTURE_2D,0,it,nt.width,nt.height,0,_t,B,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pt&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,se,it,xt[0].width,xt[0].height,nt.depth);for(let ft=0,Wt=xt.length;ft<Wt;ft++)if(Q=xt[ft],E.format!==Bn)if(_t!==null)if(pt){if(Gt)if(E.layerUpdates.size>0){const ee=Du(Q.width,Q.height,E.format,E.type);for(const wt of E.layerUpdates){const ve=Q.data.subarray(wt*ee/Q.data.BYTES_PER_ELEMENT,(wt+1)*ee/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,wt,Q.width,Q.height,1,_t,ve)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Q.width,Q.height,nt.depth,_t,Q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,it,Q.width,Q.height,nt.depth,0,Q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?Gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Q.width,Q.height,nt.depth,_t,B,Q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,it,Q.width,Q.height,nt.depth,0,_t,B,Q.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{pt&&gt&&e.texStorage2D(i.TEXTURE_2D,se,it,xt[0].width,xt[0].height);for(let ft=0,Wt=xt.length;ft<Wt;ft++)Q=xt[ft],E.format!==Bn?_t!==null?pt?Gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Q.width,Q.height,_t,Q.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,it,Q.width,Q.height,0,Q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?Gt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Q.width,Q.height,_t,B,Q.data):e.texImage2D(i.TEXTURE_2D,ft,it,Q.width,Q.height,0,_t,B,Q.data)}else if(E.isDataArrayTexture)if(pt){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,se,it,nt.width,nt.height,nt.depth),Gt)if(E.layerUpdates.size>0){const ft=Du(nt.width,nt.height,E.format,E.type);for(const Wt of E.layerUpdates){const ee=nt.data.subarray(Wt*ft/nt.data.BYTES_PER_ELEMENT,(Wt+1)*ft/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Wt,nt.width,nt.height,1,_t,B,ee)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,_t,B,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,it,nt.width,nt.height,nt.depth,0,_t,B,nt.data);else if(E.isData3DTexture)pt?(gt&&e.texStorage3D(i.TEXTURE_3D,se,it,nt.width,nt.height,nt.depth),Gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,_t,B,nt.data)):e.texImage3D(i.TEXTURE_3D,0,it,nt.width,nt.height,nt.depth,0,_t,B,nt.data);else if(E.isFramebufferTexture){if(gt)if(pt)e.texStorage2D(i.TEXTURE_2D,se,it,nt.width,nt.height);else{let ft=nt.width,Wt=nt.height;for(let ee=0;ee<se;ee++)e.texImage2D(i.TEXTURE_2D,ee,it,ft,Wt,0,_t,B,null),ft>>=1,Wt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),nt.parentNode!==ft){ft.appendChild(nt),u.add(E),ft.onpaint=Wt=>{const ee=Wt.changedElements;for(const wt of u)ee.includes(wt.image)&&(wt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{const ee=i.RGBA,wt=i.RGBA,ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ee,wt,ve,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xt.length>0){if(pt&&gt){const ft=Ht(xt[0]);e.texStorage2D(i.TEXTURE_2D,se,it,ft.width,ft.height)}for(let ft=0,Wt=xt.length;ft<Wt;ft++)Q=xt[ft],pt?Gt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,_t,B,Q):e.texImage2D(i.TEXTURE_2D,ft,it,_t,B,Q);E.generateMipmaps=!1}else if(pt){if(gt){const ft=Ht(nt);e.texStorage2D(i.TEXTURE_2D,se,it,ft.width,ft.height)}Gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,B,nt)}else e.texImage2D(i.TEXTURE_2D,0,it,_t,B,nt);b(E)&&E.mipmapsAutoUpdate===!0&&v(ut),Mt.__version=mt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function qt(P,E,q){if(E.image.length!==6)return;const ut=kt(P,E),rt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const mt=n.get(rt);if(rt.version!==mt.__version||ut===!0){e.activeTexture(i.TEXTURE0+q);const Mt=ae.getPrimaries(ae.workingColorSpace),et=E.colorSpace===Ui?null:ae.getPrimaries(E.colorSpace),nt=E.colorSpace===Ui||Mt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const _t=E.isCompressedTexture||E.image[0].isCompressedTexture,B=E.image[0]&&E.image[0].isDataTexture,it=[];for(let wt=0;wt<6;wt++)!_t&&!B?it[wt]=M(E.image[wt],!0,s.maxCubemapSize):it[wt]=B?E.image[wt].image:E.image[wt],it[wt]=Rt(E,it[wt]);const Q=it[0],xt=r.convert(E.format,E.colorSpace),pt=r.convert(E.type);let gt=A(E.internalFormat,xt,pt,E.normalized,E.colorSpace);const Gt=E.isVideoTexture!==!0,se=mt.__version===void 0||ut===!0,ft=rt.dataReady;let Wt=S(E,Q);Pt(i.TEXTURE_CUBE_MAP,E);let ee;if(E.isDepthTexture){if(gt=x(E.format===Oi,E.type),se)if(Gt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,gt,Q.width,Q.height);else for(let wt=0;wt<6;wt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,gt,Q.width,Q.height,0,xt,pt,null)}else if(_t){Gt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,gt,Q.width,Q.height);for(let wt=0;wt<6;wt++){ee=it[wt].mipmaps;for(let ve=0;ve<ee.length;ve++){const Ye=ee[ve];E.format!==Bn?xt!==null?Gt?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve,0,0,Ye.width,Ye.height,xt,Ye.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve,gt,Ye.width,Ye.height,0,Ye.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve,0,0,Ye.width,Ye.height,xt,pt,Ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve,gt,Ye.width,Ye.height,0,xt,pt,Ye.data)}}}else{if(ee=E.mipmaps,Gt&&se){ee.length>0&&Wt++;const wt=Ht(it[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,gt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(B){Gt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,it[wt].width,it[wt].height,xt,pt,it[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,gt,it[wt].width,it[wt].height,0,xt,pt,it[wt].data);for(let ve=0;ve<ee.length;ve++){const Mi=ee[ve].image[wt].image;Gt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve+1,0,0,Mi.width,Mi.height,xt,pt,Mi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve+1,gt,Mi.width,Mi.height,0,xt,pt,Mi.data)}}else{Gt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,xt,pt,it[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,gt,xt,pt,it[wt]);for(let ve=0;ve<ee.length;ve++){const Ye=ee[ve];Gt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve+1,0,0,xt,pt,Ye.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve+1,gt,xt,pt,Ye.image[wt])}}}b(E)&&E.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),mt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ct(P,E,q,ut,rt,mt){const Mt=r.convert(q.format,q.colorSpace),et=r.convert(q.type),nt=A(q.internalFormat,Mt,et,q.normalized,q.colorSpace),_t=n.get(E),B=n.get(q);if(B.__renderTarget=E,!_t.__hasExternalTextures){const it=Math.max(1,E.width>>mt),Q=Math.max(1,E.height>>mt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,mt,nt,it,Q,E.depth,0,Mt,et,null):e.texImage2D(rt,mt,nt,it,Q,0,Mt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),at(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,rt,B.__webglTexture,0,xe(E)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,rt,B.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(P,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const ut=E.depthTexture,rt=ut&&ut.isDepthTexture?ut.type:null,mt=x(E.stencilBuffer,rt),Mt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;at(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(E),mt,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(E),mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,P)}else{const ut=E.textures;for(let rt=0;rt<ut.length;rt++){const mt=ut[rt],Mt=r.convert(mt.format,mt.colorSpace),et=r.convert(mt.type),nt=A(mt.internalFormat,Mt,et,mt.normalized,mt.colorSpace);at(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(E),nt,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(E),nt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,nt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Yt(P,E,q){const ut=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const rt=n.get(E.depthTexture);rt.__renderTarget=E;const mt=ut?E.depthTexture.image[0]:E.depthTexture.image;(!rt.__webglTexture||mt.width!==E.width||mt.height!==E.height)&&(mt.width=E.width,mt.height=E.height,E.depthTexture.needsUpdate=!0),ut?st(E.depthTexture,0):J(E.depthTexture,0);const Mt=rt.__webglTexture,et=xe(E),nt=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,_t=E.depthTexture.format===Oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Bi)at(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,nt,Mt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,_t,nt,Mt,0);else if(E.depthTexture.format===Oi)at(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,nt,Mt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,_t,nt,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(P){const E=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ut=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const rt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",rt)};ut.addEventListener("dispose",rt),E.__depthDisposeCallback=rt}E.__boundDepthTexture=ut}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ut=0;ut<6;ut++)Yt(E.__webglFramebuffer[ut],P,ut);else P.texture.mipmaps.length>0?Yt(E.__webglFramebuffer[0],P,0):Yt(E.__webglFramebuffer,P,0);else if(q){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=i.createRenderbuffer(),te(E.__webglDepthbuffer[ut],P,!1);else{const rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,mt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),te(E.__webglDepthbuffer,P,!1);else{const rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(P,E,q){const ut=n.get(P);E!==void 0&&ct(ut.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&le(P)}function Ae(P){const E=P.texture,q=n.get(P),ut=n.get(E);P.addEventListener("dispose",D),F(P);const rt=P.textures,mt=P.isWebGLCubeRenderTarget===!0,Mt=rt.length>1;if(Mt||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=E.version,o.memory.textures++),mt){q.__webglFramebuffer=[];for(let et=0;et<6;et++)if(E.mipmaps.length>0){q.__webglFramebuffer[et]=[];for(let nt=0;nt<E.mipmaps.length;nt++)q.__webglFramebuffer[et][nt]=i.createFramebuffer()}else q.__webglFramebuffer[et]=i.createFramebuffer()}else{if(E.mipmaps.length>0){q.__webglFramebuffer=[];for(let et=0;et<E.mipmaps.length;et++)q.__webglFramebuffer[et]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let et=0,nt=rt.length;et<nt;et++){const _t=n.get(rt[et]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&at(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let et=0;et<rt.length;et++){const nt=rt[et];q.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[et]);const _t=r.convert(nt.format,nt.colorSpace),B=r.convert(nt.type),it=A(nt.internalFormat,_t,B,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),Q=xe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,it,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,q.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),te(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,E);for(let et=0;et<6;et++)if(E.mipmaps.length>0)for(let nt=0;nt<E.mipmaps.length;nt++)ct(q.__webglFramebuffer[et][nt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,nt);else ct(q.__webglFramebuffer[et],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);b(E)?v(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let et=0,nt=rt.length;et<nt;et++){const _t=rt[et],B=n.get(_t);let it=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(it=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,B.__webglTexture),Pt(it,_t),ct(q.__webglFramebuffer,P,_t,i.COLOR_ATTACHMENT0+et,it,0),b(_t)&&v(it)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(et=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,ut.__webglTexture),Pt(et,E),E.mipmaps.length>0)for(let nt=0;nt<E.mipmaps.length;nt++)ct(q.__webglFramebuffer[nt],P,E,i.COLOR_ATTACHMENT0,et,nt);else ct(q.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,et,0);b(E)?v(et):E.mipmaps.length>0&&i.texParameteri(et,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&le(P)}function V(P){const E=P.textures;for(let q=0,ut=E.length;q<ut;q++){const rt=E[q];if(b(rt)&&rt.mipmapsAutoUpdate===!0){const mt=w(P),Mt=n.get(rt).__webglTexture;e.bindTexture(mt,Mt),v(mt),e.unbindTexture()}}}const Fe=[];function be(P){if(P.samples>0){if(at(P)===!1){const E=P.textures,q=P.width,ut=P.height;let rt=i.COLOR_BUFFER_BIT;const mt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(P),et=E.length>1;if(et)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);const B=n.get(E[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,B,0)}i.blitFramebuffer(0,0,q,ut,0,0,q,ut,rt,i.NEAREST),l===!0&&(Fe.length=0,Fe.push(i.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Fe.push(mt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);const B=n.get(E[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,B,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function xe(P){return Math.min(s.maxSamples,P.samples)}function at(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function $t(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Rt(P,E){const q=P.colorSpace,ut=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==vn&&q!==Ui&&(ae.getTransfer(q)===ye?(ut!==Bn||rt!==wn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",q)),E}function Ht(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=G,this.getTextureUnits=W,this.setTextureUnits=tt,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=lt,this.setTextureCube=st,this.rebindTextures=ce,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=at,this.dispose=O}function Vy(i,t){function e(n,s=Ui){let r;const o=ae.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===df)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cf)return i.BYTE;if(n===hf)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===kc)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===ff)return i.ALPHA;if(n===pf)return i.RGB;if(n===Bn)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===Hc)return i.RED;if(n===Gc)return i.RED_INTEGER;if(n===ss)return i.RG;if(n===Vc)return i.RG_INTEGER;if(n===Wc)return i.RGBA_INTEGER;if(n===ko||n===Bo||n===zo||n===Ho)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Ol||n===kl||n===Bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===Hl||n===Gl||n===Vl||n===Wl||n===Zo||n===Xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zl||n===Hl)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vl)return r.COMPRESSED_R11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zo)return r.COMPRESSED_RG11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Yl||n===Kl||n===Zl||n===$l||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ql)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===ac||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===hc||n===$o||n===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Cf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _n({vertexShader:Wy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yy extends Hi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new qy,g={},M=e.getContextAttributes();let b=null,v=null;const w=[],A=[],x=new Dt;let S=null,F=null;const C=new gn;C.viewport=new Ee;const L=new gn;L.viewport=new Ee;const D=[C,L],I=new q0;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=w[H];return J===void 0&&(J=new Ia,w[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=w[H];return J===void 0&&(J=new Ia,w[H]=J),J.getGripSpace()},this.getHand=function(H){let J=w[H];return J===void 0&&(J=new Ia,w[H]=J),J.getHandSpace()};function k(H){const J=A.indexOf(H.inputSource);if(J===-1)return;const Y=w[J];Y!==void 0&&(Y.update(H.inputSource,H.frame,c||o),Y.dispatchEvent({type:H.type,data:H.inputSource}))}function U(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",X);for(let H=0;H<w.length;H++){const J=A[H];J!==null&&(A[H]=null,w[H].disconnect(J))}R=null,O=null,p.reset();for(const H in g)delete g[H];if(t.setRenderTarget(b),f=null,d=null,u=null,s=null,v=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(x.width,x.height,!1),F!==null){const H=F.camera;H.fov=F.fov,H.zoom=F.zoom,H.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",U),s.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,lt=null,st=null;M.depth&&(st=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=M.stencil?Oi:Bi,lt=M.stencil?Ds:Gn);const bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new on(d.textureWidth,d.textureHeight,{format:Bn,type:wn,depthTexture:new rs(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Y={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new on(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(H){for(let J=0;J<H.removed.length;J++){const Y=H.removed[J],lt=A.indexOf(Y);lt>=0&&(A[lt]=null,w[lt].disconnect(Y))}for(let J=0;J<H.added.length;J++){const Y=H.added[J];let lt=A.indexOf(Y);if(lt===-1){for(let bt=0;bt<w.length;bt++)if(bt>=A.length){A.push(Y),lt=bt;break}else if(A[bt]===null){A[bt]=Y,lt=bt;break}if(lt===-1)break}const st=w[lt];st&&st.connect(Y)}}function N(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let J=H.near,Y=H.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(Y=p.depthFar)),I.near=L.near=C.near=J,I.far=L.far=C.far=Y,(R!==I.near||O!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,O=I.far),I.layers.mask=H.layers.mask|6,C.layers.mask=I.layers.mask&-5,L.layers.mask=I.layers.mask&-3;const lt=H.parent,st=I.cameras;N(I,lt);for(let bt=0;bt<st.length;bt++)N(st[bt],lt);I.projectionMatrix.copy(C.projectionMatrix),I.projectionMatrixInverse.copy(C.projectionMatrixInverse),F===null&&H.isPerspectiveCamera&&(F={camera:H,fov:H.fov,zoom:H.zoom}),G(H,I,lt)};function G(H,J,Y){Y===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(Y.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ns*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(H){return g[H]};let W=null;function tt(H,J){if(h=J.getViewerPose(c||o),m=J,h!==null){const Y=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let lt=!1;Y.length!==I.cameras.length&&(I.cameras.length=0,lt=!0);for(let dt=0;dt<Y.length;dt++){const Pt=Y[dt];let kt=null;if(f!==null)kt=f.getViewport(Pt);else{const pe=u.getViewSubImage(d,Pt);kt=pe.viewport,dt===0&&(t.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(v))}let Ut=D[dt];Ut===void 0&&(Ut=new gn,Ut.layers.enable(dt),Ut.viewport=new Ee,D[dt]=Ut),Ut.matrix.fromArray(Pt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Pt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(kt.x,kt.y,kt.width,kt.height),dt===0&&(I.matrix.copy(Ut.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),lt===!0&&I.cameras.push(Ut)}const st=s.enabledFeatures;if(st&&st.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const dt=u.getDepthInformation(Y[0]);dt&&dt.isValid&&dt.texture&&p.init(dt,s.renderState)}if(st&&st.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let dt=0;dt<Y.length;dt++){const Pt=Y[dt].camera;if(Pt){let kt=g[Pt];kt||(kt=new Cf,g[Pt]=kt);const Ut=u.getCameraImage(Pt);kt.sourceTexture=Ut}}}}for(let Y=0;Y<w.length;Y++){const lt=A[Y],st=w[Y];lt!==null&&st!==void 0&&st.update(lt,J,c||o)}W&&W(H,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Z=new kf;Z.setAnimationLoop(tt),this.setAnimationLoop=function(H){W=H},this.dispose=function(){}}}const Ky=new Vt,Kf=new Kt;Kf.set(-1,0,0,0,1,0,0,0,1);function Zy(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Pf(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,b,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===dn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===dn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=t.get(g),b=M.envMap,v=M.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(Ky.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Kf),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=b*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $y(i,t,e,n){let s={},r={};function o(M,b){const v=b.program;n.uniformBlockBinding(M,v,s[M.id])}function a(M,b){let v=s[M.id];v===void 0&&(m(M),v=l(M),s[M.id]=v,M.addEventListener("dispose",p));const w=b.program;n.updateUBOMapping(M,w);const A=t.render.frame;r[M.id]!==A&&(c(M),r[M.id]=A)}function l(M){const b=i.createBuffer(),v=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,v,w),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(M){const b=s[M.id],v=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,x=v.length;A<x;A++){const S=v[A];if(Array.isArray(S))for(let F=0,C=S.length;F<C;F++)h(S[F],A,F,w);else h(S,A,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,b,v,w){if(d(M,b,v,w)===!0){const A=M.__offset,x=M.value;if(Array.isArray(x)){let S=0;for(let F=0;F<x.length;F++){const C=x[F],L=_(C,!0);u(C,M.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function u(M,b,v){typeof M=="number"||typeof M=="boolean"?b[v]=M:M.isMatrix3?(b[v]=M.elements[0],b[v+1]=M.elements[1],b[v+2]=M.elements[2],b[v+3]=0,b[v+4]=M.elements[3],b[v+5]=M.elements[4],b[v+6]=M.elements[5],b[v+7]=0,b[v+8]=M.elements[6],b[v+9]=M.elements[7],b[v+10]=M.elements[8],b[v+11]=0):ArrayBuffer.isView(M)?b.set(M.subarray(0,b.length-v),v):M.toArray(b,v)}function d(M,b,v,w){const A=M.value,x=b+"_"+v;if(Array.isArray(A)){w[x]===void 0&&(w[x]=[]);const S=w[x];let F=!1;for(let C=0;C<A.length;C++)f(A[C],S,C)===!0&&(F=!0);return F}return f(A,w,x)}function f(M,b,v){if(b[v]===void 0)return typeof M=="number"||typeof M=="boolean"?b[v]=M:ArrayBuffer.isView(M)?b[v]=M.slice():b[v]=M.clone(),!0;{const w=b[v];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return b[v]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function m(M){const b=M.uniforms;let v=0;const w=16;for(let x=0,S=b.length;x<S;x++){const F=Array.isArray(b[x])?b[x]:[b[x]];for(let C=0,L=F.length;C<L;C++){const D=F[C],I=Array.isArray(D.value)?D.value:[D.value],R=Array.isArray(b[x])||Array.isArray(D.value);let O=v;for(let U=0,X=I.length;U<X;U++){const N=I[U],G=_(N,R),W=v%w,tt=W%G.boundary,Z=W+tt;v+=tt,Z!==0&&w-Z<G.storage&&(v+=w-Z),U===0&&(O=v),v+=G.storage}const k=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new k((v-O)/Float32Array.BYTES_PER_ELEMENT),D.__offset=O}}const A=v%w;return A>0&&(v+=w-A),M.__size=v,M.__cache={},this}function _(M,b){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=16,v.storage=48):M.isMatrix4?(v.boundary=16,v.storage=64):M.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",M),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(M){const b=M.target;b.removeEventListener("dispose",p),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:g}}const Jy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function jy(){return Kn===null&&(Kn=new ha(Jy,16,16,ss,xn),Kn.name="DFG_LUT",Kn.minFilter=$e,Kn.magFilter=$e,Kn.wrapS=ti,Kn.wrapT=ti,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class Qy{constructor(t={}){const{canvas:e=bm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=wn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=f,p=new Set([Wc,Vc,Gc]),g=new Set([wn,Gn,Rr,Ds,Bc,zc]),M=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let w=null,A=null;const x=[],S=[];let F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,D=null,I=null,R=null,O=null;this._outputColorSpace=Ve;let k=0,U=0,X=null,N=-1,G=null;const W=new Ee,tt=new Ee;let Z=null;const H=new Lt(0);let J=0,Y=e.width,lt=e.height,st=1,bt=null,Qt=null;const dt=new Ee(0,0,Y,lt),Pt=new Ee(0,0,Y,lt);let kt=!1;const Ut=new Dr,pe=new Qc;let Xt=!1,qt=!1;const ct=new Vt,te=new y,Yt=new Ee,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Ae(){return X===null?st:1}let V=n;function Fe(T,z){return e.getContext(T,z)}let be,xe,at,$t,Rt,Ht,P,E,q,ut,rt,mt,Mt,et,nt,_t,B,it,Q,xt,pt,gt,Gt;try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dc}`),e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",wt,!1),V===null){const z="webgl2";if(V=Fe(z,T),V===null)throw Fe(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(T){throw e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Zt("WebGLRenderer: "+T.message),T}function se(){be=new nv(V),be.init(),pt=new Vy(V,be),xe=new Xx(V,be,t,pt),at=new Hy(V,be),xe.reversedDepthBuffer&&d&&at.buffers.depth.setReversed(!0),I=V.createFramebuffer(),R=V.createFramebuffer(),O=V.createFramebuffer(),$t=new rv(V),Rt=new Ay,Ht=new Gy(V,be,at,Rt,xe,pt,$t),P=new ev(C),E=new ag(V),gt=new Vx(V,E),q=new iv(V,E,$t,gt),ut=new av(V,q,E,gt,$t),it=new ov(V,xe,Ht),nt=new qx(Rt),rt=new Ty(C,P,be,xe,gt,nt),mt=new Zy(C,Rt),Mt=new Cy,et=new Uy(be),B=new Gx(C,P,at,ut,m,l),_t=new zy(C,ut,xe),Gt=new $y(V,$t,xe,at),Q=new Wx(V,be,$t),xt=new sv(V,be,$t),$t.programs=rt.programs,C.capabilities=xe,C.extensions=be,C.properties=Rt,C.renderLists=Mt,C.shadowMap=_t,C.state=at,C.info=$t}_!==wn&&(F=new cv(_,e.width,e.height,a,s,r));const ft=new Yy(C,V);this.xr=ft,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(T){T!==void 0&&(st=T,this.setSize(Y,lt,!1))},this.getSize=function(T){return T.set(Y,lt)},this.setSize=function(T,z,j=!0){if(ft.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,lt=z,e.width=Math.floor(T*st),e.height=Math.floor(z*st),j===!0&&(e.style.width=T+"px",e.style.height=z+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Y*st,lt*st).floor()},this.setDrawingBufferSize=function(T,z,j){Y=T,lt=z,st=j,e.width=Math.floor(T*j),e.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(_===wn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(W)},this.getViewport=function(T){return T.copy(dt)},this.setViewport=function(T,z,j,K){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,z,j,K),at.viewport(W.copy(dt).multiplyScalar(Ae()).round())},this.getScissor=function(T){return T.copy(Pt)},this.setScissor=function(T,z,j,K){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,z,j,K),at.scissor(tt.copy(Pt).multiplyScalar(Ae()).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(T){at.setScissorTest(kt=T)},this.setOpaqueSort=function(T){bt=T},this.setTransparentSort=function(T){Qt=T},this.getClearColor=function(T){return T.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,j=!0){let K=0;if(T){let $=!1;if(X!==null){const St=X.texture.format;$=p.has(St)}if($){const St=X.texture.type,Nt=g.has(St),vt=B.getClearColor(),Ct=B.getClearAlpha(),Bt=vt.r,Jt=vt.g,he=vt.b;Nt?(M[0]=Bt,M[1]=Jt,M[2]=he,M[3]=Ct,V.clearBufferuiv(V.COLOR,0,M)):(b[0]=Bt,b[1]=Jt,b[2]=he,b[3]=Ct,V.clearBufferiv(V.COLOR,0,b))}else K|=V.COLOR_BUFFER_BIT}z&&(K|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),B.dispose(),Mt.dispose(),et.dispose(),Ht.dispose(),Rt.dispose(),P.dispose(),ut.dispose(),q.dispose(),gt.dispose(),Gt.dispose(),rt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",bh),ft.removeEventListener("sessionend",wh),Xi.stop()};function Wt(T){T.preventDefault(),jo("WebGLRenderer: Context Lost."),L=!0}function ee(){jo("WebGLRenderer: Context Restored."),L=!1;const T=$t.autoReset,z=_t.enabled,j=_t.autoUpdate,K=_t.needsUpdate,$=_t.type;se(),$t.autoReset=T,_t.enabled=z,_t.autoUpdate=j,_t.needsUpdate=K,_t.type=$}function wt(T){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ve(T){const z=T.target;z.removeEventListener("dispose",ve),Ye(z)}function Ye(T){Mi(T),Rt.remove(T)}function Mi(T){const z=Rt.get(T).programs;z!==void 0&&(z.forEach(function(j){rt.releaseProgram(j)}),T.isShaderMaterial&&rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,j,K,$,St){z===null&&(z=le);const Nt=$.isMesh&&$.matrixWorld.determinantAffine()<0,vt=kp(T,z,j,K,$);at.setMaterial(K,Nt);let Ct=j.index,Bt=1;if(K.wireframe===!0){if(Ct=q.getWireframeAttribute(j),Ct===void 0)return;Bt=2}const Jt=j.drawRange,he=j.attributes.position;let Ft=Jt.start*Bt,ue=(Jt.start+Jt.count)*Bt;St!==null&&(Ft=Math.max(Ft,St.start*Bt),ue=Math.min(ue,(St.start+St.count)*Bt)),Ct!==null?(Ft=Math.max(Ft,0),ue=Math.min(ue,Ct.count)):he!=null&&(Ft=Math.max(Ft,0),ue=Math.min(ue,he.count));const Be=ue-Ft;if(Be<0||Be===1/0)return;gt.setup($,K,vt,j,Ct);let Te,we=Q;if(Ct!==null&&(Te=E.get(Ct),we=xt,we.setIndex(Te)),$.isMesh)K.wireframe===!0?(at.setLineWidth(K.wireframeLinewidth*Ae()),we.setMode(V.LINES)):we.setMode(V.TRIANGLES);else if($.isLine){let en=K.linewidth;en===void 0&&(en=1),at.setLineWidth(en*Ae()),$.isLineSegments?we.setMode(V.LINES):$.isLineLoop?we.setMode(V.LINE_LOOP):we.setMode(V.LINE_STRIP)}else $.isPoints?we.setMode(V.POINTS):$.isSprite&&we.setMode(V.TRIANGLES);if($.isBatchedMesh)if(be.get("WEBGL_multi_draw"))we.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const en=$._multiDrawStarts,Ot=$._multiDrawCounts,ln=$._multiDrawCount,me=Ct?E.get(Ct).bytesPerElement:1,qi=Rt.get(K).currentProgram.getUniforms();for(let nn=0;nn<ln;nn++)qi.setValue(V,"_gl_DrawID",nn),we.render(en[nn]/me,Ot[nn])}else if($.isInstancedMesh)we.renderInstances(Ft,Be,$.count);else if(j.isInstancedBufferGeometry){const en=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ot=Math.min(j.instanceCount,en);we.renderInstances(Ft,Be,Ot)}else we.render(Ft,Be)};function Sh(T,z,j,K){D!==null&&T.isNodeMaterial&&D.setObject(K,T),Xt===!0&&nt.setState(T,j,!1),T.transparent===!0&&T.side===Oe&&T.forceSinglePass===!1?(T.side=dn,T.needsUpdate=!0,Ws(T,z,K),T.side=ki,T.needsUpdate=!0,Ws(T,z,K),T.side=Oe):Ws(T,z,K)}this.compile=function(T,z,j=null){j===null&&(j=T),D!==null&&D.renderStart(T,z,j),A=et.get(j),A.init(z),S.push(A),j.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),T!==j&&T.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),A.setupLights(),D!==null&&D.updateLights(A.state.lightsArray),qt=this.localClippingEnabled,Xt=nt.init(this.clippingPlanes,qt),Xt===!0&&nt.setGlobalState(this.clippingPlanes,z),D!==null&&_t.render(A.state.shadowsArray,j,z);const K=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const St=$.material;if(St)if(Array.isArray(St))for(let Nt=0;Nt<St.length;Nt++){const vt=St[Nt];Sh(vt,j,z,$),K.add(vt)}else Sh(St,j,z,$),K.add(St)}),A=S.pop(),D!==null&&D.renderEnd(),K},this.compileAsync=function(T,z,j=null){const K=this.compile(T,z,j);return new Promise($=>{function St(){if(K.forEach(function(Nt){const Ct=Rt.get(Nt).currentProgram;(Ct===void 0||Ct.isReady())&&K.delete(Nt)}),K.size===0){$(T);return}setTimeout(St,10)}be.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ma=null;function Fp(T){Ma&&Ma(T)}function bh(){Xi.stop()}function wh(){Xi.start()}const Xi=new kf;Xi.setAnimationLoop(Fp),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(T){Ma=T,ft.setAnimationLoop(T),T===null?Xi.stop():Xi.start()},ft.addEventListener("sessionstart",bh),ft.addEventListener("sessionend",wh),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,z);const j=ft.enabled===!0&&ft.isPresenting===!0,K=F!==null&&(X===null||j)&&F.begin(C,X);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(z),z=ft.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,z,X),A=et.get(T,S.length),A.init(z),A.state.textureUnits=Ht.getTextureUnits(),S.push(A),ct.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?pe.setFromArrayCamera(z):Ut.setFromProjectionMatrix(ct,zn,z.reversedDepth),qt=this.localClippingEnabled,Xt=nt.init(this.clippingPlanes,qt),w=Mt.get(T,x.length),w.init(),x.push(w),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){const Nt=C.xr.getDepthSensingMesh();Nt!==null&&Sa(Nt,z,-1/0,C.sortObjects)}Sa(T,z,0,C.sortObjects),w.finish(),D!==null&&D.updateLights(A.state.lightsArray),C.sortObjects===!0&&w.sort(bt,Qt),ce=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ce&&B.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),Xt===!0&&nt.beginShadows();const $=A.state.shadowsArray;if(_t.render($,T,z),Xt===!0&&nt.endShadows(),(K&&F.hasRenderPass())===!1){const Nt=w.opaque,vt=w.transmissive;if(A.setupLights(),z.isArrayCamera){const Ct=z.cameras;if(vt.length>0)for(let Bt=0,Jt=Ct.length;Bt<Jt;Bt++){const he=Ct[Bt];Th(Nt,vt,T,he)}ce&&B.render(T);for(let Bt=0,Jt=Ct.length;Bt<Jt;Bt++){const he=Ct[Bt];Eh(w,T,he,he.viewport)}}else vt.length>0&&Th(Nt,vt,T,z),ce&&B.render(T),Eh(w,T,z)}X!==null&&U===0&&(Ht.updateMultisampleRenderTarget(X),Ht.updateRenderTargetMipmap(X)),K&&F.end(C),T.isScene===!0&&T.onAfterRender(C,T,z),gt.resetDefaultState(),N=-1,G=null,S.pop(),S.length>0?(A=S[S.length-1],Ht.setTextureUnits(A.state.textureUnits),Xt===!0&&nt.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,D!==null&&D.renderEnd()};function Sa(T,z,j,K){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){const Nt=z.isArrayCamera?pe:Ut;if(!T.frustumCulled||T.intersectsFrustum(Nt)){K&&Yt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ct);const vt=ut.update(T),Ct=T.material;Ct.visible&&w.push(T,vt,Ct,j,Yt.z,null,z)}}else if(T.isMesh||T.isLine||T.isPoints){const Nt=z.isArrayCamera?pe:Ut;if(!T.frustumCulled||T.intersectsFrustum(Nt)){const vt=ut.update(T),Ct=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Yt.copy(T.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Yt.copy(vt.boundingSphere.center)),Yt.applyMatrix4(T.matrixWorld).applyMatrix4(ct)),Array.isArray(Ct)){const Bt=vt.groups;for(let Jt=0,he=Bt.length;Jt<he;Jt++){const Ft=Bt[Jt],ue=Ct[Ft.materialIndex];ue&&ue.visible&&w.push(T,vt,ue,j,Yt.z,Ft,z)}}else Ct.visible&&w.push(T,vt,Ct,j,Yt.z,null,z)}}}const St=T.children;for(let Nt=0,vt=St.length;Nt<vt;Nt++)Sa(St[Nt],z,j,K)}function Eh(T,z,j,K){const{opaque:$,transmissive:St,transparent:Nt}=T;A.setupLightsView(j),Xt===!0&&nt.setGlobalState(C.clippingPlanes,j),K&&at.viewport(W.copy(K)),$.length>0&&Gr($,z,j),St.length>0&&Gr(St,z,j),Nt.length>0&&Gr(Nt,z,j),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Th(T,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[K.id]===void 0){const Ft=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[K.id]=new on(1,1,{generateMipmaps:!0,type:Ft?xn:wn,minFilter:ei,samples:Math.max(4,xe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const St=A.state.transmissionRenderTarget[K.id],Nt=K.viewport||W;St.setSize(Nt.z*C.transmissionResolutionScale,Nt.w*C.transmissionResolutionScale);const vt=C.getRenderTarget(),Ct=C.getActiveCubeFace(),Bt=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(H),J=C.getClearAlpha(),J<1&&C.setClearColor(16777215,.5),C.clear(),ce&&B.render(j);const Jt=C.toneMapping;C.toneMapping=ni;const he=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),A.setupLightsView(K),Xt===!0&&nt.setGlobalState(C.clippingPlanes,K),Gr(T,j,K),Ht.updateMultisampleRenderTarget(St),Ht.updateRenderTargetMipmap(St),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ue=0,Be=z.length;ue<Be;ue++){const Te=z[ue],{object:we,geometry:en,material:Ot,group:ln}=Te;if(Ot.side===Oe&&we.layers.test(K.layers)){const me=Ot.side;Ot.side=dn,Ot.needsUpdate=!0,Ah(we,j,K,en,Ot,ln),Ot.side=me,Ot.needsUpdate=!0,Ft=!0}}Ft===!0&&(Ht.updateMultisampleRenderTarget(St),Ht.updateRenderTargetMipmap(St))}C.setRenderTarget(vt,Ct,Bt),C.setClearColor(H,J),he!==void 0&&(K.viewport=he),C.toneMapping=Jt}function Gr(T,z,j){const K=z.isScene===!0?z.overrideMaterial:null;for(let $=0,St=T.length;$<St;$++){const Nt=T[$],{object:vt,geometry:Ct,group:Bt}=Nt;let Jt=Nt.material;Jt.allowOverride===!0&&K!==null&&(Jt=K),vt.layers.test(j.layers)&&Ah(vt,z,j,Ct,Jt,Bt)}}function Ah(T,z,j,K,$,St){D!==null&&$.isNodeMaterial&&D.setObject(T,$),T.onBeforeRender(C,z,j,K,$,St),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(C,z,j,K,T,St),$.transparent===!0&&$.side===Oe&&$.forceSinglePass===!1?($.side=dn,$.needsUpdate=!0,C.renderBufferDirect(j,z,K,$,T,St),$.side=ki,$.needsUpdate=!0,C.renderBufferDirect(j,z,K,$,T,St),$.side=Oe):C.renderBufferDirect(j,z,K,$,T,St),T.onAfterRender(C,z,j,K,$,St)}function Rh(T){let z=0;for(const j of T)j.texture!==null&&z++;return z}function Ws(T,z,j){z.isScene!==!0&&(z=le);const K=Rt.get(T),$=A.state.lights,St=A.state.shadowsArray,Nt=$.state.version,vt=rt.getParameters(T,$.state,St,z,j,A.state.lightProbeGridArray),Ct=rt.getProgramCacheKey(vt);let Bt=K.programs;K.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,K.fog=z.fog;const Jt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;K.envMap=P.get(T.envMap||K.environment,Jt),K.envMapRotation=K.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",ve),Bt=new Map,K.programs=Bt,K.programVariants=new Map);let he=Bt.get(Ct);if(he!==void 0){if(K.currentProgram===he&&K.lightsStateVersion===Nt)return Ph(T,vt),he}else vt.uniforms=rt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,j,vt),T.onBeforeCompile(vt,C),he=rt.acquireProgram(vt,Ct),Bt.set(Ct,he),K.uniforms=vt.uniforms;const Ft=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=nt.uniform),Ph(T,vt),K.needsLights=zp(T),K.lightsStateVersion=Nt,K.needsLights&&(Ft.ambientLightColor.value=$.state.ambient,Ft.lightProbe.value=$.state.probe,Ft.sunLights.value=$.state.sun,Ft.sunLightShadows.value=$.state.sunShadow,Ft.directionalLights.value=$.state.directional,Ft.directionalLightShadows.value=$.state.directionalShadow,Ft.spotLights.value=$.state.spot,Ft.spotLightShadows.value=$.state.spotShadow,Ft.rectAreaLights.value=$.state.rectArea,Ft.ltc_1.value=$.state.rectAreaLTC1,Ft.ltc_2.value=$.state.rectAreaLTC2,Ft.pointLights.value=$.state.point,Ft.pointLightShadows.value=$.state.pointShadow,Ft.hemisphereLights.value=$.state.hemi,Ft.sunShadowMatrix.value=$.state.sunShadowMatrix,Ft.sunShadowCascade.value=$.state.sunShadowCascade,Ft.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ft.spotLightMatrix.value=$.state.spotLightMatrix,Ft.spotLightMap.value=$.state.spotLightMap,Ft.pointShadowMatrix.value=$.state.pointShadowMatrix),K.numLightProbeGrids=Rh(A.state.lightProbeGridArray),K.currentProgram=he,K.uniformsList=null,he}function Op(T,z,j,K,$){const St=Rt.get(T),Nt=St.currentProgram.id+","+K+","+$;let vt=St.programVariants.get(Nt);return vt===void 0?(vt=Ws(T,z,j),St.programVariants.set(Nt,vt)):(St.currentProgram=vt,St.uniformsList=null,St.outputColorSpace=K,St.toneMapping=$),vt}function Ch(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Go.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Ph(T,z){const j=Rt.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function kp(T,z,j,K,$){z.isScene!==!0&&(z=le),Ht.resetTextureUnits();const St=z.fog,Nt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?z.environment:null,vt=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ae.workingColorSpace,Ct=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Bt=P.get(K.envMap||Nt,Ct),Jt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,he=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ft=!!j.morphAttributes.position,ue=!!j.morphAttributes.normal,Be=!!j.morphAttributes.color;let Te=ni;K.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Te=C.toneMapping);const we=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,en=we!==void 0?we.length:0,Ot=Rt.get(K),ln=A.state.lights;if(Xt===!0&&(qt===!0||T!==G)){const Ie=T===G&&K.id===N;nt.setState(K,T,Ie)}let me=!1,qi=!1;K.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==ln.state.version||$.isBatchedMesh&&Ot.batching===!1||!$.isBatchedMesh&&Ot.batching===!0||$.isBatchedMesh&&Ot.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ot.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ot.instancing===!1||!$.isInstancedMesh&&Ot.instancing===!0||$.isSkinnedMesh&&Ot.skinning===!1||!$.isSkinnedMesh&&Ot.skinning===!0||$.isInstancedMesh&&Ot.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ot.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ot.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ot.instancingMorph===!1&&$.morphTexture!==null||Ot.envMap!==Bt||K.fog===!0&&Ot.fog!==St||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==nt.numPlanes||Ot.numIntersection!==nt.numIntersection)||Ot.vertexAlphas!==Jt||Ot.vertexTangents!==he||Ot.morphTargets!==Ft||Ot.morphNormals!==ue||Ot.morphColors!==Be||Ot.morphTargetsCount!==en||Ot.numLightProbeGrids!==Rh(A.state.lightProbeGridArray)?me=!0:(Ot.outputColorSpace!==vt||Ot.toneMapping!==Te)&&(qi=!0):(me=!0,Ot.__version=K.version);let nn=Ot.currentProgram;(me===!0||qi===!0)&&(nn=qi===!0?Op(K,z,$,vt,Te):Ws(K,z,$),D&&K.isNodeMaterial&&D.onUpdateProgram(K,nn,Ot));let Vr=!1,Si=!1,Yi=!1;const fe=nn.getUniforms(),Je=Ot.uniforms;if(at.useProgram(nn.program)&&(Vr=!0,Si=!0,Yi=!0),K.id!==N&&(N=K.id,Si=!0),Vr||G!==T){at.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),fe.setValue(V,"projectionMatrix",T.projectionMatrix),fe.setValue(V,"viewMatrix",T.matrixWorldInverse);const Ke=fe.map.cameraPosition;Ke!==void 0&&Ke.setValue(V,te.setFromMatrixPosition(T.matrixWorld)),xe.logarithmicDepthBuffer&&fe.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&fe.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,Si=!0,Yi=!0)}if(Ot.needsLights&&(ln.state.sunShadowMap.length>0&&fe.setValue(V,"sunShadowMap",ln.state.sunShadowMap,Ht),ln.state.directionalShadowMap.length>0&&fe.setValue(V,"directionalShadowMap",ln.state.directionalShadowMap,Ht),ln.state.spotShadowMap.length>0&&fe.setValue(V,"spotShadowMap",ln.state.spotShadowMap,Ht),ln.state.pointShadowMap.length>0&&fe.setValue(V,"pointShadowMap",ln.state.pointShadowMap,Ht)),$.isSkinnedMesh){fe.setOptional(V,$,"bindMatrix"),fe.setOptional(V,$,"bindMatrixInverse");const Ie=$.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),fe.setValue(V,"boneTexture",Ie.boneTexture,Ht))}$.isBatchedMesh&&(fe.setOptional(V,$,"batchingTexture"),fe.setValue(V,"batchingTexture",$._matricesTexture,Ht),fe.setOptional(V,$,"batchingIdTexture"),fe.setValue(V,"batchingIdTexture",$._indirectTexture,Ht),fe.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&fe.setValue(V,"batchingColorTexture",$._colorsTexture,Ht));const Un=j.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&it.update($,j,nn),(Si||Ot.receiveShadow!==$.receiveShadow)&&(Ot.receiveShadow=$.receiveShadow,fe.setValue(V,"receiveShadow",$.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&z.environment!==null&&(Je.envMapIntensity.value=z.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=jy()),Si){if(fe.setValue(V,"toneMappingExposure",C.toneMappingExposure),Ot.needsLights&&Bp(Je,Yi),St&&K.fog===!0&&mt.refreshFogUniforms(Je,St),mt.refreshMaterialUniforms(Je,K,st,lt,A.state.transmissionRenderTarget[T.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){const Ie=v;let Ke=0;for(const li of A.state.lightProbeGridArray)li.texture!==null&&(Ie.textures[Ke]=li.texture,Ie.min[Ke]=li.boundingBox.min,Ie.max[Ke]=li.boundingBox.max,Ie.resolution[Ke]=li.resolution,Ke++);for(const li in Ie)Ie[li].length=Ke;Je.probesSH.value=Ie.textures,Je.probesMin.value=Ie.min,Je.probesMax.value=Ie.max,Je.probesResolution.value=Ie.resolution}Go.upload(V,Ch(Ot),Je,Ht)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Go.upload(V,Ch(Ot),Je,Ht),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&fe.setValue(V,"center",$.center),fe.setValue(V,"modelViewMatrix",$.modelViewMatrix),fe.setValue(V,"normalMatrix",$.normalMatrix),fe.setValue(V,"modelMatrix",$.matrixWorld),K.uniformsGroups!==void 0){const Ie=K.uniformsGroups;for(let Ke=0,li=Ie.length;Ke<li;Ke++){const Ih=Ie[Ke];Gt.update(Ih,nn),Gt.bind(Ih,nn)}}return nn}function Bp(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.sunLights.needsUpdate=z,T.sunLightShadows.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function zp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(T,z,j){const K=Rt.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Rt.get(T.texture).__webglTexture=z,Rt.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const j=Rt.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,j=0){X=T,k=z,U=j;let K=null,$=!1,St=!1;if(T){const vt=Rt.get(T);if(vt.__useDefaultFramebuffer!==void 0){at.bindFramebuffer(V.FRAMEBUFFER,vt.__webglFramebuffer),W.copy(T.viewport),tt.copy(T.scissor),Z=T.scissorTest,at.viewport(W),at.scissor(tt),at.setScissorTest(Z),N=-1;return}else if(vt.__webglFramebuffer===void 0)Ht.setupRenderTarget(T);else if(vt.__hasExternalTextures)Ht.rebindTextures(T,Rt.get(T.texture).__webglTexture,Rt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Jt=T.depthTexture;if(vt.__boundDepthTexture!==Jt){if(Jt!==null&&Rt.has(Jt)&&(T.width!==Jt.image.width||T.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(T)}}const Ct=T.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(St=!0);const Bt=Rt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[z])?K=Bt[z][j]:K=Bt[z],$=!0):T.samples>0&&Ht.useMultisampledRTT(T)===!1?K=Rt.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?K=Bt[j]:K=Bt,W.copy(T.viewport),tt.copy(T.scissor),Z=T.scissorTest}else W.copy(dt).multiplyScalar(st).floor(),tt.copy(Pt).multiplyScalar(st).floor(),Z=kt;if(j!==0&&(K=I),at.bindFramebuffer(V.FRAMEBUFFER,K)&&at.drawBuffers(T,K),at.viewport(W),at.scissor(tt),at.setScissorTest(Z),$){const vt=Rt.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,vt.__webglTexture,j)}else if(St){const vt=z;for(let Ct=0;Ct<T.textures.length;Ct++){const Bt=Rt.get(T.textures[Ct]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ct,Bt.__webglTexture,j,vt)}}else if(T!==null&&j!==0){const vt=Rt.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vt.__webglTexture,j)}N=-1};function Lh(T){const z=Rt.get(T);return(z.__readFormat!==T.format||z.__readType!==T.type)&&(z.__readFormat=T.format,z.__readType=T.type,z.__formatReadable=xe.textureFormatReadable(T.format),z.__typeReadable=xe.textureTypeReadable(T.type)),z}this.readRenderTargetPixels=function(T,z,j,K,$,St,Nt,vt=0){if(!(T&&T.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ct=Ct[Nt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct){at.bindFramebuffer(V.FRAMEBUFFER,Ct);try{const Bt=T.textures[vt],Jt=Bt.format,he=Bt.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+vt);const Ft=Lh(Bt);if(Ft.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-K&&j>=0&&j<=T.height-$&&V.readPixels(z,j,K,$,pt.convert(Jt),pt.convert(he),St)}finally{const Bt=X!==null?Rt.get(X).__webglFramebuffer:null;at.bindFramebuffer(V.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,K,$,St,Nt,vt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ct=Ct[Nt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct)if(z>=0&&z<=T.width-K&&j>=0&&j<=T.height-$){at.bindFramebuffer(V.FRAMEBUFFER,Ct);const Bt=T.textures[vt],Jt=Bt.format,he=Bt.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+vt);const Ft=Lh(Bt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ue),V.bufferData(V.PIXEL_PACK_BUFFER,St.byteLength,V.STREAM_READ),V.readPixels(z,j,K,$,pt.convert(Jt),pt.convert(he),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const Be=X!==null?Rt.get(X).__webglFramebuffer:null;at.bindFramebuffer(V.FRAMEBUFFER,Be);const Te=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await wm(V,Te,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ue),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,St),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(ue),V.deleteSync(Te),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,j=0){const K=Math.pow(2,-j),$=Math.floor(T.image.width*K),St=Math.floor(T.image.height*K),Nt=z!==null?z.x:0,vt=z!==null?z.y:0;Ht.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,j,0,0,Nt,vt,$,St),at.unbindTexture()},this.copyTextureToTexture=function(T,z,j=null,K=null,$=0,St=0){let Nt,vt,Ct,Bt,Jt,he,Ft,ue,Be;const Te=T.isCompressedTexture?T.mipmaps[St]:T.image;if(j!==null)Nt=j.max.x-j.min.x,vt=j.max.y-j.min.y,Ct=j.isBox3?j.max.z-j.min.z:1,Bt=j.min.x,Jt=j.min.y,he=j.isBox3?j.min.z:0;else{const fe=Math.pow(2,-$);Nt=Math.floor(Te.width*fe),vt=Math.floor(Te.height*fe),T.isDataArrayTexture?Ct=Te.depth:T.isData3DTexture?Ct=Math.floor(Te.depth*fe):Ct=1,Bt=0,Jt=0,he=0}K!==null?(Ft=K.x,ue=K.y,Be=K.z):(Ft=0,ue=0,Be=0);const we=pt.convert(z.format),en=pt.convert(z.type);let Ot;z.isData3DTexture?(Ht.setTexture3D(z,0),Ot=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ht.setTexture2DArray(z,0),Ot=V.TEXTURE_2D_ARRAY):(Ht.setTexture2D(z,0),Ot=V.TEXTURE_2D),at.activeTexture(V.TEXTURE0),at.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),at.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),at.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);const ln=at.getParameter(V.UNPACK_ROW_LENGTH),me=at.getParameter(V.UNPACK_IMAGE_HEIGHT),qi=at.getParameter(V.UNPACK_SKIP_PIXELS),nn=at.getParameter(V.UNPACK_SKIP_ROWS),Vr=at.getParameter(V.UNPACK_SKIP_IMAGES);at.pixelStorei(V.UNPACK_ROW_LENGTH,Te.width),at.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Te.height),at.pixelStorei(V.UNPACK_SKIP_PIXELS,Bt),at.pixelStorei(V.UNPACK_SKIP_ROWS,Jt),at.pixelStorei(V.UNPACK_SKIP_IMAGES,he);const Si=T.isDataArrayTexture||T.isData3DTexture,Yi=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const fe=Rt.get(T),Je=Rt.get(z),Un=Rt.get(fe.__renderTarget),Ie=Rt.get(Je.__renderTarget);at.bindFramebuffer(V.READ_FRAMEBUFFER,Un.__webglFramebuffer),at.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ke=0;Ke<Ct;Ke++)Si&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rt.get(T).__webglTexture,$,he+Ke),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rt.get(z).__webglTexture,St,Be+Ke)),V.blitFramebuffer(Bt,Jt,Bt+Nt,Jt+vt,Ft,ue,Ft+Nt,ue+vt,V.DEPTH_BUFFER_BIT,V.NEAREST);at.bindFramebuffer(V.READ_FRAMEBUFFER,null),at.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||Rt.has(T)){const fe=Rt.get(T),Je=Rt.get(z);at.bindFramebuffer(V.READ_FRAMEBUFFER,R),at.bindFramebuffer(V.DRAW_FRAMEBUFFER,O);for(let Un=0;Un<Ct;Un++)Si?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,fe.__webglTexture,$,he+Un):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,fe.__webglTexture,$),Yi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Je.__webglTexture,St,Be+Un):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Je.__webglTexture,St),$!==0?V.blitFramebuffer(Bt,Jt,Bt+Nt,Jt+vt,Ft,ue,Ft+Nt,ue+vt,V.COLOR_BUFFER_BIT,V.NEAREST):Yi?V.copyTexSubImage3D(Ot,St,Ft,ue,Be+Un,Bt,Jt,Nt,vt):V.copyTexSubImage2D(Ot,St,Ft,ue,Bt,Jt,Nt,vt);at.bindFramebuffer(V.READ_FRAMEBUFFER,null),at.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Yi?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Ot,St,Ft,ue,Be,Nt,vt,Ct,we,en,Te.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(Ot,St,Ft,ue,Be,Nt,vt,Ct,we,Te.data):V.texSubImage3D(Ot,St,Ft,ue,Be,Nt,vt,Ct,we,en,Te):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,St,Ft,ue,Nt,vt,we,en,Te.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,St,Ft,ue,Te.width,Te.height,we,Te.data):V.texSubImage2D(V.TEXTURE_2D,St,Ft,ue,Nt,vt,we,en,Te);at.pixelStorei(V.UNPACK_ROW_LENGTH,ln),at.pixelStorei(V.UNPACK_IMAGE_HEIGHT,me),at.pixelStorei(V.UNPACK_SKIP_PIXELS,qi),at.pixelStorei(V.UNPACK_SKIP_ROWS,nn),at.pixelStorei(V.UNPACK_SKIP_IMAGES,Vr),St===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&V.generateMipmap(Ot),at.unbindTexture()},this.initRenderTarget=function(T){Rt.get(T).__webglFramebuffer===void 0&&Ht.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ht.setTextureCube(T,0):T.isData3DTexture?Ht.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ht.setTexture2DArray(T,0):Ht.setTexture2D(T,0),at.unbindTexture()},this.resetState=function(){k=0,U=0,X=null,at.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const ed={type:"change"},lh={type:"start"},Zf={type:"end"},vo=new Os,nd=new Sn,tM=Math.cos(70*Qe.DEG2RAD),Ge=new y,mn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sl=1e-6;class eM extends rg{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new y,this._lastQuaternion=new ge,this._lastTargetPosition=new y,this._quat=new ge().setFromUnitVectors(t.up,new y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xc,this._sphericalDelta=new xc,this._scale=1,this._panOffset=new y,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new y,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iM.bind(this),this._onPointerDown=nM.bind(this),this._onPointerUp=sM.bind(this),this._onContextMenu=uM.bind(this),this._onMouseWheel=aM.bind(this),this._onKeyDown=lM.bind(this),this._onTouchStart=cM.bind(this),this._onTouchMove=hM.bind(this),this._onMouseDown=rM.bind(this),this._onMouseMove=oM.bind(this),this._interceptControlDown=dM.bind(this),this._interceptControlUp=fM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=_e.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ed),this.update(),this.state=_e.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ge.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vo.origin.copy(this.object.position),vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vo.direction))<tM?this.object.lookAt(this.target):(nd.setFromNormalAndCoplanarPoint(this.object.up,this.target),vo.intersectPlane(nd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sl||this._lastTargetPosition.distanceToSquared(this.target)>sl?(this.dispatchEvent(ed),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?mn/60*this.autoRotateSpeed*t:mn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ge.copy(s).sub(this.target);let r=Ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zf),this.state=_e.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case As.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_e.DOLLY;break;case As.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}break;case As.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(lh)}function oM(i){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function aM(i){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(i.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zf))}function lM(i){this.enabled!==!1&&this._handleKeyDown(i)}function cM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1){this.state=_e.NONE;break}this._handleTouchStartRotate(i),this.state=_e.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1){this.state=_e.NONE;break}this._handleTouchStartPan(i),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_e.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(lh)}function hM(i){switch(this._trackPointer(i),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_e.NONE}}function uM(i){this.enabled!==!1&&i.preventDefault()}function dM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vi(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const It=(i,t,e)=>i<t?t:i>e?e:i,pM=i=>It(i,0,1),ht=(i,t,e)=>i+(t-i)*e,Tt=Math.PI/180;function ot(i,t,e){const n=pM((e-i)/(t-i));return n*n*(3-2*n)}function Rn(i,t){const e=i.length,n=It(t,0,e-1),s=Math.min(Math.floor(n),e-2),r=n-s,o=i[Math.max(s-1,0)],a=i[s],l=i[s+1],c=i[Math.min(s+2,e-1)];return .5*(2*a+(-o+l)*r+(2*o-5*a+4*l-c)*r*r+(-o+3*a-3*l+c)*r*r*r)}function Tn(i,t,e,n){return ht(i,t,1-Math.exp(-e*n))}function $f(i,t,e,n){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*(1-Math.exp(-e*n))}function id(i,t){let e=i*374761393+t*668265263|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function He(i,t=0){const e=Math.floor(i),n=i-e,s=n*n*(3-2*n);return ht(id(e,t),id(e+1,t),s)*2-1}const yt=(i,t,e)=>t+(e-t)*i();function mM(i,t,e,n=2){return t+(e-t)*Math.pow(i(),n)}class yi{constructor(t=6,e=.5){this.freq=t,this.zeta=e}freq;zeta;x=0;v=0;step(t,e){const n=this.freq*Math.PI*2,s=Math.max(1,Math.ceil(e*this.freq*8)),r=e/s;for(let o=0;o<s;o++)this.v+=(-n*n*(this.x-t)-2*this.zeta*n*this.v)*r,this.x+=this.v*r;return this.x}kick(t){this.v+=t}}const gM=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,_M=`
precision highp float;
varying vec3 vDir;
uniform float uTime;
uniform float uEnv;      // 1 when baking the env map: brighter top, no grain
uniform vec3 uBlobs[48];  // xyz dir
uniform vec2 uBlobR[48];  // radius, brightness
uniform float uBlobCos[48]; // cos(radius): outside it a disc adds nothing

float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float noise(vec3 p) {
  vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float n = mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  return n;
}

void main() {
  vec3 d = normalize(vDir);
  // Large soft value structure: leaves and gaps, way out of focus.
  float n = noise(d * 2.2 + vec3(0.0, 0.0, uTime * 0.01)) * 0.6 + noise(d * 4.7 - 3.1) * 0.4;
  vec3 deep = vec3(0.050, 0.120, 0.055);
  vec3 mid  = vec3(0.130, 0.320, 0.125);
  vec3 lite = vec3(0.260, 0.480, 0.230);
  vec3 col = mix(deep, mid, smoothstep(0.25, 0.7, n));
  col = mix(col, lite, smoothstep(0.62, 0.9, n) * 0.6);
  // brighter canopy above, dark understory below
  float up = d.y;
  col *= mix(0.55, 1.15, smoothstep(-0.6, 0.7, up));
  // Bokeh discs
  for (int i = 0; i < 48; i++) {
    vec3 b = uBlobs[i];
    float cd = dot(d, b);
    if (cd < uBlobCos[i]) continue;
    float r = uBlobR[i].x;
    float a = acos(clamp(cd, -1.0, 1.0));
    float disc = 1.0 - smoothstep(r * 0.82, r, a);
    float rim = smoothstep(r * 0.6, r * 0.95, a) * disc;
    col += (lite * 0.5 + vec3(0.06, 0.08, 0.0)) * uBlobR[i].y * (disc * 0.35 + rim * 0.25);
  }
  if (uEnv > 0.5) {
    col *= 1.0 + 1.6 * smoothstep(0.2, 1.0, up);       // sky through the canopy
    col += vec3(0.5, 0.55, 0.45) * pow(max(up, 0.0), 6.0);
    // the light a bird actually gets is greyer than the bokeh it sits in:
    // half the saturation, so the plumage keeps its own plum and bronze
    col = mix(vec3(dot(col, vec3(0.2126, 0.7152, 0.0722))), col, 0.45);
  } else {
    // a hair of grain so the gradients don't band
    col += (hash(vec3(gl_FragCoord.xy, uTime)) - 0.5) / 255.0;
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function Jf(){const i=Vi(7),t=[],e=[];for(let r=0;r<48;r++){const o=(i()-.5)*Math.PI*2,a=(i()-.35)*1.2;t.push(new y(Math.sin(o)*Math.cos(a),Math.sin(a),-Math.cos(o)*Math.cos(a)).normalize()),e.push(new Dt(.06+i()*.14,.15+i()*.6))}const n=new _n({vertexShader:gM,fragmentShader:_M,uniforms:{uTime:{value:0},uEnv:{value:0},uBlobs:{value:t},uBlobR:{value:e},uBlobCos:{value:e.map(r=>Math.cos(r.x))}},side:dn,depthWrite:!1}),s=new de(new Gi(50,64,32),n);return s.frustumCulled=!1,s.renderOrder=1e3,{mesh:s,material:n}}const De=new Pn,yo=new y,sd=new Dt,rd=new Dt,od=new Dt;class xM{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){const t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,s=t?t.count/3:e.count/3,r=new Float32Array(s);for(let l=0;l<s;l++){let c=1,h=3*l,u=3*l+1,d=3*l+2;t&&(h=t.getX(h),u=t.getX(u),d=t.getX(d)),n&&(c=n.getX(h)+n.getX(u)+n.getX(d)),De.a.fromBufferAttribute(e,h),De.b.fromBufferAttribute(e,u),De.c.fromBufferAttribute(e,d),c*=De.getArea(),r[l]=c}const o=new Float32Array(s);let a=0;for(let l=0;l<s;l++)a+=r[l],o[l]=a;return this.distribution=o,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,s){const r=this._sampleFaceIndex();return this._sampleFace(r,t,e,n,s)}_sampleFaceIndex(){const t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){const e=this.distribution;let n=0,s=e.length-1,r=-1;for(;n<=s;){const o=Math.ceil((n+s)/2);if(o===0||e[o-1]<=t&&e[o]>t){r=o;break}else t<e[o]?s=o-1:n=o+1}return r}_sampleFace(t,e,n,s,r){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);const l=this.indexAttribute;let c=t*3,h=t*3+1,u=t*3+2;return l&&(c=l.getX(c),h=l.getX(h),u=l.getX(u)),De.a.fromBufferAttribute(this.positionAttribute,c),De.b.fromBufferAttribute(this.positionAttribute,h),De.c.fromBufferAttribute(this.positionAttribute,u),e.set(0,0,0).addScaledVector(De.a,o).addScaledVector(De.b,a).addScaledVector(De.c,1-(o+a)),n!==void 0&&(this.normalAttribute!==void 0?(De.a.fromBufferAttribute(this.normalAttribute,c),De.b.fromBufferAttribute(this.normalAttribute,h),De.c.fromBufferAttribute(this.normalAttribute,u),n.set(0,0,0).addScaledVector(De.a,o).addScaledVector(De.b,a).addScaledVector(De.c,1-(o+a)).normalize()):De.getNormal(n)),s!==void 0&&this.colorAttribute!==void 0&&(De.a.fromBufferAttribute(this.colorAttribute,c),De.b.fromBufferAttribute(this.colorAttribute,h),De.c.fromBufferAttribute(this.colorAttribute,u),yo.set(0,0,0).addScaledVector(De.a,o).addScaledVector(De.b,a).addScaledVector(De.c,1-(o+a)),s.r=yo.x,s.g=yo.y,s.b=yo.z),r!==void 0&&this.uvAttribute!==void 0&&(sd.fromBufferAttribute(this.uvAttribute,c),rd.fromBufferAttribute(this.uvAttribute,h),od.fromBufferAttribute(this.uvAttribute,u),r.set(0,0).addScaledVector(sd,o).addScaledVector(rd,a).addScaledVector(od,1-(o+a))),this}}function ad(i,t){if(t===dm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===dc||t===mf){let e=i.getIndex();if(e===null){const r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===dc)for(let r=1;r<=n;r++)s.push(e.getX(0)),s.push(e.getX(r)),s.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(e.getX(r)),s.push(e.getX(r+1)),s.push(e.getX(r+2))):(s.push(e.getX(r+2)),s.push(e.getX(r+1)),s.push(e.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}function vM(i){const t=new Map,e=new Map,n=i.clone();return jf(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function jf(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)jf(i.children[n],t.children[n],e)}class yM extends Hs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new EM(e)}),this.register(function(e){return new TM(e)}),this.register(function(e){return new AM(e)}),this.register(function(e){return new FM(e)}),this.register(function(e){return new OM(e)}),this.register(function(e){return new kM(e)}),this.register(function(e){return new CM(e)}),this.register(function(e){return new PM(e)}),this.register(function(e){return new LM(e)}),this.register(function(e){return new IM(e)}),this.register(function(e){return new wM(e)}),this.register(function(e){return new DM(e)}),this.register(function(e){return new RM(e)}),this.register(function(e){return new UM(e)}),this.register(function(e){return new NM(e)}),this.register(function(e){return new SM(e)}),this.register(function(e){return new ld(e,oe.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new ld(e,oe.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new BM(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Sr.extractUrlBase(t);o=Sr.resolveURL(c,this.path)}else o=Sr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Nf(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Qf){try{o[oe.KHR_BINARY_GLTF]=new zM(t)}catch(u){s&&s(u);return}r=JSON.parse(o[oe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new QM(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case oe.KHR_MATERIALS_UNLIT:o[u]=new bM;break;case oe.KHR_DRACO_MESH_COMPRESSION:o[u]=new HM(r,this.dracoLoader);break;case oe.KHR_TEXTURE_TRANSFORM:o[u]=new GM;break;case oe.KHR_MESH_QUANTIZATION:o[u]=new VM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function MM(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}function Ue(i,t,e){const n=i.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class SM{constructor(t){this.parser=t,this.name=oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new Lt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],vn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new sh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new V0(h),c.distance=u;break;case"spot":c=new H0(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class bM{constructor(){this.name=oe.KHR_MATERIALS_UNLIT}getMaterialType(){return Hn}extendParams(t,e,n){const s=[];t.color=new Lt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],vn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Ve))}return Promise.all(s)}}class wM{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class EM{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Dt(r,r)}return Promise.all(s)}}class TM{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return e.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}}class AM{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class RM{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class CM{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_SHEEN}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];if(e.sheenColor=new Lt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],vn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,Ve)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class PM{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class LM{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_VOLUME}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return e.attenuationColor=new Lt().setRGB(r[0],r[1],r[2],vn),Promise.all(s)}}class IM{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_IOR}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class DM{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return e.specularColor=new Lt().setRGB(r[0],r[1],r[2],vn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,Ve)),Promise.all(s)}}class NM{constructor(t){this.parser=t,this.name=oe.EXT_MATERIALS_BUMP}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(s)}}class UM{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?pn:null}extendMaterialParams(t,e){const n=Ue(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class FM{constructor(t){this.parser=t,this.name=oe.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class OM{constructor(t){this.parser=t,this.name=oe.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class kM{constructor(t){this.parser=t,this.name=oe.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class ld{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class BM{constructor(t){this.name=oe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Cn.TRIANGLES&&c.mode!==Cn.TRIANGLE_STRIP&&c.mode!==Cn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const _=new Vt,p=new y,g=new ge,M=new y(1,1,1),b=new u0(m.geometry,m.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,w),l.SCALE&&M.fromBufferAttribute(l.SCALE,w),b.setMatrixAt(w,_.compose(p,g,M));let v=null;for(const w in l)if(w==="_COLOR_0"){const A=l[w];b.instanceColor=new Qo(A.array,A.itemSize,A.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(v===null){const x=b.geometry;v=new Se,v.name=x.name;for(const S in x.attributes)v.setAttribute(S,x.attributes[S]);for(const S in x.morphAttributes)v.morphAttributes[S]=x.morphAttributes[S];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(const S of x.groups)v.addGroup(S.start,S.count,S.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),b.geometry=v}const A=l[w];v.setAttribute(w,new Qo(A.array,A.itemSize,A.normalized))}Le.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Qf="glTF",tr=12,cd={JSON:1313821514,BIN:5130562};class zM{constructor(t){this.name=oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,tr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Qf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-tr,r=new DataView(t,tr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===cd.JSON){const c=new Uint8Array(t,tr+o,a);this.content=n.decode(c)}else if(l===cd.BIN){const c=tr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class HM{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=oe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=yc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=yc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Ls[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}u(f)},a,c,vn,d)})})}}class GM{constructor(){this.name=oe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){const n=Math.cos(t.rotation),s=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*s,t.offset.x,-t.repeat.x*s,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}}class VM{constructor(){this.name=oe.KHR_MESH_QUANTIZATION}}class tp extends ks{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-e,u=(n-e)/h,d=u*u,f=d*u,m=t*c,_=m-c,p=-2*f+3*d,g=f-d,M=1-p,b=g-d+u;for(let v=0;v!==a;v++){const w=o[_+v+a],A=o[_+v+l]*h,x=o[m+v+a],S=o[m+v]*h;r[v]=M*w+b*A+p*x+g*S}return r}}const WM=new ge;class XM extends tp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return WM.fromArray(r).normalize().toArray(r),r}}const Cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hd={9728:Ne,9729:$e,9984:lf,9985:Oo,9986:dr,9987:ei},ud={33071:ti,33648:Ko,10497:is},rl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qM={CUBICSPLINE:void 0,LINEAR:Pr,STEP:Cr},ol={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function YM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),i.DefaultMaterial}function ji(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Jn(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function KM(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ZM(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $M(i){let t;const e=i.extensions&&i.extensions[oe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+al(e.attributes):t=i.indices+":"+al(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+al(i.targets[n]);return t}function al(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Mc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const jM=new Vt;class QM{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new MM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new k0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new X0(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ji(r,a,s),Jn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[oe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Sr.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=rl[s.type],a=Ls[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Re(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=rl[s.type],c=Ls[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let _,p;if(f&&f!==u){const g=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let b=e.cache.get(M);b||(_=new c(a,g*f,s.count*f/h),b=new i0(_,f/h),e.cache.add(M,b)),p=new Jc(b,l,d%f/h,m)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),p=new Re(_,l,m);if(s.sparse!==void 0){const g=rl.SCALAR,M=Ls[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,w=new M(o[1],b,s.sparse.count*g),A=new c(o[2],v,s.sparse.count*l);a!==null&&(p=new Re(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,S=w.length;x<S;x++){const F=w[x];if(p.setX(F,A[x*l]),l>=2&&p.setY(F,A[x*l+1]),l>=3&&p.setZ(F,A[x*l+2]),l>=4&&p.setW(F,A[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=hd[d.magFilter]||$e,h.minFilter=hd[d.minFilter]||ei,h.wrapS=ud[d.wrapS]||is,h.wrapT=ud[d.wrapT]||is,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ne&&h.minFilter!==$e,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const o=s.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(e.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,m){e.parse(d,f,m)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,m){let _=f;e.isImageBitmapLoader===!0&&(_=function(p){const g=new We(p);g.needsUpdate=!0,f(g)}),e.load(Sr.resolveURL(d,r.path),_,void 0,m)})})}const u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),Jn(d,o),d.userData.mimeType=o.mimeType||JM(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=u,u}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[oe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[oe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[oe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ef,ii.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new da,ii.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return fn}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[oe.KHR_MATERIALS_UNLIT]){const u=s[oe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Lt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],vn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Ve)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Oe);const h=r.alphaMode||ol.OPAQUE;if(h===ol.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ol.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Hn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Dt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Hn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Hn){const u=r.emissiveFactor;a.emissive=new Lt().setRGB(u[0],u[1],u[2],vn)}return r.emissiveTexture!==void 0&&o!==Hn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ve)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Jn(u,r),e.associations.set(u,{materials:t}),r.extensions&&ji(s,u,r),u})}createUniqueName(t){const e=Me.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return dd(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=$M(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[oe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=dd(new Se,c,e),c.mode===Cn.TRIANGLE_STRIP?d=d.then(f=>ad(f,mf)):c.mode===Cn.TRIANGLE_FAN&&(d=d.then(f=>ad(f,dc))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?YM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],p=o[f];let g;const M=c[f];if(p.mode===Cn.TRIANGLES||p.mode===Cn.TRIANGLE_STRIP||p.mode===Cn.TRIANGLE_FAN||p.mode===void 0){const b=r.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");b&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&v?new jn(_,M):new de(_,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===Cn.LINES)g=new na(_,M);else if(p.mode===Cn.LINE_STRIP)g=new th(_,M);else if(p.mode===Cn.LINE_LOOP)g=new f0(_,M);else if(p.mode===Cn.POINTS)g=new Tf(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&ZM(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),Jn(g,r),p.extensions&&ji(s,g,p),e.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&ji(s,u[0],r),u[0];const d=new an;r.extensions&&ji(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new gn(Qe.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new ma(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Jn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Vt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ua(a,l)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],m=s.samplers[f.sampler],_=f.target,p=_.node,g=s.parameters!==void 0?s.parameters[m.input]:m.input,M=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],_=u[3],p=u[4],g=[];for(let b=0,v=d.length;b<v;b++){const w=d[b],A=f[b],x=m[b],S=_[b],F=p[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const C=n._createAnimationTracks(w,A,x,S,F);if(C)for(let L=0;L<C.length;L++)g.push(C[L])}const M=new L0(r,void 0,g);return Jn(M,s),M})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,jM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,m=u[0];h.pivot=new y().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new jc:c.length>1?h=new an:c.length===1?h=c[0]:h=new Le,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Jn(h,r),r.extensions&&ji(n,h,r),r.matrix!==void 0){const u=new Vt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new an;n.name&&(r.name=s.createUniqueName(n.name)),Jn(r,n),n.extensions&&ji(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(vM(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof ii||d instanceof We)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ci[r.path]===Ci.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(Ci[r.path]){case Ci.weights:h=Nr;break;case Ci.rotation:h=Ur;break;case Ci.translation:case Ci.scale:h=ia;break;default:n.itemSize===1?h=Nr:h=ia;break}const u=s.interpolation!==void 0?qM[s.interpolation]:Pr,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){const _=new h(l[f]+"."+Ci[r.path],e.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Mc(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Ur?XM:tp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tS(i,t,e){const n=t.attributes,s=new ai;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new y(l[0],l[1],l[2]),new y(c[0],c[1],c[2])),a.normalized){const h=Mc(Ls[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new y,l=new y;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=Mc(Ls[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Nn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function dd(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=yc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return ae.workingColorSpace!==vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ae.workingColorSpace}" not supported.`),Jn(i,t),tS(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?KM(i,t.targets,e):i})}const fd={round:1,cup:.5,fine:!0,spacing:.8,fuzz:0},ep={name:"Lampornis calolaemus",seed:1207,sections:[{y:-.07,z:-.32,a:60,w:.035,rd:.03,rv:.035},{y:.04,z:-.245,a:60,w:.15,rd:.105,rv:.13},{y:.17,z:-.165,a:63,w:.225,rd:.16,rv:.2},{y:.34,z:-.09,a:68,w:.262,rd:.185,rv:.25},{y:.52,z:-.035,a:76,w:.258,rd:.185,rv:.245},{y:.67,z:-.005,a:84,w:.236,rd:.185,rv:.212},{y:.775,z:.008,a:80,w:.205,rd:.182,rv:.19},{y:.887,z:.052,a:62,w:.15,rd:.17,rv:.17},{y:.926,z:.116,a:38,w:.117,rd:.14,rv:.14},{y:.925,z:.195,a:18,w:.066,rd:.09,rv:.07},{y:.905,z:.245,a:8,w:.03,rd:.032,rv:.028}],throat:[4.5,7.3],spine:{tail:.3,hips:1.9,spine:3,chest:4.1,neck1:5.3,neck2:5.95,head:6.55},eye:{s:7.8,phi:.535,radius:.037,inset:.84},bill:{length:.44,radius:.02,droop:.022,color:460551},skin:1840662,shading:{flank:.6,under:.6,patch:.3,gold:5921324,goldAmount:.22},looks:{body:{width:.03,aspect:2.1,rowStep:.3,tilt:13,lift:1,cup:.3,round:.7,loose:.55,fuzz:.3,base:2104356,tip:5195350,iri:4885036,iriGraze:9071132,iriStrength:.12,iriPower:6,iriAlign:0,jitter:.5,sparkle:.6},belly:{width:.033,aspect:2.5,rowStep:.24,tilt:11,lift:1.2,cup:.25,round:.65,loose:.75,base:2630191,tip:6970485,iri:6982186,iriGraze:9071146,iriStrength:.1,iriPower:5,iriAlign:0,jitter:.5,sparkle:.6},flank:{width:.036,aspect:2.8,rowStep:.24,tilt:12,lift:1.3,cup:.2,round:.55,loose:.9,base:2301226,tip:6313066,iri:5925434,iriGraze:6965802,iriStrength:.06,iriPower:4,iriAlign:0,jitter:.5,sparkle:.7},down:{width:.04,aspect:2.6,rowStep:.24,tilt:26,lift:1.4,cup:.15,round:.5,loose:1,base:1840664,tip:4207930,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},back:{width:.03,aspect:2,rowStep:.31,tilt:11,lift:.9,cup:.35,round:.75,loose:.45,fuzz:.3,base:2039078,tip:4867669,iri:3840570,iriGraze:9071128,iriStrength:.24,iriPower:7,iriAlign:0,jitter:.5,sparkle:.45},scapular:{width:.042,aspect:3.3,rowStep:.24,tilt:21,lift:.8,cup:.3,round:.6,loose:.6,fuzz:.4,base:2170408,tip:5327964,iri:3836474,iriGraze:9071128,iriStrength:.2,iriPower:6,iriAlign:0,jitter:.5,sparkle:.5},collar:{width:.027,aspect:1.45,rowStep:.36,tilt:12,lift:.8,cup:.35,round:1,loose:.3,spacing:.7,fuzz:.12,base:1184536,tip:2369580,iri:2072672,iriGraze:678490,iriStrength:.32,iriPower:12,iriAlign:.3,iriAim:[0,.1,1],jitter:.55,sparkle:.6},head:{width:.017,aspect:1.8,rowStep:.34,tilt:12,lift:.45,cup:.35,round:.9,loose:.4,fuzz:.22,base:1184279,tip:2763315,iri:1866320,iriGraze:5263386,iriStrength:.28,iriPower:7,iriAlign:0,jitter:.45,sparkle:.4},mask:{width:.012,aspect:1.7,rowStep:.36,tilt:10,lift:.2,cup:.3,round:.9,loose:.35,fuzz:.25,base:263173,tip:789517,iri:1054752,iriGraze:0,iriStrength:.04,iriPower:4,iriAlign:0,jitter:.2},velvet:{width:.015,aspect:1.6,rowStep:.28,tilt:6,lift:.15,cup:.2,round:.7,loose:.8,fuzz:.7,base:262915,tip:985865,iri:0,iriGraze:0,iriStrength:0,iriPower:2,iriAlign:0,jitter:.2},stripe:{width:.012,aspect:2.6,rowStep:.24,tilt:6,lift:.2,cup:.15,round:.5,loose:.95,fuzz:1,base:11841962,tip:15526885,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.2},covert:{width:.046,aspect:2.6,rowStep:.33,tilt:9,lift:.7,cup:.3,round:.7,loose:.4,base:2170151,tip:5129816,iri:3832400,iriGraze:5917226,iriStrength:.18,iriPower:6,iriAlign:0,jitter:.4,sparkle:.5},undertail:{width:.04,aspect:2.9,rowStep:.26,tilt:10,lift:.8,cup:.2,round:.6,loose:.8,base:7827564,tip:13617342,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},wingCovert:{width:.03,aspect:2.3,rowStep:.4,tilt:7,lift:0,cup:.3,round:.8,loose:.22,fuzz:0,base:1512732,tip:4012104,iri:4872824,iriGraze:5917242,iriStrength:.06,iriPower:6,iriAlign:0,jitter:.4,sparkle:.6},gorget:{...fd,width:.052,aspect:1,rowStep:.3,tilt:8,lift:.5,spacing:.6,base:1706510,tip:4527900,iri:8007935,iriGraze:12595338,iriStrength:2,iriPower:4.2,iriAlign:.74,iriAim:[0,-.5,.87],jitter:.34,channel:"gorget"},crown:{...fd,width:.019,aspect:1.3,rowStep:.34,tilt:10,lift:.4,fuzz:.45,sparkle:.5,loose:.12,base:330507,tip:662554,iri:1368772,iriGraze:1726680,iriStrength:2.3,iriPower:5,iriAlign:.8,iriAim:[0,-.24,1],jitter:.55,channel:"crown"}},tracts:[{name:"belly",look:"belly",region:{kind:"band",s:[0,3.7],phi:[0,.45],soft:.6}},{name:"flank",look:"flank",region:{kind:"band",s:[1.2,4.2],phi:[.3,.52],soft:.5}},{name:"back",look:"back",region:{kind:"band",s:[.9,6.2],phi:[.55,1]}},{name:"scapular",look:"scapular",region:{kind:"band",s:[3.7,5.6],phi:[.56,.84],soft:.3}},{name:"wingPit",look:"down",region:{kind:"blob",at:[3.8,.44],r:[.3,.035],soft:.5}},{name:"tailCoverts",look:"covert",region:{kind:"band",s:[0,1.15],phi:[0,1]}},{name:"undertail",look:"undertail",region:{kind:"band",s:[0,1.35],phi:[0,.4],soft:.3}},{name:"collar",look:"collar",region:{kind:"blob",at:[4.5,0],r:[.72,.44],soft:.6}},{name:"head",look:"head",region:{kind:"band",s:[6,11],phi:[0,1]}},{name:"velvet",look:"velvet",region:{kind:"blob",at:[8,0],r:[2.25,.63],pow:3,soft:.2}},{name:"mask",look:"mask",region:{kind:"blob",at:[8.3,.5],r:[1,.11]}},{name:"gorget",look:"gorget",region:{kind:"blob",at:[6.35,0],r:[1.4,.27],pow:3}},{name:"chin",look:"gorget",region:{kind:"blob",at:[7.7,0],r:[1.05,.17]}},{name:"crown",look:"crown",region:{kind:"blob",at:[8.5,1],r:[1.3,.4]}},{name:"postocular",look:"stripe",region:{kind:"streak",from:[7.5,.57],to:[6.3,.6],r:[.12,.025]}}],wing:{shoulder:[.185,.64,-.06],upper:.1,fore:.13,hand:.17,primaries:10,secondaries:6,primaryLen:[.34,.9],secondaryLen:[.27,.2],primaryWidth:.062,secondaryWidth:.064,rest:{from:[5.1,93],to:[.6,147],width:[.05,.105,.04],height:.034,cross:[.8,-.02]},color:3878193,sheen:8021618},tail:{rectrices:5,length:[.61,.66],width:.13,droop:62,restFan:.35,maxFan:11,color:1909292},legs:{spread:.075,hip:[.085,.11,-.05],toe:.085,perchRadius:.0405,color:1446159},behaviour:{breathHz:[3.4,5.2],holdCalm:[.4,1.8],holdAlert:[.22,.9],saccade:[.038,42e-5],neckShare:[.22,.3],blinkEvery:[1.8,5.5],ruffleEvery:[60,110],tailEvery:[3,9],wingEvery:[9,22],billUp:14}},Wi=matchMedia("(pointer: coarse)").matches,eS=ep.legs.perchRadius,Wn=.2;function np(i){return eS*Math.min(1-.18*i,2.2)}const ip=[Wn-.45,Wn+.45];function nS(i,t=ip){i.updateMatrixWorld(!0);const e=i.getObjectByName("perch"),n=e?iS(e,t[0]-.1,t[1]+.1):null,s=n?n.geometry.getAttribute("position").clone().applyMatrix4(n.matrixWorld).array:new Float32Array,r=new Ff;r.ray.direction.set(0,-1,0);const o=[],a=new Map,l=new y,c=new y;function h(d){let f=1/0,m=-1/0;for(let _=0;_<s.length;_+=3)Math.abs(s[_]-d)>.006||(f=Math.min(f,s[_+2]),m=Math.max(m,s[_+2]));return f<=m?(f+m)/2:0}function u(d,f){if(!n)return null;r.ray.origin.set(d,2,h(d)),o.length=0,r.intersectObject(n,!1,o);const m=o[0];return m?f.copy(m.point):null}return(d,f)=>{const m=Math.round(d*1e3);let _=a.get(m);return _===void 0&&(_={point:new y,up:new y,tangent:new y,radius:np(d)},u(d,_.point)&&u(d-.03,l)&&u(d+.03,c)?(_.tangent.copy(c).sub(l).normalize(),_.up.set(0,1,0).addScaledVector(_.tangent,-_.tangent.y).normalize()):_=null,a.set(m,_)),_?(f.point.copy(_.point),f.up.copy(_.up),f.tangent.copy(_.tangent),f.radius=_.radius,f):null}}function iS(i,t,e){const n=i.geometry,s=n.getAttribute("position"),r=n.index?n.index.count:s.count,o=h=>n.index?n.index.getX(h):h,a=[];for(let h=0;h<r;h+=3){const u=o(h),d=o(h+1),f=o(h+2),m=Math.min(s.getX(u),s.getX(d),s.getX(f));if(!(Math.max(s.getX(u),s.getX(d),s.getX(f))<t||m>e))for(const p of[u,d,f])a.push(s.getX(p),s.getY(p),s.getZ(p))}const l=new Se;l.setAttribute("position",new jt(a,3));const c=new de(l,i.material);return c.matrixAutoUpdate=!1,c.matrixWorld.copy(i.matrixWorld),c}function pd(i,t,e,n,s){const r=i.computeFrenetFrames(e,!1),o=[],a=[],l=[],c=Vi(s),h=Array.from({length:6},()=>({u:c(),a:c()*Math.PI*2,s:.25+c()*.35})),u=new y,d=new y;for(let m=0;m<=e;m++){const _=m/e;i.getPointAt(_,u);const p=r.normals[m],g=r.binormals[m];for(let M=0;M<=n;M++){const b=M/n*Math.PI*2;d.copy(p).multiplyScalar(Math.cos(b)).addScaledVector(g,Math.sin(b));let v=t(_);v*=1+.035*Math.sin(b*7+_*40)+.02*Math.sin(b*13-_*90);for(const w of h){const A=(_-w.u)*18,x=Math.cos(b-w.a);v*=1+w.s*Math.exp(-A*A)*Math.max(x,0)**3}o.push(u.x+d.x*v,u.y+d.y*v,u.z+d.z*v),a.push(_,M/n)}}for(let m=0;m<e;m++)for(let _=0;_<n;_++){const p=m*(n+1)+_,g=p+n+1;l.push(p,p+1,g,g,p+1,g+1)}const f=new Se;return f.setAttribute("position",new jt(o,3)),f.setAttribute("uv",new jt(a,2)),f.setIndex(l),f.computeVertexNormals(),f}function sS(i){const t=new fn({color:16777215,roughness:.92,metalness:0});return t.onBeforeCompile=e=>{e.uniforms.uLen={value:i},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; varying vec3 vWNor; varying vec2 vUv2;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz; vWNor = normalize(mat3(modelMatrix) * objectNormal); vUv2 = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; varying vec3 vWNor; varying vec2 vUv2; uniform float uLen;
float h3(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719)))*43758.5453); }
float n3(vec3 p){ vec3 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z); }
float fbm(vec3 p){ float a=.5, s=0.; for(int i=0;i<5;i++){ s+=a*n3(p); p*=2.03; a*=.5; } return s; }`).replace("#include <color_fragment>",`#include <color_fragment>
{
  float along = vUv2.x * uLen;
  float streak = fbm(vec3(along * 6.0, vUv2.y * 3.0, 0.0) + vWPos * 2.0);
  vec3 bark = mix(vec3(0.16, 0.085, 0.05), vec3(0.36, 0.2, 0.11), streak);
  bark *= 0.75 + 0.5 * fbm(vWPos * 38.0);
  // moss on the up-facing side, patchy
  float up = clamp(vWNor.y, 0.0, 1.0);
  float moss = smoothstep(0.45, 0.75, fbm(vWPos * 9.0) + up * 0.35 - 0.1) * smoothstep(0.0, 0.5, up + 0.2);
  vec3 mossC = mix(vec3(0.10, 0.17, 0.02), vec3(0.30, 0.42, 0.05), fbm(vWPos * 60.0));
  diffuseColor.rgb = mix(bark, mossC, moss * 0.75);
  // lichen speckle
  float lic = smoothstep(0.78, 0.82, fbm(vWPos * 25.0 + 7.0));
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55, 0.58, 0.45), lic * 0.5);
}`)},t}function rS(){const i=new an,t=new mc([new y(-6,-1.414,-.927),new y(-3.2,-.709,-.364),new y(-1.4,-.312,-.11),new y(-.7,-.199,-.039),new y(0,-.041,0),new y(.5,.059,.072),new y(.9,.142,.113),new y(1.3,.193,.077),new y(1.8,.24,.04)]),e=t.getLength(),n=sS(e),s=new y,r=pd(t,p=>np(t.getPointAt(p,s).x)*(p>.97?1-(p-.97)*20:1),320,28,3),o=new de(r,n);o.name="perch",o.receiveShadow=!0,i.add(o);const a=new mc([new y(1.07,.11,.26),new y(1.18,.3,.28),new y(1.28,.5,.2),new y(1.41,.7,.09)]),l=new fn({color:5208600,roughness:.65}),c=new de(pd(a,p=>.022*(1-p*.6),60,10,9),l);c.castShadow=!0,i.add(c);const h=new pn({color:8372762,roughness:.5,sheen:.5,sheenColor:new Lt(13168720),emissive:2243072}),u=new Gi(1,16,12),d=new fa(.006,.008,1,6);d.translate(0,.5,0);const f=Vi(21),m=new y,_=new y;for(let p=0;p<9;p++){const g=.2+p/8*.78;a.getPointAt(g,m),a.getTangentAt(g,_);const M=new y(f()-.5,f()*.6,f()-.5).normalize(),b=.06+f()*.08,v=new de(d,l);v.position.copy(m),v.quaternion.setFromUnitVectors(new y(0,1,0),M.clone().add(_.clone().multiplyScalar(.4)).normalize()),v.scale.set(1,b,1),i.add(v);const w=m.clone().addScaledVector(M.clone().add(_.clone().multiplyScalar(.4)).normalize(),b);for(let A=0;A<2+Math.floor(f()*3);A++){const x=new de(u,h),S=.018+f()*.018;x.scale.set(S,S*1.25,S),x.position.copy(w).add(new y(f()-.5,f()-.5,f()-.5).multiplyScalar(.05)),x.castShadow=!0,i.add(x)}}return{group:i}}async function oS(i,t){const n=(await new yM().loadAsync(i,t)).scene;n.traverse(o=>{const a=o;if(a.isMesh){a.receiveShadow=!0,a.castShadow=!/perch|hairs/i.test(a.name);for(const l of Array.isArray(a.material)?a.material:[a.material]){const c=l;c.envMapIntensity=.8}}});const s=n.getObjectByName("perch");let r=null;if(s){r=uS(s),n.add(r);const o=n.getObjectByName("hairs");o&&n.add(aS(s,o.material))}return{group:n,fuzz:r}}function Mo(i,t,e,n,s){i[t]=e,i[t+1]=n,i[t+2]=s}function aS(i,t){const e=Wi?7e3:16e3,n=new xM(i).build(),s=Vi(31),r=new y,o=new y,a=new y,l=new y,c=new y,h=new Float32Array(e*9),u=new Float32Array(e*9),d=new Float32Array(e*6);let f=0;for(let p=0;f<e&&p<e*4;p++){if(n.sample(r,o),Math.abs(r.x-Wn)<.17||r.x<-2.8||o.y<-.3&&s()<.7)continue;a.set(s()-.5,s()-.5,s()-.5).cross(o).normalize(),l.crossVectors(o,a);const g=.45+s()*.5,M=.005+s()*s()*.014;c.copy(o).multiplyScalar(1-g).addScaledVector(a,g).normalize();const b=45e-5+s()*3e-4,v=r.addScaledVector(o,-.001),w=f*9;Mo(h,w,v.x-l.x*b,v.y-l.y*b,v.z-l.z*b),Mo(h,w+3,v.x+l.x*b,v.y+l.y*b,v.z+l.z*b),Mo(h,w+6,v.x+c.x*M,v.y+c.y*M,v.z+c.z*M);for(let A=0;A<9;A+=3)Mo(u,w+A,o.x,o.y,o.z);d[f*6+2]=1,d[f*6+4]=.5,d[f*6+5]=1,f++}const m=new Se;m.setAttribute("position",new Re(h.slice(0,f*9),3)),m.setAttribute("normal",new Re(u.slice(0,f*9),3)),m.setAttribute("uv",new Re(d.slice(0,f*6),2));const _=new de(m,t);return _.name="twig.hairs",_.position.copy(i.position),_.quaternion.copy(i.quaternion),_.scale.copy(i.scale),_.receiveShadow=!0,_}const md=Wi?7:14,lS=.03,cS=-3.25;function hS(i){const t=i.getAttribute("position"),e=i.index?i.index.count:t.count,n=a=>i.index?i.index.getX(a):a,s=new Uint32Array(e);let r=0;for(let a=0;a<e;a+=3){const l=n(a),c=n(a+1),h=n(a+2);Math.max(t.getX(l),t.getX(c),t.getX(h))<=cS||(s[r++]=l,s[r++]=c,s[r++]=h)}const o=new Se;for(const a in i.attributes)o.setAttribute(a,i.attributes[a]);return o.setIndex(new Re(t.count>65535?s.slice(0,r):Uint16Array.from(s.subarray(0,r)),1)),o}function uS(i){const t=i.material,e=hS(i.geometry),n=new an;n.name="fuzz";for(let s=1;s<=md;s++){const r=s/md,o=new fn({map:t.map,normalMap:t.normalMap,color:new Lt(1,1,1),roughness:1,metalness:0,alphaTest:.5,alphaToCoverage:!0,envMapIntensity:.6});o.onBeforeCompile=l=>{l.uniforms.uH={value:r},l.uniforms.uLen={value:lS},l.uniforms.uGrip={value:Wn},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uH; uniform float uLen; uniform float uGrip; varying vec3 vFP; varying float vGrip;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           // no felt where the toes grip, and it thins out toward the old woody left end
           float gx = abs(position.x - uGrip);
           vGrip = mix(0.22, 1.0, smoothstep(0.14, 0.24, gx)) * (1.0 - smoothstep(-2.6, -3.2, position.x));
           transformed += objectNormal * uH * uLen * vGrip;
           vFP = position;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
           uniform float uH; varying vec3 vFP; varying float vGrip;
           float fh(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
           float fn(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
             return mix(mix(mix(fh(i), fh(i + vec3(1,0,0)), f.x), mix(fh(i + vec3(0,1,0)), fh(i + vec3(1,1,0)), f.x), f.y),
                        mix(mix(fh(i + vec3(0,0,1)), fh(i + vec3(1,0,1)), f.x), mix(fh(i + vec3(0,1,1)), fh(i + vec3(1,1,1)), f.x), f.y), f.z); }`).replace("#include <alphatest_fragment>",`{
             // strands wander as they rise, so each one curls
             vec3 q = vFP * 520.0;
             q += vec3(fn(vFP * 90.0), fn(vFP * 90.0 + 7.3), fn(vFP * 90.0 + 3.1)) * 3.0 * uH;
             vec3 c = floor(q);
             vec3 f = fract(q) - 0.5;
             // moss where the baked bark is green: cushions, taller, denser
             float green = smoothstep(0.004, 0.03, diffuseColor.g - max(diffuseColor.r, diffuseColor.b) * 0.9);
             float r = mix(0.42, 0.12, uH) * mix(1.0, 0.8, green);
             float strand = 1.0 - smoothstep(r * 0.6, r, length(f.xz + f.y * 0.3));
             float a = 0.0;
             // (the height noise only matters inside a strand, the cushions only on moss)
             if (strand > 0.0) {
               // per cell: a strand of random height, thick at the root, tapering
               // clumps and partings: strand height follows a slow noise
               float clump = fn(vFP * 14.0) * 0.7 + fn(vFP * 41.0) * 0.5;
               float tall = fh(c) * (0.25 + 0.9 * clump) * 0.3;
               if (green > 0.0) {
                 float cushion = smoothstep(0.2, 0.75, fn(vFP * 22.0) * 0.8 + fn(vFP * 61.0) * 0.4);
                 tall = mix(tall, (0.35 + 0.7 * fh(c + 1.7)) * cushion, green);
               }
               a = strand * step(uH, tall) * vGrip;
             }
             // a dense low underlayer so it reads as felt, not as stubble
             if (uH < 0.22) a = max(a, (1.0 - smoothstep(0.08, 0.22, uH)) * step(0.55, fn(q * 0.5)) * vGrip);
             diffuseColor.a = a;
             // (no colour for what the alpha test throws away)
             if (a > 0.0) {
               // root dark, tips paler, warmer and greyed where they catch the light
               vec3 tip = mix(diffuseColor.rgb * vec3(1.35, 1.15, 0.95), vec3(dot(diffuseColor.rgb, vec3(0.33)) * 1.6), 0.25);
               tip = mix(tip, diffuseColor.rgb * vec3(1.5, 1.6, 0.9), green); // moss tips go yellow-green
               diffuseColor.rgb = mix(diffuseColor.rgb * 0.45, tip, smoothstep(0.0, 1.0, uH)) * (0.8 + 0.4 * fh(c + 3.0));
             }
           }
           #include <alphatest_fragment>`)};const a=new de(e,o);a.name=`fuzz.${s}`,a.position.copy(i.position),a.quaternion.copy(i.quaternion),a.scale.copy(i.scale),a.receiveShadow=!0,a.renderOrder=s,n.add(a)}return n}const xa=-3,dS=1.8,sa=1/(dS-xa);function er(i){const t=Math.max(0,(i-xa)*sa);return t*t}function fS(i){return 2*Math.max(0,(i-xa)*sa)*sa}const pS=`
uniform vec2 uSway;
uniform vec3 uShootRoot;
uniform vec3 uShootAxis;
uniform vec3 uShootMove;
uniform vec3 uShootBend;
uniform vec3 uBudBend;
attribute float aShoot; // 0 twig, 1 the shoot's stem, 2 its flowers
`,mS=`
{
  // the shoot is carried at its root, the rest bends along the twig
  float sx = max(0.0, (mix(transformed.x, uShootRoot.x, min(aShoot, 1.0)) - ${xa.toFixed(3)}) * ${sa.toFixed(5)});
  transformed.yz += sx * sx * uSway;
  if (aShoot > 0.5) {
    vec3 r = position - uShootRoot;
    float u = clamp(dot(r, uShootAxis) / dot(uShootAxis, uShootAxis), 0.0, 1.0);
    transformed += cross(uShootMove, r) + (uShootBend + step(1.5, aShoot) * uBudBend) * u * u;
  }
}`;class ll{constructor(t,e){this.freq=t,this.zeta=e}freq;zeta;p=new y;v=new y;reset(t){this.p.copy(t),this.v.set(0,0,0)}step(t,e){const n=2*Math.PI*this.freq,s=Math.max(1,Math.ceil(e*this.freq*8)),r=e/s;for(let o=0;o<s;o++){for(const a of["x","y","z"])this.v[a]+=(-n*n*(this.p[a]-t[a])-2*this.zeta*n*this.v[a])*r;this.p.addScaledVector(this.v,r)}return this.p}}function gS(){const i=new yi(3.4,.2),t=new yi(2.9,.22),e=new ll(4.5,.45),n=new ll(2.6,.3),s=.5,r=new ll(4.2,.38),o=new y,a=20,l=.4,c=.11;let h=!1;const u=new y,d=new y,f=new y,m=new y,_=new y;let p=!0,g=null;const M={uSway:{value:new Dt},uShootRoot:{value:new y(.95,.04,.1)},uShootAxis:{value:new y(.45,.65,0)},uShootMove:{value:new y},uShootBend:{value:new y},uBudBend:{value:new y}},b=()=>g===null?0:-.005*x.give*er(g)/er(Wn)**2,v=1,w=new WeakSet;function A(S){if(w.has(S))return;w.add(S);const F=S.onBeforeCompile,C=S.customProgramCacheKey();S.onBeforeCompile=(L,D)=>{F.call(S,L,D),Object.assign(L.uniforms,M),L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
${pS}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${mS}`)},S.customProgramCacheKey=()=>`${C}|sway`,S.needsUpdate=!0}const x={uniforms:M,patch:A,reach(S,F){if(!h)return!1;const C=M.uShootRoot.value;return u.copy(C).add(M.uShootAxis.value),S.distanceSqToSegment(_.copy(C).lerp(u,.15),u,d,F)<c*c},brush(S,F,C){const L=M.uShootAxis.value,D=Qe.clamp(_.copy(S).sub(M.uShootRoot.value).dot(L)/L.lengthSq(),0,1),I=_.copy(L).normalize(),R=Qe.clamp(F.length(),.3,2);r.v.addScaledVector(F,a*C*R*(.3+D)).addScaledVector(I,-r.v.dot(I)*.8),r.v.length()>l&&r.v.setLength(l)},give:1,at(S,F){const C=er(S);return F.set(0,i.x*C,t.x*C)},load(S){g=S},settle(){i.x=b(),i.v=t.x=t.v=0,p=!0},push(S,F,C=0){const L=er(S)*v*F*x.give;i.kick(-L),t.kick(L*.35*C)},use(S){S.updateMatrixWorld(!0);const F=[];S.traverse(L=>{const D=L;if(D.isMesh){for(const I of Array.isArray(D.material)?D.material:[D.material])A(I);/^(shoot|buds|hairs)$/.test(D.name)&&F.push(D)}});const C=F.find(L=>L.name==="shoot");if(h=!!C,C){const L=C.geometry.getAttribute("position");C.geometry.computeBoundingBox();const D=C.geometry.boundingBox,I=new y,R=new y;let O=0,k=0;const U=new y;for(let X=0;X<L.count;X++)U.fromBufferAttribute(L,X),U.y<D.min.y+.03&&(I.add(U),O++),U.y>D.max.y-.03&&(R.add(U),k++);I.divideScalar(Math.max(O,1)),R.divideScalar(Math.max(k,1)),M.uShootRoot.value.copy(I),M.uShootAxis.value.copy(R).sub(I)}for(const L of F){const D=L.geometry.getAttribute("position").count;L.geometry.setAttribute("aShoot",new jt(new Float32Array(D).fill(L.name==="shoot"?1:2),1))}p=!0},update(S){if(S<=0)return;i.step(b(),S),t.step(0,S),M.uSway.value.set(i.x,t.x);const F=M.uShootRoot.value,C=M.uShootAxis.value,L=fS(F.x),D=er(F.x),I=M.uShootMove.value.set(0,-L*t.x,L*i.x);f.copy(C).add(_.crossVectors(I,C)),f.y+=D*i.x,f.z+=D*t.x,p&&(p=!1,e.reset(f),n.reset(f),r.reset(o)),e.step(f,S),r.step(o,S),m.copy(f).lerp(e.p,s).add(r.p),n.step(m,S),M.uShootBend.value.copy(m).sub(f),M.uBudBend.value.copy(n.p).sub(m).multiplyScalar(s)}};return x}const So=["tail","hips","spine","chest","neck1","neck2","head"];class _S{constructor(t){this.species=t;const e=t.sections;this.count=e.length,this.ys=e.map(n=>n.y),this.zs=e.map(n=>n.z),this.as=e.map(n=>n.a*Tt),this.ws=e.map(n=>n.w),this.rds=e.map(n=>n.rd),this.rvs=e.map(n=>n.rv)}species;count;ys;zs;as;ws;rds;rvs;a=new y;b=new y;c=new y;get sMax(){return this.count-1}center(t,e){return e.set(0,Rn(this.ys,t),Rn(this.zs,t))}axis(t,e){const n=Rn(this.as,t);return e.set(0,Math.sin(n),Math.cos(n))}point(t,e,n){const s=Rn(this.as,t),r=Math.max(Rn(this.ws,t),.004),o=Math.max(Rn(this.rds,t),.004),a=Math.max(Rn(this.rvs,t),.004),l=Math.cos(e),c=Math.sin(e),h=1+.06*Math.sin(e*2)**2,u=-l*(l>0?a:o)*h,d=Rn(this.ys,t),f=Rn(this.zs,t);n.set(c*r*h,d+Math.cos(s)*u,f-Math.sin(s)*u);const m=this.wingBulge(t,e);if(m>0){const _=Math.hypot(n.x,n.y-d,n.z-f)||1,p=1+m/_;n.set(n.x*p,d+(n.y-d)*p,f+(n.z-f)*p)}return n}surface(t,e,n){const r=It(t,0,this.sMax);this.point(r,e,n.p);const o=Math.max(r-.01,0),a=Math.min(r+.01,this.sMax);return this.point(a,e,this.a).sub(this.point(o,e,this.b)),this.point(r,e+.01,this.b).sub(this.point(r,e-.01,this.c)),n.n.crossVectors(this.b,this.a).normalize(),n.t.copy(this.a).multiplyScalar(-1),n.t.addScaledVector(n.n,-n.t.dot(n.n)).normalize(),n}wingHalfWidth(t){const[e,n,s]=this.species.wing.rest.width;return t<.35?ht(e,n,ot(0,.35,t)):ht(n,s,ot(.35,1,t))}wingHalfAngle(t,e){const n=(Rn(this.ws,t)+(Rn(this.rds,t)+Rn(this.rvs,t))/2)/2;return this.wingHalfWidth(e)/Math.max(n,.03)}wingUV(t,e){const n=this.species.wing.rest,s=Math.PI*2;let r=(e%s+s)%s;r>Math.PI&&(r=s-r);const o=(n.from[0]-t)/(n.from[0]-n.to[0]),a=It(o,0,1),l=ht(n.from[1],n.to[1],a)*Tt;return{u:o,v:(r-l)/this.wingHalfAngle(t,a)}}wingAt(t,e,n){const s=this.species.wing.rest,r=ht(s.from[0],s.to[0],t),o=ht(s.from[1],s.to[1],It(t,0,1))*Tt+e*this.wingHalfAngle(It(r,0,this.sMax),It(t,0,1));return{s:r,ang:n>0?o:Math.PI*2-o}}wingBulge(t,e){const{u:n,v:s}=this.wingUV(t,e);if(n<=0||n>=1||Math.abs(s)>=1)return 0;const r=1-s*s;return this.species.wing.rest.height*ot(0,.1,n)*(1-ot(.8,1,n))*r*r}front=null;frontLength(t){if(!this.front){this.front=[0];for(let r=1;r<=this.sMax*20;r++)this.front.push(this.front[r-1]+this.point(r/20,0,this.a).distanceTo(this.point((r-1)/20,0,this.b)))}const n=It(t,0,this.sMax)*20,s=Math.min(Math.floor(n),this.front.length-2);return ht(this.front[s],this.front[s+1],n-s)}frontAt(t){this.frontLength(0);const e=this.front;let n=0,s=e.length-1;if(t<=0)return 0;if(t>=e[s])return this.sMax;for(;s-n>1;){const r=n+s>>1;e[r]<=t?n=r:s=r}return(n+(t-e[n])/Math.max(e[s]-e[n],1e-9))/20}weights(t){const e=this.species.spine;for(let n=0;n<So.length-1;n++){const s=So[n],r=So[n+1];if(t<=e[r]||n===So.length-2){const o=ot(e[s],e[r],t);return[s,1-o,r,o]}}return["head",1,"head",0]}skin(t,e){const n=this.species.spine,s=.5+.5*Math.cos(e),r=this.weights(t),a=.6*(ot(n.hips-.4,n.spine,t)*(1-ot(n.chest+.2,n.neck1+.3,t)))*(.35+.65*s),[l,c]=this.species.throat,h=ot(.25,.85,s)*ot(l-.9,l,t),u=It((this.frontLength(t)-this.frontLength(l))/(this.frontLength(c)-this.frontLength(l)),0,1),d=new Map,f=(p,g)=>d.set(p,(d.get(p)??0)+g);f(r[0],r[1]*(1-a)*(1-h)),f(r[2],r[3]*(1-a)*(1-h)),f("sternum",a*(1-h*u*(2-u))),f("throat",(1-a)*h*(1-u)*(1-u)),f("gular",h*2*u*(1-u)),f("head",h*u*u);const m=[...d].sort((p,g)=>g[1]-p[1]).slice(0,4);for(;m.length<4;)m.push(["root",0]);const _=m.reduce((p,g)=>p+g[1],0);return{bones:m.map(p=>p[0]),weights:m.map(p=>p[1]/_)}}bodyCoord(t){return 1-It(t/this.sMax,0,1)}}const je=["L","R"],En=i=>i==="L"?1:-1,xS=i=>new y(i[0],i[1],i[2]),cl=new y,gd=new y,bo=new y,vS=new Vt;function ts(i,t,e=new ge){return bo.copy(i).normalize(),cl.crossVectors(t,bo).normalize(),gd.crossVectors(bo,cl),e.setFromRotationMatrix(vS.makeBasis(cl,gd,bo))}const nr=(i,t)=>new y(i.x*t,i.y,i.z);function yS(i){const t=new _S(i),e={},n=[],s={};function r(D,I,R,O=new ge){const k=new jc;k.name=D;const U={pos:new y,quat:new ge,worldPos:R.clone(),worldQuat:O.clone()};if(I){const X=s[I],N=X.worldQuat.clone().invert();U.pos.copy(R).sub(X.worldPos).applyQuaternion(N),U.quat.copy(N).multiply(O),e[I].add(k)}else U.pos.copy(R),U.quat.copy(O);return k.position.copy(U.pos),k.quaternion.copy(U.quat),e[D]=k,s[D]=U,n.push(k),k}const o=D=>t.center(D,new y),a=i.spine,l=r("root",null,new y);r("hips","root",o(a.hips)),r("spine","hips",o(a.spine)),r("chest","spine",o(a.chest)),r("neck1","chest",o(a.neck1)),r("neck2","neck1",o(a.neck2)),r("head","neck2",o(a.head)),r("throat","chest",o(a.head)),r("gular","chest",t.point((i.throat[0]+i.throat[1])/2,0,new y)),r("sternum","chest",t.point(a.spine+.4,0,new y));const c=o(t.sMax),h=t.axis(t.sMax,new y),u=ts(h,new y(0,1,0));r("bill","head",c,u),r("jaw","head",c.clone().add(new y(0,-.012,-.04)),u);const d=new y(0,0,1).applyQuaternion(u),f=new y(0,1,0).applyQuaternion(u),m=i.bill.length,_=D=>c.clone().addScaledVector(d,D*m).addScaledVector(f,-.004-i.bill.droop*D*D);r("tongue.1","jaw",_(.06),u),r("tongue.2","tongue.1",_(.5),u),r("tongue.3","tongue.2",_(.7),u);const p={},g={p:new y,n:new y,t:new y};for(const D of je){const I=En(D);t.surface(i.eye.s,i.eye.phi*Math.PI,g);const R=g.n.clone().multiplyScalar(.7).add(new y(.3,.02,.04)).normalize(),O=g.p.clone().addScaledVector(R,-i.eye.radius*i.eye.inset);R.x*=I,O.x*=I;const k=ts(R,new y(0,1,0));p[D]={side:D,center:O,out:R,eye:r(`eye.${D}`,"head",O,k),lidUpper:r(`lidUpper.${D}`,"head",O,k),lidLower:r(`lidLower.${D}`,"head",O,k),nict:r(`nict.${D}`,"head",O,k)}}const M=i.wing,b={};{const D=xS(M.shoulder),I={p:new y,n:new y,t:new y},R=(dt,Pt,kt)=>{const Ut=t.wingAt(dt,Pt,1);return t.surface(Ut.s,Ut.ang,I),I.p.clone().addScaledVector(I.n,-kt)},O=i.tail.droop*Tt,k=new y(0,-Math.sin(O),-Math.cos(O)),U=new y(0,Math.cos(O),-Math.sin(O)),X=o(a.tail).addScaledVector(k,i.tail.length[1]*M.rest.cross[0]).addScaledVector(U,.03);X.x=M.rest.cross[1];const N=R(.03,.4,.02),G=R(.2,-.35,.014),W=I.n.clone(),tt=X.clone().sub(G).normalize();W.addScaledVector(tt,-W.dot(tt)).normalize();const Z=new y().crossVectors(W,tt),H=t.axis(a.spine,new y).multiplyScalar(-1),J=new y(0,-H.z,H.y);J.z>0&&J.multiplyScalar(-1);const Y=new y(1,0,0),lt=(dt,Pt,kt)=>dt.clone().applyAxisAngle(Pt,kt),st=[];st.push({name:"shoulder",parent:"chest",pos:D,dir:N.clone().sub(D),n:W,sDir:Y.clone().multiplyScalar(.85).addScaledVector(H,.5)}),st.push({name:"forearm",parent:"shoulder",pos:N,dir:G.clone().sub(N),n:W,sDir:Y.clone().multiplyScalar(.9).addScaledVector(H,-.35)}),st.push({name:"hand",parent:"forearm",pos:G,dir:tt,n:W,sDir:Y.clone()});const bt=M.primaries;for(let dt=0;dt<bt;dt++){const Pt=dt/(bt-1),kt=G.clone().addScaledVector(tt,M.hand*(dt+.4)/bt).addScaledVector(Z,(1-Pt)*.04).addScaledVector(W,(1-Pt)*.004),Ut=X.clone().addScaledVector(Z,(1-Pt)*.05).sub(kt).normalize();st.push({name:`primary#${dt+1}`,parent:"hand",pos:kt,dir:Ut,n:W,sDir:lt(Y,J,ht(58,-4,Math.pow(Pt,.62))*Tt)})}const Qt=M.secondaries;for(let dt=0;dt<Qt;dt++){const Pt=dt/(Qt-1),kt=G.clone().lerp(N,(dt+.7)/(Qt+.4)).addScaledVector(Z,.03+Pt*.015);st.push({name:`secondary#${dt+1}`,parent:"forearm",pos:kt,dir:lt(tt,W,ht(7,16,Pt)*Tt),n:W,sDir:lt(Y,J,ht(82,97,Pt)*Tt)})}for(const dt of je){const Pt=En(dt),kt=Xt=>Xt.includes("#")?Xt.replace("#",`.${dt}.`):`${Xt}.${dt}`,Ut={side:dt,bones:[],folded:[],spread:[],primaries:[],secondaries:[]},pe={chest:new ge};for(const Xt of st){const qt=kt(Xt.name),ct=Xt.parent==="chest"?"chest":kt(Xt.parent),te=ts(nr(Xt.dir,Pt),nr(Xt.n,Pt)),Yt=r(qt,ct,nr(Xt.pos,Pt),te),le=ts(nr(Xt.sDir,Pt),nr(J,Pt));pe[qt]=le,Ut.bones.push(Yt),Ut.folded.push(s[qt].quat.clone()),Ut.spread.push(pe[ct].clone().invert().multiply(le)),Xt.name.startsWith("primary")&&Ut.primaries.push(Yt),Xt.name.startsWith("secondary")&&Ut.secondaries.push(Yt)}b[dt]=Ut}}const v=i.tail,w=[];{const D=v.droop*Tt,I=new y(0,-Math.sin(D),-Math.cos(D)),R=new y(0,Math.cos(D),-Math.sin(D)),O=ts(I,R),k=o(a.tail);r("tail","hips",k,O);const U=new y(1,0,0).applyQuaternion(O);for(const X of je)for(let N=0;N<v.rectrices;N++){const G=(N+.5)*(X==="L"?-1:1),W=k.clone().addScaledVector(U,G*.006).addScaledVector(R,-N*.004-(X==="L"?.002:0)).addScaledVector(I,.02),tt=O.clone().multiply(new ge().setFromAxisAngle(new y(0,1,0),G*v.restFan*Tt));w.push({bone:r(`rectrix.${X}.${N+1}`,"tail",W,tt),k:G})}}const A=i.legs,x={},S={};let F=.1;for(const D of je){const I=En(D),R=new y(A.spread*I,0,0);r(`foot.${D}`,"root",R);const O=R.clone().add(new y(0,.014,-.012)),k=new y(A.hip[0]*I,A.hip[1],A.hip[2]);S[D]=O,x[D]=k.clone().sub(s.hips.worldPos),F=k.distanceTo(O),r(`tarsus.${D}`,`foot.${D}`,O,ts(k.clone().sub(O),new y(1,0,0)));for(let U=0;U<4;U++)r(`toe.${D}.${U+1}`,`foot.${D}`,R)}l.updateMatrixWorld(!0);const C=new ua(n),L=new Map(n.map((D,I)=>[D.name,I]));return{species:i,loft:t,rootBone:l,bones:e,list:n,rest:s,skeleton:C,index:D=>{const I=L.get(D);if(I===void 0)throw new Error(`no bone ${D}`);return I},wings:b,rectrices:w,eyes:p,hipSocket:x,ankle:S,tarsusLength:F}}const MS=0,SS=1,bS=2,ch=3,wS=4,ES=2,TS=3,_d=4,xd=5;class Sc{pos=[];nor=[];uv=[];root=[];hinge=[];data=[];iriN=[];cBase=[];cTip=[];cIri=[];cIri2=[];si=[];sw=[];idx=[];S=new y;H=new y;P=new y;Nv=new y;In=new y;add(t){const{cols:e,rows:n}=t,s=this.S.crossVectors(t.normal,t.dir).normalize(),r=this.H.crossVectors(t.dir,t.normal).normalize(),o=this.pos.length/3,a=t.width/2;for(let l=0;l<n;l++){const c=l===n-1,h=t.scallop?l/(n-1):n===4?[0,.5,.82,.965][l]:Math.pow(l/(n-1),.9),u=ht(1.25,2.1,t.round),d=It((h-.5)/.5,0,1),f=Math.pow(Math.max(1-Math.pow(d,u),0),1/u),m=t.scallop?1:n===4?ht(.5,1,ot(0,.5,h))*f:ht(.4,1,ot(0,t.widen??.12,h))*(c?.42:Math.pow(Math.max(1-Math.pow(It((h-.8)/.2,0,1),2.2),0),.45));for(let _=0;_<e;_++){const p=e===1?0:_/(e-1)*2-1,g=p<0?1-t.asym:1+t.asym;let M=p*a*m*g;const b=c&&!t.scallop?h+(1-h)*(1-p*p):h;let v=b*t.length;if(t.scallop){const x=It((h-.5)/.5,0,1),S=p*Math.PI/2;M=ht(p*a*ht(.72,1,Math.min(h/.5,1)),Math.sin(S)*a,x),v=ht(Math.min(h,.5)*t.length,.5*t.length+Math.cos(S)*.5*t.length,x)}const w=t.cup*a*(p*m)*(p*m)+t.curl*t.length*b*b;this.P.copy(t.root).addScaledVector(s,M).addScaledVector(t.dir,v).addScaledVector(t.normal,-w),this.Nv.copy(t.normal).addScaledVector(s,2*t.cup*p*m).addScaledVector(t.dir,2*t.curl*b),this.In.copy(t.iriNormal).addScaledVector(s,.3*t.cup*p*m).addScaledVector(t.dir,.1*(b-.6)).normalize(),t.skinNormal&&this.Nv.normalize().lerp(t.skinNormal,ht(.45,.8,Math.min(t.loose*2,1))),this.Nv.normalize(),this.pos.push(this.P.x,this.P.y,this.P.z),this.nor.push(this.Nv.x,this.Nv.y,this.Nv.z),t.scallop?this.uv.push(M/a,v/t.length):this.uv.push(p,b),this.root.push(t.root.x,t.root.y,t.root.z),this.hinge.push(r.x,r.y,r.z),this.data.push(t.rand,t.coord,t.gain,t.channel),this.iriN.push(this.In.x,this.In.y,this.In.z),this.cBase.push(t.base.r,t.base.g,t.base.b,t.iriStrength/4),this.cTip.push(t.tip.r,t.tip.g,t.tip.b,t.loose),this.cIri.push(t.iri.r,t.iri.g,t.iri.b,t.iriPower/32),this.cIri2.push(t.iri2.r,t.iri2.g,t.iri2.b,t.cover);const A=t.skinAt?t.skinAt(this.P):t;this.si.push(...A.bones),this.sw.push(...A.weights)}}for(let l=0;l<n-1;l++)for(let c=0;c<e-1;c++){const h=o+l*e+c,u=h+e;this.idx.push(h,u,h+1,u,u+1,h+1)}}build(){const t=new Se,e=(r,o)=>new Re(new Float32Array(r),o),n=(r,o)=>{const a=new Uint16Array(r.length);for(let l=0;l<r.length;l++)a[l]=Math.round(It(r[l],0,1)*65535);return new Re(a,o,!0)},s=(r,o)=>{const a=new Int16Array(r.length);for(let l=0;l<r.length;l++)a[l]=Math.round(It(r[l],-1,1)*32767);return new Re(a,o,!0)};return t.setAttribute("position",e(this.pos,3)),t.setAttribute("normal",s(this.nor,3)),t.setAttribute("uv",e(this.uv,2)),t.setAttribute("aRoot",e(this.root,3)),t.setAttribute("aHinge",s(this.hinge,3)),t.setAttribute("aData",e(this.data,4)),t.setAttribute("aIriN",s(this.iriN,3)),t.setAttribute("aBase",n(this.cBase,4)),t.setAttribute("aTip",n(this.cTip,4)),t.setAttribute("aIri",n(this.cIri,4)),t.setAttribute("aIri2",n(this.cIri2,4)),t.setAttribute("skinIndex",new Re(new Uint16Array(this.si),4)),t.setAttribute("skinWeight",n(this.sw,4)),t.setIndex(new Re(new Uint32Array(this.idx),1)),t.boundingSphere=new Nn(new y(0,.4,-.1),2.5),t.boundingBox=new ai(new y(-2,-2,-2),new y(2,3,2)),t}}function AS(i,t,e,n){if(i.kind==="band"){const f=t+(i.soft??0)*(n*2-1);return f>=i.s[0]&&f<=i.s[1]&&e>=i.phi[0]&&e<=i.phi[1]}if(i.kind==="blob"){const f=(t-i.at[0])/i.r[0],m=(e-i.at[1])/i.r[1],_=i.pow??2;return Math.pow(Math.abs(f),_)+Math.pow(Math.abs(m),_)<=1+(i.soft??0)*(n*2-1)}const s=i.from[0]/i.r[0],r=i.from[1]/i.r[1],o=i.to[0]/i.r[0],a=i.to[1]/i.r[1],l=t/i.r[0],c=e/i.r[1],h=o-s,u=a-r,d=It(((l-s)*h+(c-r)*u)/(h*h+u*u),0,1);return Math.hypot(l-s-h*d,c-r-u*d)<=1}function gi(i,t,e,n=.5){let s="body";for(const r of i.tracts)AS(r.region,t,e,n)&&(s=r.look);return i.looks[s]}const bn=i=>new Lt(i),os=(i,t)=>t.map(e=>i.index(e)),RS=new y;function hh(i,t,e,n){return i.copy(t),e.iriAim&&i.lerp(RS.set(e.iriAim[0],e.iriAim[1],e.iriAim[2]).normalize(),e.iriAlign).normalize(),n?(i.x+=(n()-.5)*e.jitter,i.y+=(n()-.5)*e.jitter,i.z+=(n()-.5)*e.jitter,i.normalize()):i}function sp(i,t,e){const{u:n,v:s}=i.wingUV(t,e);if(n<.08||n>1.05)return 1;const r=ot(.08,.3,n)*(1-ot(.9,1.05,n)),o=ot(-2,-1.05,s)*(1-ot(-.75,-.55,s)),a=ot(1.6,1,s)*(1-ot(.7,.9,-s+1.6));return 1-r*Math.max(.62*o,s>.8?.25*a:0)}function rp(i,t,e,n){const s=i.shading;let r=1+s.patch*(.6*He(e*2.7,5)+.6*He(n*8+e*1.3,6)),o=0;const a=t.fine?1:ht(.12,1.7,ot(-.25,.45,.7*He(e*6.1+n*9,41)+.6*He(n*21-e*3.3,42)));if(!t.fine){o=t.iriStrength>0&&e<6?ot(.05,.6,.7*He(e*3.4+n*5,31)+.5*He(n*13-e*2,32))*s.goldAmount:0;const l=1-ot(4.6,5.6,e);r*=ht(1,s.flank,l*ot(.2,.55,n)*(1-ot(.72,.95,n))),r*=ht(1,s.under,ot(2.6,.5,e)*(1-ot(.4,.7,n)))}return{shade:r,gold:o,glit:a}}function Fs(i,t,e=1,n=0,s=6972448,r=1){const o=(.8+t()*.4)*e,a=bn(i.iri).lerp(bn(i.iriGraze),t()*t()*.45);return{base:bn(i.base).multiplyScalar(o),tip:bn(i.tip).lerp(bn(s),n*t()).multiplyScalar(o),iri:a,iri2:bn(i.iriGraze),iriStrength:i.iriStrength*ht(.75+t()*.5,2.6*Math.pow(t(),2.5),i.sparkle??0)*(1+n*1.5)*r,iriPower:i.iriPower*(.8+t()*.5),loose:i.loose??0,round:i.round,cup:i.cup,channel:i.channel==="gorget"?SS:i.channel==="crown"?bS:MS}}const wo=new y,hl=new y,bs=new y;function op(i,t,e,n){const{loft:s}=i;if(t<s.species.throat[0]-1.1||Math.cos(e)<-.5)return;const r=Math.min(t+.02,s.sMax);s.point(r,e,wo).sub(s.point(t-.02,e,bs)).multiplyScalar(1/(r-t+.02)),s.point(t,e+.02,hl).sub(s.point(t,e-.02,bs)).multiplyScalar(1/.04);const o=wo.clone().multiplyScalar(1/wo.lengthSq()),a=hl.clone().multiplyScalar(1/hl.lengthSq()),l=n.clone(),c=wo.clone().normalize(),h=s.frontLength(t);return u=>{bs.copy(u).sub(l);const d=bs.dot(o),f=s.frontAt(h+bs.dot(c))-t,m=s.skin(It(t+(Math.abs(f)<Math.abs(d)?f:d),0,s.sMax),e+bs.dot(a));return{bones:os(i,m.bones),weights:m.weights}}}function CS(i,t,e){const{loft:n,species:s}=t,r={p:new y,n:new y,t:new y},o={p:new y,n:new y,t:new y},a=new y,l=new y,c=new y,h=new y,u=new y,d=new y,f=new y,m=s.eye.radius,_=Math.PI*2,p=I=>{const R=(I%_+_)%_;return R<=Math.PI?R/Math.PI:(_-R)/Math.PI},g=(I,R,O=.5)=>{const k=gi(s,I,R,O);let U=k.width;if(!k.fine){const X=gi(s,I-.45,R),N=gi(s,I+.45,R);U=(U*2+(X.fine?U:X.width)+(N.fine?U:N.width))/4}return{look:k,width:U}},M=240,b=40,v=new Float32Array(M).fill(1),w=new Uint16Array(M),A=[],x=new Float32Array(b+1),S=.001;let F=n.sMax-.015;for(;F>.03;){let I=0;for(let O=0;O<=b;O++){const k=O/b*_;x[O]=n.point(Math.min(F+.01,n.sMax),k,l).distanceTo(n.point(F-.01,k,c))/.02,I=Math.max(I,x[O])}const R=S/I;for(let O=0;O<M;O++){const k=O/M*b,U=Math.min(Math.floor(k),b-1),{look:X,width:N}=g(F,p(O/M*_)),G=N*X.aspect*X.rowStep;if(v[O]+=ht(x[U],x[U+1],k-U)*R,v[O]>=G){v[O]=Math.min(v[O]-G,G*.5);const W=w[O]++;(A[W]??=new Float32Array(M).fill(NaN))[O]=F}}F-=R}const C=new y,L=new y,D=(I,R)=>{n.surface(I,R,r);for(const at of je)if(r.p.distanceTo(t.eyes[at].center)<m*1.02)return;const O=n.wingUV(I,R),k=O.u>.04&&O.u<.97&&Math.abs(O.v)<.9,U=k&&O.v<-.3&&O.u<.5&&.5+.5*He(I*53+R*91,77)<.75*ot(-.3,-.75,O.v)*(1-ot(.32,.5,O.u));if(k&&!U)return;const X=p(R),N=g(I+(e()-.5)*.06,It(X+(e()-.5)*.012,0,1),e()),G=N.width,W=Math.pow(1-ot(7.1,9,I),1.4),tt=ot(.56,.86,X)*W*ot(6.25,7,I),Z=ot(.5,.8,X)*ot(8.5,9.2,I),H=U?s.looks.flank:N.look===s.looks.crown&&I<8.5&&e()<.5*ot(.7,.9,X)?s.looks.head:N.look,J=H.fine?0:tt,Y=H.fine||H===s.looks.stripe?0:ot(6,6.7,I)*ot(.35,.6,X)*(.35+.65*W),lt=He(I*11+X*37,51);if(Y>0&&lt>.45&&e()<.4*Y||H===s.looks.gorget)return;const st=s.looks.gorget,bt=I>4.6&&I<8.2&&X<.5?gi(s,I,Math.max(X-.035,0))===st?2:gi(s,I,Math.max(X-.08,0))===st?1:0:0;if(bt===2)return;const Qt=bt===0&&I>4.2&&I<5.6&&X<.4&&gi(s,I+.5,X)===st,dt=s.shading,Pt=rp(s,H,I,X),{gold:kt,glit:Ut}=Pt,pe=Pt.shade*sp(n,I,R),Xt=H.loose??0,qt=He(I*4.3+X*17,21),ct=He(I*3.1-X*23,22),te=1+(e()-.5)*ht(.26,.65,Xt),Yt=G*H.aspect*te*(1+J*(.3+1.3*e()*e())+Y*(e()-.5)*.5),le=e()<.035*Xt+.14*J?1:0;let ce=(H.tilt+(e()-.5)*ht(6,17,Xt)+ct*7*Xt+le*(8+e()*10))*Tt;const Ae=(e()-.5)*ht(.17,.72,Xt)+qt*.4*Xt+le*(e()-.5)*.9+((e()-.5)*.9+lt*.45)*Y,V=((e()-.5)*.7+ct*.3)*Xt+((e()-.5)*1.1+lt*.5)*Y;if((bt||Qt)&&(ce*=.35),U)ce+=9*Tt;else if(O.u>0&&O.u<1&&Math.abs(O.v)<1.7&&!le){const at=1-ot(.9,1.7,Math.abs(O.v));ce*=1-.6*at}let Fe=H.lift+J*.9;ce=ce*(1-.55*Z)+J*(14+30*e()*e()+9*lt)*Tt;const be=n.point(Math.min(I+.01,n.sMax),R,l).distanceTo(n.point(Math.max(I-.01,0),R,c))/.02;f.copy(r.p),a.copy(r.n),n.surface(Math.max(I-Yt*.85/Math.max(be,.02),0),R,o),h.copy(o.p).addScaledVector(o.n,Yt*Math.sin(ce)).sub(f),h.lengthSq()<1e-8&&h.copy(r.t),h.normalize(),u.copy(a).add(o.n).addScaledVector(h,-a.dot(h)-o.n.dot(h)).normalize(),h.applyAxisAngle(u,Ae),u.applyAxisAngle(h,V),hh(d,u,H,e);const xe=n.skin(I,R);i.add({...Fs(H,e,pe,kt,dt.gold,Ut),root:f,dir:h,normal:u,skinNormal:a,iriNormal:d,width:G*te,length:Yt,cols:H.fine?5:3,rows:4,curl:ht(.1,.02+e()*.22,Xt),asym:0,bones:os(t,xe.bones),weights:xe.weights,skinAt:op(t,I,R,f),rand:e(),coord:n.bodyCoord(I)*.8,gain:Fe,cover:It(1-H.rowStep,.1,.9)})};for(let I=0;I<A.length;I++){const R=A[I];for(const O of[1,-1]){let k=I&1?.5:O>0?1:0,U=!1;for(let X=0;X<M/2;X++){const N=(O*X%M+M)%M,G=(O*(X+1)%M+M)%M,W=R[N],tt=R[G];if(Number.isNaN(W)||Number.isNaN(tt)){U=!0;continue}U&&(k=e(),U=!1);const Z=O*X*_/M,H=O*(X+1)*_/M;n.point(W,Z,C),n.point(tt,H,L);const{look:J,width:Y}=g((W+tt)/2,p((Z+H)/2)),lt=C.distanceTo(L)/(Y*(J.spacing??.6));for(;k+lt>=1;){const st=(1-k)/lt,bt=(e()-.5)*.25*Y*J.aspect*J.rowStep/.11,Qt=ht(.12,.5,J.loose??0)*(J.fine?1:1+1.8*ot(6,6.7,(W+tt)/2));D(It(ht(W,tt,st)+bt*(1+2*(J.loose??0)),.02,n.sMax),ht(Z,H,st)+(e()-.5)*Qt*Y/.15),k-=1}k+=lt}}}}function PS(i,t,e){const{loft:n,species:s}=t,r=s.looks.gorget;if(!r)return;const o={p:new y,n:new y,t:new y},a=[],l=new y,c=new y;let h=n.sMax;for(;h>4.3&&gi(s,h,0)!==r;)h-=.02;const u=Math.min(h+.5,n.sMax-.3);let d=0,f=1/0;const m=.02,_=.02,p=new Map;{let D=0;for(let I=0;;I++){const R=u-I*m;if(R<4.3)break;I>0&&(D+=n.point(R,0,l).distanceTo(n.point(R+m,0,c))),p.set(I,D)}D=0;for(let I=-1;;I--){const R=u-I*m;if(R>n.sMax-.05)break;D-=n.point(R,0,l).distanceTo(n.point(R-m,0,c)),p.set(I,D)}}for(const[D,I]of p){const R=u-D*m;let O=0;for(let k=0;k*_<=1.3;k++){const U=k*_;if(k>0&&(O+=n.point(R,U,l).distanceTo(n.point(R,U-_,c))),gi(s,R,U/Math.PI)===r){for(const X of k===0?[1]:[1,-1])a.push({s:R,a:U*X,x:O*X,y:I});d=Math.max(d,Math.hypot(O,I)),f=Math.min(f,Math.hypot(O,I))}}}if(!a.length)return;const g=(D,I)=>{let R=a[0],O=1/0;for(const k of a){const U=(k.x-D)*(k.x-D)+(k.y-I)*(k.y-I);U<O&&(O=U,R=k)}return{q:R,miss:Math.sqrt(O)}},M=new y,b=new y,v=new y,w=new y,A=new y,x=new Lt(3814655),S=new Lt(14036168),F=r.spacing??.8;let C=Math.max(f,r.width*.3),L=0;for(;C<=d+r.width*.3;){const D=It((C-f)/(d-f),0,1),I=r.width*ht(.6,1.3,D),R=I*r.aspect,O=Math.max(1,Math.round(Math.PI*2*C/(I*F)));for(let k=0;k<O;k++){const U=(k+(L%2?.5:0))/O*Math.PI*2-Math.PI+(e()-.5)*.12*(I/Math.max(C,I)),{q:X,miss:N}=g(C*Math.sin(U),C*Math.cos(U));if(N>.03)continue;const G=g(C*Math.sin(U),C*Math.cos(U)-R*.7).miss>.02;n.surface(X.s,X.a,o);const W=Math.sign(U)*Math.min(Math.abs(U)*.5,.6)+(e()-.5)*.14,tt=(r.tilt+(e()-.5)*3)*Tt;b.copy(o.p),M.crossVectors(o.n,o.t),M.x<0&&M.multiplyScalar(-1),v.copy(o.t).multiplyScalar(Math.cos(W)).addScaledVector(M,Math.sin(W)).normalize(),w.copy(o.n).multiplyScalar(Math.cos(tt)).addScaledVector(v,-Math.sin(tt)),v.multiplyScalar(Math.cos(tt)).addScaledVector(o.n,Math.sin(tt)),hh(A,w,r,e);const Z=Fs(r,e),H=It(D+(e()-.5)*.16,0,1);H<.45?Z.iri.lerp(x,(1-H/.45)*.85):Z.iri.lerp(S,(H-.45)/.55*.8);const J=op(t,X.s,X.a,b),Y=n.skin(X.s,X.a),lt=.94+e()*.12;i.add({...Z,root:b,dir:v,normal:w,skinNormal:o.n,iriNormal:A,width:I*lt,length:R*lt,cols:9,rows:6,scallop:!0,cup:.16,curl:.05,asym:0,bones:os(t,Y.bones),weights:Y.weights,skinAt:J,rand:e(),coord:n.bodyCoord(X.s)*.8,gain:r.lift,cover:G?.25:It(1-r.rowStep,.1,.9)})}C+=I*r.aspect*r.rowStep,L++}}function LS(i,t,e,n){const s=t.species.wing,r=t.wings[e],o=En(e),a=bn(s.color),l=bn(s.sheen),c=new y,h=new y,u=new y,d=(S,F,C,L)=>{const D=t.rest[S.name];new Vt().makeRotationFromQuaternion(D.worldQuat).extractBasis(c,h,u),u.applyAxisAngle(h,(n()-.5)*.02),h.applyAxisAngle(u,(n()-.5)*.12);const I=t.index(S.name),R=.7+n()*.6;i.add({root:D.worldPos,dir:u,normal:h,skinNormal:null,iriNormal:h,width:C,length:F,cols:3,rows:9,round:.75,cup:.12,curl:.012,asym:L*o,base:a.clone().multiplyScalar(R),tip:a.clone().multiplyScalar(R*.8),iri:l,iri2:l,iriStrength:.22,iriPower:2.5,loose:0,widen:.3,bones:[I,0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?_d:xd,gain:0,cover:o>0?.2:.8,channel:ch})};r.primaries.forEach((S,F)=>{const C=F/(r.primaries.length-1);d(S,ht(s.primaryLen[0],s.primaryLen[1],Math.pow(C,.75)),s.primaryWidth*ht(1.15,.8,C),ht(.2,.5,C))}),r.secondaries.forEach((S,F)=>{const C=F/(r.secondaries.length-1);d(S,ht(s.secondaryLen[0],s.secondaryLen[1],C),s.secondaryWidth,.15)});const f=t.species.looks.covert,m=t.rest[`hand.${e}`],_=t.rest[`forearm.${e}`];new Vt().makeRotationFromQuaternion(m.worldQuat).extractBasis(c,h,u);const p=c.clone().multiplyScalar(o),g=h.clone(),M=u.clone(),b=m.worldPos.clone().addScaledVector(M,s.hand),v=[{off:-.02,len:.075,w:.034,lift:.006,n:15},{off:0,len:.1,w:.04,lift:.008,n:14},{off:.024,len:.13,w:.046,lift:.01,n:14},{off:.05,len:.17,w:.05,lift:.012,n:13}],w=new y,A=new y,x=new y;for(const S of v)for(let F=0;F<S.n;F++){const C=ht(-.55,.9,(F+n()*.7)/S.n);C<0?w.copy(m.worldPos).lerp(_.worldPos,-C/.5):w.copy(m.worldPos).lerp(b,C),w.addScaledVector(p,S.off+(n()-.5)*.016).addScaledVector(g,S.lift);const L=.06+n()*.08;A.copy(M).applyAxisAngle(g,o*(.1+n()*.3+(C<0?.25:0))),x.copy(g).multiplyScalar(Math.cos(L)).addScaledVector(A,-Math.sin(L)),A.multiplyScalar(Math.cos(L)).addScaledVector(g,Math.sin(L));const D=t.index(C<0?`forearm.${e}`:`hand.${e}`),I=.8+n()*.4;i.add({...Fs(f,n,.8+.3*n()),root:w,dir:A,normal:x,skinNormal:g,iriNormal:x,width:S.w*I,length:S.len*I,cols:3,rows:4,curl:.04+n()*.1,asym:0,bones:[D,0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?_d:xd,gain:0,cover:.55})}}function IS(i,t,e,n){const{loft:s,species:r}=t,o=r.wing,a=En(e),l=a>0?ES:TS,c={p:new y,n:new y,t:new y},h={p:new y,n:new y,t:new y},u=(k,U,X)=>{const N=s.wingAt(k,U,a);return s.surface(It(N.s,.02,s.sMax),N.ang,X),N};u(0,0,c),u(1,0,h);const d=c.p.distanceTo(h.p),f=new y,m=new y,_=new y,p=bn(o.color),g=bn(o.sheen),M=r.looks.wingCovert,b=(k,U,X,N,G,W)=>{const tt=u(k,U,c);u(k+X/d,U+N,h),f.copy(c.p).addScaledVector(c.n,G),m.copy(h.p).addScaledVector(h.n,G+X*Math.sin(W*Tt)).sub(f).normalize(),_.copy(c.n).add(h.n).addScaledVector(m,-c.n.dot(m)-h.n.dot(m)).normalize();const Z=s.skin(It(tt.s,.02,s.sMax),tt.ang);return{bones:os(t,Z.bones),weights:Z.weights}},v=7;for(let k=0;k<v;k++){const U=k/(v-1),X=ht(.03,.3,U*U*.4+U*.6),N=ht(.024,.05,U),G=N*ht(2.2,3.4,U),W=ht(o.rest.width[0],o.rest.width[1],ot(0,.35,X)),tt=Math.max(3,Math.round(2*W/(N*.62)));for(let Z=0;Z<tt;Z++){const H=It(-.98+2*(Z+(k%2?.5:0)+(n()-.5)*.3)/tt,-1.02,1.02),J=.85+n()*.3,Y=b(X+(n()-.5)*.012,H,G*J,-H*.12+(n()-.5)*.1,.004+U*.004,7+n()*5);i.add({...Fs(M,n,.8+.4*n()),root:f,dir:m,normal:_,skinNormal:c.n,iriNormal:_,width:N*J,length:G*J,cols:3,rows:4,curl:.05+n()*.08,asym:0,...Y,rand:n(),coord:l,gain:0,cover:It(1-M.rowStep,.1,.9)})}}for(let k=.42;k<.98;k+=.04)for(const U of[-.82,-.3,.3,.82]){const X=.85+n()*.3,N=b(k+(n()-.5)*.02,U+(n()-.5)*.2,.085*X,-U*.1,.002,4);i.add({...Fs(M,n,.7+.3*n()),root:f,dir:m,normal:_,skinNormal:c.n,iriNormal:_,width:.05*X,length:.085*X,cols:3,rows:4,curl:.04,asym:0,...N,rand:n(),coord:l,gain:0,cover:.5})}const w=[];for(let k=0;k<=26;k++)for(let U=0;U<=14;U++)u(k/20,ht(-2.2,2.2,U/14),c),w.push({p:c.p.clone(),n:c.n.clone()});const A=new y,x=k=>{let U=w[0],X=1/0;for(const N of w){const G=N.p.distanceToSquared(k);G<X&&(X=G,U=N)}return A.copy(k).sub(U.p).dot(U.n)},S=r.tail,F=S.droop*Tt,C=new y(0,-Math.sin(F),-Math.cos(F)),L=new y(0,Math.cos(F),-Math.sin(F)),D=s.center(r.spine.tail,new y).addScaledVector(C,S.length[1]*o.rest.cross[0]).addScaledVector(L,.035);D.x=o.rest.cross[1]*a,a>0&&D.addScaledVector(L,.014);const I=new y,R=new y,O=[];for(let k=0;k<o.secondaries;k++){const U=k/(o.secondaries-1);O.push({u:ht(.2,.3,U),v:ht(.82,.3,U),w:.066,reach:1,to:null,len:ht(.19,.27,U),dv:-.3,asym:.15})}for(let k=0;k<o.primaries;k++){const U=k/(o.primaries-1);O.push({u:ht(.3,.42,U),v:ht(.25,-.8,U),w:ht(.068,.05,U),reach:ht(.52,1,Math.pow(U,.8)),to:D.clone().addScaledVector(L,(1-U)*.05).addScaledVector(C,-(1-U)*.02),len:0,dv:0,asym:ht(.2,.45,U)})}O.forEach((k,U)=>{const X=u(k.u,k.v,c),N=.016-U*7e-4;f.copy(c.p).addScaledVector(c.n,N),R.copy(c.n);let G=k.len;k.to?(I.copy(k.to),G=I.distanceTo(f)*k.reach):(u(k.u+G/d,k.v+k.dv,h),I.copy(h.p).addScaledVector(h.n,N),R.add(h.n).normalize());const W=.035;for(let H=0;H<60;H++){m.copy(I).sub(f).normalize(),_.copy(R).addScaledVector(m,-R.dot(m)).normalize();let J=!0;for(const Y of[.25,.45,.65,.85,1])if(A.copy(f).addScaledVector(m,Y*G).addScaledVector(_,-W*G*Y*Y),x(A.clone())<.005+.012*Y-U*3e-4){J=!1;break}if(J)break;I.addScaledVector(R,.005)}const tt=s.skin(It(X.s,.02,s.sMax),X.ang),Z=.75+n()*.5;i.add({root:f,dir:m,normal:_,skinNormal:null,iriNormal:_,width:k.w,length:G,cols:3,rows:9,round:.75,cup:.1,curl:W,asym:k.asym*a,base:p.clone().multiplyScalar(Z),tip:p.clone().multiplyScalar(Z*.8),iri:g,iri2:g,iriStrength:.22,iriPower:2.5,loose:0,widen:.2,bones:os(t,tt.bones),weights:tt.weights,rand:n(),coord:l,gain:0,cover:a>0?.2:.8,channel:ch})})}function DS(i,t,e){const n=t.species.tail,s=bn(n.color),r=bn(4609132),o=new y,a=new y,l=new y;for(const c of t.rectrices){const h=t.rest[c.bone.name];new Vt().makeRotationFromQuaternion(h.worldQuat).extractBasis(o,a,l);const u=(Math.abs(c.k)-.5)/Math.max(n.rectrices-1,1),d=.85+e()*.3;i.add({root:h.worldPos,dir:l,normal:a,skinNormal:null,iriNormal:a,width:n.width,length:ht(n.length[0],n.length[1],Math.pow(u,1.4)),cols:5,rows:14,round:1,cup:.06,curl:.01,asym:.12*Math.sign(c.k),base:s.clone().multiplyScalar(d),tip:s.clone().multiplyScalar(d*.8),iri:u<.1?bn(2058840):r,iri2:r,iriStrength:u<.1?.13:.2,iriPower:3,loose:0,widen:.45,bones:[t.index(c.bone.name),0,0,0],weights:[1,0,0,0],rand:e(),coord:1,gain:0,cover:c.k>0?.8:.2,channel:ch})}}function NS(i,t=3,e=120,n=80){const{loft:s,species:r}=i,o=new Sc,a={p:new y,n:new y,t:new y},l=new y,c=new Float32Array(n+1),h=Array.from({length:n+1},()=>new y),u=new y,d=Vi(r.seed+99),f=560,m=s.sMax-.12,_=[];for(let p=0;p<=e;p++){const g=m-p/e*(m-.05);for(let M=0;M<=n;M++){const b=M/n*Math.PI*2;s.surface(g,b,a),p>0&&(c[M]+=h[M].distanceTo(a.p)),h[M].copy(a.p),_.push({p:a.p.clone(),n:a.n.clone(),d:c[M],s:g,a:b})}}for(let p=0;p<t;p++){const g=t>1?p/(t-1):0,M=ht(.008,.03,g),b=o.pos.length/3;for(let v=0;v<_.length;v++){const w=_[v],A=v%(n+1),x=w.a<=Math.PI?w.a/Math.PI:(2*Math.PI-w.a)/Math.PI,S=gi(r,w.s,x),F=rp(r,S,w.s,x),{gold:C,glit:L}=F,D=F.shade*sp(s,w.s,w.a);let I=S.fuzz??Math.min(.55+(S.loose??0)*.6,1);for(const k of je)I*=ot(r.eye.radius*1.25,r.eye.radius*2.1,w.p.distanceTo(i.eyes[k].center));I*=1-ot(s.sMax-.7,s.sMax-.2,w.s);{const k=s.wingUV(w.s,w.a);k.u>.02&&k.u<.99&&(I*=ot(.85,1.15,Math.abs(k.v)))}const R=Fs(S,d,D,C,r.shading.gold,L);hh(u,w.n,S),l.copy(w.p).addScaledVector(w.n,M*(.5+.5*Math.min(I*2,1))*It(S.width/.03,.4,1));const O=s.skin(w.s,w.a);o.pos.push(l.x,l.y,l.z),o.nor.push(w.n.x,w.n.y,w.n.z),o.uv.push(A/n*f,w.d),o.root.push(l.x,l.y,l.z),o.hinge.push(1,0,0),o.data.push(g,s.bodyCoord(w.s)*.8,S.lift,wS),o.iriN.push(u.x,u.y,u.z),o.cBase.push(R.base.r,R.base.g,R.base.b,S.fine?0:S.iriStrength*L*(1+C)/4),o.cTip.push(R.tip.r,R.tip.g,R.tip.b,I),o.cIri.push(R.iri.r,R.iri.g,R.iri.b,S.iriPower/32),o.cIri2.push(R.iri2.r,R.iri2.g,R.iri2.b,g),o.si.push(...os(i,O.bones)),o.sw.push(...O.weights)}for(let v=0;v<e;v++)for(let w=0;w<n;w++){const A=b+v*(n+1)+w,x=A+n+1;o.idx.push(A,x,A+1,x,x+1,A+1)}}return o}function US(i){const t=Vi(i.species.seed),e=new Sc;CS(e,i,t),PS(e,i,t);const n=new Sc;for(const r of je)LS(n,i,r,t),IS(n,i,r,t);DS(n,i,t);const s=NS(i);return{contour:e.build(),flight:n.build(),fuzz:s.build()}}function FS(i,t=64,e=36,n=.007){const s={p:new y,n:new y,t:new y},{loft:r}=i,o=[],a=[],l=[],c=[],h=new y;for(let d=0;d<=t;d++){const f=d/t*r.sMax;for(let m=0;m<=e;m++){const _=m/e*Math.PI*2,p=r.skin(f,_);r.surface(f,_,s),h.copy(s.p).addScaledVector(s.n,-n),o.push(h.x,h.y,h.z),a.push(...os(i,p.bones)),l.push(...p.weights)}}for(let d=0;d<t;d++)for(let f=0;f<e;f++){const m=(d+.5)/t*r.sMax;if(m>4.3&&m<9&&Math.cos((f+.5)/e*Math.PI*2)>-.25)continue;const _=d*(e+1)+f,p=_+e+1;c.push(_,_+1,p,p,_+1,p+1)}const u=new Se;return u.setAttribute("position",new jt(o,3)),u.setAttribute("skinIndex",new ca(a,4)),u.setAttribute("skinWeight",new jt(l,4)),u.setIndex(c),u.computeVertexNormals(),u}const ap=`
attribute vec3 aRoot;
attribute vec3 aHinge;
attribute vec4 aData; // rand, body coord, lift gain, channel
uniform float uFluff;
uniform float uLift[8];
uniform float uGorget;
uniform float uCrest;
uniform vec2 uWingSpread;
uniform vec2 uWingLift;
uniform vec4 uWingOut;
uniform vec3 uWingPivot;
uniform vec3 uWingSpan;
uniform vec3 uWingChord;
vec3 rotAxis(vec3 v, vec3 k, float c, float s) { return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c); }
// the resting wing swung off the flank: twist about its length, then out about its chord
vec3 wingSwing(vec3 v, bool right) {
  vec2 a = right ? vec2(uWingOut.z, -uWingOut.w) : vec2(-uWingOut.x, uWingOut.y);
  vec3 m = vec3(right ? -1.0 : 1.0, 1.0, 1.0);
  v = rotAxis(v, uWingSpan * m, cos(a.y), sin(a.y));
  return rotAxis(v, uWingChord * m, cos(a.x), sin(a.x));
}`,lp=`
float fCoord = clamp(aData.y, 0.0, 1.0) * 7.0;
float fI = floor(min(fCoord, 6.0));
float fWave = mix(uLift[int(fI)], uLift[int(fI) + 1], fCoord - fI);
float fAng = aData.z * (uFluff + fWave) * (0.6 + 0.8 * aData.x);
fAng += (aData.w > 0.5 && aData.w < 1.5 ? uGorget : 0.0) + (aData.w > 1.5 && aData.w < 2.5 ? uCrest : 0.0);
// wings: ids 2/3 = the resting wing on the body (left/right), 4/5 = the real blades
bool fRest = aData.y > 1.5 && aData.y < 3.5;
bool fReal = aData.y > 3.5;
bool fRight = aData.y > 2.5 && aData.y < 3.5 || aData.y > 4.5;
float fSpread = fRight ? uWingSpread.y : uWingSpread.x;
float fUnfold = smoothstep(0.03, 0.35, fSpread);
// past fully spread the wing is beating too fast to see: the blades go, a blur fan stands in
float fBeat = 1.0 - smoothstep(1.2, 1.6, fSpread);
if (fRest) fAng += (fRight ? uWingLift.y : uWingLift.x) * (0.5 + aData.x);
float fC = cos(fAng), fS = sin(fAng);`,cp=`
vec3 transformed = aData.w > 3.5 ? position + normal * max(fAng, -0.1) * 0.05 : aRoot + rotAxis(position - aRoot, aHinge, fC, fS);
// as the wing spreads the resting wing sinks into the body and the real blades grow out of it
if (fRest) {
  vec3 fPivot = vec3(fRight ? -uWingPivot.x : uWingPivot.x, uWingPivot.yz);
  transformed = fPivot + wingSwing(transformed - fPivot, fRight);
  transformed = mix(transformed, aRoot - normal * 0.03, fUnfold);
}
if (fReal) transformed = mix(aRoot, transformed, fUnfold * fBeat);
`;function OS(){const i={uFluff:{value:0},uLift:{value:new Float32Array(8)},uGorget:{value:0},uCrest:{value:0},uWingSpread:{value:new Dt},uWingLift:{value:new Dt},uWingOut:{value:new Ee},uWingPivot:{value:new y},uWingSpan:{value:new y(0,0,-1)},uWingChord:{value:new y(0,1,0)},uFlash:{value:1},uGlint:{value:1},uPal:{value:[new Kt,new Kt,new Kt,new Kt]}},t=new fn({color:16777215,roughness:.6,metalness:0,side:Oe,alphaToCoverage:!0});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${ap}
attribute vec3 aIriN;
attribute vec4 aBase;
attribute vec4 aTip;
attribute vec4 aIri;
attribute vec4 aIri2;
uniform mat3 uPal[4];
varying vec2 vFUv;
varying vec3 vFData;
varying vec4 vBase;
varying vec4 vTip;
varying vec4 vIri;
varying vec4 vIri2;
varying vec3 vIriN;`).replace("#include <beginnormal_vertex>",`${lp}
vec3 objectNormal = rotAxis(normal, aHinge, fC, fS);
vec3 fIriN = rotAxis(aIriN, aHinge, fC, fS);
if (fRest) { objectNormal = wingSwing(objectNormal, fRight); fIriN = wingSwing(fIriN, fRight); }
vFUv = uv; vFData = vec3(aData.x, aData.w, fAng);
vBase = aBase; vTip = aTip; vIri = aIri; vIri2 = aIri2;
// the palette: per vertex, so it costs nothing in the fragment shader
if (aData.w > 0.5 && aData.w < 2.5) {
  mat3 m = aData.w < 1.5 ? uPal[0] : uPal[1];
  vIri.rgb = max(m * vIri.rgb, 0.0); vIri2.rgb = max(m * vIri2.rgb, 0.0);
  vBase.rgb = max(m * vBase.rgb, 0.0); vTip.rgb = max(m * vTip.rgb, 0.0);
}
else {
  vBase.rgb = max(uPal[2] * vBase.rgb, 0.0); vTip.rgb = max(uPal[2] * vTip.rgb, 0.0);
  vIri.rgb = max(uPal[3] * vIri.rgb, 0.0); vIri2.rgb = max(uPal[3] * vIri2.rgb, 0.0);
}`).replace("#include <skinnormal_vertex>",`#include <skinnormal_vertex>
#ifdef USE_SKINNING
  fIriN = (skinMatrix * vec4(fIriN, 0.0)).xyz;
#endif
vIriN = normalize(normalMatrix * fIriN);`).replace("#include <begin_vertex>",cp),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlash;
uniform float uGlint;
varying vec2 vFUv;
varying vec3 vFData;
varying vec4 vBase;
varying vec4 vTip;
varying vec4 vIri;
varying vec4 vIri2;
varying vec3 vIriN;
float fIriMask;
float fBarb;
float fEdge;
float fBarbRand;
float fBarbHue;
float fSoft;
float fTilt;
float fFuzz;`).replace("#include <color_fragment>",`#include <color_fragment>
{
  fFuzz = vFData.y > 3.5 ? 1.0 : 0.0;
  if (fFuzz > 0.5) {
    // hairs: thin tapered dashes in columns that run the way the feathers lie, two
    // sets of columns over each other so no grid shows
    float layer = vIri2.a;
    float density = vTip.a * mix(1.0, 0.55, layer);
    // hairs wander together in slow waves, so the coat has locks, not a comb pattern
    float sway = sin(vFUv.y * 11.0 + floor(vFUv.x * 0.07) * 2.1) * 1.3 + sin(vFUv.y * 4.3 + vFUv.x * 0.021) * 2.2;
    float alpha = 0.0, tone = 0.5, dash = 0.0, pick = 0.5;
    // the plushest tracts (belly, flanks, the velvet face): hairs nearly of one tone
    float plush = smoothstep(0.82, 1.0, vTip.a);
    for (int o = 0; o < 2; o++) {
      float fo = float(o);
      float cx = (vFUv.x + sway) * (1.0 + 0.63 * fo) + fo * 17.3 + layer * 5.7;
      float colId = floor(cx);
      float hc = fract(sin(colId * 12.9898 + fo * 4.1 + layer * 9.7) * 43758.5453);
      float len = mix(0.018, 0.045, hc);
      float sy = vFUv.y / len + hc * 13.0;
      float seg = floor(sy), fy = fract(sy);
      float hs = fract(sin((colId + seg * 57.0) * 78.233 + fo * 1.7) * 24634.6345);
      float fx = fract(cx) - 0.5 + (hs - 0.5) * 0.5 * fy + sin(vFUv.y * 70.0 + hc * 40.0) * 0.12;
      float w = 1.0 - smoothstep(0.14, 0.36, abs(fx));
      float taper = smoothstep(0.0, 0.12, fy) * (1.0 - smoothstep(0.5, 1.0, fy));
      float a = step(1.0 - density, hs) * w * taper;
      if (a > alpha) { alpha = a; tone = fract(hs * 7.31); dash = smoothstep(0.25, 0.5, fy) * (1.0 - smoothstep(0.5, 0.8, fy)) * w; pick = fract(hs * 3.17 + hc); }
    }
    // too far to resolve single hairs: their average
    float lodF = clamp(fwidth(vFUv.x) * 1.3, 0.0, 1.0);
    alpha = mix(alpha, density * 0.45, lodF);
    // seen edge-on a shell is a film, not hairs: let it go, the frayed feathers make the outline
    alpha *= smoothstep(0.34, 0.74, abs(dot(normalize(vNormal), normalize(vViewPosition))));
    diffuseColor.rgb = mix(vBase.rgb, vTip.rgb, 0.75) * mix(mix(0.55, 0.75, plush) + mix(0.9, 0.4, plush) * tone, mix(1.0, 0.95, plush), lodF);
    // break up the coverage steps with a little screen noise, or they show as dotted bands
    float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    diffuseColor.a = clamp(alpha + (ign - 0.5) * 0.3 * min(alpha * 3.0, 1.0), 0.0, 1.0);
    fBarb = 0.0; fEdge = 0.0; fSoft = 1.0; fTilt = 0.35;
    fBarbRand = mix(pick, 0.5, lodF);
    fBarbHue = mix(tone, 0.5, lodF);
    // glints are short dashes on some hairs, not tiles
    fIriMask = mix(step(0.62, pick) * dash * 2.6, 0.4, lodF);
  } else {
  float u = vFUv.x, v = vFUv.y, au = abs(vFUv.x);
  float rnd = vFData.x;
  bool flight = vFData.y > 2.5;
  bool scale = vFData.y > 0.5 && !flight; // gorget, crown: crisp closed vanes
  // gorget scales are scallops whose uv is their true shape: u across, v along, the free
  // edge a semicircle of radius 1 about (0, 0.5)
  bool scallop = scale && vFData.y < 1.5;
  float loose = flight ? 0.0 : vTip.a;
  // the plush underparts (belly, flanks, down): one soft surface, the feathers only just told apart
  float plush = scale ? 0.0 : smoothstep(0.62, 0.85, loose);
  fEdge = 0.0;
  fBarbRand = 0.5;
  // barbs, one per 2 PI of arg. On a blade they run diagonally off the shaft. On contour
  // feathers and scales they are a fan: fine parallel strands that splay from behind the
  // root, like the teeth of a comb or the ribs of a scallop, the outer ones running off
  // the side of the vane before the tip.
  float outline = mix(0.5, 1.0, smoothstep(0.0, 0.5, v)) * pow(max(1.0 - pow(clamp((v - 0.5) / 0.5, 0.0, 1.0), 1.9), 0.0), 0.53);
  float fanX = u * outline / (v + 0.4) * 1.4;
  // a scallop's ridges are its barbs: they fan out a little from the root, the whole comb
  // bends to one side, the spacing is uneven and every scale has its own count
  float sFan = u / (0.5 + 0.6 * v);
  sFan += (fract(rnd * 23.7) - 0.5) * 0.5 * v * v;
  sFan += 0.035 * sin(sFan * 9.0 + rnd * 40.0 + v * 2.5) + 0.018 * sin(sFan * 23.0 + rnd * 91.0 - v * 4.0);
  float arg = scallop ? sFan * mix(8.0, 12.5, fract(rnd * 57.3)) * 6.2832 + rnd * 6.28 : flight ? v * 520.0 - au * 38.0 + rnd * 6.28 : fanX * (scale ? 7.0 : mix(8.5, 6.5, loose)) * 6.2832 + rnd * 6.28;
  float fw = fwidth(arg);
  float lod = smoothstep(1.2, 3.0, fw); // 0 = barbs resolved, 1 = sub-pixel
  float id = floor(arg / 6.2832 + 0.5);
  // a thin bright strand with a dark gap either side
  float h = fract(sin(id * 12.9898 + rnd * 78.233) * 43758.5453);
  float h2 = fract(sin(id * 39.3468 + rnd * 11.135) * 24634.6345);
  // on a scallop the barbs are broad with a thin groove between, each a little wider or narrower
  float strand = scallop ? smoothstep(0.03 + 0.14 * h, 0.3 + 0.3 * h, 0.5 + 0.5 * cos(arg)) : smoothstep(0.3, 0.78, 0.5 + 0.5 * cos(arg));
  float ridge = 0.5 + 0.5 * cos(arg); // 1 on the barb, 0 in the gap between two
  fBarb = (ridge * 2.0 - 1.0) * (1.0 - lod);
  fBarbRand = mix(h2, 0.5, lod);
  float shaft = 1.0 - smoothstep(0.0, flight ? 0.07 : 0.09, au);
  vec3 pig = mix(vBase.rgb, vTip.rgb, flight ? 0.5 : mix(smoothstep(0.3, 1.0, v), 0.62 + 0.3 * v, plush));
  // overlap shadow at the root, where the next feather up covers this one
  // (a lifted feather shows more of itself)
  float cover = vIri2.a * (1.0 - clamp(vFData.z * 1.6, 0.0, 0.8));
  float bare = smoothstep(cover - 0.3, cover + 0.12, v + 0.1 * (1.0 - au));
  float occ = flight ? mix(0.5, 1.0, smoothstep(0.0, 0.25, v)) : mix(scale ? 0.42 : mix(0.74, 0.96, plush), 1.0, bare);
  float edge = scallop ? (v > 0.5 ? length(vec2(u, (v - 0.5) * 2.0)) : au * 0.85) : max(au, (v - 0.55) / 0.45);
  // scales carry a paler fringe on the free edge; soft feathers just vary barb by barb
  float rim = scale ? -smoothstep(0.8, 1.0, edge) * 0.45 : 0.0;
  pig *= occ * (1.0 + (flight ? 0.26 : scale ? 0.35 : 0.0) * fBarb) * (1.0 + rim);
  // soft feathers: the strands carry the colour, between them it is nearly dark
  // (plush feathers: hardly darker between the strands, so no row of them casts a line)
  if (!flight && !scale) pig *= mix(mix(mix(0.3, 0.74, plush), mix(1.3, 1.08, plush), strand), 0.86, lod) * (0.88 + 0.24 * mix(h, 0.5, lod));
  fBarbHue = flight || scale ? 0.5 : mix(0.55 * fract(rnd * 5.31) + 0.45 * fract(h2 * 3.7 + h), 0.5, lod * 0.6);
  if (!flight && !scale) {
    // per feather, subtle: a touch warmer or cooler, lighter or darker,
    // and now and then a worn pale tip
    float r1 = fract(rnd * 17.13);
    float r2 = fract(rnd * 41.71);
    pig *= mix(vec3(1.05, 0.98, 0.93), vec3(0.95, 0.98, 1.06), r1);
    pig *= mix(0.87 + 0.26 * r2, 0.76 + 0.08 * r2, plush);
    pig *= 1.0 + 0.2 * step(0.95, fract(rnd * 7.73)) * smoothstep(0.6, 1.0, v);
  }
  if (flight) {
    // blades lie in a stack: each shows a strip along one edge. Shade across that strip
    // (dark where the neighbour sits on it, a paler line on the free edge) so the stack
    // reads as separate feathers. Seen from underneath the other edge is the free one.
    float lead = u * sign(vIri2.a - 0.5) * (gl_FrontFacing ? 1.0 : -1.0);
    float strip = smoothstep(-0.5, 1.0, lead);
    // each feather its own tone, a touch warmer or cooler than the next
    pig *= mix(vec3(1.12, 0.96, 0.9), vec3(0.9, 0.96, 1.12), rnd);
    pig *= mix(0.42, 1.25, strip * strip);
    // rachis: a pale quill line, fading out toward the tip, with a dark groove beside it
    float quill = 1.0 - smoothstep(0.012, 0.05, au);
    float groove = smoothstep(0.03, 0.07, au) * (1.0 - smoothstep(0.07, 0.16, au));
    pig *= 1.0 - 0.3 * groove;
    pig = mix(pig, vBase.rgb * 2.6 + 0.004, quill * (1.0 - smoothstep(0.55, 0.95, v)) * 0.85);
    // paler worn edge
    pig += vBase.rgb * 1.2 * smoothstep(0.8, 0.98, lead) + vBase.rgb * 0.5 * smoothstep(0.88, 1.0, au);
    // the underside of a blade is paler and catches the light from below
    if (!gl_FrontFacing) pig = pig * 2.0 + vec3(0.006, 0.006, 0.008) * (0.4 + strip);
    fEdge = (smoothstep(0.8, 0.97, lead) + 0.35 * smoothstep(0.9, 1.0, au)) * (gl_FrontFacing ? 0.3 : 1.0);
  } else {
    pig *= mix(1.0, 0.72, shaft * (scallop ? 0.0 : 0.7 - 0.5 * plush));
    if (!scale) {
      // dust: on a few feathers a white speck, a short thread of lint lying any which way,
      // or a wisp of pale down; commoner on the dark upper parts. Each fades out before it
      // gets thinner than a pixel, so it never sparkles.
      float dark = 1.0 - smoothstep(0.004, 0.02, dot(vBase.rgb, vec3(0.3, 0.5, 0.2)));
      float pick = fract(rnd * 91.7);
      float px = fwidth(v) + 1e-5;
      vec2 sc = vec2(fract(rnd * 13.3) * 1.1 - 0.55, 0.45 + 0.4 * fract(rnd * 29.1));
      vec2 d = vec2((u - sc.x) * 0.55, v - sc.y);
      float speck = step(1.0 - mix(0.006, 0.02, dark), pick) * (1.0 - smoothstep(0.035, 0.085, length(d))) * clamp(0.06 / px - 0.4, 0.0, 1.0);
      float la = fract(rnd * 47.3) * 3.1416;
      vec2 ld = vec2(cos(la), sin(la));
      float along = dot(d, ld), across = dot(d, vec2(-ld.y, ld.x)) + 0.05 * sin(along * 9.0 + rnd * 20.0);
      float lint = step(pick, mix(0.004, 0.016, dark)) * (1.0 - smoothstep(0.012, 0.03, abs(across))) * (1.0 - smoothstep(0.2, 0.3, abs(along))) * clamp(0.022 / px - 0.4, 0.0, 1.0);
      float tuft = step(0.5, pick) * step(pick, 0.5 + mix(0.001, 0.004, dark)) * (1.0 - smoothstep(0.1, 0.3, length(d))) * (0.4 + 0.6 * strand) * clamp(0.15 / px - 0.4, 0.0, 1.0);
      pig = mix(pig, vec3(0.5, 0.5, 0.48), max(speck, lint) * 0.9);
      pig = mix(pig, vec3(0.3, 0.27, 0.27), tuft * 0.8);
    }
  }
  diffuseColor.rgb = pig;
  #ifdef ALPHA_TO_COVERAGE
  if (!flight) {
    float aa = max(fwidth(edge), 1e-4);
    // every barb ends at its own length, and now and then the vane splits
    float cut = mix(scale ? 0.7 : mix(0.62, 0.45, loose), 1.03, h * h) - (h2 < 0.05 + 0.1 * loose ? 0.45 : 0.0);
    // a scallop's rim is a comb: each barb stops at its own length, the grooves open between them
    if (scallop) cut = 1.0 - 0.13 * h2 * h2 - (h < 0.07 ? 0.12 : 0.0);
    float alive = 1.0 - smoothstep(cut - aa, cut + aa, edge);
    if (scallop) alive *= 1.0 - (1.0 - strand) * smoothstep(0.78, 0.93, edge);
    // toward the edge of a soft feather the barbs stand apart: you see between them
    float open = scale ? 0.0 : smoothstep(mix(0.55, 0.1, loose), mix(0.95, 0.7, loose), max(edge, v * 0.9)) * mix(0.75, 1.0, loose);
    float gap = (1.0 - strand) * open;
    float fine = alive * (1.0 - gap);
    // too far to resolve barbs: the same thing on average, a soft feathered outline
    float far = 1.0 - smoothstep(mix(0.82, 0.5, loose), 1.06, edge) * mix(0.35, 0.8, loose);
    diffuseColor.a = mix(fine, far, lod);
  } else {
    // a few barbs have come unzipped near the edge of the vane
    float notch = step(h2, 0.035) * smoothstep(0.55, 0.75, au) * (1.0 - lod);
    diffuseColor.a = 1.0 - notch * smoothstep(0.2, 0.5, 1.0 - ridge);
  }
  #endif
  // structural colour: on scales the whole exposed disc; on soft feathers it sits on the
  // barbs, so it glitters in streaks rather than tiling
  // every strand shines, some much more than others; too far to tell them apart, their
  // average, with the odd single-feather sparkle so velvet still glints
  float streak = mix(strand * (0.25 + 2.3 * h * h), 0.55 * (1.0 + 1.6 * step(0.9, fract(rnd * 3.77))), lod);
  // scales: the flash runs in fine ridges with dark lines between, still a hint of them when tiny,
  // and a dark line where the scale's free edge lies over the next
  float scaleEdge = 1.0 - 0.6 * smoothstep(0.8, 1.0, edge);
  // (a scallop's covered root still glows a little, so a gap in the row above is not a black hole)
  fIriMask = flight ? 1.0 : scale ? (scallop ? mix(0.3, 1.0, bare) : bare) * mix((0.3 + 0.95 * strand) * (scallop ? 0.62 + 0.85 * h * h : 1.0), 0.62 + 0.18 * ridge, lod) * (1.0 - (scallop ? 0.0 : 0.3) * shaft) * scaleEdge : bare * streak;
  fSoft = (flight || scale) ? 0.0 : 1.0;
  // every barb of a scallop is its own little mirror too, if a steadier one
  fTilt = scallop ? 0.16 : fSoft * 0.35;
  }
}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = clamp((vFData.y > 3.5 ? 0.95 : vFData.y > 2.5 ? 0.8 : vFData.y > 0.5 ? 0.55 : 0.92) + 0.06 * fBarb, 0.08, 1.0);`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{
  vec3 nI = normalize(vIriN + vec3(0.0, 0.0, 1e-5));
  vec3 V = geometryViewDir;
  // on soft feathers every barb is its own little mirror, tilted a bit differently
  float c = clamp(dot(nI, V) + (fBarbRand - 0.5) * fTilt, 0.0, 1.0);
  float power = vIri.a * 32.0;
  float strength = vBase.a * 4.0;
  // hue slides with the angle of incidence
  vec3 colV = mix(vIri2.rgb, vIri.rgb, smoothstep(0.3, 0.8, c));
  // strand by strand the green leans gold or teal
  float fGold = fSoft * clamp((0.4 - fBarbHue) / 0.4, 0.0, 1.0) * 0.85;
  float fTeal = fSoft * clamp((fBarbHue - 0.68) / 0.32, 0.0, 1.0) * 0.6;
  colV = mix(colV, vec3(colV.g * 1.15, colV.g * 1.05, colV.b * 0.25), fGold);
  colV = mix(colV, vec3(colV.r * 0.5, colV.g * 0.95, colV.g * 0.95), fTeal);
  float lobeV = pow(c, power);
  vec3 ambient = (irradiance + iblIrradiance) * RECIPROCAL_PI;
  vec3 flash = colV * lobeV * (ambient * 2.2 + 0.05) * uFlash;
  #if NUM_DIR_LIGHTS > 0
  for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
    vec3 H = normalize(directionalLights[i].direction + V);
    float nh = max(dot(nI, H), 0.0);
    float cl = max(dot(nI, directionalLights[i].direction), 0.0);
    vec3 colL = mix(vIri2.rgb, vIri.rgb, smoothstep(0.3, 0.8, nh));
    colL = mix(colL, vec3(colL.g * 1.15, colL.g * 1.05, colL.b * 0.25), fGold);
    colL = mix(colL, vec3(colL.r * 0.5, colL.g * 0.95, colL.g * 0.95), fTeal);
    flash += colL * pow(nh, power * 8.0) * cl * directionalLights[i].color * 0.35 * uGlint;
  }
  #endif
  // structural colour saturates, it never goes white: a soft ceiling on the
  // brightest channel, all three scaled alike so the hue holds
  // (the ceiling on the flash itself, the ridge and edge mask after it, so the ridges keep their contrast)
  vec3 fl = max(flash * strength, vec3(0.0));
  float fm = max(max(fl.r, fl.g), fl.b);
  fl *= 1.0 / (1.0 + fm / 0.55);
  totalEmissiveRadiance += fl * fIriMask;
  // the free edge of a blade is thin and a little translucent: it picks up the sky
  totalEmissiveRadiance += vec3(0.55, 0.6, 0.75) * fEdge * (ambient * 0.22 + 0.003);
  // downy edge light: thin barbs scatter at grazing angles
  // (clamped: a dot product a hair over 1 would feed pow a negative base, and one NaN
  // pixel becomes a dotted disc once a depth-of-field pass smears it)
  float fres = pow(clamp(1.0 - dot(normal, V), 0.0, 1.0), 3.0);
  reflectedLight.indirectDiffuse += diffuseColor.rgb * ambient * fres * mix(2.5, 1.6, fSoft);
  // matte coat: soft feathers keep almost no mirror highlight
  bool blade = vFData.y > 2.5 && vFData.y < 3.5;
  // even the show scales only flash through their structural colour, not as mirrors
  reflectedLight.directSpecular *= blade ? 0.18 : fSoft > 0.5 ? 0.06 : 0.22;
  reflectedLight.indirectSpecular *= blade ? 0.12 : fSoft > 0.5 ? 0.06 : 0.3;
}`)},t.customProgramCacheKey=()=>"plumage-v47",{material:t,uniforms:i}}function kS(i){const t=new Lf({side:Oe});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>${ap}`).replace("#include <begin_vertex>",lp+cp)},t.customProgramCacheKey=()=>"plumage-depth-v5",t}class ir{constructor(t){this.rig=t}rig;pos=[];nor=[];col=[];uv=[];si=[];sw=[];idx=[];add(t,e,n,s,r){const o=this.rig.rest[e],a=new Vt().compose(o.worldPos,o.worldQuat,new y(1,1,1)),l=t.index?t.toNonIndexed():t.clone(),c=l.getAttribute("position").clone();l.applyMatrix4(a);const h=l.getAttribute("position"),u=l.getAttribute("normal"),d=l.getAttribute("uv"),f=this.pos.length/3,m=this.rig.index(e),_=new y;for(let p=0;p<h.count;p++){_.fromBufferAttribute(c,p);const g=r?.(_)??n;this.pos.push(h.getX(p),h.getY(p),h.getZ(p)),this.nor.push(u.getX(p),u.getY(p),u.getZ(p)),this.col.push(g.r,g.g,g.b),this.uv.push(d?d.getX(p):0,d?d.getY(p):0),this.si.push(s?this.rig.index(s(_)):m,0,0,0),this.sw.push(1,0,0,0),this.idx.push(f+p)}l.dispose(),t.dispose()}build(){const t=new Se;return t.setAttribute("position",new jt(this.pos,3)),t.setAttribute("normal",new jt(this.nor,3)),t.setAttribute("color",new jt(this.col,3)),t.setAttribute("uv",new jt(this.uv,2)),t.setAttribute("skinIndex",new ca(this.si,4)),t.setAttribute("skinWeight",new jt(this.sw,4)),t.setIndex(this.idx),t.boundingSphere=new Nn(new y(0,.4,0),2.5),t}}function sr(i,t,e,n=10){const s=[],r=[],o=i.length,a=new y,l=new y,c=new y;for(let u=0;u<o;u++){a.copy(i[Math.min(u+1,o-1)]).sub(i[Math.max(u-1,0)]).normalize(),l.crossVectors(e,a).normalize(),c.crossVectors(a,l);const[d,f]=t(u/(o-1));for(let m=0;m<=n;m++){const _=m/n*Math.PI*2;s.push(i[u].x+l.x*Math.cos(_)*d+c.x*Math.sin(_)*f,i[u].y+l.y*Math.cos(_)*d+c.y*Math.sin(_)*f,i[u].z+l.z*Math.cos(_)*d+c.z*Math.sin(_)*f)}}for(let u=0;u<o-1;u++)for(let d=0;d<n;d++){const f=u*(n+1)+d,m=f+n+1;r.push(f,f+1,m,m,f+1,m+1)}const h=new Se;return h.setAttribute("position",new jt(s,3)),h.setIndex(r),h.computeVertexNormals(),h}function ul(i,t,e,n,s=!1){const a=[],l=[],c=[];for(let u=0;u<=12;u++){const d=ht(t,e,u/12);for(let f=0;f<=12;f++){const m=ht(-n,n,f/12);let _=Math.sin(m),p=Math.cos(m)*Math.sin(d);const g=Math.cos(m)*Math.cos(d);if(s){const M=_;_=p,p=M}a.push(_*i,p*i,g*i),l.push(_,p,g)}}for(let u=0;u<12;u++)for(let d=0;d<12;d++){const f=u*13+d,m=f+12+1;s?c.push(f,m,f+1,m,m+1,f+1):c.push(f,f+1,m,m,f+1,m+1)}const h=new Se;return h.setAttribute("position",new jt(a,3)),h.setAttribute("normal",new jt(l,3)),h.setIndex(c),h}const dl={upperOpen:62*Tt,lowerOpen:-72*Tt,nictOpen:150*Tt};function BS(i){const t=i.species,e=t.eye.radius,n=new Lt(t.skin),s=new y(0,1,0),r=new ir(i),o=new Lt(2369067),a=new Lt(7829372),l=new Lt(526346);for(const N of je){const G=N==="L"?-1:1,W=96,tt=7,Z=[],H=[],J=[],Y=new Lt;for(let dt=0;dt<=W;dt++){const Pt=dt/W*Math.PI*2,kt=Math.cos(Pt),Ut=Math.sin(Pt),pe=kt*G>0?1.3:1.6,Xt=1/Math.pow(Math.pow(Math.abs(kt)/(43*Tt),pe)+Math.pow(Math.abs(Ut)/(29*Tt),pe),1/pe),qt=56*Tt;for(let ct=0;ct<=tt;ct++){const te=ct/tt,Yt=ht(Xt,qt,te),le=Math.pow(Math.sin(Math.PI*Math.min(te/.5,1)),.6),ce=Math.max(0,Math.sin(Pt*38))*ot(.12,.2,te)*(1-ot(.22,.32,te)),Ae=e*(1.05+.02*le+.004*ce-.035*ot(.5,1,te));Z.push(Math.sin(Yt)*kt*Ae,Math.sin(Yt)*Ut*Ae,Math.cos(Yt)*Ae),Y.copy(a).multiplyScalar(.55+.5*le).lerp(l,Math.max(ce*.35,ot(.4,.6,te))),H.push(Y.r,Y.g,Y.b)}}for(let dt=0;dt<W;dt++)for(let Pt=0;Pt<tt;Pt++){const kt=dt*(tt+1)+Pt,Ut=kt+tt+1;J.push(kt,Ut,kt+1,Ut,Ut+1,kt+1)}const lt=new Se;lt.setAttribute("position",new jt(Z,3)),lt.setAttribute("color",new jt(H,3)),lt.setIndex(J),lt.computeVertexNormals();const st=lt.toNonIndexed(),bt=st.getAttribute("color");let Qt=0;r.add(st,`eye.${N}`,a,null,()=>Y.fromBufferAttribute(bt,Qt++).clone()),r.add(ul(e*1.04,12*Tt,112*Tt,78*Tt),`lidUpper.${N}`,o),r.add(ul(e*1.036,-106*Tt,16*Tt,78*Tt),`lidLower.${N}`,o)}const c=new Lt(t.legs.color),h=t.legs.perchRadius;for(const N of je){const G=En(N),W=i.tarsusLength;r.add(sr([0,.25,.5,.75,1,1.15].map(J=>new y(0,0,J*W)),J=>[ht(.011,.017,J),ht(.011,.017,J)],s,8),`tarsus.${N}`,c);const tt=.0085,Z=(J,Y,lt,st,bt)=>{const Qt=[];for(let Pt=0;Pt<=14;Pt++){const kt=Pt/14,Ut=ht(Y,lt,kt),pe=ot(.78,1,kt)*.012,Xt=(1-ot(0,.2,kt))*.012,qt=h+tt*.9-pe+Xt;Qt.push(new y(ht(st,bt,kt),-h+qt*Math.cos(Ut),qt*Math.sin(Ut)))}r.add(sr(Qt,Pt=>{const kt=Pt>.78?ht(.75,.08,(Pt-.78)/.22):1+.12*Math.sin(Pt*22);return[tt*kt,tt*kt*.9]},new y(1,0,0),7),`toe.${N}.${J}`,c.clone().multiplyScalar(1-J%2*.12))},H=t.legs.toe/(h+tt);Z(1,-.12,H*.95,0,-.03*G),Z(2,-.12,H*1.1,0,.002*G),Z(3,-.12,H*.98,0,.034*G),Z(4,.05,-H*.8,0,-.006*G)}const u=FS(i),d=new fn({color:16777215,vertexColors:!0,roughness:.9,envMapIntensity:.4,side:Oe}),f=new fn({color:n.clone().multiplyScalar(.5),roughness:1,envMapIntensity:.15,side:Oe}),m=new jn(u,f);m.name="bird.skin";const _=new jn(r.build(),d);_.name="bird.bare";const p=new ir(i),g=t.bill,M=new Lt(g.color),b=new Lt(2493968),v=N=>ht(1,.17,Math.pow(N,.8))*(N>.95?ht(1,.05,(N-.95)/.05):1),w=(N,G,W,tt)=>{const Z=[];for(let J=0;J<=26;J++){const Y=ht(-.07,g.length*tt,J/26),lt=Math.max(Y/g.length,0);Z.push(new y(0,N*g.radius*v(lt)-g.droop*lt*lt,Y))}return sr(Z,J=>{const Y=Math.max((J*(g.length*tt+.07)-.07)/g.length,0);return[g.radius*W*v(Y),g.radius*G*v(Y)]},s,12)},A=N=>{const G=Math.max(N/g.length,0);return-g.droop*G*G};p.add(w(.4,.58,1,1),"bill",M,null,N=>N.y<A(N.z)+.1*g.radius*v(Math.max(N.z/g.length,0))?b:null),p.add(w(-.36,.5,.9,.985),"bill",M,()=>"jaw",N=>N.y>A(N.z)-.1*g.radius*v(Math.max(N.z/g.length,0))?b:null);for(const N of[1,-1]){const G=new Se,W=N*g.radius*.8,tt=N*g.radius*.72;G.setAttribute("position",new jt([W,2e-4,-.05,tt,2e-4,.09,W,-2e-4,-.05,tt,2e-4,.09,tt,-2e-4,.09,W,-2e-4,-.05],3)),G.setAttribute("normal",new jt([N,0,0,N,0,0,N,0,0,N,0,0,N,0,0,N,0,0],3)),p.add(G,"bill",new Lt(393731),Z=>Z.y>0?"bill":"jaw")}const x=new ir(i);{const N=new Lt(15979474),G=.04,W=g.length*.8,tt=H=>H.z<g.length*.5?"tongue.1":H.z<g.length*.7?"tongue.2":"tongue.3",Z=(H,J,Y,lt)=>{const st=[];for(let bt=0;bt<=14;bt++){const Qt=ht(Y,lt,bt/14),dt=Qt/g.length,Pt=Math.max((dt-.55)/.25,0);st.push(new y(ht(H,J,bt/14),-8e-4*(1-dt*.7)-g.droop*dt*dt-.0028*Pt*Pt,Qt))}return st};x.add(sr(Z(0,0,G,W-.012),H=>[ht(.0036,.0027,H),ht(.0024,.002,H)],s,8),"bill",N,tt);for(const H of[1,-1])x.add(sr(Z(H*.0011,H*.0015,W-.02,W),J=>[.0015*Math.sqrt(1-J*J*.92),.0014*Math.sqrt(1-J*J*.92)],s,6),"bill",N,tt)}const S=new pn({color:16777215,vertexColors:!0,roughness:.22,clearcoat:1,clearcoatRoughness:.12,sheen:.4,sheenColor:16770272,emissive:4863540,envMapIntensity:1.1,side:Oe}),F=new jn(x.build(),S);F.name="bird.tongue";const C=new fn({color:16777215,vertexColors:!0,roughness:.68,envMapIntensity:.35,side:Oe}),L=new jn(p.build(),C);L.name="bird.bill";const D=new ir(i);for(const N of je){const G=new Gi(e,40,28);G.rotateX(Math.PI/2);const W=G.getAttribute("position");for(let Z=0;Z<W.count;Z++){const H=W.getZ(Z)/e,J=1+.028*ot(.55,1,H);W.setXYZ(Z,W.getX(Z)*J,W.getY(Z)*J,W.getZ(Z)*J)}G.computeVertexNormals();const tt=G.getAttribute("uv");for(let Z=0;Z<W.count;Z++)tt.setXY(Z,W.getZ(Z)/e,0);D.add(G,`eye.${N}`,new Lt(1,1,1))}const I=new pn({color:0,roughness:.35,metalness:0,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.1,specularIntensity:.12,ior:1.4});I.onBeforeCompile=N=>{N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
varying float vEyeCos;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vEyeCos = uv.x;`),N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
varying float vEyeCos;`).replace("#include <color_fragment>",`#include <color_fragment>
{
  // a near-black eye: pupil, a very dark umber iris you only catch in strong light, dark limbus
  float iris = smoothstep(0.93, 0.86, vEyeCos) * smoothstep(0.55, 0.7, vEyeCos);
  diffuseColor.rgb = mix(vec3(0.0006, 0.0007, 0.0012), vec3(0.003, 0.0035, 0.006), iris);
}`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{
  // What a wet black eye shows is the world: mostly the environment map, plus the canopy
  // overhead as a few pale irregular gaps of sky between leaves (the env map is too soft to
  // carry those), bent by the cornea. No painted catchlight.
  vec3 R = reflect(-geometryViewDir, normal);
  vec3 Rw = normalize((vec4(R, 0.0) * viewMatrix).xyz);
  vec2 q = Rw.xz / (Rw.y + 0.45) * 2.6 + vec2(1.7, 0.4);
  vec2 qi = floor(q), qf = fract(q);
  float gaps = 0.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 g = vec2(float(i), float(j));
    vec2 h = fract(sin(vec2(dot(qi + g, vec2(127.1, 311.7)), dot(qi + g, vec2(269.5, 183.3)))) * 43758.5453);
    vec2 d = (g + h - qf) * vec2(1.0, 0.6 + 0.8 * h.y);
    gaps = max(gaps, (1.0 - smoothstep(0.08, 0.3 * h.x + 0.12, length(d))) * step(0.45, h.x));
  }
  float up = smoothstep(0.15, 0.6, Rw.y);
  totalEmissiveRadiance += vec3(0.8, 0.95, 0.85) * gaps * up * 0.55;
  // a mirror-sharp highlight of the sun is thousands of nits on one pixel; a depth-of-field
  // pass turns that into a dotted disc. Keep the glints bright but finite.
  reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(1.6));
  #ifdef USE_CLEARCOAT
  clearcoatSpecularDirect = min(clearcoatSpecularDirect, vec3(2.2));
  clearcoatSpecularIndirect = min(clearcoatSpecularIndirect, vec3(2.2));
  #endif
}`)};const R=new jn(D.build(),I);R.name="bird.eyes";const O=new ir(i);for(const N of je)O.add(ul(e*1.045,-100*Tt,100*Tt,80*Tt,!0),`nict.${N}`,new Lt(9348296));const k=new pn({color:16777215,vertexColors:!0,roughness:.45,transparent:!0,opacity:.3,clearcoat:.2,side:Oe,depthWrite:!1}),U=new jn(O.build(),k);U.name="bird.nict",U.renderOrder=2;const X=[m,_,L,F,R,U];for(const N of X)N.frustumCulled=!1,N.bind(i.skeleton,new Vt);return m.castShadow=!0,L.castShadow=!0,_.castShadow=!0,_.receiveShadow=!0,L.receiveShadow=!0,{meshes:X,dispose(){for(const N of X)N.geometry.dispose(),N.material.dispose()}}}const fl={spread:0,lift:0,droop:0,sweep:0,raise:0,out:0,twist:0};class hp{headYaw=0;headPitch=0;headRoll=0;headShift=new y;headStabil=.85;reachTarget=new y;reachWeight=0;reachDir=new y(0,0,1);reachPin=0;reachRoll=0;bodyYaw=0;bodyPitch=0;bodyRoll=0;bodyShift=new y;chestPitch=0;breath=0;fluff=0;lift=new Float32Array(8);gorget=0;crest=0;lidUpper=0;lidLower=0;nict=0;feetSlope=0;feetScale=1;grip=1;jaw=0;tongueOut=0;tongueCurl=0;carryAt=1;tailPitch=0;tailYaw=0;tailRoll=0;tailFan=0;wing={L:{...fl},R:{...fl}};reset(){Object.assign(this,zS),this.headShift.set(0,0,0),this.bodyShift.set(0,0,0),this.lift.fill(0);for(const t of je)Object.assign(this.wing[t],fl)}addLift(t,e,n){for(let s=0;s<8;s++){const r=(s/7-t)/e;this.lift[s]+=n*Math.exp(-r*r)}}}const zS=Object.fromEntries(Object.entries(new hp).filter(([,i])=>typeof i=="number")),Zn=new y(1,0,0),rr=new y(0,1,0),pl=new y(0,0,1),Eo=new ge;function HS(i,t){const{bones:e,rest:n,species:s}=i,r=new Vn,o=new ge,a=new ge,l=new ge,c=new ge,h=new ge,u=new ge,d=new ge,f=new ge,m=new y,_=new y,p=new y,g=new y,[M,b]=s.behaviour.neckShare,v={};for(const qt of je){const ct=n[`hand.${qt}`].quat;v[qt]={out:Zn.clone().applyQuaternion(ct),fan:rr.clone().applyQuaternion(ct)}}{const qt={p:new y,n:new y,t:new y},ct=(ce,Ae)=>{const V=i.loft.wingAt(ce,Ae,1);return i.loft.surface(V.s,V.ang,qt)},te=ct(.03,.3).p.clone(),Yt=ct(.95,0).p.clone().sub(te).normalize(),le=ct(.4,0).n.clone();le.addScaledVector(Yt,-le.dot(Yt)).normalize(),t.uWingPivot.value.copy(te),t.uWingSpan.value.copy(Yt),t.uWingChord.value.crossVectors(le,Yt)}const w=n.bill,A=new y(0,-s.bill.droop,s.bill.length).applyQuaternion(w.worldQuat).add(w.worldPos).sub(n.head.worldPos),x=A.length(),S=Math.atan2(A.y,A.z),F=.34,C=new y,L=new y,D=s.bill.length*.65,I=["tongue.1","tongue.2","tongue.3"],R=[.06,.5,.7].map(qt=>qt*s.bill.length),O=[0,.3,.7],k=(qt,ct)=>{const te=s.bill.length,Yt=Math.min(qt,te),le=-2*s.bill.droop*Yt/(te*te);return ct.set(0,-s.bill.droop*(Yt/te)*(Yt/te)+le*(qt-Yt),qt),-Math.atan(le)},U=R.map(()=>new y),X=R.map(()=>new y),N=R.map((qt,ct)=>k(qt,U[ct])),G=new y,W=new ge,tt=new Vt,Z=new y,H=new y,J=(()=>{const[qt,ct]=s.throat,te={p:new y,n:new y,t:new y},Yt=n.head.worldPos,le=i.loft.point(ct,0,new y).sub(Yt),ce=i.loft.point(qt,0,new y).sub(Yt),Ae=i.loft.surface((qt+ct)/2,0,te).p.clone().sub(Yt),V=te.n.clone(),Fe=i.loft.surface(qt,0,te).t.clone();return{chin:le,rim:ce,mid:Ae,out:V,down:Fe,span:le.distanceTo(ce),pivot:Yt.clone().sub(n.chest.worldPos)}})(),Y=.12,lt=new ge,st=new y,bt=new y,Qt=new y,dt=new y,Pt=n.sternum.worldPos.clone().sub(n.chest.worldPos).setX(0).normalize(),kt=je.map(qt=>({s:qt,foot:e[`foot.${qt}`],footRest:n[`foot.${qt}`],toes:[1,2,3,4].map(ct=>e[`toe.${qt}.${ct}`]),tarsus:e[`tarsus.${qt}`]})),Ut=()=>{h.copy(l).invert().multiply(c),u.copy(Eo).slerp(h,M),d.copy(Eo).slerp(h,b)};function pe(qt,ct,te,Yt,le,ce){return ce.copy(n.head.pos).applyQuaternion(le).add(n.neck2.pos),ce.applyQuaternion(Yt).add(n.neck1.pos),ce.applyQuaternion(te).add(n.chest.pos),ce.add(n.spine.pos),ce.applyQuaternion(ct).add(qt),ce}const Xt=function(ct){r.set(ct.bodyPitch,ct.bodyYaw,ct.bodyRoll,"YXZ"),o.setFromEuler(r),e.hips.quaternion.copy(o),e.hips.position.copy(n.hips.pos).add(ct.bodyShift),a.setFromAxisAngle(Zn,ct.chestPitch),e.chest.quaternion.copy(a),l.copy(o).multiply(a),e.sternum.position.copy(n.sternum.pos).addScaledVector(Pt,ct.breath*.011),e.sternum.scale.set(1+ct.breath*.028,1,1+ct.breath*.012),r.set(-ct.headPitch,ct.headYaw,ct.headRoll,"YXZ"),c.setFromEuler(r),Ut(),pe(e.hips.position,o,a,u,d,p),pe(n.hips.pos,Eo,Eo,u,d,g),m.copy(g).sub(p).multiplyScalar(It(ct.headStabil,0,1)).add(ct.headShift);const te=It(ct.reachWeight,0,1);if(te>0){G.copy(p).add(m),_.copy(ct.reachTarget).sub(G);const at=_.length()||1e-6,$t=It(at-x,-.24,F);G.addScaledVector(_,$t/at);const Rt=It(ct.reachPin,0,1);Rt>0&&G.lerp(_.copy(ct.reachDir).multiplyScalar(-x).add(ct.reachTarget),Rt),_.copy(ct.reachTarget).sub(G).normalize();const Ht=It(Math.atan2(_.x,_.z),-2.2,2.2),P=It(Math.asin(It(_.y,-1,1))-S,-1.1,1.25);r.set(-P,Ht,ct.headRoll*(1-te),"YXZ"),W.setFromEuler(r),Rt>0&&(Z.crossVectors(rr,_).normalize(),H.crossVectors(_,Z),d.setFromRotationMatrix(tt.makeBasis(Z,H,_)),d.multiply(u.setFromAxisAngle(pl,ct.reachRoll)).multiply(u.setFromAxisAngle(Zn,S)),W.slerp(d,Rt)),c.slerp(W,te),Ut(),pe(e.hips.position,o,a,u,d,p),m.lerp(G.sub(p),te)}e.neck1.quaternion.copy(u),e.neck2.quaternion.copy(d),f.copy(u).multiply(d).invert().multiply(h),e.head.quaternion.copy(f),C.copy(p).add(m),f.copy(l).invert(),e.neck1.position.copy(n.neck1.pos).add(_.copy(m).multiplyScalar(.22).applyQuaternion(f)),f.copy(l).multiply(u).invert(),e.neck2.position.copy(n.neck2.pos).add(_.copy(m).multiplyScalar(.3).applyQuaternion(f)),f.copy(l).multiply(u).multiply(d).invert(),e.head.position.copy(n.head.pos).add(_.copy(m).multiplyScalar(.48).applyQuaternion(f)),lt.set(0,h.y,0,h.w),lt.lengthSq()<1e-6&&lt.set(0,0,0,1),lt.normalize(),e.throat.quaternion.copy(lt),m.copy(e.head.position).applyQuaternion(e.neck2.quaternion).add(e.neck2.position).applyQuaternion(e.neck1.quaternion).add(e.neck1.position),st.copy(J.chin).applyQuaternion(h).add(m).sub(bt.copy(J.rim).applyQuaternion(lt).add(J.pivot));const Yt=J.span*.5-st.length(),le=.5*(Yt+Math.sqrt(Yt*Yt+1e-4));dt.copy(J.down).applyQuaternion(lt).multiplyScalar(le),e.throat.position.copy(n.throat.pos).add(dt),f.copy(lt).slerp(h,.5),e.gular.quaternion.copy(f),_.copy(J.mid).applyQuaternion(f);const ce=It(Y*(J.span-st.length()),-.006,.03);Qt.copy(J.out).applyQuaternion(f),e.gular.position.copy(m).add(J.pivot).add(dt).multiplyScalar(.5).add(_).addScaledVector(Qt,ce),C.add(_.copy(A).applyQuaternion(c)),e.jaw.quaternion.copy(n.jaw.quat).multiply(u.setFromAxisAngle(Zn,It(ct.jaw,0,1.1)*.31));const Ae=It(ct.tongueOut,0,1)*D;let V=0;for(let at=0;at<3;at++){const $t=k(R[at]+Ae,X[at])-N[at],Rt=e[I[at]];Rt.quaternion.setFromAxisAngle(Zn,$t-V+ct.tongueCurl*O[at]),at===0?Rt.position.copy(n[I[0]].pos).add(X[0]).sub(U[0]):Rt.position.copy(X[at]).sub(X[at-1]).sub(U[at]).add(U[at-1]).add(n[I[at]].pos).applyQuaternion(u.setFromAxisAngle(Zn,-V)),V=$t}const Fe=Math.max(ct.carryAt,0);L.set(0,-s.bill.droop*Math.min(Fe,1)*Math.min(Fe,1)-(Fe<1?.003*(1-Fe):0),Fe*s.bill.length).applyQuaternion(w.worldQuat).add(w.worldPos).sub(n.head.worldPos),L.applyQuaternion(c).add(C).sub(_.copy(A).applyQuaternion(c));for(const at of je){const $t=i.eyes[at],Rt=ht(dl.upperOpen,0,ot(0,1,ct.lidUpper)),Ht=ht(dl.lowerOpen,0,ot(0,1,ct.lidLower));$t.lidUpper.quaternion.copy(n[$t.lidUpper.name].quat).multiply(u.setFromAxisAngle(Zn,-Rt)),$t.lidLower.quaternion.copy(n[$t.lidLower.name].quat).multiply(u.setFromAxisAngle(Zn,-Ht));const P=-En(at)*dl.nictOpen*(1-It(ct.nict,0,1));$t.nict.quaternion.copy(n[$t.nict.name].quat).multiply(u.setFromAxisAngle(rr,P)),$t.nict.scale.setScalar(ct.nict>.002?1:.001),$t.lidUpper.scale.setScalar(ht(.93,1,ot(0,.5,ct.lidUpper))),$t.lidLower.scale.setScalar(ht(.93,1,ot(0,.5,ct.lidLower)))}r.set(-ct.tailPitch,ct.tailYaw,ct.tailRoll,"YXZ"),e.tail.quaternion.copy(n.tail.quat).multiply(u.setFromEuler(r));const be=ht(s.tail.restFan,s.tail.maxFan,It(ct.tailFan,-.5,1))*Tt;for(const at of i.rectrices)at.bone.quaternion.setFromAxisAngle(rr,at.k*be);for(const at of je){const $t=i.wings[at],Rt=ct.wing[at],Ht=ot(0,1,Rt.spread);for(let E=0;E<$t.bones.length;E++)$t.bones[E].quaternion.copy($t.folded[E]).slerp($t.spread[E],Ht);Ht>0&&(Rt.sweep!==0||Rt.raise!==0)&&(u.setFromAxisAngle(rr,-En(at)*Rt.sweep*Ht),d.setFromAxisAngle(pl,En(at)*Rt.raise*Ht),$t.bones[0].quaternion.premultiply(d).premultiply(u));const P=1-Ht;if(P>0){const E=v[at],q=$t.bones[1];q.quaternion.multiply(u.setFromAxisAngle(E.out,-Rt.lift*.3*P)),q.quaternion.multiply(u.setFromAxisAngle(E.fan,-En(at)*Rt.droop*P))}}u.setFromAxisAngle(pl,ct.feetSlope);const xe=(1-It(ct.grip,0,1))*.6;for(const{s:at,foot:$t,footRest:Rt,toes:Ht,tarsus:P}of kt){$t.position.copy(Rt.pos).applyQuaternion(u),$t.quaternion.copy(u),$t.scale.setScalar(ct.feetScale);for(let q=0;q<4;q++)Ht[q].quaternion.setFromAxisAngle(Zn,q===3?xe:-xe);_.copy(i.ankle[at]).sub(Rt.worldPos).multiplyScalar(ct.feetScale).applyQuaternion(u).add($t.position),m.copy(i.hipSocket[at]).applyQuaternion(o).add(e.hips.position).sub(_);const E=m.length();m.applyQuaternion(d.copy(u).invert()),ts(m,Zn,P.quaternion),P.scale.set(1,1,E/i.tarsusLength/ct.feetScale)}t.uFluff.value=ct.fluff,t.uLift.value.set(ct.lift),t.uLift.value[0]+=ct.crest*.9,t.uLift.value[1]+=ct.crest*.7,t.uGorget.value=ct.gorget,t.uCrest.value=ct.crest,t.uWingSpread.value.set(ct.wing.L.spread,ct.wing.R.spread),t.uWingOut.value.set(ct.wing.L.out,ct.wing.L.twist,ct.wing.R.out,ct.wing.R.twist),t.uWingLift.value.set(ct.wing.L.lift,ct.wing.R.lift)};return Xt.tip=C,Xt.carry=L,Xt.billReach=x,Xt}class GS{constructor(t,e=7){this.species=t,this.rng=Vi(e)}species;t=0;dt=0;rng;arousal=.3;baseline=.32;attention=null;attentionSpeed=0;freeze=0;saccading=!1;food=[];focus=null;focusId=0;eating=!1;gazeLock=!1;pinGaze=null;quiet=!1;handlers={};lastDir=new y;dir=new y;hasLast=!1;on(t,e){(this.handlers[t]??=[]).push(e)}emit(t,e){for(const n of this.handlers[t]??[])n(e)}excite(t){this.arousal=It(this.arousal+t,0,1)}step(t,e){if(this.dt=t,this.t+=t,this.freeze=Math.max(0,this.freeze-t),this.attention&&t>0){if(this.dir.copy(this.attention).sub(e).normalize(),this.hasLast){const n=this.dir.angleTo(this.lastDir)/t;this.attentionSpeed=Tn(this.attentionSpeed,Math.min(n,6),6,t)}this.lastDir.copy(this.dir),this.hasLast=!0}else this.hasLast=!1,this.attentionSpeed=Tn(this.attentionSpeed,0,4,t);this.excite(Math.max(this.attentionSpeed-.25,0)*.5*t),this.arousal=Tn(this.arousal,this.baseline,.14,t)}}class VS{name="posture";a=.3;yaw=new yi(3.2,.5);follow=0;pitch=new yi(5,.45);headYaw=0;constructor(t){t.on("saccade",e=>{this.yaw.kick(-e.dyaw*.5),this.pitch.kick(-e.dpitch*.4)}),t.on("fixate",e=>this.headYaw=e.yaw)}update(t,e){this.a=Tn(this.a,t.arousal,2.5,t.dt);const n=this.a;e.fluff+=ht(.2,-.06,n),e.headShift.y+=ht(-.032,.03,n),e.headShift.z+=ht(-.014,.012,n),e.bodyPitch+=ht(-.04,.05,n),e.bodyShift.y+=ht(-.012,.008,n),e.crest+=ht(0,.22,n),e.wing.L.droop+=ht(.05,0,n),e.wing.R.droop+=ht(.05,0,n);const s=t.t;e.bodyRoll+=He(s*.17,1)*.022,e.bodyShift.x+=He(s*.13,2)*.006,e.bodyPitch+=He(s*.21,3)*.012,this.follow=Tn(this.follow,this.headYaw*.14,.9,t.dt),e.bodyYaw+=this.follow+this.yaw.step(0,t.dt)+He(s*.11,4)*.025,e.chestPitch+=this.pitch.step(0,t.dt)}}class WS{name="breath";phase=0;update(t,e){const[n,s]=t.species.behaviour.breathHz;this.phase+=t.dt*ht(n,s,t.arousal)*Math.PI*2;const r=Math.sin(this.phase+.45*Math.sin(this.phase))*ht(.75,1.1,t.arousal);e.breath+=r,e.addLift(.42,.2,r*.014),e.tailPitch+=r*.011,e.bodyShift.y+=r*.0012,e.wing.L.lift+=r*.005,e.wing.R.lift+=r*.005}}const XS=i=>i*i*i*(10+i*(-15+6*i));class qS{name="gaze";maxYaw=70*Tt;interest=.5;billOn=.46;pursuit=0;minPitch=-45*Tt;minPitchFood=-50*Tt;cur;from;to;moving=!1;t0=0;dur=.06;amp=0;nextAt=.8;settle=10;burst=0;attYaw=0;attPitch=0;seenYaw=0;seenPitch=0;lastStart=-10;focusSeen=-1;focusAt=0;head=new y(0,.9,.05);d=new y;constructor(t){const e=t.species.behaviour.billUp*Tt;this.cur={yaw:.9,pitch:e,roll:0},this.from={...this.cur},this.to={...this.cur},t.on("startle",()=>{this.nextAt=t.t+.04+t.rng()*.04,this.burst=-1})}moveOn(t){this.burst=0,this.nextAt=Math.min(this.nextAt,t.t+yt(t.rng,.12,.4))}lookAtAttention(t){const e=t.focus??t.attention;return e?(this.d.copy(e).sub(this.head),this.attYaw=Math.atan2(this.d.x,this.d.z),this.attPitch=Math.atan2(this.d.y,Math.hypot(this.d.x,this.d.z)),!0):!1}pick(t,e=!1){const n=t.rng,s=t.species.behaviour.billUp*Tt,r=this.lookAtAttention(t),o=this.cur;let a;if(!e&&this.burst>0)this.burst--,a={yaw:o.yaw+yt(n,-1,1)*13*Tt,pitch:o.pitch+yt(n,-1,1)*8*Tt,roll:o.roll*.5+yt(n,-1,1)*9*Tt};else if(r&&(e||n()<this.interest+.4*t.arousal)){if(this.seenYaw=this.attYaw,this.seenPitch=this.attPitch,(e?0:n())<this.billOn)a={yaw:this.attYaw+yt(n,-5,5)*Tt,pitch:this.attPitch*.8+s+yt(n,-4,14)*Tt,roll:n()<.25?yt(n,-18,18)*Tt:yt(n,-5,5)*Tt};else{const c=yt(n,60,84)*Tt,h=Math.abs(o.yaw-(this.attYaw+c))<Math.abs(o.yaw-(this.attYaw-c))?1:-1;let u=n()<.6?h:-h;Math.abs(this.attYaw+u*c)>this.maxYaw&&(u=-u),a={yaw:this.attYaw+u*c,pitch:s*.6+yt(n,-8,12)*Tt,roll:u*(this.attPitch*.5+yt(n,-4,10)*Tt)}}n()<.35&&(this.burst=1+Math.floor(n()*2))}else{let l=It(yt(n,-1,1)*105*Tt,o.yaw-140*Tt,o.yaw+140*Tt);Math.abs(l-o.yaw)<22*Tt&&(l+=Math.sign(l-o.yaw||1)*30*Tt),a={yaw:l,pitch:s*.5+yt(n,-14,24)*Tt,roll:yt(n,-9,9)*Tt},n()<.3&&(this.burst=1+Math.floor(n()*2))}return a.yaw=It(a.yaw,-this.maxYaw,this.maxYaw),a.pitch=It(a.pitch,this.minPitch,52*Tt),a.roll=It(a.roll,-26*Tt,26*Tt),a}begin(t,e){const[n,s]=t.species.behaviour.saccade;this.from={...this.cur},this.to=e;const r=e.yaw-this.from.yaw,o=e.pitch-this.from.pitch,a=e.roll-this.from.roll;this.amp=Math.hypot(r*Math.cos((e.pitch+this.from.pitch)/2),o,a*.5),this.dur=Math.min(n+s*this.amp/Tt,.095),this.t0=t.t,this.moving=!0,this.lastStart=t.t,t.saccading=!0,t.emit("saccade",{amp:this.amp,dur:this.dur,dyaw:r,dpitch:o})}update(t,e){const n=t.species.behaviour;if(t.pinGaze){e.headYaw+=t.pinGaze[0]*Tt,e.headPitch+=t.pinGaze[1]*Tt,e.headRoll+=t.pinGaze[2]*Tt;return}if(t.focus&&!this.moving&&!t.gazeLock&&this.lookAtAttention(t)){const a=Math.hypot((this.attYaw-this.cur.yaw)*Math.cos(this.attPitch),this.attPitch-this.cur.pitch),l=this.focusSeen!==t.focusId;l&&!this.focusAt&&(this.focusAt=t.t+yt(t.rng,.09,.24)),(l&&t.t>=this.focusAt||!l&&a>6*Tt&&t.t-this.lastStart>.16&&t.rng()<t.dt*9)&&(this.focusSeen=t.focusId,this.focusAt=0,this.burst=0,this.begin(t,{yaw:It(this.attYaw,-this.maxYaw,this.maxYaw),pitch:It(this.attPitch+(l?yt(t.rng,-3,3)*Tt:0),this.minPitchFood,65*Tt),roll:l?yt(t.rng,-8,8)*Tt:this.cur.roll*.6}))}else if(!this.moving&&!t.quiet&&!t.focus&&!t.gazeLock)if(t.t>=this.nextAt&&(t.freeze<=0||this.burst<0)){const a=this.burst<0;a&&(this.burst=0),this.begin(t,this.pick(t,a))}else t.freeze<=0&&t.t-this.lastStart>.22&&this.lookAtAttention(t)&&Math.hypot((this.attYaw-this.seenYaw)*Math.cos(this.attPitch),this.attPitch-this.seenPitch)>13*Tt&&t.rng()<t.dt*ht(3,9,t.arousal)&&(this.burst=0,this.begin(t,this.pick(t,t.rng()<.5)),this.seenYaw=this.attYaw,this.seenPitch=this.attPitch);if(!this.moving&&this.pursuit>0&&!t.focus&&!t.gazeLock&&t.freeze<=0&&this.lookAtAttention(t)){const a=n.billUp*Tt,l=It(this.attYaw,-this.maxYaw,this.maxYaw),c=It(this.attPitch*.8+a*.6,this.minPitch,52*Tt),h=Math.hypot((l-this.cur.yaw)*Math.cos(c),c-this.cur.pitch),u=h>14*Tt&&t.t-this.lastStart>.3&&t.rng()<t.dt*5;if(h<28*Tt&&!u){const d=1-Math.exp(-t.dt*3.2*this.pursuit*(.75+.35*He(t.t*3.1,31)));this.cur={yaw:this.cur.yaw+(l-this.cur.yaw)*d,pitch:this.cur.pitch+(c-this.cur.pitch)*d,roll:this.cur.roll*(1-d*.5)},this.from={...this.cur},this.to={...this.cur},this.seenYaw=this.attYaw,this.seenPitch=this.attPitch,h>3*Tt&&(this.nextAt=Math.max(this.nextAt,t.t+.25))}else(u||t.t-this.lastStart>.16&&t.rng()<t.dt*10)&&(this.burst=0,this.begin(t,this.pick(t,!0)))}let s,r,o;if(this.moving){const a=(t.t-this.t0)/this.dur;if(a>=1){this.moving=!1,t.saccading=!1,this.cur={...this.to},this.settle=0;const h=Math.abs(this.cur.yaw-this.attYaw)<15*Tt,[u,d]=[ht(n.holdCalm[0],n.holdAlert[0],t.arousal),ht(n.holdCalm[1],n.holdAlert[1],t.arousal)];this.nextAt=t.t+(this.burst<0?.05:this.burst>0?yt(t.rng,.14,.42):mM(t.rng,u,d,1.8)*(h?1.15:1)),t.emit("fixate",{yaw:this.cur.yaw,pitch:this.cur.pitch})}const l=XS(It(a,0,1)),c=Math.sin(Math.PI*It(a,0,1));s=ht(this.from.yaw,this.to.yaw,l),r=ht(this.from.pitch,this.to.pitch,l)-c*this.amp*.09,o=ht(this.from.roll,this.to.roll,l),e.headShift.y-=c*Math.min(this.amp,1.6)*.012}else{this.settle+=t.dt;const a=Math.exp(-this.settle/.032)*Math.cos(this.settle*24*Math.PI*2)*.04;s=this.cur.yaw+(this.to.yaw-this.from.yaw)*a,r=this.cur.pitch+(this.to.pitch-this.from.pitch)*a,o=this.cur.roll+(this.to.roll-this.from.roll)*a}s+=He(t.t*11,11)*.0028+He(t.t*.6,12)*.008,r+=He(t.t*12,13)*.0028+He(t.t*.5,14)*.007,o+=He(t.t*.7,15)*.008,e.headYaw+=s,e.headPitch+=r,e.headRoll+=o,e.headShift.x+=Math.sin(s)*.014,e.headShift.z+=(Math.cos(s)-1)*.01-Math.max(r,0)*.018}}class YS{name="blink";t0=-10;full=!1;nextAt=1.5;constructor(t){t.on("saccade",e=>{e.amp>.6&&t.rng()<.45&&t.t-this.t0>.5&&this.start(t,!1)}),t.on("startle",()=>{this.nextAt=t.t+1.2+t.rng()})}start(t,e){this.t0=t.t,this.full=e;const[n,s]=t.species.behaviour.blinkEvery;this.nextAt=t.t+yt(t.rng,n,s)*ht(1.3,.8,t.arousal)}update(t,e){!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&this.start(t,t.rng()<ht(.3,.08,t.arousal));const n=this.full?1.7:1,s=(t.t-this.t0)/n,r=s<0?0:s<.045?ot(0,.045,s):s<.07?1:1-ot(.07,.165,s);e.nict+=r,e.lidLower+=r*(this.full?1:.3),e.lidUpper+=r*(this.full?.75:.08);const o=ot(.3,.05,t.arousal);e.lidUpper+=o*.22,e.lidLower+=o*.18}}class KS{name="ruffle";kind="puff";t0=-100;nextAt;amp=.6;last=-1e9;constructor(t){const[e,n]=t.species.behaviour.ruffleEvery;this.nextAt=yt(t.rng,e*.5,n*.6),t.on("startle",()=>{this.t0=-100,this.nextAt=Math.max(t.t+yt(t.rng,2.8,5),this.last+t.species.behaviour.ruffleEvery[0])})}trigger(t,e,n){const s=t.rng();this.kind=e??(s<.45?"puff":s<.7?"shake":"throat"),this.t0=t.t,this.last=t.t,this.amp=n??yt(t.rng,.45,.75);const[r,o]=t.species.behaviour.ruffleEvery;this.nextAt=t.t+yt(t.rng,r,o),t.emit("ruffle",{kind:this.kind})}update(t,e){!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&!t.saccading&&(t.arousal<.7?this.trigger(t):this.nextAt=t.t+1);const n=t.t-this.t0;if(n<0||n>3)return;const s=this.amp;if(this.kind==="throat"){const l=ot(0,.12,n)*(1-ot(.7,1.25,n));e.gorget+=l*.42*s,e.crest+=l*.38*s,e.addLift(.12,.14,l*.25*s),e.headShift.y+=l*.01;return}for(let l=0;l<8;l++){const c=n-l/7*.2;if(c<=0)continue;const h=ot(0,.13,c),u=1-ot(.62,1.5,c),d=c>.62?.14*Math.sin((c-.62)*13)*Math.exp(-(c-.62)*3.5):0;e.lift[l]+=s*(h*u+d)*ht(.75,1,l/7)}e.crest+=s*.25*ot(0,.1,n)*(1-ot(.5,1.1,n));const r=ot(.14,.24,n)*(1-ot(.55,.85,n)),o=(n-.14)*14*Math.PI*2,a=Math.sin(o)*r;e.bodyRoll+=a*.05*s,e.bodyYaw+=Math.cos(o)*r*.035*s,e.tailYaw+=Math.sin(o-1.2)*r*.16*s,e.tailFan+=r*.55*s+ot(0,.2,n)*(1-ot(.6,1.4,n))*.25*s;for(const l of["L","R"])e.wing[l].lift+=(r*.11+Math.abs(a)*.05)*s+ot(0,.2,n)*(1-ot(.7,1.5,n))*.06*s,e.wing[l].droop+=r*.07*s;if(e.bodyShift.y+=r*.008,this.kind==="shake"){const l=ot(.1,.2,n)*(1-ot(.5,.75,n));e.headRoll+=Math.sin(o*1.15+.8)*l*.3*s,e.headYaw+=Math.cos(o*1.15)*l*.16*s,e.nict+=l,e.lidLower+=l*.6,e.headStabil-=l*.5}}}class ZS{name="tail";pitch=new yi(6.5,.28);fan=new yi(4.5,.5);yaw=new yi(5,.4);nextAt;pumps=0;pumpAt=0;constructor(t){const[e,n]=t.species.behaviour.tailEvery;this.nextAt=yt(t.rng,e*.4,n*.5),t.on("startle",s=>{this.pitch.kick(-5*s.strength),this.fan.kick(14*s.strength)}),t.on("saccade",s=>{s.amp>.9&&this.yaw.kick(-s.dyaw*.5)})}flick(t,e=1){this.pitch.kick(-yt(t.rng,3,5.5)*e),this.fan.kick(yt(t.rng,5,11)*e),this.yaw.kick(yt(t.rng,-1.5,1.5)*e)}update(t,e){if(!t.quiet&&t.t>=this.nextAt&&t.freeze<=0){const[n,s]=t.species.behaviour.tailEvery;this.nextAt=t.t+yt(t.rng,n,s),this.pumps=t.rng()<.4?1+Math.floor(t.rng()*2):0,this.pumpAt=t.t+.16,this.flick(t)}this.pumps>0&&t.t>=this.pumpAt&&(this.pumps--,this.pumpAt=t.t+yt(t.rng,.13,.2),this.flick(t,.7)),e.tailPitch+=this.pitch.step(0,t.dt),e.tailFan+=Math.max(this.fan.step(0,t.dt),-.3),e.tailYaw+=this.yaw.step(0,t.dt)}}class $S{name="wings";t0=-100;nextAt;lead=1;amp=1;constructor(t){const[e,n]=t.species.behaviour.wingEvery;this.nextAt=yt(t.rng,e*.5,n*.6)}shuffle(t){this.t0=t.t,this.lead=t.rng()<.5?1:-1,this.amp=yt(t.rng,.7,1.2);const[e,n]=t.species.behaviour.wingEvery;this.nextAt=t.t+yt(t.rng,e,n)}update(t,e){!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&this.shuffle(t);const n=t.t-this.t0;if(n<0||n>1.2)return;for(const r of["L","R"]){const o=n-((r==="L"?1:-1)*this.lead>0?0:.07);if(o<=0)continue;const a=ot(0,.07,o)*(1-ot(.22,.6,o)),l=Math.sin(o*12*Math.PI*2)*ot(.05,.1,o)*(1-ot(.2,.42,o));e.wing[r].lift+=(a*.2+l*.06)*this.amp,e.wing[r].droop+=a*.1*this.amp}const s=ot(0,.08,n)*(1-ot(.15,.5,n));e.bodyShift.y+=s*.006,e.addLift(.5,.25,s*.12)}}class JS{constructor(t){this.mind=t}mind;name="startle";crouch=new yi(4.2,.42);t0=-100;strength=0;fire(t){const e=this.mind;this.strength=t,this.t0=e.t,e.arousal=Math.max(e.arousal,.6+.4*t),e.freeze=.45+e.rng()*.55,this.crouch.kick(-.9*t),e.emit("startle",{strength:t})}update(t,e){const n=this.crouch.step(0,t.dt);e.bodyShift.y+=n,e.bodyPitch+=-n*2.2,e.headShift.y+=n*.6;const s=t.t-this.t0;if(s<0||s>8)return;const r=this.strength,o=Math.exp(-s/1.6)*Math.min(s/.05,1);e.fluff-=.13*o*r,e.headShift.y+=.02*o*r;const a=Math.exp(-s/.09)*Math.min(s/.03,1);e.wing.L.lift+=a*.42*r,e.wing.R.lift+=a*.42*r,e.lidUpper-=.2*o,e.lidLower-=.2*o}}const vd=i=>i*i*i*(10+i*(-15+6*i)),To=.06;class jS{constructor(t,e,n,s,r,o=null){this.mind=t,this.solver=e,this.headRest=n,this.pick=s,this.swallowed=r,this.hop=o,t.on("startle",()=>{this.carried>=0&&this.swallowed(this.carried),this.carried=-1,this.release(this.mind,"idle"),this.readyAt=this.mind.t+1.5})}mind;solver;headRest;pick;swallowed;hop;name="forage";reachOut=.3;reachIn=.2;catchRadius=.05;state="idle";id=-1;t0=0;dur=.15;decideAt=0;watchUntil=0;readyAt=0;retried=!1;ignore=new Map;target=new y;w=0;wFrom=0;lean=0;yaw=0;rel=new y;focus=new y;licks=3;carried=-1;hopAt=0;moved=new y;seed(t){return t.food.find(e=>e.id===this.id)}slideFor(t){const e=this.rel.copy(t).sub(this.headRest),n=e.length(),s=Math.atan2(e.x,e.z),r=Math.asin(It(e.y/Math.max(n,1e-6),-1,1));if(Math.abs(s)>2||r<-.95||r>1.3||t.y<-.12)return null;const o=n-this.solver.billReach;return o>this.reachOut||o<-this.reachIn?null:o}inView(t){const e=this.rel.copy(t).sub(this.headRest);return Math.abs(Math.atan2(e.x,e.z))<2.2&&e.length()<2.2&&t.y>-.9}release(t,e){this.state=e,this.t0=t.t,this.wFrom=this.w,e==="idle"&&(t.focus=null,t.gazeLock=!1,this.id=-1)}begin(t,e,n){this.state=e,this.t0=t.t,this.dur=n,this.wFrom=this.w}update(t,e){const n=t.t,s=It((n-this.t0)/this.dur,0,1);let r=this.seed(t);switch(t.eating=this.state!=="idle"&&this.state!=="watch",this.state){case"idle":{if(this.w=Tn(this.w,0,22,t.dt),n<this.readyAt)break;let o=null,a=1/0;for(const l of t.food){if(!this.inView(l.pos)||(this.ignore.get(l.id)??0)>n&&this.slideFor(l.pos)===null||l.vel.lengthSq()<To*To&&this.slideFor(l.pos)===null)continue;const c=l.pos.distanceTo(this.headRest)-(this.slideFor(l.pos)!==null?1:0);c<a&&(a=c,o=l)}o&&(this.id=o.id,this.state="watch",this.decideAt=0,this.watchUntil=n+yt(t.rng,.7,1.5),t.focus=this.focus.copy(o.pos),t.focusId++,t.excite(.25));break}case"watch":{if(this.w=Tn(this.w,0,22,t.dt),!r||!this.inView(r.pos)){this.release(t,"idle");break}if(t.focus=this.focus.copy(r.pos),this.hop?.busy)break;if(this.slideFor(r.pos)===null){if(this.decideAt=0,this.hop&&t.freeze<=0&&(this.hopAt||(this.hopAt=n+yt(t.rng,.45,1.1)),n>=this.hopAt)){const o=r.pos,a=this.hop.spotFor(l=>this.slideFor(this.moved.copy(o).sub(l))!==null);if(this.hopAt=n+yt(t.rng,.5,.9),a!==null&&this.hop.go(t,a)){this.watchUntil=Math.max(this.watchUntil,n+3);break}}r.vel.lengthSq()<To*To&&(this.watchUntil=Math.min(this.watchUntil,n+.25)),n>this.watchUntil&&(this.ignore.set(r.id,n+yt(t.rng,25,45)),this.release(t,"idle"),this.readyAt=n+yt(t.rng,.3,1));break}this.hopAt=0,this.decideAt||(this.decideAt=n+yt(t.rng,.35,1.1)),n>=this.decideAt&&!t.saccading&&t.freeze<=0&&(t.gazeLock=!0,this.retried=!1,this.begin(t,"windup",yt(t.rng,.09,.13)),t.emit("strike",{id:r.id}));break}case"windup":{if(!r){this.release(t,"idle");break}const o=Math.sin(s*Math.PI*.5);if(this.rel.copy(r.pos).sub(this.headRest).normalize(),e.headShift.addScaledVector(this.rel,-.03*o),e.bodyShift.y-=.006*o,s>=1){const a=this.slideFor(r.pos)??0;this.lean=a,this.yaw=Math.atan2(r.pos.x-this.headRest.x,r.pos.z-this.headRest.z),this.begin(t,"strike",It(.13+Math.abs(a)*.2,.12,.2))}break}case"strike":{if(!r){this.begin(t,"retract",.2);break}this.target.copy(r.pos).addScaledVector(r.vel,(1-s)*this.dur),this.w=this.wFrom+(1-this.wFrom)*(1-Math.pow(1-s,3)),e.jaw+=ot(.2,.7,s)*(1-ot(.92,1,s)*.88)*.95,s>=1&&(this.solver.tip.distanceTo(r.pos)<this.catchRadius?(this.pick(r.id),this.carried=r.id,t.excite(.1),this.begin(t,"hold",yt(t.rng,.06,.1))):!this.retried&&this.slideFor(r.pos)!==null?(this.retried=!0,this.begin(t,"strike",.1)):(this.ignore.set(r.id,n+yt(t.rng,3,5)),this.begin(t,"retract",.22)));break}case"hold":this.w=1,e.jaw+=.1,s>=1&&(t.focus=null,this.licks=2,this.begin(t,"eat",this.licks*.13+.04));break;case"retract":this.w=this.wFrom*(1-vd(s)),s>=1&&(this.release(t,"idle"),this.readyAt=n+yt(t.rng,.3,.9));break;case"eat":{this.w=this.wFrom*(1-vd(It((n-this.t0)/.2,0,1)));const o=It((n-this.t0)/(this.dur-.04)*this.licks,0,this.licks),a=Math.min(Math.floor(o),this.licks-1),l=o>=this.licks?1:o-a,c=1-a/this.licks,h=1-(a+1)/this.licks,u=Math.sin(Math.PI*ot(0,.55,l));e.tongueOut+=It((c-.72)/.65*u+.04*u,0,1),e.carryAt=ht(c,h+.04,ot(.35,1,l)),e.jaw+=.12+.3*Math.sin(Math.PI*ot(0,.7,l))-.08*ot(.75,1,l),e.headPitch+=.03*Math.sin(Math.PI*l),s>=1&&this.begin(t,"swallow",yt(t.rng,.36,.44));break}case"swallow":{this.w=0,e.carryAt=.04;const o=Math.sin(Math.PI*ot(0,.55,s))*.26;e.headPitch+=o,e.headShift.y+=o*.03,e.jaw+=Math.sin(Math.PI*ot(.1,.5,s))*.45;const a=Math.sin(Math.PI*ot(.35,.95,s));e.gorget+=a*.16,e.addLift(.2,.12,a*.12),s>.18&&this.carried>=0&&(this.swallowed(this.carried),t.emit("ate",{id:this.carried}),this.carried=-1),s>=1&&(this.release(t,"idle"),this.readyAt=n+yt(t.rng,.4,1.3));break}}this.w>.001&&(e.reachTarget.copy(this.target),e.reachWeight=this.w,e.bodyPitch+=this.w*It(this.lean*.75,-.16,.24),e.bodyYaw+=this.w*this.yaw*.14,e.bodyShift.y-=this.w*.008,e.headStabil*=1-this.w)}}class QS{name="mouth";lickEvery=[14,36];singEvery=[30,80];blocked=()=>!1;flicks=[];nextLick;singFrom=-10;singFor=0;bursts=[];nextSing;pump=0;constructor(t){this.nextLick=yt(t.rng,5,14),this.nextSing=yt(t.rng,14,34),t.on("ate",()=>{t.rng()<.7&&(this.nextLick=t.t+yt(t.rng,.25,.6))}),t.on("startle",()=>{this.singFor=0,this.flicks.length=0,this.nextLick=t.t+yt(t.rng,8,16),this.nextSing=Math.max(this.nextSing,t.t+yt(t.rng,12,30))})}lick(t,e=yt(t.rng,.56,.68),n=t.rng()<.45?1:t.rng()<.6?2:3){this.flicks.length=0;let s=t.t;for(let r=0;r<n;r++)this.flicks.push({at:s,amp:r===0?e:e*yt(t.rng,.8,1.05)}),s+=yt(t.rng,.21,.3);this.nextLick=t.t+yt(t.rng,this.lickEvery[0],this.lickEvery[1])}sing(t,e=1.6){this.singFrom=t.t,this.bursts.length=0;let n=.06;for(;n<e-.2||this.bursts.length===0;){const r=3+Math.floor(t.rng()*3),o=yt(t.rng,13,16.5);this.bursts.push({at:n,notes:r,hz:o,amp:yt(t.rng,.26,.4)}),n+=r/o+(t.rng()<.25?yt(t.rng,.32,.5):yt(t.rng,.1,.22))}const s=this.bursts[this.bursts.length-1];this.singFor=s.at+s.notes/s.hz+.25,this.nextSing=t.t+this.singFor+yt(t.rng,this.singEvery[0],this.singEvery[1]),this.flicks.length=0,this.nextLick=Math.max(this.nextLick,t.t+this.singFor+yt(t.rng,1.5,5))}get singing(){return this.singFor>0}update(t,e){const n=!t.quiet&&!t.gazeLock&&!t.focus&&!t.eating&&t.freeze<=0&&!this.blocked();n&&t.t>=this.nextLick&&t.arousal<.6&&!this.singing&&this.lick(t),n&&t.t>=this.nextSing&&!this.singing&&(t.arousal<.42&&this.flicks.length===0?this.sing(t,yt(t.rng,1.1,2.4)):this.nextSing=t.t+yt(t.rng,4,9));let s=0;for(const h of this.flicks){const u=(t.t-h.at)/.19;u>=0&&u<=1&&(s=Math.max(s,h.amp*Math.sin(Math.PI*Math.pow(ot(0,1,u),.8))))}this.flicks.length&&t.t>this.flicks[this.flicks.length-1].at+.2&&(this.flicks.length=0),s>0&&(e.tongueOut+=Math.min(s,.7),e.tongueCurl+=.16*ot(.3,.6,s),e.jaw+=.02*ot(0,.3,s));let r=0,o=0,a=0;const l=t.t-this.singFrom;if(this.singFor>0)if(l>this.singFor||this.blocked())this.singFor=0;else for(const h of this.bursts){const u=l-h.at,d=h.notes/h.hz;u<0||u>d||(r=ot(0,.03,u)*(1-ot(d-.03,d,u)),o=.5-.5*Math.cos(u*h.hz*Math.PI*2),a=h.amp)}this.pump=Tn(this.pump,r,r>this.pump?30:11,t.dt);const c=this.pump;c<.002&&r===0||(e.jaw+=r*a*(.1+.9*o),e.gorget+=c*.2+r*o*.05,e.addLift(.2,.07,c*.16),e.crest-=c*.14,e.addLift(0,.07,-c*.14),e.addLift(.4,.09,-c*.3),e.breath-=c*.7,e.headPitch+=c*.035+r*o*.012,e.headShift.y-=c*.004,e.headShift.z-=c*.003,e.tailPitch-=c*.03)}}const Ao=()=>({point:new y,up:new y(0,1,0),tangent:new y(1,0,0),radius:.0405});class tb{constructor(t,e){this.mind=t,this.ground=e,t.on("startle",n=>{if(this.hold||this.phase!=="stand"||t.eating||t.rng()>.55*n.strength)return;const s=yt(t.rng,.1,.2)*(t.rng()<.5?-1:1),r=this.clampX(this.x+s);Math.abs(r-this.x)>.06&&this.go(t,r,.05)})}mind;ground;name="hop";maxHop=.35;homeAfter=[14,30];home=0;hold=!1;x=0;phase="stand";t0=0;dur=.1;x0=0;x1=0;apex=.05;from=Ao();to=Ao();here=Ao();tmp=Ao();legs=new yi(5.5,.4);lag=new y;anchor=new y;off=new y;slope=0;scale=1;placed=!1;homeAt=20;lastFood=0;get busy(){return this.phase!=="stand"}clampX(t){return It(t,this.ground.range[0],this.ground.range[1])}frame(t,e){return(this.ground.at?.(t,e)??null)||(e.point.set(t,this.ground.root.position.y,this.ground.root.position.z),e.up.set(0,1,0),e.tangent.set(1,0,0),e.radius=this.ground.restRadius),e}reseat(){this.placed=!1}spotFor(t){if(!this.ground.at)return null;const e=this.ground.range[1]-this.ground.range[0];for(let n=.1;n<=e+1e-6;n+=.05)for(const s of[1,-1]){const r=this.x+s*n;if(r<this.ground.range[0]||r>this.ground.range[1])continue;const o=this.ground.at(r,this.tmp);if(o&&t(this.off.copy(o.point).sub(this.here.point)))return this.x+s*Math.min(n,this.maxHop)}return null}place(t,e){return this.x=this.clampX(t),this.frame(this.x,this.here),this.slope=Math.atan2(this.here.tangent.y,this.here.tangent.x),this.scale=this.here.radius/this.ground.restRadius,e.copy(this.here.point),this.x}landed(){this.legs.kick(-1.1),this.follow()}follow(){this.anchor.copy(this.ground.root.position)}go(t,e,n=yt(t.rng,.07,.11)){if(this.hold||this.phase!=="stand"||(e=this.clampX(It(e,this.x-this.maxHop,this.x+this.maxHop)),Math.abs(e-this.x)<.03))return!1;this.x0=this.x,this.x1=e,this.frame(this.x0,this.from),this.frame(this.x1,this.to);const s=this.from.point.distanceTo(this.to.point);return this.apex=It(.035+s*.13,.04,.08),this.phase="crouch",this.t0=t.t,this.dur=n,t.excite(.15),!0}update(t,e){const n=this.ground.root;this.placed||(this.placed=!0,this.x=this.clampX(n.position.x),this.frame(this.x,this.here),n.position.copy(this.here.point),this.anchor.copy(n.position),this.slope=Math.atan2(this.here.tangent.y,this.here.tangent.x),this.scale=this.here.radius/this.ground.restRadius);const s=t.t,r=It((s-this.t0)/this.dur,0,1);let o=1;switch(t.food.length&&(this.lastFood=s),this.phase==="stand"&&!this.hold&&this.homeAfter[1]>0&&!t.quiet&&!t.eating&&t.freeze<=0&&Math.abs(this.x-this.home)>.12&&s-this.lastFood>4&&s>this.homeAt&&(this.go(t,this.home+(this.x-this.home)*.3),this.homeAt=s+yt(t.rng,this.homeAfter[0],this.homeAfter[1])),this.phase){case"crouch":{const l=Math.sin(r*Math.PI*.5);e.bodyShift.y-=.022*l,e.bodyPitch+=.07*l,e.wing.L.lift+=.1*l,e.wing.R.lift+=.1*l,r>=1&&(t.emit("perch",{x:this.x0,push:.45,on:!1,side:0}),this.phase="air",this.t0=s,this.dur=It(.12+this.from.point.distanceTo(this.to.point)*.38,.12,.25));break}case"air":{n.position.copy(this.from.point).lerp(this.to.point,r),n.position.y+=4*this.apex*r*(1-r),this.slope=ht(Math.atan2(this.from.tangent.y,this.from.tangent.x),Math.atan2(this.to.tangent.y,this.to.tangent.x),r),this.scale=ht(this.from.radius,this.to.radius,r)/this.ground.restRadius;const l=Math.sin(Math.PI*r);o=1-ot(0,.2,r)*(1-ot(.75,1,r)),e.bodyShift.y+=.014*(1-r)-.012*l+.008*ot(.7,1,r),e.bodyPitch+=.07*(1-r)-.04*l;const c=Math.sign(this.x1-this.x0);e.bodyRoll+=-c*.07*l,e.wing.L.lift+=.1+.3*l,e.wing.R.lift+=.1+.3*l,e.wing.L.droop+=.12*l,e.wing.R.droop+=.12*l,e.tailFan+=.5*l,e.tailPitch+=.12*l,e.fluff-=.05*l,r>=1&&(this.x=this.x1,this.frame(this.x,this.here),n.position.copy(this.here.point),this.phase="land",this.t0=s,this.dur=.28,this.legs.kick(-.75),t.emit("perch",{x:this.x1,push:.55,on:!0,side:0}));break}case"land":{const l=1-ot(0,1,r);e.wing.L.lift+=.1*l,e.wing.R.lift+=.1*l,e.tailFan+=.3*l,e.tailPitch-=.1*Math.sin(Math.PI*r)*.8,e.addLift(.55,.3,.14*Math.sin(Math.PI*ot(0,.8,r))),r>=1&&(this.phase="stand");break}}const a=this.legs.step(0,t.dt);e.bodyShift.y+=a,e.bodyPitch+=-a*1.6,this.anchor.x=Tn(this.anchor.x,n.position.x,this.phase==="air"?9:16,t.dt),this.anchor.y=Tn(this.anchor.y,n.position.y,this.phase==="air"?9:16,t.dt),this.anchor.z=Tn(this.anchor.z,n.position.z,16,t.dt),this.lag.copy(this.anchor).sub(n.position).clampLength(0,.16),e.headShift.add(this.lag),e.feetSlope=this.slope,e.feetScale=this.scale,e.grip=o,e.bodyRoll+=this.slope*.12}}function eb(i){const t=i.species.wing,e=t.hand+t.primaryLen[1]*.92,n=Vi(i.species.seed+501),s=64,r=4,o=new Uint8Array(s*r*4);for(let u=0;u<s;u++){const d=.45+.55*Math.pow(n(),2.2)+(n()<.12?.6:0);for(let f=0;f<r;f++)o.set([255,Math.min(255,d*200),255,255],(f*s+u)*4)}const a=new ha(o,s,r);a.wrapS=is,a.magFilter=a.minFilter=$e,a.needsUpdate=!0;const l=new Hn({color:new Lt(t.color).multiplyScalar(1.6),alphaMap:a,vertexColors:!0,transparent:!0,depthWrite:!1,side:Oe,opacity:0}),c=[],h=i.rest.chest.worldPos;for(const u of je){const d=En(u),f=[],m=[],_=[],p=[],g=28,M=6;for(const w of[-24,-8,8,24]){const A=f.length/3;for(let x=0;x<=g;x++){const S=x/g,F=(-98+172*S)*Tt;for(let C=0;C<=M;C++){const L=C/M,D=Math.tan(w*Tt)*L*e*(.6+.4*Math.cos((S-.5)*Math.PI*2));f.push(d*Math.cos(F)*L*e,D+.04*L,Math.sin(F)*L*e);const I=ot(.05,.4,L)*(1-ot(.8,1,L))*(.5+.9*Math.pow(Math.abs(S*2-1),2.5))*ot(0,.06,S)*(1-ot(.94,1,S));m.push(1,1,1,I*(Math.abs(w)<10?.5:.36)),_.push(S*2.2,L)}}for(let x=0;x<g;x++)for(let S=0;S<M;S++){const F=A+x*(M+1)+S,C=F+M+1;p.push(F,C,F+1,C,C+1,F+1)}}const b=new Se;b.setAttribute("position",new jt(f,3)),b.setAttribute("color",new jt(m,4)),b.setAttribute("uv",new jt(_,2)),b.setIndex(p);const v=new de(b,l);v.name=`bird.wingBlur.${u}`,v.frustumCulled=!1,v.visible=!1,v.renderOrder=2,v.position.copy(i.rest[`shoulder.${u}`].worldPos).sub(h),i.bones.chest.add(v),c.push(v)}return{set(u,d=.6){const f=u>.004;for(const m of c)m.visible=f,m.rotation.set(d+(Math.random()-.5)*.16,(Math.random()-.5)*.2,(Math.random()-.5)*.12);f&&(l.opacity=u*(.8+.45*Math.random()),a.offset.x=Math.random())},dispose(){for(const u of c)u.removeFromParent(),u.geometry.dispose();l.dispose(),a.dispose()}}}const ws=2;class nb{constructor(t,e,n,s,r,o){this.mind=t,this.rig=e,this.root=n,this.hop=s,this.ruffle=r,this.tail=o,this.nextAt=yt(t.rng,this.every[0],this.every[1]),this.blur=eb(e)}mind;rig;root;hop;ruffle;tail;name="flee";awayFor=[2,5];every=[70,200];phase="idle";t0=0;dur=.4;side=1;from=new y;out=new y;hover=new y;landAt=new y;far=new y;landX=0;nextAt;blur;shakeAt=-1;get active(){return this.phase!=="idle"}get perched(){return this.phase==="idle"||this.phase==="ready"||this.phase==="land"}get gone(){return this.phase==="away"}start(){const t=this.mind;return this.active||this.hop.busy?!1:(this.hop.hold=!0,t.emit("startle",{strength:1}),t.arousal=1,t.freeze=0,this.phase="ready",this.t0=t.t,this.dur=yt(t.rng,.3,.48),this.side=t.rng()<.5?1:-1,this.nextAt=t.t+yt(t.rng,this.every[0],this.every[1]),!0)}go(t,e){this.phase=t,this.t0=this.mind.t,this.dur=e}update(t,e){if(this.phase==="idle"&&(!t.quiet&&t.t>=this.nextAt&&!t.eating&&t.freeze<=0&&this.start(),this.shakeAt>0&&t.t>=this.shakeAt&&(this.shakeAt=-1,this.ruffle.trigger(t,"shake",.7)),this.phase==="idle"))return;const n=this.root,s=It((t.t-this.t0)/this.dur,0,1);let r=0,o=0,a=.6;switch(t.gazeLock=this.phase!=="land",this.phase){case"ready":{const l=Math.sin(s*Math.PI*.5);e.bodyShift.y-=.04*l,e.bodyShift.z+=.02*l,e.bodyPitch+=.34*l,e.headShift.y-=.012*l,e.fluff-=.12*l,e.tailFan+=.35*l,e.tailPitch-=.12*l,r=.42*ot(0,.8,s);const c=Math.sin(t.t*46*Math.PI)*.05*l;for(const h of["L","R"])e.wing[h].lift+=.25*l+c,e.wing[h].droop+=.08*l;s>=1&&(this.from.copy(n.position),this.out.set(this.side*.55,1,.12).normalize(),t.emit("perch",{x:this.from.x,push:1,on:!1,side:.4}),this.go("takeoff",.27));break}case"takeoff":{n.position.copy(this.from).addScaledVector(this.out,.35*s+7.5*s*s*s),r=ws,o=ot(0,.12,s),e.grip=1-ot(0,.15,s),e.bodyShift.y+=.03*ot(0,.3,s),e.bodyPitch+=ht(.34,.1,ot(0,.6,s)),a=.95,e.bodyRoll+=-this.side*.25*s,e.tailFan+=.8,e.tailPitch-=.25,e.fluff-=.14,s>=1&&(n.visible=!1,this.go("away",yt(t.rng,this.awayFor[0],this.awayFor[1])));break}case"away":{r=ws,s>=1&&(this.landX=this.hop.home+yt(t.rng,-.12,.12),this.landX=this.hop.place(this.landX,this.landAt),this.hover.copy(this.landAt),this.hover.y+=.2,this.far.copy(this.hover).add(new y(-this.side*yt(t.rng,3.2,4.4),yt(t.rng,1.8,3),yt(t.rng,-1.2,-.3))),n.position.copy(this.far),n.visible=!0,this.go("approach",yt(t.rng,.42,.55)));break}case"approach":{const l=1-Math.pow(1-s,3);n.position.copy(this.far).lerp(this.hover,l),r=ws,o=1,e.grip=0,e.bodyPitch+=ht(.5,-.32,ot(.35,1,s)),a=ht(.9,.35,ot(.35,1,s)),e.bodyRoll+=this.side*.3*(1-l),e.tailFan+=ht(.3,1,ot(.4,1,s)),e.tailPitch-=.3*ot(.4,1,s),e.fluff-=.1,s>=1&&this.go("brake",yt(t.rng,.45,.62));break}case"brake":{const l=ot(.6,1,s);a=.35,n.position.copy(this.hover).lerp(this.landAt,l),n.position.y+=.015*Math.sin(t.t*31)*(1-l),n.position.x+=.008*Math.sin(t.t*23)*(1-l),r=ws,o=1,e.grip=ot(.8,1,s)*.5,e.bodyPitch-=ht(.32,.05,l),e.bodyShift.y+=.02*(1-l),e.tailFan+=1,e.tailPitch-=ht(.3,.1,l),s>=1&&(n.position.copy(this.landAt),this.hop.landed(),t.emit("perch",{x:this.landAt.x,push:.85,on:!0,side:yt(t.rng,-1,1)}),this.tail.flick(t,1.2),this.go("land",.5));break}case"land":{n.position.copy(this.landAt),r=s<.12?ws:1-ot(.12,.75,s),o=1-ot(0,.14,s),e.grip=.5+.5*ot(0,.25,s),e.tailFan+=.8*(1-ot(0,.8,s));for(const l of["L","R"])e.wing[l].lift+=.3*Math.sin(Math.PI*ot(.5,1,s));s>=1&&(this.phase="idle",this.hop.hold=!1,t.gazeLock=!1,this.shakeAt=t.t+yt(t.rng,.25,.6),t.freeze=.3);break}}if(r===ws&&o>.9&&Math.random()<.3){r=1,o*=.55;const l=Math.random()<.5;for(const c of["L","R"])e.wing[c].sweep=l?yt(Math.random,.7,1):-yt(Math.random,.9,1.25),e.wing[c].raise=(l?-.1:.45)+a*.4}e.wing.L.spread=e.wing.R.spread=r,this.blur.set(o,a),this.hop.follow()}dispose(){this.blur.dispose()}}const ib=[[.44,-.5],[.52,-.25],[.38,-.65]];class sb{constructor(t,e,n){this.billReach=n,this.nextAt=yt(t.rng,this.every[0]*.6,this.every[1]*.7);const s={p:new y,n:new y,t:new y};for(const r of["L","R"])for(const[o,a]of ib){const l=e.loft.wingAt(o,a,En(r));e.loft.surface(l.s,l.ang,s),this.spots[r].push(s.p.clone().addScaledVector(s.n,this.tipOff))}this.coord=e.loft.bodyCoord(3.4),this.hips=e.rest.hips.worldPos.clone(),this.headRest=e.rest.head.worldPos.clone(),t.on("startle",()=>{this.active&&(t.gazeLock=!1),this.active=!1})}billReach;name="preen";auto=!1;every=[22,55];blocked=()=>!1;onDone=null;active=!1;wingOut=.44;wingTwist=.42;billDir=new y(.12,-.86,-.5).normalize();billOut=new y(.3,-.92,.05).normalize();tipOff=.03;bodyYaw=.22;bodyRoll=.1;bodyPitch=.06;headRoll=1.2;t0=0;dur=4;side="L";nextAt;coord;hips;headRest;spots={L:[],R:[]};spot=new y;seed=0;tBreak=0;order=[0,1,2];q=new ge;e=new Vn;d=new y;a=new y;b=new y;start(t,e){return this.active||this.blocked()||t.eating?!1:(this.active=!0,this.t0=t.t,this.dur=yt(t.rng,4,5),this.side=e??(t.rng()<.5?"L":"R"),this.seed=t.rng()*100,this.tBreak=yt(t.rng,.42,.58),this.order=t.rng()<.5?[0,1,2]:[2,0,1],this.spot.copy(this.spots[this.side][this.order[0]]),this.nextAt=t.t+this.dur+yt(t.rng,this.every[0],this.every[1]),!0)}update(t,e){if(!this.active&&(this.auto&&!t.quiet&&t.t>=this.nextAt&&(t.arousal<.5&&t.freeze<=0&&!t.focus&&!t.saccading?this.start(t):this.nextAt=t.t+2),!this.active))return;const n=t.t-this.t0,s=this.dur;if(n>=s||this.blocked()){this.active=!1,t.gazeLock=!1,n>=s&&this.onDone?.(t);return}t.gazeLock=!0;const r=En(this.side),o=(R,O)=>ot(R,O,n),a=s-1.3,l=o(0,.42)*(1-o(s-.6,s-.1)),c=o(.12,.7)*(1-o(s-.95,s-.25)),h=o(.22,.8)*(1-o(a+.2,a+.9)),u=o(.5,.95)*(1-o(a+.18,a+.65)),d=.95,f=ht(d+.3,a,this.tBreak);let m=o(d-.1,d+.22)*(1-o(a,a+.24));m*=1-.75*o(f-.16,f)*(1-o(f+.08,f+.3));const _=ht(f,a,.55),p=this.order[n<f?0:n<_?1:2];this.spot.lerp(this.spots[this.side][p],1-Math.exp(-t.dt*(n<f+.3?14:7)));const g=ot(.8,1,m),M=n*9.5*Math.PI*2+this.seed,b=ot(-.15,.35,Math.sin(n*5.1+this.seed)+.6*Math.sin(n*2.3+this.seed*1.7)),v=Math.sin(M)*g*b,w=Math.sin(M*.5+1.3)*g*b,A=r*this.bodyYaw*c,x=r*this.bodyRoll*c,S=this.bodyPitch*c;e.bodyYaw+=A,e.bodyRoll+=x,e.bodyPitch+=S,e.bodyShift.x+=r*.012*c,e.tailYaw+=-r*.14*c,e.tailFan+=.12*c,this.e.set(e.bodyPitch,e.bodyYaw,e.bodyRoll,"YXZ"),this.q.setFromEuler(this.e);const F=R=>R.sub(this.hips).applyQuaternion(this.q).add(this.hips).add(e.bodyShift),C=e.wing[this.side];C.out+=l*this.wingOut+v*.012+.03*g*Math.sin(n*3.1+this.seed),C.twist+=l*this.wingTwist+w*.015,C.lift+=l*.05,e.wing[this.side==="L"?"R":"L"].lift+=.05*c;const L=this.d.copy(this.billDir);L.x*=r;const D=this.a.copy(this.spot).addScaledVector(L,-this.billReach);this.b.copy(this.billOut),this.b.x*=r,L.lerp(this.b,1-m).normalize(),D.addScaledVector(L,this.billReach+v*.014),D.z+=w*.006,D.y+=w*.005,F(D),L.applyQuaternion(this.q),e.reachTarget.copy(D),e.reachDir.copy(L),e.reachPin=1,e.reachRoll=r*(this.headRoll+.05*w),e.reachWeight=u,e.headYaw=ht(e.headYaw,r*100*Tt+e.bodyYaw,h),e.headPitch=ht(e.headPitch,-52*Tt,h),e.headRoll=ht(e.headRoll,r*.15,h);const I=this.b.copy(this.spot).addScaledVector(this.d.copy(this.billDir).setX(this.billDir.x*r),-this.billReach);F(I).sub(this.headRest),e.headShift.addScaledVector(I,h*.8),e.headStabil=ht(e.headStabil,.3,h),e.jaw+=(.1+.16*(.5+.5*Math.sin(M+.6)))*g*b,e.nict+=.45*g,e.lidLower+=.3*g,e.lidUpper+=.15*g,e.addLift(this.coord,.09,g*(.08+.04*Math.abs(v))),e.fluff+=.04*c}}function rb(i={}){const t=i.species??ep,e=new an;e.name="bird";const n=yS(t);e.add(n.rootBone);const s=US(n),{material:r,uniforms:o}=OS(),a=new jn(s.contour,r);a.name="bird.contour";const l=new jn(s.flight,r);l.name="bird.flight";const c=new jn(s.fuzz,r);c.name="bird.fuzz",c.frustumCulled=!1,c.bind(n.skeleton,new Vt),c.receiveShadow=!0;const h=kS(o);for(const N of[a,l])N.customDepthMaterial=h,N.castShadow=!0,N.frustumCulled=!1,N.bind(n.skeleton,new Vt),N.receiveShadow=!0;const u=BS(n);e.add(a,l,c,...u.meshes);const d=new hp,f=HS(n,o),m=new GS(t,i.seed??t.seed),_=new JS(m),p={root:e,at:null,range:[0,0],restRadius:t.legs.perchRadius},g=new tb(m,p),M=new jS(m,f,n.rest.head.worldPos.clone(),N=>U.onPick?.(N),N=>U.onSwallow?.(N),g),b=new QS(m),v=new KS(m),w=new ZS(m),A=new nb(m,n,e,g,v,w),x=new $S(m),S=new sb(m,n,f.billReach);b.blocked=()=>A.active||g.busy||S.active;const F=()=>b.blocked()||M.state!=="idle";S.blocked=()=>A.active||g.busy||m.eating||M.state!=="idle",S.onDone=N=>{x.shuffle(N),N.rng()<.5&&v.trigger(N,"puff",.35)};const C=[new VS(m),new WS,new qS(m),new YS(m),v,w,x,M,b,S,g,_,A];let L=[];const D=[],I=n.rest.head.worldPos.clone(),R=new y,O=new Vt;let k=null;const U={root:e,species:t,rig:n,pose:d,mind:m,layers:C,layer:N=>{const G=C.find(W=>W.name===N);if(!G)throw new Error(`no layer ${N}`);return G},plumage:o,feathers:{contour:a,flight:l,fuzz:c},headPosition:N=>n.bones.head.getWorldPosition(N),onPose:null,flee:()=>A.start(),preen:N=>S.start(m,N),get preening(){return S.active},get fleeing(){return A.active},get away(){return A.gone},get perched(){return A.perched},sing:N=>!F()&&(b.sing(m,N),!0),get singing(){return b.singing},lick:(N,G)=>!F()&&(b.lick(m,N,G),!0),hopTo:N=>!F()&&g.go(m,N),hopBy:N=>U.hopTo(g.x+N),get busy(){return F()},ruffle:(N,G)=>v.trigger(m,N,G),update(N){e.updateWorldMatrix(!0,!1),O.copy(e.matrixWorld).invert(),m.attention=k?R.copy(k).applyMatrix4(O):null,m.food.length=0;for(let G=0;G<(A.active||S.active?0:L.length);G++){const W=D[G]??={id:0,pos:new y,vel:new y};W.id=L[G].id,W.pos.copy(L[G].position).applyMatrix4(O),W.vel.copy(L[G].velocity).transformDirection(O).multiplyScalar(L[G].velocity.length()),m.food.push(W)}m.step(N,I),d.reset();for(const G of C)G.update(m,d);U.onPose?.(d,m),f(d)},setAttention(N){k=N},setFood(N){L=N},setPerch(N,G){p.at=N,p.range=G,g.reseat()},onPick:null,onSwallow:null,billTip(N){return N.copy(f.carry).applyMatrix4(e.matrixWorld)},startle(N=1){A.active||(_.fire(Math.min(Math.max(N,0),1)),N>=.9&&!m.quiet&&m.rng()<.22&&A.start())},dispose(){s.contour.dispose(),s.flight.dispose(),s.fuzz.dispose(),r.dispose(),h.dispose(),A.dispose(),u.dispose(),n.skeleton.dispose(),X?.()}},X=ob(U);return U.update(0),U}function ob(i){if(typeof window>"u")return null;const t=new URLSearchParams(window.location.search);window.__bird=i;const e=m=>t.has(m)?Number(t.get(m)):null,n={front:[0,22,0],profile:[88,16,0],up:[10,40,8],back:[-110,10,0],three:[38,20,-4]},s=t.get("pose");s&&n[s]&&(i.mind.pinGaze=n[s]);const r=t.get("gaze");if(r){const[m=0,_=0,p=0]=r.split(",").map(Number);i.mind.pinGaze=[m,_,p]}if(t.has("quiet")&&(i.mind.quiet=!0),t.has("sing")){const m=i.onPose;let _=1;i.onPose=(p,g)=>{m?.(p,g),g.t>_&&!i.singing&&i.sing(1.8)&&(_=g.t+4)}}const o=e("jaw"),a=e("tongue"),l=e("arousal"),c=e("fluff"),h=e("spread"),u=e("fan"),d=e("blink");if(l!==null||c!==null||h!==null||u!==null||d!==null||o!==null||a!==null){const m=i.onPose;i.onPose=(_,p)=>{m?.(_,p),o!==null&&(_.jaw=o),a!==null&&(_.tongueOut=a),l!==null&&(p.arousal=p.baseline=l),c!==null&&(_.fluff=c),h!==null&&(_.wing.L.spread=_.wing.R.spread=h),u!==null&&(_.tailFan=u),d!==null&&(_.nict=_.lidLower=_.lidUpper=d)}}t.has("nofuzz")&&i.root.traverse(m=>m.name==="bird.fuzz"&&(m.visible=!1)),t.has("noflash")&&(i.plumage.uFlash.value=i.plumage.uGlint.value=0),t.has("skin")&&i.root.traverse(m=>m.name.match(/contour|flight|fuzz/)&&(m.visible=!1)),t.has("wire")&&i.root.traverse(m=>{const _=m.material;m.name==="bird.skin"&&_&&(_.wireframe=!0,_.color.set(16777215),_.emissive.set(8947848))});let f=null;return t.has("bones")&&(f=new sg(i.rig.rootBone),f.material.depthTest=!1,f.renderOrder=10,i.root.add(f)),()=>{f?.dispose()}}const bc=[{name:"Purple-throated mountain-gem",gorget:[0,1,1],crown:[0,1,1],body:[0,1,1],sheen:[0,1,1]},{name:"Ruby-throated",gorget:[102,1.3,.78],crown:[-45,.95,.9],body:[170,.55,1.05],sheen:[0,.08,1.9]},{name:"Anna's",gorget:[55,1.05,1.1],crown:[150,1.05,1.05],body:[175,.5,1.1],sheen:[150,.4,1]},{name:"Sapphire-throated",gorget:[-28,1.3,.6],crown:[105,1,1],body:[150,.75,1],sheen:[32,1.15,1]},{name:"Fiery-throated",gorget:[116,1.25,.82],crown:[55,1,.95],body:[185,.7,.95],sheen:[-92,1.2,1.15]}],mi=[.2126,.7152,.0722];function Ro([i,t,e],n=new Kt){const s=Qe.degToRad(i),r=Math.cos(s),o=Math.sin(s),a=1/3,l=Math.sqrt(a),c=new Kt().set(r+a*(1-r),a*(1-r)-l*o,a*(1-r)+l*o,a*(1-r)+l*o,r+a*(1-r),a*(1-r)-l*o,a*(1-r)-l*o,a*(1-r)+l*o,r+a*(1-r)),h=1-t,u=new Kt().set(mi[0]*h+t,mi[1]*h,mi[2]*h,mi[0]*h,mi[1]*h+t,mi[2]*h,mi[0]*h,mi[1]*h,mi[2]*h+t);return n.multiplyMatrices(u,c).multiplyScalar(e)}function up(i){return[Ro(i.gorget),Ro(i.crown),Ro(i.body),Ro(i.sheen)]}const or=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,uh=`
float lensCoc(float invZ, float focus, float aperture, float maxCoc) {
  // a real lens gets shallower up close; scale that back so a macro look at
  // the eye isn't a smear (blur grows with distance from focus, not 1/f^2)
  float k = focus / 3.3;
  return min(aperture * abs(1.0 / focus - invZ) * k, maxCoc);
}
`,ab=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform float uNear, uFar;
uniform float uFocus;    // view-space distance in focus
uniform float uAperture; // CoC in px for 1/z difference of 1
uniform float uFarCoc;   // px for the sky sphere / cleared depth

void main() {
  float d = texture2D(tDepth, vUv).x;
  float invZ;
  if (d >= 0.99999) {
    // the sky: the 1/z, past infinity, whose blur circle is uFarCoc
    invZ = max(1.0 / uFocus - uFarCoc * 3.3 / (max(uAperture, 1e-3) * uFocus), -1e4);
  } else {
    // perspective depth → 1 / positive view distance
    float z = d * 2.0 - 1.0;
    invZ = (uFar + uNear - z * (uFar - uNear)) / (2.0 * uNear * uFar);
  }
  // NaNs go through as they are: the gather drops them
  gl_FragColor = vec4(texture2D(tColor, vUv).rgb, invZ);
}
`,lb=`
precision highp float;
uniform sampler2D tPack;
uniform int uTile; // device px
uniform float uFocus, uAperture, uMaxCoc;
${uh}
void main() {
  ivec2 last = textureSize(tPack, 0) - 1;
  ivec2 base = ivec2(gl_FragCoord.xy) * uTile;
  // the CoC grows with |1/focus - 1/z|: the tile's two ends of 1/z are enough
  float lo = 1e9, hi = -1e9;
  for (int y = 0; y < uTile; y++) {
    for (int x = 0; x < uTile; x++) {
      float invZ = texelFetch(tPack, min(base + ivec2(x, y), last), 0).a;
      lo = min(lo, invZ);
      hi = max(hi, invZ);
    }
  }
  gl_FragColor = vec4(max(lensCoc(lo, uFocus, uAperture, uMaxCoc), lensCoc(hi, uFocus, uAperture, uMaxCoc)));
}
`,cb=`
precision highp float;
uniform sampler2D tTile;
void main() {
  ivec2 last = textureSize(tTile, 0) - 1;
  ivec2 p = ivec2(gl_FragCoord.xy);
  float m = 0.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) m = max(m, texelFetch(tTile, clamp(p + ivec2(x, y), ivec2(0), last), 0).r);
  }
  gl_FragColor = vec4(m);
}
`,dp=`
uniform sampler2D tPack; // rgb colour, a = 1 / view distance
uniform sampler2D tTile; // biggest CoC near here
uniform int uTile;
uniform vec2 uTexel;     // dpr / size: CoC numbers are in CSS px
uniform vec2 uSpiral[TAPS]; // (cos, sin) of i * golden angle
uniform float uFocus;
uniform float uAperture;
uniform float uMaxCoc;   // px
${uh}
const int MIN_TAPS = 8;
const float FULL = 48.0; // the look was set with 48 taps: fewer each weigh more

// p0: the pack's texel at uv, c0: its CoC, seed: a pixel's own two numbers
vec3 gather(vec2 uv, vec4 p0, float c0, vec2 seed) {
  vec3 acc = p0.rgb;
  if (any(isnan(acc)) || any(isinf(acc))) acc = vec3(0.0);
  float wsum = 1.0;
  // the full reach: big enough to catch blurry foreground spilling over a sharp pixel
  float R0 = max(c0, uMaxCoc * 0.5);
  // nothing near blurs further than the tile says (+1: the weight's soft edge),
  // so look no further, with as many taps as keeps them as dense as on the full
  // disc. Even in focus a few stay: the full disc's innermost taps soften the
  // picture a little, and it should look the same.
  float R = min(R0, texelFetch(tTile, ivec2(uv * vec2(textureSize(tPack, 0))) / uTile, 0).r + 1.0);
  float area = (R * R) / (R0 * R0);
  int taps = clamp(int(ceil(float(TAPS) * area)), MIN_TAPS, TAPS);
  float dense = FULL * area / float(taps);
  // rotate the spiral per pixel so a hot speck blurs to a soft disc, not a ring of dots
  float rot = fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831853;
  mat2 spin = mat2(cos(rot), sin(rot), -sin(rot), cos(rot));
  float jr = fract(sin(dot(seed, vec2(39.3468, 11.135))) * 24634.6345);
  for (int i = 1; i < taps; i++) {
    float fi = float(i);
    float r = sqrt((fi - jr) / float(taps)) * R;
    vec4 p = texture2D(tPack, uv + spin * uSpiral[i] * r * uTexel);
    float ci = lensCoc(p.a, uFocus, uAperture, uMaxCoc);
    // a tap behind us can't blur over us further than our own blur
    if (p.a * 1.02 < p0.a) ci = min(ci, c0);
    float w = smoothstep(r - 1.0, r + 1.0, ci) * dense;
    vec3 s = p.rgb;
    // one NaN pixel would smear into a dotted disc: drop it
    if (any(isnan(s)) || any(isinf(s))) continue;
    s = min(s, vec3(32.0));
    // out-of-focus highlights bloom into discs a little
    w *= 1.0 + 0.25 * smoothstep(0.6, 1.6, dot(s, vec3(0.333)));
    acc += s * w;
    wsum += w;
  }
  return acc / wsum;
}
`,hb=`
precision highp float;
${dp}
void main() {
  vec2 size = vec2(textureSize(tPack, 0));
  vec2 uv = (min(floor(gl_FragCoord.xy) * 2.0 + 1.0, size - 1.0) + 0.5) / size;
  vec4 p0 = texture2D(tPack, uv);
  float c0 = lensCoc(p0.a, uFocus, uAperture, uMaxCoc);
  gl_FragColor = vec4(gather(uv, p0, c0, gl_FragCoord.xy), c0);
}
`,ub=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tDof;  // half size: blurred colour, a = the CoC it was blurred by
uniform float uDof;      // 0 with the lens shut
${dp}
uniform float uExposure;
uniform vec3 uWhite;     // white balance multiplier (linear)
uniform vec3 uLift;      // display space
uniform vec3 uGamma;
uniform vec3 uGain;
uniform float uSat;
uniform float uContrast;
uniform float uVignette;
uniform float uGrain;
uniform float uTime;
uniform vec2 uRes;
uniform sampler2D tWire;  // the loading drawing: ink where alpha
uniform float uReveal;   // 0 = the drawing on millimetre paper, 1 = the picture
uniform float uDpr;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

// Half size blur is fine where the picture is blurry anyway. Near focus (the
// bird, its feathers) the gather runs here, at full size, as it always did.
const float NEAR = 2.0; // CoC px: below, all full size
const float FAR = 4.0;  // above, all half size
vec3 lens() {
  vec4 p0 = texture2D(tPack, vUv);
  float c0 = lensCoc(p0.a, uFocus, uAperture, uMaxCoc);
  vec3 sharp = vec3(0.0);
  if (c0 < FAR) {
    sharp = gather(vUv, p0, c0, gl_FragCoord.xy);
    if (c0 <= NEAR) return sharp;
  }
  // the four half size texels around, each by how close its sharpness is to
  // ours: a blurry background doesn't take the bird's crisp edge in
  ivec2 last = textureSize(tDof, 0) - 1;
  vec2 q = gl_FragCoord.xy * 0.5 - 0.75; // a texel stands for the odd pixel of its four
  ivec2 i = ivec2(floor(q));
  vec2 f = q - floor(q);
  vec4 soft = vec4(0.0);
  for (int k = 0; k < 4; k++) {
    ivec2 o = ivec2(k & 1, k >> 1);
    vec4 t = texelFetch(tDof, clamp(i + o, ivec2(0), last), 0);
    float d = min(t.a, FAR) - min(c0, FAR); // past FAR blurry is blurry: plain bilinear
    vec2 b = mix(1.0 - f, f, vec2(o));
    soft += vec4(t.rgb, 1.0) * (b.x * b.y + 0.01) / (0.25 + d * d);
  }
  return mix(sharp, soft.rgb / soft.a, smoothstep(NEAR, FAR, c0));
}

void main() {
  vec3 c;
  if (uDof > 0.0) {
    c = lens();
  } else {
    c = texture2D(tColor, vUv).rgb;
    // the gather drops NaNs; with the lens shut this is the first to see them
    if (any(isnan(c)) || any(isinf(c))) c = vec3(0.0);
  }
  c *= uExposure * uWhite;
  c = toneMapping(c);
  c = linearToOutputTexel(vec4(c, 1.0)).rgb;
  // lift / gamma / gain in display space
  c = uGain * (c + uLift * (1.0 - c));
  c = pow(max(c, 0.0), 1.0 / uGamma);
  // soft contrast around mid grey
  c = mix(vec3(0.5), c, uContrast);
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(vec3(l), c, uSat);
  // vignette
  vec2 q = vUv - 0.5;
  q.x *= uRes.x / uRes.y;
  c *= 1.0 - uVignette * smoothstep(0.35, 1.05, length(q));
  // grain, luminance-weighted, a touch stronger in the mids
  float g = hash(vUv * uRes + fract(uTime) * 91.7) - 0.5;
  c += g * uGrain * (0.4 + 0.6 * (1.0 - abs(l - 0.5) * 2.0));
  c = clamp(c, 0.0, 1.0);
  if (uReveal < 1.0) {
    // millimetre paper, in CSS px from the top left so it lines up with the page's own
    vec2 px = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr;
    float line = 0.0;
    vec3 lines = vec3(1.0 / 5.0, 1.0 / 25.0, 1.0 / 50.0);
    vec3 alpha = vec3(0.12, 0.22, 0.35);
    for (int i = 0; i < 3; i++) {
      vec2 f = fract(px * lines[i]);
      float on = max(step(f.x, lines[i] * 1.0), step(f.y, lines[i] * 1.0));
      line = max(line, on * alpha[i]);
    }
    vec3 paper = mix(vec3(0.945, 0.941, 0.910), vec3(0.435, 0.561, 0.416), line);
    float ink = texture2D(tWire, vUv).a;
    paper = mix(paper, vec3(0.17, 0.23, 0.17), ink * 0.85);
    c = mix(paper, c, uReveal);
  }
  gl_FragColor = vec4(c, 1.0);
}
`,db=8,ml=Wi?24:48;function fb(i,t){const e=new rs(1,1);e.type=Gn;const n=new on(1,1,{type:xn,samples:t.samples,depthTexture:e,depthBuffer:!0});n.texture.colorSpace=vn;const s=new on(1,1,{type:xn,depthBuffer:!1}),r={type:xn,depthBuffer:!1,minFilter:Ne,magFilter:Ne},o=new on(1,1,r),a=new on(1,1,r),l=new on(1,1,{type:xn,depthBuffer:!1,minFilter:Ne,magFilter:Ne}),c=new on(1,1,{samples:t.samples}),h=new Lt,u=new de(new ls(2,2));u.frustumCulled=!1;const d=new $c;d.add(u);const f=new ma(-1,1,1,-1,0,1),m={uFocus:{value:3.3},uAperture:{value:85},uMaxCoc:{value:14}},_=new _n({vertexShader:or,fragmentShader:ab,uniforms:{tColor:{value:n.texture},tDepth:{value:e},uNear:{value:.1},uFar:{value:100},uFarCoc:{value:6},uFocus:m.uFocus,uAperture:m.uAperture},depthTest:!1,depthWrite:!1,toneMapped:!1}),p={value:16},g=new _n({vertexShader:or,fragmentShader:lb,uniforms:{tPack:{value:s.texture},uTile:p,...m},depthTest:!1,depthWrite:!1,toneMapped:!1}),M=new _n({vertexShader:or,fragmentShader:cb,uniforms:{tTile:{value:o.texture}},depthTest:!1,depthWrite:!1,toneMapped:!1}),b={tPack:{value:s.texture},tTile:{value:a.texture},uTile:p,uTexel:{value:new Dt},uSpiral:{value:Array.from({length:ml},(L,D)=>new Dt(Math.cos(D*2.39996323),Math.sin(D*2.39996323)))},...m},v=new _n({vertexShader:or,fragmentShader:hb,uniforms:b,defines:{TAPS:ml},depthTest:!1,depthWrite:!1,toneMapped:!1}),w=new _n({vertexShader:or,fragmentShader:ub,uniforms:{tColor:{value:n.texture},tDof:{value:l.texture},uDof:{value:1},...b,uExposure:{value:1},uWhite:{value:new y(1,1,1)},uLift:{value:new y(0,0,0)},uGamma:{value:new y(1,1,1)},uGain:{value:new y(1,1,1)},uSat:{value:1},uContrast:{value:1},uVignette:{value:.2},uGrain:{value:.025},uTime:{value:0},uRes:{value:new Dt(1,1)},tWire:{value:c.texture},uReveal:{value:1},uDpr:{value:1}},depthTest:!1,depthWrite:!1,defines:{TAPS:ml},toneMapped:!0}),A=[[_,s],[g,o],[M,a],[v,l]];function x(L,D){if(i.setRenderTarget(n),i.render(L,D),w.uniforms.uDof.value=m.uAperture.value>0?1:0,!!w.uniforms.uDof.value)for(const[I,R]of A)u.material=I,i.setRenderTarget(R),i.render(d,f)}const S=new y(0,.9,0),F=new y;let C=3.3;return{dof:v.uniforms,grade:w.uniforms,endDrawing(){c.dispose(),w.uniforms.tWire.value=null},compile(L){const D=i.getRenderTarget();i.setRenderTarget(n);const I=L();for(const[R,O]of A)i.setRenderTarget(O),u.material=R,I.push(i.compileAsync(u,f,d));return u.material=w,i.setRenderTarget(D),Promise.all(I)},prerender(L,D){const I=i.getRenderTarget();x(L,D),u.material=w,i.setRenderTarget(I)},setToneMapping(L){i.toneMapping=L,w.needsUpdate=!0},focusOn(L){S.copy(L)},setSize(L,D,I){const R=Math.floor(L*I),O=Math.floor(D*I);n.setSize(R,O),s.setSize(R,O),p.value=Math.ceil(db*I),o.setSize(Math.ceil(R/p.value),Math.ceil(O/p.value)),a.setSize(o.width,o.height),l.setSize(Math.ceil(R/2),Math.ceil(O/2)),c.setSize(R,O),w.uniforms.uDpr.value=I,b.uTexel.value.set(I/R,I/O),w.uniforms.uRes.value.set(R,O)},render(L,D,I,R){if(R){w.uniforms.tWire.value=c.texture,i.getClearColor(h);const O=i.getClearAlpha();i.setRenderTarget(c),i.setClearColor(0,0),i.clear(),R(),i.setClearColor(h,O)}F.copy(S).applyMatrix4(D.matrixWorldInverse),C+=(-F.z-C)*.15,m.uFocus.value=Math.max(C,.1),_.uniforms.uNear.value=D.near,_.uniforms.uFar.value=D.far,w.uniforms.uTime.value=I,w.uniforms.uDof.value=0,w.uniforms.uReveal.value>0&&x(L,D),u.material=w,i.setRenderTarget(null),i.render(d,f)}}}const pb=6,mb=.038,yd=44;function gb(){const i=[],t=new y(0,.03,0);for(let r=0;r<yd;r++){const o=r/yd*Math.PI*2+Math.sin(r*12.7)*.05,a=.35+.12*Math.sin(r*3.1),l=mb*(.9+.15*Math.sin(r*7.3)),c=new y(Math.cos(o)*l,t.y+l*a,Math.sin(o)*l);i.push(t.x,t.y,t.z,c.x,c.y,c.z);for(const h of[.6,.78,.92]){const u=t.clone().lerp(c,h),d=new y(-Math.sin(o),.3,Math.cos(o)).multiplyScalar(l*.07);i.push(u.x,u.y,u.z,u.x+d.x,u.y+d.y,u.z+d.z),i.push(u.x,u.y,u.z,u.x-d.x,u.y+d.y,u.z-d.z)}}const e=new Se;e.setAttribute("position",new jt(i,3));const n=new fa(8e-4,.0011,.03,5);n.translate(0,.015,0);const s=new Gi(1,10,8);return s.scale(.0035,.01,.0035),s.translate(0,-.007,0),{fibres:e,beak:n,body:s}}function _b(i){const t=gb(),e=new da({color:15921382,transparent:!0,opacity:.75,depthWrite:!1}),n=new fn({color:13617332,roughness:.7}),s=new fn({color:3811868,roughness:.8}),r=[],o=new y,a=[],l=new y,c=new y,h=new y(0,1,0),u=new ge;let d=1;function f(_,p=null){if(r.filter(b=>b.state==="drift").length>=pb){const b=r.find(v=>v.state==="drift");b&&m(b)}const g=new an,M=new na(t.fibres,e);g.add(M,new de(t.beak,n),new de(t.body,s)),g.position.copy(_),g.rotation.set((Math.random()-.5)*.4,Math.random()*6.28,(Math.random()-.5)*.4),g.scale.setScalar(.01),i.add(g),r.push({id:d++,obj:g,fibres:M,position:g.position,velocity:new y,age:0,spin:(Math.random()-.5)*.8,phase:Math.random()*100,state:"drift",carryT:0,swallowAt:-1,wind:p})}function m(_){_.state="gone",i.remove(_.obj)}return{spawn:f,warm:[new na(t.fibres,e),new de(t.beak,n),new de(t.body,s)],pick(_){const p=r.find(g=>g.id===_&&g.state==="drift");p&&(p.state="carried",p.carryT=0,p.swallowAt=-1)},swallowed(_){const p=r.find(g=>g.id===_&&g.state==="carried");p&&p.swallowAt<0&&(p.swallowAt=p.carryT)},food(){a.length=0;for(const _ of r)_.state==="drift"&&a.push(_);return a},update(_,p,g,M){for(const b of r)if(b.state!=="gone"){if(b.age+=_,b.state==="drift"){const v=p*.6+b.phase,w=o.set(Math.sin(v*.9)*.05+Math.sin(v*2.3)*.02,Math.sin(v*1.7)*.02-.035,Math.cos(v*.7)*.03);b.wind&&w.add(b.wind),b.velocity.lerp(w,1-Math.exp(-_*1.5)),b.obj.position.addScaledVector(b.velocity,_),b.obj.rotation.y+=b.spin*_,b.obj.rotation.x=Math.sin(v*1.3)*.12,b.obj.rotation.z=Math.cos(v*1.1)*.12,b.obj.scale.setScalar(Math.min(1,b.obj.scale.x+_*4)),(b.obj.position.y<-1.4||b.age>(b.wind?90:45)||Math.abs(b.obj.position.x)>3.2)&&m(b)}else if(b.state==="carried"){b.carryT+=_,g&&b.obj.position.copy(g(l)),M&&(c.copy(M).sub(b.obj.position).normalize(),b.obj.quaternion.slerp(u.setFromUnitVectors(h,c),1-Math.exp(-_*30)));const v=Math.min(1,b.carryT/.07),w=Math.max(.2,1-b.carryT*1.6);b.fibres.scale.set(1-.85*v,1+.6*v,1-.85*v),b.obj.scale.setScalar(w),b.swallowAt>=0&&(b.obj.scale.setScalar(Math.max(0,.2*(1-(b.carryT-b.swallowAt)*10))),b.carryT-b.swallowAt>.1&&m(b)),(b.carryT>3||!g)&&m(b)}}for(let b=r.length-1;b>=0;b--)r[b].state==="gone"&&r.splice(b,1)}}}const Md=1e6;function xb(i,t){const e=new Gi(1,8,6);e.scale(.004,.004,.011);const n=new ls(.016,.007);n.translate(.008,0,0);const s=new fn({color:1709586,roughness:.6}),r=new Hn({color:14542044,transparent:!0,opacity:.2,side:Oe,depthWrite:!1}),o=[],a=[],l=new y,c=new y,h=new y;let u=Md,d=10+Math.random()*3,f=!1;function m(p,g=!1){const M=t(),b=p?p.clone():M.clone().add(new y((Math.random()-.5)*.9,.05+Math.random()*.3,.45+Math.random()*.35)),v=b.clone().add(new y(Math.sign(Math.random()-.5)*2.2,.6,-.4)),w=new an,A=new de(e,s),x=[new de(n,r),new de(n,r)];x[1].rotation.y=Math.PI,w.add(A,...x),w.position.copy(v),i.add(w),o.push({id:u++,obj:w,wings:x,position:w.position,velocity:new y,home:b,goal:b.clone(),age:0,life:g?16:6+Math.random()*8,dartAt:.8,phase:Math.random()*100,state:"fly",carryT:0,swallowAt:-1,dodgedUntil:0,tame:g,yaw:0})}function _(p){p.state="gone",i.remove(p.obj)}return{spawn:m,warm:[new de(e,s),new de(n,r)],owns:p=>p>=Md,strike(){f=!0},pick(p){const g=o.find(M=>M.id===p&&(M.state==="fly"||M.state==="leave"));g&&(g.state="carried",g.carryT=0)},swallowed(p){const g=o.find(M=>M.id===p&&M.state==="carried");g&&g.swallowAt<0&&(g.swallowAt=g.carryT)},food(){a.length=0;for(const p of o)p.state==="fly"&&p.age>p.dodgedUntil&&a.push(p);return a},update(p,g,M){const b=f;f=!1,g>d&&o.length===0&&(m(),d=g+20+Math.random()*20);for(const v of o){if(v.state==="gone")continue;if(v.age+=p,v.state==="carried"){v.carryT+=p,M&&v.obj.position.copy(M(l));for(const S of v.wings)S.visible=!1;const x=v.swallowAt>=0?Math.max(0,1-(v.carryT-v.swallowAt)*10):1;v.obj.scale.setScalar(x),(v.swallowAt>=0&&x<=0||v.carryT>3||!M)&&_(v);continue}if(v.state==="fly"){if(v.age>v.life)v.state="leave",v.goal.copy(v.position).add(new y(Math.sign(v.position.x-v.home.x||1)*3,1.2,-.5));else if(v.age>v.dartAt){const x=v.tame?.15:1;v.goal.copy(v.home).add(new y((Math.random()-.5)*.4*x,(Math.random()-.5)*.25*x,(Math.random()-.5)*.3*x)),v.dartAt=v.age+.6+Math.random()*1.8}}v.state==="fly"&&!v.tame&&v.age>v.dodgedUntil&&b&&M&&M(l).distanceTo(v.position)<.7&&Math.random()<.75&&(v.dodgedUntil=v.age+1.5,c.copy(v.position).sub(l).normalize(),v.velocity.addScaledVector(c,2.2),v.goal.copy(v.position).addScaledVector(c,.45),v.dartAt=v.age+.8);const w=g*3+v.phase;if(c.set(Math.sin(w*5.1)+Math.sin(w*11.7)*.5,Math.sin(w*6.3+1)+Math.sin(w*13.1)*.4,Math.sin(w*4.7+2)).multiplyScalar(.08),c.addScaledVector(h.copy(v.goal).sub(v.position),v.state==="leave"?2.5:6),v.velocity.lerp(c,1-Math.exp(-p*8)),v.obj.position.addScaledVector(v.velocity,p),v.velocity.x*v.velocity.x+v.velocity.z*v.velocity.z>.01){const x=Math.atan2(v.velocity.x,v.velocity.z);v.yaw=$f(v.yaw,x,4,p)}v.obj.rotation.set(Qe.clamp(-v.velocity.y*.6,-.35,.35),v.yaw,0,"YXZ");const A=Math.sin(g*190+v.phase)*.9;v.wings[0].rotation.z=A,v.wings[1].rotation.z=-A,v.state==="leave"&&v.position.distanceTo(v.home)>2.5&&_(v)}for(let v=o.length-1;v>=0;v--)o[v].state==="gone"&&o.splice(v,1)}}}const $n=40,Sd=17;function vb(){const i=document.createElement("canvas");i.width=64,i.height=96;const t=i.getContext("2d");t.strokeStyle="#fff",t.lineCap="round";let e=7;const n=()=>(e=e*16807%2147483647)/2147483647,s=32;t.globalAlpha=.9,t.lineWidth=1.6,t.beginPath(),t.moveTo(s,92),t.quadraticCurveTo(s+2,50,s-1,14),t.stroke();for(let o=0;o<70;o++){const a=n(),l=90-a*76,c=s+(1-a)*1.5,h=n()<.5?-1:1,u=(10+n()*16)*(.55+.8*Math.sin(Math.PI*(.15+a*.8))),d=h*(.5+n()*.7);t.globalAlpha=.25+n()*.45,t.lineWidth=.7+n()*.7,t.beginPath(),t.moveTo(c,l),t.quadraticCurveTo(c+Math.sin(d)*u*.5,l-Math.cos(d)*u*.3,c+Math.sin(d)*u,l-Math.cos(d)*u*(.4+n()*.5)+(n()-.5)*6),t.stroke()}const r=new p0(i);return r.colorSpace=Ve,r}function yb(i){const{scene:t,camera:e,renderer:n,center:s}=i,r=new an;r.name="ambient",t.add(r);const o=new Float32Array($n*3),a=new Float32Array($n),l=new Float32Array($n),c=[],h=new Float32Array($n),u=new Float32Array($n).fill(-1),d=new Float32Array($n);for(let Z=0;Z<$n;Z++)l[Z]=Math.random(),c.push(new y);const f=new Se;f.setAttribute("position",new Re(o,3).setUsage(Hh)),f.setAttribute("aSize",new Re(a,1).setUsage(Hh)),f.setAttribute("aSeed",new Re(l,1));const m=new _n({uniforms:{uScale:{value:500},uMinPx:{value:1.2},uTime:{value:0},uFocus:{value:3.3},uAperture:{value:0},uMaxCoc:{value:14},uDpr:{value:1}},vertexShader:`
      attribute float aSize;
      attribute float aSeed;
      uniform float uScale, uMinPx, uTime, uFocus, uAperture, uMaxCoc, uDpr;
      varying float vGlint, vCov;
      ${uh}
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float z = -mv.z;
        float px = aSize * uScale / z;
        // the lens's blur circle here, as post works it out (CSS px radius)
        float coc = lensCoc(1.0 / z, uFocus, uAperture, uMaxCoc) * uDpr;
        float sharp = max(px, uMinPx);
        float d = max(sharp, coc * 1.6);
        // the same light spread over a bigger disc, kept from vanishing entirely
        vCov = clamp(px / uMinPx, 0.0, 1.0) * clamp(pow(sharp / d, 2.0) * 1.2, 0.07, 1.0);
        gl_PointSize = aSize > 0.0 ? d : 0.0;
        // a flake turning in the light: mostly dull, now and then it catches
        float k = uTime * (0.6 + aSeed * 1.4) + aSeed * 40.0;
        vGlint = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(k) * sin(k * 2.3 + 1.0), 3.0);
      }`,fragmentShader:`
      varying float vGlint, vCov;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        if (r > 1.0) discard;
        float a = (1.0 - smoothstep(0.4, 1.0, r)) * vCov;
        gl_FragColor = vec4(vec3(1.0, 0.97, 0.9) * vGlint * a * 0.9, 1.0);
      }`,blending:Rl,transparent:!0}),_=new Tf(f,m);_.frustumCulled=!1,r.add(_);function p(Z,H,J,Y){H?o.set([H.x,H.y,H.z],Z*3):(o[Z*3]=s.x+(Math.random()-.5)*3.6,o[Z*3+1]=s.y+(Math.random()-.45)*2,o[Z*3+2]=s.z-1.7+Math.random()*3.1),c[Z].copy(J??new y),h[Z]=0,u[Z]=Y,d[Z]=Math.random()<.85?.0025+Math.random()*.003:.006+Math.random()*.005}const g=()=>{for(let Z=0;Z<$n;Z++)if(u[Z]<0)return Z;return-1},M=new ls(.04,.06);M.translate(0,.012,0);const b=new fn({color:12893896,map:vb(),roughness:1,side:Oe,alphaToCoverage:!0,alphaTest:.04}),v=[],w=new an,A=new de(new Gi(1,8,6).scale(.008,.0075,.02),new fn({color:1380879,roughness:.45})),x=new eh(.014,10).scale(1,.55,1).translate(.014,0,0),S=new Hn({color:14673632,transparent:!0,opacity:.22,side:Oe,depthWrite:!1}),F=[new de(x,S),new de(x,S)];for(const Z of F)Z.rotation.order="ZXY",Z.rotation.x=-Math.PI/2,Z.position.y=.004;F[1].scale.x=-1,w.add(A,...F),w.visible=!1,r.add(w);let C=null,L=0,D=2,I=25+Math.random()*40;const R=new y;let O=0;function k(Z=!1){const H=Math.random()<.5?-1:1,J=Math.random(),Y=Z?.25+Math.random()*.2:J<.4?-.7+Math.random()*.5:J<.8?-.15+Math.random()*.55:.8+Math.random()*.6,lt=Z?s.y+.45:s.y+(Math.random()-.4)*1,st=[],bt=6;for(let Qt=0;Qt<bt;Qt++){const dt=Qt/(bt-1);st.push(new y(s.x+H*(-2.6+5.2*dt),lt+(Math.random()-.5)*.35+Math.sin(dt*5)*.08,Y+(Math.random()-.5)*.4))}C=new mc(st),O=Math.atan2(st[1].x-st[0].x,st[1].z-st[0].z),L=0,D=2.2+Math.random()*1.4,w.visible=!0,w.position.copy(st[0]),R.copy(st[0])}let U=15+Math.random()*25;function X(){if(!i.passSeed)return;const Z=Math.random()<.5?-1:1,H=new y(s.x-Z*2.3,s.y+.5+Math.random()*.7,s.z-1.3+Math.random()*2.4);i.passSeed(H,new y(Z*(.07+Math.random()*.05),.012,(Math.random()-.5)*.02))}const N=new y,G=new Dt,W=new y;let tt=0;for(let Z=0;Z<Sd;Z++)p(Z,null,null,8+Math.random()*18),h[Z]=Math.random()*u[Z];return{group:r,warm:[new de(M,b)],shed(Z,H,J){const Y=2+Math.floor(Math.random()*2);for(let st=0;st<Y;st++){const bt=g();if(bt<0)break;W.copy(H).multiplyScalar(.06+Math.random()*.08),W.x+=(Math.random()-.5)*.08,W.y+=.02+Math.random()*.06,W.z+=(Math.random()-.5)*.08,p(bt,new y(Z.x+(Math.random()-.5)*.08,Z.y+(Math.random()-.5)*.12,Z.z+(Math.random()-.5)*.08),W,4+Math.random()*5),d[bt]*=.8}if(!J)return;const lt=new de(M,b);lt.position.copy(Z),lt.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),lt.scale.setScalar(.01),r.add(lt),v.push({obj:lt,vel:H.clone().multiplyScalar(.3).add(new y(0,.1,0)),away:H.clone().multiplyScalar(.06),age:0,life:16+Math.random()*10,fall:.045+Math.random()*.03,phase:Math.random()*100,spin:(Math.random()-.5)*1.5})},flyBy:k,flyNear(Z,H){return w.visible&&w.position.distanceTo(Z)<H?w.position:null},update(Z){tt+=Z,m.uniforms.uTime.value=tt,n.getDrawingBufferSize(G),m.uniforms.uScale.value=G.y/(2*Math.tan(Qe.degToRad(e.fov)/2)),m.uniforms.uMinPx.value=1.3*n.getPixelRatio(),m.uniforms.uDpr.value=n.getPixelRatio();const H=i.dof?.();H&&(m.uniforms.uFocus.value=H.uFocus.value,m.uniforms.uAperture.value=H.uAperture.value,m.uniforms.uMaxCoc.value=H.uMaxCoc.value),N.set(Math.sin(tt*.07)*.025+Math.sin(tt*.19+1)*.01,Math.sin(tt*.11)*.006,Math.cos(tt*.05)*.015);let J=0;for(let Y=0;Y<$n;Y++)u[Y]>=0&&J++;for(let Y=0;Y<$n;Y++){if(u[Y]<0){a[Y]=0,J<Sd&&Math.random()<Z*2&&(p(Y,null,null,10+Math.random()*18),J++);continue}if(h[Y]+=Z,h[Y]>u[Y]){u[Y]=-1,a[Y]=0;continue}const lt=l[Y]*50,st=tt*.4+lt;W.set(Math.sin(st*1.3)*.012,Math.sin(st*.9+2)*.008-.004,Math.cos(st*1.1)*.01).add(N),c[Y].lerp(W,1-Math.exp(-Z*.8)),o[Y*3]+=c[Y].x*Z,o[Y*3+1]+=c[Y].y*Z,o[Y*3+2]+=c[Y].z*Z;const bt=h[Y]/u[Y];a[Y]=d[Y]*Math.min(1,bt*6,(1-bt)*6)}f.attributes.position.needsUpdate=!0,f.attributes.aSize.needsUpdate=!0;for(const Y of v){Y.age+=Z;const lt=tt+Y.phase;W.set(Math.sin(lt*1.4)*.05,-Y.fall+Math.sin(lt*2.8)*.012,Math.cos(lt*1.1)*.03).add(N).addScaledVector(Y.away,Math.exp(-Y.age*.25)),Y.vel.lerp(W,1-Math.exp(-Z*1.2)),Y.obj.position.addScaledVector(Y.vel,Z),Y.obj.rotation.y+=Y.spin*Z,Y.obj.rotation.z=Math.sin(lt*1.4)*.6,Y.obj.rotation.x=.3+Math.cos(lt*1.1)*.35,Y.obj.scale.setScalar(Math.max(0,Math.min(1,Y.age*3,(Y.life-Y.age)*.5)))}for(let Y=v.length-1;Y>=0;Y--)v[Y].age>v[Y].life&&(r.remove(v[Y].obj),v.splice(Y,1));if(Z>0&&tt>I&&!w.visible&&(k(),I=tt+50+Math.random()*70),w.visible&&C)if(L+=Z/D,L>=1)w.visible=!1,C=null;else{R.copy(w.position),C.getPointAt(Qe.clamp(L+.8*Math.sin(Math.PI*2*L)/(Math.PI*2),0,1),w.position),w.position.x+=Math.sin(tt*37)*.006,w.position.y+=Math.sin(tt*29+1)*.008;const Y=w.position.x-R.x,lt=w.position.z-R.z;if(Y*Y+lt*lt>1e-8){const bt=Math.atan2(Y,lt);O=$f(O,bt,6,Z)}w.rotation.set(Qe.clamp(-(w.position.y-R.y)/Math.max(Z,.001)*.4,-.3,.3),O,0,"YXZ");const st=Math.sin(tt*210)*.7;F[0].rotation.z=st,F[1].rotation.z=-st}Z>0&&tt>U&&(X(),U=tt+35+Math.random()*45)}}}const Pi=i=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,Ii={bird:Pi('<path d="M18.1 17.1A6.2 6.2 0 1 0 8.9 9.4C8.5 10.5 7.2 11.4 3.3 12.4l5.1-.3"/><circle cx="14" cy="11" r="1.9" fill="currentColor" stroke="none"/><circle cx="13.4" cy="10.4" r=".55" fill="#1f3a1c" stroke="none"/>'),food:Pi('<path d="M12 10.5L3.8 8.3M12 10.5L5.5 5.0M12 10.5L8.4 2.8M12 10.5L12.0 2.0M12 10.5L15.6 2.8M12 10.5L18.5 5.0M12 10.5L20.2 8.3" stroke-width="1.1"/><path d="M12 10.5v7"/><path d="M12 17.3c-.9 0-1.3 1-1.1 2.1L12 22l1.1-2.6c.2-1.1-.2-2.1-1.1-2.1z" fill="currentColor"/>'),gnat:Pi('<ellipse cx="12" cy="14.5" rx="3" ry="5"/><circle cx="12" cy="7.6" r="1.9"/><path d="M9.2 11.5C6 8.5 3.5 9.5 3.6 11.8c.1 1.6 2.7 1.8 5.6.9M14.8 11.5c3.2-3 5.7-2 5.6.3-.1 1.6-2.7 1.8-5.6.9M10.6 6 9 3.8M13.4 6 15 3.8"/>'),sing:Pi('<path d="M9 18V5.5l10-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/><path d="M9 9.5l10-2"/>'),ruffle:Pi('<path d="M19.5 4.5C13 5 7.5 9.5 6 17l-1.5 2.5"/><path d="M19.5 4.5c-.5 6-4.5 11-12.5 12.5"/><path d="M9.5 13.5l3.5-3.5M8.5 11h3.5M11.5 8.5h3"/>'),fly:Pi('<path d="M11 16C9.5 10.5 6.5 6.5 2 5c.3 2.6 1.1 4.4 2.4 5.6-.9.2-1.4.2-2 .1 1.2 2.6 2.9 4 5.3 4.4-.6.4-1.2.6-1.9.7C7.6 16.6 9.1 16.9 11 16z"/><path d="M13 16c1.5-5.5 4.5-9.5 9-11-.3 2.6-1.1 4.4-2.4 5.6.9.2 1.4.2 2 .1-1.2 2.6-2.9 4-5.3 4.4.6.4 1.2.6 1.9.7-1.8.8-3.3 1.1-5.2.2z"/>'),palette:Pi('<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5C21 6.4 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.2" r="1.2"/>'),settings:Pi('<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>')},Mb=220;function Sb(i){const t=document.createElement("div");t.className="actions";const e=document.createElement("button");e.type="button",e.className="act-main",e.setAttribute("aria-label","Things to do"),e.setAttribute("aria-expanded","false"),e.innerHTML=`${Ii.bird}<span class="x" aria-hidden="true"></span>`;const n=document.createElement("div");n.className="act-menu",n.setAttribute("role","menu");const s=i.map((p,g)=>{const M=document.createElement("button");return M.type="button",M.className="act-item",M.dataset.id=p.id,M.setAttribute("role","menuitem"),M.setAttribute("aria-label",p.label),M.style.setProperty("--i",String(i.length-1-g)),M.innerHTML=`${p.icon}<span class="act-label">${p.label}${p.key?`<kbd>${p.key}</kbd>`:""}</span>`,n.append(M),M});t.append(n,e),document.body.append(t);let r=!1;function o(p){r=p,t.classList.toggle("open",p),e.setAttribute("aria-expanded",String(p)),p||l(null)}let a=null;function l(p){a?.classList.remove("lit"),a=p,a?.classList.add("lit")}function c(p){const g=i[s.indexOf(p)];p.classList.remove("fired"),p.offsetWidth,p.classList.add("fired"),g.run()}let h=0,u=!1,d=!1;const f=(p,g)=>{const M=document.elementFromPoint(p,g)?.closest(".act-item");return M&&s.includes(M)?M:null};e.addEventListener("pointerdown",p=>{p.button===0&&(p.stopPropagation(),d=!0,u=!1,e.setPointerCapture(p.pointerId),clearTimeout(h),r||(h=window.setTimeout(()=>{u=!0,o(!0),navigator.vibrate?.(8)},Mb)))}),e.addEventListener("pointermove",p=>{u&&l(f(p.clientX,p.clientY))});const m=p=>{if(d){if(d=!1,clearTimeout(h),p.stopPropagation(),u){u=!1;const g=f(p.clientX,p.clientY);g&&c(g),o(!1);return}o(!r)}};e.addEventListener("pointerup",m),e.addEventListener("pointercancel",()=>{d=u=!1,clearTimeout(h)}),e.addEventListener("click",p=>{p.detail===0&&o(!r)});for(const p of s)p.addEventListener("pointerdown",g=>g.stopPropagation()),p.addEventListener("pointerup",g=>g.stopPropagation()),p.addEventListener("click",()=>c(p)),p.addEventListener("pointerenter",()=>l(p)),p.addEventListener("pointerleave",()=>a===p&&l(null));let _=-1;return window.addEventListener("pointerdown",p=>{r&&!u&&!t.contains(p.target)?(o(!1),_=p.pointerId):_=-1}),window.addEventListener("keydown",p=>{p.key==="Escape"&&o(!1)}),{root:t,setOpen:o,isOpen:()=>r,swallows:p=>p.pointerId===_}}const fp="codevember-12-settings";function bb(){try{return JSON.parse(localStorage.getItem(fp)??"{}")}catch{return{}}}function bd(i){try{localStorage.setItem(fp,JSON.stringify(i))}catch{}}function wb(i,t={}){const e=bb(),n={},s=document.createElement("button");s.type="button",s.className="set-btn",s.setAttribute("aria-label","Settings"),s.setAttribute("aria-expanded","false"),s.innerHTML=Ii.settings;const r=document.createElement("div");r.className="settings",r.hidden=!0,r.setAttribute("role","dialog"),r.setAttribute("aria-label","Settings");const o=document.createElement("div");o.className="set-head",o.innerHTML="<b>Settings</b>";const a=document.createElement("button");a.type="button",a.className="set-close",a.setAttribute("aria-label","Close settings"),a.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8"/></svg>',a.addEventListener("click",()=>m(!1)),o.append(a);const l=document.createElement("div");l.className="set-body",r.append(o,l);let c=null;function h(_,p,g,M,b,v,w,A){const x=_ in e&&g(e[_])?e[_]:p,S=_ in t?t[_]:x;n[_]=x,w(S),A(S),M.addEventListener(b,()=>{const F=v();n[_]=F,A(F),bd(n)})}for(const _ of i){if(_.kind!=="action"&&(c=null),_.kind==="heading"){const M=document.createElement("h5");M.textContent=_.label,l.append(M);continue}if(_.kind==="action"){const M=document.createElement("button");if(M.type="button",M.className="act",M.textContent=_.label,_.key){const b=document.createElement("kbd");b.textContent=_.key,M.append(b)}M.addEventListener("click",()=>_.run()),c||(c=document.createElement("div"),c.className="acts",l.append(c)),c.append(M);continue}const p=document.createElement("label");p.className=`row ${_.kind}`;const g=document.createElement("span");if(g.textContent=_.label,_.kind==="select"){const M=document.createElement("select");for(const b of _.options)M.append(new Option(b,b));h(_.key,_.value,b=>typeof b=="string"&&_.options.includes(b),M,"change",()=>M.value,b=>M.value=b,_.set),p.append(g,M)}else{const M=document.createElement("input");if(_.kind==="toggle")M.type="checkbox",h(_.key,_.value,b=>typeof b=="boolean",M,"change",()=>M.checked,b=>M.checked=b,_.set);else{M.type="range",M.min=String(_.min),M.max=String(_.max),M.step=String(_.step);const b=document.createElement("output"),v=Math.max(0,-Math.floor(Math.log10(_.step)+1e-9)),w=A=>{b.textContent=A.toFixed(v),M.style.setProperty("--p",`${(A-_.min)/(_.max-_.min)*100}%`)};h(_.key,_.value,A=>typeof A=="number",M,"input",()=>Number(M.value),A=>M.value=String(A),A=>(w(A),_.set(A))),g.append(b)}p.append(g,M)}l.append(p)}const u=document.createElement("button");u.type="button",u.className="reset",u.textContent="Reset to defaults",u.addEventListener("click",()=>{bd({}),location.reload()});const d=l.querySelectorAll(".row"),f=d[d.length-1];f?f.after(u):l.prepend(u);function m(_){r.hidden=!_,s.classList.toggle("on",_),s.setAttribute("aria-expanded",String(_))}return s.addEventListener("pointerdown",_=>_.stopPropagation()),s.addEventListener("click",()=>m(r.hidden)),r.addEventListener("pointerdown",_=>_.stopPropagation()),r.addEventListener("pointerup",_=>_.stopPropagation()),window.addEventListener("keydown",_=>{_.key==="Escape"&&m(!1)}),document.body.append(s,r),{button:s,panel:r,open:m,isOpen:()=>!r.hidden}}const In=document.querySelector("#c"),as=new URLSearchParams(location.search),Or=!as.has("nopost"),ke=new Qy({canvas:In,antialias:!Or,powerPreference:"high-performance"});ke.setPixelRatio(Math.min(window.devicePixelRatio,Wi?1.5:2));ke.outputColorSpace=Ve;ke.toneMappingExposure=1;ke.shadowMap.enabled=!0;ke.shadowMap.type=xr;const Ce=new $c,ne=new gn(30,1,.02,120);ne.position.set(1.55,.85,3);const Pe=new eM(ne,In);Pe.target.set(Wn-.04,.5,0);Pe.enableDamping=!0;Pe.dampingFactor=.06;Pe.minDistance=1.4;Pe.maxDistance=4.4;Pe.minPolarAngle=1.2;Pe.maxPolarAngle=1.78;Pe.minAzimuthAngle=-.45;Pe.maxAzimuthAngle=.85;Pe.enablePan=!1;Pe.rotateSpeed=.6;Pe.touches.ONE=null;const ra=Jf();{const i=new $c,t=Jf();t.material.uniforms.uEnv.value=1,i.add(t.mesh);const e=new Fr(ke);Ce.environment=e.fromScene(i,.02).texture,Ce.environmentIntensity=1.6,e.dispose()}Ce.add(ra.mesh);const kr=rS();Ce.add(kr.group);const Dn=gS();Dn.use(kr.group);const wd=document.querySelector(".loading-label span");let xi=0,va=!1,wc=!0,Vs=as.has("drawing");function dh(i){Vs=i,document.body.classList.add("snap"),document.body.classList.toggle("drawing",i),requestAnimationFrame(()=>document.body.classList.remove("snap")),va&&!wc&&(xi=i?0:1)}dh(Vs);function pp(i=!1){i&&(xi=1),va=!0,document.body.classList.remove("loading")}const Co=()=>new Promise(i=>requestAnimationFrame(i));async function Eb(){const i=Or?un.compile:t=>Promise.all(t());try{await i(()=>[ke.compileAsync(Ce,ne)]),await Co(),await i(()=>[ke.compileAsync(Vo,ne,Ce)]),await Co();for(const t of mp([Ce,Vo]))ke.properties.get(t).programs?.forEach(n=>n.getUniforms());for(const t of Tb([Ce,Vo]))await Co(),ke.initTexture(t);await Co(),Or&&un.prerender(Ce,ne)}catch{}pp()}function mp(i){const t=new Set;for(const e of i)e.traverse(n=>{const s=n.material;if(s)for(const r of Array.isArray(s)?s:[s])t.add(r)});return t}function Tb(i){const t=new Set;for(const e of mp(i))for(const n of Object.values(e))n?.isTexture&&!n.isRenderTargetTexture&&t.add(n);return t}const Ab=as.has("procbranch")?Promise.resolve():oS("/codevember-2026/branch.glb",i=>{wd&&i.lengthComputable&&(wd.textContent=`${Math.min(100,Math.round(i.loaded/i.total*100))}%`)}).then(i=>{Ce.remove(kr.group),zb(kr.group),Ce.add(i.group),Dn.use(i.group),bp(i.group),Lc=i.fuzz,Pp()}).catch(()=>{}),Rb=new B0(15659750,3815462,.6);Ce.add(Rb);const tn=new sh(16774374,2.2);tn.position.set(-1.3,3.6,1.5);tn.castShadow=!0;tn.shadow.mapSize.set(2048,2048);tn.shadow.camera.left=tn.shadow.camera.bottom=-1.2;tn.shadow.camera.right=tn.shadow.camera.top=1.2;tn.shadow.camera.near=.5;tn.shadow.camera.far=8;tn.shadow.bias=-.0015;tn.shadow.normalBias=.025;tn.shadow.radius=4;tn.target.position.set(0,.5,0);Wi&&(tn.shadow.mapSize.set(1024,1024),Object.assign(tn.shadow.camera,{left:-.85,right:1.42,bottom:-1,top:1.15}));Ce.add(tn,tn.target);const oa=new sh(15923944,1.4);oa.position.set(1.5,1.8,-2.5);oa.target.position.set(0,.5,0);Ce.add(oa,oa.target);const At=rb();At.root.position.x=Wn;At.layer("hop").home=Wn;const fh=new an;fh.add(At.root);Ce.add(fh);let gl=1;const Ed=new y;At.mind.on("perch",i=>{Dn.push(i.x,i.push,i.side),Dn.load(i.on?i.x:null)});Dn.load(Wn);Dn.settle();const Ec=new y,_l=new y;let xl=!1;function Cb(i){(At.perched||!xl)&&_l.copy(Wo),xl||Ec.copy(_l),xl=!0,Ec.lerp(_l,1-Math.exp(-i*8))}function Pb(i){Dn.update(i),gl=Tn(gl,At.perched?1:0,25,i),Dn.at(At.root.position.x,Ed),fh.position.copy(Ed).multiplyScalar(gl)}const ar=At.layer("gaze"),Td=At.billTip.bind(At);Wi&&(At.feathers.contour.castShadow=!1);const Tc=new Ff,Lb=new Dt,gp=new y;let _p=-1e9;const Ad=new Sn,si=new y,Ib=new y;function Db(i,t){const e=In.getBoundingClientRect();return Lb.set((i-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1)}function ph(i,t){return Tc.setFromCamera(Db(i,t),ne),Tc.ray}function xp(i,t,e,n){return ph(i,t),ne.getWorldDirection(si).negate(),Ad.setFromNormalAndCoplanarPoint(si,Ib.set(At.root.position.x,.8,0).addScaledVector(si,e)),Tc.ray.intersectPlane(Ad,n)}const Rd=new y;let aa=!1;function Nb(i){if(At.away||At.fleeing)return!1;At.headPosition(Rd).y-=.05;const t=aa?.46:.4;return i.distanceSqToPoint(Rd)<t*t}const ri=_b(Ce),Xn=xb(Ce,()=>At.root.getWorldPosition(new y).add(new y(0,.85,0)));At.onPick=i=>Xn.owns(i)?Xn.pick(i):ri.pick(i);At.onSwallow=i=>Xn.owns(i)?Xn.swallowed(i):ri.swallowed(i);At.mind.on("strike",()=>Xn.strike());const zi=yb({scene:Ce,camera:ne,renderer:ke,center:new y(Wn,.55,0),dof:()=>un.dof,passSeed:(i,t)=>ri.spawn(i,t)}),Vo=new an;Vo.add(...ri.warm,...Xn.warm,...zi.warm);let Po=-1;const Cd=new y;function vp(){Math.random()<.5?Xn.spawn():zi.flyBy()}const Pd=new y,vl=new y;At.mind.on("ruffle",i=>{if(i.kind==="throat"||At.away)return;const t=Math.atan2(ne.position.x-At.root.position.x,ne.position.z-At.root.position.z)+(Math.random()<.5?-1:1)*(.9+Math.random()*.6);vl.set(Math.sin(t),0,Math.cos(t)),At.root.getWorldPosition(Pd).addScaledVector(vl,.16).y+=.22+Math.random()*.2,zi.shed(Pd,vl,Math.random()<.45)});const Lo=[];function Ld(i,t){for(let e=0;e<t.length;e++)i.push(t[e])}const Id=new y;let yp=0,Mp=0,Sp=0;In.addEventListener("pointerdown",i=>{yp=performance.now(),Mp=i.clientX,Sp=i.clientY});const Qi=new y,lr=new y,Dd=new y,Ub=3;let Nd=0;function Fb(i){if(At.away||At.fleeing)return;const t=performance.now()/1e3;if(t<Nd||(At.root.getWorldPosition(Qi),lr.copy(Qi),Qi.x-=.06,lr.x+=.06,Qi.y=lr.y=Qi.y+.02,i.distanceSqToSegment(Qi,lr,void 0,Dd)>.07*.07))return;const e=Dd.x<(Qi.x+lr.x)/2?1:-1,n=.12+Math.random()*.1;(At.hopBy(e*n)||At.hopBy(-e*n))&&(Nd=t+Ub)}const Ud=new Sn,yl=new y,Ml=new y,Fd=new y,Ob=new y;let Io=-1;function kb(i){const t=performance.now();if(!Dn.reach(i,yl))return void(Io=-1);if(ne.getWorldDirection(si).negate(),Ud.setFromNormalAndCoplanarPoint(si,yl),!i.intersectPlane(Ud,Ml))return;const e=(t-Io)/1e3;Io>0&&e<.1&&Dn.brush(yl,Ob.copy(Ml).sub(Fd).divideScalar(Math.max(e,1/240)),e),Fd.copy(Ml),Io=t}window.addEventListener("pointermove",i=>{document.body.classList.toggle("near",i.clientX>window.innerWidth-140&&i.clientY<120);const t=i.target===In,e=ph(i.clientX,i.clientY),n=t&&Nb(e);n&&!aa&&!At.singing&&At.sing(1.6),aa=n,t&&(Fb(e),kb(e)),!n&&xp(i.clientX,i.clientY,.8,gp)&&(_p=performance.now())});const Od=new y,kd=new y;function Bb(i,t){return At.away?!1:(At.root.getWorldPosition(Od).y+=.25,At.headPosition(kd),ph(i,t).distanceSqToSegment(Od,kd)<.22*.22)}const Bd=document.querySelector(".fs"),mh=i=>document.body.classList.toggle("clean",i);as.has("clean")&&mh(!0);Bd?.addEventListener("click",async()=>{const i=!document.body.classList.contains("clean");mh(i);try{i&&!document.fullscreenElement&&await document.documentElement.requestFullscreen?.(),!i&&document.fullscreenElement&&await document.exitFullscreen()}catch{}Bd.blur()});document.addEventListener("fullscreenchange",()=>{document.body.classList.toggle("fullscreen",!!document.fullscreenElement),document.fullscreenElement||mh(!1)});In.addEventListener("pointerup",i=>{if(Br.isOpen())return Br.open(!1);Ip.swallows(i)||performance.now()-yp<250&&Math.hypot(i.clientX-Mp,i.clientY-Sp)<6&&(Wi&&Bb(i.clientX,i.clientY)?gh():xp(i.clientX,i.clientY,.6,Id)&&ri.spawn(Id))});const un=fb(ke,{samples:4}),Wo=new y;{const i=un.grade;i.uWhite.value.set(1,1,1.04),i.uLift.value.set(.015,.005,.022),i.uGamma.value.set(1,1.04,1),i.uVignette.value=.22}function bp(i){At.setPerch(nS(i),ip)}function zb(i){i.traverse(t=>{const e=t;if(e.isMesh){e.geometry.dispose();for(const n of Array.isArray(e.material)?e.material:[e.material])n.dispose()}})}bp(kr.group);let Sl=0,mr=1,Ac=0;const Rc=At.plumage.uPal.value.map(i=>i.clone());let wp=up(bc[0]);function gh(){Sl=(Sl+1)%bc.length,At.ruffle("throat",.25),At.plumage.uPal.value.forEach((i,t)=>Rc[t].copy(i)),wp=up(bc[Sl]),Ac=.05,mr=0}function Hb(i){if(mr>=1)return;if(Ac>0){Ac-=i;return}mr=Math.min(1,mr+i/.55);const t=Qe.smoothstep(mr,0,1);At.plumage.uPal.value.forEach((e,n)=>{for(let s=0;s<9;s++)e.elements[s]=Rc[n].elements[s]+(wp[n].elements[s]-Rc[n].elements[s])*t})}const Gb=[-.45,.85],Vb=[Math.PI-.6,-Math.PI+.55];let gr=!1,Di=-1,br=0,Ep=0;const wr=new xc,Er=new y;function Wb(){if(Di>=0)return;gr=!gr,Er.copy(ne.position).sub(Pe.target),wr.setFromVector3(Er),br=wr.theta;const i=gr?Math.PI+.35:.41,t=Qe.euclideanModulo(i-br,Math.PI*2);Ep=br+(gr?t-Math.PI*2:t),Pe.minAzimuthAngle=-1/0,Pe.maxAzimuthAngle=1/0,Di=0}function Xb(i){Di<0||(Di=Math.min(1,Di+i/1.6),Er.copy(ne.position).sub(Pe.target),wr.setFromVector3(Er),wr.theta=br+(Ep-br)*Qe.smootherstep(Di,0,1),ne.position.copy(Pe.target).add(Er.setFromSpherical(wr)),Di===1&&(Di=-1,[Pe.minAzimuthAngle,Pe.maxAzimuthAngle]=gr?Vb:Gb))}ke.localClippingEnabled=!0;let ya=!1;const Tp=new Sn,Cc=new Sn,Do=new y,bl=new y,zd=new y,qb=new Hn({color:15660008,wireframe:!0,transparent:!0,opacity:.8,clippingPlanes:[Cc]}),Ap=["bird.skin","bird.bare","bird.bill","bird.eyes","bird.nict"].map(i=>At.root.getObjectByName(i)).filter(i=>!!i),Yb=Ap.map(i=>i.material),Hd=At.feathers.contour.material;function Rp(i){ya=i,Hd.clippingPlanes=i?[Tp]:null,Hd.needsUpdate=!0,Ap.forEach((t,e)=>t.material=i?qb:Yb[e])}function Kb(){ya&&(At.rig.bones.neck2.getWorldPosition(Do),At.rig.bones.head.getWorldPosition(bl),zd.copy(bl).sub(Do).normalize(),Do.lerp(bl,.35),Cc.setFromNormalAndCoplanarPoint(zd,Do),Tp.copy(Cc).negate())}let Cp=!0,Gd=!1,_h=0,Pc=!0,Lc=null;const Zb=!as.has("nofuzz")&&!as.has("skin");function Pp(){At.feathers.fuzz.visible=Pc&&Zb,Lc&&(Lc.visible=Pc)}const $b=At.plumage.uFlash.value,Jb=At.plumage.uGlint.value,Lp=()=>{ne.getWorldDirection(si).negate();const i=new y().crossVectors(si,ne.up).normalize();return new y(At.root.position.x,.95+Math.random()*.2,0).addScaledVector(si,.6).addScaledVector(i,(Math.random()-.5)*.5)},jb=()=>(At.headPosition(Vd),ne.getWorldDirection(si).negate(),Vd.addScaledVector(si,.24).add(new y(0,-.06,0))),Vd=new y,wl=[[.4,()=>At.ruffle("shake")],[3,()=>Xn.spawn(jb(),!0)],[10.5,()=>At.sing(2.2)],[13.5,()=>At.lick(.65,3)],[15,()=>At.hopBy(.26)],[17.5,()=>At.sing(1.6)],[20,()=>zi.flyBy(!0)],[22.5,()=>At.hopTo(Wn)],[24.5,()=>ri.spawn(Lp())],[30,()=>!At.busy&&(At.ruffle("puff",.6),!0)],[32,()=>At.sing(1.4)]],Qb=35;let Fi=-1,_r=0;function xh(i){Fi=i?0:-1,_r=0,document.body.classList.toggle("demo",i)}function t1(i){if(!(Fi<0)){for(Fi+=i;_r<wl.length&&Fi>=wl[_r][0];){const[t,e]=wl[_r];if(e()===!1&&Fi-t<4)break;_r++}Fi>Qb&&xh(!1)}}const Wd={Neutral:Oc,AgX:Fc,ACES:Uc,Reinhard:Nc,None:ni},Br=wb([{kind:"heading",label:"Camera"},{kind:"range",key:"shake",label:"Handheld",value:2.05,min:0,max:3.5,step:.05,set:i=>_h=i},{kind:"range",key:"dof",label:"Depth of field",value:85,min:0,max:260,step:5,set:i=>un.dof.uAperture.value=i},{kind:"range",key:"exposure",label:"Exposure",value:1.15,min:.8,max:2.4,step:.05,set:i=>un.grade.uExposure.value=i},{kind:"heading",label:"Look"},{kind:"select",key:"tonemap",label:"Tone mapping",value:"Neutral",options:Object.keys(Wd),set:i=>un.setToneMapping(Wd[i])},{kind:"range",key:"contrast",label:"Contrast",value:.87,min:.6,max:1.4,step:.01,set:i=>un.grade.uContrast.value=i},{kind:"range",key:"sat",label:"Saturation",value:.97,min:.3,max:1.4,step:.01,set:i=>un.grade.uSat.value=i},{kind:"heading",label:"Bird"},{kind:"toggle",key:"follow",label:"Follows the pointer",value:!0,set:i=>Cp=i},{kind:"range",key:"mood",label:"Calm · alert",value:.32,min:0,max:1,step:.01,set:i=>At.mind.baseline=i},{kind:"range",key:"flash",label:"Gorget flash",value:1,min:0,max:2,step:.05,set:i=>{At.plumage.uFlash.value=$b*i,At.plumage.uGlint.value=Jb*i}},{kind:"toggle",key:"fuzz",label:"Down and felt",value:!0,set:i=>{Pc=i,Pp()}},{kind:"range",key:"give",label:"Twig give",value:1,min:0,max:3,step:.05,set:i=>Dn.give=i},{kind:"heading",label:"Workbench"},{kind:"action",label:"Demo",key:"D",run:()=>xh(Fi<0)},{kind:"action",label:"Pause",key:"P",run:()=>Dp(!ns)},{kind:"action",label:"Drawing",key:"W",run:()=>dh(!Vs)},{kind:"action",label:"Head wire",key:"H",run:()=>Rp(!ya)}],as.has("still")?{shake:0}:{}),Ip=Sb([{id:"food",label:"Drop a seed",icon:Ii.food,run:()=>ri.spawn(Lp())},{id:"gnat",label:"Let a bug in",key:"G",icon:Ii.gnat,run:vp},{id:"sing",label:"Sing",icon:Ii.sing,run:()=>At.sing(2.2)},{id:"ruffle",label:"Ruffle",key:"R",icon:Ii.ruffle,run:()=>At.ruffle("shake")},{id:"fly",label:"Fly off",key:"F",icon:Ii.fly,run:()=>At.flee()},{id:"palette",label:"Color",key:"C",icon:Ii.palette,run:gh}]);Ip.root.addEventListener("pointerdown",()=>Br.open(!1),!0);const e1={KeyF:()=>At.flee(),KeyR:()=>At.ruffle("shake"),KeyB:Wb,KeyC:gh,KeyG:vp,KeyD:()=>xh(Fi<0),KeyH:()=>Rp(!ya),KeyP:()=>Dp(!ns),KeyW:()=>dh(!Vs)};window.addEventListener("keydown",i=>{i.code==="Space"?At.startle(1):!i.metaKey&&!i.ctrlKey&&e1[i.code]?.()});function vh(){const i=In.clientWidth||window.innerWidth,t=In.clientHeight||window.innerHeight;ke.setSize(i,t,!1),un.setSize(i,t,ke.getPixelRatio()),ne.aspect=i/t,ne.fov=i/t<1?30/Math.max(i/t,.55):30,ne.updateProjectionMatrix()}window.addEventListener("resize",vh);new ResizeObserver(vh).observe(In);vh();const n1=matchMedia("(max-width: 640px)");let No=0;function i1(i){const t=Br.isOpen()&&n1.matches?Br.panel.offsetHeight*.5:0;if(No=Tn(No,t,9,i),No>.5){const e=In.clientWidth||window.innerWidth,n=In.clientHeight||window.innerHeight;ne.setViewOffset(e,n,0,No,e,n)}else ne.view?.enabled&&ne.clearViewOffset()}Ab.then(()=>requestAnimationFrame(()=>Eb()));Or||pp(!0);let ns=!1;function Dp(i){ns=i,document.body.classList.toggle("paused",i)}const Xo=new Y0;Xo.connect(document);let Ni=0;ke.setAnimationLoop(i=>{Xo.update(i);const t=ns?0:Math.min(Xo.getDelta(),1/20);ns&&Xo.getDelta(),Ni+=t,Xb(ns?1/60:t),i1(ns?1/60:t),Pe.update(),ra.material.uniforms.uTime.value=Ni,ra.mesh.position.copy(ne.position);const e=Cp&&!aa&&performance.now()-_p<300;Gd&&!e&&ar.moveOn(At.mind),Gd=e,ar.interest=e?.95:.35,ar.billOn=e?.8:.46,ar.pursuit=e?1:0;let n=e?null:zi.flyNear(Wo,1.1);if(n&&t>0){const r=Cd.distanceTo(n)/t>.1;Cd.copy(n),r||(n=null)}n?Po<0&&(Po=Ni):Po=-1;const s=n&&Ni-Po<.8?n:null;s&&(ar.interest=.95),At.setAttention(e?gp:s??ne.position),Yo.lerp(es?yh:a1,1-Math.exp(-t*6)),va&&wc&&!Vs&&(xi=Math.min(1,xi+t/1.6),xi===1&&(wc=!1)),xi===1&&Ic&&(Ic=!1,un.endDrawing(),Up.dispose()),Hb(t),Lo.length=0,Ld(Lo,ri.food()),Ld(Lo,Xn.food()),At.setFood(Lo),Pb(t),At.update(t),At.headPosition(Wo),Cb(t),Kb(),ri.update(t,Ni,Td,Wo),Xn.update(t,Ni,Td),zi.update(t),t1(t),Np()});const s1=new ge,r1=new Vn,Xd=new ge;let qd=3;const Uo=new Dt;function cr(i,t,e){return Math.sin(i*t+e)*.6+Math.sin(i*t*2.31+e*1.7)*.3+Math.sin(i*t*5.13+e*2.9)*.1}function o1(i,t){i>qd&&(Uo.set((Math.random()-.5)*.12,(Math.random()-.5)*.09),qd=i+4+Math.random()*9),Uo.multiplyScalar(Math.exp(-.016666666666666666*5));const e=_h*Qe.DEG2RAD,n=(cr(i,.35,1.3)*.16+cr(i,7.3,4.1)*.018+Uo.x)*e,s=(cr(i,.27,2.7)*.12+cr(i,8.1,5.9)*.016+Uo.y)*e,r=cr(i,.22,.4)*.1*e;return r1.set(s,n,r,"YXZ")}const El=document.querySelector(".gyro");Wi&&document.body.classList.add("touch");let es=!1,qo=null;const yh=new Dt,Yo=new Dt,a1=new Dt;function Yd(i){if(i.beta===null||i.gamma===null)return;const t=screen.orientation?.angle??0,[e,n]=t===90?[i.beta,-i.gamma]:t===270?[-i.beta,i.gamma]:t===180?[-i.gamma,-i.beta]:[i.gamma,i.beta];qo??={x:e,y:n};const s=Qe.DEG2RAD;yh.set(Qe.clamp((e-qo.x)*.5,-12,12)*s,Qe.clamp((n-qo.y)*.4,-8,8)*s)}El?.addEventListener("click",async()=>{if(es)window.removeEventListener("deviceorientation",Yd),es=!1;else{const i=DeviceOrientationEvent.requestPermission;if(i)try{if(await i()!=="granted")return}catch{return}qo=null,window.addEventListener("deviceorientation",Yd),es=!0}es||yh.set(0,0),El.classList.toggle("on",es),El.setAttribute("aria-pressed",String(es))});const Kd=new y,hr=new y,Zd=new y;function Np(){Kd.copy(ne.position),Xd.copy(ne.quaternion),Yo.lengthSq()>1e-8&&(hr.copy(ne.position).sub(Pe.target),hr.applyAxisAngle(ne.up,-Yo.x),Zd.crossVectors(ne.up,hr).normalize(),hr.applyAxisAngle(Zd,Yo.y),ne.position.copy(Pe.target).add(hr),ne.lookAt(Pe.target)),_h>0&&ne.quaternion.multiply(s1.setFromEuler(o1(Ni))),ne.updateMatrixWorld(),c1(),ne.position.copy(Kd),ne.quaternion.copy(Xd),ne.updateMatrixWorld()}const Up=new Hn({color:16777215,wireframe:!0}),$d=[ra.mesh,zi.group,At.feathers.contour,At.feathers.flight,At.feathers.fuzz],Jd=[];let Ic=!0;function l1(){Ic=!0,$d.forEach((i,t)=>{Jd[t]=i.visible,i.visible=!1}),Ce.overrideMaterial=Up,ke.render(Ce,ne),Ce.overrideMaterial=null,$d.forEach((i,t)=>i.visible=Jd[t])}let jd=!0;function c1(){if(jd&&(jd=!1,In.classList.remove("pending")),!Or)return ke.render(Ce,ne);un.focusOn(Ec),un.grade.uReveal.value=Qe.smoothstep(xi,0,1),un.render(Ce,ne,Ni,va&&xi===1?null:l1),Mh&&xi===1&&!Vs&&u1()}let Mh=!0,Fo=new Uint8Array(4),Tl=null,Al=null;const h1=document.querySelector('meta[name="theme-color"]');function u1(){if(Al)return;Mh=!1;const i=ke.getContext();ke.setRenderTarget(null);const t=i.drawingBufferWidth;Fo.length!==t*4&&(Fo=new Uint8Array(t*4)),Tl??=i.createBuffer(),i.bindBuffer(i.PIXEL_PACK_BUFFER,Tl),i.bufferData(i.PIXEL_PACK_BUFFER,Fo.byteLength,i.STREAM_READ),i.readPixels(0,1,t,1,i.RGBA,i.UNSIGNED_BYTE,0),i.bindBuffer(i.PIXEL_PACK_BUFFER,null);const e=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);if(!e)return;Al=e,i.flush();const n=Fo,s=()=>{const r=i.clientWaitSync(e,0,0);if(r===i.TIMEOUT_EXPIRED)return void setTimeout(s,8);i.deleteSync(e),Al=null,r!==i.WAIT_FAILED&&(i.bindBuffer(i.PIXEL_PACK_BUFFER,Tl),i.getBufferSubData(i.PIXEL_PACK_BUFFER,0,n),i.bindBuffer(i.PIXEL_PACK_BUFFER,null),d1(n,t))};setTimeout(s,8)}function d1(i,t){let e=0,n=0,s=0;const r=9;for(let a=0;a<r;a++){const l=Math.round((a+.5)/r*(t-1))*4;e+=i[l],n+=i[l+1],s+=i[l+2]}const o=`rgb(${Math.round(e/r)}, ${Math.round(n/r)}, ${Math.round(s/r)})`;document.documentElement.style.background=o,h1?.setAttribute("content",o)}let Qd=0;window.addEventListener("resize",()=>{clearTimeout(Qd),Qd=window.setTimeout(()=>Mh=!0,400)});Object.assign(window,{__scene:Ce,__camera:ne,__renderer:ke,__controls:Pe,__post:un,__frame:Np,__seeds:ri,__insects:Xn,__ambient:zi,__sway:Dn});
