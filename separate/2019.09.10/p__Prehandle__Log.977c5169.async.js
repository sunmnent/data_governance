(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{"OI+E":function(t,e,a){"use strict";var r=a("tAuX"),l=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("2qtc");var s=l(a("kLXV")),n=r(a("q1tI"));class i extends n.Component{constructor(){super(...arguments),this.state={iframeUrl:""}}componentDidUpdate(t,e){if(this.props.data.taskCode!==t.data.taskCode&&this.props.data.taskCode){var a=this.props.data,r=a.taskCode,l=a.runSeq,s="./dataflow/report.html?taskCode=".concat(r,"&runSeq=").concat(l);this.setState({iframeUrl:s})}}render(){return n.default.createElement(s.default,{title:"\u8fd0\u884c\u62a5\u544a",visible:!!this.props.data.taskCode,onCancel:this.props.handleCancel,footer:null,width:1e3},n.default.createElement("iframe",{src:this.state.iframeUrl,style:{width:"100%",minHeight:600,border:"none",margin:"-15px"}}))}}var o=i;e.default=o},oBV5:function(t,e,a){"use strict";var r=a("g09b"),l=a("tAuX");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("g9YV");var s=r(a("wCAj"));a("Pwec");var n,i,o,d=r(a("CtXQ")),c=l(a("q1tI")),u=a("MuoO"),h=r(a("Qyje")),p=r(a("tSUh")),m=a("ArA+"),f=r(a("OI+E")),g={0:"\u8fd0\u884c\u4e2d",1:"\u5b8c\u6210",2:"\u8fd0\u884c\u5931\u8d25",3:"\u8fd0\u884c\u5f02\u5e38",4:"\u91cd\u65b0\u6267\u884c"},C={1:"\u6e05\u6d17",2:"\u96c6\u6210",3:"\u7ed3\u6784\u5316",4:"\u534a\u7ed3\u6784\u5316",5:"\u975e\u7ed3\u6784\u5316",6:"\u6570\u636e\u9884\u5904\u7406",7:"\u6587\u4ef6\u4e0a\u4f20\u89e3\u6790",11:"\u722c\u866b"},k=(n=(0,u.connect)(t=>{var e=t.prehandle;return{prehandle:e}}),n((o=class extends c.Component{constructor(){super(...arguments),this.state={reportModalData:{}},this.columns=[{title:"\u4efb\u52a1",dataIndex:"taskCode"},{title:"\u4efb\u52a1\u7c7b\u578b",dataIndex:"taskType",render:t=>C[t]},{title:"\u72b6\u6001",dataIndex:"runStatus",render:t=>g[t]},{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"createTime"},{title:"\u7ed3\u675f\u65f6\u95f4",dataIndex:"endTime"},{title:"\u64cd\u4f5c",key:"action",render:(t,e)=>c.default.createElement("span",null,c.default.createElement(d.default,{type:"file-text",title:"\u65e5\u5fd7",className:"can-click",style:{marginRight:5},onClick:this.viewLog.bind(this,e)}),c.default.createElement(d.default,{type:"snippets",title:"\u8fd0\u884c\u62a5\u544a",className:"can-click",onClick:this.showModal.bind(this,e)}))}],this.fetchData=(t=>{var e=h.default.parse(this.props.location.search.slice(1)),a=e.taskId;this.props.dispatch({type:"prehandle/runloglist",payload:{taskId:a,pageSize:10,pageNum:t}}).then(t=>{t.list&&t.list[0]&&0===t.list[0].runStatus?this.timer=setTimeout(()=>{this.fetchData(t.pageNum)},2e3):this.clearTimer()})}),this.clearTimer=(()=>{this.timer&&clearTimeout(this.timer)}),this.changeTable=(t=>{this.fetchData(t.current)}),this.viewLog=(t=>{m.router.push("/prehandle/logContent?runSeq=".concat(t.runSeq))}),this.showModal=(t=>{this.setState({reportModalData:t})}),this.handleCancel=(()=>{this.setState({reportModalData:{}})})}componentDidMount(){this.fetchData(1)}componentWillUnmount(){this.clearTimer()}render(){var t=this.props.prehandle.logList,e=t.list,a=t.total,r=t.pageNum,l=this.state.reportModalData;return c.default.createElement("div",null,c.default.createElement(p.default,null),c.default.createElement(s.default,{columns:this.columns,dataSource:e,pagination:{total:a,current:r},onChange:this.changeTable,rowKey:"id"}),c.default.createElement(f.default,{data:l,handleCancel:this.handleCancel}))}},i=o))||i),v=k;e.default=v}}]);