(this.webpackJsonpopenfire=this.webpackJsonpopenfire||[]).push([[5],{226:function(e,t,n){e.exports=n(243)},231:function(e,t,n){},240:function(e,t,n){var a={"./com.mtgprofessor/monthly-payment":[220,2],"./com.mtgprofessor/monthly-payment.js":[220,2],"./com.mtgprofessor/monthy-payment.test":[224,0],"./com.mtgprofessor/monthy-payment.test.js":[224,0],"./compound-interest":[221,3],"./compound-interest.js":[221,3],"./compound-interest.test":[222,1],"./compound-interest.test.js":[222,1],"./endurance":[223,4],"./endurance.js":[223,4]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=240,e.exports=r},243:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),c=(n(231),n(270)),l=n(275),u=n(272),s=n(20),p=n(21),h=n(232),f=function(){function e(){Object(s.a)(this,e),this.__defineGetter__=function(e){if(h.get("profile"))return parseFloat(h.get("profile")[e])}}return Object(p.a)(e,null,[{key:"set",value:function(t,n){var a=e.all();a[t]=n,h.set("profile",a)}},{key:"all",value:function(){var e=h.get("profile");return null===e&&(e={netWorth:1e5,burnRate:1e3,salary:5e4,age:25}),e}},{key:"windows",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=h.get("windows")||{home:["compound-interest","com.mtgprofessor/monthly-payment"]};return null===e?t:t[e]}}]),e}(),m=f,d=n(24),v=n(23),b=n(25),g=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Open Source Personal Finance Calc"),r.a.createElement("p",null,"A collection of financial calculators supported by community updates."),r.a.createElement("p",null,"Start with filling out ",r.a.createElement("i",null,"profile details"),", or calculate your ",r.a.createElement("i",null,"endurance"),"."))}}]),t}(r.a.Component),j=n(206),y=n.n(j),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e,t){var a=n.props,r=a.name,o=a.onChange;try{o(r,parseFloat(t))}catch(i){console.warn("".concat(r," - invalid input: ").concat(t))}},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currencySymbol,n=e.config,a=e.value,o="money-input-".concat(n.label);return r.a.createElement(y.a,{style:{paddingLeft:"10px"},id:o,label:n.label,variant:"standard",value:a,currencySymbol:t,outputFormat:"string",decimalCharacter:".",digitGroupSeparator:",",onChange:this.handleChange})}}]),t}(r.a.Component),E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(v.a)(t).call(this,e))).handleChange=function(e,t){var a=parseFloat(t);n.setState((function(t,n){return t[e]=a,f.set(e,a),f[e]=a,t}))},n.state=f.all(),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=[];for(var t in this.state)e.push(r.a.createElement(O,{id:t,name:t,key:t,config:{label:t},value:this.state[t],onChange:this.handleChange}));return r.a.createElement("form",{id:"profile"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Profile"),e))}}]),t}(r.a.Component);var k=function(e){return n(240)("./".concat(e))},C=n(74),w=n(210),q=n(212),x=n(211),F=n.n(x);function S(e){for(var t=(e=e.toString()).length,n=0;"0"===e[t-1-n];)n+=1;var a=" kMBT????"[(n-=n%3)/3];return e.substring(0,t-n)+a}var P=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.args,n=e.eqn,a=e.domain,o=a.map((function(e){return n.apply(void 0,Object(q.a)(t).concat([e]))})),i={labels:a,series:[{data:o}]},c={axisX:{labelInterpolationFnc:function(e,t){return t%2===0?S(e):null}},axisY:{labelInterpolationFnc:function(e,t){return 0===e?0:t%2===0?S(e):null}}};return r.a.createElement(F.a,{key:Date.now(),data:i,options:c,type:"Line"})}}]),t}(r.a.Component);P.defaultProps={domain:[0,1,2,3,4,5,6,7,8,9,10]};var _=P,A=n(276),D=n(251),I=n(274),L=n(257),M=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(d.a)(this,Object(v.a)(t).call(this,e))).handleChange=function(e,t){var a=n.props,r=a.name;(0,a.onChange)(r,e.target.value)},n.options=[];for(var a=0,o=Object.entries(n.props.config.options);a<o.length;a++){var i=o[a],c=Object(C.a)(i,2),l=c[0],u=c[1];n.options.push(r.a.createElement(I.a,{key:u,value:u},l))}return n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.config,a=e.value,o="select-input-".concat(n.label);return r.a.createElement("div",{className:"MuiFormControl-root",style:{paddingLeft:"10px",paddingRight:"10px"}},r.a.createElement(D.a,{shrink:!0,htmlFor:t},n.label),r.a.createElement(L.a,{value:a,onChange:this.handleChange,inputProps:{name:t,id:o}},this.options))}}]),t}(r.a.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.config.type,t=A.a;switch(e){case"currency":t=O;break;case"select":t=M;break;default:t=A.a}return r.a.createElement(t,this.props)}}]),t}(r.a.Component),N=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(d.a)(this,Object(v.a)(t).call(this,e))).handleChange=function(e,t){n.setState(Object(w.a)({},e,t),n.executeEquation)},n.state={};for(var a=0,r=Object.entries(e.config.params);a<r.length;a++){var o=r[a],i=Object(C.a)(o,2),c=i[0],l=i[1];n.state[c]=l.default}return n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.executeEquation()}},{key:"executeEquation",value:function(){for(var e=this.props.config,t={},n=0,a=Object.keys(e.params);n<a.length;n++){var r=a[n];t[r]=this.state[r]}this.setState({result:e.equation(t)})}},{key:"graphArgs",value:function(){var e=this;return Object.entries(this.state).map((function(t){return e.state[t[0]]}))}},{key:"render",value:function(){for(var e=this.props.config,t=[],n=[],a=0,o=Object.entries(e.params);a<o.length;a++){var i=o[a],c=Object(C.a)(i,2),l=c[0],u=c[1];n.push(r.a.createElement(B,{name:l,key:l,config:u,value:this.state[l],onChange:this.handleChange}))}return n.push(r.a.createElement(A.a,{disabled:!0,inputProps:{style:{textAlign:"right"}},label:e.result.label,key:"result",value:this.state.result})),this.graph&&t.push(r.a.createElement(_,{args:this.graphArgs(),eqn:this.eqn})),r.a.createElement("div",{id:"".concat(e.id,"-equation")},r.a.createElement("form",{id:e.id,name:e.id},r.a.createElement("fieldset",null,r.a.createElement("legend",null,e.title),r.a.createElement("p",null,e.description),n,t)))}}]),t}(r.a.Component),R=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(v.a)(t).call(this,e))).state={equations:[]},e.equations.map((function(e){return n.load(e)})),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"append",value:function(e){if(this.state.equations){var t=this.state.equations;t.push(e),this.setState({equations:t})}}},{key:"load",value:function(e){var t=this;k(e).then((function(e){t.append(e.default)}))}},{key:"render",value:function(){var e=this.state.equations.map((function(e){return r.a.createElement(N,{config:e})}));return r.a.createElement("div",null,e," ")}}]),t}(r.a.Component);var W=function(){var e=m.windows("home");return r.a.createElement("div",null,r.a.createElement(c.a,{position:"static"},r.a.createElement(l.a,null,r.a.createElement(u.a,{variant:"h6"},"Open FI/RE"))),r.a.createElement(g,null),r.a.createElement(E,null),r.a.createElement(R,{equations:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[226,6,7]]]);
//# sourceMappingURL=main.3b089d30.chunk.js.map