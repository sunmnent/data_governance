(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{"/ewd":function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var n=l(a("kLXV"));a("+L6B");var d=l(a("2/Rp")),i=l(a("jehZ"));a("5NDa");var r=l(a("5rEg"));a("OaEy");var m=l(a("2fM7"));a("y8nQ");var u=l(a("Vl3Y"));a("nRaC");var c=l(a("5RzL"));a("g9YV");var o,h,p,f,y=l(a("wCAj")),S=s(a("q1tI")),E=a("MuoO");a("Q3rl");y.default.Column,c.default.TreeNode;var g=u.default.Item,N=m.default.Option,v=r.default.TextArea,b=(o=u.default.create(),h=(0,E.connect)(e=>{var t=e.sunmRule,a=e.loading;return{sunmRule:t,typeLoading:a.effects["sunmRule/fetch"],deleteLoading:a.effects["sunmRule/deleteData"]}}),o(p=h((f=class extends S.Component{constructor(e){super(e),this.handleSelectRuleType=((e,t)=>{var a=this.props.sunmRule.dataItemInfo;this.props.selectRuleType&&this.props.selectRuleType(e),this.setState({checkName:t.props.children}),this.props.form.setFieldsValue({description:"",checkCondition:""}),this.props.dispatch({type:"sunmRule/selectRuleType",payload:{id:parseInt(e)}}).then(e=>{e&&this.props.form.setFieldsValue({description:e.description,checkCondition:e.checkCondition?a.dataItemName?e.checkCondition.replace(/#{F}|#{f}/g,a.dataItemName):e.checkCondition:""})})}),this.handleSubmit=(e=>{e.preventDefault(),this.props.form.validateFieldsAndScroll((e,t)=>{e||(t.checkName=this.state.checkName?this.state.checkName:this.props.sunmRule.editRule.checkName,this.props.submit&&this.props.submit(t))})}),this.handleClose=(()=>{this.setState({checkName:""}),this.props.onClose&&this.props.onClose()}),this.state={dataInfo:e.dataInfo||{},editRule:e.editRule||{},checkName:""}}UNSAFE_componentWillReceiveProps(e){this.setState({editRule:e.editRule,dataInfo:e.dataInfo})}render(){var e=this.props.sunmRule,t=e.ruleType,a=e.dataItemInfo,l=e.editRule,s=this.props,c=s.width,o=s.title,h=s.visible,p=s.Key,f=s.btnLoading,y=(s.ruleTypeList,s.isView),E=this.props.form.getFieldDecorator,b={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},C={wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},R=e=>e&&e.length>0?e.map((e,t)=>S.default.createElement(N,{value:e.id,key:t},e.checkName)):[];return S.default.createElement(n.default,{width:c,key:p,wrapClassName:"vertical-center-modal sunm-rule-modal",visible:h,title:o,onCancel:this.handleClose,footer:null},S.default.createElement(u.default,{className:"sunm-addrule-form",onSubmit:e=>{this.handleSubmit(e)}},S.default.createElement("div",{className:"sunm-custom-form"},S.default.createElement("h2",{className:"title"},":: \u6570\u636e\u9879\u4fe1\u606f"),S.default.createElement("div",{className:"sunm-custom-form-inner"},S.default.createElement("div",null,S.default.createElement("label",{className:"info-item"},S.default.createElement("span",{className:"name"},"\u5206\u7c7b\uff1a"),S.default.createElement("span",null,a.dataItemParentName)),S.default.createElement("label",{className:"info-item"},S.default.createElement("span",{className:"name"},"\u4e2d\u6587\u7b80\u79f0\uff1a"),S.default.createElement("span",null,a.chineseName))),S.default.createElement("label",{className:"info-item"},S.default.createElement("span",{className:"name"},"\u6570\u636e\u9879\u7f16\u53f7\uff1a"),S.default.createElement("span",null,a.dataItemCode)),S.default.createElement("label",{className:"info-item"},S.default.createElement("span",{className:"name"},"\u6570\u636e\u9879\u540d\uff1a"),S.default.createElement("span",null,a.dataItemName)),S.default.createElement("label",{className:"info-item"},S.default.createElement("span",{className:"name"},"\u63cf\u8ff0\uff1a"),S.default.createElement("span",null,a.businessDefinition)),S.default.createElement("label",{className:"info-item"},S.default.createElement("span",{className:"dataTypeName"},"\u7c7b\u578b\uff1a"),S.default.createElement("span",null,a.class)),S.default.createElement("label",{className:"info-item"},S.default.createElement("span",{className:"name"},"\u957f\u5ea6\uff1a"),S.default.createElement("span",null,a.length)),S.default.createElement("label",{className:"info-item"},S.default.createElement("span",{className:"name"},"\u7cbe\u5ea6\uff1a"),S.default.createElement("span",null,a.percision)),S.default.createElement("label",{className:"info-item"},S.default.createElement("span",{className:"name"},"\u7cfb\u7edf\u6765\u6e90\uff1a"),S.default.createElement("span",null,a.sourceSystemName)),S.default.createElement("label",{className:"info-item"},S.default.createElement("span",{className:"name"},"\u6e90\u90e8\u95e8\uff1a"),S.default.createElement("span",null,a.sourceDepartmentName)))),S.default.createElement("div",{className:"sunm-custom-form"},S.default.createElement("h2",{className:"title"},":: \u68c0\u6838\u89c4\u5219"),S.default.createElement("div",{className:"sunm-custom-form-inner"},S.default.createElement(g,(0,i.default)({},b,{label:"\u68c0\u6838\u7c7b\u578b\uff1a"}),E("checkId",{rules:[{required:!0,message:"\u68c0\u6838\u7c7b\u578b\u4e0d\u80fd\u4e3a\u7a7a"}],initialValue:l.checkTypeId})(S.default.createElement(m.default,{onChange:(e,t)=>{this.handleSelectRuleType(e,t)},placeholder:"\u8bf7\u9009\u62e9\u68c0\u6838\u7c7b\u578b",disabled:y},R(t)))),S.default.createElement(g,(0,i.default)({},b,{label:"\u63cf\u8ff0\uff1a"}),E("description",{initialValue:l.description})(S.default.createElement(r.default,{maxLength:1e3,disabled:y}))),S.default.createElement(g,(0,i.default)({},b,{label:"\u68c0\u6838\u6761\u4ef6\uff1a"}),E("checkCondition",{rules:[{required:!0,message:"\u68c0\u6838\u6761\u4ef6\u4e0d\u80fd\u4e3a\u7a7a"}],initialValue:l.checkCondition})(S.default.createElement(v,{maxLength:1e3,disabled:y}))))),!y&&S.default.createElement(g,(0,i.default)({className:"form-btn-list"},C),S.default.createElement(d.default,{type:"primary",className:"main-btn",htmlType:"submit",loading:f},"\u786e\u8ba4"),S.default.createElement(d.default,{type:"ghost",onClick:this.handleClose},"\u53d6\u6d88"))))}},p=f))||p)||p);t.default=b},Q3rl:function(e,t,a){},dXMW:function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var n=l(a("W9HT"));a("Pwec");var d=l(a("CtXQ"));a("+L6B");var i=l(a("2/Rp"));a("5NDa");var r=l(a("5rEg"));a("nRaC");var m=l(a("5RzL"));a("miYZ");var u=l(a("tsqr")),c=l(a("p0pE"));a("OaEy");var o=l(a("2fM7"));a("g9YV");var h,p,f,y=l(a("wCAj")),S=s(a("q1tI")),E=a("MuoO"),g=s(a("LvDl")),N=a("Pidj"),v=l(a("/ewd")),b=l(a("EmI/")),C=l(a("Jt6A")),R=l(a("7umO")),I=l(a("JbNM")),w=l(a("99PG")),k=a("qxfp");a("cJfE"),a("3MCO"),a("xR6b");var L=y.default.Column,T=(y.default.ColumnGroup,o.default.Option),D=!0,_=1,M=!0,V=(h=(0,E.connect)(e=>{var t=e.sunmRule,a=e.loading;return{sunmRule:t,pageLoadings:a.effects["sunmClassify/fetch"],addLoading:a.effects["sunmRule/AddRule"],editLoading:a.effects["sunmRule/EditRule"],deleteLoading:a.effects["sunmRule/deleteData"]}}),h((f=class extends S.Component{constructor(){super(...arguments),this.state={params:{pageNum:1,pageSize:30,treeSelect_temp:"",dataName_temp:"",sysSource_temp:"",department_temp:"",reviewStatus_temp:"",orderBy:"",order:""},pageLoading:!1,isSearchLoading:!1,editVisible:!1,deleteVisible:!1,deleteMoreVisible:!1,addruleVisible:!1,submitVisible:!1,editModalKey:1,ruleModalKey:3,submitModalKey:4,rowActive:"-1",dataItemId:"",ruleId:"",ruleIds:"",ruleName:"",isAdd:!0,isView:!1,clear:!0,addRuleDisabled:!0,treeSelect:void 0,dataName:"",sysSource:void 0,department:void 0,reviewStatus:"",isRuleManage:!1,isShowCommit:!0},this.getData=((e,t)=>{e||(_=1,D=!0);var a={pageNum:t.pageNum,pageSize:t.pageSize,dataItemCatagoryId:t.treeSelect_temp?parseInt(t.treeSelect_temp):"",dataItemName:t.dataName_temp,fromSystem:t.sysSource_temp?parseInt(t.sysSource_temp):"",fromDepartment:t.department_temp?parseInt(t.department_temp):""};return t.orderBy&&t.orderBy.length&&(a.orderColumn=t.orderBy),t.orderBy&&t.orderBy.length&&(a.orderBy=t.order),this.props.dispatch({type:"sunmRule/fetch",payload:a})}),this.handleTableChange=((e,t,a)=>{var l=a.field?g.default.snakeCase(a.field):"",s="";"descend"===a.order?s="desc":"ascend"===a.order&&(s="asc");var n=(0,c.default)({},this.state.params,{pageNum:1,orderBy:l,order:s});this.setState({params:n,pageLoading:!0}),this.getData(!1,n).finally(()=>{this.setState({pageLoading:!1})})}),this.handleUpdateData=(e=>{var t=document.getElementById("sunm-type-table"),a=t?t.getElementsByClassName("ant-table-body")[0]:"",l=a?a.childNodes[0]:"";a&&(0,N.ScrollLoad)(a,l,_,e,()=>{if(D){D=!1,_+=1;var e=this.state.params;e.pageNum=_,this.setState({pageLoading:!0}),this.getData(!0,e).then(e=>{D=!0,this.setState({pageLoading:!1})}).catch(e=>{D=!0,this.setState({pageLoading:!1})})}})}),this.onChangeTree=(e=>{this.setState({treeSelect:e,numItems:e})}),this.onChangeData=(e=>{this.setState({dataName:e.target.value,numItemName:e.target.value})}),this.onChangeDepartment=((e,t)=>{var a=e;this.setState({department:a,sysSource:void 0,sysSource_temp:""}),a?this.handleChangeSysSource(a):this.props.dispatch({type:"sunmRule/clearSysSource",payload:[]})}),this.handleChangeSysSource=(e=>{this.setState({clear:!1}),this.props.dispatch({type:"sunmRule/fetchsysSources",payload:{deptId:e}})}),this.onChangeSysSource=(e=>{this.setState({sysSource:e})}),this.onChangeStatus=(e=>{this.setState({reviewStatus:e})}),this.handleSearch=(()=>{var e=this.state,t=e.params,a=e.treeSelect,l=e.dataName,s=e.sysSource,n=e.department;this.setState({isSearchLoading:!0,params:(0,c.default)({},t,{pageNum:1,treeSelect_temp:a||"",dataName_temp:l||"",sysSource_temp:s||"",department_temp:n||""})},()=>{this.getData(!1,this.state.params).then(()=>{var e=document.getElementById("sunm-type-table"),t=e?e.getElementsByClassName("ant-table-body")[0]:"";t&&(t.scrollTop=0),this.setState({isSearchLoading:!1})})})}),this.handleShowAddRule=(()=>{this.setState({isRuleManage:!0,addruleVisible:!0,ruleModalKey:2222})}),this.handleSelectClassType=(e=>{this.handleUpdateShortNameList([]),this.handleUpdateDataItemInfo({checkRules:[]}),this.props.dispatch({type:"sunmRule/fetchShortNameList",payload:e}),this.setState({addRuleDisabled:!0})}),this.handleSelectShortName=(e=>{this.props.dispatch({type:"sunmRule/fetchDataItemInfo",payload:e}).then(()=>{this.setState({dataItemId:e,addRuleDisabled:!1})})}),this.handleUpdateShortNameList=(e=>{this.props.dispatch({type:"sunmRule/updateShortNameList",payload:e})}),this.handleUpdateDataItemInfo=(e=>{this.props.dispatch({type:"sunmRule/updateDataItemInfo",payload:e})}),this.handleUpdateRuleList=(e=>{this.props.dispatch({type:"sunmRule/updateRuleList",payload:e})}),this.handleSaveRule=(e=>{var t=this.state.dataItemId;if(e.ruleList)if(e.ruleList.length<=0)u.default.warning("\u68c0\u6838\u89c4\u5219\u4e0d\u80fd\u4e3a\u7a7a");else{var a={id:t,checkRules:e.ruleList};this.props.dispatch({type:"sunmRule/AddRule",payload:a}).then(e=>{e&&e.success&&(e.msg="\u65b0\u589e\u6210\u529f"),this.showTypeTip(e)})}else u.default.warning("\u68c0\u6838\u89c4\u5219\u4e0d\u80fd\u4e3a\u7a7a")}),this.handleShowEditRule=((e,t)=>{M&&(M=!1,this.setState({dataItemId:e.dataItemId,ruleId:e.id}),this.props.dispatch({type:"sunmRule/fetchDataItemInfo",payload:e.dataItemId}).then(a=>{M=!0,this.props.dispatch({type:"sunmRule/fetchRuleType"}),e.id?(this.props.dispatch({type:"sunmRule/fetchEditRule",payload:e}),this.setState({editVisible:!0,editModalKey:2222,isView:t})):this.setState({isRuleManage:!1,addruleVisible:!0,ruleModalKey:2222})}))}),this.handleUpdateEdit=(e=>{this.props.dispatch({type:"sunmRule/updateEdit",payload:e})}),this.handleSaveEdit=(e=>{var t=this.state,a=t.ruleId,l=t.dataItemId;this.props.dispatch({type:"sunmRule/EditRule",payload:(0,c.default)({id:a,dataItemId:l},e)}).then(e=>{this.showTypeTip(e)})}),this.handleCloseEdit=(()=>{this.handleUpdateShortNameList([]),this.handleUpdateDataItemInfo({checkRules:[]}),this.setState({editVisible:!1,editModalKey:1,addruleVisible:!1,ruleModalKey:3,submitVisible:!1,submitModalKey:4,addRuleDisabled:!0,isRuleManage:!1,rowIds:[]})}),this.handleSaveChange=(()=>{this.showTypeTip({success:!0})}),this.handleShowMoreDelete=(()=>{var e=this.state.ruleIds;e.length<=0?u.default.warning("\u8bf7\u9009\u62e9\u9700\u8981\u5220\u9664\u7684\u6570\u636e"):this.setState({deleteMoreVisible:!0})}),this.handleSaveDeleteMore=(e=>{this.props.dispatch({type:"sunmRule/deleteMoreData",payload:e}).then(e=>{this.showTypeTip(e),this.handleCloseDelete()})}),this.handleShowDelete=((e,t)=>{this.setState({deleteVisible:!0,ruleId:e,ruleName:t})}),this.handleSaveDelete=(e=>{this.props.dispatch({type:"sunmRule/deleteData",payload:e.join(",")}).then(e=>{this.showTypeTip(e),this.handleCloseDelete()})}),this.handleCloseDelete=(()=>{this.setState({deleteVisible:!1,deleteMoreVisible:!1})}),this.showTypeTip=(e=>{var t=this.state.params;e&&e.success?(t=(0,c.default)({},t,{pageNum:1,codeName_temp:"",standardType_temp:"",reviewStatus_temp:""}),this.getData(!1,t).then(()=>{var e=document.getElementById("sunm-type-table"),t=e?e.getElementsByClassName("ant-table-body")[0]:"";t.scrollTop=0,this.setState({isShowCommit:!1}),this.setState({isShowCommit:!0})}),this.handleCloseEdit(),e.msg&&u.default.success(e.msg)):e&&u.default.error(e.msg)}),this.handleExport=(()=>{var e=this.state.params;window.location.href="".concat(k.BASE_URL,"/checkRule/export?token=").concat((0,k.TOKEN)(),"&dataItemCatagoryId=").concat(e.treeSelect_temp,"&dataItemName=").concat(e.dataName_temp,"&fromSystem=").concat(e.sysSource_temp,"&fromDepartment=").concat(e.department_temp)}),this.handleDown=(()=>{window.location.href="".concat(k.BASE_URL,"/codeStandard/downTemplate?token=").concat((0,k.TOKEN)())}),this.handleReset=(()=>{this.setState({params:{pageNum:1,pageSize:30,treeSelect_temp:"",dataName_temp:"",sysSource_temp:"",department_temp:"",reviewStatus_temp:""}},()=>{var e=this.state.params;this.getData(!1,e),this.setState({treeSelect:"",numItemName:"",dataName:"",numItems:""})})}),this.renderSelect=(e=>{return e&&e.length>0?e.map((e,t)=>{return S.default.createElement(T,{value:e.value,key:t},e.title)}):[]})}componentDidMount(){this.getData(!1,this.state.params),this.props.dispatch({type:"sunmRule/fetchDepartment"}),this.props.dispatch({type:"sunmRule/fetchClassTree"})}UNSAFE_componentWillReceiveProps(e){var t=e.sunmRule.dataList,a=t.pageInfo.page_count;this.handleUpdateData(a)}renderSearchList(){var e=this.state,t=e.treeSelect,a=(e.sysSource,e.department,e.isSearchLoading),l=this.props.sunmRule,s=l.classTree;l.sysSources,l.departmentList;return S.default.createElement("div",{className:"search-list"},S.default.createElement("div",{className:"item"},S.default.createElement("span",{className:"text"},"\u5206\u7c7b\uff1a"),S.default.createElement(C.default,{showSearch:!0,value:t,option:s,showCheckedStrategy:m.default.SHOW_ALL,allowClear:!0,width:220,maxHeight:300,placeholder:"\u8bf7\u9009\u62e9\u6570\u636e\u9879\u7c7b\u522b",value:this.state.numItems,onChange:e=>{this.onChangeTree(e)}})),S.default.createElement("div",{className:"item"},S.default.createElement("span",{className:"text"},"\u6570\u636e\u9879\uff1a"),S.default.createElement(r.default,{style:{width:150},placeholder:"\u6570\u636e\u9879\u540d/\u4e2d\u6587\u7b80\u79f0",value:this.state.numItemName,onChange:this.onChangeData,onPressEnter:this.handleSearch})),S.default.createElement(i.default,{loading:a,className:"item-search-btn",type:"primary",icon:"search",onClick:this.handleSearch},"\u641c\u7d22"),S.default.createElement(i.default,{type:"primary",style:{marginLeft:"10px"},onClick:this.handleReset},"\u91cd\u7f6e"))}renderAction(){return S.default.createElement("div",{className:"handle-btn-list"},S.default.createElement(i.default,{style:{margin:"0 10px"},icon:"plus",onClick:()=>{this.handleShowAddRule()}},"\u65b0\u589e"),S.default.createElement(i.default,{style:{margin:"0 10px"},icon:"delete",onClick:this.handleShowMoreDelete},"\u5220\u9664"),S.default.createElement(w.default,null),S.default.createElement(i.default,{style:{margin:"0 10px"},icon:"export",onClick:this.handleExport},"\u5bfc\u51fa"),S.default.createElement(i.default,{style:{margin:"0 10px"},icon:"download",onClick:this.handleDown},"\u4e0b\u8f7d\u6a21\u677f"))}renderCommit(){var e=this.props.sunmRule,t=e.dataList,a=t.dataNum,l=t.codeNum,s=t.ruleNum;return S.default.createElement("div",{className:"sunm-commit-info"},S.default.createElement("span",{className:"item-name"},"\u5f85\u63d0\u4ea4\uff1a"),S.default.createElement("p",{className:"item"},S.default.createElement("span",null,"\u6570\u636e\u9879\uff1a",S.default.createElement("i",{className:"num"},a),"\u6761"),S.default.createElement("span",null,"\u7f16\u7801\uff1a",S.default.createElement("i",{className:"num"},l),"\u6761"),S.default.createElement("span",null,"\u68c0\u6838\u89c4\u5219\uff1a",S.default.createElement("i",{className:"num"},s),"\u6761")),S.default.createElement(i.default,{type:"primary",onClick:this.handleShowSubmit},"\u63d0\u4ea4\u53d8\u66f4"))}renderTypeTable(e){var t={getCheckboxProps:e=>({disabled:!e.id||1==e.checkTypeState||3==e.checkTypeState}),onChange:(e,t)=>{var a=[];t.forEach(e=>{a.push(e.id)}),this.setState({ruleIds:a})},onSelect:(e,t,a)=>{},onSelectAll:(e,t,a)=>{}};return S.default.createElement(y.default,{onChange:this.handleTableChange,loading:this.state.pageLoading,rowSelection:t,locale:{emptyText:""},scroll:{y:550},pagination:!1,id:"sunm-type-table",className:"sunm-table sunm-table-head-fixed",dataSource:e.list,rowKey:(e,t)=>e.id?e.id:"".concat(t).concat(e.dataItemCode),rowClassName:(e,t)=>t==this.state.rowActive?"sunm-row-active":"",onRow:(e,t)=>{return{onClick:()=>{this.setState({rowActive:t})}}}},S.default.createElement(L,{title:"\u6570\u636e\u9879\u7f16\u53f7",dataIndex:"dataItemCode",key:"dataItemCode",sorter:!0,width:"11%",render:(e,t)=>S.default.createElement("span",{onClick:this.handleShowEditRule.bind(this,t,!0),style:{cursor:"pointer",color:"rgb(24, 144, 255)"}},e)}),S.default.createElement(L,{title:"\u6570\u636e\u9879\u540d",dataIndex:"dataItemName",key:"dataItemName",sorter:!0,width:"13%"}),S.default.createElement(L,{title:"\u4e2d\u6587\u7b80\u79f0",dataIndex:"chineseName",key:"chineseName",sorter:!0,width:"11%"}),S.default.createElement(L,{title:"\u68c0\u6838\u7c7b\u522b",dataIndex:"checkName",key:"checkName",width:"11%"}),S.default.createElement(L,{className:"desc",title:"\u63cf\u8ff0",key:"description",width:"18%",render:e=>S.default.createElement("a",{title:e.description},e.description)}),S.default.createElement(L,{title:"\u5ba1\u6838\u72b6\u6001",key:"status",width:"11%",render:e=>{return 1==e.checkTypeState?S.default.createElement("span",{className:"gray"},"\u5f85\u5ba1\u6838"):3==e.checkTypeState?S.default.createElement("span",{className:"success"},"\u5ba1\u6838\u901a\u8fc7"):2==e.checkTypeState?S.default.createElement("span",{className:"danger"},"\u5ba1\u6838\u4e0d\u901a\u8fc7"):0==e.checkTypeState?S.default.createElement("span",{className:"danger"},"\u672a\u63d0\u4ea4"):void 0}}),S.default.createElement(L,{className:"sunm-text-center",title:"\u64cd\u4f5c",key:"action",width:"8%",render:(e,t,a)=>3==t.checkTypeState||1==t.checkTypeState?"":t.id?S.default.createElement("span",null,S.default.createElement("a",{className:"sunm-icon sunm-edit-icon",title:"\u7f16\u8f91",onClick:()=>{this.handleShowEditRule(t,!1)}},S.default.createElement(d.default,{type:"form"})),S.default.createElement("a",{className:"sunm-icon sunm-delete-icon",title:"\u5220\u9664",onClick:()=>{this.handleShowDelete(t.id,t.checkName)}},S.default.createElement(d.default,{type:"delete"}))):S.default.createElement("a",{className:"sunm-icon sunm-edit-icon",title:"\u7f16\u8f91",onClick:()=>{this.handleShowEditRule(t,!1)}},S.default.createElement(d.default,{type:"form"}))}))}renderDelete(e){return S.default.createElement("span",null,"\u786e\u5b9a\u8981\u5220\u9664",S.default.createElement("i",{className:"delete-data"},e),"\u8fd9\u4e2a\u6807\u51c6\u7c7b\u578b\u5417")}render(){var e=this.state,t=(e.pageLoading,e.editVisible),a=e.deleteVisible,l=e.deleteMoreVisible,s=e.addruleVisible,d=(e.submitVisible,e.editModalKey),i=e.ruleModalKey,r=(e.submitModalKey,e.isAdd,e.ruleName),m=(e.clear,e.addRuleDisabled),u=e.isRuleManage,c=e.isShowCommit,o=e.isView,h=this.props,p=h.sunmRule,f=h.addLoading,y=h.editLoading,E=h.deleteLoading,g=h.pageLoadings,N=p.dataList,C=(p.sysSources,p.department,p.classTree),w=(p.standardTypeList,p.ruleType,p.shortNameList),k=(p.editRule,p.dataItemInfo);return S.default.createElement("div",{className:"sunm-content sunm-standard-content"},S.default.createElement("div",{className:"sunm-inner-content top"},S.default.createElement("div",{className:"sunm-inner-column"},S.default.createElement("div",{className:"sunm-inner-column-cont"},this.renderSearchList(),this.renderAction(),S.default.createElement("div",{className:"table-cont"},g?S.default.createElement(n.default,{style:{display:"block",padding:"200px 0"}}):this.renderTypeTable(N)),S.default.createElement("div",{className:"totallist"},S.default.createElement("span",{className:"total"},N.pageInfo.total),"\u6761\u6570\u636e")))),c?S.default.createElement(I.default,{onConfirm:this.handleSaveChange}):"",S.default.createElement(v.default,{width:750,Key:d,visible:t,title:o?"\u67e5\u770b\u68c0\u6838\u89c4\u5219":"\u7f16\u8f91\u68c0\u6838\u89c4\u5219",btnLoading:y,isView:o,submit:e=>{this.handleSaveEdit(e)},onClose:this.handleCloseEdit}),S.default.createElement(b.default,{ref:"SunmAddRule",width:750,Key:i,visible:s,title:"\u65b0\u589e\u68c0\u6838\u89c4\u5219",classTree:C,shortNameList:w,editData:k,selectDataType:e=>{this.handleSelectClassType(e)},selectShortName:e=>{this.handleSelectShortName(e)},isRuleManage:u,submitDisabled:m,updateRuleList:e=>{this.handleUpdateRuleList(e)},btnLoading:f,submit:e=>{this.handleSaveRule(e)},onClose:this.handleCloseEdit}),S.default.createElement(R.default,{hideHeader:"sunm-modal-head-hide",visible:a,title:"\u5220\u9664\u63d0\u793a",btnloading:E,ok:()=>{this.handleSaveDelete([this.state.ruleId])},cancel:this.handleCloseDelete,content:this.renderDelete(r)}),S.default.createElement(R.default,{hideHeader:"sunm-modal-head-hide",visible:l,title:"\u5220\u9664\u63d0\u793a",btnloading:E,ok:()=>{this.handleSaveDelete(this.state.ruleIds)},cancel:this.handleCloseDelete,content:S.default.createElement("span",null,"\u786e\u5b9a\u5220\u9664\u6240\u9009\u7684\u6570\u636e\u9879\u5417\uff1f")}))}},p=f))||p);t.default=V}}]);