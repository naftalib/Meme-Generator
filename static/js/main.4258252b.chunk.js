(this["webpackJsonpMeme-Genrator"]=this["webpackJsonpMeme-Genrator"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/head.c4e271e2.jpg"},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),l=a.n(r);a(13);var m=function(){return o.a.createElement("header",null,o.a.createElement("h1",{className:"tag"},"<NB/>"),o.a.createElement("p",null,"Meme ",o.a.createElement("br",null)," Generator"))},c=a(3),s=a(4),i=a(5),h=a(7),u=a(6),p=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(c.a)({},n,o))},e.handleSubmit=function(t){t.preventDefault();var a=Math.floor(Math.random()*e.state.allMemeImgs.length),n=e.state.allMemeImgs[a].url;e.setState({randomImg:n})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),o.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),o.a.createElement("button",null,"Gen")),o.a.createElement("div",{className:"meme"},o.a.createElement("img",{src:this.state.randomImg,alt:""}),o.a.createElement("h2",{className:"top"},this.state.topText),o.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),a}(n.Component);a(14);var d=function(){return o.a.createElement("div",{className:"mainContainer"},o.a.createElement("div",{className:"header"},o.a.createElement(m,null)),o.a.createElement("div",{className:"memeContainer"},o.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4258252b.chunk.js.map