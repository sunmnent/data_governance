(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{"6qmG":function(e,t,a){"use strict";var l=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var d=r(a("kLXV")),i=r(a("jehZ"));a("y8nQ");var s=r(a("Vl3Y"));a("/zsF");var n=r(a("PArb")),o=r(a("p0pE"));a("iQDF");var u=r(a("+eQT"));a("OaEy");var p=r(a("2fM7")),h=l(a("q1tI")),c=a("MuoO"),m=r(a("wd/R")),f=r(a("FI0D")),g=p.default.Option,v=u.default.RangePicker,y=["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u5341\u4e00","\u5341\u4e8c"],w=["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u65e5"],k="\u5168\u90e8";class E extends h.Component{constructor(){super(...arguments),this.sortNumbers=(e=>{return e.sort((e,t)=>e-t)}),this.formatArr=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=[[]],d=0;d<e.length;d++){var i=t?t[e[d]-1]:e[d];r[r.length-1].push(i),e[d+1]&&e[d+1]-e[d]!==1&&r.push([])}var s=r.map(e=>{return 1===e.length?"".concat(a).concat(e[0]).concat(l):"".concat(a).concat(e[0],"-").concat(e[e.length-1]).concat(l)});return s},this.simpleTagPlaceholder=(e=>{var t=this.sortNumbers(e);return this.formatArr(t).join(",")}),this.monthTagPlaceholder=(e=>{var t=this.sortNumbers(e);return this.formatArr(t,y,"","\u6708").join(",")}),this.weekTagPlaceholder=(e=>{var t=this.sortNumbers(e);return this.formatArr(t,w,"\u5468","").join(",")}),this.handleOk=(()=>{this.props.form.validateFieldsAndScroll((e,t)=>{if(!e){t.effectiveDate&&(t.starttime=t.effectiveDate[0].format("YYYY-MM-DD HH:mm:ss"),t.endtime=t.effectiveDate[1].format("YYYY-MM-DD HH:mm:ss")),delete t.effectiveDate;for(var a=["minute","hour","day","month","week"],l=0,r=a;l<r.length;l++){var d=r[l];void 0===t[d]||Array.isArray(t[d])&&0===t[d].length?t[d]="*":Array.isArray(t[d])&&(t[d]=this.simpleTagPlaceholder(t[d]))}t.cron=a.map(e=>t[e]).join(" ");for(var i=0,s=a;i<s.length;i++){var n=s[i];delete t[n]}t.timetype=t.period,delete t.period,this.props.submit((0,o.default)({},t,{cid:this.props.data.taskId,taskType:""}))}})}),this.getInitialValue=(e=>{if(e&&"*"!==e&&"?"!==e){var t=[];return e.split(",").forEach(e=>{var a=e.split("-").map(e=>parseInt(e));if(1===a.length)t.push(a[0]);else for(var l=a[0];l<=a[1];l++)t.push(l)}),t}}),this.renderDropdown=((e,t)=>{return a=>h.default.createElement("div",{className:f.default.dropdown},a,h.default.createElement(n.default,{className:f.default.divider}),h.default.createElement("div",{className:f.default.action,onMouseDown:e=>e.preventDefault()},h.default.createElement("span",{className:f.default.selectAll,onClick:this.selectAll.bind(this,e,t)},"\u5168\u9009"),h.default.createElement("span",{className:f.default.unselectAll,onClick:this.unselectAll.bind(this,e)},"\u5168\u4e0d\u9009")))}),this.selectAll=((e,t)=>{var a=this.getInitialValue(t);this.props.form.setFieldsValue({[e]:a})}),this.unselectAll=(e=>{this.props.form.setFieldsValue({[e]:void 0})}),this.changePeriod=(e=>{if(5===e){var t=this.props.form,a=t.setFieldsValue,l=t.getFieldValue;a({minute:[l("period")]})}})}componentDidUpdate(e,t){this.props.data.taskId&&JSON.stringify(e.data)!==JSON.stringify(this.props.data)&&(this.props.form.setFieldsValue({period:this.props.data.period}),this.props.form.resetFields())}render(){var e=this.props.form,t=e.getFieldDecorator,a=e.getFieldValue,l=this.props.data,r=l.period,n=l.month,o=l.day,u=l.week,c=l.hour,E=l.minute,D=l.startDate,I=l.endDate,b=a("period"),A=b<=1,T=b<=2,N=b<=4,x=b<=5,C=3===b,_=5===b,P=_?{mode:"multiple",maxTagCount:0,maxTagPlaceholder:this.simpleTagPlaceholder,dropdownRender:this.renderDropdown("minute","0-59"),placeholder:k}:{},V=_?this.getInitialValue(E):E||0;return h.default.createElement(d.default,{title:"\u8bbe\u7f6e",visible:!!this.props.data.taskId,onOk:this.handleOk,onCancel:this.props.closeSetModal},h.default.createElement(s.default,{className:f.default.form},h.default.createElement(s.default.Item,{label:"\u4efb\u52a1\u9891\u7387"},t("period",{initialValue:r||1})(h.default.createElement(p.default,{onChange:this.changePeriod},h.default.createElement(g,{value:1},"\u5e74"),h.default.createElement(g,{value:2},"\u6708"),h.default.createElement(g,{value:3},"\u5468"),h.default.createElement(g,{value:4},"\u65e5"),h.default.createElement(g,{value:5},"\u65f6")))),A&&h.default.createElement(s.default.Item,{label:"\u4efb\u52a1\u65e5\u671f"},t("month",{initialValue:this.getInitialValue(n)})(h.default.createElement(p.default,{mode:"multiple",dropdownClassName:f.default.multipleDropdown,maxTagCount:0,maxTagPlaceholder:this.monthTagPlaceholder,dropdownRender:this.renderDropdown("month","1-12"),placeholder:k},y.map((e,t)=>h.default.createElement(g,{value:t+1,key:e},e,"\u6708"))))),T&&h.default.createElement(s.default.Item,{label:A?" ":"\u4efb\u52a1\u65e5\u671f",colon:!A},t("day",{initialValue:this.getInitialValue(o)})(h.default.createElement(p.default,{mode:"multiple",dropdownClassName:f.default.multipleDropdown,maxTagCount:0,maxTagPlaceholder:this.simpleTagPlaceholder,dropdownRender:this.renderDropdown("day","1-31"),placeholder:k},new Array(31).fill("").map((e,t)=>h.default.createElement(g,{value:t+1,key:t+1},t+1))))),C&&h.default.createElement(s.default.Item,{label:"\u4efb\u52a1\u65e5\u671f"},t("week",{initialValue:this.getInitialValue(u)})(h.default.createElement(p.default,{mode:"multiple",dropdownClassName:f.default.multipleDropdown,maxTagCount:0,maxTagPlaceholder:this.weekTagPlaceholder,dropdownRender:this.renderDropdown("week","1-7"),placeholder:k},w.map((e,t)=>h.default.createElement(g,{value:t+1,key:e},"\u5468",e))))),N&&h.default.createElement(s.default.Item,{label:"\u4efb\u52a1\u65f6\u95f4"},t("hour",{initialValue:this.getInitialValue(c)})(h.default.createElement(p.default,{mode:"multiple",dropdownClassName:f.default.multipleDropdown,maxTagCount:0,maxTagPlaceholder:this.simpleTagPlaceholder,dropdownRender:this.renderDropdown("hour","0-23"),placeholder:k},new Array(24).fill("").map((e,t)=>h.default.createElement(g,{value:t,key:t},t))))),x&&h.default.createElement(s.default.Item,{label:N?" ":"\u4efb\u52a1\u65f6\u95f4",colon:!N},t("minute",{initialValue:V})(h.default.createElement(p.default,(0,i.default)({dropdownClassName:f.default.multipleDropdown},P),new Array(60).fill("").map((e,t)=>h.default.createElement(g,{value:t,key:t},t))))),h.default.createElement(s.default.Item,{label:"\u751f\u6548\u65e5\u671f"},t("effectiveDate",{initialValue:D&&I?[(0,m.default)(D),(0,m.default)(I)]:void 0})(h.default.createElement(v,{style:{width:"100%"}})))))}}var D=(0,c.connect)()(s.default.create()(E));t.default=D},FI0D:function(e,t,a){e.exports={form:"form___HYyJ3",multipleDropdown:"multipleDropdown___1j1D0",dropdown:"dropdown___1WvWe",divider:"divider___2Fh37",action:"action___2uZy0",selectAll:"selectAll___2hTor",unselectAll:"unselectAll___2joRK"}},K2YU:function(e,t,a){"use strict";var l=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var d=l(a("wCAj"));a("+L6B");var i=l(a("2/Rp")),s=l(a("p0pE"));a("Pwec");var n=l(a("CtXQ"));a("2qtc");var o,u,p,h=l(a("kLXV")),c=r(a("q1tI")),m=a("MuoO"),f=a("7DNP"),g=l(a("6qmG")),v=h.default.confirm,y=(o=(0,m.connect)(e=>{var t=e.prehandle;return{prehandle:t}}),o((p=class extends c.Component{constructor(){super(...arguments),this.state={setModalData:{}},this.columns=[{title:"\u6d41\u7a0b\u540d\u79f0",dataIndex:"dataflowname"},{title:"\u76ee\u7684\u5e93\u8868",dataIndex:"dbAndTable"},{title:"\u4e0a\u6b21\u9884\u5904\u7406\u65f6\u95f4",dataIndex:"lastRun"},{title:"\u64cd\u4f5c",render:(e,t)=>c.default.createElement("span",null,c.default.createElement(n.default,{type:"setting",title:"\u8bbe\u7f6e",className:"can-click",style:{marginRight:5},onClick:this.set.bind(this,t)}),c.default.createElement(n.default,{type:"play-circle",title:"\u6267\u884c",className:"can-click",style:{marginRight:5},onClick:this.execute.bind(this,t)}),c.default.createElement(n.default,{type:"edit",title:"\u7f16\u8f91",className:"can-click",style:{marginRight:5},onClick:this.edit.bind(this,t)}),c.default.createElement(n.default,{type:"delete",title:"\u5220\u9664",className:"can-click",style:{marginRight:5},onClick:this.delete.bind(this,t)}),c.default.createElement(n.default,{type:"file-text",title:"\u65e5\u5fd7",className:"can-click",style:{marginRight:5},onClick:this.viewLog.bind(this,t)}))}],this.execute=(e=>{this.props.dispatch({type:"prehandle/execShuffle",payload:{taskId:e.taskId}})}),this.viewLog=(e=>{this.props.dispatch(f.routerRedux.push("/prehandle/log?taskId=".concat(e.taskId)))}),this.edit=(e=>{this.props.dispatch(f.routerRedux.push("/prehandle/dataflow?taskId=".concat(e.taskId)))}),this.delete=(e=>{v({title:"\u786e\u5b9a\u5220\u9664\u8fd9\u6761\u6d41\u7a0b\u5417\uff1f",okType:"danger",onOk:()=>{this.props.dispatch({type:"prehandle/deleteShuffle",payload:{taskId:e.taskId}}).then(this.fetchData)}})}),this.fetchData=(()=>{var e=this.props.prehandle.shuffle.params,t=void 0===e?{pageNum:1,pageSize:10}:e;this.props.dispatch({type:"prehandle/queryShuffle",payload:t})}),this.changeTable=(e=>{var t=this.props.prehandle.shuffle.params;this.props.dispatch({type:"prehandle/queryShuffle",payload:(0,s.default)({},t,{pageNum:e.current})})}),this.addPrehandle=(()=>{this.props.dispatch(f.routerRedux.push("/prehandle/dataflow?taskId=-1"))}),this.set=(e=>{var t=(0,s.default)({},e);if(t.cronExpress){var a=t.cronExpress.split(" "),l=["minute","hour","day","month","week"];l.forEach((e,l)=>{t[e]=a[l]})}this.setState({setModalData:t})}),this.closeSetModal=(()=>{this.setState({setModalData:{}})}),this.submitSettings=(e=>{this.props.dispatch({type:"prehandle/setTask",payload:e}).then(()=>{var e=this.props.prehandle.shuffle.params;this.props.dispatch({type:"prehandle/queryShuffle",payload:(0,s.default)({},e)}),this.closeSetModal()})})}componentDidMount(){this.fetchData()}render(){var e=this.props.prehandle.shuffle,t=e.list,a=e.total,l=e.pageNum,r=this.state.setModalData;return c.default.createElement("div",null,c.default.createElement("div",{style:{marginBottom:10}},c.default.createElement(i.default,{type:"primary",onClick:this.addPrehandle},"\u65b0\u589e\u6d41\u7a0b")),c.default.createElement(d.default,{columns:this.columns,dataSource:t,pagination:{total:a,current:l},onChange:this.changeTable,rowKey:"taskId"}),c.default.createElement(g.default,{data:r,submit:this.submitSettings,closeSetModal:this.closeSetModal}))}},u=p))||u),w=y;t.default=w}}]);