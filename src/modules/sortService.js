import getData from "./getData";
import renderData from "./renderData";

const sortService = (url) => {
    const selector = document.getElementById('typeItem')
    const thead = document.querySelector('.table > thead');

    let currentType;
    let colName;
    let isSort = false;

    thead.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.closest('.th-id')) {
            colName = 'id'
        } else if (e.target.closest('.th-type')) {
            colName = 'type'
        } else if (e.target.closest('.th-name')) {
            colName = 'name'
        } else if (e.target.closest('.th-units')) {
            colName = 'units'
        };

        if (isSort) {
            e.target.querySelector('svg').style.transform = 'rotate(180deg)';
        } else {
            e.target.querySelector('svg').style.transform = '';
        };

        const sortOptions = {
            name: colName,
            value: isSort ? 'asc' : 'desc'
        };

        getData(`${url}?_sort=${sortOptions.name}&_order=${sortOptions.value}`)
            .then(data => {
                currentType = selector.options[selector.selectedIndex].innerHTML

                if (currentType === 'Все услуги') {
                    renderData(data)
                } else {
                    let list = data.filter((item) => item.type === currentType);
                    renderData(list)
                };
            });

        isSort = !isSort;
    })


}

export default sortService