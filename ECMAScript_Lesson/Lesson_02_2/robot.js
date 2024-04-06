// Объект через class
// Давайте рассмотрим вариант создания объекта через ключевое слово class и как
// осуществляется привязка контекста к методам в таком случае. Начнем с примера
// создания нашего робота пылесоса, пока без привязок контекста:

// Класс робот-пылесос.

class RobotVacuumCleaner1 {
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
    // Конструктор класса, мы изучим его подробнее на следующем уроке.

    constructor() {
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
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
}
    
// Создадим экземпляр класса.
const Roomba1 = new RobotVacuumCleaner1();

// Обращение к свойствам объекта.

console.log(Roomba1.model); // "Romba-1"
console.log(Roomba1.isFull); // false

// Отложенный вызов методов объекта.

setTimeout(Roomba1.startCleaning, 1000);

// Установим свойства объекта isUVLampOn в true, чтобы
// продемонстрировать результат работы метода switchUVLamp.

Roomba1.isUVLampOn = true;
setTimeout(Roomba1.switchUVLamp, 2000);
setTimeout(Roomba1.goCharge, 3000);

// I am cleaning... I have started: NaN times.
// UV lamp is working.
// I am going to charge...