const modalConsult = () => {
    const modal = document.querySelector('.popup-consultation');
    const consultButtons = document.querySelectorAll('.button_wide')

    consultButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.visibility = 'visible';
        })
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.feedback-wrap') || e.target.closest('.close')) {
            modal.style.visibility = '';
        }
    })
}

export default modalConsult