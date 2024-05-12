const express = require('express'); // Импортируем express

// Импортируем собственные модули
const { checkParams, checkBody } = require('./validation/validator.js');
const { articleScheme, idScheme } = require('./validation/scheme.js');

// Иницилизируем приложение express
const app = express();

// Определяем переменную, чтобы у каждой статьи был уникальный идентификатор
let uniqueID = 0;
// Определяем импровизированную базу данных, в которой будут храниться наши статьи
const articles = [];


// Добавляем промежуточный обработчи, который позволяет в теле запроса получать JSON
app.use(express.json());

// Получить все статьи

app.get('/articles', (req, res) => {
    res.send({ articles });
});

// Получить конкретную статью

app.get('/articles/:id', checkParams(idScheme), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));
    
    if (article) {
        res.send({ article });  // возвращаем эту статью
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

// Создание статьи

app.post('/articles', checkBody(articleScheme), (req, res) => {
    uniqueID += 1;
    
    articles.push({
        id: uniqueID,
        ...req.body
    });
    
    res.send({
        id: uniqueID,
    });
});

// Обновление статьи

app.put('/articles/:id', checkParams(idScheme), checkBody(articleScheme), (req, res) => {

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

// Удаление статьи

app.delete('/articles/:id', checkParams(idScheme), (req, res) => {

    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1);

        res.send({ article });  
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

// глобальный промежуточный обработчик, который обрабатывает несуществующие роуты
// этот обработчик должен быть определен после всех обработчиков роутов

app.use((req, res) => {
    res.status(404).send({
        message: 'URL not found!'
    })
});


app.listen(4008);