(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{pfTy:function(o,t,e){"use strict";var n=e("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("T2oS");var a=n(e("W9HT")),r=n(e("2Taf")),c=n(e("vZ4D")),l=n(e("l4Ni")),i=n(e("ujKo")),u=n(e("MhPg")),s=n(e("q1tI")),f=e("7DNP"),d=e("gEL2"),h=location,p=h.host,g=function(o){function t(){var o,e;(0,r.default)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return e=(0,l.default)(this,(o=(0,i.default)(t)).call.apply(o,[this].concat(a))),e.init=function(){(0,d.casLogin)().then(function(o){if(sessionStorage.clear(),2===o.errorCode)f.routerRedux.push("/login");else if(3===o.errorCode)f.routerRedux.push("/logout");else{var t=o.obj,e=t.CURRENT_NAME_CN,n=t.CURRENT_USER_ID,a=t.token,r=t.isAdmin;localStorage.token=a,localStorage.userID=n,localStorage.nameCn=e,localStorage.authority=r?"admin":"user",localStorage.isCas=!0;var c="http://".concat(p,"/?token=").concat(a,"&nameCn=").concat(e,"&accountId=").concat(n);window.location.href=c}})},e}return(0,u.default)(t,o),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillUnmount",value:function(){if(localStorage.isCas){var o={},t="",e="".concat(location.protocol,"//").concat(location.host,"/").concat(location.hash);history.pushState(o,t,e)}}},{key:"render",value:function(){return s.default.createElement(a.default,{size:"large",tip:"\u767b\u5f55...",style:{marginBottom:160}})}}]),t}(s.default.PureComponent);t.default=g}}]);