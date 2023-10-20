import getData from "./getData";
import sendData from "./sendData";
import renderData from "./renderData";
import { validationForm } from "./helpers";

const addService = () => {
    const selector = document.getElementById('typeItem')
    const modal = document.getElementById('modal');
    const form = modal.querySelector('form');
    const typeInput = form.querySelector('#type');
    const nameInput = form.querySelector('#name');
    const unitsInput = form.querySelector('#units');
    const costInput = form.querySelector('#cost');
    const url = 'http://localhost:4545/repairs';

    let currentType

    form.addEventListener('click', (e) => {
        e.preventDefault()

        if (e.target.closest('.button-ui_firm')) {
            if (!validationForm(form)) {
                if (!form.dataset.method) {
                    const service = {
                        type: typeInput.value,
                        name: nameInput.value,
                        units: unitsInput.value,
                        cost: costInput.value
                    }

                    sendData({
                        url: url,
                        data: service,
                        method: 'POST'
                    }).then(() => {
                        getData(url).then(data => {
                            currentType = selector.options[selector.selectedIndex].innerHTML

                            if (currentType === 'Все услуги') {
                                renderData(data)
                            } else {
                                let list = data.filter((item) => item.type === currentType);
                                renderData(list)
                            };

                            form.reset();
                            form.querySelectorAll('input').forEach(input => input.style.borderColor = '');

                            modal.style.display = '';
                        });
                    })
                }
            }
        }
    })
}

export default addService