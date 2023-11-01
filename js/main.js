const main = $('#section1').offset().top;

/* nav固定在上方 */
$(window).scroll(function () {
    if ($(this).scrollTop() >= main) {  /* 當滑動到section1 */
        $('.navbar').removeClass('d-none');
    } else {
        $('.navbar').addClass('d-none');
    }
});

/* 往下滑 */
$('#scrollDown').click(function () {
    const topMain = main - $('.navbar').innerHeight();
    $('html,body').animate({ scrollTop: topMain }, 200);
});

/* 啟動wow */
$(function () {
    new WOW().init();
})