/*! For license information please see 16.c99882a2.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{490:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},491:function(e,t,n){"use strict";n.d(t,"l",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"o",(function(){return p})),n.d(t,"m",(function(){return b})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return h})),n.d(t,"h",(function(){return y})),n.d(t,"c",(function(){return v})),n.d(t,"n",(function(){return j})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return O}));var a,r=n(61),o=n.n(r);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function d(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var f={};function p(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var m="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof m))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var b=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),g={Fade:150,Collapse:350,Modal:300,Carousel:600},h=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},v=!("undefined"===typeof window||!window.document||!window.document.createElement);function E(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function j(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===E(e))return NaN;if(x(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=x(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function x(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}var O=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},492:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},499:function(e,t,n){"use strict";var a=n(18),r=n(49),o=n(492),i=n(37),c=n(2),s=n.n(c),l=n(61),u=n.n(l),d=n(490),f=n.n(d),p=n(491),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,i=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,b=e.innerRef,g=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),v=u||("select"===o||"textarea"===o?o:"input"),E="form-control";m?(E+="-plaintext",v=u||"input"):"file"===o?E+="-file":h&&(E=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.o)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var j=Object(p.i)(f()(t,l&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,E),n);return("input"===v||u&&"function"===typeof u)&&(g.type=o),g.children&&!m&&"select"!==o&&"string"===typeof v&&"select"!==v&&(Object(p.o)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),s.a.createElement(v,Object(a.a)({},g,{ref:b,className:j}))},t}(s.a.Component);b.propTypes=m,b.defaultProps={type:"text"},t.a=b},506:function(e,t,n){"use strict";var a=n(18),r=n(49),o=n(2),i=n.n(o),c=n(61),s=n.n(c),l=n(490),u=n.n(l),d=n(491),f={tag:d.m,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.fluid,c=e.tag,s=Object(r.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===o?l="container-fluid":o&&(l="container-"+o);var f=Object(d.i)(u()(t,l),n);return i.a.createElement(c,Object(a.a)({},s,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},512:function(e,t,n){"use strict";var a=n(18),r=n(49),o=n(2),i=n.n(o),c=n(61),s=n.n(c),l=n(490),u=n.n(l),d=n(491),f={tag:d.m,size:s.a.string,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=e.size,s=Object(r.a)(e,["className","cssModule","tag","size"]),l=Object(d.i)(u()(t,"input-group",c?"input-group-"+c:null),n);return i.a.createElement(o,Object(a.a)({},s,{className:l}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},523:function(e,t,n){"use strict";var a=n(18),r=n(49),o=n(492),i=n(37),c=n(2),s=n.n(c),l=n(61),u=n.n(l),d=n(490),f=n.n(d),p=n(491),m={children:u.a.node,inline:u.a.bool,tag:p.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.inline,i=e.tag,c=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.i)(f()(t,!!o&&"form-inline"),n);return s.a.createElement(i,Object(a.a)({},l,{ref:c,className:u}))},t}(c.Component);b.propTypes=m,b.defaultProps={tag:"form"},t.a=b},526:function(e,t,n){"use strict";var a=n(18),r=n(49),o=n(2),i=n.n(o),c=n(61),s=n.n(c),l=n(490),u=n.n(l),d=n(491),f={tag:d.m,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),s=Object(d.i)(u()(t,"card-footer"),n);return i.a.createElement(o,Object(a.a)({},c,{className:s}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},737:function(e,t,n){"use strict";n.r(t);var a=n(151),r=n(152),o=n(154),i=n(153),c=n(155),s=n(2),l=n.n(s),u=n(506),d=n(495),f=n(496),p=n(497),m=n(498),b=n(523),g=n(512),h=n(499),y=n(494),v=n(526),E=n(156),j=n(505),x=n.n(j),O=function(e){var t=e.text;return l.a.createElement("div",null,t)},w=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app flex-row align-items-center",style:{backgroundImage:"url(".concat("https://www.wallpaperup.com/uploads/wallpapers/2017/05/06/1089084/bcdc749650b552868396f382b878be65-700.jpg",")")}},l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:"9",lg:"7",xl:"6"},l.a.createElement(p.a,{className:"mx-4"},l.a.createElement(m.a,{className:"p-4"},l.a.createElement(b.a,null,l.a.createElement("h1",null,"Location"),l.a.createElement(g.a,{className:"mb-3"},l.a.createElement(h.a,{type:"text",placeholder:"Enter Shop  Location",autoComplete:"Loaction",style:{padding:"20px",paddingBottom:"30px",paddingTop:"30px"},required:!0})),l.a.createElement(g.a,{className:"mb-3"},l.a.createElement(h.a,{type:"text",placeholder:"Address",autoComplete:"address",style:{padding:"20px",paddingBottom:"30px",paddingTop:"30px"},required:!0})),l.a.createElement("div",{style:{height:"30vh",width:"100%",paddingBottom:"20px"}},l.a.createElement(x.a,{bootstrapURLKeys:{key:""},defaultCenter:this.props.center,defaultZoom:this.props.zoom},l.a.createElement(O,{lat:59.955413,lng:30.337844,text:"My Marker"}))),l.a.createElement(d.a,null,l.a.createElement(f.a,{xs:"12",sm:"6"},l.a.createElement(E.Link,{to:"/register"},l.a.createElement(y.a,{color:"danger",block:!0},"Previous"))),l.a.createElement(f.a,{xs:"12",sm:"6"},l.a.createElement(E.Link,{to:"/login"},l.a.createElement(y.a,{color:"success",block:!0},"Rgister")))))),l.a.createElement(v.a,{className:"p-4"},l.a.createElement(d.a,null,l.a.createElement(f.a,{xs:"12",sm:"6"},l.a.createElement(y.a,{className:"btn-facebook mb-1",block:!0},l.a.createElement("span",null,"facebook"))),l.a.createElement(f.a,{xs:"12",sm:"6"},l.a.createElement(y.a,{className:"btn-twitter mb-1",block:!0},l.a.createElement("span",null,"twitter"))))))))))}}]),t}(s.Component);w.defaultProps={center:{lat:59.95,lng:30.33},zoom:11},t.default=w}}]);
//# sourceMappingURL=16.c99882a2.chunk.js.map