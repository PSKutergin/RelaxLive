import getData from "./getData";

const modalRepair = () => {
    const bobyHTML = document.querySelector('body');
    const modal = bobyHTML.querySelector('.popup-repair-types');
    const selector = modal.querySelector('.nav-list-popup-repair');

    let selectorItems = [];
    let dataRepair = [];
    let currentTypeIndex = 0

    const renderSelector = (types, data) => {
        selector.innerHTML = ''
        const typesRepair = Array.from(types)

        typesRepair.forEach((type, index) => {
            if (index === currentTypeIndex) {
                selector.insertAdjacentHTML('beforeend',
                    `
                        <button class="button_o popup-repair-types-nav__item active">${type}</button>
                    `)
            } else {
                selector.insertAdjacentHTML('beforeend',
                    `
                        <button class="button_o popup-repair-types-nav__item">${type}</button>
                    `)
            }
        });

        selectorItems = modal.querySelectorAll('.popup-repair-types-nav__item')

        if (innerWidth < 1025) {
            selector.style.minWidth = '225px';
            selector.style.maxWidth = '710px';
            selector.style.justifyContent = 'center';

            hideButtons(selectorItems);
        };

        renderData(typesRepair[currentTypeIndex], data)
    };

    const renderData = (strType, data) => {
        const title = modal.querySelector('#switch-inner');
        const bodyTable = modal.querySelector('.popup-repair-types-content-table__list > tbody');

        let list = data.filter((item) => {
            return item.type.includes(strType)
        });

        title.innerHTML = strType;
        bodyTable.innerHTML = '';

        list.forEach(item => {
            bodyTable.insertAdjacentHTML('beforeend',
                `
                    <tr class="mobile-row showHide">
                        <td class="repair-types-name">${item.name}</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                        <td class="repair-types-value">${item.units}</td>
                        <td class="repair-types-value">${item.cost} руб.</td>
                    </tr>
                `)
        })
    };

    const hideButtons = (elems) => {
        elems.forEach((item) => {
            if (!item.classList.contains('active')) {
                item.style.display = 'none'
            } else {
                item.style.display = ''
            }
        })
    };

    bobyHTML.addEventListener('click', (e) => {
        if (e.target.nodeName === 'A' && e.target.innerText.trim() === "Полный список услуг и цен") {
            modal.style.visibility = 'visible';
        }

    });

    modal.addEventListener('click', (e) => {
        if (e.target.closest('.close')) {
            modal.style.visibility = '';
        }

        if (e.target.closest('.popup-repair-types-nav__item')) {
            selectorItems.forEach((item) => {
                if (item.innerText === e.target.innerText) {
                    item.classList.add('active');

                    renderData(e.target.innerText, dataRepair)
                } else {
                    item.classList.remove('active')
                };
            })
        }

        if (innerWidth < 1025) {
            selectorItems.forEach((item, index) => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');

                    if (e.target.closest('.nav-arrow_right')) {
                        currentTypeIndex = index + 1
                    } else if (e.target.closest('.nav-arrow_left')) {
                        currentTypeIndex = index - 1
                    };

                    if (currentTypeIndex < 0) {
                        currentTypeIndex = selectorItems.length - 1
                    } else if (currentTypeIndex === selectorItems.length) {
                        currentTypeIndex = 0
                    };
                }
            });

            renderData(selectorItems[currentTypeIndex].innerHTML, dataRepair)
            selectorItems[currentTypeIndex].classList.add('active');
            hideButtons(selectorItems);
        }
    });

    getData('../db/db.json')
        .then(data => {
            const typesRepair = new Set()

            data.forEach((item) => {
                if (item.type) {
                    typesRepair.add(item.type);
                }
            });

            renderSelector(typesRepair, data);
            dataRepair = data
        })

}

export default modalRepair