(this["webpackJsonpanalog-man"]=this["webpackJsonpanalog-man"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),r=n(7),i=n.n(r),o=(n(13),n(2)),u=n(3),j=n(5),l=n(4),b=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"seconds-wrapper",style:{transform:"rotate("+this.props.value+"deg)"},children:Object(a.jsx)("div",{className:"seconds"})})}}]),n}(c.a.Component),p=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"minutes-wrapper",style:{transform:"rotate("+this.props.value+"deg)"},children:Object(a.jsx)("div",{className:"minutes"})})}}]),n}(c.a.Component),O=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"hours-wrapper",style:{transform:"rotate("+this.props.value+"deg)"},children:Object(a.jsx)("div",{className:"hours"})})}}]),n}(c.a.Component),h=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={sec:6*(new Date).getSeconds(),min:6*(new Date).getMinutes(),hr:30*(new Date).getHours()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.nextStep=setInterval((function(){e.setState({sec:6*(new Date).getSeconds(),min:6*(new Date).getMinutes(),hr:30*(new Date).getHours()})}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.nextStep)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"clock-wrapper",children:Object(a.jsxs)("main",{className:"clock",children:[Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("div",{className:"dot"}),Object(a.jsx)(b,{value:this.state.sec}),Object(a.jsx)(p,{value:this.state.min}),Object(a.jsx)(O,{value:this.state.hr})]})})}}]),n}(c.a.Component),d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),d()}},[[14,1,2]]]);
//# sourceMappingURL=main.e98c3bc2.chunk.js.map