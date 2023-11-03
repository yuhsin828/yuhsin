const main = $('#scrollDown').offset().top;

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