// 1. Создайте функцию mergeArrays, которая принимает два 
// массива и возвращает новый массив, содержащий все 
// элементы из обоих массивов. Используйте spread 
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 
// 2, 3, 4, 5, 6]

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

// Вариант 1
//const mergeArrays = [...arr, ...arr2]; 
//console.log(mergeArrays);  // (6) [1, 2, 3, 4, 5, 6]

// Вариант 2

function mergeArrays(arr, arr2) {
    return [...arr, ...arr2];
}
console.log(mergeArrays(arr, arr2));

// 2. Создайте функцию removeDuplicates, которая принимает 
// любое количество аргументов и возвращает новый 
// массив, содержащий только уникальные значения. 
// Используйте rest оператор для сбора всех аргументов в 
// массив а затем filter для определения дубликатов. 
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый 
// результат: [1, 2, 3, 4, 5]

// Вариант 1
const array = removeDuplicates(1, 2, 3, 2, 4, 1, 5);

// function removeDuplicates(...array) {
//     const newArray = array.filter((acc, value) => {  
//         return array.indexOf(acc) === value;       
//     });
//     return newArray;
// };
// console.log(array); // (5) [1, 2, 3, 4, 5]

// Вариант 2
function removeDuplicates(...array) {
    const newArray = [...new Set(array)]; // Set - глобальный объект для фильтрации поступающих данных, вычищает дуцбли
    return newArray;
}
console.log(array); //  (5) [1, 2, 3, 4, 5]

// Задание 2 (Чистые функции 25минут)

// 1. Напишите функцию getEvenNumbers, которая принимает массив 
// чисел в качестве аргумента и возвращает новый массив, 
// содержащий только четные числа.
// 2. Задача: Напишите функцию calculateAverage, которая принимает 
// массив чисел в качестве аргумента и возвращает среднее значение 
// этих чисел.
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в 
// качестве аргумента и возвращает новую строку, в которой первая 
// буква каждого слова является заглавной

const array2 = getEvenNumbers(1, 2, 3, 2, 4, 1, 5, 8, 12, 15);
function getEvenNumbers(...array2) {
    return array2.filter(value => value % 2 === 0);
}
console.log(array2); // (5) [2, 2, 4, 8, 12]

const array3 = calculateAverage(9, 1, 8, 4, 6, 2);
function calculateAverage(...array3) {
    return array3.reduce((value, acc) => value + acc) / array3.length;
}
console.log(array3); // 5

const newString = capitalizeFirstLetter('буква каждого слова является заглавной');

function capitalizeFirstLetter(newString) {
    return newString.replace(/(^|\s)\S/g, (a) => a.toUpperCase());  // ^ - символ начала строки | - или \s - пробел \S - любой символ кроме пробела
    // g - ищем все совпадения по все строке не только первое
    // a - наша первая буква
}
console.log(newString); // Буква Каждого Слова Является Заглавной

// Задание 3 
// 1. Напишите функцию createCalculator, которая принимает начальное 
// значение и возвращает объект с двумя методами: add и subtract. 
// Метод add должен увеличивать значение на переданное число, а 
// метод subtract должен уменьшать значение на переданное число. 
// Значение должно быть доступно только через методы объекта, а не 
// напрямую

function createCalculator(def) {
    return {
        value: def,
        add(num) {
            this.value += num;
            return this.value;
        },
        subtract(num) {
            this.value -= num;
            return this.value;
        }
    }
}

const object = createCalculator(10);
console.log(object.add(2)); // 12
console.log(object.subtract(3)); // 9

const object1 = createCalculator(20);
console.log(object1.add(2)); // 22
console.log(object1.subtract(3)); // 19
console.log(object1.add(10)) // 29

console.log(object.add(100)); // 109

// Задание 4 
// 1. Напишите функцию createGreeting, которая принимает имя 
// пользователя и возвращает функцию, которая будет выводить 
// приветствие с использованием этого имени.
// Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

function createGreeting(userName) {
    return () => `Hello, ${userName}!`
}

const greeting = createGreeting('Mikle');
console.log(greeting()); // Hello, Mikle!

// Задание 5
// 1. Задача: Напишите функцию createPasswordChecker, которая 
// принимает допустимую длину пароля в качестве аргумента и 
// возвращает функцию для проверки введенного пароля. 
// Возвращаемая функция должна принимать пароль и возвращать 
// true, если его длина соответствует допустимой, и false в противном 
// случае.
// Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

function createPasswordChecker(passLength) {
    return (password) => password.length < passLength;
    
}
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // false
console.log(isPasswordValid('secret')); // true

// Задание 6 
// 1. Напишите рекурсивную функцию sumDigits, которая принимает 
// положительное целое число в качестве аргумента и возвращает 
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(params) {
    if (params < 10) return params; 
    else return params % 10 + sumDigits(Math.floor(params / 10)); // берем остаток от 10 на десять 
}
console.log(sumDigits(1234)); //  10 
console.log(sumDigits(45678910)); // 40