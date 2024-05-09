// импортируем библиотеку uuid в наш файл
const uuid = require('uuid');
const { sayhello } = require('./hello');

// определяем константу для сохранения экспорта и указываем путь к файлу
const hello = require('./hello.js');

// Генерируем UUID

const id = uuid.v4();

// Выводим сгенерированный идентификатор в консоль
console.log(id);  // 058340ec-1b05-470e-b944-578bbbd5d93c

hello.sayhello(); // Hello!

