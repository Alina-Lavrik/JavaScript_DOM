// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(), 
// которые выполняют соответствующие математические операции над 
// двумя числами. Используйте методы call и apply для вызова этих 
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const Calculator = {
    add: function (num1, num2) {
       return num1 + num2;
    },

    subtract: function (num1, num2) {
        return num1 - num2;
    },

    multiply: function (num1, num2) {
        return num1 * num2;
    }
};
console.log(Calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(Calculator.subtract.apply(null, [5, 3])); // Вывод: 2
console.log(Calculator.multiply.call(null, 5, 3)); // Вывод: 15

// Разница между call и apply только как мы передаем данные через запятую или ввиде массива

const User = {
    name: "Bob",

    hello: function () {
        console.log(`Hello ${this.name}`);
        
    }
};

const User2 = {
    name: "Mike",
};

User.hello(); // Hello Bob

User.hello.call(User2); // Hello Mike