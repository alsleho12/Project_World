/* javaScript Document */

$(function () {
    var menu = $('#pagerBtn>ul>li');
    var contents = $('#wrap>div');
    menu.click(function (event) {
        event.preventDefault();
        var tg = $(this);
        var i = tg.index();
        var section = contents.eq(i);
        var tt = section.offset().top;
        $('html, body').stop().animate({
            scrollTop: tt
        });
    });
});

$(function () {
    var menu2 = $('#gnb>ul>li');
    var contents = $('#wrap>div');
    menu2.click(function (event) {
        event.preventDefault();
        var tg = $(this);
        var i = tg.index();
        var section = contents.eq(i);
        var tt = section.offset().top;
        $('html, body').stop().animate({
            scrollTop: tt
        });
    });
});

/* 마우스 휠 스크롤 */

$(document).ready(function() {
    $('#wrap').fullpage({
        scrollBar: true
    });
});