(this["webpackJsonpharry-site"]=this["webpackJsonpharry-site"]||[]).push([[0],{10:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(11),o=n.n(i),r=(n(17),n(3)),d=n(2),l=n(5),m=n(4),u=(n(10),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"section",children:[Object(a.jsxs)("text",{className:"section-title",style:{textAlign:"end"},children:["About ",Object(a.jsx)("br",{}),"Me"]}),Object(a.jsx)("div",{class:"v-line"}),Object(a.jsxs)("div",{className:"section-content",children:[Object(a.jsx)("text",{className:"section-text",children:"Currently studying at University of Toronto"}),Object(a.jsx)("text",{className:"section-text",children:"Computer Science Specialist, Software Engineering Stream"}),Object(a.jsx)("text",{className:"section-text",children:"4 years of software developing experience"})]})]})}}]),n}(c.a.Component)),j=(n(6),n(7),n(8)),b=n.n(j),h=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(b.a,{filter:"blur(15px)",className:"animate__animated animate__fadeIn animate__delay-2s",children:Object(a.jsx)("div",{className:"glass",id:"frost",children:Object(a.jsx)("h1",{className:"title animate__animated animate__fadeIn animate__delay-3s",id:"hello",children:"Hello"})})})}}]),n}(c.a.Component),f=n.p+"static/media/Profile.672f94bb.jpg",_=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"imgCon",children:Object(a.jsx)("img",{src:f,alt:"A picture of me",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"100%"}})})}}]),n}(c.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={seconds:0},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"refresh-glass animate__animated animate__fadeInDown animate__delay-3s",id:"ref",children:Object(a.jsx)("h4",{className:"message",children:"Refresh to change the picture"})})}}]),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.count=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.count)}},{key:"tick",value:function(){8===this.state.seconds?(document.getElementById("ref").classList.remove("animate__fadeInDown","animate__delay-3s"),document.getElementById("ref").classList.add("animate__fadeOutUp"),this.setState({seconds:9})):this.state.seconds<8&&this.setState({seconds:this.state.seconds+1})}}]),n}(c.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={seconds:0},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"blackout animate__animated animate__fadeInUp animate__delay-3s",children:Object(a.jsx)("h4",{className:"message animate__animated animate__fadeInDown animate__delay-4s",id:"message",style:{paddingTop:"5px"},children:"Scroll down"})})}}]),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.count=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.count)}},{key:"tick",value:function(){7===this.state.seconds?(document.getElementById("message").classList.remove("animate__fadeInDown","animate__delay-4s"),document.getElementById("message").classList.add("animate__fadeOutDown","animate__slow"),this.setState({seconds:8})):this.state.seconds<11?this.setState({seconds:this.state.seconds+1}):11===this.state.seconds&&(document.getElementById("message").classList.remove("animate__fadeOutDown"),document.getElementById("message").classList.add("animate__fadeInDown"),this.setState({seconds:4}))}}]),n}(c.a.Component),p=n.p+"static/media/FrontEnd.20eda6ba.svg",x=n.p+"static/media/BackEnd.de6f4cd3.svg",y=(c.a.Component,n(18),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"root animate__animated animate__fadeIn animate__delay-1s",id:"root",children:[Object(a.jsx)("div",{className:"background animate__animated animate__fadeIn animate__delay-1s",id:"back"}),Object(a.jsxs)("div",{className:"title-back",children:[Object(a.jsx)(O,{}),Object(a.jsx)(h,{}),Object(a.jsx)(v,{})]}),Object(a.jsx)(b.a,{filter:"blur(15px)",children:Object(a.jsxs)("div",{className:"intro",children:[Object(a.jsx)(_,{}),Object(a.jsx)(u,{})]})})]})}}]),n}(c.a.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),g()},6:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.4181600f.chunk.js.map