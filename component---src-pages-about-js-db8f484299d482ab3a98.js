(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),i=a(163);a(172),a(166),a(177),a(168),a(183);t.default=function(e){e.data;return r.a.createElement(i.a,null,r.a.createElement("div",{className:"maintenance"},r.a.createElement("p",null,"페이지 준비 중입니다.")))};var c="2403946131"},166:function(e,t,a){"use strict";var n=a(167),r=a(0),i=a.n(r),c=a(1),s=a.n(c),o=a(171),l=a.n(o),m=a(162);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,s=e.title;return i.a.createElement(m.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var d="1025518380"},167:function(e){e.exports={data:{site:{siteMetadata:{title:"title",description:"descriptions",author:"@eunha0ne"}}}}},168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(162),c=(a(163),a(175),function(e){var t=e.props;return r.a.createElement("div",{className:"tags"},t.frontmatter.tags&&t.frontmatter.tags.map(function(e,t){return r.a.createElement(i.a,{className:"tags__item",key:"tag-"+t,to:"/"+e},e)}))}),s=(a(176),function(e){var t=e.data;return r.a.createElement("section",{className:"index-contents"},t.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return r.a.createElement("article",{key:"node-"+t,className:"index-post"},r.a.createElement("div",{className:"index-post__head"}),r.a.createElement("div",{className:"index-post__body"},r.a.createElement(i.a,{to:a.fields.slug},r.a.createElement("h3",null,r.a.createElement("span",null,a.frontmatter.title)),r.a.createElement("span",null,a.frontmatter.date),r.a.createElement("hr",null),r.a.createElement("p",null,a.excerpt)),r.a.createElement(c,{props:a})))}))});a.d(t,"a",function(){return s})},172:function(e,t,a){"use strict";a(173),a(0),a(162),a(174)},173:function(e){e.exports={data:{placeholderImage:null}}}}]);
//# sourceMappingURL=component---src-pages-about-js-db8f484299d482ab3a98.js.map