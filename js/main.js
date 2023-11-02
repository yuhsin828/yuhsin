const main = $('#scrollDown').offset().top;

/* nav固定在上方 */
$(window).scroll(function () {
    if ($(this).scrollTop() >= main) {  /* 當滑動到scrollDown */
        $('.navbar').removeClass('d-none');
    } else {
        $('.navbar').addClass('d-none');
    }
});

/* 往下滑 */
$('#scrollDown').click(function () {
    const topMain = $('#section1').offset().top - $('.navbar').innerHeight();
    $('html,body').animate({ scrollTop: topMain }, 200);
});

/* 回到頂部 */
$('#goTop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 200);
});
$(window).scroll(function () {
    if ($(this).scrollTop() > main) {
        $('#goTop').fadeIn(200);
    } else {
        $('#goTop').stop().fadeOut(200);
    }
}).scroll();

/* 啟動wow */
$(function () {
    new WOW().init();
})