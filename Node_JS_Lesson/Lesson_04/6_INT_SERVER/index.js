const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('ONE TEAM!')
});

app.listen(4010);