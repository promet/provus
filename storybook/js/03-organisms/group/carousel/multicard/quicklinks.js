"use strict";(function(a){Drupal.behaviors.quicklinks={attach:function attach(){var b=720,c=960,d=1140,e=1440,f=a(window).width(),g=0,h=0,i=a(".quicklinks .lightslider").lightSlider({item:5,loop:!1,controls:!1,slideMove:1,initialWidth:function sliderWidth(){var a=e-h;return 480>f?a=480-g:f<b?a=480-g:f<c?a=b-g:f<d?a=c-h:f<e&&(a=d-h),a}(),pager:!1,slideMargin:25,enableDrag:!1,easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:600,responsive:[{breakpoint:c+h,settings:{slideMargin:10,item:3,slideMove:1}},{breakpoint:480,settings:{item:2,slideMove:1}}]});a(".quicklinks-control-prev").on("click",function(){i.goToPrevSlide()}),a(".quicklinks-control-next").on("click",function(){i.goToNextSlide()})}}})(jQuery);