(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return s});var r=n(0),a=n.n(r),o=n(216);n(229);t.default=function(e){e.data;return a.a.createElement(o.a,null,a.a.createElement("div",{className:"maintenance"},a.a.createElement("p",null,"페이지 준비 중입니다.")))};var s="2403946131"},211:function(e,t,n){"use strict";t.a=function(e,t){var n,r;return function(){var a=this,o=arguments;r?(clearTimeout(n),n=setTimeout(function(){Date.now()-r>=t&&(e.apply(a,o),r=Date.now())},t-(Date.now()-r))):(e.apply(a,o),r=Date.now())}}},212:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var r=n(0),a=n.n(r),o=n(72),s=n.n(o);n.d(t,"a",function(){return s.a});n(213),n(8).default.enqueue;var i=a.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,r=e.query,o=e.render,s=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,s&&o(s),!s&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,n=e.query,r=e.render,o=e.children;return a.a.createElement(i.Consumer,null,function(e){return a.a.createElement(c,{data:t,query:n,render:r||o,staticQueryData:e})})}},213:function(e,t,n){var r;e.exports=(r=n(214))&&r.default||r},214:function(e,t,n){"use strict";n.r(t);n(20);var r=n(0),a=n.n(r),o=n(98);t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},215:function(e){e.exports={data:{site:{siteMetadata:{title:"eunha's dev",description:"은하의 개발 블로그입니다.",author:"@eunha0ne"}}}}},216:function(e,t,n){"use strict";var r=n(215),a=n(0),o=n.n(a),s=(n(20),n(212)),i=n(211);n(217);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={progress:n.props.progress},n.node={bar:o.a.createRef()},n.setProgressBar=n.setProgressBar.bind(c(n)),n.setProgressBarThrottle=Object(i.a)(n.setProgressBar,200),n.getCurrentProgress=n.getCurrentProgress.bind(c(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.getCurrentProgress=function(){var e=document.body.scrollHeight-window.innerHeight,t=document.documentElement.scrollTop||document.scrollingElement.scrollTop;return(t<0?0:t)/e*100},a.setProgressBar=function(){var e=this,t=this.getCurrentProgress(),n=t>=0?100-t:0;window.requestAnimationFrame(function(){e.node.bar.current.style.transform="translateX(-"+n+"%)"})},a.componentDidMount=function(){window.addEventListener("scroll",this.setProgressBar)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.setProgressBar)},a.render=function(){return o.a.createElement("div",{className:"progress-bar"},o.a.createElement("span",{ref:this.node.bar}))},r}(a.Component),u=l;l.defaultProps={progress:"0%"};n(218);var d=n(96),h=n(97);function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={isNight:t.isNightMode},n.node={btnItemRef:o.a.createRef()},n.handleClick=n.handleClick.bind(m(n)),n.setTheme=n.setTheme.bind(m(n)),n.toggleThemeTo=n.toggleThemeTo.bind(m(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.setTheme=function(e){this.toggleThemeTo(e,document.getElementById("___gatsby")),this.toggleThemeTo(e,this.node.btnItemRef.current)},a.toggleThemeTo=function(e,t){var n;(n=t.classList).remove.apply(n,["day","night"]),t.classList.add(e)},a.handleClick=function(){var e=this;this.setState({isNight:!this.state.isNight},function(){e.props.dispatch(Object(h.b)(e.state.isNight));var t=e.state.isNight?"night":"day";e.toggleThemeTo(t,document.getElementsByTagName("body")[0])})},a.componentDidMount=function(){var e=this.state.isNight?"night":"day";this.toggleThemeTo(e,document.getElementsByTagName("body")[0])},a.render=function(){return o.a.createElement("div",{className:"theme-switch"},o.a.createElement("button",{className:"theme-switch__btn",onClick:this.handleClick},o.a.createElement("div",{className:"theme-switch__item-wrapper "+(this.state.isNight?"night":"day"),ref:this.node.btnItemRef},o.a.createElement("div",{className:"theme-switch__item theme-switch__item--night"},o.a.createElement("span",{className:"moon"}),o.a.createElement("p",null,this.props.nightName)),o.a.createElement("div",{className:"theme-switch__item theme-switch__item--day"},o.a.createElement("span",null),o.a.createElement("p",null,this.props.dayName)))))},r}(a.Component);p.defaultProps={nightName:"night",dayName:"day",defaultTheme:"day"};var g=Object(d.b)(function(e){return{isNightMode:e.app.isNightMode}},null)(p);n(219);function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={positions:n.props.positions,hasReader:n.props.hasReader,isRolldown:n.props.isRolldown,isDocking:n.props.isDocking},n.handleToggleHeader=n.handleToggleHeader.bind(f(n)),n.handleToggleHeaderThrottle=Object(i.a)(n.handleToggleHeader,100),n.getCurrentScrollPos=n.getCurrentScrollPos.bind(f(n)),n.checkPathname=n.checkPathname.bind(f(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.checkPathname=function(){var e=/\/20/.test(window.location.pathname);this.state.hasReader!==e&&this.setState({hasReader:e})},a.handleToggleHeader=function(){var e=this.getCurrentScrollPos(),t=e.curr<=0,n=!1;e.prev<e.curr?n=!1:e.prev>e.curr&&(n=!0),this.setState({positions:e.curr,isRolldown:n,isDocking:t})},a.getCurrentScrollPos=function(){var e,t=document.documentElement.scrollTop||document.scrollingElement.scrollTop,n=[].concat(this.state.positions);return e=n.shift(),n.push(t),{prev:e,curr:n[0]}},a.componentDidMount=function(){this.checkPathname(),window.addEventListener("scroll",this.handleToggleHeaderThrottle,{passive:!0})},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleToggleHeaderThrottle)},a.render=function(){var e=Object.assign({},this.state);return o.a.createElement(w,e)},r}(a.Component),E=v,w=function(e){var t=e.hasReader,n=e.isRolldown,r=e.isDocking?"main-header--docked":n?"main-header--fade-in":"main-header--fade-out";return o.a.createElement("header",{className:"main-header "+r},o.a.createElement("div",{className:"main-header__container"},o.a.createElement("nav",{className:"menu"},o.a.createElement(s.a,{className:"menu__link",to:"/"},"HOME")),o.a.createElement(g,null)),t&&o.a.createElement(u,null))};v.defaultProps={positions:0,hasReader:!1,isRolldown:!1,isDocking:!0};n(220),n(221),t.a=function(e){var t=e.children,n=r.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{siteTitle:n.site.siteMetadata.title}),t,o.a.createElement("footer",null,o.a.createElement("p",null,"© ",(new Date).getFullYear()," ",o.a.createElement("span",null,"eunha0ne")," All rights reserved."),o.a.createElement("p",null,"Built with ","Gatsby, React, GraphQL"," ")))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-29cafbd38ca001dbf7d1.js.map