import getData from "./getData";
import renderData from "./renderData";

const renderTable = () => {
    const selector = document.getElementById('typeItem');

    const renderSelector = (types, data) => {
        types.forEach(item => {
            selector.insertAdjacentHTML('beforeend',
                `
                    <option value="${item}">${item}</option>
                `)
        });

        selector.addEventListener('change', (e) => {
            if (e.target.value === 'Все услуги') {
                renderData(data)
            } else {
                let list = data.filter((item) => item.type === e.target.value);

                renderData(list)
            };
        });

        renderData(data)
    };

    getData('http://localhost:4545/repairs')
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