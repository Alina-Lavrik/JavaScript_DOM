const joi = require('joi');


// определяем схему валидации. Для этого необходимо
// обратиться к модулю Joi и вызвать метод Joi.string(), что означает, 
// что данные, которые мы будем валидировать должны быть строкой. 
// Схему необходимо записать в переменную,
// так как далее мы будем использовать эту схему для валидации данных.

const schema = joi.string();

// вызывается метод .validate() и
// в первый аргумент передаются данные, которые мы хотим провалидировать

const result = schema.validate('Hello, World!!!');

console.log(result);

// { value: 'Hello, World!!!' }

const result2 = schema.validate(3);

// console.log(JSON.stringify(result2, null, 2));   // 2 количество переносов строки
// чтобы сократить текст вывода ошибки
console.log(result2.error.details); 