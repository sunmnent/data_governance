(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{"4rUd":function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(a("q1tI")),n=l(a("meRS"));a("KFsi");var r=l(a("IAP5"));class i extends s.default.Component{constructor(e){super(e),this.getCheckedNodes=(e=>{this.props.changeSelect(e)}),this.state={allRightData:this.props.data}}UNSAFE_componentWillReceiveProps(e){this.setState({allRightData:e.data})}render(){var e=[{title:"\u6743\u9650\u6a21\u5757",dataKey:"name",width:"30%"},{title:"\u6743\u9650\u7c7b\u578b",dataKey:"type",width:"10%"},{title:"\u6743\u9650\u72b6\u6001",dataKey:"status",width:"10%"},{title:"\u6743\u9650\u94fe\u63a5",dataKey:"url",width:"30%"},{title:"\u63cf\u8ff0",dataKey:"remark",width:"20%"}],t=this.state.allRightData,a=n.default.arrayDataToTree(t),l={levels:2,check:!0,columns:e,nodes:a,getCheckedNodes:this.getCheckedNodes,selectTreeId:"",scroll:"",isExpandAll:!0};return console.log(a),s.default.createElement("div",{className:"function-table"},n.default.notNull(a)?s.default.createElement(r.default,l):null)}}t.default=i},FTak:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var s=l(a("W9HT"));a("+L6B");var n=l(a("2/Rp"));a("2qtc");var r=l(a("kLXV"));a("Znn+");var i=l(a("ZTPi")),o=l(a("q1tI")),d=l(a("meRS")),u=a("Nmln"),c=l(a("f66p")),h=l(a("4rUd"));a("KFsi"),a("3MCO");i.default.TabPane;var f="",m=[];class p extends o.default.Component{constructor(e){super(e),this.componentDidMount=(()=>{this._isMounted=!0,this.getRoleData()}),this.componentWillUnMount=(()=>{this._isMounted=!1,this.getRoleData(),this.getAllRightData()}),this.getRoleData=(()=>{(0,u.InitRole)({}).then(e=>{f=e.rows[0],this.setState({allRoleData:e.rows,roleId:f["id"]}),console.log("\u663e\u793a\u89d2\u8272\u6570\u636e\uff1a"+f["id"])}).then(()=>{this.getAllRightData()})}),this.columnData=(e=>{e.forEach(e=>{e["key"]=e.id,e["label"]=e.name,e["value"]=e.id,e["status"]=1==e["status"]?"\u542f\u7528":"\u672a\u542f\u7528",1==e["type"]?e["type"]="\u83dc\u5355":2==e["type"]?e["type"]="\u529f\u80fd\u6309\u94ae":e["type"]="\u5176\u5b83"}),this.setState({allRightData:d.default.isNull(e)?[]:e,loading:!1})}),this.getAllRightData=(()=>{(0,u.GetRoleFunction)({roleId:f["id"]}).then(e=>{this.columnData(e.obj)})}),this.changeSelectRole=(e=>{this.setState({loading:!0},function(){f=e,(0,u.ClickRole)({roleId:f.id}).then(e=>{this.columnData(e.obj)})})}),this.changeSelectRoleRight=(e=>{m=d.default.notNull(e)?d.default.jointIdsAndParent(e,!1):""}),this.saveRoleRight=(()=>{var e={roleId:f.id};e.rids=m,(0,u.SaveRole)({roleId:f.id,rids:m}).then(e=>{this.saveRoleRightResult(e)})}),this.saveRoleRightResult=(e=>{var t="",a="";t=e,a="\u89d2\u8272\u529f\u80fd\u6743\u9650",t.success?r.default.success({title:"\u63d0\u793a\u4fe1\u606f",okText:"\u786e\u5b9a",content:"\u4fdd\u5b58\u3010".concat(f.name,"\u3011\u7684").concat(a,"\u6210\u529f!")}):r.default.error({title:"\u63d0\u793a\u4fe1\u606f",okText:"\u786e\u5b9a",content:"\u4fdd\u5b58\u8d26\u6237\u3010".concat(f.name,"\u3011\u7684").concat(a,"\u5931\u8d25!")})}),this.state={allRoleData:[],allRightData:[],loading:!0,roleId:""}}render(){return o.default.createElement("div",{className:"sunm-content sunm-standard-content"},o.default.createElement("div",{className:"sunm-inner-content top"},o.default.createElement("div",{className:"sunm-inner-column"},o.default.createElement("div",{className:"sunm-inner-column-cont"},o.default.createElement("div",{className:"jsgl_content"},o.default.createElement("div",{className:"left_role_nav",style:{minHeight:$(window).height()-50}},o.default.createElement(c.default,{data:this.state.allRoleData,changeSelectRole:this.changeSelectRole,freshRoleData:this.getRoleData})),o.default.createElement("div",{className:"right_right_nav"},o.default.createElement(s.default,{spinning:this.state.loading},o.default.createElement("div",{className:"function-title"},"\u529f\u80fd\u6743\u9650"),o.default.createElement("div",{className:"rignt-function"},o.default.createElement(h.default,{data:this.state.allRightData,changeSelect:this.changeSelectRoleRight})),o.default.createElement(n.default,{type:"primary",className:"save_roleRight_btn",onClick:this.saveRoleRight},"\u4fdd\u5b58"))))))))}}t.default=p},f66p:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var s=l(a("2/Rp"));a("Pwec");var n=l(a("CtXQ"));a("2qtc");var r=l(a("kLXV")),i=l(a("q1tI")),o=a("Nmln"),d=l(a("meRS")),u=l(a("IAP5")),c=l(a("zmi2"));a("KFsi");var h=r.default.confirm,f="";class m extends i.default.Component{constructor(e){super(e),this.addRoleAction=(()=>{for(var e=this.state.allRoleData?this.state.allRoleData:[],t=[],a=0;a<e.length;a++){var l=e[a];2!=l["type"]&&(l["label"]=e[a]["name"],l["key"]=e[a]["id"],l["value"]=e[a]["pathUrl"].substr(1,l["pathUrl"].length-2),t.push(l))}t=d.default.isNull(t)?[]:d.default.arrayDataToTree(t),this.setState({roleMoudleParmas:{title:"\u65b0\u589e\u89d2\u8272\u4fe1\u606f",visible:!0,roleInfo:{id:"",parentId:d.default.notNull(t)?t[0]["id"]:"",pathUrl:"",remark:"",name:""}},treeRoleData:t})}),this.editRoleAction=(()=>{for(var e=f,t=this.state.allRoleData?this.state.allRoleData:[],a=[],l=0;l<t.length;l++){var s=t[l];2!=s["type"]&&-1==s["pathUrl"].indexOf(e.pathUrl)&&(s["label"]=t[l]["name"],s["key"]=t[l]["id"],s["value"]=t[l]["pathUrl"].substr(1,s["pathUrl"].length-2),a.push(s))}a=d.default.isNull(a)?[]:d.default.arrayDataToTree(a),d.default.isNull(e)?r.default.warning({title:"\u63d0\u793a\u4fe1\u606f",content:"\u8bf7\u9009\u62e9\u89d2\u8272\u4fe1\u606f!"}):"-1"==e.parentId?r.default.warning({title:"\u63d0\u793a\u4fe1\u606f",content:"\u6839\u89d2\u8272\u4e0d\u80fd\u8fdb\u884c\u4fee\u6539\u64cd\u4f5c!"}):this.setState({roleMoudleParmas:{title:"\u7f16\u8f91\u89d2\u8272\u4fe1\u606f",visible:!0,roleInfo:{id:e.id,parentId:e.parentId,pathUrl:e.pathUrl,remark:e.remark,seq:e.seq,name:e.name}},treeRoleData:a})}),this.deleteRoleAction=(e=>{var t=this,a=f;if(d.default.isNull(a))r.default.warning({title:"\u63d0\u793a\u4fe1\u606f",content:"\u8bf7\u9009\u62e9\u89d2\u8272\u4fe1\u606f!"});else if("-1"==a.parentId)r.default.warning({title:"\u63d0\u793a\u4fe1\u606f",content:"\u6839\u89d2\u8272\u4e0d\u80fd\u8fdb\u884c\u5220\u9664\u64cd\u4f5c!"});else{var l=a.id,s="";if(a["children"]){s="\u53ca\u5176\u5b69\u5b50\u8282\u70b9";var n=[{id:a.id}];d.default.getChildrenIds(a,n),l=d.default.jointIds(n)}h({title:"\u63d0\u793a\u4fe1\u606f",content:"\u786e\u5b9a\u8981\u5220\u9664\u3010".concat(a.name,"\u3011").concat(s,"\u6743\u9650\u4fe1\u606f\u5417?"),okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk(){(0,o.DeleteRole)({ids:l}).then(e=>{t.getDeleteResult(e),t.props.freshRoleData&&t.props.freshRoleData()})},onCancel(){}})}}),this.getDeleteResult=(e=>{e.success?r.default.success({title:"\u63d0\u793a\u4fe1\u606f",content:"\u5220\u9664\u89d2\u8272\u6210\u529f!"}):r.default.error({title:"\u63d0\u793a\u4fe1\u606f",content:"\u5220\u9664\u89d2\u8272\u5931\u8d25!"})}),this.changeRoleModuleState=(e=>{this.setState({roleMoudleParmas:e})}),this.clickParentHandle=((e,t,a)=>{f=a,this.props.changeSelectRole(f)}),this.state={allRoleData:[],treeRoleData:[],roleMoudleParmas:{visible:!1,title:"",roleInfo:{}}}}componentWillMount(){d.default.notNull(this.props.data)&&(f=this.props.data[0]),this.setState({allRoleData:this.props.data})}UNSAFE_componentWillReceiveProps(e){e.data!=this.state.allRoleData&&(d.default.notNull(e.data)&&(f=e.data[0]),e.data!=this.state.allRoleData&&this.setState({allRoleData:e.data}))}render(){var e=d.default.arrayDataToTree(this.state.allRoleData),t=this.props.freshRoleData,a=[{title:"\u89d2\u8272\u540d\u79f0",dataKey:"name",width:"60%",render:(e,t)=>{return i.default.createElement("div",{className:"divTdRight",style:{width:"60%"}},i.default.createElement("a",{title:t.name},t.name))}},{title:"\u64cd\u4f5c",dataKey:"action",width:"40%",render:(e,t)=>{return i.default.createElement("div",{className:"divTdRight",style:{width:"40%"}},i.default.createElement("a",{onClick:this.editRoleAction},i.default.createElement(n.default,{type:"form",className:"sys-icon tree-padd"})),i.default.createElement("a",{onClick:this.deleteRoleAction}," ",i.default.createElement(n.default,{type:"delete",className:"sys-icon tree-padd"})))}}],l={check:!1,levels:2,columns:a,nodes:e,getCheckedNodes:"",selectTreeId:"",scroll:"",events:this.clickParentHandle,isExpandAll:!0,isRoleName:!0};return i.default.createElement("div",null,i.default.createElement(s.default,{onClick:this.addRoleAction},i.default.createElement(n.default,{type:"plus",className:"sys-icon"}),"\u65b0\u589e"),i.default.createElement("div",{className:"left_user_nav"},d.default.notNull(e)?i.default.createElement(u.default,l):null,i.default.createElement(c.default,{freshRoleData:t,changeRoleModuleState:this.changeRoleModuleState,defaultData:this.state.roleMoudleParmas,treeRoleData:this.state.treeRoleData})))}}t.default=m},zmi2:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var s=l(a("kLXV"));a("giR+");var n=l(a("fyUT"));a("nRaC");var r=l(a("5RzL")),i=l(a("jehZ"));a("5NDa");var o=l(a("5rEg"));a("y8nQ");var d=l(a("Vl3Y")),u=l(a("q1tI")),c=l(a("meRS")),h=a("Nmln"),f=d.default.Item,m=d.default.create()(e=>{var t=e.params,a=e.handleOk,l=e.handleCancel,h=e.form,m=h.getFieldDecorator,p={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}};return u.default.createElement(s.default,{title:t.title,visible:t.visible,maskClosable:!1,okText:"\u4fdd\u5b58",style:{top:20},onOk:a,onCancel:l},u.default.createElement(d.default,null,u.default.createElement(f,(0,i.default)({},p,{label:"\u89d2\u8272\u540d\u79f0"}),m("name",{initialValue:c.default.notNull(t.roleInfo.name)?"".concat(t.roleInfo.name):"",rules:[{required:!0,whitespace:!0,message:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d\u79f0!"},{max:255,message:"\u89d2\u8272\u540d\u79f0\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7255\u4f4d"}]})(u.default.createElement(o.default,null))),u.default.createElement(f,(0,i.default)({},p,{label:"\u7236\u89d2\u8272\u540d\u79f0"}),m("parentId",{initialValue:c.default.notNull(t.roleInfo.parentPathUrl)?"".concat(t.roleInfo.parentPathUrl):"",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7236\u89d2\u8272\u540d\u79f0!"}]})(u.default.createElement(r.default,{dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:t.roleData,placeholder:"\u8bf7\u9009\u62e9\u7236\u89d2\u8272\u540d\u79f0",treeDefaultExpandAll:!0}))),u.default.createElement(f,(0,i.default)({},p,{label:"\u6392\u5e8f\u7f16\u53f7"}),m("seq",{initialValue:0==t.roleInfo.seq||c.default.notNull(t.roleInfo.seq)?Number(t.roleInfo.seq):null,rules:[{type:"integer",max:9999,whitespace:!0,message:"\u8bf7\u8f93\u5165\u6570\u5b57\u4e14\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc74\u4f4d!"}]})(u.default.createElement(n.default,{style:{width:"100%"}}))),u.default.createElement(f,(0,i.default)({},p,{label:"\u63cf\u8ff0"}),m("remark",{rules:[{max:255,message:"\u63cf\u8ff0\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7255\u4f4d"}],initialValue:c.default.notNull(t.roleInfo.remark)?"".concat(t.roleInfo.remark):""})(u.default.createElement(o.default,{type:"textarea",rows:4})))))});class p extends u.default.Component{constructor(e){super(e),this.handleOk=(()=>{this.form.validateFields((e,t)=>{if(!e&&!e){var a=t.parentId.split("/");a=a[a.length-1];var l=this.state.params.roleInfo;l.name=t.name,l.parentId=a,l.seq=t.seq,l.remark=t.remark,"\u65b0\u589e\u89d2\u8272\u4fe1\u606f"==this.state.params.title?(0,h.AddEditRole)({id:"",name:l.name?l.name:"",parentId:l.parentId?l.parentId:"",parentPathUrl:l.parentPathUrl?l.parentPathUrl:"",remark:l.remark?l.remark:"",seq:l.seq?l.seq:""}).then(e=>{this.addRoleAction(e)}):"\u7f16\u8f91\u89d2\u8272\u4fe1\u606f"==this.state.params.title&&(0,h.AddEditRole)({id:l.id,name:l.name?l.name:"",parentId:l.parentId?l.parentId:"",parentPathUrl:l.parentPathUrl?l.parentPathUrl:"",remark:l.remark?l.remark:"",seq:l.seq?l.seq:""}).then(e=>{this.editRoleAction(e)})}})}),this.handleCancel=(()=>{this.setState({params:{title:this.state.params.title,visible:!1,roleInfo:this.state.params.roleInfo}},function(){this.form.resetFields(),this.props.changeRoleModuleState(this.state.params)})}),this.addRoleAction=(e=>{var t=e;t.success?this.setState({params:{title:this.state.params.title,visible:!1,roleInfo:this.state.params.roleInfo}},function(){s.default.success({title:"\u63d0\u793a\u4fe1\u606f",okText:"\u786e\u5b9a",content:"\u65b0\u589e\u89d2\u8272\u4fe1\u606f\u6210\u529f!"}),this.form.resetFields(),this.props.changeRoleModuleState(this.state.params),this.props.freshRoleData&&this.props.freshRoleData()}):s.default.error({title:"\u63d0\u793a\u4fe1\u606f",okText:"\u786e\u5b9a",content:"\u65b0\u589e\u89d2\u8272\u4fe1\u606f\u5931\u8d25!"})}),this.editRoleAction=(e=>{var t=e;t.success?this.setState({params:{title:this.state.params.title,visible:!1,roleInfo:this.state.params.roleInfo}},function(){s.default.success({title:"\u63d0\u793a\u4fe1\u606f",okText:"\u786e\u5b9a",content:"\u4fee\u6539\u89d2\u8272\u4fe1\u606f\u6210\u529f!"}),this.props.changeRoleModuleState(this.state.params),this.form.resetFields(),this.props.freshRoleData&&this.props.freshRoleData()}):s.default.error({title:"\u63d0\u793a\u4fe1\u606f",okText:"\u786e\u5b9a",content:"\u4fee\u6539\u89d2\u8272\u4fe1\u606f\u5931\u8d25!"})}),this.saveFormRef=(e=>{this.form=e}),this.state={params:{title:"",visible:!1,roleInfo:{},roleData:[]}}}UNSAFE_componentWillReceiveProps(e){this.setState({params:{title:e.defaultData.title,visible:e.defaultData.visible,roleInfo:e.defaultData.roleInfo,roleData:e.treeRoleData}})}render(){var e=this.state.params,t="";if(c.default.notNull(e)){var a=e.roleInfo.pathUrl?e.roleInfo.pathUrl.split("/"):[];t=a.slice(1,a.length-2).join("/"),"\u65b0\u589e\u89d2\u8272\u4fe1\u606f"==e.title&&(t=e.roleInfo.parentId)}return e.roleInfo.parentPathUrl=t,u.default.createElement("div",{style:{paddingBottom:15}},u.default.createElement(m,{params:e,ref:this.saveFormRef,handleCancel:this.handleCancel,handleOk:this.handleOk}))}}t.default=p}}]);