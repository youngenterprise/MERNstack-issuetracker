!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=12)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-bootstrap")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-bootstrap")},function(e,t){e.exports=require("url-search-params")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("http-proxy-middleware")},function(e,t){e.exports=require("source-map-support")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t,s){e.exports=s(18)},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t,s){(function(t){const n=s(16),a=s(17),o=s(6),i={mode:"development",entry:{app:["./browser/App.jsx"]},output:{filename:"[name].bundle.js",path:n.resolve(t,"public"),publicPath:"/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:{loader:"babel-loader",options:{presets:[["@babel/preset-env",{targets:{ie:"11",edge:"15",safari:"10",firefox:"50",chrome:"49"}}],"@babel/preset-react"]}}}]},optimization:{splitChunks:{name:"vendor",chunks:"all"}},plugins:[new o.DefinePlugin({__isBrowser__:"true"})],devtool:"source-map"},r={mode:"development",entry:{server:["./server/uiserver.js"]},target:"node",externals:[a()],output:{filename:"server.js",path:n.resolve(t,"dist"),publicPath:"/"},module:{rules:[{test:/\.jsx?$/,use:{loader:"babel-loader",options:{presets:[["@babel/preset-env",{targets:{node:"10"}}],"@babel/preset-react"]}}}]},plugins:[new o.DefinePlugin({__isBrowser__:"false"})],devtool:"source-map"};e.exports=[i,r]}).call(this,"/")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("webpack-node-externals")},function(e,t,s){"use strict";s.r(t);var n=s(7),a=s.n(n),o=s(5),i=s.n(o),r=s(8),l=s.n(r),c=s(9),u=s.n(c),h=s(0),m=s.n(h),d=s(10),p=s.n(d),E=s(2),g=s(1),f=s(3);var b={},v=s(11),C=s.n(v);const y=new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");function w(e,t){return y.test(t)?new Date(t):t}async function S(e,t={},s=null){const n=process.env.UI_SERVER_API_ENDPOINT;try{const a=await C()(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}),o=await a.text(),i=JSON.parse(o,w);if(i.errors){const e=i.errors[0];if("BAD_USER_INPUT"===e.extensions.code){const t=e.extensions.exception.errors.join("\n ");s&&s(`${e.message}:\n ${t}`)}else s&&s(`${e.extensions.code}: ${e.message}`)}return i.data}catch(e){return s&&s("Error in sending data to server: "+e.message),null}}class x extends m.a.Component{static async fetchData(){return await S("query {about}")}constructor(e){super(e);const t=b.initialData?b.initialData.about:null;this.state={apiAbout:t}}async componentDidMount(){const{apiAbout:e}=this.state;if(null==e){const e=await x.fetchData();this.setState({apiAbout:e.about})}}render(){const{apiAbout:e}=this.state;return m.a.createElement("div",{className:"text-center"},m.a.createElement("h3",null,"Issue Tracker version 0.9"),m.a.createElement("h4",null,e))}}var I=s(4),T=s.n(I);class D extends m.a.Component{constructor({location:{search:e}}){super();const t=new T.a(e);this.state={status:t.get("status")||"",effortMin:t.get("effortMin")||"",effortMax:t.get("effortMax")||"",changed:!1},this.onChangeStatus=this.onChangeStatus.bind(this),this.onChangeEffortMin=this.onChangeEffortMin.bind(this),this.onChangeEffortMax=this.onChangeEffortMax.bind(this),this.applyFilter=this.applyFilter.bind(this),this.showOriginalFilter=this.showOriginalFilter.bind(this)}componentDidUpdate(e){const{location:{search:t}}=e,{location:{search:s}}=this.props;t!==s&&this.showOriginalFilter()}onChangeStatus(e){this.setState({status:e.target.value,changed:!0})}onChangeEffortMin(e){e.target.value.match(/^\d*$/)&&this.setState({effortMin:e.target.value,changed:!0})}onChangeEffortMax(e){e.target.value.match(/^\d*$/)&&this.setState({effortMax:e.target.value,changed:!0})}showOriginalFilter(){const{location:{search:e}}=this.props,t=new T.a(e);this.setState({status:t.get("status")||"",changed:!1})}applyFilter(){const{status:e,effortMin:t,effortMax:s}=this.state,{history:n}=this.props,a=new T.a;e&&a.set("status",e),t&&a.set("effortMin",t),s&&a.set("effortMax",s);const o=a.toString()?"?"+a.toString():"";n.push({pathname:"/issues",search:o})}render(){const{status:e,changed:t}=this.state,{effortMin:s,effortMax:n}=this.state;return m.a.createElement(g.Row,null,m.a.createElement(g.Col,{xs:6,sm:4,md:3,lg:2},m.a.createElement(g.FormGroup,null,m.a.createElement(g.ControlLabel,null,"Status:"),m.a.createElement(g.FormControl,{componentClass:"select",value:e,onChange:this.onChangeStatus},m.a.createElement("option",{value:""},"(All)"),m.a.createElement("option",{value:"New"},"New"),m.a.createElement("option",{value:"Fixed"},"Fixed"),m.a.createElement("option",{value:"Closed"},"Closed")))),m.a.createElement(g.Col,{xs:6,sm:4,md:3,lg:2},m.a.createElement(g.FormGroup,null,m.a.createElement(g.ControlLabel,null,"Effort between:"),m.a.createElement(g.InputGroup,null,m.a.createElement(g.FormControl,{value:s,onChange:this.onChangeEffortMin}),m.a.createElement(g.InputGroup.Addon,null,"-"),m.a.createElement(g.FormControl,{value:n,onChange:this.onChangeEffortMax})))),m.a.createElement(g.Col,{xs:6,sm:4,md:3,lg:2},m.a.createElement(g.FormGroup,null,m.a.createElement(g.ControlLabel,null," "),m.a.createElement(g.ButtonToolbar,null,m.a.createElement(g.Button,{bsStyle:"primary",type:"button",onClick:this.applyFilter},"Apply"),m.a.createElement(g.Button,{type:"button",onClick:this.showOriginalFilter,disabled:!t},"Reset")))))}}var M=Object(E.withRouter)(D);const F=Object(E.withRouter)(({issue:e,location:{search:t},closeIssue:s,deleteIssue:n,index:a})=>{const o={pathname:"/issues/"+e.id,search:t},i=m.a.createElement(g.Tooltip,{id:"close-tooltip",placement:"top"},"Edit Issue"),r=m.a.createElement(g.Tooltip,{id:"close-tooltop",placement:"top"},"Close Issue"),l=m.a.createElement(g.Tooltip,{id:"delete-tooltip",placement:"top"},"Delete Issue");const c=m.a.createElement("tr",null,m.a.createElement("td",null,e.id),m.a.createElement("td",null,e.status),m.a.createElement("td",null,e.owner),m.a.createElement("td",null,e.created.toDateString()),m.a.createElement("td",null,e.effort),m.a.createElement("td",null,e.due?e.due.toDateString():""),m.a.createElement("td",null,e.title),m.a.createElement("td",null,m.a.createElement(f.LinkContainer,{to:"/edit/"+e.id},m.a.createElement(g.OverlayTrigger,{delayShow:1e3,overlay:i},m.a.createElement(g.Button,{bsSize:"xsmall"},m.a.createElement(g.Glyphicon,{glyph:"edit"}))))," ",m.a.createElement(g.OverlayTrigger,{delayShow:1e3,overlay:r},m.a.createElement(g.Button,{bsSize:"xsmall",onClick:function(e){e.preventDefault(),s(a)}},m.a.createElement(g.Glyphicon,{glyph:"remove"})))," ",m.a.createElement(g.OverlayTrigger,{delayShow:1e3,overlay:l},m.a.createElement(g.Button,{bsSize:"xsmall",onClick:function(e){e.preventDefault(),n(a)}},m.a.createElement(g.Glyphicon,{glyph:"trash"})))));return m.a.createElement(f.LinkContainer,{to:o},c)});function N({issues:e,closeIssue:t,deleteIssue:s}){const n=e.map((e,n)=>m.a.createElement(F,{key:e.id,issue:e,closeIssue:t,deleteIssue:s,index:n}));return m.a.createElement(g.Table,{bordered:!0,condensed:!0,hover:!0,responsive:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"ID"),m.a.createElement("th",null,"Status"),m.a.createElement("th",null,"Owner"),m.a.createElement("th",null,"Created"),m.a.createElement("th",null,"Effort"),m.a.createElement("th",null,"Due Date"),m.a.createElement("th",null,"Title"),m.a.createElement("th",null,"Action"))),m.a.createElement("tbody",null,n))}class O extends m.a.Component{componentDidUpdate(){const{showing:e,onDismiss:t}=this.props;e&&(clearTimeout(this.dismissTimer),this.dismissTimer=setTimeout(t,5e3))}componentWillUnmount(){clearTimeout(this.dismissTimer)}render(){const{showing:e,bsStyle:t,onDismiss:s,children:n}=this.props;return m.a.createElement(g.Collapse,{in:e},m.a.createElement("div",{style:{position:"fixed",bottom:20,left:20}},m.a.createElement(g.Alert,{bsStyle:t,onDismiss:s},n)))}}class P extends m.a.Component{constructor(){super(),this.state={issue:{},toastVisible:!1,toastMessage:"",toastType:"info"},this.showError=this.showError.bind(this),this.dismissToast=this.dismissToast.bind(this)}componentDidMount(){this.loadData()}componentDidUpdate(e){const{match:{params:{id:t}}}=e,{match:{params:{id:s}}}=this.props;t!==s&&this.loadData()}showError(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}dismissToast(){this.setState({toastVisible:!1})}async loadData(){const{match:{params:{id:e}}}=this.props,t=await S("query issue($id: Int!) {\n      issue (id: $id) {\n        id description\n      }\n    }",{id:e},this.showError);t?this.setState({issue:t.issue}):this.setState({issue:{}})}render(){const{issue:{description:e}}=this.state,{toastVisible:t,toastType:s,toastMessage:n}=this.state;return m.a.createElement("div",null,m.a.createElement("h3",null,"Description"),m.a.createElement("pre",null,e),m.a.createElement(O,{showing:t,onDismiss:this.dismissToast,bsStyle:s},n))}}class _ extends m.a.Component{constructor(){super(),this.state={issues:[],toastVisible:!1,toastMessage:"",toastType:"info"},this.closeIssue=this.closeIssue.bind(this),this.deleteIssue=this.deleteIssue.bind(this),this.showSuccess=this.showSuccess.bind(this),this.showError=this.showError.bind(this),this.dismissToast=this.dismissToast.bind(this)}componentDidMount(){this.loadData()}componentDidUpdate(e){const{location:{search:t}}=e,{location:{search:s}}=this.props;t!==s&&this.loadData()}async loadData(){const{location:{search:e}}=this.props,t=new T.a(e),s={};t.get("status")&&(s.status=t.get("status"));const n=parseInt(t.get("effortMin"),10);Number.isNaN(n)||(s.effortMin=n);const a=parseInt(t.get("effortMax"),10);Number.isNaN(a)||(s.effortMax=a);const o=await S("query issueList(\n      $status: StatusType\n      $effortMin: Int\n      $effortMax: Int\n    ) {\n      issueList(\n        status: $status\n        effortMin: $effortMin\n        effortMax: $effortMax\n      ) {\n        id title status owner\n        created effort due\n      }\n    }",s,this.showError);o&&this.setState({issues:o.issueList})}async closeIssue(e){const{issues:t}=this.state,s=await S("mutation issueClose($id: Int!) {\n      issueUpdate(id: $id, changes: { status: Closed }) {\n        id title status owner\n        effort created due description\n      }\n    }",{id:t[e].id},this.showError);s?this.setState(t=>{const n=[...t.issues];return n[e]=s.issueUpdate,{issues:n}}):this.loadData()}async deleteIssue(e){const{issues:t}=this.state,{location:{pathname:s,search:n},history:a}=this.props,{id:o}=t[e],i=await S("mutation issueDelete($id: Int!) {\n      issueDelete(id: $id)\n    }",{id:o},this.showError);i&&i.issueDelete?(this.setState(t=>{const i=[...t.issues];return s==="/issues/"+o&&a.push({pathname:"/issues",search:n}),i.splice(e,1),{issues:i}}),this.showSuccess(`Deleted issue ${o} successfully.`)):this.loadData()}showSuccess(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"success"})}showError(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}dismissToast(){this.setState({toastVisible:!1})}render(){const{issues:e}=this.state,{toastVisible:t,toastType:s,toastMessage:n}=this.state,{match:a}=this.props;return m.a.createElement(m.a.Fragment,null,m.a.createElement(g.Panel,null,m.a.createElement(g.Panel.Heading,null,m.a.createElement(g.Panel.Title,{toggle:!0},"Filter")),m.a.createElement(g.Panel.Body,{collapsible:!0},m.a.createElement(M,null))),m.a.createElement(N,{issues:e,closeIssue:this.closeIssue,deleteIssue:this.deleteIssue}),m.a.createElement(E.Route,{path:a.path+"/:id",component:P}),m.a.createElement(O,{showing:t,onDismiss:this.dismissToast,bsStyle:s},n))}}function k(){return m.a.createElement("div",null,m.a.createElement("h2",null,"This is a placeholder fro the Issue Report"))}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}class B extends m.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t.toString():"")},this.onBlur=this.onBlur.bind(this),this.onChange=this.onChange.bind(this)}onChange(e){e.target.value.match(/^\d*$/)&&this.setState({value:e.target.value})}onBlur(e){const{onChange:t}=this.props,{value:s}=this.state;t(e,function(e){const t=parseInt(e,10);return Number.isNaN(t)?null:t}(s))}render(){const{value:e}=this.state;return m.a.createElement("input",V({type:"text"},this.props,{value:e,onBlur:this.onBlur,onChange:this.onChange}))}}function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}class A extends m.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t.toISOString().substr(0,10):""),focused:!1,valid:!0},this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),this.onChange=this.onChange.bind(this)}onFocus(){this.setState({focused:!0})}onBlur(e){const{value:t,valid:s}=this.state,{onValidityChange:n,onChange:a}=this.props,o=function(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}(t),i=""===t||null!=o;i!==s&&n&&n(e,i),this.setState({focused:!1,valid:i}),i&&a(e,o)}onChange(e){e.target.value.match(/^[\d-]*$/)&&this.setState({value:e.target.value})}render(){const{valid:e,focused:t,value:s}=this.state,{value:n,onValidityChange:a,...o}=this.props,i=t||!e?s:null!=(r=n)?r.toDateString():"";var r;return m.a.createElement("input",$({},o,{value:i,placeholder:t?"yyyy-mm-dd":null,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange}))}}class R extends m.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t:"")},this.onBlur=this.onBlur.bind(this),this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e.target.value})}onBlur(e){const{onChange:t}=this.props,{value:s}=this.state;var n;t(e,0===(n=s).trim().length?null:n)}render(){const{value:e}=this.state,{tag:t="input",...s}=this.props;return m.a.createElement(t,{...s,value:e,onBlur:this.onBlur,onChange:this.onChange})}}class j extends m.a.Component{constructor(){super(),this.state={issue:{},invalidFields:{},showingValidation:!1,toastVisible:!1,toastMessage:"",toastType:"success"},this.onChange=this.onChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.onValidityChange=this.onValidityChange.bind(this),this.showSuccess=this.showSuccess.bind(this),this.showError=this.showError.bind(this),this.dismissToast=this.dismissToast.bind(this)}componentDidMount(){this.loadData()}componentDidUpdate(e){const{match:{params:{id:t}}}=e,{match:{params:{id:s}}}=this.props;s!==t&&this.loadData()}onChange(e,t){const{name:s,value:n}=e.target,a=void 0===t?n:t;this.setState(e=>({issue:{...e.issue,[s]:a}}))}onValidityChange(e,t){const{name:s}=e.target;this.setState(e=>{const n={...e.invalidFields,[s]:!t};return t&&delete n[s],{invalidFields:n}})}async handleSubmit(e){e.preventDefault(),this.showValidation();const{issue:t,invalidFields:s}=this.state;if(0!==Object.keys(s).length)return;const{id:n,created:a,...o}=t,i=await S("mutation issueUpdate(\n        $id: Int!\n        $changes: IssueUpdateInputs!\n    ){\n        issueUpdate(\n            id: $id\n            changes: $changes\n        ){\n            id title status owner\n            effort created due description\n        }\n    }",{changes:o,id:n},this.showError);i&&(this.setState({issue:i.issueUpdate}),this.showSuccess("Updated issue successfully"))}async loadData(){const{match:{params:{id:e}}}=this.props,t=await S("query issue($id: Int!) {\n          issue(id: $id) {\n              id title status owner\n              effort created due description\n          }\n      }",{id:e},this.showError);this.setState({issue:t?t.issue:{},invalidFields:{}})}showValidation(){this.setState({showingValidation:!0})}dismissValidation(){this.setState({showingValidation:!1})}showSuccess(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"success"})}showError(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}dismissToast(){this.setState({toastVisible:!1})}render(){const{issue:{id:e}}=this.state,{match:{params:{id:t}}}=this.props,{toastVisible:s,toastMessage:n,toastType:a}=this.state;if(null==e)return null!=t?m.a.createElement("h3",null,`Issue with ID ${t} not found.`):null;const{invalidFields:o,showingValidation:i}=this.state;let r;0!==Object.keys(o).length&&i&&(r=m.a.createElement(g.Alert,{bsStyle:"danger",onDismiss:this.dismissValidation},"Please correct invalid fields before submitting."));const{issue:{title:l,status:c}}=this.state,{issue:{owner:u,effort:h,description:d}}=this.state,{issue:{created:p,due:b}}=this.state;return m.a.createElement(g.Panel,null,m.a.createElement(g.Panel.Heading,null,m.a.createElement(g.Panel.Title,null,"Editing issue: "+e)),m.a.createElement(g.Panel.Body,null,m.a.createElement(g.Form,{horizontal:!0,onSubmit:this.handleSubmit},m.a.createElement(g.FormGroup,null,m.a.createElement(g.Col,{componentClass:g.ControlLabel,sm:3},"Created"),m.a.createElement(g.Col,{sm:9},m.a.createElement(g.FormControl.Static,null,p.toDateString()))),m.a.createElement(g.FormGroup,null,m.a.createElement(g.Col,{componentClass:g.ControlLabel,sm:3},"Status"),m.a.createElement(g.Col,{sm:9},m.a.createElement(g.FormControl,{componentClass:"select",name:"status",value:c,onChange:this.onChange},m.a.createElement("option",{value:"New"},"New"),m.a.createElement("option",{value:"Assigned"},"Assigned"),m.a.createElement("option",{value:"Fixed"},"Fixed"),m.a.createElement("option",{value:"Closed"},"Closed")))),m.a.createElement(g.FormGroup,null,m.a.createElement(g.Col,{componentClass:g.ControlLabel,sm:3},"Owner"),m.a.createElement(g.Col,{sm:9},m.a.createElement(g.FormControl,{componentClass:R,name:"owner",value:u,onChange:this.onChange,key:e}))),m.a.createElement(g.FormGroup,null,m.a.createElement(g.Col,{componentClass:g.ControlLabel,sm:3},"Effort"),m.a.createElement(g.Col,{sm:9},m.a.createElement(g.FormControl,{componentClass:B,name:"effort",value:h,onChange:this.onChange,key:e}))),m.a.createElement(g.FormGroup,{validationState:o.due?"error":null},m.a.createElement(g.Col,{componentClass:g.ControlLabel,sm:3},"Due"),m.a.createElement(g.Col,{sm:9},m.a.createElement(g.FormControl,{componentClass:A,onValidityChange:this.onValidityChange,name:"due",value:b,onChange:this.onChange,key:e}),m.a.createElement(g.FormControl.Feedback,null))),m.a.createElement(g.FormGroup,null,m.a.createElement(g.Col,{componentClass:g.ControlLabel,sm:3},"Title"),m.a.createElement(g.Col,{sm:9},m.a.createElement(g.FormControl,{componentClass:R,size:50,name:"title",value:l,onChange:this.onChange,key:e}))),m.a.createElement(g.FormGroup,null,m.a.createElement(g.Col,{componentClass:g.ControlLabel,sm:3},"Description"),m.a.createElement(g.Col,{sm:9},m.a.createElement(g.FormControl,{componentClass:R,tag:"textarea",rows:4,cols:50,name:"description",value:d,onChange:this.onChange,key:e}))),m.a.createElement(g.FormGroup,null,m.a.createElement(g.Col,{smOffset:3,sm:6},m.a.createElement(g.ButtonToolbar,null,m.a.createElement(g.Button,{bsStyle:"primary",type:"submit"},"Submit"),m.a.createElement(f.LinkContainer,{to:"/issues"},m.a.createElement(g.Button,{bsStyle:"link"},"Back"))))),m.a.createElement(g.FormGroup,null,m.a.createElement(g.Col,{smOffset:3,sm:9},r)))),m.a.createElement(g.Panel.Footer,null,m.a.createElement(E.Link,{to:`/edit/${e}-1`},"Prev")," | ",m.a.createElement(E.Link,{to:`/edit/${e}+1`},"Next")),m.a.createElement(O,{showing:s,onDismiss:this.dismissToast,bsStyle:a},n))}}const L=()=>m.a.createElement("h1",null,"Page Not Found");function U(){return m.a.createElement(E.Switch,null,m.a.createElement(E.Redirect,{exact:!0,from:"/",to:"/issues"}),m.a.createElement(E.Route,{path:"/issues",component:_}),m.a.createElement(E.Route,{path:"/edit/:id",component:j}),m.a.createElement(E.Route,{path:"/report",component:k}),m.a.createElement(E.Route,{path:"/about",component:x}),m.a.createElement(E.Route,{component:L}))}class G extends m.a.Component{constructor(e){super(e),this.state={showing:!1,toastVisible:!1,toastMessage:"",toastType:"success"},this.showModal=this.showModal.bind(this),this.hideModal=this.hideModal.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.showError=this.showError.bind(this),this.dismissToast=this.dismissToast.bind(this)}showModal(){this.setState({showing:!0})}hideModal(){this.setState({showing:!1})}showError(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}dismissToast(){this.setState({toastVisible:!1})}async handleSubmit(e){e.preventDefault(),this.hideModal();const t=document.forms.issueAdd,s={owner:t.owner.value,title:t.title.value,due:new Date((new Date).getTime()+864e6)},n=await S("mutation issueAdd($issue: IssueInputs!) {\n      issueAdd(issue: $issue) {\n        id\n      }\n    }",{issue:s},this.showError);if(n){const{history:e}=this.props;e.push("/edit/"+n.issueAdd.id)}}render(){const{showing:e}=this.state,{toastVisible:t,toastMessage:s,toastType:n}=this.state;return m.a.createElement(m.a.Fragment,null,m.a.createElement(g.NavItem,{onClick:this.showModal},m.a.createElement(g.OverlayTrigger,{placement:"left",delayShow:1e3,overlay:m.a.createElement(g.Tooltip,{id:"create-issue"},"Create Issue")},m.a.createElement(g.Glyphicon,{glyph:"plus"}))),m.a.createElement(g.Modal,{keyboard:!0,show:e,onHide:this.hideModal},m.a.createElement(g.Modal.Header,{closeButton:!0},m.a.createElement(g.Modal.Title,null,"Create Issue")),m.a.createElement(g.Modal.Body,null,m.a.createElement(g.Form,{name:"issueAdd"},m.a.createElement(g.FormGroup,null,m.a.createElement(g.ControlLabel,null,"Title"),m.a.createElement(g.FormControl,{name:"title",autoFocus:!0})),m.a.createElement(g.FormGroup,null,m.a.createElement(g.ControlLabel,null,"Owner"),m.a.createElement(g.FormControl,{name:"owner"})))),m.a.createElement(g.Modal.Footer,null,m.a.createElement(g.ButtonToolbar,null,m.a.createElement(g.Button,{type:"button",bsStyle:"primary",onClick:this.handleSubmit},"Submit"),m.a.createElement(g.Button,{bsStyle:"link",onClick:this.hideModal},"Cancel")))),m.a.createElement(O,{showing:t,onDismiss:this.dismissToast,bsStyle:n},s))}}var q=Object(E.withRouter)(G);function H(){return m.a.createElement(g.Navbar,{fluid:!0},m.a.createElement(g.Navbar.Header,null,m.a.createElement(g.Navbar.Brand,null,"Issue Tracker")),m.a.createElement(g.Nav,null,m.a.createElement(f.LinkContainer,{exact:!0,to:"/"},m.a.createElement(g.NavItem,null,"Home")),m.a.createElement(f.LinkContainer,{to:"/issues"},m.a.createElement(g.NavItem,null,"Issue List")),m.a.createElement(f.LinkContainer,{to:"/report"},m.a.createElement(g.NavItem,null,"Report"))),m.a.createElement(g.Nav,{pullRight:!0},m.a.createElement(q,null),m.a.createElement(g.NavDropdown,{id:"user-dropdown",title:m.a.createElement(g.Glyphicon,{glyph:"option-vertical"}),noCaret:!0},m.a.createElement(f.LinkContainer,{to:"/about"},m.a.createElement(g.MenuItem,null,"About")))))}function z(){return m.a.createElement("small",null,m.a.createElement("hr",null),m.a.createElement("p",{className:"text-center"},"Full source code available at this"," ",m.a.createElement("a",{href:"https://github.com/vasansr/pro-mern-stack-2"},"GitHub repository")))}function J(){return m.a.createElement("div",null,m.a.createElement(H,null),m.a.createElement(g.Grid,{fluid:!0},m.a.createElement(U,null)),m.a.createElement(z,null))}var Y=async function(e,t){const s=x.fetchData();b.initialData=s;const n=m.a.createElement(E.StaticRouter,{location:e.url,context:{}},m.a.createElement(J,null)),a=p.a.renderToString(n);t.send(function(e,t){return`<!DOCTYPE HTML>\n  <html>\n  <head>\n    <meta charset="utf-8">\n    <title>Pro MERN Stack</title>\n    <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" >\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <style>\n      table.table-hover tr {cursor: pointer;}\n      .panel-title a {display: block; width: 100%; cursor: pointer;}\n    </style>\n  </head>\n  <body>\n    \x3c!-- Page generated from template. --\x3e\n    <div id="contents">${e}</div>\n    <script>window.__INITIAL_DATA__ = ${JSON.stringify(t)}<\/script>\n    <script src="/env.js"><\/script>\n    <script src="/vendor.bundle.js"><\/script>\n    <script src="/app.bundle.js"><\/script>\n  </body>\n  </html>\n  `}(a,s))};const W=i()();u.a.install(),a.a.config();process.env.ENABLE_HMR;W.use(i.a.static("public"));const X=process.env.API_PROXY_TARGET;X&&W.use("/graphql",l()({target:X})),process.env.UI_API_ENDPOINT||(process.env.UI_API_ENDPOINT="http://localhost:3000/graphql"),process.env.UI_SERVER_API_ENDPOINT||(process.env.UI_SERVER_API_ENDPOINT=process.env.UI_API_ENDPOINT),W.get("/env.js",(e,t)=>{const s={UI_API_ENDPOINT:process.env.UI_API_ENDPOINT};t.send("window.ENV = "+JSON.stringify(s))}),W.get("*",(e,t,s)=>{Y(e,t,s)});const K=process.env.UI_SERVER_PORT||8e3;W.listen(K,()=>{console.log("UI started on port "+K)})}]);
//# sourceMappingURL=server.js.map