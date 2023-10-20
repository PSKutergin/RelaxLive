import { handleInputChange } from "./helpers";

const modalService = () => {
    const modal = document.getElementById('modal');
    const modalHeader = modal.querySelector('.modal__header')
    const form = modal.querySelector('form');
    const inputsForm = form.querySelectorAll('input');
    const addItemButton = document.querySelector('.btn-addItem');

    addItemButton.addEventListener('click', () => {
        modalHeader.innerHTML = 'Добавление новой услуги'
        modal.style.display = 'flex'
    });

    modal.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.closest('.modal') || e.target.closest('.button__close') || e.target.closest('.cancel-button')) {
            modal.style.display = '';
        }
    });

    form.addEventListener('input', (e) => {
        if (e.target.closest('.input__cost')) {
            e.target.value = e.target.value.replace(/\D/g, "");
        }
    });

    inputsForm.forEach(input => {
        input.addEventListener('input', handleInputChange)
    });
}

export default modalService