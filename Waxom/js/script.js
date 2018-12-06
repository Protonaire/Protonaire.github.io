$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 30,
        loop: true,
        nav: true,
/*         autoplay: true, */
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            900: {
                items: 3,
            }
        }
    });
    $(".post .owl-nav button").on('click', function () {
        $(this).css({
            color: '#cab69f',
            border: "1px solid #cab69f"
        })
    });
});