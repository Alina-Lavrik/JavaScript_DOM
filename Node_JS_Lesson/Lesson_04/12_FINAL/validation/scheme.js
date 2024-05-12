const Joi = require('joi');

const articleScheme = Joi.object({
    title: Joi.string().min(5).required(),
    content: Joi.string().min(10).required(),
});

const idScheme = Joi.object({
    id: Joi.number().required(),
});

// вынесли схемы валидации и экспортировали, чтобы можно было использовать в коде нашего сервера
module.exports = { articleScheme, idScheme };