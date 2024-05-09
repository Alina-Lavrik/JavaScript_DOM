
const calculateResultSum = require('./calcSum.js');

require('colors');

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
const totalText = `Sum price: ${total}rub`


console.log(total > 50 ? totalText.red : totalText.green);
