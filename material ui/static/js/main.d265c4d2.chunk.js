(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5391:function(e,t,n){e.exports=n(5493)},5396:function(e,t,n){},5493:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(26),o=n.n(l),c=(n(5396),n(35)),u=n(11),i=n(12),s=n(14),m=n(13),p=n(15),h=n(5497),f=n(5496),d="http://media.mw.metropolia.fi/wbma/",g=function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch(d+"login",n).then(function(e){return e.json()})},E=function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch(d+"users",t).then(function(e){return e.json()})},b=function(e){return fetch(d+"tags/profile").then(function(e){return e.json()}).then(function(t){return t.filter(function(t){var n=null;return t.user_id===e&&(n=t),n})})},y=n(5495),v="http://media.mw.metropolia.fi/wbma/uploads/",j=function(e){console.log("props",e);var t=e.pic,n=t.thumbnails,a=t.screenshot,l=t.title;return null!==n?r.a.createElement("img",{src:v+n.w160,alt:l}):r.a.createElement("img",{src:v+a,alt:l})},O=function(e){var t=e.pic,n=t.title,a=t.description,l=t.file_id;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(j,{pic:e.pic})),r.a.createElement("td",null,r.a.createElement("h3",null,n),r.a.createElement("p",null,a)),r.a.createElement("td",null,r.a.createElement(y.a,{to:"single/"+l},"View")))},w=function(e){var t=e.picArray.map(function(e,t){return r.a.createElement(O,{key:t,pic:e})});return r.a.createElement("table",null,r.a.createElement("tbody",null,t))},k=function(e){var t=e.picArray;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{picArray:t}))},S=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).mediaUrl="http://media.mw.metropolia.fi/wbma/uploads/",n.state={file:"http://placekitten.com/200/200"},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(e){return fetch(d+"media/"+e).then(function(e){return e.json()})})(this.props.match.params.id).then(function(t){console.log(t),e.setState({file:t})})}},{key:"render",value:function(){return r.a.createElement("img",{src:this.mediaUrl+this.state.file.filename,alt:this.state.file.title})}}]),t}(a.Component),C=n(5),L=n(27),I=function(e){return r.a.createElement("nav",null,r.a.createElement(C.b,null,r.a.createElement(C.c,{button:!0,component:y.a,to:"/home"},r.a.createElement(C.d,null,r.a.createElement(L.b,null)),r.a.createElement(C.e,{primary:"Home"})),e.checkLogin()&&r.a.createElement(r.a.Fragment,null,r.a.createElement(C.c,{button:!0,component:y.a,to:"/profile"},r.a.createElement(C.d,null,r.a.createElement(L.a,null)),r.a.createElement(C.e,{primary:"Profile"})),r.a.createElement(C.c,{button:!0,component:y.a,to:"/logout"},r.a.createElement(C.d,null,r.a.createElement(L.d,null)),r.a.createElement(C.e,{primary:"Logout"}))),!e.checkLogin()&&r.a.createElement(C.c,{button:!0,component:y.a,to:"/"},r.a.createElement(C.d,null,r.a.createElement(L.c,null)),r.a.createElement(C.e,{primary:"Login"}))))},A=n(36),U=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{username:"",password:"",email:"",full_name:"",picture:""},toggleForm:!0,userAvailable:!0},n.handleLoginSubmit=function(e){e.preventDefault(),n.doLogin()},n.handleRegisterSubmit=function(e){e.preventDefault(),E(n.state.user).then(function(e){console.log(e),n.doLogin()})},n.doLogin=function(){g(n.state.user.username,n.state.user.password).then(function(e){console.log(e),n.props.setUser(e.user),localStorage.setItem("token",e.token),n.props.history.push("/home")})},n.handleInputChange=function(e){var t=e.target,a=t.value,r=t.name;console.log(a,r),n.setState(function(e){return{user:Object(c.a)({},e.user,Object(A.a)({},r,a))}})},n.checkUserAvailable=function(e){},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;console.log(localStorage.getItem("token")),null!==localStorage.getItem("token")&&(e=localStorage.getItem("token"),fetch(d+"users/user",{headers:{"x-access-token":e}}).then(function(e){return e.json()})).then(function(e){t.props.setUser(e),t.props.history.push("/home")})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleLoginSubmit},r.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.user.username,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",value:this.state.user.password,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Login")),r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleRegisterSubmit},r.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.user.username,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",value:this.state.user.password,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"email",placeholder:"email",value:this.state.user.email,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"full_name",placeholder:"full name",value:this.state.user.full_name,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Login")))}}]),t}(a.Component),x=function(e){var t=e.user,n=t.username,a=t.email,l=t.full_name,o=t.picture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Profile"),r.a.createElement("p",null,"Username: ",n),r.a.createElement("p",null,"email: ",a),r.a.createElement("p",null,"Full name: ",l),r.a.createElement("img",{src:"http://media.mw.metropolia.fi/wbma/uploads/"+o.filename,alt:"k\xe4ytt\xe4j\xe4 kuva"}))},_=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.setUser(null),localStorage.removeItem("token"),this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Logout"))}}]),t}(a.Component),F=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={picArray:[],user:null},n.setUser=function(e){n.setState({user:e}),b(e.user_id).then(function(e){console.log(e),n.setState(function(t){return{user:Object(c.a)({},t.user,{picture:e[0]})}})})},n.checkLogin=function(){return null!==n.state.user},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(d+"media/").then(function(e){return e.json()}).then(function(e){return console.log(e),Promise.all(e.map(function(e){return fetch(d+"media/"+e.file_id).then(function(e){return e.json()})})).then(function(e){return console.log(e),e})}).then(function(t){console.log(t),e.setState({picArray:t})})}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{basename:"/~mikaup/"},r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,md:2,xs:12},r.a.createElement(I,{checkLogin:this.checkLogin})),r.a.createElement(C.a,{item:!0,md:10,xs:12},r.a.createElement(f.a,{path:"/home",render:function(t){return r.a.createElement(k,Object.assign({},t,{picArray:e.state.picArray}))}}),r.a.createElement(f.a,{path:"/single/:id",component:S}),r.a.createElement(f.a,{path:"/profile",render:function(t){return r.a.createElement(x,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(U,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(f.a,{path:"/logout",render:function(t){return r.a.createElement(_,Object.assign({},t,{setUser:e.setUser}))}}))))}}]),t}(a.Component);o.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[5391,1,2]]]);
//# sourceMappingURL=main.d265c4d2.chunk.js.map