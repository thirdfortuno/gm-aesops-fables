(self.webpackChunkgm_aesop_s_fables=self.webpackChunkgm_aesop_s_fables||[]).push([[318],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,s){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),s=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},1955:function(e,t,r){var n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),s=r(7316),l=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=s(e,l),c=f(t),m=i.useMemo((function(){if(!r)return null;var e=u({React:i,mdx:p},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(m,u({},a))}},9357:function(e,t,r){"use strict";var n=r(7294),o=r(5414);t.Z=function(e){var t=e.title,r=e.metaDescription;return n.createElement(o.Z,{title:t,meta:[{name:"description",content:r},{property:"og:title",content:t},{property:"og:description",content:r},{property:"og:image",content:"/src/images/icon.png"},{property:"og:type",content:"website"},{property:"og:url",content:"https://gmaesopsfables.org"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:t},{name:"twitter:description",content:r},{name:"twitter:image",content:"/src/images/icon.png"}]})}},4181:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(1597),a=r(1955),s=r(9357),l=r(2938);t.default=function(e){var t=e.data;return console.log(t),n.createElement(l.Z,{header:n.createElement("div",{className:"fable__header"},n.createElement("div",{className:"fable__side-button"},t.mdx.slug>1&&n.createElement(o.Link,{className:"fable__link",to:"/fables/"+(t.mdx.slug-1)},"‹ back")),n.createElement("span",null,n.createElement(o.Link,{className:"fable__link",to:"/"},"The Æsop for Newbies")),n.createElement("div",{className:"fable__side-button"},t.mdx.slug<11&&n.createElement(o.Link,{className:"fable__link",to:"/fables/"+(t.mdx.slug- -1)},"next ›"))),title:t.mdx.frontmatter.title},n.createElement(s.Z,{title:t.mdx.frontmatter.title,metaDescription:"Learn Eternal Return through morals."}),n.createElement("div",{className:"fable__body"},n.createElement(a.MDXRenderer,null,t.mdx.body)),n.createElement("div",{className:"fable__moral fable__link"},n.createElement("a",{href:t.mdx.frontmatter.parody,target:"_blank",rel:"noopener noreferrer"},t.mdx.frontmatter.moral)))}}}]);
//# sourceMappingURL=component---src-pages-fables-mdx-slug-js-65d642a3b85167c6886b.js.map