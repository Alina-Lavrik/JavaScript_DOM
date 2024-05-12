const fs = require('fs');

// Модуль fs
// Модуль fs (file system) предоставляет функции для работы с файловой системой. С
// его помощью можно читать, записывать, удалять и перемещать файлы и
// директории. После подключения модуля мы можем использовать его методы для
// работы с файлами.


const express = require('express');

const path = require('path');

// Модуль path
// Часто при работе с файлами возникает необходимость составлять пути к файлам из
// нескольких частей. Это можно делать с помощью конкатенации строк, но более
// надёжным вариантом является использование модуля path.

const handlebars = require('handlebars');
const app = express();

// Экземпляр приложения app представляет собой объект, который содержит методы
// для настройки и запуска сервера, а также для определения обработчиков запросов.

const articles = [
    { title: 'Article 1', description: 'First awesome article' },
    { title: 'Article 2', description: 'Second awesome article' },
    { title: 'Article 3', description: 'Third awesome article' },
];

app.get('/', (req, res) => {
    // получили полный путь к шаблону, path.join  - объеденяет части путей 
    const pathToTemplate = path.join(__dirname,
        './templates/home.handlebars'
    );

    fs.readFile(pathToTemplate, 'utf-8', (err, data) => {
        // проверяем есть ли ошибка, если ошибка есть отпраляем сообщение
        if (err) {
            res.status(500);
            res.send(err.message);
        } else {
            // шаблон хранится в date
            const template = handlebars.compile(data);
            // template вернет html строчку и send отправит клиенту в браузер
            res.send(template({ articles }));
        }
    });

});

app.listen(3600);
