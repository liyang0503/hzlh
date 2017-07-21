/**
 * Created by QXT on 2017/7/7.
 */

$(function () {
   tab('.tui-li', '.tui-sec');

//   手机头部
   $('.nav-ico').click(function () {
      $('.nav-t-list').slideToggle('fast');
   });

//   友情链接
   var lis = [];
   $('li.pt').each(function (index) {
      if (index > 0) {
         var le = $(this).offset().left - $(this).parent().offset().left;
         var i;
         if (le == 0) {
            i = index;
            if (index >= i) {
               lis = $($('li.pt')[index - 1]).nextAll('.pt');
            }
            $('li.gd').show();
         }
      }
   });
   for (var i = 0; i < lis.length; i++) {
      $('.uls').append(lis[i]);
   }
});
