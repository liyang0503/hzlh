/**
 * Created by QXT on 2017/7/7.
 */

$(function () {
   //   tab
   tab('.list-li', '.finance-sec');

//   合作机构
   if (w > 1200) {
      $(".le_se").slide({
         titCell: "",
         mainCell: ".bd ul",
         autoPage: true,
         effect: "left",
         autoPlay: true,
         scroll: 1,
         vis: 5,
         trigger: "click"
      });
   } else if (w > 767 && w < 1200) {
      $(".le_se").slide({
         titCell: "",
         mainCell: ".bd ul",
         autoPage: true,
         effect: "left",
         autoPlay: true,
         scroll: 1,
         vis: 3,
         trigger: "click"
      });
   } else {
      $(".le_se").slide({
         titCell: "",
         mainCell: ".bd ul",
         autoPage: true,
         effect: "left",
         autoPlay: true,
         scroll: 1,
         vis: 2,
         trigger: "click"
      });
   }
});
