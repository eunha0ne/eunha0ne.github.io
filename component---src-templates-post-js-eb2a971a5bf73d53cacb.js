(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{161:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),a=n(163),i=n(166),r=n(37),l=n.n(r),c=n(8),d=n.n(c),m=n(164),u=(n(184),function(e){function t(t){var n;return(n=e.call(this,t)||this).topButton=s.a.createRef(),n.scrollUp=n.scrollUp.bind(l()(n)),n.toggleClass=n.toggleClass.bind(l()(n)),n.toggleClassThrottle=Object(m.a)(n.toggleClass,200),n}d()(t,e);var n=t.prototype;return n.toggleClass=function(e){var t=this.topButton.current,n=document.documentElement.scrollTop||document.scrollingElement.scrollTop;t.classList.contains("clicked")&&e.preventDefault(),n<1e3&&t.classList.contains("fade-in")?t.classList.remove("fade-in"):1e3<n&&!t.classList.contains("fade-in")&&t.classList.add("fade-in")},n.scrollUp=function(){var e=this.topButton.current;if(!e.classList.contains("clicked")){var t=1e3,n=window.scrollY/2,o=0,s=performance.now();e.classList.add("clicked"),window.requestAnimationFrame(function a(){var i=performance.now(),r=Math.round(i-s);if(s=i,(o+=Math.PI/(t/r))>=Math.PI)return clearTimeout(this.timeoutEvent),this.timeoutEvent=function(){e.classList.remove("clicked")},void setTimeout(this.timeoutEvent,300);var l=Math.round(n*Math.cos(o)+n);window.scrollTo(0,l),window.requestAnimationFrame(a.bind(this))}.bind(this))}},n.componentDidMount=function(){window.addEventListener("scroll",this.toggleClassThrottle,{passive:!0}),this.topButton.current.addEventListener("click",this.scrollUp)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.toggleClassThrottle),this.topButton.current.removeEventListener("click",this.scrollUp)},n.render=function(){return s.a.createElement("div",{ref:this.topButton,className:"top-button"},s.a.createElement("span",null,"↑"))},t}(o.Component)),h=(n(179),n(1)),p=n.n(h),f=(n(185),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={step:n.props.step},n.node={asideRef:s.a.createRef(),asideNodes:null,article:null,headings:null,header:null},n.info={intervals:[],scrollTops:[],currTop:0,prevTop:0,revision:100,step:0},n.getTableContents=n.getTableContents.bind(l()(n)),n.setIntervals=n.setIntervals.bind(l()(n)),n.setCurrentScrollState=n.setCurrentScrollState.bind(l()(n)),n.setComponentNode=n.setComponentNode.bind(l()(n)),n.setTableContentsPos=n.setTableContentsPos.bind(l()(n)),n.handleHighlight=n.handleHighlight.bind(l()(n)),n.bindScrollEvents=n.bindScrollEvents.bind(l()(n)),n.scrollThrottle=Object(m.a)(n.bindScrollEvents,100),n.triggerScrollTo=n.triggerScrollTo.bind(l()(n)),n.setScrollTo=n.setScrollTo.bind(l()(n)),n.lockRelatedComponet=n.lockRelatedComponet.bind(l()(n)),n.releaseRelatedComponet=n.releaseRelatedComponet.bind(l()(n)),n}d()(t,e);var n=t.prototype;return n.releaseRelatedComponet=function(){this.node.asideRef.current.classList.remove("lock"),this.node.header.classList.remove("lock")},n.lockRelatedComponet=function(){var e,t=["--fade-in","--fade-out","--docking"].map(function(e){return"main-header"+e});(e=this.node.header.classList).remove.apply(e,t),this.node.header.classList.add("main-header--fade-out","lock"),this.node.asideRef.current.classList.add("lock")},n.triggerScrollTo=function(e,t){this.node.asideRef.current.classList.contains("lock")||(this.lockRelatedComponet(),this.setScrollTo(e,t))},n.setScrollTo=function(e,t){var n=document.getElementsByClassName("post__contents")[0].offsetTop+Math.round(this.node.headings[t].offsetTop),o=this.info.currTop,s=Math.round(o-n)/2,a=1e3,i=0,r=performance.now();window.requestAnimationFrame(function e(){var o=performance.now();var l=Math.round(o-r);r=o;i+=Math.PI/(a/l);if(i>=Math.PI)return this.releaseRelatedComponet(),this.info.step=t,void this.setState({step:this.info.step});window.scrollTo(0,s*Math.cos(i)+s+n);window.requestAnimationFrame(e.bind(this))}.bind(this))},n.handleHighlight=function(){for(var e=this.info,t=e.intervals,n=e.currTop,o=e.prevTop,s=e.step,a=e.revision,i=o<=n,r=n+(i?a:-1*a),l=function(e){return i?++e:--e},c=function(e){return i?e<t.length-1:0<e},d=s,m=s;c(m);m=l(m)){var u=t[m],h=t[m+1],p=t[0],f=t[t.length-1];if(r<p){this.info.step=0;break}if(p<=r&&r<u){this.info.step=m-1;break}if(p<=r&&u<r&&r<h){this.info.step=m;break}if(p<=r&&f<r){this.info.step=t.length-1;break}}this.state.step!==d&&(this.info.step=d,this.setState({step:d}))},n.bindScrollEvents=function(){this.setCurrentScrollState(),this.handleHighlight()},n.setCurrentScrollState=function(){var e=document.documentElement.scrollTop||document.scrollingElement.scrollTop;this.info.scrollTops.push(Math.round(e)),this.info.scrollTops.length>1&&(this.info.prevTop=this.info.scrollTops.shift()),this.info.currTop=this.info.scrollTops[0]},n.setTableContentsPos=function(){var e=this.node.article.offsetWidth;this.node.asideRef.current.style.transform="translateX("+e+"px)"},n.setIntervals=function(){var e=document.getElementsByClassName("post__contents")[0];this.info.intervals=[].slice.apply(this.node.headings).map(function(t){return t.offsetTop+e.offsetTop})},n.getTableContents=function(){var e=[].slice.apply(this.node.contents.getElementsByClassName("markdown")[0].children),t=[];return e.forEach(function(e){/^H[1-6]$/.test(e.tagName)&&t.push(e)}),t},n.setComponentNode=function(){var e=document.getElementById("___gatsby"),t=this.node.asideRef.current;this.node.article=t.parentNode,this.node.asideNodes=[].slice.apply(t.getElementsByTagName("li")),this.node.header=e.getElementsByClassName("main-header")[0],this.node.contents=e.getElementsByClassName("post__contents")[0],this.node.headings=this.getTableContents()},n.componentDidMount=function(){this.setComponentNode(),this.setIntervals(),this.setTableContentsPos(),window.addEventListener("scroll",this.scrollThrottle,{passive:!0}),window.addEventListener("resize",this.setTableContentsPos,{passive:!0})},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollThrottle),window.removeEventListener("resize",this.setTableContentsPos)},n.render=function(){var e=this.state.step,t=this.props,n=t.name,o=t.headings;return s.a.createElement("div",{className:"toc",ref:this.node.asideRef},s.a.createElement("p",{className:"toc__title"},n),s.a.createElement("ul",{className:"toc__list"},s.a.createElement(g,{headings:o,step:e,scrollTo:this.triggerScrollTo})))},t}(o.Component)),g=function(e){var t=e.headings,n=e.step,o=e.scrollTo;return t.map(function(e,t){var a=["toc__item","h"+e.depth,t===n?"on":""];return s.a.createElement("li",{key:"toc-"+t,className:a.join(" "),onClick:function(e){return o(e,t)}},e.value)})};f.defaultProps={step:0,name:"목차"},f.propTypes={step:p.a.number.isRequired,name:p.a.string.isRequired};var v=f,E=n(174),b=n.n(E);var T=function(e){return s.a.createElement(b.a,{title:e.title,meta:[{name:"title",content:e.title+"| eunha's dev"},{name:"description",content:"은하의 개발 블로그입니다."},{property:"og:title",content:e.title},{property:"og:url",content:e.pathname?e.url+e.pathname:e.url},{property:"og:image",content:e.thumbnail&&e.thumbnail},{property:"og:image:secure_url",content:e.thumbnail&&e.thumbnail},{property:"og:description",content:"은하의 개발 블로그입니다."},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:"en"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:e.title},{name:"twitter:description",content:"은하의 개발 블로그입니다."},{name:"twitter:image",content:e.thumbnail&&e.thumbnail},{property:"og:type",content:"website"},{name:"robots",content:"index, follow"},{name:"twitter:creator",content:"@eunha0ne"},{property:"og:site_name",content:"eunha's dev"}]},s.a.createElement("html",{lang:"en"}))},w=n(58),N=(n(193),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isNightMode:n.props.isNightMode},n.node={back:s.a.createRef()},n.info={},n.setTransition=n.setTransition.bind(l()(n)),n.clearTransition=n.clearTransition.bind(l()(n)),n.setToggleBack=n.setToggleBack.bind(l()(n)),n.setToggleBackThrottle=Object(m.a)(n.setToggleBack,100),n}d()(t,e);var n=t.prototype;return n.setToggleBack=function(){(document.documentElement.scrollTop||document.scrollingElement.scrollTop)>=this.info.back.height?this.clearTransition():this.setTransition()},n.clearTransition=function(){var e=this.node.themes,t=["enter","done"];e.forEach(function(e){var n;return(n=e.classList).remove.apply(n,t)})},n.setTransition=function(){var e=this.state.isNightMode?"night":"day",t=this.node.back.current.getElementsByClassName(e)[0];t.classList.add("enter"),setTimeout(function(){t.classList.add("done")},30)},n.setComponentNode=function(){var e=this.node.back.current;this.info.back={height:e.offsetHeight},this.node.themes=[e.getElementsByClassName("day")[0],e.getElementsByClassName("night")[0]]},n.componentDidMount=function(){this.setComponentNode(),this.setTransition(),window.addEventListener("scroll",this.setToggleBackThrottle,{passive:!0}),window.addEventListener("resize",this.setBackInfo,{passive:!0})},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.setToggleBackThrottle),window.removeEventListener("resize",this.setBackInfo)},n.getSnapshotBeforeUpdate=function(e,t){return e.isNightModeh!==this.props.isNightMode?e.isNightMode:null},n.componentDidUpdate=function(e,t,n){null!==n&&(this.clearTransition(),this.setTransition())},t.getDerivedStateFromProps=function(e,t){return t.isNightMode!==e.isNightMode?{isNightMode:e.isNightMode}:null},n.render=function(){return s.a.createElement("div",{ref:this.node.back,className:"header-back"},s.a.createElement("ul",{className:"day"},s.a.createElement("li",{className:"cactus"}),s.a.createElement("li",{className:"cloud c1"}),s.a.createElement("li",{className:"cloud c2"})),s.a.createElement("ul",{className:"night"},s.a.createElement("li",{className:"star s1"}),s.a.createElement("li",{className:"star s2"}),s.a.createElement("li",{className:"star s3"}),s.a.createElement("li",{className:"star s4"}),s.a.createElement("li",{className:"star s5"}),s.a.createElement("li",{className:"star s6"})))},t}(o.Component)),C=Object(w.b)(function(e){return{isNightMode:e.app.isNightMode}},null)(N);N.propTypes={isNightMode:p.a.bool};var k=n(183),y=(n(197),n(83),n(84),n(63),n(39),n(199),Object(w.b)(function(e){return{isNightMode:e.app.isNightMode}},null)(function(e){var t=Object(o.useRef)(),n=(document.head,document.head.getElementsByTagName("style"));return n[1]&&-1!==n[1].textContent.indexOf("utterances")&&n[1].parentNode.removeChild(n[1]),Object(o.useEffect)(function(){if(t.current){var n={src:"https://utteranc.es/client.js",repo:"eunha0ne/blog-comments","issue-term":"pathname",theme:e.isNightMode?"github-dark":"github-light",async:!0,crossorigin:"anonymous"},o=document.createElement("script");Object.keys(n).forEach(function(e){o.setAttribute(e,n[e])});var s=new URLSearchParams(window.location.search);if(s.has("commenting")){var a=t.current.getBoundingClientRect().top+window.innerHeight;window.scroll(0,a)}s.set("commenting",!0);var i=window.location.pathname+"?"+s.toString();for(window.history.replaceState(null,"",i);t.current.firstChild;){var r=t.current.getElementsByClassName("utterances")[0];r&&t.current.removeChild(r)}t.current.appendChild(o),o.onload=function(){s.delete("commenting");var e=s.toString(),t=window.location.pathname+(e&&"?"+e);window.history.replaceState(null,"",t)}}}),s.a.createElement("div",{className:"post-comments",ref:t})}));n(201),n(202),n(203);n.d(t,"query",function(){return S});var S="378509296",M=(t.default=function(e){var t=e.data,n=e.pageContext,o=n.next,a=n.prev,r=t.markdownRemark,l=t.markdownRemark.frontmatter,c=l.title,d=l.tags;return s.a.createElement(i.a,null,s.a.createElement(T,{title:c,description:t.markdownRemark.excerpt}),s.a.createElement("main",null,s.a.createElement("article",{className:"post"},s.a.createElement("header",{className:"post__header"},s.a.createElement("h1",null,r.frontmatter.title),s.a.createElement("span",null,r.frontmatter.date),s.a.createElement(C,null)),s.a.createElement("section",{className:"post__contents"},s.a.createElement(v,{headings:r.headings}),d&&s.a.createElement(M,{tags:d}),s.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:r.html}})),s.a.createElement("section",{className:"post__footer"},s.a.createElement(L,{prev:a,next:o}),s.a.createElement(k.a,null),s.a.createElement(y,null),s.a.createElement(u,null)))))},function(e){var t=e.tags;return s.a.createElement("div",{className:"inner-tags"},t.map(function(e,t){return s.a.createElement("a",{href:"/"+e,key:t},e)}))}),L=function(e){var t=e.prev,n=e.next;return s.a.createElement("div",{className:"navi"},t&&s.a.createElement(a.a,{to:t.node.fields.slug,className:"navi__prev"},s.a.createElement("span",null,"←"),s.a.createElement("p",null,t.node.frontmatter.title)),n&&s.a.createElement(a.a,{to:n.node.fields.slug,className:"navi__next"},s.a.createElement("p",null,n.node.frontmatter.title),s.a.createElement("span",null,"→")))}},197:function(e,t,n){"use strict";n(198);var o=n(6),s=n(82),a=n(19),i=/./.toString,r=function(e){n(14)(RegExp.prototype,"toString",e,!0)};n(20)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?r(function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!a&&e instanceof RegExp?s.call(e):void 0)}):"toString"!=i.name&&r(function(){return i.call(this)})},198:function(e,t,n){n(19)&&"g"!=/./g.flags&&n(28).f(RegExp.prototype,"flags",{configurable:!0,get:n(82)})},199:function(e,t,n){var o=n(29),s=n(38);n(200)("keys",function(){return function(e){return s(o(e))}})},200:function(e,t,n){var o=n(11),s=n(21),a=n(20);e.exports=function(e,t){var n=(s.Object||{})[e]||Object[e],i={};i[e]=t(n),o(o.S+o.F*a(function(){n(1)}),"Object",i)}}}]);
//# sourceMappingURL=component---src-templates-post-js-eb2a971a5bf73d53cacb.js.map