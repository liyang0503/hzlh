/**
 * Created by QXT on 2017/7/7.
 */
var w = $(window).width();
var wh = $(window).height();
$(function () {
// 执行动画
   if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
      new WOW().init();
   }

   $('a').click(function () {
      if ($(this).attr('href') == "javascript:") {
         msg();
      }
   });
});

jQuery.fn.size = function () {
   return this.length;
};

function msg() {
   layer.msg('error：数据请求失败！');
}


//鼠标点击tab切换
function tab(cli, sec) {
   $(cli).parent().each(function (index) {
      $(this).children(cli).each(function (ind) {
         $(this).click(function () {
            $($(sec).parent()[index]).children(sec).removeClass('active');
            $($(cli).parent()[index]).children(cli).removeClass('active');
            $(this).addClass('active');
            $($($(sec).parent()[index]).children(sec)[ind]).addClass('active');
         });
      });
   });
}

//鼠标悬停tab切换
function tab2(cli, sec) {
   $(cli).parent().each(function (index) {
      $(this).children(cli).each(function (ind) {
         $(this).mouseover(function () {
            $($(sec).parent()[index]).children(sec).removeClass('active');
            $($(cli).parent()[index]).children(cli).removeClass('active');
            $(this).addClass('active');
            $($($(sec).parent()[index]).children(sec)[ind]).addClass('active');
         });
      });
   });
}

