(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return l});var n=a(0),r=a.n(n),i=a(166),c=a(175),o=a(183),s=a(178);a(177);t.default=function(e){var t=e.data;return console.log(t),r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("main",{className:"index-view"},r.a.createElement("h1",null,"은하의 개발 블로그입니다."),r.a.createElement(o.a,null),r.a.createElement(s.a,{data:t})))};var l="1131152476"},175:function(e,t,a){"use strict";var n=a(176),r=a(0),i=a.n(r),c=a(1),o=a.n(c),s=a(174),l=a.n(s),m=a(163);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(m.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var u="1025518380"},176:function(e){e.exports={data:{site:{siteMetadata:{title:"eunha's dev",description:"은하의 개발 블로그입니다.",author:"@eunha0ne"}}}}},178:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(163),c=(a(181),function(e){var t=e.props;return r.a.createElement("div",{className:"tags"},t.frontmatter.tags&&t.frontmatter.tags.map(function(e,t){return r.a.createElement(i.a,{className:"tags__item",key:"tag-"+t,to:"/"+e},e)}))}),o=(a(182),function(e){var t=e.data;return r.a.createElement("section",{className:"index-contents"},t.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return r.a.createElement("article",{key:"node-"+t,className:"index-post"},r.a.createElement("div",{className:"index-post__head"}),r.a.createElement("div",{className:"index-post__body"},r.a.createElement(i.a,{to:a.fields.slug},r.a.createElement("h3",null,r.a.createElement("span",null,a.frontmatter.title)),r.a.createElement("span",null,a.frontmatter.date),r.a.createElement("hr",null),r.a.createElement("p",null,a.excerpt)),r.a.createElement(c,{props:a})))}))});a.d(t,"a",function(){return o})}}]);
//# sourceMappingURL=component---src-pages-index-js-2ca56259c4bf79e5c650.js.map