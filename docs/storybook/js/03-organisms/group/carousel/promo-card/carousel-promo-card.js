"use strict";(function(a){Drupal.behaviors.carouselPromoCard={attach:function attach(){var b=a(".carousel-promo-card .lightslider").once().lightSlider({item:4,loop:!1,controls:!1,slideMove:4,slideMargin:25,enableDrag:!1,easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:600,keyPress:!0,responsive:[{breakpoint:960+160,settings:{slideMargin:10,item:2,slideMove:2}},{breakpoint:480,settings:{item:1,slideMove:1}}]});a(".carousel-promo-card .carousel-control-prev").once().on("click",function(){b.goToPrevSlide()}),a(".carousel-promo-card .carousel-control-next").once().on("click",function(){b.goToNextSlide()})}}})(jQuery);