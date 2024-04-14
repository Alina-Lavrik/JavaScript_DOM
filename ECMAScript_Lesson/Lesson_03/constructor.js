// Объявление DancingSeries смотри в листинге 2.

// Конструктор объекта робот-пылесос.

function SambaS(serailNumber) {  // передаем в функцию serailNumber
// Создаем свойства объекта, используя this.
    this.serialNumber = serailNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
// Делаем ссылку на прототип от родителя.
this.__proto__ = DancingSeries;
}
// или
// SambaS.prototype = DancingSeries;

// Создадим экземпляр нового объекта.

const Samba1 = new SambaS(1014778);
console.log(Samba1.serialNumber); // 1014778
console.log(Samba1.startCleaning());
// I am the method of VacuumCleaner
// I am cleaning... I have been started: 1 times.

const Samba2 = new SambaS(888888888);
console.log(Samba2.serialNumber); // 888888888
console.log(Samba2.goCharge());

// I am the method of VacuumCleaner
// I am going to charge...

// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос Samba смотри в листинге 13.

// Создадим 10 роботов пылесосов Samba, как на конвейере.

const robots = [];

for (let index = 0; index < 10; index++) {
// Создадим экземпляр нового объекта и добавляем его в массив наших роботов, 
//каждый с уникальным серийным номером.
    robots.push(new SambaS(index));
}
console.log(robots[8].serialNumber); // 3
console.log(robots[7].serialNumber); // 7