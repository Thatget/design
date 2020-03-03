define([

        "jquery",
        "jquery-2",
        "popper",
        "bootstrap",
        "isotope",
    "magnific-popup",
    "waypoints",
    "counterup",
    "meanmenu",
    "aos",
    "backgroundMove",
    "slick",
    "scrollUp"
    ],
    function($) {
        "use strict";

        /*----------------------------
        Animation js active
        ------------------------------ */
        try {
            AOS.init()
        }catch (e) {

        }

        /*----------------------------
         Video Popup JS
        ----------------------------*/
        $('.popup-youtube').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /*-----------------------------
    Portfolio Carousel
    ------------------------------*/

        $('.portfolio-item-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: "<i class='fas fa-chevron-left left-arrow'></i>",
            nextArrow: "<i class='fas fa-chevron-right right-arrow'></i>",
            infinite: true,
            lazyLoad: 'ondemand',
            autoplay: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                }

            ]
        });
        /*-----------------------------
Testimonial Carousel
------------------------------*/
        $('.testimonial-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: "<i class='fas fa-chevron-left left-arrow-2'></i>",
            nextArrow: "<i class='fas fa-chevron-right right-arrow-2'></i>",
            infinite: true,
            autoplay: false,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        /*-----------------------------
Project Carousel
------------------------------*/
        $('.single-project-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: "<i class='fas fa-chevron-left left-arrow-3'></i>",
            nextArrow: "<i class='fas fa-chevron-right right-arrow-3'></i>",
            infinite: true,
            autoplay: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        /*----------------------------
        Search
        ------------------------------ */
        var changeClass = function (name) {
            $('#searchx, .search-icon-area a').removeAttr('class').addClass(name);
        }

        /*----------------------------
        Sticky menu active
        ------------------------------ */
        function fixed_top_menu() {
            var windows = $(window);
            windows.on("scroll", function () {
                var header_height = $(".main-navigation").height();
                var scrollTop = windows.scrollTop();
                if (scrollTop > header_height) {
                    $(".main-navigation").addClass("sticky");
                } else {
                    $(".main-navigation").removeClass("sticky");
                }
            });
        }
        fixed_top_menu();

        /*----------------------------
               Menu active JS
             ----------------------------*/
        $('.portfolio-filter ul li a').on('click', function () {
            $('.portfolio-filter ul li a').removeClass("current");
            $(this).addClass("current");
        });

        $('.main-menu ul li a').on ('click', function () {
            $('.main-menu ul li a').removeClass("current");
            $(this).addClass("current");
        });
        /*----------------------------
        Preloader
        ------------------------------ */
        $(window).on('load', function () {
            $("#status").on('fadeOut', "slow");
            $("#preloader").on('delay', 500).on('fadeOut', "slow").remove();
        });
        /*----------------------------
        Move Background
        ------------------------------ */
        $(function () {
            $('.big-footer').backgroundMove();
        });

    });
