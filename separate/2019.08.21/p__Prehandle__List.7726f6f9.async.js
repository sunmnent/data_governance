(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"6qmG":function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var r=n(a("kLXV")),d=n(a("jehZ"));a("y8nQ");var o=n(a("Vl3Y")),u=n(a("eHn4"));a("/zsF");var i=n(a("PArb")),c=n(a("p0pE")),s=n(a("2Taf")),f=n(a("vZ4D")),p=n(a("l4Ni")),m=n(a("ujKo")),h=n(a("rlhR")),v=n(a("MhPg"));a("iQDF");var g=n(a("+eQT"));a("OaEy");var y=n(a("2fM7")),w=l(a("q1tI")),k=a("MuoO"),E=n(a("wd/R")),D=n(a("FI0D")),I=y.default.Option,b=g.default.RangePicker,A=["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u5341\u4e00","\u5341\u4e8c"],T=["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u65e5"],N="\u5168\u90e8",P=function(e){function t(){var e,a;(0,s.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,p.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(n))),a.sortNumbers=function(e){return e.sort(function(e,t){return e-t})},a.formatArr=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=[[]],r=0;r<e.length;r++){var d=t?t[e[r]-1]:e[r];n[n.length-1].push(d),e[r+1]&&e[r+1]-e[r]!==1&&n.push([])}var o=n.map(function(e){return 1===e.length?"".concat(a).concat(e[0]).concat(l):"".concat(a).concat(e[0],"-").concat(e[e.length-1]).concat(l)});return o},a.simpleTagPlaceholder=function(e){var t=a.sortNumbers(e);return a.formatArr(t).join(",")},a.monthTagPlaceholder=function(e){var t=a.sortNumbers(e);return a.formatArr(t,A,"","\u6708").join(",")},a.weekTagPlaceholder=function(e){var t=a.sortNumbers(e);return a.formatArr(t,T,"\u5468","").join(",")},a.handleOk=function(){a.props.form.validateFieldsAndScroll(function(e,t){if(!e){t.effectiveDate&&(t.starttime=t.effectiveDate[0].format("YYYY-MM-DD HH:mm:ss"),t.endtime=t.effectiveDate[1].format("YYYY-MM-DD HH:mm:ss")),delete t.effectiveDate;for(var l=["minute","hour","day","month","week"],n=0,r=l;n<r.length;n++){var d=r[n];void 0===t[d]||Array.isArray(t[d])&&0===t[d].length?t[d]="*":Array.isArray(t[d])&&(t[d]=a.simpleTagPlaceholder(t[d]))}t.cron=l.map(function(e){return t[e]}).join(" ");for(var o=0,u=l;o<u.length;o++){var i=u[o];delete t[i]}t.timetype=t.period,delete t.period,a.props.submit((0,c.default)({},t,{cid:a.props.data.taskId,taskType:""}))}})},a.getInitialValue=function(e){if(e&&"*"!==e&&"?"!==e){var t=[];return e.split(",").forEach(function(e){var a=e.split("-").map(function(e){return parseInt(e)});if(1===a.length)t.push(a[0]);else for(var l=a[0];l<=a[1];l++)t.push(l)}),t}},a.renderDropdown=function(e,t){return function(l){return w.default.createElement("div",{className:D.default.dropdown},l,w.default.createElement(i.default,{className:D.default.divider}),w.default.createElement("div",{className:D.default.action,onMouseDown:function(e){return e.preventDefault()}},w.default.createElement("span",{className:D.default.selectAll,onClick:a.selectAll.bind((0,h.default)(a),e,t)},"\u5168\u9009"),w.default.createElement("span",{className:D.default.unselectAll,onClick:a.unselectAll.bind((0,h.default)(a),e)},"\u5168\u4e0d\u9009")))}},a.selectAll=function(e,t){var l=a.getInitialValue(t);a.props.form.setFieldsValue((0,u.default)({},e,l))},a.unselectAll=function(e){a.props.form.setFieldsValue((0,u.default)({},e,void 0))},a.changePeriod=function(e){if(5===e){var t=a.props.form,l=t.setFieldsValue,n=t.getFieldValue;l({minute:[n("period")]})}},a}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentDidUpdate",value:function(e,t){this.props.data.taskId&&JSON.stringify(e.data)!==JSON.stringify(this.props.data)&&(this.props.form.setFieldsValue({period:this.props.data.period}),this.props.form.resetFields())}},{key:"render",value:function(){var e=this.props.form,t=e.getFieldDecorator,a=e.getFieldValue,l=this.props.data,n=l.period,u=l.month,i=l.day,c=l.week,s=l.hour,f=l.minute,p=l.startDate,m=l.endDate,h=a("period"),v=h<=1,g=h<=2,k=h<=4,P=h<=5,C=3===h,_=5===h,V=_?{mode:"multiple",maxTagCount:0,maxTagPlaceholder:this.simpleTagPlaceholder,dropdownRender:this.renderDropdown("minute","0-59"),placeholder:N}:{},x=_?this.getInitialValue(f):f||0;return w.default.createElement(r.default,{title:"\u8bbe\u7f6e",visible:!!this.props.data.taskId,onOk:this.handleOk,onCancel:this.props.closeSetModal},w.default.createElement(o.default,{className:D.default.form},w.default.createElement(o.default.Item,{label:"\u4efb\u52a1\u9891\u7387"},t("period",{initialValue:n||1})(w.default.createElement(y.default,{onChange:this.changePeriod},w.default.createElement(I,{value:1},"\u5e74"),w.default.createElement(I,{value:2},"\u6708"),w.default.createElement(I,{value:3},"\u5468"),w.default.createElement(I,{value:4},"\u65e5"),w.default.createElement(I,{value:5},"\u65f6")))),v&&w.default.createElement(o.default.Item,{label:"\u4efb\u52a1\u65e5\u671f"},t("month",{initialValue:this.getInitialValue(u)})(w.default.createElement(y.default,{mode:"multiple",dropdownClassName:D.default.multipleDropdown,maxTagCount:0,maxTagPlaceholder:this.monthTagPlaceholder,dropdownRender:this.renderDropdown("month","1-12"),placeholder:N},A.map(function(e,t){return w.default.createElement(I,{value:t+1,key:e},e,"\u6708")})))),g&&w.default.createElement(o.default.Item,{label:v?" ":"\u4efb\u52a1\u65e5\u671f",colon:!v},t("day",{initialValue:this.getInitialValue(i)})(w.default.createElement(y.default,{mode:"multiple",dropdownClassName:D.default.multipleDropdown,maxTagCount:0,maxTagPlaceholder:this.simpleTagPlaceholder,dropdownRender:this.renderDropdown("day","1-31"),placeholder:N},new Array(31).fill("").map(function(e,t){return w.default.createElement(I,{value:t+1,key:t+1},t+1)})))),C&&w.default.createElement(o.default.Item,{label:"\u4efb\u52a1\u65e5\u671f"},t("week",{initialValue:this.getInitialValue(c)})(w.default.createElement(y.default,{mode:"multiple",dropdownClassName:D.default.multipleDropdown,maxTagCount:0,maxTagPlaceholder:this.weekTagPlaceholder,dropdownRender:this.renderDropdown("week","1-7"),placeholder:N},T.map(function(e,t){return w.default.createElement(I,{value:t+1,key:e},"\u5468",e)})))),k&&w.default.createElement(o.default.Item,{label:"\u4efb\u52a1\u65f6\u95f4"},t("hour",{initialValue:this.getInitialValue(s)})(w.default.createElement(y.default,{mode:"multiple",dropdownClassName:D.default.multipleDropdown,maxTagCount:0,maxTagPlaceholder:this.simpleTagPlaceholder,dropdownRender:this.renderDropdown("hour","0-23"),placeholder:N},new Array(24).fill("").map(function(e,t){return w.default.createElement(I,{value:t,key:t},t)})))),P&&w.default.createElement(o.default.Item,{label:k?" ":"\u4efb\u52a1\u65f6\u95f4",colon:!k},t("minute",{initialValue:x})(w.default.createElement(y.default,(0,d.default)({dropdownClassName:D.default.multipleDropdown},V),new Array(60).fill("").map(function(e,t){return w.default.createElement(I,{value:t,key:t},t)})))),w.default.createElement(o.default.Item,{label:"\u751f\u6548\u65e5\u671f"},t("effectiveDate",{initialValue:p&&m?[(0,E.default)(p),(0,E.default)(m)]:void 0})(w.default.createElement(b,{style:{width:"100%"}})))))}}]),t}(w.Component),C=(0,k.connect)()(o.default.create()(P));t.default=C},FI0D:function(e,t,a){e.exports={form:"form___HYyJ3",multipleDropdown:"multipleDropdown___1j1D0",dropdown:"dropdown___1WvWe",divider:"divider___2Fh37",action:"action___2uZy0",selectAll:"selectAll___2hTor",unselectAll:"unselectAll___2joRK"}},K2YU:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var r=l(a("wCAj"));a("+L6B");var d=l(a("2/Rp")),o=l(a("p0pE"));a("Pwec");var u=l(a("CtXQ")),i=l(a("2Taf")),c=l(a("vZ4D")),s=l(a("l4Ni")),f=l(a("ujKo")),p=l(a("rlhR")),m=l(a("MhPg"));a("2qtc");var h,v,g,y=l(a("kLXV")),w=n(a("q1tI")),k=a("MuoO"),E=a("7DNP"),D=l(a("6qmG")),I=y.default.confirm,b=(h=(0,k.connect)(function(e){var t=e.prehandle;return{prehandle:t}}),h((g=function(e){function t(){var e,a;(0,i.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,s.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(n))),a.state={setModalData:{}},a.columns=[{title:"\u6d41\u7a0b\u540d\u79f0",dataIndex:"dataflowname"},{title:"\u76ee\u7684\u5e93\u8868",dataIndex:"dbAndTable"},{title:"\u4e0a\u6b21\u9884\u5904\u7406\u65f6\u95f4",dataIndex:"lastRun"},{title:"\u64cd\u4f5c",render:function(e,t){return w.default.createElement("span",null,w.default.createElement(u.default,{type:"setting",title:"\u8bbe\u7f6e",className:"can-click",style:{marginRight:5},onClick:a.set.bind((0,p.default)(a),t)}),w.default.createElement(u.default,{type:"play-circle",title:"\u6267\u884c",className:"can-click",style:{marginRight:5},onClick:a.execute.bind((0,p.default)(a),t)}),w.default.createElement(u.default,{type:"edit",title:"\u7f16\u8f91",className:"can-click",style:{marginRight:5},onClick:a.edit.bind((0,p.default)(a),t)}),w.default.createElement(u.default,{type:"delete",title:"\u5220\u9664",className:"can-click",style:{marginRight:5},onClick:a.delete.bind((0,p.default)(a),t)}),w.default.createElement(u.default,{type:"file-text",title:"\u65e5\u5fd7",className:"can-click",style:{marginRight:5},onClick:a.viewLog.bind((0,p.default)(a),t)}))}}],a.execute=function(e){a.props.dispatch({type:"prehandle/execShuffle",payload:{taskId:e.taskId}})},a.viewLog=function(e){a.props.dispatch(E.routerRedux.push("/prehandle/log?taskId=".concat(e.taskId)))},a.edit=function(e){a.props.dispatch(E.routerRedux.push("/prehandle/dataflow?taskId=".concat(e.taskId)))},a.delete=function(e){I({title:"\u786e\u5b9a\u5220\u9664\u8fd9\u6761\u6d41\u7a0b\u5417\uff1f",okType:"danger",onOk:function(){a.props.dispatch({type:"prehandle/deleteShuffle",payload:{taskId:e.taskId}}).then(a.fetchData)}})},a.fetchData=function(){var e=a.props.prehandle.shuffle.params,t=void 0===e?{pageNum:1,pageSize:10}:e;a.props.dispatch({type:"prehandle/queryShuffle",payload:t})},a.changeTable=function(e){var t=a.props.prehandle.shuffle.params;a.props.dispatch({type:"prehandle/queryShuffle",payload:(0,o.default)({},t,{pageNum:e.current})})},a.addPrehandle=function(){a.props.dispatch(E.routerRedux.push("/prehandle/dataflow?taskId=-1"))},a.set=function(e){var t=(0,o.default)({},e);if(t.cronExpress){var l=t.cronExpress.split(" "),n=["minute","hour","day","month","week"];n.forEach(function(e,a){t[e]=l[a]})}a.setState({setModalData:t})},a.closeSetModal=function(){a.setState({setModalData:{}})},a.submitSettings=function(e){a.props.dispatch({type:"prehandle/setTask",payload:e}).then(function(){var e=a.props.prehandle.shuffle.params;a.props.dispatch({type:"prehandle/queryShuffle",payload:(0,o.default)({},e)}),a.closeSetModal()})},a}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.props.prehandle.shuffle,t=e.list,a=e.total,l=e.pageNum,n=this.state.setModalData;return w.default.createElement("div",null,w.default.createElement("div",{style:{marginBottom:10}},w.default.createElement(d.default,{type:"primary",onClick:this.addPrehandle},"\u65b0\u589e\u6d41\u7a0b")),w.default.createElement(r.default,{columns:this.columns,dataSource:t,pagination:{total:a,current:l},onChange:this.changeTable,rowKey:"taskId"}),w.default.createElement(D.default,{data:n,submit:this.submitSettings,closeSetModal:this.closeSetModal}))}}]),t}(w.Component),v=g))||v),A=b;t.default=A}}]);