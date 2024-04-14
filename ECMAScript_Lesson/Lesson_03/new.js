// Наша реализация оператора new через функцию createObject.

function createObject(constructor) {

// Создаем новый объект.
    const obj = {};
    
// Установим новому объекту прототипом прототип функции-конструктора
    Object.setPrototypeOf(obj, constructor.prototype);
    
// Вызовем функцию-конструктор, передав ей как this
// созданный на шаге 1 объект, и передадим остальные аргументы,
    // если они были переданы в createObject
    
const argsArray = Array.prototype.slice.apply(arguments);
const result = constructor.apply(obj, argsArray.slice(1));
    
// Вернем новый объект, если конструктор вернул примитивное
// значение или undefined, иначе вернем то, что вернул
    // конструктор.
    
if (!result || typeof result === 'string' || typeof result
    === 'number' || typeof result === 'boolean') { // проверка
    return obj  // если да
    } else { 
    return result; // если нет
    }
}
// Создадим экземпляр нового объекта.
const Samba3 = createObject(SambaS, 1014778);

// Проверим установку свойств в конструкторе.
console.log(Samba3.serialNumber); // 1014778

// Проверим, что прототип установился корректно, и мы можем
// вызывать методы из родительских объектов.

console.log(Samba3.__proto__); // {model: "dancing series",
// power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}

console.log(Samba3.startCleaning()); // I am the method of VacuumCleaner
// I am cleaning... I have been started: 1 times.
// Проверим присвоение конструктора.

console.log(Samba3.constructor); // function Object() { [native code] }

// Свойство __proto__ объекта и свойство prototype у функции
// конструктора это не одно и то же. Свойство __proto__ есть у
// экземпляра объекта, и оно позволяет находить родителей объекта,
// свойство prototype выполняет служебную функцию при создании
// экземпляра объекта через оператор new.
// Посмотрите на пример кода, который расставит точки на «i».

// Конструктор объекта робот-пылесос.
function SambaN(serailNumber) {
// Создаем свойства объекта, используя this.
    this.serialNumber = serailNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
}
// Делаем ссылку на прототип от родителя.
SambaN.prototype = DancingSeries;

// Создадим экземпляр нового объекта.
const Samba4 = new SambaN(1014778);

// Посмотрим на свойства __proto__ и prototype
console.log(Samba4.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}
console.log(Samba4.prototype); // undefined
console.log(Samba4.__proto__ === SambaN.prototype); // true