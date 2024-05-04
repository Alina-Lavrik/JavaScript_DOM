// Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере
// по URL “/” возвращает такую страницу:

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Мой сервер работает!</h1>');

    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>About</h1>');
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Error!</h1>');
    }
});


const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
    
});
