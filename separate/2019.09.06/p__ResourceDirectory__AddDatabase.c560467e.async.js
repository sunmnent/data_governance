(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{Chv6:function(e,t,a){"use strict";var l=a("g09b"),i=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=l(a("2/Rp"));a("sRBo");var s=l(a("kaz8"));a("giR+");var d=l(a("fyUT"));a("5NDa");var n=l(a("5rEg"));a("7Kak");var u=l(a("9yH6"));a("OaEy");var c=l(a("2fM7"));a("y8nQ");var o,p,f,m=l(a("Vl3Y")),h=i(a("q1tI")),g=a("MuoO"),y=(l(a("Jt6A")),a("7DNP")),b=a("ATFn"),E=l(a("MpEX")),v=m.default.Item,N=c.default.Option,S=u.default.Group,D=n.default.TextArea,I=(o=(0,g.connect)(e=>{var t=e.resourceDirectory,a=e.tagMange,l=e.cachedData;return{resourceDirectory:t,tagMange:a,cachedData:l}}),o((f=class extends h.Component{constructor(){super(...arguments),this.handleSubmit=((e,t)=>{this.props.form.validateFieldsAndScroll((a,l)=>{a||(e&&(l.submitState=t),l.isAuth=l.isAuth?1:0,this.props.next(l,e))})}),this.blurTableName=(e=>{var t=this.props.form,a=t.setFieldsValue,l=t.getFieldValue,i=t.validateFields;if(l("tableName")){var r=l("tableName").toUpperCase();a({tableName:r}),i(["tableName"])}}),this.changeFileType=(e=>{var t=this.props.form.setFieldsValue;"N"===e&&t({isLogTable:"N",isIncriease:"N"})}),this.changeLogTable=(e=>{var t=this.props.form.setFieldsValue;t({isIncriease:e.target.value})}),this.changeMultiFlag=(e=>{var t=this.props.form.setFieldsValue;"M"===e&&t({fileType:"N",isIncriease:"N"})}),this.reload=(()=>{var e=this.props.form,t=e.setFieldsValue,a=e.getFieldValue;setTimeout(()=>{"N"===a("fileType")&&t({isIncriease:"N"})},0)}),this.goBack=(()=>{this.props.dispatch(y.routerRedux.goBack())}),this.filterOption=((e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0)}render(){var e=this.props.form,t=e.getFieldDecorator,a=e.getFieldValue,l=this.props.resourceDirectory,i=l.fileTypeObj,o=l.multiFlagObj,p=l.resourceTypeObj,f=l.systemList,g=l.secondCatagory,y=this.props.tagMange.tags,I=this.props,k=I.value,T=I.saveBtn,V=I.type,O="1"===V,C="0"!==T,F=!C||O,x=(e,t,a)=>{t&&!t.match(b.ENGLISH_CHART)&&a("\u8bf7\u8f93\u5165\u4ee5\u82f1\u6587\u5f00\u5934\u7684\u82f1\u6587\u540d"),a()};return h.default.createElement(m.default,{className:E.default.basicInformation},h.default.createElement(v,{label:"\u8d44\u6e90\u540d\u79f0"},t("tableName",{initialValue:k.tableName,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d44\u6e90\u540d\u79f0"},{max:20,message:"\u6700\u591a20\u4e2a\u5b57\u7b26"},{validator:x}]})(h.default.createElement(n.default,{disabled:F,onBlur:this.blurTableName,placeholder:"\u8bf7\u8f93\u5165\u8d44\u6e90\u540d\u79f0"}))),h.default.createElement(v,{label:"\u4e2d\u6587\u540d\u79f0"},t("tableNameCn",{initialValue:k.tableNameCn,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4e2d\u6587\u540d\u79f0"}]})(h.default.createElement(n.default,{placeholder:"\u8bf7\u8f93\u5165\u4e2d\u6587\u540d\u79f0"}))),h.default.createElement(v,{label:"\u5f62\u6001"},t("resourceType",{initialValue:k.resourceType||"D",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f62\u6001"}]})(h.default.createElement(c.default,{disabled:F,placeholder:"\u8bf7\u9009\u62e9\u5f62\u6001",onChange:this.reload},Object.entries(p).map(e=>h.default.createElement(N,{value:e[1],key:e[0]},e[0]))))),h.default.createElement(v,{label:"\u6e90\u7cfb\u7edf"},t("busSystemId",{initialValue:k.busSystemId||f[0]&&f[0].id,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6e90\u7cfb\u7edf"}]})(h.default.createElement(c.default,{disabled:F,placeholder:"\u8bf7\u9009\u62e9\u6e90\u7cfb\u7edf",showSearch:!0,optionFilterProp:"children"},f.map(e=>h.default.createElement(N,{value:e.id,key:e.id},e.name))))),h.default.createElement(v,{label:"\u4e3b\u9898"},t("classifyId",{initialValue:k.classifyId,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4e3b\u9898"}]})(h.default.createElement(c.default,{placeholder:"\u8bf7\u9009\u62e9\u4e3b\u9898"},g.map(e=>h.default.createElement(N,{value:e.id,key:e.id},e.name))))),h.default.createElement(v,{label:"\u6d41\u6c34\u8868\u6807\u8bc6"},t("isLogTable",{initialValue:k.isLogTable||"N",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6d41\u6c34\u8868\u6807\u8bc6"}]})(h.default.createElement(S,{disabled:"F"===a("resourceType")&&"S"!==a("fileType"),onChange:this.changeLogTable},h.default.createElement(u.default,{value:"Y"},"\u6d41\u6c34\u8868"),h.default.createElement(u.default,{value:"N"},"\u975e\u6d41\u6c34\u8868")))),h.default.createElement(v,{label:"\u662f\u5426\u589e\u91cf"},t("isIncriease",{initialValue:k.isIncriease||"N",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u662f\u5426\u589e\u91cf"}]})(h.default.createElement(S,{disabled:"Y"===a("isLogTable")||"N"===a("fileType")},h.default.createElement(u.default,{value:"Y"},"\u589e\u91cf"),h.default.createElement(u.default,{value:"N"},"\u5168\u91cf")))),"Y"===a("isIncriease")&&h.default.createElement(h.Fragment,null,h.default.createElement(v,{label:"\u589e\u91cf\u6761\u4ef6"},t("increaseParam",{initialValue:k.increaseParam})(h.default.createElement(n.default,{placeholder:"\u8bf7\u8f93\u5165\u589e\u91cf\u6761\u4ef6"}))),h.default.createElement(v,{label:"\u589e\u91cf\u521d\u59cb\u503c"},t("increaseInitValue",{initialValue:k.increaseInitValue})(h.default.createElement(d.default,{placeholder:"\u8bf7\u8f93\u5165\u589e\u91cf\u521d\u59cb\u503c"})))),"F"===a("resourceType")&&h.default.createElement("div",null,h.default.createElement(v,{label:"\u590d\u5408\u8d44\u6e90\u6807\u8bc6"},t("multiFlag",{initialValue:k.multiFlag||"M",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u590d\u5408\u8d44\u6e90\u6807\u8bc6"}]})(h.default.createElement(c.default,{disabled:F,placeholder:"\u8bf7\u9009\u62e9\u590d\u5408\u8d44\u6e90\u6807\u8bc6",onChange:this.changeMultiFlag},Object.entries(o).map(e=>h.default.createElement(N,{value:e[1],key:e[0]},e[0]))))),h.default.createElement(v,{label:"\u6587\u4ef6\u7c7b\u578b"},t("fileType",{initialValue:k.fileType||"N",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6587\u4ef6\u7c7b\u578b"}]})(h.default.createElement(c.default,{placeholder:"\u8bf7\u9009\u62e9\u6587\u4ef6\u7c7b\u578b",disabled:"M"===a("multiFlag")||F,onChange:this.changeFileType},Object.entries(i).map(e=>h.default.createElement(N,{value:e[1],key:e[0]},e[0])))))),h.default.createElement(v,{label:"\u6807\u7b7e"},t("tagIds",{initialValue:k.tagIds||k.tagList&&k.tagList.map(e=>e.id)})(h.default.createElement(c.default,{mode:"multiple",placeholder:"\u8bf7\u9009\u62e9\u6807\u7b7e",filterOption:this.filterOption},y.map(e=>h.default.createElement(N,{value:e.id,key:e.id},e.tagName))))),h.default.createElement(v,{label:"\u8d44\u6e90\u63cf\u8ff0"},t("tableDesc",{initialValue:k.tableDesc})(h.default.createElement(D,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u8d44\u6e90\u63cf\u8ff0"}))),h.default.createElement(v,{label:" ",colon:!1},t("isAuth",{valuePropName:"checked",initialValue:k.isAuth})(h.default.createElement(s.default,{disabled:F},"\u662f\u5426\u6709\u6761\u4ef6\u5171\u4eab\uff08\u6b64\u8d44\u6e90\u9700\u8981\u901a\u8fc7\u63d0\u4f9b\u65b9\u5ba1\u6838\uff0c\u4f7f\u7528\u65b9\u65b9\u53ef\u4f7f\u7528\uff09"))),h.default.createElement(v,null,h.default.createElement("div",{className:E.default.action},h.default.createElement(r.default,{onClick:this.goBack,className:E.default.marginRight},"\u53d6\u6d88"),"N"===a("fileType")?h.default.createElement("span",null,O?h.default.createElement(r.default,{type:"primary",onClick:this.handleSubmit.bind(this,!0,1),className:E.default.marginRight},"\u4fdd\u5b58\u5e76\u9a73\u56de"):h.default.createElement(h.Fragment,null,C&&h.default.createElement(r.default,{type:"primary",onClick:this.handleSubmit.bind(this,!0,1),className:E.default.marginRight},"\u4fdd\u5b58"),h.default.createElement(r.default,{type:"primary",onClick:this.handleSubmit.bind(this,!0,2)},"\u63d0\u4ea4"))):h.default.createElement(r.default,{type:"primary",onClick:this.handleSubmit.bind(this,!1)},"\u4e0b\u4e00\u6b65"))))}},p=f))||p),k=m.default.create()(I);t.default=k},O043:function(e,t,a){"use strict";var l=a("g09b"),i=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var r=l(a("W9HT")),s=l(a("Y/ft")),d=l(a("p0pE"));a("FJo9");var n,u,c,o=l(a("L41K")),p=i(a("q1tI")),f=a("MuoO"),m=l(a("Qyje")),h=l(a("Chv6")),g=l(a("X2kM")),y=l(a("MpEX")),b=o.default.Step,E=(n=(0,f.connect)(e=>{var t=e.resourceDirectory,a=e.cachedData,l=e.tagMange,i=e.sunmStandard,r=e.loading;return{resourceDirectory:t,cachedData:a,tagMange:l,sunmStandard:i,loading:r}}),n((c=class extends p.Component{constructor(){super(...arguments),this.state={current:0,value:{},operationState:{}},this.next=((e,t)=>{var a=this.state,l=a.value,i=a.current,r=this.props.resourceDirectory,n=r.idItem,u=(r.systemList,m.default.parse(this.props.location.search.slice(1))),c=u.id,o=(0,d.default)({},l,{[i]:e});if(o[1]=o[1]||{},o[1].items=o[1].items||[],0!==i||t){var p=m.default.parse(this.props.location.search.slice(1)),f=p.id,h=o[1].items.map(e=>{if(!e.isOld){e.id;var t=(0,s.default)(e,["id"]);return t}return e});f&&(h=h.filter(e=>3!==e.status)),this.props.dispatch({type:"resourceDirectory/saveResource",payload:(0,d.default)({id:f},o[0],o[1],{items:h})})}else c||this.added||(n.forEach(e=>{o[1].items.find(t=>t.dataItemId===e.id)||(o[1].items.find(e=>e.isPk)||(e.isPk=!0,e.isNullAble="N"),o[1].items.unshift(e))}),this.added=!0),this.setState({current:i+1,value:o})}),this.prev=(e=>{var t=this.state,a=t.value,l=t.current;this.setState({value:(0,d.default)({},a,{[l]:e}),current:l-1})}),this.changeOperationState=(e=>{this.setState({operationState:e})})}componentDidMount(){var e=this.props.resourceDirectory,t=e.fileTypeObj,a=e.multiFlagObj,l=e.resourceTypeObj,i=e.systemList,r=e.encyptList,s=e.idItem,d=e.secondCatagory,n=this.props.cachedData.dataItemCatagory;Object.keys(t).length||this.props.dispatch({type:"resourceDirectory/getFileTypeObj"}),Object.keys(a).length||this.props.dispatch({type:"resourceDirectory/getMultiFlagObj"}),Object.keys(l).length||this.props.dispatch({type:"resourceDirectory/getResourceTypeObj"}),Object.keys(r).length||this.props.dispatch({type:"resourceDirectory/getEncyptList"}),i.length||this.props.dispatch({type:"resourceDirectory/getSystemList"}),d.length||this.props.dispatch({type:"resourceDirectory/queurySecondCatagory"}),n.length||this.props.dispatch({type:"cachedData/getDataItemCatagory"}),s.length||this.props.dispatch({type:"resourceDirectory/getIDItem"}),this.props.tagMange.tags.length||this.props.dispatch({type:"tagMange/getAllTag"});var u=m.default.parse(this.props.location.search.slice(1)),c=u.id;c&&Promise.all([this.props.dispatch({type:"resourceDirectory/getResourceDetail",payload:c}),this.props.dispatch({type:"resourceDirectory/getDataItems",payload:{id:c}})]).then(e=>{e[1]&&e[1].forEach(e=>{e.isOld=!0}),this.setState({value:{0:e[0],1:{items:e[1],fileUrl:e[0].fileUrl,fileName:e[0].fileName}}},()=>{this.setState({reloadUI:1})})});var o=this.props.sunmStandard.fieldType;o.length||this.props.dispatch({type:"sunmStandard/fetchFieldType"})}render(){var e=this.state,t=e.current,a=e.value,l=e.operationState,i=m.default.parse(this.props.location.search.slice(1)),s=i.id,d=i.type,n=i.saveBtn,u=!0===this.props.loading.effects["resourceDirectory/getResourceDetail"],c=[{title:"\u57fa\u672c\u4fe1\u606f",content:p.default.createElement(h.default,{next:this.next,value:a["0"]||{},id:s,type:d,saveBtn:n})},{title:"\u6570\u636e\u7ed3\u6784",content:p.default.createElement(g.default,{prev:this.prev,next:this.next,value:a["1"]||{},id:s,type:d,saveBtn:n,operationState:l,changeOperationState:this.changeOperationState})}];return p.default.createElement(r.default,{spinning:u},p.default.createElement("h1",{className:y.default.title},s?"\u7f16\u8f91":"\u65b0\u5efa","\u8d44\u6e90"),p.default.createElement(o.default,{current:t,className:y.default.steps},c.map(e=>p.default.createElement(b,{key:e.title,title:e.title}))),p.default.createElement("div",null,c[t].content))}},u=c))||u),v=E;t.default=v},X2kM:function(e,t,a){"use strict";var l=a("g09b"),i=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("DZo9");var r=l(a("8z0m"));a("g9YV");var s=l(a("wCAj"));a("+L6B");var d=l(a("2/Rp"));a("miYZ");var n=l(a("tsqr")),u=l(a("p0pE"));a("P2fV");var c=l(a("NJEC"));a("Pwec");var o=l(a("CtXQ"));a("giR+");var p=l(a("fyUT"));a("5NDa");var f=l(a("5rEg"));a("y8nQ");var m=l(a("Vl3Y"));a("OaEy");var h,g,y,b=l(a("2fM7")),E=i(a("q1tI")),v=a("MuoO"),N=l(a("LvDl")),S=a("7DNP"),D=a("Wvwx"),I=l(a("RSsB")),k=a("qxfp"),T=l(a("MpEX")),V=b.default.Option,O=m.default.Item,C=(e,t,a)=>{!t||new RegExp(/^[a-z]+$/i).test(t[0])?!t||new RegExp(/^\w+$/).test(t)?a():a("\u53ea\u80fd\u7531\u6570\u5b57\u3001\u5b57\u6bcd\u3001\u4e0b\u5212\u7ebf\u7ec4\u6210"):a("\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934")},F=(h=(0,v.connect)(e=>{var t=e.resourceDirectory,a=e.sunmStandard;return{resourceDirectory:t,sunmStandard:a}}),h((y=class extends E.default.Component{constructor(){super(...arguments),this.state={data:this.props.value.items||[],fileUrl:this.props.value.fileUrl,fileName:this.props.value.fileName,modalVisible:!1},this.renderInput2=((e,t,a,l)=>{var i=this.props.form,r=i.getFieldDecorator,s=i.getFieldValue,d=this.isDisabled(a);if("remark"===e)return E.default.createElement(O,null,r("".concat(e,"-").concat(a.id),{initialValue:t})(E.default.createElement(f.default,{disabled:d})));if(3===a.dataItemState)return t;if("chineseName"===e)return E.default.createElement(O,null,r("".concat(e,"-").concat(a.id),{initialValue:t,rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(E.default.createElement(f.default,{disabled:d,onChange:this.changeChineseName.bind(this,a)})));if("dataItemName"===e)return E.default.createElement(O,null,r("".concat(e,"-").concat(a.id),{initialValue:t,rules:[{required:!0,message:"\u8bf7\u8f93\u5165"},{validator:C}]})(E.default.createElement(f.default,{disabled:d})));if("dataTypeName"===e){e="dataType";var n=this.props.sunmStandard.fieldType;return E.default.createElement(O,null,r("".concat(e,"-").concat(a.id),{initialValue:a.dataType,rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(E.default.createElement(b.default,{disabled:d,style:{width:90},onChange:this.changeDataType.bind(this,a)},n.map(e=>E.default.createElement(V,{value:e.value,key:e.value},e.title)))))}if("length"===e){var u=s("dataType-".concat(a.id)),c="DATETIME"===s("dataType-".concat(a.id)),o=["VARCHAR","DOUBLE","DECIMAL"].includes(u);return E.default.createElement(O,null,r("".concat(e,"-").concat(a.id),{initialValue:t,rules:[{required:o,message:"\u8bf7\u8f93\u5165"}]})(E.default.createElement(p.default,{disabled:d||c,min:1,max:4e3,style:{width:55}})))}if("percision"===e){var m=s("dataType-".concat(a.id)),h="DOUBLE"===m||"DECIMAL"===m;return E.default.createElement(O,null,r("".concat(e,"-").concat(a.id),{initialValue:t,rules:[{required:h,message:"\u8bf7\u8f93\u5165"}]})(E.default.createElement(p.default,{disabled:!h,min:0,max:255,style:{width:55}})))}return E.default.createElement(O,null,r("".concat(e,"-").concat(a.id),{initialValue:t,rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(E.default.createElement(f.default,{disabled:d})))}),this.renderSelect=((e,t,a,l)=>{var i=this.props.form,r=i.getFieldDecorator,s=i.getFieldValue,d=this.isDisabled(a);if("isNullAble"===e){var n=s("isPk-".concat(a.id));return E.default.createElement(O,null,r("".concat(e,"-").concat(a.id),{initialValue:t||"Y",rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(E.default.createElement(b.default,{disabled:n||d},E.default.createElement(V,{value:"Y"},"\u662f"),E.default.createElement(V,{value:"N"},"\u5426"))))}if("isPk"===e)return E.default.createElement(O,null,r("".concat(e,"-").concat(a.id),{initialValue:t||!1,rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(E.default.createElement(b.default,{disabled:d,onChange:this.changePk.bind(this,a)},E.default.createElement(V,{value:!0},"\u662f"),E.default.createElement(V,{value:!1},"\u5426"))));if("isEncypt"===e){var u=this.props.resourceDirectory.encyptList;return E.default.createElement(O,null,r("".concat(e,"-").concat(a.id),{initialValue:t||1,rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(E.default.createElement(b.default,{disabled:d},Object.entries(u).map(e=>E.default.createElement(V,{value:e[1],key:e[1]},e[0])))))}}),this.columns=(()=>{var e=[{title:"\u4e2d\u6587\u7b80\u79f0",dataIndex:"chineseName",render:this.renderInput2.bind(this,"chineseName")},{title:"\u6570\u636e\u9879\u540d",dataIndex:"dataItemName",render:this.renderInput2.bind(this,"dataItemName")},{title:"\u7c7b\u578b",dataIndex:"dataTypeName",render:this.renderInput2.bind(this,"dataTypeName")},{title:"\u957f\u5ea6",dataIndex:"length",render:this.renderInput2.bind(this,"length")},{title:"\u7cbe\u5ea6",dataIndex:"percision",render:this.renderInput2.bind(this,"percision")},{title:"\u662f\u5426\u4e3a\u7a7a",dataIndex:"isNullAble",render:this.renderSelect.bind(this,"isNullAble")},{title:"\u662f\u5426\u4e3b\u952e",dataIndex:"isPk",render:this.renderSelect.bind(this,"isPk")},{title:"\u5b89\u5168\u9009\u9879",dataIndex:"isEncypt",render:this.renderSelect.bind(this,"isEncypt")},{title:"\u4e1a\u52a1\u5b9a\u4e49\u53ca\u89c4\u5219",dataIndex:"businessDefinition",render:this.renderInput2.bind(this,"businessDefinition")},{title:"\u64cd\u4f5c",dataIndex:"operation",render:(e,t,a)=>{var l=this.isDisabled(t);if(!l)return E.default.createElement(c.default,{title:"\u786e\u5b9a\u5220\u9664\uff1f",onConfirm:this.delete.bind(this,t,a)},E.default.createElement(o.default,{type:"delete",className:"can-click",title:"\u5220\u9664"}))}}];"1"===this.props.type?e.splice(11,0,{title:"\u4fee\u6539\u5907\u6ce8",dataIndex:"remark",render:this.renderInput2.bind(this,"remark")}):"2"===this.props.type&&e.splice(11,0,{title:"\u4fee\u6539\u5907\u6ce8",dataIndex:"remark"},{title:"\u4fee\u6539\u72b6\u6001",dataIndex:"operationState",render:e=>{return 0===e?"\u5220\u9664":1===e?"\u65b0\u589e":2===e?"\u4fee\u6539":void 0}});var t=this.props.id,a=this.state.data.some(e=>[1,2,3].includes(e.status));return t&&a&&e.unshift({title:"",dataIndex:"status",render:e=>E.default.createElement("span",null,1===e&&E.default.createElement(o.default,{type:"plus"}),2===e&&E.default.createElement(o.default,{type:"edit"}),3===e&&E.default.createElement(o.default,{type:"minus"}))}),e})(),this.isDisabled=(e=>this.props.id&&3===e.status),this.delete=((e,t)=>{if("1"===this.props.type&&e.dataItemId)void 0===this.props.operationState[e.id]&&(this.props.changeOperationState((0,u.default)({},this.props.operationState,{[e.id]:0})),document.querySelectorAll(".ant-table-tbody tr")[t].classList.add(T.default.delete));else{var a=this.state.data.filter(t=>t.id!==e.id);this.setState({data:a})}}),this.changeChineseName=((e,t)=>{this.props.form.setFieldsValue({["dataItemName-".concat(e.id)]:(0,D.getChart)(t.target.value.trim())})}),this.changeDataType=(e=>{this.props.form.setFieldsValue({["percision-".concat(e.id)]:void 0})}),this.changePk=((e,t)=>{t&&this.props.form.setFieldsValue({["isNullAble-".concat(e.id)]:"N"})}),this.handleSubmit=((e,t)=>{this.props.form.validateFields((a,l)=>{if(!a){var i=N.default.cloneDeep(this.state.data);Object.entries(l).map(e=>{var t=e[0].split("-");if(2===t.length){var a=t[0],l=t[1],r=i.findIndex(e=>String(e.id)===l);-1!==r&&(i[r][a]=e[1])}});var r=!0,s=!1,d=void 0;try{for(var u,c=i[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var o=u.value;if(3!==o.dataItemState&&!o.businessDefinition)return void n.default.warn("\u8bf7\u586b\u5199\u4e1a\u52a1\u5b9a\u4e49\u53ca\u89c4\u5219")}}catch(a){s=!0,d=a}finally{try{r||null==c.return||c.return()}finally{if(s)throw d}}"1"===this.props.type?Object.entries(this.props.operationState).forEach(e=>{var t=i.find(t=>String(t.id)===e[0]);t&&(t.operationState=e[1])}):"2"===this.props.type&&(i=i.filter(e=>0!==e.operationState),i.forEach(e=>{e.remark=null,e.operationState=null})),e({fileUrl:this.state.fileUrl,fileName:this.state.fileName,items:i,submitState:t})}})}),this.showModal=(()=>{this.setState({modalVisible:!0})}),this.hideModal=(()=>{this.setState({modalVisible:!1})}),this.addData=(e=>{if(this.setState({data:[...this.state.data,...e]}),"1"===this.props.type){var t=(0,u.default)({},this.props.operationState);e.forEach(e=>{t[e.id]=1}),this.props.changeOperationState(t)}}),this.add=(()=>{var e=Date.now();this.addData([{id:e,dataItemState:0}])}),this.goBack=(()=>{this.props.dispatch(S.routerRedux.goBack())})}componentDidMount(){this.state.data.forEach((e,t)=>{0===this.props.operationState[e.id]&&document.querySelectorAll(".ant-table-tbody tr")[t].classList.add(T.default.delete)})}render(){var e=this.state,t=e.modalVisible,a=e.data,l=e.fileUrl,i=e.fileName,u=this.props.form.getFieldDecorator,c=this.props,p=c.id,f=c.type,h=c.saveBtn,g="".concat(k.BASE_URL,"/tableModelResource/uploadFile?token=").concat((0,k.TOKEN)());p&&(g+="&resourceId=".concat(p));var y={name:"file",action:g,onRemove:e=>{this.setState({fileUrl:"",fileName:""})},beforeUpload:e=>{var t=new FormData;return t.append("file",e),fetch(g,{method:"POST",body:t}).then(e=>e.json()).then(e=>{e.success?(this.setState({fileUrl:e.obj.fileUrl,fileName:e.obj.fileName}),n.default.success("\u6587\u4ef6\u4e0a\u4f20\u6210\u529f")):n.default.error(e.msg)}),!1},fileList:i?[{uid:"1",name:i,status:"done",url:"".concat(k.BASE_URL,"/tableModelResource/downloadFile?token=").concat((0,k.TOKEN)(),"&fileName=").concat(i,"&fileUrl=").concat(l)}]:[]},b="1"===f,v="0"!==h;return E.default.createElement("div",{className:T.default.tableStructure},E.default.createElement(d.default,{type:"primary",onClick:this.showModal,className:T.default.marginRight},E.default.createElement(o.default,{type:"plus"}),"\u9009\u62e9"),E.default.createElement(d.default,{type:"primary",onClick:this.add},E.default.createElement(o.default,{type:"plus"}),"\u65b0\u589e"),E.default.createElement(m.default,{layout:"inline"},E.default.createElement(s.default,{bordered:!0,dataSource:this.state.data,columns:this.columns,pagination:!1,className:T.default.table,rowKey:"id"}),E.default.createElement(O,{label:"\u9644\u4ef6\u8bc1\u660e",extra:"10\u6761\u4ee5\u4e0a\u6570\u636e\u6837\u4f8b\u6216\u6570\u636e\u5e93\u5b57\u6bb5\u8bf4\u660e\u6587\u4ef6..."},u("fileUrl",{})(E.default.createElement(r.default,y,E.default.createElement(d.default,null,E.default.createElement(o.default,{type:"upload"})," \u4e0a\u4f20\u6587\u4ef6"))))),E.default.createElement("div",{className:T.default.action},E.default.createElement(d.default,{onClick:this.goBack,className:T.default.marginRight},"\u53d6\u6d88"),E.default.createElement(d.default,{onClick:this.handleSubmit.bind(this,this.props.prev),className:T.default.marginRight},"\u4e0a\u4e00\u6b65"),b?E.default.createElement(d.default,{type:"primary",onClick:this.handleSubmit.bind(this,this.props.next,1),className:T.default.marginRight},"\u4fdd\u5b58\u5e76\u9a73\u56de"):E.default.createElement(E.Fragment,null,v&&E.default.createElement(d.default,{type:"primary",onClick:this.handleSubmit.bind(this,this.props.next,1),className:T.default.marginRight},"\u4fdd\u5b58"),E.default.createElement(d.default,{type:"primary",onClick:this.handleSubmit.bind(this,this.props.next,2)},"\u63d0\u4ea4"))),E.default.createElement(I.default,{addData:this.addData,existData:a,modalVisible:t,hideModal:this.hideModal}))}},g=y))||g),x=m.default.create({onValuesChange:(e,t,a)=>{if("1"===e.type){var l=Object.entries(t)[0][0].split("-")[1];void 0===e.operationState[l]&&e.changeOperationState((0,u.default)({},e.operationState,{[l]:2}))}}})(F);t.default=x}}]);