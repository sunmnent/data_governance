(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{"1kgF":function(e,t,a){"use strict";var s=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var d=l(a("wCAj"));a("+L6B");var i=l(a("2/Rp"));a("y8nQ");var r=l(a("Vl3Y"));a("5NDa");var n=l(a("5rEg"));a("miYZ");var u=l(a("tsqr")),o=l(a("p0pE"));a("Pwec");var c=l(a("CtXQ"));a("2qtc");var m=l(a("kLXV")),h=s(a("q1tI")),p=a("LvDl"),f=a("Nmln"),g=l(a("pktp"));a("P7b5");var y=m.default.confirm;class b extends h.Component{constructor(e){super(e),this.columns=[{title:"\u7cfb\u7edf\u540d\u79f0",dataIndex:"name"},{title:"\u7cfb\u7edf\u7f16\u7801",dataIndex:"code"},{title:"\u6240\u5c5e\u90e8\u95e8",dataIndex:"deptName"},{title:"\u8d23\u4efb\u4eba",dataIndex:"userName"},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"modifyTime",sorter:!0},{title:"\u5907\u6ce8",dataIndex:"notes"},{title:"\u64cd\u4f5c",dataIndex:"tags",render:(e,t)=>h.default.createElement("div",null,h.default.createElement(c.default,{type:"edit",className:"can-click",style:{marginRight:10},onClick:this.showAddModal.bind(this,t)}),h.default.createElement(c.default,{type:"delete",className:"can-click",onClick:this.deleteSys.bind(this,t)}))}],this.getListData=(()=>{(0,f.QuerySystemPageParam)(this.state.params).then(e=>{var t={},a=[];e&&e.success&&e.obj&&(t=e.obj,e.obj.list&&(a=e.obj.list)),this.setState({systemData:t,systemList:a})})}),this.getDeptmentData=(()=>{(0,f.DeptCatagoryQueryDept)({}).then(e=>{var t=[];e&&e.success&&e.obj&&(t=e.obj[0].children),this.setState({deptData:t})})}),this.getUseData=(()=>{(0,f.SourceSystemUser)({}).then(e=>{var t=[];e&&e.success&&e.obj&&(t=e.obj),this.setState({userData:t})})}),this.getSelectedCard=((e,t,a,s)=>{this.setState({currentId:a,selectedArray:e,selectedIdsArray:t,selected:s})}),this.showAddModal=(e=>{this.setState({visible:!0,modalData:e})}),this.onCancel=(()=>{this.setState({visible:!1,modalData:{}})}),this.onSubmit=(e=>{this.setState({addLoading:!0});var t,a=(0,o.default)({},e,{deptId:parseInt(e.deptId),userId:parseInt(e.userId)});this.state.modalData.id?(a.id=this.state.modalData.id,t=f.SourceSystemUpdate):t=f.SourceSystemAdd,t(a).then(e=>{e&&(e.success?this.setState({addLoading:!1,visible:!1},()=>{u.default.success("\u6dfb\u52a0\u6210\u529f"),this.getListData()}):(this.setState({addLoading:!1}),u.default.error(e.msg)))})}),this.deleteSys=(e=>{y({title:"\u63d0\u793a\u4fe1\u606f",content:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u7cfb\u7edf\u540d\u79f0\u4e3a\u3010".concat(e.name,"\u3011\u7684\u6570\u636e\u5417\uff1f"),cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",onOk:()=>{(0,f.SourceSystemDel)({id:e.id}).then(e=>{e&&(e.success?(u.default.success("\u5220\u9664\u6210\u529f"),this.getListData()):u.default.error(e.msg))})}})}),this.changePage=((e,t,a)=>{var s=(0,o.default)({},this.state.params,{pageNum:e.current});a.order&&(s.order=a.order.slice(0,-3),s.orderBy=(0,p.snakeCase)(a.columnKey)),this.setState({params:s},()=>{this.getListData()})}),this.handleSubmit=(()=>{this.props.form.validateFields((e,t)=>{if(!e){var a=(0,o.default)({},this.state.params,t,{pageNum:1});this.setState({params:a},()=>{this.getListData()})}})}),this.state={selectedArray:[],selectedIdsArray:[],selected:!1,systemData:{},systemList:[],currentId:"",deptData:[],userData:[],addLoading:!1,visible:!1,params:{pageNum:1,pageSize:10},modalData:{}}}componentDidMount(){this.getListData(),this.getDeptmentData(),this.getUseData()}render(){var e=this.state,t=(e.selectedArray,e.modalData),a=e.systemList,s=e.systemData,l=e.deptData,u=e.userData,o=e.visible,c=e.addLoading,m=this.state.params,f=m.pageNum,y=m.pageSize,b=this.props.form.getFieldDecorator,v={current:f,pageSize:y,total:(0,p.isEmpty)(s)?0:s.total,showQuickJumper:!0};return h.default.createElement("div",null,h.default.createElement(r.default,{layout:"inline",onSubmit:this.handleSubmit,style:{marginBottom:10}},h.default.createElement(r.default.Item,{label:"\u7cfb\u7edf\u540d\u79f0"},b("systemName",{})(h.default.createElement(n.default,{placeholder:"\u7cfb\u7edf\u540d\u79f0"}))),h.default.createElement(r.default.Item,null,h.default.createElement(i.default,{type:"primary",htmlType:"submit"},"\u641c\u7d22"),h.default.createElement(i.default,{type:"primary",onClick:this.showAddModal.bind(this,{}),style:{marginLeft:20}},"\u65b0\u5efa"))),h.default.createElement(d.default,{columns:this.columns,dataSource:a,pagination:v,onChange:this.changePage,rowKey:"id"}),h.default.createElement(g.default,{visible:o,isAdd:!t.id,onCancel:this.onCancel,onSubmit:this.onSubmit,userData:u,addLoading:c,deptData:l,editData:t}))}}var v=r.default.create()(b);t.default=v},P7b5:function(e,t,a){},pktp:function(e,t,a){"use strict";var s=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var d=s(a("kLXV"));a("+L6B");var i=s(a("2/Rp")),r=s(a("jehZ"));a("OaEy");var n=s(a("2fM7"));a("5NDa");var u=s(a("5rEg"));a("y8nQ");var o,c,m,h=s(a("Vl3Y")),p=l(a("q1tI")),f=s(a("Jt6A")),g=a("LvDl");a("P7b5");var y=h.default.Item,b=u.default.TextArea,v=n.default.Option,D={labelCol:{span:5},wrapperCol:{span:19}},S=(o=h.default.create(),o((m=class extends p.Component{constructor(e){super(e),this.handleSubmit=(e=>{e.preventDefault(),this.props.form.validateFieldsAndScroll((e,t)=>{e||this.props.onSubmit&&this.props.onSubmit(t)})}),this.handleCancel=(()=>{this.props.onCancel&&this.props.onCancel()}),this.handelReset=(()=>{this.props.form.resetFields()}),this.state={}}render(){var e=[],t=this.props,a=t.visible,s=t.addLoading,l=t.editData,o=t.isAdd,c=t.userData,m=t.deptData,S=this.props.form.getFieldDecorator;return(0,g.isEmpty)(c)||c.forEach(t=>{e.push(p.default.createElement(v,{key:t.id,value:t.id},t.nameCn))}),p.default.createElement(d.default,{title:o?"\u65b0\u5efa\u7cfb\u7edf":"\u7f16\u8f91\u7cfb\u7edf",visible:a,onCancel:this.handleCancel,footer:null,destroyOnClose:!0,className:"source_system_modal",maskClosable:!1},p.default.createElement(h.default,{layout:"horizontal",onSubmit:this.handleSubmit},p.default.createElement(y,(0,r.default)({},D,{label:"\u540d\u79f0"}),S("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u79f0"}],initialValue:o?"":l.name})(p.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165\u540d\u79f0",disabled:!o}))),p.default.createElement(y,(0,r.default)({},D,{label:"\u7cfb\u7edf\u7f16\u7801"}),S("code",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7cfb\u7edf\u7f16\u7801"},{pattern:/^([A-Z]){4}$/,message:"\u8bf7\u8f93\u5165\u56db\u4f4d\u5927\u5199\u5b57\u6bcd\u7cfb\u7edf\u7f16\u7801"}],initialValue:o?"":l.code})(p.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165\u56db\u4f4d\u5927\u5199\u5b57\u6bcd\u7cfb\u7edf\u7f16\u7801",disabled:!(o||!l.code)}))),p.default.createElement(y,(0,r.default)({},D,{label:"\u8d23\u4efb\u4eba"}),S("userId",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d23\u4efb\u4eba"}],initialValue:o?null:l.userId})(p.default.createElement(n.default,{placeholder:"\u8bf7\u9009\u62e9\u8d23\u4efb\u4eba"},e))),p.default.createElement(y,(0,r.default)({},D,{label:"\u8d23\u4efb\u90e8\u95e8"}),S("deptId",{rules:[{required:!0,message:"\u8d23\u4efb\u90e8\u95e8\u4e0d\u80fd\u4e3a\u7a7a"}],initialValue:o?"":l.deptId})(p.default.createElement(f.default,{showSearch:!0,defaultValueItem:"nodeCode",option:m,disabled:!0}))),p.default.createElement(y,(0,r.default)({},D,{label:"\u5907\u6ce8"}),S("notes",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u5907\u6ce8"}],initialValue:o?"":l.notes})(p.default.createElement(b,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8\u4fe1\u606f",rows:4}))),p.default.createElement(y,(0,r.default)({},D,{className:"ssm_btn"}),p.default.createElement(i.default,{type:"primary",htmlType:"submit",loading:s,style:{marginLeft:"15px"}},"\u4fdd\u5b58"),p.default.createElement(i.default,{type:"ghost",onClick:this.handelReset,style:{marginLeft:"15px"}},"\u91cd\u7f6e"),o?"":p.default.createElement(i.default,{onClick:this.handleCancel,style:{marginLeft:"15px"}},"\u53d6\u6d88\u4fee\u6539"))))}},c=m))||c);t.default=S}}]);