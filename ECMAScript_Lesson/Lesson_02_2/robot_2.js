// Класс робот-пылесос.
class RobotVacuumCleaner2 {
    // Свойства класса.
    model = "Romba-1";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;
    isUVLampOn = false;
    // Используем его, чтобы привязать все методы класса к контексту - текущему объекту (this).
    constructor() {
        this.startCleaning = this.startCleaning.bind(this);
        this.goCharge = this.goCharge.bind(this);
        this.switchUVLamp = this.switchUVLamp.bind(this);
    }
    // Методы класса.
    startCleaning() {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ',
        this.counterOfStarts, 'times.');
    }
    goCharge() {
        console.log('I am going to charge...');
    }
    switchUVLamp() {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
        'not working'}.`);
    }
}
// Создадим экземпляр класса.
const Roomba2 = new RobotVacuumCleaner2();

// Обращение к свойствам объекта.
console.log(Roomba2.model); // "Romba-1"
console.log(Roomba2.isFull); // false

// Отложенный вызов методов объекта.

setTimeout(Roomba2.startCleaning, 1000);

// Установим свойства объекта isUVLampOn в true, чтобы
// продемонстрировать результат работы метода switchUVLamp.

Roomba2.isUVLampOn = true;
setTimeout(Roomba2.switchUVLamp, 2000);
setTimeout(Roomba2.goCharge, 3000);

// I am cleaning... I have started: 1 times.
// UV lamp is not working.
// I am going to charge...