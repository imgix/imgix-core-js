!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ImgixClient=e()}(this,function(){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function c(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?e(Object(o),!0).forEach(function(t){var e,r;e=n,t=o[r=t],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))})}return n}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(t,e){return t(e={exports:{}},e.exports),e.exports}function a(t){return null!=t&&(d(t)||"function"==typeof(e=t).readFloatLE&&"function"==typeof e.slice&&d(e.slice(0,0))||!!t._isBuffer);var e}var u=t(function(t){var i,r;i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];0<t;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var e=[],r=0;r<t.length;r+=3)for(var n=t[r]<<16|t[r+1]<<8|t[r+2],o=0;o<4;o++)8*r+6*o<=8*t.length?e.push(i.charAt(n>>>6*(3-o)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],r=0,n=0;r<t.length;n=++r%4)0!=n&&e.push((i.indexOf(t.charAt(r-1))&Math.pow(2,-2*n+8)-1)<<2*n|i.indexOf(t.charAt(r))>>>6-2*n);return e}},t.exports=r}),l={utf8:{stringToBytes:function(t){return l.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(l.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}},h=l;function d(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var g=t(function(t){var y,b,v,m,w;y=u,b=h.utf8,v=a,m=h.bin,(w=function(t,e){t.constructor==String?t=(e&&"binary"===e.encoding?m:b).stringToBytes(t):v(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var r=y.bytesToWords(t),t=8*t.length,n=1732584193,o=-271733879,i=-1732584194,a=271733878,u=0;u<r.length;u++)r[u]=16711935&(r[u]<<8|r[u]>>>24)|4278255360&(r[u]<<24|r[u]>>>8);r[t>>>5]|=128<<t%32,r[14+(64+t>>>9<<4)]=t;for(var c=w._ff,s=w._gg,f=w._hh,l=w._ii,u=0;u<r.length;u+=16){var h=n,d=o,g=i,p=a,n=c(n,o,i,a,r[u+0],7,-680876936),a=c(a,n,o,i,r[u+1],12,-389564586),i=c(i,a,n,o,r[u+2],17,606105819),o=c(o,i,a,n,r[u+3],22,-1044525330);n=c(n,o,i,a,r[u+4],7,-176418897),a=c(a,n,o,i,r[u+5],12,1200080426),i=c(i,a,n,o,r[u+6],17,-1473231341),o=c(o,i,a,n,r[u+7],22,-45705983),n=c(n,o,i,a,r[u+8],7,1770035416),a=c(a,n,o,i,r[u+9],12,-1958414417),i=c(i,a,n,o,r[u+10],17,-42063),o=c(o,i,a,n,r[u+11],22,-1990404162),n=c(n,o,i,a,r[u+12],7,1804603682),a=c(a,n,o,i,r[u+13],12,-40341101),i=c(i,a,n,o,r[u+14],17,-1502002290),n=s(n,o=c(o,i,a,n,r[u+15],22,1236535329),i,a,r[u+1],5,-165796510),a=s(a,n,o,i,r[u+6],9,-1069501632),i=s(i,a,n,o,r[u+11],14,643717713),o=s(o,i,a,n,r[u+0],20,-373897302),n=s(n,o,i,a,r[u+5],5,-701558691),a=s(a,n,o,i,r[u+10],9,38016083),i=s(i,a,n,o,r[u+15],14,-660478335),o=s(o,i,a,n,r[u+4],20,-405537848),n=s(n,o,i,a,r[u+9],5,568446438),a=s(a,n,o,i,r[u+14],9,-1019803690),i=s(i,a,n,o,r[u+3],14,-187363961),o=s(o,i,a,n,r[u+8],20,1163531501),n=s(n,o,i,a,r[u+13],5,-1444681467),a=s(a,n,o,i,r[u+2],9,-51403784),i=s(i,a,n,o,r[u+7],14,1735328473),n=f(n,o=s(o,i,a,n,r[u+12],20,-1926607734),i,a,r[u+5],4,-378558),a=f(a,n,o,i,r[u+8],11,-2022574463),i=f(i,a,n,o,r[u+11],16,1839030562),o=f(o,i,a,n,r[u+14],23,-35309556),n=f(n,o,i,a,r[u+1],4,-1530992060),a=f(a,n,o,i,r[u+4],11,1272893353),i=f(i,a,n,o,r[u+7],16,-155497632),o=f(o,i,a,n,r[u+10],23,-1094730640),n=f(n,o,i,a,r[u+13],4,681279174),a=f(a,n,o,i,r[u+0],11,-358537222),i=f(i,a,n,o,r[u+3],16,-722521979),o=f(o,i,a,n,r[u+6],23,76029189),n=f(n,o,i,a,r[u+9],4,-640364487),a=f(a,n,o,i,r[u+12],11,-421815835),i=f(i,a,n,o,r[u+15],16,530742520),n=l(n,o=f(o,i,a,n,r[u+2],23,-995338651),i,a,r[u+0],6,-198630844),a=l(a,n,o,i,r[u+7],10,1126891415),i=l(i,a,n,o,r[u+14],15,-1416354905),o=l(o,i,a,n,r[u+5],21,-57434055),n=l(n,o,i,a,r[u+12],6,1700485571),a=l(a,n,o,i,r[u+3],10,-1894986606),i=l(i,a,n,o,r[u+10],15,-1051523),o=l(o,i,a,n,r[u+1],21,-2054922799),n=l(n,o,i,a,r[u+8],6,1873313359),a=l(a,n,o,i,r[u+15],10,-30611744),i=l(i,a,n,o,r[u+6],15,-1560198380),o=l(o,i,a,n,r[u+13],21,1309151649),n=l(n,o,i,a,r[u+4],6,-145523070),a=l(a,n,o,i,r[u+11],10,-1120210379),i=l(i,a,n,o,r[u+2],15,718787259),o=l(o,i,a,n,r[u+9],21,-343485551),n=n+h>>>0,o=o+d>>>0,i=i+g>>>0,a=a+p>>>0}return y.endian([n,o,i,a])})._ff=function(t,e,r,n,o,i,a){a=t+(e&r|~e&n)+(o>>>0)+a;return(a<<i|a>>>32-i)+e},w._gg=function(t,e,r,n,o,i,a){a=t+(e&n|r&~n)+(o>>>0)+a;return(a<<i|a>>>32-i)+e},w._hh=function(t,e,r,n,o,i,a){a=t+(e^r^n)+(o>>>0)+a;return(a<<i|a>>>32-i)+e},w._ii=function(t,e,r,n,o,i,a){a=t+(r^(e|~n))+(o>>>0)+a;return(a<<i|a>>>32-i)+e},w._blocksize=16,w._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);t=y.wordsToBytes(w(t,e));return e&&e.asBytes?t:e&&e.asString?m.bytesToString(t):y.bytesToHex(t)}}),p=t(function(P,t){var e;e="undefined"!=typeof self?self:"undefined"!=typeof window?window:i,P.exports=function(e){var r=(e=e||{}).Base64,t="2.6.4",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=function(t){var e={};for(var r=0,n=t.length;r<n;r++)e[t.charAt(r)]=r;return e}(s),a=String.fromCharCode,n=function(t){if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?a(192|e>>>6)+a(128|e&63):a(224|e>>>12&15)+a(128|e>>>6&63)+a(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return a(240|e>>>18&7)+a(128|e>>>12&63)+a(128|e>>>6&63)+a(128|e&63)}},o=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,u=function(t){return t.replace(o,n)},c=function(t){var e=[0,2,1][t.length%3],r=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),n=[s.charAt(r>>>18),s.charAt(r>>>12&63),e>=2?"=":s.charAt(r>>>6&63),e>=1?"=":s.charAt(r&63)];return n.join("")},f=e.btoa&&typeof e.btoa=="function"?function(t){return e.btoa(t)}:function(t){if(t.match(/[^\x00-\xFF]/))throw new RangeError("The string contains invalid characters.");return t.replace(/[\s\S]{1,3}/g,c)},l=function(t){return f(u(String(t)))},h=function(t){return t.replace(/[+\/]/g,function(t){return t=="+"?"-":"_"}).replace(/=/g,"")},d=function(t,e){return e?h(l(t)):l(t)},g,p;if(e.Uint8Array)p=function(t,e){var r="";for(var n=0,o=t.length;n<o;n+=3){var i=t[n],a=t[n+1],u=t[n+2];var c=i<<16|a<<8|u;r+=s.charAt(c>>>18)+s.charAt(c>>>12&63)+(typeof a!="undefined"?s.charAt(c>>>6&63):"=")+(typeof u!="undefined"?s.charAt(c&63):"=")}return e?h(r):r};var y=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,b=function(t){switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),r=e-65536;return a((r>>>10)+55296)+a((r&1023)+56320);case 3:return a((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return a((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},v=function(t){return t.replace(y,b)},m=function(t){var e=t.length,r=e%4,n=(e>0?i[t.charAt(0)]<<18:0)|(e>1?i[t.charAt(1)]<<12:0)|(e>2?i[t.charAt(2)]<<6:0)|(e>3?i[t.charAt(3)]:0),o=[a(n>>>16),a(n>>>8&255),a(n&255)];o.length-=[0,0,2,1][r];return o.join("")},w=e.atob&&typeof e.atob=="function"?function(t){return e.atob(t)}:function(t){return t.replace(/\S{1,4}/g,m)},A=function(t){return w(String(t).replace(/[^A-Za-z0-9\+\/]/g,""))},x=function(t){return v(w(t))},S=function(t){return String(t).replace(/[-_]/g,function(t){return t=="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,"")},T=function(t){return x(S(t))},B;if(e.Uint8Array)B=function(t){return Uint8Array.from(A(S(t)),function(t){return t.charCodeAt(0)})};var C=function(){var t=e.Base64;e.Base64=r;return t};if(e.Base64={VERSION:t,atob:A,btoa:f,fromBase64:T,toBase64:d,utob:u,encode:d,encodeURI:function(t){return d(t,true)},btou:v,decode:T,noConflict:C,fromUint8Array:p,toUint8Array:B},typeof Object.defineProperty==="function"){var j=function(t){return{value:t,enumerable:false,writable:true,configurable:true}};e.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",j(function(){return T(this)}));Object.defineProperty(String.prototype,"toBase64",j(function(t){return d(this,t)}));Object.defineProperty(String.prototype,"toBase64URI",j(function(){return d(this,true)}))}}if(e["Meteor"])Base64=e.Base64;if(P.exports)P.exports.Base64=e.Base64;return{Base64:e.Base64}}(e)}).Base64,y="v3.1.0",b=/^(?:[a-z\d\-_]{1,62}\.){0,125}(?:[a-z\d](?:\-(?=\-*[a-z\d])|[a-z]|\d){0,62}\.)[a-z\d]{1,63}$/i,v={1:75,2:50,3:35,4:23,5:20},m={domain:null,useHTTPS:!0,includeLibraryParam:!0,urlPrefix:"https://",secureURLToken:null};function w(t,e){if(!Number.isInteger(t)||!Number.isInteger(e)||t<=0||e<=0||e<t)throw new Error("The min and max srcset widths can only be passed positive Number values")}function A(t){if("number"!=typeof t||t<.01)throw new Error("The srcset widthTolerance must be a number greater than or equal to 0.01")}return function(){function u(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),this.settings=c(c({},m),t),this.targetWidthsCache={},"string"!=typeof this.settings.domain)throw new Error("ImgixClient must be passed a valid string domain");if(null==b.exec(this.settings.domain))throw new Error('Domain must be passed in as fully-qualified domain name and should not include a protocol or any path element, i.e. "example.imgix.net".');this.settings.includeLibraryParam&&(this.settings.libraryParam="js-"+y),this.settings.urlPrefix=this.settings.useHTTPS?"https://":"http://"}var t,e,r;return t=u,r=[{key:"targetWidths",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:8192,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:.08,n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=Math.floor(t),i=Math.floor(e);w(t,e),A(r);e=r+"/"+o+"/"+i;if(e in n)return n[e];if(o===i)return[o];for(var a=[],u=o;u<i;)a.push(Math.round(u)),u*=1+2*r;return a[a.length-1]<i&&a.push(i),n[e]=a}}],(e=[{key:"buildURL",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=this._sanitizePath(t),e=this._buildParams(e);return this.settings.secureURLToken&&(e=this._signParams(t,e)),this.settings.urlPrefix+this.settings.domain+t+e}},{key:"_buildParams",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=[].concat(f(this.settings.libraryParam?["ixlib=".concat(this.settings.libraryParam)]:[]),f(Object.entries(t).map(function(t){var e=s(t,2),r=e[0],t=e[1],e=encodeURIComponent(r),t="64"===r.substr(-2)?p.encodeURI(t):encodeURIComponent(t);return"".concat(e,"=").concat(t)})));return"".concat(0<t.length?"?":"").concat(t.join("&"))}},{key:"_signParams",value:function(t,e){t=this.settings.secureURLToken+t+e,t=g(t);return 0<e.length?e+"&s="+t:"?s="+t}},{key:"_sanitizePath",value:function(t){t=t.replace(/^\//,"");return"/"+(t=/^https?:\/\//.test(t)?encodeURIComponent(t):encodeURI(t).replace(/[#?:+]/g,encodeURIComponent))}},{key:"buildSrcSet",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=e.w,o=e.h;return n||o?this._buildDPRSrcSet(t,e,r):this._buildSrcSetPairs(t,e,r)}},{key:"_buildSrcSetPairs",value:function(e,r,t){var n,o,i=this,o=s((o=void 0!==(n=t).widthTolerance?(A(n.widthTolerance),n.widthTolerance):.08,a=void 0===n.minWidth?100:n.minWidth,n=void 0===n.maxWidth?8192:n.maxWidth,100==a&&8192==n||w(a,n),[o,a,n]),3),a=o[0],n=o[1],o=o[2],a=t.widths?(function(t){if(!Array.isArray(t)||!t.length)throw new Error("The widths argument can only be passed a valid non-empty array of integers");if(!t.every(function(t){return Number.isInteger(t)&&0<t}))throw new Error("A custom widths argument can only contain positive integer values")}(t.widths),f(t.widths)):u.targetWidths(n,o,a,this.targetWidthsCache);return a.map(function(t){return"".concat(i.buildURL(e,c(c({},r),{},{w:t}))," ").concat(t,"w")}).join(",\n")}},{key:"_buildDPRSrcSet",value:function(n,o,t){var i=this,e=[1,2,3,4,5],t=t.disableVariableQuality||!1;t||function(t){if("boolean"!=typeof t)throw new Error("The disableVariableQuality argument can only be passed a Boolean value")}(t);return(t?e.map(function(t){return"".concat(i.buildURL(n,c(c({},o),{},{dpr:t}))," ").concat(t,"x")}):e.map(function(t){return e=n,r=o,t=t,"".concat(i.buildURL(e,c(c({},r),{},{dpr:t,q:r.q||v[t]}))," ").concat(t,"x");var e,r})).join(",\n")}}])&&n(t.prototype,e),r&&n(t,r),u}()});
