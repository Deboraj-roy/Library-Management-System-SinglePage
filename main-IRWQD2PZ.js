import{$ as g,$a as Te,$b as ph,A as mt,Aa as F,Ab as ea,Ac as ls,B as le,Ba as Qt,Bb as Tt,Bc as Pr,C as Ir,Ca as eh,Cb as At,Cc as vh,D as vn,Da as Qi,Db as b,Dc as ee,E as Ui,Ea as th,Eb as d,Ec as Kn,F as mi,Fa as Ia,Fb as m,Fc as yh,G as ze,Ga as Ta,Gb as R,Gc as wh,H as Vc,Ha as Aa,Hb as De,Hc as N,I as zc,Ia as nh,Ib as Se,Ic as Ue,J as $i,Ja as Wc,Jb as at,Jc as Ch,K as ui,Ka as es,Kb as he,Kc as cs,L as jc,La as Xi,Lb as pe,Lc as xh,M as Hc,Ma as Ra,Mb as je,N as qu,Na as ih,Nb as Oe,O as Uc,Oa as ah,Ob as He,P as Jo,Pa as rh,Pb as ln,Q as Ie,Qa as oh,Qb as ht,R as ut,Ra as sh,Rb as S,S as ne,Sa as lh,Sb as Or,T as Yu,Ta as ch,Tb as k,U as vt,Ua as Bt,Ub as Q,V as re,Va as dh,Vb as P,W as Gi,Wa as u,Wb as xe,X as yt,Xa as Zi,Xb as oe,Y as x,Ya as mh,Yb as E,Z as y,Za as ts,Zb as I,_ as Ku,_a as Ar,_b as hh,a as C,aa as Z,ab as Ne,ac as Zc,b as Ce,ba as s,bb as wt,bc as qe,ca as Wi,cb as ye,cc as et,d as We,da as Qu,db as B,dc as O,e as Pe,ea as Xu,eb as Ji,ec as Fe,f as $u,fa as _t,fb as Qe,fc as p,g as on,ga as Lt,gb as ns,gc as Ee,h as Gu,ha as be,hb as uh,hc as G,i as M,ia as ve,ib as is,ic as Jc,j as Et,ja as Ke,jb as _,jc as as,k as Er,ka as qn,kb as w,kc as rs,l as Nc,la as J,lb as v,lc as os,m as Lc,ma as q,mb as qc,mc as fh,n as It,na as qi,nb as Y,nc as X,o as bt,oa as Zu,ob as U,oc as ta,p as K,pa as A,pb as Oa,pc as gh,q as Gn,qa as W,qb as Yc,qc as Yn,r as Ea,ra as Yi,rb as hi,rc as Fr,s as Wu,sa as Tr,sb as Rr,sc as ss,t as ae,ta as z,tb as Kc,tc as na,u as Wn,ua as Ju,ub as Qc,uc as _h,v as Kt,va as $c,vb as An,vc as ed,w as Bc,wa as Ki,wb as Xc,wc as Ae,x as Xo,xa as de,xb as L,xc as Ct,y as sn,ya as ue,yb as j,yc as bh,z as Zo,za as Gc,zb as H,zc as rt}from"./chunk-UNDP72CF.js";var Dh=null;function cn(){return Dh}function td(n){Dh??=n}var Nr=class{},Qn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:()=>s(kh),providedIn:"platform"})}return n})(),nd=new g(""),kh=(()=>{class n extends Qn{_location;_history;_doc=s(q);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return cn().getBaseHref(this._doc)}onPopState(e){let t=cn().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=cn().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,i){this._history.pushState(e,t,i)}replaceState(e,t,i){this._history.replaceState(e,t,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function ds(n,a){return n?a?n.endsWith("/")?a.startsWith("/")?n+a.slice(1):n+a:a.startsWith("/")?n+a:`${n}/${a}`:n:a}function Sh(n){let a=n.search(/#|\?|$/);return n[a-1]==="/"?n.slice(0,a-1)+n.slice(a):n}function yn(n){return n&&n[0]!=="?"?`?${n}`:n}var wn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:()=>s(us),providedIn:"root"})}return n})(),ms=new g(""),us=(()=>{class n extends wn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??s(q).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ds(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+yn(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${t}${i}`:t}pushState(e,t,i,r){let o=this.prepareExternalUrl(i+yn(r));this._platformLocation.pushState(e,t,o)}replaceState(e,t,i,r){let o=this.prepareExternalUrl(i+yn(r));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(Z(Qn),Z(ms,8))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Rn=(()=>{class n{_subject=new M;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=hv(Sh(Mh(t))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+yn(t))}normalize(e){return n.stripTrailingSlash(uv(this._basePath,Mh(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",i=null){this._locationStrategy.pushState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+yn(t)),i)}replaceState(e,t="",i=null){this._locationStrategy.replaceState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+yn(t)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(i=>i(e,t))}subscribe(e,t,i){return this._subject.subscribe({next:e,error:t??void 0,complete:i??void 0})}static normalizeQueryParams=yn;static joinWithSlash=ds;static stripTrailingSlash=Sh;static \u0275fac=function(t){return new(t||n)(Z(wn))};static \u0275prov=x({token:n,factory:()=>mv(),providedIn:"root"})}return n})();function mv(){return new Rn(Z(wn))}function uv(n,a){if(!n||!a.startsWith(n))return a;let e=a.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:a}function Mh(n){return n.replace(/\/index\.html$/,"")}function hv(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var od=(()=>{class n extends wn{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=ds(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,i,r){let o=this.prepareExternalUrl(i+yn(r))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,o)}replaceState(e,t,i,r){let o=this.prepareExternalUrl(i+yn(r))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(Z(Qn),Z(ms,8))};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})();var Rt=(function(n){return n[n.Format=0]="Format",n[n.Standalone=1]="Standalone",n})(Rt||{}),Le=(function(n){return n[n.Narrow=0]="Narrow",n[n.Abbreviated=1]="Abbreviated",n[n.Wide=2]="Wide",n[n.Short=3]="Short",n})(Le||{}),jt=(function(n){return n[n.Short=0]="Short",n[n.Medium=1]="Medium",n[n.Long=2]="Long",n[n.Full=3]="Full",n})(jt||{}),Zn={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Th(n){return ln(n)[ht.LocaleId]}function Ah(n,a,e){let t=ln(n),i=[t[ht.DayPeriodsFormat],t[ht.DayPeriodsStandalone]],r=dn(i,a);return dn(r,e)}function Rh(n,a,e){let t=ln(n),i=[t[ht.DaysFormat],t[ht.DaysStandalone]],r=dn(i,a);return dn(r,e)}function Oh(n,a,e){let t=ln(n),i=[t[ht.MonthsFormat],t[ht.MonthsStandalone]],r=dn(i,a);return dn(r,e)}function Fh(n,a){let t=ln(n)[ht.Eras];return dn(t,a)}function Lr(n,a){let e=ln(n);return dn(e[ht.DateFormat],a)}function Br(n,a){let e=ln(n);return dn(e[ht.TimeFormat],a)}function Vr(n,a){let t=ln(n)[ht.DateTimeFormat];return dn(t,a)}function zr(n,a){let e=ln(n),t=e[ht.NumberSymbols][a];if(typeof t>"u"){if(a===Zn.CurrencyDecimal)return e[ht.NumberSymbols][Zn.Decimal];if(a===Zn.CurrencyGroup)return e[ht.NumberSymbols][Zn.Group]}return t}function Ph(n){if(!n[ht.ExtraData])throw new re(2303,!1)}function Nh(n){let a=ln(n);return Ph(a),(a[ht.ExtraData][2]||[]).map(t=>typeof t=="string"?id(t):[id(t[0]),id(t[1])])}function Lh(n,a,e){let t=ln(n);Ph(t);let i=[t[ht.ExtraData][0],t[ht.ExtraData][1]],r=dn(i,a)||[];return dn(r,e)||[]}function dn(n,a){for(let e=a;e>-1;e--)if(typeof n[e]<"u")return n[e];throw new re(2304,!1)}function id(n){let[a,e]=n.split(":");return{hours:+a,minutes:+e}}var pv=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,hs={},fv=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Bh(n,a,e,t){let i=Dv(n);a=Xn(e,a)||a;let o=[],l;for(;a;)if(l=fv.exec(a),l){o=o.concat(l.slice(1));let f=o.pop();if(!f)break;a=f}else{o.push(a);break}let c=i.getTimezoneOffset();t&&(c=zh(t,c),i=xv(i,t));let h="";return o.forEach(f=>{let D=wv(f);h+=D?D(i,e,c):f==="''"?"'":f.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),h}function bs(n,a,e){let t=new Date(0);return t.setFullYear(n,a,e),t.setHours(0,0,0),t}function Xn(n,a){let e=Th(n);if(hs[e]??={},hs[e][a])return hs[e][a];let t="";switch(a){case"shortDate":t=Lr(n,jt.Short);break;case"mediumDate":t=Lr(n,jt.Medium);break;case"longDate":t=Lr(n,jt.Long);break;case"fullDate":t=Lr(n,jt.Full);break;case"shortTime":t=Br(n,jt.Short);break;case"mediumTime":t=Br(n,jt.Medium);break;case"longTime":t=Br(n,jt.Long);break;case"fullTime":t=Br(n,jt.Full);break;case"short":let i=Xn(n,"shortTime"),r=Xn(n,"shortDate");t=ps(Vr(n,jt.Short),[i,r]);break;case"medium":let o=Xn(n,"mediumTime"),l=Xn(n,"mediumDate");t=ps(Vr(n,jt.Medium),[o,l]);break;case"long":let c=Xn(n,"longTime"),h=Xn(n,"longDate");t=ps(Vr(n,jt.Long),[c,h]);break;case"full":let f=Xn(n,"fullTime"),D=Xn(n,"fullDate");t=ps(Vr(n,jt.Full),[f,D]);break}return t&&(hs[e][a]=t),t}function ps(n,a){return a&&(n=n.replace(/\{([^}]+)}/g,function(e,t){return a!=null&&t in a?a[t]:e})),n}function Cn(n,a,e="-",t,i){let r="";(n<0||i&&n<=0)&&(i?n=-n+1:(n=-n,r=e));let o=String(n);for(;o.length<a;)o="0"+o;return t&&(o=o.slice(o.length-a)),r+o}function gv(n,a){return Cn(n,3).substring(0,a)}function ot(n,a,e=0,t=!1,i=!1){return function(r,o){let l=_v(n,r);if((e>0||l>-e)&&(l+=e),n===3)l===0&&e===-12&&(l=12);else if(n===6)return gv(l,a);let c=zr(o,Zn.MinusSign);return Cn(l,a,c,t,i)}}function _v(n,a){switch(n){case 0:return a.getFullYear();case 1:return a.getMonth();case 2:return a.getDate();case 3:return a.getHours();case 4:return a.getMinutes();case 5:return a.getSeconds();case 6:return a.getMilliseconds();case 7:return a.getDay();default:throw new re(2301,!1)}}function $e(n,a,e=Rt.Format,t=!1){return function(i,r){return bv(i,r,n,a,e,t)}}function bv(n,a,e,t,i,r){switch(e){case 2:return Oh(a,i,t)[n.getMonth()];case 1:return Rh(a,i,t)[n.getDay()];case 0:let o=n.getHours(),l=n.getMinutes();if(r){let h=Nh(a),f=Lh(a,i,t),D=h.findIndex($=>{if(Array.isArray($)){let[ie,fe]=$,we=o>=ie.hours&&l>=ie.minutes,te=o<fe.hours||o===fe.hours&&l<fe.minutes;if(ie.hours<fe.hours){if(we&&te)return!0}else if(we||te)return!0}else if($.hours===o&&$.minutes===l)return!0;return!1});if(D!==-1)return f[D]}return Ah(a,i,t)[o<12?0:1];case 3:return Fh(a,t)[n.getFullYear()<=0?0:1];default:let c=e;throw new re(2302,!1)}}function fs(n){return function(a,e,t){let i=-1*t,r=zr(e,Zn.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(n){case 0:return(i>=0?"+":"")+Cn(o,2,r)+Cn(Math.abs(i%60),2,r);case 1:return"GMT"+(i>=0?"+":"")+Cn(o,1,r);case 2:return"GMT"+(i>=0?"+":"")+Cn(o,2,r)+":"+Cn(Math.abs(i%60),2,r);case 3:return t===0?"Z":(i>=0?"+":"")+Cn(o,2,r)+":"+Cn(Math.abs(i%60),2,r);default:throw new re(2310,!1)}}}var vv=0,_s=4;function yv(n){let a=bs(n,vv,1).getDay();return bs(n,0,1+(a<=_s?_s:_s+7)-a)}function Vh(n){let a=n.getDay(),e=a===0?-3:_s-a;return bs(n.getFullYear(),n.getMonth(),n.getDate()+e)}function ad(n,a=!1){return function(e,t){let i;if(a){let r=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,o=e.getDate();i=1+Math.floor((o+r)/7)}else{let r=Vh(e),o=yv(r.getFullYear()),l=r.getTime()-o.getTime();i=1+Math.round(l/6048e5)}return Cn(i,n,zr(t,Zn.MinusSign))}}function gs(n,a=!1){return function(e,t){let r=Vh(e).getFullYear();return Cn(r,n,zr(t,Zn.MinusSign),a)}}var rd={};function wv(n){if(rd[n])return rd[n];let a;switch(n){case"G":case"GG":case"GGG":a=$e(3,Le.Abbreviated);break;case"GGGG":a=$e(3,Le.Wide);break;case"GGGGG":a=$e(3,Le.Narrow);break;case"y":a=ot(0,1,0,!1,!0);break;case"yy":a=ot(0,2,0,!0,!0);break;case"yyy":a=ot(0,3,0,!1,!0);break;case"yyyy":a=ot(0,4,0,!1,!0);break;case"Y":a=gs(1);break;case"YY":a=gs(2,!0);break;case"YYY":a=gs(3);break;case"YYYY":a=gs(4);break;case"M":case"L":a=ot(1,1,1);break;case"MM":case"LL":a=ot(1,2,1);break;case"MMM":a=$e(2,Le.Abbreviated);break;case"MMMM":a=$e(2,Le.Wide);break;case"MMMMM":a=$e(2,Le.Narrow);break;case"LLL":a=$e(2,Le.Abbreviated,Rt.Standalone);break;case"LLLL":a=$e(2,Le.Wide,Rt.Standalone);break;case"LLLLL":a=$e(2,Le.Narrow,Rt.Standalone);break;case"w":a=ad(1);break;case"ww":a=ad(2);break;case"W":a=ad(1,!0);break;case"d":a=ot(2,1);break;case"dd":a=ot(2,2);break;case"c":case"cc":a=ot(7,1);break;case"ccc":a=$e(1,Le.Abbreviated,Rt.Standalone);break;case"cccc":a=$e(1,Le.Wide,Rt.Standalone);break;case"ccccc":a=$e(1,Le.Narrow,Rt.Standalone);break;case"cccccc":a=$e(1,Le.Short,Rt.Standalone);break;case"E":case"EE":case"EEE":a=$e(1,Le.Abbreviated);break;case"EEEE":a=$e(1,Le.Wide);break;case"EEEEE":a=$e(1,Le.Narrow);break;case"EEEEEE":a=$e(1,Le.Short);break;case"a":case"aa":case"aaa":a=$e(0,Le.Abbreviated);break;case"aaaa":a=$e(0,Le.Wide);break;case"aaaaa":a=$e(0,Le.Narrow);break;case"b":case"bb":case"bbb":a=$e(0,Le.Abbreviated,Rt.Standalone,!0);break;case"bbbb":a=$e(0,Le.Wide,Rt.Standalone,!0);break;case"bbbbb":a=$e(0,Le.Narrow,Rt.Standalone,!0);break;case"B":case"BB":case"BBB":a=$e(0,Le.Abbreviated,Rt.Format,!0);break;case"BBBB":a=$e(0,Le.Wide,Rt.Format,!0);break;case"BBBBB":a=$e(0,Le.Narrow,Rt.Format,!0);break;case"h":a=ot(3,1,-12);break;case"hh":a=ot(3,2,-12);break;case"H":a=ot(3,1);break;case"HH":a=ot(3,2);break;case"m":a=ot(4,1);break;case"mm":a=ot(4,2);break;case"s":a=ot(5,1);break;case"ss":a=ot(5,2);break;case"S":a=ot(6,1);break;case"SS":a=ot(6,2);break;case"SSS":a=ot(6,3);break;case"Z":case"ZZ":case"ZZZ":a=fs(0);break;case"ZZZZZ":a=fs(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":a=fs(1);break;case"OOOO":case"ZZZZ":case"zzzz":a=fs(2);break;default:return null}return rd[n]=a,a}function zh(n,a){n=n.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+n)/6e4;return isNaN(e)?a:e}function Cv(n,a){return n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+a),n}function xv(n,a,e){let i=n.getTimezoneOffset(),r=zh(a,i);return Cv(n,-1*(r-i))}function Dv(n){if(Eh(n))return n;if(typeof n=="number"&&!isNaN(n))return new Date(n);if(typeof n=="string"){if(n=n.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(n)){let[i,r=1,o=1]=n.split("-").map(l=>+l);return bs(i,r-1,o)}let e=parseFloat(n);if(!isNaN(n-e))return new Date(e);let t;if(t=n.match(pv))return kv(t)}let a=new Date(n);if(!Eh(a))throw new re(2311,!1);return a}function kv(n){let a=new Date(0),e=0,t=0,i=n[8]?a.setUTCFullYear:a.setFullYear,r=n[8]?a.setUTCHours:a.setHours;n[9]&&(e=Number(n[9]+n[10]),t=Number(n[9]+n[11])),i.call(a,Number(n[1]),Number(n[2])-1,Number(n[3]));let o=Number(n[4]||0)-e,l=Number(n[5]||0)-t,c=Number(n[6]||0),h=Math.floor(parseFloat("0."+(n[7]||0))*1e3);return r.call(a,o,l,c,h),a}function Eh(n){return n instanceof Date&&!isNaN(n.valueOf())}var vs=class{$implicit;ngForOf;index;count;constructor(a,e,t,i){this.$implicit=a,this.ngForOf=e,this.index=t,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},ys=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,t,i){this._viewContainer=e,this._template=t,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((i,r,o)=>{if(i.previousIndex==null)t.createEmbeddedView(this._template,new vs(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)t.remove(r===null?void 0:r);else if(r!==null){let l=t.get(r);t.move(l,o),Ih(l,i)}});for(let i=0,r=t.length;i<r;i++){let l=t.get(i).context;l.index=i,l.count=r,l.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let r=t.get(i.currentIndex);Ih(r,i)})}static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(B(Qe),B(Ne),B(Kn))};static \u0275dir=v({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function Ih(n,a){n.context.$implicit=a.item}var sd=(()=>{class n{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,t,i){this._ngEl=e,this._differs=t,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){let[i,r]=e.split("."),o=i.indexOf("-")===-1?void 0:Zi.DashCase;t!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,r?`${t}${r}`:t,o):this._renderer.removeStyle(this._ngEl.nativeElement,i,o)}_applyChanges(e){e.forEachRemovedItem(t=>this._setStyle(t.key,null)),e.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}static \u0275fac=function(t){return new(t||n)(B(F),B(yh),B(ye))};static \u0275dir=v({type:n,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return n})(),Fa=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=s(J);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,i):!1,get:(e,t,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,i)}})}static \u0275fac=function(t){return new(t||n)(B(Qe))};static \u0275dir=v({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[de]})}return n})();function jh(n,a){return new re(2100,!1)}var Sv=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g,jr=(()=>{class n{transform(e){return e==null?null:(Mv(n,e),e.replace(Sv,t=>t[0].toUpperCase()+t.slice(1).toLowerCase()))}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=qc({name:"titlecase",type:n,pure:!0})}return n})();function Mv(n,a){if(typeof a!="string")throw jh(n,a)}var Ev="mediumDate",Hh=new g(""),Uh=new g(""),ld=(()=>{class n{locale;defaultTimezone;defaultOptions;constructor(e,t,i){this.locale=e,this.defaultTimezone=t,this.defaultOptions=i}transform(e,t,i,r){if(e==null||e===""||e!==e)return null;try{let o=t??this.defaultOptions?.dateFormat??Ev,l=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Bh(e,o,r||this.locale,l)}catch(o){throw jh(n,o.message)}}static \u0275fac=function(t){return new(t||n)(B(ed,16),B(Hh,24),B(Uh,24))};static \u0275pipe=qc({name:"date",type:n,pure:!0})}return n})();var Jn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({})}return n})();function Hr(n,a){a=encodeURIComponent(a);for(let e of n.split(";")){let t=e.indexOf("="),[i,r]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(i.trim()===a)return decodeURIComponent(r)}return null}var ia=class{};var dd="browser";function Gh(n){return n===dd}var md=(()=>{class n{static \u0275prov=x({token:n,providedIn:"root",factory:()=>new cd(s(q),window)})}return n})(),cd=class{document;window;offset=()=>[0,0];constructor(a,e){this.document=a,this.window=e}setOffset(a){Array.isArray(a)?this.offset=()=>a:this.offset=a}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(a,e){this.window.scrollTo(Ce(C({},e),{left:a[0],top:a[1]}))}scrollToAnchor(a,e){let t=Tv(this.document,a);t&&(this.scrollToElement(t,e),t.focus({preventScroll:!0}))}setHistoryScrollRestoration(a){try{this.window.history.scrollRestoration=a}catch(e){console.warn(Gi(2400,!1))}}scrollToElement(a,e){let t=a.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(Ce(C({},e),{left:i-o[0],top:r-o[1]}))}};function Tv(n,a){let e=n.getElementById(a)||n.getElementsByName(a)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),i=t.currentNode;for(;i;){let r=i.shadowRoot;if(r){let o=r.getElementById(a)||r.querySelector(`[name="${a}"]`);if(o)return o}i=t.nextNode()}}return null}var Ur=class{_doc;constructor(a){this._doc=a}manager},ws=(()=>{class n extends Ur{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,i,r){return e.addEventListener(t,i,r),()=>this.removeEventListener(e,t,i,r)}removeEventListener(e,t,i,r){return e.removeEventListener(t,i,r)}static \u0275fac=function(t){return new(t||n)(Z(q))};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),Ds=new g(""),fd=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(o=>{o.manager=this});let i=e.filter(o=>!(o instanceof ws));this._plugins=i.slice().reverse();let r=e.find(o=>o instanceof ws);r&&this._plugins.push(r)}addEventListener(e,t,i,r){return this._findPluginFor(t).addEventListener(e,t,i,r)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(r=>r.supports(e)),!t)throw new re(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(Z(Ds),Z(W))};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),ud="ng-app-id";function Wh(n){for(let a of n)a.remove()}function qh(n,a){let e=a.createElement("style");return e.textContent=n,e}function Av(n,a,e,t){let i=n.head?.querySelectorAll(`style[${ud}="${a}"],link[${ud}="${a}"]`);if(i)for(let r of i)r.removeAttribute(ud),r instanceof HTMLLinkElement?t.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&e.set(r.textContent,{usage:0,elements:[r]})}function pd(n,a){let e=a.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var gd=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,i,r={}){this.doc=e,this.appId=t,this.nonce=i,Av(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let i of e)this.addUsage(i,this.inline,qh);t?.forEach(i=>this.addUsage(i,this.external,pd))}removeStyles(e,t){for(let i of e)this.removeUsage(i,this.inline);t?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,t,i){let r=t.get(e);r?r.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,i(e,this.doc)))})}removeUsage(e,t){let i=t.get(e);i&&(i.usage--,i.usage<=0&&(Wh(i.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Wh(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:i}]of this.inline)i.push(this.addElement(e,qh(t,this.doc)));for(let[t,{elements:i}]of this.external)i.push(this.addElement(e,pd(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(Z(q),Z(Qi),Z(Aa,8),Z(Ia))};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),hd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},_d=/%COMP%/g;var Kh="%COMP%",Rv=`_nghost-${Kh}`,Ov=`_ngcontent-${Kh}`,Fv=!0,Pv=new g("",{factory:()=>Fv});function Nv(n){return Ov.replace(_d,n)}function Lv(n){return Rv.replace(_d,n)}function Qh(n,a){return a.map(e=>e.replace(_d,n))}var Wr=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,i,r,o,l,c=null,h=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=i,this.removeStylesOnCompDestroy=r,this.doc=o,this.ngZone=l,this.nonce=c,this.tracingService=h,this.defaultRenderer=new $r(e,o,l,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,t);return i instanceof xs?i.applyToHost(e):i instanceof Gr&&i.applyStyles(),i}getOrCreateRenderer(e,t){let i=this.rendererByCompId,r=i.get(t.id);if(!r){let o=this.doc,l=this.ngZone,c=this.eventManager,h=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,D=this.tracingService;switch(t.encapsulation){case es.Emulated:r=new xs(c,h,t,this.appId,f,o,l,D);break;case es.ShadowDom:return new Cs(c,e,t,o,l,this.nonce,D,h);case es.ExperimentalIsolatedShadowDom:return new Cs(c,e,t,o,l,this.nonce,D);default:r=new Gr(c,h,t,f,o,l,D);break}i.set(t.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(Z(fd),Z(gd),Z(Qi),Z(Pv),Z(q),Z(W),Z(Aa),Z(ts,8))};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),$r=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(a,e,t,i){this.eventManager=a,this.doc=e,this.ngZone=t,this.tracingService=i}destroy(){}destroyNode=null;createElement(a,e){return e?this.doc.createElementNS(hd[e]||e,a):this.doc.createElement(a)}createComment(a){return this.doc.createComment(a)}createText(a){return this.doc.createTextNode(a)}appendChild(a,e){(Yh(a)?a.content:a).appendChild(e)}insertBefore(a,e,t){a&&(Yh(a)?a.content:a).insertBefore(e,t)}removeChild(a,e){e.remove()}selectRootElement(a,e){let t=typeof a=="string"?this.doc.querySelector(a):a;if(!t)throw new re(-5104,!1);return e||(t.textContent=""),t}parentNode(a){return a.parentNode}nextSibling(a){return a.nextSibling}setAttribute(a,e,t,i){if(i){e=i+":"+e;let r=hd[i];r?a.setAttributeNS(r,e,t):a.setAttribute(e,t)}else a.setAttribute(e,t)}removeAttribute(a,e,t){if(t){let i=hd[t];i?a.removeAttributeNS(i,e):a.removeAttribute(`${t}:${e}`)}else a.removeAttribute(e)}addClass(a,e){a.classList.add(e)}removeClass(a,e){a.classList.remove(e)}setStyle(a,e,t,i){i&(Zi.DashCase|Zi.Important)?a.style.setProperty(e,t,i&Zi.Important?"important":""):a.style[e]=t}removeStyle(a,e,t){t&Zi.DashCase?a.style.removeProperty(e):a.style[e]=""}setProperty(a,e,t){a!=null&&(a[e]=t)}setValue(a,e){a.nodeValue=e}listen(a,e,t,i){if(typeof a=="string"&&(a=cn().getGlobalEventTarget(this.doc,a),!a))throw new re(5102,!1);let r=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(a,e,r)),this.eventManager.addEventListener(a,e,r,i)}decoratePreventDefault(a){return e=>{if(e==="__ngUnwrap__")return a;a(e)===!1&&e.preventDefault()}}};function Yh(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Cs=class extends $r{hostEl;sharedStylesHost;shadowRoot;constructor(a,e,t,i,r,o,l,c){super(a,i,r,l),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let h=t.styles;h=Qh(t.id,h);for(let D of h){let $=document.createElement("style");o&&$.setAttribute("nonce",o),$.textContent=D,this.shadowRoot.appendChild($)}let f=t.getExternalStyles?.();if(f)for(let D of f){let $=pd(D,i);o&&$.setAttribute("nonce",o),this.shadowRoot.appendChild($)}}nodeOrShadowRoot(a){return a===this.hostEl?this.shadowRoot:a}appendChild(a,e){return super.appendChild(this.nodeOrShadowRoot(a),e)}insertBefore(a,e,t){return super.insertBefore(this.nodeOrShadowRoot(a),e,t)}removeChild(a,e){return super.removeChild(null,e)}parentNode(a){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(a)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Gr=class extends $r{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(a,e,t,i,r,o,l,c){super(a,r,o,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let h=t.styles;this.styles=c?Qh(c,h):h,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&mh.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},xs=class extends Gr{contentAttr;hostAttr;constructor(a,e,t,i,r,o,l,c){let h=i+"-"+t.id;super(a,e,t,r,o,l,c,h),this.contentAttr=Nv(h),this.hostAttr=Lv(h)}applyToHost(a){this.applyStyles(),this.setAttribute(a,this.hostAttr,"")}createElement(a,e){let t=super.createElement(a,e);return super.setAttribute(t,this.contentAttr,""),t}};var ks=class n extends Nr{supportsDOMEvents=!0;static makeCurrent(){td(new n)}onAndCancel(a,e,t,i){return a.addEventListener(e,t,i),()=>{a.removeEventListener(e,t,i)}}dispatchEvent(a,e){a.dispatchEvent(e)}remove(a){a.remove()}createElement(a,e){return e=e||this.getDefaultDocument(),e.createElement(a)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(a){return a.nodeType===Node.ELEMENT_NODE}isShadowRoot(a){return a instanceof DocumentFragment}getGlobalEventTarget(a,e){return e==="window"?window:e==="document"?a:e==="body"?a.body:null}getBaseHref(a){let e=Vv();return e==null?null:zv(e)}resetBaseElement(){qr=null}getUserAgent(){return window.navigator.userAgent}getCookie(a){return Hr(document.cookie,a)}},qr=null;function Vv(){return qr=qr||document.head.querySelector("base"),qr?qr.getAttribute("href"):null}function zv(n){return new URL(n,document.baseURI).pathname}var jv=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),Xh=["alt","control","meta","shift"],Hv={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Uv={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Zh=(()=>{class n extends Ur{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,i,r){let o=n.parseEventName(t),l=n.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>cn().onAndCancel(e,o.domEventName,l,r))}static parseEventName(e){let t=e.toLowerCase().split("."),i=t.shift();if(t.length===0||!(i==="keydown"||i==="keyup"))return null;let r=n._normalizeKey(t.pop()),o="",l=t.indexOf("code");if(l>-1&&(t.splice(l,1),o="code."),Xh.forEach(h=>{let f=t.indexOf(h);f>-1&&(t.splice(f,1),o+=h+".")}),o+=r,t.length!=0||r.length===0)return null;let c={};return c.domEventName=i,c.fullKey=o,c}static matchEventFullKeyCode(e,t){let i=Hv[e.key]||e.key,r="";return t.indexOf("code.")>-1&&(i=e.code,r="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Xh.forEach(o=>{if(o!==i){let l=Uv[o];l(e)&&(r+=o+".")}}),r+=i,r===t)}static eventCallback(e,t,i){return r=>{n.matchEventFullKeyCode(r,e)&&i.runGuarded(()=>t(r))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(Z(q))};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})();function bd(n,a,e){return We(this,null,function*(){let t=C({rootComponent:n},$v(a,e));return wh(t)})}function $v(n,a){return{platformRef:a?.platformRef,appProviders:[...Kv,...n?.providers??[]],platformProviders:Yv}}function Gv(){ks.makeCurrent()}function Wv(){return new Yi}function qv(){return eh(document),document}var Yv=[{provide:Ia,useValue:dd},{provide:th,useValue:Gv,multi:!0},{provide:q,useFactory:qv}];var Kv=[{provide:Xu,useValue:"root"},{provide:Yi,useFactory:Wv},{provide:Ds,useClass:ws,multi:!0},{provide:Ds,useClass:Zh,multi:!0},Wr,gd,fd,{provide:wt,useExisting:Wr},{provide:ia,useClass:jv},[]];var pi=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(a){a?typeof a=="string"?this.lazyInit=()=>{this.headers=new Map,a.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let i=e.slice(0,t),r=e.slice(t+1).trim();this.addHeaderEntry(i,r)}})}:typeof Headers<"u"&&a instanceof Headers?(this.headers=new Map,a.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(a).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(a){return this.init(),this.headers.has(a.toLowerCase())}get(a){this.init();let e=this.headers.get(a.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(a){return this.init(),this.headers.get(a.toLowerCase())||null}append(a,e){return this.clone({name:a,value:e,op:"a"})}set(a,e){return this.clone({name:a,value:e,op:"s"})}delete(a,e){return this.clone({name:a,value:e,op:"d"})}maybeSetNormalizedName(a,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,a)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(a=>this.applyUpdate(a)),this.lazyUpdate=null))}copyFrom(a){a.init(),Array.from(a.headers.keys()).forEach(e=>{this.headers.set(e,a.headers.get(e)),this.normalizedNames.set(e,a.normalizedNames.get(e))})}clone(a){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([a]),e}applyUpdate(a){let e=a.name.toLowerCase();switch(a.op){case"a":case"s":let t=a.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(a.name,e);let i=(a.op==="a"?this.headers.get(e):void 0)||[];i.push(...t),this.headers.set(e,i);break;case"d":let r=a.value;if(!r)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(l=>r.indexOf(l)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(a,e){let t=a.toLowerCase();this.maybeSetNormalizedName(a,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(a,e){let t=(Array.isArray(e)?e:[e]).map(r=>r.toString()),i=a.toLowerCase();this.headers.set(i,t),this.maybeSetNormalizedName(a,i)}forEach(a){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>a(this.normalizedNames.get(e),this.headers.get(e)))}};var Ms=class{map=new Map;set(a,e){return this.map.set(a,e),this}get(a){return this.map.has(a)||this.map.set(a,a.defaultValue()),this.map.get(a)}delete(a){return this.map.delete(a),this}has(a){return this.map.has(a)}keys(){return this.map.keys()}},Es=class{encodeKey(a){return Jh(a)}encodeValue(a){return Jh(a)}decodeKey(a){return decodeURIComponent(a)}decodeValue(a){return decodeURIComponent(a)}};function Qv(n,a){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{let r=i.indexOf("="),[o,l]=r==-1?[a.decodeKey(i),""]:[a.decodeKey(i.slice(0,r)),a.decodeValue(i.slice(r+1))],c=e.get(o)||[];c.push(l),e.set(o,c)}),e}var Xv=/%(\d[a-f0-9])/gi,Zv={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Jh(n){return encodeURIComponent(n).replace(Xv,(a,e)=>Zv[e]??a)}function Ss(n){return`${n}`}var xt=class n{map;encoder;updates=null;cloneFrom=null;constructor(a={}){if(this.encoder=a.encoder||new Es,a.fromString){if(a.fromObject)throw new re(2805,!1);this.map=Qv(a.fromString,this.encoder)}else a.fromObject?(this.map=new Map,Object.keys(a.fromObject).forEach(e=>{let t=a.fromObject[e],i=Array.isArray(t)?t.map(Ss):[Ss(t)];this.map.set(e,i)})):this.map=null}has(a){return this.init(),this.map.has(a)}get(a){this.init();let e=this.map.get(a);return e?e[0]:null}getAll(a){return this.init(),this.map.get(a)||null}keys(){return this.init(),Array.from(this.map.keys())}append(a,e){return this.clone({param:a,value:e,op:"a"})}appendAll(a){let e=[];return Object.keys(a).forEach(t=>{let i=a[t];Array.isArray(i)?i.forEach(r=>{e.push({param:t,value:r,op:"a"})}):e.push({param:t,value:i,op:"a"})}),this.clone(e)}set(a,e){return this.clone({param:a,value:e,op:"s"})}delete(a,e){return this.clone({param:a,value:e,op:"d"})}toString(){return this.init(),this.keys().map(a=>{let e=this.encoder.encodeKey(a);return this.map.get(a).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(a=>a!=="").join("&")}clone(a){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(a),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(a=>this.map.set(a,this.cloneFrom.map.get(a))),this.updates.forEach(a=>{switch(a.op){case"a":case"s":let e=(a.op==="a"?this.map.get(a.param):void 0)||[];e.push(Ss(a.value)),this.map.set(a.param,e);break;case"d":if(a.value!==void 0){let t=this.map.get(a.param)||[],i=t.indexOf(Ss(a.value));i!==-1&&t.splice(i,1),t.length>0?this.map.set(a.param,t):this.map.delete(a.param)}else{this.map.delete(a.param);break}}}),this.cloneFrom=this.updates=null)}};function Jv(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ep(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function tp(n){return typeof Blob<"u"&&n instanceof Blob}function np(n){return typeof FormData<"u"&&n instanceof FormData}function ey(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var ip="Content-Type",ap="Accept",op="text/plain",sp="application/json",ty=`${sp}, ${op}, */*`,Na=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(a,e,t,i){this.url=e,this.method=a.toUpperCase();let r;if(Jv(this.method)||i?(this.body=t!==void 0?t:null,r=i):r=t,r){if(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout=="number"){if(r.timeout<1||!Number.isInteger(r.timeout))throw new re(2822,"");this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),r.integrity&&(this.integrity=r.integrity),r.referrer&&(this.referrer=r.referrer),r.referrerPolicy&&(this.referrerPolicy=r.referrerPolicy),this.transferCache=r.transferCache}if(this.headers??=new pi,this.context??=new Ms,!this.params)this.params=new xt,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let l=e.indexOf("?"),c=l===-1?"?":l<e.length-1?"&":"";this.urlWithParams=e+c+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ep(this.body)||tp(this.body)||np(this.body)||ey(this.body)?this.body:this.body instanceof xt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||np(this.body)?null:tp(this.body)?this.body.type||null:ep(this.body)?null:typeof this.body=="string"?op:this.body instanceof xt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?sp:null}clone(a={}){let e=a.method||this.method,t=a.url||this.url,i=a.responseType||this.responseType,r=a.keepalive??this.keepalive,o=a.priority||this.priority,l=a.cache||this.cache,c=a.mode||this.mode,h=a.redirect||this.redirect,f=a.credentials||this.credentials,D=a.referrer||this.referrer,$=a.integrity||this.integrity,ie=a.referrerPolicy||this.referrerPolicy,fe=a.transferCache??this.transferCache,we=a.timeout??this.timeout,te=a.body!==void 0?a.body:this.body,ce=a.withCredentials??this.withCredentials,Ye=a.reportProgress??this.reportProgress,zt=a.headers||this.headers,gt=a.params||this.params,Sr=a.context??this.context;return a.setHeaders!==void 0&&(zt=Object.keys(a.setHeaders).reduce((Mr,Hi)=>Mr.set(Hi,a.setHeaders[Hi]),zt)),a.setParams&&(gt=Object.keys(a.setParams).reduce((Mr,Hi)=>Mr.set(Hi,a.setParams[Hi]),gt)),new n(e,t,te,{params:gt,headers:zt,context:Sr,reportProgress:Ye,responseType:i,withCredentials:ce,transferCache:fe,keepalive:r,cache:l,priority:o,timeout:we,mode:c,redirect:h,credentials:f,referrer:D,integrity:$,referrerPolicy:ie})}},aa=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(aa||{}),Ba=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(a,e=200,t="OK"){this.headers=a.headers||new pi,this.status=a.status!==void 0?a.status:e,this.statusText=a.statusText||t,this.url=a.url||null,this.redirected=a.redirected,this.responseType=a.responseType,this.ok=this.status>=200&&this.status<300}},Is=class n extends Ba{constructor(a={}){super(a)}type=aa.ResponseHeader;clone(a={}){return new n({headers:a.headers||this.headers,status:a.status!==void 0?a.status:this.status,statusText:a.statusText||this.statusText,url:a.url||this.url||void 0})}},Yr=class n extends Ba{body;constructor(a={}){super(a),this.body=a.body!==void 0?a.body:null}type=aa.Response;clone(a={}){return new n({body:a.body!==void 0?a.body:this.body,headers:a.headers||this.headers,status:a.status!==void 0?a.status:this.status,statusText:a.statusText||this.statusText,url:a.url||this.url||void 0,redirected:a.redirected??this.redirected,responseType:a.responseType??this.responseType})}},La=class extends Ba{name="HttpErrorResponse";message;error;ok=!1;constructor(a){super(a,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${a.url||"(unknown url)"}`:this.message=`Http failure response for ${a.url||"(unknown url)"}: ${a.status} ${a.statusText}`,this.error=a.error||null}},ny=200,iy=204;var ay=new g("");var ry=/^\)\]\}',?\n/;var yd=(()=>{class n{xhrFactory;tracingService=s(ts,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new re(-2800,!1);let t=this.xhrFactory;return K(null).pipe(ut(()=>new on(r=>{let o=t.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((te,ce)=>o.setRequestHeader(te,ce.join(","))),e.headers.has(ap)||o.setRequestHeader(ap,ty),!e.headers.has(ip)){let te=e.detectContentTypeHeader();te!==null&&o.setRequestHeader(ip,te)}if(e.timeout&&(o.timeout=e.timeout),e.responseType){let te=e.responseType.toLowerCase();o.responseType=te!=="json"?te:"text"}let l=e.serializeBody(),c=null,h=()=>{if(c!==null)return c;let te=o.statusText||"OK",ce=new pi(o.getAllResponseHeaders()),Ye=o.responseURL||e.url;return c=new Is({headers:ce,status:o.status,statusText:te,url:Ye}),c},f=this.maybePropagateTrace(()=>{let{headers:te,status:ce,statusText:Ye,url:zt}=h(),gt=null;ce!==iy&&(gt=typeof o.response>"u"?o.responseText:o.response),ce===0&&(ce=gt?ny:0);let Sr=ce>=200&&ce<300;if(e.responseType==="json"&&typeof gt=="string"){let Mr=gt;gt=gt.replace(ry,"");try{gt=gt!==""?JSON.parse(gt):null}catch(Hi){gt=Mr,Sr&&(Sr=!1,gt={error:Hi,text:gt})}}Sr?(r.next(new Yr({body:gt,headers:te,status:ce,statusText:Ye,url:zt||void 0})),r.complete()):r.error(new La({error:gt,headers:te,status:ce,statusText:Ye,url:zt||void 0}))}),D=this.maybePropagateTrace(te=>{let{url:ce}=h(),Ye=new La({error:te,status:o.status||0,statusText:o.statusText||"Unknown Error",url:ce||void 0});r.error(Ye)}),$=D;e.timeout&&($=this.maybePropagateTrace(te=>{let{url:ce}=h(),Ye=new La({error:new DOMException("Request timed out","TimeoutError"),status:o.status||0,statusText:o.statusText||"Request timeout",url:ce||void 0});r.error(Ye)}));let ie=!1,fe=this.maybePropagateTrace(te=>{ie||(r.next(h()),ie=!0);let ce={type:aa.DownloadProgress,loaded:te.loaded};te.lengthComputable&&(ce.total=te.total),e.responseType==="text"&&o.responseText&&(ce.partialText=o.responseText),r.next(ce)}),we=this.maybePropagateTrace(te=>{let ce={type:aa.UploadProgress,loaded:te.loaded};te.lengthComputable&&(ce.total=te.total),r.next(ce)});return o.addEventListener("load",f),o.addEventListener("error",D),o.addEventListener("timeout",$),o.addEventListener("abort",D),e.reportProgress&&(o.addEventListener("progress",fe),l!==null&&o.upload&&o.upload.addEventListener("progress",we)),o.send(l),r.next({type:aa.Sent}),()=>{o.removeEventListener("error",D),o.removeEventListener("abort",D),o.removeEventListener("load",f),o.removeEventListener("timeout",$),e.reportProgress&&(o.removeEventListener("progress",fe),l!==null&&o.upload&&o.upload.removeEventListener("progress",we)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(t){return new(t||n)(Z(ia))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function lp(n,a){return a(n)}function oy(n,a){return(e,t)=>a.intercept(e,{handle:i=>n(i,t)})}function sy(n,a,e){return(t,i)=>Lt(e,()=>a(t,r=>n(r,i)))}var As=new g(""),Rs=new g("",{factory:()=>[]}),cp=new g(""),wd=new g("",{factory:()=>!0});function ly(){let n=null;return(a,e)=>{n===null&&(n=(s(As,{optional:!0})??[]).reduceRight(oy,lp));let t=s($c);if(s(wd)){let r=t.add();return n(a,e).pipe($i(r))}else return n(a,e)}}var Cd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=Z(yd),i},providedIn:"root"})}return n})();var Ts=(()=>{class n{backend;injector;chain=null;pendingTasks=s($c);contributeToStability=s(wd);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(Rs),...this.injector.get(cp,[])]));this.chain=t.reduceRight((i,r)=>sy(i,r,this.injector),lp)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe($i(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(Z(Cd),Z(_t))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),xd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=Z(Ts),i},providedIn:"root"})}return n})();function vd(n,a){return{body:a,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var Va=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,i={}){let r;if(e instanceof Na)r=e;else{let c;i.headers instanceof pi?c=i.headers:c=new pi(i.headers);let h;i.params&&(i.params instanceof xt?h=i.params:h=new xt({fromObject:i.params})),r=new Na(e,t,i.body!==void 0?i.body:null,{headers:c,context:i.context,params:h,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let o=K(r).pipe(Ui(c=>this.handler.handle(c)));if(e instanceof Na||i.observe==="events")return o;let l=o.pipe(le(c=>c instanceof Yr));switch(i.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return l.pipe(ae(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new re(2806,!1);return c.body}));case"blob":return l.pipe(ae(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new re(2807,!1);return c.body}));case"text":return l.pipe(ae(c=>{if(c.body!==null&&typeof c.body!="string")throw new re(2808,!1);return c.body}));default:return l.pipe(ae(c=>c.body))}case"response":return l;default:throw new re(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new xt().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,i={}){return this.request("PATCH",e,vd(i,t))}post(e,t,i={}){return this.request("POST",e,vd(i,t))}put(e,t,i={}){return this.request("PUT",e,vd(i,t))}static \u0275fac=function(t){return new(t||n)(Z(xd))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var cy=new g("",{factory:()=>!0}),dy="XSRF-TOKEN",my=new g("",{factory:()=>dy}),uy="X-XSRF-TOKEN",hy=new g("",{factory:()=>uy}),py=(()=>{class n{cookieName=s(my);doc=s(q);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Hr(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),dp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=Z(py),i},providedIn:"root"})}return n})();function fy(n,a){if(!s(cy)||n.method==="GET"||n.method==="HEAD")return a(n);try{let i=s(Qn).href,{origin:r}=new URL(i),{origin:o}=new URL(n.url,r);if(r!==o)return a(n)}catch(i){return a(n)}let e=s(dp).getToken(),t=s(hy);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),a(n)}var Os=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n})(Os||{});function mp(n,a){return{\u0275kind:n,\u0275providers:a}}function Fs(...n){let a=[Va,Ts,{provide:xd,useExisting:Ts},{provide:Cd,useFactory:()=>s(ay,{optional:!0})??s(yd)},{provide:Rs,useValue:fy,multi:!0}];for(let e of n)a.push(...e.\u0275providers);return Wi(a)}function Dd(n){return mp(Os.Interceptors,n.map(a=>({provide:Rs,useValue:a,multi:!0})))}var rp=new g("");function Ps(){return mp(Os.LegacyInterceptors,[{provide:rp,useFactory:ly},{provide:Rs,useExisting:rp,multi:!0}])}var kd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({providers:[Fs(Ps())]})}return n})();var hp=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(Z(q))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Kr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=Z(_y),i},providedIn:"root"})}return n})(),_y=(()=>{class n extends Kr{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case Bt.NONE:return t;case Bt.HTML:return Ra(t,"HTML")?Xi(t):ch(this._doc,String(t)).toString();case Bt.STYLE:return Ra(t,"Style")?Xi(t):t;case Bt.SCRIPT:if(Ra(t,"Script"))return Xi(t);throw new re(5200,!1);case Bt.URL:return Ra(t,"URL")?Xi(t):lh(String(t));case Bt.RESOURCE_URL:if(Ra(t,"ResourceURL"))return Xi(t);throw new re(5201,!1);default:throw new re(5202,!1)}}bypassSecurityTrustHtml(e){return ih(e)}bypassSecurityTrustStyle(e){return ah(e)}bypassSecurityTrustScript(e){return rh(e)}bypassSecurityTrustUrl(e){return oh(e)}bypassSecurityTrustResourceUrl(e){return sh(e)}static \u0275fac=function(t){return new(t||n)(Z(q))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var me="primary",so=Symbol("RouteTitle"),Td=class{params;constructor(a){this.params=a||{}}has(a){return Object.prototype.hasOwnProperty.call(this.params,a)}get(a){if(this.has(a)){let e=this.params[a];return Array.isArray(e)?e[0]:e}return null}getAll(a){if(this.has(a)){let e=this.params[a];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function oa(n){return new Td(n)}function Sd(n,a,e){for(let t=0;t<n.length;t++){let i=n[t],r=a[t];if(i[0]===":")e[i.substring(1)]=r;else if(i!==r.path)return!1}return!0}function Cp(n,a,e){let t=e.path.split("/"),i=t.indexOf("**");if(i===-1){if(t.length>n.length||e.pathMatch==="full"&&(a.hasChildren()||t.length<n.length))return null;let c={},h=n.slice(0,t.length);return Sd(t,h,c)?{consumed:h,posParams:c}:null}if(i!==t.lastIndexOf("**"))return null;let r=t.slice(0,i),o=t.slice(i+1);if(r.length+o.length>n.length||e.pathMatch==="full"&&a.hasChildren()&&e.path!=="**")return null;let l={};return!Sd(r,n.slice(0,r.length),l)||!Sd(o,n.slice(n.length-o.length),l)?null:{consumed:n,posParams:l}}function js(n){return new Promise((a,e)=>{n.pipe(ui()).subscribe({next:t=>a(t),error:t=>e(t)})})}function by(n,a){if(n.length!==a.length)return!1;for(let e=0;e<n.length;++e)if(!On(n[e],a[e]))return!1;return!0}function On(n,a){let e=n?Ad(n):void 0,t=a?Ad(a):void 0;if(!e||!t||e.length!=t.length)return!1;let i;for(let r=0;r<e.length;r++)if(i=e[r],!xp(n[i],a[i]))return!1;return!0}function Ad(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function xp(n,a){if(Array.isArray(n)&&Array.isArray(a)){if(n.length!==a.length)return!1;let e=[...n].sort(),t=[...a].sort();return e.every((i,r)=>t[r]===i)}else return n===a}function vy(n){return n.length>0?n[n.length-1]:null}function la(n){return Ea(n)?n:Rr(n)?bt(Promise.resolve(n)):K(n)}function Dp(n){return Ea(n)?js(n):Promise.resolve(n)}var yy={exact:Mp,subset:Ep},kp={exact:wy,subset:Cy,ignored:()=>!0},Sp={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Rd={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function fp(n,a,e){return yy[e.paths](n.root,a.root,e.matrixParams)&&kp[e.queryParams](n.queryParams,a.queryParams)&&!(e.fragment==="exact"&&n.fragment!==a.fragment)}function wy(n,a){return On(n,a)}function Mp(n,a,e){if(!ra(n.segments,a.segments)||!Bs(n.segments,a.segments,e)||n.numberOfChildren!==a.numberOfChildren)return!1;for(let t in a.children)if(!n.children[t]||!Mp(n.children[t],a.children[t],e))return!1;return!0}function Cy(n,a){return Object.keys(a).length<=Object.keys(n).length&&Object.keys(a).every(e=>xp(n[e],a[e]))}function Ep(n,a,e){return Ip(n,a,a.segments,e)}function Ip(n,a,e,t){if(n.segments.length>e.length){let i=n.segments.slice(0,e.length);return!(!ra(i,e)||a.hasChildren()||!Bs(i,e,t))}else if(n.segments.length===e.length){if(!ra(n.segments,e)||!Bs(n.segments,e,t))return!1;for(let i in a.children)if(!n.children[i]||!Ep(n.children[i],a.children[i],t))return!1;return!0}else{let i=e.slice(0,n.segments.length),r=e.slice(n.segments.length);return!ra(n.segments,i)||!Bs(n.segments,i,t)||!n.children[me]?!1:Ip(n.children[me],a,r,t)}}function Bs(n,a,e){return a.every((t,i)=>kp[e](n[i].parameters,t.parameters))}var Zt=class{root;queryParams;fragment;_queryParamMap;constructor(a=new Re([],{}),e={},t=null){this.root=a,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=oa(this.queryParams),this._queryParamMap}toString(){return ky.serialize(this)}},Re=class{segments;children;parent=null;constructor(a,e){this.segments=a,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Vs(this)}},fi=class{path;parameters;_parameterMap;constructor(a,e){this.path=a,this.parameters=e}get parameterMap(){return this._parameterMap??=oa(this.parameters),this._parameterMap}toString(){return Ap(this)}};function xy(n,a){return ra(n,a)&&n.every((e,t)=>On(e.parameters,a[t].parameters))}function ra(n,a){return n.length!==a.length?!1:n.every((e,t)=>e.path===a[t].path)}function Dy(n,a){let e=[];return Object.entries(n.children).forEach(([t,i])=>{t===me&&(e=e.concat(a(i,t)))}),Object.entries(n.children).forEach(([t,i])=>{t!==me&&(e=e.concat(a(i,t)))}),e}var _i=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:()=>new ti,providedIn:"root"})}return n})(),ti=class{parse(a){let e=new Fd(a);return new Zt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(a){let e=`/${Qr(a.root,!0)}`,t=Ey(a.queryParams),i=typeof a.fragment=="string"?`#${Sy(a.fragment)}`:"";return`${e}${t}${i}`}},ky=new ti;function Vs(n){return n.segments.map(a=>Ap(a)).join("/")}function Qr(n,a){if(!n.hasChildren())return Vs(n);if(a){let e=n.children[me]?Qr(n.children[me],!1):"",t=[];return Object.entries(n.children).forEach(([i,r])=>{i!==me&&t.push(`${i}:${Qr(r,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Dy(n,(t,i)=>i===me?[Qr(n.children[me],!1)]:[`${i}:${Qr(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[me]!=null?`${Vs(n)}/${e[0]}`:`${Vs(n)}/(${e.join("//")})`}}function Tp(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ns(n){return Tp(n).replace(/%3B/gi,";")}function Sy(n){return encodeURI(n)}function Od(n){return Tp(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function zs(n){return decodeURIComponent(n)}function gp(n){return zs(n.replace(/\+/g,"%20"))}function Ap(n){return`${Od(n.path)}${My(n.parameters)}`}function My(n){return Object.entries(n).map(([a,e])=>`;${Od(a)}=${Od(e)}`).join("")}function Ey(n){let a=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(i=>`${Ns(e)}=${Ns(i)}`).join("&"):`${Ns(e)}=${Ns(t)}`).filter(e=>e);return a.length?`?${a.join("&")}`:""}var Iy=/^[^\/()?;#]+/;function Md(n){let a=n.match(Iy);return a?a[0]:""}var Ty=/^[^\/()?;=#]+/;function Ay(n){let a=n.match(Ty);return a?a[0]:""}var Ry=/^[^=?&#]+/;function Oy(n){let a=n.match(Ry);return a?a[0]:""}var Fy=/^[^&#]+/;function Py(n){let a=n.match(Fy);return a?a[0]:""}var Fd=class{url;remaining;constructor(a){this.url=a,this.remaining=a}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Re([],{}):new Re([],this.parseChildren())}parseQueryParams(){let a={};if(this.consumeOptional("?"))do this.parseQueryParam(a);while(this.consumeOptional("&"));return a}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(a=0){if(a>50)throw new re(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,a));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,a)),(e.length>0||Object.keys(t).length>0)&&(i[me]=new Re(e,t)),i}parseSegment(){let a=Md(this.remaining);if(a===""&&this.peekStartsWith(";"))throw new re(4009,!1);return this.capture(a),new fi(zs(a),this.parseMatrixParams())}parseMatrixParams(){let a={};for(;this.consumeOptional(";");)this.parseParam(a);return a}parseParam(a){let e=Ay(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let i=Md(this.remaining);i&&(t=i,this.capture(t))}a[zs(e)]=zs(t)}parseQueryParam(a){let e=Oy(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let o=Py(this.remaining);o&&(t=o,this.capture(t))}let i=gp(e),r=gp(t);if(a.hasOwnProperty(i)){let o=a[i];Array.isArray(o)||(o=[o],a[i]=o),o.push(r)}else a[i]=r}parseParens(a,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Md(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new re(4010,!1);let o;i.indexOf(":")>-1?(o=i.slice(0,i.indexOf(":")),this.capture(o),this.capture(":")):a&&(o=me);let l=this.parseChildren(e+1);t[o??me]=Object.keys(l).length===1&&l[me]?l[me]:new Re([],l),this.consumeOptional("//")}return t}peekStartsWith(a){return this.remaining.startsWith(a)}consumeOptional(a){return this.peekStartsWith(a)?(this.remaining=this.remaining.substring(a.length),!0):!1}capture(a){if(!this.consumeOptional(a))throw new re(4011,!1)}};function Rp(n){return n.segments.length>0?new Re([],{[me]:n}):n}function Op(n){let a={};for(let[t,i]of Object.entries(n.children)){let r=Op(i);if(t===me&&r.segments.length===0&&r.hasChildren())for(let[o,l]of Object.entries(r.children))a[o]=l;else(r.segments.length>0||r.hasChildren())&&(a[t]=r)}let e=new Re(n.segments,a);return Ny(e)}function Ny(n){if(n.numberOfChildren===1&&n.children[me]){let a=n.children[me];return new Re(n.segments.concat(a.segments),a.children)}return n}function gi(n){return n instanceof Zt}function Fp(n,a,e=null,t=null,i=new ti){let r=Pp(n);return Np(r,a,e,t,i)}function Pp(n){let a;function e(r){let o={};for(let c of r.children){let h=e(c);o[c.outlet]=h}let l=new Re(r.url,o);return r===n&&(a=l),l}let t=e(n.root),i=Rp(t);return a??i}function Np(n,a,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(a.length===0)return Ed(r,r,r,e,t,i);let o=Ly(a);if(o.toRoot())return Ed(r,r,new Re([],{}),e,t,i);let l=By(o,r,n),c=l.processChildren?Zr(l.segmentGroup,l.index,o.commands):Bp(l.segmentGroup,l.index,o.commands);return Ed(r,l.segmentGroup,c,e,t,i)}function Hs(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function eo(n){return typeof n=="object"&&n!=null&&n.outlets}function _p(n,a,e){n||="\u0275";let t=new Zt;return t.queryParams={[n]:a},e.parse(e.serialize(t)).queryParams[n]}function Ed(n,a,e,t,i,r){let o={};for(let[h,f]of Object.entries(t??{}))o[h]=Array.isArray(f)?f.map(D=>_p(h,D,r)):_p(h,f,r);let l;n===a?l=e:l=Lp(n,a,e);let c=Rp(Op(l));return new Zt(c,o,i)}function Lp(n,a,e){let t={};return Object.entries(n.children).forEach(([i,r])=>{r===a?t[i]=e:t[i]=Lp(r,a,e)}),new Re(n.segments,t)}var Us=class{isAbsolute;numberOfDoubleDots;commands;constructor(a,e,t){if(this.isAbsolute=a,this.numberOfDoubleDots=e,this.commands=t,a&&t.length>0&&Hs(t[0]))throw new re(4003,!1);let i=t.find(eo);if(i&&i!==vy(t))throw new re(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Ly(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Us(!0,0,n);let a=0,e=!1,t=n.reduce((i,r,o)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let l={};return Object.entries(r.outlets).forEach(([c,h])=>{l[c]=typeof h=="string"?h.split("/"):h}),[...i,{outlets:l}]}if(r.segmentPath)return[...i,r.segmentPath]}return typeof r!="string"?[...i,r]:o===0?(r.split("/").forEach((l,c)=>{c==0&&l==="."||(c==0&&l===""?e=!0:l===".."?a++:l!=""&&i.push(l))}),i):[...i,r]},[]);return new Us(e,a,t)}var ja=class{segmentGroup;processChildren;index;constructor(a,e,t){this.segmentGroup=a,this.processChildren=e,this.index=t}};function By(n,a,e){if(n.isAbsolute)return new ja(a,!0,0);if(!e)return new ja(a,!1,NaN);if(e.parent===null)return new ja(e,!0,0);let t=Hs(n.commands[0])?0:1,i=e.segments.length-1+t;return Vy(e,i,n.numberOfDoubleDots)}function Vy(n,a,e){let t=n,i=a,r=e;for(;r>i;){if(r-=i,t=t.parent,!t)throw new re(4005,!1);i=t.segments.length}return new ja(t,!1,i-r)}function zy(n){return eo(n[0])?n[0].outlets:{[me]:n}}function Bp(n,a,e){if(n??=new Re([],{}),n.segments.length===0&&n.hasChildren())return Zr(n,a,e);let t=jy(n,a,e),i=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let r=new Re(n.segments.slice(0,t.pathIndex),{});return r.children[me]=new Re(n.segments.slice(t.pathIndex),n.children),Zr(r,0,i)}else return t.match&&i.length===0?new Re(n.segments,{}):t.match&&!n.hasChildren()?Pd(n,a,e):t.match?Zr(n,0,i):Pd(n,a,e)}function Zr(n,a,e){if(e.length===0)return new Re(n.segments,{});{let t=zy(e),i={};if(Object.keys(t).some(r=>r!==me)&&n.children[me]&&n.numberOfChildren===1&&n.children[me].segments.length===0){let r=Zr(n.children[me],a,e);return new Re(n.segments,r.children)}return Object.entries(t).forEach(([r,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(i[r]=Bp(n.children[r],a,o))}),Object.entries(n.children).forEach(([r,o])=>{t[r]===void 0&&(i[r]=o)}),new Re(n.segments,i)}}function jy(n,a,e){let t=0,i=a,r={match:!1,pathIndex:0,commandIndex:0};for(;i<n.segments.length;){if(t>=e.length)return r;let o=n.segments[i],l=e[t];if(eo(l))break;let c=`${l}`,h=t<e.length-1?e[t+1]:null;if(i>0&&c===void 0)break;if(c&&h&&typeof h=="object"&&h.outlets===void 0){if(!vp(c,h,o))return r;t+=2}else{if(!vp(c,{},o))return r;t++}i++}return{match:!0,pathIndex:i,commandIndex:t}}function Pd(n,a,e){let t=n.segments.slice(0,a),i=0;for(;i<e.length;){let r=e[i];if(eo(r)){let c=Hy(r.outlets);return new Re(t,c)}if(i===0&&Hs(e[0])){let c=n.segments[a];t.push(new fi(c.path,bp(e[0]))),i++;continue}let o=eo(r)?r.outlets[me]:`${r}`,l=i<e.length-1?e[i+1]:null;o&&l&&Hs(l)?(t.push(new fi(o,bp(l))),i+=2):(t.push(new fi(o,{})),i++)}return new Re(t,{})}function Hy(n){let a={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(a[e]=Pd(new Re([],{}),0,t))}),a}function bp(n){let a={};return Object.entries(n).forEach(([e,t])=>a[e]=`${t}`),a}function vp(n,a,e){return n==e.path&&On(a,e.parameters)}var Ha="imperative",pt=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(pt||{}),Jt=class{id;url;constructor(a,e){this.id=a,this.url=e}},Fn=class extends Jt{type=pt.NavigationStart;navigationTrigger;restoredState;constructor(a,e,t="imperative",i=null){super(a,e),this.navigationTrigger=t,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ht=class extends Jt{urlAfterRedirects;type=pt.NavigationEnd;constructor(a,e,t){super(a,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ot=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Ot||{}),$a=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})($a||{}),mn=class extends Jt{reason;code;type=pt.NavigationCancel;constructor(a,e,t,i){super(a,e),this.reason=t,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Vp(n){return n instanceof mn&&(n.code===Ot.Redirect||n.code===Ot.SupersededByNewNavigation)}var Pn=class extends Jt{reason;code;type=pt.NavigationSkipped;constructor(a,e,t,i){super(a,e),this.reason=t,this.code=i}},sa=class extends Jt{error;target;type=pt.NavigationError;constructor(a,e,t,i){super(a,e),this.error=t,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},to=class extends Jt{urlAfterRedirects;state;type=pt.RoutesRecognized;constructor(a,e,t,i){super(a,e),this.urlAfterRedirects=t,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$s=class extends Jt{urlAfterRedirects;state;type=pt.GuardsCheckStart;constructor(a,e,t,i){super(a,e),this.urlAfterRedirects=t,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Gs=class extends Jt{urlAfterRedirects;state;shouldActivate;type=pt.GuardsCheckEnd;constructor(a,e,t,i,r){super(a,e),this.urlAfterRedirects=t,this.state=i,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ws=class extends Jt{urlAfterRedirects;state;type=pt.ResolveStart;constructor(a,e,t,i){super(a,e),this.urlAfterRedirects=t,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qs=class extends Jt{urlAfterRedirects;state;type=pt.ResolveEnd;constructor(a,e,t,i){super(a,e),this.urlAfterRedirects=t,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ys=class{route;type=pt.RouteConfigLoadStart;constructor(a){this.route=a}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ks=class{route;type=pt.RouteConfigLoadEnd;constructor(a){this.route=a}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Qs=class{snapshot;type=pt.ChildActivationStart;constructor(a){this.snapshot=a}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xs=class{snapshot;type=pt.ChildActivationEnd;constructor(a){this.snapshot=a}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zs=class{snapshot;type=pt.ActivationStart;constructor(a){this.snapshot=a}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Js=class{snapshot;type=pt.ActivationEnd;constructor(a){this.snapshot=a}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ga=class{routerEvent;position;anchor;scrollBehavior;type=pt.Scroll;constructor(a,e,t,i){this.routerEvent=a,this.position=e,this.anchor=t,this.scrollBehavior=i}toString(){let a=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${a}')`}},Wa=class{},no=class{},qa=class{url;navigationBehaviorOptions;constructor(a,e){this.url=a,this.navigationBehaviorOptions=e}};function Uy(n){return!(n instanceof Wa)&&!(n instanceof qa)&&!(n instanceof no)}var el=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(a){this.rootInjector=a,this.children=new ca(this.rootInjector)}},ca=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let i=this.getOrCreateContext(e);i.outlet=t,this.contexts.set(e,i)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new el(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(Z(_t))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),tl=class{_root;constructor(a){this._root=a}get root(){return this._root.value}parent(a){let e=this.pathFromRoot(a);return e.length>1?e[e.length-2]:null}children(a){let e=Nd(a,this._root);return e?e.children.map(t=>t.value):[]}firstChild(a){let e=Nd(a,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(a){let e=Ld(a,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==a)}pathFromRoot(a){return Ld(a,this._root).map(e=>e.value)}};function Nd(n,a){if(n===a.value)return a;for(let e of a.children){let t=Nd(n,e);if(t)return t}return null}function Ld(n,a){if(n===a.value)return[a];for(let e of a.children){let t=Ld(n,e);if(t.length)return t.unshift(a),t}return[]}var Xt=class{value;children;constructor(a,e){this.value=a,this.children=e}toString(){return`TreeNode(${this.value})`}};function za(n){let a={};return n&&n.children.forEach(e=>a[e.value.outlet]=e),a}var io=class extends tl{snapshot;constructor(a,e){super(a),this.snapshot=e,Wd(this,a)}toString(){return this.snapshot.toString()}};function zp(n,a){let e=$y(n,a),t=new Et([new fi("",{})]),i=new Et({}),r=new Et({}),o=new Et({}),l=new Et(""),c=new Nn(t,i,o,l,r,me,n,e.root);return c.snapshot=e.root,new io(new Xt(c,[]),e)}function $y(n,a){let e={},t={},i={},o=new Ya([],e,i,"",t,me,n,null,{},a);return new ao("",new Xt(o,[]))}var Nn=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(a,e,t,i,r,o,l,c){this.urlSubject=a,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=i,this.dataSubject=r,this.outlet=o,this.component=l,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(ae(h=>h[so]))??K(void 0),this.url=a,this.params=e,this.queryParams=t,this.fragment=i,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ae(a=>oa(a))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ae(a=>oa(a))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Gd(n,a,e="emptyOnly"){let t,{routeConfig:i}=n;return a!==null&&(e==="always"||i?.path===""||!a.component&&!a.routeConfig?.loadComponent)?t={params:C(C({},a.params),n.params),data:C(C({},a.data),n.data),resolve:C(C(C(C({},n.data),a.data),i?.data),n._resolvedData)}:t={params:C({},n.params),data:C({},n.data),resolve:C(C({},n.data),n._resolvedData??{})},i&&Hp(i)&&(t.resolve[so]=i.title),t}var Ya=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[so]}constructor(a,e,t,i,r,o,l,c,h,f){this.url=a,this.params=e,this.queryParams=t,this.fragment=i,this.data=r,this.outlet=o,this.component=l,this.routeConfig=c,this._resolve=h,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=oa(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=oa(this.queryParams),this._queryParamMap}toString(){let a=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${a}', path:'${e}')`}},ao=class extends tl{url;constructor(a,e){super(e),this.url=a,Wd(this,e)}toString(){return jp(this._root)}};function Wd(n,a){a.value._routerState=n,a.children.forEach(e=>Wd(n,e))}function jp(n){let a=n.children.length>0?` { ${n.children.map(jp).join(", ")} } `:"";return`${n.value}${a}`}function Id(n){if(n.snapshot){let a=n.snapshot,e=n._futureSnapshot;n.snapshot=e,On(a.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),a.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),On(a.params,e.params)||n.paramsSubject.next(e.params),by(a.url,e.url)||n.urlSubject.next(e.url),On(a.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Bd(n,a){let e=On(n.params,a.params)&&xy(n.url,a.url),t=!n.parent!=!a.parent;return e&&!t&&(!n.parent||Bd(n.parent,a.parent))}function Hp(n){return typeof n.title=="string"||n.title===null}var Up=new g(""),lo=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=me;activateEvents=new A;deactivateEvents=new A;attachEvents=new A;detachEvents=new A;routerOutletData=ls();parentContexts=s(ca);location=s(Qe);changeDetector=s(ee);inputBinder=s(co,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:i}=e.name;if(t)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new re(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new re(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new re(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new re(4013,!1);this._activatedRoute=e;let i=this.location,o=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,c=new Vd(e,l,i.injector,this.routerOutletData);this.activated=i.createComponent(o,{index:i.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[de]})}return n})(),Vd=class{route;childContexts;parent;outletData;constructor(a,e,t,i){this.route=a,this.childContexts=e,this.parent=t,this.outletData=i}get(a,e){return a===Nn?this.route:a===ca?this.childContexts:a===Up?this.outletData:this.parent.get(a,e)}},co=new g(""),qd=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,i=Wn([t.queryParams,t.params,t.data]).pipe(ut(([r,o,l],c)=>(l=C(C(C({},r),o),l),c===0?K(l):Promise.resolve(l)))).subscribe(r=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let o=xh(t.component);if(!o){this.unsubscribeFromRouteData(e);return}for(let{templateName:l}of o.inputs)e.activatedComponentRef.setInput(l,r[l])});this.outletDataSubscriptions.set(e,i)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),Yd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,i){t&1&&R(0,"router-outlet")},dependencies:[lo],encapsulation:2})}return n})();function Kd(n){let a=n.children&&n.children.map(Kd),e=a?Ce(C({},n),{children:a}):C({},n);return!e.component&&!e.loadComponent&&(a||e.loadChildren)&&e.outlet&&e.outlet!==me&&(e.component=Yd),e}function Gy(n,a,e){let t=ro(n,a._root,e?e._root:void 0);return new io(t,a)}function ro(n,a,e){if(e&&n.shouldReuseRoute(a.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=a.value;let i=Wy(n,a,e);return new Xt(t,i)}else{if(n.shouldAttach(a.value)){let r=n.retrieve(a.value);if(r!==null){let o=r.route;return o.value._futureSnapshot=a.value,o.children=a.children.map(l=>ro(n,l)),o}}let t=qy(a.value),i=a.children.map(r=>ro(n,r));return new Xt(t,i)}}function Wy(n,a,e){return a.children.map(t=>{for(let i of e.children)if(n.shouldReuseRoute(t.value,i.value.snapshot))return ro(n,t,i);return ro(n,t)})}function qy(n){return new Nn(new Et(n.url),new Et(n.params),new Et(n.queryParams),new Et(n.fragment),new Et(n.data),n.outlet,n.component,n)}var Ka=class{redirectTo;navigationBehaviorOptions;constructor(a,e){this.redirectTo=a,this.navigationBehaviorOptions=e}},$p="ngNavigationCancelingError";function nl(n,a){let{redirectTo:e,navigationBehaviorOptions:t}=gi(a)?{redirectTo:a,navigationBehaviorOptions:void 0}:a,i=Gp(!1,Ot.Redirect);return i.url=e,i.navigationBehaviorOptions=t,i}function Gp(n,a){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[$p]=!0,e.cancellationCode=a,e}function Yy(n){return Wp(n)&&gi(n.url)}function Wp(n){return!!n&&n[$p]}var zd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(a,e,t,i,r){this.routeReuseStrategy=a,this.futureState=e,this.currState=t,this.forwardEvent=i,this.inputBindingEnabled=r}activate(a){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,a),Id(this.futureState.root),this.activateChildRoutes(e,t,a)}deactivateChildRoutes(a,e,t){let i=za(e);a.children.forEach(r=>{let o=r.value.outlet;this.deactivateRoutes(r,i[o],t),delete i[o]}),Object.values(i).forEach(r=>{this.deactivateRouteAndItsChildren(r,t)})}deactivateRoutes(a,e,t){let i=a.value,r=e?e.value:null;if(i===r)if(i.component){let o=t.getContext(i.outlet);o&&this.deactivateChildRoutes(a,e,o.children)}else this.deactivateChildRoutes(a,e,t);else r&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(a,e){a.value.component&&this.routeReuseStrategy.shouldDetach(a.value.snapshot)?this.detachAndStoreRouteSubtree(a,e):this.deactivateRouteAndOutlet(a,e)}detachAndStoreRouteSubtree(a,e){let t=e.getContext(a.value.outlet),i=t&&a.value.component?t.children:e,r=za(a);for(let o of Object.values(r))this.deactivateRouteAndItsChildren(o,i);if(t&&t.outlet){let o=t.outlet.detach(),l=t.children.onOutletDeactivated();this.routeReuseStrategy.store(a.value.snapshot,{componentRef:o,route:a,contexts:l})}}deactivateRouteAndOutlet(a,e){let t=e.getContext(a.value.outlet),i=t&&a.value.component?t.children:e,r=za(a);for(let o of Object.values(r))this.deactivateRouteAndItsChildren(o,i);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(a,e,t){let i=za(e);a.children.forEach(r=>{this.activateRoutes(r,i[r.value.outlet],t),this.forwardEvent(new Js(r.value.snapshot))}),a.children.length&&this.forwardEvent(new Xs(a.value.snapshot))}activateRoutes(a,e,t){let i=a.value,r=e?e.value:null;if(Id(i),i===r)if(i.component){let o=t.getOrCreateContext(i.outlet);this.activateChildRoutes(a,e,o.children)}else this.activateChildRoutes(a,e,t);else if(i.component){let o=t.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let l=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),o.children.onOutletReAttached(l.contexts),o.attachRef=l.componentRef,o.route=l.route.value,o.outlet&&o.outlet.attach(l.componentRef,l.route.value),Id(l.route.value),this.activateChildRoutes(a,null,o.children)}else o.attachRef=null,o.route=i,o.outlet&&o.outlet.activateWith(i,o.injector),this.activateChildRoutes(a,null,o.children)}else this.activateChildRoutes(a,null,t)}},il=class{path;route;constructor(a){this.path=a,this.route=this.path[this.path.length-1]}},Ua=class{component;route;constructor(a,e){this.component=a,this.route=e}};function Ky(n,a,e){let t=n._root,i=a?a._root:null;return Xr(t,i,e,[t.value])}function Qy(n){let a=n.routeConfig?n.routeConfig.canActivateChild:null;return!a||a.length===0?null:{node:n,guards:a}}function Xa(n,a){let e=Symbol(),t=a.get(n,e);return t===e?typeof n=="function"&&!Ku(n)?n:a.get(n):t}function Xr(n,a,e,t,i={canDeactivateChecks:[],canActivateChecks:[]}){let r=za(a);return n.children.forEach(o=>{Xy(o,r[o.value.outlet],e,t.concat([o.value]),i),delete r[o.value.outlet]}),Object.entries(r).forEach(([o,l])=>Jr(l,e.getContext(o),i)),i}function Xy(n,a,e,t,i={canDeactivateChecks:[],canActivateChecks:[]}){let r=n.value,o=a?a.value:null,l=e?e.getContext(n.value.outlet):null;if(o&&r.routeConfig===o.routeConfig){let c=Zy(o,r,r.routeConfig.runGuardsAndResolvers);c?i.canActivateChecks.push(new il(t)):(r.data=o.data,r._resolvedData=o._resolvedData),r.component?Xr(n,a,l?l.children:null,t,i):Xr(n,a,e,t,i),c&&l&&l.outlet&&l.outlet.isActivated&&i.canDeactivateChecks.push(new Ua(l.outlet.component,o))}else o&&Jr(a,l,i),i.canActivateChecks.push(new il(t)),r.component?Xr(n,null,l?l.children:null,t,i):Xr(n,null,e,t,i);return i}function Zy(n,a,e){if(typeof e=="function")return Lt(a._environmentInjector,()=>e(n,a));switch(e){case"pathParamsChange":return!ra(n.url,a.url);case"pathParamsOrQueryParamsChange":return!ra(n.url,a.url)||!On(n.queryParams,a.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Bd(n,a)||!On(n.queryParams,a.queryParams);default:return!Bd(n,a)}}function Jr(n,a,e){let t=za(n),i=n.value;Object.entries(t).forEach(([r,o])=>{i.component?a?Jr(o,a.children.getContext(r),e):Jr(o,null,e):Jr(o,a,e)}),i.component?a&&a.outlet&&a.outlet.isActivated?e.canDeactivateChecks.push(new Ua(a.outlet.component,i)):e.canDeactivateChecks.push(new Ua(null,i)):e.canDeactivateChecks.push(new Ua(null,i))}function mo(n){return typeof n=="function"}function Jy(n){return typeof n=="boolean"}function e0(n){return n&&mo(n.canLoad)}function t0(n){return n&&mo(n.canActivate)}function n0(n){return n&&mo(n.canActivateChild)}function i0(n){return n&&mo(n.canDeactivate)}function a0(n){return n&&mo(n.canMatch)}function qp(n){return n instanceof Wu||n?.name==="EmptyError"}var Ls=Symbol("INITIAL_VALUE");function Qa(){return ut(n=>Wn(n.map(a=>a.pipe(ze(1),Ie(Ls)))).pipe(ae(a=>{for(let e of a)if(e!==!0){if(e===Ls)return Ls;if(e===!1||r0(e))return e}return!0}),le(a=>a!==Ls),ze(1)))}function r0(n){return gi(n)||n instanceof Ka}function Yp(n){return n.aborted?K(void 0).pipe(ze(1)):new on(a=>{let e=()=>{a.next(),a.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function Kp(n){return ne(Yp(n))}function o0(n){return Kt(a=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:i,canDeactivateChecks:r}}=a;return r.length===0&&i.length===0?K(Ce(C({},a),{guardsResult:!0})):s0(r,e,t).pipe(Kt(o=>o&&Jy(o)?l0(e,i,n):K(o)),ae(o=>Ce(C({},a),{guardsResult:o})))})}function s0(n,a,e){return bt(n).pipe(Kt(t=>h0(t.component,t.route,e,a)),ui(t=>t!==!0,!0))}function l0(n,a,e){return bt(a).pipe(Ui(t=>Xo(d0(t.route.parent,e),c0(t.route,e),u0(n,t.path),m0(n,t.route))),ui(t=>t!==!0,!0))}function c0(n,a){return n!==null&&a&&a(new Zs(n)),K(!0)}function d0(n,a){return n!==null&&a&&a(new Qs(n)),K(!0)}function m0(n,a){let e=a.routeConfig?a.routeConfig.canActivate:null;if(!e||e.length===0)return K(!0);let t=e.map(i=>sn(()=>{let r=a._environmentInjector,o=Xa(i,r),l=t0(o)?o.canActivate(a,n):Lt(r,()=>o(a,n));return la(l).pipe(ui())}));return K(t).pipe(Qa())}function u0(n,a){let e=a[a.length-1],i=a.slice(0,a.length-1).reverse().map(r=>Qy(r)).filter(r=>r!==null).map(r=>sn(()=>{let o=r.guards.map(l=>{let c=r.node._environmentInjector,h=Xa(l,c),f=n0(h)?h.canActivateChild(e,n):Lt(c,()=>h(e,n));return la(f).pipe(ui())});return K(o).pipe(Qa())}));return K(i).pipe(Qa())}function h0(n,a,e,t){let i=a&&a.routeConfig?a.routeConfig.canDeactivate:null;if(!i||i.length===0)return K(!0);let r=i.map(o=>{let l=a._environmentInjector,c=Xa(o,l),h=i0(c)?c.canDeactivate(n,a,e,t):Lt(l,()=>c(n,a,e,t));return la(h).pipe(ui())});return K(r).pipe(Qa())}function p0(n,a,e,t,i){let r=a.canLoad;if(r===void 0||r.length===0)return K(!0);let o=r.map(l=>{let c=Xa(l,n),h=e0(c)?c.canLoad(a,e):Lt(n,()=>c(a,e)),f=la(h);return i?f.pipe(Kp(i)):f});return K(o).pipe(Qa(),Qp(t))}function Qp(n){return $u(vt(a=>{if(typeof a!="boolean")throw nl(n,a)}),ae(a=>a===!0))}function f0(n,a,e,t,i,r){let o=a.canMatch;if(!o||o.length===0)return K(!0);let l=o.map(c=>{let h=Xa(c,n),f=a0(h)?h.canMatch(a,e,i):Lt(n,()=>h(a,e,i));return la(f).pipe(Kp(r))});return K(l).pipe(Qa(),Qp(t))}var ei=class n extends Error{segmentGroup;constructor(a){super(),this.segmentGroup=a||null,Object.setPrototypeOf(this,n.prototype)}},oo=class n extends Error{urlTree;constructor(a){super(),this.urlTree=a,Object.setPrototypeOf(this,n.prototype)}};function g0(n){throw new re(4e3,!1)}function _0(n){throw Gp(!1,Ot.GuardRejected)}var jd=class{urlSerializer;urlTree;constructor(a,e){this.urlSerializer=a,this.urlTree=e}lineralizeSegments(a,e){return We(this,null,function*(){let t=[],i=e.root;for(;;){if(t=t.concat(i.segments),i.numberOfChildren===0)return t;if(i.numberOfChildren>1||!i.children[me])throw g0(`${a.redirectTo}`);i=i.children[me]}})}applyRedirectCommands(a,e,t,i,r){return We(this,null,function*(){let o=yield b0(e,i,r);if(o instanceof Zt)throw new oo(o);let l=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),a,t);if(o[0]==="/")throw new oo(l);return l})}applyRedirectCreateUrlTree(a,e,t,i){let r=this.createSegmentGroup(a,e.root,t,i);return new Zt(r,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(a,e){let t={};return Object.entries(a).forEach(([i,r])=>{if(typeof r=="string"&&r[0]===":"){let l=r.substring(1);t[i]=e[l]}else t[i]=r}),t}createSegmentGroup(a,e,t,i){let r=this.createSegments(a,e.segments,t,i),o={};return Object.entries(e.children).forEach(([l,c])=>{o[l]=this.createSegmentGroup(a,c,t,i)}),new Re(r,o)}createSegments(a,e,t,i){return e.map(r=>r.path[0]===":"?this.findPosParam(a,r,i):this.findOrReturn(r,t))}findPosParam(a,e,t){let i=t[e.path.substring(1)];if(!i)throw new re(4001,!1);return i}findOrReturn(a,e){let t=0;for(let i of e){if(i.path===a.path)return e.splice(t),i;t++}return a}};function b0(n,a,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return js(la(Lt(e,()=>t(a))))}function v0(n,a){return n.providers&&!n._injector&&(n._injector=is(n.providers,a,`Route: ${n.path}`)),n._injector??a}function xn(n){return n.outlet||me}function y0(n,a){let e=n.filter(t=>xn(t)===a);return e.push(...n.filter(t=>xn(t)!==a)),e}var Hd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Xp(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function w0(n,a,e,t,i,r,o){let l=Zp(n,a,e);if(!l.matched)return K(l);let c=Xp(r(l));return t=v0(a,t),f0(t,a,e,i,c,o).pipe(ae(h=>h===!0?l:C({},Hd)))}function Zp(n,a,e){if(a.path==="")return a.pathMatch==="full"&&(n.hasChildren()||e.length>0)?C({},Hd):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(a.matcher||Cp)(e,n,a);if(!i)return C({},Hd);let r={};Object.entries(i.posParams??{}).forEach(([l,c])=>{r[l]=c.path});let o=i.consumed.length>0?C(C({},r),i.consumed[i.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:o,positionalParamSegments:i.posParams??{}}}function yp(n,a,e,t,i){return e.length>0&&D0(n,e,t,i)?{segmentGroup:new Re(a,x0(t,new Re(e,n.children))),slicedSegments:[]}:e.length===0&&k0(n,e,t)?{segmentGroup:new Re(n.segments,C0(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new Re(n.segments,n.children),slicedSegments:e}}function C0(n,a,e,t){let i={};for(let r of e)if(rl(n,a,r)&&!t[xn(r)]){let o=new Re([],{});i[xn(r)]=o}return C(C({},t),i)}function x0(n,a){let e={};e[me]=a;for(let t of n)if(t.path===""&&xn(t)!==me){let i=new Re([],{});e[xn(t)]=i}return e}function D0(n,a,e,t){return e.some(i=>!rl(n,a,i)||!(xn(i)!==me)?!1:!(t!==void 0&&xn(i)===t))}function k0(n,a,e){return e.some(t=>rl(n,a,t))}function rl(n,a,e){return(n.hasChildren()||a.length>0)&&e.pathMatch==="full"?!1:e.path===""}function S0(n,a,e){return a.length===0&&!n.children[e]}var Ud=class{};function M0(n,a,e,t,i,r,o="emptyOnly",l){return We(this,null,function*(){return new $d(n,a,e,t,i,o,r,l).recognize()})}var E0=31,$d=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(a,e,t,i,r,o,l,c){this.injector=a,this.configLoader=e,this.rootComponentType=t,this.config=i,this.urlTree=r,this.paramsInheritanceStrategy=o,this.urlSerializer=l,this.abortSignal=c,this.applyRedirects=new jd(this.urlSerializer,this.urlTree)}noMatchError(a){return new re(4002,`'${a.segmentGroup}'`)}recognize(){return We(this,null,function*(){let a=yp(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=yield this.match(a),i=new Xt(t,e),r=new ao("",i),o=Fp(t,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(o),{state:r,tree:o}})}match(a){return We(this,null,function*(){let e=new Ya([],Object.freeze({}),Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),me,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,a,me,e),rootSnapshot:e}}catch(t){if(t instanceof oo)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof ei?this.noMatchError(t):t}})}processSegmentGroup(a,e,t,i,r){return We(this,null,function*(){if(t.segments.length===0&&t.hasChildren())return this.processChildren(a,e,t,r);let o=yield this.processSegment(a,e,t,t.segments,i,!0,r);return o instanceof Xt?[o]:[]})}processChildren(a,e,t,i){return We(this,null,function*(){let r=[];for(let c of Object.keys(t.children))c==="primary"?r.unshift(c):r.push(c);let o=[];for(let c of r){let h=t.children[c],f=y0(e,c),D=yield this.processSegmentGroup(a,f,h,c,i);o.push(...D)}let l=Jp(o);return I0(l),l})}processSegment(a,e,t,i,r,o,l){return We(this,null,function*(){for(let c of e)try{return yield this.processSegmentAgainstRoute(c._injector??a,e,c,t,i,r,o,l)}catch(h){if(h instanceof ei||qp(h))continue;throw h}if(S0(t,i,r))return new Ud;throw new ei(t)})}processSegmentAgainstRoute(a,e,t,i,r,o,l,c){return We(this,null,function*(){if(xn(t)!==o&&(o===me||!rl(i,r,t)))throw new ei(i);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(a,i,t,r,o,c);if(this.allowRedirects&&l)return this.expandSegmentAgainstRouteUsingRedirect(a,i,e,t,r,o,c);throw new ei(i)})}expandSegmentAgainstRouteUsingRedirect(a,e,t,i,r,o,l){return We(this,null,function*(){let{matched:c,parameters:h,consumedSegments:f,positionalParamSegments:D,remainingSegments:$}=Zp(e,i,r);if(!c)throw new ei(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>E0&&(this.allowRedirects=!1));let ie=this.createSnapshot(a,i,r,h,l);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let fe=yield this.applyRedirects.applyRedirectCommands(f,i.redirectTo,D,Xp(ie),a),we=yield this.applyRedirects.lineralizeSegments(i,fe);return this.processSegment(a,t,e,we.concat($),o,!1,l)})}createSnapshot(a,e,t,i,r){let o=new Ya(t,i,Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,A0(e),xn(e),e.component??e._loadedComponent??null,e,R0(e),a),l=Gd(o,r,this.paramsInheritanceStrategy);return o.params=Object.freeze(l.params),o.data=Object.freeze(l.data),o}matchSegmentAgainstRoute(a,e,t,i,r,o){return We(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let l=zt=>this.createSnapshot(a,t,zt.consumedSegments,zt.parameters,o),c=yield js(w0(e,t,i,a,this.urlSerializer,l,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new ei(e);a=t._injector??a;let{routes:h}=yield this.getChildConfig(a,t,i),f=t._loadedInjector??a,{parameters:D,consumedSegments:$,remainingSegments:ie}=c,fe=this.createSnapshot(a,t,$,D,o),{segmentGroup:we,slicedSegments:te}=yp(e,$,ie,h,r);if(te.length===0&&we.hasChildren()){let zt=yield this.processChildren(f,h,we,fe);return new Xt(fe,zt)}if(h.length===0&&te.length===0)return new Xt(fe,[]);let ce=xn(t)===r,Ye=yield this.processSegment(f,h,we,te,ce?me:r,!0,fe);return new Xt(fe,Ye instanceof Xt?[Ye]:[])})}getChildConfig(a,e,t){return We(this,null,function*(){if(e.children)return{routes:e.children,injector:a};if(e.loadChildren){if(e._loadedRoutes!==void 0){let r=e._loadedNgModuleFactory;return r&&!e._loadedInjector&&(e._loadedInjector=r.create(a).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield js(p0(a,e,t,this.urlSerializer,this.abortSignal))){let r=yield this.configLoader.loadChildren(a,e);return e._loadedRoutes=r.routes,e._loadedInjector=r.injector,e._loadedNgModuleFactory=r.factory,r}throw _0(e)}return{routes:[],injector:a}})}};function I0(n){n.sort((a,e)=>a.value.outlet===me?-1:e.value.outlet===me?1:a.value.outlet.localeCompare(e.value.outlet))}function T0(n){let a=n.value.routeConfig;return a&&a.path===""}function Jp(n){let a=[],e=new Set;for(let t of n){if(!T0(t)){a.push(t);continue}let i=a.find(r=>t.value.routeConfig===r.value.routeConfig);i!==void 0?(i.children.push(...t.children),e.add(i)):a.push(t)}for(let t of e){let i=Jp(t.children);a.push(new Xt(t.value,i))}return a.filter(t=>!e.has(t))}function A0(n){return n.data||{}}function R0(n){return n.resolve||{}}function O0(n,a,e,t,i,r,o){return Kt(l=>We(null,null,function*(){let{state:c,tree:h}=yield M0(n,a,e,t,l.extractedUrl,i,r,o);return Ce(C({},l),{targetSnapshot:c,urlAfterRedirects:h})}))}function F0(n){return Kt(a=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=a;if(!t.length)return K(a);let i=new Set(t.map(l=>l.route)),r=new Set;for(let l of i)if(!r.has(l))for(let c of ef(l))r.add(c);let o=0;return bt(r).pipe(Ui(l=>i.has(l)?P0(l,e,n):(l.data=Gd(l,l.parent,n).resolve,K(void 0))),vt(()=>o++),jc(1),Kt(l=>o===r.size?K(a):It))})}function ef(n){let a=n.children.map(e=>ef(e)).flat();return[n,...a]}function P0(n,a,e){let t=n.routeConfig,i=n._resolve;return t?.title!==void 0&&!Hp(t)&&(i[so]=t.title),sn(()=>(n.data=Gd(n,n.parent,e).resolve,N0(i,n,a).pipe(ae(r=>(n._resolvedData=r,n.data=C(C({},n.data),r),null)))))}function N0(n,a,e){let t=Ad(n);if(t.length===0)return K({});let i={};return bt(t).pipe(Kt(r=>L0(n[r],a,e).pipe(ui(),vt(o=>{if(o instanceof Ka)throw nl(new ti,o);i[r]=o}))),jc(1),ae(()=>i),vn(r=>qp(r)?It:Gn(r)))}function L0(n,a,e){let t=a._environmentInjector,i=Xa(n,t),r=i.resolve?i.resolve(a,e):Lt(t,()=>i(a,e));return la(r)}function wp(n){return ut(a=>{let e=n(a);return e?bt(e).pipe(ae(()=>a)):K(a)})}var Qd=(()=>{class n{buildTitle(e){let t,i=e.root;for(;i!==void 0;)t=this.getResolvedTitleForRoute(i)??t,i=i.children.find(r=>r.outlet===me);return t}getResolvedTitleForRoute(e){return e.data[so]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:()=>s(tf),providedIn:"root"})}return n})(),tf=(()=>{class n extends Qd{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(Z(hp))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ni=new g("",{factory:()=>({})}),da=new g(""),ol=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=s(_h);loadComponent(e,t){return We(this,null,function*(){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=We(this,null,function*(){try{let r=yield Dp(Lt(e,()=>t.loadComponent())),o=yield rf(af(r));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o,o}finally{this.componentLoaders.delete(t)}});return this.componentLoaders.set(t,i),i})}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let i=We(this,null,function*(){try{let r=yield nf(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=r.routes,t._loadedInjector=r.injector,t._loadedNgModuleFactory=r.factory,r}finally{this.childrenLoaders.delete(t)}});return this.childrenLoaders.set(t,i),i}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nf(n,a,e,t){return We(this,null,function*(){let i=yield Dp(Lt(e,()=>n.loadChildren())),r=yield rf(af(i)),o;r instanceof uh||Array.isArray(r)?o=r:o=yield a.compileModuleAsync(r),t&&t(n);let l,c,h=!1,f;return Array.isArray(o)?(c=o,h=!0):(l=o.create(e).injector,f=o,c=l.get(da,[],{optional:!0,self:!0}).flat()),{routes:c.map(Kd),injector:l,factory:f}})}function B0(n){return n&&typeof n=="object"&&"default"in n}function af(n){return B0(n)?n.default:n}function rf(n){return We(this,null,function*(){return n})}var sl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:()=>s(V0),providedIn:"root"})}return n})(),V0=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Xd=new g(""),Zd=new g("");function of(n,a,e){let t=n.get(Zd),i=n.get(q);if(!i.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(h=>setTimeout(h));let r,o=new Promise(h=>{r=h}),l=i.startViewTransition(()=>(r(),z0(n)));l.updateCallbackDone.catch(h=>{}),l.ready.catch(h=>{}),l.finished.catch(h=>{});let{onViewTransitionCreated:c}=t;return c&&Lt(n,()=>c({transition:l,from:a,to:e})),o}function z0(n){return new Promise(a=>{Te({read:()=>setTimeout(a)},{injector:n})})}var j0=()=>{},Jd=new g(""),ll=(()=>{class n{currentNavigation=z(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=z(null);events=new M;transitionAbortWithErrorSubject=new M;configLoader=s(ol);environmentInjector=s(_t);destroyRef=s(qi);urlSerializer=s(_i);rootContexts=s(ca);location=s(Rn);inputBindingEnabled=s(co,{optional:!0})!==null;titleStrategy=s(Qd);options=s(ni,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=s(sl);createViewTransition=s(Xd,{optional:!0});navigationErrorHandler=s(Jd,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>K(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Ys(i)),t=i=>this.events.next(new Ks(i));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Ae(()=>{this.transitions?.next(Ce(C({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Et(null),this.transitions.pipe(le(t=>t!==null),ut(t=>{let i=!1,r=new AbortController,o=()=>!i&&this.currentTransition?.id===t.id;return K(t).pipe(ut(l=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Ot.SupersededByNewNavigation),It;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:c?Ce(C({},c),{previousNavigation:null}):null,abort:()=>r.abort(),routesRecognizeHandler:l.routesRecognizeHandler,beforeActivateHandler:l.beforeActivateHandler});let h=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!h&&f!=="reload")return this.events.next(new Pn(l.id,this.urlSerializer.serialize(l.rawUrl),"",$a.IgnoredSameUrlNavigation)),l.resolve(!1),It;if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return K(l).pipe(ut(D=>(this.events.next(new Fn(D.id,this.urlSerializer.serialize(D.extractedUrl),D.source,D.restoredState)),D.id!==this.navigationId?It:Promise.resolve(D))),O0(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,r.signal),vt(D=>{t.targetSnapshot=D.targetSnapshot,t.urlAfterRedirects=D.urlAfterRedirects,this.currentNavigation.update($=>($.finalUrl=D.urlAfterRedirects,$)),this.events.next(new no)}),ut(D=>bt(t.routesRecognizeHandler.deferredHandle??K(void 0)).pipe(ae(()=>D))),vt(()=>{let D=new to(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(D)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:D,extractedUrl:$,source:ie,restoredState:fe,extras:we}=l,te=new Fn(D,this.urlSerializer.serialize($),ie,fe);this.events.next(te);let ce=zp(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=Ce(C({},l),{targetSnapshot:ce,urlAfterRedirects:$,extras:Ce(C({},we),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Ye=>(Ye.finalUrl=$,Ye)),K(t)}else return this.events.next(new Pn(l.id,this.urlSerializer.serialize(l.extractedUrl),"",$a.IgnoredByUrlHandlingStrategy)),l.resolve(!1),It}),ae(l=>{let c=new $s(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);return this.events.next(c),this.currentTransition=t=Ce(C({},l),{guards:Ky(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),t}),o0(l=>this.events.next(l)),ut(l=>{if(t.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw nl(this.urlSerializer,l.guardsResult);let c=new Gs(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);if(this.events.next(c),!o())return It;if(!l.guardsResult)return this.cancelNavigationTransition(l,"",Ot.GuardRejected),It;if(l.guards.canActivateChecks.length===0)return K(l);let h=new Ws(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);if(this.events.next(h),!o())return It;let f=!1;return K(l).pipe(F0(this.paramsInheritanceStrategy),vt({next:()=>{f=!0;let D=new qs(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(D)},complete:()=>{f||this.cancelNavigationTransition(l,"",Ot.NoDataFromResolver)}}))}),wp(l=>{let c=f=>{let D=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let $=f._environmentInjector;D.push(this.configLoader.loadComponent($,f.routeConfig).then(ie=>{f.component=ie}))}for(let $ of f.children)D.push(...c($));return D},h=c(l.targetSnapshot.root);return h.length===0?K(l):bt(Promise.all(h).then(()=>l))}),wp(()=>this.afterPreactivation()),ut(()=>{let{currentSnapshot:l,targetSnapshot:c}=t,h=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return h?bt(h).pipe(ae(()=>t)):K(t)}),ze(1),ut(l=>{let c=Gy(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);this.currentTransition=t=l=Ce(C({},l),{targetRouterState:c}),this.currentNavigation.update(f=>(f.targetRouterState=c,f)),this.events.next(new Wa);let h=t.beforeActivateHandler.deferredHandle;return h?bt(h.then(()=>l)):K(l)}),vt(l=>{new zd(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),o()&&(i=!0,this.currentNavigation.update(c=>(c.abort=j0,c)),this.lastSuccessfulNavigation.set(Ae(this.currentNavigation)),this.events.next(new Ht(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0))}),ne(Yp(r.signal).pipe(le(()=>!i&&!t.targetRouterState),vt(()=>{this.cancelNavigationTransition(t,r.signal.reason+"",Ot.Aborted)}))),vt({complete:()=>{i=!0}}),ne(this.transitionAbortWithErrorSubject.pipe(vt(l=>{throw l}))),$i(()=>{r.abort(),i||this.cancelNavigationTransition(t,"",Ot.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),vn(l=>{if(i=!0,this.destroyed)return t.resolve(!1),It;if(Wp(l))this.events.next(new mn(t.id,this.urlSerializer.serialize(t.extractedUrl),l.message,l.cancellationCode)),Yy(l)?this.events.next(new qa(l.url,l.navigationBehaviorOptions)):t.resolve(!1);else{let c=new sa(t.id,this.urlSerializer.serialize(t.extractedUrl),l,t.targetSnapshot??void 0);try{let h=Lt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(h instanceof Ka){let{message:f,cancellationCode:D}=nl(this.urlSerializer,h);this.events.next(new mn(t.id,this.urlSerializer.serialize(t.extractedUrl),f,D)),this.events.next(new qa(h.redirectTo,h.navigationBehaviorOptions))}else throw this.events.next(c),l}catch(h){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(h)}}return It}))}))}cancelNavigationTransition(e,t,i){let r=new mn(e.id,this.urlSerializer.serialize(e.extractedUrl),t,i);this.events.next(r),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Ae(this.currentNavigation),i=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==i?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function H0(n){return n!==Ha}var sf=new g("");var lf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:()=>s(U0),providedIn:"root"})}return n})(),al=class{shouldDetach(a){return!1}store(a,e){}shouldAttach(a){return!1}retrieve(a){return null}shouldReuseRoute(a,e){return a.routeConfig===e.routeConfig}shouldDestroyInjector(a){return!0}},U0=(()=>{class n extends al{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),cl=(()=>{class n{urlSerializer=s(_i);options=s(ni,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=s(Rn);urlHandlingStrategy=s(sl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Zt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:i}){let r=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,o=i??r;return o instanceof Zt?this.urlSerializer.serialize(o):o}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:i}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,i),this.routerState=e):this.rawUrlTree=i}routerState=zp(null,s(_t));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:()=>s($0),providedIn:"root"})}return n})(),$0=(()=>{class n extends cl{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof Fn?this.updateStateMemento():e instanceof Pn?this.commitTransition(t):e instanceof to?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Wa?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof mn&&!Vp(e)?this.restoreHistory(t):e instanceof sa?this.restoreHistory(t,!0):e instanceof Ht&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:i,id:r}=t,{replaceUrl:o,state:l}=i;if(this.location.isCurrentPathEqualTo(e)||o){let c=this.browserPageId,h=C(C({},l),this.generateNgRouterState(r,c,t));this.location.replaceState(e,"",h)}else{let c=C(C({},l),this.generateNgRouterState(r,this.browserPageId+1,t));this.location.go(e,"",c)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,r=this.currentPageId-i;r!==0?this.location.historyGo(r):this.getCurrentUrlTree()===e.finalUrl&&r===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,i){return this.canceledNavigationResolution==="computed"?C({navigationId:e,\u0275routerPageId:t},this.routerUrlState(i)):C({navigationId:e},this.routerUrlState(i))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function dl(n,a){n.events.pipe(le(e=>e instanceof Ht||e instanceof mn||e instanceof sa||e instanceof Pn),ae(e=>e instanceof Ht||e instanceof Pn?0:(e instanceof mn?e.code===Ot.Redirect||e.code===Ot.SupersededByNewNavigation:!1)?2:1),le(e=>e!==2),ze(1)).subscribe(()=>{a()})}var st=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=s(Yc);stateManager=s(cl);options=s(ni,{optional:!0})||{};pendingTasks=s(Zu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=s(ll);urlSerializer=s(_i);location=s(Rn);urlHandlingStrategy=s(sl);injector=s(_t);_events=new M;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=s(lf);injectorCleanup=s(sf,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=s(da,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!s(co,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Pe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let i=this.navigationTransitions.currentTransition,r=Ae(this.navigationTransitions.currentNavigation);if(i!==null&&r!==null){if(this.stateManager.handleRouterEvent(t,r),t instanceof mn&&t.code!==Ot.Redirect&&t.code!==Ot.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof Ht)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof qa){let o=t.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(t.url,i.currentRawUrl),c=C({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||H0(i.source)},o);this.scheduleNavigation(l,Ha,null,c,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Uy(t)&&this._events.next(t)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ha,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,i,r)=>{this.navigateToSyncWithBrowser(e,i,t,r)})}navigateToSyncWithBrowser(e,t,i,r){let o=i?.navigationId?i:null,l=i?.\u0275routerUrl??e;if(i?.\u0275routerUrl&&(r=Ce(C({},r),{browserUrl:e})),i){let h=C({},i);delete h.navigationId,delete h.\u0275routerPageId,delete h.\u0275routerUrl,Object.keys(h).length!==0&&(r.state=h)}let c=this.parseUrl(l);this.scheduleNavigation(c,t,o,r).catch(h=>{this.disposed||this.injector.get(Tr)(h)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ae(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Kd),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:i,queryParams:r,fragment:o,queryParamsHandling:l,preserveFragment:c}=t,h=c?this.currentUrlTree.fragment:o,f=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":f=C(C({},this.currentUrlTree.queryParams),r);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=r||null}f!==null&&(f=this.removeEmptyProps(f));let D;try{let $=i?i.snapshot:this.routerState.snapshot.root;D=Pp($)}catch($){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),D=this.currentUrlTree.root}return Np(D,e,f,h??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let i=gi(e)?e:this.parseUrl(e),r=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(r,Ha,null,t)}navigate(e,t={skipLocationChange:!1}){return G0(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(t){return this.console.warn(Gi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let i;if(t===!0?i=C({},Sp):t===!1?i=C({},Rd):i=C(C({},Rd),t),gi(e))return fp(this.currentUrlTree,e,i);let r=this.parseUrl(e);return fp(this.currentUrlTree,r,i)}removeEmptyProps(e){return Object.entries(e).reduce((t,[i,r])=>(r!=null&&(t[i]=r),t),{})}scheduleNavigation(e,t,i,r,o){if(this.disposed)return Promise.resolve(!1);let l,c,h;o?(l=o.resolve,c=o.reject,h=o.promise):h=new Promise((D,$)=>{l=D,c=$});let f=this.pendingTasks.add();return dl(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:r,resolve:l,reject:c,promise:h,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),h.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function G0(n){for(let a=0;a<n.length;a++)if(n[a]==null)throw new re(4008,!1)}var q0=(()=>{class n{router=s(st);stateManager=s(cl);fragment=z("");queryParams=z({});path=z("");serializer=s(_i);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Ht&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new Zt(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bi=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=s(new rt("href"),{optional:!0});reactiveHref=bh(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Ae(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Ae(this._target)}_target=z(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Ae(this._queryParams)}_queryParams=z(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Ae(this._fragment)}_fragment=z(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Ae(this._queryParamsHandling)}_queryParamsHandling=z(void 0);set state(e){this._state.set(e)}get state(){return Ae(this._state)}_state=z(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Ae(this._info)}_info=z(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Ae(this._relativeTo)}_relativeTo=z(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Ae(this._preserveFragment)}_preserveFragment=z(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Ae(this._skipLocationChange)}_skipLocationChange=z(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Ae(this._replaceUrl)}_replaceUrl=z(!1);isAnchorElement;onChanges=new M;applicationErrorHandler=s(Tr);options=s(ni,{optional:!0});reactiveRouterState=s(q0);constructor(e,t,i,r,o,l){this.router=e,this.route=t,this.tabIndexAttribute=i,this.renderer=r,this.el=o,this.locationStrategy=l;let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=z(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(gi(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,i,r,o){let l=this._urlTree();if(l===null||this.isAnchorElement&&(e!==0||t||i||r||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(l,c)?.catch(h=>{this.applicationErrorHandler(h)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let i=this.renderer,r=this.el.nativeElement;t!==null?i.setAttribute(r,e,t):i.removeAttribute(r,e)}_urlTree=Ct(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i==="preserve"||i==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:gi(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return Ae(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(B(st),B(Nn),Gc("tabindex"),B(ye),B(F),B(wn))};static \u0275dir=v({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,i){t&1&&S("click",function(o){return i.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),t&2&&L("href",i.reactiveHref(),dh)("target",i._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",N],skipLocationChange:[2,"skipLocationChange","skipLocationChange",N],replaceUrl:[2,"replaceUrl","replaceUrl",N],routerLink:"routerLink"},features:[de]})}return n})();var uo=class{};var cf=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,i,r){this.router=e,this.injector=t,this.preloadingStrategy=i,this.loader=r}setUpPreloading(){this.subscription=this.router.events.pipe(le(e=>e instanceof Ht),Ui(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let i=[];for(let r of t){r.providers&&!r._injector&&(r._injector=is(r.providers,e,""));let o=r._injector??e;r._loadedNgModuleFactory&&!r._loadedInjector&&(r._loadedInjector=r._loadedNgModuleFactory.create(o).injector);let l=r._loadedInjector??o;(r.loadChildren&&!r._loadedRoutes&&r.canLoad===void 0||r.loadComponent&&!r._loadedComponent)&&i.push(this.preloadConfig(o,r)),(r.children||r._loadedRoutes)&&i.push(this.processRoutes(l,r.children??r._loadedRoutes))}return bt(i).pipe(Bc())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return K(null);let i;t.loadChildren&&t.canLoad===void 0?i=bt(this.loader.loadChildren(e,t)):i=K(null);let r=i.pipe(Kt(o=>o===null?K(void 0):(t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,this.processRoutes(o.injector??e,o.routes))));if(t.loadComponent&&!t._loadedComponent){let o=this.loader.loadComponent(e,t);return bt([r,o]).pipe(Bc())}else return r})}static \u0275fac=function(t){return new(t||n)(Z(st),Z(_t),Z(uo),Z(ol))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),df=new g(""),Y0=(()=>{class n{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ha;restoredId=0;store={};isHydrating=s(nh,{optional:!0})??!1;urlSerializer=s(_i);zone=s(W);viewportScroller=s(md);transitions=s(ll);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&s(An).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Fn?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Ht?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Pn&&e.code===$a.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Ga)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){if(this.isHydrating)return;let i=Ae(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>We(this,null,function*(){yield new Promise(r=>{setTimeout(r),typeof requestAnimationFrame<"u"&&requestAnimationFrame(r)}),this.zone.run(()=>{this.transitions.events.next(new Ga(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,i))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){Ji()};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})();function tm(n,...a){return Wi([{provide:da,multi:!0,useValue:n},[],{provide:Nn,useFactory:mf},{provide:Qc,multi:!0,useFactory:uf},a.map(e=>e.\u0275providers)])}function mf(){return s(st).routerState.root}function Za(n,a){return{\u0275kind:n,\u0275providers:a}}function uf(){let n=s(J);return a=>{let e=n.get(An);if(a!==e.components[0])return;let t=n.get(st),i=n.get(hf);n.get(nm)===1&&t.initialNavigation(),n.get(gf,null,{optional:!0})?.setUpPreloading(),n.get(df,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var hf=new g("",{factory:()=>new M}),nm=new g("",{factory:()=>1});function pf(){let n=[{provide:Wc,useValue:!0},{provide:nm,useValue:0},Kc(()=>{let a=s(J);return a.get(nd,Promise.resolve()).then(()=>new Promise(t=>{let i=a.get(st),r=a.get(hf);dl(i,()=>{t(!0)}),a.get(ll).afterPreactivation=()=>(t(!0),r.closed?K(void 0):r),i.initialNavigation()}))})];return Za(2,n)}function ff(){let n=[Kc(()=>{s(st).setUpLocationChangeListener()}),{provide:nm,useValue:2}];return Za(3,n)}var gf=new g("");function _f(n){return Za(0,[{provide:gf,useExisting:cf},{provide:uo,useExisting:n}])}function im(n){return Za(5,[{provide:ni,useValue:n}])}function bf(){return Za(8,[qd,{provide:co,useExisting:qd}])}function vf(n){Ar("NgRouterViewTransitions");let a=[{provide:Xd,useValue:of},{provide:Zd,useValue:C({skipNextTransition:!!n?.skipInitialTransition},n)}];return Za(9,a)}var yf=[Rn,{provide:_i,useClass:ti},st,ca,{provide:Nn,useFactory:mf},ol,[]],ml=(()=>{class n{constructor(){}static forRoot(e,t){return{ngModule:n,providers:[yf,[],{provide:da,multi:!0,useValue:e},[],t?.errorHandler?{provide:Jd,useValue:t.errorHandler}:[],{provide:ni,useValue:t||{}},t?.useHash?Q0():X0(),K0(),t?.preloadingStrategy?_f(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?Z0(t):[],t?.bindToComponentInputs?bf().\u0275providers:[],t?.enableViewTransitions?vf().\u0275providers:[],J0()]}}static forChild(e){return{ngModule:n,providers:[{provide:da,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({})}return n})();function K0(){return{provide:df,useFactory:()=>{let n=s(md),a=s(ni);return a.scrollOffset&&n.setOffset(a.scrollOffset),new Y0(a)}}}function Q0(){return{provide:wn,useClass:od}}function X0(){return{provide:wn,useClass:us}}function Z0(n){return[n.initialNavigation==="disabled"?ff().\u0275providers:[],n.initialNavigation==="enabledBlocking"?pf().\u0275providers:[]]}var em=new g("");function J0(){return[{provide:em,useFactory:uf},{provide:Qc,multi:!0,useExisting:em}]}var wf=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=_({type:n,selectors:[["page-not-found"]],standalone:!1,decls:2,vars:0,template:function(t,i){t&1&&(d(0,"h1"),p(1,"Page not found"),m())},encapsulation:2})}}return n})();var Ef=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(B(ye),B(F))};static \u0275dir=v({type:n})}return n})(),If=(()=>{class n extends Ef{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,features:[Y]})}return n})(),wi=new g("");var ew={provide:wi,useExisting:yt(()=>Bn),multi:!0};function tw(){let n=cn()?cn().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var nw=new g(""),Bn=(()=>{class n extends Ef{_compositionMode;_composing=!1;constructor(e,t,i){super(e,t),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!tw())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(B(ye),B(F),B(nw,8))};static \u0275dir=v({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,i){t&1&&S("input",function(o){return i._handleInput(o.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(o){return i._compositionEnd(o.target.value)})},standalone:!1,features:[X([ew]),Y]})}return n})();function sm(n){return n==null||lm(n)===0}function lm(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Ci=new g(""),xl=new g(""),iw=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Be=class{static min(a){return aw(a)}static max(a){return rw(a)}static required(a){return ow(a)}static requiredTrue(a){return sw(a)}static email(a){return lw(a)}static minLength(a){return cw(a)}static maxLength(a){return dw(a)}static pattern(a){return mw(a)}static nullValidator(a){return Tf()}static compose(a){return Nf(a)}static composeAsync(a){return Lf(a)}};function aw(n){return a=>{if(a.value==null||n==null)return null;let e=parseFloat(a.value);return!isNaN(e)&&e<n?{min:{min:n,actual:a.value}}:null}}function rw(n){return a=>{if(a.value==null||n==null)return null;let e=parseFloat(a.value);return!isNaN(e)&&e>n?{max:{max:n,actual:a.value}}:null}}function ow(n){return sm(n.value)?{required:!0}:null}function sw(n){return n.value===!0?null:{required:!0}}function lw(n){return sm(n.value)||iw.test(n.value)?null:{email:!0}}function cw(n){return a=>{let e=a.value?.length??lm(a.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function dw(n){return a=>{let e=a.value?.length??lm(a.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function mw(n){if(!n)return Tf;let a,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),a=new RegExp(e)):(e=n.toString(),a=n),t=>{if(sm(t.value))return null;let i=t.value;return a.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function Tf(n){return null}function Af(n){return n!=null}function Rf(n){return Rr(n)?bt(n):n}function Of(n){let a={};return n.forEach(e=>{a=e!=null?C(C({},a),e):a}),Object.keys(a).length===0?null:a}function Ff(n,a){return a.map(e=>e(n))}function uw(n){return!n.validate}function Pf(n){return n.map(a=>uw(a)?a:e=>a.validate(e))}function Nf(n){if(!n)return null;let a=n.filter(Af);return a.length==0?null:function(e){return Of(Ff(e,a))}}function cm(n){return n!=null?Nf(Pf(n)):null}function Lf(n){if(!n)return null;let a=n.filter(Af);return a.length==0?null:function(e){let t=Ff(e,a).map(Rf);return Zo(t).pipe(ae(Of))}}function dm(n){return n!=null?Lf(Pf(n)):null}function Cf(n,a){return n===null?[a]:Array.isArray(n)?[...n,a]:[n,a]}function Bf(n){return n._rawValidators}function Vf(n){return n._rawAsyncValidators}function am(n){return n?Array.isArray(n)?n:[n]:[]}function pl(n,a){return Array.isArray(n)?n.includes(a):n===a}function xf(n,a){let e=am(a);return am(n).forEach(i=>{pl(e,i)||e.push(i)}),e}function Df(n,a){return am(a).filter(e=>!pl(n,e))}var fl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(a){this._rawValidators=a||[],this._composedValidatorFn=cm(this._rawValidators)}_setAsyncValidators(a){this._rawAsyncValidators=a||[],this._composedAsyncValidatorFn=dm(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(a){this._onDestroyCallbacks.push(a)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(a=>a()),this._onDestroyCallbacks=[]}reset(a=void 0){this.control?.reset(a)}hasError(a,e){return this.control?this.control.hasError(a,e):!1}getError(a,e){return this.control?this.control.getError(a,e):null}},Ln=class extends fl{name;get formDirective(){return null}get path(){return null}},Dn=class extends fl{_parent=null;name=null;valueAccessor=null},gl=class{_cd;constructor(a){this._cd=a}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var xi=(()=>{class n extends gl{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(B(Dn,2))};static \u0275dir=v({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,i){t&2&&O("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[Y]})}return n})(),Di=(()=>{class n extends gl{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(B(Ln,10))};static \u0275dir=v({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,i){t&2&&O("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[Y]})}return n})();var ho="VALID",ul="INVALID",Ja="PENDING",po="DISABLED",yi=class{},_l=class extends yi{value;source;constructor(a,e){super(),this.value=a,this.source=e}},go=class extends yi{pristine;source;constructor(a,e){super(),this.pristine=a,this.source=e}},_o=class extends yi{touched;source;constructor(a,e){super(),this.touched=a,this.source=e}},er=class extends yi{status;source;constructor(a,e){super(),this.status=a,this.source=e}},bl=class extends yi{source;constructor(a){super(),this.source=a}},bo=class extends yi{source;constructor(a){super(),this.source=a}};function mm(n){return(Dl(n)?n.validators:n)||null}function hw(n){return Array.isArray(n)?cm(n):n||null}function um(n,a){return(Dl(a)?a.asyncValidators:n)||null}function pw(n){return Array.isArray(n)?dm(n):n||null}function Dl(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function zf(n,a,e){let t=n.controls;if(!(a?Object.keys(t):t).length)throw new re(1e3,"");if(!t[e])throw new re(1001,"")}function jf(n,a,e){n._forEachChild((t,i)=>{if(e[i]===void 0)throw new re(-1002,"")})}var tr=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(a,e){this._assignValidators(a),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(a){this._rawValidators=this._composedValidatorFn=a}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(a){this._rawAsyncValidators=this._composedAsyncValidatorFn=a}get parent(){return this._parent}get status(){return Ae(this.statusReactive)}set status(a){Ae(()=>this.statusReactive.set(a))}_status=Ct(()=>this.statusReactive());statusReactive=z(void 0);get valid(){return this.status===ho}get invalid(){return this.status===ul}get pending(){return this.status===Ja}get disabled(){return this.status===po}get enabled(){return this.status!==po}errors;get pristine(){return Ae(this.pristineReactive)}set pristine(a){Ae(()=>this.pristineReactive.set(a))}_pristine=Ct(()=>this.pristineReactive());pristineReactive=z(!0);get dirty(){return!this.pristine}get touched(){return Ae(this.touchedReactive)}set touched(a){Ae(()=>this.touchedReactive.set(a))}_touched=Ct(()=>this.touchedReactive());touchedReactive=z(!1);get untouched(){return!this.touched}_events=new M;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(a){this._assignValidators(a)}setAsyncValidators(a){this._assignAsyncValidators(a)}addValidators(a){this.setValidators(xf(a,this._rawValidators))}addAsyncValidators(a){this.setAsyncValidators(xf(a,this._rawAsyncValidators))}removeValidators(a){this.setValidators(Df(a,this._rawValidators))}removeAsyncValidators(a){this.setAsyncValidators(Df(a,this._rawAsyncValidators))}hasValidator(a){return pl(this._rawValidators,a)}hasAsyncValidator(a){return pl(this._rawAsyncValidators,a)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(a={}){let e=this.touched===!1;this.touched=!0;let t=a.sourceControl??this;a.onlySelf||this._parent?.markAsTouched(Ce(C({},a),{sourceControl:t})),e&&a.emitEvent!==!1&&this._events.next(new _o(!0,t))}markAllAsDirty(a={}){this.markAsDirty({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(a))}markAllAsTouched(a={}){this.markAsTouched({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(a))}markAsUntouched(a={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=a.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:t})}),a.onlySelf||this._parent?._updateTouched(a,t),e&&a.emitEvent!==!1&&this._events.next(new _o(!1,t))}markAsDirty(a={}){let e=this.pristine===!0;this.pristine=!1;let t=a.sourceControl??this;a.onlySelf||this._parent?.markAsDirty(Ce(C({},a),{sourceControl:t})),e&&a.emitEvent!==!1&&this._events.next(new go(!1,t))}markAsPristine(a={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=a.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:a.emitEvent})}),a.onlySelf||this._parent?._updatePristine(a,t),e&&a.emitEvent!==!1&&this._events.next(new go(!0,t))}markAsPending(a={}){this.status=Ja;let e=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new er(this.status,e)),this.statusChanges.emit(this.status)),a.onlySelf||this._parent?.markAsPending(Ce(C({},a),{sourceControl:e}))}disable(a={}){let e=this._parentMarkedDirty(a.onlySelf);this.status=po,this.errors=null,this._forEachChild(i=>{i.disable(Ce(C({},a),{onlySelf:!0}))}),this._updateValue();let t=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new _l(this.value,t)),this._events.next(new er(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Ce(C({},a),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(a={}){let e=this._parentMarkedDirty(a.onlySelf);this.status=ho,this._forEachChild(t=>{t.enable(Ce(C({},a),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:a.emitEvent}),this._updateAncestors(Ce(C({},a),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(a,e){a.onlySelf||(this._parent?.updateValueAndValidity(a),a.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(a){this._parent=a}getRawValue(){return this.value}updateValueAndValidity(a={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ho||this.status===Ja)&&this._runAsyncValidator(t,a.emitEvent)}let e=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new _l(this.value,e)),this._events.next(new er(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),a.onlySelf||this._parent?.updateValueAndValidity(Ce(C({},a),{sourceControl:e}))}_updateTreeValidity(a={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(a)),this.updateValueAndValidity({onlySelf:!0,emitEvent:a.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?po:ho}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(a,e){if(this.asyncValidator){this.status=Ja,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:a!==!1};let t=Rf(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:a})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let a=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,a}return!1}setErrors(a,e={}){this.errors=a,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(a){let e=a;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,i)=>t&&t._find(i),this)}getError(a,e){let t=e?this.get(e):this;return t?.errors?t.errors[a]:null}hasError(a,e){return!!this.getError(a,e)}get root(){let a=this;for(;a._parent;)a=a._parent;return a}_updateControlsErrors(a,e,t){this.status=this._calculateStatus(),a&&this.statusChanges.emit(this.status),(a||t)&&this._events.next(new er(this.status,e)),this._parent&&this._parent._updateControlsErrors(a,e,t)}_initObservables(){this.valueChanges=new A,this.statusChanges=new A}_calculateStatus(){return this._allControlsDisabled()?po:this.errors?ul:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ja)?Ja:this._anyControlsHaveStatus(ul)?ul:ho}_anyControlsHaveStatus(a){return this._anyControls(e=>e.status===a)}_anyControlsDirty(){return this._anyControls(a=>a.dirty)}_anyControlsTouched(){return this._anyControls(a=>a.touched)}_updatePristine(a,e){let t=!this._anyControlsDirty(),i=this.pristine!==t;this.pristine=t,a.onlySelf||this._parent?._updatePristine(a,e),i&&this._events.next(new go(this.pristine,e))}_updateTouched(a={},e){this.touched=this._anyControlsTouched(),this._events.next(new _o(this.touched,e)),a.onlySelf||this._parent?._updateTouched(a,e)}_onDisabledChange=[];_registerOnCollectionChange(a){this._onCollectionChange=a}_setUpdateStrategy(a){Dl(a)&&a.updateOn!=null&&(this._updateOn=a.updateOn)}_parentMarkedDirty(a){return!a&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(a){return null}_assignValidators(a){this._rawValidators=Array.isArray(a)?a.slice():a,this._composedValidatorFn=hw(this._rawValidators)}_assignAsyncValidators(a){this._rawAsyncValidators=Array.isArray(a)?a.slice():a,this._composedAsyncValidatorFn=pw(this._rawAsyncValidators)}},nr=class extends tr{constructor(a,e,t){super(mm(e),um(t,e)),this.controls=a,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(a,e){return this.controls[a]?this.controls[a]:(this.controls[a]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(a,e,t={}){this.registerControl(a,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(a,e={}){this.controls[a]&&this.controls[a]._registerOnCollectionChange(()=>{}),delete this.controls[a],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(a,e,t={}){this.controls[a]&&this.controls[a]._registerOnCollectionChange(()=>{}),delete this.controls[a],e&&this.registerControl(a,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(a){return this.controls.hasOwnProperty(a)&&this.controls[a].enabled}setValue(a,e={}){jf(this,!0,a),Object.keys(a).forEach(t=>{zf(this,!0,t),this.controls[t].setValue(a[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(a,e={}){a!=null&&(Object.keys(a).forEach(t=>{let i=this.controls[t];i&&i.patchValue(a[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(a={},e={}){this._forEachChild((t,i)=>{t.reset(a?a[i]:null,Ce(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new bo(this))}getRawValue(){return this._reduceChildren({},(a,e,t)=>(a[t]=e.getRawValue(),a))}_syncPendingControls(){let a=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return a&&this.updateValueAndValidity({onlySelf:!0}),a}_forEachChild(a){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&a(t,e)})}_setUpControls(){this._forEachChild(a=>{a.setParent(this),a._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(a){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&a(t))return!0;return!1}_reduceValue(){let a={};return this._reduceChildren(a,(e,t,i)=>((t.enabled||this.disabled)&&(e[i]=t.value),e))}_reduceChildren(a,e){let t=a;return this._forEachChild((i,r)=>{t=e(t,i,r)}),t}_allControlsDisabled(){for(let a of Object.keys(this.controls))if(this.controls[a].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(a){return this.controls.hasOwnProperty(a)?this.controls[a]:null}};var rm=class extends nr{};var kl=new g("",{factory:()=>hm}),hm="always";function fw(n,a){return[...a.path,n]}function vl(n,a,e=hm){pm(n,a),a.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&a.valueAccessor.setDisabledState?.(n.disabled),_w(n,a),vw(n,a),bw(n,a),gw(n,a)}function yl(n,a,e=!0){let t=()=>{};a?.valueAccessor?.registerOnChange(t),a?.valueAccessor?.registerOnTouched(t),Cl(n,a),n&&(a._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function wl(n,a){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(a)})}function gw(n,a){if(a.valueAccessor.setDisabledState){let e=t=>{a.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),a._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function pm(n,a){let e=Bf(n);a.validator!==null?n.setValidators(Cf(e,a.validator)):typeof e=="function"&&n.setValidators([e]);let t=Vf(n);a.asyncValidator!==null?n.setAsyncValidators(Cf(t,a.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let i=()=>n.updateValueAndValidity();wl(a._rawValidators,i),wl(a._rawAsyncValidators,i)}function Cl(n,a){let e=!1;if(n!==null){if(a.validator!==null){let i=Bf(n);if(Array.isArray(i)&&i.length>0){let r=i.filter(o=>o!==a.validator);r.length!==i.length&&(e=!0,n.setValidators(r))}}if(a.asyncValidator!==null){let i=Vf(n);if(Array.isArray(i)&&i.length>0){let r=i.filter(o=>o!==a.asyncValidator);r.length!==i.length&&(e=!0,n.setAsyncValidators(r))}}}let t=()=>{};return wl(a._rawValidators,t),wl(a._rawAsyncValidators,t),e}function _w(n,a){a.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Hf(n,a)})}function bw(n,a){a.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Hf(n,a),n.updateOn!=="submit"&&n.markAsTouched()})}function Hf(n,a){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),a.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function vw(n,a){let e=(t,i)=>{a.valueAccessor.writeValue(t),i&&a.viewToModelUpdate(t)};n.registerOnChange(e),a._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Uf(n,a){n==null,pm(n,a)}function yw(n,a){return Cl(n,a)}function $f(n,a){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(a,e.currentValue)}function ww(n){return Object.getPrototypeOf(n.constructor)===If}function Gf(n,a){n._syncPendingControls(),a.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Wf(n,a){if(!a)return null;Array.isArray(a);let e,t,i;return a.forEach(r=>{r.constructor===Bn?e=r:ww(r)?t=r:i=r}),i||t||e||null}function Cw(n,a){let e=n.indexOf(a);e>-1&&n.splice(e,1)}var xw={provide:Ln,useExisting:yt(()=>vo)},fo=Promise.resolve(),vo=(()=>{class n extends Ln{callSetDisabledState;get submitted(){return Ae(this.submittedReactive)}_submitted=Ct(()=>this.submittedReactive());submittedReactive=z(!1);_directives=new Set;form;ngSubmit=new A;options;constructor(e,t,i){super(),this.callSetDisabledState=i,this.form=new nr({},cm(e),dm(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){fo.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),vl(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){fo.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){fo.then(()=>{let t=this._findContainer(e.path),i=new nr({});Uf(i,e),t.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){fo.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){fo.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Gf(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new bl(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(B(Ci,10),B(xl,10),B(kl,8))};static \u0275dir=v({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,i){t&1&&S("submit",function(o){return i.onSubmit(o)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[X([xw]),Y]})}return n})();function kf(n,a){let e=n.indexOf(a);e>-1&&n.splice(e,1)}function Sf(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var hl=class extends tr{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(a=null,e,t){super(mm(e),um(t,e)),this._applyFormState(a),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Dl(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Sf(a)?this.defaultValue=a.value:this.defaultValue=a)}setValue(a,e={}){this.value=this._pendingValue=a,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(a,e={}){this.setValue(a,e)}reset(a=this.defaultValue,e={}){this._applyFormState(a),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new bo(this))}_updateValue(){}_anyControls(a){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(a){this._onChange.push(a)}_unregisterOnChange(a){kf(this._onChange,a)}registerOnDisabledChange(a){this._onDisabledChange.push(a)}_unregisterOnDisabledChange(a){kf(this._onDisabledChange,a)}_forEachChild(a){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(a){Sf(a)?(this.value=this._pendingValue=a.value,a.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=a}};var Dw=n=>n instanceof hl;var kw={provide:wi,useExisting:yt(()=>fm),multi:!0},fm=(()=>{class n extends If{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,i){t&1&&S("input",function(o){return i.onChange(o.target.value)})("blur",function(){return i.onTouched()})},standalone:!1,features:[X([kw]),Y]})}return n})();var om=class extends tr{constructor(a,e,t){super(mm(e),um(t,e)),this.controls=a,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(a){return this.controls[this._adjustIndex(a)]}push(a,e={}){Array.isArray(a)?a.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(a),this._registerControl(a)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(a,e,t={}){this.controls.splice(a,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(a,e={}){let t=this._adjustIndex(a);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(a,e,t={}){let i=this._adjustIndex(a);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(a,e={}){jf(this,!1,a),a.forEach((t,i)=>{zf(this,!1,i),this.at(i).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(a,e={}){a!=null&&(a.forEach((t,i)=>{this.at(i)&&this.at(i).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(a=[],e={}){this._forEachChild((t,i)=>{t.reset(a[i],Ce(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new bo(this))}getRawValue(){return this.controls.map(a=>a.getRawValue())}clear(a={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:a.emitEvent}))}_adjustIndex(a){return a<0?a+this.length:a}_syncPendingControls(){let a=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return a&&this.updateValueAndValidity({onlySelf:!0}),a}_forEachChild(a){this.controls.forEach((e,t)=>{a(e,t)})}_updateValue(){this.value=this.controls.filter(a=>a.enabled||this.disabled).map(a=>a.value)}_anyControls(a){return this.controls.some(e=>e.enabled&&a(e))}_setUpControls(){this._forEachChild(a=>this._registerControl(a))}_allControlsDisabled(){for(let a of this.controls)if(a.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(a){a.setParent(this),a._registerOnCollectionChange(this._onCollectionChange)}_find(a){return this.at(a)??null}};var Sw=(()=>{class n extends Ln{callSetDisabledState;get submitted(){return Ae(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Ct(()=>this._submittedReactive());_submittedReactive=z(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Cl(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return vl(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){yl(e.control||null,e,!1),Cw(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Gf(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new bl(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,i=this.form.get(e.path);t!==i&&(yl(t||null,e),Dw(i)&&(vl(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Uf(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&yw(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){pm(this.form,this),this._oldForm&&Cl(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(B(Ci,10),B(xl,10),B(kl,8))};static \u0275dir=v({type:n,features:[Y,de]})}return n})();var gm=new g(""),Mw={provide:Dn,useExisting:yt(()=>_m)},_m=(()=>{class n extends Dn{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new A;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,i,r,o){super(),this._ngModelWarningConfig=r,this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(t),this.valueAccessor=Wf(this,i)}ngOnChanges(e){if(this._isControlChanged(e)){let t=e.form.previousValue;t&&yl(t,this,!1),vl(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}$f(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&yl(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(t){return new(t||n)(B(Ci,10),B(xl,10),B(wi,10),B(gm,8),B(kl,8))};static \u0275dir=v({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[X([Mw]),Y,de]})}return n})();var Ew={provide:Dn,useExisting:yt(()=>ii)},ii=(()=>{class n extends Dn{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new A;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,i,r,o){super(),this._ngModelWarningConfig=o,this._parent=e,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=Wf(this,r)}ngOnChanges(e){this._added||this._setUpControl(),$f(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return fw(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||n)(B(Ln,13),B(Ci,10),B(xl,10),B(wi,10),B(gm,8))};static \u0275dir=v({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[X([Ew]),Y,de]})}return n})();var Iw={provide:Ln,useExisting:yt(()=>en)},en=(()=>{class n extends Sw{form=null;ngSubmit=new A;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,i){t&1&&S("submit",function(o){return i.onSubmit(o)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[X([Iw]),Y]})}return n})();var Tw=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({})}return n})();function Mf(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var ki=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let i=this._reduceControls(e),r={};return Mf(t)?r=t:t!==null&&(r.validators=t.validator,r.asyncValidators=t.asyncValidator),new nr(i,r)}record(e,t=null){let i=this._reduceControls(e);return new rm(i,t)}control(e,t,i){let r={};return this.useNonNullable?(Mf(t)?r=t:(r.validators=t,r.asyncValidators=i),new hl(e,Ce(C({},r),{nonNullable:!0}))):new hl(e,t,i)}array(e,t,i){let r=e.map(o=>this._createControl(o));return new om(r,t,i)}_reduceControls(e){let t={};return Object.keys(e).forEach(i=>{t[i]=this._createControl(e[i])}),t}_createControl(e){if(e instanceof hl)return e;if(e instanceof tr)return e;if(Array.isArray(e)){let t=e[0],i=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(t,i,r)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var bm=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:gm,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:kl,useValue:e.callSetDisabledState??hm}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Tw]})}return n})();var yo=(function(n){return n[n.UNAPROOVED=0]="UNAPROOVED",n[n.ACTIVE=1]="ACTIVE",n[n.BLOCKED=2]="BLOCKED",n})(yo||{}),ir=(function(n){return n[n.ADMIN=0]="ADMIN",n[n.STUDENT=1]="STUDENT",n})(ir||{});var vm=new g("JWT_OPTIONS"),Ml=(()=>{class n{constructor(e=null){this.tokenGetter=e&&e.tokenGetter||function(){}}urlBase64Decode(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:{t+="==";break}case 3:{t+="=";break}default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(t)}b64decode(e){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="";if(e=String(e).replace(/=+$/,""),e.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let r=0,o,l,c=0;l=e.charAt(c++);~l&&(o=r%4?o*64+l:l,r++%4)?i+=String.fromCharCode(255&o>>(-2*r&6)):0)l=t.indexOf(l);return i}b64DecodeUnicode(e){return decodeURIComponent(Array.prototype.map.call(this.b64decode(e),t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._decodeToken(t)):this._decodeToken(e)}_decodeToken(e){if(!e||e==="")return null;let t=e.split(".");if(t.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let i=this.urlBase64Decode(t[1]);if(!i)throw new Error("Cannot decode the token.");return JSON.parse(i)}getTokenExpirationDate(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._getTokenExpirationDate(t)):this._getTokenExpirationDate(e)}_getTokenExpirationDate(e){let t;if(t=this.decodeToken(e),!t||!t.hasOwnProperty("exp"))return null;let i=new Date(0);return i.setUTCSeconds(t.exp),i}isTokenExpired(e=this.tokenGetter(),t){return e instanceof Promise?e.then(i=>this._isTokenExpired(i,t)):this._isTokenExpired(e,t)}_isTokenExpired(e,t){if(!e||e==="")return!0;let i=this.getTokenExpirationDate(e);return t=t||0,i===null?!1:!(i.valueOf()>new Date().valueOf()+t*1e3)}getAuthScheme(e,t){return typeof e=="function"?e(t):e}}return n.\u0275fac=function(e){return new(e||n)(Z(vm))},n.\u0275prov=x({token:n,factory:n.\u0275fac}),n})(),qf=n=>n instanceof Promise?sn(()=>n):K(n),Aw=(()=>{class n{constructor(e,t,i){this.jwtHelper=t,this.document=i,this.standardPorts=["80","443"],this.tokenGetter=e.tokenGetter,this.headerName=e.headerName||"Authorization",this.authScheme=e.authScheme||e.authScheme===""?e.authScheme:"Bearer ",this.allowedDomains=e.allowedDomains||[],this.disallowedRoutes=e.disallowedRoutes||[],this.throwNoTokenError=e.throwNoTokenError||!1,this.skipWhenExpired=e.skipWhenExpired}isAllowedDomain(e){let t=new URL(e.url,this.document.location.origin);if(t.host===this.document.location.host)return!0;let i=`${t.hostname}${t.port&&!this.standardPorts.includes(t.port)?":"+t.port:""}`;return this.allowedDomains.findIndex(r=>typeof r=="string"?r===i:r instanceof RegExp?r.test(i):!1)>-1}isDisallowedRoute(e){let t=new URL(e.url,this.document.location.origin);return this.disallowedRoutes.findIndex(i=>{if(typeof i=="string"){let r=new URL(i,this.document.location.origin);return r.hostname===t.hostname&&r.pathname===t.pathname}return i instanceof RegExp?i.test(e.url):!1})>-1}handleInterception(e,t,i){let r=this.jwtHelper.getAuthScheme(this.authScheme,t);if(!e&&this.throwNoTokenError)throw new Error("Could not get token from tokenGetter function.");let o=K(!1);return this.skipWhenExpired&&(o=e?qf(this.jwtHelper.isTokenExpired(e)):K(!0)),e?o.pipe(ae(l=>l&&this.skipWhenExpired?t.clone():t.clone({setHeaders:{[this.headerName]:`${r}${e}`}})),Kt(l=>i.handle(l))):i.handle(t)}intercept(e,t){if(!this.isAllowedDomain(e)||this.isDisallowedRoute(e))return t.handle(e);let i=this.tokenGetter(e);return qf(i).pipe(Kt(r=>this.handleInterception(r,e,t)))}}return n.\u0275fac=function(e){return new(e||n)(Z(vm),Z(Ml),Z(q))},n.\u0275prov=x({token:n,factory:n.\u0275fac}),n})(),Yf=(()=>{class n{constructor(e){if(e)throw new Error("JwtModule is already loaded. It should only be imported in your application's main module.")}static forRoot(e){return{ngModule:n,providers:[{provide:As,useClass:Aw,multi:!0},e.jwtOptionsProvider||{provide:vm,useValue:e.config},Ml]}}}return n.\u0275fac=function(e){return new(e||n)(Z(n,12))},n.\u0275mod=w({type:n}),n.\u0275inj=y({}),n})();var Ve=(()=>{class n{constructor(e,t){this.http=e,this.jwt=t,this.baseUrl="https://lazynoja.bsite.net/api/Library/",this.userStatus=new M}normalizeDisplayDate(e){if(e==null||e==="")return"";let t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}).replace(/ /g,"-")}normalizeUser(e){return{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,mobileNumber:e.mobileNumber,password:e.password??"",userType:e.userType,accountStatus:e.accountStatus,createdOn:this.normalizeDisplayDate(e.createdOn)}}normalizeOrder(e){return{id:e.id,userId:e.userId,userName:e.user?.firstName+" "+e.user?.lastName,bookId:e.bookId,bookTitle:e.book?.title,orderDate:e.orderDate,returned:e.returned,returnDate:this.normalizeDisplayDate(e.returnDate),finePaid:e.finePaid}}normalizeBook(e){return{id:e.id,title:e.title,author:e.author,price:e.price,ordered:!!e.ordered,bookCategoryId:e.bookCategoryId,bookCategory:e.bookCategory??{id:0,category:"",subCategory:""}}}asArray(e){if(Array.isArray(e))return e;let t=e;return t?.$values&&Array.isArray(t.$values)?t.$values:t?.data&&Array.isArray(t.data)?t.data:[]}register(e){return this.http.post(this.baseUrl+"Register",e,{responseType:"text"})}login(e){let t=new xt().append("email",e.email).append("password",e.password);return this.http.get(this.baseUrl+"Login",{params:t,responseType:"text"})}isLoggedIn(){return localStorage.getItem("access_token")!=null&&!this.jwt.isTokenExpired()}getBooks(){return this.http.get(this.baseUrl+"GetBooks").pipe(ae(e=>this.asArray(e).map(t=>this.normalizeBook(t))),vn(e=>(console.error("GetBooks failed",e),Gn(()=>e))))}orderBook(e){let t=this.getUserInfo().id,i=new xt().append("userId",t).append("bookId",e.id);return this.http.post(this.baseUrl+"OrderBook",null,{params:i,responseType:"text"})}getUserInfo(){if(!this.isLoggedIn())return null;let e=this.jwt.decodeToken();return{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,mobileNumber:e.mobileNumber,userType:ir[e.userType],accountStatus:e.accountStatus,createdOn:this.normalizeDisplayDate(e.createdOn),password:""}}logOut(){localStorage.removeItem("access_token"),this.userStatus.next("loggedOff")}getOrdersOfUser(e){let t=new xt().append("userId",e);return this.http.get(this.baseUrl+"GetOrdersOfUsers",{params:t}).pipe(ae(i=>this.asArray(i).map(r=>this.normalizeOrder(r))),vn(i=>(console.error("GetOrdersOfUsers failed",i),Gn(()=>i))))}getFine(e){let t=new Date,i=new Date(Date.parse(e.orderDate));if(i.setDate(i.getDate()+10),i.getTime()<t.getTime()){var r=t.getTime()-i.getTime();return Math.floor(r/(1e3*86400))*50}return 0}addNewCategory(e){return this.http.post(this.baseUrl+"AddCategory",e,{responseType:"text"})}getCategories(){return this.http.get(this.baseUrl+"GetCategories")}addBook(e){return this.http.post(this.baseUrl+"AddBook",e,{responseType:"text"})}deleteBook(e){return this.http.delete(this.baseUrl+"DeleteBook",{params:new xt().append("id",e),responseType:"text"})}returnBook(e,t,i){return this.http.get(this.baseUrl+"ReturnBook",{params:new xt().append("userId",e).append("bookId",t).append("fine",i),responseType:"text"})}getUsers(){return this.http.get(this.baseUrl+"GetUsers").pipe(ae(e=>this.asArray(e).map(t=>this.normalizeUser(t))),vn(e=>(console.error("GetUsers failed",e),Gn(()=>e))))}approveRequest(e){return this.http.get(this.baseUrl+"ApproveRequest",{params:new xt().append("userId",e),responseType:"text"})}getOrders(){return this.http.get(this.baseUrl+"GetOrders").pipe(ae(e=>this.asArray(e).map(t=>this.normalizeOrder(t))),vn(e=>(console.error("GetOrders failed",e),Gn(()=>e))))}sendEmail(){return this.http.get(this.baseUrl+"SendEmailForPendingReturns",{responseType:"text"})}blockUsers(){return this.http.get(this.baseUrl+"BlockFineOverdueUsers",{responseType:"text"})}unblock(e){return this.http.get(this.baseUrl+"Unblock",{params:new xt().append("userId",e),responseType:"text"})}GetUserInfo2(){return this.http.get(this.baseUrl+"GetUserInfo2",{responseType:"text"})}Protected(){return this.http.get(this.baseUrl+"Protected",{responseType:"text"})}static{this.\u0275fac=function(t){return new(t||n)(Z(Va),Z(Ml))}}static{this.\u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function wo(n){return n.buttons===0||n.detail===0}function Co(n){let a=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var ym;function Kf(){if(ym==null){let n=typeof document<"u"?document.head:null;ym=!!(n&&(n.createShadowRoot||n.attachShadow))}return ym}function wm(n){if(Kf()){let a=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function un(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let a=n.shadowRoot.activeElement;if(a===n)break;n=a}return n}function Dt(n){return n.composedPath?n.composedPath()[0]:n.target}var Cm;try{Cm=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){Cm=!1}var se=(()=>{class n{_platformId=s(Ia);isBrowser=this._platformId?Gh(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Cm)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var xo;function Qf(){if(xo==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>xo=!0}))}finally{xo=xo||!1}return xo}function ar(n){return Qf()?n:!!n.capture}function lt(n,a=0){return Xf(n)?Number(n):arguments.length===2?a:0}function Xf(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Vt(n){return n instanceof F?n.nativeElement:n}var Zf=new g("cdk-input-modality-detector-options"),Jf={ignoreKeys:[18,17,224,91,16]},eg=650,xm={passive:!0,capture:!0},tg=(()=>{class n{_platform=s(se);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Et(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Dt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<eg||(this._modality.next(wo(e)?"keyboard":"mouse"),this._mostRecentTarget=Dt(e))};_onTouchstart=e=>{if(Co(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Dt(e)};constructor(){let e=s(W),t=s(q),i=s(Zf,{optional:!0});if(this._options=C(C({},Jf),i),this.modalityDetected=this._modality.pipe(Jo(1)),this.modalityChanged=this.modalityDetected.pipe(zc()),this._platform.isBrowser){let r=s(wt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,xm),r.listen(t,"mousedown",this._onMousedown,xm),r.listen(t,"touchstart",this._onTouchstart,xm)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Do=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Do||{}),ng=new g("cdk-focus-monitor-default-options"),El=ar({passive:!0,capture:!0}),ct=(()=>{class n{_ngZone=s(W);_platform=s(se);_inputModalityDetector=s(tg);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(q);_stopInputModalityDetector=new M;constructor(){let e=s(ng,{optional:!0});this._detectionMode=e?.detectionMode||Do.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Dt(e);for(let i=t;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,t=!1){let i=Vt(e);if(!this._platform.isBrowser||i.nodeType!==1)return K();let r=wm(i)||this._document,o=this._elementInfo.get(i);if(o)return t&&(o.checkChildren=!0),o.subject;let l={checkChildren:t,subject:new M,rootNode:r};return this._elementInfo.set(i,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=Vt(e),i=this._elementInfo.get(t);i&&(i.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(i))}focusVia(e,t,i){let r=Vt(e),o=this._document.activeElement;r===o?this._getClosestElementsInfo(r).forEach(([l,c])=>this._originChanged(l,t,c)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Do.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Do.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?eg:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,t){let i=this._elementInfo.get(t),r=Dt(e);!i||!i.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),i)}_onBlur(e,t){let i=this._elementInfo.get(t);!i||i.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(i,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,i=this._rootNodeFocusListenerCount.get(t)||0;i||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,El),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,El)}),this._rootNodeFocusListenerCount.set(t,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ne(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let i=this._rootNodeFocusListenerCount.get(t);i>1?this._rootNodeFocusListenerCount.set(t,i-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,El),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,El),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,i){this._setClasses(e,t),this._emitOrigin(i,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((i,r)=>{(r===e||i.checkChildren&&r.contains(e))&&t.push([r,i])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let o=0;o<r.length;o++)if(r[o].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Dm=(()=>{class n{_elementRef=s(F);_focusMonitor=s(ct);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new A;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();var Il=new WeakMap,ke=(()=>{class n{_appRef;_injector=s(J);_environmentInjector=s(_t);load(e){let t=this._appRef=this._appRef||this._injector.get(An),i=Il.get(t);i||(i={loaders:new Set,refs:[]},Il.set(t,i),t.onDestroy(()=>{Il.get(t)?.refs.forEach(r=>r.destroy()),Il.delete(t)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(cs(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var hn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),Tl;function Ow(){if(Tl===void 0&&(Tl=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Tl=n.trustedTypes.createPolicy("angular#components",{createHTML:a=>a}))}return Tl}function ma(n){return Ow()?.createHTML(n)||n}function ig(n,a,e){let t=e.sanitize(Bt.HTML,a);n.innerHTML=ma(t||"")}function rr(n){return Array.isArray(n)?n:[n]}var ag=new Set,ua,or=(()=>{class n{_platform=s(se);_nonce=s(Aa,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Pw}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Fw(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fw(n,a){if(!ag.has(n))try{ua||(ua=document.createElement("style"),a&&ua.setAttribute("nonce",a),ua.setAttribute("type","text/css"),document.head.appendChild(ua)),ua.sheet&&(ua.sheet.insertRule(`@media ${n} {body{ }}`,0),ag.add(n))}catch(e){console.error(e)}}function Pw(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var ha=(()=>{class n{_mediaMatcher=s(or);_zone=s(W);_queries=new Map;_destroySubject=new M;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return rg(rr(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=rg(rr(e)).map(o=>this._registerQuery(o).observable),r=Wn(i);return r=Xo(r.pipe(ze(1)),r.pipe(Jo(1),mi(0))),r.pipe(ae(o=>{let l={matches:!1,breakpoints:{}};return o.forEach(({matches:c,query:h})=>{l.matches=l.matches||c,l.breakpoints[h]=c}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new on(o=>{let l=c=>this._zone.run(()=>o.next(c));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(Ie(t),ae(({matches:o})=>({query:e,matches:o})),ne(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function rg(n){return n.map(a=>a.split(",")).reduce((a,e)=>a.concat(e)).map(a=>a.trim())}function Nw(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let a=0;a<n.addedNodes.length;a++)if(!(n.addedNodes[a]instanceof Comment))return!1;for(let a=0;a<n.removedNodes.length;a++)if(!(n.removedNodes[a]instanceof Comment))return!1;return!0}return!1}var og=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),sg=(()=>{class n{_mutationObserverFactory=s(og);_observedElements=new Map;_ngZone=s(W);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=Vt(e);return new on(i=>{let o=this._observeElement(t).pipe(ae(l=>l.filter(c=>!Nw(c))),le(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{i.next(l)})});return()=>{o.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new M,i=this._mutationObserverFactory.create(r=>t.next(r));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:i}=this._observedElements.get(e);t&&t.disconnect(),i.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),lg=(()=>{class n{_contentObserver=s(sg);_elementRef=s(F);event=new A;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=lt(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(mi(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",N],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),sr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({providers:[og]})}return n})();var pa=(()=>{class n{_platform=s(se);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Bw(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=Lw(Ww(e));if(t&&(cg(t)===-1||!this.isVisible(t)))return!1;let i=e.nodeName.toLowerCase(),r=cg(e);return e.hasAttribute("contenteditable")?r!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!$w(e)?!1:i==="audio"?e.hasAttribute("controls")?r!==-1:!1:i==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return Gw(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Lw(n){try{return n.frameElement}catch(a){return null}}function Bw(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function Vw(n){let a=n.nodeName.toLowerCase();return a==="input"||a==="select"||a==="button"||a==="textarea"}function zw(n){return Hw(n)&&n.type=="hidden"}function jw(n){return Uw(n)&&n.hasAttribute("href")}function Hw(n){return n.nodeName.toLowerCase()=="input"}function Uw(n){return n.nodeName.toLowerCase()=="a"}function ug(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let a=n.getAttribute("tabindex");return!!(a&&!isNaN(parseInt(a,10)))}function cg(n){if(!ug(n))return null;let a=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(a)?-1:a}function $w(n){let a=n.nodeName.toLowerCase(),e=a==="input"&&n.type;return e==="text"||e==="password"||a==="select"||a==="textarea"}function Gw(n){return zw(n)?!1:Vw(n)||jw(n)||n.hasAttribute("contenteditable")||ug(n)}function Ww(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Al=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(a){this._enabled=a,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_enabled=!0;constructor(a,e,t,i,r=!1,o){this._element=a,this._checker=e,this._ngZone=t,this._document=i,this._injector=o,r||this.attachAnchors()}destroy(){let a=this._startAnchor,e=this._endAnchor;a&&(a.removeEventListener("focus",this.startAnchorListener),a.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(a){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(a)))})}focusFirstTabbableElementWhenReady(a){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(a)))})}focusLastTabbableElementWhenReady(a){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(a)))})}_getRegionBoundary(a){let e=this._element.querySelectorAll(`[cdk-focus-region-${a}], [cdkFocusRegion${a}], [cdk-focus-${a}]`);return a=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(a){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(a),!!t}return e.focus(a),!0}return this.focusFirstTabbableElement(a)}focusFirstTabbableElement(a){let e=this._getRegionBoundary("start");return e&&e.focus(a),!!e}focusLastTabbableElement(a){let e=this._getRegionBoundary("end");return e&&e.focus(a),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let e=a.children;for(let t=0;t<e.length;t++){let i=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(i)return i}return null}_getLastTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let e=a.children;for(let t=e.length-1;t>=0;t--){let i=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(i)return i}return null}_createAnchor(){let a=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,a),a.classList.add("cdk-visually-hidden"),a.classList.add("cdk-focus-trap-anchor"),a.setAttribute("aria-hidden","true"),a}_toggleAnchorTabIndex(a,e){a?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(a){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_executeOnStable(a){this._injector?Te(a,{injector:this._injector}):setTimeout(a)}},lr=(()=>{class n{_checker=s(pa);_ngZone=s(W);_document=s(q);_injector=s(J);constructor(){s(ke).load(hn)}create(e,t=!1){return new Al(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sm=(()=>{class n{_elementRef=s(F);_focusTrapFactory=s(lr);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){s(se).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=un(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",N],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",N]},exportAs:["cdkTrapFocus"],features:[de]})}return n})(),hg=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),pg=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),qw=0,ko=(()=>{class n{_ngZone=s(W);_defaultOptions=s(pg,{optional:!0});_liveElement;_document=s(q);_sanitizer=s(Kr);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(hg,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let i=this._defaultOptions,r,o;return t.length===1&&typeof t[0]=="number"?o=t[0]:[r,o]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=i&&i.politeness?i.politeness:"polite"),o==null&&i&&(o=i.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:ig(this._liveElement,e,this._sanitizer),typeof o=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),i=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return i.classList.add(e),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${qw++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let r=t[i],o=r.getAttribute("aria-owns");o?o.indexOf(e)===-1&&r.setAttribute("aria-owns",o+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Si=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(Si||{}),dg="cdk-high-contrast-black-on-white",mg="cdk-high-contrast-white-on-black",km="cdk-high-contrast-active",fg=(()=>{class n{_platform=s(se);_hasCheckedHighContrastMode=!1;_document=s(q);_breakpointSubscription;constructor(){this._breakpointSubscription=s(ha).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Si.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,i=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(i&&i.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Si.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Si.BLACK_ON_WHITE}return Si.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(km,dg,mg),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Si.BLACK_ON_WHITE?e.add(km,dg):t===Si.WHITE_ON_BLACK&&e.add(km,mg)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ai=(()=>{class n{constructor(){s(fg)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[sr]})}return n})();var Yw=200,Rl=class{_letterKeyStream=new M;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new M;selectedItem=this._selectedItem;constructor(a,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Yw;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(a),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(a){this._selectedItemIndex=a}setItems(a){this._items=a}handleKey(a){let e=a.keyCode;a.key&&a.key.length===1?this._letterKeyStream.next(a.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(a){this._letterKeyStream.pipe(vt(e=>this._pressedLetters.push(e)),mi(a),le(()=>this._pressedLetters.length>0),ae(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let i=(this._selectedItemIndex+t)%this._items.length,r=this._items[i];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function Ge(n,...a){return a.length?a.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var cr=class{_items;_activeItemIndex=z(-1);_activeItem=z(null);_wrap=!1;_typeaheadSubscription=Pe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=a=>a.disabled;constructor(a,e){this._items=a,a instanceof Qt?this._itemChangesSubscription=a.changes.subscribe(t=>this._itemsChanged(t.toArray())):hi(a)&&(this._effectRef=Ki(()=>this._itemsChanged(a()),{injector:e}))}tabOut=new M;change=new M;skipPredicate(a){return this._skipPredicateFn=a,this}withWrap(a=!0){return this._wrap=a,this}withVerticalOrientation(a=!0){return this._vertical=a,this}withHorizontalOrientation(a){return this._horizontal=a,this}withAllowedModifierKeys(a){return this._allowedModifierKeys=a,this}withTypeAhead(a=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Rl(e,{debounceInterval:typeof a=="number"?a:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(a=!0){return this._homeAndEnd=a,this}withPageUpDown(a=!0,e=10){return this._pageUpAndDown={enabled:a,delta:e},this}setActiveItem(a){let e=this._activeItem();this.updateActiveItem(a),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(a){let e=a.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!a[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let r=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(r<o?r:o-1,-1);break}else return;default:(i||Ge(a,"shiftKey"))&&this._typeahead?.handleKey(a);return}this._typeahead?.reset(),a.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(a){let e=this._getItemsArray(),t=typeof a=="number"?a:e.indexOf(a),i=e[t];this._activeItem.set(i??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(a){this._wrap?this._setActiveInWrapMode(a):this._setActiveInDefaultMode(a)}_setActiveInWrapMode(a){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let i=(this._activeItemIndex()+a*t+e.length)%e.length,r=e[i];if(!this._skipPredicateFn(r)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(a){this._setActiveItemByIndex(this._activeItemIndex()+a,a)}_setActiveItemByIndex(a,e){let t=this._getItemsArray();if(t[a]){for(;this._skipPredicateFn(t[a]);)if(a+=e,!t[a])return;this.setActiveItem(a)}}_getItemsArray(){return hi(this._items)?this._items():this._items instanceof Qt?this._items.toArray():this._items}_itemsChanged(a){this._typeahead?.setItems(a);let e=this._activeItem();if(e){let t=a.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var So=class extends cr{setActiveItem(a){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(a),this.activeItem&&this.activeItem.setActiveStyles()}};var _a=class extends cr{_origin="program";setFocusOrigin(a){return this._origin=a,this}setActiveItem(a){super.setActiveItem(a),this.activeItem&&this.activeItem.focus(this._origin)}};var Mm={},ge=class n{_appId=s(Qi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,e=!1){return this._appId!=="ng"&&(a+=this._appId),Mm.hasOwnProperty(a)||(Mm[a]=0),`${a}${e?n._infix+"-":""}${Mm[a]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})};var bg=" ";function Tm(n,a,e){let t=Bl(n,a);e=e.trim(),!t.some(i=>i.trim()===e)&&(t.push(e),n.setAttribute(a,t.join(bg)))}function Vl(n,a,e){let t=Bl(n,a);e=e.trim();let i=t.filter(r=>r!==e);i.length?n.setAttribute(a,i.join(bg)):n.removeAttribute(a)}function Bl(n,a){return n.getAttribute(a)?.match(/\S+/g)??[]}var vg="cdk-describedby-message",Ll="cdk-describedby-host",Im=0,Am=(()=>{class n{_platform=s(se);_document=s(q);_messageRegistry=new Map;_messagesContainer=null;_id=`${Im++}`;constructor(){s(ke).load(hn),this._id=s(Qi)+"-"+Im++}describe(e,t,i){if(!this._canBeDescribed(e,t))return;let r=Em(t,i);typeof t!="string"?(_g(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,i),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,i){if(!t||!this._isElementNode(e))return;let r=Em(t,i);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let o=this._messageRegistry.get(r);o&&o.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Ll}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Ll);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let i=this._document.createElement("div");_g(i,this._id),i.textContent=e,t&&i.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(Em(e,t),{messageElement:i,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let i=this._document.createElement("div");i.style.visibility="hidden",i.classList.add(e),i.classList.add("cdk-visually-hidden"),this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(e){let t=Bl(e,"aria-describedby").filter(i=>i.indexOf(vg)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let i=this._messageRegistry.get(t);Tm(e,"aria-describedby",i.messageElement.id),e.setAttribute(Ll,this._id),i.referenceCount++}_removeMessageReference(e,t){let i=this._messageRegistry.get(t);i.referenceCount--,Vl(e,"aria-describedby",i.messageElement.id),e.removeAttribute(Ll)}_isElementDescribedByMessage(e,t){let i=Bl(e,"aria-describedby"),r=this._messageRegistry.get(t),o=r&&r.messageElement.id;return!!o&&i.indexOf(o)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let i=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return i?!r||r.trim()!==i:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Em(n,a){return typeof n=="string"?`${a||""}/${n}`:n}function _g(n,a){n.id||(n.id=`${vg}-${a}-${Im++}`)}var ri={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function Rm(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function tt(n){return n==null?"":typeof n=="string"?n:`${n}px`}var Kw=new g("cdk-dir-doc",{providedIn:"root",factory:()=>s(q)}),Qw=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function yg(n){let a=n?.toLowerCase()||"";return a==="auto"&&typeof navigator<"u"&&navigator?.language?Qw.test(navigator.language)?"rtl":"ltr":a==="rtl"?"rtl":"ltr"}var Me=(()=>{class n{get value(){return this.valueSignal()}valueSignal=z("ltr");change=new A;constructor(){let e=s(Kw,{optional:!0});if(e){let t=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(yg(t||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var kn=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(kn||{}),zl,ba;function jl(){if(ba==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ba=!1,ba;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ba=!0;else{let n=Element.prototype.scrollTo;n?ba=!/\{\s*\[native code\]\s*\}/.test(n.toString()):ba=!1}}return ba}function ur(){if(typeof document!="object"||!document)return kn.NORMAL;if(zl==null){let n=document.createElement("div"),a=n.style;n.dir="rtl",a.width="1px",a.overflow="auto",a.visibility="hidden",a.pointerEvents="none",a.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),zl=kn.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,zl=n.scrollLeft===0?kn.NEGATED:kn.INVERTED),n.remove()}return zl}function Hl(n){return n&&typeof n.connect=="function"&&!(n instanceof Gu)}var Sn=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(Sn||{}),Ul=class{viewCacheSize=20;_viewCache=[];applyChanges(a,e,t,i,r){a.forEachOperation((o,l,c)=>{let h,f;if(o.previousIndex==null){let D=()=>t(o,l,c);h=this._insertView(D,c,e,i(o)),f=h?Sn.INSERTED:Sn.REPLACED}else c==null?(this._detachAndCacheView(l,e),f=Sn.REMOVED):(h=this._moveView(l,c,e,i(o)),f=Sn.MOVED);r&&r({context:h?.context,operation:f,record:o})})}detach(){for(let a of this._viewCache)a.destroy();this._viewCache=[]}_insertView(a,e,t,i){let r=this._insertViewFromCache(e,t);if(r){r.context.$implicit=i;return}let o=a();return t.createEmbeddedView(o.templateRef,o.context,o.index)}_detachAndCacheView(a,e){let t=e.detach(a);this._maybeCacheView(t,e)}_moveView(a,e,t,i){let r=t.get(a);return t.move(r,e),r.context.$implicit=i,r}_maybeCacheView(a,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(a);else{let t=e.indexOf(a);t===-1?a.destroy():e.remove(t)}}_insertViewFromCache(a,e){let t=this._viewCache.pop();return t&&e.insert(t,a),t||null}};var V=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({})}return n})();var Xw=20,Vn=(()=>{class n{_ngZone=s(W);_platform=s(se);_renderer=s(wt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new M;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Xw){return this._platform.isBrowser?new on(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(Ir(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):K()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(le(r=>!r||i.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((i,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let i=Vt(t),r=e.getElementRef().nativeElement;do if(i==r)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),va=(()=>{class n{elementRef=s(F);scrollDispatcher=s(Vn);ngZone=s(W);dir=s(Me,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new M;_renderer=s(ye);_cleanupScroll;_elementScrolled=new M;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=i?e.end:e.start),e.right==null&&(e.right=i?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),i&&ur()!=kn.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),ur()==kn.INVERTED?e.left=e.right:ur()==kn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;jl()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",i="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?i:t:e=="end"&&(e=o?t:i),o&&ur()==kn.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:o&&ur()==kn.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),Zw=20,$t=(()=>{class n{_platform=s(se);_listeners;_viewportSize=null;_change=new M;_document=s(q);constructor(){let e=s(W),t=s(wt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=r=>this._change.next(r);this._listeners=[t.listen("window","resize",i),t.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),i=e.documentElement,r=i.getBoundingClientRect(),o=-r.top||e.body?.scrollTop||t.scrollY||i.scrollTop||0,l=-r.left||e.body?.scrollLeft||t.scrollX||i.scrollLeft||0;return{top:o,left:l}}change(e=Zw){return e>0?this._change.pipe(Ir(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wg=new g("CDK_VIRTUAL_SCROLL_VIEWPORT");var Ft=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({})}return n})(),Mo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V,Ft,V,Ft]})}return n})();var Eo=class{_attachedHost=null;attach(a){return this._attachedHost=a,a.attach(this)}detach(){let a=this._attachedHost;a!=null&&(this._attachedHost=null,a.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(a){this._attachedHost=a}},tn=class extends Eo{component;viewContainerRef;injector;projectableNodes;bindings;constructor(a,e,t,i,r){super(),this.component=a,this.viewContainerRef=e,this.injector=t,this.projectableNodes=i,this.bindings=r||null}},Gt=class extends Eo{templateRef;viewContainerRef;context;injector;constructor(a,e,t,i){super(),this.templateRef=a,this.viewContainerRef=e,this.context=t,this.injector=i}get origin(){return this.templateRef.elementRef}attach(a,e=this.context){return this.context=e,super.attach(a)}detach(){return this.context=void 0,super.detach()}},Om=class extends Eo{element;constructor(a){super(),this.element=a instanceof F?a.nativeElement:a}},Mi=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(a){if(a instanceof tn)return this._attachedPortal=a,this.attachComponentPortal(a);if(a instanceof Gt)return this._attachedPortal=a,this.attachTemplatePortal(a);if(this.attachDomPortal&&a instanceof Om)return this._attachedPortal=a,this.attachDomPortal(a)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(a){this._disposeFn=a}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},$l=class extends Mi{outletElement;_appRef;_defaultInjector;constructor(a,e,t){super(),this.outletElement=a,this._appRef=e,this._defaultInjector=t}attachComponentPortal(a){let e;if(a.viewContainerRef){let t=a.injector||a.viewContainerRef.injector,i=t.get(ns,null,{optional:!0})||void 0;e=a.viewContainerRef.createComponent(a.component,{index:a.viewContainerRef.length,injector:t,ngModuleRef:i,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,i=a.injector||this._defaultInjector||J.NULL,r=i.get(_t,t.injector);e=cs(a.component,{elementInjector:i,environmentInjector:r,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=a,e}attachTemplatePortal(a){let e=a.viewContainerRef,t=e.createEmbeddedView(a.templateRef,a.context,{injector:a.injector});return t.rootNodes.forEach(i=>this.outletElement.appendChild(i)),t.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(t);i!==-1&&e.remove(i)}),this._attachedPortal=a,t}attachDomPortal=a=>{let e=a.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=a,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(a){return a.hostView.rootNodes[0]}};var kt=(()=>{class n extends Mi{_moduleRef=s(ns,{optional:!0});_document=s(q);_viewContainerRef=s(Qe);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new A;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,i=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let i=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(i,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(t,i)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Y]})}return n})(),St=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({})}return n})();var Cg=jl();function oi(n){return new Gl(n.get($t),n.get(q))}var Gl=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(a,e){this._viewportRuler=a,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let a=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=a.style.left||"",this._previousHTMLStyles.top=a.style.top||"",a.style.left=tt(-this._previousScrollPosition.left),a.style.top=tt(-this._previousScrollPosition.top),a.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let a=this._document.documentElement,e=this._document.body,t=a.style,i=e.style,r=t.scrollBehavior||"",o=i.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,a.classList.remove("cdk-global-scrollblock"),Cg&&(t.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Cg&&(t.scrollBehavior=r,i.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Ig(n,a){return new Wl(n.get(Vn),n.get(W),n.get($t),a)}var Wl=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(a,e,t,i){this._scrollDispatcher=a,this._ngZone=e,this._viewportRuler=t,this._config=i}attach(a){this._overlayRef,this._overlayRef=a}enable(){if(this._scrollSubscription)return;let a=this._scrollDispatcher.scrolled(0).pipe(le(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=a.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=a.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Io=class{enable(){}disable(){}attach(){}};function Fm(n,a){return a.some(e=>{let t=n.bottom<e.top,i=n.top>e.bottom,r=n.right<e.left,o=n.left>e.right;return t||i||r||o})}function xg(n,a){return a.some(e=>{let t=n.top<e.top,i=n.bottom>e.bottom,r=n.left<e.left,o=n.right>e.right;return t||i||r||o})}function zn(n,a){return new ql(n.get(Vn),n.get($t),n.get(W),a)}var ql=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(a,e,t,i){this._scrollDispatcher=a,this._viewportRuler=e,this._ngZone=t,this._config=i}attach(a){this._overlayRef,this._overlayRef=a}enable(){if(!this._scrollSubscription){let a=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(a).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:i}=this._viewportRuler.getViewportSize();Fm(e,[{width:t,height:i,bottom:i,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Tg=(()=>{class n{_injector=s(J);constructor(){}noop=()=>new Io;close=e=>Ig(this._injector,e);block=()=>oi(this._injector);reposition=e=>zn(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),pn=class{positionStrategy;scrollStrategy=new Io;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(a){if(a){let e=Object.keys(a);for(let t of e)a[t]!==void 0&&(this[t]=a[t])}}};var Yl=class{connectionPair;scrollableViewProperties;constructor(a,e){this.connectionPair=a,this.scrollableViewProperties=e}};var Ag=(()=>{class n{_attachedOverlays=[];_document=s(q);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Rg=(()=>{class n extends Ag{_ngZone=s(W);_renderer=s(wt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let i=t.length-1;i>-1;i--){let r=t[i];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Og=(()=>{class n extends Ag{_platform=s(se);_ngZone=s(W);_renderer=s(wt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,i={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,i),r.listen(t,"click",this._clickListener,i),r.listen(t,"auxclick",this._clickListener,i),r.listen(t,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Dt(e)};_clickListener=e=>{let t=Dt(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let o=r.length-1;o>-1;o--){let l=r[o],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(Dg(l.overlayElement,t)||Dg(l.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Dg(n,a){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=a;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Fg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ql=(()=>{class n{_platform=s(se);_containerElement;_document=s(q);_styleLoader=s(ke);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Rm()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<i.length;r++)i[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Rm()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Fg)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Pm=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(a,e,t,i){this._renderer=e,this._ngZone=t,this.element=a.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let a=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(a,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),a.style.pointerEvents="none",a.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Nm(n){return n&&n.nodeType===1}var hr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new M;_attachments=new M;_detachments=new M;_positionStrategy;_scrollStrategy;_locationChanges=Pe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new M;_outsidePointerEvents=new M;_afterNextRenderRef;constructor(a,e,t,i,r,o,l,c,h,f=!1,D,$){this._portalOutlet=a,this._host=e,this._pane=t,this._config=i,this._ngZone=r,this._keyboardDispatcher=o,this._document=l,this._location=c,this._outsideClickDispatcher=h,this._animationsDisabled=f,this._injector=D,this._renderer=$,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(a){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(a);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Te(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let a=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),a}dispose(){if(this._disposed)return;let a=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,a&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(a){a!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=a,this.hasAttached()&&(a.attach(this),this.updatePosition()))}updateSize(a){this._config=C(C({},this._config),a),this._updateElementSize()}setDirection(a){this._config=Ce(C({},this._config),{direction:a}),this._updateElementDirection()}addPanelClass(a){this._pane&&this._toggleClasses(this._pane,a,!0)}removePanelClass(a){this._pane&&this._toggleClasses(this._pane,a,!1)}getDirection(){let a=this._config.direction;return a?typeof a=="string"?a:a.value:"ltr"}updateScrollStrategy(a){a!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=a,this.hasAttached()&&(a.attach(this),a.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let a=this._pane.style;a.width=tt(this._config.width),a.height=tt(this._config.height),a.minWidth=tt(this._config.minWidth),a.minHeight=tt(this._config.minHeight),a.maxWidth=tt(this._config.maxWidth),a.maxHeight=tt(this._config.maxHeight)}_togglePointerEvents(a){this._pane.style.pointerEvents=a?"":"none"}_attachHost(){if(!this._host.parentElement){let a=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Nm(a)?a.after(this._host):a?.type==="parent"?a.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(a){}}_attachBackdrop(){let a="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Pm(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(a))}):this._backdropRef.element.classList.add(a)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(a,e,t){let i=rr(e||[]).filter(r=>!!r);i.length&&(t?a.classList.add(...i):a.classList.remove(...i))}_detachContentWhenEmpty(){let a=!1;try{this._detachContentAfterRenderRef=Te(()=>{a=!0,this._detachContent()},{injector:this._injector})}catch(e){if(a)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let a=this._scrollStrategy;a?.disable(),a?.detach?.()}},kg="cdk-overlay-connected-position-bounding-box",Jw=/([A-Za-z%]+)$/;function Ei(n,a){return new To(a,n.get($t),n.get(q),n.get(se),n.get(Ql))}var To=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new M;_resizeSubscription=Pe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(a,e,t,i,r){this._viewportRuler=e,this._document=t,this._platform=i,this._overlayContainer=r,this.setOrigin(a)}attach(a){this._overlayRef&&this._overlayRef,this._validatePositions(),a.hostElement.classList.add(kg),this._overlayRef=a,this._boundingBox=a.hostElement,this._pane=a.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let a=this._originRect,e=this._overlayRect,t=this._viewportRect,i=this._containerRect,r=[],o;for(let l of this._preferredPositions){let c=this._getOriginPoint(a,i,l),h=this._getOverlayPoint(c,e,l),f=this._getOverlayFit(h,e,t,l);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(f,h,t)){r.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!o||o.overlayFit.visibleArea<f.visibleArea)&&(o={overlayFit:f,overlayPoint:h,originPoint:c,position:l,overlayRect:e})}if(r.length){let l=null,c=-1;for(let h of r){let f=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);f>c&&(c=f,l=h)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ya(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(kg),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let a=this._lastPosition;a?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(a,this._getOriginPoint(this._originRect,this._containerRect,a))):this.apply()}withScrollableContainers(a){return this._scrollables=a,this}withPositions(a){return this._preferredPositions=a,a.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(a){return this._viewportMargin=a,this}withFlexibleDimensions(a=!0){return this._hasFlexibleDimensions=a,this}withGrowAfterOpen(a=!0){return this._growAfterOpen=a,this}withPush(a=!0){return this._canPush=a,this}withLockedPosition(a=!0){return this._positionLocked=a,this}setOrigin(a){return this._origin=a,this}withDefaultOffsetX(a){return this._offsetX=a,this}withDefaultOffsetY(a){return this._offsetY=a,this}withTransformOriginOn(a){return this._transformOriginSelector=a,this}withPopoverLocation(a){return this._popoverLocation=a,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof F?this._origin.nativeElement:Nm(this._origin)?this._origin:null}_getOriginPoint(a,e,t){let i;if(t.originX=="center")i=a.left+a.width/2;else{let o=this._isRtl()?a.right:a.left,l=this._isRtl()?a.left:a.right;i=t.originX=="start"?o:l}e.left<0&&(i-=e.left);let r;return t.originY=="center"?r=a.top+a.height/2:r=t.originY=="top"?a.top:a.bottom,e.top<0&&(r-=e.top),{x:i,y:r}}_getOverlayPoint(a,e,t){let i;t.overlayX=="center"?i=-e.width/2:t.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:a.x+i,y:a.y+r}}_getOverlayFit(a,e,t,i){let r=Mg(e),{x:o,y:l}=a,c=this._getOffset(i,"x"),h=this._getOffset(i,"y");c&&(o+=c),h&&(l+=h);let f=0-o,D=o+r.width-t.width,$=0-l,ie=l+r.height-t.height,fe=this._subtractOverflows(r.width,f,D),we=this._subtractOverflows(r.height,$,ie),te=fe*we;return{visibleArea:te,isCompletelyWithinViewport:r.width*r.height===te,fitsInViewportVertically:we===r.height,fitsInViewportHorizontally:fe==r.width}}_canFitWithFlexibleDimensions(a,e,t){if(this._hasFlexibleDimensions){let i=t.bottom-e.y,r=t.right-e.x,o=Sg(this._overlayRef.getConfig().minHeight),l=Sg(this._overlayRef.getConfig().minWidth),c=a.fitsInViewportVertically||o!=null&&o<=i,h=a.fitsInViewportHorizontally||l!=null&&l<=r;return c&&h}return!1}_pushOverlayOnScreen(a,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:a.x+this._previousPushAmount.x,y:a.y+this._previousPushAmount.y};let i=Mg(e),r=this._viewportRect,o=Math.max(a.x+i.width-r.width,0),l=Math.max(a.y+i.height-r.height,0),c=Math.max(r.top-t.top-a.y,0),h=Math.max(r.left-t.left-a.x,0),f=0,D=0;return i.width<=r.width?f=h||-o:f=a.x<this._getViewportMarginStart()?r.left-t.left-a.x:0,i.height<=r.height?D=c||-l:D=a.y<this._getViewportMarginTop()?r.top-t.top-a.y:0,this._previousPushAmount={x:f,y:D},{x:a.x+f,y:a.y+D}}_applyPosition(a,e){if(this._setTransformOrigin(a),this._setOverlayElementStyles(e,a),this._setBoundingBoxStyles(e,a),a.panelClass&&this._addPanelClasses(a.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(a!==this._lastPosition||!this._lastScrollVisibility||!eC(this._lastScrollVisibility,t)){let i=new Yl(a,t);this._positionChanges.next(i)}this._lastScrollVisibility=t}this._lastPosition=a,this._isInitialRender=!1}_setTransformOrigin(a){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,i=a.overlayY;a.overlayX==="center"?t="center":this._isRtl()?t=a.overlayX==="start"?"right":"left":t=a.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${i}`}_calculateBoundingBoxRect(a,e){let t=this._viewportRect,i=this._isRtl(),r,o,l;if(e.overlayY==="top")o=a.y,r=t.height-o+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-a.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-l+this._getViewportMarginTop();else{let ie=Math.min(t.bottom-a.y+t.top,a.y),fe=this._lastBoundingBoxSize.height;r=ie*2,o=a.y-ie,r>fe&&!this._isInitialRender&&!this._growAfterOpen&&(o=a.y-fe/2)}let c=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,h=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,f,D,$;if(h)$=t.width-a.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=a.x-this._getViewportMarginStart();else if(c)D=a.x,f=t.right-a.x-this._getViewportMarginEnd();else{let ie=Math.min(t.right-a.x+t.left,a.x),fe=this._lastBoundingBoxSize.width;f=ie*2,D=a.x-ie,f>fe&&!this._isInitialRender&&!this._growAfterOpen&&(D=a.x-fe/2)}return{top:o,left:D,bottom:l,right:$,width:f,height:r}}_setBoundingBoxStyles(a,e){let t=this._calculateBoundingBoxRect(a,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;i.width=tt(t.width),i.height=tt(t.height),i.top=tt(t.top)||"auto",i.bottom=tt(t.bottom)||"auto",i.left=tt(t.left)||"auto",i.right=tt(t.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(i.maxHeight=tt(r)),o&&(i.maxWidth=tt(o))}this._lastBoundingBoxSize=t,ya(this._boundingBox.style,i)}_resetBoundingBoxStyles(){ya(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ya(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(a,e){let t={},i=this._hasExactPosition(),r=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(i){let f=this._viewportRuler.getViewportScrollPosition();ya(t,this._getExactOverlayY(e,a,f)),ya(t,this._getExactOverlayX(e,a,f))}else t.position="static";let l="",c=this._getOffset(e,"x"),h=this._getOffset(e,"y");c&&(l+=`translateX(${c}px) `),h&&(l+=`translateY(${h}px)`),t.transform=l.trim(),o.maxHeight&&(i?t.maxHeight=tt(o.maxHeight):r&&(t.maxHeight="")),o.maxWidth&&(i?t.maxWidth=tt(o.maxWidth):r&&(t.maxWidth="")),ya(this._pane.style,t)}_getExactOverlayY(a,e,t){let i={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,a);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),a.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;i.bottom=`${o-(r.y+this._overlayRect.height)}px`}else i.top=tt(r.y);return i}_getExactOverlayX(a,e,t){let i={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,a);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let o;if(this._isRtl()?o=a.overlayX==="end"?"left":"right":o=a.overlayX==="end"?"right":"left",o==="right"){let l=this._document.documentElement.clientWidth;i.right=`${l-(r.x+this._overlayRect.width)}px`}else i.left=tt(r.x);return i}_getScrollVisibility(){let a=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:xg(a,t),isOriginOutsideView:Fm(a,t),isOverlayClipped:xg(e,t),isOverlayOutsideView:Fm(e,t)}}_subtractOverflows(a,...e){return e.reduce((t,i)=>t-Math.max(i,0),a)}_getNarrowedViewportRect(){let a=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+a-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:a-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(a,e){return e==="x"?a.offsetX==null?this._offsetX:a.offsetX:a.offsetY==null?this._offsetY:a.offsetY}_validatePositions(){}_addPanelClasses(a){this._pane&&rr(a).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(a=>{this._pane.classList.remove(a)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let a=this._origin;if(a instanceof F)return a.nativeElement.getBoundingClientRect();if(a instanceof Element)return a.getBoundingClientRect();let e=a.width||0,t=a.height||0;return{top:a.y,bottom:a.y+t,left:a.x,right:a.x+e,height:t,width:e}}_getContainerRect(){let a=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();a&&(e.style.display="block");let t=e.getBoundingClientRect();return a&&(e.style.display=""),t}};function ya(n,a){for(let e in a)a.hasOwnProperty(e)&&(n[e]=a[e]);return n}function Sg(n){if(typeof n!="number"&&n!=null){let[a,e]=n.split(Jw);return!e||e==="px"?parseFloat(a):null}return n||null}function Mg(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function eC(n,a){return n===a?!0:n.isOriginClipped===a.isOriginClipped&&n.isOriginOutsideView===a.isOriginOutsideView&&n.isOverlayClipped===a.isOverlayClipped&&n.isOverlayOutsideView===a.isOverlayOutsideView}var Eg="cdk-global-overlay-wrapper";function Mn(n){return new Kl}var Kl=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(a){let e=a.getConfig();this._overlayRef=a,this._width&&!e.width&&a.updateSize({width:this._width}),this._height&&!e.height&&a.updateSize({height:this._height}),a.hostElement.classList.add(Eg),this._isDisposed=!1}top(a=""){return this._bottomOffset="",this._topOffset=a,this._alignItems="flex-start",this}left(a=""){return this._xOffset=a,this._xPosition="left",this}bottom(a=""){return this._topOffset="",this._bottomOffset=a,this._alignItems="flex-end",this}right(a=""){return this._xOffset=a,this._xPosition="right",this}start(a=""){return this._xOffset=a,this._xPosition="start",this}end(a=""){return this._xOffset=a,this._xPosition="end",this}width(a=""){return this._overlayRef?this._overlayRef.updateSize({width:a}):this._width=a,this}height(a=""){return this._overlayRef?this._overlayRef.updateSize({height:a}):this._height=a,this}centerHorizontally(a=""){return this.left(a),this._xPosition="center",this}centerVertically(a=""){return this.top(a),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let a=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:i,height:r,maxWidth:o,maxHeight:l}=t,c=(i==="100%"||i==="100vw")&&(!o||o==="100%"||o==="100vw"),h=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),f=this._xPosition,D=this._xOffset,$=this._overlayRef.getConfig().direction==="rtl",ie="",fe="",we="";c?we="flex-start":f==="center"?(we="center",$?fe=D:ie=D):$?f==="left"||f==="end"?(we="flex-end",ie=D):(f==="right"||f==="start")&&(we="flex-start",fe=D):f==="left"||f==="start"?(we="flex-start",ie=D):(f==="right"||f==="end")&&(we="flex-end",fe=D),a.position=this._cssPosition,a.marginLeft=c?"0":ie,a.marginTop=h?"0":this._topOffset,a.marginBottom=this._bottomOffset,a.marginRight=c?"0":fe,e.justifyContent=we,e.alignItems=h?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let a=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Eg),t.justifyContent=t.alignItems=a.marginTop=a.marginBottom=a.marginLeft=a.marginRight=a.position="",this._overlayRef=null,this._isDisposed=!0}},Pg=(()=>{class n{_injector=s(J);constructor(){}global(){return Mn()}flexibleConnectedTo(e){return Ei(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ao=new g("OVERLAY_DEFAULT_CONFIG");function fn(n,a){n.get(ke).load(Fg);let e=n.get(Ql),t=n.get(q),i=n.get(ge),r=n.get(An),o=n.get(Me),l=n.get(ye,null,{optional:!0})||n.get(wt).createRenderer(null,null),c=new pn(a),h=n.get(Ao,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||o.value,"showPopover"in t.body?c.usePopover=a?.usePopover??h:c.usePopover=!1;let f=t.createElement("div"),D=t.createElement("div");f.id=i.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),D.appendChild(f),c.usePopover&&(D.setAttribute("popover","manual"),D.classList.add("cdk-overlay-popover"));let $=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Nm($)?$.after(D):$?.type==="parent"?$.element.appendChild(D):e.getContainerElement().appendChild(D),new hr(new $l(f,r,n),D,f,c,n.get(W),n.get(Rg),t,n.get(Rn),n.get(Og),a?.disableAnimations??n.get(Ta,null,{optional:!0})==="NoopAnimations",n.get(_t),l)}var Ng=(()=>{class n{scrollStrategies=s(Tg);_positionBuilder=s(Pg);_injector=s(J);constructor(){}create(e){return fn(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),tC=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],nC=new g("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(J);return()=>zn(n)}}),pr=(()=>{class n{elementRef=s(F);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),Lg=new g("cdk-connected-overlay-default-config"),Xl=(()=>{class n{_dir=s(Me,{optional:!0});_injector=s(J);_overlayRef;_templatePortal;_backdropSubscription=Pe.EMPTY;_attachSubscription=Pe.EMPTY;_detachSubscription=Pe.EMPTY;_positionSubscription=Pe.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(nC);_ngZone=s(W);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new A;positionChange=new A;attach=new A;detach=new A;overlayKeydown=new A;overlayOutsideClick=new A;constructor(){let e=s(Ne),t=s(Qe),i=s(Lg,{optional:!0}),r=s(Ao,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new Gt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=tC);let e=this._overlayRef=fn(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Ge(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let i=this._getOriginElement(),r=Dt(t);(!i||i!==r&&!i.contains(r))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new pn({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Ei(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof pr?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof pr?this.origin.elementRef.nativeElement:this.origin instanceof F?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Yu(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",N],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",N],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",N],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",N],push:[2,"cdkConnectedOverlayPush","push",N],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",N],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",N],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[de]})}return n})(),Mt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({providers:[Ng],imports:[V,St,Mo,Mo]})}return n})();var fr,Bg=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Lm(){if(fr)return fr;if(typeof document!="object"||!document)return fr=new Set(Bg),fr;let n=document.createElement("input");return fr=new Set(Bg.filter(a=>(n.setAttribute("type",a),n.type===a))),fr}var iC=new g("MATERIAL_ANIMATIONS"),Vg=null;function Bm(){return s(iC,{optional:!0})?.animationsDisabled||s(Ta,{optional:!0})==="NoopAnimations"?"di-disabled":(Vg??=s(or).matchMedia("(prefers-reduced-motion)").matches,Vg?"reduced-motion":"enabled")}function _e(){return Bm()!=="enabled"}function Xe(n){return n!=null&&`${n}`!="false"}var gn=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(gn||{}),Vm=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=gn.HIDDEN;constructor(a,e,t,i=!1){this._renderer=a,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},zg=ar({passive:!0,capture:!0}),zm=class{_events=new Map;addHandler(a,e,t,i){let r=this._events.get(e);if(r){let o=r.get(t);o?o.add(i):r.set(t,new Set([i]))}else this._events.set(e,new Map([[t,new Set([i])]])),a.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,zg)})}removeHandler(a,e,t){let i=this._events.get(a);if(!i)return;let r=i.get(e);r&&(r.delete(t),r.size===0&&i.delete(e),i.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,zg)))}_delegateEventHandler=a=>{let e=Dt(a);e&&this._events.get(a.type)?.forEach((t,i)=>{(i===e||i.contains(e))&&t.forEach(r=>r.handleEvent(a))})}},Ro={enterDuration:225,exitDuration:150},aC=800,jg=ar({passive:!0,capture:!0}),Hg=["mousedown","touchstart"],Ug=["mouseup","mouseleave","touchend","touchcancel"],rC=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),wa=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new zm;constructor(a,e,t,i,r){this._target=a,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=Vt(t)),r&&r.get(ke).load(rC)}fadeInRipple(a,e,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=C(C({},Ro),t.animation);t.centered&&(a=i.left+i.width/2,e=i.top+i.height/2);let o=t.radius||oC(a,e,i),l=a-i.left,c=e-i.top,h=r.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${l-o}px`,f.style.top=`${c-o}px`,f.style.height=`${o*2}px`,f.style.width=`${o*2}px`,t.color!=null&&(f.style.backgroundColor=t.color),f.style.transitionDuration=`${h}ms`,this._containerElement.appendChild(f);let D=window.getComputedStyle(f),$=D.transitionProperty,ie=D.transitionDuration,fe=$==="none"||ie==="0s"||ie==="0s, 0s"||i.width===0&&i.height===0,we=new Vm(this,f,t,fe);f.style.transform="scale3d(1, 1, 1)",we.state=gn.FADING_IN,t.persistent||(this._mostRecentTransientRipple=we);let te=null;return!fe&&(h||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ce=()=>{te&&(te.fallbackTimer=null),clearTimeout(zt),this._finishRippleTransition(we)},Ye=()=>this._destroyRipple(we),zt=setTimeout(Ye,h+100);f.addEventListener("transitionend",ce),f.addEventListener("transitioncancel",Ye),te={onTransitionEnd:ce,onTransitionCancel:Ye,fallbackTimer:zt}}),this._activeRipples.set(we,te),(fe||!h)&&this._finishRippleTransition(we),we}fadeOutRipple(a){if(a.state===gn.FADING_OUT||a.state===gn.HIDDEN)return;let e=a.element,t=C(C({},Ro),a.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",a.state=gn.FADING_OUT,(a._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let e=Vt(a);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Hg.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(a){a.type==="mousedown"?this._onMousedown(a):a.type==="touchstart"?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ug.forEach(e=>{this._triggerElement.addEventListener(e,this,jg)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===gn.FADING_IN?this._startFadeOutTransition(a):a.state===gn.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let e=a===this._mostRecentTransientRipple,{persistent:t}=a.config;a.state=gn.VISIBLE,!t&&(!e||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let e=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=gn.HIDDEN,e!==null&&(a.element.removeEventListener("transitionend",e.onTransitionEnd),a.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),a.element.remove()}_onMousedown(a){let e=wo(a),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+aC;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!Co(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=a.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let e=a.state===gn.VISIBLE||a.config.terminateOnPointerUp&&a.state===gn.FADING_IN;!a.config.persistent&&e&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(Hg.forEach(e=>n._eventManager.removeHandler(e,a,this)),this._pointerUpEventsRegistered&&(Ug.forEach(e=>a.removeEventListener(e,this,jg)),this._pointerUpEventsRegistered=!1))}};function oC(n,a,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),i=Math.max(Math.abs(a-e.top),Math.abs(a-e.bottom));return Math.sqrt(t*t+i*i)}var Oo=new g("mat-ripple-global-options"),_n=(()=>{class n{_elementRef=s(F);_animationsDisabled=_e();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(W),t=s(se),i=s(Oo,{optional:!0}),r=s(J);this._globalOptions=i||{},this._rippleRenderer=new wa(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:C(C(C({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,C(C({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,C(C({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,i){t&2&&O("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var sC={capture:!0},lC=["focus","mousedown","mouseenter","touchstart"],jm="mat-ripple-loader-uninitialized",Hm="mat-ripple-loader-class-name",$g="mat-ripple-loader-centered",Zl="mat-ripple-loader-disabled",Gg=(()=>{class n{_document=s(q);_animationsDisabled=_e();_globalRippleOptions=s(Oo,{optional:!0});_platform=s(se);_ngZone=s(W);_injector=s(J);_eventCleanups;_hosts=new Map;constructor(){let e=s(wt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>lC.map(t=>e.listen(this._document,t,this._onInteraction,sC)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(jm,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Hm))&&e.setAttribute(Hm,t.className||""),t.centered&&e.setAttribute($g,""),t.disabled&&e.setAttribute(Zl,"")}setDisabled(e,t){let i=this._hosts.get(e);i?(i.target.rippleDisabled=t,!t&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):t?e.setAttribute(Zl,""):e.removeAttribute(Zl)}_onInteraction=e=>{let t=Dt(e);if(t instanceof HTMLElement){let i=t.closest(`[${jm}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Hm)),e.append(t);let i=this._globalRippleOptions,r=this._animationsDisabled?0:i?.animation?.enterDuration??Ro.enterDuration,o=this._animationsDisabled?0:i?.animation?.exitDuration??Ro.exitDuration,l={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Zl),rippleConfig:{centered:e.hasAttribute($g),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:o}}},c=new wa(l,this._ngZone,t,this._platform,this._injector),h=!l.rippleDisabled;h&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:h}),e.removeAttribute(jm)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var dt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var cC=["mat-icon-button",""],dC=["*"],mC=new g("MAT_BUTTON_CONFIG");function Wg(n){return n==null?void 0:Ue(n)}var Um=(()=>{class n{_elementRef=s(F);_ngZone=s(W);_animationsDisabled=_e();_config=s(mC,{optional:!0});_focusMonitor=s(ct);_cleanupClick;_renderer=s(ye);_rippleLoader=s(Gg);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){s(ke).load(dt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,i){t&2&&(L("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Fe(i.color?"mat-"+i.color:""),O("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",N],disabled:[2,"disabled","disabled",N],ariaDisabled:[2,"aria-disabled","ariaDisabled",N],disabledInteractive:[2,"disabledInteractive","disabledInteractive",N],tabIndex:[2,"tabIndex","tabIndex",Wg],_tabindex:[2,"tabindex","_tabindex",Wg]}})}return n})(),Wt=(()=>{class n extends Um{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Y],attrs:cC,ngContentSelectors:dC,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(Q(),at(0,"span",0),P(1),at(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var nt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();var uC=["matButton",""],hC=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],pC=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var qg=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),it=(()=>{class n extends Um{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=fC(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,i=this._appearance?qg.get(this._appearance):null,r=qg.get(e);i&&t.remove(...i),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Y],attrs:uC,ngContentSelectors:pC,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(Q(hC),at(0,"span",0),P(1),De(2,"span",1),P(3,1),Se(),P(4,2),at(5,"span",2)(6,"span",3)),t&2&&O("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function fC(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Ii=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[nt,V]})}return n})();function gC(n,a){if(n&1){let e=Oe();d(0,"div",1)(1,"button",2),S("click",function(){be(e);let i=k();return ve(i.action())}),p(2),m()()}if(n&2){let e=k();u(2),G(" ",e.data.action," ")}}var _C=["label"];function bC(n,a){}var vC=Math.pow(2,31)-1,Fo=class{_overlayRef;instance;containerInstance;_afterDismissed=new M;_afterOpened=new M;_onAction=new M;_durationTimeoutId;_dismissedByAction=!1;constructor(a,e){this._overlayRef=e,this.containerInstance=a,a._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(a){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(a,vC))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Yg=new g("MatSnackBarData"),gr=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},yC=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),wC=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),CC=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Kg=(()=>{class n{snackBarRef=s(Fo);data=s(Yg);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,i){t&1&&(d(0,"div",0),p(1),m(),j(2,gC,3,1,"div",1)),t&2&&(u(),G(" ",i.data.message,`
`),u(),H(i.hasAction?2:-1))},dependencies:[it,yC,wC,CC],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),$m="_mat-snack-bar-enter",Gm="_mat-snack-bar-exit",xC=(()=>{class n extends Mi{_ngZone=s(W);_elementRef=s(F);_changeDetectorRef=s(ee);_platform=s(se);_animationsDisabled=_e();snackBarConfig=s(gr);_document=s(q);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(J);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new M;_onExit=new M;_onEnter=new M;_animationState="void";_live;_label;_role;_liveElementId=s(ge).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Gm?this._completeExit():e===$m&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Te(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd($m)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd($m)},200)))}exit(){return this._destroyed?K(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Te(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Gm)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Gm),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,r="mdc-snackbar__label";i.classList.toggle(r,!i.querySelector(`.${r}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let r=t[i],o=r.getAttribute("aria-owns");this._trackedModals.add(r),o?o.indexOf(e)===-1&&r.setAttribute("aria-owns",o+" "+e):r.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let i=t.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),i=e.querySelector("[aria-live]");if(t&&i){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(r=document.activeElement),t.removeAttribute("aria-hidden"),i.appendChild(t),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,i){if(t&1&&oe(kt,7)(_C,7),t&2){let r;E(r=I())&&(i._portalOutlet=r.first),E(r=I())&&(i._label=r.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,i){t&1&&S("animationend",function(o){return i.onAnimationEnd(o.animationName)})("animationcancel",function(o){return i.onAnimationEnd(o.animationName)}),t&2&&O("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[Y],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(d(0,"div",1)(1,"div",2,0)(3,"div",3),U(4,bC,0,0,"ng-template",4),m(),R(5,"div"),m()()),t&2&&(u(5),L("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[kt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),DC=new g("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new gr}),ft=(()=>{class n{_live=s(ko);_injector=s(J);_breakpointObserver=s(ha);_parentSnackBar=s(n,{optional:!0,skipSelf:!0});_defaultConfig=s(DC);_animationsDisabled=_e();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Kg;snackBarContainerComponent=xC;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",i){let r=C(C({},this._defaultConfig),i);return r.data={message:e,action:t},r.announcementMessage===e&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=J.create({parent:i||this._injector,providers:[{provide:gr,useValue:t}]}),o=new tn(this.snackBarContainerComponent,t.viewContainerRef,r),l=e.attach(o);return l.instance.snackBarConfig=t,l.instance}_attach(e,t){let i=C(C(C({},new gr),this._defaultConfig),t),r=this._createOverlay(i),o=this._attachSnackBarContainer(r,i),l=new Fo(o,r);if(e instanceof Ne){let c=new Gt(e,null,{$implicit:i.data,snackBarRef:l});l.instance=o.attachTemplatePortal(c)}else{let c=this._createInjector(i,l),h=new tn(e,void 0,c),f=o.attachComponentPortal(h);l.instance=f.instance}return this._breakpointObserver.observe(ri.HandsetPortrait).pipe(ne(r.detachments())).subscribe(c=>{r.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),i.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(l,i),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new pn;t.direction=e.direction;let i=Mn(this._injector),r=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!r||e.horizontalPosition==="end"&&r,l=!o&&e.horizontalPosition!=="center";return o?i.left("0"):l?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,fn(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return J.create({parent:i||this._injector,providers:[{provide:Fo,useValue:t},{provide:Yg,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Qg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({providers:[ft],imports:[Mt,St,Ii,Kg,V]})}return n})();var kC=["*"];var SC=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],MC=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],EC=new g("MAT_CARD_CONFIG"),Ze=(()=>{class n{appearance;constructor(){let e=s(EC,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,i){t&2&&O("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:kC,decls:1,vars:0,template:function(t,i){t&1&&(Q(),P(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),_r=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Je=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var Jl=(()=>{class n{align="start";static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,i){t&2&&O("mat-mdc-card-actions-align-end",i.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return n})(),jn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:MC,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,i){t&1&&(Q(SC),P(0),De(1,"div",0),P(2,1),Se(),P(3,2))},encapsulation:2,changeDetection:0})}return n})(),Xg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"]})}return n})();var Zg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();var Wm=class{_box;_destroyed=new M;_resizeSubject=new M;_resizeObserver;_elementObservables=new Map;constructor(a){this._box=a,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(a){return this._elementObservables.has(a)||this._elementObservables.set(a,new on(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(a,{box:this._box}),()=>{this._resizeObserver?.unobserve(a),t.unsubscribe(),this._elementObservables.delete(a)}}).pipe(le(e=>e.some(t=>t.target===a)),Uc({bufferSize:1,refCount:!0}),ne(this._destroyed))),this._elementObservables.get(a)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Jg=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=s(W);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new Wm(i)),this._observers.get(i).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var IC=["notch"],TC=["matFormFieldNotchedOutline",""],AC=["*"],e_=["iconPrefixContainer"],t_=["textPrefixContainer"],n_=["iconSuffixContainer"],i_=["textSuffixContainer"],RC=["textField"],OC=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],FC=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function PC(n,a){n&1&&R(0,"span",21)}function NC(n,a){if(n&1&&(d(0,"label",20),P(1,1),j(2,PC,1,0,"span",21),m()),n&2){let e=k(2);b("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),L("for",e._control.disableAutomaticLabeling?null:e._control.id),u(2),H(!e.hideRequiredMarker&&e._control.required?2:-1)}}function LC(n,a){if(n&1&&j(0,NC,3,5,"label",20),n&2){let e=k();H(e._hasFloatingLabel()?0:-1)}}function BC(n,a){n&1&&R(0,"div",7)}function VC(n,a){}function zC(n,a){if(n&1&&U(0,VC,0,0,"ng-template",13),n&2){k(2);let e=qe(1);b("ngTemplateOutlet",e)}}function jC(n,a){if(n&1&&(d(0,"div",9),j(1,zC,1,1,null,13),m()),n&2){let e=k();b("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),u(),H(e._forceDisplayInfixLabel()?-1:1)}}function HC(n,a){n&1&&(d(0,"div",10,2),P(2,2),m())}function UC(n,a){n&1&&(d(0,"div",11,3),P(2,3),m())}function $C(n,a){}function GC(n,a){if(n&1&&U(0,$C,0,0,"ng-template",13),n&2){k();let e=qe(1);b("ngTemplateOutlet",e)}}function WC(n,a){n&1&&(d(0,"div",14,4),P(2,4),m())}function qC(n,a){n&1&&(d(0,"div",15,5),P(2,5),m())}function YC(n,a){n&1&&R(0,"div",16)}function KC(n,a){n&1&&(d(0,"div",18),P(1,6),m())}function QC(n,a){if(n&1&&(d(0,"mat-hint",22),p(1),m()),n&2){let e=k(2);b("id",e._hintLabelId),u(),Ee(e.hintLabel)}}function XC(n,a){if(n&1&&(d(0,"div",19),j(1,QC,2,2,"mat-hint",22),P(2,7),R(3,"div",23),P(4,8),m()),n&2){let e=k();u(),H(e.hintLabel?1:-1)}}var an=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-label"]]})}return n})(),d_=new g("MatError"),Po=(()=>{class n{id=s(ge).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,i){t&2&&He("id",i.id)},inputs:{id:"id"},features:[X([{provide:d_,useExisting:n}])]})}return n})(),qm=(()=>{class n{align="start";id=s(ge).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,i){t&2&&(He("id",i.id),L("align",null),O("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),ZC=new g("MatPrefix");var m_=new g("MatSuffix"),Ca=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[X([{provide:m_,useExisting:n}])]})}return n})(),u_=new g("FloatingLabelParent"),a_=(()=>{class n{_elementRef=s(F);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Jg);_ngZone=s(W);_parent=s(u_);_resizeSubscription=new Pe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return JC(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,i){t&2&&O("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function JC(n){let a=n;if(a.offsetParent!==null)return a.scrollWidth;let e=a.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var r_="mdc-line-ripple--active",ec="mdc-line-ripple--deactivating",o_=(()=>{class n{_elementRef=s(F);_cleanupTransitionEnd;constructor(){let e=s(W),t=s(ye);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ec),e.add(r_)}deactivate(){this._elementRef.nativeElement.classList.add(ec)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(ec);e.propertyName==="opacity"&&i&&t.remove(r_,ec)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),s_=(()=>{class n{_elementRef=s(F);_ngZone=s(W);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,i){if(t&1&&oe(IC,5),t&2){let r;E(r=I())&&(i._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,i){t&2&&O("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:TC,ngContentSelectors:AC,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,i){t&1&&(Q(),at(0,"div",1),De(1,"div",2,0),P(3),Se(),at(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),No=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n})}return n})();var Lo=new g("MatFormField"),ex=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),l_="fill",tx="auto",c_="fixed",nx="translateY(-50%)",qt=(()=>{class n{_elementRef=s(F);_changeDetectorRef=s(ee);_platform=s(se);_idGenerator=s(ge);_ngZone=s(W);_defaults=s(ex,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Pr("iconPrefixContainer");_textPrefixContainerSignal=Pr("textPrefixContainer");_iconSuffixContainerSignal=Pr("iconSuffixContainer");_textSuffixContainerSignal=Pr("textSuffixContainer");_prefixSuffixContainers=Ct(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=vh(an);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Xe(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||tx}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||l_;this._appearanceSignal.set(t)}_appearanceSignal=z(l_);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||c_}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||c_}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new M;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=_e();constructor(){let e=this._defaults,t=s(Me);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ki(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ct(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Ie([void 0,void 0]),ae(()=>[t.errorState,t.userAriaDescribedBy]),Hc(),le(([[r,o],[l,c]])=>r!==l||o!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ne(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),mt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ch({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ct(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,o=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,i;if(t){let r=this._describedByIds||e;i=e.concat(t.filter(o=>o&&!r.includes(o)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,c=i?.getBoundingClientRect().width??0,h=r?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",D=`${o+l}px`,ie=`calc(${f} * (${D} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,fe=`var(--mat-mdc-form-field-label-transform, ${nx} translateX(${ie}))`,we=o+l+c+h;return[fe,we]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,i,r){if(t&1&&(hh(r,i._labelChild,an,5),xe(r,No,5)(r,ZC,5)(r,m_,5)(r,d_,5)(r,qm,5)),t&2){Zc();let o;E(o=I())&&(i._formFieldControl=o.first),E(o=I())&&(i._prefixChildren=o),E(o=I())&&(i._suffixChildren=o),E(o=I())&&(i._errorChildren=o),E(o=I())&&(i._hintChildren=o)}},viewQuery:function(t,i){if(t&1&&(ph(i._iconPrefixContainerSignal,e_,5)(i._textPrefixContainerSignal,t_,5)(i._iconSuffixContainerSignal,n_,5)(i._textSuffixContainerSignal,i_,5),oe(RC,5)(e_,5)(t_,5)(n_,5)(i_,5)(a_,5)(s_,5)(o_,5)),t&2){Zc(4);let r;E(r=I())&&(i._textField=r.first),E(r=I())&&(i._iconPrefixContainer=r.first),E(r=I())&&(i._textPrefixContainer=r.first),E(r=I())&&(i._iconSuffixContainer=r.first),E(r=I())&&(i._textSuffixContainer=r.first),E(r=I())&&(i._floatingLabel=r.first),E(r=I())&&(i._notchedOutline=r.first),E(r=I())&&(i._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,i){t&2&&O("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[X([{provide:Lo,useExisting:n},{provide:u_,useExisting:n}])],ngContentSelectors:FC,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,i){if(t&1&&(Q(OC),U(0,LC,1,1,"ng-template",null,0,na),d(2,"div",6,1),S("click",function(o){return i._control.onContainerClick(o)}),j(4,BC,1,0,"div",7),d(5,"div",8),j(6,jC,2,2,"div",9),j(7,HC,3,0,"div",10),j(8,UC,3,0,"div",11),d(9,"div",12),j(10,GC,1,1,null,13),P(11),m(),j(12,WC,3,0,"div",14),j(13,qC,3,0,"div",15),m(),j(14,YC,1,0,"div",16),m(),d(15,"div",17),j(16,KC,2,0,"div",18)(17,XC,5,1,"div",19),m()),t&2){let r;u(2),O("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),u(2),H(!i._hasOutline()&&!i._control.disabled?4:-1),u(2),H(i._hasOutline()?6:-1),u(),H(i._hasIconPrefix?7:-1),u(),H(i._hasTextPrefix?8:-1),u(2),H(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),u(2),H(i._hasTextSuffix?12:-1),u(),H(i._hasIconSuffix?13:-1),u(),H(i._hasOutline()?-1:14),u(),O("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let o=i._getSubscriptMessageType();u(),H((r=o)==="error"?16:r==="hint"?17:-1)}},dependencies:[a_,s_,Fa,o_,qm],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var xa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[sr,qt,V]})}return n})();var tc=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let a=Math.max(...this.tracker);return a>1?this.rowCount+a-1:this.rowCount}positions;update(a,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(a),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(t=>this._trackTile(t))}_trackTile(a){let e=this._findMatchingGap(a.colspan);return this._markTilePosition(e,a),this.columnIndex=e+a.colspan,new Ym(this.rowIndex,e)}_findMatchingGap(a){a>this.tracker.length;let e=-1,t=-1;do{if(this.columnIndex+a>this.tracker.length){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),t=this._findGapEndIndex(e);continue}if(e=this.tracker.indexOf(0,this.columnIndex),e==-1){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),t=this._findGapEndIndex(e);continue}t=this._findGapEndIndex(e),this.columnIndex=e+1}while(t-e<a||t==0);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let a=0;a<this.tracker.length;a++)this.tracker[a]=Math.max(0,this.tracker[a]-1)}_findGapEndIndex(a){for(let e=a+1;e<this.tracker.length;e++)if(this.tracker[e]!=0)return e;return this.tracker.length}_markTilePosition(a,e){for(let t=0;t<e.colspan;t++)this.tracker[a+t]=e.rowspan}},Ym=class{row;col;constructor(a,e){this.row=a,this.col=e}};var Km=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();var h_=["*"];var ix=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`,p_=new g("MAT_GRID_LIST"),Jm=(()=>{class n{_element=s(F);_gridList=s(p_,{optional:!0});_rowspan=1;_colspan=1;constructor(){}get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(lt(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(lt(e))}_setStyle(e,t){this._element.nativeElement.style[e]=t}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,i){t&2&&L("rowspan",i.rowspan)("colspan",i.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:h_,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(t,i){t&1&&(Q(),De(0,"div",0),P(1),Se())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var ax=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,Vo=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(a,e,t,i){this._gutterSize=f_(a),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=t,this._direction=i}getBaseTileSize(a,e){return`(${a}% - (${this._gutterSize} * ${e}))`}getTilePosition(a,e){return e===0?"0":Da(`(${a} + ${this._gutterSize}) * ${e}`)}getTileSize(a,e){return`(${a} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(a,e,t){let i=100/this._cols,r=(this._cols-1)/this._cols;this.setColStyles(a,t,i,r),this.setRowStyles(a,e,i,r)}setColStyles(a,e,t,i){let r=this.getBaseTileSize(t,i),o=this._direction==="rtl"?"right":"left";a._setStyle(o,this.getTilePosition(r,e)),a._setStyle("width",Da(this.getTileSize(r,a.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(a){return`${this._rowspan} * ${this.getTileSize(a,1)}`}getComputedHeight(){return null}},Qm=class extends Vo{fixedRowHeight;constructor(a){super(),this.fixedRowHeight=a}init(a,e,t,i){super.init(a,e,t,i),this.fixedRowHeight=f_(this.fixedRowHeight),ax.test(this.fixedRowHeight)}setRowStyles(a,e){a._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),a._setStyle("height",Da(this.getTileSize(this.fixedRowHeight,a.rowspan)))}getComputedHeight(){return["height",Da(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(a){a._setListStyle(["height",null]),a._tiles&&a._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}},Xm=class extends Vo{rowHeightRatio;baseTileHeight;constructor(a){super(),this._parseRatio(a)}setRowStyles(a,e,t,i){let r=t/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(r,i),a._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),a._setStyle("paddingTop",Da(this.getTileSize(this.baseTileHeight,a.rowspan)))}getComputedHeight(){return["paddingBottom",Da(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(a){a._setListStyle(["paddingBottom",null]),a._tiles.forEach(e=>{e._setStyle("marginTop",null),e._setStyle("paddingTop",null)})}_parseRatio(a){let e=a.split(":");e.length,this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}},Zm=class extends Vo{setRowStyles(a,e){let t=100/this._rowspan,i=(this._rows-1)/this._rows,r=this.getBaseTileSize(t,i);a._setStyle("top",this.getTilePosition(r,e)),a._setStyle("height",Da(this.getTileSize(r,a.rowspan)))}reset(a){a._tiles&&a._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}};function Da(n){return`calc(${n})`}function f_(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var rx="fit",g_=(()=>{class n{_element=s(F);_dir=s(Me,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;constructor(){}get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(lt(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??""}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let t=`${e??""}`;t!==this._rowHeight&&(this._rowHeight=t,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===rx?this._tileStyler=new Zm:e&&e.indexOf(":")>-1?this._tileStyler=new Xm(e):this._tileStyler=new Qm(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new tc);let e=this._tileCoordinator,t=this._tiles.filter(r=>!r._gridList||r._gridList===this),i=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,t),this._tileStyler.init(this.gutterSize,e,this.cols,i),t.forEach((r,o)=>{let l=e.positions[o];this._tileStyler.setStyle(r,l.row,l.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-grid-list"]],contentQueries:function(t,i,r){if(t&1&&xe(r,Jm,5),t&2){let o;E(o=I())&&(i._tiles=o)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,i){t&2&&L("cols",i.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[X([{provide:p_,useExisting:n}])],ngContentSelectors:h_,decls:2,vars:0,template:function(t,i){t&1&&(Q(),De(0,"div"),P(1),Se())},styles:[ix],encapsulation:2,changeDetection:0})}return n})(),__=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Km,V,Km]})}return n})();function b_(n){return Error(`Unable to find icon with the name "${n}"`)}function sx(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function v_(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function y_(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var ci=class{url;svgText;options;svgElement=null;constructor(a,e,t){this.url=a,this.svgText=e,this.options=t}},C_=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,i,r){this._httpClient=e,this._sanitizer=t,this._errorHandler=r,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,r){return this._addSvgIconConfig(e,t,new ci(i,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,r){let o=this._sanitizer.sanitize(Bt.HTML,i);if(!o)throw y_(i);let l=ma(o);return this._addSvgIconConfig(e,t,new ci("",l,r))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new ci(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let r=this._sanitizer.sanitize(Bt.HTML,t);if(!r)throw y_(t);let o=ma(r);return this._addSvgIconSetConfig(e,new ci("",o,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Bt.RESOURCE_URL,e);if(!t)throw v_(e);let i=this._cachedIconsByUrl.get(t);return i?K(nc(i)):this._loadSvgIconFromConfig(new ci(e,null)).pipe(vt(r=>this._cachedIconsByUrl.set(t,r)),ae(r=>nc(r)))}getNamedSvgIcon(e,t=""){let i=w_(t,e),r=this._svgIconConfigs.get(i);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(t,e),r)return this._svgIconConfigs.set(i,r),this._getSvgFromConfig(r);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):Gn(b_(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?K(nc(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ae(t=>nc(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return K(i);let r=t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(vn(l=>{let h=`Loading icon set URL: ${this._sanitizer.sanitize(Bt.RESOURCE_URL,o.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(h)),K(null)})));return Zo(r).pipe(ae(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw b_(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let r=t[i];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(r),l=this._extractSvgIconFromSet(o,e,r.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(vt(t=>e.svgText=t),ae(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?K(null):this._fetchIcon(e).pipe(vt(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let r=e.querySelector(`[id="${t}"]`);if(!r)return null;let o=r.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,i);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),i);let l=this._svgElementFromString(ma("<svg></svg>"));return l.appendChild(o),this._setSvgAttributes(l,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(ma("<svg></svg>")),i=e.attributes;for(let r=0;r<i.length;r++){let{name:o,value:l}=i[r];o!=="id"&&t.setAttribute(o,l)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[r].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,r=i?.withCredentials??!1;if(!this._httpClient)throw sx();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(Bt.RESOURCE_URL,t);if(!o)throw v_(t);let l=this._inProgressUrlFetches.get(o);if(l)return l;let c=this._httpClient.get(o,{responseType:"text",withCredentials:r}).pipe(ae(h=>ma(h)),$i(()=>this._inProgressUrlFetches.delete(o)),qu());return this._inProgressUrlFetches.set(o,c),c}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(w_(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let r=this._resolvers[i](t,e);if(r)return lx(r)?new ci(r.url,null,r.options):new ci(r,null)}}static \u0275fac=function(t){return new(t||n)(Z(Va,8),Z(Kr),Z(q,8),Z(Yi))};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nc(n){return n.cloneNode(!0)}function w_(n,a){return n+":"+a}function lx(n){return!!(n.url&&n.options)}var cx=["*"],dx=new g("MAT_ICON_DEFAULT_OPTIONS"),mx=new g("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(q),a=n?n.location:null;return{getPathname:()=>a?a.pathname+a.search:""}}}),x_=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ux=x_.map(n=>`[${n}]`).join(", "),hx=/^url\(['"]?#(.*?)['"]?\)$/,Hn=(()=>{class n{_elementRef=s(F);_iconRegistry=s(C_);_location=s(mx);_errorHandler=s(Yi);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Pe.EMPTY;constructor(){let e=s(new rt("aria-hidden"),{optional:!0}),t=s(dx,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,r)=>{i.forEach(o=>{r.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(ux),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<t.length;r++)x_.forEach(o=>{let l=t[r],c=l.getAttribute(o),h=c?c.match(hx):null;if(h){let f=i.get(l);f||(f=[],i.set(l,f)),f.push({name:o,value:h[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(ze(1)).subscribe(r=>this._setSvgElement(r),r=>{let o=`Error retrieving icon ${t}:${i}! ${r.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(L("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Fe(i.color?"mat-"+i.color:""),O("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",N],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:cx,decls:1,vars:0,template:function(t,i){t&1&&(Q(),P(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),ic=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();var px=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),fx={passive:!0},D_=(()=>{class n{_platform=s(se);_ngZone=s(W);_renderer=s(wt).createRenderer(null,null);_styleLoader=s(ke);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return It;this._styleLoader.load(px);let t=Vt(e),i=this._monitoredElements.get(t);if(i)return i.subject;let r=new M,o="cdk-text-field-autofilled",l=h=>{h.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!0}))):h.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,fx)));return this._monitoredElements.set(t,{subject:r,unlisten:c}),r}stopMonitoring(e){let t=Vt(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var k_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({})}return n})();var S_=new g("MAT_INPUT_VALUE_ACCESSOR");var Un=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var br=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(a,e,t,i,r){this._defaultMatcher=a,this.ngControl=e,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=r}updateErrorState(){let a=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(i,e)??!1;r!==a&&(this.errorState=r,this._stateChanges.next())}};var gx=["button","checkbox","file","hidden","image","radio","range","reset","submit"],_x=new g("MAT_INPUT_CONFIG"),$n=(()=>{class n{_elementRef=s(F);_platform=s(se);ngControl=s(Dn,{optional:!0,self:!0});_autofillMonitor=s(D_);_ngZone=s(W);_formField=s(Lo,{optional:!0});_renderer=s(ye);_uid=s(ge).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(_x,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new M;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Xe(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Be.required)??!1}set required(e){this._required=Xe(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Lm().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Xe(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Lm().has(e));constructor(){let e=s(vo,{optional:!0}),t=s(en,{optional:!0}),i=s(Un),r=s(S_,{optional:!0,self:!0}),o=this._elementRef.nativeElement,l=o.nodeName.toLowerCase();r?hi(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new br(i,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=o.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Ki(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){gx.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,i){t&1&&S("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(He("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),L("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),O("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",N]},exportAs:["matInput"],features:[X([{provide:No,useExisting:n}]),de]})}return n})(),M_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[xa,xa,k_,V]})}return n})();var jo=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new M;constructor(a=!1,e,t=!0,i){this._multiple=a,this._emitChanges=t,this.compareWith=i,e&&e.length&&(a?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(r=>this._getConcreteValue(r)));a.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var ka=(()=>{class n{_listeners=[];notify(e,t){for(let i of this._listeners)i(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var rc=class{applyChanges(a,e,t,i,r){a.forEachOperation((o,l,c)=>{let h,f;if(o.previousIndex==null){let D=t(o,l,c);h=e.createEmbeddedView(D.templateRef,D.context,D.index),f=Sn.INSERTED}else c==null?(e.remove(l),f=Sn.REMOVED):(h=e.get(l),e.move(h,c),f=Sn.MOVED);r&&r({context:h?.context,operation:f,record:o})})}detach(){}};var oc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();var sc=(()=>{class n{_animationsDisabled=_e();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&O("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var lc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();var E_=["*"],I_=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,bx=["unscopedContent"],vx=["text"],yx=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],wx=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Cx=new g("ListOption"),xx=(()=>{class n{_elementRef=s(F);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Dx=(()=>{class n{_elementRef=s(F);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),kx=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),T_=(()=>{class n{_listOption=s(Cx,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,hostVars:4,hostBindings:function(t,i){t&2&&O("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),Sx=(()=>{class n extends T_{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Y]})}return n})(),Mx=(()=>{class n extends T_{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Y]})}return n})(),Ex=new g("MAT_LIST_CONFIG"),Ho=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Xe(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Xe(e))}_disabled=z(!1);_defaultOptions=s(Ex,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,hostVars:1,hostBindings:function(t,i){t&2&&L("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Ix=(()=>{class n{_elementRef=s(F);_ngZone=s(W);_listBase=s(Ho,{optional:!0});_platform=s(se);_hostElement;_isButtonElement;_noopAnimations=_e();_avatars;_icons;set lines(e){this._explicitLines=lt(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Xe(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Xe(e))}_disabled=z(!1);_subscriptions=new Pe;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){s(ke).load(dt);let e=s(Oo,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new wa(this,this._ngZone,this._hostElement,this._platform,s(J)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(mt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let r=this._titles.length===0&&t===1;i.classList.toggle("mdc-list-item__primary-text",r),i.classList.toggle("mdc-list-item__secondary-text",!r)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,contentQueries:function(t,i,r){if(t&1&&xe(r,Sx,4)(r,Mx,4),t&2){let o;E(o=I())&&(i._avatars=o),E(o=I())&&(i._icons=o)}},hostVars:4,hostBindings:function(t,i){t&2&&(L("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),O("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var A_=(()=>{class n extends Ho{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[X([{provide:Ho,useExisting:n}]),Y],ngContentSelectors:E_,decls:1,vars:0,template:function(t,i){t&1&&(Q(),P(0))},styles:[I_],encapsulation:2,changeDetection:0})}return n})(),cc=(()=>{class n extends Ix{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Xe(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,i,r){if(t&1&&xe(r,Dx,5)(r,xx,5)(r,kx,5),t&2){let o;E(o=I())&&(i._lines=o),E(o=I())&&(i._titles=o),E(o=I())&&(i._meta=o)}},viewQuery:function(t,i){if(t&1&&oe(bx,5)(vx,5),t&2){let r;E(r=I())&&(i._unscopedContent=r.first),E(r=I())&&(i._itemText=r.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(t,i){t&2&&(L("aria-current",i._getAriaCurrent()),O("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Y],ngContentSelectors:wx,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(t,i){t&1&&(Q(yx),P(0),d(1,"span",1),P(2,1),P(3,2),d(4,"span",2,0),S("cdkObserveContent",function(){return i._updateItemLines(!0)}),P(6,3),m()(),P(7,4),P(8,5),R(9,"div",3))},dependencies:[lg],encapsulation:2,changeDetection:0})}return n})();var R_=(()=>{class n extends Ho{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[X([{provide:Ho,useExisting:n}]),Y],ngContentSelectors:E_,decls:1,vars:0,template:function(t,i){t&1&&(Q(),P(0))},styles:[I_],encapsulation:2,changeDetection:0})}return n})();var O_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[sr,nt,lc,V,oc]})}return n})();var P_=(()=>{class n{constructor(e,t,i){this.fb=e,this.apiService=t,this.snackBar=i,this.hidePwdContent=!0,this.registerForm=e.group({firstName:e.control("",[Be.required]),lastName:e.control("",[Be.required]),email:e.control("",[Be.required]),mobileNumber:e.control("",[Be.required]),password:e.control("",[Be.required]),rpassword:e.control("",[Be.required])})}register(){let e={firstName:this.registerForm.get("firstName")?.value,lastName:this.registerForm.get("lastName")?.value,email:this.registerForm.get("email")?.value,mobileNumber:this.registerForm.get("mobileNumber")?.value,password:this.registerForm.get("password")?.value};this.apiService.register(e).subscribe({next:t=>{this.snackBar.open(t,"OK")}})}static{this.\u0275fac=function(t){return new(t||n)(B(ki),B(Ve),B(ft))}}static{this.\u0275cmp=_({type:n,selectors:[["register"]],standalone:!1,decls:85,vars:6,consts:[[1,"register-form"],["cols","2","rowHeight","100px","gutterSize","10px",3,"formGroup"],["color","accent"],["matInput","","formControlName","firstName"],["matInput","","formControlName","lastName"],["colspan","2"],["matInput","","formControlName","email"],["matInput","","formControlName","mobileNumber"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["matInput","","formControlName","rpassword",3,"type"],["mat-raised-button","","color","accent",3,"click","disabled"],["mat-stroked-button","","color","accent","routerLink","/login"],[1,"library-info"]],template:function(t,i){t&1&&(d(0,"div",0)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title"),p(4,"Create Account"),m()(),d(5,"mat-card-content")(6,"mat-grid-list",1)(7,"mat-grid-tile")(8,"mat-form-field",2)(9,"mat-label"),p(10,"First Name"),m(),R(11,"input",3),d(12,"mat-error"),p(13,"Field is required!"),m()()(),d(14,"mat-grid-tile")(15,"mat-form-field",2)(16,"mat-label"),p(17,"Last Name"),m(),R(18,"input",4),d(19,"mat-error"),p(20,"Field is required!"),m()()(),d(21,"mat-grid-tile",5)(22,"mat-form-field",2)(23,"mat-label"),p(24,"Email"),m(),R(25,"input",6),d(26,"mat-error"),p(27,"Field is required!"),m()()(),d(28,"mat-grid-tile",5)(29,"mat-form-field",2)(30,"mat-label"),p(31,"Mobile Number"),m(),R(32,"input",7),d(33,"mat-error"),p(34,"Field is required!"),m()()(),d(35,"mat-grid-tile")(36,"mat-form-field",2)(37,"mat-label"),p(38,"Password"),m(),R(39,"input",8),d(40,"button",9),S("click",function(){return i.hidePwdContent=!i.hidePwdContent}),d(41,"mat-icon"),p(42),m()(),d(43,"mat-error"),p(44,"Field is required!"),m()()(),d(45,"mat-grid-tile")(46,"mat-form-field",2)(47,"mat-label"),p(48,"Repeat Password"),m(),R(49,"input",10),d(50,"button",9),S("click",function(){return i.hidePwdContent=!i.hidePwdContent}),d(51,"mat-icon"),p(52),m()(),d(53,"mat-error"),p(54,"Field is required!"),m()()()()(),d(55,"mat-card-actions")(56,"button",11),S("click",function(){return i.register()}),p(57,"Register"),m()(),d(58,"mat-card-actions")(59,"h4"),p(60,"Already have an account?"),m(),d(61,"a",12),p(62,"Login"),m()()()(),d(63,"div",13)(64,"h1"),p(65,"Information"),m(),d(66,"mat-list")(67,"mat-list-item")(68,"p"),p(69," Once you create account, approval request will be sent to admin. If that is approved, your account will be created. "),m()(),d(70,"mat-list-item")(71,"p"),p(72," You can have maximun 3 books ordered that have not been returned. "),m()(),d(73,"mat-list-item")(74,"p"),p(75," You can keep a book with you for maximun 10 days. "),m()(),d(76,"mat-list-item")(77,"p"),p(78,"If book is not returned after 10 days, you will receive an email. "),m()(),d(79,"mat-list-item")(80,"p"),p(81," After 10th day, a fine of 50Rs will be imposed everyday and on every book that has not been returned. This fine will be sent you in the email everyday. "),m()(),d(82,"mat-list-item")(83,"p"),p(84," If your fine exceeds 500Rs or the book is damaged, Admin can block your account. "),m()()()()),t&2&&(u(6),b("formGroup",i.registerForm),u(33),b("type",i.hidePwdContent?"password":"text"),u(3),G(" ",i.hidePwdContent?"visibility_off":"visibility_on"," "),u(7),b("type",i.hidePwdContent?"password":"text"),u(3),G(" ",i.hidePwdContent?"visibility_off":"visibility_on"," "),u(4),b("disabled",i.registerForm.invalid))},dependencies:[it,Wt,Ze,Jl,Je,jn,_r,qt,an,Po,Ca,g_,Jm,Hn,$n,A_,cc,bi,Bn,xi,Di,en,ii],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;height:100%;width:90%}.register-form[_ngcontent-%COMP%]{width:600px}.register-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{display:flex;justify-content:center}.register-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:2rem;color:#69f0ae}.register-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.register-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:auto;width:80%}.register-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;padding-right:1rem}.library-info[_ngcontent-%COMP%]{width:400px;padding:1rem;border-left:1px solid white}.library-info[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{height:auto}.library-info[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-style:italic;text-align:justify;white-space:normal}"]})}}return n})();var N_=(()=>{class n{constructor(e,t,i){this.apiService=t,this.snackBar=i,this.hidePassword=!0,this.loginForm=e.group({email:e.control("",[Be.required]),password:e.control("",[Be.required])})}login(){let e={email:this.loginForm.get("email")?.value,password:this.loginForm.get("password")?.value};this.apiService.login(e).subscribe({next:t=>{if(t=="Invalid_Credentials")this.snackBar.open("Credential are invalid!","OK");else if(t=="UNAPROVED")this.snackBar.open("Your Account is not approved yet by Admin. Please wait for admin to approve your account!","OK");else if(t=="BLOCKED")this.snackBar.open("Your Account is blocked. Please contact admin!","OK");else try{localStorage.setItem("access_token",t),this.apiService.userStatus.next("loggedIn")}catch(i){console.error("Error saving to localStorage:",i)}}})}static{this.\u0275fac=function(t){return new(t||n)(B(ki),B(Ve),B(ft))}}static{this.\u0275cmp=_({type:n,selectors:[["login"]],standalone:!1,decls:28,vars:4,consts:[[3,"formGroup"],["color","accent"],["matInput","","formControlName","email"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","","color","accent",3,"click","disabled"],["mat-stroked-button","","color","accent","routerLink","/register"]],template:function(t,i){t&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),p(3,"Login Form"),m()(),d(4,"mat-card-content",0)(5,"mat-form-field",1)(6,"mat-label"),p(7,"Email"),m(),R(8,"input",2),d(9,"mat-error"),p(10," Field is required. "),m()(),d(11,"mat-form-field",1)(12,"mat-label"),p(13,"Password"),m(),R(14,"input",3),d(15,"button",4),S("click",function(){return i.hidePassword=!i.hidePassword}),d(16,"mat-icon"),p(17),m()(),d(18,"mat-error"),p(19," Field is required. "),m()()(),d(20,"mat-card-actions")(21,"button",5),S("click",function(){return i.login()}),p(22,"Login"),m()(),d(23,"mat-card-actions")(24,"h4"),p(25,"Don't have an account?"),m(),d(26,"a",6),p(27,"Register"),m()()()),t&2&&(u(4),b("formGroup",i.loginForm),u(10),b("type",i.hidePassword?"password":"text"),u(3),G(" ",i.hidePassword?"visibility_off":"Visibility_on"," "),u(4),b("disabled",i.loginForm.invalid))},dependencies:[it,Wt,Ze,Jl,Je,jn,_r,qt,an,Po,Ca,Hn,$n,bi,Bn,xi,Di,en,ii],styles:["[_nghost-%COMP%]{display:block;width:400px}mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:2rem;color:#69f0ae}mat-card[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;padding-top:1rem}mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:auto;width:80%}mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;padding-right:1rem}"]})}}return n})();var eu=new g("CdkAccordion"),L_=(()=>{class n{_stateChanges=new M;_openCloseAllActions=new M;id=s(ge).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",N]},exportAs:["cdkAccordion"],features:[X([{provide:eu,useExisting:n}]),de]})}return n})(),B_=(()=>{class n{accordion=s(eu,{optional:!0,skipSelf:!0});_changeDetectorRef=s(ee);_expansionDispatcher=s(ka);_openCloseAllSubscription=Pe.EMPTY;closed=new A;opened=new A;destroyed=new A;expandedChange=new A;id=s(ge).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=z(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",N],disabled:[2,"disabled","disabled",N]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[X([{provide:eu,useValue:void 0}])]})}return n})(),V_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({})}return n})();var Tx=["body"],Ax=["bodyWrapper"],Rx=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Ox=["mat-expansion-panel-header","*","mat-action-row"];function Fx(n,a){}var Px=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Nx=["mat-panel-title","mat-panel-description","*"];function Lx(n,a){n&1&&(De(0,"span",1),Ke(),De(1,"svg",2),at(2,"path",3),Se()())}var tu=new g("MAT_ACCORDION"),z_=new g("MAT_EXPANSION_PANEL"),Bx=(()=>{class n{_template=s(Ne);_expansionPanel=s(z_,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),j_=new g("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),nu=(()=>{class n extends B_{_viewContainerRef=s(Qe);_animationsDisabled=_e();_document=s(q);_ngZone=s(W);_elementRef=s(F);_renderer=s(ye);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new A;afterCollapse=new A;_inputChanges=new M;accordion=s(tu,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=s(ge).getId("mat-expansion-panel-header-");constructor(){super();let e=s(j_,{optional:!0});this._expansionDispatcher=s(ka),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Ie(null),le(()=>this.expanded&&!this._portal),ze(1)).subscribe(()=>{this._portal=new Gt(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,i,r){if(t&1&&xe(r,Bx,5),t&2){let o;E(o=I())&&(i._lazyContent=o.first)}},viewQuery:function(t,i){if(t&1&&oe(Tx,5)(Ax,5),t&2){let r;E(r=I())&&(i._body=r.first),E(r=I())&&(i._bodyWrapper=r.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,i){t&2&&O("mat-expanded",i.expanded)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",N],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[X([{provide:tu,useValue:void 0},{provide:z_,useExisting:n}]),Y,de],ngContentSelectors:Ox,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&(Q(Rx),P(0),d(1,"div",2,0)(3,"div",3,1)(5,"div",4),P(6,1),U(7,Fx,0,0,"ng-template",5),m(),P(8,2),m()()),t&2&&(u(),L("inert",i.expanded?null:""),u(2),b("id",i.id),L("aria-labelledby",i._headerId),u(4),b("cdkPortalOutlet",i._portal))},dependencies:[kt],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return n})();var iu=(()=>{class n{panel=s(nu,{host:!0});_element=s(F);_focusMonitor=s(ct);_changeDetectorRef=s(ee);_parentChangeSubscription=Pe.EMPTY;constructor(){s(ke).load(dt);let e=this.panel,t=s(j_,{optional:!0}),i=s(new rt("tabindex"),{optional:!0}),r=e.accordion?e.accordion._stateChanges.pipe(le(o=>!!(o.hideToggle||o.togglePosition))):It;this.tabIndex=parseInt(i||"")||0,this._parentChangeSubscription=mt(e.opened,e.closed,r,e._inputChanges.pipe(le(o=>!!(o.hideToggle||o.disabled||o.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(le(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Ge(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,i){t&1&&S("click",function(){return i._toggle()})("keydown",function(o){return i._keydown(o)}),t&2&&(L("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),et("height",i._getHeaderHeight()),O("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ue(e)]},ngContentSelectors:Nx,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,i){t&1&&(Q(Px),De(0,"span",0),P(1),P(2,1),P(3,2),Se(),j(4,Lx,3,0,"span",1)),t&2&&(O("mat-content-hide-toggle",!i._showToggle()),u(4),H(i._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return n})(),H_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return n})(),U_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})(),$_=(()=>{class n extends L_{_keyManager;_ownHeaders=new Qt;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Ie(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new _a(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,i,r){if(t&1&&xe(r,iu,5),t&2){let o;E(o=I())&&(i._headers=o)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,i){t&2&&O("mat-accordion-multi",i.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",N],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[X([{provide:tu,useExisting:n}]),Y]})}return n})(),G_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V_,St,V]})}return n})();var zx=[[["caption"]],[["colgroup"],["col"]],"*"],jx=["caption","colgroup, col","*"];function Hx(n,a){n&1&&P(0,2)}function Ux(n,a){n&1&&(d(0,"thead",0),je(1,1),m(),d(2,"tbody",0),je(3,2)(4,3),m(),d(5,"tfoot",0),je(6,4),m())}function $x(n,a){n&1&&je(0,1)(1,2)(2,3)(3,4)}var In=new g("CDK_TABLE");var uc=(()=>{class n{template=s(Ne);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),hc=(()=>{class n{template=s(Ne);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),Y_=(()=>{class n{template=s(Ne);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),vr=(()=>{class n{_table=s(In,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,i,r){if(t&1&&xe(r,uc,5)(r,hc,5)(r,Y_,5),t&2){let o;E(o=I())&&(i.cell=o.first),E(o=I())&&(i.headerCell=o.first),E(o=I())&&(i.footerCell=o.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",N],stickyEnd:[2,"stickyEnd","stickyEnd",N]}})}return n})(),mc=class{constructor(a,e){e.nativeElement.classList.add(...a._columnCssClassName)}},K_=(()=>{class n extends mc{constructor(){super(s(vr),s(F))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[Y]})}return n})();var Q_=(()=>{class n extends mc{constructor(){let e=s(vr),t=s(F);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute("role",i)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[Y]})}return n})();var ru=(()=>{class n{template=s(Ne);_differs=s(Kn);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof $o?e.headerCell.template:this instanceof ou?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,features:[de]})}return n})(),$o=(()=>{class n extends ru{_table=s(In,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(Ne),s(Kn))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",N]},features:[Y,de]})}return n})(),ou=(()=>{class n extends ru{_table=s(In,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(Ne),s(Kn))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",N]},features:[Y,de]})}return n})(),pc=(()=>{class n extends ru{_table=s(In,{optional:!0});when;constructor(){super(s(Ne),s(Kn))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[Y]})}return n})(),Sa=(()=>{class n{_viewContainer=s(Qe);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),su=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&je(0,0)},dependencies:[Sa],encapsulation:2})}return n})();var lu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&je(0,0)},dependencies:[Sa],encapsulation:2})}return n})(),X_=(()=>{class n{templateRef=s(Ne);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),W_=["top","bottom","left","right"],au=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(a=>this._updateCachedSizes(a)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(a,e,t=!0,i=!0,r,o,l){this._isNativeHtmlTable=a,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=r,this._positionListener=o,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(a,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(a);let t=[];for(let i of a)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));Te({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(a,e,t,i=!0,r=!0){if(!a.length||!this._isBrowser||!(e.some(te=>te)||t.some(te=>te))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let o=a[0],l=o.children.length,c=this.direction==="rtl",h=c?"right":"left",f=c?"left":"right",D=e.lastIndexOf(!0),$=t.indexOf(!0),ie,fe,we;r&&this._updateStickyColumnReplayQueue({rows:[...a],stickyStartStates:[...e],stickyEndStates:[...t]}),Te({earlyRead:()=>{ie=this._getCellWidths(o,i),fe=this._getStickyStartColumnPositions(ie,e),we=this._getStickyEndColumnPositions(ie,t)},write:()=>{for(let te of a)for(let ce=0;ce<l;ce++){let Ye=te.children[ce];e[ce]&&this._addStickyStyle(Ye,h,fe[ce],ce===D),t[ce]&&this._addStickyStyle(Ye,f,we[ce],ce===$)}this._positionListener&&ie.some(te=>!!te)&&(this._positionListener.stickyColumnsUpdated({sizes:D===-1?[]:ie.slice(0,D+1).map((te,ce)=>e[ce]?te:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:$===-1?[]:ie.slice($).map((te,ce)=>t[ce+$]?te:null).reverse()}))}},{injector:this._tableInjector})}stickRows(a,e,t){if(!this._isBrowser)return;let i=t==="bottom"?a.slice().reverse():a,r=t==="bottom"?e.slice().reverse():e,o=[],l=[],c=[];Te({earlyRead:()=>{for(let h=0,f=0;h<i.length;h++){if(!r[h])continue;o[h]=f;let D=i[h];c[h]=this._isNativeHtmlTable?Array.from(D.children):[D];let $=this._retrieveElementSize(D).height;f+=$,l[h]=$}},write:()=>{let h=r.lastIndexOf(!0);for(let f=0;f<i.length;f++){if(!r[f])continue;let D=o[f],$=f===h;for(let ie of c[f])this._addStickyStyle(ie,t,D,$)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:o,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:o,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(a,e){this._isNativeHtmlTable&&Te({write:()=>{let t=a.querySelector("tfoot");t&&(e.some(i=>!i)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(a,e){if(!a.classList.contains(this._stickCellCss))return;for(let i of e)a.style[i]="",a.classList.remove(this._borderCellCss[i]);W_.some(i=>e.indexOf(i)===-1&&a.style[i])?a.style.zIndex=this._getCalculatedZIndex(a):(a.style.zIndex="",this._needsPositionStickyOnElement&&(a.style.position=""),a.classList.remove(this._stickCellCss))}_addStickyStyle(a,e,t,i){a.classList.add(this._stickCellCss),i&&a.classList.add(this._borderCellCss[e]),a.style[e]=`${t}px`,a.style.zIndex=this._getCalculatedZIndex(a),this._needsPositionStickyOnElement&&(a.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(a){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of W_)a.style[i]&&(t+=e[i]);return t?`${t}`:""}_getCellWidths(a,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=a.children;for(let r=0;r<i.length;r++){let o=i[r];t.push(this._retrieveElementSize(o).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(a,e){let t=[],i=0;for(let r=0;r<a.length;r++)e[r]&&(t[r]=i,i+=a[r]);return t}_getStickyEndColumnPositions(a,e){let t=[],i=0;for(let r=a.length;r>0;r--)e[r]&&(t[r]=i,i+=a[r]);return t}_retrieveElementSize(a){let e=this._elemSizeCache.get(a);if(e)return e;let t=a.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(a,i),this._resizeObserver.observe(a,{box:"border-box"})),i}_updateStickyColumnReplayQueue(a){this._removeFromStickyColumnReplayQueue(a.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(a)}_removeFromStickyColumnReplayQueue(a){let e=new Set(a);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(a){let e=!1;for(let t of a){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&Gx(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Gx(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(a=>n.classList.contains(a))}var Uo=new g("STICKY_POSITIONING_LISTENER");var cu=(()=>{class n{viewContainer=s(Qe);elementRef=s(F);constructor(){let e=s(In);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","rowOutlet",""]]})}return n})(),du=(()=>{class n{viewContainer=s(Qe);elementRef=s(F);constructor(){let e=s(In);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),mu=(()=>{class n{viewContainer=s(Qe);elementRef=s(F);constructor(){let e=s(In);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),uu=(()=>{class n{viewContainer=s(Qe);elementRef=s(F);constructor(){let e=s(In);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),hu=(()=>{class n{_differs=s(Kn);_changeDetectorRef=s(ee);_elementRef=s(F);_dir=s(Me,{optional:!0});_platform=s(se);_viewRepeater;_viewportRuler=s($t);_injector=s(J);_virtualScrollViewport=s(wg,{optional:!0,host:!0});_positionListener=s(Uo,{optional:!0})||s(Uo,{optional:!0,skipSelf:!0});_document=s(q);_data;_renderedRange;_onDestroy=new M;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new M;_footerRowStickyUpdates=new M;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new M;_dataStream=new M;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new A;viewChange=new Et({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){s(new rt("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(ne(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Ul:new rc,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Hl(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,r,o)=>this._getEmbeddedViewArgs(i.item,o),i=>i.item.data,i=>{i.operation===Sn.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let r=t.get(i.currentIndex);r.context.$implicit=i.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=q_(this._headerRowOutlet,"thead");i&&(i.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=q_(this._footerRowOutlet,"tfoot");i&&(i.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,o)=>{this._addStickyColumnStyles([r],this._headerRowDefs[o])}),this._rowDefs.forEach(r=>{let o=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===r&&o.push(t[l]);this._addStickyColumnStyles(o,r)}),i.forEach((r,o)=>{this._addStickyColumnStyles([r],this._footerRowDefs[o])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<t;r++){let o=this._data[r],l=this._getRenderRowsForData(o,r,i.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let c=0;c<l.length;c++){let h=l[c],f=this._cachedRenderRowsMap.get(h.data);f.has(h.rowDef)?f.get(h.rowDef).push(h):f.set(h.rowDef,[h]),e.push(h)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(o=>{let l=i&&i.has(o)?i.get(o):[];if(l.length){let c=l.shift();return c.dataIndex=t,c}else return{data:e,rowDef:o,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),dc(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=dc(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=dc(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=dc(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(o,l)=>{let c=!!l.getColumnsDiff();return o||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||i||r}_switchDataSource(e){this._data=[],Hl(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Hl(this.dataSource)?e=this.dataSource.connect(this):Ea(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=K(this.dataSource)),this._renderChangeSubscription=Wn([e,this.viewChange]).pipe(ne(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(l=>{let c=this._columnDefsByName.get(l);return c}),r=i.map(l=>l.sticky),o=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,o,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let r=e.viewContainer.get(i);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(o=>o.when&&o.when(t,e))||this._defaultRowDef;r&&i.push(r)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,r={$implicit:e.data};return{templateRef:i.template,context:r,index:t}}_renderRow(e,t,i,r={}){let o=e.viewContainer.createEmbeddedView(t.template,r,i);return this._renderCellTemplateForItem(t,r),o}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))Sa.mostRecentCellOutlet&&Sa.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let o=e.get(t).context;o.count=i,o.first=t===0,o.last=t===i-1,o.even=t%2===0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[t].dataIndex,o.renderIndex=t):o.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new au(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:K()).pipe(ne(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?Lc:Nc;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Ir(0,t),ne(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,r)=>this._measureRangeSize(i,r)}),Wn([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(ne(this._onDestroy)).subscribe(([i,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let o=0;o<r.elements.length;o++){let l=r.elements[o];if(l){let c=r.offsets[o],h=i!==0?Math.max(i-c,c):-c;for(let f of l)f.style.top=`${-h}px`}}}),Wn([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(ne(this._onDestroy)).subscribe(([i,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let o=0;o<r.elements.length;o++){let l=r.elements[o];if(l)for(let c of l)c.style.bottom=`${i+r.offsets[o]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let r=i.createEmbeddedView(e.templateRef),o=r.rootNodes[0];if(r.rootNodes.length===1&&o?.nodeType===this._document.ELEMENT_NODE){o.setAttribute("role","row"),o.classList.add(...e._contentClassNames);let l=o.querySelectorAll(e._cellSelector);for(let c=0;c<l.length;c++)l[c].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let i=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<i.start||e.end>i.end;let o=e.start-i.start,l=e.end-e.start,c,h;for(let $=0;$<l;$++){let ie=r.get($+o);if(ie&&ie.rootNodes.length){c=h=ie.rootNodes[0];break}}for(let $=l-1;$>-1;$--){let ie=r.get($+o);if(ie&&ie.rootNodes.length){h=ie.rootNodes[ie.rootNodes.length-1];break}}let f=c?.getBoundingClientRect?.(),D=h?.getBoundingClientRect?.();return f&&D?D.bottom-f.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,i,r){if(t&1&&xe(r,X_,5)(r,vr,5)(r,pc,5)(r,$o,5)(r,ou,5),t&2){let o;E(o=I())&&(i._noDataRow=o.first),E(o=I())&&(i._contentColumnDefs=o),E(o=I())&&(i._contentRowDefs=o),E(o=I())&&(i._contentHeaderRowDefs=o),E(o=I())&&(i._contentFooterRowDefs=o)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,i){t&2&&O("cdk-table-fixed-layout",i.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",N],fixedLayout:[2,"fixedLayout","fixedLayout",N],recycleRows:[2,"recycleRows","recycleRows",N]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[X([{provide:In,useExisting:n},{provide:Uo,useValue:null}])],ngContentSelectors:jx,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(Q(zx),P(0),P(1,1),j(2,Hx,1,0),j(3,Ux,7,0)(4,$x,4,0)),t&2&&(u(2),H(i._isServer?2:-1),u(),H(i._isNativeHtmlTable?3:4))},dependencies:[du,cu,uu,mu],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function dc(n,a){return n.concat(Array.from(a))}function q_(n,a){let e=a.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i==="TABLE")break;t=t.parentNode}return null}var Z_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Mo]})}return n})();var Wx=[[["caption"]],[["colgroup"],["col"]],"*"],qx=["caption","colgroup, col","*"];function Yx(n,a){n&1&&P(0,2)}function Kx(n,a){n&1&&(d(0,"thead",0),je(1,1),m(),d(2,"tbody",2),je(3,3)(4,4),m(),d(5,"tfoot",0),je(6,5),m())}function Qx(n,a){n&1&&je(0,1)(1,3)(2,4)(3,5)}var Ti=(()=>{class n extends hu{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,i){t&2&&O("mat-table-fixed-layout",i.fixedLayout)},exportAs:["matTable"],features:[X([{provide:hu,useExisting:n},{provide:In,useExisting:n},{provide:Uo,useValue:null}]),Y],ngContentSelectors:qx,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(Q(Wx),P(0),P(1,1),j(2,Yx,1,0),j(3,Kx,7,0)(4,Qx,4,0)),t&2&&(u(2),H(i._isServer?2:-1),u(),H(i._isNativeHtmlTable?3:4))},dependencies:[du,cu,uu,mu],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return n})(),Ai=(()=>{class n extends uc{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matCellDef",""]],features:[X([{provide:uc,useExisting:n}]),Y]})}return n})(),Ri=(()=>{class n extends hc{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matHeaderCellDef",""]],features:[X([{provide:hc,useExisting:n}]),Y]})}return n})();var Oi=(()=>{class n extends vr{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[X([{provide:vr,useExisting:n}]),Y]})}return n})(),Fi=(()=>{class n extends K_{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[Y]})}return n})();var Pi=(()=>{class n extends Q_{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[Y]})}return n})();var Ni=(()=>{class n extends $o{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",N]},features:[X([{provide:$o,useExisting:n}]),Y]})}return n})();var Li=(()=>{class n extends pc{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[X([{provide:pc,useExisting:n}]),Y]})}return n})(),Bi=(()=>{class n extends su{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[X([{provide:su,useExisting:n}]),Y],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&je(0,0)},dependencies:[Sa],encapsulation:2})}return n})();var Vi=(()=>{class n extends lu{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[X([{provide:lu,useExisting:n}]),Y],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&je(0,0)},dependencies:[Sa],encapsulation:2})}return n})();var J_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Z_,V]})}return n})();var Xx=(n,a)=>a.bookCategoryId;function Zx(n,a){n&1&&(d(0,"th",17),p(1," ID "),m())}function Jx(n,a){if(n&1&&(d(0,"td",18),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.id," ")}}function eD(n,a){n&1&&(d(0,"th",17),p(1," Title "),m())}function tD(n,a){if(n&1&&(d(0,"td",18),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.title," ")}}function nD(n,a){n&1&&(d(0,"th",17),p(1," Book Author "),m())}function iD(n,a){if(n&1&&(d(0,"td",18),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.author," ")}}function aD(n,a){n&1&&(d(0,"th",17),p(1," Price "),m())}function rD(n,a){if(n&1&&(d(0,"td",18),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.price," ")}}function oD(n,a){n&1&&(d(0,"th",17),p(1," Availablity "),m())}function sD(n,a){if(n&1&&(d(0,"td",18),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.ordered?"Not Available":"Available"," ")}}function lD(n,a){n&1&&(d(0,"th",17),p(1," Order "),m())}function cD(n,a){if(n&1){let e=Oe();d(0,"td",18)(1,"button",19),S("click",function(){let i=be(e).$implicit,r=k(2);return ve(r.orderBook(i))}),p(2," Order "),m()()}if(n&2){let e=a.$implicit;u(),b("disabled",e.ordered)}}function dD(n,a){n&1&&R(0,"tr",20)}function mD(n,a){n&1&&R(0,"tr",21)}function uD(n,a){if(n&1&&(d(0,"mat-expansion-panel",5)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),p(3),Yn(4,"titlecase"),m(),d(5,"mat-panel-description"),p(6),Yn(7,"titlecase"),m()(),d(8,"table",6),he(9,7),U(10,Zx,2,0,"th",8)(11,Jx,2,1,"td",9),pe(),he(12,10),U(13,eD,2,0,"th",8)(14,tD,2,1,"td",9),pe(),he(15,11),U(16,nD,2,0,"th",8)(17,iD,2,1,"td",9),pe(),he(18,12),U(19,aD,2,0,"th",8)(20,rD,2,1,"td",9),pe(),he(21,13),U(22,oD,2,0,"th",8)(23,sD,2,1,"td",9),pe(),he(24,14),U(25,lD,2,0,"th",8)(26,cD,3,1,"td",9),pe(),U(27,dD,1,0,"tr",15)(28,mD,1,0,"tr",16),m()()),n&2){let e=a.$implicit,t=k();b("expanded",!0),u(3),G(" ",Fr(4,6,e.category)," "),u(3),G(" ",Fr(7,8,e.subCategory)," "),u(2),b("dataSource",e.books),u(19),b("matHeaderRowDef",t.displayedColumns),u(),b("matRowDefColumns",t.displayedColumns)}}var eb=(()=>{class n{constructor(e,t){this.apiService=e,this.snackBar=t,this.displayedColumns=["id","title","author","price","available","order"],this.books=[],this.booksToDisplay=[]}ngOnInit(){console.log("BooksStoreComponent: ngOnInit"),this.loadBooks()}loadBooks(){this.apiService.getBooks().subscribe({next:e=>{console.log("BooksStoreComponent: loaded",e?.length??0),this.books=[],e.forEach(t=>this.books.push(t)),this.updateList()},error:e=>{console.error("Failed to load books",e),this.snackBar.open("Failed to load books","OK")}})}updateList(){this.booksToDisplay=[];for(let e of this.books){let t=!1,i;for(let r of this.booksToDisplay)r.bookCategoryId==e.bookCategoryId&&(t=!0,i=r);t?i.books.push(e):this.booksToDisplay.push({bookCategoryId:e.bookCategoryId,category:e.bookCategory?.category??"",subCategory:e.bookCategory?.subCategory??"",books:[e]})}}searchBooks(e){this.updateList(),e=e.toLowerCase(),this.booksToDisplay=this.booksToDisplay.filter(t=>(t.books=t.books.filter(i=>i.title.toLowerCase().includes(e)),t.books.length>0))}getBookCount(){let e=0;return this.booksToDisplay.forEach(t=>e+=t.books.length),e}orderBook(e){this.apiService.orderBook(e).subscribe({next:t=>{if(t==="Ordered"){e.ordered=!0;let i=new Date,r=new Date;r.setDate(i.getDate()+10),this.snackBar.open(e.title+" has been ordered! You will have to return on "+r.toDateString(),"OK")}else this.snackBar.open("You already have 3 orders pending to return.","OK")}})}static{this.\u0275fac=function(t){return new(t||n)(B(Ve),B(ft))}}static{this.\u0275cmp=_({type:n,selectors:[["books-store"]],standalone:!1,decls:14,vars:1,consts:[["searchField",""],["color","accent","appearance","outline"],["matInput","",3,"input"],["mat-icon-button","","matSuffix",""],["multi","true"],[3,"expanded"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","author"],["matColumnDef","price"],["matColumnDef","available"],["matColumnDef","order"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-raised-button","","color","accent",3,"click","disabled"],["mat-header-row",""],["mat-row",""]],template:function(t,i){if(t&1){let r=Oe();d(0,"mat-form-field",1)(1,"mat-label"),p(2,"Search Books"),m(),d(3,"input",2,0),S("input",function(){be(r);let l=qe(4);return ve(i.searchBooks(l.value))}),m(),d(5,"button",3)(6,"mat-icon"),p(7,"search"),m()()(),d(8,"mat-card")(9,"mat-card-content"),p(10),m()(),d(11,"mat-accordion",4),Tt(12,uD,29,10,"mat-expansion-panel",5,Xx),m()}t&2&&(u(10),G(" Showing Results for ",i.getBookCount()," Books. "),u(2),At(i.booksToDisplay))},dependencies:[it,Wt,Ze,Je,$_,nu,iu,U_,H_,qt,an,Ca,Hn,$n,Ti,Ri,Ni,Oi,Ai,Li,Fi,Pi,Bi,Vi,jr],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}mat-form-field[_ngcontent-%COMP%]{width:500px;margin:0 auto;display:block}mat-card[_ngcontent-%COMP%]{width:max-content;margin-bottom:1rem}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{font-size:1.5rem}mat-accordion[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{font-size:1.4rem;letter-spacing:2px;font-weight:500;color:#69f0ae}mat-accordion[_ngcontent-%COMP%]   mat-panel-description[_ngcontent-%COMP%]{font-style:italic;font-size:1.2rem;letter-spacing:1px}mat-accordion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border:1px solid rgba(255,255,255,.1)}mat-accordion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-style:italic;font-size:1.2rem}mat-accordion[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{font-size:1.2rem}"]})}}return n})();function hD(n,a){n&1&&(d(0,"th",12),p(1," Order ID "),m())}function pD(n,a){if(n&1&&(d(0,"td",13),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.id," ")}}function fD(n,a){n&1&&(d(0,"th",12),p(1," Book ID "),m())}function gD(n,a){if(n&1&&(d(0,"td",13),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.bookId," ")}}function _D(n,a){n&1&&(d(0,"th",12),p(1," Book Title "),m())}function bD(n,a){if(n&1&&(d(0,"td",13),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.bookTitle," ")}}function vD(n,a){n&1&&(d(0,"th",12),p(1," Order Date "),m())}function yD(n,a){if(n&1&&(d(0,"td",13),p(1),Yn(2,"date"),m()),n&2){let e=a.$implicit;u(),G(" ",ss(2,1,e.orderDate,"shortDate")," ")}}function wD(n,a){n&1&&(d(0,"th",12),p(1," Fine To Pay "),m())}function CD(n,a){if(n&1&&(d(0,"td",13),p(1),m()),n&2){let e=a.$implicit,t=k(2);u(),G(" ",t.getFineToPay(e)," ")}}function xD(n,a){n&1&&R(0,"tr",14)}function DD(n,a){n&1&&R(0,"tr",15)}function kD(n,a){if(n&1&&(d(0,"table",1),he(1,3),U(2,hD,2,0,"th",4)(3,pD,2,1,"td",5),pe(),he(4,6),U(5,fD,2,0,"th",4)(6,gD,2,1,"td",5),pe(),he(7,7),U(8,_D,2,0,"th",4)(9,bD,2,1,"td",5),pe(),he(10,8),U(11,vD,2,0,"th",4)(12,yD,3,4,"td",5),pe(),he(13,9),U(14,wD,2,0,"th",4)(15,CD,2,1,"td",5),pe(),U(16,xD,1,0,"tr",10)(17,DD,1,0,"tr",11),m()),n&2){let e=k();b("dataSource",e.pendingReturns),u(16),b("matHeaderRowDef",e.columnsForPendingReturns),u(),b("matRowDefColumns",e.columnsForPendingReturns)}}function SD(n,a){n&1&&(d(0,"mat-card")(1,"mat-card-content")(2,"h2"),p(3,"No Orders Done Yet!"),m()()())}function MD(n,a){n&1&&(d(0,"th",12),p(1," Order ID "),m())}function ED(n,a){if(n&1&&(d(0,"td",13),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.id," ")}}function ID(n,a){n&1&&(d(0,"th",12),p(1," Book ID "),m())}function TD(n,a){if(n&1&&(d(0,"td",13),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.bookId," ")}}function AD(n,a){n&1&&(d(0,"th",12),p(1," Book Title "),m())}function RD(n,a){if(n&1&&(d(0,"td",13),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.bookTitle," ")}}function OD(n,a){n&1&&(d(0,"th",12),p(1," Order Date "),m())}function FD(n,a){if(n&1&&(d(0,"td",13),p(1),Yn(2,"date"),m()),n&2){let e=a.$implicit;u(),G(" ",ss(2,1,e.orderDate,"shortDate")," ")}}function PD(n,a){n&1&&(d(0,"th",12),p(1," Returned Date "),m())}function ND(n,a){if(n&1&&(d(0,"td",13),p(1),Yn(2,"date"),m()),n&2){let e=a.$implicit;u(),G(" ",ss(2,1,e.returnDate,"shortDate")," ")}}function LD(n,a){n&1&&(d(0,"th",12),p(1," Fine Paid "),m())}function BD(n,a){if(n&1&&(d(0,"td",13),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.finePaid," ")}}function VD(n,a){n&1&&R(0,"tr",14)}function zD(n,a){n&1&&R(0,"tr",15)}function jD(n,a){if(n&1&&(d(0,"table",1),he(1,3),U(2,MD,2,0,"th",4)(3,ED,2,1,"td",5),pe(),he(4,6),U(5,ID,2,0,"th",4)(6,TD,2,1,"td",5),pe(),he(7,7),U(8,AD,2,0,"th",4)(9,RD,2,1,"td",5),pe(),he(10,8),U(11,OD,2,0,"th",4)(12,FD,3,4,"td",5),pe(),he(13,16),U(14,PD,2,0,"th",4)(15,ND,3,4,"td",5),pe(),he(16,17),U(17,LD,2,0,"th",4)(18,BD,2,1,"td",5),pe(),U(19,VD,1,0,"tr",10)(20,zD,1,0,"tr",11),m()),n&2){let e=k();b("dataSource",e.completedReturns),u(19),b("matHeaderRowDef",e.columnsForCompletedReturns),u(),b("matRowDefColumns",e.columnsForCompletedReturns)}}function HD(n,a){n&1&&(d(0,"mat-card")(1,"mat-card-content")(2,"h2"),p(3,"No Orders Done Yet!"),m()()())}var tb=(()=>{class n{constructor(e,t){this.apiService=e,this.snackBar=t,this.columnsForPendingReturns=["orderId","bookId","bookTitle","orderDate","fineToPay"],this.columnsForCompletedReturns=["orderId","bookId","bookTitle","orderDate","returnedDate","finePaid"],this.pendingReturns=[],this.completedReturns=[]}ngOnInit(){console.log("UserOrdersComponent: ngOnInit"),this.loadUserOrders()}loadUserOrders(){let e=this.apiService.getUserInfo().id;this.apiService.getOrdersOfUser(e).subscribe({next:t=>{console.log("UserOrdersComponent: loaded",t?.length??0),this.pendingReturns=t.filter(i=>!i.returned),this.completedReturns=t.filter(i=>i.returned)},error:t=>{console.error("Failed to load user orders",t),this.snackBar.open("Failed to load your orders","OK")}})}getFineToPay(e){return this.apiService.getFine(e)}static{this.\u0275fac=function(t){return new(t||n)(B(Ve),B(ft))}}static{this.\u0275cmp=_({type:n,selectors:[["user-orders"]],standalone:!1,decls:14,vars:6,consts:[[1,"pending"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],[1,"returned"],["matColumnDef","orderId"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","bookId"],["matColumnDef","bookTitle"],["matColumnDef","orderDate"],["matColumnDef","fineToPay"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["matColumnDef","returnedDate"],["matColumnDef","finePaid"]],template:function(t,i){t&1&&(d(0,"section",0)(1,"mat-card")(2,"mat-card-content")(3,"h2"),p(4),m()()(),j(5,kD,18,3,"table",1),j(6,SD,4,0,"mat-card"),m(),d(7,"section",2)(8,"mat-card")(9,"mat-card-content")(10,"h2"),p(11),m()()(),j(12,jD,21,3,"table",1),j(13,HD,4,0,"mat-card"),m()),t&2&&(u(4),G("Pending Returns (",i.pendingReturns.length,")"),u(),H(i.pendingReturns.length>0?5:-1),u(),H(i.pendingReturns.length===0?6:-1),u(5),G("Returned Orders (",i.completedReturns.length,")"),u(),H(i.completedReturns.length>0?12:-1),u(),H(i.completedReturns.length===0?13:-1))},dependencies:[Ze,Je,Ti,Ri,Ni,Oi,Ai,Li,Fi,Pi,Bi,Vi,ld],styles:["mat-card[_ngcontent-%COMP%]{width:max-content;margin-bottom:1rem}.returned[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{margin-top:2rem}table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-size:1.1rem}table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-style:italic}"]})}}return n})();var UD=n=>({display:n}),nb=(()=>{class n{constructor(e,t,i,r){this.apiservice=t,this.snackBar=i,this.router=r,this.fineToPay=null,this.returnForm=e.group({userId:e.control(null,[Be.required]),bookId:e.control(null,[Be.required])})}getFine(){let e=this.returnForm.get("userId")?.value,t=this.returnForm.get("bookId")?.value;this.apiservice.getOrdersOfUser(e).subscribe({next:i=>{if(i.some(r=>!r.returned&&r.bookId==t)){let r=i.filter(o=>o.bookId==t)[0];this.fineToPay=this.apiservice.getFine(r)}else this.snackBar.open(`User doesn't have Book with ID: ${t}`,"OK")}})}returnBook(){let e=this.returnForm.get("userId")?.value,t=this.returnForm.get("bookId")?.value;this.apiservice.returnBook(e,t,this.fineToPay).subscribe({next:i=>{i==="Returned"?(this.snackBar.open("Book has been Returned!","OK"),this.router.navigateByUrl("/home").then(()=>{this.router.navigateByUrl("/return-book")})):this.snackBar.open("Book has not Returned!","OK")},error:i=>{this.snackBar.open(`Error: Invalid Input!
            Failed to return book`,"OK"),console.error("Error:",i)}})}static{this.\u0275fac=function(t){return new(t||n)(B(ki),B(Ve),B(ft),B(st))}}static{this.\u0275cmp=_({type:n,selectors:[["return-book"]],standalone:!1,decls:20,vars:6,consts:[[3,"formGroup"],["appearance","outline","color","accent"],["matInput","","type","number","formControlName","userId"],["matInput","","type","number","formControlName","bookId"],[1,"fine"],["mat-stroked-button","","color","accent",3,"click"],[3,"ngStyle"],["mat-stroked-button","","color","accent",3,"click","disabled"]],template:function(t,i){t&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"h1"),p(3,"Return a Book"),m()(),d(4,"mat-card-content",0)(5,"mat-form-field",1)(6,"mat-label"),p(7,"User ID"),m(),R(8,"input",2),m(),d(9,"mat-form-field",1)(10,"mat-label"),p(11,"Book ID"),m(),R(12,"input",3),m(),d(13,"div",4)(14,"button",5),S("click",function(){return i.getFine()}),p(15," Get Fine "),m(),d(16,"span",6),p(17),m()(),d(18,"button",7),S("click",function(){return i.returnBook()}),p(19," Return Book "),m()()()),t&2&&(u(4),b("formGroup",i.returnForm),u(12),b("ngStyle",ta(4,UD,i.fineToPay===null?"none":"flex")),u(),G(" ",i.fineToPay," BDT "),u(),b("disabled",i.returnForm.invalid))},dependencies:[sd,it,Ze,Je,jn,qt,an,$n,Bn,fm,xi,Di,en,ii],styles:["mat-card[_ngcontent-%COMP%]{width:max-content}mat-card[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-right:1rem}mat-card[_ngcontent-%COMP%]   .fine[_ngcontent-%COMP%]{display:flex;gap:1rem;justify-content:space-between;margin-bottom:1rem}mat-card[_ngcontent-%COMP%]   .fine[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:max-content}mat-card[_ngcontent-%COMP%]   .fine[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1 1 auto;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:700;letter-spacing:5px;font-style:italic}mat-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.5rem;padding:1.5rem;width:100%}"]})}}return n})();function $D(n,a){n&1&&(d(0,"th",24),p(1,"User ID"),m())}function GD(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.id," ")}}function WD(n,a){n&1&&(d(0,"th",24),p(1,"Name"),m())}function qD(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),G(" ",t.displayName(e.firstName,e.lastName)," ")}}function YD(n,a){n&1&&(d(0,"th",24),p(1,"Email"),m())}function KD(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),G(" ",t.displayValue(e.email)," ")}}function QD(n,a){n&1&&(d(0,"th",24),p(1,"Type"),m())}function XD(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),G(" ",t.displayValue(e.userType)," ")}}function ZD(n,a){n&1&&(d(0,"th",24),p(1,"Created On"),m())}function JD(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),G(" ",t.formatDate(e.createdOn)," ")}}function ek(n,a){n&1&&(d(0,"th",24),p(1,"Approve"),m())}function tk(n,a){if(n&1){let e=Oe();d(0,"td",25)(1,"button",26),S("click",function(){let i=be(e).$implicit,r=k();return ve(r.approve.emit(i))}),p(2," Approve "),m()()}}function nk(n,a){n&1&&(d(0,"th",24),p(1," Mobile Number "),m())}function ik(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),G(" ",t.displayValue(e.mobileNumber)," ")}}function ak(n,a){n&1&&(d(0,"th",24),p(1," Account Status "),m())}function rk(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),G(" ",t.getAccountStatus(e.accountStatus)," ")}}function ok(n,a){n&1&&(d(0,"th",24),p(1," Unblock "),m())}function sk(n,a){if(n&1){let e=Oe();d(0,"td",25)(1,"button",27),S("click",function(){let i=be(e).$implicit,r=k();return ve(r.unblock.emit(i))}),p(2," Unblock "),m()()}if(n&2){let e=a.$implicit,t=k();u(),b("disabled",t.getAccountStatus(e.accountStatus)!="BLOCKED")}}function lk(n,a){n&1&&(d(0,"th",24),p(1,"Order ID"),m())}function ck(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),Ee(t.displayValue(e.id))}}function dk(n,a){n&1&&(d(0,"th",24),p(1,"User ID"),m())}function mk(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),G(" ",t.displayValue(e.userId)," ")}}function uk(n,a){n&1&&(d(0,"th",24),p(1,"User Name"),m())}function hk(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),Ee(t.displayValue(e.userName))}}function pk(n,a){n&1&&(d(0,"th",24),p(1,"Book ID"),m())}function fk(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),Ee(t.displayValue(e.bookId))}}function gk(n,a){n&1&&(d(0,"th",24),p(1,"Book Title"),m())}function _k(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),G(" ",t.displayValue(e.bookTitle)," ")}}function bk(n,a){n&1&&(d(0,"th",24),p(1,"Order Date"),m())}function vk(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),G(" ",t.formatDate(e.orderDate)," ")}}function yk(n,a){n&1&&(d(0,"th",24),p(1,"Fine To Pay"),m())}function wk(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),G(" ",t.getFineToPay(e)," ")}}function Ck(n,a){n&1&&(d(0,"th",24),p(1,"Return Date"),m())}function xk(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),G(" ",t.formatDate(e.returnDate)," ")}}function Dk(n,a){n&1&&(d(0,"th",24),p(1,"Fine Paid"),m())}function kk(n,a){if(n&1&&(d(0,"td",25),p(1),m()),n&2){let e=a.$implicit,t=k();u(),Ee(t.displayValue(e.finePaid))}}function Sk(n,a){n&1&&R(0,"tr",28)}function Mk(n,a){n&1&&R(0,"tr",29)}var yr=(()=>{class n{getFineToPay(e){return this.apiService.getFine(e)}constructor(e){this.apiService=e,this.columns=[],this.dataSource=[],this.approve=new A,this.unblock=new A}displayValue(e){return e==null||e===""?"-":String(e)}displayName(e,t){return[e,t].filter(Boolean).join(" ").trim()||"-"}formatDate(e){if(!e)return"-";let t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}).replace(/ /g,"-")}getAccountStatus(e){return e==null?"-":yo[e]}static{this.\u0275fac=function(t){return new(t||n)(B(Ve))}}static{this.\u0275cmp=_({type:n,selectors:[["page-table"]],inputs:{columns:"columns",dataSource:"dataSource"},outputs:{approve:"approve",unblock:"unblock"},standalone:!1,decls:58,vars:3,consts:[[1,"table-container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","userId"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","userName"],["matColumnDef","email"],["matColumnDef","userType"],["matColumnDef","createdOn"],["matColumnDef","approve"],["matColumnDef","mobileNumber"],["matColumnDef","accountStatus"],["matColumnDef","unblock"],["matColumnDef","orderId"],["matColumnDef","userIdForOrder"],["matColumnDef","userNameForOrder"],["matColumnDef","bookId"],["matColumnDef","bookTitle"],["matColumnDef","orderDate"],["matColumnDef","fineToPay"],["matColumnDef","returnedDate"],["matColumnDef","finePaid"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","accent",3,"click","disabled"],["mat-header-row",""],["mat-row",""]],template:function(t,i){t&1&&(d(0,"div",0)(1,"table",1),he(2,2),U(3,$D,2,0,"th",3)(4,GD,2,1,"td",4),pe(),he(5,5),U(6,WD,2,0,"th",3)(7,qD,2,1,"td",4),pe(),he(8,6),U(9,YD,2,0,"th",3)(10,KD,2,1,"td",4),pe(),he(11,7),U(12,QD,2,0,"th",3)(13,XD,2,1,"td",4),pe(),he(14,8),U(15,ZD,2,0,"th",3)(16,JD,2,1,"td",4),pe(),he(17,9),U(18,ek,2,0,"th",3)(19,tk,3,0,"td",4),pe(),he(20,10),U(21,nk,2,0,"th",3)(22,ik,2,1,"td",4),pe(),he(23,11),U(24,ak,2,0,"th",3)(25,rk,2,1,"td",4),pe(),he(26,12),U(27,ok,2,0,"th",3)(28,sk,3,1,"td",4),pe(),he(29,13),U(30,lk,2,0,"th",3)(31,ck,2,1,"td",4),pe(),he(32,14),U(33,dk,2,0,"th",3)(34,mk,2,1,"td",4),pe(),he(35,15),U(36,uk,2,0,"th",3)(37,hk,2,1,"td",4),pe(),he(38,16),U(39,pk,2,0,"th",3)(40,fk,2,1,"td",4),pe(),he(41,17),U(42,gk,2,0,"th",3)(43,_k,2,1,"td",4),pe(),he(44,18),U(45,bk,2,0,"th",3)(46,vk,2,1,"td",4),pe(),he(47,19),U(48,yk,2,0,"th",3)(49,wk,2,1,"td",4),pe(),he(50,20),U(51,Ck,2,0,"th",3)(52,xk,2,1,"td",4),pe(),he(53,21),U(54,Dk,2,0,"th",3)(55,kk,2,1,"td",4),pe(),U(56,Sk,1,0,"tr",22)(57,Mk,1,0,"tr",23),m()()),t&2&&(u(),b("dataSource",i.dataSource),u(55),b("matHeaderRowDef",i.columns),u(),b("matRowDefColumns",i.columns))},dependencies:[it,Ti,Ri,Ni,Oi,Ai,Li,Fi,Pi,Bi,Vi],styles:[".table-container[_ngcontent-%COMP%]{width:100%;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;min-width:max-content}table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{font-size:1.2rem}table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-style:italic}"]})}}return n})();var ib=(()=>{class n{constructor(e,t,i){this.apiService=e,this.snackBar=t,this.router=i,this.columns=["userId","userName","email","userType","createdOn","approve"],this.users=[]}ngOnInit(){console.log("ApprovalRequestsComponent: ngOnInit"),this.loadApprovalRequests()}loadApprovalRequests(){this.apiService.getUsers().subscribe({next:e=>{console.log("ApprovalRequestsComponent: loaded",e?.length??0),this.users=e.filter(t=>t.accountStatus==yo.UNAPROOVED)},error:e=>{console.error("Failed to load approval requests",e),this.snackBar.open("Failed to load approval requests","OK")}})}approve(e){this.apiService.approveRequest(e.id).subscribe({next:t=>{t==="Approved"?(this.snackBar.open(`Approved for ${e.id}`,"OK"),this.loadApprovalRequests()):this.snackBar.open("Not Approved","OK")},error:t=>{this.snackBar.open("Approval failed. Please try again.","OK"),console.error(t)}})}static{this.\u0275fac=function(t){return new(t||n)(B(Ve),B(ft),B(st))}}static{this.\u0275cmp=_({type:n,selectors:[["approval-requests"]],standalone:!1,decls:5,vars:3,consts:[[3,"approve","columns","dataSource"]],template:function(t,i){t&1&&(d(0,"mat-card")(1,"mat-card-content")(2,"h1"),p(3),m()()(),d(4,"page-table",0),S("approve",function(o){return i.approve(o)}),m()),t&2&&(u(3),G("Pending Approval Requests (",i.users.length,")"),u(),b("columns",i.columns)("dataSource",i.users))},dependencies:[Ze,Je,yr],styles:["mat-card[_ngcontent-%COMP%]{margin-bottom:2rem;width:max-content}"]})}}return n})();function Ek(n,a){n&1&&at(0,"div",2)}var Ik=new g("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var rb=(()=>{class n{_elementRef=s(F);_ngZone=s(W);_changeDetectorRef=s(ee);_renderer=s(ye);_cleanupTransitionEnd;constructor(){let e=Bm(),t=s(Ik,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=ab(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=ab(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new A;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,i){t&2&&(L("aria-valuenow",i._isIndeterminate()?null:i.value)("mode",i.mode),Fe("mat-"+i.color),O("_mat-animation-noopable",i._isNoopAnimation)("mdc-linear-progress--animation-ready",!i._isNoopAnimation)("mdc-linear-progress--indeterminate",i._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ue],bufferValue:[2,"bufferValue","bufferValue",Ue],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,i){t&1&&(De(0,"div",0),at(1,"div",1),j(2,Ek,1,0,"div",2),Se(),De(3,"div",3),at(4,"span",4),Se(),De(5,"div",5),at(6,"span",4),Se()),t&2&&(u(),et("flex-basis",i._getBufferBarFlexBasis()),u(),H(i.mode==="buffer"?2:-1),u(),et("transform",i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function ab(n,a=0,e=100){return Math.max(a,Math.min(e,n))}var ob=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();function Ak(n,a){n&1&&R(0,"mat-progress-bar",1)}var sb=(()=>{class n{constructor(e,t){this.apiService=e,this.snackBar=t,this.columnsForPendingReturns=["orderId","userIdForOrder","userNameForOrder","bookId","orderDate","fineToPay"],this.columnsForCompletedReturns=["orderId","userIdForOrder","userNameForOrder","bookId","orderDate","returnedDate","finePaid"],this.showProgressBar=!1,this.ordersWithPendingReturns=[],this.ordersWithCompletedReturns=[]}ngOnInit(){console.log("AllOrdersComponent: ngOnInit"),this.loadOrders()}loadOrders(){this.apiService.getOrders().subscribe({next:e=>{console.log("AllOrdersComponent: loaded",e?.length??0),this.ordersWithPendingReturns=e.filter(t=>!t.returned),this.ordersWithCompletedReturns=e.filter(t=>t.returned)},error:e=>{console.error("Failed to load orders",e),this.snackBar.open("No Order Found","OK")}})}sendEmail(){this.showProgressBar=!0,this.apiService.sendEmail().subscribe({next:e=>{e==="sent"?(this.snackBar.open("Emails have been Sent to respected Students!","OK"),this.showProgressBar=!1):(this.snackBar.open("Emails have not been sent!","OK"),this.showProgressBar=!1)}})}blockUsers(){this.showProgressBar=!0,this.apiService.blockUsers().subscribe({next:e=>{e==="blocked"?(this.snackBar.open("Eligible Users Accounts were BLOCKED!","OK"),this.showProgressBar=!1):(this.snackBar.open("Not BLOCKED!","OK"),this.showProgressBar=!1)}})}static{this.\u0275fac=function(t){return new(t||n)(B(Ve),B(ft))}}static{this.\u0275cmp=_({type:n,selectors:[["all-orders"]],standalone:!1,decls:16,vars:7,consts:[["mat-raised-button","","color","accent",3,"click"],["mode","indeterminate","color","accent"],[3,"columns","dataSource"]],template:function(t,i){t&1&&(d(0,"mat-card")(1,"mat-card-content")(2,"h1"),p(3),m(),d(4,"button",0),S("click",function(){return i.sendEmail()}),p(5," Send Email About Pending Returns "),m(),d(6,"button",0),S("click",function(){return i.blockUsers()}),p(7," Block Overdue Users "),m()(),d(8,"mat-card-footer"),j(9,Ak,1,0,"mat-progress-bar",1),m()(),R(10,"page-table",2),d(11,"mat-card")(12,"mat-card-content")(13,"h1"),p(14),m()()(),R(15,"page-table",2)),t&2&&(u(3),G("Orders With Pending Returns (",i.ordersWithPendingReturns.length,")"),u(6),H(i.showProgressBar?9:-1),u(),b("columns",i.columnsForPendingReturns)("dataSource",i.ordersWithPendingReturns),u(4),G("Orders With Completed Returns (",i.ordersWithCompletedReturns.length,")"),u(),b("columns",i.columnsForCompletedReturns)("dataSource",i.ordersWithCompletedReturns))},dependencies:[it,Ze,Je,Xg,rb,yr],styles:["mat-card[_ngcontent-%COMP%]{margin-bottom:1rem}mat-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1rem}mat-card[_ngcontent-%COMP%]:nth-of-type(2){margin-top:2rem}mat-card[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return n})();var lb=(()=>{class n{constructor(e,t,i){this.apiService=e,this.snackBar=t,this.router=i,this.columns=["userId","userName","email","mobileNumber","createdOn","accountStatus","unblock","userType"],this.users=[]}ngOnInit(){console.log("ViewUsersComponent: ngOnInit"),this.loadUsers()}loadUsers(){this.apiService.getUsers().subscribe({next:e=>{console.log("ViewUsersComponent: loaded",e?.length??0),this.users=[],e.forEach(t=>this.users.push(t))},error:e=>{console.error("Failed to load users",e),this.snackBar.open("Failed to load users","OK")}})}unblockUser(e){let t=e.id;this.apiService.unblock(t).subscribe({next:i=>{i==="unblocked"?(this.snackBar.open("User has been UNBLOCKED!","OK"),this.loadUsers()):this.snackBar.open("Not Unblocked","OK")}}),this.apiService.GetUserInfo2().subscribe({next:i=>{console.log("User Info:",i)},error:i=>{console.log("Error fetching user info:",i)}}),this.apiService.Protected().subscribe({next:i=>{console.log("Protected Resource:",i)},error:i=>{console.log("Error accessing protected resource:",i)}})}static{this.\u0275fac=function(t){return new(t||n)(B(Ve),B(ft),B(st))}}static{this.\u0275cmp=_({type:n,selectors:[["view-users"]],standalone:!1,decls:5,vars:2,consts:[[3,"unblock","columns","dataSource"]],template:function(t,i){t&1&&(d(0,"mat-card")(1,"mat-card-content")(2,"h1"),p(3,"All Users of Library"),m()()(),d(4,"page-table",0),S("unblock",function(o){return i.unblockUser(o)}),m()),t&2&&(u(4),b("columns",i.columns)("dataSource",i.users))},dependencies:[Ze,Je,yr],styles:["mat-card[_ngcontent-%COMP%]{width:max-content;margin-bottom:2rem}"]})}}return n})();function Rk(n,a){n&1&&(d(0,"th",7),p(1," Name "),m())}function Ok(n,a){if(n&1&&(d(0,"td",8),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.name," ")}}function Fk(n,a){n&1&&(d(0,"th",7),p(1," Value "),m())}function Pk(n,a){if(n&1&&(d(0,"td",8),p(1),m()),n&2){let e=a.$implicit;u(),G(" ",e.value," ")}}function Nk(n,a){n&1&&R(0,"tr",9)}function Lk(n,a){n&1&&R(0,"tr",10)}var cb=(()=>{class n{constructor(e){this.apiservice=e,this.columns=["name","value"],this.dataSource=[],this.UserType="";let t=e.getUserInfo();this.dataSource=[{name:"Name",value:t.firstName+" "+t.lastName},{name:"Email",value:`${t.email}`},{name:"Mobile",value:`${t.mobileNumber}`},{name:"Account Status",value:`${t.accountStatus}`},{name:"Created On",value:`${t.createdOn}`},{name:"Type",value:`${this.UserType[t.userType]}`}]}static{this.\u0275fac=function(t){return new(t||n)(B(Ve))}}static{this.\u0275cmp=_({type:n,selectors:[["profile"]],standalone:!1,decls:14,vars:3,consts:[["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","value"],["mat-header-row","","hidden","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row","","hidden",""],["mat-row",""]],template:function(t,i){t&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),p(3,"Profile Information"),m()(),d(4,"mat-card-content")(5,"table",0),he(6,1),U(7,Rk,2,0,"th",2)(8,Ok,2,1,"td",3),pe(),he(9,4),U(10,Fk,2,0,"th",2)(11,Pk,2,1,"td",3),pe(),U(12,Nk,1,0,"tr",5)(13,Lk,1,0,"tr",6),m()()()),t&2&&(u(5),b("dataSource",i.dataSource),u(7),b("matHeaderRowDef",i.columns),u(),b("matRowDefColumns",i.columns))},dependencies:[Ze,Je,jn,_r,Ti,Ri,Ni,Oi,Ai,Li,Fi,Pi,Bi,Vi],styles:["mat-card[_ngcontent-%COMP%]{width:500px}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-weight:600;font-size:1.5rem;letter-spacing:3px;color:#00bfae}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin-top:1rem}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-column-name[_ngcontent-%COMP%]{border-right:1px solid #00BFAE}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{font-size:1.3rem}"]})}}return n})();var Bk=["text"],Vk=[[["mat-icon"]],"*"],zk=["mat-icon","*"];function jk(n,a){if(n&1&&R(0,"mat-pseudo-checkbox",1),n&2){let e=k();b("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Hk(n,a){if(n&1&&R(0,"mat-pseudo-checkbox",3),n&2){let e=k();b("disabled",e.disabled)}}function Uk(n,a){if(n&1&&(d(0,"span",4),p(1),m()),n&2){let e=k();u(),G("(",e.group.label,")")}}var _c=new g("MAT_OPTION_PARENT_COMPONENT"),bc=new g("MatOptgroup");var gc=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}},di=(()=>{class n{_element=s(F);_changeDetectorRef=s(ee);_parent=s(_c,{optional:!0});group=s(bc,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(ge).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=z(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new A;_text;_stateChanges=new M;constructor(){let e=s(ke);e.load(dt),e.load(hn),this._signalDisableRipple=!!this._parent&&hi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ge(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new gc(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&oe(Bk,7),t&2){let r;E(r=I())&&(i._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&S("click",function(){return i._selectViaInteraction()})("keydown",function(o){return i._handleKeydown(o)}),t&2&&(He("id",i.id),L("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),O("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",N]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:zk,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(Q(Vk),j(0,jk,1,2,"mat-pseudo-checkbox",1),P(1),d(2,"span",2,0),P(4,1),m(),j(5,Hk,1,1,"mat-pseudo-checkbox",3),j(6,Uk,2,1,"span",4),R(7,"div",5)),t&2&&(H(i.multiple?0:-1),u(5),H(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),u(),H(i.group&&i.group._inert?6:-1),u(),b("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[sc,_n],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function fu(n,a,e){if(e.length){let t=a.toArray(),i=e.toArray(),r=0;for(let o=0;o<n+1;o++)t[o].group&&t[o].group===i[r]&&r++;return r}return 0}function gu(n,a,e,t){return n<e?n:n+a>e+t?Math.max(0,n-t+a):e}var wr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[nt,lc,di,V]})}return n})();var db=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Mt,wr,Ft,wr,V]})}return n})();var Gk=["trigger"],Wk=["panel"],qk=[[["mat-select-trigger"]],"*"],Yk=["mat-select-trigger","*"];function Kk(n,a){if(n&1&&(d(0,"span",4),p(1),m()),n&2){let e=k();u(),Ee(e.placeholder)}}function Qk(n,a){n&1&&P(0)}function Xk(n,a){if(n&1&&(d(0,"span",11),p(1),m()),n&2){let e=k(2);u(),Ee(e.triggerValue)}}function Zk(n,a){if(n&1&&(d(0,"span",5),j(1,Qk,1,0)(2,Xk,2,1,"span",11),m()),n&2){let e=k();u(),H(e.customTrigger?1:2)}}function Jk(n,a){if(n&1){let e=Oe();d(0,"div",12,1),S("keydown",function(i){be(e);let r=k();return ve(r._handleKeydown(i))}),P(2,1),m()}if(n&2){let e=k();Fe(e.panelClass),O("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),L("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var eS=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(J);return()=>zn(n)}}),tS=new g("MAT_SELECT_CONFIG"),nS=new g("MatSelectTrigger"),_u=class{source;value;constructor(a,e){this.source=a,this.value=e}},vc=(()=>{class n{_viewportRuler=s($t);_changeDetectorRef=s(ee);_elementRef=s(F);_dir=s(Me,{optional:!0});_idGenerator=s(ge);_renderer=s(ye);_parentFormField=s(Lo,{optional:!0});ngControl=s(Dn,{self:!0,optional:!0});_liveAnnouncer=s(ko);_defaultOptions=s(tS,{optional:!0});_animationsDisabled=_e();_popoverLocation;_initialized=new M;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,r=fu(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&r===1?i.scrollTop=0:i.scrollTop=gu(o.offsetTop,o.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new _u(this,e)}_scrollStrategyFactory=s(eS);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new M;_errorStateTracker;stateChanges=new M;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=z(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Be.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=sn(()=>{let e=this.options;return e?e.changes.pipe(Ie(e),ut(()=>mt(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ut(()=>this.optionSelectionChanges))});openedChange=new A;_openedStream=this.openedChange.pipe(le(e=>e),ae(()=>{}));_closedStream=this.openedChange.pipe(le(e=>!e),ae(()=>{}));selectionChange=new A;valueChange=new A;constructor(){let e=s(Un),t=s(vo,{optional:!0}),i=s(en,{optional:!0}),r=s(new rt("tabindex"),{optional:!0}),o=s(Ao,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new br(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new jo(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ne(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ne(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ie(null),ne(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ze(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Vl(this._trackedModal,"aria-owns",t),Tm(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Vl(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,r=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&r&&!Ge(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;o.onKeydown(e);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,r=i===40||i===38,o=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!o&&(i===13||i===32)&&t.activeItem&&!Ge(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ge(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch(r){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof pr?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new So(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=mt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ne(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),mt(...this.options.map(t=>t._stateChanges)).pipe(ne(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Dt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,r){if(t&1&&xe(r,nS,5)(r,di,5)(r,bc,5),t&2){let o;E(o=I())&&(i.customTrigger=o.first),E(o=I())&&(i.options=o),E(o=I())&&(i.optionGroups=o)}},viewQuery:function(t,i){if(t&1&&oe(Gk,5)(Wk,5)(Xl,5),t&2){let r;E(r=I())&&(i.trigger=r.first),E(r=I())&&(i.panel=r.first),E(r=I())&&(i._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&S("keydown",function(o){return i._handleKeydown(o)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(L("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),O("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",N],disableRipple:[2,"disableRipple","disableRipple",N],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ue(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",N],placeholder:"placeholder",required:[2,"required","required",N],multiple:[2,"multiple","multiple",N],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",N],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ue],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",N]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[X([{provide:No,useExisting:n},{provide:_c,useExisting:n}]),de],ngContentSelectors:Yk,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(Q(qk),d(0,"div",2,0),S("click",function(){return i.open()}),d(3,"div",3),j(4,Kk,2,1,"span",4)(5,Zk,3,1,"span",5),m(),d(6,"div",6)(7,"div",7),Ke(),d(8,"svg",8),R(9,"path",9),m()()()(),U(10,Jk,3,16,"ng-template",10),S("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(o){return i._handleOverlayKeydown(o)})),t&2){let r=qe(1);u(3),L("id",i._valueId),u(),H(i.empty?4:5),u(6),b("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[pr,Xl],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var yc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Mt,wr,V,Ft,xa,wr]})}return n})();function aS(n,a){return this.categoryOptions}function rS(n,a){if(n&1&&(d(0,"mat-option",14),p(1),Yn(2,"titlecase"),m()),n&2){let e=a.$implicit;b("value",e.value),u(),G(" ",Fr(2,2,e.displayValue)," ")}}var mb=(()=>{class n{constructor(e,t,i){this.apiService=t,this.snackBar=i,this.categoryOptions=[],this.newCategory=e.group({category:e.control("",[Be.required]),subCategory:e.control("",[Be.required])}),this.newBook=e.group({title:e.control("",[Be.required]),author:e.control("",[Be.required]),price:e.control(0,[Be.required]),category:e.control(-1,[Be.required])}),this.deleteBook=e.control("",[Be.required]),t.getCategories().subscribe({next:r=>{r?.forEach(o=>{this.categoryOptions.push({value:o.id,displayValue:`${o.category} / ${o.subCategory}`})})}}),this.deleteBook=e.control("",[Be.required])}addNewCategory(){let e={id:0,category:this.newCategory.get("category")?.value,subCategory:this.newCategory.get("subCategory")?.value};this.apiService.addNewCategory(e).subscribe({next:t=>{t==="cannot insert"?this.snackBar.open("Already Exists!","OK"):this.snackBar.open("INSERTED","OK")}})}addNewBook(){let e={id:0,title:this.newBook.get("title")?.value,author:this.newBook.get("author")?.value,bookCategoryId:this.newBook.get("category")?.value,price:this.newBook.get("price")?.value,bookCategory:{id:0,category:"",subCategory:""},ordered:!1};this.apiService.addBook(e).subscribe({next:t=>{t==="inserted"?this.snackBar.open("Book Added","OK"):this.snackBar.open(t,"OK")}})}deleteExistingBook(){let e=this.deleteBook.value;this.apiService.deleteBook(e).subscribe({next:t=>{t==="deleted"&&this.snackBar.open("Book has been Deleted!","OK")},error:t=>this.snackBar.open("Book does not Exist!","OK")})}static{this.\u0275fac=function(t){return new(t||n)(B(ki),B(Ve),B(ft))}}static{this.\u0275cmp=_({type:n,selectors:[["maintenance"]],standalone:!1,decls:55,vars:6,consts:[["categorySelect",""],[3,"formGroup"],["color","accent"],["matInput","","formControlName","category"],["matInput","","formControlName","subCategory"],["mat-stroked-button","","color","accent",3,"click","disabled"],["color","accent",1,"book-title"],["matInput","","formControlName","title"],["color","accent",1,"book-author"],["matInput","","formControlName","author"],["color","accent",1,"book-price"],["matInput","","formControlName","price"],["color","accent",1,"category-select"],["formControlName","category"],[3,"value"],["matInput","",3,"formControl"]],template:function(t,i){if(t&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"h1"),p(3,"Add New Category"),m()(),d(4,"mat-card-content",1)(5,"mat-form-field",2)(6,"mat-label"),p(7,"Category"),m(),R(8,"input",3),m(),d(9,"mat-form-field",2)(10,"mat-label"),p(11,"SubCategory"),m(),R(12,"input",4),m(),d(13,"button",5),S("click",function(){return i.addNewCategory()}),d(14,"span"),p(15,"Add"),m()()()(),d(16,"mat-card")(17,"mat-card-header")(18,"h1"),p(19,"Add New Book"),m()(),d(20,"mat-card-content",1)(21,"mat-form-field",6)(22,"mat-label"),p(23,"Book Title"),m(),R(24,"input",7),m(),d(25,"mat-form-field",8)(26,"mat-label"),p(27,"Book Author"),m(),R(28,"input",9),m(),d(29,"mat-form-field",10)(30,"mat-label"),p(31,"Book Price"),m(),R(32,"input",11),m(),d(33,"mat-form-field",12)(34,"mat-label"),p(35,"Category"),m(),d(36,"mat-select",13,0),Tt(38,rS,3,4,"mat-option",14,aS,!0),m()(),d(40,"button",5),S("click",function(){return i.addNewBook()}),d(41,"span"),p(42,"Add"),m()()()(),d(43,"mat-card")(44,"mat-card-header")(45,"h1"),p(46,"Delete Existing Book"),m()(),d(47,"mat-card-content")(48,"mat-form-field",2)(49,"mat-label"),p(50,"Book ID"),m(),R(51,"input",15),m(),d(52,"button",5),S("click",function(){return i.deleteExistingBook()}),d(53,"span"),p(54,"Delete"),m()()()()),t&2){let r=qe(37);u(4),b("formGroup",i.newCategory),u(9),b("disabled",i.newCategory.invalid),u(7),b("formGroup",i.newBook),u(18),At(i.categoryOptions),u(2),b("disabled",i.newBook.invalid||r.empty),u(11),b("formControl",i.deleteBook),u(),b("disabled",i.deleteBook.invalid)}},dependencies:[di,it,Ze,Je,jn,qt,an,$n,vc,Bn,xi,Di,_m,en,ii,jr],styles:["mat-card[_ngcontent-%COMP%]{width:max-content;margin-bottom:2rem}mat-form-field[_ngcontent-%COMP%]{margin-right:1rem}.category-select[_ngcontent-%COMP%]{width:400px}.book-title[_ngcontent-%COMP%]{width:500px}.book-author[_ngcontent-%COMP%]{width:300px}.book-price[_ngcontent-%COMP%]{width:100px}"]})}}return n})();var ub=[{path:"login",component:N_},{path:"register",component:P_},{path:"home",component:eb},{path:"my-orders",component:tb},{path:"maintenance",component:mb},{path:"return-book",component:nb},{path:"approval-requests",component:ib},{path:"all-orders",component:sb},{path:"view-users",component:lb},{path:"profile",component:cb},{path:"**",component:wf}];var oS="@",sS=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=s(J);loadingSchedulerFn=s(lS,{optional:!0});_engine;constructor(e,t,i,r,o){this.doc=e,this.delegate=t,this.zone=i,this.animationType=r,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-CIFQO2B6.js").then(i=>i),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(i=>{throw new re(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc);let o=new r(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,t){let i=this.delegate.createRenderer(e,t);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let r=new bu(i);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let l=o.createRenderer(e,t);r.use(l),this.scheduler??=this.injector.get(Ju,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{r.use(i)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Ji()};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),bu=class{delegate;replay=[];\u0275type=1;constructor(a){this.delegate=a}use(a){if(this.delegate=a,this.replay!==null){for(let e of this.replay)e(a);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(a,e){return this.delegate.createElement(a,e)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}get destroyNode(){return this.delegate.destroyNode}appendChild(a,e){this.delegate.appendChild(a,e)}insertBefore(a,e,t,i){this.delegate.insertBefore(a,e,t,i)}removeChild(a,e,t,i){this.delegate.removeChild(a,e,t,i)}selectRootElement(a,e){return this.delegate.selectRootElement(a,e)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,e,t,i){this.delegate.setAttribute(a,e,t,i)}removeAttribute(a,e,t){this.delegate.removeAttribute(a,e,t)}addClass(a,e){this.delegate.addClass(a,e)}removeClass(a,e){this.delegate.removeClass(a,e)}setStyle(a,e,t,i){this.delegate.setStyle(a,e,t,i)}removeStyle(a,e,t){this.delegate.removeStyle(a,e,t)}setProperty(a,e,t){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(a,e,t)),this.delegate.setProperty(a,e,t)}setValue(a,e){this.delegate.setValue(a,e)}listen(a,e,t,i){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(a,e,t,i)),this.delegate.listen(a,e,t,i)}shouldReplay(a){return this.replay!==null&&a.startsWith(oS)}},lS=new g("");function hb(n="animations"){return Ar("NgAsyncAnimations"),Wi([{provide:wt,useFactory:()=>new sS(s(q),s(Wr),s(W),n)},{provide:Ta,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var cS=(n,a)=>{let e=localStorage.getItem("access_token");if(!e)return a(n);let t=["lazynoja.bsite.net","librarydeb.somee.com","deblmsapi.runasp.net","green-breeze-a7aa.mrouf7353.workers.dev","p13839740.somee.com","angualrdeb.somee.com","localhost:7030"],i=new URL(n.url,window.location.origin);return t.includes(i.hostname)?a(n.clone({setHeaders:{Authorization:`Bearer ${e}`}})):a(n)},pb={providers:[tm(ub,im({onSameUrlNavigation:"reload"})),hb(),Qu(Yf.forRoot({config:{tokenGetter:()=>localStorage.getItem("access_token"),allowedDomains:["localhost:7030","librarydeb.somee.com","deblmsapi.runasp.net","green-breeze-a7aa.mrouf7353.workers.dev","p13839740.somee.com","lazynoja.bsite.net","angualrdeb.somee.com"]}})),Fs(Dd([cS]),Ps())]};var fb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[ai,V]})}return n})();function dS(n,a){}var zi=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Wo=(()=>{class n extends Mi{_elementRef=s(F);_focusTrapFactory=s(lr);_config;_interactivityChecker=s(pa);_ngZone=s(W);_focusMonitor=s(ct);_renderer=s(ye);_changeDetectorRef=s(ee);_injector=s(J);_platform=s(se);_document=s(q);_portalOutlet;_focusTrapped=new M;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(zi,{optional:!0})||new zi,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{r(),o(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",i),o=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||Te(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let i=un(),r=this._elementRef.nativeElement;(!i||i===this._document.body||i===r||r.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=un();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=un()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,i){if(t&1&&oe(kt,7),t&2){let r;E(r=I())&&(i._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,i){t&2&&L("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[Y],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){t&1&&U(0,dS,0,0,"ng-template",0)},dependencies:[kt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),Go=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new M;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Ge(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},mS=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=s(J);return()=>oi(n)}}),uS=new g("DialogData"),hS=new g("DefaultDialogConfig");function pS(n){let a=z(n),e=new A;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var qo=(()=>{class n{_injector=s(J);_defaultOptions=s(hS,{optional:!0});_parentDialog=s(n,{optional:!0,skipSelf:!0});_overlayContainer=s(Ql);_idGenerator=s(ge);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new M;_afterOpenedAtThisLevel=new M;_ariaHiddenElements=new Map;_scrollStrategy=s(mS);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=sn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ie(void 0)));constructor(){}open(e,t){let i=this._defaultOptions||new zi;t=C(C({},i),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),o=fn(this._injector,r),l=new Go(o,t),c=this._attachContainer(o,l,t);if(l.containerInstance=c,!this.openDialogs.length){let h=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(ze(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(h)}):this._hideNonDialogContentFromAssistiveTechnology(h)}return this._attachDialogContent(e,l,c,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){vu(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){vu(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),vu(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new pn({positionStrategy:e.positionStrategy||Mn().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let r=i.injector||i.viewContainerRef?.injector,o=[{provide:zi,useValue:i},{provide:Go,useValue:t},{provide:hr,useValue:e}],l;i.container?typeof i.container=="function"?l=i.container:(l=i.container.type,o.push(...i.container.providers(i))):l=Wo;let c=new tn(l,i.viewContainerRef,J.create({parent:r||this._injector,providers:o}));return e.attach(c).instance}_attachDialogContent(e,t,i,r){if(e instanceof Ne){let o=this._createInjector(r,t,i,void 0),l={$implicit:r.data,dialogRef:t};r.templateContext&&(l=C(C({},l),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),i.attachTemplatePortal(new Gt(e,null,l,o))}else{let o=this._createInjector(r,t,i,this._injector),l=i.attachComponentPortal(new tn(e,r.viewContainerRef,o));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,i,r){let o=e.injector||e.viewContainerRef?.injector,l=[{provide:uS,useValue:e.data},{provide:Go,useValue:t}];return e.providers&&(typeof e.providers=="function"?l.push(...e.providers(t,e,i)):l.push(...e.providers)),e.direction&&(!o||!o.get(Me,null,{optional:!0}))&&l.push({provide:Me,useValue:pS(e.direction)}),J.create({parent:o||r,providers:l})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,o)=>{r?o.setAttribute("aria-hidden",r):o.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let r=t[i];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function vu(n,a){let e=n.length;for(;e--;)a(n[e])}var wc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({providers:[qo],imports:[Mt,St,ai,St]})}return n})();function fS(n,a){}var gb="_mat-bottom-sheet-enter",_b="_mat-bottom-sheet-exit",gS=(()=>{class n extends Wo{_breakpointSubscription;_animationsDisabled=_e();_animationState="void";_animationStateChanged=new A;_destroyed=!1;constructor(){super();let e=s(ha);this._breakpointSubscription=e.observe([ri.Medium,ri.Large,ri.XLarge]).subscribe(()=>{let t=this._elementRef.nativeElement.classList;t.toggle("mat-bottom-sheet-container-medium",e.isMatched(ri.Medium)),t.toggle("mat-bottom-sheet-container-large",e.isMatched(ri.Large)),t.toggle("mat-bottom-sheet-container-xlarge",e.isMatched(ri.XLarge))})}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(gb))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute("mat-exit",""),this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(_b))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(e){this._ngZone.run(()=>{this._handleAnimationEvent(!0,e),setTimeout(()=>this._handleAnimationEvent(!1,e))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(e,t){let i=t===gb;(i||t===_b)&&this._animationStateChanged.emit({toState:i?"visible":"hidden",phase:e?"start":"done"})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:9,hostBindings:function(t,i){t&1&&S("animationstart",function(o){return i._handleAnimationEvent(!0,o.animationName)})("animationend",function(o){return i._handleAnimationEvent(!1,o.animationName)})("animationcancel",function(o){return i._handleAnimationEvent(!1,o.animationName)}),t&2&&(L("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-label",i._config.ariaLabel),O("mat-bottom-sheet-container-animations-enabled",!i._animationsDisabled)("mat-bottom-sheet-container-enter",i._animationState==="visible")("mat-bottom-sheet-container-exit",i._animationState==="hidden"))},features:[Y],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){t&1&&U(0,fS,0,0,"ng-template",0)},dependencies:[kt],styles:[`@keyframes _mat-bottom-sheet-enter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
}
@keyframes _mat-bottom-sheet-exit {
  from {
    transform: none;
  }
  to {
    transform: translateY(100%);
  }
}
.mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  min-width: 100vw;
  box-sizing: border-box;
  display: block;
  outline: 0;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  background: var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));
  color: var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));
  line-height: var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-weight: var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking));
}
@media (forced-colors: active) {
  .mat-bottom-sheet-container {
    outline: 1px solid;
  }
}

.mat-bottom-sheet-container-animations-enabled {
  transform: translateY(100%);
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {
  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {
  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;
}

.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {
  border-top-left-radius: var(--mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--mat-bottom-sheet-container-shape, 28px);
}

.mat-bottom-sheet-container-medium {
  min-width: 384px;
  max-width: calc(100vw - 128px);
}

.mat-bottom-sheet-container-large {
  min-width: 512px;
  max-width: calc(100vw - 256px);
}

.mat-bottom-sheet-container-xlarge {
  min-width: 576px;
  max-width: calc(100vw - 384px);
}
`],encapsulation:2})}return n})(),_S=new g("MatBottomSheetData"),yu=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;height="";minHeight;maxHeight},Cc=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new M;_result;_closeFallbackTimeout;constructor(a,e,t){this._ref=a,this.containerInstance=t,this.disableClose=e.disableClose,t._animationStateChanged.pipe(le(i=>i.phase==="done"&&i.toState==="visible"),ze(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(le(i=>i.phase==="done"&&i.toState==="hidden"),ze(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),a.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),mt(this.backdropClick(),this.keydownEvents().pipe(le(i=>i.keyCode===27))).subscribe(i=>{!this.disableClose&&(i.type!=="keydown"||!Ge(i))&&(i.preventDefault(),this.dismiss())})}dismiss(a){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(le(e=>e.phase==="start"),ze(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=a,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},bS=new g("mat-bottom-sheet-default-options"),vS=(()=>{class n{_injector=s(J);_parentBottomSheet=s(n,{optional:!0,skipSelf:!0});_animationsDisabled=_e();_defaultOptions=s(bS,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=s(qo);get _openedBottomSheetRef(){let e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e}constructor(){}open(e,t){let i=C(C({},this._defaultOptions||new yu),t),r;return this._dialog.open(e,Ce(C({},i),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:"100%",container:gS,scrollStrategy:i.scrollStrategy||oi(this._injector),positionStrategy:Mn(this._injector).centerHorizontally().bottom("0"),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:r}),providers:(o,l,c)=>(r=new Cc(o,i,c),[{provide:Cc,useValue:r},{provide:_S,useValue:i.data}])})),r.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===r&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>r.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):r.containerInstance.enter(),this._openedBottomSheetRef=r,r}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({providers:[vS],imports:[wc,St,V]})}return n})();var yS=["button"],wS=["*"];function CS(n,a){if(n&1&&(d(0,"div",2),R(1,"mat-pseudo-checkbox",6),m()),n&2){let e=k();u(),b("disabled",e.disabled)}}var xS=new g("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),DS=new g("MatButtonToggleGroup");var wu=class{source;value;constructor(a,e){this.source=a,this.value=e}};var kS=(()=>{class n{_changeDetectorRef=s(ee);_elementRef=s(F);_focusMonitor=s(ct);_idGenerator=s(ge);_animationDisabled=_e();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new A;constructor(){s(ke).load(dt);let e=s(DS,{optional:!0}),t=s(new rt("tabindex"),{optional:!0})||"",i=s(xS,{optional:!0});this._tabIndex=z(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:"standard",this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new wu(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-button-toggle"]],viewQuery:function(t,i){if(t&1&&oe(yS,5),t&2){let r;E(r=I())&&(i._buttonElement=r.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,i){t&1&&S("focus",function(){return i.focus()}),t&2&&(L("aria-label",null)("aria-labelledby",null)("id",i.id)("name",null),O("mat-button-toggle-standalone",!i.buttonToggleGroup)("mat-button-toggle-checked",i.checked)("mat-button-toggle-disabled",i.disabled)("mat-button-toggle-disabled-interactive",i.disabledInteractive)("mat-button-toggle-appearance-standard",i.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",N],appearance:"appearance",checked:[2,"checked","checked",N],disabled:[2,"disabled","disabled",N],disabledInteractive:[2,"disabledInteractive","disabledInteractive",N]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:wS,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,i){if(t&1&&(Q(),d(0,"button",1,0),S("click",function(){return i._onButtonClick()}),j(2,CS,2,1,"div",2),d(3,"span",3),P(4),m()(),R(5,"span",4)(6,"span",5)),t&2){let r=qe(1);b("id",i.buttonId)("disabled",i.disabled&&!i.disabledInteractive||null),L("role",i.isSingleSelector()?"radio":"button")("tabindex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("aria-pressed",i.isSingleSelector()?null:i.checked)("aria-checked",i.isSingleSelector()?i.checked:null)("name",i._getButtonName())("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),u(2),H(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),u(4),b("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)}},dependencies:[_n,sc],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return n})(),vb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[nt,kS,V]})}return n})();var SS=["mat-internal-form-field",""],MS=["*"],Cr=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,i){t&2&&O("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:SS,ngContentSelectors:MS,decls:1,vars:0,template:function(t,i){t&1&&(Q(),P(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var ES=["input"],IS=["label"],TS=["*"],Cu={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},AS=new g("mat-checkbox-default-options",{providedIn:"root",factory:()=>Cu}),Nt=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(Nt||{}),xu=class{source;checked},RS=(()=>{class n{_elementRef=s(F);_changeDetectorRef=s(ee);_ngZone=s(W);_animationsDisabled=_e();_options=s(AS,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new xu;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new A;indeterminateChange=new A;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Nt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){s(ke).load(dt);let e=s(new rt("tabindex"),{optional:!0});this._options=this._options||Cu,this.color=this._options.color||Cu.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=s(ge).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(Nt.Indeterminate):this._transitionCheckState(this.checked?Nt.Checked:Nt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=z(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Nt.Checked:Nt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case Nt.Init:if(t===Nt.Checked)return this._animationClasses.uncheckedToChecked;if(t==Nt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Nt.Unchecked:return t===Nt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Nt.Checked:return t===Nt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Nt.Indeterminate:return t===Nt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,i){if(t&1&&oe(ES,5)(IS,5),t&2){let r;E(r=I())&&(i._inputElement=r.first),E(r=I())&&(i._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,i){t&2&&(He("id",i.id),L("tabindex",null)("aria-label",null)("aria-labelledby",null),Fe(i.color?"mat-"+i.color:"mat-accent"),O("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",N],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",N],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",N],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Ue(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",N],checked:[2,"checked","checked",N],disabled:[2,"disabled","disabled",N],indeterminate:[2,"indeterminate","indeterminate",N]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[X([{provide:wi,useExisting:yt(()=>n),multi:!0},{provide:Ci,useExisting:n,multi:!0}]),de],ngContentSelectors:TS,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,i){if(t&1&&(Q(),d(0,"div",3),S("click",function(o){return i._preventBubblingFromLabel(o)}),d(1,"div",4,0)(3,"div",5),S("click",function(){return i._onTouchTargetClick()}),m(),d(4,"input",6,1),S("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(o){return i._onInteractionEvent(o)}),m(),R(6,"div",7),d(7,"div",8),Ke(),d(8,"svg",9),R(9,"path",10),m(),qn(),R(10,"div",11),m(),R(11,"div",12),m(),d(12,"label",13,2),P(14),m()()),t&2){let r=qe(2);b("labelPosition",i.labelPosition),u(4),O("mdc-checkbox--selected",i.checked),b("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),L("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),u(7),b("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),u(),b("for",i.inputId)}},dependencies:[_n,Cr],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),yb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[RS,V]})}return n})();var OS=new g("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var wb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({providers:[Un,{provide:OS,useValue:{separatorKeyCodes:[13]}}],imports:[nt,V]})}return n})();var xr="Method not implemented",Tn=class{locale;_localeChanges=new M;localeChanges=this._localeChanges;setTime(a,e,t,i){throw new Error(xr)}getHours(a){throw new Error(xr)}getMinutes(a){throw new Error(xr)}getSeconds(a){throw new Error(xr)}parseTime(a,e){throw new Error(xr)}addSeconds(a,e){throw new Error(xr)}getValidDateOrNull(a){return this.isDateInstance(a)&&this.isValid(a)?a:null}deserialize(a){return a==null||this.isDateInstance(a)&&this.isValid(a)?a:this.invalid()}setLocale(a){this.locale=a,this._localeChanges.next()}compareDate(a,e){return this.getYear(a)-this.getYear(e)||this.getMonth(a)-this.getMonth(e)||this.getDate(a)-this.getDate(e)}compareTime(a,e){return this.getHours(a)-this.getHours(e)||this.getMinutes(a)-this.getMinutes(e)||this.getSeconds(a)-this.getSeconds(e)}sameDate(a,e){if(a&&e){let t=this.isValid(a),i=this.isValid(e);return t&&i?!this.compareDate(a,e):t==i}return a==e}sameTime(a,e){if(a&&e){let t=this.isValid(a),i=this.isValid(e);return t&&i?!this.compareTime(a,e):t==i}return a==e}clampDate(a,e,t){return e&&this.compareDate(a,e)<0?e:t&&this.compareDate(a,t)>0?t:a}},Yo=new g("mat-date-formats");var FS=["tooltip"],PS=20;var NS=new g("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(J);return()=>zn(n,{scrollThrottle:PS})}}),LS=new g("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Cb="tooltip-panel",BS={passive:!0},VS=8,zS=8,jS=24,HS=200,xc=(()=>{class n{_elementRef=s(F);_ngZone=s(W);_platform=s(se);_ariaDescriber=s(Am);_focusMonitor=s(ct);_dir=s(Me);_injector=s(J);_viewContainerRef=s(Qe);_mediaMatcher=s(or);_document=s(q);_renderer=s(ye);_animationsDisabled=_e();_defaultOptions=s(LS,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=US;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Xe(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Xe(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=lt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=lt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new M;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=VS}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ne(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new tn(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=i.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(ne(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof F)return this._overlayRef;this._detach()}let t=this._injector.get(Vn).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Cb}`,r=Ei(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(ne(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=fn(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(NS)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ne(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ne(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ne(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ne(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(C(C({},i.main),r.main)),this._addOffset(C(C({},i.fallback),r.fallback))])}_addOffset(e){let t=zS,i=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=i?-t:t:e.originX==="end"&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"||t=="below"?i={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={originX:"end",originY:"center"});let{x:r,y:o}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:r,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"?i={overlayX:"center",overlayY:"bottom"}:t=="below"?i={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={overlayX:"start",overlayY:"center"});let{x:r,y:o}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:r,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Te(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:r}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=i==="end"?"left":"right":o=i==="start"?"left":"right":o=t==="bottom"&&r==="top"?"above":"below",o!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${Cb}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,BS))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,i=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(e==="on"||!t.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Te({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ge(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){t&2&&O("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),US=(()=>{class n{_changeDetectorRef=s(ee);_elementRef=s(F);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=_e();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new M;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>jS&&e.width>=HS}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:i),t.classList.add(e?i:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(t&1&&oe(FS,7),t&2){let r;E(r=I())&&(i._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,i){t&1&&S("mouseleave",function(o){return i._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,i){t&1&&(De(0,"div",1,0),Or("animationend",function(o){return i._handleAnimationEnd(o)}),De(2,"div",2),p(3),Se()()),t&2&&(Fe(i.tooltipClass),O("mdc-tooltip--multiline",i._isMultiline),u(3),Ee(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var $S=["mat-calendar-body",""];function GS(n,a){return this._trackRow(a)}var Eb=(n,a)=>a.id;function WS(n,a){if(n&1&&(De(0,"tr",0)(1,"td",3),p(2),Se()()),n&2){let e=k();u(),et("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),L("colspan",e.numCols),u(),G(" ",e.label," ")}}function qS(n,a){if(n&1&&(De(0,"td",3),p(1),Se()),n&2){let e=k(2);et("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),L("colspan",e._firstRowOffset),u(),G(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function YS(n,a){if(n&1){let e=Oe();De(0,"td",6)(1,"button",7),Or("click",function(i){let r=be(e).$implicit,o=k(2);return ve(o._cellClicked(r,i))})("focus",function(i){let r=be(e).$implicit,o=k(2);return ve(o._emitActiveDateChange(r,i))}),De(2,"span",8),p(3),Se(),at(4,"span",9),Se()()}if(n&2){let e=a.$implicit,t=a.$index,i=k().$index,r=k();et("width",r._cellWidth)("padding-top",r._cellPadding)("padding-bottom",r._cellPadding),L("data-mat-row",i)("data-mat-col",t),u(),Fe(e.cssClasses),O("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",r._isActiveCell(i,t))("mat-calendar-body-range-start",r._isRangeStart(e.compareValue))("mat-calendar-body-range-end",r._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",r._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",r._isComparisonBridgeStart(e.compareValue,i,t))("mat-calendar-body-comparison-bridge-end",r._isComparisonBridgeEnd(e.compareValue,i,t))("mat-calendar-body-comparison-start",r._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",r._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",r._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",r._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",r._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",r._isInPreview(e.compareValue)),He("tabIndex",r._isActiveCell(i,t)?0:-1),L("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",r._isSelected(e.compareValue))("aria-current",r.todayValue===e.compareValue?"date":null)("aria-describedby",r._getDescribedby(e.compareValue)),u(),O("mat-calendar-body-selected",r._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",r._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",r.todayValue===e.compareValue),u(),G(" ",e.displayValue," ")}}function KS(n,a){if(n&1&&(De(0,"tr",1),j(1,qS,2,6,"td",4),Tt(2,YS,5,49,"td",5,Eb),Se()),n&2){let e=a.$implicit,t=a.$index,i=k();u(),H(t===0&&i._firstRowOffset?1:-1),u(),At(e)}}function QS(n,a){if(n&1&&(d(0,"th",2)(1,"span",6),p(2),m(),d(3,"span",3),p(4),m()()),n&2){let e=a.$implicit;u(2),Ee(e.long),u(2),Ee(e.narrow)}}var XS=["*"];function ZS(n,a){}function JS(n,a){if(n&1){let e=Oe();d(0,"mat-month-view",4),os("activeDateChange",function(i){be(e);let r=k();return rs(r.activeDate,i)||(r.activeDate=i),ve(i)}),S("_userSelection",function(i){be(e);let r=k();return ve(r._dateSelected(i))})("dragStarted",function(i){be(e);let r=k();return ve(r._dragStarted(i))})("dragEnded",function(i){be(e);let r=k();return ve(r._dragEnded(i))}),m()}if(n&2){let e=k();as("activeDate",e.activeDate),b("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function eM(n,a){if(n&1){let e=Oe();d(0,"mat-year-view",5),os("activeDateChange",function(i){be(e);let r=k();return rs(r.activeDate,i)||(r.activeDate=i),ve(i)}),S("monthSelected",function(i){be(e);let r=k();return ve(r._monthSelectedInYearView(i))})("selectedChange",function(i){be(e);let r=k();return ve(r._goToDateInView(i,"month"))}),m()}if(n&2){let e=k();as("activeDate",e.activeDate),b("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function tM(n,a){if(n&1){let e=Oe();d(0,"mat-multi-year-view",6),os("activeDateChange",function(i){be(e);let r=k();return rs(r.activeDate,i)||(r.activeDate=i),ve(i)}),S("yearSelected",function(i){be(e);let r=k();return ve(r._yearSelectedInMultiYearView(i))})("selectedChange",function(i){be(e);let r=k();return ve(r._goToDateInView(i,"year"))}),m()}if(n&2){let e=k();as("activeDate",e.activeDate),b("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function nM(n,a){}var iM=["button"],aM=[[["","matDatepickerToggleIcon",""]]],rM=["[matDatepickerToggleIcon]"];function oM(n,a){n&1&&(Ke(),d(0,"svg",2),R(1,"path",3),m())}var kr=(()=>{class n{changes=new M;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),sM=0,Qo=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=sM++;cssClasses;constructor(a,e,t,i,r,o=a,l){this.value=a,this.displayValue=e,this.ariaLabel=t,this.enabled=i,this.compareValue=o,this.rawValue=l,this.cssClasses=r instanceof Set?Array.from(r):r}},lM={passive:!1,capture:!0},Dc={passive:!0,capture:!0},xb={passive:!0},Dr=(()=>{class n{_elementRef=s(F);_ngZone=s(W);_platform=s(se);_intl=s(kr);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new A;previewChange=new A;activeDateChange=new A;dragStarted=new A;dragEnded=new A;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(J);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(ye),t=s(ge);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),s(ke).load(dt),this._ngZone.runOutsideAngular(()=>{let i=this._elementRef.nativeElement,r=[e.listen(i,"touchmove",this._touchmoveHandler,lM),e.listen(i,"mouseenter",this._enterHandler,Dc),e.listen(i,"focus",this._enterHandler,Dc),e.listen(i,"mouseleave",this._leaveHandler,Dc),e.listen(i,"blur",this._leaveHandler,Dc),e.listen(i,"mousedown",this._mousedownHandler,xb),e.listen(i,"touchstart",this._mousedownHandler,xb)];this._platform.isBrowser&&r.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=r})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:i,numCols:r}=this;(e.rows||t)&&(this._firstRowOffset=i&&i.length&&i[0].length?r-i[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/r}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/r}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let i=e*this.numCols+t;return e&&(i-=this._firstRowOffset),i==this.activeCell}_focusActiveCell(e=!0){Te(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Su(e,this.startValue,this.endValue)}_isRangeEnd(e){return Mu(e,this.startValue,this.endValue)}_isInRange(e){return Eu(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Su(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,i){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let r=this.rows[t][i-1];if(!r){let o=this.rows[t-1];r=o&&o[o.length-1]}return r&&!this._isRangeEnd(r.compareValue)}_isComparisonBridgeEnd(e,t,i){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let r=this.rows[t][i+1];if(!r){let o=this.rows[t+1];r=o&&o[0]}return r&&!this._isRangeStart(r.compareValue)}_isComparisonEnd(e){return Mu(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Eu(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Su(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Mu(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Eu(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Db(e),i=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),ku(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:i?.enabled?i:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=ku(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let i=this._getCellFromElement(t);this.dragEnded.emit({value:i?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Db(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=ku(e);if(t){let i=t.getAttribute("data-mat-row"),r=t.getAttribute("data-mat-col");if(i&&r)return this.rows[parseInt(i)]?.[parseInt(r)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[de],attrs:$S,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,i){t&1&&(j(0,WS,3,6,"tr",0),Tt(1,KS,4,1,"tr",1,GS,!0),De(3,"span",2),p(4),Se(),De(5,"span",2),p(6),Se(),De(7,"span",2),p(8),Se(),De(9,"span",2),p(10),Se()),t&2&&(H(i._firstRowOffset<i.labelMinRequiredCells?0:-1),u(),At(i.rows),u(2),He("id",i._startDateLabelId),u(),G(" ",i.startDateAccessibleName,`
`),u(),He("id",i._endDateLabelId),u(),G(" ",i.endDateAccessibleName,`
`),u(),He("id",i._comparisonStartDateLabelId),u(),Jc(" ",i.comparisonDateAccessibleName," ",i.startDateAccessibleName,`
`),u(),He("id",i._comparisonEndDateLabelId),u(),Jc(" ",i.comparisonDateAccessibleName," ",i.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Du(n){return n?.nodeName==="TD"}function ku(n){let a;return Du(n)?a=n:Du(n.parentNode)?a=n.parentNode:Du(n.parentNode?.parentNode)&&(a=n.parentNode.parentNode),a?.getAttribute("data-mat-row")!=null?a:null}function Su(n,a,e){return e!==null&&a!==e&&n<e&&n===a}function Mu(n,a,e){return a!==null&&a!==e&&n>=a&&n===e}function Eu(n,a,e,t){return t&&a!==null&&e!==null&&a!==e&&n>=a&&n<=e}function Db(n){let a=n.changedTouches[0];return document.elementFromPoint(a.clientX,a.clientY)}var bn=class{start;end;_disableStructuralEquivalency;constructor(a,e){this.start=a,this.end=e}},kc=(()=>{class n{selection;_adapter;_selectionChanged=new M;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let i=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:i})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Ji()};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),cM=(()=>{class n extends kc{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(Z(Tn))};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})();var dM={provide:kc,useFactory:()=>s(kc,{optional:!0,skipSelf:!0})||new cM(s(Tn))};var Ib=new g("MAT_DATE_RANGE_SELECTION_STRATEGY");var Iu=7,mM=0,kb=(()=>{class n{_changeDetectorRef=s(ee);_dateFormats=s(Yo,{optional:!0});_dateAdapter=s(Tn,{optional:!0});_dir=s(Me,{optional:!0});_rangeStrategy=s(Ib,{optional:!0});_rerenderSubscription=Pe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof bn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new A;_userSelection=new A;dragStarted=new A;dragEnded=new A;activeDateChange=new A;_matCalendarBody;_monthLabel=z("");_weeks=z([]);_firstWeekOffset=z(0);_rangeStart=z(null);_rangeEnd=z(null);_comparisonRangeStart=z(null);_comparisonRangeEnd=z(null);_previewStart=z(null);_previewEnd=z(null);_isRange=z(!1);_todayDate=z(null);_weekdays=z([]);constructor(){s(ke).load(hn),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ie(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,i=this._getDateFromDayOfMonth(t),r,o;this._selected instanceof bn?(r=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):r=o=this._getDateInCurrentMonth(this._selected),(r!==t||o!==t)&&this.selectedChange.emit(i),this._userSelection.emit({value:i,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!Ge(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Iu+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Iu),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let i=t?t.rawValue:null,r=this._rangeStrategy.createPreview(i,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)),this.activeDrag&&i){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,i,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),r=this._dateAdapter.getDayOfWeekNames("long").map((o,l)=>({long:o,narrow:t[l],id:mM++}));this._weekdays.set(r.slice(e).concat(r.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),i=[[]];for(let r=0,o=this._firstWeekOffset();r<e;r++,o++){o==Iu&&(i.push([]),o=0);let l=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),r+1),c=this._shouldEnableDate(l),h=this._dateAdapter.format(l,this._dateFormats.display.dateA11yLabel),f=this.dateClass?this.dateClass(l,"month"):void 0;i[i.length-1].push(new Qo(r+1,t[r],h,c,f,this._getCellCompareValue(l),l))}this._weeks.set(i)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),i=this._dateAdapter.getMonth(e),r=this._dateAdapter.getDate(e);return new Date(t,i,r).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof bn?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,i){if(t&1&&oe(Dr,5),t&2){let r;E(r=I())&&(i._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[de],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,i){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),Tt(3,QS,5,2,"th",2,Eb),m(),d(5,"tr",3),R(6,"th",4),m()(),d(7,"tbody",5),S("selectedValueChange",function(o){return i._dateSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("previewChange",function(o){return i._previewChanged(o)})("dragStarted",function(o){return i.dragStarted.emit(o)})("dragEnded",function(o){return i._dragEnded(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),m()()),t&2&&(u(3),At(i._weekdays()),u(4),b("label",i._monthLabel())("rows",i._weeks())("todayValue",i._todayDate())("startValue",i._rangeStart())("endValue",i._rangeEnd())("comparisonStart",i._comparisonRangeStart())("comparisonEnd",i._comparisonRangeEnd())("previewStart",i._previewStart())("previewEnd",i._previewEnd())("isRange",i._isRange())("labelMinRequiredCells",3)("activeCell",i._dateAdapter.getDate(i.activeDate)-1)("startDateAccessibleName",i.startDateAccessibleName)("endDateAccessibleName",i.endDateAccessibleName))},dependencies:[Dr],encapsulation:2,changeDetection:0})}return n})(),rn=24,Tu=4,Sb=(()=>{class n{_changeDetectorRef=s(ee);_dateAdapter=s(Tn,{optional:!0});_dir=s(Me,{optional:!0});_rerenderSubscription=Pe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),Tb(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof bn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new A;yearSelected=new A;activeDateChange=new A;_matCalendarBody;_years=z([]);_todayYear=z(0);_selectedYear=z(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ie(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Ko(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),i=[];for(let r=0,o=[];r<rn;r++)o.push(t+r),o.length==Tu&&(i.push(o.map(l=>this._createCellForYear(l))),o=[]);this._years.set(i),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,i=this._dateAdapter.createDate(t,0,1),r=this._getDateFromYear(t);this.yearSelected.emit(i),this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Tu);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Tu);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ko(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,rn-Ko(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-rn*10:-rn);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?rn*10:rn);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Ko(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),i=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),i=this._dateAdapter.getYearName(t),r=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Qo(e,i,i,this._shouldEnableYear(e),r)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let i=t;this._dateAdapter.getYear(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof bn){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,i){if(t&1&&oe(Dr,5),t&2){let r;E(r=I())&&(i._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),R(3,"th",2),m()(),d(4,"tbody",3),S("selectedValueChange",function(o){return i._yearSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),m()()),t&2&&(u(4),b("rows",i._years())("todayValue",i._todayYear())("startValue",i._selectedYear())("endValue",i._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",i._getActiveCell()))},dependencies:[Dr],encapsulation:2,changeDetection:0})}return n})();function Tb(n,a,e,t,i){let r=n.getYear(a),o=n.getYear(e),l=Ab(n,t,i);return Math.floor((r-l)/rn)===Math.floor((o-l)/rn)}function Ko(n,a,e,t){let i=n.getYear(a);return uM(i-Ab(n,e,t),rn)}function Ab(n,a,e){let t=0;return e?t=n.getYear(e)-rn+1:a&&(t=n.getYear(a)),t}function uM(n,a){return(n%a+a)%a}var Mb=(()=>{class n{_changeDetectorRef=s(ee);_dateFormats=s(Yo,{optional:!0});_dateAdapter=s(Tn,{optional:!0});_dir=s(Me,{optional:!0});_rerenderSubscription=Pe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof bn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new A;monthSelected=new A;activeDateChange=new A;_matCalendarBody;_months=z([]);_yearLabel=z("");_todayMonth=z(null);_selectedMonth=z(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ie(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(i);let r=this._getDateFromMonth(t);this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(i=>this._createCellForMonth(i,e[i])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForMonth(e,t){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.format(i,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(i,"year"):void 0;return new Qo(e,t.toLocaleUpperCase(),r,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(t,e,1);for(let r=i;this._dateAdapter.getMonth(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let i=this._dateAdapter.getYear(this.maxDate),r=this._dateAdapter.getMonth(this.maxDate);return e>i||e===i&&t>r}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let i=this._dateAdapter.getYear(this.minDate),r=this._dateAdapter.getMonth(this.minDate);return e<i||e===i&&t<r}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof bn?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,i){if(t&1&&oe(Dr,5),t&2){let r;E(r=I())&&(i._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),R(3,"th",2),m()(),d(4,"tbody",3),S("selectedValueChange",function(o){return i._monthSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),m()()),t&2&&(u(4),b("label",i._yearLabel())("rows",i._months())("todayValue",i._todayMonth())("startValue",i._selectedMonth())("endValue",i._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",i._dateAdapter.getMonth(i.activeDate)))},dependencies:[Dr],encapsulation:2,changeDetection:0})}return n})(),Rb=(()=>{class n{_intl=s(kr);calendar=s(Au);_dateAdapter=s(Tn,{optional:!0});_dateFormats=s(Yo,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(ke).load(hn);let e=s(ee);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-rn))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:rn))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,i=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=i.getYearName(e.activeDate),this._periodButtonDescription=i.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Tb(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Ko(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),i=t+rn-1,r=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1));return[r,o]}_periodButtonLabelId=s(ge).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:XS,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,i){t&1&&(Q(),d(0,"div",0)(1,"div",1)(2,"span",2),p(3),m(),d(4,"button",3),S("click",function(){return i.currentPeriodClicked()}),d(5,"span",4),p(6),m(),Ke(),d(7,"svg",5),R(8,"polygon",6),m()(),qn(),R(9,"div",7),P(10),d(11,"button",8),S("click",function(){return i.previousClicked()}),Ke(),d(12,"svg",9),R(13,"path",10),m()(),qn(),d(14,"button",11),S("click",function(){return i.nextClicked()}),Ke(),d(15,"svg",9),R(16,"path",12),m()()()()),t&2&&(u(2),b("id",i._periodButtonLabelId),u(),Ee(i.periodButtonDescription),u(),L("aria-label",i.periodButtonLabel)("aria-describedby",i._periodButtonLabelId),u(2),Ee(i.periodButtonText),u(),O("mat-calendar-invert",i.calendar.currentView!=="month"),u(4),b("disabled",!i.previousEnabled())("matTooltip",i.prevButtonLabel),L("aria-label",i.prevButtonLabel),u(3),b("disabled",!i.nextEnabled())("matTooltip",i.nextButtonLabel),L("aria-label",i.nextButtonLabel))},dependencies:[it,Wt,xc],encapsulation:2,changeDetection:0})}return n})(),Au=(()=>{class n{_dateAdapter=s(Tn,{optional:!0});_dateFormats=s(Yo,{optional:!0});_changeDetectorRef=s(ee);_elementRef=s(F);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof bn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new A;yearSelected=new A;monthSelected=new A;viewChanged=new A(!0);_userSelection=new A;_userDragDrop=new A;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new M;constructor(){this._intlChanges=s(kr).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new tn(this.headerComponent||Rb),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,i=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,r=t||i||e.dateFilter;if(r&&!r.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(un())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof bn||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,i){if(t&1&&oe(kb,5)(Mb,5)(Sb,5),t&2){let r;E(r=I())&&(i.monthView=r.first),E(r=I())&&(i.yearView=r.first),E(r=I())&&(i.multiYearView=r.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[X([dM]),de],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,i){if(t&1&&(U(0,ZS,0,0,"ng-template",0),d(1,"div",1),j(2,JS,1,11,"mat-month-view",2)(3,eM,1,6,"mat-year-view",3)(4,tM,1,6,"mat-multi-year-view",3),m()),t&2){let r;b("cdkPortalOutlet",i._calendarHeaderPortal),u(2),H((r=i.currentView)==="month"?2:r==="year"?3:r==="multi-year"?4:-1)}},dependencies:[kt,Dm,kb,Mb,Sb],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();var hM=(()=>{class n{_elementRef=s(F);_animationsDisabled=_e();_changeDetectorRef=s(ee);_globalModel=s(kc);_dateAdapter=s(Tn);_ngZone=s(W);_rangeSelectionStrategy=s(Ib,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new M;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(ke).load(hn),this._closeButtonText=s(kr).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=s(ye);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,i=e.value,r=t instanceof bn;if(r&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(i,t,e.event);this._model.updateSelection(o,this)}else i&&(r||!this._dateAdapter.sameDate(i,t))&&this._model.add(i);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,i){if(t&1&&oe(Au,5),t&2){let r;E(r=I())&&(i._calendar=r.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,i){t&2&&(Fe(i.color?"mat-"+i.color:""),O("mat-datepicker-content-touch",i.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!i._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,i){t&1&&(d(0,"div",0)(1,"mat-calendar",1),S("yearSelected",function(o){return i.datepicker._selectYear(o)})("monthSelected",function(o){return i.datepicker._selectMonth(o)})("viewChanged",function(o){return i.datepicker._viewChanged(o)})("_userSelection",function(o){return i._handleUserSelection(o)})("_userDragDrop",function(o){return i._handleUserDragDrop(o)}),m(),U(2,nM,0,0,"ng-template",2),d(3,"button",3),S("focus",function(){return i._closeButtonFocused=!0})("blur",function(){return i._closeButtonFocused=!1})("click",function(){return i.datepicker.close()}),p(4),m()()),t&2&&(O("mat-datepicker-content-container-with-custom-header",i.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",i._actionsPortal),L("aria-modal",!0)("aria-labelledby",i._dialogLabelId??void 0),u(),Fe(i.datepicker.panelClass),b("id",i.datepicker.id)("startAt",i.datepicker.startAt)("startView",i.datepicker.startView)("minDate",i.datepicker._getMinDate())("maxDate",i.datepicker._getMaxDate())("dateFilter",i.datepicker._getDateFilter())("headerComponent",i.datepicker.calendarHeaderComponent)("selected",i._getSelected())("dateClass",i.datepicker.dateClass)("comparisonStart",i.comparisonStart)("comparisonEnd",i.comparisonEnd)("startDateAccessibleName",i.startDateAccessibleName)("endDateAccessibleName",i.endDateAccessibleName),u(),b("cdkPortalOutlet",i._actionsPortal),u(),O("cdk-visually-hidden",!i._closeButtonFocused),b("color",i.color||"primary"),u(),Ee(i._closeButtonText))},dependencies:[Sm,Au,kt,it],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var pM=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),fM=(()=>{class n{_intl=s(kr);_changeDetectorRef=s(ee);_stateChanges=Pe.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new rt("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:K(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:K(),i=this.datepicker?mt(this.datepicker.openedStream,this.datepicker.closedStream):K();this._stateChanges.unsubscribe(),this._stateChanges=mt(this._intl.changes,e,t,i).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,i,r){if(t&1&&xe(r,pM,5),t&2){let o;E(o=I())&&(i._customIcon=o.first)}},viewQuery:function(t,i){if(t&1&&oe(iM,5),t&2){let r;E(r=I())&&(i._button=r.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,i){t&1&&S("click",function(o){return i._open(o)}),t&2&&(L("tabindex",null)("data-mat-calendar",i.datepicker?i.datepicker.id:null),O("mat-datepicker-toggle-active",i.datepicker&&i.datepicker.opened)("mat-accent",i.datepicker&&i.datepicker.color==="accent")("mat-warn",i.datepicker&&i.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",N],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[de],ngContentSelectors:rM,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,i){t&1&&(Q(aM),d(0,"button",1,0),j(2,oM,2,0,":svg:svg",2),P(3),m()),t&2&&(b("tabIndex",i.disabled?-1:i.tabIndex)("disabled",i.disabled)("disableRipple",i.disableRipple),L("aria-haspopup",i.datepicker?"dialog":null)("aria-label",i.ariaLabel||i._intl.openCalendarLabel)("aria-expanded",i.datepicker?i.datepicker.opened:null),u(2),H(i._customIcon?-1:2))},dependencies:[Wt],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Ob=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({providers:[kr],imports:[Ii,Mt,ai,St,hM,fM,Rb,V,Ft]})}return n})();function gM(n,a){}var Mc=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ru="mdc-dialog--open",Fb="mdc-dialog--opening",Pb="mdc-dialog--closing",_M=150,bM=75,vM=(()=>{class n extends Wo{_animationStateChanged=new A;_animationsEnabled=!_e();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Lb(this._config.enterAnimationDuration)??_M:0;_exitAnimationDuration=this._animationsEnabled?Lb(this._config.exitAnimationDuration)??bM:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Nb,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Fb,Ru)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ru),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ru),this._animationsEnabled?(this._hostElement.style.setProperty(Nb,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Pb)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Fb,Pb)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,i){t&2&&(He("id",i._config.id),L("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),O("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[Y],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(d(0,"div",0)(1,"div",1),U(2,gM,0,0,"ng-template",2),m()())},dependencies:[kt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),Nb="--mat-dialog-transition-duration";function Lb(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?lt(n.substring(0,n.length-2)):n.endsWith("s")?lt(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Sc=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Sc||{}),Ou=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Er(1);_beforeClosed=new Er(1);_result;_closeFallbackTimeout;_state=Sc.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(le(i=>i.state==="opened"),ze(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(le(i=>i.state==="closed"),ze(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),mt(this.backdropClick(),this.keydownEvents().pipe(le(i=>i.keyCode===27&&!this.disableClose&&!Ge(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),yM(this,i.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(le(t=>t.state==="closing"),ze(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Sc.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Sc.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function yM(n,a,e){return n._closeInteractionType=a,n.close(e)}var wM=new g("MatMdcDialogData"),CM=new g("mat-mdc-dialog-default-options"),xM=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(J);return()=>oi(n)}}),DM=(()=>{class n{_defaultOptions=s(CM,{optional:!0});_scrollStrategy=s(xM);_parentDialog=s(n,{optional:!0,skipSelf:!0});_idGenerator=s(ge);_injector=s(J);_dialog=s(qo);_animationsDisabled=_e();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new M;_afterOpenedAtThisLevel=new M;dialogConfigClass=Mc;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=sn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ie(void 0)));constructor(){this._dialogRefConstructor=Ou,this._dialogContainerType=vM,this._dialogDataToken=wM}open(e,t){let i;t=C(C({},this._defaultOptions||new Mc),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,Ce(C({},t),{positionStrategy:Mn(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:zi,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(o,l,c)=>(i=new this._dialogRefConstructor(o,t,c),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=r.componentRef,i.componentInstance=r.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let o=this.openDialogs.indexOf(i);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Bb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({providers:[DM],imports:[wc,Mt,St,V]})}return n})();var Vb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[nt,Mt,V,Ft]})}return n})();var Ec=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[ai,Mt,V,Ft]})}return n})();function kM(n,a){if(n&1&&(d(0,"mat-option",17),p(1),m()),n&2){let e=a.$implicit;b("value",e),u(),G(" ",e," ")}}function SM(n,a){if(n&1){let e=Oe();d(0,"mat-form-field",14)(1,"mat-select",16,0),S("selectionChange",function(i){be(e);let r=k(2);return ve(r._changePageSize(i.value))}),Tt(3,kM,2,2,"mat-option",17,ea),m(),d(5,"div",18),S("click",function(){be(e);let i=qe(2);return ve(i.open())}),m()()}if(n&2){let e=k(2);b("appearance",e._formFieldAppearance)("color",e.color),u(),b("value",e.pageSize)("disabled",e.disabled),Xc("aria-labelledby",e._pageSizeLabelId),b("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),u(2),At(e._displayedPageSizeOptions)}}function MM(n,a){if(n&1&&(d(0,"div",15),p(1),m()),n&2){let e=k(2);u(),Ee(e.pageSize)}}function EM(n,a){if(n&1&&(d(0,"div",3)(1,"div",13),p(2),m(),j(3,SM,6,7,"mat-form-field",14),j(4,MM,2,1,"div",15),m()),n&2){let e=k();u(),L("id",e._pageSizeLabelId),u(),G(" ",e._intl.itemsPerPageLabel," "),u(),H(e._displayedPageSizeOptions.length>1?3:-1),u(),H(e._displayedPageSizeOptions.length<=1?4:-1)}}function IM(n,a){if(n&1){let e=Oe();d(0,"button",19),S("click",function(){be(e);let i=k();return ve(i._buttonClicked(0,i._previousButtonsDisabled()))}),Ke(),d(1,"svg",8),R(2,"path",20),m()()}if(n&2){let e=k();b("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),L("aria-label",e._intl.firstPageLabel)}}function TM(n,a){if(n&1){let e=Oe();d(0,"button",21),S("click",function(){be(e);let i=k();return ve(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),Ke(),d(1,"svg",8),R(2,"path",22),m()()}if(n&2){let e=k();b("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),L("aria-label",e._intl.lastPageLabel)}}var AM=(()=>{class n{changes=new M;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let r=e*t,o=r<i?Math.min(r+t,i):r+t;return`${r+1} \u2013 ${o} of ${i}`};static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),RM=50;var OM=new g("MAT_PAGINATOR_DEFAULT_OPTIONS"),FM=(()=>{class n{_intl=s(AM);_changeDetectorRef=s(ee);_formFieldAppearance;_pageSizeLabelId=s(ge).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new Er(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>Ue(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new A;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=s(OM,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:r,hidePageSize:o,showFirstLastButtons:l}=t;i!=null&&(this._pageSize=i),r!=null&&(this._pageSizeOptions=r),o!=null&&(this.hidePageSize=o),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:RM),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",Ue],length:[2,"length","length",Ue],pageSize:[2,"pageSize","pageSize",Ue],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",N],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",N],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",N]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(d(0,"div",1)(1,"div",2),j(2,EM,5,4,"div",3),d(3,"div",4)(4,"div",5),p(5),m(),j(6,IM,3,5,"button",6),d(7,"button",7),S("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),Ke(),d(8,"svg",8),R(9,"path",9),m()(),qn(),d(10,"button",10),S("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),Ke(),d(11,"svg",8),R(12,"path",11),m()(),j(13,TM,3,5,"button",12),m()()()),t&2&&(u(2),H(i.hidePageSize?-1:2),u(3),G(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),u(),H(i.showFirstLastButtons?6:-1),u(),b("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),L("aria-label",i._intl.previousPageLabel),u(3),b("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),L("aria-label",i._intl.nextPageLabel),u(3),H(i.showFirstLastButtons?13:-1))},dependencies:[qt,vc,di,Wt,xc],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return n})(),zb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Ii,yc,Ec,FM]})}return n})();var jb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();var PM=["input"],NM=["formField"],LM=["*"],Fu=class{source;value;constructor(a,e){this.source=a,this.value=e}};var BM=new g("MatRadioGroup"),VM=new g("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})});var zM=(()=>{class n{_elementRef=s(F);_changeDetector=s(ee);_focusMonitor=s(ct);_radioDispatcher=s(ka);_defaultOptions=s(VM,{optional:!0});_ngZone=s(W);_renderer=s(ye);_uniqueId=s(ge).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new A;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=_e();_injector=s(J);constructor(){s(ke).load(dt);let e=s(BM,{optional:!0}),t=s(new rt("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=Ue(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Fu(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute("tabindex",t+""),this._previousTabIndex=t,Te(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-radio-button"]],viewQuery:function(t,i){if(t&1&&oe(PM,5)(NM,7,F),t&2){let r;E(r=I())&&(i._inputElement=r.first),E(r=I())&&(i._rippleTrigger=r.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,i){t&1&&S("focus",function(){return i._inputElement.nativeElement.focus()}),t&2&&(L("id",i.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),O("mat-primary",i.color==="primary")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("mat-mdc-radio-checked",i.checked)("mat-mdc-radio-disabled",i.disabled)("mat-mdc-radio-disabled-interactive",i.disabledInteractive)("_mat-animation-noopable",i._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",N],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ue(e)],checked:[2,"checked","checked",N],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",N],required:[2,"required","required",N],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",N]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:LM,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,i){t&1&&(Q(),d(0,"div",2,0)(2,"div",3)(3,"div",4),S("click",function(o){return i._onTouchTargetClick(o)}),m(),d(4,"input",5,1),S("change",function(o){return i._onInputInteraction(o)}),m(),d(6,"div",6),R(7,"div",7)(8,"div",8),m(),d(9,"div",9),R(10,"div",10),m()(),d(11,"label",11),P(12),m()()),t&2&&(b("labelPosition",i.labelPosition),u(2),O("mdc-radio--disabled",i.disabled),u(2),b("id",i.inputId)("checked",i.checked)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),L("name",i.name)("value",i.value)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),u(5),b("matRippleTrigger",i._rippleTrigger.nativeElement)("matRippleDisabled",i._isRippleDisabled())("matRippleCentered",!0),u(2),b("for",i.inputId))},dependencies:[_n,Cr],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),Hb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[nt,zM,V]})}return n})();var Ac=["*"],jM=["content"],HM=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],UM=["mat-drawer","mat-drawer-content","*"];function $M(n,a){if(n&1){let e=Oe();d(0,"div",1),S("click",function(){be(e);let i=k();return ve(i._onBackdropClicked())}),m()}if(n&2){let e=k();O("mat-drawer-shown",e._isShowingBackdrop())}}function GM(n,a){n&1&&(d(0,"mat-drawer-content"),P(1,2),m())}var WM=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],qM=["mat-sidenav","mat-sidenav-content","*"];function YM(n,a){if(n&1){let e=Oe();d(0,"div",1),S("click",function(){be(e);let i=k();return ve(i._onBackdropClicked())}),m()}if(n&2){let e=k();O("mat-drawer-shown",e._isShowingBackdrop())}}function KM(n,a){n&1&&(d(0,"mat-sidenav-content"),P(1,2),m())}var QM=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var XM=new g("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Lu=new g("MAT_DRAWER_CONTAINER"),Ic=(()=>{class n extends va{_platform=s(se);_changeDetectorRef=s(ee);_container=s(Nu);constructor(){let e=s(F),t=s(Vn),i=s(W);super(e,t,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,i){t&2&&(et("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),O("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[X([{provide:va,useExisting:n}]),Y],ngContentSelectors:Ac,decls:1,vars:0,template:function(t,i){t&1&&(Q(),P(0))},encapsulation:2,changeDetection:0})}return n})(),Pu=(()=>{class n{_elementRef=s(F);_focusTrapFactory=s(lr);_focusMonitor=s(ct);_platform=s(se);_ngZone=s(W);_renderer=s(ye);_interactivityChecker=s(pa);_doc=s(q);_container=s(Lu,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Xe(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Xe(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Xe(e))}_opened=z(!1);_openedVia=null;_animationStarted=new M;_animationEnd=new M;openedChange=new A(!0);_openedStream=this.openedChange.pipe(le(e=>e),ae(()=>{}));openedStart=this._animationStarted.pipe(le(()=>this.opened),Vc(void 0));_closedStream=this.openedChange.pipe(le(e=>!e),ae(()=>{}));closedStart=this._animationStarted.pipe(le(()=>!this.opened),Vc(void 0));_destroyed=new M;onPositionChanged=new A;_content;_modeChanged=new M;_injector=s(J);_changeDetectorRef=s(ee);constructor(){this.openedChange.pipe(ne(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Ge(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{r(),o(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",i),o=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Te(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,t,i){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(ze(1)).subscribe(o=>r(o?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,i=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,t)),i.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,i){if(t&1&&oe(jM,5),t&2){let r;E(r=I())&&(i._content=r.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,i){t&2&&(L("align",null)("tabIndex",i.mode!=="side"?"-1":null),et("visibility",!i._container&&!i.opened?"hidden":null),O("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ac,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,i){t&1&&(Q(),d(0,"div",1,0),P(2),m())},dependencies:[va],encapsulation:2,changeDetection:0})}return n})(),Nu=(()=>{class n{_dir=s(Me,{optional:!0});_element=s(F);_ngZone=s(W);_changeDetectorRef=s(ee);_animationDisabled=_e();_transitionsEnabled=!1;_allDrawers;_drawers=new Qt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Xe(e)}_autosize=s(XM);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Xe(e)}_backdropOverride=null;backdropClick=new A;_start=null;_end=null;_left=null;_right=null;_destroyed=new M;_doCheckSubject=new M;_contentMargins={left:null,right:null};_contentMarginChanges=new M;get scrollable(){return this._userContent||this._content}_injector=s(J);constructor(){let e=s(se),t=s($t);this._dir?.change.pipe(ne(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(ne(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ie(this._allDrawers),ne(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ie(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(mi(10),ne(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,t-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();t+=i,e-=i}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(ne(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(ne(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(ne(this._drawers.changes)).subscribe(()=>{Te({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(ne(mt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?t.add(i):t.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,i,r){if(t&1&&xe(r,Ic,5)(r,Pu,5),t&2){let o;E(o=I())&&(i._content=o.first),E(o=I())&&(i._allDrawers=o)}},viewQuery:function(t,i){if(t&1&&oe(Ic,5),t&2){let r;E(r=I())&&(i._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,i){t&2&&O("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[X([{provide:Lu,useExisting:n}])],ngContentSelectors:UM,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){t&1&&(Q(HM),j(0,$M,1,2,"div",0),P(1),P(2,1),j(3,GM,2,0,"mat-drawer-content")),t&2&&(H(i.hasBackdrop?0:-1),u(3),H(i._content?-1:3))},dependencies:[Ic],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),Tc=(()=>{class n extends Ic{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[X([{provide:va,useExisting:n}]),Y],ngContentSelectors:Ac,decls:1,vars:0,template:function(t,i){t&1&&(Q(),P(0))},encapsulation:2,changeDetection:0})}return n})(),Bu=(()=>{class n extends Pu{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Xe(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=lt(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=lt(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,i){t&2&&(L("tabIndex",i.mode!=="side"?"-1":null)("align",null),et("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),O("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[X([{provide:Pu,useExisting:n}]),Y],ngContentSelectors:Ac,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,i){t&1&&(Q(),d(0,"div",1,0),P(2),m())},dependencies:[va],encapsulation:2,changeDetection:0})}return n})(),Ub=(()=>{class n extends Nu{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,i,r){if(t&1&&xe(r,Tc,5)(r,Bu,5),t&2){let o;E(o=I())&&(i._content=o.first),E(o=I())&&(i._allDrawers=o)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,i){t&2&&O("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[X([{provide:Lu,useExisting:n},{provide:Nu,useExisting:n}]),Y],ngContentSelectors:qM,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){t&1&&(Q(WM),j(0,YM,1,2,"div",0),P(1),P(2,1),j(3,KM,2,0,"mat-sidenav-content")),t&2&&(H(i.hasBackdrop?0:-1),u(3),H(i._content?-1:3))},dependencies:[Tc],styles:[QM],encapsulation:2,changeDetection:0})}return n})(),$b=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[Ft,V,Ft]})}return n})();var JM=["switch"],eE=["*"];function tE(n,a){n&1&&(d(0,"span",11),Ke(),d(1,"svg",13),R(2,"path",14),m(),d(3,"svg",15),R(4,"path",16),m()())}var nE=new g("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Rc=class{source;checked;constructor(a,e){this.source=a,this.checked=e}},iE=(()=>{class n{_elementRef=s(F);_focusMonitor=s(ct);_changeDetectorRef=s(ee);defaults=s(nE);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Rc(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=_e();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new A;toggleChange=new A;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){s(ke).load(dt);let e=s(new rt("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=s(ge).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Rc(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&oe(JM,5),t&2){let r;E(r=I())&&(i._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(He("id",i.id),L("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Fe(i.color?"mat-"+i.color:""),O("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",N],color:"color",disabled:[2,"disabled","disabled",N],disableRipple:[2,"disableRipple","disableRipple",N],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ue(e)],checked:[2,"checked","checked",N],hideIcon:[2,"hideIcon","hideIcon",N],disabledInteractive:[2,"disabledInteractive","disabledInteractive",N]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[X([{provide:wi,useExisting:yt(()=>n),multi:!0},{provide:Ci,useExisting:n,multi:!0}]),de],ngContentSelectors:eE,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&(Q(),d(0,"div",1)(1,"button",2,0),S("click",function(){return i._handleClick()}),R(3,"div",3)(4,"span",4),d(5,"span",5)(6,"span",6)(7,"span",7),R(8,"span",8),m(),d(9,"span",9),R(10,"span",10),m(),j(11,tE,5,0,"span",11),m()()(),d(12,"label",12),S("click",function(o){return o.stopPropagation()}),P(13),m()()),t&2){let r=qe(2);b("labelPosition",i.labelPosition),u(),O("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),b("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),L("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),u(9),b("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),u(),H(i.hideIcon?-1:11),u(),b("for",i.buttonId),L("id",i._labelId)}},dependencies:[_n,Cr],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),Gb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[iE,V]})}return n})();var Wb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[nt,V]})}return n})();var qb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();var aE=["*"];function rE(n,a){n&1&&P(0)}var Vu=(()=>{class n{_elementRef=s(F);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),zu=(()=>{class n{template=s(Ne);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var Ma={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},oE=new g("STEPPER_GLOBAL_OPTIONS"),Oc=(()=>{class n{_stepperOptions;_stepper=s(Fc);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=z(!1);interactedStream=new A;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=z(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=z(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=z(null);index=z(-1);isSelected=Ct(()=>this._stepper.selectedIndex===this.index());indicatorType=Ct(()=>{let e=this.isSelected(),t=this.completed,i=this._state()??Ma.NUMBER,r=this._editable();return this._showError()&&this.hasError&&!e?Ma.ERROR:this._displayDefaultIndicatorType?!t||e?Ma.NUMBER:r?Ma.EDIT:Ma.DONE:t&&!e?Ma.DONE:t&&e?i:r&&e?Ma.EDIT:i});isNavigable=Ct(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=z(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=s(oE,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["cdk-step"]],contentQueries:function(t,i,r){if(t&1&&xe(r,zu,5)(r,Ln,5),t&2){let o;E(o=I())&&(i.stepLabel=o.first),E(o=I())&&(i._childForms=o)}},viewQuery:function(t,i){if(t&1&&oe(Ne,7),t&2){let r;E(r=I())&&(i.content=r.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",N],optional:[2,"optional","optional",N],completed:[2,"completed","completed",N],hasError:[2,"hasError","hasError",N]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[de],ngContentSelectors:aE,decls:1,vars:0,template:function(t,i){t&1&&(Q(),Oa(0,rE,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return n})(),Fc=(()=>{class n{_dir=s(Me,{optional:!0});_changeDetectorRef=s(ee);_elementRef=s(F);_destroyed=new M;_keyManager;_steps;steps=new Qt;_stepHeader;_sortedHeaders=new Qt;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=z(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=z(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new A;selectedIndexChange=new A;_groupId=s(ge).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(Ie(this._steps),ne(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,i)=>t.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Ie(this._stepHeader),ne(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,i)=>t._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new _a(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:K()).pipe(Ie(this._layoutDirection()),ne(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:t[e],previouslySelectedStep:t[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=Ge(e),i=e.keyCode,r=this._keyManager;r?.activeItemIndex!=null&&!t&&(i===32||i===13)?(this.selectedIndex=r.activeItemIndex,e.preventDefault()):r?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let i=t.stepControl;return(i?i.invalid||i.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=un();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,i,r){if(t&1&&xe(r,Oc,5)(r,Vu,5),t&2){let o;E(o=I())&&(i._steps=o),E(o=I())&&(i._stepHeader=o)}},inputs:{linear:[2,"linear","linear",N],selectedIndex:[2,"selectedIndex","selectedIndex",Ue],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})();var Yb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();var sE=(n,a,e)=>({index:n,active:a,optional:e});function lE(n,a){if(n&1&&je(0,2),n&2){let e=k();b("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",gh(2,sE,e.index,e.active,e.optional))}}function cE(n,a){if(n&1&&(d(0,"span",7),p(1),m()),n&2){let e=k(2);u(),Ee(e._getDefaultTextForState(e.state))}}function dE(n,a){if(n&1&&(d(0,"span",8),p(1),m()),n&2){let e=k(3);u(),Ee(e._intl.completedLabel)}}function mE(n,a){if(n&1&&(d(0,"span",8),p(1),m()),n&2){let e=k(3);u(),Ee(e._intl.editableLabel)}}function uE(n,a){if(n&1&&(j(0,dE,2,1,"span",8)(1,mE,2,1,"span",8),d(2,"mat-icon",7),p(3),m()),n&2){let e=k(2);H(e.state==="done"?0:e.state==="edit"?1:-1),u(3),Ee(e._getDefaultTextForState(e.state))}}function hE(n,a){if(n&1&&j(0,cE,2,1,"span",7)(1,uE,4,2),n&2){let e,t=k();H((e=t.state)==="number"?0:1)}}function pE(n,a){n&1&&(d(0,"div",4),je(1,9),m()),n&2&&(u(),b("ngTemplateOutlet",a.template))}function fE(n,a){if(n&1&&(d(0,"div",4),p(1),m()),n&2){let e=k();u(),Ee(e.label)}}function gE(n,a){if(n&1&&(d(0,"div",5),p(1),m()),n&2){let e=k();u(),Ee(e._intl.optionalLabel)}}function _E(n,a){if(n&1&&(d(0,"div",6),p(1),m()),n&2){let e=k();u(),Ee(e.errorMessage)}}var Kb=["*"];function bE(n,a){}function vE(n,a){if(n&1&&(P(0),U(1,bE,0,0,"ng-template",0)),n&2){let e=k();u(),b("cdkPortalOutlet",e._portal)}}var yE=["animatedContainer"],Qb=n=>({steps:n}),Xb=n=>({step:n});function wE(n,a){n&1&&P(0)}function CE(n,a){if(n&1&&(d(0,"div",5),je(1,9)(2,6),m()),n&2){let e=k(2),t=qe(6);u(),b("ngTemplateOutlet",e.headerPrefix()),u(),b("ngTemplateOutlet",t)("ngTemplateOutletContext",ta(3,Qb,e.steps))}}function xE(n,a){if(n&1&&je(0,6),n&2){let e=k(2),t=qe(6);b("ngTemplateOutlet",t)("ngTemplateOutletContext",ta(2,Qb,e.steps))}}function DE(n,a){if(n&1&&(d(0,"div",10,2),je(2,9),m()),n&2){let e=a.$implicit,t=a.$index,i=k(2);Fe("mat-horizontal-stepper-content-"+i._getAnimationDirection(t)),b("id",i._getStepContentId(t)),L("aria-labelledby",i._getStepLabelId(t))("inert",i.selectedIndex===t?null:""),u(2),b("ngTemplateOutlet",e.content)}}function kE(n,a){if(n&1&&(d(0,"div",3),j(1,CE,3,5,"div",5)(2,xE,1,4,"ng-container",6),d(3,"div",7),Tt(4,DE,3,6,"div",8,ea),m()()),n&2){let e=k();u(),H(e.headerPrefix()?1:2),u(3),At(e.steps)}}function SE(n,a){if(n&1&&je(0,9),n&2){let e=k(2);b("ngTemplateOutlet",e.headerPrefix())}}function ME(n,a){if(n&1&&(d(0,"div",11),je(1,6),d(2,"div",12,2)(4,"div",13)(5,"div",14),je(6,9),m()()()()),n&2){let e=a.$implicit,t=a.$index,i=a.$index,r=a.$count,o=k(2),l=qe(4);u(),b("ngTemplateOutlet",l)("ngTemplateOutletContext",ta(11,Xb,e)),u(),O("mat-stepper-vertical-line",i!==r-1)("mat-vertical-content-container-active",o.selectedIndex===t),L("inert",o.selectedIndex===t?null:"")("aria-label",o.ariaLabel),u(2),b("id",o._getStepContentId(t)),L("aria-labelledby",o._getStepLabelId(t)),u(2),b("ngTemplateOutlet",e.content)}}function EE(n,a){if(n&1&&(d(0,"div",4),j(1,SE,1,1,"ng-container",9),Tt(2,ME,7,13,"div",11,ea),m()),n&2){let e=k();u(),H(e.headerPrefix()?1:-1),u(),At(e.steps)}}function IE(n,a){if(n&1){let e=Oe();d(0,"mat-step-header",15),S("click",function(){let i=be(e).step;return ve(i.select())})("keydown",function(i){be(e);let r=k();return ve(r._onKeydown(i))}),m()}if(n&2){let e=a.step,t=k();O("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),b("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),L("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function TE(n,a){n&1&&R(0,"div",17)}function AE(n,a){if(n&1&&(je(0,6),j(1,TE,1,0,"div",17)),n&2){let e=a.$implicit,t=a.$index,i=a.$count;k(2);let r=qe(4);b("ngTemplateOutlet",r)("ngTemplateOutletContext",ta(3,Xb,e)),u(),H(t!==i-1?1:-1)}}function RE(n,a){if(n&1&&(d(0,"div",16),Tt(1,AE,2,5,null,null,ea),m()),n&2){let e=a.steps,t=k();L("aria-label",t.ariaLabel),u(),At(e)}}var ju=(()=>{class n extends zu{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matStepLabel",""]],features:[Y]})}return n})(),OE=(()=>{class n{changes=new M;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=x({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Hu=(()=>{class n extends Vu{_intl=s(OE);_focusMonitor=s(ct);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=s(ke);e.load(dt),e.load(hn);let t=s(ee);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof ju?null:this.label}_templateLabel(){return this.label instanceof ju?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,i){t&2&&(Fe("mat-"+(i.color||"primary")),O("mat-step-header-empty-label",i._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[Y],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(R(0,"div",0),d(1,"div")(2,"div",1),j(3,lE,1,6,"ng-container",2)(4,hE,2,1),m()(),d(5,"div",3),j(6,pE,2,1,"div",4)(7,fE,2,1,"div",4),j(8,gE,2,1,"div",5),j(9,_E,2,1,"div",6),m()),t&2){let r;b("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),u(),Fe(fh("mat-step-icon-state-",i.state," mat-step-icon")),O("mat-step-icon-selected",i.selected),u(2),H(i.iconOverrides&&i.iconOverrides[i.state]?3:4),u(2),O("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),u(),H((r=i._templateLabel())?6:i._stringLabel()?7:-1,r),u(2),H(i._hasOptionalLabel()?8:-1),u(),H(i._hasErrorLabel()?9:-1)}},dependencies:[_n,Fa,Hn],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2,changeDetection:0})}return n})(),FE=(()=>{class n{templateRef=s(Ne);name;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),PE=(()=>{class n{_template=s(Ne);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),NE=(()=>{class n extends Oc{_errorStateMatcher=s(Un,{skipSelf:!0});_viewContainerRef=s(Qe);_isSelected=Pe.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(ut(()=>this._stepper.selectionChange.pipe(ae(e=>e.selectedStep===this),Ie(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new Gt(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let i=this._errorStateMatcher.isErrorState(e,t),r=!!(e&&e.invalid&&this.interacted);return i||r}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ue(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-step"]],contentQueries:function(t,i,r){if(t&1&&xe(r,ju,5)(r,PE,5),t&2){let o;E(o=I())&&(i.stepLabel=o.first),E(o=I())&&(i._lazyContent=o.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[X([{provide:Un,useExisting:n},{provide:Oc,useExisting:n}]),Y],ngContentSelectors:Kb,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&(Q(),U(0,vE,2,1,"ng-template"))},dependencies:[kt],encapsulation:2,changeDetection:0})}return n})(),LE=(()=>{class n extends Fc{_ngZone=s(W);_renderer=s(ye);_animationsDisabled=_e();_cleanupTransition;_isAnimating=z(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Qt;_icons;animationDone=new A;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=ls(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!s(se).isBrowser;constructor(){super();let t=s(F).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(ne(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(ne(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(Ie(null),ne(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),r=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(i||r)&&this._animatedContainers.find(l=>l.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,i,r){if(t&1&&xe(r,NE,5)(r,FE,5),t&2){let o;E(o=I())&&(i._steps=o),E(o=I())&&(i._icons=o)}},viewQuery:function(t,i){if(t&1&&oe(Hu,5)(yE,5),t&2){let r;E(r=I())&&(i._stepHeader=r),E(r=I())&&(i._animatedContainers=r)}},hostVars:14,hostBindings:function(t,i){t&2&&(et("--mat-stepper-animation-duration",i._getAnimationDuration()),O("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[X([{provide:Fc,useExisting:n}]),Y],ngContentSelectors:Kb,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,i){if(t&1&&(Q(),j(0,wE,1,0),j(1,kE,6,1,"div",3)(2,EE,4,1,"div",4),U(3,IE,1,27,"ng-template",null,0,na)(5,RE,3,1,"ng-template",null,1,na)),t&2){let r;H(i._isServer?0:-1),u(),H((r=i.orientation)==="horizontal"?1:r==="vertical"?2:-1)}},dependencies:[Fa,Hu],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Zb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({providers:[Un],imports:[St,Yb,ic,nt,LE,Hu,V]})}return n})();var Jb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();var BE=["*",[["mat-toolbar-row"]]],VE=["*","mat-toolbar-row"],zE=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Pc=(()=>{class n{_elementRef=s(F);_platform=s(se);_document=s(q);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,i,r){if(t&1&&xe(r,zE,5),t&2){let o;E(o=I())&&(i._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,i){t&2&&(Fe(i.color?"mat-"+i.color:""),O("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:VE,decls:2,vars:0,template:function(t,i){t&1&&(Q(BE),P(0),P(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ev=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[V]})}return n})();var nv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({})}return n})();var iv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=y({imports:[nv,V]})}return n})();var Uu=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=w({type:n})}static{this.\u0275inj=y({imports:[Jn,db,fb,bb,Ii,vb,Zg,yb,wb,Ob,Bb,oc,G_,xa,__,ic,M_,O_,Vb,zb,ob,jb,Hb,nt,yc,$b,Gb,Wb,Qg,qb,Zb,J_,Jb,ev,Ec,iv]})}}return n})();function jE(n,a){if(n&1){let e=Oe();d(0,"div",3),p(1),m(),d(2,"button",4),p(3,"Profile"),m(),d(4,"button",5),S("click",function(){be(e);let i=k();return ve(i.logout())}),p(5,"Log Out"),m()}if(n&2){let e=k();u(),G("Hi, ",e.name)}}var av=(()=>{class n{constructor(e){this.apiService=e,this.loggedIn=!1,this.name="",this.apiService.userStatus.subscribe({next:t=>{if(t==="loggedIn"){this.loggedIn=!0;var i=this.apiService.getUserInfo();i!=null&&(this.name=`${i.firstName} ${i.lastName}`)}else this.loggedIn=!1,this.name=""}})}logout(){this.apiService.logOut()}static{this.\u0275fac=function(t){return new(t||n)(B(Ve))}}static{this.\u0275cmp=_({type:n,selectors:[["page-header"]],standalone:!1,decls:6,vars:1,consts:[["color","primary"],[1,"spacer"],[1,"user-info"],[1,"name"],["mat-raised-button","","color","accent","routerLink","/profile"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,i){t&1&&(d(0,"mat-toolbar",0)(1,"span"),p(2,"Library Management Sytem"),m(),R(3,"span",1),d(4,"div",2),j(5,jE,6,1),m()()),t&2&&(u(5),H(i.loggedIn?5:-1))},dependencies:[it,Pc,bi],styles:["mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,#2f4646,orange)}mat-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;align-items:center}mat-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:1.5rem}"]})}}return n})();var rv=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=_({type:n,selectors:[["page-footer"]],standalone:!1,decls:10,vars:0,consts:[["color","primary"],[1,"spacer"],[1,"copyright"],["mat-icon-button",""]],template:function(t,i){t&1&&(d(0,"mat-toolbar",0)(1,"span"),p(2,"Made By: DEBORAJ ROY with programmer-rohan"),m(),R(3,"span",1),d(4,"div",2)(5,"span"),p(6,"Copyright 2024"),m(),d(7,"button",3)(8,"mat-icon"),p(9,"copyright"),m()()()())},dependencies:[Wt,Hn,Pc],styles:["mat-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{display:flex;align-items:center}"]})}}return n})();function $E(n,a){if(n&1){let e=Oe();d(0,"a",1),S("click",function(){let i=be(e).$implicit,r=k();return ve(r.navigate(i.link))}),p(1),m()}if(n&2){let e=a.$implicit;u(),G(" ",e.value)}}var ov=(()=>{class n{constructor(e,t){this.apiService=e,this.router=t,this.panelName="Student Panel",this.navItems=[],this.navItems=[{value:"View Books",link:"/home"},{value:"My Orders",link:"/my-orders"}],e.userStatus.subscribe({next:i=>{if(i=="loggedIn"){t.navigateByUrl("/profile");let r=e.getUserInfo();r!=null&&(r.userType==ir.ADMIN?(this.panelName="Admin Panel",this.navItems=[{value:"View Books",link:"/home"},{value:"Maintenance",link:"/maintenance"},{value:"Return Book",link:"/return-book"},{value:"View Users",link:"/view-users"},{value:"Approval Requests",link:"/approval-requests"},{value:"All Orders",link:"/all-orders"},{value:"My Orders",link:"/my-orders"}]):r.userType==ir.STUDENT&&(this.panelName="Student Panel",this.navItems=[{value:"View Books",link:"/home"},{value:"My Orders",link:"/my-orders"}]))}else i=="loggedOff"&&(this.panelName="Auth Panel",t.navigateByUrl("/login"),this.navItems=[])}})}navigate(e){this.router.navigateByUrl(e)}static{this.\u0275fac=function(t){return new(t||n)(B(Ve),B(st))}}static{this.\u0275cmp=_({type:n,selectors:[["page-side-nav"]],standalone:!1,decls:6,vars:2,consts:[["mat-list-item","",3,"click",4,"ngFor","ngForOf"],["mat-list-item","",3,"click"]],template:function(t,i){t&1&&(d(0,"mat-card")(1,"mat-card-content")(2,"h2"),p(3),m()()(),d(4,"mat-nav-list"),U(5,$E,2,1,"a",0),m()),t&2&&(u(3),Ee(i.panelName),u(2),b("ngForOf",i.navItems))},dependencies:[ys,Ze,Je,R_,cc],styles:["mat-card[_ngcontent-%COMP%]{margin:.5rem auto;width:90%;border:1px solid white}mat-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{letter-spacing:3px;text-align:center}mat-nav-list[_ngcontent-%COMP%]{margin-top:1rem}mat-nav-list[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%]{background-color:#fff3}"]})}}return n})();var ji=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=w({type:n})}static{this.\u0275inj=y({imports:[Jn,kd,Uu,ml,bm,Jn,Uu,ml,bm]})}}return n})();var sv=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=w({type:n})}static{this.\u0275inj=y({imports:[Jn,ji]})}}return n})();var lv=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=w({type:n})}static{this.\u0275inj=y({imports:[ji]})}}return n})();var cv=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=w({type:n})}static{this.\u0275inj=y({imports:[ji]})}}return n})();var dv=(()=>{class n{constructor(e,t){this.apiService=e,this.router=t,this.title="Front-end-web"}ngOnInit(){let e=this.apiService.isLoggedIn()?"loggedIn":"loggedOff";this.apiService.userStatus.next(e),this.router.events.subscribe(t=>{t instanceof Fn&&console.log("Router: NavigationStart",t.url),t instanceof Ht&&console.log("Router: NavigationEnd",t.url)})}static{this.\u0275fac=function(t){return new(t||n)(B(Ve),B(st))}}static{this.\u0275cmp=_({type:n,selectors:[["app-root"]],decls:8,vars:0,consts:[["opened","","mode","side"]],template:function(t,i){t&1&&(d(0,"mat-sidenav-container")(1,"mat-sidenav",0),R(2,"page-side-nav"),m(),d(3,"mat-sidenav-content"),R(4,"page-header"),d(5,"main"),R(6,"router-outlet"),m(),R(7,"page-footer"),m()())},dependencies:[lo,ji,Bu,Ub,Tc,av,rv,ov,sv,lv,cv],styles:["mat-sidenav-container[_ngcontent-%COMP%]{background-color:gray;height:100vh}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{background-color:gray;width:250px}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}mat-sidenav-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding:1rem;flex:1 1 auto}"]})}}return n})();bd(dv,pb).catch(n=>console.error(n));
