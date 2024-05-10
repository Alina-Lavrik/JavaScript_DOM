// Задание №3
// 1. Создайте файл changePerson.js рядом с файлом writePerson.js
// 2. Напишите в нем код, который
// ➜ прочитает файл person.json,
// ➜ уменьшит возраст на 10
// ➜ изменит город на “Ekaterinburg”
// ➜ перезапишет исходный файл person.json

const fs = require('fs');

const path = require('path');

// считываем данные

const pathToFile = path.join(__dirname, 'person.json');


const userDate = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
//console.log(userDate); // { name: 'Ivan', surname: 'Ivanov', age: 30, city: 'Moscow' }

// уменьшит возраст на 10, изменит город на “Ekaterinburg”
// обращаемся к ключам и меняем значения

userDate.age -= 10;
userDate.city = "Ekaterinburg";

// перезапишет исходный файл person.json

fs.writeFileSync(pathToFile, JSON.stringify(userDate, null, 2));

// метод fs.appendFileSync позволяет либо в начало либо в конец файла дописывать