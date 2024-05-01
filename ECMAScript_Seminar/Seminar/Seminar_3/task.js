// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

const MyObject = {
    number: 1

};
const getPrototypeChain = (obj) => {
    let array = []; // создаем пустой массив в него будет добавляться вся цепочка прототипов
    while (obj !== null) {  // пока наш объект не равен null
        array.push(obj);
        obj = Object.getPrototypeOf(obj);  // туда будет попадать наш obj
        
    }
    return array;  // возвращаем массив
}
// вызываем функцию

console.log(getPrototypeChain(MyObject));
console.log(MyObject);


// Получили массив с 2 объектами - 0 - наш объект и 1 - глобальный Object

// Array(2)
// 0: {number: 1} // наш объект
// 1: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// length: 2
// [[Prototype]]: Array(0)