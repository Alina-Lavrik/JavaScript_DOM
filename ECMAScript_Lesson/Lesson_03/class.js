// Класс робот-пылесос.
class VacuumCleaner2 {
    model = "vacuum cleaner";
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;

    // Для создания конструктора, нужно создать метод constructor.
    
    constructor() {
    }
    
    startCleaning() {
        this.counterOfStarts++;
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of VacuumCleaner2');
        console.log('I am cleaning... I have been started: ',
        this.counterOfStarts, 'times.');
    }
    goCharge() {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of VacuumCleaner2');
        console.log('I am going to charge...');
    }
}
// Попробуем создать экземпляр класса и посмотреть как он работает.
const BaseRobot = new VacuumCleaner2;

console.log(BaseRobot.constructor); // class VacuumCleaner {
    // model = "vacuum cleaner";
    // counterOfStarts = 0;
    // isFull = false;
    // isObstacle = false;
    // Для создания конструктора, нужно создать метод constructor.
    // constructor() {
    // }
    // ...

console.log(BaseRobot.model); // vacuum cleaner
console.log(BaseRobot.startCleaning()); // I am the method of VacuumCleaner2
// I am cleaning... I have been started: 1 times.

// Объявление родительского класса смотри в листинге 19.
// Расширенный класс DancingSeries. C помощью extends мы
// указываем от какого класса будем наследоваться.

class DancingSeries2 extends VacuumCleaner2 {
    // Объявляем новые свойства и переопределяем свойство model.
    model = "dancing series";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    isUVLampOn = false;

    // Добавляем новый метод.
    switchUVLamp() {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of DancingSeries2');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
};

// Создадим новый экземпляр класса, чтобы посмотреть как он
// работает и что в нем есть.
const DancingRobot = new DancingSeries2;

console.log(DancingRobot.__proto__); // VacuumCleaner {constructor: ƒ, switchUVLamp: ƒ}
console.log(DancingRobot.model); // dancing series
console.log(DancingRobot.switchUVLamp()); // I am the method of DancingSeries2
// lamp is working.

