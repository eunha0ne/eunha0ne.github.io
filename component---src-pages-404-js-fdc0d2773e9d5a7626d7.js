(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{155:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(165),s=n(174);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},162:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(1),s=n.n(i),o=n(36),l=n.n(o);n.d(t,"a",function(){return l.a});n(164);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},163:function(e,t,n){"use strict";t.a=function(e,t){var n,a;return function(){var r=this,i=arguments;a?(clearTimeout(n),n=setTimeout(function(){Date.now()-a>=t&&(e.apply(r,i),a=Date.now())},t-(Date.now()-a))):(e.apply(r,i),a=Date.now())}}},164:function(e,t,n){var a;e.exports=(a=n(166))&&a.default||a},165:function(e,t,n){"use strict";var a=n(167),r=n(0),i=n.n(r),s=n(1),o=n.n(s),l=(n(27),n(37)),c=n.n(l),u=n(8),d=n.n(u),m=n(162),h=n(163),p=(n(168),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={progress:n.props.progress},n.node={bar:i.a.createRef()},n.setProgressBar=n.setProgressBar.bind(c()(n)),n.setProgressBarThrottle=Object(h.a)(n.setProgressBar,200),n.getCurrentProgress=n.getCurrentProgress.bind(c()(n)),n}d()(t,e);var n=t.prototype;return n.getCurrentProgress=function(){var e=document.body.scrollHeight-window.innerHeight,t=document.documentElement.scrollTop||document.scrollingElement.scrollTop;return(t<0?0:t)/e*100},n.setProgressBar=function(){var e=this,t=this.getCurrentProgress(),n=t>=0?100-t:0;window.requestAnimationFrame(function(){e.node.bar.current.style.transform="translateX(-"+n+"%)"})},n.componentDidMount=function(){window.addEventListener("scroll",this.setProgressBar)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.setProgressBar)},n.render=function(){return i.a.createElement("div",{className:"progress-bar"},i.a.createElement("span",{ref:this.node.bar}))},t}(r.Component)),g=p;p.defaultProps={progress:"0%"},p.propTypes={progress:o.a.string.isRequired};n(169);var f=n(58),v=n(59),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isNight:t.isNightMode},n.node={btnItemRef:i.a.createRef()},n.handleClick=n.handleClick.bind(c()(n)),n.setTheme=n.setTheme.bind(c()(n)),n.toggleThemeTo=n.toggleThemeTo.bind(c()(n)),n}d()(t,e);var n=t.prototype;return n.setTheme=function(e){this.toggleThemeTo(e,document.getElementById("___gatsby")),this.toggleThemeTo(e,this.node.btnItemRef.current)},n.toggleThemeTo=function(e,t){var n;(n=t.classList).remove.apply(n,["day","night"]),t.classList.add(e)},n.handleClick=function(){var e=this;this.setState({isNight:!this.state.isNight},function(){e.props.dispatch(Object(v.b)(e.state.isNight));var t=e.state.isNight?"night":"day";e.toggleThemeTo(t,document.getElementsByTagName("body")[0])})},n.componentDidMount=function(){var e=this.state.isNight?"night":"day";this.toggleThemeTo(e,document.getElementsByTagName("body")[0])},n.render=function(){return i.a.createElement("div",{className:"theme-switch"},i.a.createElement("button",{className:"theme-switch__btn",onClick:this.handleClick},i.a.createElement("div",{className:"theme-switch__item-wrapper "+(this.state.isNight?"night":"day"),ref:this.node.btnItemRef},i.a.createElement("div",{className:"theme-switch__item theme-switch__item--night"},i.a.createElement("span",{className:"moon"}),i.a.createElement("p",null,this.props.nightName)),i.a.createElement("div",{className:"theme-switch__item theme-switch__item--day"},i.a.createElement("span",null),i.a.createElement("p",null,this.props.dayName)))))},t}(r.Component);y.defaultProps={nightName:"night",dayName:"day",defaultTheme:"day"},y.propTypes={nightName:o.a.string,dayName:o.a.string,defaultTheme:o.a.string};var w=Object(f.b)(function(e){return{isNightMode:e.app.isNightMode}},null)(y),E=(n(170),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={positions:n.props.positions,hasReader:n.props.hasReader,isRolldown:n.props.isRolldown,isDocking:n.props.isDocking},n.handleToggleHeader=n.handleToggleHeader.bind(c()(n)),n.handleToggleHeaderThrottle=Object(h.a)(n.handleToggleHeader,100),n.getCurrentScrollPos=n.getCurrentScrollPos.bind(c()(n)),n.checkPathname=n.checkPathname.bind(c()(n)),n}d()(t,e);var n=t.prototype;return n.checkPathname=function(){var e=/\/20/.test(window.location.pathname);this.state.hasReader!==e&&this.setState({hasReader:e})},n.handleToggleHeader=function(){var e=this.getCurrentScrollPos(),t=e.curr<=0,n=!1;e.prev<e.curr?n=!1:e.prev>e.curr&&(n=!0),this.setState({positions:e.curr,isRolldown:n,isDocking:t})},n.getCurrentScrollPos=function(){var e,t=document.documentElement.scrollTop||document.scrollingElement.scrollTop,n=[].concat(this.state.positions);return e=n.shift(),n.push(t),{prev:e,curr:n[0]}},n.componentDidMount=function(){this.checkPathname(),window.addEventListener("scroll",this.handleToggleHeaderThrottle,{passive:!0})},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleToggleHeaderThrottle)},n.render=function(){var e=Object.assign({},this.state);return i.a.createElement(b,e)},t}(r.Component)),T=E,b=function(e){var t=e.hasReader,n=e.isRolldown,a=e.isDocking?"main-header--docked":n?"main-header--fade-in":"main-header--fade-out";return i.a.createElement("header",{className:"main-header "+a},i.a.createElement("div",{className:"main-header__container"},i.a.createElement("h1",{className:"main-header__title"}),i.a.createElement("nav",{className:"menu"},i.a.createElement(m.a,{className:"menu__link",to:"/"},"HOME"),i.a.createElement(m.a,{className:"menu__link",to:"/about"},"ABOUT"),i.a.createElement(m.a,{className:"menu__link",to:"/archive"},"ARCHIVE")),i.a.createElement(w,null)),t&&i.a.createElement(g,null))};E.defaultProps={positions:0,hasReader:!1,isRolldown:!1,isDocking:!0},E.propTypes={positions:o.a.number.isRequired,hasReader:o.a.bool.isRequired,isRolldown:o.a.bool.isRequired,isDocking:o.a.bool.isRequired};n(171),n(172);var N=function(e){var t=e.children,n=a.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(T,{siteTitle:n.site.siteMetadata.title}),t,i.a.createElement("footer",null,i.a.createElement("p",null,"© ",(new Date).getFullYear()," ",i.a.createElement("span",null,"eunha0ne")," All rights reserved."),i.a.createElement("p",null,"Built with ","Gatsby, React, GraphQL"," ")))};N.propTypes={children:o.a.node.isRequired};t.a=N},166:function(e,t,n){"use strict";n.r(t);n(27);var a=n(0),r=n.n(a),i=n(1),s=n.n(i),o=n(60),l=n(3),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},167:function(e){e.exports={data:{site:{siteMetadata:{title:"eunha's dev",description:"은하의 개발 블로그입니다.",author:"@eunha0ne"}}}}},174:function(e,t,n){"use strict";var a=n(175),r=n(0),i=n.n(r),s=n(1),o=n.n(s),l=n(173),c=n.n(l),u=n(162);function d(e){var t=e.description,n=e.lang,r=e.meta,s=e.keywords,o=e.title;return i.a.createElement(u.b,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:o},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:a}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var m="1025518380"},175:function(e){e.exports={data:{site:{siteMetadata:{title:"eunha's dev",description:"은하의 개발 블로그입니다.",author:"@eunha0ne"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-fdc0d2773e9d5a7626d7.js.map