// Задание №2
// 1. Создайте файл writePerson.js
// 2. Напишите код, который создаст файл person.json в директории
// запускаемого скрипта и запишет в файл следующий объект:

const path = require('path');
const fs = require('fs');

// добавим в константу пользователя

const person = {
    name: "Ivan",
    surname: "Ivanov",
    age: 30,
    city: "Moscow"
};

// объект преобразовать в Json (в resolve можно передать абсолютный путь)

const pathToFile = path.join(__dirname, 'person.json');

// Для преобразования объекта в текст используем функцию JSON.stringify()
// stringify - 1 параметр, что хотим преобразовать, 
// какие поля хотим забрать, null - все
// третий кол-во пробелов для форматирования итогового файла
fs.writeFileSync(pathToFile, JSON.stringify(person, null, 2));