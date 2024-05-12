
const handlebars = require('handlebars');

// Условный оператор
// Еще вы можете использовать условные конструкции в шаблоне. Для этого
// необходимо использовать следующий синтаксис:

const template = handlebars.compile(
    // сначала опред. что будет показано в случае true затем в ином случае
    '{{#if bold}} <b>Hello!</b> {{else}} <p>Hello!</p> {{/if}}'
);

console.log(template({ bold: true }));
console.log(template({ bold: false }));

//  <b>Hello!</b> 
//  <p>Hello!</p>