(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{Aonx:function(e,t,a){"use strict";var l=a("tAuX"),s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var i,n=s(a("2/Rp")),d=l(a("q1tI")),o=s(a("0Dzg")),r=a("7DNP"),c=a("MuoO"),u=!1,m=1,h=["rgb(81, 114, 147)","rgb(245, 107, 132)","rgb(81, 144, 17)","rgb(48, 163, 192)","rgb(204, 126, 176)","rgb(204, 129, 126)"];class f extends d.Component{constructor(e){var t;super(e),t=this,this.add=(()=>{this.props.handleShowEdit(!0,"\u65b0\u589e\u8868\u5206\u7c7b")}),this.dealData=((e,t)=>{var a=this.props.expand,l=void 0===a?"":a;e.forEach((e,a)=>{var s=t||h[a%h.length];e.nodeName===l?e.isCollapsed=!1:e.children&&e.children.find(e=>e.nodeName===l)?e.isCollapsed=!1:e.isCollapsed=!0,e.color=s,e.children?this.dealData(e.children,s):e.tableModels&&(e.children=e.tableModels,this.dealData(e.children,s))})}),this.renderCharts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.props.data,l=void 0===a?{}:a;l.children&&t.dealData(l.children),i=new o.default.Tree(Object.assign({id:"tree",height:600,fitView:"cc",layoutCfg:{getHGap:function(){return 100},getVGap:function(){return 10}}},e)),i.source(l),i.node().label(function(e){return{text:e.nodeName||e.tableNameCn,fill:"white"}}).style({fillOpacity:1}).color("rgb(53, 152, 219)"),i.edge().shape("smooth"),i.render(),i.on("click",e=>{var a=e.shape;if(a){var l=i.find(a.__cfg.id);if(a.hasClass("spreadoutButton")){var s=l._attrs.model.children,n=s[parseInt(s.length/2)];i.focusPoint({x:n.x,y:n.y})}else a.hasClass("collapseButton")&&i.focusPoint({x:l._attrs.model.x,y:l._attrs.model.y})}"node"==e.itemType&&e.item._attrs.model&&e.item._attrs.model.nodeName?t.setState({posiTop:e.domY,posiLeft:e.domX,dataOperate:e.item._attrs.model,forwardValue:e.item._attrs.model.nodeValue},()=>{t.setState({isOperate:"block"})}):t.setState({isOperate:"none"})})},this.zoomIn=(()=>{m<3&&(m+=.1,i.zoom(Number(m)))}),this.zoomOut=(()=>{m>.2&&(m-=.1,i.zoom(Number(m)))}),this.autoZoom=(()=>{u=!u,i.destroy(),u?this.renderCharts({fitView:"autoZoom"}):this.renderCharts()}),this.state={checkboxs:{},selectKeys:[],posiTop:0,posiLeft:0,isOperate:"none",dataOperate:null,forwardValue:""}}componentDidMount(){this.renderCharts()}routerForward(){this.props.dispatch(r.routerRedux.push("/modelManagement/masterdata/".concat(this.state.forwardValue)))}render(){var e=this.props,t=e.handleShowEdit,a=e.handleShowDelete,l=this.state,s=l.isOperate,i=l.posiTop,o=l.posiLeft,r=l.dataOperate,c=l.forwardValue;return d.default.createElement("div",null,d.default.createElement(n.default,{size:"small",icon:"plus",style:{position:"absolute",left:10,zIndex:8},onClick:this.add},"\u65b0\u589e"),d.default.createElement("span",{style:{position:"absolute",right:10,zIndex:8}},d.default.createElement("i",{title:"\u653e\u5927",className:"icon animate sm iconfont icon-fangda1 margin-top4 margin-right10",onClick:this.zoomIn}),d.default.createElement("i",{title:"\u7f29\u5c0f",className:"icon animate sm iconfont icon-suoxiao margin-top4 margin-right10",onClick:this.zoomOut}),d.default.createElement("i",{title:"\u81ea\u9002\u5e94\u7a97\u53e3",className:"icon animate sm iconfont icon-zishiying1 margin-top4 margin-right10",onClick:this.autoZoom})),d.default.createElement("div",null,d.default.createElement("div",{id:"tree"})),d.default.createElement("ul",{className:"operationList",style:{display:s,top:i,left:o}},"0"!==c&&d.default.createElement("li",{onClick:()=>{t(!0,"\u6dfb\u52a0\u540c\u7ea7",!0,r)}},"\u6dfb\u52a0\u540c\u7ea7"),d.default.createElement("li",{onClick:()=>{t(!0,"\u6dfb\u52a0\u5b50\u7ea7",!0,r,!0)}},"\u6dfb\u52a0\u5b50\u7ea7"),"0"!==c&&d.default.createElement("li",{onClick:()=>{t(!1,"\u7f16\u8f91\u8868\u5206\u7c7b",!0,r)}},"\u7f16\u8f91\u8868\u5206\u7c7b"),d.default.createElement("li",{onClick:()=>{this.routerForward()}},"\u67e5\u770b\u8868\u95f4\u5173\u7cfb"),r&&(r.children&&r.children.length>0?null:d.default.createElement("li",{onClick:()=>a(r)},"\u5220\u9664"))))}}var p=(0,c.connect)()(f);t.default=p},TDIP:function(e,t,a){},kUqd:function(e,t,a){"use strict";var l=a("tAuX"),s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var i=s(a("2/Rp"));a("Znn+");var n=s(a("ZTPi")),d=l(a("q1tI")),o=s(a("Qyje")),r=a("MuoO"),c=a("7DNP"),u=s(a("kfli")),m=s(a("4QS/")),h=n.default.TabPane;(0,r.connect)()(e=>{var t=()=>{e.dispatch(c.routerRedux.goBack())};return d.default.createElement(i.default,{onClick:t},"\u8fd4\u56de")});class f extends d.Component{render(){var e=o.default.parse(this.props.location.search.slice(1)),t=e.expand;return d.default.createElement(n.default,{defaultActiveKey:"1",style:{marginTop:"-10px"}},d.default.createElement(h,{tab:"\u56fe\u5f62",key:"1"},d.default.createElement(u.default,{expand:t})),d.default.createElement(h,{tab:"\u5217\u8868",key:"2"},d.default.createElement(m.default,{type:1})))}}var p=f;t.default=p},kfli:function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var i=l(a("W9HT"));a("Pwec");var n=l(a("CtXQ"));a("+L6B");var d=l(a("2/Rp"));a("miYZ");var o=l(a("tsqr")),r=l(a("p0pE"));a("5NDa");l(a("5rEg"));a("g9YV");var c,u,m,h=l(a("wCAj")),f=s(a("q1tI")),p=a("MuoO"),y=a("LvDl"),C=l(a("TYXm")),g=l(a("Aonx")),E=l(a("7umO"));a("cJfE"),a("3MCO"),a("xR6b"),a("TDIP");var b=h.default.Column;h.default.ColumnGroup;var v=(c=(0,p.connect)(e=>{var t=e.sunmClassify,a=e.loading;return{sunmClassify:t,pageLoading:a.effects["sunmClassify/fetchTable"],addLoading:a.effects["sunmClassify/addTableClassify"],editLoading:a.effects["sunmClassify/editTableClassify"],deleteLoading:a.effects["sunmClassify/deleteTableClassify"]}}),c((m=class extends f.Component{constructor(e){super(e),this.getData=((e,t)=>{e||(1,!0);var a=(0,y.isEmpty)(t)?{}:t;return this.props.dispatch({type:"sunmClassify/fetchTable",payload:a})}),this.handleSearch=(()=>{var e=this.state,t=e.params,a=e.keyword;this.setState({params:(0,r.default)({},t,{keyword_temp:a})},()=>{this.getData(!1,this.state.params)})}),this.handleShowEdit=((e,t,a,l,s)=>{this.props.dispatch({type:"sunmClassify/fetchEditData",payload:l}),this.setState({editVisible:!0,parentNodeCode:l?l.parentNodeCode:"",nodeValue:l?l.nodeValue:"",modalKey:l?l.nodeCode:"",editTitle:t,isAdd:e,isAddChild:s,treeDisabled:a})}),this.handleCloseEdit=(()=>{this.setState({editVisible:!1,modalKey:1,deleteVisible:!1})}),this.handleSave=(e=>{var t=this.state,a=t.isAdd,l=t.nodeValue,s={catagoryName:e.nodename,parentId:e.parendcode,catagoryDescrible:e.nodedesc};return a?this.props.dispatch({type:"sunmClassify/addTableClassify",payload:s}).then(e=>{return this.props.dispatch({type:"sunmQualityControl/getCategoryData"}),this.showTip(e),e}):this.props.dispatch({type:"sunmClassify/editTableClassify",payload:(0,r.default)({id:l},s)}).then(e=>{return this.props.dispatch({type:"sunmQualityControl/getCategoryData"}),this.showTip(e),e})}),this.handleShowDelete=(e=>{this.setState({deleteVisible:!0,nodeValue:e.nodeValue})}),this.handleSaveDelete=(()=>{var e=this.state.nodeValue,t={id:e};this.props.dispatch({type:"sunmClassify/deleteTableClassify",payload:t}).then(e=>{this.props.dispatch({type:"sunmQualityControl/getCategoryData"}),this.showTip(e)})}),this.showTip=(e=>{e&&e.success?(this.getData(!1),this.handleCloseEdit(),e.msg&&o.default.success(e.msg)):e&&o.default.error(e.msg)}),this.state={btnloading:!1,editVisible:!1,deleteVisible:!1,modalKey:1,rowActive:"-1",parentNodeCode:"",nodeValue:null,nodeName:"",isAdd:!0,isAddChild:!1,editTitle:"",keyword:"",keyword_temp:"",treeDisabled:!1,showCode:!1}}componentDidMount(){this.getData(!1)}renderSearchList(){this.props.addLoading;return f.default.createElement("div",{className:"search-list"},f.default.createElement("div",{className:"item"},f.default.createElement(d.default,{type:"button",className:"sunm-handle-btn",icon:"plus",onClick:()=>{this.handleShowEdit(!0,"\u65b0\u589e\u8868\u5206\u7c7b")}},f.default.createElement("span",{className:"handle-text"},"\u65b0\u589e"))))}renderTypeTable(e){return e.list&&e.list.length>0?f.default.createElement(h.default,{scroll:{y:550},pagination:!1,id:"sunm-type-table",defaultExpandAllRows:!0,className:"sunm-table sunm-table-head-fixed",dataSource:e.list,rowKey:"nodeCode",rowClassName:e=>e.nodeCode==this.state.rowActive?"sunm-row-active":"",onRow:e=>{return{onClick:()=>{this.setState({rowActive:e.nodeCode})}}}},f.default.createElement(b,{className:"column",title:"\u5206\u7c7b\u540d\u79f0",key:"name",render:e=>f.default.createElement("a",{title:e.nodeName},e.nodeName)}),f.default.createElement(b,{className:"column column-desc",title:"\u63cf\u8ff0",key:"desc",width:"38%",render:e=>f.default.createElement("a",{title:e.nodeDescrible},e.nodeDescrible)}),f.default.createElement(b,{className:"column sunm-text-center",title:"\u64cd\u4f5c",key:"action",width:"20%",render:(e,t,a)=>0==t.nodeCode?"":f.default.createElement("span",null,f.default.createElement("a",{className:"sunm-icon sunm-edit-icon",title:"\u6dfb\u52a0\u540c\u7ea7",onClick:()=>{this.handleShowEdit(!0,"\u6dfb\u52a0\u540c\u7ea7",!0,t)}},f.default.createElement("i",{className:"iconfont icon-tianjiatongji"})),f.default.createElement("a",{className:"sunm-icon sunm-edit-icon",title:"\u6dfb\u52a0\u5b50\u7ea7",onClick:()=>{this.handleShowEdit(!0,"\u6dfb\u52a0\u5b50\u7ea7",!0,t,!0)}},f.default.createElement("i",{className:"iconfont icon-tianjiaziji"})),f.default.createElement("a",{className:"sunm-icon sunm-edit-icon",title:"\u7f16\u8f91",onClick:()=>{this.handleShowEdit(!1,"\u7f16\u8f91\u8868\u5206\u7c7b",!0,t)}},f.default.createElement(n.default,{type:"form"})),t.children&&t.children.length>0?f.default.createElement("span",{className:"sunm-icon",style:{color:"#ddd"}},f.default.createElement(n.default,{type:"delete"})):f.default.createElement("a",{className:"sunm-icon sunm-delete-icon",title:"\u5220\u9664",onClick:()=>this.handleShowDelete(t)},f.default.createElement(n.default,{type:"delete"})))})):f.default.createElement("div",{style:{textAlign:"center",padding:"200px 0",fontSize:16}})}renderDelete(e){return f.default.createElement("span",null,"\u786e\u5b9a\u8981\u5220\u9664",e,"\u8fd9\u4e2a\u5206\u7c7b\u5417\uff1f")}render(){var e=this.state,t=e.editVisible,a=e.deleteVisible,l=e.nodeName,s=e.modalKey,n=e.isAdd,d=e.isAddChild,o=e.treeDisabled,r=e.editTitle,c=this.props,u=c.sunmClassify,m=c.pageLoading,h=c.addLoading,p=c.editLoading,y=c.deleteLoading,b=c.expand,v=(u.tableList,u.editData),w=u.tableClassify;return f.default.createElement("div",{className:"sunm-content sunm-classify-content"},f.default.createElement("div",{className:"sunm-inner-content top"},f.default.createElement("div",{className:"sunm-inner-column"},f.default.createElement("div",{className:"sunm-inner-column-cont"},f.default.createElement("div",{className:"table-cont"},m?f.default.createElement(i.default,{style:{display:"block",padding:"200px 0"}}):f.default.createElement(g.default,{data:w[0],handleShowEdit:this.handleShowEdit,handleShowDelete:this.handleShowDelete,ref:"renderCharts",expand:b}))))),f.default.createElement(C.default,{showCode:this.state.showCode,title:r,Key:s,visible:t,isAdd:n,dataList:w,editData:v,treeDisabled:o,btnloading:h||p,isAddChild:d,submit:e=>{return this.handleSave(e)},onClose:this.handleCloseEdit}),f.default.createElement(E.default,{hideHeader:"sunm-modal-head-hide",visible:a,title:"\u5220\u9664\u63d0\u793a",btnloading:y,ok:()=>{this.handleSaveDelete()},cancel:this.handleCloseEdit,content:this.renderDelete(l)}))}},u=m))||u);t.default=v}}]);