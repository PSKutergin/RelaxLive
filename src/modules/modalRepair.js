const modalRepair = () => {
    const bobyHTML = document.querySelector('body');
    const modal = bobyHTML.querySelector('.popup-repair-types')

    bobyHTML.addEventListener('click', (e) => {
        if (e.target.nodeName === 'A' && e.target.innerText.trim() === "Полный список услуг и цен") {
            modal.style.visibility = 'visible';
        }

    })

    modal.addEventListener('click', (e) => {
        if (e.target.closest('.close')) {
            modal.style.visibility = '';
        }
    })

}

export default modalRepair