(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{102:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(25),r=n.n(i),s=(n(54),n(55),n(56),n(18)),o=n(10),l=(n(57),n(3));var u=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(o.f)(),r=function(){window.scrollY>100?a(!0):a(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}}),[]),Object(l.jsx)("div",{className:"nav ".concat(n&&"nav__black"),children:Object(l.jsxs)("div",{className:"nav__contents",children:[Object(l.jsx)("img",{onClick:function(){return i.push("/")},className:"nav__logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(l.jsx)("img",{onClick:function(){return i.push("/profile")},className:"nav__avatar",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/120px-Netflix-avatar.png",alt:""})]})})},j=n(21),d=n.n(j),b=n(27),h=(n(64),n(45)),f=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),p="bb74a8a6bf464c82e61457b0c857366a",m={fetchTrending:"/trending/all/week?api_key=".concat(p,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(p,"&with_networks=213"),fetchToprated:"/movie/top_rated?api_key=".concat(p,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(p,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(p,"&with_genres=99")};var O=function(){var e,t,n=Object(c.useState)([]),a=Object(s.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(m.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(i),Object(l.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url('https://image.tmdb.org/t/p/original/".concat(null===i||void 0===i?void 0:i.backdrop_path,"')"),backgroundPosition:"center center"},children:[Object(l.jsxs)("div",{className:"banner__contents",children:[Object(l.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(l.jsxs)("div",{className:"banner__buttons",children:[Object(l.jsx)("button",{className:"banner__button",children:"Play"}),Object(l.jsx)("button",{className:"banner__button",children:"MyList"})]}),Object(l.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(l.jsx)("div",{className:"banner--fadeButton"})]})},v=(n(82),n(46)),g=n(49),x=n.n(g);var _=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),r=Object(s.a)(i,2),o=r[0],u=r[1],j=Object(c.useState)(""),h=Object(s.a)(j,2),p=h[0],m=h[1];return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,u(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("h2",{className:"row__title",children:t}),Object(l.jsx)("div",{className:"row__posters",children:o.map((function(e){return(a&&e.poster_path||!a&&e.backdrop_path)&&Object(l.jsx)("img",{className:"row__poster ".concat(a&&"row__posterLarge"),onClick:function(){return function(e){p?m(""):x()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),p&&Object(l.jsx)(v.a,{videoId:p,opts:{height:"390",width:"100%",playVars:{autoplay:1}}})]})};var w=function(){return Object(l.jsxs)("div",{className:"homescreen",children:[Object(l.jsx)(u,{}),Object(l.jsx)(O,{}),Object(l.jsx)(_,{title:"NETFLIX ORIGINALS",fetchUrl:m.fetchNetflixOriginals,isLargeRow:!0}),Object(l.jsx)(_,{title:"TOP RATED",fetchUrl:m.fetchToprated}),Object(l.jsx)(_,{title:"ACTION MOVIES",fetchUrl:m.fetchActionMovies}),Object(l.jsx)(_,{title:"COMEDY MOVIES",fetchUrl:m.fetchComedyMovies}),Object(l.jsx)(_,{title:"HORROR MOVIES",fetchUrl:m.fetchHorrorMovies}),Object(l.jsx)(_,{title:"ROMANCE MOVIES",fetchUrl:m.fetchRomanceMovies}),Object(l.jsx)(_,{title:"DOCUMENTARIES",fetchUrl:m.fetchDocumentaries})]})},N=(n(102),n(34)),S=N.a.initializeApp({apiKey:"AIzaSyBtgvBfLvVfnwB6HozYQXljopFKfGK1EU0",authDomain:"netflix-clone-92c18.firebaseapp.com",projectId:"netflix-clone-92c18",storageBucket:"netflix-clone-92c18.appspot.com",messagingSenderId:"446197332613",appId:"1:446197332613:web:15235937f7daf9009087ec"}).auth(),k=(N.a.firestore(),S);n(108);var y=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null);return Object(l.jsx)("div",{className:"signupScreen",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsx)("input",{ref:e,type:"email",placeholder:"Email"}),Object(l.jsx)("input",{ref:t,type:"password",placeholder:"Password"}),Object(l.jsx)("button",{type:"submit",onClick:function(n){n.preventDefault(),k.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){return alert(e.message)}))},children:"Sign In"}),Object(l.jsxs)("h4",{children:[Object(l.jsx)("span",{className:"signupScreen__gray",children:"New to Netflix? "}),Object(l.jsx)("span",{className:"signupScreen__link",onClick:function(n){n.preventDefault(),k.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign Up now."})]})]})})};var E=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{className:"loginScreen",children:[Object(l.jsxs)("div",{className:"loginScreen__background",children:[Object(l.jsx)("img",{src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:"",className:"loginScreen__logo"}),Object(l.jsx)("button",{onClick:function(){return a(!0)},className:"loginScreen__button",children:"Sign In"}),Object(l.jsx)("div",{className:"loginScreen__gradient"})]}),Object(l.jsx)("div",{className:"loginScreen__body",children:n?Object(l.jsx)(y,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Unlimited films,TV programmes and more."}),Object(l.jsx)("h2",{children:"Watch anywhere,Cancel at anytime"}),Object(l.jsx)("h3",{children:"Ready to watch? Enter your email to create or restart your membership"}),Object(l.jsx)("div",{className:"loginScreen__input",children:Object(l.jsxs)("form",{action:"",children:[Object(l.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(l.jsx)("button",{onClick:function(){return a(!0)},className:"loginScreen__getStarted",children:"GET STARTED"})]})})]})})]})},I=(n(109),n(19)),M=n(28),R=Object(M.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),U=R.actions,C=U.login,A=U.logout,L=function(e){return e.user.user},T=R.reducer;var D=function(){var e=Object(I.c)(L);return Object(l.jsxs)("div",{className:"profileScreen",children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"profileScreen__body",children:[Object(l.jsx)("h1",{children:"Signing Out"}),Object(l.jsxs)("div",{className:"profileScreen__info",children:[Object(l.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:""}),Object(l.jsxs)("div",{className:"profileScreen__details",children:[Object(l.jsx)("h2",{children:e.email}),Object(l.jsx)("div",{className:"profileScreen__plans"}),Object(l.jsx)("button",{onClick:function(){return k.signOut()},className:"profileScreen__signOut",children:"Sign Out"})]})]})]})]})},B=n(31);var P=function(){var e=Object(I.c)(L),t=Object(I.b)();return Object(c.useEffect)((function(){return k.onAuthStateChanged((function(e){e?(console.log(e),t(C({uid:e.uid,email:e.email}))):t(A())}))}),[t]),Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(B.a,{children:e?Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/profile",children:Object(l.jsx)(D,{})}),Object(l.jsx)(o.a,{path:"/",children:Object(l.jsx)(w,{})})]}):Object(l.jsx)(E,{})})})},V=Object(M.a)({reducer:{user:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(I.a,{store:V,children:Object(l.jsx)(P,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},64:function(e,t,n){},82:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.495753cc.chunk.js.map