(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{160:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n.n(s),a=n(162),i=n(163),r=n(37),l=n.n(r),c=n(8),d=n.n(c),m=n(1),h=n.n(m),u=n(164),p=(n(186),function(e){function t(t){var n;return(n=e.call(this,t)||this).topButton=o.a.createRef(),n.scrollUp=n.scrollUp.bind(l()(n)),n.toggleClass=n.toggleClass.bind(l()(n)),n.toggleClassThrottle=Object(u.a)(n.toggleClass,200),n}d()(t,e);var n=t.prototype;return n.toggleClass=function(e){var t=this.topButton.current,n=document.documentElement.scrollTop||document.scrollingElement.scrollTop;t.classList.contains("clicked")&&e.preventDefault(),n<1e3&&t.classList.contains("fade-in")?t.classList.remove("fade-in"):1e3<n&&!t.classList.contains("fade-in")&&t.classList.add("fade-in")},n.scrollUp=function(){var e=this.topButton.current;if(!e.classList.contains("clicked")){var t=1e3,n=window.scrollY/2,s=0,o=performance.now();e.classList.add("clicked"),window.requestAnimationFrame(function a(){var i=performance.now(),r=Math.round(i-o);if(o=i,(s+=Math.PI/(t/r))>=Math.PI)return clearTimeout(this.timeoutEvent),this.timeoutEvent=function(){e.classList.remove("clicked")},void setTimeout(this.timeoutEvent,300);var l=Math.round(n*Math.cos(s)+n);window.scrollTo(0,l),window.requestAnimationFrame(a.bind(this))}.bind(this))}},n.componentDidMount=function(){window.addEventListener("scroll",this.toggleClassThrottle,{passive:!0}),this.topButton.current.addEventListener("click",this.scrollUp)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.toggleClassThrottle),this.topButton.current.removeEventListener("click",this.scrollUp)},n.render=function(){return o.a.createElement("div",{ref:this.topButton,className:"top-button"},o.a.createElement("span",null,"↑"))},t}(s.Component)),f=p;p.propTypes={};n(184),n(187);var g=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={step:n.props.step},n.node={asideRef:o.a.createRef(),asideNodes:null,article:null,headings:null,header:null},n.info={intervals:[],scrollTops:[],currTop:0,prevTop:0,revision:100,step:0},n.getTableContents=n.getTableContents.bind(l()(n)),n.setIntervals=n.setIntervals.bind(l()(n)),n.setCurrentScrollState=n.setCurrentScrollState.bind(l()(n)),n.setComponentNode=n.setComponentNode.bind(l()(n)),n.setTableContentsPos=n.setTableContentsPos.bind(l()(n)),n.handleHighlight=n.handleHighlight.bind(l()(n)),n.bindScrollEvents=n.bindScrollEvents.bind(l()(n)),n.scrollThrottle=Object(u.a)(n.bindScrollEvents,100),n.triggerScrollTo=n.triggerScrollTo.bind(l()(n)),n.setScrollTo=n.setScrollTo.bind(l()(n)),n.lockRelatedComponet=n.lockRelatedComponet.bind(l()(n)),n.releaseRelatedComponet=n.releaseRelatedComponet.bind(l()(n)),n}d()(t,e);var n=t.prototype;return n.releaseRelatedComponet=function(){this.node.asideRef.current.classList.remove("lock"),this.node.header.classList.remove("lock")},n.lockRelatedComponet=function(){var e,t=["--fade-in","--fade-out","--docking"].map(function(e){return"main-header"+e});(e=this.node.header.classList).remove.apply(e,t),this.node.header.classList.add("main-header--fade-out","lock"),this.node.asideRef.current.classList.add("lock")},n.triggerScrollTo=function(e,t){this.node.asideRef.current.classList.contains("lock")||(this.lockRelatedComponet(),this.setScrollTo(e,t))},n.setScrollTo=function(e,t){var n=document.getElementsByClassName("post__contents")[0].offsetTop+Math.round(this.node.headings[t].offsetTop),s=this.info.currTop,o=Math.round(s-n)/2,a=1e3,i=0,r=performance.now();window.requestAnimationFrame(function e(){var s=performance.now();var l=Math.round(s-r);r=s;i+=Math.PI/(a/l);if(i>=Math.PI)return this.releaseRelatedComponet(),this.info.step=t,void this.setState({step:this.info.step});window.scrollTo(0,o*Math.cos(i)+o+n);window.requestAnimationFrame(e.bind(this))}.bind(this))},n.handleHighlight=function(){for(var e=this.info,t=e.intervals,n=e.prevTop,s=e.currTop,o=e.revision,a=e.step,i=n<=s,r=s+(i?o:-1*o),l=function(e){return i?++e:--e},c=function(e){return i?e<t.length-1:0<e},d=a;c(d);d=l(d)){var m=t[d],h=t[d+1],u=t[0],p=t[t.length-1];if(r<u){this.info.step=0;break}if(u<=r&&r<m);else{if(u<=r&&m<r&&r<h){this.info.step=d;break}if(u<=r&&p<r){this.info.step=t.length-1;break}}}this.state.step!==this.info.step&&this.setState({step:this.info.step})},n.bindScrollEvents=function(){this.setCurrentScrollState(),this.handleHighlight()},n.setCurrentScrollState=function(){var e=document.documentElement.scrollTop||document.scrollingElement.scrollTop;this.info.scrollTops.push(Math.round(e)),this.info.scrollTops.length>1&&(this.info.prevTop=this.info.scrollTops.shift()),this.info.currTop=this.info.scrollTops[0]},n.setTableContentsPos=function(){var e=document.body,t=this.node.article,n=(e.offsetWidth,t.offsetWidth,t.offsetWidth);this.node.asideRef.current.style.transform="translateX("+n+"px)"},n.setIntervals=function(){var e=document.getElementsByClassName("post__contents")[0];this.info.intervals=[].slice.apply(this.node.headings).map(function(t){return t.offsetTop+e.offsetTop})},n.getTableContents=function(){var e=[].slice.apply(this.node.contents.getElementsByClassName("markdown")[0].children),t=[];return e.forEach(function(e){/^H[1-6]$/.test(e.tagName)&&t.push(e)}),t},n.setComponentNode=function(){var e=document.getElementById("___gatsby"),t=this.node.asideRef.current;this.node.article=t.parentNode,this.node.asideNodes=[].slice.apply(t.getElementsByTagName("li")),this.node.header=e.getElementsByClassName("main-header")[0],this.node.contents=e.getElementsByClassName("post__contents")[0],this.node.headings=this.getTableContents()},n.componentDidMount=function(){this.setComponentNode(),this.setIntervals(),this.setTableContentsPos(),window.addEventListener("scroll",this.scrollThrottle,{passive:!0}),window.addEventListener("resize",this.setTableContentsPos,{passive:!0})},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollThrottle),window.removeEventListener("resize",this.setTableContentsPos)},n.render=function(){var e=this.state.step,t=this.props,n=t.name,s=t.headings;return o.a.createElement("div",{className:"toc",ref:this.node.asideRef},o.a.createElement("p",{className:"toc__title"},n),o.a.createElement("ul",{className:"toc__list"},o.a.createElement(v,{headings:s,step:e,scrollTo:this.triggerScrollTo})))},t}(s.Component),v=function(e){var t=e.headings,n=e.step,s=e.scrollTo;return t.map(function(e,t){var a=["toc__item","h"+e.depth,t===n?"on":""];return o.a.createElement("li",{key:"toc-"+t,className:a.join(" "),onClick:function(e){return s(e,t)}},e.value)})};g.defaultProps={step:0,name:"목차"},g.propTypes={step:h.a.number.isRequired,name:h.a.string.isRequired};var E=g,T=n(171),b=n.n(T);var N=function(e){return o.a.createElement(b.a,{title:e.title,meta:[{name:"title",content:e.title+"| eunha's dev"},{name:"description",content:"은하의 개발 블로그입니다."},{property:"og:title",content:e.title},{property:"og:url",content:e.pathname?e.url+e.pathname:e.url},{property:"og:image",content:e.thumbnail&&e.thumbnail},{property:"og:image:secure_url",content:e.thumbnail&&e.thumbnail},{property:"og:description",content:"은하의 개발 블로그입니다."},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:"en"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:e.title},{name:"twitter:description",content:"은하의 개발 블로그입니다."},{name:"twitter:image",content:e.thumbnail&&e.thumbnail},{property:"og:type",content:"website"},{name:"robots",content:"index, follow"},{name:"twitter:creator",content:"@eunha0ne"},{property:"og:site_name",content:"eunha's dev"}]},o.a.createElement("html",{lang:"en"}))},w=n(59),k=(n(58),n(195),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isNightMode:n.props.isNightMode},n.node={back:o.a.createRef()},n.info={},n.setTransition=n.setTransition.bind(l()(n)),n.clearTransition=n.clearTransition.bind(l()(n)),n.setToggleBack=n.setToggleBack.bind(l()(n)),n.setToggleBackThrottle=Object(u.a)(n.setToggleBack,100),n}d()(t,e);var n=t.prototype;return n.setToggleBack=function(){(document.documentElement.scrollTop||document.scrollingElement.scrollTop)>=this.info.back.height?this.clearTransition():this.setTransition()},n.clearTransition=function(){var e=this.node.themes,t=["enter","done"];e.forEach(function(e){var n;return(n=e.classList).remove.apply(n,t)})},n.setTransition=function(){var e=this.state.isNightMode?"night":"day",t=this.node.back.current.getElementsByClassName(e)[0];t.classList.add("enter"),setTimeout(function(){t.classList.add("done")},30)},n.setComponentNode=function(){var e=this.node.back.current;this.info.back={height:e.offsetHeight},this.node.themes=[e.getElementsByClassName("day")[0],e.getElementsByClassName("night")[0]]},n.componentDidMount=function(){this.setComponentNode(),this.setTransition(),window.addEventListener("scroll",this.setToggleBackThrottle,{passive:!0}),window.addEventListener("resize",this.setBackInfo,{passive:!0})},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.setToggleBackThrottle),window.removeEventListener("resize",this.setBackInfo)},n.getSnapshotBeforeUpdate=function(e,t){return e.isNightModeh!==this.props.isNightMode?e.isNightMode:null},n.componentDidUpdate=function(e,t,n){null!==n&&(this.clearTransition(),this.setTransition())},t.getDerivedStateFromProps=function(e,t){return t.isNightMode!==e.isNightMode?{isNightMode:e.isNightMode}:null},n.render=function(){return o.a.createElement("div",{ref:this.node.back,className:"header-back"},o.a.createElement("ul",{className:"day"},o.a.createElement("li",{className:"cactus"}),o.a.createElement("li",{className:"cloud c1"}),o.a.createElement("li",{className:"cloud c2"})),o.a.createElement("ul",{className:"night"},o.a.createElement("li",{className:"star s1"}),o.a.createElement("li",{className:"star s2"}),o.a.createElement("li",{className:"star s3"}),o.a.createElement("li",{className:"star s4"}),o.a.createElement("li",{className:"star s5"}),o.a.createElement("li",{className:"star s6"})))},t}(s.Component)),C=Object(w.b)(function(e){return{isNightMode:e.app.isNightMode}},null)(k);k.propTypes={isNightMode:h.a.bool};var y=n(177);n(198),n(199),n(200);n.d(t,"query",function(){return _});var _="378509296",L=(t.default=function(e){var t=e.data,n=e.pageContext,s=n.next,a=n.prev,r=t.markdownRemark,l=t.markdownRemark.frontmatter,c=l.title,d=(l.image,l.tags);return o.a.createElement(i.a,null,o.a.createElement(N,{title:c,description:t.markdownRemark.excerpt}),o.a.createElement("main",null,o.a.createElement("article",{className:"post"},o.a.createElement("header",{className:"post__header"},o.a.createElement("h2",null,r.frontmatter.title),o.a.createElement("span",null,r.frontmatter.date),o.a.createElement(C,null)),o.a.createElement("div",{className:"post__contents"},o.a.createElement(E,{headings:r.headings}),d&&o.a.createElement(L,{tags:d}),o.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:r.html}})),o.a.createElement("footer",{className:"post__footer"},o.a.createElement(M,{prev:a,next:s}),o.a.createElement(y.a,null),o.a.createElement(f,null)))))},function(e){var t=e.tags;return o.a.createElement("div",{className:"inner-tags"},t.map(function(e,t){return o.a.createElement("a",{href:"/"+e,key:t},e)}))}),M=function(e){var t=e.prev,n=e.next;return o.a.createElement("div",{className:"post__navi navi"},t&&o.a.createElement(a.a,{to:t.node.fields.slug,className:"navi__prev"},o.a.createElement("span",null,"←"),o.a.createElement("p",null,t.node.headings.length>0&&t.node.headings[0].value)),n&&o.a.createElement(a.a,{to:n.node.fields.slug,className:"navi__next"},o.a.createElement("p",null,n.node.headings.length>0&&n.node.headings[0].value),o.a.createElement("span",null,"→")))}}}]);
//# sourceMappingURL=component---src-templates-post-js-95bfb263157c7b56cce4.js.map