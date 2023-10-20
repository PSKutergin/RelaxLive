const sendData = ({ url, data = {}, method }) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        }
    })
        .then(res => res.json())
};

export default sendData