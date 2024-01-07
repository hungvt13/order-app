import{j as o,c as P,_ as b,b as Qt,r as m,a as z,k as ce,l as Zt,u as er,n as tr,d as rr,P as Te}from"./index-d1db0419.js";import{F as ar,d as or}from"./food_placeholder-28730884.js";import{B as nr,M as sr,P as jt,F as ir,a as cr,i as lr,c as ur,I as Xe}from"./useBackBtn-30661daa.js";import{a as K,g as q,s as w,r as Tt,u as H,c as R,b as V,d as pr,T as W,f as dr,G as E,C as Ae}from"./Container-57d2c8f6.js";import{c as Ee,g as fr,P as D,B as Je,a as gr,h as vr,s as hr,f as le}from"./currencyFormatter-28c69770.js";import{S as br,F as yr}from"./FormControlLabel-cf4917d8.js";import{B as At,v as $r}from"./v4-383ac435.js";import{c as _r,a as mr,d as xr}from"./useScrollToView-8d21c615.js";import"./useDispatch-2c439faa.js";const Cr=Ee(o.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),jr=Ee(o.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Tr=Ee(o.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ar(e){return q("MuiCheckbox",e)}const Sr=K("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Se=Sr,Ir=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Dr=e=>{const{classes:t,indeterminate:r,color:a,size:s}=e,i={root:["root",r&&"indeterminate",`color${P(a)}`,`size${P(s)}`]},n=V(i,Ar,t);return b({},t,n)},Pr=w(br,{shouldForwardProp:e=>Tt(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,t[`size${P(r.size)}`],r.color!=="default"&&t[`color${P(r.color)}`]]}})(({theme:e,ownerState:t})=>b({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Qt(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${Se.checked}, &.${Se.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${Se.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),wr=o.jsx(jr,{}),Or=o.jsx(Cr,{}),Mr=o.jsx(Tr,{}),kr=m.forwardRef(function(t,r){var a,s;const i=H({props:t,name:"MuiCheckbox"}),{checkedIcon:n=wr,color:c="primary",icon:d=Or,indeterminate:p=!1,indeterminateIcon:A=Mr,inputProps:y,size:x="medium",className:h}=i,f=z(i,Ir),S=p?A:d,j=p?A:n,C=b({},i,{color:c,indeterminate:p,size:x}),M=Dr(C);return o.jsx(Pr,b({type:"checkbox",inputProps:b({"data-indeterminate":p},y),icon:m.cloneElement(S,{fontSize:(a=S.props.fontSize)!=null?a:x}),checkedIcon:m.cloneElement(j,{fontSize:(s=j.props.fontSize)!=null?s:x}),ownerState:C,ref:r,className:R(M.root,h)},f,{classes:M}))}),Er=kr;function Br(e){return q("MuiDialog",e)}const Rr=K("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Ie=Rr,Lr=m.createContext({}),St=Lr,Fr=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Nr=w(nr,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),Ur=e=>{const{classes:t,scroll:r,maxWidth:a,fullWidth:s,fullScreen:i}=e,n={root:["root"],container:["container",`scroll${P(r)}`],paper:["paper",`paperScroll${P(r)}`,`paperWidth${P(String(a))}`,s&&"paperFullWidth",i&&"paperFullScreen"]};return V(n,Br,t)},Gr=w(sr,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),Wr=w("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.container,t[`scroll${P(r.scroll)}`]]}})(({ownerState:e})=>b({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),zr=w(jt,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.paper,t[`scrollPaper${P(r.scroll)}`],t[`paperWidth${P(String(r.maxWidth))}`],r.fullWidth&&t.paperFullWidth,r.fullScreen&&t.paperFullScreen]}})(({theme:e,ownerState:t})=>b({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},t.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},t.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},t.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${Ie.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&t.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${Ie.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Ie.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Kr=m.forwardRef(function(t,r){const a=H({props:t,name:"MuiDialog"}),s=pr(),i={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":c,BackdropComponent:d,BackdropProps:p,children:A,className:y,disableEscapeKeyDown:x=!1,fullScreen:h=!1,fullWidth:f=!1,maxWidth:S="sm",onBackdropClick:j,onClose:C,open:M,PaperComponent:ee=jt,PaperProps:T={},scroll:k="paper",TransitionComponent:N=ir,transitionDuration:ie=i,TransitionProps:_e}=a,me=z(a,Fr),U=b({},a,{disableEscapeKeyDown:x,fullScreen:h,fullWidth:f,maxWidth:S,scroll:k}),te=Ur(U),re=m.useRef(),xe=B=>{re.current=B.target===B.currentTarget},Ce=B=>{re.current&&(re.current=null,j&&j(B),C&&C(B,"backdropClick"))},ae=fr(c),je=m.useMemo(()=>({titleId:ae}),[ae]);return o.jsx(Gr,b({className:R(te.root,y),closeAfterTransition:!0,components:{Backdrop:Nr},componentsProps:{backdrop:b({transitionDuration:ie,as:d},p)},disableEscapeKeyDown:x,onClose:C,open:M,ref:r,onClick:Ce,ownerState:U},me,{children:o.jsx(N,b({appear:!0,in:M,timeout:ie,role:"presentation"},_e,{children:o.jsx(Wr,{className:R(te.container),onMouseDown:xe,ownerState:U,children:o.jsx(zr,b({as:ee,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":ae},T,{className:R(te.paper,T.className),ownerState:U,children:o.jsx(St.Provider,{value:je,children:A})}))})}))}))}),qr=Kr;function Hr(e){return q("MuiDialogActions",e)}K("MuiDialogActions",["root","spacing"]);const Vr=["className","disableSpacing"],Yr=e=>{const{classes:t,disableSpacing:r}=e;return V({root:["root",!r&&"spacing"]},Hr,t)},Xr=w("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(({ownerState:e})=>b({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Jr=m.forwardRef(function(t,r){const a=H({props:t,name:"MuiDialogActions"}),{className:s,disableSpacing:i=!1}=a,n=z(a,Vr),c=b({},a,{disableSpacing:i}),d=Yr(c);return o.jsx(Xr,b({className:R(d.root,s),ownerState:c,ref:r},n))}),Qr=Jr;function Zr(e){return q("MuiDialogContent",e)}K("MuiDialogContent",["root","dividers"]);function ea(e){return q("MuiDialogTitle",e)}const ta=K("MuiDialogTitle",["root"]),ra=ta,aa=["className","dividers"],oa=e=>{const{classes:t,dividers:r}=e;return V({root:["root",r&&"dividers"]},Zr,t)},na=w("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dividers&&t.dividers]}})(({theme:e,ownerState:t})=>b({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${ra.root} + &`]:{paddingTop:0}})),sa=m.forwardRef(function(t,r){const a=H({props:t,name:"MuiDialogContent"}),{className:s,dividers:i=!1}=a,n=z(a,aa),c=b({},a,{dividers:i}),d=oa(c);return o.jsx(na,b({className:R(d.root,s),ownerState:c,ref:r},n))}),ia=sa;function ca(e){return q("MuiDialogContentText",e)}K("MuiDialogContentText",["root"]);const la=["children","className"],ua=e=>{const{classes:t}=e,a=V({root:["root"]},ca,t);return b({},t,a)},pa=w(W,{shouldForwardProp:e=>Tt(e)||e==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),da=m.forwardRef(function(t,r){const a=H({props:t,name:"MuiDialogContentText"}),{className:s}=a,i=z(a,la),n=ua(i);return o.jsx(pa,b({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:i,className:R(n.root,s)},a,{classes:n}))}),fa=da,ga=["className","id"],va=e=>{const{classes:t}=e;return V({root:["root"]},ea,t)},ha=w(W,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),ba=m.forwardRef(function(t,r){const a=H({props:t,name:"MuiDialogTitle"}),{className:s,id:i}=a,n=z(a,ga),c=a,d=va(c),{titleId:p=i}=m.useContext(St);return o.jsx(ha,b({component:"h2",className:R(d.root,s),ownerState:c,ref:r,variant:"h6",id:i??p},n))}),ya=ba;var Be={},$a=lr;Object.defineProperty(Be,"__esModule",{value:!0});var It=Be.default=void 0,_a=$a(cr()),ma=o,xa=(0,_a.default)((0,ma.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}),"RemoveCircle");It=Be.default=xa;function Ca(e){return o.jsx(Er,{...e})}function ja({startLabel:e,endLabel:t}){return o.jsxs(At,{display:"flex",justifyContent:"space-between",width:"100%",children:[o.jsx("span",{children:e}),o.jsx("span",{children:t})]})}function Re({label:e,data:t,dualLabel:r,required:a,error:s,onChange:i}){return o.jsxs(_r,{fullWidth:!0,required:a,onChange:i,error:s,children:[o.jsx(mr,{children:e}),t.map(({value:n,label:c,endLabel:d,...p})=>o.jsx(yr,{disableTypography:!0,value:n,sx:{width:"100%"},control:o.jsx(Ca,{}),label:r?o.jsx(ja,{startLabel:c,endLabel:d}):c,...p},n))]})}Re.propTypes={label:D.string,data:D.array,dualLabel:D.bool,required:D.bool,error:D.bool,onChange:D.func};Re.defaultProps={label:"Checkbox Group",data:[],dualLabel:!1,required:!1,error:!1,onChange:()=>{}};function Le({open:e,onClose:t,onAction:r,itemName:a,...s}){return o.jsxs(qr,{open:e,onClose:t,fullWidth:!0,...s,children:[o.jsx(ya,{children:"Remove from cart"}),o.jsx(ia,{children:o.jsx(fa,{id:"alert-dialog-description",children:a})}),o.jsxs(Qr,{children:[o.jsx(Je,{onClick:t,autoFocus:!0,color:"inherit",children:"Cancel"}),o.jsx(Je,{onClick:r,variant:"contained",color:"error",children:"Remove"})]})]})}Le.propTypes={open:D.bool,onClose:D.func,onAction:D.func,itemName:D.string};Le.defaultProps={open:!1,onClose:()=>{},onAction:()=>{},itemName:""};function Ta(){this.__data__=[],this.size=0}var Aa=Ta;function Sa(e,t){return e===t||e!==e&&t!==t}var Dt=Sa,Ia=Dt;function Da(e,t){for(var r=e.length;r--;)if(Ia(e[r][0],t))return r;return-1}var ge=Da,Pa=ge,wa=Array.prototype,Oa=wa.splice;function Ma(e){var t=this.__data__,r=Pa(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():Oa.call(t,r,1),--this.size,!0}var ka=Ma,Ea=ge;function Ba(e){var t=this.__data__,r=Ea(t,e);return r<0?void 0:t[r][1]}var Ra=Ba,La=ge;function Fa(e){return La(this.__data__,e)>-1}var Na=Fa,Ua=ge;function Ga(e,t){var r=this.__data__,a=Ua(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}var Wa=Ga,za=Aa,Ka=ka,qa=Ra,Ha=Na,Va=Wa;function Y(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}Y.prototype.clear=za;Y.prototype.delete=Ka;Y.prototype.get=qa;Y.prototype.has=Ha;Y.prototype.set=Va;var ve=Y,Ya=ve;function Xa(){this.__data__=new Ya,this.size=0}var Ja=Xa;function Qa(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var Za=Qa;function eo(e){return this.__data__.get(e)}var to=eo;function ro(e){return this.__data__.has(e)}var ao=ro,oo=typeof ce=="object"&&ce&&ce.Object===Object&&ce,Pt=oo,no=Pt,so=typeof self=="object"&&self&&self.Object===Object&&self,io=no||so||Function("return this")(),O=io,co=O,lo=co.Symbol,Fe=lo,Qe=Fe,wt=Object.prototype,uo=wt.hasOwnProperty,po=wt.toString,oe=Qe?Qe.toStringTag:void 0;function fo(e){var t=uo.call(e,oe),r=e[oe];try{e[oe]=void 0;var a=!0}catch{}var s=po.call(e);return a&&(t?e[oe]=r:delete e[oe]),s}var go=fo,vo=Object.prototype,ho=vo.toString;function bo(e){return ho.call(e)}var yo=bo,Ze=Fe,$o=go,_o=yo,mo="[object Null]",xo="[object Undefined]",et=Ze?Ze.toStringTag:void 0;function Co(e){return e==null?e===void 0?xo:mo:et&&et in Object(e)?$o(e):_o(e)}var he=Co;function jo(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ne=jo,To=he,Ao=ne,So="[object AsyncFunction]",Io="[object Function]",Do="[object GeneratorFunction]",Po="[object Proxy]";function wo(e){if(!Ao(e))return!1;var t=To(e);return t==Io||t==Do||t==So||t==Po}var Ot=wo,Oo=O,Mo=Oo["__core-js_shared__"],ko=Mo,De=ko,tt=function(){var e=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Eo(e){return!!tt&&tt in e}var Bo=Eo,Ro=Function.prototype,Lo=Ro.toString;function Fo(e){if(e!=null){try{return Lo.call(e)}catch{}try{return e+""}catch{}}return""}var Mt=Fo,No=Ot,Uo=Bo,Go=ne,Wo=Mt,zo=/[\\^$.*+?()[\]{}|]/g,Ko=/^\[object .+?Constructor\]$/,qo=Function.prototype,Ho=Object.prototype,Vo=qo.toString,Yo=Ho.hasOwnProperty,Xo=RegExp("^"+Vo.call(Yo).replace(zo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Jo(e){if(!Go(e)||Uo(e))return!1;var t=No(e)?Xo:Ko;return t.test(Wo(e))}var Qo=Jo;function Zo(e,t){return e==null?void 0:e[t]}var en=Zo,tn=Qo,rn=en;function an(e,t){var r=rn(e,t);return tn(r)?r:void 0}var F=an,on=F,nn=O,sn=on(nn,"Map"),Ne=sn,cn=F,ln=cn(Object,"create"),be=ln,rt=be;function un(){this.__data__=rt?rt(null):{},this.size=0}var pn=un;function dn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var fn=dn,gn=be,vn="__lodash_hash_undefined__",hn=Object.prototype,bn=hn.hasOwnProperty;function yn(e){var t=this.__data__;if(gn){var r=t[e];return r===vn?void 0:r}return bn.call(t,e)?t[e]:void 0}var $n=yn,_n=be,mn=Object.prototype,xn=mn.hasOwnProperty;function Cn(e){var t=this.__data__;return _n?t[e]!==void 0:xn.call(t,e)}var jn=Cn,Tn=be,An="__lodash_hash_undefined__";function Sn(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Tn&&t===void 0?An:t,this}var In=Sn,Dn=pn,Pn=fn,wn=$n,On=jn,Mn=In;function X(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}X.prototype.clear=Dn;X.prototype.delete=Pn;X.prototype.get=wn;X.prototype.has=On;X.prototype.set=Mn;var kn=X,at=kn,En=ve,Bn=Ne;function Rn(){this.size=0,this.__data__={hash:new at,map:new(Bn||En),string:new at}}var Ln=Rn;function Fn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Nn=Fn,Un=Nn;function Gn(e,t){var r=e.__data__;return Un(t)?r[typeof t=="string"?"string":"hash"]:r.map}var ye=Gn,Wn=ye;function zn(e){var t=Wn(this,e).delete(e);return this.size-=t?1:0,t}var Kn=zn,qn=ye;function Hn(e){return qn(this,e).get(e)}var Vn=Hn,Yn=ye;function Xn(e){return Yn(this,e).has(e)}var Jn=Xn,Qn=ye;function Zn(e,t){var r=Qn(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}var es=Zn,ts=Ln,rs=Kn,as=Vn,os=Jn,ns=es;function J(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}J.prototype.clear=ts;J.prototype.delete=rs;J.prototype.get=as;J.prototype.has=os;J.prototype.set=ns;var ss=J,is=ve,cs=Ne,ls=ss,us=200;function ps(e,t){var r=this.__data__;if(r instanceof is){var a=r.__data__;if(!cs||a.length<us-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new ls(a)}return r.set(e,t),this.size=r.size,this}var ds=ps,fs=ve,gs=Ja,vs=Za,hs=to,bs=ao,ys=ds;function Q(e){var t=this.__data__=new fs(e);this.size=t.size}Q.prototype.clear=gs;Q.prototype.delete=vs;Q.prototype.get=hs;Q.prototype.has=bs;Q.prototype.set=ys;var $s=Q;function _s(e,t){for(var r=-1,a=e==null?0:e.length;++r<a&&t(e[r],r,e)!==!1;);return e}var ms=_s,xs=F,Cs=function(){try{var e=xs(Object,"defineProperty");return e({},"",{}),e}catch{}}(),js=Cs,ot=js;function Ts(e,t,r){t=="__proto__"&&ot?ot(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var kt=Ts,As=kt,Ss=Dt,Is=Object.prototype,Ds=Is.hasOwnProperty;function Ps(e,t,r){var a=e[t];(!(Ds.call(e,t)&&Ss(a,r))||r===void 0&&!(t in e))&&As(e,t,r)}var Et=Ps,ws=Et,Os=kt;function Ms(e,t,r,a){var s=!r;r||(r={});for(var i=-1,n=t.length;++i<n;){var c=t[i],d=a?a(r[c],e[c],c,r,e):void 0;d===void 0&&(d=e[c]),s?Os(r,c,d):ws(r,c,d)}return r}var $e=Ms;function ks(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}var Es=ks;function Bs(e){return e!=null&&typeof e=="object"}var se=Bs,Rs=he,Ls=se,Fs="[object Arguments]";function Ns(e){return Ls(e)&&Rs(e)==Fs}var Us=Ns,nt=Us,Gs=se,Bt=Object.prototype,Ws=Bt.hasOwnProperty,zs=Bt.propertyIsEnumerable,Ks=nt(function(){return arguments}())?nt:function(e){return Gs(e)&&Ws.call(e,"callee")&&!zs.call(e,"callee")},qs=Ks,Hs=Array.isArray,Ue=Hs,pe={exports:{}};function Vs(){return!1}var Ys=Vs;pe.exports;(function(e,t){var r=O,a=Ys,s=t&&!t.nodeType&&t,i=s&&!0&&e&&!e.nodeType&&e,n=i&&i.exports===s,c=n?r.Buffer:void 0,d=c?c.isBuffer:void 0,p=d||a;e.exports=p})(pe,pe.exports);var Rt=pe.exports,Xs=9007199254740991,Js=/^(?:0|[1-9]\d*)$/;function Qs(e,t){var r=typeof e;return t=t??Xs,!!t&&(r=="number"||r!="symbol"&&Js.test(e))&&e>-1&&e%1==0&&e<t}var Zs=Qs,ei=9007199254740991;function ti(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ei}var Lt=ti,ri=he,ai=Lt,oi=se,ni="[object Arguments]",si="[object Array]",ii="[object Boolean]",ci="[object Date]",li="[object Error]",ui="[object Function]",pi="[object Map]",di="[object Number]",fi="[object Object]",gi="[object RegExp]",vi="[object Set]",hi="[object String]",bi="[object WeakMap]",yi="[object ArrayBuffer]",$i="[object DataView]",_i="[object Float32Array]",mi="[object Float64Array]",xi="[object Int8Array]",Ci="[object Int16Array]",ji="[object Int32Array]",Ti="[object Uint8Array]",Ai="[object Uint8ClampedArray]",Si="[object Uint16Array]",Ii="[object Uint32Array]",v={};v[_i]=v[mi]=v[xi]=v[Ci]=v[ji]=v[Ti]=v[Ai]=v[Si]=v[Ii]=!0;v[ni]=v[si]=v[yi]=v[ii]=v[$i]=v[ci]=v[li]=v[ui]=v[pi]=v[di]=v[fi]=v[gi]=v[vi]=v[hi]=v[bi]=!1;function Di(e){return oi(e)&&ai(e.length)&&!!v[ri(e)]}var Pi=Di;function wi(e){return function(t){return e(t)}}var Ge=wi,de={exports:{}};de.exports;(function(e,t){var r=Pt,a=t&&!t.nodeType&&t,s=a&&!0&&e&&!e.nodeType&&e,i=s&&s.exports===a,n=i&&r.process,c=function(){try{var d=s&&s.require&&s.require("util").types;return d||n&&n.binding&&n.binding("util")}catch{}}();e.exports=c})(de,de.exports);var We=de.exports,Oi=Pi,Mi=Ge,st=We,it=st&&st.isTypedArray,ki=it?Mi(it):Oi,Ei=ki,Bi=Es,Ri=qs,Li=Ue,Fi=Rt,Ni=Zs,Ui=Ei,Gi=Object.prototype,Wi=Gi.hasOwnProperty;function zi(e,t){var r=Li(e),a=!r&&Ri(e),s=!r&&!a&&Fi(e),i=!r&&!a&&!s&&Ui(e),n=r||a||s||i,c=n?Bi(e.length,String):[],d=c.length;for(var p in e)(t||Wi.call(e,p))&&!(n&&(p=="length"||s&&(p=="offset"||p=="parent")||i&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||Ni(p,d)))&&c.push(p);return c}var Ft=zi,Ki=Object.prototype;function qi(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Ki;return e===r}var ze=qi;function Hi(e,t){return function(r){return e(t(r))}}var Nt=Hi,Vi=Nt,Yi=Vi(Object.keys,Object),Xi=Yi,Ji=ze,Qi=Xi,Zi=Object.prototype,ec=Zi.hasOwnProperty;function tc(e){if(!Ji(e))return Qi(e);var t=[];for(var r in Object(e))ec.call(e,r)&&r!="constructor"&&t.push(r);return t}var rc=tc,ac=Ot,oc=Lt;function nc(e){return e!=null&&oc(e.length)&&!ac(e)}var Ut=nc,sc=Ft,ic=rc,cc=Ut;function lc(e){return cc(e)?sc(e):ic(e)}var Ke=lc,uc=$e,pc=Ke;function dc(e,t){return e&&uc(t,pc(t),e)}var fc=dc;function gc(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var vc=gc,hc=ne,bc=ze,yc=vc,$c=Object.prototype,_c=$c.hasOwnProperty;function mc(e){if(!hc(e))return yc(e);var t=bc(e),r=[];for(var a in e)a=="constructor"&&(t||!_c.call(e,a))||r.push(a);return r}var xc=mc,Cc=Ft,jc=xc,Tc=Ut;function Ac(e){return Tc(e)?Cc(e,!0):jc(e)}var qe=Ac,Sc=$e,Ic=qe;function Dc(e,t){return e&&Sc(t,Ic(t),e)}var Pc=Dc,fe={exports:{}};fe.exports;(function(e,t){var r=O,a=t&&!t.nodeType&&t,s=a&&!0&&e&&!e.nodeType&&e,i=s&&s.exports===a,n=i?r.Buffer:void 0,c=n?n.allocUnsafe:void 0;function d(p,A){if(A)return p.slice();var y=p.length,x=c?c(y):new p.constructor(y);return p.copy(x),x}e.exports=d})(fe,fe.exports);var wc=fe.exports;function Oc(e,t){var r=-1,a=e.length;for(t||(t=Array(a));++r<a;)t[r]=e[r];return t}var Mc=Oc;function kc(e,t){for(var r=-1,a=e==null?0:e.length,s=0,i=[];++r<a;){var n=e[r];t(n,r,e)&&(i[s++]=n)}return i}var Ec=kc;function Bc(){return[]}var Gt=Bc,Rc=Ec,Lc=Gt,Fc=Object.prototype,Nc=Fc.propertyIsEnumerable,ct=Object.getOwnPropertySymbols,Uc=ct?function(e){return e==null?[]:(e=Object(e),Rc(ct(e),function(t){return Nc.call(e,t)}))}:Lc,He=Uc,Gc=$e,Wc=He;function zc(e,t){return Gc(e,Wc(e),t)}var Kc=zc;function qc(e,t){for(var r=-1,a=t.length,s=e.length;++r<a;)e[s+r]=t[r];return e}var Wt=qc,Hc=Nt,Vc=Hc(Object.getPrototypeOf,Object),zt=Vc,Yc=Wt,Xc=zt,Jc=He,Qc=Gt,Zc=Object.getOwnPropertySymbols,el=Zc?function(e){for(var t=[];e;)Yc(t,Jc(e)),e=Xc(e);return t}:Qc,Kt=el,tl=$e,rl=Kt;function al(e,t){return tl(e,rl(e),t)}var ol=al,nl=Wt,sl=Ue;function il(e,t,r){var a=t(e);return sl(e)?a:nl(a,r(e))}var qt=il,cl=qt,ll=He,ul=Ke;function pl(e){return cl(e,ul,ll)}var dl=pl,fl=qt,gl=Kt,vl=qe;function hl(e){return fl(e,vl,gl)}var bl=hl,yl=F,$l=O,_l=yl($l,"DataView"),ml=_l,xl=F,Cl=O,jl=xl(Cl,"Promise"),Tl=jl,Al=F,Sl=O,Il=Al(Sl,"Set"),Dl=Il,Pl=F,wl=O,Ol=Pl(wl,"WeakMap"),Ml=Ol,Pe=ml,we=Ne,Oe=Tl,Me=Dl,ke=Ml,Ht=he,Z=Mt,lt="[object Map]",kl="[object Object]",ut="[object Promise]",pt="[object Set]",dt="[object WeakMap]",ft="[object DataView]",El=Z(Pe),Bl=Z(we),Rl=Z(Oe),Ll=Z(Me),Fl=Z(ke),L=Ht;(Pe&&L(new Pe(new ArrayBuffer(1)))!=ft||we&&L(new we)!=lt||Oe&&L(Oe.resolve())!=ut||Me&&L(new Me)!=pt||ke&&L(new ke)!=dt)&&(L=function(e){var t=Ht(e),r=t==kl?e.constructor:void 0,a=r?Z(r):"";if(a)switch(a){case El:return ft;case Bl:return lt;case Rl:return ut;case Ll:return pt;case Fl:return dt}return t});var Ve=L,Nl=Object.prototype,Ul=Nl.hasOwnProperty;function Gl(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&Ul.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Wl=Gl,zl=O,Kl=zl.Uint8Array,ql=Kl,gt=ql;function Hl(e){var t=new e.constructor(e.byteLength);return new gt(t).set(new gt(e)),t}var Ye=Hl,Vl=Ye;function Yl(e,t){var r=t?Vl(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Xl=Yl,Jl=/\w*$/;function Ql(e){var t=new e.constructor(e.source,Jl.exec(e));return t.lastIndex=e.lastIndex,t}var Zl=Ql,vt=Fe,ht=vt?vt.prototype:void 0,bt=ht?ht.valueOf:void 0;function eu(e){return bt?Object(bt.call(e)):{}}var tu=eu,ru=Ye;function au(e,t){var r=t?ru(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var ou=au,nu=Ye,su=Xl,iu=Zl,cu=tu,lu=ou,uu="[object Boolean]",pu="[object Date]",du="[object Map]",fu="[object Number]",gu="[object RegExp]",vu="[object Set]",hu="[object String]",bu="[object Symbol]",yu="[object ArrayBuffer]",$u="[object DataView]",_u="[object Float32Array]",mu="[object Float64Array]",xu="[object Int8Array]",Cu="[object Int16Array]",ju="[object Int32Array]",Tu="[object Uint8Array]",Au="[object Uint8ClampedArray]",Su="[object Uint16Array]",Iu="[object Uint32Array]";function Du(e,t,r){var a=e.constructor;switch(t){case yu:return nu(e);case uu:case pu:return new a(+e);case $u:return su(e,r);case _u:case mu:case xu:case Cu:case ju:case Tu:case Au:case Su:case Iu:return lu(e,r);case du:return new a;case fu:case hu:return new a(e);case gu:return iu(e);case vu:return new a;case bu:return cu(e)}}var Pu=Du,wu=ne,yt=Object.create,Ou=function(){function e(){}return function(t){if(!wu(t))return{};if(yt)return yt(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),Mu=Ou,ku=Mu,Eu=zt,Bu=ze;function Ru(e){return typeof e.constructor=="function"&&!Bu(e)?ku(Eu(e)):{}}var Lu=Ru,Fu=Ve,Nu=se,Uu="[object Map]";function Gu(e){return Nu(e)&&Fu(e)==Uu}var Wu=Gu,zu=Wu,Ku=Ge,$t=We,_t=$t&&$t.isMap,qu=_t?Ku(_t):zu,Hu=qu,Vu=Ve,Yu=se,Xu="[object Set]";function Ju(e){return Yu(e)&&Vu(e)==Xu}var Qu=Ju,Zu=Qu,ep=Ge,mt=We,xt=mt&&mt.isSet,tp=xt?ep(xt):Zu,rp=tp,ap=$s,op=ms,np=Et,sp=fc,ip=Pc,cp=wc,lp=Mc,up=Kc,pp=ol,dp=dl,fp=bl,gp=Ve,vp=Wl,hp=Pu,bp=Lu,yp=Ue,$p=Rt,_p=Hu,mp=ne,xp=rp,Cp=Ke,jp=qe,Tp=1,Ap=2,Sp=4,Vt="[object Arguments]",Ip="[object Array]",Dp="[object Boolean]",Pp="[object Date]",wp="[object Error]",Yt="[object Function]",Op="[object GeneratorFunction]",Mp="[object Map]",kp="[object Number]",Xt="[object Object]",Ep="[object RegExp]",Bp="[object Set]",Rp="[object String]",Lp="[object Symbol]",Fp="[object WeakMap]",Np="[object ArrayBuffer]",Up="[object DataView]",Gp="[object Float32Array]",Wp="[object Float64Array]",zp="[object Int8Array]",Kp="[object Int16Array]",qp="[object Int32Array]",Hp="[object Uint8Array]",Vp="[object Uint8ClampedArray]",Yp="[object Uint16Array]",Xp="[object Uint32Array]",g={};g[Vt]=g[Ip]=g[Np]=g[Up]=g[Dp]=g[Pp]=g[Gp]=g[Wp]=g[zp]=g[Kp]=g[qp]=g[Mp]=g[kp]=g[Xt]=g[Ep]=g[Bp]=g[Rp]=g[Lp]=g[Hp]=g[Vp]=g[Yp]=g[Xp]=!0;g[wp]=g[Yt]=g[Fp]=!1;function ue(e,t,r,a,s,i){var n,c=t&Tp,d=t&Ap,p=t&Sp;if(r&&(n=s?r(e,a,s,i):r(e)),n!==void 0)return n;if(!mp(e))return e;var A=yp(e);if(A){if(n=vp(e),!c)return lp(e,n)}else{var y=gp(e),x=y==Yt||y==Op;if($p(e))return cp(e,c);if(y==Xt||y==Vt||x&&!s){if(n=d||x?{}:bp(e),!c)return d?pp(e,ip(n,e)):up(e,sp(n,e))}else{if(!g[y])return s?e:{};n=hp(e,y,c)}}i||(i=new ap);var h=i.get(e);if(h)return h;i.set(e,n),xp(e)?e.forEach(function(j){n.add(ue(j,t,r,j,e,i))}):_p(e)&&e.forEach(function(j,C){n.set(C,ue(j,t,r,C,e,i))});var f=p?d?fp:dp:d?jp:Cp,S=A?void 0:f(e);return op(S||e,function(j,C){S&&(C=j,j=e[C]),np(n,C,ue(j,t,r,C,e,i))}),n}var Jp=ue,Qp=Jp,Zp=1,ed=4;function td(e){return Qp(e,Zp|ed)}var rd=td;const Ct=Zt(rd),ad={id:null,categoryId:null,quantity:1,options:{},required:[],totalPrice:0,errors:[],process:{initItemConfig:!1,initItemTotal:!1}},od=()=>{var B;const{showBackBtn:e}=ur(),{toActionBar:t}=dr(),{itemRefs:r,scrollToItem:a,scrollToTop:s}=xr(),{addToCart:i,updateCart:n,getItemByLocalId:c,removeCartItems:d}=gr(),p=er(),[A]=tr(),y=A.get("categoryId"),x=A.get("itemId"),h=A.get("localId"),[f,S]=m.useState(Ct(ad)),[j,C]=m.useState(!1),M=rr(vr,hr),ee=M==null?void 0:M.find(({id:l})=>l.toString()===y),T=(B=ee==null?void 0:ee.menu_items)==null?void 0:B.find(({id:l})=>l.toString()===x),k=h!==null,N=m.useMemo(()=>k?c(h):null,[k,h]),ie=(l,u)=>l.map($=>({value:$.id,label:$.name,checked:(u==null?void 0:u.includes($.id.toString()))||!1,endLabel:$.price!==0&&`+ ${le($.price)}`})),_e=(l,u)=>u===1?`${l} (Choose ${u})`:`${l} (Max : ${u})`,me=(l,u,_)=>_===1?l.includes(u)?l:[u]:l.includes(u)?l.filter($=>$!==u):l.length+1<=_?[...l,u]:l,U=(l,u,_)=>{S($=>{const I=[...$.options[l]],G=me(I,u,_);return{...$,options:{...$.options,[l]:G},errors:$.errors.filter(Jt=>Jt!==l)}})},te=l=>{S(u=>{const _=u.quantity;return _+l===0?(k&&C(!0),u):_+l>10?u:{...u,quantity:u.quantity+l}})},re=()=>{if(!T)return 0;let l=T.price;return T.options.forEach(u=>{const _=u.id,$=u.option_list,I=f.options[_];I&&$.forEach(G=>{I.includes(G.id.toString())&&(l+=G.price)})}),l*f.quantity},xe=()=>{const l=f.required.filter(u=>f.options[u].length===0);return S(u=>({...u,errors:l})),a(l.at(0)),l.length===0},Ce=()=>{if(!xe())return;const u=$r(),_={id:f.id,localId:f.localId||u,categoryId:y,options:f.options,quantity:f.quantity,totalPrice:f.totalPrice};k?n({[_.localId]:_}):i({[u]:_}),p(Te.MENU_PAGE)},ae=()=>{C(!1)},je=()=>{d([h]),p(Te.MENU_PAGE)};return m.useEffect(()=>{T&&S(l=>{var u,_,$;return{...l,id:T.id,categoryId:y,options:(u=T==null?void 0:T.options)==null?void 0:u.reduce((I,G)=>(I[G.id]=[],I),{}),required:($=(_=T==null?void 0:T.options)==null?void 0:_.filter(I=>I.required))==null?void 0:$.map(I=>I.id),process:{...l.process,initItemConfig:!0}}})},[T]),m.useEffect(()=>{const l=re();S($=>({...$,process:{...$.process,initItemTotal:!0},totalPrice:l}));const u=`Add to cart - ${le(l)}`,_=`Update item - ${le(l)}`;t({content:k?_:u,func:Ce})},[f.quantity,f.options,f.totalPrice,k]),m.useEffect(()=>{N&&Object.keys(N).length!==0&&f.process.initItemTotal&&f.process.initItemConfig&&S(l=>({...l,...Ct(N)}))},[N,f.process.initItemTotal,f.process.initItemConfig]),m.useLayoutEffect(()=>{s(),e(Te.MENU_PAGE),t({content:"Add to cart"})},[]),{itemRefs:r,selected:f,setSelected:S,currentItem:T,getOptionList:ie,getLabel:_e,handleChangeOptions:U,handleChangeQuantity:te,localId:h,isEdit:k,isRemoveDialog:j,handleRemoveClose:ae,handleRemoveItem:je}},nd=w("img")({height:"30dvh",width:"100%",objectFit:"fill"});function vd(){var y,x;const{itemRefs:e,selected:t,currentItem:r,getOptionList:a,getLabel:s,handleChangeOptions:i,handleChangeQuantity:n,isEdit:c,isRemoveDialog:d,handleRemoveClose:p,handleRemoveItem:A}=od();return o.jsxs(E,{container:!0,children:[o.jsx(E,{item:!0,xs:12,children:o.jsx(nd,{src:(r==null?void 0:r.image_source)||ar,alt:""})}),o.jsx(E,{item:!0,xs:12,children:o.jsxs(Ae,{spacing:1,children:[o.jsx(E,{item:!0,xs:12,children:o.jsx(W,{variant:"h4",children:r==null?void 0:r.name})}),o.jsx(E,{item:!0,xs:12,children:o.jsx(W,{variant:"body1",children:r==null?void 0:r.description})}),o.jsx(E,{item:!0,xs:12,children:o.jsx(W,{variant:"h6",color:"primary",children:le(r==null?void 0:r.price)})})]})}),!!((y=r==null?void 0:r.options)!=null&&y.length)&&o.jsx(E,{item:!0,xs:12,children:o.jsx(Ae,{children:(x=r==null?void 0:r.options)==null?void 0:x.map(h=>o.jsx(E,{item:!0,xs:12,ref:f=>{e.current[h.id]=f},children:o.jsx(Re,{required:h.required,dualLabel:!0,error:t.errors.includes(h.id),onChange:f=>i(h.id,f.target.value,h.max_choice),label:s(h.name,h.max_choice),data:a(h.option_list,t.options[h.id])})},h.id))})}),o.jsx(E,{item:!0,xs:12,children:o.jsxs(Ae,{justifyContent:"center",children:[o.jsx(Xe,{color:"primary",onClick:()=>n(-1),disabled:t.quantity===1&&!c,size:"large",children:o.jsx(It,{fontSize:"inherit"})}),o.jsx(At,{display:"flex",alignItems:"center",paddingInline:2,children:o.jsx(W,{variant:"h6",children:t.quantity})}),o.jsx(Xe,{color:"primary",onClick:()=>n(1),disabled:t.quantity===10,size:"large",children:o.jsx(or,{fontSize:"inherit"})})]})}),o.jsx(Le,{open:d,itemName:r==null?void 0:r.name,onClose:p,onAction:A})]})}export{vd as default};