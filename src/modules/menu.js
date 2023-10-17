const menu = () => {
    const menuBtn = document.querySelector('.menu__icon')
    const menu = document.querySelector('.popup-dialog-menu')

    menuBtn.addEventListener('click', () => {
        if (innerWidth >= 576) {
            menu.style.right = '639px';
        } else {
            menu.style.transform = 'translate3d(0, 0, 0)';
        };
    })

    menu.addEventListener('click', (e) => {
        if (e.target.closest('.menu-link') || e.target.closest('.close-menu')) {
            if (innerWidth >= 576) {
                menu.style.right = '';
            } else {
                menu.style.transform = '';
            };
        }
    })
}

export default menu