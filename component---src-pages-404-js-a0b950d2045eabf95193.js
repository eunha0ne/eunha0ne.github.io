(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var o=n("q1tI"),a=r(o),i=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function f(){u=e(l.map((function(e){return e.props}))),T.canUseDOM?t(u):n&&(u=n(u))}var T=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){l.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},c.render=function(){return a.createElement(r,this.props)},o}(o.Component);return c(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(T,"canUseDOM",s),T}}},Bl7J:function(e,t,n){"use strict";var r=n("NOo8"),o=n("q1tI"),a=n.n(o),i=(n("91GP"),n("/MKj")),c=n("9At1"),s=n("Wbzz"),u=n("Ke6o");n("FjKf");function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={progress:n.props.progress},n.node={bar:a.a.createRef()},n.setProgressBar=n.setProgressBar.bind(l(n)),n.getCurrentProgress=n.getCurrentProgress.bind(l(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.getCurrentProgress=function(){var e=document.body.scrollHeight-window.innerHeight,t=document.documentElement.scrollTop||document.scrollingElement.scrollTop;return(t<0?0:t)/e*100},o.setProgressBar=function(){var e=this,t=this.getCurrentProgress(),n=t>=0?100-t:0;window.requestAnimationFrame((function(){e.node.bar.current.style.transform="translateX(-"+n+"%)"}))},o.componentDidMount=function(){window.addEventListener("scroll",this.setProgressBar,{passive:!0})},o.componentWillUnmount=function(){window.removeEventListener("scroll",this.setProgressBar)},o.render=function(){return a.a.createElement("div",{className:"progress-bar"},a.a.createElement("span",{ref:this.node.bar}))},r}(a.a.Component);f.defaultProps={progress:"0%"};var T=f;n("S+pV");function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handleClick=n.handleClick.bind(p(n)),n.setThemeClass=n.setThemeClass.bind(p(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.setThemeClass=function(e){var t=document.body.classList;t.remove.apply(t,["day","night"]),t.add(e)},o.getThemeName=function(e){return null==e&&(e=this.props.isNightMode),e?"night":"day"},o.handleClick=function(){var e=this.props,t=e.isNightMode,n=e.toggleAppTheme,r=e.themeSwitchClick,o=!t;n(o),r(!0),this.setThemeClass(this.getThemeName(o))},o.componentDidMount=function(){this.setThemeClass(this.getThemeName())},o.render=function(){var e=this.props,t=e.isNightMode,n=e.isModeChanged;return a.a.createElement("div",{className:"theme-switch"},a.a.createElement("button",{className:"theme-switch__btn",onClick:this.handleClick},a.a.createElement("div",{className:"theme-switch__displayer "+(t?"is-night":"is-day")},a.a.createElement("div",{className:"theme-switch__item theme-switch__item--night"},a.a.createElement("span",null,"night")),a.a.createElement("div",{className:"theme-switch__item theme-switch__item--day"},a.a.createElement("span",null,"day")))),!n&&a.a.createElement("div",{className:"theme-switch__guider"},a.a.createElement("span",null,"Change your mood!")))},r}(a.a.Component),h=Object(i.b)((function(e){return{isNightMode:e.appTheme.isNightMode,isModeChanged:e.appTheme.isModeChanged}}),(function(e){return{toggleAppTheme:function(t){return e(Object(c.d)(t))},themeSwitchClick:function(t){return e(Object(c.c)(t))}}}))(d);n("zK4Z");function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={scrollTop:n.props.scrollTop,hasReader:n.props.hasReader,isRolldown:n.props.isRolldown,isDocking:n.props.isDocking},n.handleToggleHeader=n.handleToggleHeader.bind(E(n)),n.handleToggleHeaderThrottle=Object(u.a)(n.handleToggleHeader,100),n.getCurrentScrollPos=n.getCurrentScrollPos.bind(E(n)),n.checkPathname=n.checkPathname.bind(E(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.checkPathname=function(){var e=/\/20/.test(window.location.pathname);this.state.hasReader!==e&&this.setState({hasReader:e})},o.handleToggleHeader=function(){var e=this,t=this.getCurrentScrollPos(),n=t.curr<=0,r=!1;t.prev<t.curr?r=!1:t.prev>t.curr&&(r=!0),this.setState({scrollTop:t.curr,isRolldown:r,isDocking:n},(function(){var t=e.state.isDocking;e.props.themeSwitchClick(!t)}))},o.getCurrentScrollPos=function(){var e,t=document.documentElement.scrollTop||document.scrollingElement.scrollTop,n=[].concat(this.state.scrollTop);return e=n.shift(),n.push(t),{prev:e,curr:n[0]}},o.componentDidMount=function(){this.checkPathname(),window.addEventListener("scroll",this.handleToggleHeaderThrottle,{passive:!0})},o.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleToggleHeaderThrottle)},o.render=function(){var e=Object.assign({},this.state);return a.a.createElement(A,e)},r}(a.a.Component),A=function(e){var t=e.hasReader,n=e.isRolldown,r=e.isDocking?"main-header--docked":n?"main-header--fade-in":"main-header--fade-out";return a.a.createElement("header",{className:"main-header "+r},a.a.createElement("div",{className:"main-header__container"},a.a.createElement("nav",{className:"menu"},a.a.createElement(s.Link,{className:"menu__link",to:"/"},"HOME")),a.a.createElement(h,null)),t&&a.a.createElement(T,null))};m.defaultProps={scrollTop:0,hasReader:!1,isRolldown:!1,isDocking:!0};var y=Object(i.b)((function(e){return{isThemeSwitchClick:e.appTheme.isThemeSwitchClick}}),(function(e){return{themeSwitchClick:function(t){return e(Object(c.c)(t))}}}))(m);n("8ypT"),n("XjQp"),t.a=function(e){var t=e.children,n=r.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{siteTitle:n.site.siteMetadata.title}),t,a.a.createElement("footer",null,a.a.createElement("p",null,"© ",(new Date).getFullYear()," ",a.a.createElement("span",null,"eunha0ne")," All rights reserved."),a.a.createElement("p",null,"Built with ","Gatsby, React, GraphQL"," ")))}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var u=a[s];if(!c(u))return!1;var l=e[u],f=t[u];if(!1===(o=n?n.call(r,l,f,u):void 0)||void 0===o&&l!==f)return!1}return!0}},Ke6o:function(e,t,n){"use strict";t.a=function(e,t){var n,r;return function(){var o=this,a=arguments;r?(clearTimeout(n),n=setTimeout((function(){Date.now()-r>=t&&(e.apply(o,a),r=Date.now())}),t-(Date.now()-r))):(e.apply(o,a),r=Date.now())}}},NOo8:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"eunha\'s dev","description":"은하의 개발 블로그입니다.","author":"@eunha0ne"}}}}')},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),a=n("hswa").f,i=n("kJMx").f,c=n("quPj"),s=n("C/va"),u=r.RegExp,l=u,f=u.prototype,T=/a/g,p=/a/g,d=new u(T)!==T;if(n("nh4g")&&(!d||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,u(T)!=T||u(p)==p||"/a/i"!=u(T,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),a=void 0===t;return!n&&r&&e.constructor===u&&a?e:o(d?new l(r&&!a?e.source:e,t):l((r=e instanceof u)?e.source:e,r&&a?s.call(e):t),n?this:f,u)};for(var h=function(e){e in u||a(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},E=i(l),m=0;E.length>m;)h(E[m++]);f.constructor=u,u.prototype=f,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=f(n("q1tI")),i=f(n("17x9")),c=f(n("8+s/")),s=f(n("bmMU")),u=n("v1p5"),l=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var p,d,h,E=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),m=(p=E,h=d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,a=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},a,((t={})[o.type]=c,t.titleAttributes=r({},i),t));case l.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case l.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=T(o,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(p,o)},o(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(a.default.Component),d.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=p.peek,d.rewind=function(){var e=p.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);m.renderStatic=m.rewind,t.Helmet=m,t.default=m},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,u,l=r(t),f=r(n);if(l&&f){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=f)return!1;var T=t instanceof Date,p=n instanceof Date;if(T!=p)return!1;if(T&&p)return t.getTime()==n.getTime();var d=t instanceof RegExp,h=n instanceof RegExp;if(d!=h)return!1;if(d&&h)return t.toString()==n.toString();var E=o(t);if((s=E.length)!==o(n).length)return!1;for(c=s;0!=c--;)if(!a.call(n,E[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(u=E[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"ff/Y":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"eunha\'s dev","description":"은하의 개발 블로그입니다.","author":"@eunha0ne"}}}}')},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=s(n("q1tI")),i=s(n("MgzW")),c=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var u,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,c.TAG_NAMES.TITLE),n=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},h=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],u=s.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),s=0;s<a.length;s++){var u=a[s],l=(0,i.default)({},o[u],r[u]);o[u]=l}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){m(e)}),0)}),A=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,_=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,T=e.title,p=e.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,o),R(T,p);var d={baseTag:w(c.TAG_NAMES.BASE,n),linkTags:w(c.TAG_NAMES.LINK,a),metaTags:w(c.TAG_NAMES.META,i),noscriptTags:w(c.TAG_NAMES.NOSCRIPT,s),scriptTags:w(c.TAG_NAMES.SCRIPT,l),styleTags:w(c.TAG_NAMES.STYLE,f)},h={},E={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(E[e]=d[e].oldTags)})),t&&t(),u(e,h,E)},b=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=b(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),s=0;s<i.length;s++){var u=i[s],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var f=a.indexOf(u);-1!==f&&a.splice(f,1)}for(var T=a.length-1;T>=0;T--)n.removeAttribute(a[T]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},w=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,o=M(n,r),[a.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=O(n),a=b(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(a,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+l(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){g&&v(g),e.defer?g=y((function(){_(e,(function(){g=null}))})):(_(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.scriptTags,l=e.styleTags,f=e.title,T=void 0===f?"":f,p=e.titleAttributes;return{base:C(c.TAG_NAMES.BASE,t,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,o,r),link:C(c.TAG_NAMES.LINK,a,r),meta:C(c.TAG_NAMES.META,i,r),noscript:C(c.TAG_NAMES.NOSCRIPT,s,r),script:C(c.TAG_NAMES.SCRIPT,u,r),style:C(c.TAG_NAMES.STYLE,l,r),title:C(c.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:d([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:h(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:h(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:h(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=S}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("ff/Y"),o=n("q1tI"),a=n.n(o),i=n("TJpk"),c=n.n(i),s=n("Wbzz");function u(e){var t=e.description,n=(e.lang,e.meta),o=e.keywords,i=e.title;return a.a.createElement(s.StaticQuery,{query:l,render:function(e){var r=t||e.site.siteMetadata.description;return a.a.createElement(c.a,{title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:i},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)},a.a.createElement("html",{lang:"ko"}))},data:r})}u.defaultProps={lang:"ko",meta:[],keywords:[]},t.a=u;var l="1025518380"},w2l6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("Bl7J"),i=n("vrFN");t.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{title:"404: Not found"}),o.a.createElement("h1",null,"NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}}]);
//# sourceMappingURL=component---src-pages-404-js-a0b950d2045eabf95193.js.map