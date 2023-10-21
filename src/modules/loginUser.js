import getData from "./getData"
import { validationForm, handleInputChange } from "./helpers";

const loginUser = (url) => {
    const form = document.querySelector('form');
    const nameInput = form.querySelector('#name');
    const passwordInput = form.querySelector('#type');
    const nameTextWarning = form.querySelector('#text-warning-name');
    const passwordTextWarning = form.querySelector('#text-warning-password');

    nameTextWarning.style.opacity = '0';
    passwordTextWarning.style.opacity = '0';

    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', (e) => {
            handleInputChange(e);

            nameTextWarning.style.opacity = '0';
            passwordTextWarning.style.opacity = '0';
        })
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        if (!validationForm(form)) {
            getData(url)
                .then(users => {
                    users.forEach(user => {
                        if (user.login !== nameInput.value) {
                            nameTextWarning.style.opacity = '1';
                            passwordTextWarning.style.opacity = '1';
                        } else if (user.password !== passwordInput.value) {
                            passwordTextWarning.style.opacity = '1';
                        } else {
                            console.log('Данные верные');
                            form.querySelectorAll('input').forEach(input => input.style.borderColor = '');

                            document.cookie = "user=" + JSON.stringify(user)

                            location.href = './table.html';
                        };
                    });

                    form.reset();
                })
        }
    })



}

export default loginUser