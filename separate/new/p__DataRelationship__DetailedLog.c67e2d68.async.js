(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"c3e+":function(t,e,n){"use strict";var a=n("g09b"),o=n("tAuX");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("+L6B");var c,u,r,l=a(n("2/Rp")),i=a(n("2Taf")),d=a(n("vZ4D")),f=a(n("l4Ni")),s=a(n("ujKo")),h=a(n("MhPg")),p=o(n("q1tI")),v=n("7DNP"),g=n("MuoO"),m=a(n("Qyje")),w=(c=(0,g.connect)(),c((r=function(t){function e(){var t,n;(0,i.default)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=(0,f.default)(this,(t=(0,s.default)(e)).call.apply(t,[this].concat(o))),n.state={html:""},n.goBack=function(){n.props.dispatch(v.routerRedux.goBack())},n}return(0,h.default)(e,t),(0,d.default)(e,[{key:"componentDidMount",value:function(){var t=this,e=m.default.parse(this.props.location.search,{ignoreQueryPrefix:!0}),n=e.path;fetch("".concat(location.origin).concat(location.pathname,"dataxlog/").concat(n)).then(function(t){return t.text()}).then(function(e){t.setState({html:e})})}},{key:"render",value:function(){return p.default.createElement("div",null,p.default.createElement(l.default,{onClick:this.goBack},"\u8fd4\u56de"),p.default.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.html},style:{whiteSpace:"pre-wrap"}}))}}]),e}(p.Component),u=r))||u),y=w;e.default=y}}]);