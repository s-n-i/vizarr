var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,i=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&l(e,n,t[n]);if(a)for(var n of a(t))o.call(t,n)&&l(e,n,t[n]);return e},s=(e,a)=>t(e,n(a));import{X as c,C as m,p as u,S as p,T as d,Q as h,o as f,a as g,b as y,Z as w,M as x,H as E,c as b,G as v,D as _,d as P,I as A,e as I,s as S,w as C,f as O,u as k,R as z,g as F,r as j,h as M,O as $,i as L,V,j as R,k as N,A as B,l as D,m as T,N as q,n as W,P as U,q as G,t as H,v as J,x as Z,y as X,z as Y,L as K,B as Q,E as ee,F as te,J as ne,K as ae,U as re,W as oe,Y as le,_ as ie,$ as se,a0 as ce,a1 as me}from"./vendor.da9c3c39.js";let ue;const pe={},de=function(e,t){if(!t||0===t.length)return e();if(void 0===ue){const e=document.createElement("link").relList;ue=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in pe)return;pe[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":ue,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},he=s(i({},c.defaultProps),{loaders:{type:"array",value:[],compare:!0},spacer:{type:"number",value:5,compare:!0},rows:{type:"number",value:0,compare:!0},columns:{type:"number",value:0,compare:!0},concurrency:{type:"number",value:10,compare:!1},text:{type:"boolean",value:!1,compare:!0},onClick:{type:"function",value:null,compare:!0},onHover:{type:"function",value:null,compare:!0}});function fe(e,t,n=[0,0],a=1){const[r,o]=n;return[r,t*a+o,e*a+r,o]}function ge(e){const{loaders:t,loaderSelection:n=[]}=e;let{concurrency:a}=e;a&&n.length>0&&(a=Math.ceil(a/n.length));return u(t,(async e=>{const t=n.map((t=>e.loader.getRaster({selection:t}))),a=await Promise.all(t);return s(i({},e),{data:{data:a.map((e=>e.data)),width:a[0].width,height:a[0].height}})}),{concurrency:a})}class ye extends m{initializeState(){this.state={gridData:[],width:0,height:0},ge(this.props).then((e=>{const{width:t,height:n}=function(e){const[t]=e,{width:n,height:a}=t.data;return e.forEach((({data:e})=>{if((null==e?void 0:e.width)!==n||(null==e?void 0:e.height)!==a)throw new Error("Grid data is not same shape.")})),{width:n,height:a}}(e);this.setState({gridData:e,width:t,height:n})}))}updateState({props:e,oldProps:t,changeFlags:n}){const{propsChanged:a}=n,r="string"==typeof a&&a.includes("props.loaders"),o=e.loaderSelection!==t.loaderSelection;(r||o)&&ge(this.props).then((e=>{this.setState({gridData:e})}))}getPickingInfo({info:e}){if(!e.coordinate)return e;const t=this.props.spacer||0,{width:n,height:a}=this.state,[r,o]=e.coordinate,l=Math.floor(o/(a+t)),i=Math.floor(r/(n+t));return e.gridCoord={row:l,column:i},e}renderLayers(){const{gridData:e,width:t,height:n}=this.state;if(0===t||0===n)return null;const{rows:a,columns:r,spacer:o=0,id:l=""}=this.props,s=e.map((e=>{const a=e.row*(n+o),r=e.col*(t+o),s={channelData:e.data,bounds:fe(t,n,[r,a]),id:`${l}-GridLayer-${e.row}-${e.col}`,dtype:e.loader.dtype||"Uint16",pickable:!1};return new c(i(i({},this.props),s))}));if(this.props.pickable){const[e,c]=[0,0],m=a*(n+o),u=r*(t+o),d={data:[{polygon:[[c,e],[u,e],[u,m],[c,m]]}],getPolygon:e=>e.polygon,getFillColor:[0,0,0,0],getLineColor:[0,0,0,0],pickable:!0,id:`${l}-GridLayer-picking`},h=new p(i(i({},this.props),d));s.push(h)}if(this.props.text){const a=new d({id:`${l}-GridLayer-text`,data:e,getPosition:e=>[e.col*(t+o),e.row*(n+o)],getText:e=>e.name,getColor:[255,255,255,255],getSize:16,getAngle:0,getTextAnchor:"start",getAlignmentBaseline:"top"});s.push(a)}return s}}ye.layerName="GridLayer",ye.defaultProps=he;class we{constructor(e,t=100){this.store=e,this.cache=new h({maxSize:t})}getItem(...e){const[t,n]=e;if(this.cache.has(t))return this.cache.get(t);const a=this.store.getItem(t,n).catch((e=>{throw this.cache.delete(t),e}));return this.cache.set(t,a),a}async containsItem(e){return this.cache.has(e)||this.store.containsItem(e)}keys(){return this.store.keys()}deleteItem(e){throw new Error("deleteItem not implemented")}setItem(e,t){throw new Error("setItem not implemented")}}const xe={cyan:"#00FFFF",yellow:"#FFFF00",magenta:"#FF00FF",red:"#FF0000",green:"#00FF00",blue:"#0000FF",white:"#FFFFFF"},Ee=[xe.magenta,xe.green],be=[xe.red,xe.green,xe.blue],ve=Object.values(xe).slice(0,-2);async function _e(e){const{store:t,path:n}=await async function(e){let t;if("string"==typeof e){let n;if(e.endsWith(".json")){const[{ReferenceStore:t},a]=await Promise.all([de((()=>import("./index.709bf6a3.js")),[]),fetch(e).then((e=>e.json()))]);n=t.fromJSON(a)}else{const a=new URL(e);n=new E(a.origin),t=a.pathname.slice(1)}return{store:new we(n),path:t}}return{store:e,path:t}}(e);return f(t,n).catch((e=>{if(e instanceof g)return y({store:t});throw e}))}async function Pe(e,t){const{datasets:n}=t[0]||[{path:"0"}],a=await Promise.all(n.map((({path:t})=>e.getItem(t))));if(a.every((e=>e instanceof w)))return a;throw Error("Multiscales metadata included a path to a group.")}function Ae(e){e.startsWith("#")&&(e=e.slice(1));return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function Ie(e){return Array.from({length:e},((e,t)=>t))}function Se(...e){return e.filter(Boolean).map((e=>function(e,t=" "){for(;e.length>0&&t.includes(e.charAt(e.length-1));)e=e.substr(0,e.length-1);return e}(e,"/"))).join("/")}function Ce(e){const t=e[e.length-1];return 3===t||4===t}function Oe(e){const t=Ce(e.shape),[n,a]=e.chunks.slice(t?-3:-2),r=Math.min(n,a);return 2**Math.floor(Math.log2(r))}function ke(e){if(!e)return new x;const t=new x;try{const a="string"==typeof e?JSON.parse(e):e;if(n=a,!Array.isArray(n)||16!==n.length||!n.every((e=>"number"==typeof e)))throw Error("Invalid modelMatrix size. Must be 16.");t.setRowMajor(...a)}catch{const t=`Failed to parse modelMatrix. Got ${JSON.stringify(e)}, using identity.`;console.warn(t)}var n;return t}async function ze(e,t,n){var a,r;if(!("columns"in n)||!("rows"in n))throw Error("Plate .zattrs missing columns or rows");const o=n.rows.map((e=>e.name)),l=n.columns.map((e=>e.name)),c=n.wells.map((e=>e.path)),m=await t.getItem(c[0]).then((e=>e.attrs.asObject()));if(!("well"in m))throw Error("Path for image is not valid, not a well.");const p=m.well.images[0].path,d=await t.getItem(Se(c[0],p)).then((e=>e.attrs.asObject()));if(!("omero"in d))throw Error("Path for image is not valid.");const{datasets:h}=d.multiscales[0],f=h[h.length-1].path,g=await u(c.map((e=>[e,Se(e,p,f)])),(([e,n])=>t.getItem(n).then((t=>[e,t]))),{concurrency:10}),y=await Promise.all(g),w=je(d.multiscales),x=Fe(d.omero,w),E=Oe(y[0][1]),v=y.map((e=>{const[t,n]=e[0].split("/");return{name:`${t}${n}`,row:o.indexOf(t),col:l.indexOf(n),loader:new b(e[1],w,E)}})),_=s(i({loaders:v},x),{axis_labels:w,loader:[v[0].loader],model_matrix:ke(e.model_matrix),defaults:{selection:x.defaultSelection,colormap:null!=(a=e.colormap)?a:"",opacity:null!=(r=e.opacity)?r:1},name:n.name||"Plate",rows:o.length,columns:l.length});return _.onClick=n=>{let a=n.gridCoord;if(!a)return;const{row:r,column:i}=a;let s;"string"!=typeof e.source||!t.path||isNaN(r)||isNaN(i)||(s=Se(e.source,o[r],l[i])),e.onClick?(delete n.layer,n.imageSource=s,e.onClick(n)):s&&window.open(window.location.origin+window.location.pathname+"?source="+s)},_}function Fe({rdefs:e,channels:t,name:n},a){var r,o;const l=null!=(r=e.defaultT)?r:0,i=null!=(o=e.defaultZ)?o:0,s=[],c=[],m=[],u=[];t.forEach((e=>{s.push(e.color),c.push([e.window.start,e.window.end]),m.push(e.active),u.push(e.label)}));const p=a.map((e=>"t"==e?l:"z"==e?i:0));return{name:n,names:u,colors:s,contrast_limits:c,visibilities:m,channel_axis:a.includes("c")?a.indexOf("c"):null,defaultSelection:p}}function je(e){return e[0].axes||["t","c","z","y","x"]}function Me(e){const{loader:t,channel_axis:n,colors:a,visibilities:r,contrast_limits:o,model_matrix:l,defaults:i,loaders:s,rows:c,columns:m,onClick:u}=e,{selection:p,opacity:d,colormap:h}=i,f=function(e){return e.loaders?ye:e.loader.length>1?P:A}(e),g=[],y=[],w=[],x=[],E=r.flatMap(((e,t)=>e?t:[]));for(const v of E){if(Number.isInteger(n)){const e=[...p];e[n]=v,g.push(e)}else g.push(p);y.push(Ae(a[v])),w.push(o[v]),x.push(!0)}const b=[...w];if(!(t[0].dtype in _))throw Error(`Dtype not supported, must be ${JSON.stringify(Object.keys(_))}`);return{Layer:f,layerProps:{loader:1===t.length?t[0]:t,loaders:s,rows:c,columns:m,loaderSelection:g,colorValues:y,sliderValues:b,contrastLimits:w,channelIsOn:x,opacity:d,colormap:h,modelMatrix:l,onClick:u},on:!0}}var $e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",createSourceData:async function(e){var t;const n=await _e(e.source);let a;if(n instanceof v){const t=await n.attrs.asObject();if("plate"in t)return ze(e,n,t.plate);if("well"in t)return async function(e,t,n){var a,r,o,l;const c=e.acquisition?parseInt(e.acquisition):void 0;let m=[];if(!(null==n?void 0:n.images))throw Error("Well .zattrs missing images");if(!t.path)throw Error("Cannot inspect zarr path to open well.");const[u,p]=t.path.split("/").filter(Boolean).slice(-2);let{images:d}=n;const h=d.flatMap((e=>e.acquisition?[e.acquisition]:[]));if(h.length>1){const e=t.path.replace(`${u}/${p}`,""),n=await f(t.store,e),o=await n.attrs.asObject();m=null!=(r=null==(a=null==o?void 0:o.plate)?void 0:a.acquisitions)?r:[],c&&h.includes(c)&&(d=d.filter((e=>e.acquisition===c)))}const g=d.map((e=>e.path)),y=Math.ceil(Math.sqrt(g.length)),w=Math.ceil(g.length/y),x=await t.getItem(g[0]).then((e=>e.attrs.asObject()));if(!("omero"in x))throw Error("Path for image is not valid.");let E=x.multiscales[0].datasets[0].path;const v=g.map((e=>t.getItem(Se(e,E)))),_=await Promise.all(v),P=je(x.multiscales),A=Fe(x.omero,P),I=Oe(_[0]),S=Ie(w).flatMap((e=>Ie(y).map((t=>{const n=t+e*y;return{name:String(n),row:e,col:t,loader:new b(_[n],P,I)}})))),C=s(i({loaders:S},A),{axis_labels:P,loader:[S[0].loader],model_matrix:ke(e.model_matrix),defaults:{selection:A.defaultSelection,colormap:null!=(o=e.colormap)?o:"",opacity:null!=(l=e.opacity)?l:1},name:`Well ${u}${p}`});return m.length>0&&(C.acquisitions=m,C.acquisitionId=c||-1),C.rows=w,C.columns=y,C.onClick=n=>{let a=n.gridCoord;if(!a)return;const{row:r,column:o}=a;let l;if("string"==typeof e.source&&t.path&&!isNaN(r)&&!isNaN(o)){const t=r*y+o;l=Se(e.source,g[t])}e.onClick?(delete n.layer,n.imageSource=l,e.onClick(n)):l&&window.open(window.location.origin+window.location.pathname+"?source="+l)},C}(e,n,t.well);if("omero"in t)return async function(e,t,n){var a;const{name:r,opacity:o=1,colormap:l=""}=e,s=await Pe(t,n.multiscales),c=je(n.multiscales),m=Fe(n.omero,c),u=Oe(s[0]),p=s.map((e=>new b(e,c,u)));return i({loader:p,axis_labels:c,name:null!=(a=m.name)?a:r,model_matrix:ke(e.model_matrix),defaults:{selection:m.defaultSelection,colormap:l,opacity:o}},m)}(e,n,t);if(0===Object.keys(t).length&&n.path){const t=n.path.slice(0,n.path.lastIndexOf("/")),a=await f(n.store,t),r=await a.attrs.asObject();if("plate"in r)return ze(e,a,r.plate)}if(!("multiscales"in t))throw Error("Group is missing multiscales specification.");a=await Pe(n,t.multiscales),e.axis_labels||(e.axis_labels=t.multiscales[0].axes)}else a=[n];const r=function(e,t){t&&t.length==e.shape.length||(t=e.shape.slice(0,-2).map(((e,t)=>""+t)).concat(["y","x"]));return t}(a[0],e.axis_labels),o=Oe(a[0]),l=a.map((e=>new b(e,r,o))),[c]=l,m="Float32"===c.dtype?1:_[c.dtype].max;if("channel_axis"in e||r.includes("c"))return(e=e).channel_axis=null!=(t=e.channel_axis)?t:r.indexOf("c"),function(e,t,n){const{names:a,channel_axis:r,name:o,model_matrix:l,opacity:i=1,colormap:s=""}=e;let{contrast_limits:c,visibilities:m,colors:u}=e;const p=t[0].shape[r];for(const d of[c,m,a,u])if(d&&d.length!==p){const e=Object.keys({channelProp:d})[0];throw Error(`channel_axis is length ${p} and provided channel_axis property ${e} is different size.`)}if(m||(m=p<=6?Array(p).fill(!0):[...Array(6).fill(!0),...Array(p-6).fill(!1)]),!u)if(1==p)u=[xe.white];else if(2==p)u=Ee;else if(3===p)u=be;else if(p<=6)u=ve.slice(0,p);else{u=Array(p).fill(xe.white);const e=m.flatMap(((e,t)=>e?t:[]));for(const[t,n]of e.entries())u[n]=ve[t]}return{loader:t,name:o,channel_axis:Number(r),colors:u,names:null!=a?a:Ie(p).map((e=>`channel_${e}`)),contrast_limits:null!=c?c:Array(p).fill([0,n]),visibilities:m,model_matrix:ke(e.model_matrix),defaults:{selection:Array(t[0].shape.length).fill(0),colormap:s,opacity:i},axis_labels:t[0].labels}}(e,l,m);if(2===c.shape.length||!("channel_axis"in e))return function(e,t,n){const{color:a,contrast_limits:r,visibility:o,name:l,colormap:i="",opacity:s=1}=e;return{loader:t,name:l,channel_axis:null,colors:[null!=a?a:xe.white],names:["channel_0"],contrast_limits:[null!=r?r:[0,n]],visibilities:[null==o||o],model_matrix:ke(e.model_matrix),defaults:{selection:Array(t[0].shape.length).fill(0),colormap:i,opacity:s},axis_labels:t[0].labels}}(e,l,m);throw Error("Failed to load image.")},initLayerStateFromSource:Me});const Le=I([]),Ve=I({zoom:0,target:[0,0,0],default:!0}),Re=S(Le),Ne=O((e=>I(s(i({},Me(e)),{id:e.id}))),((e,t)=>e.id===t.id)),Be=I((e=>{const t=e(Re);if(0===t.length)return[];const n=t.map((t=>Ne(e(t))));return e(C(n))}));function De({layers:e}){var t,n;const[a,r]=F(Ve),o=j.exports.useRef(null);if(o.current&&(null==a?void 0:a.default)&&(null==(n=null==(t=e[0])?void 0:t.props)?void 0:n.loader)){const{deck:t}=o.current,{width:n,height:a,maxZoom:l}=function(e){const{loader:t,rows:n,columns:a}=e,[r,o]=Array.isArray(t)?[t[0],t.length]:[t,0],l=Ce(r.shape);let[i,s]=r.shape.slice(l?-3:-2);if(n&&a){const e=5;i=(i+e)*n,s=(s+e)*a}return{height:i,width:s,maxZoom:o}}(e[0].props),i=t.width<400?10:t.width<600?30:50,{zoom:s,target:c}=function([e,t],[n,a],r,o){const l=(n-2*o)/e,i=(a-2*o)/t;return{zoom:Math.min(r,Math.log2(Math.min(l,i))),target:[e/2,t/2,0]}}([n,a],[t.width,t.height],l,i);r({zoom:s,target:c})}return z.createElement(M,{ref:o,layers:e,viewState:a,onViewStateChange:e=>r(e.viewState),views:[new $({id:"ortho",controller:!0})]})}function Te(){const e=k(Be).map((e=>e.on?new e.Layer(e.layerProps):null));return z.createElement(De,{layers:e})}function qe({sourceAtom:e,layerAtom:t}){const n=k(e),[a,r]=F(t);return z.createElement(L,{"aria-label":`toggle-layer-visibility-${n.id}`,onClick:e=>{e.stopPropagation(),r((e=>{const t=!e.on;return s(i({},e),{on:t})}))},style:{backgroundColor:"transparent",marginTop:"2px",color:`rgb(255, 255, 255, ${a.on?1:.5})`}},a.on?z.createElement(V,null):z.createElement(R,null))}const We=N({root:{borderBottom:"1px solid rgba(150, 150, 150, .125)",backgroundColor:"rgba(150, 150, 150, 0.25)",display:"block",padding:"0 3px",height:27,minHeight:27,overflow:"hidden",transition:"none","&$expanded":{minHeight:27}},content:{margin:0,"&$expanded":{margin:0}},expanded:{}})(B);function Ue({sourceAtom:e,layerAtom:t,name:n}){const a=`layer-controller-${k(e).id}`;return z.createElement(We,{"aria-controls":a,id:a},z.createElement("div",{style:{display:"flex",flexDirection:"row"}},z.createElement(qe,{sourceAtom:e,layerAtom:t}),z.createElement(D,{style:{marginTop:"4px",marginLeft:"5px"},variant:"body2"},n)))}function Ge({sourceAtom:e}){const t=k(e),{acquisitionId:n,acquisitions:a}=t;if(!a)return null;return z.createElement(z.Fragment,null,z.createElement(T,null,z.createElement(q,{fullWidth:!0,style:{fontSize:"0.7em"},onChange:e=>{let t=e.target.value;const n=new URL(window.location.href);"-1"===t?n.searchParams.delete("acquisition"):n.searchParams.set("acquisition",t),window.location.href=decodeURIComponent(n.href)},value:n},z.createElement("option",{value:"-1",key:"-1"},"Filter by Acquisition"),a.map((e=>(e=e,z.createElement("option",{value:e.id,key:e.id},"Acquisition: ",e.name)))))))}function He({sourceAtom:e,layerAtom:t}){const n=k(e),[a,r]=F(t),[o,l]=j.exports.useState(null),c=()=>{l(null)},{names:m}=n,u=Boolean(o),p=u?`layer-${n.id}-add-channel`:void 0;return z.createElement(z.Fragment,null,z.createElement(L,{onClick:e=>{l(e.currentTarget)},"aria-describedby":p,style:{backgroundColor:"transparent",padding:0,zIndex:2,cursor:"pointer"},disabled:6===a.layerProps.loaderSelection.length},z.createElement(W,null)),z.createElement(U,{id:p,open:u,anchorEl:o,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},z.createElement(G,{style:{padding:"0px 4px",marginBottom:4,width:"8em"}},z.createElement(D,{variant:"caption"},"selection: "),z.createElement(H,null),z.createElement(q,{fullWidth:!0,style:{fontSize:"0.7em"},id:`layer-${n.id}-channel-select`,onChange:e=>{const{defaults:{selection:t},channel_axis:a,colors:o,contrast_limits:l}=n;c();const m=+e.target.value,u=[...t];a&&(u[a]=m),r((e=>{const{layerProps:t}=e,n=[...t.loaderSelection,u],a=[...t.colorValues,Ae(o[m])],r=[...t.sliderValues,l[m]],c=[...r],p=[...t.channelIsOn,!0];return s(i({},e),{layerProps:s(i({},t),{loaderSelection:n,colorValues:a,sliderValues:r,contrastLimits:c,channelIsOn:p})})}))}},z.createElement("option",{"aria-label":"None",value:""},"None"),m.map(((e,t)=>z.createElement("option",{value:t,key:e},e)))))))}const Je=N({root:{color:"white",padding:"10px 0px 5px 0px",marginRight:"5px"},active:{boxshadow:"0px 0px 0px 8px rgba(158, 158, 158, 0.16)"}})(J);function Ze({layerAtom:e}){const[t,n]=F(e);return z.createElement(Je,{value:t.layerProps.opacity,onChange:(e,t)=>{const a=t;n((e=>s(i({},e),{layerProps:s(i({},e.layerProps),{opacity:a})})))},min:0,max:1,step:.01})}const Xe=N({root:{width:"5.5em",fontSize:"0.7em"}})(Z);function Ye({sourceAtom:e,layerAtom:t,axisIndex:n,max:a}){const r=k(e),[o,l]=F(t),[c,m]=j.exports.useState(null),u=Boolean(c),p=u?`${n}-index-${r.id}-options`:void 0,d=o.layerProps.loaderSelection[0]?o.layerProps.loaderSelection[0][n]:1;return z.createElement(z.Fragment,null,z.createElement(L,{onClick:e=>{m(e.currentTarget)},"aria-describedby":p,style:{backgroundColor:"transparent",padding:0,zIndex:2,cursor:"pointer"}},z.createElement(X,null)),z.createElement(U,{id:p,open:u,anchorEl:c,onClose:()=>{m(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},z.createElement(G,{style:{padding:"0px 4px",marginBottom:4}},z.createElement(D,{variant:"caption"},"Index:"),z.createElement(H,null),z.createElement(Xe,{value:d,onChange:e=>{let t=+e.target.value;t<0&&(t=0),t>a&&(t=a),l((e=>{let a=i({},e.layerProps);return a.loaderSelection=a.loaderSelection.map((e=>{let a=[...e];return a[n]=t,a})),s(i({},e),{layerProps:a})}))},type:"number",id:"max",fullWidth:!1}),z.createElement(H,null))))}const Ke=N({root:{color:"white",padding:"10px 0px 5px 0px",marginRight:"5px"},active:{boxshadow:"0px 0px 0px 8px rgba(158, 158, 158, 0.16)"}})(J);function Qe({sourceAtom:e,layerAtom:t,axisIndex:n,max:a}){const[r,o]=F(t),l=k(e),{axis_labels:c}=l;let m=c[n];"t"!==m&&"z"!==m||(m=m.toUpperCase());const[u,p]=j.exports.useState(0);j.exports.useEffect((()=>{p(r.layerProps.loaderSelection[0]?r.layerProps.loaderSelection[0][n]:1)}),[r.layerProps.loaderSelection]);return z.createElement(z.Fragment,null,z.createElement(T,null,z.createElement(T,{container:!0,justify:"space-between"},z.createElement(T,{item:!0,xs:10},z.createElement("div",{style:{width:165,overflow:"hidden",textOverflow:"ellipsis"}},z.createElement(D,{variant:"caption",noWrap:!0},m,": ",u,"/",a))),z.createElement(T,{item:!0,xs:1},z.createElement(Ye,{sourceAtom:e,layerAtom:t,axisIndex:n,max:a}))),z.createElement(T,{container:!0,justify:"space-between"},z.createElement(T,{item:!0,xs:12},z.createElement(Ke,{value:u,onChange:(e,t)=>{p(t)},onChangeCommitted:()=>{o((e=>{let t=i({},e.layerProps);return t.loaderSelection=t.loaderSelection.map((e=>{let t=[...e];return t[n]=u,t})),s(i({},e),{layerProps:t})}))},min:0,max:a,step:1})))),z.createElement(H,null))}function et({sourceAtom:e,layerAtom:t}){const n=k(e),{axis_labels:a,channel_axis:r,loader:o}=n,l=a.slice(0,-2).map(((e,t)=>[e,t,o[0].shape[t]])).filter((e=>e[1]!==r&&e[2]>1)).map((([n,a,r])=>z.createElement(Qe,{key:n,sourceAtom:e,layerAtom:t,axisIndex:a,max:r-1})));return 0===l.length?null:z.createElement(z.Fragment,null,z.createElement(T,null,l),z.createElement(H,null))}const tt=Y((()=>({container:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2px"},button:{padding:"3px",width:"16px",height:"16px"}}))),nt=Object.entries(xe).map((([e,t])=>[e,Ae(t)]));function at({handleChange:e}){const t=tt();return z.createElement("div",{className:t.container,"aria-label":"color-swatch"},nt.map((([n,a])=>z.createElement(L,{className:t.button,key:n,onClick:()=>e(a)},z.createElement(K,{fontSize:"small",style:{color:`rgb(${a})`}})))))}const rt=N({root:{width:"5.5em",fontSize:"0.7em"}})(Z);function ot({sourceAtom:e,layerAtom:t,channelIndex:n}){const a=k(e),[r,o]=F(t),[l,c]=j.exports.useState(null),{channel_axis:m,names:u}=a,p=e=>{const t=e.target.id;let a=+e.target.value;a<0&&(a=0),o((e=>{const r=[...e.layerProps.contrastLimits],o=[...e.layerProps.sliderValues],[l,c]=r[n],[m,u]=o[n],[p,d]="min"===t?[a,c]:[l,a];return p>m&&(o[n]=[p,u]),d<u&&(o[n]=[m,d]),r[n]=[p,d],s(i({},e),{layerProps:s(i({},e.layerProps),{sliderValues:o,contrastLimits:r})})}))},d=Boolean(l),h=d?`channel-${n}-${a.name}-options`:void 0,[f,g]=r.layerProps.contrastLimits[n];return z.createElement(z.Fragment,null,z.createElement(L,{onClick:e=>{c(e.currentTarget)},"aria-describedby":h,style:{backgroundColor:"transparent",padding:0,zIndex:2,cursor:"pointer"}},z.createElement(X,null)),z.createElement(U,{id:h,open:d,anchorEl:l,onClose:()=>{c(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},z.createElement(G,{style:{padding:"0px 4px",marginBottom:4}},z.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},z.createElement(D,{variant:"caption"},"remove:"),z.createElement(L,{onClick:()=>{o((e=>{const{layerProps:t}=e,a=[...t.colorValues],r=[...t.sliderValues],o=[...t.contrastLimits],l=[...t.loaderSelection],c=[...t.channelIsOn];return a.splice(n,1),r.splice(n,1),o.splice(n,1),l.splice(n,1),c.splice(n,1),s(i({},e),{layerProps:s(i({},t),{colorValues:a,sliderValues:r,loaderSelection:l,channelIsOn:c,contrastLimits:o})})}))}},z.createElement(Q,null))),z.createElement(H,null),z.createElement(D,{variant:"caption"},"selection:"),z.createElement(H,null),z.createElement(q,{fullWidth:!0,style:{fontSize:"0.7em"},id:`layer-${a.name}-channel-select`,onChange:e=>{o((t=>{const a=[...t.layerProps.loaderSelection],r=[...a[n]];return Number.isInteger(m)&&(r[m]=+e.target.value,a[n]=r),s(i({},t),{layerProps:s(i({},t.layerProps),{loaderSelection:a})})}))},value:r.layerProps.loaderSelection[n][m]},u.map(((e,t)=>z.createElement("option",{value:t,key:e},"(",t,") ",e)))),z.createElement(H,null),z.createElement(D,{variant:"caption"},"contrast limits:"),z.createElement(H,null),z.createElement(rt,{value:f,onChange:p,type:"number",id:"min",fullWidth:!1}),z.createElement(rt,{value:g,onChange:p,type:"number",id:"max",fullWidth:!1}),z.createElement(H,null),z.createElement(D,{variant:"caption"},"color:"),z.createElement(H,null),z.createElement("div",{style:{display:"flex",justifyContent:"center"}},z.createElement(at,{handleChange:e=>{o((t=>{const a=[...t.layerProps.colorValues];return a[n]=e,s(i({},t),{layerProps:s(i({},t.layerProps),{colorValues:a})})}))}})))))}function lt({sourceAtom:e,layerAtom:t,channelIndex:n}){const a=k(e),[r,o]=F(t),{sliderValues:l,colorValues:c,contrastLimits:m,channelIsOn:u,colormap:p,loaderSelection:d}=r.layerProps,h=[...l[n]],f=`rgb(${p?[255,255,255]:c[n]})`,g=u[n],[y,w]=m[n],{channel_axis:x,names:E}=a,b=d[n],v=E[Number.isInteger(x)?b[x]:0];return z.createElement(z.Fragment,null,z.createElement(T,{container:!0,justify:"space-between",wrap:"nowrap"},z.createElement(T,{item:!0,xs:10},z.createElement("div",{style:{width:165,overflow:"hidden",textOverflow:"ellipsis"}},z.createElement(D,{variant:"caption",noWrap:!0},v))),z.createElement(T,{item:!0,xs:1},z.createElement(ot,{sourceAtom:e,layerAtom:t,channelIndex:n}))),z.createElement(T,{container:!0,justify:"space-between"},z.createElement(T,{item:!0,xs:2},z.createElement(L,{style:{color:f,backgroundColor:"transparent",padding:0,zIndex:2},onClick:()=>{o((e=>{const t=[...e.layerProps.channelIsOn];return t[n]=!t[n],s(i({},e),{layerProps:s(i({},e.layerProps),{channelIsOn:t})})}))}},g?z.createElement(ee,null):z.createElement(te,null))),z.createElement(T,{item:!0,xs:10},z.createElement(J,{value:h,onChange:(e,t)=>{o((e=>{const a=[...e.layerProps.sliderValues];return a[n]=t,s(i({},e),{layerProps:s(i({},e.layerProps),{sliderValues:a})})}))},min:y,max:w,step:.01,style:{padding:"10px 0px 5px 0px",color:f}}))))}const it=N({root:{padding:"2px 5px",borderLeft:"1px solid rgba(150, 150, 150, .2)",borderRight:"1px solid rgba(150, 150, 150, .2)"}})(ne);function st({sourceAtom:e,layerAtom:t}){const n=k(t).layerProps.loaderSelection.length;return z.createElement(it,null,z.createElement(T,{container:!0,direction:"column"},z.createElement(Ge,{sourceAtom:e,layerAtom:t}),z.createElement(T,null,z.createElement(T,{container:!0,justify:"space-between"},z.createElement(T,{item:!0,xs:3},z.createElement(D,{variant:"caption"},"opacity:")),z.createElement(T,{item:!0,xs:8},z.createElement(Ze,{sourceAtom:e,layerAtom:t})))),z.createElement(H,null),z.createElement(et,{sourceAtom:e,layerAtom:t}),z.createElement(T,{container:!0,justify:"space-between"},z.createElement(T,{item:!0,xs:3},z.createElement(D,{variant:"caption"},"channels:")),z.createElement(T,{item:!0,xs:1},z.createElement(He,{sourceAtom:e,layerAtom:t}))),z.createElement(H,null),z.createElement(T,null,Ie(n).map((n=>z.createElement(lt,{sourceAtom:e,layerAtom:t,channelIndex:n,key:n}))))))}const ct=N({root:{borderBottom:"1px solid rgba(150, 150, 150, .2)",width:200,boxshadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:0,padding:0}},expanded:{padding:1}})(ae);function mt({sourceAtom:e}){const t=k(e),n=Ne(t),{name:a=""}=t;return z.createElement(ct,{defaultExpanded:!0},z.createElement(Ue,{sourceAtom:e,layerAtom:n,name:a}),z.createElement(st,{sourceAtom:e,layerAtom:n}))}const ut=Y({root:{zIndex:1,position:"absolute",backgroundColor:"rgba(0, 0, 0, 0.7)",borderRadius:"5px",left:"5px",top:"5px"},scroll:{maxHeight:500,overflowX:"hidden",overflowY:"scroll","&::-webkit-scrollbar":{display:"none",background:"transparent"},scrollbarWidth:"none",flexDirection:"column"}});function pt(){const e=k(Re),[t,n]=j.exports.useReducer((e=>!e),!1),a=ut();return z.createElement("div",{className:a.root,style:{padding:`0px 5px ${t?0:5}px 5px`}},z.createElement(T,{container:!0,direction:"column",alignItems:"flex-start"},z.createElement(L,{style:{backgroundColor:"transparent",padding:0},onClick:n},t?z.createElement(W,null):z.createElement(Q,null)),z.createElement("div",{className:a.scroll,style:{display:t?"none":"flex"}},e.map((e=>z.createElement(mt,{key:`${e}`,sourceAtom:e}))))))}function dt(){const e=re(Le),t=re(Ve);async function n(t){const{createSourceData:n}=await de((()=>Promise.resolve().then((function(){return $e}))),void 0),a=Math.random().toString(36).slice(2),r=await n(t);e((e=>(r.name||(r.name=`image_${Object.keys(e).length}`),[...e,i({id:a},r)])))}return j.exports.useEffect((()=>{const e=new URLSearchParams(window.location.search);if(e.has("source")){const t={};for(const[n,o]of e)t[n]=o;t.source=decodeURIComponent(t.source),n(t);const a=new URL(window.location.href);a.searchParams.set("source",t.source);const r=decodeURIComponent(a.toString());window.location.href!==r&&window.history.pushState(null,"",r)}}),[]),j.exports.useEffect((()=>{window.self!==window.top&&async function(){const{default:e}=await de((()=>import("./index.ccefb928.js").then((function(e){return e.i}))),[]);(await e.setupRPC({name:"vizarr",description:"A minimal, purely client-side program for viewing Zarr-based images with Viv & ImJoy.",version:"0.3.0"})).export({add_image:async e=>n(e),set_view_state:async e=>t(e)})}()}),[]),z.createElement(z.Fragment,null,z.createElement(pt,null),z.createElement(Te,null))}var ht=oe({palette:{type:"dark",primary:le,secondary:le},props:{MuiButton:{size:"small"},MuiButtonBase:{disableRipple:!0},MuiFilledInput:{margin:"dense"},MuiFormControl:{margin:"dense"},MuiFormHelperText:{margin:"dense"},MuiIconButton:{size:"small"},MuiInputBase:{margin:"dense"},MuiInputLabel:{margin:"dense"},MuiOutlinedInput:{margin:"dense"}},overrides:{MuiSlider:{thumb:{"&:focus, &:hover":{boxShadow:"none"},height:11,width:5,borderRadius:"15%",marginLeft:-1}},MuiInput:{underline:{"&&&&:hover:before":{borderBottom:"1px solid #fff"}}},MuiPaper:{root:{backgroundColor:"rgba(0, 0, 0, 0.8)"}},MuiSvgIcon:{root:{width:"0.7em",height:"0.7em"}}}});const ft=new Map;function gt(e,t){ie(e,(()=>{if(!ft.has(e)){const n=t().then((e=>e.default)).catch((t=>{throw ft.delete(e),t}));ft.set(e,n)}return ft.get(e)}))}gt("lz4",(()=>de((()=>import("./lz4.90bd37fe.js")),["lz4.90bd37fe.js","utils-6b0080f1.f4680ab2.js"]))),gt("gzip",(()=>de((()=>import("./gzip.2d512667.js")),["gzip.2d512667.js","pako.esm-9240ff4b.6c52ac68.js"]))),gt("zlib",(()=>de((()=>import("./zlib.3b3d5619.js")),["zlib.3b3d5619.js","pako.esm-9240ff4b.6c52ac68.js"]))),gt("zstd",(()=>de((()=>import("./zstd.73353642.js")),["zstd.73353642.js","utils-6b0080f1.f4680ab2.js"]))),gt("blosc",(()=>de((()=>import("./blosc.0f249b18.js")),["blosc.0f249b18.js","utils-6b0080f1.f4680ab2.js"]))),console.log("vizarr v0.3.0: https://github.com/hms-dbmi/vizarr"),se.render(z.createElement(ce,{theme:ht},z.createElement(me,null,z.createElement(dt,null))),document.getElementById("root"));
