const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Запрос получен');


    res.writeHead(200, {  // код 200 - успешного ответа
        'Content-Type': 'text/html; charset=UTF-8',
    });

    // метод end позволяет передать любую информацию в браузер
    res.end('<h1>Добро пожаловать на мой сайт!</h1>');
});


const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);   //Сервер запущен на порту 3000
});