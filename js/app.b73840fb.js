(function(e){function t(t){for(var r,a,i=t[0],u=t[1],f=t[2],d=0,l=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(l.length)l.shift()();return o.push.apply(o,f||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/advice-generator-app-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"260f":function(e,t,n){"use strict";n("d336")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t){var n=Object(r["w"])("router-view");return Object(r["q"])(),Object(r["d"])(n)}n("e76e");var o=n("6b0d"),a=n.n(o);const i={},u=a()(i,[["render",c]]);var f=u,s=n("6c02");function d(e,t,n,c,o,a){var i=Object(r["w"])("Advice"),u=Object(r["w"])("Footer");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(i),Object(r["f"])("footer",null,[Object(r["h"])(u)])],64)}var l=n("6830"),p=n.n(l),b=n("c6a5"),v=n.n(b),O=function(e){return Object(r["t"])("data-v-569efcb4"),e=e(),Object(r["r"])(),e},j={class:"advice-container"},h={class:"info"},g={class:"title"},y={class:"content"},m={key:0},w={key:1},x=O((function(){return Object(r["f"])("div",{class:"divider"},[Object(r["f"])("img",{src:p.a,alt:""})],-1)})),_=O((function(){return Object(r["f"])("img",{src:v.a,alt:""},null,-1)})),k=O((function(){return Object(r["f"])("radialGradient",{id:"Gradient1"},[Object(r["f"])("stop",{offset:"0%","stop-color":"red"}),Object(r["f"])("stop",{offset:"100%","stop-color":"blue"})],-1)})),P=[_,k];function C(e,t,n,c,o,a){return Object(r["q"])(),Object(r["e"])("div",j,[Object(r["f"])("div",h,[Object(r["f"])("div",g,[Object(r["f"])("p",null,"ADVICE # "+Object(r["y"])(c.adviceslip.id),1)]),Object(r["f"])("div",y,[c.adviceslip.advice?(Object(r["q"])(),Object(r["e"])("p",w,"“"+Object(r["y"])(c.adviceslip.advice)+"”",1)):(Object(r["q"])(),Object(r["e"])("p",m,"Loading..."))]),x,Object(r["f"])("div",{class:"btn",onClick:t[0]||(t[0]=function(){return c.handleChange&&c.handleChange.apply(c,arguments)})},P)])])}var q=n("1da1"),M=(n("96cf"),n("d3b7"),function(){var e=Object(r["v"])([]),t=function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.adviceslip.com/advice");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.value=r.slip,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return{loadAdvice:t,adviceslip:e}}),A=M,S={setup:function(){var e=A(),t=e.loadAdvice,n=e.adviceslip;t();var r=function(){t()};return{adviceslip:n,handleChange:r}}};n("260f");const F=a()(S,[["render",C],["__scopeId","data-v-569efcb4"]]);var I=F,G=function(e){return Object(r["t"])("data-v-1c73e160"),e=e(),Object(r["r"])(),e},H={class:"attribution"},J=Object(r["g"])(" Challenge by "),R=G((function(){return Object(r["f"])("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor",-1)})),T=Object(r["g"])(". Coded by "),D=G((function(){return Object(r["f"])("a",{href:"#"},"Pony Ma",-1)})),E=[J,R,T,D];function L(e,t,n,c,o,a){return Object(r["q"])(),Object(r["e"])("div",H,E)}var V={};n("5cc1");const z=a()(V,[["render",L],["__scopeId","data-v-1c73e160"]]);var B=z,K={name:"Home",components:{Advice:I,Footer:B}};const N=a()(K,[["render",d]]);var Q=N,U=[{path:"/",name:"Home",component:Q}],W=Object(s["a"])({history:Object(s["b"])("/advice-generator-app-vue/"),routes:U}),X=W;n("845f");Object(r["c"])(f).use(X).mount("#app")},"5cc1":function(e,t,n){"use strict";n("9988")},6830:function(e,t,n){e.exports=n.p+"img/pattern-divider-desktop.a03cc981.svg"},"845f":function(e,t,n){},9988:function(e,t,n){},baed:function(e,t,n){},c6a5:function(e,t,n){e.exports=n.p+"img/icon-dice.3c1696ee.svg"},d336:function(e,t,n){},e76e:function(e,t,n){"use strict";n("baed")}});
//# sourceMappingURL=app.b73840fb.js.map