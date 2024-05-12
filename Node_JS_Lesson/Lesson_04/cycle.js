const handlebars = require('handlebars');

// Перебор массива в цикле
// Handlebars не ограничивается условными конструкциями. Также можно перебирать
// элементы массива в цикле. Это может быть очень удобно для тех случаев, когда вам
// нужно вывести какие-нибудь списки в HTML.


const items = [
    { name: 'first item', number: 3 },
    { name: 'second item', number: 5 },
];

const template = handlebars.compile(
    // указываем each и массив, который хотим перебрать
    '{{#each items}} <p>{{this.name}} {{this.number}}</p> {{/each}}'
);

console.log(template({ items })); 
// <p>first item 3</p>  <p>second item 5</p> 