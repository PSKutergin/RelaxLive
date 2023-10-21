import getData from "./getData";
import renderData from "./renderData";
import { debounce } from "./helpers";

const searchService = (url) => {
    const selector = document.getElementById('typeItem')
    const input = document.getElementById('search-input');

    let currentType;

    const debounceSearch = debounce(() => {
        getData(url)
            .then(data => {
                currentType = selector.options[selector.selectedIndex].innerHTML;

                if (currentType === 'Все услуги') {
                    renderData(data.filter((el) => { return el.type.toLowerCase().includes(input.value.toLowerCase()) || el.name.toLowerCase().includes(input.value.toLowerCase()) }))
                } else {
                    let list = data.filter((item) => item.type === currentType);
                    renderData(list.filter((el) => { return el.type.toLowerCase().includes(input.value.toLowerCase()) || el.name.toLowerCase().includes(input.value.toLowerCase()) }))
                };
            })
    }, 500);

    input.addEventListener('input', debounceSearch);
}

export default searchService