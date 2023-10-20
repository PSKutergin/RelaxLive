import getData from "./getData";

const renderTable = () => {
    const selector = document.getElementById('typeItem');
    const tbody = document.getElementById('tbody')

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

    const renderData = (items) => {
        tbody.innerHTML = ''

        items.forEach(item => {
            tbody.insertAdjacentHTML('beforeend',
                `
                <tr class="table__row">
                    <td class="table__id table__cell">${item.id}</td>
                    <td class="table-type table__cell">${item.type}</td>
                    <td class="table-name table__cell">${item.name}</td>
                    <td class="table-units table__cell">${item.units}</td>
                    <td class="table-cost table__cell">${item.cost} руб</td>
                    <td>
                        <div class="table__actions table__cell">
                            <button class="button action-change"><span class="svg_ui"><svg
                                        class="action-icon_change">
                                        <use xlink:href="./img/sprite.svg#change"></use>
                                    </svg></span><span>Изменить</span>
                            </button>
                            <button class="button action-remove"><span class="svg_ui"><svg
                                        class="action-icon_remove">
                                        <use xlink:href="./img/sprite.svg#remove"></use>
                                    </svg></span><span>Удалить</span>
                            </button>
                        </div>
                    </td>
                </tr>
            `)
        })
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