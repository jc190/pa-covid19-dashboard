(this["webpackJsonpcorona-pa"]=this["webpackJsonpcorona-pa"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),i=(a(29),a(33),a(34),a(35),a(8)),s=a(15),l=function(){var e=window.d3,t={top:50,right:50,bottom:50,left:50},a=Object(n.useState)({w:640,h:360}),c=Object(i.a)(a,2),o=c[0],l=c[1],m=Object(n.useState)(),d=Object(i.a)(m,2),u=d[0],f=d[1],h=Object(n.useState)(),v=Object(i.a)(h,2),p=v[0],E=v[1];return Object(n.useEffect)((function(){var e=document.querySelector("#PaChartContainer");l({w:e.offsetWidth,h:.5625*e.offsetWidth})}),[]),Object(n.useEffect)((function(){function e(e){var t=document.querySelector("#PaChartContainer");l({w:t.offsetWidth,h:.5625*t.offsetWidth})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(n.useEffect)((function(){e.json("data/covid/pa-time-series.json").then((function(e){return f(e)}))}),[e]),Object(n.useEffect)((function(){if(u){var a=e.select("#PaChartContainer").append("svg").attr("id","PaChartSvg").attr("width",o.w).attr("height",o.h).append("g").attr("transform","translate(0,"+t.top/2+")");E(u[0].updated);var n=u[0].cases;n=n.filter((function(e){return e.confirmed>0}));var r=e.timeParse("%m/%d/%Y"),c=e.scaleTime().domain([e.min(n,(function(e){return r(e.date)})),e.max(n,(function(e){return r(e.date)}))]).range([0,o.w-t.left]),i=e.scaleLinear().domain([0,e.max(n,(function(e){return+e.confirmed}))]).range([o.h-t.top,0]),l=e.line().x((function(e){return c(r(e.date))})).y((function(e){return i(+e.confirmed)})),m=t.left/1.75;a.append("g").attr("class","x axis").attr("transform","translate("+m+","+(o.h-t.bottom)+")").call(e.axisBottom(c).ticks(10).tickFormat(e.timeFormat("%b %d"))),a.append("g").attr("class","y axis").call(e.axisLeft(i).tickFormat(e.format("~s"))).attr("transform","translate(".concat(m,", 0)")),a.append("path").datum(n).attr("class","line").attr("d",l).attr("transform","translate(".concat(m,", 0)")),a.selectAll("point").data(n).join("circle").attr("fill","#ffab00").attr("r",3).attr("cx",(function(e){return c(r(e.date))})).attr("cy",(function(e){return i(+e.confirmed)})).attr("data-date",(function(e){return e.date})).attr("data-confirmed",(function(e){return e.confirmed})).attr("class","point").attr("transform","translate(".concat(m,", 0)"));var d=Object(s.a)(document.querySelectorAll(".point"));d.forEach((function(e){return e.setContent((function(e){return"".concat(e.getAttribute("data-date"),": ").concat(e.getAttribute("data-confirmed"))}))}));var f=null;return e.select("#PaChartContainer").on("touchmove mousemove",(function(){var t=function(){var t=e.bisector((function(e){return r(e.date)})).left;return function(e){var a=c.invert(e);return t(n,a,1)-1}}()(e.mouse(this)[0]);null!==f&&f!==t&&d[f].hide(),d[t].show(),f=t})),e.select("#PaChartContainer").on("touchend mouseleave",(function(){d.forEach((function(e){return e.hide()})),f=null})),function(){return e.select("#PaChartSvg").remove()}}}),[e,t,u,o]),r.a.createElement("div",{id:"PaChart",className:"card shadow-sm"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("h2",null,"Confirmed Cases Chart")),r.a.createElement("small",null,r.a.createElement("span",{className:"font-weight-bold"},"Last updated:")," ",p&&new Date(p).toDateString())),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{id:"PaChartContainer"})))};var m=function(){var e=window.d3,t=window.topojson,a=Object(n.useState)({w:640,h:360}),c=Object(i.a)(a,2),o=c[0],l=c[1],m=Object(n.useState)(),d=Object(i.a)(m,2),u=d[0],f=d[1],h=Object(n.useState)(),v=Object(i.a)(h,2),p=v[0],E=v[1],w=Object(n.useState)(),b=Object(i.a)(w,2),g=b[0],N=b[1];return Object(n.useEffect)((function(){var e=document.querySelector("#PaMapContainer");l((function(t){return{w:e.offsetWidth,h:.5625*e.offsetWidth}}))}),[]),Object(n.useEffect)((function(){function e(e){var t=document.querySelector("#PaMapContainer");l({w:t.offsetWidth,h:.5625*t.offsetWidth})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(n.useEffect)((function(){e.json("data/covid/pa-county-confirmed.json").then((function(e){return f(e)})),e.json("data/map/pa-topo.json").then((function(e){return E(t.feature(e,e.objects["pa-albers"]))}))}),[e,t]),Object(n.useEffect)((function(){if(u&&p){var t=e.select(".card-body").append("svg").attr("width",o.w).attr("height",o.h),a=e.geoIdentity(),n=e.geoPath(a.fitSize([o.w,o.h],p)),r=e.scaleLog().domain([1,e.max(u,(function(e){return+e.confirmed}))]).range([.1,1]);N(u[0].updated),t.selectAll(".county").data(p.features).enter().append("path").attr("data-name",(function(e){return"".concat(e.properties.COUNTY_NAM)})).attr("data-confirmed",(function(e){return function(e,t){var a=t.filter((function(t){return t.county.trim().toLowerCase()===e.properties.COUNTY_NAM.trim().toLowerCase()}));return a.length>0?a[0].confirmed:0}(e,u)})).attr("class",(function(e){return"county"})).attr("d",n).attr("fill",(function(t,a,n){return n[a].dataset.confirmed>0?e.interpolateReds(r(n[a].dataset.confirmed)):"rgb(211, 211, 211)"}));var c=Object(s.a)(document.querySelectorAll(".county"));return c.forEach((function(e){return e.setContent((function(e){return"".concat((t=e.getAttribute("data-name"),t[0].toUpperCase()+t.slice(1).toLowerCase()),": ").concat(e.getAttribute("data-confirmed"));var t}))})),function(){t.remove(),c.forEach((function(e){return e.destroy()}))}}}),[e,p,u,o]),r.a.createElement("div",{id:"PaMap",className:"card shadow-sm"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("h2",null,"Confirmed Cases Map")),r.a.createElement("small",null,r.a.createElement("span",{className:"font-weight-bold"},"Last updated:")," ",g?new Date(g).toDateString():null)),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{id:"PaMapContainer"})))},d=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-3"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"PA COVID-19 Dashboard"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"bmc-button",target:"_blank",href:"https://www.buymeacoffee.com/jcal190"},r.a.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",alt:"Buy me a coffee"}),r.a.createElement("span",{style:{marginRight:"8px",fontSize:"14px !important"}},"Buy me a coffee")))))},u=function(){var e=Object(n.useState)({w:560,h:315}),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=document.querySelector("#YT-Vid-Container");c({w:e.offsetWidth,h:.5625*e.offsetWidth})}),[]),Object(n.useEffect)((function(){function e(e){var t=document.querySelector("#YT-Vid-Container");c({w:t.offsetWidth,h:.5625*t.offsetWidth})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),r.a.createElement("div",{className:"card shadow-sm"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,"Informational Video")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{id:"YT-Vid-Container",className:"d-flex"},r.a.createElement("iframe",{width:a.w,height:a.h,src:"https://www.youtube-nocookie.com/embed/BtN-goy9VOY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))};a(36);var f=function(){return r.a.createElement("div",{className:"App",id:"App"},r.a.createElement("header",null,r.a.createElement(d,null)),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert"},r.a.createElement("strong",null,"Disclaimer: "),r.a.createElement("span",null,"This website and its contents herein, including all data, mapping, and analysis is provided to the public strictly for general information purposes only. I do not bear any legal responsibility for any consequence caused by the use of information provided. I strictly prohibit use of this website in commerce or reliance on this website for medical guidance."),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(m,null)),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(l,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-lg-12 col-xl-4"},r.a.createElement(u,null)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card shadow-sm"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,"Resources")),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"nav flex-column resource-list"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("h3",null,"PA Department of Health"),r.a.createElement("a",{className:"nav-link",href:"https://www.health.pa.gov/topics/disease/coronavirus/Pages/Coronavirus.aspx"},"Coronavirus (COVID-19) PA Overview"),r.a.createElement("a",{className:"nav-link",href:"https://www.pa.gov/guides/responding-to-covid-19/"},"Responding to COVID-19 in Pennsylvania")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h3",null,"CDC"),r.a.createElement("a",{className:"nav-link",href:"https://www.cdc.gov/coronavirus/2019-nCoV/index.html"},"Coronavirus (COVID-19)")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h3",null,"WHO"),r.a.createElement("a",{className:"nav-link",href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019"},"Coronavirus disease (COVID-19) Pandemic")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h3",null,"JHU"),r.a.createElement("a",{className:"nav-link",href:"https://coronavirus.jhu.edu/map.html"},"Coronavirus COVID-19 Global Cases Map"),r.a.createElement("a",{className:"nav-link",href:"https://github.com/CSSEGISandData/COVID-19"},"Data Repository by Johns Hopkins CSSE")))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card shadow-sm"},r.a.createElement("a",{className:"twitter-timeline","data-height":"500",href:"https://twitter.com/PAHealthDept?ref_src=twsrc%5Etfw"},"Tweets by PAHealthDept"))))),r.a.createElement("footer",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("hr",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("small",{className:"pb-3"},"Made by James Calhoun - ",r.a.createElement("a",{href:"#"},"[",r.a.createElement("i",{className:"bx bxl-github"})," Github]")," - Stay informed. Stay safe.")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.dd4e7e73.chunk.js.map