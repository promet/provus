"use strict";(function(a){Drupal.behaviors.mainMenu={attach:function attach(b){var c=b.getElementsByClassName("header")[0],d=document.getElementById("toggle-expand"),f=document.getElementById("main-nav");if(f){var n=f.getElementsByClassName("expand-sub");d.addEventListener("click",function(a){d.classList.toggle("toggle-expand--open"),f.classList.toggle("main-nav--open"),c.classList.toggle("menu-mobile-open"),a.preventDefault()});for(var o=0;o<n.length;o+=1)n[o].addEventListener("click",function(a){var b=a.currentTarget,c=b.nextElementSibling;b.classList.toggle("expand-sub--open"),c.classList.toggle("main-menu--sub-open"),c.classList.contains("main-menu--sub-open")?(f.classList.add("sub-open"),c.parentNode.classList.add("open")):(f.classList.remove("sub-open"),c.parentNode.classList.remove("open")),c.classList.contains("main-menu--sub-1")?f.classList.add("sub-1-open"):f.classList.remove("sub-1-open"),c.classList.contains("main-menu--sub-2")?(f.classList.add("sub-2-open"),f.classList.remove("sub-1-open")):f.classList.remove("sub-2-open")})}for(var g=b.querySelectorAll(".main-menu >li >ul"),h=0;h<g.length;h+=1){var e=g[h],j=e.children.length;j+=e.querySelectorAll("li>ul>li>ul>li").length,8>=j?e.classList.add("columns1"):16>=j?e.classList.add("columns2"):24>=j?e.classList.add("columns3"):32>=j&&e.classList.add("columns4")}var k=document.getElementById("main-menu-back");k&&k.addEventListener("click",function(a){a.preventDefault();var b=document.getElementsByClassName("expand-sub--open")[0],c=b.nextElementSibling;b.classList.remove("expand-sub--open"),c.classList.remove("main-menu--sub-open"),f.classList.remove("sub-open"),c.parentNode.classList.remove("open")}),a("#main-nav > .main-menu > .main-menu__item--with-sub > .main-menu__link--with-sub",b).click(function(b){if(a("#main-nav").hasClass("sub-2-open")){b.preventDefault();var c=a(".main-menu--sub-1.main-menu--sub-open .main-menu__link--sub-1")[0],d=c.nextElementSibling.nextElementSibling;c.classList.remove("expand-sub--open"),d.classList.remove("main-menu--sub-open"),f.classList.remove("sub-2-open"),f.classList.add("sub-1-open"),d.parentNode.classList.remove("open")}});var l=function(){var b=a(".main-nav > .main-menu > li.main-menu__item--with-sub > ul");if(1024<a(window).width()){var c=a(f).offset().top+a(f).outerHeight(!0);b.css({top:c-a(window).scrollTop()})}else b.css({top:""})};a(window).resize(l),a(window).scroll(l),a(".main-nav").mouseenter(l);var m;a(".main-menu__item",b).mouseleave(function(b){a(b.currentTarget).removeClass("hover-menu"),clearTimeout(m)}).mouseenter(function(b){var c=a(b.currentTarget);m=setTimeout(function(){return c.addClass("hover-menu")},400)})}}})(jQuery);