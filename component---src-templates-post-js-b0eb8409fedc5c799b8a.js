(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"1cLh":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("f3/d");var r=n("wTIg"),i=n("D5tN"),a=(n("q1tI"),n("9eSz")),o=n.n(a),s=(n("5InD"),n("qKvR")),l=Object(r.a)("div",{target:"e1horsme0"})({name:"17buc86",styles:"display:flex;flex-direction:row;flex-wrap:wrap;width:100%;height:auto;font-size:0;border-radius:0.5rem;overflow:hidden;box-sizing:border-box;border:1px solid var(--border-main);background-color:var(--bg-none);> *{box-sizing:border-box;}"}),c=function(e){var t=e.name,n=e.about,r=e.interest,a=i.data;return Object(s.c)(l,null,Object(s.c)("div",{className:"namecard__left"},Object(s.c)(o.a,{fluid:a.placeholderImage.childImageSharp.fluid})),Object(s.c)("div",{className:"namecard__right"},Object(s.c)("p",{className:"name"},t),Object(s.c)("p",{className:"about"},n),Object(s.c)("ul",{className:"interest"},r.map((function(e,t){return Object(s.c)("li",{key:"interest-"+t},e)})))))};c.defaultProps={name:"Kim Gyu-sik (eunha0ne)",about:"자바스크립트 언어를 사용하는 개발자입니다. 아기자기한 UI 기능을 구현하는 것을 좋아하며 노드 환경에서 동작하는 컴포넌트 빌딩 라이브러리에 관심이 있습니다.",interest:["미드","요리","피아노","PS4"]}},"6qSS":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("Wbzz"),o=n("Zttt"),s=n("1cLh"),l=(n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo"),n("f3/d"),n("3Fcl")),c=(n("k1gr"),n("qKvR"));function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={step:n.props.step},n.node={asideRef:i.a.createRef(),asideNodes:null,article:null,headings:null,header:null},n.info={intervals:[],scrollTops:[],currTop:0,prevTop:0,revision:100,step:0},n.getTableContents=n.getTableContents.bind(u(n)),n.setIntervals=n.setIntervals.bind(u(n)),n.setCurrentScrollState=n.setCurrentScrollState.bind(u(n)),n.setComponentNode=n.setComponentNode.bind(u(n)),n.setTableContentsPos=n.setTableContentsPos.bind(u(n)),n.handleHighlight=n.handleHighlight.bind(u(n)),n.bindScrollEvents=n.bindScrollEvents.bind(u(n)),n.scrollThrottle=Object(l.a)(n.bindScrollEvents,100),n.triggerScrollTo=n.triggerScrollTo.bind(u(n)),n.setScrollTo=n.setScrollTo.bind(u(n)),n.lockRelatedComponet=n.lockRelatedComponet.bind(u(n)),n.releaseRelatedComponet=n.releaseRelatedComponet.bind(u(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.releaseRelatedComponet=function(){this.node.asideRef.current.classList.remove("lock"),this.node.header.classList.remove("lock")},a.lockRelatedComponet=function(){var e,t=["--fade-in","--fade-out","--docking"].map((function(e){return"main-header"+e}));(e=this.node.header.classList).remove.apply(e,d(t)),this.node.header.classList.add("main-header--fade-out","lock"),this.node.asideRef.current.classList.add("lock")},a.triggerScrollTo=function(e,t){this.node.asideRef.current.classList.contains("lock")||(this.lockRelatedComponet(),this.setScrollTo(e,t))},a.setScrollTo=function(e,t){var n=document.getElementsByClassName("post__contents")[0].offsetTop+Math.round(this.node.headings[t].offsetTop),r=this.info.currTop,i=Math.round(r-n)/2,a=0,o=performance.now();window.requestAnimationFrame(function e(){var r=performance.now(),s=Math.round(r-o);if(o=r,(a+=Math.PI/(1e3/s))>=Math.PI)return this.releaseRelatedComponet(),this.info.step=t,void this.setState({step:this.info.step});window.scrollTo(0,i*Math.cos(a)+i+n),window.requestAnimationFrame(e.bind(this))}.bind(this))},a.handleHighlight=function(){for(var e=this.info,t=e.intervals,n=e.currTop,r=e.prevTop,i=e.step,a=e.revision,o=r<=n,s=n+(o?a:-1*a),l=function(e){return o?++e:--e},c=function(e){return o?e<t.length-1:0<e},d=i,u=i;c(u);u=l(u)){var f=t[u],p=t[u+1],h=t[0],m=t[t.length-1];if(s<h){this.info.step=0;break}if(h<=s&&s<f){this.info.step=u-1;break}if(h<=s&&f<s&&s<p){this.info.step=u;break}if(h<=s&&m<s){this.info.step=t.length-1;break}}this.state.step!==d&&(this.info.step=d,this.setState({step:d}))},a.bindScrollEvents=function(){this.setCurrentScrollState(),this.handleHighlight()},a.setCurrentScrollState=function(){var e=document.documentElement.scrollTop||document.scrollingElement.scrollTop;this.info.scrollTops.push(Math.round(e)),this.info.scrollTops.length>1&&(this.info.prevTop=this.info.scrollTops.shift()),this.info.currTop=this.info.scrollTops[0]},a.setTableContentsPos=function(){var e=this.node.article.offsetWidth;this.node.asideRef.current.style.transform="translateX("+e+"px)"},a.setIntervals=function(){var e=document.getElementsByClassName("post__contents")[0];this.info.intervals=[].slice.apply(this.node.headings).map((function(t){return t.offsetTop+e.offsetTop}))},a.getTableContents=function(){var e=[].slice.apply(this.node.contents.getElementsByClassName("markdown")[0].children),t=[];return e.forEach((function(e){/^H[1-6]$/.test(e.tagName)&&t.push(e)})),t},a.setComponentNode=function(){var e=document.getElementById("___gatsby"),t=this.node.asideRef.current;this.node.article=t.parentNode,this.node.asideNodes=[].slice.apply(t.getElementsByTagName("li")),this.node.header=e.getElementsByClassName("main-header")[0],this.node.contents=e.getElementsByClassName("post__contents")[0],this.node.headings=this.getTableContents()},a.componentDidMount=function(){this.setComponentNode(),this.setIntervals(),this.setTableContentsPos(),window.addEventListener("scroll",this.scrollThrottle,{passive:!0}),window.addEventListener("resize",this.setTableContentsPos,{passive:!0})},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollThrottle),window.removeEventListener("resize",this.setTableContentsPos)},a.render=function(){var e=this.state.step,t=this.props,n=t.name,r=t.headings;return Object(c.c)("div",{className:["toc",r.length?"":"toc--none"].join(" "),ref:this.node.asideRef},Object(c.c)("p",{className:"toc__title"},n),Object(c.c)("ul",{className:"toc__list"},Object(c.c)(p,{headings:r,step:e,scrollTo:this.triggerScrollTo})))},r}(r.Component),p=function(e){var t=e.headings,n=e.step,r=e.scrollTo;return t.map((function(e,t){var i=["toc__item","toc__item--h"+e.depth,t===n?"is-active":""];return Object(c.c)("li",{key:"toc-"+t,className:i.join(" "),onClick:function(e){return r(e,t)}},e.value)}))};f.defaultProps={step:0,name:"목차"};var h=f,m=n("TJpk"),g=n.n(m);var A=function(e){return Object(c.c)(g.a,{title:e.title,meta:[{name:"title",content:e.title+"| eunha's dev"},{name:"description",content:"은하의 개발 블로그입니다."},{property:"og:title",content:e.title},{property:"og:url",content:e.pathname?e.url+e.pathname:e.url},{property:"og:image",content:e.thumbnail&&e.thumbnail},{property:"og:image:secure_url",content:e.thumbnail&&e.thumbnail},{property:"og:description",content:"은하의 개발 블로그입니다."},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:"en"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:e.title},{name:"twitter:description",content:"은하의 개발 블로그입니다."},{name:"twitter:image",content:e.thumbnail&&e.thumbnail},{property:"og:type",content:"website"},{name:"robots",content:"index, follow"},{name:"twitter:creator",content:"~/eunha0ne"},{property:"og:site_name",content:"eunha's dev"}]},Object(c.c)("html",{lang:"ko"}))},b=n("/MKj");n("LnfM");function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={isNightMode:t.isNightMode},n.node={back:i.a.createRef()},n.info={},n.setTransition=n.setTransition.bind(v(n)),n.clearTransition=n.clearTransition.bind(v(n)),n.setToggleBack=n.setToggleBack.bind(v(n)),n.setToggleBackThrottle=Object(l.a)(n.setToggleBack,100),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.setToggleBack=function(){(document.documentElement.scrollTop||document.scrollingElement.scrollTop)>=this.info.back.height?this.clearTransition():this.setTransition()},a.clearTransition=function(){var e=this.node.themes,t=["enter","done"];e.forEach((function(e){var n;return(n=e.classList).remove.apply(n,t)}))},a.setTransition=function(){var e=this.state.isNightMode?"night":"day",t=this.node.back.current.getElementsByClassName(e)[0];t.classList.add("enter"),setTimeout((function(){t.classList.add("done")}),30)},a.setComponentNode=function(){var e=this.node.back.current;this.info.back={height:e.offsetHeight},this.node.themes=[e.getElementsByClassName("day")[0],e.getElementsByClassName("night")[0]]},a.componentDidMount=function(){this.setComponentNode(),this.setTransition(),window.addEventListener("scroll",this.setToggleBackThrottle,{passive:!0}),window.addEventListener("resize",this.setBackInfo,{passive:!0})},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.setToggleBackThrottle),window.removeEventListener("resize",this.setBackInfo)},a.getSnapshotBeforeUpdate=function(e,t){return e.isNightModeh!==this.props.isNightMode?e.isNightMode:null},a.componentDidUpdate=function(e,t,n){null!==n&&(this.clearTransition(),this.setTransition())},r.getDerivedStateFromProps=function(e,t){return t.isNightMode!==e.isNightMode?{isNightMode:e.isNightMode}:null},a.render=function(){return Object(c.c)("div",{ref:this.node.back,className:"header-back"},Object(c.c)("ul",{className:"day"},Object(c.c)("li",{className:"cactus"}),Object(c.c)("li",{className:"cloud c1"}),Object(c.c)("li",{className:"cloud c2"})),Object(c.c)("ul",{className:"night"},Object(c.c)("li",{className:"star s1"}),Object(c.c)("li",{className:"star s2"}),Object(c.c)("li",{className:"star s3"}),Object(c.c)("li",{className:"star s4"}),Object(c.c)("li",{className:"star s5"}),Object(c.c)("li",{className:"star s6"})))},r}(r.Component),w=Object(b.b)((function(e){return{isNightMode:e.theme.isNightMode}}),null)(y),O=(n("OG14"),n("yt8O"),n("RW0V"),Object(b.b)((function(e){return{isNightMode:e.theme.isNightMode}}),null)((function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){var n=t.current;if(n){var r,i,a={src:"https://utteranc.es/client.js",repo:"eunha0ne/blog-comments","issue-term":"pathname",theme:e.isNightMode?"github-dark":"github-light",async:!0,crossorigin:"anonymous"};r=Array.from(document.head.getElementsByTagName("style")),i=[],r.forEach((function(e){-1!==e.textContent.indexOf("utterances")&&i.push(e)})),i.forEach((function(e){e.parentNode.removeChild(e)}));var o=document.createElement("script");Object.keys(a).forEach((function(e){o.setAttribute(e,a[e])}));var s=new URLSearchParams(window.location.search);if(s.has("commenting")){var l=n.getBoundingClientRect().top+window.innerHeight;window.scroll(0,l)}s.set("commenting",!0);var c=window.location.pathname+"?"+s.toString();for(window.history.replaceState(null,"",c);n.firstChild;){var d=n.getElementsByClassName("utterances")[0];d&&n.removeChild(d)}n.appendChild(o),o.onload=function(){s.delete("commenting");var e=s.toString(),t=window.location.pathname+(e&&"?"+e);window.history.replaceState(null,"",t)}}})),Object(c.c)("div",{className:"post-comments",ref:t})}))),S=n("QP4I");n("AoQJ"),n("hL/g");n.d(t,"query",(function(){return E})),n.d(t,"default",(function(){return j}));var E="378509296";function j(e){var t=e.data,n=e.pageContext,r=n.next,i=n.prev,a=t.markdownRemark;return Object(c.c)(o.a,null,Object(c.c)(A,{title:a.frontmatter.title,description:t.markdownRemark.excerpt}),Object(c.c)("main",{css:S.b},Object(c.c)("article",{className:"post"},Object(c.c)("header",{className:"post__header"},Object(c.c)("h1",null,a.frontmatter.title),Object(c.c)("span",null,a.frontmatter.date),Object(c.c)(w,null)),Object(c.c)("section",{className:"post__contents"},Object(c.c)(h,{headings:a.headings}),a.frontmatter.tags&&Object(c.c)(T,{tags:a.frontmatter.tags}),Object(c.c)("div",{className:"markdown",dangerouslySetInnerHTML:{__html:a.html}})),Object(c.c)("section",{className:"post__footer"},Object(c.c)(k,{prev:i,next:r}),Object(c.c)(s.a,null),Object(c.c)(O,null)))))}var T=function(e){var t=e.tags;return Object(c.c)("div",{className:"inner-tags"},t.map((function(e,t){return Object(c.c)("a",{href:"/"+e,key:"post-tags-"+t},e)})))},k=function(e){var t=e.prev,n=e.next;return Object(c.c)("div",{className:"navi"},t&&Object(c.c)(a.Link,{to:t.node.fields.slug,className:"navi__prev"},Object(c.c)("span",null,"←"),Object(c.c)("p",null,t.node.frontmatter.title)),n&&Object(c.c)(a.Link,{to:n.node.fields.slug,className:"navi__next"},Object(c.c)("p",null,n.node.frontmatter.title),Object(c.c)("span",null,"→")))}},"9eSz":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("INYr"),n("0mN4");var r=n("5NKs");t.__esModule=!0,t.default=void 0;var i,a=r(n("v06X")),o=r(n("XEEL")),s=r(n("uDP2")),l=r(n("j8BX")),c=r(n("q1tI")),d=r(n("17x9")),u=function(e){var t=(0,l.default)({},e),n=t.resolutions,r=t.sizes,i=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,n=e.fixed;return h(t||n).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),g=function(e){var t=u(e),n=p(t);return m[n]||!1},A="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:a}),c.default.createElement("source",{media:i,srcSet:n,sizes:a}))}))}function O(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function S(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function j(e,t){var n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:n)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var T=function(e,t){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return n&&(n.observe(e),y.set(e,t)),function(){n.unobserve(e),y.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+c+o+s+n+r+t+a+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,n=e.imageVariants,r=e.generateSources,i=e.spreadProps,a=c.default.createElement(C,(0,l.default)({src:t},i));return n.length>1?c.default.createElement("picture",null,r(n),a):a},C=c.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,i=e.src,a=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:n,srcSet:r,src:i},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=b&&g(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!A&&v&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||b&&(A||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,a.default)(n)),n.handleRef=n.handleRef.bind((0,a.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=T(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=p(t),m[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,r=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,g=e.fixed,A=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,y=e.itemProp,O=e.loading,j=e.draggable,T=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:T?1:0,transition:R?"opacity "+b+"ms":"none"},s),I="boolean"==typeof A?"lightgray":A,_={transitionDelay:b+"ms"},L=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&_,{},s,{},f),P={title:t,alt:this.state.isVisible?"":n,style:L,className:p,itemProp:y};if(m){var B=m,M=h(m);return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),I&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&_)}),M.base64&&c.default.createElement(N,{src:M.base64,spreadProps:P,imageVariants:B,generateSources:E}),M.tracedSVG&&c.default.createElement(N,{src:M.tracedSVG,spreadProps:P,imageVariants:B,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,w(B),c.default.createElement(C,{alt:n,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:O,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:n,title:t,loading:O},M,{imageVariants:B}))}}))}if(g){var Q=g,z=h(g),D=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},a);return"inherit"===a.display&&delete D.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},I&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},R&&_)}),z.base64&&c.default.createElement(N,{src:z.base64,spreadProps:P,imageVariants:Q,generateSources:E}),z.tracedSVG&&c.default.createElement(N,{src:z.tracedSVG,spreadProps:P,imageVariants:Q,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,w(Q),c.default.createElement(C,{alt:n,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:O,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:n,title:t,loading:O},z,{imageVariants:Q}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),I=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:x,sizes:I,fixed:d.default.oneOfType([x,d.default.arrayOf(x)]),fluid:d.default.oneOfType([I,d.default.arrayOf(I)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var _=R;t.default=_},D5tN:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAHLvuwNtSkJzEvQZf/EABoQAAICAwAAAAAAAAAAAAAAAAEDAAIQEiH/2gAIAQEAAQUCak2alettRGdAxbmBP//EABwRAAEDBQAAAAAAAAAAAAAAAAABAgMQEyEyUf/aAAgBAwEBPwF+uC5J0Wn/xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIQETH/2gAIAQIBAT8BXTIir//EABsQAQABBQEAAAAAAAAAAAAAAAEAAhARIEEh/9oACAEBAAY/AlqfOReWyMNf/8QAGBABAQEBAQAAAAAAAAAAAAAAAQARITH/2gAIAQEAAT8h9njAQlezm2l1dRcmoRJYAny8X//aAAwDAQACAAMAAAAQ599+/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEhMRH/2gAIAQMBAT8QV3s5QbGkf//EABkRAQACAwAAAAAAAAAAAAAAAAABMREhYf/aAAgBAgEBPxCeNnJVFP/EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFBMWFxgeH/2gAIAQEAAT8QrOOoZoD7ElsQOQ23F15PcqF8l68RXt87GX4QO4+IhGrVtTcwoT//2Q==","aspectRatio":1,"src":"/static/61bb9c5d4ef1c76f946b8124ca40c4af/58d6d/summer.jpg","srcSet":"/static/61bb9c5d4ef1c76f946b8124ca40c4af/c6f75/summer.jpg 75w,\\n/static/61bb9c5d4ef1c76f946b8124ca40c4af/421ae/summer.jpg 150w,\\n/static/61bb9c5d4ef1c76f946b8124ca40c4af/58d6d/summer.jpg 300w,\\n/static/61bb9c5d4ef1c76f946b8124ca40c4af/1a903/summer.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},INYr:function(e,t,n){"use strict";var r=n("XKFU"),i=n("CkkT")(6),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(a)},OGtf:function(e,t,n){var r=n("XKFU"),i=n("eeVq"),a=n("vhPU"),o=/"/g,s=function(e,t,n,r){var i=String(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},QP4I:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n("wTIg"),i=n("qKvR"),a="\nmargin: 0 auto;\npadding: 5rem 1.25rem 0;\ndisplay: flex;\nflex-direction: column;\nmax-width: 740px;\nwidth: 100%;\n",o=Object(i.b)(a," @media screen and (max-width:640px){}"),s={name:"1gvc4a2",styles:"font-size:0;visibility:hidden;"},l=Object(r.a)("main",{target:"e17amr2e0"})(a," ",(function(e){return e.paddingTop&&"padding-top: "+e.paddingTop}))},wTIg:function(e,t,n){"use strict";n("f3/d"),n("HAE/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("0jh0"),i=n.n(r),a=n("q1tI"),o=n("4qRI"),s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=Object(o.a)((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=n("qKvR"),d=n("SIPS"),u=n("MiSq"),f=l,p=function(e){return"theme"!==e&&"innerRef"!==e},h=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?f:p};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function e(t,n){var r,i,o;void 0!==n&&(r=n.label,o=n.target,i=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var s=t.__emotion_real===t,l=s&&t.__emotion_base||t;"function"!=typeof i&&s&&(i=t.__emotion_forwardProp);var f=i||h(l),p=!f("as");return function(){var m=arguments,A=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&A.push("label:"+r+";"),null==m[0]||void 0===m[0].raw)A.push.apply(A,m);else{0,A.push(m[0][0]);for(var b=m.length,v=1;v<b;v++)A.push(m[v],m[0][v])}var y=Object(c.d)((function(e,t,n){return Object(a.createElement)(c.a.Consumer,null,(function(r){var s=p&&e.as||l,c="",m=[],g=e;if(null==e.theme){for(var b in g={},e)g[b]=e[b];g.theme=r}"string"==typeof e.className?c=Object(d.a)(t.registered,m,e.className):null!=e.className&&(c=e.className+" ");var v=Object(u.a)(A.concat(m),t.registered,g);Object(d.b)(t,v,"string"==typeof s);c+=t.key+"-"+v.name,void 0!==o&&(c+=" "+o);var y=p&&void 0===i?h(s):f,w={};for(var O in e)p&&"as"===O||y(O)&&(w[O]=e[O]);return w.className=c,w.ref=n||e.innerRef,Object(a.createElement)(s,w)}))}));return y.displayName=void 0!==r?r:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=l,y.__emotion_styles=A,y.__emotion_forwardProp=i,Object.defineProperty(y,"toString",{value:function(){return"."+o}}),y.withComponent=function(t,r){return e(t,void 0!==r?g({},n||{},{},r):n).apply(void 0,A)},y}}}}]);
//# sourceMappingURL=component---src-templates-post-js-b0eb8409fedc5c799b8a.js.map