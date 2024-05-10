// Модуль path предоставляет ряд методов для работы с путями в файловой системе.

// Импортируем метод path

const path = require('path');

// console.log(path.join('/User/Student', 'Desc/index.js'));
//\User\Student\Desc\index.js

// console.log(path.parse('/User/Student/Desc/index.js'));
// {
//   root: '/',
//   dir: '/User/Student/Desc',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

// console.log(path.dirname('/User/Student/Desc/index.js'));
// Вернется строка /User/Student/Desc

console.log(path.extname('/User/Student/Desc/index.js')); //.js