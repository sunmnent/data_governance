(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"1EDm":function(e,a,t){"use strict";var r=t("g09b"),s=t("tAuX");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("T2oS");var n,o,c,d=r(t("W9HT")),i=s(t("q1tI")),m=t("MuoO"),l=r(t("t3Un")),f=r(t("9wFH")),u=(n=(0,m.connect)(),n((c=class extends i.Component{constructor(){super(...arguments),this.state={spinning:!0},this.handleLoad=(()=>{this.setState({spinning:!1})}),this.setIframe=(e=>{this.iframe=e})}componentDidMount(){var e;"wma"===localStorage.getItem("userName")?e=30001627:"wmb"===localStorage.getItem("userName")?e=30002232:"wmc"===localStorage.getItem("userName")&&(e=30002592);var a=this.iframe;(0,l.default)("/ida/api/board-param/10480790-024d-414f-abe1-90fead231abf",{baseURL:"",method:"POST",nojump:!0,params:{paramKey:localStorage.getItem("userID"),sqlParams:JSON.stringify([{datSetId:"e1048b2a-1f70-484a-a434-3c4db634a271",datSetName:"test",datSetParams:[{paramName:"cs",paramValue:"where `\u6388\u8bfe\u6559\u5e08\u5de5\u53f7` = '".concat(e,"'")}]}])}}).finally(()=>{a.src="http://172.16.17.18:8080/ida/#/root/dboard/open/view?urlId=efec5338-dc6a-4567-b904-0763c27de447&accessToken=c162b18e-42d1-417f-865d-ce80f05ce7bc&paramKey=".concat(localStorage.getItem("userID"))})}render(){return i.default.createElement(d.default,{spinning:this.state.spinning},i.default.createElement("iframe",{src:"",ref:this.setIframe,onLoad:this.handleLoad,className:f.default.iframe}),";")}},o=c))||o),p=u;a.default=p},"9wFH":function(e,a,t){e.exports={iframe:"iframe___2exyG"}}}]);