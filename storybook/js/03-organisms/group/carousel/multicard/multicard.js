"use strict";(function(a){Drupal.behaviors.multicard={attach:function attach(){var b=720,c=960,d=1140,e=1440,f=a(window).width(),g=0,h=0,i=a(".multicard .lightslider").lightSlider({item:5,loop:!1,controls:!1,slideMove:1,initialWidth:function sliderWidth(){var a=e-h;return 480>f?a=f:f<b?a=480-g:f<c?a=b-g:f<d?a=c-h:f<e&&(a=d-h),a}(),pager:!1,slideMargin:20,enableDrag:!1,easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:600,responsive:[{breakpoint:d+h,settings:{slideMargin:10,item:2,slideMove:1}},{breakpoint:c+h,settings:{slideMargin:10,item:2,slideMove:1}},{breakpoint:480,settings:{item:1,slideMove:1}}]});a(".multicard-control-prev").on("click",function(){i.goToPrevSlide()}),a(".multicard-control-next").on("click",function(){i.goToNextSlide()})}}})(jQuery);