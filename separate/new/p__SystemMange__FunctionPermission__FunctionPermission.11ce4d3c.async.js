(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{kx0n:function(e,t,a){"use strict";var l=a("g09b"),d=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=d(a("q1tI"));a("T2oS");var n=l(a("W9HT"));a("+L6B");var i=l(a("2/Rp"));a("Pwec");var r=l(a("CtXQ"));a("miYZ");var u=l(a("tsqr"));a("2qtc");var c=l(a("kLXV"));a("g9YV");var o=l(a("wCAj")),m=a("Nmln"),f=l(a("o3xw"));a("3MCO"),a("xR6b"),a("KFsi");var h=l(a("meRS")),p=o.default.Column,E=(o.default.ColumnGroup,c.default.confirm);class b extends s.Component{constructor(e){super(e),this.columnData=(e=>{e.forEach(e=>{e.key=e.id,e.label=e.name,e.value=e.id,e.status=1==e.status?"\u542f\u7528":"\u672a\u542f\u7528",1==e.type?e.type="\u83dc\u5355":2==e.type?e.type="\u529f\u80fd\u6309\u94ae":e.type="\u5176\u5b83"}),this.setState({tableData:h.default.arrayDataToTree(e),treeData:e})}),this.fetchData=(()=>{(0,m.InitFunction)({}).then(e=>{this.columnData(e.rows)}).then(()=>{this.setState({pageLoading:!1})}).catch(e=>{console.log("\u9519\u8bef\uff1a".concat(e))})}),this.changeAddVisible=(()=>{this.setState({addEditVisible:!0,isAdd:!0})}),this.resetCache=(()=>{this.fetchData()}),this.handleCancel=(e=>{this.setState({addEditVisible:!1,roleVisble:!1})}),this.changeEditVisible=(e=>{5e3==e.key?c.default.warning({title:"\u63d0\u793a\u4fe1\u606f",content:"\u6839\u8282\u70b9\u4e0d\u80fd\u8fdb\u884c\u7f16\u8f91\u64cd\u4f5c!"}):this.setState({editValue:e,addEditVisible:!0,isAdd:!1,rowId:e.key})}),this.addSubmit=(e=>{this.setState({addLoading:!0,editLoading:!0});var t=this.state,a=t.isAdd,l=t.rowId;a?(0,m.AddEditFunction)({id:"",name:e.name?e.name:"",parentId:e.parentId?e.parentId:"",type:e.type?e.type:"",status:e.status?e.status:"",url:e.url?e.url:"",seq:e.seq?e.seq:"",code:e.code?e.code:"",iconCls:e.iconCls?e.iconCls:"",remark:e.remark?e.remark:""}).then(t=>{this.setState({addLoading:!1}),this.isSuccess(t,e)}).then(()=>{this.fetchData()}):(0,m.AddEditFunction)({id:l,name:e.name?e.name:"",parentId:e.parentId?e.parentId:"",type:e.type?e.type:"",status:e.status?e.status:"",url:e.url?e.url:"",seq:e.seq?e.seq:"",code:e.code?e.code:"",iconCls:e.iconCls?e.iconCls:"",remark:e.remark?e.remark:""}).then(t=>{this.setState({addLoading:!1}),this.isSuccess(t,e)}).then(()=>{this.fetchData()})}),this.deleteUser=((e,t)=>{if(5e3==e)c.default.warning({title:"\u63d0\u793a\u4fe1\u606f",content:"\u6839\u8282\u70b9\u4e0d\u80fd\u8fdb\u884c\u5220\u9664\u64cd\u4f5c!"});else{var a=this,l=this.state.treeData,d=[];l.forEach(t=>{t.parentId==e&&d.push(t.id)}),d.push(e),E({title:"\u529f\u80fd\u6743\u9650\u5220\u9664",content:d.length>1?"\u4f60\u662f\u5426\u786e\u5b9a\u5220\u9664\u3010".concat(t,"\u3011\u4ee5\u53ca\u5176\u5b50\u529f\u80fd\u6743\u9650\u5417\uff1f"):"\u4f60\u662f\u5426\u786e\u5b9a\u5220\u9664\u3010".concat(t,"\u3011\u5417\uff1f"),cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",onOk(){(0,m.DeleteFunction)({ids:d}).then(e=>{a.isSuccess(e)}).then(()=>{a.fetchData()})}})}}),this.isSuccess=((e,t)=>{if(e.success)this.setState({addEditVisible:!1,addLoading:!1,pageLoading:!0});else{var a=e.msg;u.default.error(a||"\u64cd\u4f5c\u5931\u8d25")}}),this.componentDidMount=(()=>{var e=this.state;e.page,e.pageSize;this._isMounted=!0,this.fetchData()}),this.componentWillUnMount=(()=>{this._isMounted=!1}),this.renderTypeTable=(()=>s.default.createElement(o.default,{dataSource:this.state.tableData,pagination:!1,rowClassName:"per-table-row",indentSize:8,scroll:{y:500},defaultExpandAllRows:!0},s.default.createElement(p,{title:"\u6743\u9650\u540d\u79f0",dataIndex:"name",key:"name",width:"18%",className:"per-name-col",render:(e,t)=>s.default.createElement("a",{title:t.name,className:"functionHover"},t.name)}),s.default.createElement(p,{title:"\u6743\u9650\u7c7b\u578b",dataIndex:"type",key:"type",width:"9%"}),s.default.createElement(p,{title:"\u6743\u9650\u72b6\u6001",dataIndex:"status",key:"status",width:"9%"}),s.default.createElement(p,{title:"\u6743\u9650\u8def\u5f84",dataIndex:"url",key:"url",width:"14%",render:(e,t)=>s.default.createElement("a",{title:t.url,className:"functionHover"},t.url)}),s.default.createElement(p,{title:"\u63cf\u8ff0",dataIndex:"remark",key:"remark",width:"12%",render:(e,t)=>s.default.createElement("a",{title:t.remark,className:"functionHover"},t.remark)}),s.default.createElement(p,{title:"\u6743\u9650\u7f16\u7801",dataIndex:"code",key:"code",width:"9%"}),s.default.createElement(p,{title:"\u6392\u5e8f\u7f16\u53f7",dataIndex:"seq",key:"seq",width:"9%"}),s.default.createElement(p,{title:"\u6743\u9650\u5730\u5740",dataIndex:"pathUrl",key:"pathUrl",width:"10%",render:(e,t)=>s.default.createElement("a",{title:t.pathUrl,className:"functionHover"},t.pathUrl)}),s.default.createElement(p,{className:"sunm-text-center",title:"\u64cd\u4f5c",key:"action",width:"",render:(e,t)=>s.default.createElement("span",null,s.default.createElement(r.default,{type:"form",className:"can-click",style:{marginRight:10},title:"\u7f16\u8f91\u6743\u9650",onClick:this.changeEditVisible.bind(this,t)}),s.default.createElement(r.default,{type:"delete",className:"can-click",title:"\u5220\u9664\u6743\u9650",onClick:this.deleteUser.bind(this,t.key,t.name)}))}))),this.state={tableData:[],addEditVisible:!1,isAdd:!0,rowId:"",rowIds:[],addLoading:!1,editValue:{},treeData:[],pageLoading:!0}}render(){var e=this.state,t=e.addEditVisible,a=e.isAdd,l=e.addLoading,d=e.editValue,u=(e.roleVisble,e.tableData),c=e.treeData,o=e.pageLoading;return s.default.createElement("div",{className:"sunm-content sunm-standard-content"},s.default.createElement("div",{className:"sunm-inner-content top"},s.default.createElement("div",{className:"sunm-inner-column"},s.default.createElement("div",{className:"sunm-inner-column-cont"},s.default.createElement(i.default,{onClick:this.changeAddVisible.bind(this)},s.default.createElement(r.default,{type:"plus",className:"sys-icon"}),"\u65b0\u589e\u6743\u9650"),s.default.createElement(i.default,{onClick:this.resetCache.bind(this,!0),className:"mar-left"},s.default.createElement(r.default,{type:"sync",className:"sys-icon"}),"\u91cd\u7f6e\u7f13\u5b58"),s.default.createElement("div",{id:"per-table ",className:"table-comment"},o?s.default.createElement(n.default,{style:{display:"block",padding:"200px 0"}}):this.renderTypeTable()),s.default.createElement(f.default,{isAdd:a,addEditVisible:t,addSubmit:this.addSubmit.bind(this),addLoading:l,handleCancel:this.handleCancel.bind(this),editValue:d,tableData:u,treeData:c})))))}}t.default=b},o3xw:function(e,t,a){"use strict";var l=a("g09b"),d=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var s=l(a("kLXV"));a("+L6B");var n=l(a("2/Rp"));a("giR+");var i=l(a("fyUT"));a("nRaC");var r=l(a("5RzL")),u=l(a("jehZ"));a("5NDa");var c=l(a("5rEg"));a("OaEy");var o=l(a("2fM7"));a("y8nQ");var m,f,h,p=l(a("Vl3Y")),E=d(a("q1tI"));a("6zIO");var b=p.default.Item,y=o.default.Option,g=c.default.TextArea,v=(m=p.default.create(),m((h=class extends E.Component{constructor(){super(...arguments),this.state={visible:!1,isAdd:!0,addLoading:!1,editValue:this.props.editValue,parentValue:""},this.handleClose=(()=>{this.props.handleCancel&&this.props.handleCancel()}),this.handleSubmit=((e,t)=>{new FormData;e.preventDefault(),this.props.form.validateFieldsAndScroll((e,t)=>{e||this.props.addSubmit(t)})})}UNSAFE_componentWillReceiveProps(e){this.setState({visible:e.addEditVisible,addLoading:e.addLoading,isAdd:e.isAdd,key:e.key,editValue:e.editValue})}render(){var e={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:18}}},t={wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},a=this.props.form.getFieldDecorator,l=this.props,d=l.isAdd,m=l.tableData,f=l.treeData,h=this.state,v=h.editValue,k=(h.parentValue,h.addLoading),C={name:d?null:v.name,parentId:e=>{var t="";return e.forEach(e=>{e.id==v.parentId&&(t=e.key)}),t},type:()=>{return d?"1":"\u83dc\u5355"===v.type?"1":"\u529f\u80fd\u6309\u94ae"===v.type?"2":"9"},status:()=>{return d?"1":"\u542f\u7528"==v.status?"1":"2"},url:d?null:v.url,code:d?null:v.code,seq:d?null:v.seq,iconCls:d?null:v.iconCls,remark:d?null:v.remark};return E.default.createElement("div",null,E.default.createElement(s.default,{title:this.state.isAdd?"\u65b0\u589e\u6743\u9650":"\u7f16\u8f91\u6743\u9650",visible:this.state.visible,footer:null,onCancel:this.handleClose,destroyOnClose:!0,maskClosable:!1},E.default.createElement(p.default,{onSubmit:this.handleSubmit},E.default.createElement(b,(0,u.default)({},e,{label:"\u6743\u9650\u540d\u79f0",colon:!0}),a("name",{rules:[{required:!0,message:"\u6743\u9650\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"},{max:255,message:"\u6743\u9650\u540d\u79f0\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7255\u4f4d"}],initialValue:C.name})(E.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165\u6743\u9650\u540d\u79f0"}))),E.default.createElement(b,(0,u.default)({},e,{label:"\u7236\u6743\u9650\u540d\u79f0",colon:!0}),a("parentId",{rules:[{required:!0,message:"\u7236\u6743\u9650\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}],initialValue:C.parentId(f)})(E.default.createElement(r.default,{style:{width:300},dropdownStyle:{maxHeight:300,overflow:"auto"},treeData:m}))),E.default.createElement(b,(0,u.default)({},e,{label:"\u6743\u9650\u7c7b\u578b",colon:!0}),a("type",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6743\u9650\u7c7b\u578b"}],initialValue:C.type()})(E.default.createElement(o.default,null,E.default.createElement(y,{value:"1"},"\u83dc\u5355"),E.default.createElement(y,{value:"2"},"\u529f\u80fd\u6309\u94ae"),E.default.createElement(y,{value:"9"},"\u5176\u5b83")))),E.default.createElement(b,(0,u.default)({},e,{label:"\u6743\u9650\u72b6\u6001",colon:!0}),a("status",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6743\u9650\u72b6\u6001"}],initialValue:C.status()})(E.default.createElement(o.default,null,E.default.createElement(y,{value:"1"},"\u542f\u7528"),E.default.createElement(y,{value:"2"},"\u672a\u542f\u7528")))),E.default.createElement(b,(0,u.default)({},e,{label:"\u6743\u9650\u8def\u5f84",colon:!0}),a("url",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6743\u9650\u8def\u5f84"},{max:255,message:"\u6743\u9650\u8def\u5f84\u4e0d\u80fd\u8d85\u8fc7255\u4f4d"}],initialValue:C.url})(E.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165\u6743\u9650\u5730\u5740"}))),E.default.createElement(b,(0,u.default)({},e,{label:"\u6743\u9650\u7f16\u7801",colon:!0}),a("code",{rules:[{required:!1},{max:255,message:"\u6743\u9650\u7f16\u7801\u4e0d\u80fd\u8d85\u8fc7255\u4f4d"}],initialValue:C.code})(E.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165\u6743\u9650\u7f16\u7801"}))),E.default.createElement(b,(0,u.default)({},e,{label:"\u6392\u5e8f\u7f16\u53f7",colon:!0}),a("seq",{rules:[{type:"integer",max:9999,whitespace:!0,message:"\u8bf7\u8f93\u5165\u6570\u5b57\u4e14\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc74\u4f4d!"}],initialValue:C.seq})(E.default.createElement(i.default,{placeholder:"\u8bf7\u8f93\u5165\u6392\u5e8f\u7f16\u53f7"}))),E.default.createElement(b,(0,u.default)({},e,{label:"\u56fe\u6807\u8def\u5f84",colon:!0}),a("iconCls",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u56fe\u6807\u8def\u5f84"},{max:255,message:"\u56fe\u6807\u8def\u5f84\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7255\u4f4d"}],initialValue:C.iconCls})(E.default.createElement(c.default,{placeholder:""}))),E.default.createElement(b,(0,u.default)({},e,{label:"\u63cf\u8ff0",colon:!0}),a("remark",{rules:[{required:!1},{max:255,message:"\u63cf\u8ff0\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7255\u4f4d"}],initialValue:C.remark})(E.default.createElement(g,{rows:2}))),E.default.createElement(b,(0,u.default)({className:"form-btn-list"},t),E.default.createElement(n.default,{type:"primary",htmlType:"submit",loading:k},"\u4fdd\u5b58"),E.default.createElement(n.default,{type:"ghost",onClick:this.handleClose},"\u53d6\u6d88")))))}},f=h))||f);t.default=v}}]);