// чтобы не создавать объект с нуля и прописывать все свойства мы можем взять базовую
// модель VacuumCleaner и наследоваться от неё, установив у нового объекта
// свойства прототипа __proto__ на родительский объект и добавив новые свойства - вот так:

// Объявление родительского объекта смотри в листинге 1.
// Объект робот-пылесос.
const DancingSeries = {
// Объявляем новые свойства и переопределяем свойство model.
model: "dancing series",
power: 200,
batterySize: 2100,
boxSize: 0.5,
workTime: 45,
isUVLampOn: false,

// Добавляем новый метод.

    switchUVLamp: function () {
    
// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log('I am the method of DancingSeries');
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
    'not working'}.`);
    },
    
// Делаем ссылку на прототип от родителя.
__proto__: VacuumCleaner,
};

DancingSeries.startCleaning();

// I am the method of VacuumCleaner
// I am cleaning... I have been started: 1 times.