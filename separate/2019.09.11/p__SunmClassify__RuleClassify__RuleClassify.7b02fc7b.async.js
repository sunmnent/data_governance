(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{s17h:function(e,t,a){"use strict";var s=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var d=s(a("W9HT"));a("Pwec");var i=s(a("CtXQ"));a("+L6B");var n=s(a("2/Rp"));a("miYZ");var o=s(a("tsqr")),r=s(a("p0pE"));a("g9YV");var c=s(a("wCAj"));a("5NDa");var u,m,h,f=s(a("5rEg")),p=l(a("q1tI")),y=a("MuoO"),C=a("LvDl"),E=(a("Pidj"),s(a("TYXm"))),g=s(a("7umO")),v=(f.default.TextArea,c.default.Column);c.default.ColumnGroup;var w=(u=(0,y.connect)(e=>{var t=e.sunmClassify,a=e.loading;return{sunmClassify:t,pageLoading:a.effects["sunmClassify/fetchRule"],addLoading:a.effects["sunmClassify/addRuleClassify"],editLoading:a.effects["sunmClassify/editRuleClassify"],deleteLoading:a.effects["sunmClassify/deleteRuleClassify"]}}),u((h=class extends p.Component{constructor(e){super(e),this.getData=((e,t)=>{e||(1,!0);var a=(0,C.isEmpty)(t)?{}:t;return this.props.dispatch({type:"sunmClassify/fetchRule",payload:a})}),this.onChangeKeyWord=(e=>{this.setState({codeName:e.target.value})}),this.handleSearch=(()=>{var e=this.state,t=e.params,a=e.keyword;this.setState({params:(0,r.default)({},t,{keyword_temp:a})},()=>{this.getData(!1,this.state.params)})}),this.handleShowEdit=((e,t,a,s,l)=>{this.props.dispatch({type:"sunmClassify/fetchEditData",payload:s}),this.setState({editVisible:!0,parentNodeCode:s?s.parentNodeCode:"",nodeValue:s?s.nodeValue:"",modalKey:s?s.nodeCode:"",editTitle:t,isAdd:e,isAddChild:l,treeDisabled:a})}),this.handleCloseEdit=(()=>{this.setState({editVisible:!1,modalKey:1,deleteVisible:!1})}),this.handleSave=(e=>{var t=this.state,a=t.isAdd,s=t.nodeValue,l={catagoryName:e.nodename,parentId:e.parendcode,catagoryDescrible:e.nodedesc};return a?this.props.dispatch({type:"sunmClassify/addRuleClassify",payload:l}).then(e=>{return this.showTip(e),e}):this.props.dispatch({type:"sunmClassify/editRuleClassify",payload:(0,r.default)({id:s},l)}).then(e=>{return this.showTip(e),e})}),this.handleShowDelete=(e=>{this.setState({deleteVisible:!0,nodeValue:e})}),this.handleSaveDelete=(()=>{var e=this.state.nodeValue,t={id:e};this.props.dispatch({type:"sunmClassify/deleteRuleClassify",payload:t}).then(e=>{this.showTip(e)})}),this.showTip=(e=>{e&&e.success?(this.getData(!1),this.handleCloseEdit(),e.msg&&o.default.success(e.msg)):e&&o.default.error(e.msg)}),this.state={btnloading:!1,editVisible:!1,deleteVisible:!1,modalKey:1,rowActive:"-1",parentNodeCode:"",nodeValue:null,nodeName:"",isAdd:!0,isAddChild:!1,editTitle:"",keyword:"",keyword_temp:"",treeDisabled:!1,showCode:!1}}componentDidMount(){this.getData(!1)}renderSearchList(){this.props.addLoading;return p.default.createElement("div",{className:"search-list"},p.default.createElement("div",{className:"item"},p.default.createElement(n.default,{type:"button",className:"sunm-handle-btn",icon:"plus",onClick:()=>{this.handleShowEdit(!0,"\u65b0\u589e\u68c0\u6838\u65b9\u6cd5\u5206\u7c7b")}},p.default.createElement("span",{className:"handle-text"},"\u65b0\u589e"))))}renderTypeTable(e){return e.list&&e.list.length>0?p.default.createElement(c.default,{scroll:{y:550},pagination:!1,id:"sunm-type-table",defaultExpandAllRows:!0,className:"sunm-table sunm-table-head-fixed",dataSource:e.list,rowKey:"nodeCode",rowClassName:e=>e.nodeCode==this.state.rowActive?"sunm-row-active":"",onRow:e=>{return{onClick:()=>{this.setState({rowActive:e.nodeCode})}}}},p.default.createElement(v,{className:"column",title:"\u5206\u7c7b\u540d\u79f0",key:"name",render:e=>p.default.createElement("a",{title:e.nodeName},e.nodeName)}),p.default.createElement(v,{className:"column column-desc",title:"\u63cf\u8ff0",key:"desc",width:"38%",render:e=>p.default.createElement("a",{title:e.nodeDescrible},e.nodeDescrible)}),p.default.createElement(v,{className:"column sunm-text-center",title:"\u64cd\u4f5c",key:"action",width:"20%",render:(e,t,a)=>0==t.nodeCode?"":p.default.createElement("span",null,p.default.createElement("a",{className:"sunm-icon sunm-edit-icon",title:"\u6dfb\u52a0\u540c\u7ea7",onClick:()=>{this.handleShowEdit(!0,"\u6dfb\u52a0\u540c\u7ea7",!0,t)}},p.default.createElement("i",{className:"iconfont icon-tianjiatongji"})),p.default.createElement("a",{className:"sunm-icon sunm-edit-icon",title:"\u6dfb\u52a0\u5b50\u7ea7",onClick:()=>{this.handleShowEdit(!0,"\u6dfb\u52a0\u5b50\u7ea7",!0,t,!0)}},p.default.createElement("i",{className:"iconfont icon-tianjiaziji"})),p.default.createElement("a",{className:"sunm-icon sunm-edit-icon",title:"\u7f16\u8f91",onClick:()=>{this.handleShowEdit(!1,"\u7f16\u8f91\u8868\u5206\u7c7b",!0,t)}},p.default.createElement(i.default,{type:"form"})),t.children&&t.children.length>0?p.default.createElement("span",{className:"sunm-icon",style:{color:"#ddd"}},p.default.createElement(i.default,{type:"delete"})):p.default.createElement("a",{className:"sunm-icon sunm-delete-icon",title:"\u5220\u9664",onClick:()=>this.handleShowDelete(t.nodeValue)},p.default.createElement(i.default,{type:"delete"})))})):p.default.createElement("div",{style:{textAlign:"center",padding:"200px 0",fontSize:16}})}renderDelete(e){return p.default.createElement("span",null,"\u786e\u5b9a\u8981\u5220\u9664",p.default.createElement("i",{className:"delete-data"},e),"\u8fd9\u4e2a\u5206\u7c7b\u5417\uff1f")}render(){var e=this.state,t=e.editVisible,a=e.deleteVisible,s=e.nodeName,l=e.modalKey,i=e.isAdd,n=e.isAddChild,o=e.treeDisabled,r=e.editTitle,c=this.props,u=c.sunmClassify,m=c.pageLoading,h=c.addLoading,f=c.editLoading,y=c.deleteLoading,C=u.ruleList,v=u.editData,w=u.ruleClassify;return p.default.createElement("div",{className:"sunm-content sunm-classify-content"},p.default.createElement("div",{className:"sunm-inner-content top"},p.default.createElement("div",{className:"sunm-inner-column"},p.default.createElement("div",{className:"sunm-inner-column-cont"},this.renderSearchList(),p.default.createElement("div",{className:"table-cont"},m?p.default.createElement(d.default,{style:{display:"block",padding:"200px 0"}}):this.renderTypeTable(C))))),p.default.createElement(E.default,{showCode:this.state.showCode,title:r,Key:l,visible:t,isAdd:i,dataList:w,editData:v,treeDisabled:o,btnloading:h||f,isAddChild:n,submit:e=>{return this.handleSave(e)},onClose:this.handleCloseEdit}),p.default.createElement(g.default,{hideHeader:"sunm-modal-head-hide",visible:a,title:"\u5220\u9664\u63d0\u793a",btnloading:y,ok:()=>{this.handleSaveDelete()},cancel:this.handleCloseEdit,content:this.renderDelete(s)}))}},m=h))||m);t.default=w}}]);