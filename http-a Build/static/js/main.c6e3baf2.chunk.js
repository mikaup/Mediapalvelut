(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=(n(14),n(3)),i=n(4),u=n(6),s=n(5),m=n(7),h=(n(15),function(e){var t=e.pic,n=t.thumbnails,a=t.title,c=t.description,o=t.filename;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:n.w160,alt:a})),r.a.createElement("td",null,r.a.createElement("h3",null,a),r.a.createElement("p",null,c)),r.a.createElement("td",null,r.a.createElement("a",{href:o},"View")))}),p=function(e){var t=e.picarray.map(function(e,t){return r.a.createElement(h,{key:t,pic:e})});return r.a.createElement("table",null,r.a.createElement("tbody",null,t))},f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={picArray:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("test.json").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState()})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(p,{picarray:this.state.picArray}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.c6e3baf2.chunk.js.map