"use strict";function ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}ready(function(){function o(e){window.scroll({behavior:"smooth",left:0,top:e.offsetTop})}function e(){var n;window.location.hash&&(n=document.querySelector(window.location.hash)),document.hidden||document.removeEventListener("visibilitychange",e),"true"!==sessionStorage.animatedOnce?(document.body.classList.add("init-loading"),sessionStorage.setItem("animatedOnce","true"),i.forEach(function(e,t){e.addEventListener("animationend",function(){t===i.length-1&&(window.scrollTo(0,0),setTimeout(function(){document.body.classList.remove("init-loading","loading"),n&&setTimeout(function(){o(n)},250)},500))})})):(document.body.classList.remove("loading"),n&&(window.scrollTo(0,0),o(n)))}var t=document.querySelectorAll('a[href*="#"]'),i=(0<t.length&&t.forEach(function(t){t.addEventListener("click",function(){var e=document.querySelector(t.hash);0<e.length&&o(e)})}),void 0===sessionStorage.animatedOnce&&sessionStorage.setItem("animatedOnce","false"),document.querySelectorAll(".init-loader path"));"visible"===document.visibilityState?e():document.addEventListener("visibilitychange",e);function n(){window.innerWidth<992?a.forEach(function(e){e.classList.remove("remove-transition-md")}):a.forEach(function(e){e.classList.add("remove-transition-md")})}document.querySelectorAll(".remove-onload-transition").forEach(function(e){e.classList.remove("remove-onload-transition")});var a=document.querySelectorAll(".remove-transition-md");n(),window.addEventListener("resize",n);document.querySelector(".header-nav .navbar-toggle-wrapper").addEventListener("click",function(){document.querySelector("body").classList.toggle("nav-open")});var r=document.querySelectorAll("[data-animate-wave]"),t=1e3*parseFloat(getComputedStyle(document.body).getPropertyValue("--wave-animation-duration"));function d(){r.forEach(function(e){e.classList.toggle("animate")})}d(),setInterval(function(){d()},t),0<document.querySelectorAll(".splide").length&&new Splide(".splide",{updateOnMove:!0,type:"loop",perPage:3,perMove:1,trimSpace:"move",focus:"center",drag:!0,breakpoints:{1199:{perPage:2},991:{perPage:1,focus:0},600:{arrows:!1}}}).mount(),window.addEventListener("scroll",function(){document.body.classList.toggle("nav-scrolled",0<window.scrollY)})});