(this.webpackJsonpcryptocurrency_converter=this.webpackJsonpcryptocurrency_converter||[]).push([[0],{27:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=a(26);a(32);var u=function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Cryptocurrency Exhange Program")))};var i=function(){return r.a.createElement("div",{className:"instructions"},r.a.createElement("h3",null,"The rules are simple. Choose two differnt types of cryptocurrency from the current top 10, enter the amount of units you wish to convert, and see that sweet sweet conversion rate"))},m=a(6),s=a(58),p=a(7),E=a.n(p);var f=function(e){var t=e.cryptoOne,a=e.cryptoTwo,c=e.amount,l=Object(n.useState)([]),o=Object(m.a)(l,2),u=o[0],i=o[1];Object(n.useEffect)((function(){E.a.get("https://api.coinpaprika.com/v1/price-converter",{params:{base_currency_id:t,quote_currency_id:a,amount:c}},u).then((function(e){i(e.data.price)})).catch((function(e){console.log("\ud83d\udc33\ud83d\udc33\ud83d\udc33\ud83d\udc33\ud83d\udc33\ud83d\udc33 "+e)}))}));var s=parseFloat(u).toFixed(2);return isNaN(s)&&0==c?r.a.createElement("h3",null,"Please select currency to compare"):r.a.createElement("h3",null,"The conversion rate per ",c," unit(s) is: ",s)};var v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(m.a)(l,2),u=o[0],i=o[1],p=Object(n.useState)(""),v=Object(m.a)(p,2),h=v[0],d=v[1],y=Object(n.useState)(0),b=Object(m.a)(y,2),g=b[0],O=b[1];return Object(n.useEffect)((function(){E.a.get("https://api.coinpaprika.com/v1/coins",a).then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(s.a,{className:"form"},r.a.createElement(s.a.Group,null,r.a.createElement(s.a.Label,null,"Select Currencies to compare below"),r.a.createElement(s.a.Group,null,r.a.createElement(s.a.Label,null,"Coin One: "),r.a.createElement(s.a.Control,{as:"select",onChange:function(e){i(e.target.value)},className:"p-5"},r.a.createElement("option",null,"Select Below"),a.slice(0,10).map((function(e,t){return r.a.createElement("option",{value:e.id,key:t},e.name)})))),r.a.createElement(s.a.Group,null,r.a.createElement(s.a.Label,null,"Coin Two: "),r.a.createElement(s.a.Control,{as:"select",onChange:function(e){d(e.target.value)}},r.a.createElement("option",null,"Select Below"),a.slice(0,10).map((function(e,t){return r.a.createElement("option",{value:e.id,key:t},e.name)})))),r.a.createElement(s.a.Group,null,r.a.createElement(s.a.Label,null,"Amount "),r.a.createElement(s.a.Control,{type:"text",pattern:"[0-9]*",size:"lg",placeholder:"0",onChange:function(e){O(e.target.value)}})),r.a.createElement(f,{cryptoOne:u,cryptoTwo:h,amount:g}))))};var h=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"\xa9 Copyright 2020"))};var d=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement("header",null,r.a.createElement(u,null)),r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(v,null)),r.a.createElement("footer",null,r.a.createElement(h,null)))};l.a.render(r.a.createElement(o.a,null,r.a.createElement(d,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5a71c3d8.chunk.js.map