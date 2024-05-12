// Роут обновления статьи


const express = require('express');

const app = express();

let uniqueID = 0;


const articles = [];

app.use(express.json());

app.get('/articles', (req, res) => {
    res.send({ articles })
});

//в первом аргументе метода app.get() в URL мы определяем переменную :id

app.get('/articles/:id', (req, res) => {


    const article = articles.find((article) => article.id === Number(req.params.id));

// проверяем наличие статьи, и если искомая статья существует
    
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
   
    // проверяется наличие статьи, и если она есть, необходимо
    // перезаписать поля title и content. Это мы можем сделать по ссылке, по этому
    // просто перезаписываем поля значениями из тела запроса req.body и в ответе
    // отправляем обновленную статью


    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;

        res.send({ article });  // возвращаем обновленную статью
    } else {
        res.status(404);
        res.send({ article: null });
    }
});


app.listen(4003);