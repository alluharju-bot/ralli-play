import{az as S,aK as b,T as C,R as w,p as M}from"./three.module-DDI2G13Y.js";const c=(e,a,t)=>Math.max(a,Math.min(t,e)),k=e=>c(e,0,1),d=(e,a,t)=>e+(a-e)*t,W=(e,a,t)=>e===a?0:k((t-e)/(a-e)),f=(e,a,t)=>{const s=W(e,a,t);return s*s*(3-2*s)},z=(e,a,t,s)=>d(e,a,1-Math.exp(-t*s)),g=(e,a,t=0)=>{let s=Math.imul(e+t*374761393,668265263)^Math.imul(a+t*69069,2246822519);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967295},A=(e,a,t=0)=>{const s=Math.floor(e),r=Math.floor(a),l=e-s,n=a-r,o=l*l*(3-2*l),v=n*n*(3-2*n),i=g(s,r,t),p=g(s+1,r,t),h=g(s,r+1,t),x=g(s+1,r+1,t);return d(d(i,p,o),d(h,x,o),v)},D=e=>1.12-f(6,13,e)*.1,F=e=>.022+f(6,13,e)*.055,u=e=>e>8?"grass":"gravel",H={grass:{color:"#789c42",size:.045,drag:2.8,life:1.1,gravity:3.8,shape:1},mud:{color:"#62503e",size:.065,drag:.6,life:.65,gravity:9.81,shape:0},water:{color:"#bbdce0",size:.09,drag:.8,life:.8,gravity:9.81,shape:0},smoke:{color:"#adbac0",size:.22,drag:3.2,life:1.25,gravity:-.7,shape:2},snow:{color:"#e5f2f4",size:.085,drag:1.5,life:1.25,gravity:9.81,shape:0},gravel:{color:"#887965",size:.045,drag:.35,life:.85,gravity:9.81,shape:0},sand:{color:"#c5a677",size:.11,drag:2.4,life:1.5,gravity:9.81,shape:0}},y={snow:{response(e,{depth:a}){e.grip=.98-f(.18,.6,a)*.4,e.tire=a>.24?"powder":"packedSnow",e.resistance=e.grip<.7?.055:.015},wetGripLoss:.06,spray:{kind:"snow",amount:.8},audio:{gain:1,cutoff:900},trail:{kind:"snow",center:"#e5f2f4",edge:"#e5f2f4",ridge:0,life:0}},asphalt:{response(e,{distance:a,painted:t}){const s=t?0:a;e.grip=1-f(6,10,s)*.18,e.resistance=.012+f(6,10,s)*.065,e.tire=s<7?"asphalt":u(s),s>=7&&(e.material=e.tire==="grass"?"grass":"gravel")},wetGripLoss:.12,spray:{kind:"smoke",amount:.35},audio:{gain:1,cutoff:4800},trail:{kind:"rubber",center:"#171f25",edge:"#171f25",ridge:0,life:240}},gravel:{response(e,{distance:a,painted:t,firmGravel:s}){const r=t?0:a;e.grip=D(r)+(s?.08:0),e.resistance=F(r)*(s?.75:1.6),e.tire=!s&&r<8?"looseGravel":u(r),r>8&&(e.material="grass")},wetGripLoss:.06,spray:{kind:"gravel",amount:1},audio:{gain:1,cutoff:3200},trail:{kind:"loose",center:"#6e604e",edge:"#6e604e",ridge:0,life:150},layer:{depth:.04,compression:.2,depression:.15,roughness:.94,fullDepth:.025,packedSpray:.35}},sand:{response(e){e.grip=.91,e.resistance=.072,e.tire="looseGravel"},wetGripLoss:.06,spray:{kind:"sand",amount:1},audio:{gain:1,cutoff:1500},trail:{kind:"loose",center:"#817052",edge:"#cfb784",ridge:.028,life:150},layer:{depth:.1,compression:.5,depression:.45,roughness:.92,fullDepth:.06,packedSpray:.3}},mud:{response(e){e.grip=.75,e.resistance=.095,e.tire="looseGravel"},wetGripLoss:.06,spray:{kind:"mud",amount:1},audio:{gain:1,cutoff:650},trail:{kind:"loose",center:"#342b25",edge:"#78604a",ridge:.008,life:100},layer:{depth:.08,compression:.7,depression:.6,roughness:.45,fullDepth:.045,packedSpray:.7}},grass:{response(e){e.grip=1.02,e.resistance=.077,e.tire="grass"},wetGripLoss:.06,spray:{kind:"grass",amount:.65},audio:{gain:.65,cutoff:1100},trail:{kind:"grass",center:"#655038",edge:"#746046",ridge:0,life:150}}};function P(e,a,t){if(e.waterDepth>.015)return t.kind="water",t.amount=c(e.waterDepth*7,.15,1),t;const s=y[e.material].spray;t.kind=s.kind,t.amount=s.amount,e.material==="asphalt"&&(t.amount*=a),e.material==="snow"&&e.layerDepth!==void 0&&(t.amount*=c(e.layerDepth/.12,0,1)*(1-.45*c(e.layerCompaction??0,0,1)));const r=y[e.material].layer;return r&&e.layerDepth!==void 0&&(t.amount*=c(e.layerDepth/r.fullDepth,0,1)*(1-(1-r.packedSpray)*c(e.layerCompaction??0,0,1))),t}let m;function _(){if(!m){const e=new C,a=(t,s=!1)=>{const r=e.load(`./textures/road/asphalt-${t}.jpg`);return r.wrapS=r.wrapT=w,r.anisotropy=8,s&&(r.colorSpace=M),r};m={map:a("color",!0),normalMap:a("normal"),roughnessMap:a("roughness")}}return m}function B(e,a){if(typeof document>"u")return;const t=e.attributes.position,s=new Float32Array(t.count*2);for(let o=0;o<t.count;o++)s[o*2]=t.getX(o)/2.3,s[o*2+1]=t.getZ(o)/2.3;e.setAttribute("uv",new S(s,2)),Object.assign(a,_()),a.normalScale.set(.3,.3),a.roughness=.76;const r=a.onBeforeCompile,l=a.customProgramCacheKey.bind(a),n=l();a.customProgramCacheKey=()=>n+":asphalt-stochastic-5",a.onBeforeCompile=(o,v)=>{r.call(a,o,v),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec2 asphaltWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
asphaltWorld=(modelMatrix*vec4(position,1.)).xz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
      varying vec2 asphaltWorld;
      float asphaltHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float asphaltNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(asphaltHash(i),asphaltHash(i+vec2(1,0)),f.x),mix(asphaltHash(i+vec2(0,1)),asphaltHash(i+vec2(1)),f.x),f.y);}
      vec3 asphaltWeights;
      mat2 asphaltA,asphaltB,asphaltC;
      vec2 asphaltOffsetA,asphaltOffsetB,asphaltOffsetC;
      mat2 asphaltTransform(vec2 cell){
        float angle=asphaltHash(cell+vec2(31.,17.))*6.2831853;
        float c=cos(angle),s=sin(angle),scale=.84+asphaltHash(cell+vec2(73.,9.))*.38;
        return mat2(c,s,-s,c)*scale;
      }
      vec2 asphaltOffset(vec2 cell){return vec2(asphaltHash(cell+vec2(19.,43.)),asphaltHash(cell+vec2(47.,11.)))*23.;}
      void asphaltSetup(vec2 uv){
        // A triangular lattice blends three independently transformed patches.
        // Every cell has its own seed; there is no short repeating offset list.
        vec2 skew=vec2(uv.x-uv.y*.577350269,uv.y*1.154700538)*.65;
        vec2 cell=floor(skew),f=fract(skew),a,b,c;
        if(f.x+f.y<1.){a=cell;b=cell+vec2(1,0);c=cell+vec2(0,1);asphaltWeights=vec3(1.-f.x-f.y,f.x,f.y);}
        else{a=cell+vec2(1);b=cell+vec2(0,1);c=cell+vec2(1,0);asphaltWeights=vec3(f.x+f.y-1.,1.-f.x,1.-f.y);}
        asphaltWeights*=asphaltWeights;asphaltWeights/=dot(asphaltWeights,vec3(1));
        asphaltA=asphaltTransform(a);asphaltB=asphaltTransform(b);asphaltC=asphaltTransform(c);
        asphaltOffsetA=asphaltOffset(a);asphaltOffsetB=asphaltOffset(b);asphaltOffsetC=asphaltOffset(c);
      }
      vec4 asphaltPatch(sampler2D tex,vec2 uv,vec2 dx,vec2 dy,mat2 transform,vec2 offset,bool normalMapSample){
        // Explicit derivatives exclude cell-boundary jumps, preventing stripes.
        vec4 sampled=textureGrad(tex,transform*uv+offset,transform*dx,transform*dy);
        if(normalMapSample){vec2 n=sampled.xy*2.-1.;sampled.xy=(transpose(transform)*n/length(transform[0]))*.5+.5;}
        return sampled;
      }
      vec4 asphaltSample(sampler2D tex,vec2 uv,bool normalMapSample){
        vec2 dx=dFdx(uv),dy=dFdy(uv);
        return asphaltPatch(tex,uv,dx,dy,asphaltA,asphaltOffsetA,normalMapSample)*asphaltWeights.x
          +asphaltPatch(tex,uv,dx,dy,asphaltB,asphaltOffsetB,normalMapSample)*asphaltWeights.y
          +asphaltPatch(tex,uv,dx,dy,asphaltC,asphaltOffsetC,normalMapSample)*asphaltWeights.z;
      }`);for(const[i,p,h]of[["map_fragment","map","vMapUv"],["roughnessmap_fragment","roughnessMap","vRoughnessMapUv"],["normal_fragment_maps","normalMap","vNormalMapUv"]])o.fragmentShader=o.fragmentShader.replace("#include <"+i+">",(i==="map_fragment"?`asphaltSetup(vMapUv);
`:"")+b[i].replaceAll("texture2D( "+p+", "+h+" )","asphaltSample( "+p+", "+h+", "+(p==="normalMap"?"true":"false")+" )"));o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float asphaltMacro=asphaltNoise(asphaltWorld*.024)*.55+asphaltNoise(asphaltWorld*.09+vec2(41,7))*.3+asphaltNoise(asphaltWorld*.31)*.15;
      float asphaltWeather=asphaltNoise(asphaltWorld*.021+vec2(13.,47.));
      diffuseColor.rgb=mix(vec3(dot(diffuseColor.rgb,vec3(.2126,.7152,.0722))),diffuseColor.rgb,.48);
      diffuseColor.rgb*=.68+asphaltMacro*.65;
      diffuseColor.rgb*=mix(vec3(.96,.985,1.035),vec3(1.045,1.01,.96),asphaltWeather);
      float aggregate=asphaltNoise(asphaltWorld*7.);
      float grainContrast=.12+.1*asphaltNoise(asphaltWorld*.6+vec2(53,21));
      float grainFootprint=max(length(dFdx(asphaltWorld*7.)),length(dFdy(asphaltWorld*7.)));
      diffuseColor.rgb*=mix(1.,1.+(aggregate-.5)*grainContrast,(1.-smoothstep(.35,1.2,grainFootprint))*(1.-smoothstep(10.,38.,length(vViewPosition))));`),o.fragmentShader=o.fragmentShader.replace("roughnessFactor *= texelRoughness.g;","roughnessFactor *= texelRoughness.g; roughnessFactor*=.9+.22*asphaltNoise(asphaltWorld*.045+vec2(61,7));")}}function E(e,a){const t=e.onBeforeCompile,r=e.customProgramCacheKey.bind(e)();e.customProgramCacheKey=()=>`${r}:environment-1:${a}`,e.onBeforeCompile=(l,n)=>{t.call(e,l,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vEnvDetail;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vEnvDetail=(modelMatrix*vec4(position,1.)).xyz;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vEnvDetail;
      float envHash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}`).replace("#include <color_fragment>",`#include <color_fragment>
        float fineDetail=envHash(floor(vEnvDetail*${a==="metal"?"45.":"30."}));
        float weathering=envHash(floor(vEnvDetail*1.8));
        float detailFade=1.-smoothstep(18.,70.,length(vViewPosition));
        diffuseColor.rgb*=mix(1.,.91+fineDetail*.15,detailFade);
        ${a==="concrete"?"float seam=1.-smoothstep(.004,.012,abs(fract(vEnvDetail.y/1.4)-.5));diffuseColor.rgb*=1.-seam*.16;diffuseColor.rgb*=.93+weathering*.1;":a==="metal"?"diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.66,.47,.3),step(.96,weathering)*.2);":""}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor=clamp(roughnessFactor+(envHash(floor(vEnvDetail*12.))-.5)*${a==="metal"?".22":".08"},.24,1.);`)}}export{y as S,B as a,P as b,c,z as d,E as e,H as f,d as l,f as s,A as v};
