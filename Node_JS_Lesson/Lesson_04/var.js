const handlebars = require('handlebars');

const template = handlebars.compile('<p>{{ someVar }} {{ anotherVar }}</p>');

const result = template({
    someVar: "Hello,",
    anotherVar: "Dear!!!"
});

console.log(result);  // <p>Hello, Dear!!!</p>



