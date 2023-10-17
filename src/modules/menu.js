const menu = () => {
    const menuBtn = document.querySelector('.menu__icon')
    const menu = document.querySelector('.popup-dialog-menu')

    menuBtn.addEventListener('click', () => {
        menu.style.right = '639px'
    })

    menu.addEventListener('click', (e) => {
        if (e.target.closest('.menu-link') || e.target.closest('.close-menu')) {
            menu.style.right = ''
        }
    })
}

export default menu