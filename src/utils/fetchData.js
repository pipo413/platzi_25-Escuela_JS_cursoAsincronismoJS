// instanciando XML
let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {

        const xhttp = new XMLHttprequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Erroir', url_api))
            }

        })
        xhttp.send()
    })
}
module.exports = fetchData;