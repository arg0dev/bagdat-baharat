

/*
let revOne = document.getElementById('revOne');
let revTwo = document.getElementById('revTwo');
let revZero = document.getElementById('revZero');

let mQuAu = window.matchMedia("(max-width: 768px)");
matchMediaQuery(mQuAu)
mQuAu.addListener(matchMediaQuery)

function matchMediaQuery(mQuAu) {
        if (mQuAu.matches) {
            revZero.classList.remove('align-content-end', 'align-content-end');
            revZero.classList.add('align-content-center', 'align-content-center');
            revOne.classList.add('vh-30','align-items-start','align-content-start');
            revTwo.classList.add('vh-50','align-items-end','align-content-end');
            console.log(true);
        }
        else {
            revZero.classList.add('align-content-end', 'align-content-end');
            revZero.classList.remove('align-content-center', 'align-content-center');
            revOne.classList.remove('vh-30','align-items-start','align-content-start');
            revTwo.classList.remove('vh-50','align-items-end','align-content-end');
            console.log(false);
        }
    } */

    
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
	var distance = 1000;
    
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}


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
            autoplay: true,
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