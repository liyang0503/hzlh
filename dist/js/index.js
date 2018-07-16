/**
 * Created by QXT on 2017/7/7.
 */

$(function () {
   //   导航
   scr();
   $(window).scroll(function () {
      scr();
   });
   function scr() {
      var scrolls = $(document).scrollTop();
      if (w > 768) {
         if (scrolls > 64 && scrolls < (wh - 64)) {
            $('nav').removeClass('scroll').addClass('scroll2');
         } else if (scrolls > (wh - 64)) {
            $('nav').removeClass('scroll2').addClass('scroll');
         } else {
            $('nav').removeClass('scroll').removeClass('scroll2');
         }
      } else {
         if (scrolls > 64) {
            $('nav').addClass('scroll2');
         } else {
            $('nav').removeClass('scroll2');
         }
      }
   }

   $('.but-ico').click(function () {
      $('nav>.container').toggleClass('bj-col')
   });

   //金融超市
   $('.fina-d').hover(function () {
      if (w > 768) {
         $(this).toggleClass('fina-bj');
      }
   });

   //股权路演
   if (w > 767) {
      $(".picMarquee-left").slide({
         mainCell: ".bd ul",
         autoPlay: true,
         effect: "leftMarquee",
         vis: 4,
         interTime: 50
      });
   } else {
      $(".picMarquee-left").slide({
         mainCell: ".bd ul",
         autoPlay: true,
         effect: "leftMarquee",
         vis: 2,
         interTime: 50
      });
   }

   //表单特效
   $('.ind-item input').focus(function () {
      $(this).css({borderWidth: "2px"}).siblings('label').css({fontSize: "14px", top: "-3px", color: "#fff"});
      $(this).parent().siblings().find('input').css({borderWidth: "1px"});
      // $(this).parent().siblings().find('label').css({fontSize: "16px", top: "10px", color: "#999"});
   }).blur(function () {
      $('.ind-item').find('input').css({borderWidth: "1px"});
      if ($(this).val() == "") {
         $(this).siblings('label').css({fontSize: "16px", top: "10px", color: "#999"});
      }
   });
   $('.ind-item textarea').focus(function () {
      $(this).css({borderWidth: "2px", padding: '7px'});
   }).blur(function () {
      $(this).css({borderWidth: "1px", padding: '8px'});
   });

   //表单
   $('#submit').click(function () {
      $('.int').each(function () {
         if ($(this).val() == "") {
            $('#yz').show();
            return false;
         } else {
            $('.mod').fadeIn();
         }
      });
   });
   $('#yz-close').click(function () {
      $('.mod').fadeOut();
      window.location.reload();
   });
});
