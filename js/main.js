$(function(){
    // $('.gallery__slider').slick({
    //     prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    //     nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>'
    // })

    $('.gallery__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.gallery__slider-nav',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [{
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
                dots: false,
                infinite: true,
                prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
                nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>',
            }
        }]
    });
    $('.gallery__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery__slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [{
            breakpoint: 560,
            settings: 'unslick'
        }]

    });

    $('.direction__inner').slick({
        responsive: [{
            breakpoint: 1920,
            settings: 'unslick'
            },
            { breakpoint: 460,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
                dots: false,
                infinite: true,
                prevArrow: '<button type="button" class="slick-btn-dir slick-prev-dir"><img src="images/arrow-dir-left.svg" alt=""></button>',
                nextArrow: '<button type="button" class="slick-btn-dir slick-next-dir"><img src="images/arrow-dir-right.svg" alt=""></button>',
            }
        }]
    });

    $('.menu__btn').on('click', function (){
        $('.menu__list').toggleClass('menu__list--active')
    })

    function appHeight() {
        const doc = document.documentElement
        doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
    }

    window.addEventListener('resize', appHeight);
    appHeight();

});