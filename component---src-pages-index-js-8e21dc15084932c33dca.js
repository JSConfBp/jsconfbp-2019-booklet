(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(e,t,a){"use strict";a.r(t);a(130),a(13),a(14),a(8),a(87),a(19),a(61),a(88);var r=a(0),n=a.n(r),s=a(190),i=a.n(s),c=a(192),l=a(193),o=a(189),u=(a(209),function(e){var t=e.data,a=e.id,r=e.onAir,s=t.name,i=t.title,c=t.time,l=c.slice(0,2)+":"+c.slice(2);return n.a.createElement("div",{className:"presentation"},n.a.createElement("div",{className:"presentation_time"},n.a.createElement("time",{dateTime:l},l)),n.a.createElement("p",{className:"presentation_name"},s),n.a.createElement("p",{className:"presentation_description"},i),s&&n.a.createElement(o.a,{className:"presentation_link",to:"/speakers/"+a},"More details"),r&&n.a.createElement("span",{className:"presentation_live"},"On air"))}),m=a(210),f=a.n(m);a(196);a.d(t,"query",(function(){return p}));t.default=function(e){var t=e.data.allMdx.edges,a=Object(r.useState)(27===(new Date).getDate()?"js2":"js1"),s=a[0],o=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("svg",{className:"triangle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 262 830"},n.a.createElement("path",{d:"M262 830L1 0h261.8l-.8 830z"})),n.a.createElement(c.a,null),n.a.createElement("main",{className:"site_content"},n.a.createElement("section",{className:"schedule"},n.a.createElement("div",{className:"days"},n.a.createElement("a",{className:i()("days_link","js1"===s?"active":""),onClick:function(){return o("js1")}},"Day 1"),n.a.createElement("a",{className:i()("days_link","js2"===s?"active":""),onClick:function(){return o("js2")}},"Day 2")),Object.entries(f.a).map((function(e){var a=e[0],r=e[1];return n.a.createElement("div",{key:a,className:i()("program",a,s===a?"show":"")},Object.entries(r).sort((function(e,t){var a=e[0],r=t[0];return parseInt(a)-parseInt(r)})).map((function(e,r,s){var i=e[0],c=e[1],l=function(e,t){var a=e.find((function(e){return e.node.parent.name===t}));return a?Object.assign({},a.node.frontmatter,{session:t}):{session:t,title:t}}(t,c);l.time=i;var o=new Date,m=parseInt(i.slice(0,2),10),f=parseInt(i.slice(2),10),p=o.getHours()===m&&o.getMinutes()>=f;if(s[r+1]){var _=s[r+1][0],d=parseInt(_.slice(0,2),10),v=parseInt(_.slice(2),10);p=p&&!(o.getHours()===d&&o.getMinutes()>=v)}return n.a.createElement(u,{onAir:p,key:a+"-"+i+"-"+c,id:c,data:l})})))})))),n.a.createElement(l.a,null))};var p="1134907404"},188:function(e,t,a){var r;e.exports=(r=a(191))&&r.default||r},189:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var r=a(0),n=a.n(r),s=a(60),i=a.n(s);a.d(t,"a",(function(){return i.a}));a(188),a(7).default.enqueue;var c=n.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,r=e.query,s=e.render,i=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,i&&s(i),!i&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,r=e.render,s=e.children;return n.a.createElement(c.Consumer,null,(function(e){return n.a.createElement(l,{data:t,query:a,render:r||s,staticQueryData:e})}))}},190:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===s)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},191:function(e,t,a){"use strict";a.r(t);a(47),a(17),a(13),a(14),a(8),a(20);var r=a(0),n=a.n(r),s=a(86);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(s.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(a,!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({location:t,pageResources:a},a.json)):null}},192:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(194);t.a=function(){return n.a.createElement("header",{className:"page-header"},n.a.createElement("div",{className:"page-header_wrapper"},n.a.createElement("span",{className:"page-title"},"JSConf Budapest 2019",n.a.createElement("br",null),"26-27th September")))}},193:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(189);t.a=function(){return n.a.createElement("footer",{className:"site_footer"},n.a.createElement("nav",{className:"site_footer_nav"},n.a.createElement("ul",{className:"site_footer_nav_list"},n.a.createElement("li",{className:"site_footer_nav_list_item"},n.a.createElement(s.a,{className:"site_footer_nav_list_item_link",to:"/map"},"Map")),n.a.createElement("li",{className:"site_footer_nav_list_item"},n.a.createElement(s.a,{className:"site_footer_nav_list_item_link",to:"/"},"Schedule")),n.a.createElement("li",{className:"site_footer_nav_list_item"},n.a.createElement(s.a,{className:"site_footer_nav_list_item_link",to:"/contact"},"Contact")))))}},210:function(e,t){e.exports={js1:{"0930":"Opening JSConf Budapest 2019","0945":"mauricio_palma",1015:"shelley_vohr",1045:"jorge_marin",1115:"Coffee break by TRESORIT",1200:"charlie_gerard",1230:"taylor_fairbank",1300:"Lunch by VACUUMLABS",1430:"adam_giese",1500:"rebecca_hill",1530:"Coffee break by TRESORIT",1615:"stephanie_nemeth",1645:"damini_satya",1715:"jake_surma",1800:"Dinner",2e3:"Party"},js2:{"0900":"Breakfast",1e3:"kat_kitay",1030:"tejas_kumar",1100:"ruben_sospedra",1130:"Coffee break by TRESORIT",1215:"braden_moore",1245:"benedicte_raae",1315:"Lunch by VACUUMLABS",1445:"eva_ferreira",1515:"liran_tal",1545:"Coffee break by TRESORIT",1630:"balazs_korossy_khayll",1700:"vitalii_bobrov",1730:"isa_silveira",1800:"Closing & Family photo",1930:"Party at EXTRA Budapest by TRESORIT"}}}}]);
//# sourceMappingURL=component---src-pages-index-js-8e21dc15084932c33dca.js.map