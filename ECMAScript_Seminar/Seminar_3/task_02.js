// Задание 2
// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет

class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce = () => {
        console.log(`My name is ${this.name} and I'm ${this.age} years old`);
    }
}

const person1 = new Person("Angel", 28);
person1.introduce(); // me is Angel and I'm 28 years old

const person2 = new Person("Sasha", 39);
person2.introduce(); // My name is Sasha and I'm 39 years 

