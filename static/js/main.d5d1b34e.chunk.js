(this.webpackJsonpbreakingbad=this.webpackJsonpbreakingbad||[]).push([[0],{11:function(e,a,t){e.exports=t(24)},16:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(3),l=t.n(r),i=(t(16),t(17),t(4));function m(e){var a=e.data;return n.a.createElement(c.Fragment,null,n.a.createElement("div",{className:"row"},a.map((function(e,a){return n.a.createElement("div",{key:a,className:"col-6 col-sm-6 col-md-4 col-lg-3"},n.a.createElement("div",{className:"cus_card",style:{backgroundImage:"url(".concat(e.img,")")}},n.a.createElement("h1",{className:"char_name"},e.name),n.a.createElement("div",{className:"card_img"},n.a.createElement("img",{src:e.img,alt:e.nickname})),n.a.createElement("div",{className:"card_body"},n.a.createElement("div",{className:"card_body_in"},n.a.createElement("div",{className:"card_text"},n.a.createElement("h6",null,"Occupation"),n.a.createElement("ul",null,e.occupation.map((function(e,a){return n.a.createElement("li",{key:a},a+1,". ",e)}))))))))}))))}var o=function(){var e=Object(i.b)((function(e){return e})),a=e.characters,t=e.loading;return n.a.createElement("div",{className:""},n.a.createElement("div",{class:"bg-light mb-3 border-bottom"},n.a.createElement("div",{class:"container"},n.a.createElement("h4",{class:"m-0 pt-3 pb-3"},"Breaking Bad"))),n.a.createElement("div",{className:"container"},t?n.a.createElement("div",{className:"loading"}):n.a.createElement(m,{data:a})))},s=t(1),d=t(2),E=t(10),u={loading:!1,characters:[],error:"",limit:20},b=Object(d.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_USERS_REQUEST":return Object(s.a)(Object(s.a)({},e),{},{loading:!0});case"FETCH_USERS_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{loading:!1,characters:a.data,error:""});case"FETCH_USERS_FAILURE":return Object(s.a)(Object(s.a)({},e),{},{loading:!1,characters:[],error:a.error});default:return e}}),Object(d.a)(E.a)),g=function(){return function(e){e({type:"FETCH_USERS_REQUEST"}),fetch("https://breakingbadapi.com/api/characters?limit=52").then((function(e){return e.json()})).then((function(a){e({type:"FETCH_USERS_SUCCESS",data:a})})).catch((function(a){e(function(e){return{type:"FETCH_USERS_FAILURE",data:e}}(a))}))}};b.dispatch(g()),l.a.render(n.a.createElement(i.a,{store:b},n.a.createElement(o,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.d5d1b34e.chunk.js.map