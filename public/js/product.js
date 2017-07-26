/**
 * Created by QXT-yujuenianbei on 2017/7/21.
 */
(function(){
    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    })
    window.onscroll = function(){
        var mm = $(document).scrollTop();
        $(".head-top").css({"background":"rgba(15, 15, 15,"+mm/800+")"})
        // console.log(mm);
    }
}())