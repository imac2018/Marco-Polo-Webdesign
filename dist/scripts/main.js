"use strict";function eventFire(e,t){if(e.fireEvent)e.fireEvent("on"+t);else{var o=document.createEvent("Events");o.initEvent(t,!0,!1),e.dispatchEvent(o)}}var sectionTop_1=document.body.querySelector("section#section-1").offsetTop,routeElm=document.body.querySelector("ul.route");window.addEventListener("scroll",function(e){e.preventDefault(),sectionTop_1<window.scrollY?(routeElm.style.position="fixed",routeElm.style.top="35vh"):(routeElm.style.position="absolute",routeElm.style.top="135vh")});