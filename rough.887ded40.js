parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tRH2":[function(require,module,exports) {
function t(t,i){return!i||"object"!==s(i)&&"function"!=typeof i?e(t):i}function e(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,e,i){return e&&h(t.prototype,e),i&&h(t,i),t}var l=function(){"use strict";var e="undefined"!=typeof self,n=function(){function t(e,i){r(this,t),this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1},this.config=e||{},this.surface=i,this.config.options&&(this.defaultOptions=this._options(this.config.options))}return o(t,[{key:"_options",value:function(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}},{key:"_drawable",value:function(t,e,i){return{shape:t,sets:e||[],options:i||this.defaultOptions}}},{key:"getCanvasSize",value:function(){var t=function(t){return t&&"object"==s(t)&&t.baseVal&&t.baseVal.value?t.baseVal.value:t||100};return this.surface?[t(this.surface.width),t(this.surface.height)]:[100,100]}},{key:"computePolygonSize",value:function(t){if(t.length){for(var e=t[0][0],i=t[0][0],a=t[0][1],n=t[0][1],s=1;s<t.length;s++)e=Math.min(e,t[s][0]),i=Math.max(i,t[s][0]),a=Math.min(a,t[s][1]),n=Math.max(n,t[s][1]);return[i-e,n-a]}return[0,0]}},{key:"polygonPath",value:function(t){var e="";if(t.length){e="M".concat(t[0][0],",").concat(t[0][1]);for(var i=1;i<t.length;i++)e="".concat(e," L").concat(t[i][0],",").concat(t[i][1])}return e}},{key:"computePathSize",value:function(t){var i=[0,0];if(e&&self.document)try{var a="http://www.w3.org/2000/svg",n=self.document.createElementNS(a,"svg");n.setAttribute("width","0"),n.setAttribute("height","0");var s=self.document.createElementNS(a,"path");s.setAttribute("d",t),n.appendChild(s),self.document.body.appendChild(n);var r=s.getBBox();r&&(i[0]=r.width||0,i[1]=r.height||0),self.document.body.removeChild(n)}catch(e){}var h=this.getCanvasSize();return i[0]*i[1]||(i=h),i}},{key:"toPaths",value:function(t){var e=t.sets||[],i=t.options||this.defaultOptions,a=[],n=!0,s=!1,r=void 0;try{for(var h,o=e[Symbol.iterator]();!(n=(h=o.next()).done);n=!0){var l=h.value,u=null;switch(l.type){case"path":u={d:this.opsToPath(l),stroke:i.stroke,strokeWidth:i.strokeWidth,fill:"none"};break;case"fillPath":u={d:this.opsToPath(l),stroke:"none",strokeWidth:0,fill:i.fill||"none"};break;case"fillSketch":u=this.fillSketch(l,i);break;case"path2Dfill":u={d:l.path||"",stroke:"none",strokeWidth:0,fill:i.fill||"none"};break;case"path2Dpattern":var c=l.size,f={x:0,y:0,width:1,height:1,viewBox:"0 0 ".concat(Math.round(c[0])," ").concat(Math.round(c[1])),patternUnits:"objectBoundingBox",path:this.fillSketch(l,i)};u={d:l.path,stroke:"none",strokeWidth:0,pattern:f}}u&&a.push(u)}}catch(p){s=!0,r=p}finally{try{n||null==o.return||o.return()}finally{if(s)throw r}}return a}},{key:"fillSketch",value:function(t,e){var i=e.fillWeight;return i<0&&(i=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||"none",strokeWidth:i,fill:"none"}}},{key:"opsToPath",value:function(t){var e="",i=!0,a=!1,n=void 0;try{for(var s,r=t.ops[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var h=s.value,o=h.data;switch(h.op){case"move":e+="M".concat(o[0]," ").concat(o[1]," ");break;case"bcurveTo":e+="C".concat(o[0]," ").concat(o[1],", ").concat(o[2]," ").concat(o[3],", ").concat(o[4]," ").concat(o[5]," ");break;case"qcurveTo":e+="Q".concat(o[0]," ").concat(o[1],", ").concat(o[2]," ").concat(o[3]," ");break;case"lineTo":e+="L".concat(o[0]," ").concat(o[1]," ")}}}catch(l){a=!0,n=l}finally{try{i||null==r.return||r.return()}finally{if(a)throw n}}return e.trim()}}]),t}();function h(t,e){return t.type===e}var l={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:4,t:2,V:1,v:1,Z:0,z:0},u=function(){function t(e){r(this,t),this.COMMAND=0,this.NUMBER=1,this.EOD=2,this.segments=[],this.parseData(e),this.processPoints()}return o(t,[{key:"tokenize",value:function(t){for(var e=new Array;""!==t;)if(t.match(/^([ \t\r\n,]+)/))t=t.substr(RegExp.$1.length);else if(t.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:this.COMMAND,text:RegExp.$1},t=t.substr(RegExp.$1.length);else{if(!t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return console.error("Unrecognized segment command: "+t),[];e[e.length]={type:this.NUMBER,text:"".concat(parseFloat(RegExp.$1))},t=t.substr(RegExp.$1.length)}return e[e.length]={type:this.EOD,text:""},e}},{key:"parseData",value:function(t){var e=this.tokenize(t),i=0,a=e[i],n="BOD";for(this.segments=new Array;!h(a,this.EOD);){var s=void 0,r=new Array;if("BOD"===n){if("M"!==a.text&&"m"!==a.text)return void this.parseData("M0,0"+t);i++,s=l[a.text],n=a.text}else h(a,this.NUMBER)?s=l[n]:(i++,s=l[a.text],n=a.text);if(i+s<e.length){for(var o=i;o<i+s;o++){var u=e[o];if(!h(u,this.NUMBER))return void console.error("Parameter type is not a number: "+n+","+u.text);r[r.length]=+u.text}if("number"!=typeof l[n])return void console.error("Unsupported segment type: "+n);var c={key:n,data:r};this.segments.push(c),a=e[i+=s],"M"===n&&(n="L"),"m"===n&&(n="l")}else console.error("Path data ended before all parameters were found")}}},{key:"processPoints",value:function(){for(var t=null,e=[0,0],i=0;i<this.segments.length;i++){var a=this.segments[i];switch(a.key){case"M":case"L":case"T":a.point=[a.data[0],a.data[1]];break;case"m":case"l":case"t":a.point=[a.data[0]+e[0],a.data[1]+e[1]];break;case"H":a.point=[a.data[0],e[1]];break;case"h":a.point=[a.data[0]+e[0],e[1]];break;case"V":a.point=[e[0],a.data[0]];break;case"v":a.point=[e[0],a.data[0]+e[1]];break;case"z":case"Z":t&&(a.point=[t[0],t[1]]);break;case"C":a.point=[a.data[4],a.data[5]];break;case"c":a.point=[a.data[4]+e[0],a.data[5]+e[1]];break;case"S":a.point=[a.data[2],a.data[3]];break;case"s":a.point=[a.data[2]+e[0],a.data[3]+e[1]];break;case"Q":a.point=[a.data[2],a.data[3]];break;case"q":a.point=[a.data[2]+e[0],a.data[3]+e[1]];break;case"A":a.point=[a.data[5],a.data[6]];break;case"a":a.point=[a.data[5]+e[0],a.data[6]+e[1]]}"m"!==a.key&&"M"!==a.key||(t=null),a.point&&(e=a.point,t||(t=a.point)),"z"!==a.key&&"Z"!==a.key||(t=null)}}},{key:"closed",get:function(){if(void 0===this._closed){this._closed=!1;var t=!0,e=!1,i=void 0;try{for(var a,n=this.segments[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){"z"===a.value.key.toLowerCase()&&(this._closed=!0)}}catch(s){e=!0,i=s}finally{try{t||null==n.return||n.return()}finally{if(e)throw i}}}return this._closed}}]),t}(),c=function(){function t(e){r(this,t),this._position=[0,0],this._first=null,this.bezierReflectionPoint=null,this.quadReflectionPoint=null,this.parsed=new u(e)}return o(t,[{key:"setPosition",value:function(t,e){this._position=[t,e],this._first||(this._first=[t,e])}},{key:"segments",get:function(){return this.parsed.segments}},{key:"closed",get:function(){return this.parsed.closed}},{key:"linearPoints",get:function(){if(!this._linearPoints){var t=[],e=[],i=!0,a=!1,n=void 0;try{for(var s,r=this.parsed.segments[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var h=s.value,o=h.key.toLowerCase();("m"!==o&&"z"!==o||(e.length&&(t.push(e),e=[]),"z"!==o))&&h.point&&e.push(h.point)}}catch(l){a=!0,n=l}finally{try{i||null==r.return||r.return()}finally{if(a)throw n}}e.length&&(t.push(e),e=[]),this._linearPoints=t}return this._linearPoints}},{key:"first",get:function(){return this._first},set:function(t){this._first=t}},{key:"position",get:function(){return this._position}},{key:"x",get:function(){return this._position[0]}},{key:"y",get:function(){return this._position[1]}}]),t}(),f=function(){function t(e,i,a,n,s,h){if(r(this,t),this._segIndex=0,this._numSegs=0,this._rx=0,this._ry=0,this._sinPhi=0,this._cosPhi=0,this._C=[0,0],this._theta=0,this._delta=0,this._T=0,this._from=e,e[0]!==i[0]||e[1]!==i[1]){var o=Math.PI/180;this._rx=Math.abs(a[0]),this._ry=Math.abs(a[1]),this._sinPhi=Math.sin(n*o),this._cosPhi=Math.cos(n*o);var l=this._cosPhi*(e[0]-i[0])/2+this._sinPhi*(e[1]-i[1])/2,u=-this._sinPhi*(e[0]-i[0])/2+this._cosPhi*(e[1]-i[1])/2,c=0,f=this._rx*this._rx*this._ry*this._ry-this._rx*this._rx*u*u-this._ry*this._ry*l*l;if(f<0){var p=Math.sqrt(1-f/(this._rx*this._rx*this._ry*this._ry));this._rx=this._rx*p,this._ry=this._ry*p,c=0}else c=(s===h?-1:1)*Math.sqrt(f/(this._rx*this._rx*u*u+this._ry*this._ry*l*l));var v=c*this._rx*u/this._ry,d=-c*this._ry*l/this._rx;this._C=[0,0],this._C[0]=this._cosPhi*v-this._sinPhi*d+(e[0]+i[0])/2,this._C[1]=this._sinPhi*v+this._cosPhi*d+(e[1]+i[1])/2,this._theta=this.calculateVectorAngle(1,0,(l-v)/this._rx,(u-d)/this._ry);var y=this.calculateVectorAngle((l-v)/this._rx,(u-d)/this._ry,(-l-v)/this._rx,(-u-d)/this._ry);!h&&y>0?y-=2*Math.PI:h&&y<0&&(y+=2*Math.PI),this._numSegs=Math.ceil(Math.abs(y/(Math.PI/2))),this._delta=y/this._numSegs,this._T=8/3*Math.sin(this._delta/4)*Math.sin(this._delta/4)/Math.sin(this._delta/2)}}return o(t,[{key:"getNextSegment",value:function(){if(this._segIndex===this._numSegs)return null;var t=Math.cos(this._theta),e=Math.sin(this._theta),i=this._theta+this._delta,a=Math.cos(i),n=Math.sin(i),s=[this._cosPhi*this._rx*a-this._sinPhi*this._ry*n+this._C[0],this._sinPhi*this._rx*a+this._cosPhi*this._ry*n+this._C[1]],r=[this._from[0]+this._T*(-this._cosPhi*this._rx*e-this._sinPhi*this._ry*t),this._from[1]+this._T*(-this._sinPhi*this._rx*e+this._cosPhi*this._ry*t)],h=[s[0]+this._T*(this._cosPhi*this._rx*n+this._sinPhi*this._ry*a),s[1]+this._T*(this._sinPhi*this._rx*n-this._cosPhi*this._ry*a)];return this._theta=i,this._from=[s[0],s[1]],this._segIndex++,{cp1:r,cp2:h,to:s}}},{key:"calculateVectorAngle",value:function(t,e,i,a){var n=Math.atan2(e,t),s=Math.atan2(a,i);return s>=n?s-n:2*Math.PI-(n-s)}}]),t}(),p=function(){function t(e,i){r(this,t),this.sets=e,this.closed=i}return o(t,[{key:"fit",value:function(t){var e=[],i=!0,a=!1,n=void 0;try{for(var s,r=this.sets[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var h=s.value,o=h.length,l=Math.floor(t*o);if(l<5){if(o<=5)continue;l=5}e.push(this.reduce(h,l))}}catch(d){a=!0,n=d}finally{try{i||null==r.return||r.return()}finally{if(a)throw n}}for(var u="",c=0;c<e.length;c++){for(var f=e[c],p=0;p<f.length;p++){var v=f[p];u+=0===p?"M"+v[0]+","+v[1]:"L"+v[0]+","+v[1]}this.closed&&(u+="z ")}return u}},{key:"distance",value:function(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}},{key:"reduce",value:function(t,e){if(t.length<=e)return t;for(var i=t.slice(0);i.length>e;){for(var a=-1,n=-1,s=1;s<i.length-1;s++){var r=this.distance(i[s-1],i[s]),h=this.distance(i[s],i[s+1]),o=this.distance(i[s-1],i[s+1]),l=(r+h+o)/2,u=Math.sqrt(l*(l-r)*(l-h)*(l-o));(a<0||u<a)&&(a=u,n=s)}if(!(n>0))break;i.splice(n,1)}return i}}]),t}(),v=function(){function t(e,i){r(this,t),this.xi=Number.MAX_VALUE,this.yi=Number.MAX_VALUE,this.px1=e[0],this.py1=e[1],this.px2=i[0],this.py2=i[1],this.a=this.py2-this.py1,this.b=this.px1-this.px2,this.c=this.px2*this.py1-this.px1*this.py2,this._undefined=0===this.a&&0===this.b&&0===this.c}return o(t,[{key:"isUndefined",value:function(){return this._undefined}},{key:"intersects",value:function(t){if(this.isUndefined()||t.isUndefined())return!1;var e=Number.MAX_VALUE,i=Number.MAX_VALUE,a=0,n=0,s=this.a,r=this.b,h=this.c;return Math.abs(r)>1e-5&&(e=-s/r,a=-h/r),Math.abs(t.b)>1e-5&&(i=-t.a/t.b,n=-t.c/t.b),e===Number.MAX_VALUE?i===Number.MAX_VALUE?-h/s==-t.c/t.a&&(this.py1>=Math.min(t.py1,t.py2)&&this.py1<=Math.max(t.py1,t.py2)?(this.xi=this.px1,this.yi=this.py1,!0):this.py2>=Math.min(t.py1,t.py2)&&this.py2<=Math.max(t.py1,t.py2)&&(this.xi=this.px2,this.yi=this.py2,!0)):(this.xi=this.px1,this.yi=i*this.xi+n,!((this.py1-this.yi)*(this.yi-this.py2)<-1e-5||(t.py1-this.yi)*(this.yi-t.py2)<-1e-5||Math.abs(t.a)<1e-5&&(t.px1-this.xi)*(this.xi-t.px2)<-1e-5)):i===Number.MAX_VALUE?(this.xi=t.px1,this.yi=e*this.xi+a,!((t.py1-this.yi)*(this.yi-t.py2)<-1e-5||(this.py1-this.yi)*(this.yi-this.py2)<-1e-5||Math.abs(s)<1e-5&&(this.px1-this.xi)*(this.xi-this.px2)<-1e-5)):e===i?a===n&&(this.px1>=Math.min(t.px1,t.px2)&&this.px1<=Math.max(t.py1,t.py2)?(this.xi=this.px1,this.yi=this.py1,!0):this.px2>=Math.min(t.px1,t.px2)&&this.px2<=Math.max(t.px1,t.px2)&&(this.xi=this.px2,this.yi=this.py2,!0)):(this.xi=(n-a)/(e-i),this.yi=e*this.xi+a,!((this.px1-this.xi)*(this.xi-this.px2)<-1e-5||(t.px1-this.xi)*(this.xi-t.px2)<-1e-5))}}]),t}(),d=function(){function t(e,i,a,n,s,h,o,l){r(this,t),this.deltaX=0,this.hGap=0,this.top=e,this.bottom=i,this.left=a,this.right=n,this.gap=s,this.sinAngle=h,this.tanAngle=l,Math.abs(h)<1e-4?this.pos=a+s:Math.abs(h)>.9999?this.pos=e+s:(this.deltaX=(i-e)*Math.abs(l),this.pos=a-Math.abs(this.deltaX),this.hGap=Math.abs(s/o),this.sLeft=new v([a,i],[a,e]),this.sRight=new v([n,i],[n,e]))}return o(t,[{key:"nextLine",value:function(){if(Math.abs(this.sinAngle)<1e-4){if(this.pos<this.right){var t=[this.pos,this.top,this.pos,this.bottom];return this.pos+=this.gap,t}}else if(Math.abs(this.sinAngle)>.9999){if(this.pos<this.bottom){var e=[this.left,this.pos,this.right,this.pos];return this.pos+=this.gap,e}}else{var i=this.pos-this.deltaX/2,a=this.pos+this.deltaX/2,n=this.bottom,s=this.top;if(this.pos<this.right+this.deltaX){for(;i<this.left&&a<this.left||i>this.right&&a>this.right;)if(this.pos+=this.hGap,i=this.pos-this.deltaX/2,a=this.pos+this.deltaX/2,this.pos>this.right+this.deltaX)return null;var r=new v([i,n],[a,s]);this.sLeft&&r.intersects(this.sLeft)&&(i=r.xi,n=r.yi),this.sRight&&r.intersects(this.sRight)&&(a=r.xi,s=r.yi),this.tanAngle>0&&(i=this.right-(i-this.left),a=this.right-(a-this.left));var h=[i,n,a,s];return this.pos+=this.hGap,h}}return null}}]),t}();function y(t){var e=t[0],i=t[1];return Math.sqrt(Math.pow(e[0]-i[0],2)+Math.pow(e[1]-i[1],2))}function g(t,e){for(var i=[],a=new v([t[0],t[1]],[t[2],t[3]]),n=0;n<e.length;n++){var s=new v(e[n],e[(n+1)%e.length]);a.intersects(s)&&i.push([a.xi,a.yi])}return i}function k(t,e,i,a,n,s,r){return[-i*s-a*n+i+s*t+n*e,r*(i*n-a*s)+a+-r*n*t+r*s*e]}function b(t,e){var i=[];if(t&&t.length){for(var a=t[0][0],n=t[0][0],s=t[0][1],r=t[0][1],h=1;h<t.length;h++)a=Math.min(a,t[h][0]),n=Math.max(n,t[h][0]),s=Math.min(s,t[h][1]),r=Math.max(r,t[h][1]);var o=e.hachureAngle,l=e.hachureGap;l<0&&(l=4*e.strokeWidth),l=Math.max(l,.1);for(var u,c=o%180*(Math.PI/180),f=Math.cos(c),p=Math.sin(c),v=Math.tan(c),y=new d(s-1,r+1,a-1,n+1,l,p,f,v);null!=(u=y.nextLine());)for(var k=g(u,t),b=0;b<k.length;b++)if(b<k.length-1){var x=k[b],_=k[b+1];i.push([x,_])}}return i}function x(t,e,i,a,n,s){var r=[],h=Math.abs(a/2),o=Math.abs(n/2);h+=t.randOffset(.05*h,s),o+=t.randOffset(.05*o,s);var l=s.hachureAngle,u=s.hachureGap;u<=0&&(u=4*s.strokeWidth);var c=s.fillWeight;c<0&&(c=s.strokeWidth/2);for(var f=l%180*(Math.PI/180),p=Math.tan(f),v=o/h,d=Math.sqrt(v*p*v*p+1),y=v*p/d,g=1/d,b=u/(h*o/Math.sqrt(o*g*(o*g)+h*y*(h*y))/h),x=Math.sqrt(h*h-(e-h+b)*(e-h+b)),_=e-h+b;_<e+h;_+=b){var m=k(_,i-(x=Math.sqrt(h*h-(e-_)*(e-_))),e,i,y,g,v),M=k(_,i+x,e,i,y,g,v);r.push([m,M])}return r}var _=function(){function t(e){r(this,t),this.helper=e}return o(t,[{key:"fillPolygon",value:function(t,e){return this._fillPolygon(t,e)}},{key:"fillEllipse",value:function(t,e,i,a,n){return this._fillEllipse(t,e,i,a,n)}},{key:"_fillPolygon",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=b(t,e);return{type:"fillSketch",ops:this.renderLines(a,e,i)}}},{key:"_fillEllipse",value:function(t,e,i,a,n){var s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],r=x(this.helper,t,e,i,a,n);return{type:"fillSketch",ops:this.renderLines(r,n,s)}}},{key:"renderLines",value:function(t,e,i){var a=[],n=null,s=!0,r=!1,h=void 0;try{for(var o,l=t[Symbol.iterator]();!(s=(o=l.next()).done);s=!0){var u=o.value;a=a.concat(this.helper.doubleLineOps(u[0][0],u[0][1],u[1][0],u[1][1],e)),i&&n&&(a=a.concat(this.helper.doubleLineOps(n[0],n[1],u[0][0],u[0][1],e))),n=u[1]}}catch(c){r=!0,h=c}finally{try{s||null==l.return||l.return()}finally{if(r)throw h}}return a}}]),t}(),m=function(e){function n(){return r(this,n),t(this,i(n).apply(this,arguments))}return a(n,_),o(n,[{key:"fillPolygon",value:function(t,e){return this._fillPolygon(t,e,!0)}},{key:"fillEllipse",value:function(t,e,i,a,n){return this._fillEllipse(t,e,i,a,n,!0)}}]),n}(),M=function(e){function n(){return r(this,n),t(this,i(n).apply(this,arguments))}return a(n,_),o(n,[{key:"fillPolygon",value:function(t,e){var i=this._fillPolygon(t,e),a=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),n=this._fillPolygon(t,a);return i.ops=i.ops.concat(n.ops),i}},{key:"fillEllipse",value:function(t,e,i,a,n){var s=this._fillEllipse(t,e,i,a,n),r=Object.assign({},n,{hachureAngle:n.hachureAngle+90}),h=this._fillEllipse(t,e,i,a,r);return s.ops=s.ops.concat(h.ops),s}}]),n}(),w=function(){function t(e){r(this,t),this.helper=e}return o(t,[{key:"fillPolygon",value:function(t,e){var i=b(t,e=Object.assign({},e,{curveStepCount:4,hachureAngle:0}));return this.dotsOnLines(i,e)}},{key:"fillEllipse",value:function(t,e,i,a,n){n=Object.assign({},n,{curveStepCount:4,hachureAngle:0});var s=x(this.helper,t,e,i,a,n);return this.dotsOnLines(s,n)}},{key:"dotsOnLines",value:function(t,e){var i=[],a=e.hachureGap;a<0&&(a=4*e.strokeWidth),a=Math.max(a,.1);var n=e.fillWeight;n<0&&(n=e.strokeWidth/2);var s=!0,r=!1,h=void 0;try{for(var o,l=t[Symbol.iterator]();!(s=(o=l.next()).done);s=!0)for(var u=o.value,c=y(u)/a,f=Math.ceil(c)-1,p=Math.atan((u[1][1]-u[0][1])/(u[1][0]-u[0][0])),v=0;v<f;v++){var d=a*(v+1),g=d*Math.sin(p),k=d*Math.cos(p),b=[u[0][0]-k,u[0][1]+g],x=this.helper.randOffsetWithRange(b[0]-a/4,b[0]+a/4,e),_=this.helper.randOffsetWithRange(b[1]-a/4,b[1]+a/4,e),m=this.helper.ellipse(x,_,n,n,e);i=i.concat(m.ops)}}catch(M){r=!0,h=M}finally{try{s||null==l.return||l.return()}finally{if(r)throw h}}return{type:"fillSketch",ops:i}}}]),t}(),P={};function S(t,e){var i=t.fillStyle||"hachure";if(!P[i])switch(i){case"zigzag":P[i]||(P[i]=new m(e));break;case"cross-hatch":P[i]||(P[i]=new M(e));break;case"dots":P[i]||(P[i]=new w(e));break;case"hachure":default:P[i="hachure"]||(P[i]=new _(e))}return P[i]}var A={randOffset:function(t,e){return z(t,e)},randOffsetWithRange:function(t,e,i){return L(t,e,i)},ellipse:C,doubleLineOps:function(t,e,i,a,n){return D(t,e,i,a,n)}};function O(t,e,i,a,n){return{type:"path",ops:D(t,e,i,a,n)}}function T(t,e,i){var a=(t||[]).length;if(a>2){for(var n=[],s=0;s<a-1;s++)n=n.concat(D(t[s][0],t[s][1],t[s+1][0],t[s+1][1],i));return e&&(n=n.concat(D(t[a-1][0],t[a-1][1],t[0][0],t[0][1],i))),{type:"path",ops:n}}return 2===a?O(t[0][0],t[0][1],t[1][0],t[1][1],i):{type:"path",ops:[]}}function E(t,e){var i=I(t,1*(1+.2*e.roughness),e),a=I(t,1.5*(1+.22*e.roughness),e);return{type:"path",ops:i.concat(a)}}function C(t,e,i,a,n){var s=2*Math.PI/n.curveStepCount,r=Math.abs(i/2),h=Math.abs(a/2),o=U(s,t,e,r+=z(.05*r,n),h+=z(.05*h,n),1,s*L(.1,L(.4,1,n),n),n),l=U(s,t,e,r,h,1.5,0,n);return{type:"path",ops:o.concat(l)}}function R(t,e,i,a,n,s,r,h,o){var l=t,u=e,c=Math.abs(i/2),f=Math.abs(a/2);c+=z(.01*c,o),f+=z(.01*f,o);for(var p=n,v=s;p<0;)p+=2*Math.PI,v+=2*Math.PI;v-p>2*Math.PI&&(p=0,v=2*Math.PI);var d=2*Math.PI/o.curveStepCount,y=Math.min(d/2,(v-p)/2),g=V(y,l,u,c,f,p,v,1,o),k=V(y,l,u,c,f,p,v,1.5,o),b=g.concat(k);return r&&(h?b=(b=b.concat(D(l,u,l+c*Math.cos(p),u+f*Math.sin(p),o))).concat(D(l,u,l+c*Math.cos(v),u+f*Math.sin(v),o)):(b.push({op:"lineTo",data:[l,u]}),b.push({op:"lineTo",data:[l+c*Math.cos(p),u+f*Math.sin(p)]}))),{type:"path",ops:b}}function W(t,e){var i=[];if(t.length){var a=e.maxRandomnessOffset||0,n=t.length;if(n>2){i.push({op:"move",data:[t[0][0]+z(a,e),t[0][1]+z(a,e)]});for(var s=1;s<n;s++)i.push({op:"lineTo",data:[t[s][0]+z(a,e),t[s][1]+z(a,e)]})}}return{type:"fillPath",ops:i}}function N(t,e){return S(e,A).fillPolygon(t,e)}function L(t,e,i){return i.roughness*(Math.random()*(e-t)+t)}function z(t,e){return L(-t,t,e)}function D(t,e,i,a,n){var s=q(t,e,i,a,n,!0,!1),r=q(t,e,i,a,n,!0,!0);return s.concat(r)}function q(t,e,i,a,n,s,r){var h=Math.pow(t-i,2)+Math.pow(e-a,2),o=n.maxRandomnessOffset||0;o*o*100>h&&(o=Math.sqrt(h)/10);var l=o/2,u=.2+.2*Math.random(),c=n.bowing*n.maxRandomnessOffset*(a-e)/200,f=n.bowing*n.maxRandomnessOffset*(t-i)/200;c=z(c,n),f=z(f,n);var p=[],v=function(){return z(l,n)},d=function(){return z(o,n)};return s&&(r?p.push({op:"move",data:[t+v(),e+v()]}):p.push({op:"move",data:[t+z(o,n),e+z(o,n)]})),r?p.push({op:"bcurveTo",data:[c+t+(i-t)*u+v(),f+e+(a-e)*u+v(),c+t+2*(i-t)*u+v(),f+e+2*(a-e)*u+v(),i+v(),a+v()]}):p.push({op:"bcurveTo",data:[c+t+(i-t)*u+d(),f+e+(a-e)*u+d(),c+t+2*(i-t)*u+d(),f+e+2*(a-e)*u+d(),i+d(),a+d()]}),p}function I(t,e,i){var a=[];a.push([t[0][0]+z(e,i),t[0][1]+z(e,i)]),a.push([t[0][0]+z(e,i),t[0][1]+z(e,i)]);for(var n=1;n<t.length;n++)a.push([t[n][0]+z(e,i),t[n][1]+z(e,i)]),n===t.length-1&&a.push([t[n][0]+z(e,i),t[n][1]+z(e,i)]);return B(a,null,i)}function B(t,e,i){var a=t.length,n=[];if(a>3){var s=[],r=1-i.curveTightness;n.push({op:"move",data:[t[1][0],t[1][1]]});for(var h=1;h+2<a;h++){var o=t[h];s[0]=[o[0],o[1]],s[1]=[o[0]+(r*t[h+1][0]-r*t[h-1][0])/6,o[1]+(r*t[h+1][1]-r*t[h-1][1])/6],s[2]=[t[h+1][0]+(r*t[h][0]-r*t[h+2][0])/6,t[h+1][1]+(r*t[h][1]-r*t[h+2][1])/6],s[3]=[t[h+1][0],t[h+1][1]],n.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[3][0],s[3][1]]})}if(e&&2===e.length){var l=i.maxRandomnessOffset;n.push({op:"lineTo",data:[e[0]+z(l,i),e[1]+z(l,i)]})}}else 3===a?(n.push({op:"move",data:[t[1][0],t[1][1]]}),n.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===a&&(n=n.concat(D(t[0][0],t[0][1],t[1][0],t[1][1],i)));return n}function U(t,e,i,a,n,s,r,h){var o=z(.5,h)-Math.PI/2,l=[];l.push([z(s,h)+e+.9*a*Math.cos(o-t),z(s,h)+i+.9*n*Math.sin(o-t)]);for(var u=o;u<2*Math.PI+o-.01;u+=t)l.push([z(s,h)+e+a*Math.cos(u),z(s,h)+i+n*Math.sin(u)]);return l.push([z(s,h)+e+a*Math.cos(o+2*Math.PI+.5*r),z(s,h)+i+n*Math.sin(o+2*Math.PI+.5*r)]),l.push([z(s,h)+e+.98*a*Math.cos(o+r),z(s,h)+i+.98*n*Math.sin(o+r)]),l.push([z(s,h)+e+.9*a*Math.cos(o+.5*r),z(s,h)+i+.9*n*Math.sin(o+.5*r)]),B(l,null,h)}function V(t,e,i,a,n,s,r,h,o){var l=s+z(.1,o),u=[];u.push([z(h,o)+e+.9*a*Math.cos(l-t),z(h,o)+i+.9*n*Math.sin(l-t)]);for(var c=l;c<=r;c+=t)u.push([z(h,o)+e+a*Math.cos(c),z(h,o)+i+n*Math.sin(c)]);return u.push([e+a*Math.cos(r),i+n*Math.sin(r)]),u.push([e+a*Math.cos(r),i+n*Math.sin(r)]),B(u,null,o)}function X(t,e,i,a,n,s,r,h){for(var o=[],l=[h.maxRandomnessOffset||1,(h.maxRandomnessOffset||1)+.5],u=[0,0],c=0;c<2;c++)0===c?o.push({op:"move",data:[r.x,r.y]}):o.push({op:"move",data:[r.x+z(l[0],h),r.y+z(l[0],h)]}),u=[n+z(l[c],h),s+z(l[c],h)],o.push({op:"bcurveTo",data:[t+z(l[c],h),e+z(l[c],h),i+z(l[c],h),a+z(l[c],h),u[0],u[1]]});return r.setPosition(u[0],u[1]),o}function j(t,e,i,a){var n=[];switch(e.key){case"M":case"m":var s="m"===e.key;if(e.data.length>=2){var r=+e.data[0],h=+e.data[1];s&&(r+=t.x,h+=t.y);var o=1*(a.maxRandomnessOffset||0);r+=z(o,a),h+=z(o,a),t.setPosition(r,h),n.push({op:"move",data:[r,h]})}break;case"L":case"l":var l="l"===e.key;if(e.data.length>=2){var u=+e.data[0],c=+e.data[1];l&&(u+=t.x,c+=t.y),n=n.concat(D(t.x,t.y,u,c,a)),t.setPosition(u,c)}break;case"H":case"h":var p="h"===e.key;if(e.data.length){var v=+e.data[0];p&&(v+=t.x),n=n.concat(D(t.x,t.y,v,t.y,a)),t.setPosition(v,t.y)}break;case"V":case"v":var d="v"===e.key;if(e.data.length){var y=+e.data[0];d&&(y+=t.y),n=n.concat(D(t.x,t.y,t.x,y,a)),t.setPosition(t.x,y)}break;case"Z":case"z":t.first&&(n=n.concat(D(t.x,t.y,t.first[0],t.first[1],a)),t.setPosition(t.first[0],t.first[1]),t.first=null);break;case"C":case"c":var g="c"===e.key;if(e.data.length>=6){var k=+e.data[0],b=+e.data[1],x=+e.data[2],_=+e.data[3],m=+e.data[4],M=+e.data[5];g&&(k+=t.x,x+=t.x,m+=t.x,b+=t.y,_+=t.y,M+=t.y);var w=X(k,b,x,_,m,M,t,a);n=n.concat(w),t.bezierReflectionPoint=[m+(m-x),M+(M-_)]}break;case"S":case"s":var P="s"===e.key;if(e.data.length>=4){var S=+e.data[0],A=+e.data[1],O=+e.data[2],T=+e.data[3];P&&(S+=t.x,O+=t.x,A+=t.y,T+=t.y);var E=S,C=A,R=i?i.key:"",W=null;"c"!==R&&"C"!==R&&"s"!==R&&"S"!==R||(W=t.bezierReflectionPoint),W&&(E=W[0],C=W[1]);var N=X(E,C,S,A,O,T,t,a);n=n.concat(N),t.bezierReflectionPoint=[O+(O-S),T+(T-A)]}break;case"Q":case"q":var L="q"===e.key;if(e.data.length>=4){var q=+e.data[0],I=+e.data[1],B=+e.data[2],U=+e.data[3];L&&(q+=t.x,B+=t.x,I+=t.y,U+=t.y);var V=1*(1+.2*a.roughness),j=1.5*(1+.22*a.roughness);n.push({op:"move",data:[t.x+z(V,a),t.y+z(V,a)]});var G=[B+z(V,a),U+z(V,a)];n.push({op:"qcurveTo",data:[q+z(V,a),I+z(V,a),G[0],G[1]]}),n.push({op:"move",data:[t.x+z(j,a),t.y+z(j,a)]}),G=[B+z(j,a),U+z(j,a)],n.push({op:"qcurveTo",data:[q+z(j,a),I+z(j,a),G[0],G[1]]}),t.setPosition(G[0],G[1]),t.quadReflectionPoint=[B+(B-q),U+(U-I)]}break;case"T":case"t":var Q="t"===e.key;if(e.data.length>=2){var Z=+e.data[0],$=+e.data[1];Q&&(Z+=t.x,$+=t.y);var H=Z,F=$,J=i?i.key:"",K=null;"q"!==J&&"Q"!==J&&"t"!==J&&"T"!==J||(K=t.quadReflectionPoint),K&&(H=K[0],F=K[1]);var Y=1*(1+.2*a.roughness),tt=1.5*(1+.22*a.roughness);n.push({op:"move",data:[t.x+z(Y,a),t.y+z(Y,a)]});var et=[Z+z(Y,a),$+z(Y,a)];n.push({op:"qcurveTo",data:[H+z(Y,a),F+z(Y,a),et[0],et[1]]}),n.push({op:"move",data:[t.x+z(tt,a),t.y+z(tt,a)]}),et=[Z+z(tt,a),$+z(tt,a)],n.push({op:"qcurveTo",data:[H+z(tt,a),F+z(tt,a),et[0],et[1]]}),t.setPosition(et[0],et[1]),t.quadReflectionPoint=[Z+(Z-H),$+($-F)]}break;case"A":case"a":var it="a"===e.key;if(e.data.length>=7){var at=+e.data[0],nt=+e.data[1],st=+e.data[2],rt=+e.data[3],ht=+e.data[4],ot=+e.data[5],lt=+e.data[6];if(it&&(ot+=t.x,lt+=t.y),ot===t.x&&lt===t.y)break;if(0===at||0===nt)n=n.concat(D(t.x,t.y,ot,lt,a)),t.setPosition(ot,lt);else for(var ut=0;ut<1;ut++)for(var ct=new f([t.x,t.y],[ot,lt],[at,nt],st,!!rt,!!ht),ft=ct.getNextSegment();ft;){var pt=X(ft.cp1[0],ft.cp1[1],ft.cp2[0],ft.cp2[1],ft.to[0],ft.to[1],t,a);n=n.concat(pt),ft=ct.getNextSegment()}}}return n}var G=function(e){function s(){return r(this,s),t(this,i(s).apply(this,arguments))}return a(s,n),o(s,[{key:"line",value:function(t,e,i,a,n){var s=this._options(n);return this._drawable("line",[O(t,e,i,a,s)],s)}},{key:"rectangle",value:function(t,e,i,a,n){var s=this._options(n),r=[];if(s.fill){var h=[[t,e],[t+i,e],[t+i,e+a],[t,e+a]];"solid"===s.fillStyle?r.push(W(h,s)):r.push(N(h,s))}return r.push(function(t,e,i,a,n){return function(t,e){return T(t,!0,n)}([[t,e],[t+i,e],[t+i,e+a],[t,e+a]])}(t,e,i,a,s)),this._drawable("rectangle",r,s)}},{key:"ellipse",value:function(t,e,i,a,n){var s=this._options(n),r=[];if(s.fill)if("solid"===s.fillStyle){var h=C(t,e,i,a,s);h.type="fillPath",r.push(h)}else r.push(function(t,e,i,a,n){return S(n,A).fillEllipse(t,e,i,a,n)}(t,e,i,a,s));return r.push(C(t,e,i,a,s)),this._drawable("ellipse",r,s)}},{key:"circle",value:function(t,e,i,a){var n=this.ellipse(t,e,i,i,a);return n.shape="circle",n}},{key:"linearPath",value:function(t,e){var i=this._options(e);return this._drawable("linearPath",[T(t,!1,i)],i)}},{key:"arc",value:function(t,e,i,a,n,s){var r=arguments.length>6&&void 0!==arguments[6]&&arguments[6],h=arguments.length>7?arguments[7]:void 0,o=this._options(h),l=[];if(r&&o.fill)if("solid"===o.fillStyle){var u=R(t,e,i,a,n,s,!0,!1,o);u.type="fillPath",l.push(u)}else l.push(function(t,e,i,a,n,s,r){var h=t,o=e,l=Math.abs(i/2),u=Math.abs(a/2);l+=z(.01*l,r),u+=z(.01*u,r);for(var c=n,f=s;c<0;)c+=2*Math.PI,f+=2*Math.PI;f-c>2*Math.PI&&(c=0,f=2*Math.PI);for(var p=(f-c)/r.curveStepCount,v=[],d=c;d<=f;d+=p)v.push([h+l*Math.cos(d),o+u*Math.sin(d)]);return v.push([h+l*Math.cos(f),o+u*Math.sin(f)]),v.push([h,o]),N(v,r)}(t,e,i,a,n,s,o));return l.push(R(t,e,i,a,n,s,r,!0,o)),this._drawable("arc",l,o)}},{key:"curve",value:function(t,e){var i=this._options(e);return this._drawable("curve",[E(t,i)],i)}},{key:"polygon",value:function(t,e){var i=this._options(e),a=[];if(i.fill)if("solid"===i.fillStyle)a.push(W(t,i));else{var n=this.computePolygonSize(t),s=N([[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]],i);s.type="path2Dpattern",s.size=n,s.path=this.polygonPath(t),a.push(s)}return a.push(T(t,!0,i)),this._drawable("polygon",a,i)}},{key:"path",value:function(t,e){var i=this._options(e),a=[];if(!t)return this._drawable("path",a,i);if(i.fill)if("solid"===i.fillStyle){var n={type:"path2Dfill",path:t,ops:[]};a.push(n)}else{var s=this.computePathSize(t),r=N([[0,0],[s[0],0],[s[0],s[1]],[0,s[1]]],i);r.type="path2Dpattern",r.size=s,r.path=t,a.push(r)}return a.push(function(t,e){t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");var i=new c(t);if(e.simplification){var a=new p(i.linearPoints,i.closed).fit(e.simplification);i=new c(a)}for(var n=[],s=i.segments||[],r=0;r<s.length;r++){var h=j(i,s[r],r>0?s[r-1]:null,e);h&&h.length&&(n=n.concat(h))}return{type:"path",ops:n}}(t,i)),this._drawable("path",a,i)}}]),s}(),Q="undefined"!=typeof document,Z=function(){function t(e){r(this,t),this.canvas=e,this.ctx=this.canvas.getContext("2d")}return o(t,[{key:"draw",value:function(t){var e=t.sets||[],i=t.options||this.getDefaultOptions(),a=this.ctx,n=!0,s=!1,r=void 0;try{for(var h,o=e[Symbol.iterator]();!(n=(h=o.next()).done);n=!0){var l=h.value;switch(l.type){case"path":a.save(),a.strokeStyle=i.stroke,a.lineWidth=i.strokeWidth,this._drawToContext(a,l),a.restore();break;case"fillPath":a.save(),a.fillStyle=i.fill||"",this._drawToContext(a,l),a.restore();break;case"fillSketch":this.fillSketch(a,l,i);break;case"path2Dfill":this.ctx.save(),this.ctx.fillStyle=i.fill||"";var u=new Path2D(l.path);this.ctx.fill(u),this.ctx.restore();break;case"path2Dpattern":var c=this.canvas.ownerDocument||Q&&document;if(c){var f=l.size,p=c.createElement("canvas"),v=p.getContext("2d"),d=this.computeBBox(l.path);d&&(d.width||d.height)?(p.width=this.canvas.width,p.height=this.canvas.height,v.translate(d.x||0,d.y||0)):(p.width=f[0],p.height=f[1]),this.fillSketch(v,l,i),this.ctx.save(),this.ctx.fillStyle=this.ctx.createPattern(p,"repeat");var y=new Path2D(l.path);this.ctx.fill(y),this.ctx.restore()}else console.error("Cannot render path2Dpattern. No defs/document defined.")}}}catch(g){s=!0,r=g}finally{try{n||null==o.return||o.return()}finally{if(s)throw r}}}},{key:"computeBBox",value:function(t){if(Q)try{var e="http://www.w3.org/2000/svg",i=document.createElementNS(e,"svg");i.setAttribute("width","0"),i.setAttribute("height","0");var a=self.document.createElementNS(e,"path");a.setAttribute("d",t),i.appendChild(a),document.body.appendChild(i);var n=a.getBBox();return document.body.removeChild(i),n}catch(t){}return null}},{key:"fillSketch",value:function(t,e,i){var a=i.fillWeight;a<0&&(a=i.strokeWidth/2),t.save(),t.strokeStyle=i.fill||"",t.lineWidth=a,this._drawToContext(t,e),t.restore()}},{key:"_drawToContext",value:function(t,e){t.beginPath();var i=!0,a=!1,n=void 0;try{for(var s,r=e.ops[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var h=s.value,o=h.data;switch(h.op){case"move":t.moveTo(o[0],o[1]);break;case"bcurveTo":t.bezierCurveTo(o[0],o[1],o[2],o[3],o[4],o[5]);break;case"qcurveTo":t.quadraticCurveTo(o[0],o[1],o[2],o[3]);break;case"lineTo":t.lineTo(o[0],o[1])}}}catch(l){a=!0,n=l}finally{try{i||null==r.return||r.return()}finally{if(a)throw n}}"fillPath"===e.type?t.fill():t.stroke()}}]),t}(),$=function(e){function n(e,a){var s;return r(this,n),(s=t(this,i(n).call(this,e))).gen=new G(a||null,s.canvas),s}return a(n,Z),o(n,[{key:"getDefaultOptions",value:function(){return this.gen.defaultOptions}},{key:"line",value:function(t,e,i,a,n){var s=this.gen.line(t,e,i,a,n);return this.draw(s),s}},{key:"rectangle",value:function(t,e,i,a,n){var s=this.gen.rectangle(t,e,i,a,n);return this.draw(s),s}},{key:"ellipse",value:function(t,e,i,a,n){var s=this.gen.ellipse(t,e,i,a,n);return this.draw(s),s}},{key:"circle",value:function(t,e,i,a){var n=this.gen.circle(t,e,i,a);return this.draw(n),n}},{key:"linearPath",value:function(t,e){var i=this.gen.linearPath(t,e);return this.draw(i),i}},{key:"polygon",value:function(t,e){var i=this.gen.polygon(t,e);return this.draw(i),i}},{key:"arc",value:function(t,e,i,a,n,s){var r=arguments.length>6&&void 0!==arguments[6]&&arguments[6],h=arguments.length>7?arguments[7]:void 0,o=this.gen.arc(t,e,i,a,n,s,r,h);return this.draw(o),o}},{key:"curve",value:function(t,e){var i=this.gen.curve(t,e);return this.draw(i),i}},{key:"path",value:function(t,e){var i=this.gen.path(t,e);return this.draw(i),i}},{key:"generator",get:function(){return this.gen}}]),n}(),H="undefined"!=typeof document,F=function(){function t(e){r(this,t),this.svg=e}return o(t,[{key:"draw",value:function(t){var e=t.sets||[],i=t.options||this.getDefaultOptions(),a=this.svg.ownerDocument||window.document,n=a.createElementNS("http://www.w3.org/2000/svg","g"),s=!0,r=!1,h=void 0;try{for(var o,l=e[Symbol.iterator]();!(s=(o=l.next()).done);s=!0){var u=o.value,c=null;switch(u.type){case"path":(c=a.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d",this.opsToPath(u)),c.style.stroke=i.stroke,c.style.strokeWidth=i.strokeWidth+"",c.style.fill="none";break;case"fillPath":(c=a.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d",this.opsToPath(u)),c.style.stroke="none",c.style.strokeWidth="0",c.style.fill=i.fill||null;break;case"fillSketch":c=this.fillSketch(a,u,i);break;case"path2Dfill":(c=a.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d",u.path||""),c.style.stroke="none",c.style.strokeWidth="0",c.style.fill=i.fill||null;break;case"path2Dpattern":if(this.defs){var f=u.size,p=a.createElementNS("http://www.w3.org/2000/svg","pattern"),v="rough-".concat(Math.floor(Math.random()*(Number.MAX_SAFE_INTEGER||999999)));p.setAttribute("id",v),p.setAttribute("x","0"),p.setAttribute("y","0"),p.setAttribute("width","1"),p.setAttribute("height","1"),p.setAttribute("height","1"),p.setAttribute("viewBox","0 0 ".concat(Math.round(f[0])," ").concat(Math.round(f[1]))),p.setAttribute("patternUnits","objectBoundingBox");var d=this.fillSketch(a,u,i);p.appendChild(d),this.defs.appendChild(p),(c=a.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d",u.path||""),c.style.stroke="none",c.style.strokeWidth="0",c.style.fill="url(#".concat(v,")")}else console.error("Cannot render path2Dpattern. No defs/document defined.")}c&&n.appendChild(c)}}catch(y){r=!0,h=y}finally{try{s||null==l.return||l.return()}finally{if(r)throw h}}return n}},{key:"fillSketch",value:function(t,e,i){var a=i.fillWeight;a<0&&(a=i.strokeWidth/2);var n=t.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",this.opsToPath(e)),n.style.stroke=i.fill||null,n.style.strokeWidth=a+"",n.style.fill="none",n}},{key:"defs",get:function(){var t=this.svg.ownerDocument||H&&document;if(t&&!this._defs){var e=t.createElementNS("http://www.w3.org/2000/svg","defs");this.svg.firstChild?this.svg.insertBefore(e,this.svg.firstChild):this.svg.appendChild(e),this._defs=e}return this._defs||null}}]),t}(),J=function(e){function n(e,a){var s;return r(this,n),(s=t(this,i(n).call(this,e))).gen=new G(a||null,s.svg),s}return a(n,F),o(n,[{key:"getDefaultOptions",value:function(){return this.gen.defaultOptions}},{key:"opsToPath",value:function(t){return this.gen.opsToPath(t)}},{key:"line",value:function(t,e,i,a,n){var s=this.gen.line(t,e,i,a,n);return this.draw(s)}},{key:"rectangle",value:function(t,e,i,a,n){var s=this.gen.rectangle(t,e,i,a,n);return this.draw(s)}},{key:"ellipse",value:function(t,e,i,a,n){var s=this.gen.ellipse(t,e,i,a,n);return this.draw(s)}},{key:"circle",value:function(t,e,i,a){var n=this.gen.circle(t,e,i,a);return this.draw(n)}},{key:"linearPath",value:function(t,e){var i=this.gen.linearPath(t,e);return this.draw(i)}},{key:"polygon",value:function(t,e){var i=this.gen.polygon(t,e);return this.draw(i)}},{key:"arc",value:function(t,e,i,a,n,s){var r=arguments.length>6&&void 0!==arguments[6]&&arguments[6],h=arguments.length>7?arguments[7]:void 0,o=this.gen.arc(t,e,i,a,n,s,r,h);return this.draw(o)}},{key:"curve",value:function(t,e){var i=this.gen.curve(t,e);return this.draw(i)}},{key:"path",value:function(t,e){var i=this.gen.path(t,e);return this.draw(i)}},{key:"generator",get:function(){return this.gen}}]),n}();return{canvas:function(t,e){return new $(t,e)},svg:function(t,e){return new J(t,e)},generator:function(t,e){return new G(t,e)}}}();
},{}]},{},["tRH2"], null)