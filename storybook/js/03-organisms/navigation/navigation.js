"use strict";Drupal.behaviors.navigation={attach:function attach(a){var b=a.querySelectorAll(".header__search a")[0],c=a.querySelectorAll(".header")[0],d=a.querySelectorAll(".header__search input[type=search]")[0],e=a.querySelectorAll(".header__search input[type=reset]")[0],f=document.querySelectorAll(".header__search input[name=\"search-bar-type\"]"),g=a.querySelector(".header__search form");b&&c&&e&&d&&(b.addEventListener("click",function(a){a.preventDefault(),c.classList.toggle("search-bar-open"),c.classList.remove("search-bar-closed"),d.focus()}),e.addEventListener("click",function(){c.classList.remove("search-bar-open"),c.classList.add("search-bar-closed")}),f.forEach(function(a){a.addEventListener("change",function(){switch(a.value){case"catalog":d.setAttribute("name","q"),d.setAttribute("placeholder","Find books and more..."),g.action="https://catalog.ocpl.org/client/en_US/default/search/results";break;case"county":d.setAttribute("name","keys"),d.setAttribute("placeholder","Search..."),g.action="http://orangecountystg.prod.acquia-sites.com/search/google";break;case"agency":default:d.setAttribute("name","keys"),d.setAttribute("placeholder","Search..."),g.action="/search";}})}))}};