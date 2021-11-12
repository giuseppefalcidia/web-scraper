const feedDisplay = document.querySelector('#feed');



fetch('http://localhost:8000/results')
.then(response => { return response.json()})
.then(data => {
    data.forEach(article => {
        const article = `<div><h3>` + article.title + `</h3><p>` + article.url + `</p></div>`
        // turning into html
        feedDisplay.insertAdjacentHTML('beforeend', articleItem)
    })
})
.catch(error => console.log(error));

