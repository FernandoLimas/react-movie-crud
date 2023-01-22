(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{27:function(e,t,n){e.exports=n(39)},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),o=n.n(i),l=(n(32),n(11)),c=n(1),u=n(7),s=n.n(u),m=n(13),h=n(3),d=n(4),v=n(8),p=n(6),f=n(5),b=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"Carregando...")}}]),n}(a.Component),g=n(17),y=n(14),E=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state=Object(y.a)({},e.movie),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(d.a)(n,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(g.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"movie_title"},r.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}),"T\xedtulo"))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"movie_subtitle"},r.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),"Subt\xedtulo"))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"movie_image"},r.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),"Imagem"))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"movie_storyline"},r.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),"Sinopse"))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"movie_genre"},"G\xeanero",r.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},r.a.createElement("option",{value:"action"},"A\xe7\xe3o"),r.a.createElement("option",{value:"comedy"},"Com\xe9dia"),r.a.createElement("option",{value:"thriller"},"Suspense"),r.a.createElement("option",{value:"fantasy"},"Fantasia"))))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"movie_rating"},r.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}),"Avalia\xe7\xe3o"))}},{key:"renderSubmitButton",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),n}(r.a.Component);E.defaultProps={movie:{subtitle:"",id:0,title:"",imagePath:"",storyline:"",rating:0,genre:"",bookmarked:!1}};var O=E,j=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.movie,t=e.title,n=e.storyline,a=e.id,i=e.imagePath;return r.a.createElement("div",{"data-testid":"movie-card"},r.a.createElement("img",{src:i,alt:t}),r.a.createElement("h1",null,t),r.a.createElement("p",null,n),r.a.createElement(l.b,{to:"movies/".concat(a)},"VER DETALHES"))}}]),n}(r.a.Component),k=n(26),S=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(S));var w=function(){return JSON.parse(localStorage.getItem("movies"))},I=function(e){return localStorage.setItem("movies",JSON.stringify(e))},_=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},M=function(e){var t=w().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){_(t)(e)}))},C=function(e){return new Promise((function(t){var n=w().map((function(t){return t.id===parseInt(e.id,10)?Object(y.a)(Object(y.a)({},t),e):t}));I(n),_("OK")(t)}))},x=function(e){return new Promise((function(t){var n=w(),a=n[n.length-1].id+1,r=Object(y.a)(Object(y.a)({},e),{},{id:a});n=[].concat(Object(k.a)(n),[r]),I(n),_("OK")(t)}))},P=function(e){var t=w();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),I(t),new Promise((function(e){_({status:"OK"})(e)}))},A=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={status:"loading",shouldRedirect:!1,movie:{}},a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.fetchMovie=a.fetchMovie.bind(Object(v.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"handleSubmit",value:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:this.setState({shouldRedirect:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchMovie",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,M(t);case 3:n=e.sent,this.setState({status:"carregou",movie:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,n=e.shouldRedirect,a=e.movie;return n?r.a.createElement(c.a,{to:"/"}):"loading"===t?r.a.createElement(b,null):r.a.createElement("div",{"data-testid":"edit-movie"},r.a.createElement(O,{movie:a,onSubmit:this.handleSubmit}))}}]),n}(a.Component),R=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).fetchMovie=a.fetchMovie.bind(Object(v.a)(a)),a.delete=a.delete.bind(Object(v.a)(a)),a.state={movie:{},loading:!0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"delete",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,P(t);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMovie",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,M(t);case 3:n=e.sent,this.setState({movie:n,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movie,n=e.loading,a=t.title,i=t.storyline,o=t.imagePath,c=t.genre,u=t.rating,s=t.subtitle,m=t.id;return r.a.createElement("div",null,n&&r.a.createElement(b,null),r.a.createElement("div",{"data-testid":"movie-details"},r.a.createElement("img",{alt:"Movie Cover",src:"../".concat(o)}),r.a.createElement("p",null,"Title: ".concat(a)),r.a.createElement("p",null,"Subtitle: ".concat(s)),r.a.createElement("p",null,"Storyline: ".concat(i)),r.a.createElement("p",null,"Genre: ".concat(c)),r.a.createElement("p",null,"Rating: ".concat(u)),r.a.createElement(l.b,{to:"/movies/".concat(m,"/edit")},"EDITAR"),r.a.createElement(l.b,{to:"/"},"VOLTAR"),r.a.createElement(l.b,{to:"/",onClick:this.delete},"DELETAR")))}}]),n}(a.Component),F=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).fetchMovie=e.fetchMovie.bind(Object(v.a)(e)),e.state={movies:[],loading:!0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=w();_(t)(e)}));case 2:t=e.sent,this.setState({loading:!1,movies:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.loading;return r.a.createElement("div",{"data-testid":"movie-list"},n?r.a.createElement(b,null):t.map((function(e){return r.a.createElement(j,{key:e.title,movie:e})})),r.a.createElement(l.b,{to:"/movies/new"},"ADICIONAR CART\xc3O"))}}]),n}(a.Component),T=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.state={redirect:!1},a}return Object(d.a)(n,[{key:"handleSubmit",value:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:this.setState({redirect:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.redirect?r.a.createElement(c.a,{to:"/"}):r.a.createElement("div",{"data-testid":"new-movie"},r.a.createElement(O,{onSubmit:this.handleSubmit}))}}]),n}(a.Component),D=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),n}(a.Component);var N=function(){return r.a.createElement(l.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:F}),r.a.createElement(c.b,{path:"/movies/:id/edit/",component:A}),r.a.createElement(c.b,{path:"/movies/new",component:T}),r.a.createElement(c.b,{path:"/movies/:id",component:R}),r.a.createElement(c.b,{path:"*",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.120baea6.chunk.js.map