import modalThank from "./modalThank";

const sendForm = () => {
    const forms = document.querySelectorAll('form');

    const sendData = (data) => {
        // Заменить на server.php
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    };

    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            switch (input.type) {
                case 'text':
                    if (!input.value) {
                        success = false
                    };
                    break;
                case 'checkbox':
                    if (!input.checked) {
                        success = false
                    };
                    break;
            }
        });

        return success
    };

    forms.forEach(form => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        formElements.forEach(elem => {
            if (elem.type === 'checkbox' && elem.hasAttribute('required')) {
                elem.removeAttribute('required');
            }
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            formData.forEach((value, key) => {
                formBody[key] = value
            });

            formElements.forEach(elem => {
                if (elem.type === 'text') {
                    formBody[elem.name] = elem.value
                }
            });

            if (validate(formElements)) {
                sendData(formBody);
                form.reset();

                if (form.closest('.popup-consultation')) {
                    form.closest('.popup-consultation').style.visibility = '';
                };

                modalThank();
            };
        });
    });
}

export default sendForm