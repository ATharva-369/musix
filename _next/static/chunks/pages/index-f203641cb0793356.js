(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(8151)}])},8151:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return o}});var d=c(5893),e=c(9008),f=c.n(e),g=c(214),h=c.n(g),i=c(7294),j=c(7382),k=c.n(j),l=c(8193),m=c(3750),n=function(){var a,b,c=(0,i.useState)(),e=c[0],f=c[1],g=(0,i.useState)(0),h=g[0],j=g[1],n=(0,i.useState)(0),o=n[0],p=n[1],q=(0,i.useState)(0),r=q[0],s=q[1],t=(0,i.useState)(2),u=t[0];t[1];var v=(0,i.useRef)(),w=(0,i.useRef)(),x=(0,i.useRef)();(0,i.useEffect)(function(){var a=Math.floor(v.current.duration);j(a),w.current.max=a},[null==v?void 0:null===(a=v.current)|| void 0===a?void 0:a.loadedmetadata,null==v?void 0:null===(b=v.current)|| void 0===b?void 0:b.readyState]);var y=function(a){var b=Math.floor(a/60),c=b<10?"0".concat(b):"".concat(b),d=Math.floor(a%60),e=d<10?"0".concat(d):"".concat(d);return"".concat(c,":").concat(e)},z=function(){var a=e;f(!a),a?(v.current.play(),x.current=requestAnimationFrame(A)):(v.current.pause(),cancelAnimationFrame(x.current))},A=function(){w.current.value=v.current.currentTime,C(),x.current=requestAnimationFrame(A)},B=function(){v.current.currentTime=w.current.value,C()},C=function(){w.current.style.setProperty("--seek-before-width","".concat(w.current.value/h*100,"%")),p(w.current.value)},D=function(){w.current.value=Number(w.current.value)-10,B()},E=function(){w.current.value=Number(w.current.value)+10,B()},F=function(){r<u-1?s(r+1):s(0)};return(0,d.jsxs)("div",{className:k().audioPlayer,children:[(0,d.jsx)("audio",{ref:v,src:"/songs/".concat(r,".mp3"),preload:"metadata"}),(0,d.jsx)("button",{onClick:D,className:k().forwardBackward,children:(0,d.jsx)(l.IaS,{})}),(0,d.jsx)("button",{onClick:z,className:k().playPause,children:e?(0,d.jsx)(m.mz0,{}):(0,d.jsx)(m.obJ,{})}),(0,d.jsx)("button",{onClick:E,className:k().forwardBackward,children:(0,d.jsx)(l.evb,{})}),(0,d.jsx)("div",{className:k().currentTime,children:y(o)}),(0,d.jsx)("div",{children:(0,d.jsx)("input",{ref:w,step:"0.05",type:"range",className:k().progressBar,defaultValue:"0",onChange:B})}),(0,d.jsx)("div",{className:k().duration,children:h&&y(h)}),(0,d.jsx)("button",{onClick:F,className:k().forwardBackward,children:(0,d.jsx)(l.evb,{})})]})};function o(){return(0,d.jsxs)("div",{className:h().container,children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"Musix \uD83C\uDFA7"}),(0,d.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsx)("main",{className:h().main,children:(0,d.jsx)(n,{})})]})}},7382:function(a){a.exports={audioPlayer:"AudioPlayer_audioPlayer__giJYl",forwardBackward:"AudioPlayer_forwardBackward__QZ3hO",playPause:"AudioPlayer_playPause__Xl3W9",currentTime:"AudioPlayer_currentTime__VkZWS",duration:"AudioPlayer_duration__R4bwI",progressBar:"AudioPlayer_progressBar__Ar5VP"}},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ"}},9008:function(a,b,c){a.exports=c(5443)},8357:function(a,b,c){"use strict";c.d(b,{w_:function(){return j}});var d=c(7294),e={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=d.createContext&&d.createContext(e),g=function(){return(g=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},h=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c};function i(a){return a&&a.map(function(a,b){return d.createElement(a.tag,g({key:b},a.attr),i(a.child))})}function j(a){return function(b){return d.createElement(k,g({attr:g({},a.attr)},b),i(a.child))}}function k(a){var b=function(b){var c,e=a.attr,f=a.size,i=a.title,j=h(a,["attr","size","title"]),k=f||b.size||"1em";return b.className&&(c=b.className),a.className&&(c=(c?c+" ":"")+a.className),d.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,e,j,{className:c,style:g(g({color:a.color||b.color},b.style),a.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),i&&d.createElement("title",null,i),a.children)};return void 0!==f?d.createElement(f.Consumer,null,function(a){return b(a)}):b(e)}}},function(a){a.O(0,[13,617,774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])