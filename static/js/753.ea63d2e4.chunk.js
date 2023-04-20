"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{8627:function(e,t,n){var r=n(3728),a=n(4410),i=n(7689),o=n(184);t.Z=function(e){var t=e.arrayOfFilms,n=(0,i.TH)();return(0,o.jsx)(a.CK,{children:t.map((function(e){var t=e.id,i=e.title;return(0,o.jsx)("li",{children:(0,o.jsxs)(a.Fg,{to:"/movies/".concat(t),state:{from:n},children:[(0,o.jsx)(r.$kb,{})," ",i]})},t)}))})}},4410:function(e,t,n){n.d(t,{CK:function(){return s},Fg:function(){return p},bR:function(){return l}});var r,a,i,o=n(168),u=n(7402),c=n(1087),s=u.Z.ul(r||(r=(0,o.Z)(["\n  font-size: 24px;\n  line-height: 1.2;\n"]))),p=(0,u.Z)(c.rU)(a||(a=(0,o.Z)(["\n  &:focus,\n  &:hover {\n    color: orangered;\n  }\n"]))),l=u.Z.p(i||(i=(0,o.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n"])))},6436:function(e,t,n){n.d(t,{Hx:function(){return f},Tu:function(){return s},Y5:function(){return p},uV:function(){return l}});var r=n(5861),a=n(4687),i=n.n(a),o=n(9085),u=(n(5462),n(1243)),c={api_key:"d28f3e0fb4d925d2e7ab6a551bbf47ba"};u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get(t,{params:c}).then((function(e){return e.data.results.map((function(e){var t=e.title,n=e.name,r=e.id,a=e.poster_path;return{title:t||n,img:"https://www.themoviedb.org/t/p/original/".concat(a),id:r}}))}));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),e.t0.message,o.Am.error("Oups! Something is going wrong... Please try later :(");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t),{params:c}).then((function(e){var t=e.data,n=t.title,r=t.name,a=t.release_date,i=t.genres,o=t.overview,u=t.vote_average,c=t.id,s=t.backdrop_path;return{title:n||r,img:s?"https://www.themoviedb.org/t/p/original/".concat(s):"https://otv.one/uploads/default_image/thumbnail.jpg",overview:o||"no information about overview",scores:(10*u).toFixed(2),data:new Date(a).getFullYear(),genres:i?i.map((function(e){return e.name})).join(", "):"no information about genres",id:c}}));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),e.t0.message,o.Am.error("We can't find information of the film");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/credits"),{params:c}).then((function(e){return e.data.cast.map((function(e){var t=e.name,n=e.character,r=e.profile_path,a=e.id;return{name:t,character:n,img:r?"https://www.themoviedb.org/t/p/original/".concat(r):"https://otv.one/uploads/default_image/thumbnail.jpg",id:a}}))}));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),e.t0.message,o.Am.error("Oups! Something is going wrong... Please try later :(");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/reviews"),{params:c}).then((function(e){return e.data.results.map((function(e){return{author:e.author,content:e.content,created_at:e.created_at,updated_at:e.updated_at,id:e.id}}))}));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),e.t0.message,o.Am.error("Oups! Something is going wrong... Please try later :(");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},6753:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r,a,i,o,u,c,s,p=n(9439),l=n(2791),f=n(1087),d=n(6436),h=n(8627),m=n(4410),g=n(168),v=n(7402),x=v.Z.form(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  margin-top: 20px;\n"]))),b=v.Z.label(a||(a=(0,g.Z)(["\n  margin-bottom: 10px;\n  font-weight: bold;\n"]))),w=v.Z.input(i||(i=(0,g.Z)(["\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid gray;\n  width: 300px;\n  font-size: 16px;\n"]))),Z=v.Z.button(o||(o=(0,g.Z)(["\n  background-color: #008cba;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  &:hover {\n    background-color: #006d87;\n  }\n"]))),y=v.Z.div(u||(u=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n"]))),j=v.Z.div(c||(c=(0,g.Z)(["\n  display: flex;\n\n  gap: 10px;\n"]))),k=v.Z.div(s||(s=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n"]))),_=n(184),S=function(e){var t=e.onSearch,n=e.onFilter,r=(0,l.useState)(""),a=(0,p.Z)(r,2),i=a[0],o=a[1],u=(0,l.useState)(""),c=(0,p.Z)(u,2),s=c[0],f=c[1],d=function(e){var t=e.target,n=t.name,r=t.value;"input"===n?o(r.trim()):f(r.trim())};return(0,l.useEffect)((function(){n(s)}),[s,n]),(0,_.jsxs)(x,{onSubmit:function(e){t(e),o(""),f("")},children:[(0,_.jsx)(b,{htmlFor:"text-input",children:"What are you looking for ?"}),(0,_.jsxs)(k,{children:[(0,_.jsxs)(y,{children:[(0,_.jsx)(w,{type:"text",id:"text-input",name:"input",value:i,onChange:d}),(0,_.jsx)(Z,{type:"submit",children:"Search Movie"})]}),(0,_.jsxs)(j,{children:[(0,_.jsx)(w,{type:"text",name:"filter",value:s,onChange:d}),(0,_.jsx)(Z,{type:"submit",children:"Filter"})]})]})]})},F=n(9085),C=function(){var e=(0,l.useState)([]),t=(0,p.Z)(e,2),n=t[0],r=t[1],a=(0,l.useState)(""),i=(0,p.Z)(a,2),o=i[0],u=i[1],c=(0,l.useState)([]),s=(0,p.Z)(c,2),g=s[0],v=s[1],x=(0,f.lr)(),b=(0,p.Z)(x,2),w=b[0],Z=b[1],y=w.get("query");return(0,l.useEffect)((function(){y&&(0,d.Tu)("/search/movie?query=".concat(y)).then((function(e){e.length||(0,F.Am)("We can not find the film"),r(e)}))}),[y]),(0,l.useEffect)((function(){if(n.length){var e=n.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())}));v(e)}else v([])}),[o,n,n.length]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(S,{onSearch:function(e){e.preventDefault(),Z({query:e.target.input.value.trim().toLowerCase()})},onFilter:function(e){u(e)}}),(0,_.jsx)(h.Z,{arrayOfFilms:g}),!g.length&&(0,_.jsx)(m.bR,{children:"Search result will be displayed here"})]})}}}]);
//# sourceMappingURL=753.ea63d2e4.chunk.js.map