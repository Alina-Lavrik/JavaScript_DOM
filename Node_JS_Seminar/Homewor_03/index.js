
const express = require('express')
const fs = require('fs')
const path = require('path')



const counter = {
    main: 0,
    about: 0

};


const jsonPath = path.join(__dirname, 'counter.json');
const app = express();

fs.writeFileSync(jsonPath, JSON.stringify(counter, null, 2));

const counterPath = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));


app.get('/', (req, res) => {
    counterPath.main += 1;
    fs.writeFileSync(jsonPath, JSON.stringify(counterPath, null, 2));
    res.send(`<h1 class="heading">Welcome!!!</h1><br>
    <p class="text">Dear user! Welcome to my website!</p><br>
    <h2>You visited page - ${counterPath.main} time(s)</h2><br>
    <a href='/about'>Move to About page</а>`);

})

app.get('/about', (req, res) => {
    counterPath.about += 1;
    fs.writeFileSync(jsonPath, JSON.stringify(counterPath, null, 2))
    res.send(`<h1 class="heading">About my site!!!</h1><br>
        <p class="text">This page contains the infornation about my website!</p><br>
        <h2>You visited page - ${counterPath.about} time(s) </h2><br>
        <a href='/'>Move to Welcome page</а>`);
})

const port = 8000;


app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});