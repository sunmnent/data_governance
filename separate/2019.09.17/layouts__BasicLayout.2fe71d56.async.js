(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{IamK:function(e,t,a){"use strict";var r=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getMeunMatcheys=void 0;var l=n(a("jehZ"));a("lUTK");var o=n(a("BvKs")),s=r(a("q1tI")),c=n(a("bALw")),i=a("7DNP"),u=(n(a("TSYQ")),n(a("mR0u"))),d=a("S/9j"),p=o.default.SubMenu,f=e=>{},h=(e,t)=>{return e.filter(e=>{return(0,c.default)(e).test(t)})};t.getMeunMatcheys=h;class m extends s.PureComponent{constructor(e){super(e),this.getMenuItemPath=(e=>{var t=this.conversionPath(e.path),a=f(e.icon),r=e.target,n=e.name;return/^https?:\/\//.test(t)?s.default.createElement("a",{href:t,target:r},a,s.default.createElement("span",null,n)):s.default.createElement(i.Link,{to:t,target:r,replace:t===this.props.location.pathname},a,s.default.createElement("span",null,n))}),this.getSubMenuOrItem=(e=>{if(e.children&&e.children.some(e=>e.name)){var t=this.getNavMenuItems(e.children);return t&&t.length>0?s.default.createElement(p,{title:e.icon?s.default.createElement("span",null,f(e.icon),s.default.createElement("span",null,e.name)):e.name,key:e.path},t):null}return s.default.createElement(o.default.Item,{key:e.path},this.getMenuItemPath(e))}),this.getNavMenuItems=(e=>{return e?e.filter(e=>e.name&&!e.hideInMenu).map(e=>{var t=this.getSubMenuOrItem(e);return t}):[]}),this.getSelectedMenuKeys=(()=>{var e=this.props.location.pathname;return e.startsWith("/dataPreprocessing/dataintegrationSet/")&&(e="/dataPreprocessing/dataRelationship"),(0,d.urlToList)(e).map(e=>h(this.flatMenuKeys,e).pop())}),this.conversionPath=(e=>{return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")}),this.isMainMenu=(e=>{return this.menus.some(t=>e&&(t.key===e||t.path===e))}),this.handleOpenChange=(e=>{var t=e[e.length-1],a=e.filter(e=>this.isMainMenu(e)).length>1;this.setState({openKeys:a?[t]:[...e]})}),this.menus=e.menuData,this.flatMenuKeys=this.getFlatMenuKeys(e.menuData),this.state={openKeys:this.getDefaultCollapsedSubMenus(e)}}getDefaultCollapsedSubMenus(e){var t=e||this.props,a=t.location.pathname,r=(0,d.urlToList)(a).map(e=>{return h(this.flatMenuKeys,e)[0]});return sessionStorage.isIframe&&(r=[...r,"/resourceDirectory"]),r}getFlatMenuKeys(e){var t=[];return e.forEach(e=>{e.children&&(t=t.concat(this.getFlatMenuKeys(e.children))),t.push(e.path)}),t}render(){var e=this.state.openKeys,t={openKeys:e},a=this.getSelectedMenuKeys();return a.length||(a=[e[e.length-1]]),s.default.createElement("nav",{className:u.default.nav},"true"!==sessionStorage.isIframe?s.default.createElement("div",{className:u.default.logo,key:"logo"},s.default.createElement(i.Link,{to:"/"},s.default.createElement("img",{src:"/logo.png",alt:"logo"}))):null,s.default.createElement("div",{className:u.default.sidemenu},s.default.createElement(o.default,(0,l.default)({key:"Menu",theme:"dark",mode:"inline"},t,{onOpenChange:this.handleOpenChange,selectedKeys:a,style:{padding:"16px 0 70px",width:"100%"}}),this.getNavMenuItems(this.menus))))}}t.default=m},NtFa:function(e,t,a){"use strict";var r=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("qVdP");var l=n(a("jsC+"));a("Telt");var o=n(a("Tckk"));a("lUTK");var s=n(a("BvKs"));a("Pwec");var c=n(a("CtXQ")),i=r(a("q1tI")),u=n(a("h3zL"));class d extends i.PureComponent{constructor(){super(...arguments),this.toggle=(()=>{var e=this.props,t=e.collapsed,a=e.onCollapse;a(!t)})}render(){var e=this.props,t=(e.currentUser,e.collapsed),a=(e.fetchingNotices,e.isMobile,e.onNoticeVisibleChange,e.onMenuClick),r=(e.onNoticeClear,i.default.createElement(s.default,{className:u.default.menu,selectedKeys:[],onClick:a},i.default.createElement(s.default.Item,{key:"changePassword"},i.default.createElement(c.default,{type:"key"}),"\u4fee\u6539\u5bc6\u7801"),i.default.createElement(s.default.Item,{key:"logout"},i.default.createElement(c.default,{type:"logout"}),"\u9000\u51fa\u767b\u5f55")));return i.default.createElement("div",{className:t?u.default["header-collapsed"]:u.default.header},i.default.createElement("div",{className:u.default.right},i.default.createElement(l.default,{overlay:r},i.default.createElement("span",{className:"".concat(u.default.action," ").concat(u.default.account)},i.default.createElement(o.default,{size:"small",className:u.default.avatar,icon:"user"}),i.default.createElement("span",{className:u.default.name},localStorage.nameCn)))))}}t.default=d},OkiT:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getMenuData=void 0;var n,l,o=r(a("p0pE")),s=a("+n12"),c=[],i=e=>{return e.forEach(e=>{if(e.parentId>0){var t;e.children&&(t=i(e.children));var a=(0,o.default)({},e,{children:t,path:e.url,icon:e.iconUrl,parentId:e.parentId?~~e.parentId:"",authority:localStorage.authority?localStorage.authority:""});a.childrenMenu||delete a.children,c.push(a)}}),c};function u(e,t){return e.map(e=>{var a=e.path;(0,s.isUrl)(a)||(a=e.path);var r=(0,o.default)({},e,{path:a,authority:e.authority||t});return e.children&&(r.children=u(e.children,e.authority)),r})}var d=()=>{return l||(n=i(JSON.parse(localStorage.getItem("menu")||"[]")),l=(0,s.arrayDataToTree)(n)),u(l)};t.getMenuData=d},"S/9j":function(e,t,a){"use strict";function r(e){var t=e.split("/").filter(e=>e);return t.map((e,a)=>{return"/".concat(t.slice(0,a+1).join("/"))})}Object.defineProperty(t,"__esModule",{value:!0}),t.urlToList=r},Tckk:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b});var r=a("q1tI"),n=a("TSYQ"),l=a.n(n),o=a("CtXQ"),s=a("wEI+");function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,a){return t&&p(e.prototype,t),a&&p(e,a),e}function h(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}var y=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},b=function(e){function t(){var e;return d(this,t),e=h(this,_(t).apply(this,arguments)),e.state={scale:1,isImgExist:!0},e.setScale=function(){if(e.avatarChildren&&e.avatarNode){var t=e.avatarChildren.offsetWidth,a=e.avatarNode.offsetWidth;0===t||0===a||e.lastChildrenWidth===t&&e.lastNodeWidth===a||(e.lastChildrenWidth=t,e.lastNodeWidth=a,e.setState({scale:a-8<t?(a-8)/t:1}))}},e.handleImgLoadError=function(){var t=e.props.onError,a=t?t():void 0;!1!==a&&e.setState({isImgExist:!1})},e.renderAvatar=function(t){var a,n,s=t.getPrefixCls,c=e.props,d=c.prefixCls,p=c.shape,f=c.size,h=c.src,m=c.srcSet,_=c.icon,g=c.className,v=c.alt,b=y(c,["prefixCls","shape","size","src","srcSet","icon","className","alt"]),E=e.state,w=E.isImgExist,N=E.scale,M=s("avatar",d),C=l()((a={},u(a,"".concat(M,"-lg"),"large"===f),u(a,"".concat(M,"-sm"),"small"===f),a)),S=l()(M,g,C,(n={},u(n,"".concat(M,"-").concat(p),p),u(n,"".concat(M,"-image"),h&&w),u(n,"".concat(M,"-icon"),_),n)),P="number"===typeof f?{width:f,height:f,lineHeight:"".concat(f,"px"),fontSize:_?f/2:18}:{},k=e.props.children;if(h&&w)k=r["createElement"]("img",{src:h,srcSet:m,onError:e.handleImgLoadError,alt:v});else if(_)k=r["createElement"](o["default"],{type:_});else{var O=e.avatarChildren;if(O||1!==N){var I="scale(".concat(N,") translateX(-50%)"),T={msTransform:I,WebkitTransform:I,transform:I},x="number"===typeof f?{lineHeight:"".concat(f,"px")}:{};k=r["createElement"]("span",{className:"".concat(M,"-string"),ref:function(t){return e.avatarChildren=t},style:i(i({},x),T)},k)}else k=r["createElement"]("span",{className:"".concat(M,"-string"),ref:function(t){return e.avatarChildren=t}},k)}return r["createElement"]("span",i({},b,{style:i(i({},P),b.style),className:S,ref:function(t){return e.avatarNode=t}}),k)},e}return g(t,e),f(t,[{key:"componentDidMount",value:function(){this.setScale()}},{key:"componentDidUpdate",value:function(e){this.setScale(),e.src!==this.props.src&&this.setState({isImgExist:!0,scale:1})}},{key:"render",value:function(){return r["createElement"](s["a"],null,this.renderAvatar)}}]),t}(r["Component"]);b.defaultProps={shape:"circle",size:"default"}},Telt:function(e,t,a){"use strict";a.r(t);a("cIOH"),a("ifDB")},W660:function(e,t,a){e.exports={"wrap-base":"wrap-base___2QP8Z",wrap:"wrap___14SNm wrap-base___2QP8Z","wrap-collapsed":"wrap-collapsed___WW4Sd wrap-base___2QP8Z",content:"content___1eX2k"}},ggcP:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("q1tI")),l=r(a("TSYQ")),o=r(a("wNoj")),s=e=>{var t=e.className,a=e.links,r=e.copyright,s=(0,l.default)(o.default.globalFooter,t);return n.default.createElement("div",{className:s},a&&n.default.createElement("div",{className:o.default.links},a.map(e=>n.default.createElement("a",{key:e.key,target:e.blankTarget?"_blank":"_self",href:e.href},e.title))),r&&n.default.createElement("div",{className:o.default.copyright},r))};t.default=s},h3zL:function(e,t,a){e.exports={"nav-base":"nav-base___lA6XY",nav:"nav___1pn_E","nav-collapsed":"nav-collapsed___15fyp",searchBar:"searchBar___3p0B5",header:"header___1Z92M",trigger:"trigger___BOOyT",right:"right___2CMz5",action:"action___3ut1O",name:"name___2eduw",globalFooter:"globalFooter___2GVq5","header-collapsed":"header-collapsed___2t_Z8 header___1Z92M",logo:"logo___kH473",menu:"menu___3fMWW",search:"search___3FPts",account:"account___1r_Ku",avatar:"avatar___1Rx79"}},ifDB:function(e,t,a){},m8Tn:function(e,t,a){"use strict";var r=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("jehZ"));a("5NDa");var o=n(a("5rEg"));a("2qtc");var s=n(a("kLXV"));a("miYZ");var c=n(a("tsqr"));a("y8nQ");var i=n(a("Vl3Y"));a("B9cy");var u=n(a("Ol7k")),d=r(a("q1tI")),p=a("MuoO"),f=a("7DNP"),h=a("gEL2"),m=n(a("aCH8")),_=a("34ay"),g=n(a("NtFa")),v=n(a("ggcP")),y=n(a("IamK")),b=a("OkiT"),E=n(a("W660")),w=u.default.Content,N=u.default.Header,M=u.default.Footer,C=i.default.Item;class S extends d.default.PureComponent{constructor(){super(...arguments),this.state={changePasswordModal:!1},this.handleMenuCollapse=(e=>{this.props.dispatch({type:"global/changeLayoutCollapsed",payload:e})}),this.handleNoticeClear=(e=>{c.default.success("\u6e05\u7a7a\u4e86".concat(e)),this.props.dispatch({type:"global/clearNotices",payload:e})}),this.closeChangePasswordModal=(()=>{this.setState({changePasswordModal:!1})}),this.handleSubmit=(e=>{e.preventDefault(),this.props.form.validateFieldsAndScroll((e,t)=>{if(!e){if(t.newPassword!==t.confirmPassword)return void c.default.error("\u4e24\u6b21\u65b0\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4,\u8bf7\u91cd\u65b0\u8f93\u5165");var a={username:localStorage.userName,password:(0,m.default)(t.password),newPassword:(0,m.default)(t.newPassword)};this.props.dispatch({type:"user/changePassword",payload:a}).then(()=>{this.closeChangePasswordModal()})}})}),this.handleMenuClick=(e=>{var t=e.key;"triggerError"!==t?("logout"===t&&this.props.dispatch({type:"login/logout",payload:{token:localStorage.token?localStorage.token:""}}),"dataExchange"===t?s.default.confirm({title:"\u63d0\u793a\u6d88\u606f",content:"\u662f\u5426\u6253\u5f00\u6570\u636e\u4ea4\u6362",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:()=>{var e={username:localStorage.userName,encryptpw:localStorage.encryptpw},t=window.open();(0,h.SSOLogin)(e).then(e=>{if(e.success){var a=e.obj,r=a.admin,n=a.token,l=a.redirectUrl,o=a.encryptpw,s=a.CURRENT_USER_ID,c=a.CURRENT_NAME_CN,i=a.CURRENT_USERNAME,u="".concat(l,"/#/sso/login?admin=").concat(r,"&token=").concat(n,"&encryptpw=").concat(o,"&CURRENT_USER_ID=").concat(s,"&CURRENT_NAME_CN=").concat(encodeURI(c),"&CURRENT_USERNAME=").concat(i);t.location.href=u}else t.close()})}}):"changePassword"===t&&this.setState({changePasswordModal:!0})):this.props.dispatch(f.routerRedux.push("/exception/trigger"))}),this.handleNoticeVisibleChange=(e=>{e&&this.props.dispatch({type:"global/fetchNotices"})})}componentDidMount(){if(sessionStorage.isIframe){var e=document.getElementsByClassName("ant-layout-content")[0];e.style.marginTop=0}}render(){var e=this.props,t=e.currentUser,a=e.collapsed,r=e.fetchingNotices,n=e.notices,c=e.location,u=this.props.form.getFieldDecorator,p={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}};return _.touristAuthority.isTourist(c)?d.default.createElement(w,{className:E.default.content},this.props.children):localStorage.token?d.default.createElement("div",{className:E.default.layout},d.default.createElement(y.default,{menuData:(0,b.getMenuData)(),location:c}),d.default.createElement("div",{className:a?E.default["wrap-collapsed"]:E.default.wrap},"true"!==sessionStorage.isIframe?d.default.createElement(N,{style:{padding:0}},d.default.createElement(g.default,{currentUser:t,fetchingNotices:r,notices:n,collapsed:a,onNoticeClear:this.handleNoticeClear,onCollapse:this.handleMenuCollapse,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange})):null,d.default.createElement(w,{className:E.default.content},this.props.children),d.default.createElement(M,{style:{padding:0}},d.default.createElement(v.default,{copyright:d.default.createElement(d.Fragment,null,window.config.copyRight)}))),d.default.createElement(s.default,{title:"\u4fee\u6539\u5bc6\u7801",visible:this.state.changePasswordModal,onOk:this.handleSubmit,onCancel:this.closeChangePasswordModal},d.default.createElement(i.default,{onSubmit:this.handleSubmit},d.default.createElement(C,(0,l.default)({},p,{label:"\u65e7\u5bc6\u7801"}),u("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u65e7\u5bc6\u7801"}]})(d.default.createElement(o.default,{type:"password"}))),d.default.createElement(C,(0,l.default)({},p,{label:"\u65b0\u5bc6\u7801"}),u("newPassword",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u65b0\u5bc6\u7801"},{validator:(e,t,a)=>{t===t.toUpperCase()?a("\u5fc5\u987b\u5305\u542b\u5c0f\u5199\u5b57\u6bcd"):t===t.toLowerCase()?a("\u5fc5\u987b\u5305\u542b\u5927\u5199\u5b57\u6bcd"):t.match(/[0-9]/g)?a():a("\u5fc5\u987b\u5305\u542b\u6570\u5b57")}},{min:8,message:"\u957f\u5ea6\u5fc5\u987b\u5927\u4e8e8"}]})(d.default.createElement(o.default,{type:"password"}))),d.default.createElement(C,(0,l.default)({},p,{label:"\u518d\u6b21\u8f93\u5165\u65b0\u5bc6\u7801"}),u("confirmPassword",{rules:[{required:!0,message:"\u8bf7\u518d\u6b21\u8f93\u5165\u4f60\u7684\u65b0\u5bc6\u7801"}]})(d.default.createElement(o.default,{type:"password"})))))):null}}var P=(0,p.connect)(e=>{var t=e.user,a=e.global,r=e.loading;return{currentUser:t.currentUser,collapsed:a.collapsed,fetchingNotices:r.effects["global/fetchNotices"],notices:a.notices}})(i.default.create()(S));t.default=P},mR0u:function(e,t,a){e.exports={"nav-base":"nav-base___1VZZu",nav:"nav___3fw8o","nav-collapsed":"nav-collapsed___3_fI0",searchBar:"searchBar___2KBC_",header:"header___LCkL9",trigger:"trigger___2kX1c",right:"right___3wlVT",action:"action___1GHG0",name:"name___3hMh3",globalFooter:"globalFooter___3TLFb",logo:"logo___11PiT",sidemenu:"sidemenu___2gU_X",sider:"sider___3DNJN",ligth:"ligth___2V09X",icon:"icon___bWdA8"}},wNoj:function(e,t,a){e.exports={"nav-base":"nav-base___3sJB5",nav:"nav___Mpvye","nav-collapsed":"nav-collapsed___143zn",searchBar:"searchBar___Rhpa8",header:"header___2NZxE",trigger:"trigger___2PlMl",right:"right___23WCh",action:"action___30PBu",name:"name___3cxPm",globalFooter:"globalFooter___23LWp",links:"links___1IOVF",copyright:"copyright___2c8dn"}}}]);