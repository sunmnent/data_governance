(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"/HqL":function(e,t,a){e.exports={all:"all___-yyh-",flex:"flex___ExNjL",tree:"tree___1ObeX",right:"right___1JT8J",form:"form___2oQpP"}},mjdS:function(e,t,a){"use strict";var l=a("g09b"),i=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var d=l(a("kLXV"));a("g9YV");var s=l(a("wCAj"));a("+L6B");var r=l(a("2/Rp"));a("5NDa");var o=l(a("5rEg"));a("T2oS");var n=l(a("W9HT"));a("ozfa");var c=l(a("MJZm")),u=l(a("p0pE"));a("Pwec");var p=l(a("CtXQ"));a("iQDF");var h=l(a("+eQT"));a("y8nQ");var m,y,f,g=l(a("Vl3Y")),b=i(a("q1tI")),v=a("MuoO"),x=a("7DNP"),S=l(a("cVA7")),k=l(a("MT78")),T=l(a("LvDl")),E=l(a("Qyje")),Q=l(a("eJJh")),w=a("Jur2"),N=l(a("/HqL")),I=g.default.Item,C=h.default.RangePicker,D=10,L=(m=(0,v.connect)(e=>{var t=e.dataQuality,a=e.loading;return{dataQuality:t,loading:a}}),m((f=class extends b.Component{constructor(){super(...arguments),this.state={modalData:{},analysisModal:{}},this.columns=[{title:"\u8868\u540d",width:"20%",dataIndex:"tableChineseName",sorter:!0,render:(e,t)=>b.default.createElement("span",{onClick:this.clickTableName.bind(this,t),className:"can-click"},e)},{title:"\u5b57\u6bb5\u603b\u6570",width:"15%",dataIndex:"dataItemSize"},{title:"\u68c0\u6838\u5b57\u6bb5\u6570",width:"15%",dataIndex:"checkDataItemSize"},{title:"\u68c0\u6838\u65e5\u671f",width:"20%",dataIndex:"checkTime",key:"checkTime"},{title:"\u95ee\u9898\u7387",width:"20%",dataIndex:"problemRatio",render:e=>b.default.createElement("span",null,null!==e?"".concat(e,"%"):"")},{title:"\u8d8b\u52bf",width:"10%",render:(e,t)=>b.default.createElement(p.default,{onClick:this.clickTrend.bind(this,t),type:"area-chart",className:"can-click",title:"\u8d8b\u52bf"})},{title:"\u5206\u6790",width:"10%",render:(e,t)=>b.default.createElement(p.default,{onClick:this.clickAnalysis.bind(this,t),type:"dashboard",className:"can-click",title:"\u5206\u6790"})}],this.clickTableName=(e=>{this.props.dispatch(x.routerRedux.push("/dataquality/dataqualityanalysis?checkTable=".concat(e.tableId)))}),this.clickAnalysis=(e=>{this.setState({analysisModal:e})}),this.cancelAnalysisModal=(()=>{this.setState({analysisModal:{}})}),this.handleTableChange=((e,t,a)=>{var l=a.field?T.default.snakeCase(a.field):"",i="";"descend"===a.order?i="desc":"ascend"===a.order&&(i="asc");var d=this.props.dataQuality.qualityReportList.params,s=void 0===d?{}:d,r=(0,u.default)({},s,{pageParam:{pageSize:D,pageNum:e.current}});l.length&&(r.orderColumn=l),i.length&&(r.orderBy=i),this.props.dispatch({type:"dataQuality/getQualityReport",payload:r})}),this.handleSubmit=(e=>{e.preventDefault(),this.props.form.validateFields((e,t)=>{if(!e){t.checkTime&&(t.checkTimeStart=t.checkTime[0],t.checkTimeEnd=t.checkTime[1],delete t.checkTime);var a=this.props.dataQuality.qualityReportList.params,l=void 0===a?{}:a;this.props.dispatch({type:"dataQuality/getQualityReport",payload:(0,u.default)({},l,t,{pageParam:{pageNum:1,pageSize:D}})})}})}),this.onSelect=((e,t)=>{var a=this.props.dataQuality.qualityReportList.params,l=void 0===a?{}:a;this.props.dispatch({type:"dataQuality/getQualityReport",payload:(0,u.default)({},l,{pageParam:{pageNum:1,pageSize:D},systemId:e[0]})})}),this.clickTrend=(e=>{this.setState({modalData:e}),this.props.dispatch({type:"dataQuality/getQualityReportTrend",payload:{tableId:e.tableId}})}),this.modalClose=(()=>{this.setState({modalData:{}})}),this.chartOption=(()=>{var e=this.props.dataQuality.qualityReportTrend,t=void 0===e?[]:e,a=[],l=[];t.forEach(e=>{a.push(e.checkTime),l.push(e.problemTotalRatio)});var i={tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#ddd"}},backgroundColor:"rgba(255,255,255,1)",padding:[5,10],textStyle:{color:"#7588E4"},extraCssText:"box-shadow: 0 0 5px rgba(0,0,0,0.3)"},legend:{right:20,orient:"vertical"},xAxis:{type:"category",data:a,boundaryGap:!1,splitLine:{show:!0,interval:"auto",lineStyle:{color:["#eee"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{margin:10,textStyle:{fontSize:12,color:"#777"}}},yAxis:{name:"\u95ee\u9898\u7387%",type:"value",splitLine:{lineStyle:{color:["#eee"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{margin:5,textStyle:{fontSize:14,color:"#777"}}},series:[{name:"\u95ee\u9898\u7387",type:"line",smooth:!0,showSymbol:!1,symbol:"circle",symbolSize:6,data:l,areaStyle:{normal:{color:new k.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(189, 224, 253, 1)"},{offset:1,color:"rgba(189, 224, 253, 1)"}],!1)}},itemStyle:{normal:{color:"#2e9afe"}},lineStyle:{normal:{width:3}}}]};return t.length>5&&(i.dataZoom=[{type:"slider",xAxisIndex:[0],startValue:0,endValue:5},{type:"inside",xAxisIndex:[0],startValue:0,endValue:5}]),i}),this.getDefaultValue=((e,t)=>{if(void 0===e){var a=this.props.dataQuality.qualityReportList.params,l=void 0===a?{}:a;return"checkTime"===t?[l.checkTimeStart,l.checkTimeEnd]:l[t]}})}componentDidMount(){this.props.dispatch({type:"dataQuality/querySystemByUserIdAndDept"});var e=E.default.parse(this.props.location.search,{ignoreQueryPrefix:!0}),t=e.id;this.props.dispatch({type:"dataQuality/getQualityReport",payload:{pageParam:{pageNum:1,pageSize:D},systemId:t}})}render(){var e=this.props.form.getFieldDecorator,t=this.props.dataQuality,a=t.qualityReportList,l=t.systems,i=a.list,u=void 0===i?[]:i,p=this.state,h=p.analysisModal,m=p.modalData,y=E.default.parse(this.props.location.search,{ignoreQueryPrefix:!0}),f=y.id;return b.default.createElement("div",{className:N.default.all},b.default.createElement("div",{className:N.default.flex},b.default.createElement(n.default,{spinning:this.props.loading.effects["dataQuality/querySystemByUserIdAndDept"]},l.length&&b.default.createElement(c.default,{onSelect:this.onSelect,className:N.default.tree,defaultSelectedKeys:[f||this.getDefaultValue(f,"systemId")],defaultExpandAll:!0},(0,w.generateCheckTableName)(l,2))),b.default.createElement("div",{className:N.default.right},b.default.createElement(g.default,{layout:"inline",onSubmit:this.handleSubmit,className:N.default.form},b.default.createElement(I,{label:"\u8868\u540d"},e("tableName",{initialValue:this.getDefaultValue(f,"tableName")})(b.default.createElement(o.default,{placeholder:"\u8bf7\u8f93\u5165\u8868\u540d",style:{width:150}}))),b.default.createElement(I,{label:"\u68c0\u6838\u65e5\u671f"},e("checkTime",{initialValue:this.getDefaultValue(f,"checkTime")})(b.default.createElement(C,{style:{width:250}}))),b.default.createElement(I,null,b.default.createElement(r.default,{type:"primary",htmlType:"submit"},"\u641c\u7d22"))),b.default.createElement(s.default,{onChange:this.handleTableChange,rowKey:"tableId",columns:this.columns,dataSource:u,loading:this.props.loading.effects["dataQuality/getQualityReport"],pagination:{current:a.pageNum,total:a.total}}))),b.default.createElement(d.default,{title:"\u8d8b\u52bf\u5206\u6790",visible:void 0!==m.tableId,onCancel:this.modalClose,footer:null,width:760},b.default.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:20}},b.default.createElement("div",null,"\u8868\u540d\uff1a",m.tableChineseName),b.default.createElement("div",null,"\u5b57\u6bb5\u603b\u6570\uff1a",m.dataItemSize),b.default.createElement("div",null,"\u68c0\u6838\u5b57\u6bb5\u6570\uff1a",m.checkDataItemSize)),b.default.createElement(S.default,{option:this.chartOption(),style:{height:"300px"}})),b.default.createElement(d.default,{title:"\u5206\u6790",visible:void 0!==h.tableId,onCancel:this.cancelAnalysisModal,footer:null,width:1e3},h.tableId&&b.default.createElement(Q.default,{tableName:h.tableName,tableNameCN:h.tableChineseName,datasourceId:h.tableId,type:2,height:300})))}},y=f))||y),R=g.default.create()(L);t.default=R}}]);