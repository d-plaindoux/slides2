parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pWpJ":[function(require,module,exports) {
window.CanvasSlideshow=function(e){var t=this;(e=e||{}).stageWidth=e.hasOwnProperty("stageWidth")?e.stageWidth:1920,e.stageHeight=e.hasOwnProperty("stageHeight")?e.stageHeight:1080,e.pixiSprites=e.hasOwnProperty("sprites")?e.sprites:[],e.centerSprites=!!e.hasOwnProperty("centerSprites")&&e.centerSprites,e.autoPlay=!e.hasOwnProperty("autoPlay")||e.autoPlay,e.autoPlaySpeed=e.hasOwnProperty("autoPlaySpeed")?e.autoPlaySpeed:[10,3],e.fullScreen=!e.hasOwnProperty("fullScreen")||e.fullScreen,e.displacementImage=e.hasOwnProperty("displacementImage")?e.displacementImage:"",e.displaceAutoFit=!!e.hasOwnProperty("displaceAutoFit")&&e.displaceAutoFit,e.wacky=!!e.hasOwnProperty("wacky")&&e.wacky,e.interactive=!!e.hasOwnProperty("interactive")&&e.interactive,e.interactionEvent=e.hasOwnProperty("interactionEvent")?e.interactionEvent:"",e.displacementCenter=!!e.hasOwnProperty("displacementCenter")&&e.displacementCenter,e.dispatchPointerOver=!!e.hasOwnProperty("dispatchPointerOver")&&e.dispatchPointerOver;var a=new PIXI.autoDetectRenderer(e.stageWidth,e.stageHeight,{transparent:!0}),i=new PIXI.Container,r=new PIXI.Container,n=new PIXI.Sprite.fromImage(e.displacementImage),s=new PIXI.filters.DisplacementFilter(n);if(this.initPixi=function(){document.querySelector(".cover article").appendChild(a.view),i.addChild(r),i.interactive=!0,!0===e.fullScreen?(a.view.style.objectFit="cover",a.view.style.width="100%",a.view.style.height="100%",a.view.style.top="50%",a.view.style.left="50%",a.view.style.webkitTransform="translate( -50%, -50% ) scale(1.1)",a.view.style.transform="translate( -50%, -50% ) scale(1.1)"):(a.view.style.maxWidth="100%",a.view.style.top="50%",a.view.style.left="50%",a.view.style.webkitTransform="translate( -50%, -50% )",a.view.style.transform="translate( -50%, -50% )"),n.texture.baseTexture.wrapMode=PIXI.WRAP_MODES.REPEAT,i.filters=[s],!1===e.autoPlay&&(s.scale.x=0,s.scale.y=0),!0===e.wacky&&(n.anchor.set(.5),n.x=a.width/2,n.y=a.height/2),n.scale.x=2,n.scale.y=2,s.autoFit=e.displaceAutoFit,i.addChild(n)},this.loadPixiSprites=function(t){for(var i=e.sprites,n=0;n<i.length;n++){var s=new PIXI.Texture.fromImage(t[n]),o=new PIXI.Sprite(s);!0===e.centerSprites&&(o.anchor.set(.5),o.x=a.width/2,o.y=a.height/2),r.addChild(o)}},!0===e.autoPlay){var o=new PIXI.ticker.Ticker;o.autoStart=e.autoPlay,o.add(function(t){n.x+=e.autoPlaySpeed[0]*t,n.y+=e.autoPlaySpeed[1],a.render(i)})}else{var l=new PIXI.ticker.Ticker;l.autoStart=!0,l.add(function(e){a.render(i)})}this.init=function(){t.initPixi(),t.loadPixiSprites(e.pixiSprites)},this.init()};var e=location.protocol+"//"+location.host,t=["".concat(e,"/cover.3be24397.jpg")],a=new CanvasSlideshow({sprites:t,displacementImage:"".concat(e,"/clouds.85c6ce22.jpg"),autoPlay:!0,autoPlaySpeed:[0,6],interactive:!1,interactionEvent:"click",displaceAutoFit:!1,dispatchPointerOver:!0});
},{}]},{},["pWpJ"], null)