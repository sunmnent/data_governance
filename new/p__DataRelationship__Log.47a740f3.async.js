(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{kr3q:function(t,a,e){"use strict";var i=e("g09b"),n=e("tAuX");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("g9YV");var l=i(e("wCAj"));e("+L6B");var o,d,s,r=i(e("2/Rp")),p=i(e("p0pE")),u=i(e("2Taf")),c=i(e("vZ4D")),h=i(e("l4Ni")),g=i(e("ujKo")),f=i(e("rlhR")),v=i(e("MhPg")),m=n(e("q1tI")),y=e("MuoO"),w=e("7DNP"),R=i(e("Qyje")),k=10,I=(o=(0,y.connect)(function(t){var a=t.dataRelationship,e=t.loading;return{dataRelationship:a,loading:e}}),o((s=function(t){function a(){var t,e;(0,u.default)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return e=(0,h.default)(this,(t=(0,g.default)(a)).call.apply(t,[this].concat(n))),e.columns=[{title:"\u5e8f\u53f7",dataIndex:"code",render:function(t,a,i){var n=e.props.dataRelationship.logObj.pageNum;return i+(n-1)*k+1},width:"5%"},{title:"\u4efb\u52a1",dataIndex:"taskName",width:"20%",render:function(t,a,i){return m.default.createElement("div",{className:"can-click",onClick:e.loadDetailedLog.bind((0,f.default)(e),a.path)},t)}},{title:"\u4efb\u52a1\u7c7b\u578b",dataIndex:"taskTypeDesc",width:"10%"},{title:"\u72b6\u6001",dataIndex:"statusDesc",width:"10%"},{title:"\u603b\u8bb0\u5f55\u6570",dataIndex:"totalRows",width:"10%"},{title:"\u5931\u8d25\u8bb0\u5f55\u6570",dataIndex:"failRows",width:"10%"},{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"startTime",width:"10%"},{title:"\u7ed3\u675f\u65f6\u95f4",dataIndex:"endTime",width:"10%"}],e.logWatch=function(t){3===t.status&&(e.interval=setInterval(function(){e.props.dispatch({type:"dataRelationship/logStateChange",payload:{id:t.id}}).then(function(t){var a=t.statusDesc,i=t.endTime;if(3!==t.status){var n=e.props.dataRelationship.logObj;n.list[0]||(n.list[0]={}),n.list[0].statusDesc=a,n.list[0].endTime=i,e.props.dispatch({type:"dataRelationship/save",payload:{logObj:n}}),e.interval&&clearInterval(e.interval)}})},8e3))},e.goBack=function(){e.props.dispatch(w.routerRedux.goBack())},e.loadDetailedLog=function(t){e.props.dispatch(w.routerRedux.push("/dataPreprocessing/detailedLog?path=".concat(t)))},e.changePage=function(t,a,i){e.interval&&clearInterval(e.interval);var n=e.props.dataRelationship.logObj.params;e.props.dispatch({type:"dataRelationship/getLog",payload:(0,p.default)({},n,{pageNum:t.current})})},e}return(0,v.default)(a,t),(0,c.default)(a,[{key:"componentDidMount",value:function(){var t=this,a=this.props,e=a.location,i=a.match,n=i.params.log,l=R.default.parse(e.search,{ignoreQueryPrefix:!0}).logType||"1";this.props.dispatch({type:"dataRelationship/getLog",payload:{pageNum:1,pageSize:k,id:n,logType:l}}).then(function(a){a&&a.list&&a.list.length&&t.logWatch(a.list[0])})}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var t=this.props.dataRelationship.logObj,a=t.list,e=t.pageNum,i=t.total;return m.default.createElement("div",null,m.default.createElement(r.default,{style:{marginBottom:10},onClick:this.goBack},"\u8fd4\u56de"),m.default.createElement(l.default,{onChange:this.changePage,columns:this.columns,dataSource:a,pagination:{total:i,current:e,pageSize:k},loading:this.props.loading.effects["dataRelationship/getLog"],rowKey:"id"}))}}]),a}(m.Component),d=s))||d),x=I;a.default=x}}]);