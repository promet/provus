"use strict";Drupal.behaviors.siteHeader={attach:function attach(){var a=document,b=a.body,c="scroll-up",d="scroll-down",e=0;window.addEventListener("scroll",function(){var a=window.pageYOffset;return 0>a?void 0:0===a?void b.classList.remove(c):void(150<e&&a>e&&!b.classList.contains(d)?(b.classList.remove(c),b.classList.add(d)):a<e&&b.classList.contains(d)&&(b.classList.remove(d),b.classList.add(c)),e=a)})}};