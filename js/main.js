$(function(){

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



    $('.menu__btn').on('click', function (){
        $('.menu__list').toggleClass('menu__list--active')
    })

    function appHeight() {
        const doc = document.documentElement
        doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
    }

    window.addEventListener('resize', appHeight);
    appHeight();


    $("#menu").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });
    $("#header__arrow").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });




    //! Назначаем необходимые аргументы для вызова функции
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        //! Находим все нужные элементы страницы в html
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]')
        //! Проверяем каждую нажатую кнопку на то, что она нажата и убираем стандартное поведение что бы небыло ссылки
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                }
                //! Добавляем в html дата атрибуты и скрываем изначально все модальные окна
                windows.forEach(item => {
                    item.style.display = 'none'
                });
                //! Показываем модалку по клику которая прошла проверки
                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
                // document.body.classList.add('modal-open')
            })
        });
        //! Вешаем событие на крестик и прячем по клику модалку
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none'
            });
            modal.style.display = 'none'
            document.body.style.overflow = ''
            // document.body.classList.remove('modal-open')
        })
        //! Вешаем событие на всю модалку, и проверяем нажали на нее либо вне, если вне , закрываем. Если аргумент closeClickOverlay = false, модалка не закроется по клику под подложке
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none'
                });
                modal.style.display = 'none'
                document.body.style.overflow = ''
                // document.body.classList.remove('modal-open')
            }
        })
    }

    // const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
    //     modalEngineer = document.querySelector('.popup_engineer'),
    //     modalEngineerClose = document.querySelector('.popup_engineer .popup_close')

    // bindModal(callEngineerBn, modalEngineer, modalEngineerClose)
    //! Функция показа модалки через назначенное время
    function showModalByTyme(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block'
            document.body.style.overflow = 'hidden'
        }, time);
    }
    //! Вызовы всех необходимых модалок
    bindModal('.header__btn', '.popup', '.popup .popup_close')

    // showModalByTyme('.popup', 60000)


    const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
        const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector),
            imgPopup = document.createElement('div'),
            workSection = document.querySelector('.direction')

        imgPopup.classList.add('popup__dir')
        workSection.appendChild(imgPopup)
        imgPopup.style.justifyContent = 'center';
        imgPopup.style.alignItems = 'center';
        imgPopup.style.display = 'none';

        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none'
            });
            tab.forEach(item => {
                item.classList.remove(activeClass)
            });
        }
        function showTabContent(i = 0) {
            content[i].style.display = 'flex'
            tab[i].classList.add(activeClass)
        }
hideTabContent()
        header.addEventListener('click', (e) => {
            const target = e.target

            if (target &&
                (target.classList.contains(tabSelector.replace(/\./, '')) ||
                    target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
                // Если действительно кликнули в таб убираем старый таб, запускаем функция показа нового таба
                tab.forEach((item, i) => {
                    if (target === item || target.parentNode === item) {
                        imgPopup.style.display = 'flex'
                        document.body.style.overflow = 'hidden'
                        hideTabContent()
                        showTabContent(i)
                    }
                });
            }
            if (target && target.matches('div.popup__dir')) {
                imgPopup.style.display = 'none'
                document.body.style.overflow = 'auto'
                hideTabContent()
            }

        })
    }
    tabs('.direction','.direction__item', '.content__item', 'active')

});