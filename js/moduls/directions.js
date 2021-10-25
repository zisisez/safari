const images = () => {
    //! Создаем модалку для изображений и контейнер для самой картинки
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.direction'),
        content = document.querySelectorAll('.direction__content')
    //! Добавляем имеющиеся классы модалки в новый элемент и вставляем его в родителя картинок
    imgPopup.classList.add('popup__dir')
    workSection.appendChild(imgPopup)
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    content.style.display = 'none'

    //! Используем делегирование событий и определяем на какую картинку кликнули
    workSection.addEventListener('click', (e) => {
        //! Вешаем событие клика и убираем стандартное поведение
        e.preventDefault()
        let target = e.target
        //! Проверяем на наличие необходимого класса у элемента
        if (target && target.classList.contains('direction__img')) {
            imgPopup.style.display = 'flex'
            document.body.style.overflow = 'hidden'
            //! Забираем путь и картинки и задаем его в созданный элемент
            function showTabContent(i = 0) {
                content[i].style.display = display
            }
        }
        //! Есои кликнули на подложку, у которой имеется div.popup то закрывем картинку
        if (target && target.matches('div.popup__dir')) {
            imgPopup.style.display = 'none'
            document.body.style.overflow = 'auto'
        }
    })

    // Функция скрытия всех табов
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
    }
    // Функция показа таба и смена его активности // i - элемент на который нажал пользователь

}
images()


// Назначаем все необходимые аргументы функции
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    // Забираем все используемые элементы в html
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector),
        imgPopup = document.createElement('div'),
        workSection = document.querySelector('.direction')
    // Функция скрытия всех табов
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        // Убираем класс активности на табе
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    // Функция показа таба и смена его активности // i - элемент на который нажал пользователь
    function showTabContent(i = 0) {
        content[i].style.display = display
        tab[i].classList.add(activeClass)
    }

    hideTabContent()
    showTabContent()
    // Делегирование событий на родителе всех табов, что бы определить по какому элементу кликнули
    header.addEventListener('click', (e) => {
        const target = e.target
        // Проверяем что кликнули в таб, и что в нем присутствует необходимый класс
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            // Если действительно кликнули в таб убираем старый таб, запускаем функция показа нового таба
            tab.forEach((item, i) => {
                if (target === item || target.parentNode === item) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
}
tabs('.direction__inner','.direction__item', '.content__item', 'active')