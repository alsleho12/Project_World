/* javaScript Document */

$(".click1>a").click(function(){
    $(this).parents("#main_top").find(".main>li>a").removeClass("img2");
    $(this).parents("#main_top").find(".main>li>a").addClass("img1");
});

$(".click2>a").click(function(){
    $(this).parents("#main_top").find(".main>li>a").removeClass("img1");
    $(this).parents("#main_top").find(".main>li>a").addClass("img2");
});
