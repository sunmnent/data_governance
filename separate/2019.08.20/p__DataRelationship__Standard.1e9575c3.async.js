(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"3Xs+":function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var d=l(a("kLXV"));a("g9YV");var i=l(a("wCAj"));a("P2fV");var r=l(a("NJEC"));a("Pwec");var o=l(a("CtXQ")),u=l(a("rlhR"));a("jCWc");var s=l(a("kPKH"));a("+L6B");var c=l(a("2/Rp"));a("14J3");var f=l(a("BMrR"));a("5NDa");var m=l(a("5rEg")),p=l(a("p0pE"));a("miYZ");var h=l(a("tsqr")),v=l(a("2Taf")),y=l(a("vZ4D")),b=l(a("l4Ni")),g=l(a("ujKo")),I=l(a("MhPg"));a("OaEy");var E=l(a("2fM7"));a("y8nQ");var N,C,w,V=l(a("Vl3Y")),k=n(a("q1tI")),D=a("MuoO"),x=l(a("Mosh")),M=l(a("LvDl")),T=a("+mQZ"),R=l(a("PVYr")),S=V.default.Item,P=E.default.Option,j=function(e){function t(e){var a;return(0,v.default)(this,t),a=(0,b.default)(this,(0,g.default)(t).call(this,e)),a.onChangeType=function(e){a.setState({keyType:e})},a.onChangeDataItem=function(e,t){if(t&&t.length>0){var l=t.map(function(e){return{dataItemId:e.props.value,dataItemName:e.key,chineseName:e.props.children}});a.setState({selectDataItems:l})}},a.save=function(){var e=a.state,t=e.keyType,l=e.selectDataItems;a.props.form.validateFields(function(e,n){e||(3==t&&l.length<=1?h.default.warning("\u5f53\u524d\u7d22\u5f15\u7c7b\u578b\u4e3a\u7ec4\u5408\u7d22\u5f15\uff0c\u8bf7\u9009\u62e9\u4e24\u9879\u53ca\u4ee5\u4e0a\u6570\u636e\u9879"):(n.items=l,a.props.modalClose(n)))})},a.cancel=function(){a.props.modalClose()},a.state={dataMap:(0,p.default)({},e.modalInfo),optionDisabled:e.optionDisabled||!1,keyType:"",selectDataItems:[],dataItemIds:[]},a}return(0,I.default)(t,e),(0,y.default)(t,[{key:"componentDidMount",value:function(){this.setState(function(e){var t=e.dataMap;if(t&&t.items){var a=t.items.map(function(e){return e.dataItemId});return{dataItemIds:a,selectDataItems:t.items,keyType:t.indexType}}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.dataMap,l=t.dataItemIds,n=this.props.form.getFieldDecorator;return k.default.createElement(k.Fragment,null,k.default.createElement(V.default,{className:"fs1 cfs1"},k.default.createElement(f.default,null,k.default.createElement(S,{label:"\u7d22\u5f15\u540d\u79f0",className:"fs1-item"},n("indexName",{initialValue:a.indexName,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7d22\u5f15\u540d\u79f0\uff01"}]})(k.default.createElement(m.default,{className:"fs1-controler",maxLength:500,placeholder:"\u7d22\u5f15\u540d\u79f0"})))),k.default.createElement(f.default,null,k.default.createElement(S,{label:"\u7d22\u5f15\u7f16\u7801",className:"fs1-item"},n("indexCode",{initialValue:a.indexCode,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7d22\u5f15\u7f16\u7801\uff01"}]})(k.default.createElement(m.default,{className:"fs1-controler",maxLength:500,placeholder:"\u7d22\u5f15\u7f16\u7801"})))),k.default.createElement(f.default,null,k.default.createElement(S,{label:"\u7d22\u5f15\u7c7b\u578b",className:"fs1-item"},n("indexType",{initialValue:a.indexType,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7d22\u5f15\u7c7b\u578b\uff01"}]})(k.default.createElement(E.default,{style:{width:"100%"},placeholder:"\u7d22\u5f15\u7c7b\u578b",onChange:this.onChangeType},k.default.createElement(P,{value:2},"\u666e\u901a\u7d22\u5f15"),k.default.createElement(P,{value:3},"\u7ec4\u5408\u7d22\u5f15"))))),k.default.createElement(f.default,null,k.default.createElement(S,{label:"\u6570\u636e\u9879",className:"fs1-item"},n("items",{initialValue:l,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6570\u636e\u9879\uff01"}]})(k.default.createElement(E.default,{mode:"multiple",style:{width:"100%"},placeholder:"\u6570\u636e\u9879\u4e2d\u6587\u7b80\u79f0",onChange:function(t,a){return e.onChangeDataItem(t,a)}},this.props.dataItems&&this.props.dataItems.map(function(e){return k.default.createElement(P,{value:e.dataItemId,key:e.dataItemName},e.chineseName)})))))),k.default.createElement(f.default,{className:"margin-top10"},k.default.createElement(s.default,{span:24,className:"text-center"},k.default.createElement(c.default,{type:"primary",size:"small",onClick:this.save,className:"margin-right8"},"\u786e\u5b9a"),k.default.createElement(c.default,{size:"small",onClick:this.cancel},"\u53d6\u6d88"))))}}]),t}(k.Component),q=V.default.create()(j),L=(N=(0,D.connect)(function(e){var t=e.dataRelationship;return{dataRelationship:t}}),N((w=function(e){function t(e){var a;return(0,v.default)(this,t),a=(0,b.default)(this,(0,g.default)(t).call(this,e)),a.columns=function(){var e="view"===a.props.type,t=[{title:"\u7d22\u5f15\u540d\u79f0",dataIndex:"indexName",width:200},{title:"\u7d22\u5f15\u7f16\u7801",dataIndex:"indexCode",width:200},{title:"\u7d22\u5f15\u7c7b\u578b",dataIndex:"indexType",width:120,render:function(e,t){return 1==e?"\u4e3b\u952e\u7d22\u5f15":2==e?"\u666e\u901a\u7d22\u5f15":3==e?"\u7ec4\u5408\u7d22\u5f15":""}},{title:"\u4e2d\u6587\u7b80\u79f0",key:"chineseName",width:150,render:function(e,t){var a=t.items,l=[];return a&&a.length>0&&a.forEach(function(e){l.push(e.chineseName)}),l&&l.length>0?k.default.createElement("span",null,l.join(";")):""}},{title:"\u6570\u636e\u9879\u540d",key:"dataItemName",width:150,render:function(e,t){var a=t.items,l=[];return a&&a.length>0&&a.forEach(function(e){l.push(e.dataItemName)}),l&&l.length>0?k.default.createElement("span",null,l.join(";")):""}},{title:"\u64cd\u4f5c",dataIndex:"operate",align:"center",render:function(e,t,l){return k.default.createElement(k.Fragment,null,k.default.createElement(o.default,{type:"edit",onClick:function(){a.tableAction({type:"edit",key:"bjsy",record:t})},style:{marginRight:15,cursor:"pointer"}}),k.default.createElement(r.default,{title:"\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f",onConfirm:a.deleteRecord.bind((0,u.default)(a),l)},k.default.createElement(o.default,{type:"delete",style:{cursor:"pointer"}})))},width:100}];return e?t.slice(0,-1):t}(),a.modalContent={bjsy:q},a.tableAction=function(e){var t=e.type,l=e.key,n=e.record,d=void 0===n?{}:n;switch(t){case"add":a.setState({modalVisible:!0,modalType:t,modalKey:l,modalInfo:{}});break;case"edit":a.setState({modalVisible:!0,modalType:t,modalKey:l,modalInfo:(0,p.default)({},d)});break}},a.deleteRecord=function(e){var t=M.default.cloneDeep(a.props.dataRelationship.standardInfo),l=t.tableModel.indexs;l.splice(e,1),a.props.dispatch({type:"dataRelationship/save",payload:{standardInfo:t}})},a.modalClose=function(e){var t=a.state,l=t.modalType,n=t.modalInfo;if(e){var d=M.default.cloneDeep(a.props.dataRelationship.standardInfo),i=d.tableModel.indexs,r=void 0===i?[]:i;if("add"===l)r.push((0,p.default)({key:x.default.uuid()},e));else if("edit"===l){var o=r.findIndex(function(e){return e.id===n.id});r[o]=(0,p.default)({},n,e)}d.tableModel.indexs=r,a.props.dispatch({type:"dataRelationship/save",payload:{standardInfo:d}}),a.setState({modalVisible:!1,modalKey:1})}else a.setState({modalVisible:!1,modalKey:1})},a.state={modalVisible:!1,modalKey:1,modalInfo:{},optionDisabled:!1},a}return(0,I.default)(t,e),(0,y.default)(t,[{key:"render",value:function(){var e=this,t=this.props.dataRelationship.standardInfo.tableModel,a=void 0===t?{}:t,l=this.state,n=l.modalVisible,r=l.modalType,o=l.modalKey,u=l.modalInfo,s=l.optionDisabled,f="view"===this.props.type;return k.default.createElement(k.Fragment,null,k.default.createElement("div",{className:R.default.title},"\u7d22\u5f15\u4fe1\u606f"),k.default.createElement("div",null,!f&&k.default.createElement(c.default,{icon:"plus",size:"small",onClick:function(){return e.tableAction({type:"add",key:"bjsy"})}},"\u65b0\u5efa\u7d22\u5f15")),k.default.createElement(i.default,{bordered:!0,columns:this.columns,dataSource:a.indexs,pagination:!1,size:"small",rowKey:function(e,t){return t},style:{marginTop:10}}),k.default.createElement(d.default,{visible:n,title:"".concat("add"===r?"\u65b0\u589e":"\u7f16\u8f91","\u7d22\u5f15"),footer:null,maskClosable:!1,width:"50%",onCancel:function(){return e.modalClose("")}},this.modalContent[o]&&(0,T.InjectControler)(this.modalContent[o],{modalInfo:u,dataItems:a.items,optionDisabled:s,modalClose:function(t){return e.modalClose(t)}})))}}]),t}(k.Component),C=w))||C);t.default=L},"70sc":function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var d=l(a("kLXV"));a("g9YV");var i=l(a("wCAj")),r=l(a("p0pE"));a("P2fV");var o=l(a("NJEC"));a("Pwec");var u=l(a("CtXQ"));a("5NDa");var s=l(a("5rEg"));a("Q9mQ");var c=l(a("diRs"));a("miYZ");var f=l(a("tsqr")),m=l(a("2Taf")),p=l(a("vZ4D")),h=l(a("l4Ni")),v=l(a("ujKo")),y=l(a("rlhR")),b=l(a("MhPg"));a("OaEy");var g,I,E,N=l(a("2fM7")),C=n(a("q1tI")),w=a("MuoO"),V=l(a("LGns")),k=l(a("LvDl")),D=l(a("PVYr")),x=l(a("uCBh")),M=N.default.Option,T=10,R=(g=(0,w.connect)(function(e){var t=e.sunmQualityControl,a=e.resourceDirectory,l=e.dataRelationship;return{sunmQualityControl:t,resourceDirectory:a,dataRelationship:l}}),g((E=function(e){function t(){var e,a;(0,m.default)(this,t);for(var l=arguments.length,n=new Array(l),d=0;d<l;d++)n[d]=arguments[d];return a=(0,h.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(n))),a.state={modalVisible:!1,modalKey:"",tableList:[],allTableData:[]},a.columns=function(){var e="view"===a.props.type,t=[{title:"\u4e2d\u6587\u7b80\u79f0",dataIndex:"chineseName",width:150},{title:"\u6570\u636e\u9879\u540d",dataIndex:"dataItemName",width:150},{title:"\u7c7b\u578b",dataIndex:"dataTypeName",width:120},{title:"\u957f\u5ea6",dataIndex:"length",width:80},{title:"\u7cbe\u5ea6",dataIndex:"percision",width:80},{title:"\u68c0\u6838\u7c7b\u522b",dataIndex:"checkType",width:150,render:function(t,l){var n=l.rules.map(function(e){return e.typeName});return l.checkRules.length>0&&C.default.createElement("span",{className:"block font-size12 text-ellipsis",style:{width:125,height:30,cursor:"pointer"},onClick:function(){V.default.getStandardCheckType({id:l.dataItemId}).then(function(e){e&&e.success?a.tableAction({type:"a",key:"rules",id:l.dataItemId,value:{dataItemId:l.dataItemId,list:e.obj}}):e&&f.default.error(e.msg)})}},n.length>0?C.default.createElement("a",{className:"inline-block margin-top5 v-align-middle",title:n.join("/")},n.join("/")):!e&&C.default.createElement("a",{style:{color:"#1890ff",fontSize:"20px",textAlign:"center"},className:"inline-block v-align-middle"},"+"))}},{title:"\u7f16\u7801\u6807\u51c6",dataIndex:"codeName",width:150,render:function(e,t){var l=t.codestandard&&t.codestandard.id;return C.default.createElement(c.default,{content:a.popoverContent(l),placement:"left"},C.default.createElement("div",{onMouseEnter:a.mouseEnterHandle.bind((0,y.default)(a),l)},t.codestandard&&t.codestandard.codeName))}},{title:"\u662f\u5426\u4e3a\u7a7a",dataIndex:"isNullAble",align:"center",width:100,render:function(t,l,n){return C.default.createElement(N.default,{size:"small",value:t,onChange:a.changeValue.bind((0,y.default)(a),n,"isNullAble"),disabled:e,style:{width:"90%"}},C.default.createElement(M,{value:"Y"},"\u662f"),C.default.createElement(M,{value:"N"},"\u5426"))}},{title:"\u662f\u5426\u4e3b\u952e",key:"isPk",align:"center",width:100,render:function(t,l,n){return C.default.createElement(N.default,{size:"small",value:l.isPk?2:1,onChange:function(e){a.changeValue(n,"isPk",2===e),requestAnimationFrame(function(){a.changeValue(n,"isNullAble","N")})},disabled:e,style:{width:"90%"}},C.default.createElement(M,{value:2},"\u662f"),C.default.createElement(M,{value:1},"\u5426"))}},{title:"\u5b89\u5168\u9009\u9879",dataIndex:"isEncypt",align:"center",width:120,render:function(t,l,n){var d=a.props.resourceDirectory.encyptList;return C.default.createElement(N.default,{size:"small",value:t,onChange:a.changeValue.bind((0,y.default)(a),n,"isEncypt"),disabled:e,style:{width:"90%"}},Object.entries(d).map(function(e){return C.default.createElement(M,{value:e[1],key:e[1]},e[0])}))}},{title:"\u4e1a\u52a1\u5b9a\u4e49\u53ca\u89c4\u5219",dataIndex:"businessDefinition",align:"center",width:180,render:function(t,l,n){return C.default.createElement(s.default,{size:"small",value:t,onChange:a.changeValue.bind((0,y.default)(a),n,"businessDefinition"),disabled:e,style:{width:"90%"}})}},{title:"\u5916\u8054\u8868",dataIndex:"frTableId",render:function(t,l,n){return C.default.createElement(N.default,{allowClear:!0,showSearch:!0,size:"small",value:t,optionFilterProp:"children",dropdownClassName:"modal-select",onChange:function(e){a.changeValue(n,"frTableId",e),requestAnimationFrame(function(){a.changeValue(n,"frTableItemId","")})},disabled:e,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},style:{width:180}},a.state.tableList.map(function(e,t){return C.default.createElement(M,{value:e.id,key:e.value},e.label)}))},align:"center",width:200},{title:"\u5916\u8054\u5b57\u6bb5",dataIndex:"frTableItemId",render:function(t,l,n){var d=a.state.allTableData,i=[],r=[];if(l.frTableId){d&&d.length>0&&(i=d.filter(function(e){return e.id==l.frTableId}));var o=i[0]?i[0].items:[];r=o.map(function(e){return{id:e.id,value:e.dataItemId,label:e.chineseName}})}return C.default.createElement(N.default,{showSearch:!0,allowClear:!0,size:"small",dropdownClassName:"modal-select",value:l.frTableItemId,optionFilterProp:"children",onChange:a.changeValue.bind((0,y.default)(a),n,"frTableItemId"),disabled:e,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},style:{width:"90%"}},r.map(function(e,t){return C.default.createElement(M,{value:e.id,key:e.value},e.label)}))},align:"center",width:200},{title:"\u7248\u672c\u4fe1\u606f",dataIndex:"stvVersion",width:120},{title:"\u64cd\u4f5c",dataIndex:"operate",align:"center",render:function(e,t,l){return C.default.createElement(o.default,{title:"\u5220\u9664\u6570\u636e\u9879\u5c06\u5f71\u54cd\u5230\u7d22\u5f15\u7684\u5f15\u7528\uff0c\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f",onConfirm:a.deleteRecord.bind((0,y.default)(a),l)},C.default.createElement(u.default,{type:"delete",style:{cursor:"pointer"}}))},fixed:"right",width:60}];return e?t.slice(0,-1):t}(),a.popOverColumns=[{title:"\u4ee3\u7801\u503c",dataIndex:"code",key:"code"},{title:"\u4ee3\u7801\u542b\u4e49",dataIndex:"name",key:"name"}],a.fetchTable=function(e){return V.default.fetchTable(e).then(function(e){if(e&&e.obj){var t=e.obj.map(function(e){return{id:e.id,value:e.id,label:"".concat(e.tableName," (").concat(e.tableNameCn,")")}});a.setState({tableList:t,allTableData:e.obj})}})},a.changeValue=function(e,t,l){var n="object"===typeof l?l.target.value:l,d=k.default.cloneDeep(a.props.dataRelationship.standardInfo);d.tableModel.items[e][t]=n,a.props.dispatch({type:"dataRelationship/save",payload:{standardInfo:d}})},a.tableAction=function(e){var t=e.type,l=e.key,n=e.id,d=e.value,i=a.props.dataRelationship.standardInfo.tableModel.items,o=i.find(function(e){return e.dataItemId===n})[l],u=[],s={},c=d.list,f=d.dataItemId;c.forEach(function(e){delete e.id,o&&o.length>0&&o.forEach(function(t){e.typeId==t.typeId&&(e=t)}),s[e.typeId]=(0,r.default)({},e)}),o&&o.length>0&&o.forEach(function(e){u.push(e.typeId)});var m={dataItemId:f,selectedRowKeys:u,checkRules:s};a.setState({modalVisible:!0,modalKey:222,modalInfo:{type:t,key:l,id:n,value:m}})},a.popoverContent=function(e){var t=a.props.sunmQualityControl.allCodePages,l=t[e]||{},n=l.list,d=l.pageNum,r=l.total;return C.default.createElement(i.default,{pagination:{pageSize:T,current:d,total:r},onChange:a.changePopOverTable.bind((0,y.default)(a),e),size:"small",dataSource:n,columns:a.popOverColumns,rowKey:"id",className:D.default.popoverTable})},a.mouseEnterHandle=function(e,t){var l=a.props.sunmQualityControl.allCodePages;l[e]||(a.requestIn||(a.requestIn=[]),a.requestIn.includes(e)||(a.requestIn.push(e),a.props.dispatch({type:"sunmQualityControl/getCodePages",payload:{id:e,pageNum:1,pageSize:T}}).finally(function(){a.requestIn=a.requestIn.filter(function(t){return t!==e})})))},a.changePopOverTable=function(e,t,l,n){a.requestIn.push(e),a.props.dispatch({type:"sunmQualityControl/getCodePages",payload:{id:e,pageNum:t.current,pageSize:T}}).finally(function(){a.requestIn=a.requestIn.filter(function(t){return t!==e})})},a.deleteRecord=function(e){var t=k.default.cloneDeep(a.props.dataRelationship.standardInfo),l=t.tableModel.items[e].dataItemName,n=t.dataIntegrateVo,d=void 0===n?{}:n,i=d.dataFlows,r=void 0===i?[]:i;d.dataFlows=r.filter(function(e){return e.targetFieldName!==l});var o=function(a){return a.some(function(a){return a.dataItemId===t.tableModel.items[e].dataItemId})};t.tableModel.indexs=t.tableModel.indexs.filter(function(e){return!o(e.items)}),t.tableModel.items.splice(e,1),a.props.dispatch({type:"dataRelationship/save",payload:{standardInfo:t}})},a.modalClose=function(e){if(e){var t=a.state.modalInfo,l=k.default.cloneDeep(a.props.dataRelationship.standardInfo),n=l.tableModel.items,d=n.find(function(e){return e.dataItemId===t.id});d.rules=e,a.props.dispatch({type:"dataRelationship/save",payload:{standardInfo:l}}),a.setState({modalInfo:{},modalKey:2,modalVisible:!1})}else a.setState({modalKey:2,modalVisible:!1})},a}return(0,b.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.id;this.fetchTable({id:e,type:2})}},{key:"render",value:function(){var e=this,t=this.props.dataRelationship.standardInfo.tableModel,a=void 0===t?{}:t,l=this.state,n=l.modalVisible,r=l.modalKey;return C.default.createElement("div",null,C.default.createElement("div",{className:D.default.title},"\u6807\u51c6\u8868\u7ed3\u6784"),C.default.createElement(i.default,{columns:this.columns,dataSource:a.items,scroll:{x:1700},rowKey:"dataItemId"}),C.default.createElement(d.default,{key:r,visible:n,title:"\u7f16\u8f91\u68c0\u6838\u7c7b\u522b",footer:null,maskClosable:!1,width:"70%",onCancel:this.modalClose},n&&C.default.createElement(x.default,{data:function(){return e.state.modalInfo.value},dataItems:function(){var e={};return a.items.forEach(function(t){e[t.dataItemId]=t}),e},modalClose:this.modalClose})))}}]),t}(C.Component),I=E))||I),S=R;t.default=S},GKUq:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("y8nQ");var d=l(a("Vl3Y"));a("+L6B");var i,r,o,u=l(a("2/Rp")),s=l(a("p0pE")),c=l(a("2Taf")),f=l(a("vZ4D")),m=l(a("l4Ni")),p=l(a("ujKo")),h=l(a("MhPg")),v=n(a("q1tI")),y=a("MuoO"),b=a("7DNP"),g=l(a("LvDl")),I=l(a("tSUh")),E=l(a("PVYr")),N=l(a("Tw//")),C=l(a("3Xs+")),w=l(a("70sc")),V=l(a("S7zV")),k=(i=(0,y.connect)(function(e){var t=e.dataRelationship,a=e.resourceDirectory,l=e.sunmQualityControl,n=e.cachedData;return{dataRelationship:t,resourceDirectory:a,sunmQualityControl:l,cachedData:n}}),i((o=function(e){function t(){var e,a;(0,c.default)(this,t);for(var l=arguments.length,n=new Array(l),d=0;d<l;d++)n[d]=arguments[d];return a=(0,m.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(n))),a.goBack=function(){a.props.dispatch(b.routerRedux.goBack())},a.submit=function(e){var t=a.props.dataRelationship.targetDataSource,l=g.default.cloneDeep(a.props.dataRelationship.standardInfo);l.tableModel.type=2,l.tableModel.busSystemId=l.dataCollection.systemId,l.dataIntegrateVo.dataFlows=l.dataIntegrateVo.dataFlows.filter(function(e){return e.targetFieldName}),l.dataIntegrateVo.dataFlows.forEach(function(e){e.targetTableName=l.tableModel.tableName}),l.dataIntegrateVo.integrateSources=l.dataIntegrateVo.integrateSources.map(function(e){return(0,s.default)({id:"",integrateId:""},e,{sourceId:l.dataCollection.sourceId,sourceTabName:l.dataCollection.tableName})}),l.dataIntegrateVo.dataIntegrate.targetTabName=l.tableModel.tableName,l.dataIntegrateVo.dataIntegrate.sourceId=t[0].id,a.props.dispatch({type:"dataRelationship/saveStandardData",payload:(0,s.default)({},l,{operation:e})}).then(a.goBack)},a}return(0,h.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.dispatch({type:"dataRelationship/getStandardInfo",payload:{id:e}}),this.props.dispatch({type:"dataRelationship/queryTargetDataSource",payload:{sourceName:"\u6807\u51c6\u5e93"}}),Object.keys(this.props.resourceDirectory.encyptList).length||this.props.dispatch({type:"resourceDirectory/getEncyptList"})}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.props.location.query.type;return v.default.createElement("div",{className:E.default.all},v.default.createElement(I.default,null),v.default.createElement(N.default,{type:t}),v.default.createElement(V.default,{type:t}),v.default.createElement(w.default,{id:e,type:t}),v.default.createElement(C.default,{type:t}),"view"!==t&&v.default.createElement("div",{className:E.default.btns},v.default.createElement(u.default,{onClick:this.goBack},"\u53d6\u6d88"),v.default.createElement(u.default,{onClick:this.submit.bind(this,1)},"\u4fdd\u5b58"),v.default.createElement(u.default,{onClick:this.submit.bind(this,2),type:"primary",htmlType:"submit"},"\u63d0\u4ea4")),v.default.createElement("div",{className:E.default.explain},"\u8bf4\u660e\uff1a1.\u63d0\u4ea4\u540e\u8bf7\u5728\u2018\u6570\u636e\u6807\u51c6\u5ba1\u6838\u2019\u9875\u9762\u627e\u5230\u5f53\u524d\u6807\u51c6\u8868\u5ba1\u6838"))}}]),t}(v.Component),r=o))||r),D=d.default.create()(k);t.default=D},PVYr:function(e,t,a){e.exports={all:"all___2jOs3",title:"title___1Nsl_",twoColumns:"twoColumns___1hO4y",label:"label___1wTLt",btns:"btns___1MQLA",explain:"explain___WHAmu"}},S7zV:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var d=l(a("wCAj")),i=l(a("gWZ8")),r=l(a("p0pE")),o=l(a("eHn4"));a("5NDa");var u=l(a("5rEg")),s=l(a("2Taf")),c=l(a("vZ4D")),f=l(a("l4Ni")),m=l(a("ujKo")),p=l(a("rlhR")),h=l(a("MhPg"));a("OaEy");var v,y,b,g=l(a("2fM7")),I=n(a("q1tI")),E=a("MuoO"),N=l(a("LvDl")),C=l(a("PVYr")),w=l(a("RSsB")),V=g.default.Option,k=(v=(0,E.connect)(function(e){var t=e.dataRelationship;return{dataRelationship:t}}),v((b=function(e){function t(){var e,a;(0,s.default)(this,t);for(var l=arguments.length,n=new Array(l),d=0;d<l;d++)n[d]=arguments[d];return a=(0,f.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(n))),a.state={modalVisible:!1,record:{}},a.columns=function(){var e="view"===a.props.type,t=[{title:"\u6570\u636e\u9879",dataIndex:"name"},{title:"\u4e2d\u6587\u7b80\u79f0",dataIndex:"age"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u957f\u5ea6",dataIndex:"length"},{title:"\u6570\u636e\u9879",dataIndex:"targetFieldName",render:function(t,l,n){var d=a.props.dataRelationship.standardInfo.tableModel,i=void 0===d?{}:d,r=a.findByName(l.name);return I.default.createElement(g.default,{value:r.targetFieldName,onChange:a.changeValue.bind((0,p.default)(a),l,"targetFieldName"),allowClear:!0,disabled:e,style:{width:120}},i.items&&i.items.map(function(e){return I.default.createElement(V,{value:e.dataItemName,key:e.dataItemName},e.dataItemName)}))}},{title:"\u5b57\u6bb5\u89c4\u5219",dataIndex:"rule",render:function(t,l,n){var d=a.findByName(l.name);return I.default.createElement(u.default,{value:d.rule,onChange:a.changeValue.bind((0,p.default)(a),l,"rule"),disabled:e||!d.targetFieldName})}},{title:"\u64cd\u4f5c",dataIndex:"actions",render:function(e,t,l){return I.default.createElement("span",{onClick:a.showModal.bind((0,p.default)(a),t),style:{cursor:"pointer"}},"\u9009\u62e9\u6570\u636e\u9879")}}];return e?t.slice(0,-1):t}(),a.findByName=function(e){var t=a.props.dataRelationship.standardInfo.dataIntegrateVo,l=void 0===t?{}:t,n=l.dataFlows,d=void 0===n?[]:n,i=d.find(function(t){return t.sourceFieldName===e});return i||{}},a.changeValue=function(e,t,l){var n="object"===typeof l?l.target.value:l,d=N.default.cloneDeep(a.props.dataRelationship.standardInfo),i=d.dataIntegrateVo.dataFlows.findIndex(function(t){return t.sourceFieldName===e.name});if(-1===i){var r=d.dataCollection,u=void 0===r?{}:r,s=a.props.dataRelationship.targetDataSource,c=(0,o.default)({id:"",sourceDatasourceId:u.sourceId,sourceTableName:u.tableName,targetTableName:"",sourceFieldName:e.name,targetDatasourceId:s[0].id,targetFieldName:"",rule:""},t,n);d.dataIntegrateVo.dataFlows.push(c)}else d.dataIntegrateVo.dataFlows[i][t]=n;a.props.dispatch({type:"dataRelationship/save",payload:{standardInfo:d}})},a.showModal=function(e){a.setState({modalVisible:!0,record:e})},a.hideModal=function(){a.setState({modalVisible:!1})},a.addData=function(e){var t,l=e.map(function(e){return(0,r.default)({isNullAble:"Y",isEncypt:1},e,{id:""})}),n=N.default.cloneDeep(a.props.dataRelationship.standardInfo);(t=n.tableModel.items).push.apply(t,(0,i.default)(l)),a.props.dispatch({type:"dataRelationship/save",payload:{standardInfo:n}}),a.changeValue(a.state.record,"targetFieldName",l[0].dataItemName)},a}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.dataRelationship.standardInfo,t=e.dataCollection,a=void 0===t?{}:t,l=e.tableModel,n=void 0===l?{}:l,i=this.state.modalVisible;return I.default.createElement("div",null,I.default.createElement("div",{className:C.default.title},"\u6570\u636e\u6620\u5c04\u5173\u7cfb"),I.default.createElement(d.default,{columns:this.columns,dataSource:a.columnsList,rowKey:"id"}),I.default.createElement(w.default,{addData:this.addData,existData:n.items||[],modalVisible:i,hideModal:this.hideModal}))}}]),t}(I.Component),y=b))||y),D=k;t.default=D},"Tw//":function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("7Kak");var d=l(a("9yH6")),i=l(a("qIgq"));a("miYZ");var r=l(a("tsqr")),o=l(a("2Taf")),u=l(a("vZ4D")),s=l(a("l4Ni")),c=l(a("ujKo")),f=l(a("MhPg"));a("5NDa");var m=l(a("5rEg"));a("OaEy");var p,h,v,y=l(a("2fM7")),b=n(a("q1tI")),g=a("MuoO"),I=l(a("LvDl")),E=l(a("PVYr")),N=a("ATFn"),C=y.default.Option,w=m.default.TextArea,V=(p=(0,g.connect)(function(e){var t=e.dataRelationship;return{dataRelationship:t}}),p((v=function(e){function t(){var e,a;(0,o.default)(this,t);for(var l=arguments.length,n=new Array(l),d=0;d<l;d++)n[d]=arguments[d];return a=(0,s.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(n))),a.changeValue=function(e,t){var l="object"===typeof t?t.target.value:t;if("tableModel.tableName"!==e||!l||l.match(N.ENGLISH_CHART)){var n=e.split("."),d=(0,i.default)(n,2),o=d[0],u=d[1],s=I.default.cloneDeep(a.props.dataRelationship.standardInfo);"dataIntegrate"===o?s.dataIntegrateVo[o][u]=l:s[o][u]=l,a.props.dispatch({type:"dataRelationship/save",payload:{standardInfo:s}})}else r.default.error("\u8bf7\u8f93\u5165\u4ee5\u82f1\u6587\u5f00\u5934\u7684\u82f1\u6587\u540d")},a.changeLogTable=function(e){var t=e.target.value;a.changeValue("tableModel.isLogTable",t),requestAnimationFrame(function(){a.changeValue("tableModel.isIncriease",t)})},a}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.dataRelationship.standardInfo,t=e.tableModel,a=void 0===t?{}:t,l=e.dataIntegrateVo,n=void 0===l?{}:l,i=e.dataCollection,r=void 0===i?{}:i,o=n.dataIntegrate,u=void 0===o?{}:o,s="view"===this.props.type;return b.default.createElement("div",null,b.default.createElement("div",{className:E.default.title},"\u6e90\u8868\u4fe1\u606f"),b.default.createElement("div",{className:E.default.twoColumns},b.default.createElement("div",null,b.default.createElement("span",{className:E.default.label},"\u6e90\u8868\uff1a"),b.default.createElement("span",null,r.tableName)),b.default.createElement("div",null,b.default.createElement("span",{className:E.default.label},"\u4e1a\u52a1\u7cfb\u7edf\uff1a"),b.default.createElement("span",null,r.systemName))),b.default.createElement("div",{className:E.default.title},"\u6807\u51c6\u8868\u4fe1\u606f"),b.default.createElement("div",null,b.default.createElement("div",{className:E.default.twoColumns},b.default.createElement("div",null,b.default.createElement("span",{className:E.default.label},"\u6807\u51c6\u8868\uff1a"),b.default.createElement("span",null,b.default.createElement(m.default,{value:a.tableName,onChange:this.changeValue.bind(this,"tableModel.tableName"),disabled:s,style:{width:200}}))),b.default.createElement("div",null,b.default.createElement("span",{className:E.default.label},"\u4e2d\u6587\u540d\uff1a"),b.default.createElement("span",null,b.default.createElement(m.default,{value:a.tableNameCn,onChange:this.changeValue.bind(this,"tableModel.tableNameCn"),disabled:s,style:{width:200}})))),b.default.createElement("div",{className:E.default.twoColumns},b.default.createElement("div",null,b.default.createElement("span",{className:E.default.label},"\u6d41\u6c34\u8868\u6807\u8bc6\uff1a"),b.default.createElement("span",null,b.default.createElement(d.default.Group,{value:a.isLogTable,onChange:this.changeLogTable,disabled:s},b.default.createElement(d.default,{value:"Y"},"\u6d41\u6c34\u8868"),b.default.createElement(d.default,{value:"N"},"\u975e\u6d41\u6c34\u8868")))),b.default.createElement("div",null,b.default.createElement("span",{className:E.default.label},"\u662f\u5426\u589e\u91cf\uff1a"),b.default.createElement("span",null,b.default.createElement(d.default.Group,{value:a.isIncriease,disabled:"Y"===a.isLogTable||s,onChange:this.changeValue.bind(this,"tableModel.isIncriease")},b.default.createElement(d.default,{value:"Y"},"\u589e\u91cf"),b.default.createElement(d.default,{value:"N"},"\u5168\u91cf"))))),b.default.createElement("div",{className:E.default.twoColumns},b.default.createElement("div",null,b.default.createElement("span",{className:E.default.label},"\u8fc7\u6ee4\u6761\u4ef6\uff1a"),b.default.createElement("span",null,b.default.createElement(m.default,{value:u.condition,onChange:this.changeValue.bind(this,"dataIntegrate.condition"),disabled:s,style:{width:200}}))),b.default.createElement("div",null,b.default.createElement("span",{className:E.default.label},"\u96c6\u6210\u7c7b\u578b\uff1a"),b.default.createElement("span",null,b.default.createElement(y.default,{value:u.type,onChange:this.changeValue.bind(this,"dataIntegrate.type"),disabled:s,style:{width:120}},b.default.createElement(C,{value:0},"\u754c\u9762\u914d\u7f6e"),b.default.createElement(C,{value:1},"\u5b58\u50a8\u8fc7\u7a0b"),b.default.createElement(C,{value:2},"sql"))))),2===u.type&&b.default.createElement("div",{style:{marginBottom:"0.6rem"}},b.default.createElement("span",{className:E.default.label},"SQL \u8bed\u53e5\uff1a"),b.default.createElement(w,{rows:5,value:u.config,onChange:this.changeValue.bind(this,"dataIntegrate.config"),disabled:s})),b.default.createElement("div",{className:E.default.twoColumns},b.default.createElement("div",null,b.default.createElement("span",{className:E.default.label},"\u8bf4\u660e\uff1a"),b.default.createElement("span",null,b.default.createElement(m.default,{value:u.remark,onChange:this.changeValue.bind(this,"dataIntegrate.remark"),disabled:s,style:{width:"70%"}}))))))}}]),t}(b.Component),h=v))||h),k=V;t.default=k}}]);