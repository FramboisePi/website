(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{517:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"a",(function(){return a})),e.d(n,"i",(function(){return s})),e.d(n,"f",(function(){return o})),e.d(n,"g",(function(){return l})),e.d(n,"h",(function(){return c})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"k",(function(){return d})),e.d(n,"l",(function(){return p})),e.d(n,"c",(function(){return g})),e.d(n,"j",(function(){return m}));e(68),e(113),e(524),e(527),e(286),e(69),e(170),e(171),e(50),e(114),e(525);var r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function u(t){return decodeURI(t).replace(r,"").replace(i,"")}function o(t){return s.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(o(t))return t;var n=t.match(r),e=n?n[0]:"",i=u(t);return a.test(i)?t:i+".html"+e}function h(t,n){var e=decodeURIComponent(t.hash),i=function(t){var n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&u(t.path)===u(n)}function d(t,n,e){if(o(n))return{type:"external",path:n};e&&(n=function(t,n,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;var i=n.split("/");e&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var u=a[s];".."===u?i.pop():"."!==u&&i.push(u)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));for(var r=u(n),i=0;i<t.length;i++)if(u(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function p(t,n,e,r){var i=e.pages,a=e.themeConfig,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return v(t);var u=s.sidebar||a.sidebar;if(u){var o=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(e)))return{base:e,config:n[e]};var r;return{}}(n,u),l=o.base,c=o.config;return"auto"===c?v(t):c?c.map((function(t){return function t(n,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof n)return d(e,n,r);if(Array.isArray(n))return Object.assign(d(e,n[0],r),{title:n[1]});var a=n.children||[];return 0===a.length&&n.path?Object.assign(d(e,n.path,r),{title:n.title}):{type:"group",path:n.path,title:n.title,sidebarDepth:n.sidebarDepth,initialOpenGroupIndex:n.initialOpenGroupIndex,children:a.map((function(n){return t(n,e,r,i+1)})),collapsable:!1!==n.collapsable}}(t,i,l)})):[]}return[]}function v(t){var n=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:n.map((function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}}))}]}function g(t){var n;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},524:function(t,n,e){"use strict";var r=e(281),i=e(12),a=e(23),s=e(27),u=e(283),o=e(282);r("match",1,(function(t,n,e){return[function(n){var e=s(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var s=i(t),l=String(this);if(!s.global)return o(s,l);var c=s.unicode;s.lastIndex=0;for(var f,h=[],d=0;null!==(f=o(s,l));){var p=String(f[0]);h[d]=p,""===p&&(s.lastIndex=u(l,a(s.lastIndex),c)),d++}return 0===d?null:h}]}))},525:function(t,n,e){"use strict";var r=e(1),i=e(174).indexOf,a=e(72),s=[].indexOf,u=!!s&&1/[1].indexOf(1,-0)<0,o=a("indexOf");r({target:"Array",proto:!0,forced:u||!o},{indexOf:function(t){return u?s.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},526:function(t,n,e){"use strict";e(535),e(168),e(169);var r=e(517),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(n){return n===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},a=e(38),s=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(n){return t.focusoutAction(n)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);n.a=s.exports},527:function(t,n,e){"use strict";var r=e(281),i=e(284),a=e(12),s=e(27),u=e(538),o=e(283),l=e(23),c=e(282),f=e(176),h=e(285).UNSUPPORTED_Y,d=[].push,p=Math.min;r("split",2,(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(s(this)),a=void 0===e?4294967295:e>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return n.call(r,t,a);for(var u,o,l,c=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,h+"g");(u=f.call(v,r))&&!((o=v.lastIndex)>p&&(c.push(r.slice(p,u.index)),u.length>1&&u.index<r.length&&d.apply(c,u.slice(1)),l=u[0].length,p=o,c.length>=a));)v.lastIndex===u.index&&v.lastIndex++;return p===r.length?!l&&v.test("")||c.push(""):c.push(r.slice(p)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var i=s(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,i,e):r.call(String(i),n,e)},function(t,i){var s=e(r,t,this,i,r!==n);if(s.done)return s.value;var f=a(t),d=String(this),v=u(f,RegExp),g=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(h?"g":"y"),b=new v(h?"^(?:"+f.source+")":f,m),_=void 0===i?4294967295:i>>>0;if(0===_)return[];if(0===d.length)return null===c(b,d)?[d]:[];for(var k=0,x=0,O=[];x<d.length;){b.lastIndex=h?0:x;var y,C=c(b,h?d.slice(x):d);if(null===C||(y=p(l(b.lastIndex+(h?x:0)),d.length))===k)x=o(d,x,g);else{if(O.push(d.slice(k,x)),O.length===_)return O;for(var I=1;I<=C.length-1;I++)if(O.push(C[I]),O.length===_)return O;x=k=y}}return O.push(d.slice(k)),O}]}),h)},535:function(t,n,e){"use strict";var r=e(1),i=e(536);r({target:"String",proto:!0,forced:e(537)("link")},{link:function(t){return i(this,"a","href",t)}})},536:function(t,n,e){var r=e(27),i=/"/g;t.exports=function(t,n,e,a){var s=String(r(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(a).replace(i,"&quot;")+'"'),u+">"+s+"</"+n+">"}},537:function(t,n,e){var r=e(2);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},538:function(t,n,e){var r=e(12),i=e(71),a=e(3)("species");t.exports=function(t,n){var e,s=r(t).constructor;return void 0===s||null==(e=r(s)[a])?n:i(e)}},560:function(t,n,e){},629:function(t,n,e){"use strict";var r=e(560);e.n(r).a},639:function(t,n,e){"use strict";e.r(n);var r={name:"PaperbackHome",components:{NavLink:e(526).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(e(629),e(38)),a=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n\t\t\t\t"+t._s(t.data.heroText||t.$title||"Hello")+"\n\t\t\t")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n\t\t\t\t"+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n\t\t\t")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e(),t._v(" "),e("p",{staticClass:"action"},[e("a",{attrs:{href:"https://testflight.apple.com/join/0Qf3gudD"}},[e("img",{staticClass:"darkrendered",attrs:{src:"/assets/AppStore/AppStore_"+t.data.lang+"_White.svg",alt:"Download on the App Store"}}),t._v(" "),e("img",{staticClass:"lightrendered",attrs:{src:"/assets/AppStore/AppStore_"+t.data.lang+"_Black.svg",alt:t.data.buttonDownload}})]),t._v(" "),e("RouterLink",{staticClass:"nav-link action-button action-button__Guides",attrs:{to:"help/guides/getting-started/"},nativeOn:{focusout:function(n){return t.focusoutAction(n)}}},[t._v("\n\t\t\t\t\t"+t._s(t.data.buttonGuides)+"\n\t\t\t\t\t"),e("i",{staticClass:"el-icon-notebook-2"})])],1)]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(n,r){return e("div",{key:r,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n\t\t\t"+t._s(t.data.footer)+" |\n\t\t\t"),e("a",{attrs:{href:"/privacy_policy/"}},[t._v(" "+t._s(t.data.privacy))])]):t._e()],1)}),[],!1,null,null,null);n.default=a.exports}}]);