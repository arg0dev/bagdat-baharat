

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
            autoplaySpeed: 1000,
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