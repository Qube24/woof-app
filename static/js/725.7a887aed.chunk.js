"use strict";(self.webpackChunkwoof_app=self.webpackChunkwoof_app||[]).push([[725],{535:function(e,r,n){n.d(r,{h:function(){return s}});var t=n(87),a=n(184),s=function(e){var r=e.to,n=e.children;return(0,a.jsx)(t.rU,{to:r,children:n})}},458:function(e,r,n){n.d(r,{M5:function(){return o},p3:function(){return i},qW:function(){return c}});var t=n(861),a=n(757),s=n.n(a),c=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breeds/list/all");case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breed/".concat(r,"/images/random"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r,n){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breed/".concat(r,"/").concat(n,"/images/random"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()},725:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),o=n(458),u=n(87),l=n(689),p=(n(674),n(535)),d={form:"SearchDogsStyle_form__oIxpy",searchBar:"SearchDogsStyle_searchBar__P85v9",searchBtn:"SearchDogsStyle_searchBtn__ZHDRw",listSearch:"SearchDogsStyle_listSearch__x+Him",linkSearch:"SearchDogsStyle_linkSearch__jHAzI",backBtn:"SearchDogsStyle_backBtn__iQCWY"},h=n(184);var f=function(){var e,r,n,s=(0,i.useState)(!0),f=(0,a.Z)(s,2),m=(f[0],f[1],(0,u.lr)()),x=(0,a.Z)(m,2),v=x[0],w=x[1],y=(0,i.useState)({}),j=(0,a.Z)(y,2),k=j[0],b=j[1],g=(0,l.TH)(),z=(null!==(e=v.get("value"))&&void 0!==e?e:"").trim().toLowerCase();(0,i.useEffect)((function(){S(z)}),[z]);var S=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,s,i,u,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.includes(" ")){e.next=9;break}return n=r.split(" "),t=(0,a.Z)(n,2),s=t[0],i=t[1],e.next=5,(0,o.M5)(s,i);case 5:u=e.sent,b(u),e.next=13;break;case 9:return e.next=11,(0,o.p3)(z);case 11:l=e.sent,b(l);case 13:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();if(!k)return"Loading";var _=null!==(r=null===(n=g.state)||void 0===n?void 0:n.from)&&void 0!==r?r:"/searchDogs";return"error"===k.status?(0,h.jsx)("div",{children:(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=e.currentTarget;w({value:r.elements.searchInput.value}),r.reset()},className:d.form,children:[(0,h.jsx)("input",{type:"text",name:"searchInput",className:d.searchBar,placeholder:"example: bulldog"}),(0,h.jsx)("button",{type:"submit",className:d.searchBtn,children:"Search"})]})}):"success"===k.status?(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:d.container,children:[(0,h.jsx)(p.h,{to:_,children:(0,h.jsx)("button",{type:"button",className:d.backBtn,children:"Go Back"})}),(0,h.jsx)("h1",{children:z}),(0,h.jsx)("img",{src:k.message,alt:z,className:d.poster}),(0,h.jsx)("p",{className:d.infoText,children:"Ten pies to wierny i przyjacielski czworon\xf3g, kt\xf3ry \u015bwietnie czuje si\u0119 w roli rodzinnego towarzysza. Dobrze dogaduje si\u0119 z dzie\u0107mi, uwielbia pieszczoty i wsp\xf3lne zabawy. Jest \u0142atwy w prowadzeniu, cho\u0107 bywa uparty. Sprawdzi si\u0119 zar\xf3wno w ma\u0142ym mieszkaniu jak i w domu z ogrodem."}),(0,h.jsx)("p",{className:d.infoText,children:"Wysoko\u015b\u0107 w k\u0142\u0119bie 30-35 cm, masa cia\u0142a 22-25 kg. Sier\u015b\u0107 kr\xf3tka, delikatna, l\u015bni\u0105ca, umaszczenie p\u0142owe, pr\u0119gowane lub \u0142aciate. Charakter czujny, \u015bmia\u0142y, oddany, odwa\u017cny, \u0142agodny, czasem uparty. W zale\u017cno\u015bci od dnia pokazuje r\xf3\u017cne oblicza swojej natury."})]}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(l.j3,{})}),(0,h.jsx)(l.j3,{})]}):void 0}}}]);
//# sourceMappingURL=725.7a887aed.chunk.js.map