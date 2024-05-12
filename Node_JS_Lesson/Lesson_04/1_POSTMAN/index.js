// импортируем express
const express = require('express');

// создаем приложение express
const app = express();

// делаем обработчик / - url который возвращает заголовок Hello
app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>')
});

app.listen(4040);