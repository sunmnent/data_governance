(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{Lj7s:function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var o,i,u,r=n(a("2/Rp")),d=n(a("2Taf")),c=n(a("vZ4D")),p=n(a("l4Ni")),s=n(a("ujKo")),f=n(a("MhPg")),h=l(a("q1tI")),v=a("MuoO"),m=a("7DNP"),g={0:"dataX\u914d\u7f6e",1:"\u5b58\u50a8\u8fc7\u7a0b",2:"sql"},y=(o=(0,v.connect)(function(e){var t=e.dataRelationship;return{dataRelationship:t}}),o((u=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,p.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(l))),a.goBack=function(){a.props.dispatch(m.routerRedux.goBack())},a}return(0,f.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.dispatch({type:"dataRelationship/getConfig",payload:e})}},{key:"render",value:function(){var e=this.props.dataRelationship.confObj,t=e.config,a=e.isIncrement,n=e.type,l=e.datadate;return h.default.createElement("div",null,h.default.createElement(r.default,{onClick:this.goBack,style:{marginBottom:10}},"\u8fd4\u56de"),h.default.createElement("div",null,0!==a&&l&&h.default.createElement("div",null,"\u589e\u91cf\u53c2\u6570\uff1a",l)),h.default.createElement("h2",null,g[n],"\uff1a"),h.default.createElement("div",{style:{whiteSpace:"pre-wrap"}},t))}}]),t}(h.Component),i=u))||i),w=y;t.default=w}}]);