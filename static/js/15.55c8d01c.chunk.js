(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{494:function(e,a,t){"use strict";var n=t(18),l=t(49),s=t(492),r=t(37),c=t(2),o=t.n(c),i=t(61),u=t.n(i),d=t(490),m=t.n(d),b=t(491),p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],s=e.block,r=e.className,c=e.close,i=e.cssModule,u=e.color,d=e.outline,p=e.size,f=e.tag,g=e.innerRef,E=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof E.children&&(E.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,h=Object(b.i)(m()(r,{close:c},c||"btn",c||v,!!p&&"btn-"+p,!!s&&"btn-block",{active:a,disabled:this.props.disabled}),i);E.href&&"button"===f&&(f="a");var N=c?"Close":null;return o.a.createElement(f,Object(n.a)({type:"button"===f&&E.onClick?"button":void 0},E,{className:h,ref:g,onClick:this.onClick,"aria-label":t||N}))},a}(o.a.Component);f.propTypes=p,f.defaultProps={color:"secondary",tag:"button"},a.a=f},495:function(e,a,t){"use strict";var n=t(18),l=t(49),s=t(2),r=t.n(s),c=t(61),o=t.n(c),i=t(490),u=t.n(i),d=t(491),m=o.a.oneOfType([o.a.number,o.a.string]),b={tag:d.m,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,c=e.tag,o=e.form,i=e.widths,m=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(a,t){var n=e[a];if(delete m[a],n){var l=!t;b.push(l?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var p=Object(d.i)(u()(a,s?"no-gutters":null,o?"form-row":"row",b),t);return r.a.createElement(c,Object(n.a)({},m,{className:p}))};f.propTypes=b,f.defaultProps=p,a.a=f},496:function(e,a,t){"use strict";var n=t(18),l=t(49),s=t(2),r=t.n(s),c=t(61),o=t.n(c),i=t(490),u=t.n(i),d=t(491),m=o.a.oneOfType([o.a.number,o.a.string]),b=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:m,offset:m})]),p={tag:d.m,xs:b,sm:b,md:b,lg:b,xl:b,className:o.a.string,cssModule:o.a.object,widths:o.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,s=e.widths,c=e.tag,o=Object(l.a)(e,["className","cssModule","widths","tag"]),i=[];s.forEach((function(a,n){var l=e[a];if(delete o[a],l||""===l){var s=!n;if(Object(d.g)(l)){var r,c=s?"-":"-"+a+"-",m=g(s,a,l.size);i.push(Object(d.i)(u()(((r={})[m]=l.size||""===l.size,r["order"+c+l.order]=l.order||0===l.order,r["offset"+c+l.offset]=l.offset||0===l.offset,r)),t))}else{var b=g(s,a,l);i.push(b)}}})),i.length||i.push("col");var m=Object(d.i)(u()(a,i),t);return r.a.createElement(c,Object(n.a)({},o,{className:m}))};E.propTypes=p,E.defaultProps=f,a.a=E},497:function(e,a,t){"use strict";var n=t(18),l=t(49),s=t(2),r=t.n(s),c=t(61),o=t.n(c),i=t(490),u=t.n(i),d=t(491),m={tag:d.m,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,s=e.color,c=e.body,o=e.inverse,i=e.outline,m=e.tag,b=e.innerRef,p=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.i)(u()(a,"card",!!o&&"text-white",!!c&&"card-body",!!s&&(i?"border":"bg")+"-"+s),t);return r.a.createElement(m,Object(n.a)({},p,{className:f,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},498:function(e,a,t){"use strict";var n=t(18),l=t(49),s=t(2),r=t.n(s),c=t(61),o=t.n(c),i=t(490),u=t.n(i),d=t(491),m={tag:d.m,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,c=e.tag,o=Object(l.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.i)(u()(a,"card-body"),t);return r.a.createElement(c,Object(n.a)({},o,{className:i,ref:s}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},499:function(e,a,t){"use strict";var n=t(18),l=t(49),s=t(492),r=t(37),c=t(2),o=t.n(c),i=t(61),u=t.n(i),d=t(490),m=t.n(d),b=t(491),p={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:b.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,p=e.plaintext,f=e.innerRef,g=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),E=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),h=u||("select"===s||"textarea"===s?s:"input"),N="form-control";p?(N+="-plaintext",h=u||"input"):"file"===s?N+="-file":E&&(N=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(b.o)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var j=Object(b.i)(m()(a,i&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,N),t);return("input"===h||u&&"function"===typeof u)&&(g.type=s),g.children&&!p&&"select"!==s&&"string"===typeof h&&"select"!==h&&(Object(b.o)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(h,Object(n.a)({},g,{ref:f,className:j}))},a}(o.a.Component);f.propTypes=p,f.defaultProps={type:"text"},a.a=f},509:function(e,a,t){"use strict";var n=t(18),l=t(49),s=t(2),r=t.n(s),c=t(61),o=t.n(c),i=t(490),u=t.n(i),d=t(491),m={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:d.m,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,s=e.row,c=e.disabled,o=e.check,i=e.inline,m=e.tag,b=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(d.i)(u()(a,!!s&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===m&&(b.disabled=c),r.a.createElement(m,Object(n.a)({},b,{className:p}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},520:function(e,a,t){"use strict";var n=t(18),l=t(49),s=t(2),r=t.n(s),c=t(61),o=t.n(c),i=t(490),u=t.n(i),d=t(491),m={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:d.m,responsiveTag:d.m,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},b=function(e){var a=e.className,t=e.cssModule,s=e.size,c=e.bordered,o=e.borderless,i=e.striped,m=e.dark,b=e.hover,p=e.responsive,f=e.tag,g=e.responsiveTag,E=e.innerRef,v=Object(l.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(d.i)(u()(a,"table",!!s&&"table-"+s,!!c&&"table-bordered",!!o&&"table-borderless",!!i&&"table-striped",!!m&&"table-dark",!!b&&"table-hover"),t),N=r.a.createElement(f,Object(n.a)({},v,{ref:E,className:h}));if(p){var j=Object(d.i)(!0===p?"table-responsive":"table-responsive-"+p,t);return r.a.createElement(g,{className:j},N)}return N};b.propTypes=m,b.defaultProps={tag:"table",responsiveTag:"div"},a.a=b},539:function(e,a,t){"use strict";var n=t(18),l=t(49),s=t(2),r=t.n(s),c=t(61),o=t.n(c),i=t(490),u=t.n(i),d=t(491),m={children:o.a.node,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,size:o.a.string,tag:d.m,listTag:d.m,"aria-label":o.a.string},b=function(e){var a,t=e.className,s=e.listClassName,c=e.cssModule,o=e.size,i=e.tag,m=e.listTag,b=e["aria-label"],p=Object(l.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),f=Object(d.i)(u()(t),c),g=Object(d.i)(u()(s,"pagination",((a={})["pagination-"+o]=!!o,a)),c);return r.a.createElement(i,{className:f,"aria-label":b},r.a.createElement(m,Object(n.a)({},p,{className:g})))};b.propTypes=m,b.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=b},540:function(e,a,t){"use strict";var n=t(18),l=t(49),s=t(2),r=t.n(s),c=t(61),o=t.n(c),i=t(490),u=t.n(i),d=t(491),m={active:o.a.bool,children:o.a.node,className:o.a.string,cssModule:o.a.object,disabled:o.a.bool,tag:d.m},b=function(e){var a=e.active,t=e.className,s=e.cssModule,c=e.disabled,o=e.tag,i=Object(l.a)(e,["active","className","cssModule","disabled","tag"]),m=Object(d.i)(u()(t,"page-item",{active:a,disabled:c}),s);return r.a.createElement(o,Object(n.a)({},i,{className:m}))};b.propTypes=m,b.defaultProps={tag:"li"},a.a=b},541:function(e,a,t){"use strict";var n=t(18),l=t(49),s=t(2),r=t.n(s),c=t(61),o=t.n(c),i=t(490),u=t.n(i),d=t(491),m={"aria-label":o.a.string,children:o.a.node,className:o.a.string,cssModule:o.a.object,next:o.a.bool,previous:o.a.bool,first:o.a.bool,last:o.a.bool,tag:d.m},b=function(e){var a,t=e.className,s=e.cssModule,c=e.next,o=e.previous,i=e.first,m=e.last,b=e.tag,p=Object(l.a)(e,["className","cssModule","next","previous","first","last","tag"]),f=Object(d.i)(u()(t,"page-link"),s);o?a="Previous":c?a="Next":i?a="First":m&&(a="Last");var g,E=e["aria-label"]||a;o?g="\u2039":c?g="\u203a":i?g="\xab":m&&(g="\xbb");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),p.href||"a"!==b||(b="button"),(o||c||i||m)&&(v=[r.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||g),r.a.createElement("span",{className:"sr-only",key:"sr"},E)]),r.a.createElement(b,Object(n.a)({},p,{className:f,"aria-label":E}),v)};b.propTypes=m,b.defaultProps={tag:"a"},a.a=b},754:function(e,a,t){"use strict";t.r(a);var n=t(151),l=t(152),s=t(154),r=t(153),c=t(155),o=t(2),i=t.n(o),u=t(497),d=t(495),m=t(496),b=t(494),p=t(498),f=t(509),g=t(499),E=t(520),v=t(539),h=t(540),N=t(541),j=t(156),O=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(r.a)(a).call(this))}return Object(c.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(d.a,{style:{padding:"20px"}},i.a.createElement(m.a,null,i.a.createElement("span",{className:"text-danger"},"** Demo Mode : No Permission to Edit and Delete.")),i.a.createElement(m.a,null,i.a.createElement(b.a,{className:"btn btn-info",style:{float:"right"}},i.a.createElement(j.Link,{to:"/add-product",className:"text-dark"},"Add Product")))),i.a.createElement("h4",{className:"text-muted",style:{padding:"20px",borderBottom:"inset"}},"ADDONS"),i.a.createElement(d.a,null,i.a.createElement(m.a,{md:"5",style:{textAlign:"center"}},i.a.createElement(b.a,{className:"btn btn-info",disabled:!0},"Copy"),"\xa0\xa0",i.a.createElement(b.a,{className:"btn btn-info",disabled:!0},"Csv"),"\xa0\xa0",i.a.createElement(b.a,{className:"btn btn-info",disabled:!0},"Excel"),"\xa0\xa0",i.a.createElement(b.a,{className:"btn btn-info",disabled:!0},"Print"),"\xa0\xa0",i.a.createElement(b.a,{className:"btn btn-info",disabled:!0},"Pdf"))),i.a.createElement(p.a,null,i.a.createElement(f.a,{row:!0},i.a.createElement(m.a,{md:"1"},i.a.createElement(b.a,{className:"btn btn-info"},"Search")),i.a.createElement(m.a,{md:"4"},i.a.createElement(g.a,{type:"text",id:"search-input",name:"search-input",placeholder:"search.."}))),i.a.createElement(E.a,{responsive:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"SI.NO"),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Action"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"1"),i.a.createElement("td",null,"Ketchup"),i.a.createElement("td",null)),i.a.createElement("tr",null,i.a.createElement("td",null,"2"),i.a.createElement("td",null,"Barbeque sauce "),i.a.createElement("td",null)),i.a.createElement("tr",null,i.a.createElement("td",null,"3"),i.a.createElement("td",null,"Tomato"),i.a.createElement("td",null)),i.a.createElement("tr",null,i.a.createElement("td",null,"4"),i.a.createElement("td",null,"Capsicum"),i.a.createElement("td",null)),i.a.createElement("tr",null,i.a.createElement("td",null,"5"),i.a.createElement("td",null,"Onions"),i.a.createElement("td",null)),i.a.createElement("tr",null,i.a.createElement("td",null,"6"),i.a.createElement("td",null,"Red chilli"),i.a.createElement("td",null)),i.a.createElement("tr",null,i.a.createElement("td",null,"5"),i.a.createElement("td",null,"Sauce"),i.a.createElement("td",null)),i.a.createElement("tr",null,i.a.createElement("td",null,"6"),i.a.createElement("td",null,"Pepper"),i.a.createElement("td",null)),i.a.createElement("tr",null,i.a.createElement("td",null,"6"),i.a.createElement("td",null,"Cheese"),i.a.createElement("td",null)))),i.a.createElement("p",{className:"text-muted"},"Showing 1 to 10 of 10 entries"),i.a.createElement(v.a,null,i.a.createElement(h.a,null,i.a.createElement(N.a,{previous:!0,tag:"button"})),i.a.createElement(h.a,{active:!0},i.a.createElement(N.a,{tag:"button"},"1")),i.a.createElement(h.a,null,i.a.createElement(N.a,{tag:"button"},"2")),i.a.createElement(h.a,null,i.a.createElement(N.a,{tag:"button"},"3")),i.a.createElement(h.a,null,i.a.createElement(N.a,{tag:"button"},"4")),i.a.createElement(h.a,null,i.a.createElement(N.a,{next:!0,tag:"button"}))))))}}]),a}(o.Component);a.default=O}}]);
//# sourceMappingURL=15.55c8d01c.chunk.js.map