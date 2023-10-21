import getData from "./getData";
import renderData from "./renderData";

const renderTable = (url) => {
    const selector = document.getElementById('typeItem');

    const renderSelector = (types, data) => {
        types.forEach(item => {
            selector.insertAdjacentHTML('beforeend',
                `
                    <option value="${item}" class="select_option">${item}</option>
                `)
        });

        renderData(data)
    };

    selector.addEventListener('change', (e) => {
        getData(url)
            .then(data => {
                if (e.target.value === 'Все услуги') {
                    renderData(data)
                } else {
                    let list = data.filter((item) => item.type === e.target.value);
                    renderData(list)
                };
            })
    });

    getData(url)
        .then(data => {
            const typesRepair = new Set()

            data.forEach((item) => {
                if (item.type) {
                    typesRepair.add(item.type);
                }
            });

            renderSelector(typesRepair, data);
        })
}

export default renderTable