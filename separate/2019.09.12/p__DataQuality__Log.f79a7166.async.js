(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{XyV3:function(t,e,a){"use strict";var i=a("g09b"),n=a("tAuX");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("g9YV");var s=i(a("wCAj"));a("+L6B");var l,r,d,o=i(a("2/Rp")),p=n(a("q1tI")),c=a("MuoO"),u=a("7DNP"),h=[{title:"\u65e5\u5fd7\u540d\u79f0",dataIndex:"name"},{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"startTime"},{title:"\u603b\u8bb0\u5f55\u6570",dataIndex:"totalRecords"},{title:"\u95ee\u9898\u6570",dataIndex:"problemRecords"},{title:"\u7ed3\u675f\u65f6\u95f4",dataIndex:"endTime"},{title:"\u68c0\u6838\u7528\u65f6",dataIndex:"cost",render(t){return"".concat(t,"s")}},{title:"\u72b6\u6001",dataIndex:"statusDesc"}],g=10,v=(l=(0,c.connect)(t=>{var e=t.dataQuality;return{dataQuality:e}}),l((d=class extends p.Component{constructor(){super(...arguments),this.goBack=(()=>{this.props.dispatch(u.routerRedux.goBack())}),this.changePage=((t,e,a)=>{this.interval&&clearInterval(this.interval);var i=this.props.match.params.id;this.props.dispatch({type:"dataQuality/getLog",payload:{pageNum:t.current,pageSize:g,checkMethodId:i}})})}componentDidMount(){var t=this.props.match.params.id;this.props.dispatch({type:"dataQuality/getLog",payload:{pageNum:1,pageSize:g,checkMethodId:t}}).then(e=>{e&&e.list&&e.list.length&&3===e.list[0].status&&(this.interval=setInterval(()=>{this.props.dispatch({type:"dataQuality/getLog",payload:{pageNum:1,pageSize:g,checkMethodId:t}}).then(t=>{t&&t.list&&3!==t.list[0].status&&this.interval&&clearInterval(this.interval)})},1e4))})}componentWillMount(){this.interval&&clearInterval(this.interval)}render(){var t=this.props.dataQuality.logObj,e=t.list,a=t.pageNum,i=t.total;return p.default.createElement("div",null,p.default.createElement(o.default,{onClick:this.goBack},"\u8fd4\u56de"),p.default.createElement(s.default,{columns:h,dataSource:e,onChange:this.changePage,pagination:{current:a,total:i,pageSize:g},rowKey:"id",style:{marginTop:10}}))}},r=d))||r),m=v;e.default=m}}]);