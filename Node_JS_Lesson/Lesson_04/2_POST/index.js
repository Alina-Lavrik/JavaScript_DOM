// Метод POST
// Начнем с метода POST. Ниже представлен пример использования метода POST.

const express = require('express');

const app = express();

app.post('/', (req, res) => {
    res.send('<h1>This is a post request!</h1>')
});

app.listen(4080);


// метод POST реализуется точно
// также, как и метод GET. Если сделать запрос по этому URL “/” с методом POST, то в
// ответ вы получите HTML заголовок. Но есть нюанс: метод POST позволяет
// принимать тело запроса в отличие от GET