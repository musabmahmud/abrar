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
        animateOut: 'slideOutLeft',
        // animateIn: 'flipInX',
        autoPlay: true,
        loop: true,
        navSpeed: 1000,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });


    //Testimonial-slider
    var teamCarousel = $('.testimonial-slider');
    if (teamCarousel.length) {
        teamCarousel.owlCarousel({
            items: 4,
            autoPlay: true,
            loop: true,
            margin: 20,
            navSpeed: 1500,
            nav: false,
            dots: false,
            // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    };
    //testimonial Area
    var owl = $('.custom-testi');
    owl.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        items: 1,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });


    //Blog Area
    var teamCarousel = $('.custom-blog');
    if (teamCarousel.length) {
        teamCarousel.owlCarousel({
            items: 4,
            autoPlay: true,
            loop: true,
            margin: 30,
            navSpeed: 1500,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                768: {
                    items: 2,
                    nav: true
                },
                992: {
                    items: 3
                }
            }
        });
    };

    /*----------------------------
    8. magnific Popup active
    ------------------------------ */
    $('.pictures').tjGallery({
        selector: '.item',
        margin: 10
    });

    $('').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }
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