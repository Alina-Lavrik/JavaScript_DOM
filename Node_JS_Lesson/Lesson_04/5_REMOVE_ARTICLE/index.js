// Роут удаления статьи

const express = require('express');

const app = express();

let uniqueID = 0;

const articles = [];

app.use(express.json());

app.get('/articles', (req, res) => {
    res.send({ articles })
});


app.get('/articles/:id', (req, res) => {


    const article = articles.find((article) => article.id === Number(req.params.id));
    
    if (article) {
        res.send({ article });  // возвращаем эту статью
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

// создание статей

app.post('/articles', (req, res) => {
    uniqueID += 1;
    
    articles.push({
        id: uniqueID,
        ...req.body
    });
    
    res.send({
        id: uniqueID,
    });
});

app.put('/articles/:id', (req, res) => {

    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;

        res.send({ article });  // возвращаем обновленную статью
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

app.delete('/articles/:id', (req, res) => {

    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {

// проверяем наличие статьи и если она существует, то
// необходимо удалить статью из массива и вернуть объект удаленной статьи
// пользователю
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1);

        res.send({ article });  
    } else {
        res.status(404);
        res.send({ article: null });
    }
});


app.listen(4004);