export const catalog = () => {
    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const btnClose = document.querySelector('.btn-close');
    const subCatalog = document.querySelector('.subcatalog');
    const subCatalogHeader = document.querySelector('.subcatalog-header');
    const btnReturn = document.querySelector('.btn-return');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.append(overlay);


    //Открытие меню
    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active');
    };

    //Закрытие меню
    const closeMenu = () => {
        closeSubMenu(); //при закрытии меню подменю тоже закрыв.
        catalog.classList.remove('open');
        overlay.classList.remove('active');
    };

    //Открытие подменю
    const openSubMenu = event => {
        event.preventDefault();
        const itemList = event.target.closest('.catalog-list__item');
        if (itemList) { //получение названий для подменю
            subCatalogHeader.innerHTML = itemList.innerHTML;
            subCatalog.classList.add('subopen');
        };
    };

    //Закрытие подменю
    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen');
    };

    btnBurger.addEventListener('click', openMenu);
    btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu); //Закрытие меню при нажатии на фон
    catalog.addEventListener('click', openSubMenu);
    btnReturn.addEventListener('click', closeSubMenu);



    //Закрытие меню при нажатии на esc
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            closeMenu();
        };
    });
}