// Второй модуль – это модуль foo, который импортируем модуль baz и экспортирует
// собственные данные.

// импортируем baz.js

const baz = require('../baz');

console.log(baz);

// экспортируем

module.exports = 'Hello from foo!';
