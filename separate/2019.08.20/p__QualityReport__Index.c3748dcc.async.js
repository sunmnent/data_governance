(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{RBDf:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.analysisReportCountType=o,t.analysisReportCountMethodGroup=s,t.reportCountMethod=i,t.analysisReportCountMethodCurDate=r,t.analysisQueryEffectivCheckType=u,t.queryAnalysisReport=d;var n=l(a("t3Un"));function o(e){return(0,n.default)("/analysisReport/countType",{method:"GET"})}function s(e){return(0,n.default)("/analysisReport/countMethodGroup",{method:"GET"})}function i(e){return(0,n.default)("/analysisReport/countMethod",{method:"GET"})}function r(e){return(0,n.default)("/analysisReport/countMethodCurDate",{method:"GET"})}function u(e){return(0,n.default)("/checkType/queryEffectivCheckType",{method:"GET"})}function d(e){return(0,n.default)("/analysisReport/queryAnalysisReport",{method:"GET",params:e})}},SAkk:function(e,t,a){},YyEA:function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var o=n(a("2/Rp"));a("14J3");var s=n(a("BMrR")),i=n(a("2Taf")),r=n(a("vZ4D")),u=n(a("l4Ni")),d=n(a("ujKo")),c=n(a("MhPg"));a("iQDF");var f=n(a("+eQT"));a("Znn+");var m=n(a("ZTPi"));a("OaEy");var p=n(a("2fM7")),y=l(a("q1tI")),h=n(a("cVA7"));n(a("tnG5")),n(a("wd/R")),n(a("Mosh"));a("SAkk"),a("NS7E"),a("glzp");var g=a("RBDf"),v=p.default.Option,x=m.default.TabPane,E=(f.default.MonthPicker,f.default.RangePicker),S=(f.default.WeekPicker,{title:{text:"\u68c0\u6838\u7c7b\u522b\u5bf9\u5e94\u7684\u68c0\u6838\u65b9\u6cd5\u6570\u91cf\u5206\u6790"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["\u65b9\u6cd5\u6570","\u89c4\u5219\u6570"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:["\u7a7a\u503c\u68c0\u6838","\u8bb0\u5f55\u6570\u68c0\u6838","\u975e\u6cd5\u503c\u68c0\u6838","\u7801\u503c\u68c0\u6838","\u4e3b\u952e\u91cd\u590d\u68c0\u6838","\u4e3b\u5916\u952e\u68c0\u6838","\u4e1a\u52a1\u7ea6\u675f\u68c0\u6838"]},yAxis:{type:"value"},series:[{name:"\u65b9\u6cd5\u6570",type:"bar",data:[320,302,301,334,390,330,320]},{name:"\u89c4\u5219\u6570",type:"bar",data:[120,132,101,134,90,230,210]}]}),N={title:{text:"\u8d28\u91cf\u7ef4\u5ea6"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["\u65b9\u6cd5\u6570","\u89c4\u5219\u6570"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:["\u7a7a\u503c\u68c0\u6838","\u8bb0\u5f55\u6570\u68c0\u6838","\u975e\u6cd5\u503c\u68c0\u6838","\u7801\u503c\u68c0\u6838","\u4e3b\u952e\u91cd\u590d\u68c0\u6838","\u4e3b\u5916\u952e\u68c0\u6838","\u4e1a\u52a1\u7ea6\u675f\u68c0\u6838"]},yAxis:{type:"value"},series:[{name:"\u65b9\u6cd5\u6570",type:"bar",data:[320,302,301,334,390,330,320]},{name:"\u89c4\u5219\u6570",type:"bar",data:[120,132,101,134,90,230,210]}]},k=function(e){function t(){var e,a;(0,i.default)(this,t);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return a=(0,u.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(n))),a.state={lx:"",jgffz:"",jhff:"",xzjhff:"",data:["",""],checkType:"",checkName:[],proTimes:"",proCountRate:""},a.chartOption=function(){var e={tooltip:{trigger:"axis",formatter:function(e){var t=e[0].data,a=e[0].axisValue,l="<div>";return l+=a+"<br/>",l+="\u6570\u636e\u8d28\u91cf\u7cfb\u7edf:"+t+"%<br/>",l+="</div>",l}},legend:{data:["\u6570\u636e\u8d28\u91cf\u7cfb\u7edf"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:a.state.proTimes},yAxis:{type:"value",name:"\u95ee\u9898\u7387",axisLabel:{formatter:"{value} %"}},series:[{name:"\u6570\u636e\u8d28\u91cf\u7cfb\u7edf",type:"line",smooth:!0,data:a.state.proCountRate}]};return e},a.onChangeTime=function(e,t){console.log(181181,e,t),a.setState({startTime:t[0],endTime:t[1]})},a.typeNum=function(){(0,g.analysisReportCountType)().then(function(e){var t=e.obj;a.setState({lx:t})})},a.groupTypeTotalNum=function(){(0,g.analysisReportCountMethodGroup)().then(function(e){var t=e.obj;a.setState({jgffz:t})})},a.typeTotalNum=function(){(0,g.reportCountMethod)().then(function(e){var t=e.obj;a.setState({jhff:t})})},a.reportCountMethodCurDate=function(){(0,g.analysisReportCountMethodCurDate)().then(function(e){var t=e.obj;a.setState({xzjhff:t})})},a.queryEffectivCheckType=function(){(0,g.analysisQueryEffectivCheckType)().then(function(e){console.log(209,e);var t=[];e&&e.length>0&&(t=e.map(function(e,t){return y.default.createElement(v,{value:e.id,key:e.id},e.checkName)})),a.setState({checkName:t},function(){console.log(221,a.state.checkName)})})},a.getqueryAnalysisReport=function(){(0,g.queryAnalysisReport)({startTime:a.state.startTime,endTime:a.state.endTime,checkTypeId:Number(a.state.checkType)||""}).then(function(e){console.log(263,e);var t=e.obj,l=[],n=[];e.obj&&e.obj.length>0&&t.map(function(e,t){l.push(e.times),n.push(e.countRate)}),a.setState({proTimes:l,proCountRate:n},function(){console.log(287,a.state.proTimes,a.state.proCountRate)})})},a.onChange=function(e,t){a.setState({date:[t[0],t[1]]})},a.onChange1=function(e,t){console.log(242,e,t),a.setState({date:[t[0].format("YYYY-MM-DD"),t[1].format("YYYY-MM-DD")]},function(){console.log(247,a.state.startTime)})},a.onChangeSelect=function(e){console.log(300,e),a.setState({checkType:e})},a}return(0,c.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.typeNum(),this.groupTypeTotalNum(),this.typeTotalNum(),this.reportCountMethodCurDate(),this.queryEffectivCheckType(),this.getqueryAnalysisReport()}},{key:"render",value:function(){var e=this.state,t=e.lx,a=e.jgffz,l=e.jhff,n=e.xzjhff;e.date,e.checkType;return y.default.createElement("div",null,y.default.createElement(s.default,{className:"padding-left-right20"},"\u6570\u636e\u8d28\u91cf\u5e73\u53f0\u6709\uff1a",y.default.createElement("strong",{className:"color-red"},t),"\u4e2a\u7c7b\u578b\uff0c",y.default.createElement("strong",{className:"color-red"},a),"\u4e2a\u68c0\u6838\u65b9\u6cd5\u7ec4\uff0c",y.default.createElement("strong",{className:"color-red"},l),"\u4e2a\u68c0\u6838\u65b9\u6cd5\uff0c \u672c\u6708\u65b0\u589e",y.default.createElement("strong",{className:"color-red"},n),"\u4e2a\u68c0\u6838\u65b9\u6cd5."),y.default.createElement(s.default,{className:"padding-top-bottom10 padding-left-right20"},y.default.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},y.default.createElement("div",{style:{marginRight:"10px"}},y.default.createElement(E,{onChange:this.onChangeTime})),y.default.createElement("div",{style:{marginRight:"5px"}},y.default.createElement(p.default,{showSearch:!0,style:{width:250},placeholder:"",optionFilterProp:"children",onChange:this.onChangeSelect,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},this.state.checkName)),y.default.createElement("div",null,y.default.createElement(o.default,{type:"primary",icon:"search",size:"default",onClick:this.getqueryAnalysisReport},"\u641c\u7d22")))),y.default.createElement("div",{className:"margin-top10 padding20",style:{borderTop:"1px solid #eee"}},y.default.createElement(h.default,{option:this.chartOption(),notMerge:!0,theme:"gw",style:{height:320}})))}}]),t}(y.Component),b=function(e){function t(){var e,a;(0,i.default)(this,t);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return a=(0,u.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(n))),a.state={},a}return(0,c.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return y.default.createElement("div",null,y.default.createElement("div",{className:"margin-top10 padding20"},y.default.createElement(h.default,{option:S,notMerge:!0,theme:"gw",style:{height:320}})),y.default.createElement("div",{className:"margin-top10 padding20"},y.default.createElement(h.default,{option:N,notMerge:!0,theme:"gw",style:{height:320}})))}}]),t}(y.Component),B=function(e){function t(){var e,a;(0,i.default)(this,t);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return a=(0,u.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(n))),a.state={},a}return(0,c.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return y.default.createElement(m.default,{defaultActiveKey:"1",className:"bg-white"},y.default.createElement(x,{tab:"\u6570\u636e\u8d28\u91cf\u5206\u6790\u62a5\u544a",key:"1"},y.default.createElement(k,null)),y.default.createElement(x,{tab:"\u68c0\u6838\u65b9\u6cd5\u5206\u6790\u62a5\u544a",key:"2"},y.default.createElement(b,null)))}}]),t}(y.Component);t.default=B},glzp:function(e,t,a){},m7d2:function(e,t,a){},tnG5:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("p0pE"));a("Xi6J");var o=l(a("kl6h"));a("5NDa");var s=l(a("5rEg")),i=l(a("jehZ")),r=l(a("2Taf")),u=l(a("vZ4D")),d=l(a("l4Ni")),c=l(a("ujKo")),f=l(a("MhPg"));a("iQDF");var m=l(a("+eQT"));a("OaEy");var p=l(a("2fM7")),y=l(a("q1tI")),h=l(a("LvDl")),g=l(a("wd/R")),v=l(a("Mosh"));a("m7d2");var x=p.default.Option,E=m.default.MonthPicker,S=m.default.RangePicker,N=function(e,t){if(g.default.isMoment(t))return e=t,e},k={style:{className:"",css:{}},boxs:[]},b={type:1,show:!0,SBox:{style:{className:"",css:{}},setting:{}},SBoxLabel:{show:!1,text:"",style:{className:"",css:{}},setting:{}},SBoxEdit:{show:!0,style:{className:"",css:{}},setting:{}},SBoxEditItem:{style:{className:"",css:{}},allOption:{show:!0,option:{id:"",text:"\u5168\u90e8"}},data:[],setting:{},options:"",optionsSetting:{setKey:function(e,t,a,l){return v.default.uuid()+l},setValue:function(e,t,a,l){return e[t]+""},setText:function(e,t,a,l){return e[a]},setTitle:function(e,t,a,l){return e[a]}},valueField:"id",textField:"text"}},B=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,d.default)(this,(0,c.default)(t).call(this,e)),a.produceBox=function(e,t){if(v.default.isNull(e))return null;var l;e=h.default.mergeWith({},b,e,N);var n=a.resolveProps[e.type]?a.resolveProps[e.type](e):"";switch(e.type.toString()){case"1":case"select":l=y.default.createElement(p.default,(0,i.default)({},e.SBoxEditItem.setting,{className:"S-Box-edit-item "+e.SBoxEditItem.style.className,style:e.SBoxEditItem.style.css}),n);break;case"1_1":case"input":l=y.default.createElement(s.default,(0,i.default)({},e.SBoxEditItem.setting,{className:"S-Box-edit-item "+e.SBoxEditItem.style.className,style:e.SBoxEditItem.style.css}));break;case"2":case"datepicker":l=y.default.createElement(m.default,(0,i.default)({},e.SBoxEditItem.setting,{className:"S-Box-edit-item "+e.SBoxEditItem.style.className,style:e.SBoxEditItem.style.css}));break;case"2_1":case"monthpicker":l=y.default.createElement(E,(0,i.default)({allowClear:!1},e.SBoxEditItem.setting,{className:"S-Box-edit-item "+e.SBoxEditItem.style.className,style:e.SBoxEditItem.style.css}));break;case"2_2":case"rangepicker":l=y.default.createElement(S,(0,i.default)({allowClear:!1},e.SBoxEditItem.setting,{className:"S-Box-edit-item "+e.SBoxEditItem.style.className,style:e.SBoxEditItem.style.css}));break;case"3":case"timepicker":l=y.default.createElement(o.default,(0,i.default)({allowClear:!1},e.SBoxEditItem.setting,{className:"S-Box-edit-item "+e.SBoxEditItem.style.className,style:e.SBoxEditItem.style.css}));break}return!0===e.show?y.default.createElement("div",(0,i.default)({key:t,className:"S-Box "+e.SBox.style.className,style:e.SBox.style.css},e.SBox.setting),1==e.SBoxLabel.show?y.default.createElement("label",(0,i.default)({className:"S-Box-label "+e.SBoxLabel.style.className,style:e.SBoxLabel.style.css},e.SBoxLabel.setting),e.SBoxLabel.text):"",y.default.createElement("div",(0,i.default)({className:"S-Box-edit "+e.SBoxEdit.style.className,style:e.SBoxEdit.style.css},e.SBoxEdit.setting),l)):null},a.resolveProps={1:function(e){var t=e.SBoxEditItem,a=t.options;if(v.default.notNull(a))return a;var l=t.allOption,n=t.data,o=t.valueField,s=void 0===o?"id":o,r=t.textField,u=void 0===r?"text":r,d=t.optionsSetting;if(v.default.notNull(n)){var c="",f="",m="",p="";if(a=n.map(function(t,a){return c=d.setValue(t,s,u,a),f=d.setText(t,s,u,a),m=d.setKey(t,s,u,a),p=d.setTitle(t,s,u,a),y.default.createElement(x,(0,i.default)({key:m,value:c,title:p},e.SBoxEditItem.optionsSetting),f)}),l.show){var g={};g[s]="0",g[u]="\u5168\u90e8",g=h.default.merge(g,l.option||{}),a.unshift(y.default.createElement(x,{key:g[s],value:g[s]+"",title:g[u]},g[u]))}}return a}},a.state=(0,n.default)({},e),a}return(0,f.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState((0,n.default)({},e))}},{key:"render",value:function(){var e=this.state.options,t=e.style,a=void 0===t?{}:t,l=e.boxs,n=void 0===l?[]:l,o=h.default.merge({},k.style,a);return y.default.createElement("div",{className:"S-Boxs "+o.className,style:o.css},v.default.isNull(n)?null:n.map(this.produceBox))}}]),t}(y.default.Component);t.default=B}}]);