$(document).ready(function () {
    $('.slick_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $(window).on("load", function () {
        $(".page-loader").fadeOut("slow");
    });
});

let scrollTop = document.getElementById("top");

window.onload = function () {
    let timer;
    let scrolled;

    scrollTop.onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    }

    function scrollToTop() {
        if (scrolled > 0) {
            window.scroll(0, scrolled);
            scrolled = scrolled - 50;
            timer = setTimeout(scrollToTop, 20);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}