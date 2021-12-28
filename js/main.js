(function($) {
    "use strict";

    const cfg = {
        scrollDuration : 800,
    };

    const $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
    const doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


    /* Preloader
    * -------------------------------------------------- */
    const _Preloader = function() {

        $("html").addClass('ss-preload');

        $WIN.on('load', function() {
            $("#loader").fadeOut("slow", function() {
                $("#preloader").delay(300).fadeOut("slow");
            }); 


            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        });
    };


    /* Carousel
    * ------------------------------------------------------ */
    const _SlickSlider = function() {
        $('.intro-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });
    };

    
    /* Smooth scrolling
    * ------------------------------------------------------ */
    const _SmoothScroll = function() {
        $('.smoothscroll').on('click', function (e) {
            const target = this.hash;
            const $target = $(target);
            
            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {
                window.location.hash = target;
            });
        });

    };


    /* Initialize
    * ------------------------------------------------------ */
    (function _Init() {
        _Preloader();
        _SlickSlider();
        _SmoothScroll();
    })();
})(jQuery);