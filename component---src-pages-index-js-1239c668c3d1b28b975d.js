(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return l});var n=a(0),r=a.n(n),i=a(163),c=(a(172),a(166)),o=a(177),s=a(168);a(183);t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("main",{className:"index-view"},r.a.createElement(o.a,null),r.a.createElement(s.a,{data:t})))};var l="2239473366"},166:function(e,t,a){"use strict";var n=a(167),r=a(0),i=a.n(r),c=a(1),o=a.n(c),s=a(171),l=a.n(s),m=a(162);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(m.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var u="1025518380"},167:function(e){e.exports={data:{site:{siteMetadata:{title:"eunha's dev",description:"은하의 개발 블로그입니다.",author:"@eunha0ne"}}}}},168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(162),c=(a(163),a(175),function(e){var t=e.props;return r.a.createElement("div",{className:"tags"},t.frontmatter.tags&&t.frontmatter.tags.map(function(e,t){return r.a.createElement(i.a,{className:"tags__item",key:"tag-"+t,to:"/"+e},e)}))}),o=(a(176),function(e){var t=e.data;return r.a.createElement("section",{className:"index-contents"},t.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return r.a.createElement("article",{key:"node-"+t,className:"index-post"},r.a.createElement("div",{className:"index-post__head"}),r.a.createElement("div",{className:"index-post__body"},r.a.createElement(i.a,{to:a.fields.slug},r.a.createElement("h3",null,r.a.createElement("span",null,a.frontmatter.title)),r.a.createElement("span",null,a.frontmatter.date),r.a.createElement("hr",null),r.a.createElement("p",null,a.excerpt)),r.a.createElement(c,{props:a})))}))});a.d(t,"a",function(){return o})},172:function(e,t,a){"use strict";a(173),a(0),a(162),a(174)},173:function(e){e.exports={data:{placeholderImage:null}}}}]);
//# sourceMappingURL=component---src-pages-index-js-1239c668c3d1b28b975d.js.map