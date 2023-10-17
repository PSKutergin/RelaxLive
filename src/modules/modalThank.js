const modalThank = () => {
    const modal = document.querySelector('.popup-thank');

    modal.style.visibility = 'visible';

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.feedback-wrap') || e.target.closest('.close')) {
            modal.style.visibility = '';
        }
    })
}

export default modalThank