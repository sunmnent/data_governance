(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{Lj7s:function(e,t,a){"use strict";var n=a("g09b"),o=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var l,i,r,d=n(a("2/Rp")),s=o(a("q1tI")),p=a("MuoO"),c=a("7DNP"),u={0:"dataX\u914d\u7f6e",1:"\u5b58\u50a8\u8fc7\u7a0b",2:"sql"},h=(l=(0,p.connect)(e=>{var t=e.dataRelationship;return{dataRelationship:t}}),l((r=class extends s.Component{constructor(){super(...arguments),this.goBack=(()=>{this.props.dispatch(c.routerRedux.goBack())})}componentDidMount(){var e=this.props.match.params.id;this.props.dispatch({type:"dataRelationship/getConfig",payload:e})}render(){var e=this.props.dataRelationship.confObj,t=e.config,a=e.isIncrement,n=e.type,o=e.datadate;return s.default.createElement("div",null,s.default.createElement(d.default,{onClick:this.goBack,style:{marginBottom:10}},"\u8fd4\u56de"),s.default.createElement("div",null,0!==a&&o&&s.default.createElement("div",null,"\u589e\u91cf\u53c2\u6570\uff1a",o)),s.default.createElement("h2",null,u[n],"\uff1a"),s.default.createElement("div",{style:{whiteSpace:"pre-wrap"}},t))}},i=r))||i),f=h;t.default=f}}]);