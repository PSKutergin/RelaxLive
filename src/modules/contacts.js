const contacts = () => {
    const headerContacts = document.querySelector('.header-contacts');
    const dopPhoneBlock = headerContacts.querySelector('.header-contacts__phone-number-accord');
    const dopPhoneNumber = dopPhoneBlock.querySelector('a');
    const dopPhoneBtn = headerContacts.querySelector('.header-contacts__arrow img');

    headerContacts.addEventListener('click', (e) => {
        if (e.target.closest('.header-contacts__arrow')) {
            if (!dopPhoneBlock.style.top) {
                dopPhoneBtn.style.transform = 'rotate(180deg)';
                dopPhoneBlock.style.top = '25px';
                // dopPhoneBlock.style.left = '-2px';
                dopPhoneNumber.style.opacity = '1';
            } else {
                dopPhoneBtn.style.transform = '';
                dopPhoneBlock.style.top = '';
                // dopPhoneBlock.style.left = '';
                dopPhoneNumber.style.opacity = '';
            };
        }
    })
}

export default contacts