// // Задание №4
// // 1. Инициализируйте проект NPM.
// // 2. Установите библиотеку express.
// // 3. Создайте файл index.js.
// // 4. В файле напишите код который реализует два обработчика по URL “/” и URL
// // “/about”.
// // 5. В каждом обработчике верните HTML код, в котором есть заголовок и ссылка
// // на соседнюю страницу.

// const express = require('express');

// const path = require('path');

// // создаем приложение express путем вызова функции express()
// const app = express();

// // Корневая страница 
// app.get('/', (req, res) => {
//     res.send(`<h1>Welcome!</h1><br>
//     <p>Dear user! Welcome to my website!</p><br>
//     <a href='/about'>Move to About page</а>`);
// });

// // Страница About
// app.get('/about', (req, res) => {
//     res.send(`<h1>About my site!</h1><br>
//     <p>This page contains the infornation about my website!</p><br>
//     <a href='/'>Move to Welcome page</а>`);
// });

// const port = 8080;

// app.listen(port, () => {
//     console.log(`Сервер запущен на порту ${port}`);
// });


const express = require('express');

const app = express();

app.use(express.static('static'));


// app.get('/', (req, res) => {
//     res.sendFile('static/index.html');
// });

// app.get('/about', (req, res) => {
//     res.sendFile('static/about.html');
// });

const port = 8080;


app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});



