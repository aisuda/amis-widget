/*! For license information please see 2016.edb433d9.js.LICENSE.txt */
(self.webpackChunkamis_widget=self.webpackChunkamis_widget||[]).push([[2016],{33129:function(t){t.exports=function(){"use strict";function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function e(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?t(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?h(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}var s="undefined"!=typeof window&&void 0!==window.document,c=s?window:{},l=!(!s||!c.document.documentElement)&&"ontouchstart"in c.document.documentElement,d=!!s&&"PointerEvent"in c,p="cropper",u="all",m="crop",g="move",f="zoom",v="e",w="w",b="s",y="n",x="ne",M="nw",C="se",D="sw",O="".concat(p,"-crop"),T="".concat(p,"-disabled"),k="".concat(p,"-hidden"),B="".concat(p,"-hide"),E="".concat(p,"-invisible"),W="".concat(p,"-modal"),N="".concat(p,"-move"),z="".concat(p,"Action"),H="".concat(p,"Preview"),Y="crop",L="move",X="none",R="crop",S="cropend",j="cropmove",A="cropstart",I="dblclick",P=d?"pointerdown":l?"touchstart":"mousedown",U=d?"pointermove":l?"touchmove":"mousemove",q=d?"pointerup pointercancel":l?"touchend touchcancel":"mouseup",$="ready",Q="resize",K="wheel",Z="zoom",_="image/jpeg",G=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,V=/^data:/,F=/^data:image\/jpeg;base64,/,J=/^img|canvas$/i,tt={viewMode:0,dragMode:Y,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},et=Number.isNaN||c.isNaN;function it(t){return"number"==typeof t&&!et(t)}var at=function(t){return t>0&&t<1/0};function nt(t){return void 0===t}function ot(t){return"object"===i(t)&&null!==t}var rt=Object.prototype.hasOwnProperty;function ht(t){if(!ot(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&rt.call(i,"isPrototypeOf")}catch(t){return!1}}function st(t){return"function"==typeof t}var ct=Array.prototype.slice;function lt(t){return Array.from?Array.from(t):ct.call(t)}function dt(t,e){return t&&st(e)&&(Array.isArray(t)||it(t.length)?lt(t).forEach((function(i,a){e.call(t,i,a,t)})):ot(t)&&Object.keys(t).forEach((function(i){e.call(t,t[i],i,t)}))),t}var pt=Object.assign||function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];return ot(t)&&i.length>0&&i.forEach((function(e){ot(e)&&Object.keys(e).forEach((function(i){t[i]=e[i]}))})),t},ut=/\.\d*(?:0|9){12}\d*$/;function mt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return ut.test(t)?Math.round(t*e)/e:t}var gt=/^width|height|left|top|marginLeft|marginTop$/;function ft(t,e){var i=t.style;dt(e,(function(t,e){gt.test(e)&&it(t)&&(t="".concat(t,"px")),i[e]=t}))}function vt(t,e){if(e)if(it(t.length))dt(t,(function(t){vt(t,e)}));else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function wt(t,e){e&&(it(t.length)?dt(t,(function(t){wt(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function bt(t,e,i){e&&(it(t.length)?dt(t,(function(t){bt(t,e,i)})):i?vt(t,e):wt(t,e))}var yt=/([a-z\d])([A-Z])/g;function xt(t){return t.replace(yt,"$1-$2").toLowerCase()}function Mt(t,e){return ot(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(xt(e)))}function Ct(t,e,i){ot(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(xt(e)),i)}var Dt=/\s\s*/,Ot=function(){var t=!1;if(s){var e=!1,i=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});c.addEventListener("test",i,a),c.removeEventListener("test",i,a)}return t}();function Tt(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(Dt).forEach((function(e){if(!Ot){var o=t.listeners;o&&o[e]&&o[e][i]&&(n=o[e][i],delete o[e][i],0===Object.keys(o[e]).length&&delete o[e],0===Object.keys(o).length&&delete t.listeners)}t.removeEventListener(e,n,a)}))}function kt(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(Dt).forEach((function(e){if(a.once&&!Ot){var o=t.listeners,r=void 0===o?{}:o;n=function(){delete r[e][i],t.removeEventListener(e,n,a);for(var o=arguments.length,h=new Array(o),s=0;s<o;s++)h[s]=arguments[s];i.apply(t,h)},r[e]||(r[e]={}),r[e][i]&&t.removeEventListener(e,r[e][i],a),r[e][i]=n,t.listeners=r}t.addEventListener(e,n,a)}))}function Bt(t,e,i){var a;return st(Event)&&st(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function Et(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var Wt=c.location,Nt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function zt(t){var e=t.match(Nt);return null!==e&&(e[1]!==Wt.protocol||e[2]!==Wt.hostname||e[3]!==Wt.port)}function Ht(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Yt(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];it(n)&&0!==n&&r.push("translateX(".concat(n,"px)")),it(o)&&0!==o&&r.push("translateY(".concat(o,"px)")),it(e)&&0!==e&&r.push("rotate(".concat(e,"deg)")),it(i)&&1!==i&&r.push("scaleX(".concat(i,")")),it(a)&&1!==a&&r.push("scaleY(".concat(a,")"));var h=r.length?r.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function Lt(t,i){var a=t.pageX,n=t.pageY,o={endX:a,endY:n};return i?o:e({startX:a,startY:n},o)}function Xt(t){var e=t.aspectRatio,i=t.height,a=t.width,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",o=at(a),r=at(i);if(o&&r){var h=i*e;"contain"===n&&h>a||"cover"===n&&h<a?i=a/e:a=i*e}else o?i=a/e:r&&(a=i*e);return{width:a,height:i}}function Rt(t,e,i,a){var n=e.aspectRatio,o=e.naturalWidth,h=e.naturalHeight,s=e.rotate,c=void 0===s?0:s,l=e.scaleX,d=void 0===l?1:l,p=e.scaleY,u=void 0===p?1:p,m=i.aspectRatio,g=i.naturalWidth,f=i.naturalHeight,v=a.fillColor,w=void 0===v?"transparent":v,b=a.imageSmoothingEnabled,y=void 0===b||b,x=a.imageSmoothingQuality,M=void 0===x?"low":x,C=a.maxWidth,D=void 0===C?1/0:C,O=a.maxHeight,T=void 0===O?1/0:O,k=a.minWidth,B=void 0===k?0:k,E=a.minHeight,W=void 0===E?0:E,N=document.createElement("canvas"),z=N.getContext("2d"),H=Xt({aspectRatio:m,width:D,height:T}),Y=Xt({aspectRatio:m,width:B,height:W},"cover"),L=Math.min(H.width,Math.max(Y.width,g)),X=Math.min(H.height,Math.max(Y.height,f)),R=Xt({aspectRatio:n,width:D,height:T}),S=Xt({aspectRatio:n,width:B,height:W},"cover"),j=Math.min(R.width,Math.max(S.width,o)),A=Math.min(R.height,Math.max(S.height,h)),I=[-j/2,-A/2,j,A];return N.width=mt(L),N.height=mt(X),z.fillStyle=w,z.fillRect(0,0,L,X),z.save(),z.translate(L/2,X/2),z.rotate(c*Math.PI/180),z.scale(d,u),z.imageSmoothingEnabled=y,z.imageSmoothingQuality=M,z.drawImage.apply(z,[t].concat(r(I.map((function(t){return Math.floor(mt(t))}))))),z.restore(),N}var St=String.fromCharCode;var jt=/^data:.*,/;function At(t){var e,i=new DataView(t);try{var a,n,o;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var r=i.byteLength,h=2;h+1<r;){if(255===i.getUint8(h)&&225===i.getUint8(h+1)){n=h;break}h+=1}if(n){var s=n+10;if("Exif"===function(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=St(t.getUint8(n));return a}(i,n+4,4)){var c=i.getUint16(s);if(((a=18761===c)||19789===c)&&42===i.getUint16(s+2,a)){var l=i.getUint32(s+4,a);l>=8&&(o=s+l)}}}if(o){var d,p,u=i.getUint16(o,a);for(p=0;p<u;p+=1)if(d=o+12*p+2,274===i.getUint16(d,a)){d+=8,e=i.getUint16(d,a),i.setUint16(d,1,a);break}}}catch(t){e=1}return e}var It={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper,n=Number(e.minContainerWidth),o=Number(e.minContainerHeight);vt(a,k),wt(t,k);var r={width:Math.max(i.offsetWidth,n>=0?n:200),height:Math.max(i.offsetHeight,o>=0?o:100)};this.containerData=r,ft(a,{width:r.width,height:r.height}),vt(t,k),wt(a,k)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,r=n/o,h=t.width,s=t.height;t.height*r>t.width?3===i?h=t.height*r:s=t.width/r:3===i?s=t.width/r:h=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:h,height:s};this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),c.width=Math.min(Math.max(c.width,c.minWidth),c.maxWidth),c.height=Math.min(Math.max(c.height,c.minHeight),c.maxHeight),c.left=(t.width-c.width)/2,c.top=(t.height-c.height)/2,c.oldLeft=c.left,c.oldTop=c.top,this.initialCanvasData=pt({},c)},limitCanvas:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=i.viewMode,h=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(i.minCanvasWidth)||0,l=Number(i.minCanvasHeight)||0;r>1?(c=Math.max(c,a.width),l=Math.max(l,a.height),3===r&&(l*h>c?c=l*h:l=c/h)):r>0&&(c?c=Math.max(c,s?o.width:0):l?l=Math.max(l,s?o.height:0):s&&(c=o.width,(l=o.height)*h>c?c=l*h:l=c/h));var d=Xt({aspectRatio:h,width:c,height:l});c=d.width,l=d.height,n.minWidth=c,n.minHeight=l,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if(r>(s?0:1)){var p=a.width-n.width,u=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,u),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,u),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,u),n.maxTop=Math.max(0,u))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,e){var i=this.canvasData,a=this.imageData;if(e){var n=function(t){var e=t.width,i=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),h=e*r+i*o,s=e*o+i*r;return a>90?{width:s,height:h}:{width:h,height:s}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,r=n.height,h=i.width*(o/i.naturalWidth),s=i.height*(r/i.naturalHeight);i.left-=(h-i.width)/2,i.top-=(s-i.height)/2,i.width=h,i.height=s,i.aspectRatio=o/r,i.naturalWidth=o,i.naturalHeight=r,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,ft(this.canvas,pt({width:i.width,height:i.height},Yt({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);pt(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),ft(this.image,pt({width:i.width,height:i.height},Yt(pt({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=pt({},n)},limitCropBox:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,h=i.aspectRatio;if(t){var s=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,l=r?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,d=r?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),h&&(s&&c?c*h>s?c=s/h:s=c*h:s?c=s/h:c&&(s=c*h),d*h>l?d=l/h:l=d*h),o.minWidth=Math.min(s,l),o.minHeight=Math.min(c,d),o.maxWidth=l,o.maxHeight=d}e&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&Ct(this.face,z,i.width>=e.width&&i.height>=e.height?g:u),ft(this.cropBox,pt({width:i.width,height:i.height},Yt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Bt(this.element,R,this.getData())}},Pt={initPreview:function(){var t=this.element,e=this.crossOrigin,i=this.options.preview,a=e?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");if(e&&(o.crossOrigin=e),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,i){var r=i;"string"==typeof i?r=t.ownerDocument.querySelectorAll(i):i.querySelector&&(r=[i]),this.previews=r,dt(r,(function(t){var i=document.createElement("img");Ct(t,H,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(i.crossOrigin=e),i.src=a,i.alt=n,i.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(i)}))}},resetPreview:function(){dt(this.previews,(function(t){var e=Mt(t,H);ft(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(t,e){if(ot(t[e]))try{delete t[e]}catch(i){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=void 0}else t.removeAttribute("data-".concat(xt(e)))}(t,H)}))},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,a=i.width,n=i.height,o=t.width,r=t.height,h=i.left-e.left-t.left,s=i.top-e.top-t.top;this.cropped&&!this.disabled&&(ft(this.viewBoxImage,pt({width:o,height:r},Yt(pt({translateX:-h,translateY:-s},t)))),dt(this.previews,(function(e){var i=Mt(e,H),c=i.width,l=i.height,d=c,p=l,u=1;a&&(p=n*(u=c/a)),n&&p>l&&(d=a*(u=l/n),p=l),ft(e,{width:d,height:p}),ft(e.getElementsByTagName("img")[0],pt({width:o*u,height:r*u},Yt(pt({translateX:-h*u,translateY:-s*u},t))))})))}},Ut={bind:function(){var t=this.element,e=this.options,i=this.cropper;st(e.cropstart)&&kt(t,A,e.cropstart),st(e.cropmove)&&kt(t,j,e.cropmove),st(e.cropend)&&kt(t,S,e.cropend),st(e.crop)&&kt(t,R,e.crop),st(e.zoom)&&kt(t,Z,e.zoom),kt(i,P,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&kt(i,K,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&kt(i,I,this.onDblclick=this.dblclick.bind(this)),kt(t.ownerDocument,U,this.onCropMove=this.cropMove.bind(this)),kt(t.ownerDocument,q,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&kt(window,Q,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;st(e.cropstart)&&Tt(t,A,e.cropstart),st(e.cropmove)&&Tt(t,j,e.cropmove),st(e.cropend)&&Tt(t,S,e.cropend),st(e.crop)&&Tt(t,R,e.crop),st(e.zoom)&&Tt(t,Z,e.zoom),Tt(i,P,this.onCropStart),e.zoomable&&e.zoomOnWheel&&Tt(i,K,this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Tt(i,I,this.onDblclick),Tt(t.ownerDocument,U,this.onCropMove),Tt(t.ownerDocument,q,this.onCropEnd),e.responsive&&Tt(window,Q,this.onResize)}},qt={resize:function(){if(!this.disabled){var t,e,i=this.options,a=this.container,n=this.containerData,o=a.offsetWidth/n.width,r=a.offsetHeight/n.height,h=Math.abs(o-1)>Math.abs(r-1)?o:r;1!==h&&(i.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),i.restore&&(this.setCanvasData(dt(t,(function(e,i){t[i]=e*h}))),this.setCropBoxData(dt(e,(function(t,i){e[i]=t*h})))))}},dblclick:function(){var t,e;this.disabled||this.options.dragMode===X||this.setDragMode((t=this.dragBox,e=O,(t.classList?t.classList.contains(e):t.className.indexOf(e)>-1)?L:Y))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(it(e)&&1!==e||it(i)&&0!==i||t.ctrlKey))){var a,n=this.options,o=this.pointers;t.changedTouches?dt(t.changedTouches,(function(t){o[t.identifier]=Lt(t)})):o[t.pointerId||0]=Lt(t),a=Object.keys(o).length>1&&n.zoomable&&n.zoomOnTouch?f:Mt(t.target,z),G.test(a)&&!1!==Bt(this.element,A,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===m&&(this.cropping=!0,vt(this.dragBox,W)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==Bt(this.element,j,{originalEvent:t,action:e})&&(t.changedTouches?dt(t.changedTouches,(function(t){pt(i[t.identifier]||{},Lt(t,!0))})):pt(i[t.pointerId||0]||{},Lt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?dt(t.changedTouches,(function(t){delete i[t.identifier]})):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,bt(this.dragBox,W,this.cropped&&this.options.modal)),Bt(this.element,S,{originalEvent:t,action:e}))}}},$t={change:function(t){var i,a=this.options,n=this.canvasData,o=this.containerData,r=this.cropBoxData,h=this.pointers,s=this.action,c=a.aspectRatio,l=r.left,d=r.top,p=r.width,O=r.height,T=l+p,B=d+O,E=0,W=0,N=o.width,z=o.height,H=!0;!c&&t.shiftKey&&(c=p&&O?p/O:1),this.limited&&(E=r.minLeft,W=r.minTop,N=E+Math.min(o.width,n.width,n.left+n.width),z=W+Math.min(o.height,n.height,n.top+n.height));var Y=h[Object.keys(h)[0]],L={x:Y.endX-Y.startX,y:Y.endY-Y.startY},X=function(t){switch(t){case v:T+L.x>N&&(L.x=N-T);break;case w:l+L.x<E&&(L.x=E-l);break;case y:d+L.y<W&&(L.y=W-d);break;case b:B+L.y>z&&(L.y=z-B)}};switch(s){case u:l+=L.x,d+=L.y;break;case v:if(L.x>=0&&(T>=N||c&&(d<=W||B>=z))){H=!1;break}X(v),(p+=L.x)<0&&(s=w,l-=p=-p),c&&(O=p/c,d+=(r.height-O)/2);break;case y:if(L.y<=0&&(d<=W||c&&(l<=E||T>=N))){H=!1;break}X(y),O-=L.y,d+=L.y,O<0&&(s=b,d-=O=-O),c&&(p=O*c,l+=(r.width-p)/2);break;case w:if(L.x<=0&&(l<=E||c&&(d<=W||B>=z))){H=!1;break}X(w),p-=L.x,l+=L.x,p<0&&(s=v,l-=p=-p),c&&(O=p/c,d+=(r.height-O)/2);break;case b:if(L.y>=0&&(B>=z||c&&(l<=E||T>=N))){H=!1;break}X(b),(O+=L.y)<0&&(s=y,d-=O=-O),c&&(p=O*c,l+=(r.width-p)/2);break;case x:if(c){if(L.y<=0&&(d<=W||T>=N)){H=!1;break}X(y),O-=L.y,d+=L.y,p=O*c}else X(y),X(v),L.x>=0?T<N?p+=L.x:L.y<=0&&d<=W&&(H=!1):p+=L.x,L.y<=0?d>W&&(O-=L.y,d+=L.y):(O-=L.y,d+=L.y);p<0&&O<0?(s=D,d-=O=-O,l-=p=-p):p<0?(s=M,l-=p=-p):O<0&&(s=C,d-=O=-O);break;case M:if(c){if(L.y<=0&&(d<=W||l<=E)){H=!1;break}X(y),O-=L.y,d+=L.y,p=O*c,l+=r.width-p}else X(y),X(w),L.x<=0?l>E?(p-=L.x,l+=L.x):L.y<=0&&d<=W&&(H=!1):(p-=L.x,l+=L.x),L.y<=0?d>W&&(O-=L.y,d+=L.y):(O-=L.y,d+=L.y);p<0&&O<0?(s=C,d-=O=-O,l-=p=-p):p<0?(s=x,l-=p=-p):O<0&&(s=D,d-=O=-O);break;case D:if(c){if(L.x<=0&&(l<=E||B>=z)){H=!1;break}X(w),p-=L.x,l+=L.x,O=p/c}else X(b),X(w),L.x<=0?l>E?(p-=L.x,l+=L.x):L.y>=0&&B>=z&&(H=!1):(p-=L.x,l+=L.x),L.y>=0?B<z&&(O+=L.y):O+=L.y;p<0&&O<0?(s=x,d-=O=-O,l-=p=-p):p<0?(s=C,l-=p=-p):O<0&&(s=M,d-=O=-O);break;case C:if(c){if(L.x>=0&&(T>=N||B>=z)){H=!1;break}X(v),O=(p+=L.x)/c}else X(b),X(v),L.x>=0?T<N?p+=L.x:L.y>=0&&B>=z&&(H=!1):p+=L.x,L.y>=0?B<z&&(O+=L.y):O+=L.y;p<0&&O<0?(s=M,d-=O=-O,l-=p=-p):p<0?(s=D,l-=p=-p):O<0&&(s=x,d-=O=-O);break;case g:this.move(L.x,L.y),H=!1;break;case f:this.zoom(function(t){var i=e({},t),a=0;return dt(t,(function(t,e){delete i[e],dt(i,(function(e){var i=Math.abs(t.startX-e.startX),n=Math.abs(t.startY-e.startY),o=Math.abs(t.endX-e.endX),r=Math.abs(t.endY-e.endY),h=Math.sqrt(i*i+n*n),s=(Math.sqrt(o*o+r*r)-h)/h;Math.abs(s)>Math.abs(a)&&(a=s)}))})),a}(h),t),H=!1;break;case m:if(!L.x||!L.y){H=!1;break}i=Et(this.cropper),l=Y.startX-i.left,d=Y.startY-i.top,p=r.minWidth,O=r.minHeight,L.x>0?s=L.y>0?C:x:L.x<0&&(l-=p,s=L.y>0?D:M),L.y<0&&(d-=O),this.cropped||(wt(this.cropBox,k),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}H&&(r.width=p,r.height=O,r.left=l,r.top=d,this.action=s,this.renderCropBox()),dt(h,(function(t){t.startX=t.endX,t.startY=t.endY}))}},Qt={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&vt(this.dragBox,W),wt(this.cropBox,k),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=pt({},this.initialImageData),this.canvasData=pt({},this.initialCanvasData),this.cropBoxData=pt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(pt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),wt(this.dragBox,W),vt(this.cropBox,k)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,dt(this.previews,(function(e){e.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,wt(this.cropper,T)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,vt(this.cropper,T)),this},destroy:function(){var t=this.element;return t.cropper?(t.cropper=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=i.left,n=i.top;return this.moveTo(nt(t)?t:a+Number(t),nt(e)?e:n+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(it(t)&&(i.left=t,a=!0),it(e)&&(i.top=e,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a=this.options,n=this.canvasData,o=n.width,r=n.height,h=n.naturalWidth,s=n.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&a.zoomable){var c=h*t,l=s*t;if(!1===Bt(this.element,Z,{ratio:t,oldRatio:o/h,originalEvent:i}))return this;if(i){var d=this.pointers,p=Et(this.cropper),u=d&&Object.keys(d).length?function(t){var e=0,i=0,a=0;return dt(t,(function(t){var n=t.startX,o=t.startY;e+=n,i+=o,a+=1})),{pageX:e/=a,pageY:i/=a}}(d):{pageX:i.pageX,pageY:i.pageY};n.left-=(c-o)*((u.pageX-p.left-n.left)/o),n.top-=(l-r)*((u.pageY-p.top-n.top)/r)}else ht(e)&&it(e.x)&&it(e.y)?(n.left-=(c-o)*((e.x-n.left)/o),n.top-=(l-r)*((e.y-n.top)/r)):(n.left-=(c-o)/2,n.top-=(l-r)/2);n.width=c,n.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return it(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,it(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(it(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(it(t)&&(i.scaleX=t,a=!0),it(e)&&(i.scaleY=e,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.options,a=this.imageData,n=this.canvasData,o=this.cropBoxData;if(this.ready&&this.cropped){t={x:o.left-n.left,y:o.top-n.top,width:o.width,height:o.height};var r=a.width/a.naturalWidth;if(dt(t,(function(e,i){t[i]=e/r})),e){var h=Math.round(t.y+t.height),s=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=s-t.x,t.height=h-t.y}}else t={x:0,y:0,width:0,height:0};return i.rotatable&&(t.rotate=a.rotate||0),i.scalable&&(t.scaleX=a.scaleX||1,t.scaleY=a.scaleY||1),t},setData:function(t){var e=this.options,i=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&ht(t)){var o=!1;e.rotatable&&it(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,o=!0),e.scalable&&(it(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,o=!0),it(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=i.width/i.naturalWidth;it(t.x)&&(n.left=t.x*r+a.left),it(t.y)&&(n.top=t.y*r+a.top),it(t.width)&&(n.width=t.width*r),it(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?pt({},this.containerData):{}},getImageData:function(){return this.sized?pt({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&dt(["left","top","width","height","naturalWidth","naturalHeight"],(function(i){e[i]=t[i]})),e},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&ht(t)&&(it(t.left)&&(e.left=t.left),it(t.top)&&(e.top=t.top),it(t.width)?(e.width=t.width,e.height=t.width/i):it(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&ht(t)&&(it(t.left)&&(a.left=t.left),it(t.top)&&(a.top=t.top),it(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),it(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,i=Rt(this.image,this.imageData,e,t);if(!this.cropped)return i;var a=this.getData(),n=a.x,o=a.y,h=a.width,s=a.height,c=i.width/Math.floor(e.naturalWidth);1!==c&&(n*=c,o*=c,h*=c,s*=c);var l=h/s,d=Xt({aspectRatio:l,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),p=Xt({aspectRatio:l,width:t.minWidth||0,height:t.minHeight||0},"cover"),u=Xt({aspectRatio:l,width:t.width||(1!==c?i.width:h),height:t.height||(1!==c?i.height:s)}),m=u.width,g=u.height;m=Math.min(d.width,Math.max(p.width,m)),g=Math.min(d.height,Math.max(p.height,g));var f=document.createElement("canvas"),v=f.getContext("2d");f.width=mt(m),f.height=mt(g),v.fillStyle=t.fillColor||"transparent",v.fillRect(0,0,m,g);var w=t.imageSmoothingEnabled,b=void 0===w||w,y=t.imageSmoothingQuality;v.imageSmoothingEnabled=b,y&&(v.imageSmoothingQuality=y);var x,M,C,D,O,T,k=i.width,B=i.height,E=n,W=o;E<=-h||E>k?(E=0,x=0,C=0,O=0):E<=0?(C=-E,E=0,O=x=Math.min(k,h+E)):E<=k&&(C=0,O=x=Math.min(h,k-E)),x<=0||W<=-s||W>B?(W=0,M=0,D=0,T=0):W<=0?(D=-W,W=0,T=M=Math.min(B,s+W)):W<=B&&(D=0,T=M=Math.min(s,B-W));var N=[E,W,x,M];if(O>0&&T>0){var z=m/h;N.push(C*z,D*z,O*z,T*z)}return v.drawImage.apply(v,[i].concat(r(N.map((function(t){return Math.floor(mt(t))}))))),f},setAspectRatio:function(t){var e=this.options;return this.disabled||nt(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===Y,o=e.movable&&t===L;t=n||o?t:X,e.dragMode=t,Ct(i,z,t),bt(i,O,n),bt(i,N,o),e.cropBoxMovable||(Ct(a,z,t),bt(a,O,n),bt(a,N,o))}return this}},Kt=c.Cropper,Zt=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(this,t),!e||!J.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=pt({},tt,ht(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return e=t,o=[{key:"noConflict",value:function(){return window.Cropper=Kt,t}},{key:"setDefaults",value:function(t){pt(tt,ht(t)&&t)}}],(i=[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e.cropper){if(e.cropper=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",this.originalUrl=t,!t)return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e,i,a,n,o=this;if(t){this.url=t,this.imageData={};var r=this.element,h=this.options;if(h.rotatable||h.scalable||(h.checkOrientation=!1),h.checkOrientation&&window.ArrayBuffer)if(V.test(t))F.test(t)?this.read((e=t.replace(jt,""),i=atob(e),a=new ArrayBuffer(i.length),dt(n=new Uint8Array(a),(function(t,e){n[e]=i.charCodeAt(e)})),a)):this.clone();else{var s=new XMLHttpRequest,c=this.clone.bind(this);this.reloading=!0,this.xhr=s,s.onabort=c,s.onerror=c,s.ontimeout=c,s.onprogress=function(){s.getResponseHeader("content-type")!==_&&s.abort()},s.onload=function(){o.read(s.response)},s.onloadend=function(){o.reloading=!1,o.xhr=null},h.checkCrossOrigin&&zt(t)&&r.crossOrigin&&(t=Ht(t)),s.open("GET",t,!0),s.responseType="arraybuffer",s.withCredentials="use-credentials"===r.crossOrigin,s.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=At(t),n=0,o=1,r=1;if(a>1){this.url=function(t,e){for(var i=[],a=new Uint8Array(t);a.length>0;)i.push(St.apply(null,lt(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,_);var h=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(a);n=h.rotate,o=h.scaleX,r=h.scaleY}e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&zt(e)&&(i||(i="anonymous"),a=Ht(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),vt(n,B),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var i=c.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(c.navigator.userAgent),a=function(e,i){pt(t.imageData,{naturalWidth:e,naturalHeight:i,aspectRatio:e/i}),t.initialImageData=pt({},t.imageData),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||i){var n=document.createElement("img"),o=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){a(n.width,n.height),i||o.removeChild(n)},n.src=e.src,i||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else a(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var o=n.querySelector(".".concat(p,"-container")),r=o.querySelector(".".concat(p,"-canvas")),h=o.querySelector(".".concat(p,"-drag-box")),s=o.querySelector(".".concat(p,"-crop-box")),c=s.querySelector(".".concat(p,"-face"));this.container=a,this.cropper=o,this.canvas=r,this.dragBox=h,this.cropBox=s,this.viewBox=o.querySelector(".".concat(p,"-view-box")),this.face=c,r.appendChild(i),vt(t,k),a.insertBefore(o,t.nextSibling),this.isImg||wt(i,B),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,vt(s,k),e.guides||vt(s.getElementsByClassName("".concat(p,"-dashed")),k),e.center||vt(s.getElementsByClassName("".concat(p,"-center")),k),e.background&&vt(o,"".concat(p,"-bg")),e.highlight||vt(c,E),e.cropBoxMovable&&(vt(c,N),Ct(c,z,u)),e.cropBoxResizable||(vt(s.getElementsByClassName("".concat(p,"-line")),k),vt(s.getElementsByClassName("".concat(p,"-point")),k)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),st(e.ready)&&kt(t,$,e.ready,{once:!0}),Bt(t,$)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),wt(this.element,k))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&n(e.prototype,i),o&&n(e,o),t;var e,i,o}();return pt(Zt.prototype,It,Pt,Ut,qt,$t,Qt),Zt}()},42016:function(t,e,i){"use strict";i.r(e),i.d(e,{Cropper:function(){return s}});var a=i(67294),n=i(33129),o=i.n(n),r=function(){return r=Object.assign||function(t){for(var e,i=1,a=arguments.length;i<a;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},r.apply(this,arguments)};function h(t,e){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(i[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(i[a[n]]=t[a[n]])}return i}var s=a.forwardRef((function(t,e){var i=h(t,[]),n=i.dragMode,s=void 0===n?"crop":n,c=i.src,l=i.style,d=i.className,p=i.crossOrigin,u=i.scaleX,m=i.scaleY,g=i.enable,f=i.zoomTo,v=i.rotateTo,w=i.alt,b=void 0===w?"picture":w,y=i.ready,x=i.onInitialized,M=h(i,["dragMode","src","style","className","crossOrigin","scaleX","scaleY","enable","zoomTo","rotateTo","alt","ready","onInitialized"]),C={scaleY:m,scaleX:u,enable:g,zoomTo:f,rotateTo:v},D=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=(0,a.useRef)(null);return a.useEffect((function(){t.forEach((function(t){t&&("function"==typeof t?t(i.current):t.current=i.current)}))}),[t]),i}(e,(0,a.useRef)(null));return(0,a.useEffect)((function(){var t;(null===(t=D.current)||void 0===t?void 0:t.cropper)&&"number"==typeof f&&D.current.cropper.zoomTo(f)}),[i.zoomTo]),(0,a.useEffect)((function(){var t;(null===(t=D.current)||void 0===t?void 0:t.cropper)&&void 0!==c&&D.current.cropper.reset().clear().replace(c)}),[c]),(0,a.useEffect)((function(){if(null!==D.current){var t=new(o())(D.current,r(r({dragMode:s},M),{ready:function(t){null!==t.currentTarget&&function(t,e){void 0===e&&(e={});var i=e.enable,a=void 0===i||i,n=e.scaleX,o=void 0===n?1:n,r=e.scaleY,h=void 0===r?1:r,s=e.zoomTo,c=void 0===s?0:s,l=e.rotateTo;a?t.enable():t.disable(),t.scaleX(o),t.scaleY(h),void 0!==l&&t.rotateTo(l),c>0&&t.zoomTo(c)}(t.currentTarget.cropper,C),y&&y(t)}}));x&&x(t)}return function(){var t,e;null===(e=null===(t=D.current)||void 0===t?void 0:t.cropper)||void 0===e||e.destroy()}}),[D]),a.createElement("div",{style:l,className:d},a.createElement("img",{crossOrigin:p,src:c,alt:b,style:{opacity:0,maxWidth:"100%"},ref:D}))}));e.default=s}}]);