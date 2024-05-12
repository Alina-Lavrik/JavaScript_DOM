// Роут получения статьи

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

// производится поиск статьи в массиве статей articles по
// идентификатору. Чтобы получить идентификатор, необходимо обратиться к
// объекту параметров URL req.params.id. Обратите внимание, что req.params.id
// “обернут” в Number() для приведения строки в число, так как значения
// параметров URL - это всегда строка.


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
})

app.listen(4002);