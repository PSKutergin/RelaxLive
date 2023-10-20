const modalService = () => {
    const modal = document.getElementById('modal')
    const addItemButton = document.querySelector('.btn-addItem')

    addItemButton.addEventListener('click', () => modal.style.display = 'flex')

    modal.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.closest('.modal') || e.target.closest('.button__close') || e.target.closest('.cancel-button')) {
            modal.style.display = '';
        }
    })

}

export default modalService