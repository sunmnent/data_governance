(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{JEAt:function(e,t,a){"use strict";var s=a("g09b"),i=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var l=s(a("5rEg"));a("+L6B");var d=s(a("2/Rp"));a("miYZ");var o=s(a("tsqr")),r=s(a("p0pE"));a("OaEy");var n=s(a("2fM7"));a("y8nQ");var h=s(a("Vl3Y"));a("nRaC");var c,u,f,m=s(a("5RzL")),p=i(a("q1tI")),g=s(a("T52R")),b=s(a("Mosh")),v=s(a("LGns")),S=s(a("sDZr")),y=s(a("eIaE")),E=s(a("fhAg")),w=s(a("7umO")),L=a("E5h/"),N=s(a("k159")),D=a("MuoO"),k=a("7DNP");a("NS7E"),a("cJfE"),a("3MCO"),a("wTn2");var C=m.default.TreeNode,T=h.default.Item,x=(n.default.Option,!0),A={id:"nodeValue",value:"nodeName",child:"children"},I=(c=(0,D.connect)(),c((f=class extends p.Component{constructor(){super(...arguments),this.state={treeNodes:[],tableData:"",isSearchLoading:!1,isUpdate:!1,isSuccess:!1,deleteVisible:!1,deleteLoading:!1,editLoading:!1,deleteIds:[],editData:{items:[],indexs:[]},isAdd:!0,submitTables:[],SQL:""},this.getTableData=(e=>{var t=e.classifyId,a=e.tableName,s=e.type;return v.default.fetchListData({classifyId:t,tableName:a,type:s}).then(e=>{if(e&&e.obj){var t=e.obj,a=t.nodes,s=t.edges,i=[];if(a&&a.length>0){var l=1;l=a.length<=20?6:a.length>20&&a.length<=50?8:10;a.length%l==0?a.length:a.length;a.forEach((e,t)=>{a[t].y=t>=0&&t<l?80+100*Math.random():25*a[t-l].items.length+100+a[t-l].y+100*Math.random(),0==t?a[t].x=80:(a[t].x=a[t-1].x+170+50*Math.random(),t%l==0&&(a[t].x=80)),i.push(e.id)})}t.nodes=a,t.edges=s,this.setState({tableData:t})}this.setState({isSuccess:!0})})}),this.fetchTableClassify=(e=>{var t=new b.default.FnQueue,a=this,s=this.state.treeNodes,i={treeSelect:function(){s=[],v.default.fetchCategoryData({}).then(e=>{b.default.notNull(e)&&b.default.notNull(e.obj)&&b.default.notNull(e.obj[0])&&(s=a.generateTreeNodes(e.obj[0].children)),t.next()})}};e=e||["treeSelect"],e.forEach(e=>{t.add(i[e])}),t.add(()=>{this.setState({treeNodes:s})}),t.fire()}),this.generateTreeNodes=(e=>{var t=[],a=A.id,s=A.value,i=A.child;if(e)return e.forEach(e=>{b.default.notNull(e[i])?t.push(p.default.createElement(C,{value:e[a],title:e[s],key:e[a]},this.generateTreeNodes(e[i]))):t.push(p.default.createElement(C,{value:e[a],title:e[s],key:e[a]}))}),t}),this.handleSubmit=(e=>{e&&e.preventDefault(),this.props.form.validateFields((e,t)=>{e||(this.setState({isSearchLoading:!0,isUpdate:!0}),t.type=1,this.getTableData(t).then(()=>{this.setState({isSearchLoading:!1,isUpdate:!1})}))})}),this.edit=(e=>{this.setState({isAdd:!1}),x&&(x=!1,v.default.fetchTableInfo(e).then(e=>{x=!0,e&&e.obj&&this.setState({editData:(0,r.default)({},e.obj,{items:e.obj.items,indexs:e.obj.indexs})}),(0,L.emit)(N.default.ADD_MODAL_SWITCH)}))}),this.remove=(e=>{this.setState({deleteIds:e,deleteVisible:!0})}),this.makeDelete=(()=>{var e=this.state.deleteIds;this.setState({deleteLoading:!0}),v.default.deleteTable(e).then(e=>{this.setState({deleteLoading:!1}),e&&e.success?(this.showTypeTip(e),this.refs.renderCharts.clearDeleteIds()):e&&o.default.error(e.msg)})}),this.openSubmit=(()=>{v.default.fetchBeSubmitedTableData({type:1}).then(e=>{e&&e.success&&this.setState({submitTables:e.obj})})}),this.closeModal=(()=>{this.setState({deleteVisible:!1,deleteIds:[],deleteLoading:!1,editLoading:!1,editData:{items:[],indexs:[]},isAdd:!0,submitTables:[],SQL:""})}),this.showTypeTip=(e=>{e&&e.success&&(this.closeModal(),this.handleSubmit(),e.msg&&o.default.success(e.msg))}),this.showSQL=(e=>{this.setState({SQL:""}),v.default.showSQL(e).then(e=>{e&&e.success&&this.setState({SQL:e.obj})})}),this.back=(()=>{this.props.dispatch(k.routerRedux.goBack())})}componentDidMount(){this.fetchTableClassify(),this.handleSubmit()}render(){var e=this.state,t=e.treeNodes,a=e.tableData,s=e.isSearchLoading,i=e.isUpdate,o=e.isSuccess,r=e.deleteVisible,n=e.deleteLoading,c=(e.editLoading,e.deleteIds,e.editData),u=e.isAdd,f=e.submitTables,b=e.SQL,v=(e.tableNameValue,this.props.match.params.classifyCode),L=this.props.form.getFieldDecorator;return p.default.createElement("div",{className:"stage bg-white padding20"},p.default.createElement(d.default,{onClick:this.back,style:{float:"right",marginTop:4}},"\u8fd4\u56de"),p.default.createElement(h.default,{layout:"inline",onSubmit:this.handleSubmit,style:{marginBottom:"1rem"}},p.default.createElement(T,{label:"\u5206\u7c7b"},L("classifyId",{initialValue:"0"!==v?v:void 0})(p.default.createElement(m.default,{style:{width:200},dropdownStyle:{maxHeight:300,overflow:"auto"},placeholder:"\u8bf7\u9009\u62e9\u5206\u7c7b",allowClear:!0,showCheckedStrategy:m.default.SHOW_ALL},t))),p.default.createElement(T,{label:"\u8868\u540d"},L("tableName",{})(p.default.createElement(l.default,{style:{width:200,margin:"0 10px 5px 10px"},placeholder:"\u8bf7\u8f93\u5165\u8868\u540d"}))),p.default.createElement(T,null,p.default.createElement(d.default,{type:"primary",htmlType:"submit",loading:s,icon:"search",style:{margin:"-5px 5px 0px 5px"}},"\u641c\u7d22"))),o?p.default.createElement(g.default,{data:a,isUpdate:i,onDelete:e=>this.remove(e),showAddModal:e=>this.edit(e),showSQL:e=>this.showSQL(e),ref:"renderCharts"}):"",p.default.createElement(S.default,{isAdd:u,editData:c,onSubmit:this.showTypeTip,onClose:this.closeModal,type:1}),p.default.createElement(y.default,{tables:f,openModal:this.openSubmit,onSubmit:this.showTypeTip}),p.default.createElement(E.default,{SQL:b}),p.default.createElement(w.default,{hideHeader:"sunm-modal-head-hide",title:"\u5220\u9664\u63d0\u793a",btnloading:n,visible:r,ok:()=>this.makeDelete(),cancel:()=>this.closeModal(),content:p.default.createElement("span",null,"\u786e\u5b9a\u5220\u9664\u6240\u9009\u7684\u4e3b\u6a21\u578b\u8868\u5417\uff1f")}))}},u=f))||u),M=h.default.create()(I);t.default=M},T52R:function(e,t,a){"use strict";var s=a("tAuX"),i=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var l=i(a("BMrR"));a("jCWc");var d=i(a("kPKH"));a("+L6B");var o=i(a("2/Rp"));a("miYZ");var r,n=i(a("tsqr")),h=s(a("q1tI")),c=i(a("0Dzg")),u=(i(a("sDZr")),i(a("eIaE")),i(a("fhAg")),i(a("xeH2"))),f=a("E5h/"),m=a("+mQZ"),p=i(a("k159")),g=2.5*window.innerHeight,b=[],v=!1,S=1;class y extends h.Component{constructor(e){var t;super(e),t=this,this.renderCharts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.props.data;r=new c.default.Net(Object.assign({id:"flow",height:g},e)),r.source(a.nodes,a.edges),r.node().shape("customNode").style({stroke:null}),r.edge().shape("arrow"),r.on("click",function(e){var t=e.shape;if(t){var a=t.get("dom");if(a){var s=a.querySelector(".arrow"),i=a.querySelectorAll(".list li");if(s&&s.classList.contains("down")){s.setAttribute("class","arrow up");for(var l=5;l<i.length;l++)i[l].classList.remove("hidden")}else if(s&&s.classList.contains("up")){s.setAttribute("class","arrow down");for(var d=5;d<i.length;d++)i[d].classList.add("hidden")}}}}),r.render()},this.refreshChart=(()=>{r.destroy(),this.renderCharts()}),this.attachEvents=(()=>{(0,u.default)("#flow").on("click",".node-checkbox",e=>{var t=e.target.dataset.id,s=this.state.checkboxs[t];s?(0,u.default)(e.target).removeClass("checked").addClass("unchecked").attr("src",a("NcbR")):(0,u.default)(e.target).removeClass("unchecked").addClass("checked").attr("src",a("EYtV")),this.setState(e=>{var a=e.checkboxs,s=e.selectKeys;for(var i in b=[],a[t]=!a[t],a)a[i]&&b.push(parseInt(i));return{checkboxs:a,selectKeys:s}})}),(0,u.default)("#flow").on("click",".node-view",e=>{var t=e.target.dataset.id;this.props.showSQL&&this.props.showSQL(t),(0,f.emit)(p.default.SQL_VIEW_MODAL_SWITCH)}),(0,u.default)("#flow").on("click",".edit-model",e=>{var t=e.target.dataset.id;this.props.showAddModal&&this.props.showAddModal(t)})}),this.add=(()=>{(0,f.emit)(p.default.ADD_MODAL_SWITCH)}),this.remove=(()=>{b.length<=0?n.default.warning("\u8bf7\u9009\u62e9\u9700\u8981\u5220\u9664\u7684\u6a21\u578b\u8868"):this.props.onDelete&&this.props.onDelete(b)}),this.clearDeleteIds=(()=>{b=[],this.setState({checkboxs:{}})}),this.submit=(()=>{(0,f.emit)(p.default.SUBMIT_MODAL_SWITCH)}),this.zoomIn=(()=>{S<3&&(S+=.1,r.zoom(Number(S)))}),this.zoomOut=(()=>{S>.2&&(S-=.1,r.zoom(Number(S)))}),this.autoZoom=(()=>{v=!v,r.destroy(),v?this.renderCharts({fitView:"autoZoom"}):this.renderCharts()}),this.state={checkboxs:{},selectKeys:[]},c.default.registerNode("customNode",{cssSize:!0,getHtml(e){return(0,m.createNode)(e,b)}},"html")}componentDidMount(){this.renderCharts(),this.attachEvents()}UNSAFE_componentWillReceiveProps(e,t){e.isUpdate&&this.refreshChart()}render(){return h.default.createElement("div",{className:"stage bg-f7f7f7"},h.default.createElement(l.default,{className:"bg-f7f7f7 padding20"},h.default.createElement(d.default,{span:19},h.default.createElement(o.default,{size:"small",icon:"plus",className:"margin-right5",onClick:this.add},"\u65b0\u589e"),h.default.createElement(o.default,{size:"small",icon:"delete",className:"margin-right5",onClick:this.remove},"\u5220\u9664"),h.default.createElement(o.default,{size:"small",type:"primary",icon:"upload",onClick:this.submit},"\u63d0\u4ea4")),h.default.createElement(d.default,{span:5,style:{textAlign:"right"}},h.default.createElement("i",{title:"\u653e\u5927",className:"icon animate sm iconfont icon-fangda1 margin-top4 margin-right10",onClick:this.zoomIn}),h.default.createElement("i",{title:"\u7f29\u5c0f",className:"icon animate sm iconfont icon-suoxiao margin-top4 margin-right10",onClick:this.zoomOut}),h.default.createElement("i",{title:"\u81ea\u9002\u5e94\u7a97\u53e3",className:"icon animate sm iconfont icon-zishiying1 margin-top4 margin-right10",onClick:this.autoZoom}))),h.default.createElement("div",{className:"padding20"},h.default.createElement("div",{id:"flow"})))}}t.default=y},wTn2:function(e,t,a){}}]);