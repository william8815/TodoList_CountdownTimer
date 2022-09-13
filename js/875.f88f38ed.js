"use strict";(self["webpackChunktodolist_vue"]=self["webpackChunktodolist_vue"]||[]).push([[875],{875:function(t,e,n){n.r(e),n.d(e,{default:function(){return bd}});var s=n(252);const i={class:"todo"};function r(t,e,n,r,o,a){const u=(0,s.up)("Header"),c=(0,s.up)("TodoSet"),h=(0,s.up)("TodoList"),l=(0,s.up)("TodoCounter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(u),(0,s._)("main",i,[(0,s.Wm)(c,{onAfterSubmit:r.handleSubmit},null,8,["onAfterSubmit"]),(0,s.Wm)(h,{initial_list:r.list,onDeleteTodo:r.handleDelete,onRestoreTodo:r.handleRestore},null,8,["initial_list","onDeleteTodo","onRestoreTodo"]),(0,s.Wm)(l,{onFinishedTodo:r.handleFinishedTodo},null,8,["onFinishedTodo"])])],64)}var o=n(577);const a=t=>((0,s.dD)("data-v-97f41406"),t=t(),(0,s.Cn)(),t),u=a((()=>(0,s._)("h1",{class:"brand"},"TodoList",-1))),c={class:"user"},h={class:"user__name"},l=a((()=>(0,s._)("span",null,"您好",-1)));function d(t,e,n,i,r,a){return(0,s.wg)(),(0,s.iD)("header",null,[u,(0,s._)("div",c,[(0,s._)("div",h,[(0,s.Uk)((0,o.zw)(i.username)+" ",1),l]),(0,s._)("button",{class:"signout",onClick:e[0]||(e[0]=(...t)=>i.signoutAccount&&i.signoutAccount(...t))},"登出")])])}var f=n(900),g=n(68),p=n(610),m=n(262),y={setup(){const t=(0,g.v0)(f.Z),e=(0,m.iH)(""),n=(0,g.Aj)(t,(t=>{e.value=t?t.displayName:"使用者"}));(0,s.wF)(n);const i=()=>{(0,g.w7)(t).then((()=>{p.Z.push("/")}))};return{username:e,setuser:n,signoutAccount:i}}},v=n(744);const w=(0,v.Z)(y,[["render",d],["__scopeId","data-v-97f41406"]]);var T=w,E=n(963);const b={class:"todoset"},I={class:"input thing-section"},C={class:"input date-section"},S=["disabled"];function A(t,e,n,i,r,a){return(0,s.wg)(),(0,s.iD)("section",b,[(0,s._)("form",{action:"",onSubmit:e[2]||(e[2]=(0,E.iM)(((...t)=>i.addTodo&&i.addTodo(...t)),["prevent","stop"]))},[(0,s._)("div",I,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.thing=t),type:"text",name:"thing",id:"thing",placeholder:"要做甚麼事情 ?",required:""},null,512),[[E.nr,i.thing]])]),(0,s._)("div",C,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.date=t),type:"date",name:"date",id:"date",required:""},null,512),[[E.nr,i.date]])]),(0,s._)("button",{type:"submit",class:"add-btn",disabled:i.isLoading},(0,o.zw)(i.isLoading?"Adding...":"Add"),9,S)],32)])}var _,D=n(816),k=n(463),N=n(333),L=n(444),R="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},x={},M=M||{},O=R||self;function V(){}function F(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function P(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function U(t){return Object.prototype.hasOwnProperty.call(t,q)&&t[q]||(t[q]=++B)}var q="closure_uid_"+(1e9*Math.random()>>>0),B=0;function j(t,e,n){return t.call.apply(t.bind,arguments)}function K(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function G(t,e,n){return G=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?j:K,G.apply(null,arguments)}function H(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function $(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function z(){this.s=this.s,this.o=this.o}var Q=0,W={};z.prototype.s=!1,z.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=Q)){var t=U(this);delete W[t]}},z.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Y=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},X=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function J(t){t:{var e=ms;const n=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function Z(t){return Array.prototype.concat.apply([],arguments)}function tt(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function et(t){return/^[\s\xa0]*$/.test(t)}var nt,st=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function it(t,e){return-1!=t.indexOf(e)}function rt(t,e){return t<e?-1:t>e?1:0}t:{var ot=O.navigator;if(ot){var at=ot.userAgent;if(at){nt=at;break t}}nt=""}function ut(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ct(t){const e={};for(const n in t)e[n]=t[n];return e}var ht="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lt(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<ht.length;e++)n=ht[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function dt(t){return dt[" "](t),t}function ft(t){var e=At;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}dt[" "]=V;var gt,pt=it(nt,"Opera"),mt=it(nt,"Trident")||it(nt,"MSIE"),yt=it(nt,"Edge"),vt=yt||mt,wt=it(nt,"Gecko")&&!(it(nt.toLowerCase(),"webkit")&&!it(nt,"Edge"))&&!(it(nt,"Trident")||it(nt,"MSIE"))&&!it(nt,"Edge"),Tt=it(nt.toLowerCase(),"webkit")&&!it(nt,"Edge");function Et(){var t=O.document;return t?t.documentMode:void 0}t:{var bt="",It=function(){var t=nt;return wt?/rv:([^\);]+)(\)|;)/.exec(t):yt?/Edge\/([\d\.]+)/.exec(t):mt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Tt?/WebKit\/(\S+)/.exec(t):pt?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(It&&(bt=It?It[1]:""),mt){var Ct=Et();if(null!=Ct&&Ct>parseFloat(bt)){gt=String(Ct);break t}}gt=bt}var St,At={};function _t(){return ft((function(){let t=0;const e=st(String(gt)).split("."),n=st("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=rt(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||rt(0==i[2].length,0==r[2].length)||rt(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(O.document&&mt){var Dt=Et();St=Dt||(parseInt(gt,10)||void 0)}else St=void 0;var kt=St,Nt=function(){if(!O.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{O.addEventListener("test",V,e),O.removeEventListener("test",V,e)}catch(n){}return t}();function Lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Rt(t,e){if(Lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wt){t:{try{dt(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:xt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Rt.Z.h.call(this)}}Lt.prototype.h=function(){this.defaultPrevented=!0},$(Rt,Lt);var xt={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),Ot=0;function Vt(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++Ot,this.ca=this.fa=!1}function Ft(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Pt(t){this.src=t,this.g={},this.h=0}function Ut(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=Y(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Ft(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function qt(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}Pt.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=qt(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Vt(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};var Bt="closure_lm_"+(1e6*Math.random()|0),jt={};function Kt(t,e,n,s,i){if(s&&s.once)return $t(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Kt(t,e[r],n,s,i);return null}return n=Zt(n),t&&t[Mt]?t.N(e,n,P(s)?!!s.capture:!!s,i):Gt(t,e,n,!1,s,i)}function Gt(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=P(i)?!!i.capture:!!i,a=Xt(t);if(a||(t[Bt]=a=new Pt(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Ht(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Wt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Ht(){function t(n){return e.call(t.src,t.listener,n)}var e=Yt;return t}function $t(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)$t(t,e[r],n,s,i);return null}return n=Zt(n),t&&t[Mt]?t.O(e,n,P(s)?!!s.capture:!!s,i):Gt(t,e,n,!0,s,i)}function zt(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)zt(t,e[r],n,s,i);else s=P(s)?!!s.capture:!!s,n=Zt(n),t&&t[Mt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=qt(r,n,s,i),-1<n&&(Ft(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Xt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qt(e,n,s,i)),(n=-1<t?e[t]:null)&&Qt(n))}function Qt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Mt])Ut(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Wt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Xt(e))?(Ut(n,t),0==n.h&&(n.src=null,e[Bt]=null)):Ft(t)}}}function Wt(t){return t in jt?jt[t]:jt[t]="on"+t}function Yt(t,e){if(t.ca)t=!0;else{e=new Rt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Qt(t),t=n.call(s,e)}return t}function Xt(t){return t=t[Bt],t instanceof Pt?t:null}var Jt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zt(t){return"function"===typeof t?t:(t[Jt]||(t[Jt]=function(e){return t.handleEvent(e)}),t[Jt])}function te(){z.call(this),this.i=new Pt(this),this.P=this,this.I=null}function ee(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new Lt(e,t);else if(e instanceof Lt)e.target=e.target||t;else{var i=e;e=new Lt(s,t),lt(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ne(o,s,!0,e)&&i}if(o=e.g=t,i=ne(o,s,!0,e)&&i,i=ne(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ne(o,s,!1,e)&&i}function ne(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Ut(t.i,o),i=!1!==a.call(u,s)&&i}}return i&&!s.defaultPrevented}$(te,z),te.prototype[Mt]=!0,te.prototype.removeEventListener=function(t,e,n,s){zt(this,t,e,n,s)},te.prototype.M=function(){if(te.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Ft(n[s]);delete e.g[t],e.h--}}this.I=null},te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var se=O.JSON.stringify;function ie(){var t=fe;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class re{constructor(){this.h=this.g=null}add(t,e){const n=ae.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var oe,ae=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new ue),(t=>t.reset()));class ue{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function ce(t){O.setTimeout((()=>{throw t}),0)}function he(t,e){oe||le(),de||(oe(),de=!0),fe.add(t,e)}function le(){var t=O.Promise.resolve(void 0);oe=function(){t.then(ge)}}var de=!1,fe=new re;function ge(){for(var t;t=ie();){try{t.h.call(t.g)}catch(n){ce(n)}var e=ae;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}de=!1}function pe(t,e){te.call(this),this.h=t||1,this.g=e||O,this.j=G(this.kb,this),this.l=Date.now()}function me(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function ye(t,e,n){if("function"===typeof t)n&&(t=G(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=G(t.handleEvent,t)}return 2147483647<Number(e)?-1:O.setTimeout(t,e||0)}function ve(t){t.g=ye((()=>{t.g=null,t.i&&(t.i=!1,ve(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}$(pe,te),_=pe.prototype,_.da=!1,_.S=null,_.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ee(this,"tick"),this.da&&(me(this),this.start()))}},_.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},_.M=function(){pe.Z.M.call(this),me(this),delete this.g};class we extends z{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ve(this)}M(){super.M(),this.g&&(O.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Te(t){z.call(this),this.h=t,this.g={}}$(Te,z);var Ee=[];function be(t,e,n,s){Array.isArray(n)||(n&&(Ee[0]=n.toString()),n=Ee);for(var i=0;i<n.length;i++){var r=Kt(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ie(t){ut(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Qt(t)}),t),t.g={}}function Ce(){this.g=!0}function Se(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Ae(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function _e(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ke(t,n)+(s?" "+s:"")}))}function De(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ke(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return se(n)}catch(a){return e}}Te.prototype.M=function(){Te.Z.M.call(this),Ie(this)},Te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ce.prototype.Aa=function(){this.g=!1},Ce.prototype.info=function(){};var Ne={},Le=null;function Re(){return Le=Le||new te}function xe(t){Lt.call(this,Ne.Ma,t)}function Me(t){const e=Re();ee(e,new xe(e,t))}function Oe(t,e){Lt.call(this,Ne.STAT_EVENT,t),this.stat=e}function Ve(t){const e=Re();ee(e,new Oe(e,t))}function Fe(t,e){Lt.call(this,Ne.Na,t),this.size=e}function Pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return O.setTimeout((function(){t()}),e)}Ne.Ma="serverreachability",$(xe,Lt),Ne.STAT_EVENT="statevent",$(Oe,Lt),Ne.Na="timingevent",$(Fe,Lt);var Ue={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},qe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Be(){}function je(t){return t.h||(t.h=t.i())}function Ke(){}Be.prototype.h=null;var Ge,He={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function $e(){Lt.call(this,"d")}function ze(){Lt.call(this,"c")}function Qe(){}function We(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Te(this),this.P=Xe,t=vt?125:void 0,this.W=new pe(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ye}function Ye(){this.i=null,this.g="",this.h=!1}$($e,Lt),$(ze,Lt),$(Qe,Be),Qe.prototype.g=function(){return new XMLHttpRequest},Qe.prototype.i=function(){return{}},Ge=new Qe;var Xe=45e3,Je={},Ze={};function tn(t,e,n){t.K=1,t.v=An(Tn(e)),t.s=n,t.U=!0,en(t,null)}function en(t,e){t.F=Date.now(),on(t),t.A=Tn(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Bn(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Ye,t.g=zs(t.l,n?e:null,!t.s),0<t.O&&(t.L=new we(G(t.Ia,t,t.g),t.O)),be(t.V,t.g,"readystatechange",t.gb),e=t.H?ct(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Me(1),Se(t.j,t.u,t.A,t.m,t.X,t.s)}function nn(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function sn(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=rn(t,n),s==Ze){4==e&&(t.o=4,Ve(14),i=!1),_e(t.j,t.m,null,"[Incomplete Response]");break}if(s==Je){t.o=4,Ve(15),_e(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}_e(t.j,t.m,s,null),ln(t,s)}nn(t)&&s!=Ze&&s!=Je&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Ve(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Us(e),e.L=!0,Ve(11))):(_e(t.j,t.m,n,"[Invalid Chunked Response]"),hn(t),cn(t))}function rn(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Ze:(n=Number(e.substring(n,s)),isNaN(n)?Je:(s+=1,s+n>e.length?Ze:(e=e.substr(s,n),t.C=s+n,e)))}function on(t){t.Y=Date.now()+t.P,an(t,t.P)}function an(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Pe(G(t.eb,t),e)}function un(t){t.B&&(O.clearTimeout(t.B),t.B=null)}function cn(t){0==t.l.G||t.I||js(t.l,t)}function hn(t){un(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,me(t.W),Ie(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ln(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Wn(n.i,t)))if(n.I=t.N,!t.J&&Wn(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(c){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Bs(n),ks(n)}Ps(n),Ve(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Pe(G(n.ab,n),6e3));if(1>=Qn(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else Gs(n,11)}else if((t.J||n.g==t)&&Bs(n),!et(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=c[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const h=c[5];null!=h&&"number"===typeof h&&0<h&&(s=1.5*h,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(it(t,"spdy")||it(t,"quic")||it(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Yn(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Sn(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=$s(s,s.H?s.la:null,s.W),o.J){Xn(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(un(a),on(a)),s.g=o}else Fs(s);0<n.l.length&&Rs(n)}else"stop"!=c[0]&&"close"!=c[0]||Gs(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Gs(n,7):Ds(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}Me(4)}catch(c){}}function dn(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(F(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function fn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(F(t)||"string"===typeof t)X(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(F(t)||"string"===typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=dn(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function gn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof gn)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function pn(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];mn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],mn(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}_=We.prototype,_.setTimeout=function(t){this.P=t},_.gb=function(t){t=t.target;const e=this.L;e&&3==bs(t)?e.l():this.Ia(t)},_.Ia=function(t){try{if(t==this.g)t:{const h=bs(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(3!=h||vt||this.g&&(this.h.h||this.g.ga()||Is(this.g)))){this.I||4!=h||7==e||Me(8==e||0>=l?3:2),un(this);var n=this.g.ba();this.N=n;e:if(nn(this)){var s=Is(this.g);t="";var i=s.length,r=4==bs(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){hn(this),cn(this);var o="";break e}this.h.i=new O.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Ae(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!et(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Ve(12),hn(this),cn(this);break t}_e(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ln(this,n)}this.U?(sn(this,h,o),vt&&this.i&&3==h&&(be(this.V,this.W,"tick",this.fb),this.W.start())):(_e(this.j,this.m,o,null),ln(this,o)),4==h&&hn(this),this.i&&!this.I&&(4==h?js(this.l,this):(this.i=!1,on(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),hn(this),cn(this)}}}catch(h){}},_.fb=function(){if(this.g){var t=bs(this.g),e=this.g.ga();this.C<e.length&&(un(this),sn(this,t,e),this.i&&4!=t&&on(this))}},_.cancel=function(){this.I=!0,hn(this)},_.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(De(this.j,this.A),2!=this.K&&(Me(3),Ve(17)),hn(this),this.o=2,cn(this)):an(this,this.Y-t)},_=gn.prototype,_.R=function(){pn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},_.T=function(){return pn(this),this.g.concat()},_.get=function(t,e){return mn(this.h,t)?this.h[t]:e},_.set=function(t,e){mn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},_.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var yn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vn(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof wn){this.g=void 0!==e?e:t.g,En(this,t.j),this.s=t.s,bn(this,t.i),In(this,t.m),this.l=t.l,e=t.h;var n=new Fn;n.i=e.i,e.g&&(n.g=new gn(e.g),n.h=e.h),Cn(this,n),this.o=t.o}else t&&(n=String(t).match(yn))?(this.g=!!e,En(this,n[1]||"",!0),this.s=kn(n[2]||""),bn(this,n[3]||"",!0),In(this,n[4]),this.l=kn(n[5]||"",!0),Cn(this,n[6]||"",!0),this.o=kn(n[7]||"")):(this.g=!!e,this.h=new Fn(null,this.g))}function Tn(t){return new wn(t)}function En(t,e,n){t.j=n?kn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bn(t,e,n){t.i=n?kn(e,!0):e}function In(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cn(t,e,n){e instanceof Fn?(t.h=e,Kn(t.h,t.g)):(n||(e=Nn(e,On)),t.h=new Fn(e,t.g))}function Sn(t,e,n){t.h.set(e,n)}function An(t){return Sn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _n(t){return t instanceof wn?Tn(t):new wn(t,void 0)}function Dn(t,e,n,s){var i=new wn(null,void 0);return t&&En(i,t),e&&bn(i,e),n&&In(i,n),s&&(i.l=s),i}function kn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Nn(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ln),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ln(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}wn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Nn(e,Rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Nn(e,Rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Nn(n,"/"==n.charAt(0)?Mn:xn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Nn(n,Vn)),t.join("")};var Rn=/[#\/\?@]/g,xn=/[#\?:]/g,Mn=/[#\?]/g,On=/[#\?@]/g,Vn=/#/g;function Fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pn(t){t.g||(t.g=new gn,t.h=0,t.i&&vn(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Un(t,e){Pn(t),e=jn(t,e),mn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,mn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&pn(t)))}function qn(t,e){return Pn(t),e=jn(t,e),mn(t.g.h,e)}function Bn(t,e,n){Un(t,e),0<n.length&&(t.i=null,t.g.set(jn(t,e),tt(n)),t.h+=n.length)}function jn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Kn(t,e){e&&!t.j&&(Pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Un(this,e),Bn(this,n,t))}),t)),t.j=e}_=Fn.prototype,_.add=function(t,e){Pn(this),this.i=null,t=jn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},_.forEach=function(t,e){Pn(this),this.g.forEach((function(n,s){X(n,(function(n){t.call(e,n,s,this)}),this)}),this)},_.T=function(){Pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},_.R=function(t){Pn(this);var e=[];if("string"===typeof t)qn(this,t)&&(e=Z(e,this.g.get(jn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Z(e,t[n])}return e},_.set=function(t,e){return Pn(this),this.i=null,t=jn(this,t),qn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},_.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},_.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};var Gn=class{constructor(t,e){this.h=t,this.g=e}};function Hn(t){this.l=t||$n,O.PerformanceNavigationTiming?(t=O.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(O.g&&O.g.Ea&&O.g.Ea()&&O.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $n=10;function zn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Qn(t){return t.h?1:t.g?t.g.size:0}function Wn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Yn(t,e){t.g?t.g.add(e):t.h=e}function Xn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Jn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return tt(t.i)}function Zn(){}function ts(){this.g=new Zn}function es(t,e,n){const s=n||"";try{fn(t,(function(t,n){let i=t;P(t)&&(i=se(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function ns(t,e){const n=new Ce;if(O.Image){const s=new Image;s.onload=H(ss,n,s,"TestLoadImage: loaded",!0,e),s.onerror=H(ss,n,s,"TestLoadImage: error",!1,e),s.onabort=H(ss,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=H(ss,n,s,"TestLoadImage: timeout",!1,e),O.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function ss(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function is(t){this.l=t.$b||null,this.j=t.ib||!1}function rs(t,e){te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=os,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Hn.prototype.cancel=function(){if(this.i=Jn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Zn.prototype.stringify=function(t){return O.JSON.stringify(t,void 0)},Zn.prototype.parse=function(t){return O.JSON.parse(t,void 0)},$(is,Be),is.prototype.g=function(){return new rs(this.l,this.j)},is.prototype.i=function(t){return function(){return t}}({}),$(rs,te);var os=0;function as(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function us(t){t.readyState=4,t.l=null,t.j=null,t.A=null,cs(t)}function cs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}_=rs.prototype,_.open=function(t,e){if(this.readyState!=os)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,cs(this)},_.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||O).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,us(this)),this.readyState=os},_.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,cs(this)),this.g&&(this.readyState=3,cs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof O.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;as(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},_.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?us(this):cs(this),3==this.readyState&&as(this)}},_.Ua=function(t){this.g&&(this.response=this.responseText=t,us(this))},_.Ta=function(t){this.g&&(this.response=t,us(this))},_.ha=function(){this.g&&us(this)},_.setRequestHeader=function(t,e){this.v.append(t,e)},_.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},_.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var hs=O.JSON.parse;function ls(t){te.call(this),this.headers=new gn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ds,this.K=this.L=!1}$(ls,te);var ds="",fs=/^https?$/i,gs=["POST","PUT"];function ps(t){return mt&&_t()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function ms(t){return"content-type"==t.toLowerCase()}function ys(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vs(t),Ts(t)}function vs(t){t.D||(t.D=!0,ee(t,"complete"),ee(t,"error"))}function ws(t){if(t.h&&"undefined"!=typeof M&&(!t.C[1]||4!=bs(t)||2!=t.ba()))if(t.v&&4==bs(t))ye(t.Fa,0,t);else if(ee(t,"readystatechange"),4==bs(t)){t.h=!1;try{const u=t.ba();t:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===u){var i=String(t.H).match(yn)[1]||null;if(!i&&O.self&&O.self.location){var r=O.self.location.protocol;i=r.substr(0,r.length-1)}s=!fs.test(i?i.toLowerCase():"")}n=s}if(n)ee(t,"complete"),ee(t,"success");else{t.m=6;try{var o=2<bs(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",vs(t)}}finally{Ts(t)}}}function Ts(t,e){if(t.g){Es(t);const s=t.g,i=t.C[0]?V:null;t.g=null,t.C=null,e||ee(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function Es(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(O.clearTimeout(t.A),t.A=null)}function bs(t){return t.g?t.g.readyState:0}function Is(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ds:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Cs(t){let e="";return ut(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Ss(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Cs(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Sn(t,e,n))}function As(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _s(t){this.za=0,this.l=[],this.h=new Ce,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=As("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=As("baseRetryDelayMs",5e3,t),this.$a=As("retryDelaySeedMs",1e4,t),this.Ya=As("forwardChannelMaxRetries",2,t),this.ra=As("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Hn(t&&t.concurrentRequestLimit),this.Ca=new ts,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ds(t){if(Ns(t),3==t.G){var e=t.V++,n=Tn(t.F);Sn(n,"SID",t.J),Sn(n,"RID",e),Sn(n,"TYPE","terminate"),Os(t,n),e=new We(t,t.h,e,void 0),e.K=2,e.v=An(Tn(n)),n=!1,O.navigator&&O.navigator.sendBeacon&&(n=O.navigator.sendBeacon(e.v.toString(),"")),!n&&O.Image&&((new Image).src=e.v,n=!0),n||(e.g=zs(e.l,null),e.g.ea(e.v)),e.F=Date.now(),on(e)}Hs(t)}function ks(t){t.g&&(Us(t),t.g.cancel(),t.g=null)}function Ns(t){ks(t),t.u&&(O.clearTimeout(t.u),t.u=null),Bs(t),t.i.cancel(),t.m&&("number"===typeof t.m&&O.clearTimeout(t.m),t.m=null)}function Ls(t,e){t.l.push(new Gn(t.Za++,e)),3==t.G&&Rs(t)}function Rs(t){zn(t.i)||t.m||(t.m=!0,he(t.Ha,t),t.C=0)}function xs(t,e){return!(Qn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=Pe(G(t.Ha,t,e),Ks(t,t.C)),t.C++,!0))}function Ms(t,e){var n;n=e?e.m:t.V++;const s=Tn(t.F);Sn(s,"SID",t.J),Sn(s,"RID",n),Sn(s,"AID",t.U),Os(t,s),t.o&&t.s&&Ss(s,t.o,t.s),n=new We(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Vs(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Yn(t.i,n),tn(n,s,e)}function Os(t,e){t.j&&fn({},(function(t,n){Sn(e,n,t)}))}function Vs(t,e,n){n=Math.min(t.l.length,n);var s=t.j?G(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{es(a,t,"req"+n+"_")}catch(Ei){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function Fs(t){t.g||t.u||(t.Y=1,he(t.Ga,t),t.A=0)}function Ps(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Pe(G(t.Ga,t),Ks(t,t.A)),t.A++,!0)}function Us(t){null!=t.B&&(O.clearTimeout(t.B),t.B=null)}function qs(t){t.g=new We(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Tn(t.oa);Sn(e,"RID","rpc"),Sn(e,"SID",t.J),Sn(e,"CI",t.N?"0":"1"),Sn(e,"AID",t.U),Os(t,e),Sn(e,"TYPE","xmlhttp"),t.o&&t.s&&Ss(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=An(Tn(e)),n.s=null,n.U=!0,en(n,t)}function Bs(t){null!=t.v&&(O.clearTimeout(t.v),t.v=null)}function js(t,e){var n=null;if(t.g==e){Bs(t),Us(t),t.g=null;var s=2}else{if(!Wn(t.i,e))return;n=e.D,Xn(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Re(),ee(s,new Fe(s,n,e,i)),Rs(t)}else Fs(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==s&&xs(t,e)||2==s&&Ps(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Gs(t,5);break;case 4:Gs(t,10);break;case 3:Gs(t,6);break;default:Gs(t,2)}}function Ks(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Gs(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=G(t.jb,t);n||(n=new wn("//www.google.com/images/cleardot.gif"),O.location&&"http"==O.location.protocol||En(n,"https"),An(n)),ns(n.toString(),s)}else Ve(2);t.G=0,t.j&&t.j.va(e),Hs(t),Ns(t)}function Hs(t){t.G=0,t.I=-1,t.j&&(0==Jn(t.i).length&&0==t.l.length||(t.i.i.length=0,tt(t.l),t.l.length=0),t.j.ua())}function $s(t,e,n){let s=_n(n);if(""!=s.i)e&&bn(s,e+"."+s.i),In(s,s.m);else{const t=O.location;s=Dn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&ut(t.aa,(function(t,e){Sn(s,e,t)})),e=t.D,n=t.sa,e&&n&&Sn(s,e,n),Sn(s,"VER",t.ma),Os(t,s),s}function zs(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ls(new is({ib:!0})):new ls(t.qa),e.L=t.H,e}function Qs(){}function Ws(){if(mt&&!(10<=Number(kt)))throw Error("Environmental error: no available transport.")}function Ys(t,e){te.call(this),this.g=new _s(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!et(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!et(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zs(this)}function Xs(t){$e.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Js(){ze.call(this),this.status=1}function Zs(t){this.g=t}_=ls.prototype,_.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ge.g(),this.C=this.u?je(this.u):je(Ge),this.g.onreadystatechange=G(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void ys(this,r)}t=n||"";const i=new gn(this.headers);s&&fn(s,(function(t,e){i.set(e,t)})),s=J(i.T()),n=O.FormData&&t instanceof O.FormData,!(0<=Y(gs,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Es(this),0<this.B&&((this.K=ps(this.g))?(this.g.timeout=this.B,this.g.ontimeout=G(this.pa,this)):this.A=ye(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ys(this,r)}},_.pa=function(){"undefined"!=typeof M&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ee(this,"timeout"),this.abort(8))},_.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ee(this,"complete"),ee(this,"abort"),Ts(this))},_.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ts(this,!0)),ls.Z.M.call(this)},_.Fa=function(){this.s||(this.F||this.v||this.l?ws(this):this.cb())},_.cb=function(){ws(this)},_.ba=function(){try{return 2<bs(this)?this.g.status:-1}catch(t){return-1}},_.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},_.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),hs(e)}},_.Da=function(){return this.m},_.La=function(){return"string"===typeof this.j?this.j:String(this.j)},_=_s.prototype,_.ma=8,_.G=1,_.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},_.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new We(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=ct(r),lt(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Vs(this,i,e),n=Tn(this.F),Sn(n,"RID",t),Sn(n,"CVER",22),this.D&&Sn(n,"X-HTTP-Session-Id",this.D),Os(this,n),this.o&&r&&Ss(n,this.o,r),Yn(this.i,i),this.Ra&&Sn(n,"TYPE","init"),this.ja?(Sn(n,"$req",e),Sn(n,"SID","null"),i.$=!0,tn(i,n,null)):tn(i,n,e),this.G=2}}else 3==this.G&&(t?Ms(this,t):0==this.l.length||zn(this.i)||Ms(this))},_.Ga=function(){if(this.u=null,qs(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Pe(G(this.bb,this),t)}},_.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ve(10),ks(this),qs(this))},_.ab=function(){null!=this.v&&(this.v=null,ks(this),Ps(this),Ve(19))},_.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ve(2)):(this.h.info("Failed to ping google.com"),Ve(1))},_=Qs.prototype,_.xa=function(){},_.wa=function(){},_.va=function(){},_.ua=function(){},_.Oa=function(){},Ws.prototype.g=function(t,e){return new Ys(t,e)},$(Ys,te),Ys.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),he(G(t.hb,t,e))),Ve(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=$s(t,null,t.W),Rs(t)},Ys.prototype.close=function(){Ds(this.g)},Ys.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,Ls(this.g,e)}else this.v?(e={},e.__data__=se(t),Ls(this.g,e)):Ls(this.g,t)},Ys.prototype.M=function(){this.g.j=null,delete this.j,Ds(this.g),delete this.g,Ys.Z.M.call(this)},$(Xs,$e),$(Js,ze),$(Zs,Qs),Zs.prototype.xa=function(){ee(this.g,"a")},Zs.prototype.wa=function(t){ee(this.g,new Xs(t))},Zs.prototype.va=function(t){ee(this.g,new Js(t))},Zs.prototype.ua=function(){ee(this.g,"b")},Ws.prototype.createWebChannel=Ws.prototype.g,Ys.prototype.send=Ys.prototype.u,Ys.prototype.open=Ys.prototype.m,Ys.prototype.close=Ys.prototype.close,Ue.NO_ERROR=0,Ue.TIMEOUT=8,Ue.HTTP_ERROR=6,qe.COMPLETE="complete",Ke.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",te.prototype.listen=te.prototype.N,ls.prototype.listenOnce=ls.prototype.O,ls.prototype.getLastError=ls.prototype.La,ls.prototype.getLastErrorCode=ls.prototype.Da,ls.prototype.getStatus=ls.prototype.ba,ls.prototype.getResponseJson=ls.prototype.Qa,ls.prototype.getResponseText=ls.prototype.ga,ls.prototype.send=ls.prototype.ea;var ti=x.createWebChannelTransport=function(){return new Ws},ei=x.getStatEventTarget=function(){return Re()},ni=x.ErrorCode=Ue,si=x.EventType=qe,ii=x.Event=Ne,ri=x.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},oi=x.FetchXmlHttpFactory=is,ai=x.WebChannel=Ke,ui=x.XhrIo=ls;const ci="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}hi.UNAUTHENTICATED=new hi(null),hi.GOOGLE_CREDENTIALS=new hi("google-credentials-uid"),hi.FIRST_PARTY=new hi("first-party-uid"),hi.MOCK_USER=new hi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let li="9.9.4";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new N.Yd("@firebase/firestore");function fi(){return di.logLevel}function gi(t,...e){if(di.logLevel<=N["in"].DEBUG){const n=e.map(yi);di.debug(`Firestore (${li}): ${t}`,...n)}}function pi(t,...e){if(di.logLevel<=N["in"].ERROR){const n=e.map(yi);di.error(`Firestore (${li}): ${t}`,...n)}}function mi(t,...e){if(di.logLevel<=N["in"].WARN){const n=e.map(yi);di.warn(`Firestore (${li}): ${t}`,...n)}}function yi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t="Unexpected state"){const e=`FIRESTORE (${li}) INTERNAL ASSERTION FAILED: `+t;throw pi(e),new Error(e)}function wi(t,e){t||vi()}function Ti(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class bi extends L.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Si{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(hi.UNAUTHENTICATED)))}shutdown(){}}class Ai{constructor(t){this.t=t,this.currentUser=hi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Ii;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ii,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{gi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(gi("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ii)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(gi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(wi("string"==typeof e.accessToken),new Ci(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return wi(null===t||"string"==typeof t),new hi(t)}}class _i{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=hi.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(wi(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Di{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new _i(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(hi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ki{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ni{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&gi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,gi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{gi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):gi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(wi("string"==typeof t.token),this.A=t.token,new ki(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Li(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Li(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function xi(t,e){return t<e?-1:t>e?1:0}function Mi(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new bi(Ei.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new bi(Ei.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new bi(Ei.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new bi(Ei.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Oi.fromMillis(Date.now())}static fromDate(t){return Oi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Oi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?xi(this.nanoseconds,t.nanoseconds):xi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Vi(t)}static min(){return new Vi(new Oi(0,0))}static max(){return new Vi(new Oi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e,n){void 0===e?e=0:e>t.length&&vi(),void 0===n?n=t.length-e:n>t.length-e&&vi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Fi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Fi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Pi extends Fi{construct(t,e,n){return new Pi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new bi(Ei.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Pi(e)}static emptyPath(){return new Pi([])}}const Ui=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qi extends Fi{construct(t,e,n){return new qi(t,e,n)}static isValidIdentifier(t){return Ui.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new qi(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new bi(Ei.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new bi(Ei.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new bi(Ei.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new bi(Ei.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qi(e)}static emptyPath(){return new qi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t){this.path=t}static fromPath(t){return new Bi(Pi.fromString(t))}static fromName(t){return new Bi(Pi.fromString(t).popFirst(5))}static empty(){return new Bi(Pi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Pi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Pi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Bi(new Pi(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}ji.UNKNOWN_ID=-1;function Ki(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Vi.fromTimestamp(1e9===s?new Oi(n+1,0):new Oi(n,s));return new Hi(i,Bi.empty(),e)}function Gi(t){return new Hi(t.readTime,t.key,-1)}class Hi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Hi(Vi.min(),Bi.empty(),-1)}static max(){return new Hi(Vi.max(),Bi.empty(),-1)}}function $i(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Bi.comparator(t.documentKey,e.documentKey),0!==n?n:xi(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t){if(t.code!==Ei.FAILED_PRECONDITION||t.message!==zi)throw t;gi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&vi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Yi(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Yi?e:Yi.resolve(e)}catch(t){return Yi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Yi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Yi.reject(e)}static resolve(t){return new Yi(((e,n)=>{e(t)}))}static reject(t){return new Yi(((e,n)=>{n(t)}))}static waitFor(t){return new Yi(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Yi.resolve(!1);for(const n of t)e=e.next((t=>t?Yi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Yi(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{r[u]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new Yi(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function er(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ji.at=-1;class nr{constructor(t,e){this.comparator=t,this.root=e||ir.EMPTY}insert(t,e){return new nr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ir.BLACK,null,null))}remove(t){return new nr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ir.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sr(this.root,t,this.comparator,!1)}getReverseIterator(){return new sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sr(this.root,t,this.comparator,!0)}}class sr{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ir{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:ir.RED,this.left=null!=s?s:ir.EMPTY,this.right=null!=i?i:ir.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new ir(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ir.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return ir.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ir.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ir.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw vi();if(this.right.isRed())throw vi();const t=this.left.check();if(t!==this.right.check())throw vi();return t+(this.isRed()?0:1)}}ir.EMPTY=null,ir.RED=!0,ir.BLACK=!1,ir.EMPTY=new class{constructor(){this.size=0}get key(){throw vi()}get value(){throw vi()}get color(){throw vi()}get left(){throw vi()}get right(){throw vi()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ir(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr{constructor(t){this.comparator=t,this.data=new nr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new or(this.data.getIterator())}getIteratorFrom(t){return new or(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof rr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new rr(this.comparator);return e.data=t,e}}class or{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar{constructor(t){this.fields=t,t.sort(qi.comparator)}static empty(){return new ar([])}unionWith(t){let e=new rr(qi.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ar(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Mi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ur(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ur(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return xi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ur.EMPTY_BYTE_STRING=new ur("");const cr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(wi(!!t),"string"==typeof t){let e=0;const n=cr.exec(t);if(wi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lr(t.seconds),nanos:lr(t.nanos)}}function lr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function dr(t){return"string"==typeof t?ur.fromBase64String(t):ur.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function gr(t){const e=t.mapValue.fields.__previous_value__;return fr(e)?gr(e):e}function pr(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Oi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class yr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new yr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof yr&&t.projectId===this.projectId&&t.database===this.database}}function vr(t){return null==t}function wr(t){return 0===t&&1/t==-1/0}function Tr(t){return"number"==typeof t&&Number.isInteger(t)&&!wr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fr(t)?4:Or(t)?9007199254740991:10:vi()}function Ir(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pr(t).isEqual(pr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=hr(t.timestampValue),s=hr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return dr(t.bytesValue).isEqual(dr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return lr(t.geoPointValue.latitude)===lr(e.geoPointValue.latitude)&&lr(t.geoPointValue.longitude)===lr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return lr(t.integerValue)===lr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=lr(t.doubleValue),s=lr(e.doubleValue);return n===s?wr(n)===wr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Mi(t.arrayValue.values||[],e.arrayValue.values||[],Ir);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Zi(n)!==Zi(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!Ir(n[i],s[i])))return!1;return!0}(t,e);default:return vi()}}function Cr(t,e){return void 0!==(t.values||[]).find((t=>Ir(t,e)))}function Sr(t,e){if(t===e)return 0;const n=br(t),s=br(e);if(n!==s)return xi(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=lr(t.integerValue||t.doubleValue),s=lr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Ar(t.timestampValue,e.timestampValue);case 4:return Ar(pr(t),pr(e));case 5:return xi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=dr(t),s=dr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=xi(n[i],s[i]);if(0!==t)return t}return xi(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=xi(lr(t.latitude),lr(e.latitude));return 0!==n?n:xi(lr(t.longitude),lr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=Sr(n[i],s[i]);if(t)return t}return xi(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Er.mapValue&&e===Er.mapValue)return 0;if(t===Er.mapValue)return 1;if(e===Er.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=xi(s[o],r[o]);if(0!==t)return t;const e=Sr(n[s[o]],i[r[o]]);if(0!==e)return e}return xi(s.length,r.length)}(t.mapValue,e.mapValue);default:throw vi()}}function Ar(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return xi(t,e);const n=hr(t),s=hr(e),i=xi(n.seconds,s.seconds);return 0!==i?i:xi(n.nanos,s.nanos)}function _r(t){return Dr(t)}function Dr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=hr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?dr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Bi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Dr(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Dr(t.fields[i])}`;return n+"}"}(t.mapValue):vi();var e,n}function kr(t){return!!t&&"integerValue"in t}function Nr(t){return!!t&&"arrayValue"in t}function Lr(t){return!!t&&"nullValue"in t}function Rr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xr(t){return!!t&&"mapValue"in t}function Mr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Mr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Or(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{constructor(t){this.value=t}static empty(){return new Vr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!xr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mr(e)}setAll(t){let e=qi.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Mr(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());xr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ir(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];xr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){tr(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new Vr(Mr(this.value))}}function Fr(t){const e=[];return tr(t.fields,((t,n)=>{const s=new qi([t]);if(xr(n)){const t=Fr(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new ar(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Pr{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new Pr(t,0,Vi.min(),Vi.min(),Vr.empty(),0)}static newFoundDocument(t,e,n){return new Pr(t,1,e,Vi.min(),n,0)}static newNoDocument(t,e){return new Pr(t,2,e,Vi.min(),Vr.empty(),0)}static newUnknownDocument(t,e){return new Pr(t,3,e,Vi.min(),Vr.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Vi.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Pr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Pr(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ht=null}}function qr(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Ur(t,e,n,s,i,r,o)}function Br(t){const e=Ti(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+_r(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),vr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>_r(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>_r(t))).join(",")),e.ht=t}return e.ht}function jr(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${_r(e.value)}`;var e})).join(", ")}]`),vr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>_r(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>_r(t))).join(",")),`Target(${e})`}function Kr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!no(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Ir(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!io(t.startAt,e.startAt)&&io(t.endAt,e.endAt)}function Gr(t){return Bi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Hr extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new $r(t,e,n):"array-contains"===e?new Yr(t,n):"in"===e?new Xr(t,n):"not-in"===e?new Jr(t,n):"array-contains-any"===e?new Zr(t,n):new Hr(t,e,n)}static lt(t,e,n){return"in"===e?new zr(t,n):new Qr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Sr(e,this.value)):null!==e&&br(this.value)===br(e)&&this.ft(Sr(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return vi()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class $r extends Hr{constructor(t,e,n){super(t,e,n),this.key=Bi.fromName(n.referenceValue)}matches(t){const e=Bi.comparator(t.key,this.key);return this.ft(e)}}class zr extends Hr{constructor(t,e){super(t,"in",e),this.keys=Wr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Qr extends Hr{constructor(t,e){super(t,"not-in",e),this.keys=Wr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Wr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Bi.fromName(t.referenceValue)))}class Yr extends Hr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Nr(e)&&Cr(e.arrayValue,this.value)}}class Xr extends Hr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Cr(this.value.arrayValue,e)}}class Jr extends Hr{constructor(t,e){super(t,"not-in",e)}matches(t){if(Cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Cr(this.value.arrayValue,e)}}class Zr extends Hr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Nr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Cr(this.value.arrayValue,t)))}}class to{constructor(t,e){this.position=t,this.inclusive=e}}class eo{constructor(t,e="asc"){this.field=t,this.dir=e}}function no(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function so(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Bi.comparator(Bi.fromName(o.referenceValue),n.key):Sr(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function io(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ir(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function oo(t,e,n,s,i,r,o,a){return new ro(t,e,n,s,i,r,o,a)}function ao(t){return new ro(t)}function uo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function co(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ho(t){for(const e of t.filters)if(e.dt())return e.field;return null}function lo(t){return null!==t.collectionGroup}function fo(t){const e=Ti(t);if(null===e._t){e._t=[];const t=ho(e),n=co(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new eo(t)),e._t.push(new eo(qi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new eo(qi.keyField(),t))}}}return e._t}function go(t){const e=Ti(t);if(!e.wt)if("F"===e.limitType)e.wt=qr(e.path,e.collectionGroup,fo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of fo(e)){const e="desc"===i.dir?"asc":"desc";t.push(new eo(i.field,e))}const n=e.endAt?new to(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new to(e.startAt.position,e.startAt.inclusive):null;e.wt=qr(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function po(t,e,n){return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mo(t,e){return Kr(go(t),go(e))&&t.limitType===e.limitType}function yo(t){return`${Br(go(t))}|lt:${t.limitType}`}function vo(t){return`Query(target=${jr(go(t))}; limitType=${t.limitType})`}function wo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Bi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=so(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,fo(t),e))&&!(t.endAt&&!function(t,e,n){const s=so(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,fo(t),e))}(t,e)}function To(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Eo(t){return(e,n)=>{let s=!1;for(const i of fo(t)){const t=bo(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function bo(t,e,n){const s=t.field.isKeyField()?Bi.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Sr(s,i):vi()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return vi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wr(e)?"-0":e}}function Co(t){return{integerValue:""+t}}function So(t,e){return Tr(e)?Co(e):Io(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this._=void 0}}function _o(t,e,n){return t instanceof No?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Lo?Ro(t,e):t instanceof xo?Mo(t,e):function(t,e){const n=ko(t,e),s=Vo(n)+Vo(t.yt);return kr(n)&&kr(t.yt)?Co(s):Io(t.It,s)}(t,e)}function Do(t,e,n){return t instanceof Lo?Ro(t,e):t instanceof xo?Mo(t,e):n}function ko(t,e){return t instanceof Oo?kr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class No extends Ao{}class Lo extends Ao{constructor(t){super(),this.elements=t}}function Ro(t,e){const n=Fo(e);for(const s of t.elements)n.some((t=>Ir(t,s)))||n.push(s);return{arrayValue:{values:n}}}class xo extends Ao{constructor(t){super(),this.elements=t}}function Mo(t,e){let n=Fo(e);for(const s of t.elements)n=n.filter((t=>!Ir(t,s)));return{arrayValue:{values:n}}}class Oo extends Ao{constructor(t,e){super(),this.It=t,this.yt=e}}function Vo(t){return lr(t.integerValue||t.doubleValue)}function Fo(t){return Nr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Lo&&e instanceof Lo||t instanceof xo&&e instanceof xo?Mi(t.elements,e.elements,Ir):t instanceof Oo&&e instanceof Oo?Ir(t.yt,e.yt):t instanceof No&&e instanceof No}(t.transform,e.transform)}class Uo{constructor(t,e){this.version=t,this.transformResults=e}}class qo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new qo}static exists(t){return new qo(void 0,t)}static updateTime(t){return new qo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Bo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class jo{}function Ko(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Zo(t.key,qo.none()):new Qo(t.key,t.data,qo.none());{const n=t.data,s=Vr.empty();let i=new rr(qi.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Wo(t.key,s,new ar(i.toArray()),qo.none())}}function Go(t,e,n){t instanceof Qo?function(t,e,n){const s=t.value.clone(),i=Xo(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Wo?function(t,e,n){if(!Bo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Xo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Yo(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ho(t,e,n,s){return t instanceof Qo?function(t,e,n,s){if(!Bo(t.precondition,e))return n;const i=t.value.clone(),r=Jo(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Wo?function(t,e,n,s){if(!Bo(t.precondition,e))return n;const i=Jo(t.fieldTransforms,s,e),r=e.data;return r.setAll(Yo(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Bo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function $o(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=ko(s.transform,t||null);null!=i&&(null===n&&(n=Vr.empty()),n.set(s.field,i))}return n||null}function zo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Mi(t,e,((t,e)=>Po(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qo extends jo{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wo extends jo{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Xo(t,e,n){const s=new Map;wi(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Do(o,a,n[i]))}return s}function Jo(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,_o(t,r,e))}return s}class Zo extends jo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ta extends jo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var na,sa;function ia(t){switch(t){default:return vi();case Ei.CANCELLED:case Ei.UNKNOWN:case Ei.DEADLINE_EXCEEDED:case Ei.RESOURCE_EXHAUSTED:case Ei.INTERNAL:case Ei.UNAVAILABLE:case Ei.UNAUTHENTICATED:return!1;case Ei.INVALID_ARGUMENT:case Ei.NOT_FOUND:case Ei.ALREADY_EXISTS:case Ei.PERMISSION_DENIED:case Ei.FAILED_PRECONDITION:case Ei.ABORTED:case Ei.OUT_OF_RANGE:case Ei.UNIMPLEMENTED:case Ei.DATA_LOSS:return!0}}function ra(t){if(void 0===t)return pi("GRPC error has no .code"),Ei.UNKNOWN;switch(t){case na.OK:return Ei.OK;case na.CANCELLED:return Ei.CANCELLED;case na.UNKNOWN:return Ei.UNKNOWN;case na.DEADLINE_EXCEEDED:return Ei.DEADLINE_EXCEEDED;case na.RESOURCE_EXHAUSTED:return Ei.RESOURCE_EXHAUSTED;case na.INTERNAL:return Ei.INTERNAL;case na.UNAVAILABLE:return Ei.UNAVAILABLE;case na.UNAUTHENTICATED:return Ei.UNAUTHENTICATED;case na.INVALID_ARGUMENT:return Ei.INVALID_ARGUMENT;case na.NOT_FOUND:return Ei.NOT_FOUND;case na.ALREADY_EXISTS:return Ei.ALREADY_EXISTS;case na.PERMISSION_DENIED:return Ei.PERMISSION_DENIED;case na.FAILED_PRECONDITION:return Ei.FAILED_PRECONDITION;case na.ABORTED:return Ei.ABORTED;case na.OUT_OF_RANGE:return Ei.OUT_OF_RANGE;case na.UNIMPLEMENTED:return Ei.UNIMPLEMENTED;case na.DATA_LOSS:return Ei.DATA_LOSS;default:return vi()}}(sa=na||(na={}))[sa.OK=0]="OK",sa[sa.CANCELLED=1]="CANCELLED",sa[sa.UNKNOWN=2]="UNKNOWN",sa[sa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",sa[sa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",sa[sa.NOT_FOUND=5]="NOT_FOUND",sa[sa.ALREADY_EXISTS=6]="ALREADY_EXISTS",sa[sa.PERMISSION_DENIED=7]="PERMISSION_DENIED",sa[sa.UNAUTHENTICATED=16]="UNAUTHENTICATED",sa[sa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",sa[sa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",sa[sa.ABORTED=10]="ABORTED",sa[sa.OUT_OF_RANGE=11]="OUT_OF_RANGE",sa[sa.UNIMPLEMENTED=12]="UNIMPLEMENTED",sa[sa.INTERNAL=13]="INTERNAL",sa[sa.UNAVAILABLE=14]="UNAVAILABLE",sa[sa.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){tr(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return er(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new nr(Bi.comparator);function ua(){return aa}const ca=new nr(Bi.comparator);function ha(...t){let e=ca;for(const n of t)e=e.insert(n.key,n);return e}function la(t){let e=ca;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function da(){return ga()}function fa(){return ga()}function ga(){return new oa((t=>t.toString()),((t,e)=>t.isEqual(e)))}const pa=new nr(Bi.comparator),ma=new rr(Bi.comparator);function ya(...t){let e=ma;for(const n of t)e=e.add(n);return e}const va=new rr(xi);function wa(){return va}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Ea.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ta(Vi.min(),n,wa(),ua(),ya())}}class Ea{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Ea(ur.EMPTY_BYTE_STRING,e,ya(),ya(),ya())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,e,n,s){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=s}}class Ia{constructor(t,e){this.targetId=t,this.At=e}}class Ca{constructor(t,e,n=ur.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Sa{constructor(){this.Rt=0,this.bt=Da(),this.Pt=ur.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=ya(),e=ya(),n=ya();return this.bt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:vi()}})),new Ea(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Da()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Aa{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=ua(),this.qt=_a(),this.Kt=new rr(xi)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:vi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,s=this.Xt(e);if(s){const t=s.target;if(Gr(t))if(0===n){const n=new Bi(t.path);this.jt(e,n,Pr.newNoDocument(n,Vi.min()))}else wi(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,s)=>{const i=this.Xt(s);if(i){if(n.current&&Gr(i.target)){const e=new Bi(i.target.path);null!==this.Ut.get(e)||this.ee(s,e)||this.jt(s,e,Pr.newNoDocument(e,t))}n.Dt&&(e.set(s,n.xt()),n.Nt())}}));let n=ya();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const s=new Ta(t,e,this.Kt,this.Ut,n);return this.Ut=ua(),this.qt=_a(),this.Kt=new rr(xi),s}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const s=this.zt(t);this.ee(t,e)?s.kt(e,1):s.Mt(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let e=this.Lt.get(t);return e||(e=new Sa,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new rr(xi),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||gi("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Sa),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function _a(){return new nr(Bi.comparator)}function Da(){return new nr(Bi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Na=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class La{constructor(t,e){this.databaseId=t,this.gt=e}}function Ra(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xa(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Ma(t,e){return Ra(t,e.toTimestamp())}function Oa(t){return wi(!!t),Vi.fromTimestamp(function(t){const e=hr(t);return new Oi(e.seconds,e.nanos)}(t))}function Va(t,e){return function(t){return new Pi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Fa(t){const e=Pi.fromString(t);return wi(ou(e)),e}function Pa(t,e){return Va(t.databaseId,e.path)}function Ua(t,e){const n=Fa(e);if(n.get(1)!==t.databaseId.projectId)throw new bi(Ei.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new bi(Ei.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Bi(Ka(n))}function qa(t,e){return Va(t.databaseId,e)}function Ba(t){const e=Fa(t);return 4===e.length?Pi.emptyPath():Ka(e)}function ja(t){return new Pi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ka(t){return wi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ga(t,e,n){return{name:Pa(t,e),fields:n.value.mapValue.fields}}function Ha(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:vi()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.gt?(wi(void 0===e||"string"==typeof e),ur.fromBase64String(e||"")):(wi(void 0===e||e instanceof Uint8Array),ur.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Ei.UNKNOWN:ra(t.code);return new bi(e,t.message||"")}(o);n=new Ca(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ua(t,s.document.name),r=Oa(s.document.updateTime),o=new Vr({mapValue:{fields:s.document.fields}}),a=Pr.newFoundDocument(i,r,o),u=s.targetIds||[],c=s.removedTargetIds||[];n=new ba(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ua(t,s.document),r=s.readTime?Oa(s.readTime):Vi.min(),o=Pr.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ba([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ua(t,s.document),r=s.removedTargetIds||[];n=new ba([],r,i,null)}else{if(!("filter"in e))return vi();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new ea(s),r=t.targetId;n=new Ia(r,i)}}return n}function $a(t,e){let n;if(e instanceof Qo)n={update:Ga(t,e.key,e.value)};else if(e instanceof Zo)n={delete:Pa(t,e.key)};else if(e instanceof Wo)n={update:Ga(t,e.key,e.data),updateMask:ru(e.fieldMask)};else{if(!(e instanceof ta))return vi();n={verify:Pa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof No)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Lo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof xo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Oo)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw vi()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ma(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:vi()}(t,e.precondition)),n}function za(t,e){return t&&t.length>0?(wi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Oa(t.updateTime):Oa(e);return n.isEqual(Vi.min())&&(n=Oa(e)),new Uo(n,t.transformResults||[])}(t,e)))):[]}function Qa(t,e){return{documents:[qa(t,e.path)]}}function Wa(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=qa(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qa(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Rr(t.value))return{unaryFilter:{field:eu(t.field),op:"IS_NAN"}};if(Lr(t.value))return{unaryFilter:{field:eu(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Rr(t.value))return{unaryFilter:{field:eu(t.field),op:"IS_NOT_NAN"}};if(Lr(t.value))return{unaryFilter:{field:eu(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eu(t.field),op:tu(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:eu(t.field),direction:Za(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.gt||vr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ya(t){let e=Ba(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){wi(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Ja(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new eo(nu(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,vr(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new to(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new to(n,e)}(n.endAt)),oo(e,i,o,r,a,"F",u,c)}function Xa(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return vi()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ja(t){return t?void 0!==t.unaryFilter?[iu(t)]:void 0!==t.fieldFilter?[su(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ja(t))).reduce(((t,e)=>t.concat(e))):vi():[]}function Za(t){return ka[t]}function tu(t){return Na[t]}function eu(t){return{fieldPath:t.canonicalString()}}function nu(t){return qi.fromServerFormat(t.fieldPath)}function su(t){return Hr.create(nu(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return vi()}}(t.fieldFilter.op),t.fieldFilter.value)}function iu(t){switch(t.unaryFilter.op){case"IS_NAN":const e=nu(t.unaryFilter.field);return Hr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=nu(t.unaryFilter.field);return Hr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=nu(t.unaryFilter.field);return Hr.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=nu(t.unaryFilter.field);return Hr.create(i,"!=",{nullValue:"NULL_VALUE"});default:return vi()}}function ru(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ou(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],uu=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],cu=uu;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hu{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Go(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ho(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ho(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=fa();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=Ko(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(Vi.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ya())}isEqual(t){return this.batchId===t.batchId&&Mi(this.mutations,t.mutations,((t,e)=>zo(t,e)))&&Mi(this.baseMutations,t.baseMutations,((t,e)=>zo(t,e)))}}class lu{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){wi(t.mutations.length===n.length);let s=pa;const i=t.mutations;for(let r=0;r<i.length;r++)s=s.insert(i[r].key,n[r].version);return new lu(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,e,n,s,i=Vi.min(),r=Vi.min(),o=ur.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new fu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new fu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new fu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t){this.re=t}}function pu(t){const e=Ya({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?po(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mu{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(lr(t.integerValue));else if("doubleValue"in t){const n=lr(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),wr(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(dr(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?Or(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):vi()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const s of Object.keys(n))this._e(s,e),this.ae(n[s],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const s of n)this.ae(s,e)}ge(t,e){this.le(e,37),Bi.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}mu.Te=new mu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu{constructor(){this.Ye=new vu}addToCollectionParentIndex(t,e){return this.Ye.add(e),Yi.resolve()}getCollectionParents(t,e){return Yi.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return Yi.resolve()}deleteFieldIndex(t,e){return Yi.resolve()}getDocumentsMatchingTarget(t,e){return Yi.resolve(null)}getIndexType(t,e){return Yi.resolve(0)}getFieldIndexes(t,e){return Yi.resolve([])}getNextCollectionGroupToUpdate(t){return Yi.resolve(null)}getMinOffset(t,e){return Yi.resolve(Hi.min())}getMinOffsetFromCollectionGroup(t,e){return Yi.resolve(Hi.min())}updateCollectionGroup(t,e,n){return Yi.resolve()}updateIndexEntries(t,e){return Yi.resolve()}}class vu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new rr(Pi.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new rr(Pi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class wu{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new wu(t,wu.DEFAULT_COLLECTION_PERCENTILE,wu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wu.DEFAULT_COLLECTION_PERCENTILE=10,wu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wu.DEFAULT=new wu(41943040,wu.DEFAULT_COLLECTION_PERCENTILE,wu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wu.DISABLED=new wu(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tu{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Tu(0)}static vn(){return new Tu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eu{constructor(){this.changes=new oa((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Pr.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Yi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Ho(n.mutation,t,ar.empty(),Oi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ya()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ya()){const s=da();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=ha();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=da();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ya())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=ua();const r=ga(),o=ga();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Wo)?i=i.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),Ho(o.mutation,e,o.mutation.getFieldMask(),Oi.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new bu(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ga();let s=new nr(((t,e)=>t-e)),i=ya();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||ar.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||ya()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,u=s.value,c=fa();u.forEach((t=>{if(!i.has(t)){const s=Ko(e.get(t),n.get(t));null!==s&&c.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Yi.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Bi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):lo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):Yi.resolve(da());let o=-1,a=i;return r.next((e=>Yi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Yi.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ya()))).next((t=>({batchId:o,changes:la(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Bi(e)).next((t=>{let e=ha();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=ha();return this.indexManager.getCollectionParents(t,s).next((r=>Yi.forEach(r,(r=>{const o=function(t,e){return new ro(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,Pr.newInvalidDocument(n)))}));let n=ha();return s.forEach(((s,i)=>{const r=t.get(s);void 0!==r&&Ho(r.mutation,i,ar.empty(),Oi.now()),wo(e,i)&&(n=n.insert(s,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Yi.resolve(Pr.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return Yi.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Oa(n.createTime)}),Yi.resolve()}getNamedQuery(t,e){return Yi.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:pu(t.bundledQuery),readTime:Oa(t.readTime)}}(e)),Yi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.overlays=new nr(Bi.comparator),this.es=new Map}getOverlay(t,e){return Yi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=da();return Yi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ue(t,e,s)})),Yi.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),Yi.resolve()}getOverlaysForCollection(t,e,n){const s=da(),i=e.length+1,r=new Bi(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Yi.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new nr(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=da(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=da(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return Yi.resolve(o)}ue(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new du(e,n));let i=this.es.get(e);void 0===i&&(i=ya(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.ns=new rr(_u.ss),this.rs=new rr(_u.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new _u(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new _u(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new Bi(new Pi([])),n=new _u(e,t),s=new _u(e,t+1),i=[];return this.rs.forEachInRange([n,s],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new Bi(new Pi([])),n=new _u(e,t),s=new _u(e,t+1);let i=ya();return this.rs.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new _u(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class _u{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return Bi.comparator(t.key,e.key)||xi(t._s,e._s)}static os(t,e){return xi(t._s,e._s)||Bi.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new rr(_u.ss)}checkEmpty(t){return Yi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new hu(i,e,n,s);this.mutationQueue.push(r);for(const o of s)this.gs=this.gs.add(new _u(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Yi.resolve(r)}lookupMutationBatch(t,e){return Yi.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),i=s<0?0:s;return Yi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Yi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Yi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new _u(e,0),s=new _u(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,s],(t=>{const e=this.ys(t._s);i.push(e)})),Yi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rr(xi);return e.forEach((t=>{const e=new _u(t,0),s=new _u(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],(t=>{n=n.add(t._s)}))})),Yi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Bi.isDocumentKey(i)||(i=i.child(""));const r=new _u(new Bi(i),0);let o=new rr(xi);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)}),r),Yi.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){wi(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Yi.forEach(e.mutations,(s=>{const i=new _u(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new _u(e,0),s=this.gs.firstAfterOrEqual(n);return Yi.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Yi.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){this.Es=t,this.docs=new nr(Bi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Yi.resolve(n?n.document.mutableCopy():Pr.newInvalidDocument(e))}getEntries(t,e){let n=ua();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Pr.newInvalidDocument(t))})),Yi.resolve(n)}getAllFromCollection(t,e,n){let s=ua();const i=new Bi(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||$i(Gi(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return Yi.resolve(s)}getAllFromCollectionGroup(t,e,n,s){vi()}As(t,e){return Yi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Nu(this)}getSize(t){return Yi.resolve(this.size)}}class Nu extends Eu{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)})),Yi.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t){this.persistence=t,this.Rs=new oa((t=>Br(t)),Kr),this.lastRemoteSnapshotVersion=Vi.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Au,this.targetCount=0,this.vs=Tu.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),Yi.resolve()}getLastRemoteSnapshotVersion(t){return Yi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Yi.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),Yi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),Yi.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Tu(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,Yi.resolve()}updateTargetData(t,e){return this.Dn(e),Yi.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,Yi.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Yi.waitFor(i).next((()=>s))}getTargetCount(t){return Yi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return Yi.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),Yi.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Yi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),Yi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return Yi.resolve(n)}containsKey(t,e){return Yi.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new Ji(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Lu(this),this.indexManager=new yu,this.remoteDocumentCache=function(t){return new ku(t)}((t=>this.referenceDelegate.xs(t))),this.It=new gu(e),this.Ns=new Cu(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Su,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Du(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){gi("MemoryPersistence","Starting transaction:",t);const s=new xu(this.Ss.next());return this.referenceDelegate.ks(),n(s).next((t=>this.referenceDelegate.Ms(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Os(t,e){return Yi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class xu extends Qi{constructor(t){super(),this.currentSequenceNumber=t}}class Mu{constructor(t){this.persistence=t,this.Fs=new Au,this.$s=null}static Bs(t){return new Mu(t)}get Ls(){if(this.$s)return this.$s;throw vi()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),Yi.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),Yi.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),Yi.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Ms(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Yi.forEach(this.Ls,(n=>{const s=Bi.fromPath(n);return this.Us(t,s).next((t=>{t||e.removeEntry(s,Vi.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return Yi.or([()=>Yi.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}static Ci(t,e){let n=ya(),s=ya();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ou(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next((i=>i||this.Mi(t,e,s,n))).next((n=>n||this.Oi(t,e)))}ki(t,e){if(uo(e))return Yi.resolve(null);let n=go(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=po(e,null,"F"),n=go(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=ya(...s);return this.Ni.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Fi(e,s);return this.$i(e,r,i,n.readTime)?this.ki(t,po(e,null,"F")):this.Bi(t,r,e,n)}))))})))))}Mi(t,e,n,s){return uo(e)||s.isEqual(Vi.min())?this.Oi(t,e):this.Ni.getDocuments(t,n).next((i=>{const r=this.Fi(e,i);return this.$i(e,r,n,s)?this.Oi(t,e):(fi()<=N["in"].DEBUG&&gi("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vo(e)),this.Bi(t,r,e,Ki(s,-1)))}))}Fi(t,e){let n=new rr(Eo(t));return e.forEach(((e,s)=>{wo(t,s)&&(n=n.add(s))})),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(t,e){return fi()<=N["in"].DEBUG&&gi("QueryEngine","Using full collection scan to execute query:",vo(e)),this.Ni.getDocumentsMatchingQuery(t,e,Hi.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,e,n,s){this.persistence=t,this.Li=e,this.It=s,this.Ui=new nr(xi),this.qi=new oa((t=>Br(t)),Kr),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Iu(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function Pu(t,e,n,s){return new Fu(t,e,n,s)}async function Uu(t,e){const n=Ti(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=ya();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function qu(t,e){const n=Ti(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Yi.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);wi(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ya();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}function Bu(t){const e=Ti(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function ju(t,e){const n=Ti(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];e.targetChanges.forEach(((r,a)=>{const u=i.get(a);if(!u)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(ur.EMPTY_BYTE_STRING,Vi.min()).withLastLimboFreeSnapshotVersion(Vi.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,s)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,r)&&o.push(n.Cs.updateTargetData(t,c))}));let a=ua(),u=ya();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Ku(t,r,e.documentUpdates).next((t=>{a=t.Wi,u=t.zi}))),!s.isEqual(Vi.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Yi.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.Ui=i,t)))}function Ku(t,e,n){let s=ya(),i=ya();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=ua();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(Vi.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):gi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:s,zi:i}}))}function Gu(t,e){const n=Ti(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Hu(t,e){const n=Ti(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Cs.getTargetData(t,e).next((i=>i?(s=i,Yi.resolve(s)):n.Cs.allocateTargetId(t).next((i=>(s=new fu(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ui.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function $u(t,e,n){const s=Ti(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Xi(t))throw t;gi("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function zu(t,e,n){const s=Ti(t);let i=Vi.min(),r=ya();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Ti(t),i=s.qi.get(n);return void 0!==i?Yi.resolve(s.Ui.get(i)):s.Cs.getTargetData(e,n)}(s,t,go(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Li.getDocumentsMatchingQuery(t,e,n?i:Vi.min(),n?r:ya()))).next((t=>(Qu(s,To(e),t),{documents:t,Hi:r})))))}function Qu(t,e,n){let s=Vi.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ki.set(e,s)}class Wu{constructor(){this.activeTargetIds=wa()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yu{constructor(){this.Lr=new Wu,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Wu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){gi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){gi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,e,n,s,i){const r=this.ao(t,e);gi("RestConnection","Sending: ",r,n);const o={};return this.ho(o,s,i),this.lo(t,r,o,n).then((t=>(gi("RestConnection","Received: ",t),t)),(e=>{throw mi("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}fo(t,e,n,s,i,r){return this.co(t,e,n,s,i)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+li,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=Zu[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,s){return new Promise(((i,r)=>{const o=new ui;o.listenOnce(si.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ni.NO_ERROR:const e=o.getResponseJson();gi("Connection","XHR received:",JSON.stringify(e)),i(e);break;case ni.TIMEOUT:gi("Connection",'RPC "'+t+'" timed out'),r(new bi(Ei.DEADLINE_EXCEEDED,"Request time out"));break;case ni.HTTP_ERROR:const n=o.getStatus();if(gi("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ei).indexOf(e)>=0?e:Ei.UNKNOWN}(t.status);r(new bi(e,t.message))}else r(new bi(Ei.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new bi(Ei.UNAVAILABLE,"Connection failed."));break;default:vi()}}finally{gi("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}_o(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=ti(),r=ei(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new oi({})),this.ho(o.initMessageHeaders,e,n),(0,L.uI)()||(0,L.b$)()||(0,L.d)()||(0,L.w1)()||(0,L.Mn)()||(0,L.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");gi("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let c=!1,h=!1;const l=new tc({Hr:t=>{h?gi("Connection","Not sending because WebChannel is closed:",t):(c||(gi("Connection","Opening WebChannel transport."),u.open(),c=!0),gi("Connection","WebChannel sending:",t),u.send(t))},Jr:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(u,ai.EventType.OPEN,(()=>{h||gi("Connection","WebChannel transport opened.")})),d(u,ai.EventType.CLOSE,(()=>{h||(h=!0,gi("Connection","WebChannel transport closed"),l.io())})),d(u,ai.EventType.ERROR,(t=>{h||(h=!0,mi("Connection","WebChannel transport errored:",t),l.io(new bi(Ei.UNAVAILABLE,"The operation could not be completed")))})),d(u,ai.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];wi(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){gi("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=na[t];if(void 0!==e)return ra(e)}(t),n=i.message;void 0===e&&(e=Ei.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,l.io(new bi(e,n)),u.close()}else gi("Connection","WebChannel received:",n),l.ro(n)}})),d(r,ii.STAT_EVENT,(t=>{t.stat===ri.PROXY?gi("Connection","Detected buffering proxy"):t.stat===ri.NOPROXY&&gi("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.so()}),0),l}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t){return new La(t,!0)}class ic{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Hs=t,this.timerId=e,this.wo=n,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),s=Math.max(0,e-n);s>0&&gi("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,n,s,i,r,o,a){this.Hs=t,this.Po=n,this.vo=s,this.Vo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ic(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Ei.RESOURCE_EXHAUSTED?(pi(e.toString()),pi("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):e&&e.code===Ei.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new bi(Ei.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.xo.Ao((async()=>{this.state=0,this.start()}))}Qo(t){return gi("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(gi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class oc extends rc{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.It=i}jo(t,e){return this.Vo._o("Listen",t,e)}onMessage(t){this.xo.reset();const e=Ha(this.It,t),n=function(t){if(!("targetChange"in t))return Vi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Vi.min():e.readTime?Oa(e.readTime):Vi.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=ja(this.It),e.addTarget=function(t,e){let n;const s=e.target;return n=Gr(s)?{documents:Qa(t,s)}:{query:Wa(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=xa(t,e.resumeToken):e.snapshotVersion.compareTo(Vi.min())>0&&(n.readTime=Ra(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=Xa(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=ja(this.It),e.removeTarget=t,this.Bo(e)}}class ac extends rc{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,e){return this.Vo._o("Write",t,e)}onMessage(t){if(wi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=za(t.writeResults,t.commitTime),n=Oa(t.commitTime);return this.listener.Zo(n,e)}return wi(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=ja(this.It),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>$a(this.It,t)))};this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.Vo=n,this.It=s,this.nu=!1}su(){if(this.nu)throw new bi(Ei.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.Vo.co(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ei.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new bi(Ei.UNKNOWN,t.toString())}))}fo(t,e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.Vo.fo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ei.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new bi(Ei.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class cc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(pi(e),this.ou=!1):gi("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((t=>{n.enqueueAndForget((async()=>{wc(this)&&(gi("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ti(t);e._u.add(4),await dc(e),e.gu.set("Unknown"),e._u.delete(4),await lc(e)}(this))}))})),this.gu=new cc(n,s)}}async function lc(t){if(wc(t))for(const e of t.wu)await e(!0)}async function dc(t){for(const e of t.wu)await e(!1)}function fc(t,e){const n=Ti(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),vc(n)?yc(n):Fc(n).ko()&&pc(n,e))}function gc(t,e){const n=Ti(t),s=Fc(n);n.du.delete(e),s.ko()&&mc(n,e),0===n.du.size&&(s.ko()?s.Fo():wc(n)&&n.gu.set("Unknown"))}function pc(t,e){t.yu.Ot(e.targetId),Fc(t).zo(e)}function mc(t,e){t.yu.Ot(e),Fc(t).Ho(e)}function yc(t){t.yu=new Aa({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Fc(t).start(),t.gu.uu()}function vc(t){return wc(t)&&!Fc(t).No()&&t.du.size>0}function wc(t){return 0===Ti(t)._u.size}function Tc(t){t.yu=void 0}async function Ec(t){t.du.forEach(((e,n)=>{pc(t,e)}))}async function bc(t,e){Tc(t),vc(t)?(t.gu.hu(e),yc(t)):t.gu.set("Unknown")}async function Ic(t,e,n){if(t.gu.set("Online"),e instanceof Ca&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.du.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.du.delete(s),t.yu.removeTarget(s))}(t,e)}catch(n){gi("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Cc(t,n)}else if(e instanceof ba?t.yu.Gt(e):e instanceof Ia?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(Vi.min()))try{const e=await Bu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(s);i&&t.du.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(ur.EMPTY_BYTE_STRING,n.snapshotVersion)),mc(t,e);const s=new fu(n.target,e,1,n.sequenceNumber);pc(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){gi("RemoteStore","Failed to raise snapshot:",e),await Cc(t,e)}}async function Cc(t,e,n){if(!Xi(e))throw e;t._u.add(1),await dc(t),t.gu.set("Offline"),n||(n=()=>Bu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{gi("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await lc(t)}))}function Sc(t,e){return e().catch((n=>Cc(t,n,e)))}async function Ac(t){const e=Ti(t),n=Pc(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;_c(e);)try{const t=await Gu(e.localStore,s);if(null===t){0===e.fu.length&&n.Fo();break}s=t.batchId,Dc(e,t)}catch(t){await Cc(e,t)}kc(e)&&Nc(e)}function _c(t){return wc(t)&&t.fu.length<10}function Dc(t,e){t.fu.push(e);const n=Pc(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function kc(t){return wc(t)&&!Pc(t).No()&&t.fu.length>0}function Nc(t){Pc(t).start()}async function Lc(t){Pc(t).eu()}async function Rc(t){const e=Pc(t);for(const n of t.fu)e.Xo(n.mutations)}async function xc(t,e,n){const s=t.fu.shift(),i=lu.from(s,e,n);await Sc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Ac(t)}async function Mc(t,e){e&&Pc(t).Yo&&await async function(t,e){if(n=e.code,ia(n)&&n!==Ei.ABORTED){const n=t.fu.shift();Pc(t).Oo(),await Sc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ac(t)}var n}(t,e),kc(t)&&Nc(t)}async function Oc(t,e){const n=Ti(t);n.asyncQueue.verifyOperationInProgress(),gi("RemoteStore","RemoteStore received new credentials");const s=wc(n);n._u.add(3),await dc(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await lc(n)}async function Vc(t,e){const n=Ti(t);e?(n._u.delete(2),await lc(n)):e||(n._u.add(2),await dc(n),n.gu.set("Unknown"))}function Fc(t){return t.pu||(t.pu=function(t,e,n){const s=Ti(t);return s.su(),new oc(e,s.Vo,s.authCredentials,s.appCheckCredentials,s.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:Ec.bind(null,t),Zr:bc.bind(null,t),Wo:Ic.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),vc(t)?yc(t):t.gu.set("Unknown")):(await t.pu.stop(),Tc(t))}))),t.pu}function Pc(t){return t.Iu||(t.Iu=function(t,e,n){const s=Ti(t);return s.su(),new ac(e,s.Vo,s.authCredentials,s.appCheckCredentials,s.It,n)}(t.datastore,t.asyncQueue,{Yr:Lc.bind(null,t),Zr:Mc.bind(null,t),tu:Rc.bind(null,t),Zo:xc.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Oo(),await Ac(t)):(await t.Iu.stop(),t.fu.length>0&&(gi("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Uc{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Uc(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new bi(Ei.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qc(t,e){if(pi("AsyncQueue",`${e}: ${t}`),Xi(t))return new bi(Ei.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Bi.comparator(e.key,n.key):(t,e)=>Bi.comparator(t.key,e.key),this.keyedMap=ha(),this.sortedSet=new nr(this.comparator)}static emptySet(t){return new Bc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Bc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Bc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.Tu=new nr(Bi.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):vi():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Kc{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Kc(t,e,Bc.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this.Au=void 0,this.listeners=[]}}class Hc{constructor(){this.queries=new oa((t=>yo(t)),mo),this.onlineState="Unknown",this.Ru=new Set}}async function $c(t,e){const n=Ti(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Gc),i)try{r.Au=await n.onListen(s)}catch(t){const n=qc(t,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Yc(n)}async function zc(t,e){const n=Ti(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Qc(t,e){const n=Ti(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(i)&&(s=!0);e.Au=i}}s&&Yc(n)}function Wc(t,e,n){const s=Ti(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Yc(t){t.Ru.forEach((t=>{t.next()}))}class Xc{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Kc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Kc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jc{constructor(t){this.key=t}}class Zc{constructor(t){this.key=t}}class th{constructor(t,e){this.query=t,this.Lu=e,this.Uu=null,this.current=!1,this.qu=ya(),this.mutatedKeys=ya(),this.Ku=Eo(t),this.Gu=new Bc(this.Ku)}get Qu(){return this.Lu}ju(t,e){const n=e?e.Wu:new jc,s=e?e.Gu:this.Gu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,u="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const c=s.get(t),h=wo(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;c&&h?c.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.zu(c,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Ku(h,a)>0||u&&this.Ku(h,u)<0)&&(o=!0)):!c&&h?(n.track({type:0,doc:h}),f=!0):c&&!h&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Gu:r,Wu:n,$i:o,mutatedKeys:i}}zu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.Wu.Eu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return vi()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const r=e?this.Ju():[],o=0===this.qu.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new Kc(this.query,t.Gu,s,i,t.mutatedKeys,0===o,a,!1),Yu:r}:{Yu:r}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new jc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=ya(),this.Gu.forEach((t=>{this.Xu(t.key)&&(this.qu=this.qu.add(t.key))}));const e=[];return t.forEach((t=>{this.qu.has(t)||e.push(new Zc(t))})),this.qu.forEach((n=>{t.has(n)||e.push(new Jc(n))})),e}Zu(t){this.Lu=t.Hi,this.qu=ya();const e=this.ju(t.documents);return this.applyChanges(e,!0)}tc(){return Kc.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class eh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class nh{constructor(t){this.key=t,this.ec=!1}}class sh{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.nc={},this.sc=new oa((t=>yo(t)),mo),this.ic=new Map,this.rc=new Set,this.oc=new nr(Bi.comparator),this.uc=new Map,this.cc=new Au,this.ac={},this.hc=new Map,this.lc=Tu.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function ih(t,e){const n=Ih(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const t=await Hu(n.localStore,go(e));n.isPrimaryClient&&fc(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await rh(n,e,s,"current"===r)}return i}async function rh(t,e,n,s){t.dc=(e,n,s)=>async function(t,e,n,s){let i=e.view.ju(n);i.$i&&(i=await zu(t.localStore,e.query,!1).then((({documents:t})=>e.view.ju(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return yh(t,e.targetId,o.Yu),o.snapshot}(t,e,n,s);const i=await zu(t.localStore,e,!0),r=new th(e,i.Hi),o=r.ju(i.documents),a=Ea.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),u=r.applyChanges(o,t.isPrimaryClient,a);yh(t,n,u.Yu);const c=new eh(e,n,r);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function oh(t,e){const n=Ti(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter((t=>!mo(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await $u(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),gc(n.remoteStore,s.targetId),ph(n,s.targetId)})).catch(Wi)):(ph(n,s.targetId),await $u(n.localStore,s.targetId,!0))}async function ah(t,e,n){const s=Ch(t);try{const t=await function(t,e){const n=Ti(t),s=Oi.now(),i=e.reduce(((t,e)=>t.add(e.key)),ya());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ua(),u=ya();return n.Gi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=$o(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Wo(t.key,e,Fr(e.value.mapValue),qo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:la(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ac[t.currentUser.toKey()];s||(s=new nr(xi)),s=s.insert(e,n),t.ac[t.currentUser.toKey()]=s}(s,t.batchId,n),await Th(s,t.changes),await Ac(s.remoteStore)}catch(t){const e=qc(t,"Failed to persist write");n.reject(e)}}async function uh(t,e){const n=Ti(t);try{const t=await ju(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.uc.get(e);s&&(wi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ec=!0:t.modifiedDocuments.size>0?wi(s.ec):t.removedDocuments.size>0&&(wi(s.ec),s.ec=!1))})),await Th(n,t,e)}catch(t){await Wi(t)}}function ch(t,e,n){const s=Ti(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.sc.forEach(((n,s)=>{const i=s.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ti(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.bu(e)&&(s=!0)})),s&&Yc(n)}(s.eventManager,e),t.length&&s.nc.Wo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hh(t,e,n){const s=Ti(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let t=new nr(Bi.comparator);t=t.insert(r,Pr.newNoDocument(r,Vi.min()));const n=ya().add(r),i=new Ta(Vi.min(),new Map,new rr(xi),t,n);await uh(s,i),s.oc=s.oc.remove(r),s.uc.delete(e),wh(s)}else await $u(s.localStore,e,!1).then((()=>ph(s,e,n))).catch(Wi)}async function lh(t,e){const n=Ti(t),s=e.batch.batchId;try{const t=await qu(n.localStore,e);gh(n,s,null),fh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Th(n,t)}catch(t){await Wi(t)}}async function dh(t,e,n){const s=Ti(t);try{const t=await function(t,e){const n=Ti(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(wi(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);gh(s,e,n),fh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Th(s,t)}catch(n){await Wi(n)}}function fh(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function gh(t,e,n){const s=Ti(t);let i=s.ac[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function ph(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach((e=>{t.cc.containsKey(e)||mh(t,e)}))}function mh(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(gc(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),wh(t))}function yh(t,e,n){for(const s of n)s instanceof Jc?(t.cc.addReference(s.key,e),vh(t,s)):s instanceof Zc?(gi("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||mh(t,s.key)):vi()}function vh(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(gi("SyncEngine","New document in limbo: "+n),t.rc.add(s),wh(t))}function wh(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new Bi(Pi.fromString(e)),s=t.lc.next();t.uc.set(s,new nh(n)),t.oc=t.oc.insert(n,s),fc(t.remoteStore,new fu(go(ao(n.path)),s,2,Ji.at))}}async function Th(t,e,n){const s=Ti(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach(((t,a)=>{o.push(s.dc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ou.Ci(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.nc.Wo(i),await async function(t,e){const n=Ti(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Yi.forEach(e,(e=>Yi.forEach(e.Si,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Yi.forEach(e.Di,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Xi(t))throw t;gi("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Ui.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.Ui=n.Ui.insert(t,i)}}}(s.localStore,r))}async function Eh(t,e){const n=Ti(t);if(!n.currentUser.isEqual(e)){gi("SyncEngine","User change. New user:",e.toKey());const t=await Uu(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new bi(Ei.CANCELLED,e))}))})),t.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Th(n,t.ji)}}function bh(t,e){const n=Ti(t),s=n.uc.get(e);if(s&&s.ec)return ya().add(s.key);{let t=ya();const s=n.ic.get(e);if(!s)return t;for(const e of s){const s=n.sc.get(e);t=t.unionWith(s.view.Qu)}return t}}function Ih(t){const e=Ti(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hh.bind(null,e),e.nc.Wo=Qc.bind(null,e.eventManager),e.nc._c=Wc.bind(null,e.eventManager),e}function Ch(t){const e=Ti(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dh.bind(null,e),e}class Sh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=sc(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,e){return null}Tc(t,e){return null}yc(t){return Pu(this.persistence,new Vu,t.initialUser,this.It)}gc(t){return new Ru(Mu.Bs,this.It)}mc(t){return new Yu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ah{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ch(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Eh.bind(null,this.syncEngine),await Vc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Hc}createDatastore(t){const e=sc(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new ec(s));var s;return function(t,e,n,s){return new uc(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>ch(this.syncEngine,t,0),r=Ju.C()?new Ju:new Xu,new hc(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new sh(t,e,n,s,i,r);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ti(t);gi("RemoteStore","RemoteStore shutting down."),e._u.add(5),await dc(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _h{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):pi("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dh{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=hi.UNAUTHENTICATED,this.clientId=Ri.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{gi("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(gi("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new bi(Ei.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=qc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function kh(t,e){t.asyncQueue.verifyOperationInProgress(),gi("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Uu(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Nh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Lh(t);gi("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Oc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Oc(e.remoteStore,n))),t.onlineComponents=e}async function Lh(t){return t.offlineComponents||(gi("FirestoreClient","Using default OfflineComponentProvider"),await kh(t,new Sh)),t.offlineComponents}async function Rh(t){return t.onlineComponents||(gi("FirestoreClient","Using default OnlineComponentProvider"),await Nh(t,new Ah)),t.onlineComponents}function xh(t){return Rh(t).then((t=>t.syncEngine))}async function Mh(t){const e=await Rh(t),n=e.eventManager;return n.onListen=ih.bind(null,e.syncEngine),n.onUnlisten=oh.bind(null,e.syncEngine),n}function Oh(t,e,n={}){const s=new Ii;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new _h({next:n=>{e.enqueueAndForget((()=>zc(t,o))),n.fromCache&&"server"===s.source?i.reject(new bi(Ei.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Xc(n,r,{includeMetadataChanges:!0,Nu:!0});return $c(t,o)}(await Mh(t),t.asyncQueue,e,n,s))),s.promise}const Vh=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e,n){if(!n)throw new bi(Ei.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ph(t,e,n,s){if(!0===e&&!0===s)throw new bi(Ei.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uh(t){if(!Bi.isDocumentKey(t))throw new bi(Ei.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qh(t){if(Bi.isDocumentKey(t))throw new bi(Ei.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bh(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":vi()}function jh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new bi(Ei.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bh(t);throw new bi(Ei.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new bi(Ei.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new bi(Ei.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ph("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new bi(Ei.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new bi(Ei.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Si;switch(t.type){case"gapi":const e=t.client;return new Di(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new bi(Ei.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Vh.get(t);e&&(gi("ComponentProvider","Removing Datastore"),Vh.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Hh(this.firestore,t,this._key)}}class $h{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new $h(this.firestore,t,this._query)}}class zh extends $h{constructor(t,e,n){super(t,e,ao(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Hh(this.firestore,null,new Bi(t))}withConverter(t){return new zh(this.firestore,t,this._path)}}function Qh(t,e,...n){if(t=(0,L.m9)(t),Fh("collection","path",e),t instanceof Gh){const s=Pi.fromString(e,...n);return qh(s),new zh(t,null,s)}{if(!(t instanceof Hh||t instanceof zh))throw new bi(Ei.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pi.fromString(e,...n));return qh(s),new zh(t.firestore,null,s)}}function Wh(t,e,...n){if(t=(0,L.m9)(t),1===arguments.length&&(e=Ri.R()),Fh("doc","path",e),t instanceof Gh){const s=Pi.fromString(e,...n);return Uh(s),new Hh(t,null,new Bi(s))}{if(!(t instanceof Hh||t instanceof zh))throw new bi(Ei.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pi.fromString(e,...n));return Uh(s),new Hh(t.firestore,t instanceof zh?t.converter:null,new Bi(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yh{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new ic(this,"async_queue_retry"),this.jc=()=>{const t=nc();t&&gi("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.bo()};const t=nc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const e=nc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise((()=>{}));const e=new Ii;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Bc.push(t),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch($){if(!Xi($))throw $;gi("AsyncQueue","Operation failed with retryable error: "+$)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(t){const e=this.$c.then((()=>(this.Kc=!0,t().catch((t=>{this.qc=t,this.Kc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw pi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Kc=!1,t))))));return this.$c=e,e}enqueueAfterDelay(t,e,n){this.Wc(),this.Qc.indexOf(t)>-1&&(e=0);const s=Uc.createAndSchedule(this,t,e,n,(t=>this.Jc(t)));return this.Uc.push(s),s}Wc(){this.qc&&vi()}verifyOperationInProgress(){}async Yc(){let t;do{t=this.$c,await t}while(t!==this.$c)}Xc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}Zc(t){return this.Yc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Yc()}))}ta(t){this.Qc.push(t)}Jc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}class Xh extends Gh{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Yh,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||tl(this),this._firestoreClient.terminate()}}function Jh(t,e){const n="object"==typeof t?t:(0,D.Mq)(),s="string"==typeof t?t:e||"(default)";return(0,D.qX)(n,"firestore").getImmediate({identifier:s})}function Zh(t){return t._firestoreClient||tl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function tl(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new mr(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Dh(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class el{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new bi(Ei.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new nl(ur.fromBase64String(t))}catch(t){throw new bi(Ei.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new nl(ur.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new bi(Ei.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new bi(Ei.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return xi(this._lat,t._lat)||xi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=/^__.*__$/;class ol{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Wo(t,this.data,this.fieldMask,e,this.fieldTransforms):new Qo(t,this.data,e,this.fieldTransforms)}}class al{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Wo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ul(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw vi()}}class cl{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=s,void 0===i&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(t){return new cl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.sa({path:n,ra:!1});return s.oa(t),s}ua(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.sa({path:n,ra:!1});return s.ea(),s}ca(t){return this.sa({path:void 0,ra:!0})}aa(t){return Il(t,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ea(){if(this.path)for(let t=0;t<this.path.length;t++)this.oa(this.path.get(t))}oa(t){if(0===t.length)throw this.aa("Document fields must not be empty");if(ul(this.na)&&rl.test(t))throw this.aa('Document fields cannot begin and end with "__"')}}class hl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||sc(t)}fa(t,e,n,s=!1){return new cl({na:t,methodName:e,la:n,path:qi.emptyPath(),ra:!1,ha:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ll(t){const e=t._freezeSettings(),n=sc(t._databaseId);return new hl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dl(t,e,n,s,i,r={}){const o=t.fa(r.merge||r.mergeFields?2:0,e,n,i);wl("Data must be an object, but it was:",o,s);const a=yl(s,o);let u,c;if(r.merge)u=new ar(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Tl(e,s,n);if(!o.contains(i))throw new bi(Ei.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Cl(t,i)||t.push(i)}u=new ar(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new ol(new Vr(a),u,c)}class fl extends sl{_toFieldTransform(t){if(2!==t.na)throw 1===t.na?t.aa(`${this._methodName}() can only appear at the top level of your update data`):t.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof fl}}function gl(t,e,n,s){const i=t.fa(1,e,n);wl("Data must be an object, but it was:",i,s);const r=[],o=Vr.empty();tr(s,((t,s)=>{const a=bl(e,t,n);s=(0,L.m9)(s);const u=i.ua(a);if(s instanceof fl)r.push(a);else{const t=ml(s,u);null!=t&&(r.push(a),o.set(a,t))}}));const a=new ar(r);return new al(o,a,i.fieldTransforms)}function pl(t,e,n,s,i,r){const o=t.fa(1,e,n),a=[Tl(e,s,n)],u=[i];if(r.length%2!=0)throw new bi(Ei.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Tl(e,r[d])),u.push(r[d+1]);const c=[],h=Vr.empty();for(let d=a.length-1;d>=0;--d)if(!Cl(c,a[d])){const t=a[d];let e=u[d];e=(0,L.m9)(e);const n=o.ua(t);if(e instanceof fl)c.push(t);else{const s=ml(e,n);null!=s&&(c.push(t),h.set(t,s))}}const l=new ar(c);return new al(h,l,o.fieldTransforms)}function ml(t,e){if(vl(t=(0,L.m9)(t)))return wl("Unsupported field value:",e,t),yl(t,e);if(t instanceof sl)return function(t,e){if(!ul(e.na))throw e.aa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.aa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&4!==e.na)throw e.aa("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=ml(i,e.ca(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,L.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return So(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Oi.fromDate(t);return{timestampValue:Ra(e.It,n)}}if(t instanceof Oi){const n=new Oi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ra(e.It,n)}}if(t instanceof il)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof nl)return{bytesValue:xa(e.It,t._byteString)};if(t instanceof Hh){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Va(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.aa(`Unsupported field value: ${Bh(t)}`)}(t,e)}function yl(t,e){const n={};return er(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tr(t,((t,s)=>{const i=ml(s,e.ia(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function vl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Oi||t instanceof il||t instanceof nl||t instanceof Hh||t instanceof sl)}function wl(t,e,n){if(!vl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Bh(n);throw"an object"===s?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function Tl(t,e,n){if((e=(0,L.m9)(e))instanceof el)return e._internalPath;if("string"==typeof e)return bl(t,e);throw Il("Field path arguments must be of type string or ",t,!1,void 0,n)}const El=new RegExp("[~\\*/\\[\\]]");function bl(t,e,n){if(e.search(El)>=0)throw Il(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new el(...e.split("."))._internalPath}catch(s){throw Il(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Il(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new bi(Ei.INVALID_ARGUMENT,a+t+u)}function Cl(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Hh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Al(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(_l("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Al extends Sl{data(){return super.data()}}function _l(t,e){return"string"==typeof e?bl(t,e):e instanceof el?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class kl extends Sl{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Nl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(_l("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Nl extends kl{data(t={}){return super.data(t)}}class Ll{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Dl(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Nl(this._firestore,this._userDataWriter,n.key,n,new Dl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new bi(Ei.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Nl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Dl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Nl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Dl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Rl(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Rl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return vi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xl(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new bi(Ei.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml{convertValue(t,e="none"){switch(br(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(dr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw vi()}}convertObject(t,e){const n={};return tr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new il(lr(t.latitude),lr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(pr(t));default:return null}}convertTimestamp(t){const e=hr(t);return new Oi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Pi.fromString(t);wi(ou(n));const s=new yr(n.get(1),n.get(3)),i=new Bi(n.popFirst(5));return s.isEqual(e)||pi(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Vl extends Ml{constructor(t){super(),this.firestore=t}convertBytes(t){return new nl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Hh(this.firestore,null,e)}}function Fl(t){t=jh(t,$h);const e=jh(t.firestore,Xh),n=Zh(e),s=new Vl(e);return xl(t._query),Oh(n,t._query).then((n=>new Ll(e,s,t,n)))}function Pl(t,e,n,...s){t=jh(t,Hh);const i=jh(t.firestore,Xh),r=ll(i);let o;return o="string"==typeof(e=(0,L.m9)(e))||e instanceof el?pl(r,"updateDoc",t._key,e,n,s):gl(r,"updateDoc",t._key,e),Bl(i,[o.toMutation(t._key,qo.exists(!0))])}function Ul(t){return Bl(jh(t.firestore,Xh),[new Zo(t._key,qo.none())])}function ql(t,e){const n=jh(t.firestore,Xh),s=Wh(t),i=Ol(t.converter,e);return Bl(n,[dl(ll(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,qo.exists(!1))]).then((()=>s))}function Bl(t,e){return function(t,e){const n=new Ii;return t.asyncQueue.enqueueAndForget((async()=>ah(await xh(t),e,n))),n.promise}(Zh(t),e)}!function(t,e=!0){!function(t){li=t}(D.Jn),(0,D.Xd)(new k.wA("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new Xh(new Ai(t.getProvider("auth-internal")),new Ni(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new bi(Ei.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),(0,D.KN)(ci,"3.4.15",t),(0,D.KN)(ci,"3.4.15","esm2017")}();var jl={setup(t,e){const n=(0,g.v0)(f.Z),i=Jh(f.Z),r=(0,m.iH)(""),o=(0,m.iH)(""),a=(0,m.iH)(!1),u=(0,m.iH)(""),c=(0,g.Aj)(n,(t=>{u.value=t.uid}));(0,s.wF)(c);const h=async()=>{try{a.value=!0,e.emit("afterSubmit",!0),await ql(Qh(i,`${u.value}`),{title:r.value,date:o.value,isFinished:!1,createdAt:Oi.now()}),r.value="",o.value="",a.value=!1}catch(t){console.error("Error adding document: ",t),a.value=!1}};return{thing:r,date:o,isLoading:a,addTodo:h}}};const Kl=(0,v.Z)(jl,[["render",A],["__scopeId","data-v-59262785"]]);var Gl=Kl;const Hl={class:"todolist"},$l={class:"filter-bar"},zl={class:"list scrollbar"},Ql={key:0},Wl={key:1},Yl={class:"list__text"},Xl=["onClick","disabled"],Jl={class:"btn-section"},Zl={key:0,class:"btn"},td=["onClick"],ed={class:"btn"},nd=["onClick"];function sd(t,e,n,i,r,a){return(0,s.wg)(),(0,s.iD)("section",Hl,[(0,s._)("div",$l,[(0,s._)("div",null,[(0,s._)("span",{class:(0,o.C_)(["tab",{active:!1===i.isActive}]),onClick:e[0]||(e[0]=(...t)=>i.filterUnfinished&&i.filterUnfinished(...t))},"未完成",2),(0,s._)("span",{class:(0,o.C_)(["tab",{active:!0===i.isActive}]),onClick:e[1]||(e[1]=(...t)=>i.filterFinished&&i.filterFinished(...t))},"已完成",2)]),(0,s._)("span",{class:"tab",onClick:e[2]||(e[2]=(...t)=>i.deleteAllTodo&&i.deleteAllTodo(...t))},"全部刪除")]),(0,s._)("div",zl,[i.isLoading?((0,s.wg)(),(0,s.iD)("div",Ql,"...Loading")):((0,s.wg)(),(0,s.iD)("ul",Wl,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.list,(t=>((0,s.wg)(),(0,s.iD)("li",{class:"list__item",key:t.id},[(0,s._)("div",Yl,[(0,s._)("div",null,[(0,s._)("i",null,(0,o.zw)(t.date),1)]),(0,s._)("button",{onClick:e=>i.openCounter({title:t.title,id:t.id}),disabled:i.isActive},(0,o.zw)(t.title),9,Xl)]),(0,s._)("div",Jl,[i.isActive?((0,s.wg)(),(0,s.iD)("button",Zl,[(0,s._)("i",{class:"icon restore fa-solid fa-rotate-left",onClick:e=>i.restoreTodo(t.id)},null,8,td)])):(0,s.kq)("",!0),(0,s._)("button",ed,[(0,s._)("i",{class:"icon trash fa-solid fa-trash",onClick:e=>i.deleteTodo(t.id)},null,8,nd)])])])))),128))]))])])}var id=n(907),rd={props:{initial_list:Array},setup(t,{emit:e}){const n=(0,m.iH)(!1),i=(0,m.iH)([]),r=(0,m.iH)([]),o=(0,m.Fl)((()=>n.value?r.value:i.value)),a=(0,m.iH)(!1),u=(0,id.oR)(),c=()=>{a.value=!0,r.value=t.initial_list.filter((t=>!0===t.isFinished)),i.value=t.initial_list.filter((t=>!1===t.isFinished)),a.value=!1};(0,s.wF)(c);const h=()=>{n.value=!1},l=()=>{n.value=!0},d=async t=>{confirm("確定刪除此清單?")&&e("deleteTodo",t)},f=()=>{confirm("確定刪除所有清單?")&&(n.value?(r.value.forEach((t=>{e("deleteTodo",t.id)})),r.value=r.value.splice(0,r.value)):(i.value.forEach((t=>{e("deleteTodo",t.id)})),i.value=i.value.splice(0,i.value)))},g=async t=>{confirm("確定復原此清單?")&&(e("restoreTodo",t),r.value=r.value.filter((e=>e.id!==t)))},p=({title:t,id:e})=>{u.commit("changeTitle",{title:t,id:e,isClicked:!0})};return(0,s.YP)(t.initial_list,(()=>{c()})),{props:t,list:o,isLoading:a,isActive:n,filterUnfinished:h,filterFinished:l,deleteTodo:d,deleteAllTodo:f,restoreTodo:g,openCounter:p}}};const od=(0,v.Z)(rd,[["render",sd],["__scopeId","data-v-071262f8"]]);var ad=od;const ud={class:"todo-counter"},cd={key:0,class:"ban-section"},hd={class:"title"},ld={class:"counter"},dd={class:"tomato"},fd={class:"btn-section"},gd=["disabled"],pd={key:1,class:"white-btn"};function md(t,e,n,i,r,a){return(0,s.wg)(),(0,s.iD)("section",ud,[i.list.isClicked?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",cd)),(0,s._)("h1",hd,(0,o.zw)(i.isLoading?"":i.list.title),1),(0,s._)("div",ld,[(0,s._)("div",dd,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.hour=t),type:"number",min:"0",max:"23",onBlur:e[1]||(e[1]=t=>i.hour?i.hour=i.hour:i.hour=0)},null,544),[[E.nr,i.hour]]),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>i.minute=t),type:"number",min:"0",max:"59",onBlur:e[3]||(e[3]=t=>i.minute?i.minute=i.minute:i.minute=0)},null,544),[[E.nr,i.minute]]),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>i.second=t),type:"number",min:"0",max:"59",onBlur:e[5]||(e[5]=t=>i.second?i.second=i.second:i.second=0)},null,544),[[E.nr,i.second]])])]),(0,s._)("div",fd,[(0,s._)("button",{onClick:e[6]||(e[6]=(0,E.iM)(((...t)=>i.resetCount&&i.resetCount(...t)),["stop"]))},"reset"),i.isStop?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:e[7]||(e[7]=(0,E.iM)(((...t)=>i.stopCount&&i.stopCount(...t)),["stop"]))},"stop")):((0,s.wg)(),(0,s.iD)("button",{key:1,onClick:e[8]||(e[8]=(0,E.iM)(((...t)=>i.startCount&&i.startCount(...t)),["stop"])),disabled:i.isStart,class:(0,o.C_)({disabled:i.isStart})}," start ",10,gd)),(0,s._)("div",null,[i.isEnd?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:e[9]||(e[9]=(0,E.iM)(((...t)=>i.endCount&&i.endCount(...t)),["stop"]))},"finished")):((0,s.wg)(),(0,s.iD)("button",pd))])])])}var yd={setup(t,{emit:e}){const n=(0,m.iH)(0),i=(0,m.iH)(0),r=(0,m.iH)(0),o=(0,m.iH)(0),a=(0,m.iH)(null),u=(0,s.Fl)((()=>0===n.value&&0===i.value&&0===r.value)),c=(0,m.iH)(!1),h=(0,m.iH)(!1),l=new Audio("http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3"),d=(0,id.oR)(),f=(0,m.iH)(d.state.list),g=(0,m.iH)(!1),p=()=>{c.value=!c.value,o.value=Number.parseInt(60*n.value*60)+Number.parseInt(60*i.value)+Number.parseInt(r.value),window.clearInterval(a.value),a.value=setInterval((()=>{0!==o.value?(o.value-=1,n.value=Math.floor(o.value/60/60),i.value=Math.floor(o.value/60),r.value=o.value%60):(l.play(),l.loop=!0,c.value=!1,h.value=!0)}),1e3)},y=()=>{window.clearInterval(a.value),c.value=!c.value},v=async()=>{l.pause(),window.clearInterval(a.value),e("finishedTodo",d.state.list.id),d.commit("changeTitle",{id:"",title:"請選擇清單項目",isClicked:!1}),h.value=!1},w=()=>{window.clearInterval(a.value),n.value=0,i.value=0,r.value=0};return(0,s.YP)(d.state,(t=>{f.value=t.list})),{hour:n,minute:i,second:r,isStart:u,isStop:c,isEnd:h,list:f,isLoading:g,startCount:p,stopCount:y,endCount:v,resetCount:w}}};const vd=(0,v.Z)(yd,[["render",md],["__scopeId","data-v-0207c4c7"]]);var wd=vd,Td={components:{Header:T,TodoSet:Gl,TodoList:ad,TodoCounter:wd},setup(){const t=(0,g.v0)(f.Z),e=Jh(f.Z),n=(0,m.iH)([]),i=(0,m.iH)(!1),r=(0,m.iH)(""),o=(0,g.Aj)(t,(t=>{r.value=t.uid})),a=()=>{n.value.splice(0,n.value.length),(0,g.Aj)(t,(async t=>{const s=await Fl(Qh(e,`${t.uid}`));s.forEach((t=>{n.value.push({id:t.id,title:t.data().title,date:t.data().date,createdAt:t.data().createdAt,isFinished:t.data().isFinished})}))}))},u=t=>{i.value=t,a(),i.value=!1},c=async t=>{await Ul(Wh(e,`${r.value}`,t)),a()},h=async t=>{await Pl(Wh(e,`${r.value}`,t),{isFinished:!1}),a()},l=async t=>{await Pl(Wh(e,`${r.value}`,t),{isFinished:!0}),a()};return(0,s.wF)(o),(0,s.wF)(a),{handleSubmit:u,handleDelete:c,handleRestore:h,handleFinishedTodo:l,list:n}}};const Ed=(0,v.Z)(Td,[["render",r],["__scopeId","data-v-9d7f3046"]]);var bd=Ed}}]);
//# sourceMappingURL=875.f88f38ed.js.map