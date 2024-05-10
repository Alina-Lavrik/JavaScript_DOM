//  И третий модуль – это модуль index, который импортирует модуль foo

const foo = require('./foo');

console.log(foo);

// Вывод
// Hello from baz!
// Hello from foo!