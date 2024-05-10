// // импортируем express

// const express = require('express');

// // импортируем path
// const path = require('path');

// // создаем приложение express путем вызова функции express()
// const app = express();

// app.use((req, res, next) => {
//     console.log('Поступил запрос', req.method, req.url);
//     next(); // чтобы вызвать основной обработчик
// })


// // первый аргумент путь / и второй callback котрый выполнится когда придет запрос
// // req - объект запроса, res - отбъект ответа

// // 1 Корневая страница 
// // app.get('/', (req, res) => {
// //     res.send('<h1>Welcome!</h1>');
// // });

// // 1.1 Корневая страница с возвратом файла
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './static/index.html'));
// });



// // Страница Обо мне
// app.get('/about/test', (req, res) => {
//     res.send('<h1>About myself!</h1>');
// });


// const port = 3000;

// // первый аргумент пjhn и второй callback котрый выполнится когда сервер запустится
// app.listen(port, () => {
//     console.log(`Сервер запущен на порту ${port}`);
// });

const express = require('express');

//const path = require('path');

const app = express();

app.use(express.static('static'));


app.get('/', (req, res) => {
    res.sendFile('static/index.html');
});


const port = 3000;


app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});




