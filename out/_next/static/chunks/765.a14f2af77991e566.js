(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{70765:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var n=t(85893);t(41664),t(1864);var i=t(25675),a=t.n(i);function l(){return(0,n.jsxs)("footer",{style:{Zindex:2e4},children:[(0,n.jsxs)("div",{className:"funderImages",children:[(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"http://www.neh.gov/",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(a(),{src:"/images/logos/neh.png",width:"446",height:"108",className:"img-fluid",alt:"NEH"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"https://gcdi.commons.gc.cuny.edu/",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(a(),{src:"/images/logos/gcdi.png",width:"446",height:"108",className:"img-fluid",alt:"GCDI"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"http://www.gc.cuny.edu/",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(a(),{src:"/images/logos/gc_logo.png",width:"446",height:"108",className:"img-fluid",alt:"GC"})})})]}),(0,n.jsx)("div",{className:"funding-text",children:(0,n.jsx)("p",{style:{align:"center"},children:"The Digital Humanities Research Institute is funded through a generous grant from the National Endowment for the Humanities and with support from The Graduate Center's Provost's Office."})})]})}},1864:function(e){!function(){"use strict";var r={114:function(e){function r(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function t(e,r){for(var t,n="",i=0,a=-1,l=0,o=0;o<=e.length;++o){if(o<e.length)t=e.charCodeAt(o);else if(47===t)break;else t=47;if(47===t){if(a===o-1||1===l);else if(a!==o-1&&2===l){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",i=0):i=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),a=o,l=0;continue}}else if(2===n.length||1===n.length){n="",i=0,a=o,l=0;continue}}r&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(a+1,o):n=e.slice(a+1,o),i=o-a-1;a=o,l=0}else 46===t&&-1!==l?++l:l=-1}return n}var n={resolve:function(){for(var e,n,i="",a=!1,l=arguments.length-1;l>=-1&&!a;l--)l>=0?n=arguments[l]:(void 0===e&&(e=""),n=e),r(n),0!==n.length&&(i=n+"/"+i,a=47===n.charCodeAt(0));return(i=t(i,!a),a)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(r(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=t(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n)?"/"+e:e},isAbsolute:function(e){return r(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var i=arguments[t];r(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,t){if(r(e),r(t),e===t||(e=n.resolve(e))===(t=n.resolve(t)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var a=e.length,l=a-i,o=1;o<t.length&&47===t.charCodeAt(o);++o);for(var s=t.length-o,h=l<s?l:s,c=-1,f=0;f<=h;++f){if(f===h){if(s>h){if(47===t.charCodeAt(o+f))return t.slice(o+f+1);if(0===f)return t.slice(o+f)}else l>h&&(47===e.charCodeAt(i+f)?c=f:0===f&&(c=0));break}var g=e.charCodeAt(i+f);if(g!==t.charCodeAt(o+f))break;47===g&&(c=f)}var u="";for(f=i+c+1;f<=a;++f)(f===a||47===e.charCodeAt(f))&&(0===u.length?u+="..":u+="/..");return u.length>0?u+t.slice(o+c):(o+=c,47===t.charCodeAt(o)&&++o,t.slice(o))},_makeLong:function(e){return e},dirname:function(e){if(r(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,a=!0,l=e.length-1;l>=1;--l)if(47===(t=e.charCodeAt(l))){if(!a){i=l;break}}else a=!1;return -1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw TypeError('"ext" argument must be a string');r(e);var n,i=0,a=-1,l=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var o=t.length-1,s=-1;for(n=e.length-1;n>=0;--n){var h=e.charCodeAt(n);if(47===h){if(!l){i=n+1;break}}else -1===s&&(l=!1,s=n+1),o>=0&&(h===t.charCodeAt(o)?-1==--o&&(a=n):(o=-1,a=s))}return i===a?a=s:-1===a&&(a=e.length),e.slice(i,a)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!l){i=n+1;break}}else -1===a&&(l=!1,a=n+1);return -1===a?"":e.slice(i,a)},extname:function(e){r(e);for(var t=-1,n=0,i=-1,a=!0,l=0,o=e.length-1;o>=0;--o){var s=e.charCodeAt(o);if(47===s){if(!a){n=o+1;break}continue}-1===i&&(a=!1,i=o+1),46===s?-1===t?t=o:1!==l&&(l=1):-1!==t&&(l=-1)}return -1===t||-1===i||0===l||1===l&&t===i-1&&t===n+1?"":e.slice(t,i)},format:function(e){var r,t;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return r=e.dir||e.root,t=e.base||(e.name||"")+(e.ext||""),r?r===e.root?r+t:r+"/"+t:t},parse:function(e){r(e);var t,n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var i=e.charCodeAt(0),a=47===i;a?(n.root="/",t=1):t=0;for(var l=-1,o=0,s=-1,h=!0,c=e.length-1,f=0;c>=t;--c){if(47===(i=e.charCodeAt(c))){if(!h){o=c+1;break}continue}-1===s&&(h=!1,s=c+1),46===i?-1===l?l=c:1!==f&&(f=1):-1!==l&&(f=-1)}return -1===l||-1===s||0===f||1===f&&l===s-1&&l===o+1?-1!==s&&(0===o&&a?n.base=n.name=e.slice(1,s):n.base=n.name=e.slice(o,s)):(0===o&&a?(n.name=e.slice(1,l),n.base=e.slice(1,s)):(n.name=e.slice(o,l),n.base=e.slice(o,s)),n.ext=e.slice(l,s)),o>0?n.dir=e.slice(0,o-1):a&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var a=t[e]={exports:{}},l=!0;try{r[e](a,a.exports,n),l=!1}finally{l&&delete t[e]}return a.exports}n.ab="//";var i=n(114);e.exports=i}()}}]);