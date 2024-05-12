const Joi = require('joi');

const schema = Joi.object({
    id: Joi.number().required(),  // id должно быть числом, метод required() - поле обязательное
    title: Joi.string().min(1).required(), // строка, должна иметь 1 символ, строка обязательная
    content: Joi.string().min(10).required(), // строка, должен иметь минимум 10 символов, строка обязательная
});

const result = schema.validate({
    id: 1,
    title: '1',
    content: '1888888888888888',
});

console.log(result.error?.details);