parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Da7i":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defer=o,exports.navigateTo=exports.keymap=void 0;var e=function(e){document.addEventListener("keydown",function(t){if("textarea"!==t.target.type){var o=t.code;e[o]&&(e[o](t),t.stopPropagation())}})};exports.keymap=e;var t=function(e){var t=document.querySelector(e);t&&t.click()};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return setTimeout(t,e)}}exports.navigateTo=t;
},{}],"VgHI":[function(require,module,exports) {
"use strict";var e=require("./slide"),t="undefined"!=typeof InstallTrigger;if(t){var r=document.querySelector("main");r&&(r.style.scrollBehavior="smooth")}var s="section:target .previous a",o="section:target .next a",a=function(){return(0,e.navigateTo)("section.cover")},n=function(){var t=document.querySelector("section.steps:target");if(t){var r=t.querySelector(".step-current"),s=t.querySelector(r?".step-current ~ .step":".step");r&&(r.classList.toggle("step-current"),r.classList.toggle("step-done")),s?s.classList.toggle("step-current"):(0,e.navigateTo)(o)}else(0,e.navigateTo)(o)},c=function(){var t=document.querySelector("section.steps:target");if(t){var r=t.querySelector(".step-current"),o=t.querySelectorAll(".step-done"),a=o&&o[o.length-1];r&&r.classList.toggle("step-current"),a?(a.classList.toggle("step-current"),a.classList.toggle("step-done")):(0,e.navigateTo)(s)}else(0,e.navigateTo)(s)};(0,e.keymap)({ArrowRight:n,ArrowLeft:c,Space:n,Home:a}),(0,e.navigateTo)("a[href='".concat(document.location.hash,"']"));
},{"./slide":"Da7i"}]},{},["VgHI"], null)