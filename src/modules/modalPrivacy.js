const modalPrivacy = () => {
    const modal = document.querySelector('.popup-privacy')
    const linkPrivacy = document.querySelectorAll('.link-privacy')

    linkPrivacy.forEach(link => {
        link.addEventListener('click', () => {
            modal.style.visibility = 'visible';
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-dialog') || e.target.closest('.close')) {
            modal.style.visibility = '';
        }
    })

}

export default modalPrivacy