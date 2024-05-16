const express = require('express'); 
const Joi = require('joi');
const fs = require('fs');
const path = require('path');
const joi = require('joi');
const { error } = require('console');

const app = express();

app.use(express.json());

const filePath = path.join(__dirname, 'users.json');

let userId = 1;

const scheme = joi.object({
    firstName: joi.string().min(1).required(),
    secondName: joi.string().min(1).required(),
    city: joi.string().min(0),
    age: joi.number().min(0).max(150).required()
})

app.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.send({ users });
});

app.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const user = users.find(user => user.id === Number(req.params.id));  // params храняться в строке
    if (user) {
        res.send({ user });
    } else {
        res.send({ error: "User not found" });
        
    }
});

app.put('/users/:id', (req, res) => {
    const result = scheme.validate(req.body);
    if (result.error) {
        return res.send({ error: result.error.details });
    } 

    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const user = users.find(user => user.id === Number(req.params.id));  // params храняться в строке
    if (user) {
        user.firstName = req.body.firstName;
        user.secondName = req.body.secondName;
        user.city = req.body.city;
        user.age = req.body.age;

        fs.writeFileSync(filePath, JSON.stringify(users));
        res.send({ user });
          
    } else {
        res.send({ error: "User not found" });
        
    }

});

app.post('/users', (req, res) => {
    const result = scheme.validate(req.body);
    if (result.error) {
        return res.send({ error: result.error.details });
    } 

    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const user = {
        id: ++userId,
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        city: req.body.city,
        age: req.body.age
    };  
    users.push(user);
    fs.writeFileSync(filePath, JSON.stringify(users));
    res.send({ user });

});

app.delete('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const userIndex = users.findIndex(user => user.id === Number(req.params.id));  // params храняться в строке
    if (userIndex >= 0) {
        users.splice(userIndex, 1);

        fs.writeFileSync(filePath, JSON.stringify(users));
        res.send({ status: 'ok' });
          
    } else {
        res.send({ error: "User not found" });
        
    }

});




app.listen(4010, () => console.log("Started"));
