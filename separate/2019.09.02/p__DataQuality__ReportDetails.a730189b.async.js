(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"2gjs":function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a("q1tI")),d=l(a("lfuW"));class i extends r.Component{constructor(){super(...arguments),this.getOption=(()=>{var e=this.props.data.map(e=>({name:e.tableChineseName||e.systemName,value:e.rowNum,tableId:e.tableId,systemId:e.systemId}));return{title:{text:"\u6570\u636e\u5206\u5e03\u56fe",textStyle:{fontSize:15}},tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},series:[{name:"\u8bbf\u95ee\u6765\u6e90",type:"pie",radius:"55%",center:["50%","60%"],data:e,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},label:{show:e.length<15}}]}}),this.onChartClick=(e=>{this.props.getProblemTrend({tableId:e.data.tableId,systemId:e.data.systemId,systemName:e.data.name})})}render(){return r.default.createElement(d.default,{option:this.getOption(),onEvents:{click:this.onChartClick},showLoading:this.props.showLoading})}}var o=i;t.default=o},PkxW:function(e,t,a){"use strict";var l=a("tAuX"),s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,d,i,o=l(a("q1tI")),n=s(a("lfuW")),u=a("7DNP"),c=a("MuoO"),m=(r=(0,c.connect)(),r((i=class extends o.Component{constructor(){super(...arguments),this.getOption=(()=>{var e=this.props.data,t=e.xAxis,a=e.series,l=void 0===a?[]:a,s=["#1890FF","#FACC14","#2FC25B"];return{title:{text:"\u6570\u636e\u8d28\u91cf\u5206\u5e03",textStyle:{fontSize:15}},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},xAxis:[{type:"category",data:t}],yAxis:[{type:"value"},{type:"value",axisLabel:{formatter:"{value}%"}}],series:l.map((e,t)=>({name:e.name,type:l.length-1===t?"line":"bar",yAxisIndex:l.length-1===t?1:0,data:e.data,itemStyle:{color(e){return s[e.seriesIndex]}},lineStyle:{color:s[2]}}))}}),this.onChartClick=(e=>{var t=this.props.data.tableModels,a=void 0===t?[]:t,l=a.find(t=>t.tableNameCn===e.name);this.props.dispatch(u.routerRedux.push("/dataquality/dataqualityanalysis?checkTable=".concat(l.id)))})}render(){return o.default.createElement(n.default,{scaleFactor:10,option:this.getOption(),onEvents:{click:this.onChartClick},showLoading:this.props.showLoading})}},d=i))||d),p=m;t.default=p},Qb0y:function(e,t,a){e.exports={flex:"flex___2VwR9",item:"item___b34Zn",big:"big___1VRWv"}},RTqe:function(e,t,a){"use strict";var l=a("tAuX"),s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var r=s(a("W9HT")),d=l(a("q1tI")),i=s(a("lfuW")),o=s(a("Qb0y"));class n extends d.Component{constructor(){super(...arguments),this.getOption=(()=>{return{series:[{type:"liquidFill",data:[(this.props.data.problemRatio||0)/100],radius:"80%",color:["#FAAD14"],backgroundStyle:{borderWidth:5,borderColor:"#FAAD14",color:"white"},outline:{show:!1},label:{formatter(e){return"\u6570\u636e\u8d28\u91cf\u95ee\u9898\u7387\n\n".concat((100*e.value).toFixed(4),"%")},fontSize:15,color:"#666666"}}]}})}render(){var e=this.props.data,t=e.tableNum,a=e.qualityDimensionNum,l=e.checkMethodNum,s=e.dataItemNum,n=e.totalRecords,u=e.problemTableNum,c=e.problemDataItemNum,m=e.problemRecords,p=e.resolvedNum,f=e.notResolvedNum,y=e.newNum,h=e.minitorDataItemNum,g=e.minitorDataItemProblemRatio,v=e.TableToexamineNum;return d.default.createElement(r.default,{spinning:this.props.showLoading},d.default.createElement("div",{className:o.default.flex},d.default.createElement(i.default,{option:this.getOption(),className:o.default.item}),d.default.createElement("div",{className:o.default.item},d.default.createElement("div",null,d.default.createElement("span",{className:o.default.big},"\u603b\u4f53\u6982\u51b5\uff1a",v),"\u5f20\u603b\u8868\u6570\uff0c",d.default.createElement("span",{className:o.default.big},t),"\u5f20\u68c0\u6838\u8868\uff0c",d.default.createElement("span",{className:o.default.big},s),"\u4e2a\u5b57\u6bb5\uff0c",d.default.createElement("span",{className:o.default.big},n),"\u6761\u6570\u636e\u91cf"),d.default.createElement("div",null,d.default.createElement("span",{className:o.default.big},"\u8d28\u91cf\u60c5\u51b5\uff1a"),"\u95ee\u9898\u8868",d.default.createElement("span",{className:o.default.big},u),"\u4e2a\uff0c\u95ee\u9898\u5b57\u6bb5",d.default.createElement("span",{className:o.default.big},c),"\u4e2a\uff0c\u95ee\u9898\u6570\u636e",d.default.createElement("span",{className:o.default.big},m),"\u6761"),d.default.createElement("div",null,d.default.createElement("span",{className:o.default.big},"\u95ee\u9898\u8be6\u60c5\uff1a"),"\u5df2\u89e3\u51b3",d.default.createElement("span",{className:o.default.big},p||0),"\u6761\uff0c\u672a\u89e3\u51b3",d.default.createElement("span",{className:o.default.big},f||0),"\u6761\uff0c\u65b0\u589e\u95ee\u9898\u6570\u636e",d.default.createElement("span",{className:o.default.big},y||0),"\u6761"),d.default.createElement("div",null,d.default.createElement("span",{className:o.default.big},"\u91cd\u70b9\u5b57\u6bb5\u60c5\u51b5\uff1a"),"\u91cd\u70b9\u5b57\u6bb5\u6570",d.default.createElement("span",{className:o.default.big},h),"\u4e2a\uff0c\u91cd\u70b9\u5b57\u6bb5\u7684\u95ee\u9898\u7387",d.default.createElement("span",{className:o.default.big},g,"%")),d.default.createElement("div",null,d.default.createElement("span",{className:o.default.big},"\u68c0\u6838\u6982\u51b5\uff1a"),"\u68c0\u6838\u7ef4\u5ea6",d.default.createElement("span",{className:o.default.big},a),"\u79cd\uff0c\u68c0\u6838\u65b9\u6cd5\u6570",d.default.createElement("span",{className:o.default.big},l,"\u4e2a")))))}}var u=n;t.default=u},T1SV:function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a("q1tI")),d=l(a("lfuW"));class i extends r.Component{constructor(){super(...arguments),this.getOption=(()=>{var e=this.props.data,t=e.outData,a=void 0===t?[]:t,l=e.innerData,s=void 0===l?[]:l;return{title:{text:"\u68c0\u6838\u6982\u51b5",textStyle:{fontSize:15}},series:[{type:"pie",selectedMode:"single",radius:[0,"30%"],labelLine:{normal:{show:!1}},data:s},{type:"pie",radius:["40%","55%"],data:a}]}})}render(){return r.default.createElement(d.default,{option:this.getOption(),showLoading:this.props.showLoading})}}var o=i;t.default=o},YGni:function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=l(a("2/Rp"));a("OaEy");var d,i,o,n=l(a("2fM7")),u=s(a("q1tI")),c=a("MuoO"),m=a("7DNP"),p=l(a("Qyje")),f=l(a("RTqe")),y=l(a("2gjs")),h=l(a("lh4y")),g=l(a("PkxW")),v=l(a("zAr6")),b=l(a("T1SV")),E=l(a("bDm2")),x=l(a("kMdi")),N=n.default.Option,I=(d=(0,c.connect)(e=>{var t=e.dataQuality,a=e.loading;return{dataQuality:t,loading:a}}),d((o=class extends u.Component{constructor(){super(...arguments),this.goBack=(()=>{this.props.dispatch(m.routerRedux.goBack())}),this.handleChange2=(e=>{var t=p.default.parse(this.props.location.search,{ignoreQueryPrefix:!0}),a=t.systemId;this.props.dispatch({type:"dataQuality/getSystemQualityHistory",payload:{systemId:a,cycle:e}})}),this.handleChange=(e=>{var t=this.props.dataQuality.problemTrend,a=t.tableId,l=t.systemId,s=t.systemName;this.getProblemTrend({tableId:a,systemId:l,cycle:e,systemName:s})}),this.getProblemTrend=(e=>{var t=e.tableId,a=e.systemId,l=e.cycle,s=void 0===l?this.props.dataQuality.problemTrend.cycle:l,r=e.systemName;this.props.dispatch({type:"dataQuality/getProblemTrend",payload:{tableId:t,systemId:a,cycle:void 0===s?0:s,systemName:r}})})}componentDidMount(){var e=p.default.parse(this.props.location.search,{ignoreQueryPrefix:!0}),t=e.systemId;this.props.dispatch({type:"dataQuality/getDataOverview",payload:{systemId:t}}).then(e=>{e&&e[0]?this.getProblemTrend({tableId:e[0].tableId,systemId:e[0].systemId,cycle:0,systemName:e[0].tableChineseName||e[0].systemName}):this.props.dispatch({type:"dataQuality/save",payload:{problemTrend:{}}})}),this.props.dispatch({type:"dataQuality/getSystemQualityHistory",payload:{systemId:t,cycle:0}}),this.props.dispatch({type:"dataQuality/getQualityDistribution",payload:{systemId:t}}),this.props.dispatch({type:"dataQuality/getCloudOverview",payload:{systemId:t}}),this.props.dispatch({type:"dataQuality/getCheckTypeOverview",payload:{systemId:t}}),this.props.dispatch({type:"dataQuality/getBaseInfo",payload:{systemId:t}})}render(){var e=this.props.dataQuality,t=e.dataOverview,a=e.systemQualityHistory,l=e.qualityDistribution,s=e.cloudOverview,d=e.checkTypeOverview,i=e.problemTrend,o=e.baseInfo,c=this.props.loading.effects,m=p.default.parse(this.props.location.search,{ignoreQueryPrefix:!0}),I=m.systemName,w=this.props.location.pathname;return u.default.createElement("div",null,"/dataquality/school"!==w&&u.default.createElement(r.default,{onClick:this.goBack},"\u8fd4\u56de"),u.default.createElement("div",{className:x.default.head},I,"\u6570\u636e\u8d28\u91cf\u62a5\u544a"),u.default.createElement("div",{className:x.default.flex},u.default.createElement("div",{className:x.default.item},u.default.createElement(f.default,{data:o,showLoading:c["dataQuality/getBaseInfo"]})),u.default.createElement("div",{className:x.default.item},u.default.createElement(n.default,{value:a.cycle,className:x.default.select,onChange:this.handleChange2},u.default.createElement(N,{value:0},"\u6309\u65e5\u7edf\u8ba1"),u.default.createElement(N,{value:1},"\u6309\u6708\u7edf\u8ba1")),u.default.createElement(h.default,{data:a,showLoading:c["dataQuality/getSystemQualityHistory"]}))),u.default.createElement(g.default,{data:l,showLoading:c["dataQuality/getQualityDistribution"]}),u.default.createElement("div",{className:x.default.flex},u.default.createElement("div",{className:x.default.item},u.default.createElement(y.default,{data:t,getProblemTrend:this.getProblemTrend,showLoading:c["dataQuality/getDataOverview"]})),u.default.createElement("div",{className:x.default.item},u.default.createElement(n.default,{value:i.cycle,className:x.default.select,onChange:this.handleChange},u.default.createElement(N,{value:0},"\u6309\u65e5\u7edf\u8ba1"),u.default.createElement(N,{value:1},"\u6309\u6708\u7edf\u8ba1")),u.default.createElement(E.default,{data:i,showLoading:c["dataQuality/getProblemTrend"]}))),u.default.createElement("div",{className:x.default.flex},u.default.createElement("div",{className:x.default.item},u.default.createElement(v.default,{data:s,showLoading:c["dataQuality/getCloudOverview"]})),u.default.createElement("div",{className:x.default.item},u.default.createElement(b.default,{data:d,showLoading:c["dataQuality/getCheckTypeOverview"]}))))}},i=o))||i),w=I;t.default=w},bDm2:function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a("q1tI")),d=l(a("lfuW"));class i extends r.Component{constructor(){super(...arguments),this.getOption=(()=>{var e=this.props.data,t=e.xAxis,a=e.series,l=void 0===a?[]:a,s=e.systemName,r=void 0===s?"":s;return{title:{text:"\u95ee\u9898\u7387\uff08".concat(r,"\uff09"),textStyle:{fontSize:15}},tooltip:{formatter(e){return"".concat(e.marker).concat(e.name,"\uff1a").concat(e.value,"%")}},xAxis:{type:"category",data:t},yAxis:{type:"value",axisLabel:{formatter(e,t){return"".concat(e,"%")}}},series:l.map(e=>({type:"line",smooth:!0,data:e.data}))}})}render(){return r.default.createElement(d.default,{option:this.getOption(),scaleFactor:10,showLoading:this.props.showLoading})}}var o=i;t.default=o},kMdi:function(e,t,a){e.exports={head:"head___1oPdo",flex:"flex___2QM3p",item:"item___fpscF",select:"select___bgLWu"}},lh4y:function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a("q1tI")),d=l(a("lfuW"));class i extends r.Component{constructor(){super(...arguments),this.getOption=(()=>{var e=this.props.data,t=e.xAxis,a=e.series,l=void 0===a?[]:a;return{title:{text:"\u6570\u636e\u8d28\u91cf\u8d8b\u52bf\u5206\u6790",textStyle:{fontSize:15}},tooltip:{formatter(e){return"".concat(e.marker).concat(e.name,"\uff1a").concat(e.value,"%")}},xAxis:{type:"category",data:t},yAxis:{type:"value",axisLabel:{formatter(e,t){return"".concat(e,"%")}}},series:l.map(e=>({type:"line",smooth:!0,data:e.data}))}})}render(){return r.default.createElement(d.default,{option:this.getOption(),scaleFactor:10,showLoading:this.props.showLoading})}}var o=i;t.default=o},zAr6:function(e,t,a){"use strict";var l=a("tAuX"),s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,d,i,o=l(a("q1tI")),n=s(a("lfuW")),u=a("MuoO"),c=(r=(0,u.connect)(),r((i=class extends o.Component{constructor(){super(...arguments),this.getOption=(()=>{var e=this.props.data,t=["#1890FF","#2FC25B","#FACC14","#8543E0","#13C2C2","#19B2FF","#FFB22B","#41D96F","#FC4B6C","#25D9D9","#9966FF","#E65CE6","#5975FF"];return{title:{text:"\u91cd\u70b9\u5b57\u6bb5\u4e91\u56fe",textStyle:{fontSize:15}},tooltip:{},series:[{type:"wordCloud",gridSize:1,sizeRange:[8,16],rotationRange:[-60,60],textStyle:{normal:{color(){return t[Math.floor(Math.random()*t.length)]}}},data:e.map(e=>({name:e.dataItemCnName,dataItemName:e.dataItemName,value:e.problemRatio}))}]}})}render(){return o.default.createElement(n.default,{option:this.getOption(),showLoading:this.props.showLoading})}},d=i))||d),m=c;t.default=m}}]);