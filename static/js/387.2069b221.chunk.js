"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r,a,i,o,u=n(9439),c=n(6436),s=n(2791),p=n(7689),d=n(168),f=n(7402),l=f.Z.ul(r||(r=(0,d.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  max-width: 15%;\n  gap: 20px;\n"]))),h=f.Z.li(a||(a=(0,d.Z)(["\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 25px;\n  &:hover,\n  &:focus {\n    box-shadow: 0 0 15px 2px rgba(255, 153, 0, 0.7),\n      0 8px 10px -5px rgba(255, 153, 0, 0.5),\n      0 -8px 10px -5px rgba(255, 153, 0, 0.5),\n      10px 0 10px -5px rgba(255, 153, 0, 0.5),\n      -10px 0 10px -5px rgba(255, 153, 0, 0.5);\n  }\n"]))),m=f.Z.img(i||(i=(0,d.Z)(["\n  width: 100%;\n  border-radius: 25px 25px 0 0;\n"]))),g=f.Z.div(o||(o=(0,d.Z)(["\n  padding: 0 10px;\n  text-align: center;\n  & > p:first-of-type {\n    font-weight: 700;\n    font-size: 30px;\n  }\n  & > p:last-of-type {\n    font-size: 20px;\n  }\n"]))),v=n(184),x=function(){var t=(0,s.useState)([]),e=(0,u.Z)(t,2),n=e[0],r=e[1],a=(0,p.UO)().movieId;return(0,s.useEffect)((function(){(0,c.uV)(a).then((function(t){r(t)}))}),[a]),n.length?(0,v.jsx)(l,{children:n.map((function(t){var e=t.name,n=t.img,r=t.id,a=t.character;return(0,v.jsxs)(h,{children:[(0,v.jsx)(m,{src:n,alt:e,loading:"lazy"}),(0,v.jsxs)(g,{children:[(0,v.jsx)("p",{children:e}),(0,v.jsx)("p",{children:a})]})]},r)}))}):(0,v.jsx)("p",{children:"Sorry, no information about cast"})}},6436:function(t,e,n){n.d(e,{Hx:function(){return f},Tu:function(){return s},Y5:function(){return p},uV:function(){return d}});var r=n(5861),a=n(4687),i=n.n(a),o=n(9085),u=(n(5462),n(1243)),c={api_key:"d28f3e0fb4d925d2e7ab6a551bbf47ba"};u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get(e,{params:c}).then((function(t){return t.data.results.map((function(t){var e=t.title,n=t.name,r=t.id,a=t.poster_path;return{title:e||n,img:"https://www.themoviedb.org/t/p/original/".concat(a),id:r}}))}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),t.t0.message,o.Am.error("Oups! Something is going wrong... Please try later :(");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(e),{params:c}).then((function(t){var e=t.data,n=e.title,r=e.name,a=e.release_date,i=e.genres,o=e.overview,u=e.vote_average,c=e.id,s=e.backdrop_path;return{title:n||r,img:s?"https://www.themoviedb.org/t/p/original/".concat(s):"https://otv.one/uploads/default_image/thumbnail.jpg",overview:o||"no information about overview",scores:(10*u).toFixed(2),data:new Date(a).getFullYear(),genres:i?i.map((function(t){return t.name})).join(", "):"no information about genres",id:c}}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),t.t0.message,o.Am.error("We can't find information of the film");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(e,"/credits"),{params:c}).then((function(t){return t.data.cast.map((function(t){var e=t.name,n=t.character,r=t.profile_path,a=t.id;return{name:e,character:n,img:r?"https://www.themoviedb.org/t/p/original/".concat(r):"https://otv.one/uploads/default_image/thumbnail.jpg",id:a}}))}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),t.t0.message,o.Am.error("Oups! Something is going wrong... Please try later :(");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(e,"/reviews"),{params:c}).then((function(t){return t.data.results.map((function(t){return{author:t.author,content:t.content,created_at:t.created_at,updated_at:t.updated_at,id:t.id}}))}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),t.t0.message,o.Am.error("Oups! Something is going wrong... Please try later :(");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.2069b221.chunk.js.map