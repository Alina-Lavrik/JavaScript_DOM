// const lastName = "Petrov";
// // lexical environment: { lastName: "Petrov" }
// const getFullName = (firstName) => {
// // lexical environment: { lastName: "Petrov", firstName:
// // <определяется в момент вызова функции> }
// const fullName = firstName + ' ' + lastName;
// // lexical environment: { lastName: "Petrov", firstName:
// //<определяется в момент вызова функции>, fullName: <вычисляется в
// //момент вызова функции> }
// console.log(fullName);
// return energy;
// };
// getFullName("Ivan"); // Ivan Petrov
// // lexical environment в момент вызова функции становится таким:
// //{ lastName: "Petrov", firstName: "Ivan", fullName: "Ivan Petrov"


// // Пример 1
const houses1 = [];
    let index1 = 0;
    while (index1 < 10) {
        let house = function () { // функция «дом»
        console.log(index1); // выводит номер дома
        };
        houses1.push(house);
        index1++;
    }
houses1[0](); // 10 — у нулевого дома номер 10
houses1[7](); // 10 — и у седьмого дома номер 10

let house = function () { // функция «дом»
    // лексическое окружение: { i: 10 }
    console.log(index1); // выводит номер дома
};

// Пример 2

const houses2 = [];
let index2 = 0;
while (index2 < 10) {
    let houseNumber = index2; // Здесь мы создаём блочную переменную,
// которая сохранит значение i для конкретной итерации цикла, и
// именно её значение попадёт в лексическое окружение функции house.
    let house1 = function () { // функция «дом»
    console.log(houseNumber); // выводит номер дома
    };
    houses2.push(house1);
    index2++;
}

houses2[0](); // 0 — у нулевого дома номер 0
houses2[7](); // 7 — и у седьмого дома номер 7

// Или внутри функции house:\
// Пример 3
const houses3 = [];
let i = 0;
while (i < 10) {
    let house3 = function () { // функция «дом»
    let houseNumber3 = i; // Здесь мы создаём блочную
    // переменную, которая сохранит значение i, и именно её значение
    // попадёт в лексическое окружение функции house.
    console.log(houseNumber3); // выводит номер дома
    };
    houses3.push(house3);
    i++;
}
houses3[0](); // 0 — у нулевого дома номер 0
houses3[7](); // 7 — и у седьмого дома номер 7
