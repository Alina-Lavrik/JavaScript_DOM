// Библиотека express-handlebars

// В первую очередь необходимо импортировать модули express и express-handlebars.
// Причем от express-handlebars нам нужен только метод engine, который извлекается
// при помощи деструктуризации объекта JavaScript.

const express = require('express');

const { engine } = require('express-handlebars');

// создаем приложение express
const app = express();

// метод приложения express .engine(). Этот
// метод необходим для того, чтобы зарегистрировать шаблонизатор. Express умеет
// работать со многими шаблонизаторами

app.engine('handlebars', engine());

// Далее определяется шаблонизатор по-умолчанию с помощью
// метода app.set().
// app.set() - это метод, который позволяет сохранить любое свойство в
// приложении express, которое вы захотите и получить его с помощью метод
// app.get(), но есть ряд зарезервированных свойств, которые нужно
// использовать для конфигурации приложения. В первый аргумент метода
// передается имя свойства, а во второй значение свойства

// Свойство view engine позволяет express понять, какой шаблонизатор нужно
// использовать по-умолчанию. Значением этого свойства необходимо указать  handlebars.

app.set('view engine', 'handlebars');

// Далее определяется свойство views – это путь к директории, в которой
// будут храниться шаблоны. Значением необходимо указать ./views

app.set('views', './views');


// Определен массив, который будет использоваться, как данные
// для шаблона.

const articles = [
    { title: 'Article 1', description: 'First awesome article' },
    { title: 'Article 2', description: 'Second awesome article' },
    { title: 'Article 3', description: 'Third awesome article' },
];

// В обработчике запросов используется метод .render(). Этот метод
// позволяет определить в первом аргументе, какой шаблон нужно использовать, а во
// втором аргументе, какие данные будут переданы в шаблон. В нашем случае
// названием шаблона является home, так как в директории views хранится шаблон
// home.handlebars. Расширение файла можно не указывать. Во второй аргумент
// передано свойство title. Значение этого свойства будет использоваться в качестве

// app.get('/', (req, res) => {
//     res.render('home', { title: 'Home', articles });
// });

app.get('/', (req, res) => {
    res.render('home', { layout: 'index', title: 'Home', articles });
});

app.listen(3030);