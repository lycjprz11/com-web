/******导航鼠标点击效果*******/
$(document).ready(function(){
    $("a.nav-name").click(function () {
        $("a.nav-name").each(function () {
            $(this).removeClass("top-active");
        })
        $(this).addClass("top-active")
    })
})
/***轮播图控件*****/
$('.carousel').carousel({
    interval: 5000
})
