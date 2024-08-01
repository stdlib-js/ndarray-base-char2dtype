// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).char2dtype=e()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return n&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(t,e){return null!=t&&o.call(t,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var l,f=r()?function(t){var e,n,r;if(null==t)return i.call(t);n=t[c],e=a(t,c);try{t[c]=void 0}catch(e){return i.call(t)}return r=i.call(t),e?t[c]=n:delete t[c],r}:function(t){return i.call(t)};function s(t){return"[object Arguments]"===f(t)}l=function(){return s(arguments)}();var p=l,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var b=Object.defineProperty;function y(t){return"number"==typeof t}function d(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function h(t,e,n){var r=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=n?t+d(i):d(i)+t,r&&(t="-"+t)),t}var v=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function w(t){var e,n,r;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,r=parseInt(n,10),!isFinite(r)){if(!y(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&("u"===t.specifier||10!==e)&&(r=4294967295+r+1),r<0?(n=(-r).toString(e),t.precision&&(n=h(n,t.precision,t.padRight)),n="-"+n):(n=r.toString(e),r||t.precision?t.precision&&(n=h(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===m.call(t.specifier)?m.call(n):v.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var j=Math.abs,x=String.prototype.toLowerCase,_=String.prototype.toUpperCase,O=String.prototype.replace,S=/e\+(\d)$/,E=/e-(\d)$/,T=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function A(t){var e,n,r=parseFloat(t.arg);if(!isFinite(r)){if(!y(t.arg))throw new Error("invalid floating-point number. Value: "+n);r=t.arg}switch(t.specifier){case"e":case"E":n=r.toExponential(t.precision);break;case"f":case"F":n=r.toFixed(t.precision);break;case"g":case"G":j(r)<1e-4?((e=t.precision)>0&&(e-=1),n=r.toExponential(e)):n=r.toPrecision(t.precision),t.alternate||(n=O.call(n,V,"$1e"),n=O.call(n,P,"e"),n=O.call(n,I,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=O.call(n,S,"e+0$1"),n=O.call(n,E,"e-0$1"),t.alternate&&(n=O.call(n,T,"$1."),n=O.call(n,k,"$1.e")),r>=0&&t.sign&&(n=t.sign+n),n=t.specifier===_.call(t.specifier)?_.call(n):x.call(n)}function F(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}var $=String.fromCharCode,C=Array.isArray;function N(t){return t!=t}function B(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function L(t){var e,n,r,i,o,a,u,c,l,f,s,p,g;if(!C(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,c=0;c<t.length;c++)if(r=t[c],"string"==typeof r)a+=r;else{if(e=void 0!==r.precision,!(r=B(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(u=r.mapping),n=r.flags,l=0;l<n.length;l++)switch(i=n.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[u],10),u+=1,N(r.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[u],10),u+=1,N(r.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[u],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=e?r.precision:-1,r.arg=String(r.arg);break;case"c":if(!N(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=N(o)?String(r.arg):$(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=A(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=h(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(f=r.arg,s=r.width,p=r.padRight,g=void 0,(g=s-f.length)<0?f:f=p?f+F(g):F(g)+f)),a+=r.arg||"",u+=1}return a}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function W(t){var e,n,r,i;for(n=[],i=0,r=R.exec(t);r;)(e=t.slice(i,R.lastIndex-r[0].length)).length&&n.push(e),n.push(G(r)),i=R.lastIndex,r=R.exec(t);return(e=t.slice(i)).length&&n.push(e),n}function X(t){var e,n;if("string"!=typeof t)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[W(t)],n=1;n<arguments.length;n++)e.push(arguments[n]);return L.apply(null,e)}var Z,M=Object.prototype,Y=M.toString,z=M.__defineGetter__,U=M.__defineSetter__,H=M.__lookupGetter__,D=M.__lookupSetter__;Z=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?b:function(t,e,n){var r,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===Y.call(n))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(t,e)||D.call(t,e)?(r=t.__proto__,t.__proto__=M,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(t,e,n.get),a&&U&&U.call(t,e,n.set),t};var q=Z;function J(t,e,n){q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function K(t){return"string"==typeof t}var Q=String.prototype.valueOf;var tt=r();function et(t){return"object"==typeof t&&(t instanceof String||(tt?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function nt(t){return K(t)||et(t)}function rt(t){return"number"==typeof t}J(nt,"isPrimitive",K),J(nt,"isObject",et);var it=Number,ot=it.prototype.toString;var at=r();function ut(t){return"object"==typeof t&&(t instanceof it||(at?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function ct(t){return rt(t)||ut(t)}function lt(t){return t!=t}function ft(t){return rt(t)&&lt(t)}function st(t){return ut(t)&&lt(t.valueOf())}function pt(t){return ft(t)||st(t)}J(ct,"isPrimitive",rt),J(ct,"isObject",ut),J(pt,"isPrimitive",ft),J(pt,"isObject",st);var gt=Number.POSITIVE_INFINITY,bt=it.NEGATIVE_INFINITY,yt=Math.floor;function dt(t){return yt(t)===t}function ht(t){return t<gt&&t>bt&&dt(t)}function vt(t){return rt(t)&&ht(t)}function mt(t){return ut(t)&&ht(t.valueOf())}function wt(t){return vt(t)||mt(t)}J(wt,"isPrimitive",vt),J(wt,"isObject",mt);var jt=Object.prototype.propertyIsEnumerable;var xt=!jt.call("beep","0");function _t(t,e){var n;return null!=t&&(!(n=jt.call(t,e))&&xt&&nt(t)?!ft(e=+e)&&vt(e)&&e>=0&&e<t.length:n)}var Ot=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var St=p?s:function(t){return null!==t&&"object"==typeof t&&!Ot(t)&&"number"==typeof t.length&&dt(t.length)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!_t(t,"callee")},Et=Array.prototype.slice;function Tt(t){return null!==t&&"object"==typeof t}J(Tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!Ot(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(Tt));var kt=_t((function(){}),"prototype"),It=!_t({toString:null},"toString"),Pt=9007199254740991;function Vt(t,e,n){var r,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&dt(o.length)&&o.length>=0&&o.length<=Pt||K(t)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!vt(n))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;i=n}else(i=r+n)<0&&(i=0)}else i=0;if(pt(e)){for(;i<r;i++)if(pt(t[i]))return i}else for(;i<r;i++)if(t[i]===e)return i;return-1}var At=/./;function Ft(t){return"boolean"==typeof t}var $t=Boolean,Ct=Boolean.prototype.toString;var Nt=r();function Bt(t){return"object"==typeof t&&(t instanceof $t||(Nt?function(t){try{return Ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Lt(t){return Ft(t)||Bt(t)}J(Lt,"isPrimitive",Ft),J(Lt,"isObject",Bt);var Rt="object"==typeof self?self:null,Gt="object"==typeof window?window:null,Wt="object"==typeof global?global:null,Xt="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!Ft(t))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Xt)return Xt;if(Rt)return Rt;if(Gt)return Gt;if(Wt)return Wt;throw new Error("unexpected error. Unable to resolve global object.")}(),Mt=Zt.document&&Zt.document.childNodes,Yt=Int8Array;function zt(){return/^\s*function\s*([^(]*)/i}var Ut=/^\s*function\s*([^(]*)/i;function Ht(t){var e,n,r,i;if(("Object"===(n=f(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=Ut.exec(r.toString()))return e[1]}return Tt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}J(zt,"REGEXP",Ut);var Dt="function"==typeof At||"object"==typeof Yt||"function"==typeof Mt?function(t){return Ht(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ht(t).toLowerCase():e};function qt(t){return t.constructor&&t.constructor.prototype===t}var Jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kt="undefined"==typeof window?void 0:window;var Qt=function(){var t;if("undefined"===Dt(Kt))return!1;for(t in Kt)try{-1===Vt(Jt,t)&&a(Kt,t)&&null!==Kt[t]&&"object"===Dt(Kt[t])&&qt(Kt[t])}catch(t){return!0}return!1}(),te="undefined"!=typeof window;var ee,ne=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ee=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return St(e)?t(Et.call(e)):t(e)}:t:function(t){var e,n,r,i,o,u,c;if(i=[],St(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Tt(t))return i;n=kt&&r}for(o in t)n&&"prototype"===o||!a(t,o)||i.push(String(o));if(It)for(e=function(t){if(!1===te&&!Qt)return qt(t);try{return qt(t)}catch(t){return!1}}(t),c=0;c<ne.length;c++)u=ne[c],e&&"constructor"===u||!a(t,u)||i.push(String(u));return i};var re=ee;function ie(t){return"function"===Dt(t)}var oe,ae=Object,ue=Object.getPrototypeOf;oe=ie(Object.getPrototypeOf)?ue:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ce=oe;var le=Object.prototype;function fe(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!Ot(t)}(t)&&(e=function(t){return null==t?null:(t=ae(t),ce(t))}(t),!e||!a(t,"constructor")&&a(e,"constructor")&&ie(e.constructor)&&"[object Function]"===f(e.constructor)&&a(e,"isPrototypeOf")&&ie(e.isPrototypeOf)&&(e===le||function(t){var e;for(e in t)if(!a(t,e))return!1;return!0}(t)))}function se(t,e){var n,r,i,o,u,c,l,f=!0;if(!Tt(t))throw new TypeError(X("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!fe(e))throw new TypeError(X("invalid argument. Options argument must be an object. Value: `%s`.",e));if(a(e,"duplicates")&&!Ft(f=e.duplicates))throw new TypeError(X("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(n=re(t)).length,u={},f)for(l=0;l<r;l++)a(u,o=t[i=n[l]])?(c=u[o],Ot(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(l=0;l<r;l++)u[t[i=n[l]]]=i;return u}var pe={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function ge(){var t;return 0===arguments.length?pe.all.slice():(t=pe[arguments[0]])?t.slice():[]}function be(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ye(t,e,n){q(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}J(ge,"enum",be),function(t,e){var n,r,i;for(n=re(e),i=0;i<n.length;i++)ye(t,r=n[i],e[r])}(ge,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var de=se({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1});var he,ve,me={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function we(t){var e=typeof t;return"string"===e?null===function(t){var e=me[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=de[t];return"string"==typeof e?e:null}(t):null}function je(t){return 0===arguments.length?{binary:"r",bool:"x",complex64:"c",complex128:"z",float16:"h",bfloat16:"e",float32:"f",float64:"d",float128:"g",generic:"o",int8:"s",int16:"k",int32:"i",int64:"l",int128:"m",int256:"n",uint8:"b",uint8c:"a",uint16:"t",uint32:"u",uint64:"v",uint128:"w",uint256:"y"}:(void 0===he&&(he={binary:"r",bool:"x",complex64:"c",complex128:"z",float16:"h",bfloat16:"e",float32:"f",float64:"d",float128:"g",generic:"o",int8:"s",int16:"k",int32:"i",int64:"l",int128:"m",int256:"n",uint8:"b",uint8c:"a",uint16:"t",uint32:"u",uint64:"v",uint128:"w",uint256:"y"}),he[we(t)]||null)}return function(t){return 0===arguments.length?se(je()):(void 0===ve&&(ve=se(je())),ve[t]||null)}}));
//# sourceMappingURL=index.js.map
