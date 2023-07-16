"use strict";(self.webpackChunkwoof_app=self.webpackChunkwoof_app||[]).push([[258],{4535:function(e,r,t){t.d(r,{h:function(){return o}});var n=t(1087),a=t(184),o=function(e){var r=e.to,t=e.children;return(0,a.jsx)(n.rU,{to:r,children:t})}},1458:function(e,r,t){t.d(r,{M5:function(){return c},p3:function(){return s},qW:function(){return i}});var n=t(5861),a=t(4687),o=t.n(a),i=function(){var e=(0,n.Z)(o().mark((function e(){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breeds/list/all");case 2:return r=e.sent,e.next=5,r.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(o().mark((function e(r){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,fetch("https://dog.ceo/api/breed/".concat(r,"/images/random"));case 6:return t=e.sent,e.next=9,t.json();case 9:return n=e.sent,e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(o().mark((function e(r,t){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breed/".concat(r,"/").concat(t,"/images/random"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},9258:function(e,r,t){t.r(r);var n=t(5861),a=t(9439),o=t(4687),i=t.n(o),s=t(2791),c=t(1458),u=t(1087),d=t(7689),l=t(6674),p=t.n(l),f=t(4535),h=t(4554),x=t(3385),y=t(6151),g=t(890),b=t(184);r.default=function(){var e,r,t,o=(0,u.lr)(),l=(0,a.Z)(o,2),m=l[0],w=l[1],v=(0,s.useState)({}),j=(0,a.Z)(v,2),k=j[0],z=j[1],Z=(0,d.TH)(),C=(0,s.useRef)(!1),S=null!==(e=m.get("value"))&&void 0!==e?e:"",T=S.trim().toLowerCase();(0,s.useEffect)((function(){C.current?W(T):C.current=!0}),[T]);var W=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n,o,s,u,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.includes(" ")){e.next=10;break}return t=r.split(" "),n=(0,a.Z)(t,2),o=n[0],s=n[1],e.next=5,(0,c.M5)(o,s);case 5:"error"===(u=e.sent).status&&p().Notify.failure("There is no such breed of dog"),z(u),e.next=15;break;case 10:return e.next=12,(0,c.p3)(T);case 12:"error"===(d=e.sent).status&&p().Notify.failure("There is no such breed of dog"),z(d);case 15:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();if(!k)return"Loading";var D=null!==(r=null===(t=Z.state)||void 0===t?void 0:t.from)&&void 0!==r?r:"/searchDogs";return""===S||"error"===k.status?(0,b.jsx)(h.Z,{sx:{height:820},children:(0,b.jsxs)(h.Z,{component:"form",onSubmit:function(e){e.preventDefault();var r=e.currentTarget,t=e.target[0].value;if(w({value:t}),""===t)return p().Notify.warning("Please enter dog breed to continue");r.reset()},noValidate:!0,sx:{mt:1},children:[(0,b.jsx)(x.Z,{id:"outlined-textarea",label:"Enter breed of a dog",placeholder:"Example: bulldog french",sx:{width:300,height:"auto",borderColor:"white"}}),(0,b.jsx)(y.Z,{variant:"contained",type:"submit",sx:{bgcolor:"background.secondary",color:"text.secondary",fontWeight:600,my:1,mx:2,":hover":{bgcolor:"background.third",color:"text.primary"}},children:"Find"})]})}):"success"===k.status?(0,b.jsxs)(h.Z,{sx:{height:824},children:[(0,b.jsx)(h.Z,{sx:{display:"flex",justifyContent:"left"},children:(0,b.jsx)(f.h,{to:D,children:(0,b.jsx)(y.Z,{variant:"contained",type:"button",sx:{bgcolor:"background.secondary",color:"text.secondary",fontWeight:600,my:1,mx:2,":hover":{bgcolor:"background.third",color:"text.primary"}},children:"Go Back"})})}),(0,b.jsx)(g.Z,{variant:"h2",sx:{py:2,color:"text.primary"},children:T.toUpperCase()}),(0,b.jsx)(h.Z,{component:"img",sx:{height:350,width:350,borderRadius:"50%"},src:k.message,alt:T}),(0,b.jsx)(g.Z,{variant:"h6",sx:{py:2,color:"text.primary"},children:"Ten pies to wierny i przyjacielski czworon\xf3g, kt\xf3ry \u015bwietnie czuje si\u0119 w roli rodzinnego towarzysza. Dobrze dogaduje si\u0119 z dzie\u0107mi, uwielbia pieszczoty i wsp\xf3lne zabawy. Jest \u0142atwy w prowadzeniu, cho\u0107 bywa uparty. Sprawdzi si\u0119 zar\xf3wno w ma\u0142ym mieszkaniu jak i w domu z ogrodem."}),(0,b.jsx)(g.Z,{variant:"h6",sx:{color:"text.primary"},children:"Wysoko\u015b\u0107 w k\u0142\u0119bie 30-35 cm, masa cia\u0142a 22-25 kg. Sier\u015b\u0107 kr\xf3tka, delikatna, l\u015bni\u0105ca, umaszczenie p\u0142owe, pr\u0119gowane lub \u0142aciate. Charakter czujny, \u015bmia\u0142y, oddany, odwa\u017cny, \u0142agodny, czasem uparty. W zale\u017cno\u015bci od dnia pokazuje r\xf3\u017cne oblicza swojej natury."}),(0,b.jsx)(s.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:(0,b.jsx)(d.j3,{})}),(0,b.jsx)(d.j3,{})]}):void 0}}}]);
//# sourceMappingURL=258.2d25822e.chunk.js.map