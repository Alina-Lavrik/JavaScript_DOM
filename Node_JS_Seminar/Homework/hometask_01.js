

const http = require('http');

let count = 0;

let count2 = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        ++count;
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8',});
        res.end(`<h1>Main page</h1><br>
        <img src="Node_JS_Seminar/Homework/img/piqsels.com-id-jsrei.jpg" alt="picture">
        <h2>You visited page - ${count} time(s)</h2><br>
        <a href="/about">Move to About page</а>`)

    } else if (req.url === '/about') {
        ++count2; 
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8',});
        res.end(`<h1>About page</h1><br>
        <img src="Node_JS_Seminar/Homework/img/piqsels.com-id-frrxd.jpg" alt="picture">
        <h2>You visited page - ${count2} time(s) </h2><br>
        <a href="/">Move to the main page</а>`)
        
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8',});
        res.end(`<h1>ERROR 404</h1>
        <h2>Page does't exist</h2><br>`)
    }
}
);


const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
    
});
