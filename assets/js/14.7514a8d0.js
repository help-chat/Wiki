(window.webpackJsonp=window.webpackJsonp||[]).push([[14,15],{112:function(t,n,e){"use strict";e(134)("link",function(t){return function(n){return t(this,"a","href",n)}})},133:function(t,n,e){var r=e(30),i=e(11),a=e(5);t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],s={};s[t]=n(e),r(r.S+r.F*a(function(){e(1)}),"Object",s)}},134:function(t,n,e){var r=e(30),i=e(5),a=e(15),s=/"/g,u=function(t,n,e,r){var i=String(a(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(r).replace(s,"&quot;")+'"'),u+">"+i+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(u),r(r.P+r.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},136:function(t,n,e){},175:function(t,n,e){"use strict";var r=e(136);e.n(r).a},216:function(t,n,e){"use strict";e.r(n);var r={components:{NavLink:e(84).default},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(e(175),e(1)),a=Object(i.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,function(n,r){return e("div",{key:r,staticClass:"feature"},[e("a",{attrs:{href:n.link}},[e("img",{staticClass:"resource-picture",attrs:{src:t.$withBase(n.img)}})]),t._v(" "),e("div",{staticClass:"resource-content"},[e("a",{attrs:{href:n.link}},[e("h2",{style:{"border-bottom":"none"}},[t._v(t._s(n.title))])]),t._v(" "),e("p",[t._v(t._s(n.details))])])])}),0):t._e(),t._v(" "),e("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null);n.default=a.exports},58:function(t,n,e){"use strict";e.d(n,"d",function(){return r}),e.d(n,"a",function(){return a}),e.d(n,"j",function(){return s}),e.d(n,"i",function(){return u}),e.d(n,"f",function(){return o}),e.d(n,"g",function(){return c}),e.d(n,"h",function(){return l}),e.d(n,"b",function(){return f}),e.d(n,"e",function(){return d}),e.d(n,"l",function(){return p}),e.d(n,"m",function(){return h}),e.d(n,"c",function(){return v}),e.d(n,"k",function(){return m});e(90),e(113),e(114),e(63),e(99),e(72),e(115),e(91),e(83);var r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^(https?:|mailto:|tel:)/;function u(t){return decodeURI(t).replace(r,"").replace(i,"")}function o(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(o(t))return t;var n=t.match(r),e=n?n[0]:"",i=u(t);return a.test(i)?t:i+".html"+e}function d(t,n){var e=t.hash,i=function(t){var n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&u(t.path)===u(n)}function p(t,n,e){e&&(n=function(t,n,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;var i=n.split("/");e&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var u=a[s];".."===u?i.pop():"."!==u&&i.push(u)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));for(var r=u(n),i=0;i<t.length;i++)if(u(t[i].path)===r)return Object.assign({},t[i],{type:"page",path:f(n)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function h(t,n,e,r){var i=e.pages,a=e.themeConfig,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){var n=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:n.map(function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}})}]}(t);var u=s.sidebar||a.sidebar;if(u){var o=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(r=t.path,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(e))return{base:e,config:n[e]};var r;return{}}(n,u),c=o.base,l=o.config;return l?l.map(function(t){return function t(n,e,r,i){if("string"==typeof n)return p(e,n,r);if(Array.isArray(n))return Object.assign(p(e,n[0],r),{title:n[1]});i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var a=n.children||[];return{type:"group",title:n.title,children:a.map(function(n){return t(n,e,r,!0)}),collapsable:!1!==n.collapsable}}(t,i,c)}):[]}return[]}function v(t){var n;return(t=t.map(function(t){return Object.assign({},t)})).forEach(function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},68:function(t,n,e){"use strict";var r=e(30),i=e(111)(3);r(r.P+r.F*!e(89)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},84:function(t,n,e){"use strict";e.r(n);e(63),e(88),e(68),e(112);var r=e(58),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(n){return n===t.link}):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h}},a=e(1),s=Object(a.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);n.default=s.exports},88:function(t,n,e){var r=e(110),i=e(31);e(133)("keys",function(){return function(t){return i(r(t))}})}}]);