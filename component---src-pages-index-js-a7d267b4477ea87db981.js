(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"1cLh":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r("f3/d");var a=r("wTIg"),n=r("D5tN"),i=(r("q1tI"),r("9eSz")),o=r.n(i),s=(r("5InD"),r("qKvR")),c=Object(a.a)("div",{target:"e1horsme0"})({name:"17buc86",styles:"display:flex;flex-direction:row;flex-wrap:wrap;width:100%;height:auto;font-size:0;border-radius:0.5rem;overflow:hidden;box-sizing:border-box;border:1px solid var(--border-main);background-color:var(--bg-none);> *{box-sizing:border-box;}"}),d=function(e){var t=e.name,r=e.about,a=e.interest,i=n.data;return Object(s.c)(c,null,Object(s.c)("div",{className:"namecard__left"},Object(s.c)(o.a,{fluid:i.placeholderImage.childImageSharp.fluid})),Object(s.c)("div",{className:"namecard__right"},Object(s.c)("p",{className:"name"},t),Object(s.c)("p",{className:"about"},r),Object(s.c)("ul",{className:"interest"},a.map((function(e,t){return Object(s.c)("li",{key:"interest-"+t},e)})))))};d.defaultProps={name:"Kim Gyu-sik (eunha0ne)",about:"자바스크립트 언어를 사용하는 개발자입니다. 아기자기한 UI 기능을 구현하는 것을 좋아하며 노드 환경에서 동작하는 컴포넌트 빌딩 라이브러리에 관심이 있습니다.",interest:["미드","요리","피아노","PS4"]}},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("5NKs");t.__esModule=!0,t.default=void 0;var n,i=a(r("v06X")),o=a(r("XEEL")),s=a(r("uDP2")),c=a(r("j8BX")),d=a(r("q1tI")),l=a(r("17x9")),u=function(e){var t=(0,c.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return g(t||r).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),A=function(e){var t=u(e),r=p(t);return m[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),d.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function O(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function x(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function E(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),v.set(e,t)),function(){r.unobserve(e),v.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+d+o+s+r+a+t+i+n+c+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,n=e.spreadProps,i=d.default.createElement(R,(0,c.default)({src:t},n));return r.length>1?d.default.createElement("picture",null,a(r),i):i},R=d.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,l=e.onError,u=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,c.default)({sizes:r,srcSet:a,src:n},p,{onLoad:o,onError:l,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var N=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&A(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!h&&y&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||b&&(h||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=p(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,m=e.fluid,A=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,O=e.loading,E=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,c.default)({opacity:j?1:0,transition:N?"opacity "+b+"ms":"none"},s),T="boolean"==typeof h?"lightgray":h,L={transitionDelay:b+"ms"},C=(0,c.default)({opacity:this.state.imgLoaded?0:1},N&&L,{},s,{},f),B={title:t,alt:this.state.isVisible?"":r,style:C,className:p,itemProp:v};if(m){var Q=m,_=g(m);return d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),T&&d.default.createElement(y,{title:t,style:(0,c.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&L)}),_.base64&&d.default.createElement(I,{src:_.base64,spreadProps:B,imageVariants:Q,generateSources:x}),_.tracedSVG&&d.default.createElement(I,{src:_.tracedSVG,spreadProps:B,imageVariants:Q,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,w(Q),d.default.createElement(R,{alt:r,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:O,draggable:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:r,title:t,loading:O},_,{imageVariants:Q}))}}))}if(A){var z=A,D=g(A),M=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},i);return"inherit"===i.display&&delete M.display,d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},T&&d.default.createElement(y,{title:t,style:(0,c.default)({backgroundColor:T,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},N&&L)}),D.base64&&d.default.createElement(I,{src:D.base64,spreadProps:B,imageVariants:z,generateSources:x}),D.tracedSVG&&d.default.createElement(I,{src:D.tracedSVG,spreadProps:B,imageVariants:z,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,w(z),d.default.createElement(R,{alt:r,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:O,draggable:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:r,title:t,loading:O},D,{imageVariants:z}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),T=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});N.propTypes={resolutions:P,sizes:T,fixed:l.default.oneOfType([P,l.default.arrayOf(P)]),fluid:l.default.oneOfType([T,l.default.arrayOf(T)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var L=N;t.default=L},D5tN:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAHLvuwNtSkJzEvQZf/EABoQAAICAwAAAAAAAAAAAAAAAAEDAAIQEiH/2gAIAQEAAQUCak2alettRGdAxbmBP//EABwRAAEDBQAAAAAAAAAAAAAAAAABAgMQEyEyUf/aAAgBAwEBPwF+uC5J0Wn/xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIQETH/2gAIAQIBAT8BXTIir//EABsQAQABBQEAAAAAAAAAAAAAAAEAAhARIEEh/9oACAEBAAY/AlqfOReWyMNf/8QAGBABAQEBAQAAAAAAAAAAAAAAAQARITH/2gAIAQEAAT8h9njAQlezm2l1dRcmoRJYAny8X//aAAwDAQACAAMAAAAQ599+/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEhMRH/2gAIAQMBAT8QV3s5QbGkf//EABkRAQACAwAAAAAAAAAAAAAAAAABMREhYf/aAAgBAgEBPxCeNnJVFP/EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFBMWFxgeH/2gAIAQEAAT8QrOOoZoD7ElsQOQ23F15PcqF8l68RXt87GX4QO4+IhGrVtTcwoT//2Q==","aspectRatio":1,"src":"/static/61bb9c5d4ef1c76f946b8124ca40c4af/58d6d/summer.jpg","srcSet":"/static/61bb9c5d4ef1c76f946b8124ca40c4af/c6f75/summer.jpg 75w,\\n/static/61bb9c5d4ef1c76f946b8124ca40c4af/421ae/summer.jpg 150w,\\n/static/61bb9c5d4ef1c76f946b8124ca40c4af/58d6d/summer.jpg 300w,\\n/static/61bb9c5d4ef1c76f946b8124ca40c4af/1a903/summer.jpg 400w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},INYr:function(e,t,r){"use strict";var a=r("XKFU"),n=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},LbSH:function(e,t,r){"use strict";r("q1tI");var a=r("Wbzz"),n=(r("wOlz"),r("qKvR")),i=function(e){var t=e.props;return Object(n.c)("div",{className:"tags"},t.frontmatter.tags&&t.frontmatter.tags.map((function(e,t){return Object(n.c)(a.Link,{className:"tags__item",key:"tag-"+t,to:"/"+e},e)})))};r("qzqO");r.d(t,"a",(function(){return o}));var o=function(e){var t=e.data;return Object(n.c)("section",{className:"index-contents"},t.allMarkdownRemark.edges.map((function(e,t){var r=e.node;return Object(n.c)("article",{key:"node-"+t,className:"index-post"},Object(n.c)("div",{className:"index-post__head"}),Object(n.c)("div",{className:"index-post__body"},Object(n.c)(a.Link,{to:r.fields.slug},Object(n.c)("h3",null,Object(n.c)("span",null,r.frontmatter.title)),Object(n.c)("span",null,r.frontmatter.date),Object(n.c)("hr",null),Object(n.c)("p",null,r.excerpt)),Object(n.c)(i,{props:r})))})))}},OGtf:function(e,t,r){var a=r("XKFU"),n=r("eeVq"),i=r("vhPU"),o=/"/g,s=function(e,t,r,a){var n=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),a(a.P+a.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},QP4I:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return c}));var a=r("wTIg"),n=r("qKvR"),i="\nmargin: 0 auto;\npadding: 5rem 1.25rem 0;\ndisplay: flex;\nflex-direction: column;\nmax-width: 740px;\nwidth: 100%;\n",o=Object(n.b)(i," @media screen and (max-width:640px){}"),s={name:"1gvc4a2",styles:"font-size:0;visibility:hidden;"},c=Object(a.a)("main",{target:"e17amr2e0"})(i," ",(function(e){return e.paddingTop&&"padding-top: "+e.paddingTop}))},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var a=r("sVb5"),n=(r("q1tI"),r("y459"),r("Zttt")),i=r("wtQ5"),o=r("1cLh"),s=r("LbSH"),c=r("QP4I"),d=r("qKvR");function l(){var e=a.data;return Object(d.c)(n.a,null,Object(d.c)(i.a,{title:"Home",keywords:["gatsby","application","react"]}),Object(d.c)(c.a,{paddingTop:"20rem"},Object(d.c)("h1",{css:c.c},"은하의 개발 블로그입니다."),Object(d.c)(o.a,null),Object(d.c)(s.a,{data:e})))}},"ff/Y":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"eunha\'s dev","description":"은하의 개발 블로그입니다.","author":"@eunha0ne"}}}}')},sVb5:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"totalCount":13,"edges":[{"node":{"id":"1449647f-c70a-515e-b412-d1a27ce7adfb","frontmatter":{"title":"타이탄의 도구들(1)","tags":["팀 페리스","독서","요약","2020"],"date":"2020년 03월 07일"},"fields":{"slug":"/2020/03/book-summary/"},"excerpt":"세계 최고들이 매일 실천하는 것들 담대한 목표를 돕는 디테일들 \\"상상도 못할 기회는 아주 작은 곳에서 발견된다. 삶의 유일한 배움은 마이크로(micro)에서 매…"}},{"node":{"id":"9769b399-4f4c-5fe2-94de-086a32d7174e","frontmatter":{"title":"GRIT, 그릿","tags":["앤절라 더크워스","독서","요약","2020"],"date":"2020년 02월 27일"},"fields":{"slug":"/2020/02/27/book-summary/"},"excerpt":"그릿 다시 읽기, (중간부터) 낙관적 사고방식은 어떻게 만들어지는가 (...) 어려움에 부딛친 후에 더 노력했다. 실패는 자신에게 성공할 능력이 없다는 증거가 …"}},{"node":{"id":"5ee8c244-0b98-591c-93da-1e5372d71fdb","frontmatter":{"title":"악당은 아니지만 지구정복","tags":["안시내","독서","요약","2020"],"date":"2020년 02월 17일"},"fields":{"slug":"/2020/02/17/book-summary/"},"excerpt":"여행은 힘들고, 나는 지쳤다. 그러나 참 이상했다. 어느새 더 이상 나를 숨기려 하지 않았다. 내가 만난 세상에서 나는 너무나 여리지만 단단하고 당당하며 가슴 …"}},{"node":{"id":"d3a9e773-1903-5cce-bb21-e873b8f9d963","frontmatter":{"title":"혁신의 파도에 올라타기 위해 반드시 찾아야 하는 것","tags":["박정준","강연","요약","2020"],"date":"2020년 01월 28일"},"fields":{"slug":"/2020/01/seminar-summary/"},"excerpt":"\\"10년 뒤 세상은 어떻게 바뀔까요? 그리고, 아마존은 무엇을 하고 있을까요?\\" \\"아마존이 하고 있을 일을 설명하는 단어는 오늘날에는 존재하지 않습니다. 왜냐하…"}},{"node":{"id":"30385c11-b9b9-5386-a976-24c677e4d503","frontmatter":{"title":"여행의 이유","tags":["김영하","독서","요약","2020"],"date":"2020년 01월 27일"},"fields":{"slug":"/2020/01/27/book-summary/"},"excerpt":"(...) 인생과 여행은 그래서 신비롭다. 설령 우리가 원하는 것을 얻지 못하고 에상치 못한 실패와 시련, 좌절을 겪는다 해도 우리가 그 안에서 얼마든지 기쁨을…"}},{"node":{"id":"baf24912-dfa9-50f8-b759-29f765d657e4","frontmatter":{"title":"2019 상반기 회고","tags":["회고","기록","2019"],"date":"2019년 07월 21일"},"fields":{"slug":"/2019/07/21/first-half-review-of-2019/"},"excerpt":"4월부터 계약 만료 시점인 7월을 앞두고, 이직 준비를 했다. 미리 준비했음에도 기말고사 시즌과 겹쳐서 무척이나 부산했다. 중간에 추천을 받아 면접 볼 기회가 …"}},{"node":{"id":"46b9a53a-31e7-579a-99bb-54704d2ae0ef","frontmatter":{"title":"노윤미 엔지니어님 슬라이드 요약","tags":["강연","요약","2019"],"date":"2019년 07월 15일"},"fields":{"slug":"/2019/07/15/summary/"},"excerpt":"구글 코리아, 노윤미 엔지니어님의 발표 자료를 읽으며 공감되고, 다시 돌아보고 싶은 내용이 있어서 전철에서 간략히 정리한 내용입니다. 원문은 아래에서 확인하실 …"}},{"node":{"id":"c017240b-bb63-5a30-a084-c5fc67b3cbc7","frontmatter":{"title":"책 잘 읽는 방법","tags":["독서","방법","요약","2019"],"date":"2019년 07월 04일"},"fields":{"slug":"/2019/07/4/note/"},"excerpt":"김봉진 대표님의 강연을 듣고, 개인 참고를 위해서 정리한 내용입니다. 강연 요약 책에 대한 고정관념을 버리자. 책은 귀중하고, 소중하다는 생각이 완독에 대한 스…"}},{"node":{"id":"34fd4316-344d-5905-a17d-eba70d8512ae","frontmatter":{"title":"Event Delegation(이벤트 위임)","tags":["TIL","2019"],"date":"2019년 07월 03일"},"fields":{"slug":"/2019/07/3/event-delegation/"},"excerpt":"리스트의 상위 요소에 이벤트 핸들링을 위임해서 하위 항목에서 직접 이벤트를 추가하지 않아도 돼서 메모리를 절약할 수 있다. 또한 이러한 디자인 패턴은 하위 항목…"}},{"node":{"id":"f22fa1b6-9736-5a08-b1f9-c941632b56f7","frontmatter":{"title":"Array.from()","tags":["TIL","2019"],"date":"2019년 06월 28일"},"fields":{"slug":"/2019/06/28/TIL-array-from/"},"excerpt":"Array.from() 메서드는 Array-like(유사 배열) 또는 Iterable(이터러블: 순회 가능한) 객체를 얇게 복사해서 새로운 배열로 반환한다. (…"}},{"node":{"id":"7dac9a26-e2c4-5c7b-bd45-3894fc864544","frontmatter":{"title":"GDG FRONT-ENDGAME 후기","tags":["컨퍼런스","후기","2019"],"date":"2019년 06월 23일"},"fields":{"slug":"/2019/06/23/GDG-FRONT-ENDGAME/"},"excerpt":"이번 참석에서 뜻깊은 점이 두 가지가 있다면 하나는 평소에 선망하던 개발자 분들을 만나볼 수 있는 자리였다는 점이고 다른 하나는 삼성역 3번 출구를 조금 지나서…"}},{"node":{"id":"050b2fc4-9ae0-51d2-ba81-c76348f23854","frontmatter":{"title":"무엇을 했나","tags":["회고","기록","2019"],"date":"2019년 05월 19일"},"fields":{"slug":"/2019/05/19/what-i-did-in-2019/"},"excerpt":"개발자로 성장하면서 있었던 지난 2년의 기록을 작성하고 나니, 무엇을 했는지 또 앞으로 어떻게 하는 것이 좋을지 고민이 남아있어서. 따로 정리해 보기로 했다. …"}},{"node":{"id":"91ae8a53-4189-5f4f-9db0-1c694674875d","frontmatter":{"title":"개발자로 성장하기까지의 지난 2년의 기록","tags":["회고","기록","2019"],"date":"2019년 05월 16일"},"fields":{"slug":"/2019/05/16/retrospect-over-two-past-years/"},"excerpt":"글을 시작하기까지 무슨 말을 해야 할지 그리고 할 수 있을지 많은 고민이 있었다. 다른 개발자들의 성장 후기나 회고를 읽고 있으면 내 자신이 작게만 느껴졌기 때…"}}]}}}')},wTIg:function(e,t,r){"use strict";r("f3/d"),r("HAE/"),r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var a=r("0jh0"),n=r.n(a),i=r("q1tI"),o=r("4qRI"),s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c=Object(o.a)((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),d=r("qKvR"),l=r("SIPS"),u=r("MiSq"),f=c,p=function(e){return"theme"!==e&&"innerRef"!==e},g=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?f:p};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function e(t,r){var a,n,o;void 0!==r&&(a=r.label,o=r.target,n=t.__emotion_forwardProp&&r.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var s=t.__emotion_real===t,c=s&&t.__emotion_base||t;"function"!=typeof n&&s&&(n=t.__emotion_forwardProp);var f=n||g(c),p=!f("as");return function(){var m=arguments,h=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&h.push("label:"+a+";"),null==m[0]||void 0===m[0].raw)h.push.apply(h,m);else{0,h.push(m[0][0]);for(var b=m.length,y=1;y<b;y++)h.push(m[y],m[0][y])}var v=Object(d.d)((function(e,t,r){return Object(i.createElement)(d.a.Consumer,null,(function(a){var s=p&&e.as||c,d="",m=[],A=e;if(null==e.theme){for(var b in A={},e)A[b]=e[b];A.theme=a}"string"==typeof e.className?d=Object(l.a)(t.registered,m,e.className):null!=e.className&&(d=e.className+" ");var y=Object(u.a)(h.concat(m),t.registered,A);Object(l.b)(t,y,"string"==typeof s);d+=t.key+"-"+y.name,void 0!==o&&(d+=" "+o);var v=p&&void 0===n?g(s):f,w={};for(var O in e)p&&"as"===O||v(O)&&(w[O]=e[O]);return w.className=d,w.ref=r||e.innerRef,Object(i.createElement)(s,w)}))}));return v.displayName=void 0!==a?a:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=c,v.__emotion_styles=h,v.__emotion_forwardProp=n,Object.defineProperty(v,"toString",{value:function(){return"."+o}}),v.withComponent=function(t,a){return e(t,void 0!==a?A({},r||{},{},a):r).apply(void 0,h)},v}}},wtQ5:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r("ff/Y"),n=(r("q1tI"),r("TJpk")),i=r.n(n),o=r("Wbzz"),s=r("qKvR");function c(e){var t=e.description,r=(e.lang,e.meta),n=e.keywords,c=e.title;return Object(s.c)(o.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return Object(s.c)(i.a,{title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(r)},Object(s.c)("html",{lang:"ko"}))},data:a})}c.defaultProps={lang:"ko",meta:[],keywords:[]};var d="1025518380"},y459:function(e,t,r){!function(t,r){"use strict";"object"==typeof e.exports?e.exports=t.document?r(t):function(e){if(!e.document)throw new Error("Export module requires a window");return r(e)}:r(t)}("undefined"!=typeof window?window:this,(function(e){if("performance"in e==0&&(e.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in e.performance==0){var t=Date.now();performance.timing&&performance.timing.navigationStart&&(t=performance.timing.navigationStart),e.performance.now=function(){return Date.now()-t}}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-a7d267b4477ea87db981.js.map