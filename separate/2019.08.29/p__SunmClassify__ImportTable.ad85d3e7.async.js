(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{BuDA:function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var i=l(a("wCAj"));a("nRaC");var r=l(a("5RzL"));a("y8nQ");var o=l(a("Vl3Y"));a("5NDa");var d=l(a("5rEg"));a("+L6B");var c=l(a("2/Rp"));a("miYZ");var n,p,u,h=l(a("tsqr")),m=l(a("p0pE")),y=s(a("q1tI")),f=a("MuoO"),g=a("7DNP"),b=l(a("Qyje")),T=a("Jur2"),v=l(a("Mgiq")),D=(n=(0,f.connect)(e=>{var t=e.importTable,a=e.cachedData,l=e.resourceDirectory,s=e.loading;return{importTable:t,cachedData:a,resourceDirectory:l,loading:s}}),n((u=class extends y.Component{constructor(){super(...arguments),this.state={selectedRowKeys:[],detailedData:{}},this.columns=[{title:"\u82f1\u6587\u540d",dataIndex:"tableName",render:(e,t)=>y.default.createElement("span",{onClick:this.clickName.bind(this,t),className:"can-click"},e)},{title:"\u4e2d\u6587\u540d",dataIndex:"tableNameCn"},{title:"\u4e1a\u52a1\u7cfb\u7edf",dataIndex:"systemName"}],this.clickName=(e=>{this.props.dispatch({type:"importTable/getResourceDataItems",payload:{id:e.id}}),this.setState({detailedData:e})}),this.closeDetailedModal=(()=>{this.setState({detailedData:{}})}),this.onSelectChange=(e=>{this.setState({selectedRowKeys:e})}),this.changePage=((e,t,a)=>{var l=this.props.importTable.tableModelResource.params;this.props.dispatch({type:"importTable/getTableModelResource",payload:(0,m.default)({},l,{pageNum:e.current})})}),this.inquiry=(()=>{this.props.form.validateFieldsAndScroll((e,t)=>{if(!e){var a=b.default.parse(this.props.location.search.slice(1)),l=a.categoryType;this.props.dispatch({type:"importTable/getTableModelResource",payload:(0,m.default)({pageNum:1,pageSize:10,categoryType:l},t)})}})}),this.importData=(()=>{var e=this.state.selectedRowKeys,t=b.default.parse(this.props.location.search.slice(1)),a=t.categoryType;e.length?this.props.dispatch({type:"importTable/postToTableModel",payload:{categoryType:a,resourceIds:e}}).then(()=>{var e=this.props.importTable.tableModelResource.params;this.props.dispatch({type:"importTable/getTableModelResource",payload:e}),this.setState({selectedRowKeys:[]})}):h.default.warning("\u8bf7\u5148\u9009\u62e9\u8981\u5bfc\u5165\u7684\u8868")}),this.goBack=(()=>{this.props.dispatch(g.routerRedux.goBack())})}componentDidMount(){this.props.cachedData.systemTree.children||this.props.dispatch({type:"cachedData/getSystemTree"}),Object.keys(this.props.resourceDirectory.encyptList).length||this.props.dispatch({type:"resourceDirectory/getEncyptList"});var e=b.default.parse(this.props.location.search.slice(1)),t=e.categoryType;this.props.dispatch({type:"importTable/getTableModelResource",payload:{pageNum:1,pageSize:10,categoryType:t}})}render(){var e=this.props.form.getFieldDecorator,t=this.props.cachedData.systemTree,a=this.props.importTable,l=a.tableModelResource,s=a.resourceDataItems,n=this.props.resourceDirectory.encyptList,p=this.state,u=p.selectedRowKeys,h=p.detailedData,m=this.props.loading.effects["importTable/getTableModelResource"],f=this.props.loading.effects["importTable/getResourceDataItems"],g={selectedRowKeys:u,onChange:this.onSelectChange,hideDefaultSelections:!0,onSelection:this.onSelection};return y.default.createElement("div",null,y.default.createElement(c.default,{onClick:this.goBack,style:{marginBottom:10}},"\u8fd4\u56de"),y.default.createElement(o.default,{onSubmit:this.handleSubmit,layout:"inline"},y.default.createElement(o.default.Item,{label:"\u8868\u540d"},e("tableName",{})(y.default.createElement(d.default,{placeholder:"\u8bf7\u9009\u62e9\u8868\u540d"}))),y.default.createElement(o.default.Item,{label:"\u4e1a\u52a1\u7cfb\u7edf"},e("busSystemId",{})(y.default.createElement(r.default,{showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u4e1a\u52a1\u7cfb\u7edf",allowClear:!0,treeDefaultExpandAll:!0,dropdownMatchSelectWidth:!1,style:{width:200},dropdownStyle:{width:200,maxHeight:400},treeNodeFilterProp:"title"},(0,T.generateCheckTableName)(t.children)))),y.default.createElement(o.default.Item,null,y.default.createElement(c.default,{onClick:this.inquiry},"\u67e5\u8be2")),y.default.createElement(o.default.Item,null,y.default.createElement(c.default,{onClick:this.importData},"\u5bfc\u5165"))),y.default.createElement(i.default,{rowSelection:g,columns:this.columns,dataSource:l.list,pagination:{current:l.pageNum,total:l.total},onChange:this.changePage,loading:m,rowKey:"id",style:{marginTop:20}}),y.default.createElement(v.default,{visible:void 0!==h.id,closeModal:this.closeDetailedModal,title:h.tableName,data:s,encyptList:n,loading:f}))}},p=u))||p),w=o.default.create()(D);t.default=w},Mgiq:function(e,t,a){"use strict";var l=a("tAuX"),s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var i=s(a("kLXV"));a("g9YV");var r=s(a("wCAj")),o=l(a("q1tI"));class d extends o.Component{constructor(){super(...arguments),this.columns=[{title:"\u5b57\u6bb5\u540d",dataIndex:"chineseName"},{title:"\u6570\u636e\u9879\u4e2d\u6587\u540d",dataIndex:"dataItemName"},{title:"\u7c7b\u578b",dataIndex:"dataType"},{title:"\u957f\u5ea6",dataIndex:"length"},{title:"\u7cbe\u5ea6",dataIndex:"scale"},{title:"\u662f\u5426\u4e3a\u7a7a",dataIndex:"isNullAble",render:e=>"Y"===e?"\u662f":"\u5426"},{title:"\u662f\u5426\u4e3b\u952e",dataIndex:"isKey",render:(e,t)=>"1"===e?"\u662f":"\u5426"},{title:"\u5b89\u5168\u9009\u9879",dataIndex:"isEncypt",render:e=>{var t=this.props.encyptList,a=Object.entries(t).find(t=>t[1]==e);if(a)return a[0]}},{title:"\u4e1a\u52a1\u5b9a\u4e49",dataIndex:"businessDefinition"},{title:"\u7248\u672c",dataIndex:"stvVersion"}]}render(){var e=this.props,t=e.title,a=e.visible,l=e.closeModal,s=e.data,d=e.loading;return o.default.createElement(i.default,{title:t,visible:a,onCancel:l,footer:null,width:1e3},o.default.createElement(r.default,{columns:this.columns,dataSource:s,loading:d,rowKey:"id"}))}}var c=d;t.default=c}}]);