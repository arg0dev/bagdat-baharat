    let halfOp = document.querySelector('video');
    let animaT0 = document.getElementById('animaT0');
    let animaT1 = document.getElementById('animaT1');
    let animaT2 = document.getElementById('animaT2');
    let animaT3 = document.getElementById('animaT3');
    let animaT4 = document.getElementById('animaT4');
    function triggerHalfOp() {
        halfOp.classList.add('halfOp');
    }

    function animaTrigger() {
        animaT0.classList.add('showMe');
        animaT1.classList.add('showMe');
        animaT2.classList.add('showMe');
        animaT3.classList.add('showMe');
        animaT4.classList.add('showMe');
    }

    setTimeout(function () {
        triggerHalfOp();
    }, 1500);

    setTimeout(function () {
        animaTrigger();
    }, 2000);


    $(document).ready(function () {
        $('.arg0_swiper').slick({
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: false,
            lazyLoad: 'ondemand',
            adaptiveHeight: true,
        });
        $('#arg0_swiper--prev').on('click', function () {
            $('.arg0_swiper').slick('slickPrev');
        });
        $('#arg0_swiper--next').on('click', function () {
            $('.arg0_swiper').slick('slickNext');
        });
    });

    $(document).ready(function () {
        $('.arg0_swiper-two').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            lazyLoad: 'ondemand',
            adaptiveHeight: true,
        });
        $('#arg0_swiper-two--prev').on('click', function () {
            $('.arg0_swiper-two').slick('slickPrev');
        });
        $('#arg0_swiper-two--next').on('click', function () {
            $('.arg0_swiper-two').slick('slickNext');
        });
    });

    $(document).ready(function () {
        $('.arg0_swiper-three').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            lazyLoad: 'ondemand',
            adaptiveHeight: true,
        });
    });


    $(document).ready(function () {
        $('.arg0_swiper-four').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: false,
            lazyLoad: 'ondemand',
            adaptiveHeight: true,
        });
        $('#arg0_swiper-four--prev').on('click', function () {
            $('.arg0_swiper-four').slick('slickPrev');
        });
        $('#arg0_swiper-four--next').on('click', function () {
            $('.arg0_swiper-four').slick('slickNext');
        });
    });



// smoothScroll-Es5.js | Start |

"use strict";
window.addEventListener("load", function () {
    function scrollIt(destination, duration, easing) {
        if (destination == null) {
            console.log("scroll destination: " + destination);
            return;
        }
        var easings = {
            "linear": function (t) {
                return t;
            },
            "smooth": function (t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }
        };

        var start = window.pageYOffset;
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, destinationOffsetToScroll);
            return;
        }

        function scroll() {
            var now = 'now' in window.performance ? performance.now() : new Date().getTime();
            var time = Math.min(1, ((now - startTime) / duration));
            var timeFunction = easings[easing](time);
            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

            if (Math.abs(window.pageYOffset - destinationOffsetToScroll) < 1) {
                return;
            }
            requestAnimationFrame(scroll);
        }
        scroll();
    }

    var all_scroll_on_click_elements = document.getElementsByClassName("scrollOnClick");
    if (all_scroll_on_click_elements.length != 0) {
        for (var i = 0; i < all_scroll_on_click_elements.length; i++)
            all_scroll_on_click_elements[i].addEventListener('click',
                function (e) {
                    var d = e.currentTarget;
                    var duration = d.getAttribute("duration");
                    if (duration == "" || duration == null) duration = 500;
                    duration = parseInt(duration);
                    var easing = d.getAttribute("easing");
                    if (easing == "" || easing == null) easing = "smooth";
                    var id = d.getAttribute("scrollTo");
                    scrollIt(
                        document.getElementById(id),
                        duration,
                        easing
                    );
                });
    } else {
        console.log("WARNING: No elements with class scrollOnClick found.");
    }
});

// smoothScroll-Es5.js | End | 


let prev = document.getElementById('arg0_swiper-four--prev');
let next = document.getElementById('arg0_swiper-four--next');
let catcher = document.getElementById('btnCatcher');

let mQuAu = window.matchMedia("(max-width: 990px)");
matchMediaQuery(mQuAu)
mQuAu.addListener(matchMediaQuery)

function matchMediaQuery(mQuAu) {
        if (mQuAu.matches) {
            catcher.classList.remove('newBtn');
            catcher.classList.add('btnAbs2');
            prev.classList.remove('btnAbs2', 'absOne');
            next.classList.remove('btnAbs2', 'absTwo');
        }
        else {
            catcher.classList.add('newBtn');
            catcher.classList.remove('btnAbs2');
            prev.classList.add('btnAbs2', 'absOne');
            next.classList.add('btnAbs2', 'absTwo');
        }
}


(function($) {
    var selector = ".section";
  
    var $slides = $(selector);
  
    var currentSlide = 0;
    var isAnimating = false;
  
    var stopAnimation = function() {
      setTimeout(function() {
        isAnimating = false;
      }, 300);
    };
  
    var bottomIsReached = function($elem) {
      var rect = $elem[0].getBoundingClientRect();
      return rect.bottom <= $(window).height();
    };
  
    var topIsReached = function($elem) {
      var rect = $elem[0].getBoundingClientRect();
      return rect.top >= 0;
    };
  
    document.addEventListener(
      "wheel",
      function(event) {
        var $currentSlide = $($slides[currentSlide]);
  
        if (isAnimating) {
          event.preventDefault();
          return;
        }
  
        var direction = -event.deltaY;
  
        if (direction < 0) {
          // next
          if (currentSlide + 1 >= $slides.length) return;
          if (!bottomIsReached($currentSlide)) return;
          event.preventDefault();
          currentSlide++;
          var $slide = $($slides[currentSlide]);
          var offsetTop = $slide.offset().top;
          isAnimating = true;
          $("html, body").animate(
            {
              scrollTop: offsetTop
            },
            1000,
            stopAnimation
          );
        } else {
          // back
          if (currentSlide - 1 < 0) return;
          if (!topIsReached($currentSlide)) return;
          event.preventDefault();
          currentSlide--;
          var $slide = $($slides[currentSlide]);
          var offsetTop = $slide.offset().top;
          isAnimating = true;
          $("html, body").animate(
            {
              scrollTop: offsetTop
            },
            1000,
            stopAnimation
          );
        }
      },
      { passive: false }
    );
  })(jQuery);
