(function($) {
    "use strict";

    //===== Prealoder
    $(window).on('load', function(event) {
        $('.proloader').delay(500).fadeOut(500);
    });


    /* ----------------------------------------
           Responsive Mega Menu
     ------------------------------------------*/

    function startsMmenu() {
        $('#menu').mmenu();
    }
    $(document).ready(function() {
        if ($(window).width() < 992) {
            startsMmenu();
        }
    });

    $(window).resize(function() {
        if ($(window).width() < 992) {
            startsMmenu();
        }
    });
    $('.sm-search-btn span').on('click', function() {
        $('.header-search').addClass('open');
    });

    $('.close-search').on('click', function() {
        $('.header-search').removeClass('open');
    });

    $('#mobile_menu a').on('click', function() {
        $(this).addClass('hamburger');
    });

    $('#mobile_menu a').on('click', function() {
        $('#mobile_menu a').removeClass('hamburger');
    });

    $('.checkbox_wrap').on('click', function() {
        $(this).toggleClass('open');
    });

    $('.close-box').on('click', function() {
        $('.filter-wrap-box').removeClass('open');
    });
    $('.filter-open').on('click', function() {
        $('.filter-wrap-box').addClass('open');
    });



    /* ----------------------------------------
              Hero slider
        ------------------------------------------*/

    $(".hero-slider-wrap").owlCarousel({
        items: 1,
        nav: false,
        dot: true,
        autoplayTimeout: 2000,
        loop: false,
        margin: 0,
        smartSpeed: 450,
        responsiveClass: true

    });
    $(".award-logo-wrap").owlCarousel({
        nav: false,
        dot: false,
        autoplayTimeout: 2000,
        loop: true,
        margin: 0,
        smartSpeed: 450,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: false,
                dot: true

            },
            992: {
                items: 4,
                nav: false

            },
            1200: {
                items: 6

            }
        }
    });
    //Swiper slider
    var swiper_one = new Swiper('.category-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.category-button-next',
            prevEl: '.category-button-prev',
        },
        breakpoints: {

            // when window width is <= 768px
            767: {
                slidesPerView: 2,
                spaceBetweenSlides: 10
            },
            // when window width is <= 992px
            992: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            },
            // when window width is <= 1200px
            1200: {
                slidesPerView: 4,
                spaceBetweenSlides: 40
            }
        }
    });
    var swiper_three = new Swiper('.popular-slider', {
        slidesPerView: 4,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
        },
        navigation: {
            nextEl: '.popular-button-next',
            prevEl: '.popular-button-prev',
        },
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetweenSlides: 0
            },
            // when window width is <= 768px
            768: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            },
            // when window width is <= 992px
            992: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            },
            // when window width is <= 1200px
            1200: {
                slidesPerView: 4,
                spaceBetweenSlides: 40
            }
        }
    });

    var swiper_two = new Swiper('.showcase-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 2000,
        pagination: {
            el: '.showcase-pagination',
            clickable: true

        },
        navigation: {
            nextEl: '.showcase-button-next',
            prevEl: '.showcase-button-prev',
        },
    });

    var swiper_four = new Swiper('.gallery-slider', {
        slidesPerView: 1,
        speed: 2000,
        pagination: {
            el: '.gallery-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.gallery-button-next',
            prevEl: '.gallery-button-prev',
        },
    });


    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    /*--------------------------
                Count Down Timer
            ----------------------------*/
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day"><span class="time-count">%-D</span> <p>Days :</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hrs :</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Mins :</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>sec</p></span>'));
        });
    });

    /*-------------------------------------
            Close Cookie
    -----------------------------------*/
    $('.cookie-close span').on('click', function() {
        $('.cookie').addClass('d-none');
    });

    /*-------------------------------------
               Popup video
       -----------------------------------*/
    $('.popup-yt').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });

    /*-------------------------------------
                   Nice select
    -----------------------------------*/
    $('select').niceSelect();
    /*-------------------------------------
                Footer Accordian
        -----------------------------------*/
    $(".nav h4").on('click', function() {
        $(this).parent(".nav").toggleClass("open");

    });








})(jQuery);