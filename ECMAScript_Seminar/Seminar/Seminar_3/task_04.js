// Задание 4 (Class)
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

class Animal {
    constructor(name) {
        this.name = name;

    }

    speak = () => {
        console.log(`${this.name} издает звук - Vaf-vaf-vaf`);
    }
}
// Dog наследует класс Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // super чтобы вызвать свойство родителя и в скобках какое именно
        this.breed = breed;
    }

    fetch = () => {
        console.log(`Собака породы ${this.breed} про кличке ${this.name} принесла мяч`);
    }
}

// создадим экземпляры класса
const animal1 = new Animal("Elza");
animal1.speak();

const dog1 = new Dog("Bobik", "Toy Terier");
dog1.speak();
dog1.fetch();

// Elza издает звук - Vaf-vaf-vaf
// Bobik издает звук - Vaf-vaf-vaf
// Собака породы Toy Terier про кличке Bobik принесла мяч