const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const url = 'https://www.theguardian.com/uk';

//app.METHOD(PATH, HANDLER);

app.get('/', function (req, res) {
res.json('This is my webscraper');
});

app.get('/results', (req, res) => {
axios(url)
.then(response => {
    const html = response.data
    // parsing through the html
    const $ = cheerio.load(html)
    const articles = [];
    $('.fc-item__title', html).each(function () {
    const title = $(this).text();
    const url = $(this).find('a').attr('href');
    // Get the articles's array
    articles.push({
        title,
        url
    })
    //parse through the articles
    res.json(articles);
    }).catch(err => console.log(err));
});
console.log( "line 36")


});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));



