

const express = require('express');

const app = express();

// Для того, чтобы начать принимать тело
// запроса, необходимо подключить промежуточный обработчик express.json(). После
// того, как вы это сделаете, в объекте запроса req вы сможете получать передаваемое
// тело запроса

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body); 
    res.send('<h1>This is a post request!</h1>')
});

app.listen(4060);


//{ title: 'Hello!' }