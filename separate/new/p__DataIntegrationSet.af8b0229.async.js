(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"/iXv":function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(a("Mosh")),r=s.default.generateActions({left_right_reset_sourceTableAndSourceTableColumns:"left_right_refresh_sourceTableAndSourceTableColumns",left_right_add_sourceTableAndSourceTableColumns:"left_right_add_sourceTableAndSourceTableColumns",left_right_refresh_sourceTableAndSourceTableColumns:"left_right_refresh_sourceTableAndSourceTableColumns"});t.default=r},"18GJ":function(e,t,a){"use strict";var l=a("tAuX"),s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var r=s(a("kLXV"));a("Pwec");var d=s(a("CtXQ"));a("miYZ");var i=s(a("tsqr"));a("OaEy");var u=s(a("2fM7")),o=l(a("q1tI")),n=s(a("oLOj")),c=u.default.Option;class m extends o.Component{constructor(){super(...arguments),this.state={data:[]},this.generateRelationship=((e,t)=>o.default.createElement(u.default,{size:"small",style:{width:"100%"},value:this.state.data[e][t],onChange:this.changeValue.bind(this,e,t)},o.default.createElement(c,{value:1},"\u5de6\u8fde\u63a5"),o.default.createElement(c,{value:2},"\u5185\u8fde\u63a5"),o.default.createElement(c,{value:3},"\u53f3\u8fde\u63a5"),o.default.createElement(c,{value:4},"\u5168\u8fde\u63a5"))),this.generatePrimaryTable=((e,t)=>o.default.createElement(u.default,{size:"small",style:{width:"100%"},value:this.state.data[e][t],onChange:this.changeValue.bind(this,e,t)},Object.keys(this.props.fieldObj).map(e=>o.default.createElement(c,{value:e,key:e},e)))),this.generatePrimaryField=((e,t,a)=>{var l=this.props.fieldObj[this.state.data[e][a]],s=l?l.columnsList:[];return o.default.createElement(u.default,{size:"small",style:{width:"100%"},value:this.state.data[e][t],onChange:this.changeValue.bind(this,e,t)},s.map(e=>o.default.createElement(c,{value:e.name,key:e.name},e.name)))}),this.getAssociations=(e=>{var t=this.state.data.slice(0,e).reduce((e,t)=>{return t.rightTabName&&!e.includes(t.rightTabName)?[...e,t.rightTabName]:e},[]);return t}),this.generateAssociationTable=((e,t)=>o.default.createElement(u.default,{size:"small",style:{width:"100%"},value:this.state.data[e][t],onChange:this.changeValue.bind(this,e,t)},this.getAssociations(e).map(e=>o.default.createElement(c,{value:e,key:e},e)))),this.changeValue=((e,t,a)=>{var l=[...this.state.data],s=l[e][t];l[e][t]=a,"rightTabName"===t&&(l[e].rightField=void 0,this.verifyLeftTabName(e+1,s)),"leftTabName"===t&&(l[e].leftField=void 0),this.setState({data:l})}),this.addData=(e=>{var t=[...this.state.data];t.splice(e,0,{}),this.setState({data:t})}),this.removeData=(e=>{var t=[...this.state.data],a=t[e].rightTabName;t.splice(e,1),this.setState({data:t},()=>{this.verifyLeftTabName(e,a)})}),this.submit=(()=>{var e=this.state.data.slice(1),t=!0,a=!1,l=void 0;try{for(var s,r=e[Symbol.iterator]();!(t=(s=r.next()).done);t=!0){var d=s.value;if(Object.values(d).filter(e=>!!e).length<5)return void i.default.warn("\u8bf7\u628a\u6570\u636e\u586b\u5199\u5b8c\u6574")}}catch(e){a=!0,l=e}finally{try{t||null==r.return||r.return()}finally{if(a)throw l}}this.props.submit(e)}),this.verifyLeftTabName=((e,t)=>{for(var a=[...this.state.data],l=a.length,s=e;s<l;s++){if(a[s].leftTabName!==t)break;var r=this.getAssociations(s);r.includes(t)||(a[s].leftTabName=void 0,a[s].leftField=void 0)}this.setState({data:a})})}componentDidUpdate(e,t){e.visible!==this.props.visible&&this.props.visible&&!this.state.data.length&&(this.props.data&&0!==this.props.data.length||this.setState({data:[{},{}]}))}render(){var e=this.props,t=e.visible,a=(e.fieldObj,this.state.data);return o.default.createElement(r.default,{title:"\u5173\u8054\u5173\u7cfb",width:1e3,visible:t,onOk:this.submit,onCancel:this.props.close},a[0]&&o.default.createElement(o.Fragment,null,o.default.createElement("div",{className:n.default.flex},o.default.createElement("div",{className:n.default.relationship}),o.default.createElement("div",{className:n.default.select},"\u4e3b\u8868"),o.default.createElement("div",{className:n.default.alias},"\u522b\u540d")),o.default.createElement("div",{className:"".concat(n.default.flex," ").concat(n.default.primaryTable)},o.default.createElement("div",{className:n.default.relationship}),o.default.createElement("div",{className:n.default.select},this.generatePrimaryTable(0,"rightTabName")),o.default.createElement("div",{className:n.default.alias},"tb_1"))),o.default.createElement("div",{className:n.default.flex},o.default.createElement("div",{className:n.default.relationship},"\u5173\u8054\u5173\u7cfb"),o.default.createElement("div",{className:n.default.select},"\u4ece\u8868"),o.default.createElement("div",{className:n.default.alias},"\u522b\u540d"),o.default.createElement("div",{className:n.default.select},"\u4ece\u8868\u5b57\u6bb5"),o.default.createElement("div",{className:n.default.select},"\u5173\u8054\u8868"),o.default.createElement("div",{className:n.default.select},"\u5173\u8054\u5b57\u6bb5"),o.default.createElement("div",{className:n.default.condition},"\u6761\u4ef6")),a.slice(1).map((e,t)=>o.default.createElement("div",{className:n.default.flex,key:t},o.default.createElement("div",{className:n.default.relationship},this.generateRelationship(t+1,"joinRelation")),o.default.createElement("div",{className:n.default.select},this.generatePrimaryTable(t+1,"rightTabName")),o.default.createElement("div",{className:n.default.alias},"tb_",t+2),o.default.createElement("div",{className:n.default.select},this.generatePrimaryField(t+1,"rightField","rightTabName")),o.default.createElement("div",{className:n.default.select},this.generateAssociationTable(t+1,"leftTabName")),o.default.createElement("div",{className:n.default.select},this.generatePrimaryField(t+1,"leftField","leftTabName")),o.default.createElement("div",{className:n.default.condition}),o.default.createElement("div",null,o.default.createElement(d.default,{type:"plus-circle",onClick:this.addData.bind(this,t+2),className:"can-click",style:{marginRight:10}}),a.length>2&&o.default.createElement(d.default,{type:"minus-circle",onClick:this.removeData.bind(this,t+1),className:"can-click"})))))}}var f=m;t.default=f},"4eGu":function(e,t,a){"use strict";var l=a("tAuX"),s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var r=s(a("BMrR"));a("jCWc");var d=s(a("kPKH"));a("Pwec");var i=s(a("CtXQ")),u=s(a("p0pE"));a("OaEy");var o=s(a("2fM7")),n=l(a("q1tI")),c=s(a("LvDl")),m=s(a("Mosh")),f=a("E5h/"),h=s(a("/iXv")),g=a("7z+u"),p=o.default.Option;class b extends n.Component{constructor(e){super(e),this.generateDataSourceOptions=(()=>{var e=this.props.sourceName;return(0,g.querySourceDataSource)({sourceName:e}).then(e=>{var t={},a=m.default.setDefaults(c.default.get(e,"obj"),{}),l=c.default.map(a,e=>{var a=e.id,l=e.sourceName;return a+="",t[a]=e,n.default.createElement(p,{id:a,key:a},l)});this.setState({dataSourceOptions:l,dataSourceIdMap:t}),this.state.dataSourceId||this.setState({dataSourceId:e.obj[0].id})})}),this.dataSourceChange=(e=>{this.setState({dataSourceId:e,sourceTableOptions:[],sourceTableMap:{},selected_sourceTables:[]},()=>{this.generateSourceTableOptions().then(()=>{(0,f.emit)(h.default.left_right_reset_sourceTableAndSourceTableColumns,(0,u.default)({},c.default.pick(this.state,["dataSourceId","selected_sourceTables"])))})})}),this.generateSourceTableOptions=(()=>{var e=this.state.dataSourceId;if(m.default.notNull(e))return(0,g.getTablesAndColumnsInfo)({datasourceId:e}).then(e=>{var t={},a=m.default.setDefaults(c.default.get(e,"obj"),[]),l=c.default.map(a,e=>{var a=e.sourceId,l=e.tableName,s=e.tableNameCn,r=e.columnsList;return t[l]={__$$columnsList$$__:[]},r&&r.length&&c.default.map(r,e=>{var a=e.name;t[l][a]=e,t[l]["__$$columnsList$$__"].push({sourceFieldName:a})}),n.default.createElement(p,{"data-sourceid":a,key:l},l,s?"--".concat(s):"")});this.setState({sourceTableOptions:l,sourceTableMap:t})})}),this.sourceTableChange=((e,t)=>{var a=c.default.get(t,"props.data-sourceid","");if(this.setState(t=>{var l=t.selected_sourceTables;return l.push({sourceId:a,sourceTableName:e}),l=c.default.uniqWith(l,(e,t)=>{return e.sourceTableName===t.sourceTableName}),{selected_sourceTables:l}},()=>{var e=this.state,t=e.dataSourceId,a=e.selected_sourceTables,l=c.default.get(c.default.last(a),"sourceTableName");(0,f.emit)(h.default.left_right_add_sourceTableAndSourceTableColumns,(0,u.default)({},c.default.pick(this.state,["sourceTableMap","selected_sourceTables"]),{dataSourceId:t,tableName:l}))}),"1"===localStorage.getItem("TRANSLATE")&&"\u6807\u51c6\u5e93"===this.props.sourceName){var l=this.state,s=l.dataSourceIdMap,r=l.dataSourceId;(0,g.getDataItemRelation)({sourceCode:s[r].sourceCode,tableName:e}).then(e=>{e&&e.success&&this.props.changeDataItemRelation(e.obj||{})})}}),this.deleteSelectedSourceTables=((e,t)=>{var a;this.setState(e=>{var l=e.selected_sourceTables;return a=l.splice(t,1)[0],{selected_sourceTables:l}},()=>{(0,f.emit)(h.default.left_right_refresh_sourceTableAndSourceTableColumns,(0,u.default)({},c.default.pick(this.state,["sourceTableMap","selected_sourceTables"]),{deletedSourceTable:a}))})}),this.state={dataSourceId:void 0,dataSourceOptions:[],dataSourceIdMap:{},sourceTableOptions:[],sourceTableMap:{},selected_sourceTables:[]}}static getDerivedStateFromProps(e,t){return e.ID!==t.ID?e:null}componentDidUpdate(e,t){this.props.ID!==e.ID&&this.generateDataSourceOptions().then(this.generateSourceTableOptions).then(()=>{(0,f.emit)(h.default.left_right_refresh_sourceTableAndSourceTableColumns,(0,u.default)({},c.default.pick(this.state,["dataSourceId","sourceTableMap","selected_sourceTables"])));var e=this.state,t=e.dataSourceId,a=e.selected_sourceTables;a.forEach(e=>{(0,f.emit)(h.default.left_right_add_sourceTableAndSourceTableColumns,(0,u.default)({},c.default.pick(this.state,["sourceTableMap","selected_sourceTables"]),{dataSourceId:t,tableName:e.sourceTableName}))})})}render(){var e=this.state,t=e.dataSourceId,a=e.dataSourceOptions,l=e.dataSourceIdMap,s=e.sourceTableOptions,u=e.selected_sourceTables,m=c.default.get(c.default.last(u),"sourceTableName");t=l[t]?t+"":void 0;var f=this.props.style,h=void 0===f?{}:f;return h=c.default.assign(h,{flexBasis:"350px"}),n.default.createElement("div",{className:"shrink0 padding20 bg-white",style:h},n.default.createElement("div",{className:"p-h20 m-bottom10"},n.default.createElement("strong",{className:"block m-bottom10"},"\u6570\u636e\u6e90"),n.default.createElement(o.default,{placeholder:"--\u8bf7\u9009\u62e9\u6570\u636e\u6e90--",showSearch:!0,optionFilterProp:"children",value:t,onChange:this.dataSourceChange,className:"w-p100"},a)),n.default.createElement("div",{className:"p-h20 m-bottom10"},n.default.createElement("strong",{className:"block m-bottom10"},"\u6e90\u8868"),n.default.createElement(o.default,{placeholder:"--\u8bf7\u9009\u62e9\u8868--",showSearch:!0,value:m,onChange:this.sourceTableChange,className:"w-p100"},s)),n.default.createElement("div",{className:"p-h20 m-bottom10"},c.default.map(u,(e,t)=>{var a=e.sourceTableName;return n.default.createElement(r.default,{key:a,className:"p-v5 ani-hover us-none",style:{borderBottom:"1px dashed #D9D9D9"}},n.default.createElement(d.default,{span:2,className:"text-center"},n.default.createElement(i.default,{type:"table",style:{color:"#5172a5",padding:"0 5px"}})),n.default.createElement(d.default,{span:20,className:"ellipsis"},a),n.default.createElement(d.default,{span:2,className:"text-center"},n.default.createElement(i.default,{type:"close",onClick:()=>this.deleteSelectedSourceTables(e,t),className:"cs-pointer"})))})))}}t.default=b},Amfe:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.findTargetTab=r,t.findSourceTab=d,t.saveOrUpdate=i;var s=l(a("t3Un"));function r(e){return(0,s.default)("/dataIntegrate/findTargetTab",{method:"GET"})}function d(e){return(0,s.default)("/dataIntegrate/findSourceTab",{method:"GET"})}function i(e){return(0,s.default)("/dataIntegrate/saveOrUpdate",{method:"post",data:e})}},"FGv/":function(e,t,a){},PIGj:function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("jehZ"));a("+L6B");var d,i,u,o=l(a("2/Rp")),n=l(a("p0pE")),c=s(a("q1tI")),m=l(a("LvDl")),f=l(a("Mosh")),h=a("ieSl"),g=a("MuoO"),p=a("7DNP"),b=l(a("Qyje")),v=l(a("lFrO")),T=l(a("4eGu"));a("FGv/");var _=f.default.generateUpdateIds(2),N=(d=(0,g.connect)(),d((u=class extends c.Component{constructor(e){super(e),this.getEchoData=(e=>{(0,h.getInfoHuixian)({id:e}).then(t=>{var a=f.default.setDefaults(m.default.get(t,"obj"),{}),l=this.handleEchoData(a),s=a.dataIntegrate.remark,r=a.dataIntegrate.config,d=a.dataIntegrate.priority,i=a.dataIntegrate.isIncrement,u=a.dataIntegrate.condition,o=a.dataIntegrate.type;this.setState((0,n.default)({},l,{dataIntegrateId:e,IDs:f.default.renewUpdateIds(_),remark:s,config:r,priority:d,isIncrement:i,condition:u,type:o}))})}),this.handleEchoData=(e=>{var t,a=e.dataFlows,l=e.dataIntegrate,s=e.integrateSources,r=e.sourceTabRelations;s=f.default.setDefaults(s,[]);var d=m.default.map(s,e=>{return t=e.sourceId,e.sourceTableName=e.sourceTabName,e});l=f.default.setDefaults(l,{}),a=f.default.setDefaults(a,[]);var i=l,u=i.sourceId,o=i.targetTabName,n=[],c=[],h=[],g=[];m.default.map(a,e=>{n.push({sourceDatasourceId:e.sourceDatasourceId,sourceTableName:e.sourceTableName}),c.push({sourceFieldName:e.sourceFieldName}),h.push({rule:e.rule}),g.push({id:e.id,targetTableName:e.targetTableName,targetFieldName:e.targetFieldName,rule:e.rule})}),r=f.default.setDefaults(r,[]);var p=[];return m.default.map(r,e=>{p.push({id:e.id,integrateId:e.integrateId,left:e.leftField,leftTable:e.leftTabName,right:e.rightField,rightTable:e.rightTabName})}),{dataSourceId:t,selected_sourceTables:d,dataTargetId:u,selected_targetTable:o,selected_rows_sourceTables:n,selected_rows_sourceColumns:c,selected_rows_rules:h,targetFieldNames:g,relationshipData:p}}),this.goBack=(()=>{this.props.dispatch(p.routerRedux.goBack())}),this.changeDataItemRelation=(e=>{this.setState({dataItemRelation:e})}),this.state={IDs:_,dataItemRelation:{}}}static getDerivedStateFromProps(e,t){var a=m.default.get(e,"match.params.id","");return-1!=a&&a!==t.dataIntegrateId?{dataIntegrateId:a}:null}componentDidMount(){var e=this.state.dataIntegrateId;f.default.notNull(e)&&-1!=e?this.getEchoData(e):this.setState({IDs:f.default.renewUpdateIds(_)})}render(){var e=this.state,t=e.IDs,a=e.dataIntegrateId,l=void 0===a?"":a,s=e.dataSourceId,d=e.selected_sourceTables,i=void 0===d?[]:d,u=e.dataTargetId,n=e.selected_targetTable,m=e.selected_rows_sourceTables,f=void 0===m?[]:m,h=e.selected_rows_sourceColumns,g=void 0===h?[]:h,p=e.selected_rows_rules,_=void 0===p?[]:p,N=e.targetFieldNames,E=void 0===N?[]:N,I=e.relationshipData,C=void 0===I?[]:I,S=e.remark,y=e.config,w=e.condition,D=e.type,F=void 0===D?0:D,k=e.priority,O=e.isIncrement,M=void 0===O?0:O,R=e.dataItemRelation,x=b.default.parse(this.props.location.search.slice(1)),P=x.sourceName;return c.default.createElement("div",null,c.default.createElement(o.default,{onClick:this.goBack,style:{marginBottom:10},size:"small"},"\u8fd4\u56de"),c.default.createElement("div",{className:"flex column grow1",style:{minHeight:"75vh"}},c.default.createElement("div",{className:"flex stretch grow1 m-top20",style:{backgroundColor:"#F0F2F5"}},c.default.createElement(T.default,(0,r.default)({style:{marginRight:"20px"}},{dataSourceId:s,selected_sourceTables:i},{ID:t[0],sourceName:P,changeDataItemRelation:this.changeDataItemRelation})),c.default.createElement(v.default,(0,r.default)({ID:t[1],sourceName:P},{dataIntegrateId:l,selected_sourceTables:i,dataTargetId:u,selected_targetTable:n,selected_rows_sourceTables:f,selected_rows_sourceColumns:g,selected_rows_rules:_,targetFieldNames:E,relationshipData:C,remark:S,config:2===F?["",y]:[y,""],condition:w,type:F,priority:k,isIncrement:M},{dataItemRelation:R})))))}},i=u))||i);t.default=N},PXRC:function(e,t,a){"use strict";var l=a("tAuX"),s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var r=s(a("kLXV"));a("14J3");var d=s(a("BMrR"));a("Pwec");var i=s(a("CtXQ"));a("jCWc");var u=s(a("kPKH"));a("OaEy");var o=s(a("2fM7")),n=l(a("q1tI")),c=s(a("LvDl")),m=s(a("Mosh")),f=o.default.Option;class h extends n.Component{constructor(e){super(e),this.generateTableOptions=(()=>{var e=this.state.selected_sourceTables;return c.default.map(e,e=>{var t=e.sourceTableName;return n.default.createElement(f,{key:t},t)})}),this.onOk=(()=>{this.setState({visible:!1},()=>{var e=this.state,t=e.leftTable,a=e.rightTable,l=e.columnPairs,s=[];c.default.map(l,e=>{var l=e.left,r=e.right;m.default.notNull(l)&&m.default.notNull(r)&&s.push({left:l,right:r,leftTable:t,rightTable:a})}),this.props.close(s)})}),this.onCancel=(()=>{this.setState({visible:!1})}),this.leftTableChange=(e=>{this.setState(t=>{var a=t.columnPairs;return c.default.map(a,e=>{e.left=void 0}),{columnPairs:a,leftTable:e}})}),this.rightTableChange=(e=>{this.setState(t=>{var a=t.columnPairs;return c.default.map(a,e=>{e.right=void 0}),{columnPairs:a,rightTable:e}})}),this.columnChange=((e,t,a)=>{this.setState(l=>{var s=l.columnPairs;return s[t][a]=e,{columnPairs:s}})}),this.addRow=(()=>{this.setState(e=>{var t=e.columnPairs;return t.push({_key:m.default.uuid(),left:void 0,right:void 0}),{columnPairs:t}})}),this.deleteRow=(e=>{this.setState(t=>{var a=t.columnPairs;return a.splice(e,1),{columnPairs:a}})}),this.state={leftTable:void 0,rightTable:void 0,columnPairs:[{_key:m.default.uuid(),left:void 0,right:void 0}]}}static getDerivedStateFromProps(e,t){return e.ID!==t.ID?e:null}render(){var e=this.state,t=e.visible,a=(e.sourceTableMap,e.leftTable),l=e.rightTable,s=e.columnPairs,m=e.fieldObj,h=this.generateTableOptions(),g=m[a]?m[a].columnsList:[],p=m[l]?m[l].columnsList:[];return n.default.createElement(r.default,{title:"\u6dfb\u52a0\u5173\u8054\u5173\u7cfb",visible:t,onOk:this.onOk,onCancel:this.onCancel,bodyStyle:{maxHeight:"300px",overflow:"auto"}},n.default.createElement(d.default,{gutter:20,className:"flex v-center p-v5",style:{marginRight:"0px",marginLeft:"0px"}},n.default.createElement(u.default,{span:10},n.default.createElement(o.default,{size:"small",placeholder:"--\u8bf7\u9009\u62e9\u8868--",onChange:this.leftTableChange,value:a,className:"w-p100"},h)),n.default.createElement(u.default,{span:10},n.default.createElement(o.default,{size:"small",placeholder:"--\u8bf7\u9009\u62e9\u8868--",onChange:this.rightTableChange,value:l,className:"w-p100"},h)),n.default.createElement(u.default,{span:4},n.default.createElement(i.default,{type:"plus-circle",theme:"outlined",className:"cs-pointer",onClick:this.addRow,style:{fontSize:"18px"}}))),c.default.map(s,(e,t)=>{return n.default.createElement(d.default,{key:e._key,gutter:20,className:"flex v-center p-v5",style:{marginRight:"0px",marginLeft:"0px"}},n.default.createElement(u.default,{span:10},n.default.createElement(o.default,{size:"small",placeholder:"--\u8bf7\u9009\u62e9\u5b57\u6bb5--",onChange:e=>this.columnChange(e,t,"left"),value:e.left,className:"w-p100"},c.default.map(g,e=>{var t=e.name;return n.default.createElement(f,{key:t},n.default.createElement(i.default,{type:"table",theme:"outlined",className:"m-h5"}),t)}))),n.default.createElement(u.default,{span:10},n.default.createElement(o.default,{size:"small",placeholder:"--\u8bf7\u9009\u62e9\u5b57\u6bb5--",onChange:e=>this.columnChange(e,t,"right"),value:e.right,className:"w-p100"},c.default.map(p,e=>{var t=e.name;return n.default.createElement(f,{key:t},n.default.createElement(i.default,{type:"table",theme:"outlined",className:"m-h5"}),t)}))),n.default.createElement(u.default,{span:4},n.default.createElement(i.default,{type:"close-circle",theme:"outlined",className:"cs-pointer",onClick:()=>this.deleteRow(t),style:{fontSize:"18px"}})))}))}}t.default=h},lFrO:function(e,t,a){"use strict";var l=a("tAuX"),s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a("jehZ"));a("+L6B");var d=s(a("2/Rp"));a("5Dmo");var i=s(a("3S7+"));a("14J3");var u=s(a("BMrR"));a("Pwec");var o=s(a("CtXQ"));a("jCWc");var n=s(a("kPKH"));a("miYZ");var c=s(a("tsqr")),m=s(a("p0pE"));a("5NDa");var f=s(a("5rEg"));a("OaEy");var h=s(a("2fM7")),g=l(a("q1tI")),p=a("MuoO"),b=a("ArA+"),v=s(a("LvDl")),T=s(a("Mosh")),_=a("E5h/"),N=a("7z+u"),E=a("Amfe"),I=s(a("/iXv")),C=s(a("18GJ")),S=s(a("PXRC")),y=h.default.Option,w=f.default.TextArea;class D extends g.Component{constructor(e){super(e),this.generateDataTargetOptions=(()=>{var e=this.props.sourceName;return(0,N.queryTargetDataSource)({sourceName:e}).then(e=>{var t={},a=T.default.setDefaults(v.default.get(e,"obj"),{}),l=v.default.map(a,e=>{var a=e.id,l=e.sourceName;return a+="",t[a]=e,g.default.createElement(y,{id:a,key:a},l)});this.setState({dataTargetOptions:l,dataTargetIdMap:t}),this.state.dataTargetId||this.setState({dataTargetId:e.obj[0].id})})}),this.dataSourceChange=(e=>{this.setState({dataTargetId:e,targetTableOptions:[],selected_targetTable:void 0,rows_sourceColumns:[],selected_rows_sourceTables:[],selected_rows_sourceColumns:[],targetFieldNames:[]},this.generateTargetTableOptions)}),this.generateTargetTableOptions=(()=>{var e=this.state.dataTargetId,t=this.props.dataIntegrateId;if(T.default.notNull(e))return(0,N.getTablesAndColumnsInfoForIntegrate)({datasourceId:e,dataIntegerId:t}).then(e=>{var t=T.default.setDefaults(v.default.get(e,"obj"),[]),a=v.default.map(t,e=>{var t=e.sourceId,a=e.tableName,l=e.tableNameCn;return g.default.createElement(y,{"data-sourceid":t,key:a},a,l?"--".concat(l):"")});this.setState({targetTableOptions:a})})}),this.targetTableChange=(e=>{var t=e.key,a=e.label;this.setState(e=>{var l=e.selected_targetTable;return l=t||l,{selected_targetTable:l,selected_targetTableCn:a[1].slice(2),rows_sourceColumns:[],selected_rows_sourceTables:[],selected_rows_sourceColumns:[],selected_rows_rules:[],targetFieldNames:[]}},()=>{var e=this.state,t=e.dataTargetId,a=e.dataTargetIdMap,l=e.selected_targetTable;t=a[t]?"".concat(t):void 0,this.renderDataFlowTable(t,l,2)}),this.hasPushId=[]}),this.reloadTargetTable=(()=>{var e=this.state,t=e.selected_targetTable,a=e.targetTableOptions,l=a.find(e=>e.key===t);l&&this.targetTableChange({key:t,label:l.props.children})}),this.renderDataFlowTable=((e,t,a)=>{var l=this.state.selected_targetTable;(0,N.getColunm)({datasourceId:e,tableName:t}).then(e=>{var t=this.state,s=t.dataSourceId,r=t.selected_sourceTables,d=void 0===r?[]:r,i=t.sourceTableMap,u=void 0===i?{}:i,o=t.rows_sourceColumns,n=t.selected_rows_sourceTables,c=t.selected_rows_sourceColumns,f=v.default.get(d[0],"sourceTableName"),h=u[f]||{},g=v.default.get(h,"__$$columnsList$$__",[]),p=T.default.setDefaults(v.default.get(e,"obj"),[]),b=[];if(v.default.map(p,e=>{var t=e.tableName,a=e.columnsList,r=void 0===a?[]:a;t==l&&v.default.map(r,(e,t)=>{var a=e.name,r=!!h[a];r&&(o[t]=g,n[t]={sourceDatasourceId:s,sourceTableName:f},c[t]={sourceFieldName:a}),b.push({targetTableName:l,targetFieldName:a})})}),b=b.length?b:this.state.targetFieldNames,1===a){var _=(0,m.default)({},this.state.fieldObj);e.obj.forEach(e=>{_[e.tableName]=e}),this.setState({rows_sourceColumns:o,selected_rows_sourceTables:n,selected_rows_sourceColumns:c,fieldObj:_})}else this.setState({rows_sourceColumns:o,selected_rows_sourceTables:n,selected_rows_sourceColumns:c,targetFieldNames:b})})}),this.dataSourceTableChange=((e,t)=>{this.setState(a=>{var l=a.dataSourceId,s=a.sourceTableMap,r=void 0===s?{}:s,d=a.rows_sourceColumns,i=a.selected_rows_sourceTables,u=a.selected_rows_sourceColumns,o=a.targetFieldNames,n=v.default.get(o[t],"targetFieldName"),c=r[e]||{},m=v.default.get(c,"__$$columnsList$$__",[]);d[t]=m,i[t]={sourceDatasourceId:l,sourceTableName:e};var f=c[n]?n:void 0;if(!f&&this.initFieldNames){var h=this.initFieldNames.find(e=>e.targetFieldName===n);h&&(f=h.sourceFieldName)}return u[t]={sourceFieldName:f},{rows_sourceColumns:d,selected_rows_sourceTables:i,selected_rows_sourceColumns:u}})}),this.dataSourceColumnChange=((e,t)=>{this.setState(a=>{var l=a.selected_rows_sourceColumns;return l[t]={sourceFieldName:e},{selected_rows_sourceColumns:l}})}),this.ruleChange=((e,t)=>{this.setState(a=>{var l=a.selected_rows_rules;return l[t]={rule:e},{selected_rows_rules:l}})}),this.showRelationshipModal=(()=>{var e=this.state.selected_sourceTables,t=void 0===e?[]:e;t.length<2?c.default.warning("\u8bf7\u9009\u62e9\u81f3\u5c11\u4e24\u5f20\u6e90\u8868."):this.setState({visible:!0,modalKey:T.default.uuid()})}),this.showRelationModal=(()=>{var e=this.state.selected_sourceTables,t=void 0===e?[]:e;t.length<2?c.default.warning("\u8bf7\u9009\u62e9\u81f3\u5c11\u4e24\u5f20\u6e90\u8868."):this.setState({relationModalVisible:!0})}),this.closeRelationshipModal=(e=>{this.setState(t=>{var a=t.relationshipData;return a=v.default.chain(a).concat(e).uniqWith(v.default.isEqual).value(),{visible:!1,relationshipData:a}})}),this.closeRelationModal=(()=>{this.setState({relationModalVisible:!1})}),this.deleteRelationship=(e=>{this.setState(t=>{var a=t.relationshipData;return a.splice(e,1),{relationshipData:a}})}),this.submit=(()=>{var e=this.state,t=e.dataIntegrateId,a=void 0===t?"":t,l=e.dataSourceId,s=e.selected_sourceTables,r=e.dataTargetId,d=e.selected_targetTable,i=e.selected_targetTableCn,u=e.selected_rows_sourceTables,o=e.selected_rows_sourceColumns,n=e.targetFieldNames,m=e.relationshipData,f=(e.priority,e.isIncrement),h=e.remark,g=void 0===h?"":h,p=e.config,_=e.condition,N=e.type,I=e.selected_rows_rules;if(T.default.isNull(s)||T.default.isNull(o))c.default.warning("\u8bf7\u9009\u62e9\u6e90\u6570\u636e\u548c\u76ee\u6807\u6570\u636e.");else if(s.length>=2&&T.default.isNull(m)&&0===N)c.default.warning("\u8bf7\u6dfb\u52a0\u5173\u8054\u5173\u7cfb.");else if(void 0!==f){var C=i;if(!C){var S=document.querySelector(".selectTarget").innerText.split("--");C=S[S.length-1]}var y={dataIntegrate:{id:a,sourceId:r,targetTabName:d,targetTabNameCn:C,isIncrement:f,remark:g,config:2===N?p[1]:p[0],condition:_,type:N},integrateSources:[],sourceTabRelations:[],dataFlows:[]};v.default.map(s,e=>{var t=e.id,l=void 0===t?"":t,s=e.sourceId,r=e.sourceTableName;y.integrateSources.push({id:l,integrateId:a,sourceId:s||this.state.dataSourceId,sourceTabName:r})}),v.default.map(m,e=>{var t=e.id,a=void 0===t?"":t,l=e.integrateId,s=void 0===l?"":l,r=e.leftTable,d=e.rightTable,i=e.left,u=e.right;y.sourceTabRelations.push({id:a,integrateId:s,joinRelation:2,leftField:i,leftTabName:r,rightField:u,rightTabName:d})}),v.default.map(n,(e,t)=>{var a=e.id,s=void 0===a?"":a,d=e.targetTableName,i=e.targetFieldName,n=v.default.get(u[t],"sourceTableName"),c=v.default.get(o[t],"sourceFieldName"),m=I[t]?I[t].rule:"";T.default.notNull(n)&&(T.default.notNull(c)||T.default.notNull(m))&&y.dataFlows.push({id:s,sourceDatasourceId:l,sourceTableName:n,sourceFieldName:c,targetDatasourceId:r,targetTableName:d,targetFieldName:i,rule:m})}),(0,E.saveOrUpdate)(y).then(e=>{var t=e.success,a=e.msg,l=void 0===a?"":a;1==t?(c.default.success(l),b.router.goBack()):c.default.error(l)})}else c.default.warning("\u8bf7\u6dfb\u52a0\u96c6\u6210\u65b9\u5f0f.")}),this.changInputNumber=(e=>{var t=Number.parseFloat(e)||void 0;this.setState({priority:t})}),this.changIsIncrement=(e=>{this.setState({isIncrement:e})}),this.changType=(e=>{this.setState({type:e})}),this.changInput=(e=>{var t=e.target.value;this.setState({remark:t})}),this.changConfig=(e=>{var t=[this.state.config[0],e.target.value];this.setState({config:t})}),this.changCondition=(e=>{this.setState({condition:e.target.value.slice(0,1e3)})}),this.submitRelation=(e=>{(0,N.sourceTabRelations)(e).then(e=>{e&&e.success&&(this.setState({relation:e.obj}),this.closeRelationModal())})}),this.deleteRelation=(()=>{this.setState({relation:""})}),this.state={dataSourceId:"",selected_sourceTables:[],sourceTableMap:{},dataIntegrateId:"",dataTargetId:void 0,dataTargetOptions:[],dataTargetIdMap:{},targetTableOptions:[],selected_targetTable:void 0,selected_targetTableCn:void 0,rows_sourceColumns:[],selected_rows_sourceTables:[],selected_rows_sourceColumns:[],targetFieldNames:[],visible:!1,modalKey:0,relationshipData:[],priority:void 0,isIncrement:void 0,remark:"",condition:"",type:void 0,config:[],fieldObj:{},relationModalVisible:!1,relation:""}}static getDerivedStateFromProps(e,t){return e.ID!==t.ID?e:null}componentDidUpdate(e,t){this.props.ID!==e.ID&&this.generateDataTargetOptions().then(this.generateTargetTableOptions),this.state.selected_sourceTables!==t.selected_sourceTables&&(this.hasPushId=[]);var a=this.state,l=a.targetFieldNames,s=a.selected_rows_sourceColumns;this.props.dataIntegrateId&&!this.initFieldNames&&l.length&&s.length&&(this.initFieldNames=l.map((e,t)=>(0,m.default)({},e,s[t])))}render(){var e=this.state,t=e.selected_sourceTables,a=void 0===t?[]:t,l=e.fieldObj,s=this.state,c=s.dataTargetId,m=s.dataTargetOptions,p=s.dataTargetIdMap,b=s.targetTableOptions,T=s.selected_targetTable,_=(s.rows_sourceColumns,s.selected_rows_sourceTables),N=s.selected_rows_sourceColumns,E=s.selected_rows_rules,I=s.targetFieldNames,D=s.relationshipData,F=s.modalKey,k=(s.priority,s.isIncrement),O=s.remark,M=s.condition,R=s.type,x=s.config,P=s.relationModalVisible,j=s.relation;c=p[c]?"".concat(c):void 0;var A=this.props,L=A.style,z=void 0===L?{}:L,$=A.sourceName,q=A.dataItemRelation,U=void 0===q?{}:q;return g.default.createElement("div",{className:"grow1 bg-white",style:z},g.default.createElement("div",{className:"padding20"},g.default.createElement("strong",{className:"block m-bottom10"},"\u76ee\u7684\u8868"),g.default.createElement(u.default,{gutter:20},g.default.createElement(n.default,{span:12},g.default.createElement(h.default,{placeholder:"--\u8bf7\u9009\u62e9\u6570\u636e\u6e90--",showSearch:!0,optionFilterProp:"children",value:c,onChange:this.dataSourceChange,className:"w-p100"},m)),g.default.createElement(n.default,{span:12},g.default.createElement(h.default,{placeholder:"--\u8bf7\u9009\u62e9\u8868--",showSearch:!0,labelInValue:!0,value:T&&{key:T},onChange:this.targetTableChange,className:"selectTarget w-p100"},b),g.default.createElement(o.default,{style:{position:"absolute",marginTop:8,marginLeft:5},className:"can-click",type:"reload",title:"\u5237\u65b0",onClick:this.reloadTargetTable}))),g.default.createElement(u.default,{gutter:20,style:{marginTop:10}},g.default.createElement(n.default,{span:12},g.default.createElement(h.default,{style:{width:"100%"},value:k,placeholder:"--\u8bf7\u9009\u62e9\u96c6\u6210\u65b9\u5f0f--",onChange:this.changIsIncrement},g.default.createElement(y,{value:-1},"\u6d41\u6c34\u8868"),g.default.createElement(y,{value:1},"\u975e\u6d41\u6c34\u8868\u589e\u91cf"),g.default.createElement(y,{value:0},"\u975e\u6d41\u6c34\u8868\u5168\u91cf"))),g.default.createElement(n.default,{span:12},g.default.createElement(h.default,{style:{width:"100%"},value:R,placeholder:"--\u8bf7\u9009\u62e9\u96c6\u6210\u7c7b\u578b--",onChange:this.changType},g.default.createElement(y,{value:0},"\u754c\u9762\u914d\u7f6e"),g.default.createElement(y,{value:1},"\u5b58\u50a8\u8fc7\u7a0b"),g.default.createElement(y,{value:2},"sql")))),g.default.createElement(u.default,{gutter:20,style:{marginTop:10}},g.default.createElement(n.default,{span:12},g.default.createElement(f.default,{placeholder:"--\u8fc7\u6ee4\u6761\u4ef6--",value:M,onChange:this.changCondition})),g.default.createElement(n.default,{span:12},g.default.createElement(f.default,{placeholder:"--\u8bf7\u8f93\u5165\u8bf4\u660e--",value:O,onChange:this.changInput,className:"w-p100"}))),g.default.createElement(u.default,{gutter:20,style:{marginTop:10}},g.default.createElement(n.default,{span:24},2===R&&g.default.createElement(w,{rows:5,placeholder:"sql \u8bed\u53e5",value:x[1],onChange:this.changConfig})))),g.default.createElement(u.default,{gutter:24,className:"p-v10 bg-F5FAFC",style:{marginRight:0,marginLeft:0}},g.default.createElement(n.default,{span:6,className:"text-center"},g.default.createElement("strong",null,"\u6765\u6e90\u8868")),g.default.createElement(n.default,{span:6,className:"text-center"},g.default.createElement("strong",null,"\u6765\u6e90\u8868\u5b57\u6bb5")),g.default.createElement(n.default,{span:6,className:"text-center"},g.default.createElement("strong",null,"\u89c4\u5219")),g.default.createElement(n.default,{span:6,className:"text-center"},g.default.createElement("strong",null,"\u76ee\u7684\u8868\u5b57\u6bb5"))),g.default.createElement("div",{style:{minHeight:"250px",maxHeight:"250px",overflow:"auto"}},v.default.map(I,(e,t)=>{var s=e.targetFieldName,r=v.default.get(this.state.selected_rows_sourceTables[t],"sourceTableName"),d=l[r]?l[r].columnsList:[],i=this.hasPushId,c=void 0===i?[]:i,m=v.default.get(N[t],"sourceFieldName");v.default.get(_[t],"sourceTableName")||c.includes(t)||(this.dataSourceTableChange(a[0]&&a[0].sourceTableName,t),this.hasPushId=[...c,t]);var p=!1;if(!m&&"1"===localStorage.getItem("TRANSLATE")&&"\u6807\u51c6\u5e93"===$){var b=s&&U.transformRuleList&&U.transformRuleList.find(e=>e.dataItemName&&e.dataItemName.toUpperCase()===s.toUpperCase());if(b){var T=d.find(e=>e.name&&b.tableField&&e.name.toUpperCase()===b.tableField.toUpperCase());T&&(m=T.name,this.dataSourceColumnChange(m,t),p=!0)}}if(!p&&!m){var I=d.find(e=>e.name&&s&&e.name.toUpperCase()===s.toUpperCase());I&&this.dataSourceColumnChange(I.name,t)}return g.default.createElement(u.default,{gutter:24,className:"flex v-center p-v10 m-v5 border-bottom-dashed last-none",key:s,style:{marginRight:0,marginLeft:0}},g.default.createElement(n.default,{span:6,className:"text-center"},g.default.createElement(h.default,{size:"small",placeholder:"--\u8bf7\u9009\u62e9\u8868--",showSearch:!0,optionFilterProp:"children",value:v.default.get(_[t],"sourceTableName"),onChange:e=>this.dataSourceTableChange(e,t),className:"w-p100",allowClear:!0},v.default.map(a,e=>{var t=e.sourceTableName;return g.default.createElement(y,{key:t},t)}))),g.default.createElement(n.default,{span:6,className:"text-center"},g.default.createElement(h.default,{size:"small",placeholder:"--\u8bf7\u9009\u62e9\u5b57\u6bb5--",showSearch:!0,optionFilterProp:"children",value:m,onChange:e=>this.dataSourceColumnChange(e,t),className:"w-p100"},v.default.map(d,e=>{var t=e.name;return g.default.createElement(y,{key:t},t)}))),g.default.createElement(n.default,{span:6,className:"text-center"},g.default.createElement(f.default,{value:v.default.get(E[t],"rule"),onChange:e=>this.ruleChange(e.target.value,t),placeholder:"--\u8bf7\u8f93\u5165\u89c4\u5219--"})),g.default.createElement(n.default,{span:6,className:"text-center"},g.default.createElement(o.default,{type:"table",style:{color:"#5172a5",padding:"0 5px"}}),s))})),g.default.createElement(u.default,{className:"p-v10 p-h20",style:{backgroundColor:"#F5FAFC"}},j&&g.default.createElement(u.default,{gutter:15,className:"h-l30"},g.default.createElement(n.default,{span:22,className:"ellipsis"},g.default.createElement(i.default,{title:j,overlayStyle:{width:500}},j)),g.default.createElement(n.default,{span:2},g.default.createElement(o.default,{type:"delete",theme:"outlined",className:"cs-pointer",style:{fontSize:"16px"},onClick:this.deleteRelation}))),g.default.createElement(n.default,{span:18},v.default.map(D,(e,t)=>{var a=e.leftTable,l=e.rightTable,s=e.left,r=e.right,d="".concat(a,"\u5185\u5173\u8054").concat(l,"\uff1b\u5173\u8054\u5173\u7cfb\uff1a").concat(s,"=").concat(r);return g.default.createElement(u.default,{key:t,gutter:15,className:"h-l30"},g.default.createElement(n.default,{span:22,className:"ellipsis"},g.default.createElement(i.default,{title:d,overlayStyle:{width:500}},d)),g.default.createElement(n.default,{span:2},g.default.createElement(o.default,{type:"delete",theme:"outlined",className:"cs-pointer",style:{fontSize:"16px"},onClick:()=>this.deleteRelationship(t)})))}))),g.default.createElement("div",{style:{textAlign:"right"}},["172.16.16.111","localhost"].includes(location.hostname)&&g.default.createElement(d.default,{type:"primary",size:"small",onClick:this.showRelationModal,style:{marginRight:10}},"\u7f16\u8f91\u5173\u8054"),g.default.createElement(d.default,{type:"primary",size:"small",onClick:this.showRelationshipModal},"\u6dfb\u52a0\u5173\u8054"),g.default.createElement(d.default,{type:"primary",size:"small",onClick:this.submit,style:{margin:"0 1em"}},"\u63d0\u4ea4")),g.default.createElement(C.default,{data:[],visible:P,fieldObj:l,close:this.closeRelationModal,submit:this.submitRelation}),g.default.createElement(S.default,(0,r.default)({},v.default.pick(this.state,["visible","selected_sourceTables","sourceTableMap","fieldObj"]),{ID:F,key:F,close:this.closeRelationshipModal})))}}var F=(0,p.connect)()((0,_.connect)([{action:I.default.left_right_reset_sourceTableAndSourceTableColumns,handler(e){this.setState((0,m.default)({},e,{rows_sourceColumns:[],selected_rows_sourceTables:[],selected_rows_sourceColumns:[]}))}},{action:I.default.left_right_add_sourceTableAndSourceTableColumns,handler(e){e.selected_sourceTables;this.setState((0,m.default)({},e),()=>{this.renderDataFlowTable(e.dataSourceId,e.tableName,1)})}},{action:I.default.left_right_refresh_sourceTableAndSourceTableColumns,handler(e){var t=e.deletedSourceTable,a=void 0===t?{}:t,l=e.sourceTableMap,s=void 0===l?{}:l,r=a.sourceTableName;this.setState(t=>{var a=t.rows_sourceColumns,l=t.selected_rows_sourceTables,d=t.selected_rows_sourceColumns,i=t.targetFieldNames;return v.default.map(i,(e,t)=>{var i=v.default.get(l[t],"sourceTableName");r===i?(a[t]=[],l[t]={},d[t]={}):a[t]=v.default.get(s[i],"__$$columnsList$$__",[])}),(0,m.default)({},e,{rows_sourceColumns:a,selected_rows_sourceTables:l,selected_rows_sourceColumns:d})})}}])(D));t.default=F},oLOj:function(e,t,a){e.exports={primaryTable:"primaryTable___2oloC",flex:"flex___tand5",relationship:"relationship___1HJlF",condition:"condition___25Y-c",select:"select___14hWW"}}}]);