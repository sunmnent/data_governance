(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{fI8d:function(e,t,a){"use strict";var l=a("g09b"),i=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var s=l(a("wCAj"));a("+L6B");var n=l(a("2/Rp"));a("2qtc");var d=l(a("kLXV"));a("Pwec");var o=l(a("CtXQ"));a("5NDa");var c=l(a("5rEg"));a("y8nQ");var r,u,h,p=l(a("Vl3Y")),m=i(a("q1tI")),f=a("MuoO"),g=p.default.Item,k=c.default.TextArea,C=10,w=(r=(0,f.connect)(e=>{var t=e.knowledge,a=e.loading;return{knowledge:t,loading:a}}),r((h=class extends m.Component{constructor(){super(...arguments),this.state={modalVisible:!1,modalContent:{}},this.columns=[{title:"\u5206\u7c7b\u540d",dataIndex:"classificationName"},{title:"\u63cf\u8ff0",dataIndex:"desc"},{title:"\u66f4\u65b0\u65e5\u671f",dataIndex:"updateTime"},{title:"\u64cd\u4f5c",key:"action",render:(e,t)=>m.default.createElement("div",null,m.default.createElement(o.default,{type:"edit",onClick:this.showModal.bind(this,t),className:"can-click",style:{marginRight:"1em"},title:"\u7f16\u8f91"}),m.default.createElement(o.default,{type:"delete",onClick:this.deleteContent.bind(this,t),className:"can-click",title:"\u5220\u9664"}))}],this.showModal=(e=>{this.setState({modalContent:e,modalVisible:!0})}),this.handleCancel=(e=>{this.setState({modalVisible:!1})}),this.handleOk=(e=>{this.props.form.validateFields((e,t)=>{if(!e){var a=this.state.modalContent.id;void 0!==a&&(t.id=a),this.props.dispatch({type:"knowledge/saveClassification",payload:t}).then(()=>{this.setState({modalVisible:!1}),this.props.form.resetFields()})}})}),this.deleteContent=(e=>{d.default.confirm({title:"\u4f60\u60f3\u5220\u9664\u8fd9\u4e9b\u9879\u76ee\u5417\uff1f",okText:"\u786e\u5b9a",okType:"danger",cancelText:"\u53d6\u6d88",onOk:()=>{this.props.dispatch({type:"knowledge/deleteClassification",payload:{id:e.id}})},onCancel(){console.log("Cancel")}})}),this.handleTableChange=((e,t,a)=>{this.props.dispatch({type:"knowledge/getClassificationList",payload:{pageSize:C,pageNum:e.current}})})}componentDidMount(){this.props.knowledge.classificationObj.list||this.props.dispatch({type:"knowledge/getClassificationList",payload:{pageSize:C,pageNum:1}})}render(){var e=this.props.knowledge.classificationObj,t=e.list,a=void 0===t?[]:t,l=e.total,i=e.pageNum,o=this.state,r=o.modalVisible,u=o.modalContent,h=this.props.form.getFieldDecorator;return m.default.createElement("div",null,m.default.createElement("div",{style:{marginBottom:"1rem"}},m.default.createElement(n.default,{onClick:this.showModal.bind(this,{})},"\u65b0\u589e")),m.default.createElement(s.default,{columns:this.columns,dataSource:a,onChange:this.handleTableChange,loading:this.props.loading.effects["knowledge/getClassificationList"],rowKey:"id",pagination:{showQuickJumper:!0,current:i,total:l}}),m.default.createElement(d.default,{title:void 0===u.id?"\u65b0\u589e":"\u7f16\u8f91",visible:r,onOk:this.handleOk,onCancel:this.handleCancel},m.default.createElement(p.default,{onSubmit:this.handleSubmit},m.default.createElement(g,{label:"\u5206\u7c7b\u540d"},h("classificationName",{initialValue:u.classificationName,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5206\u7c7b\u540d"}]})(m.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"}))),m.default.createElement(g,{label:"\u63cf\u8ff0"},h("desc",{initialValue:u.desc,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u63cf\u8ff0"}]})(m.default.createElement(k,{autosize:{minRows:3,maxRows:6},placeholder:"\u8bf7\u8f93\u5165\u63cf\u8ff0"}))))))}},u=h))||u),b=p.default.create()(w);t.default=b}}]);