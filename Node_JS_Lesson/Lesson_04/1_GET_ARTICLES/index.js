const express = require('express');

const app = express();

// массив для хранения данных (вместо базы данных)
const articles = [];

// в url указываем articles
app.get('/articles', (req, res) => {
    res.send({ articles })
});

app.listen(4090);