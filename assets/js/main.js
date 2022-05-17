(function ($) {
    "use strict";

    /*----------------------------
    1. Full page Preloader
    -----------------------------*/
    jQuery(window).on('load', function () {
        jQuery(".preloader-container").fadeOut();
        jQuery(".preloader").delay(100).fadeOut("slow");
    });

    /*----------------------------
    3. Mobile Menu Activation
    -----------------------------*/

    $('.main-menu').meanmenu({
        meanMenuContainer: '.menu-area',
        meanScreenWidth: 768,
        onePage: true
    });

    /*--------------------------
    4. Sticky Menu 
---------------------------- */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 44) {
            $('.menu-area').addClass('sticky-fixed-top');
        } else {
            $('.menu-area').removeClass('sticky-fixed-top');
        }
    });

    $(document).ready(function () {
        $('ul li a').click(function () {
            $('li a').removeClass("active");
            $(this).addClass("active");
        });
    });

    /*----------------------------
    5. owl active
    ------------------------------ */
    $('.header-slider').owlCarousel({
        items: 1,
        autoplay: true,
        animateOut: 'slideOutLeft',
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true,
        navSpeed: 200,
        nav: true,
    });


    /*----------------------------
    8. magnific Popup active
    ------------------------------ */
    $('.pictures').tjGallery({
        selector: '.item',
        margin: 10
    });

    $('.gallery').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        gallery: {
            enabled: true
        },
        removalDelay: 150,
    });

    /*--------------------------
    -------------------------
    11. Increment
    ---------------------------- */

    incrementalNumber();


    /*--------------------------
    -------------------------
    11. fadein
    ---------------------------- */

    new WOW().init();

})(jQuery);