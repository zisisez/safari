$(function(){
    $('.about__popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.gallery__item-inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
    $('.gallery__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>'
    })

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