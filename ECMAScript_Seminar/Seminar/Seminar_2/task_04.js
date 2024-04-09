// Задание 4 (Объекты через class 25 минут)
// 1. Создайте класс Person, который имеет свойства name и age, а также 
// метод introduce(), который выводит сообщение с представлением 
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old

class Person1 {
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    introduce = () => {
        console.log(`My name is ${this.name} and I'm ${this.age} years old`);
    }
};

const user2 = new Person1("John", 25);
user2.introduce(); // My name is John and I'm 25 years old

const user3 = new Person1("Marry", 33);
user3.introduce(); // My name is Marry and I'm 33 years old