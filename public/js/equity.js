/**
 * Created by QXT on 2017/7/7.
 */

$(function () {
   //发现动效
   // found();

   //   精品路演
   $('.qua-num').each(function () {
      var s1 = $(this).find('.s1').text();
      var s2 = $(this).find('.s2').text();
      var num = parseInt((s2 / s1) * 100);
      $(this).find('.progress-bar').css({width: num + "%"});
   });
   //   最新上线
   $('.newest-num').each(function () {
      var s1 = $(this).find('.s1').text();
      $(this).find('.progress-bar').css({width: s1});
   });

   //   手机头部下拉
   $('.but-ico').click(function () {
      $(this).next('.secs').slideToggle('fast');
   });

});

//动效
function found() {
   $('.poster-item').each(function () {
      if ($(this).css('zIndex') == 0) {
         $(this).find('dl').css({transform: 'scale(0.85)'});
      } else {
         $(this).find('dl').css({transform: 'scale(1)'});
      }
   });
   setTimeout(found, 3000);
}

//手机搜索
function searchToggle(obj, e) {
   var container = $(obj).closest('.search-wrapper');

   if (!container.hasClass('active')) {
      container.addClass('active');
      e.preventDefault();
   }
   else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
      container.removeClass('active');
      // clear input
      container.find('.search-input').val('');
      // clear and hide result container when we press close
      container.find('.result-container').fadeOut(100, function () {
         $(this).empty();
      });
   }
}
