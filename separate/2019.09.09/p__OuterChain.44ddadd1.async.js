(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"8TrR":function(t,e,a){t.exports={iframe:"iframe___1vQhz"}},mSmJ:function(t,e,a){"use strict";var s=a("g09b"),n=a("tAuX");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("T2oS");var r,i,o,c=s(a("W9HT")),l=n(a("q1tI")),h=a("MuoO"),m=s(a("8TrR")),f=(r=(0,h.connect)(),r((o=class extends l.Component{constructor(){super(...arguments),this.state={spinning:!0,shelfUrl:null},this.handleLoad=(()=>{this.setState({spinning:!1});var t=this.state.shelfUrl;t&&(this.iframe.src=t)}),this.getIfrmaeUrl=(()=>{var t="localhost"===location.hostname,e=t?"http://172.22.43.143:888":location.origin,a=this.props.match.params.url.replace(/-/g,"/"),s=t?"".concat(e,"/#").concat(a,"?token=").concat(localStorage.getItem("token")):"".concat(e,"/datacenter-web/#").concat(a,"?token=").concat(localStorage.getItem("token"));return s}),this.setIframe=(t=>{this.iframe=t})}componentDidMount(){this.iframe.src=this.getIfrmaeUrl()}componentDidUpdate(t){if(t.match.params.url!==this.props.match.params.url){var e=this.getIfrmaeUrl();this.state.spinning?this.setState({shelfUrl:e}):this.iframe.src=e}}render(){return l.default.createElement(c.default,{spinning:this.state.spinning},l.default.createElement("iframe",{src:"",ref:this.setIframe,onLoad:this.handleLoad,className:m.default.iframe}),";")}},i=o))||i),p=f;e.default=p}}]);