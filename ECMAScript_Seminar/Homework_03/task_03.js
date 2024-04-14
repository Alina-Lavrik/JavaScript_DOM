// Управление животными в зоопарке
// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:

// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.

// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).

// Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, что вы используете приватные поля и статическое поле в соответствии с описанием.

class ZooAnimal {

    // # - обозначение приватных полей
    static #MAX_AGE = 100; 

    #name;
    #age;
    #gender;
    
    constructor(name, age, gender) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;

        if (age > ZooAnimal.#MAX_AGE) {
            throw new Error("Constructor - Max_Age musn't be generate than 100");   
        }
    }

    // changeName(newName)

    // changeAge(newAge)

    getName = () => this.#name;
    setName = (name) => {
        this.#name = name;
    }
    getAge = () => this.#age;
    setAge = (age) => {
        if (age > ZooAnimal.#MAX_AGE) {
            throw new Error("Max_Age musn't be generate than 100");   
        }
        this.#age = age;
    }

}

const animal1 = new ZooAnimal('Jay', 6, 'male');

console.log(animal1.getName()); // Jay
animal1.setName("Bob");
console.log(animal1.getName()); // Bob
animal1.setAge(8);
console.log(animal1.getAge()); // 8

const animal2 = new ZooAnimal('Kall', 10, 'male');
console.log(animal2.getAge()); // 10

const animal3 = new ZooAnimal('Fanny', 11, 'female');
console.log(animal3.getName()); // Fanny 

const animal4 = new ZooAnimal('Mana', 105, 'female');
console.log(animal4.getAge()); // Constructor - Max_Age musn't be generate than 100