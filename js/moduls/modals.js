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

