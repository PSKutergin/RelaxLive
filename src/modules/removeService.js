import getData from "./getData";
import sendData from "./sendData";
import renderData from "./renderData";

const removeService = () => {
    const selector = document.getElementById('typeItem')
    const tbody = document.getElementById('tbody')
    const url = 'http://localhost:4545/repairs';

    let currentType

    tbody.addEventListener('click', (e) => {
        if (e.target.closest('.action-remove')) {
            const tr = e.target.closest('tr')
            const id = tr.dataset.key

            sendData({
                url: `${url}/${id}`,
                method: 'DELETE'
            }).then(() => {
                getData(url).then(data => {
                    currentType = selector.options[selector.selectedIndex].innerHTML

                    if (currentType === 'Все услуги') {
                        renderData(data)
                    } else {
                        let list = data.filter((item) => item.type === currentType);
                        renderData(list)
                    };
                });
            })
        }
    });
}

export default removeService