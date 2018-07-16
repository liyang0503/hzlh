/**
 * Created by QXT on 2017/7/17.
 */
$(function () {
   $('.model .s2').click(function () {
      $(this).prev('input').val('');
   });
});

//登录弹窗
function login() {
   if (w > 767) {
      layer.open({
         type: 1,
//          shade: false,
         title: false, //不显示标题
         content: $('.model'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
         cancel: function () {
            layer.msg('退出登录界面', {time: 3000});
         }
      });
   } else {
      $(location).attr('href', 'login-sj.html');
   }
}

//注册
function register() {
   if (w > 767) {
      $(location).attr('href', 'register.html');
   } else {
      $(location).attr('href', 'register-sj.html');
   }
}
