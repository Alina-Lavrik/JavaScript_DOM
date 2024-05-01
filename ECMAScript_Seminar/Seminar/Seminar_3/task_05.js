// Создать класс Пользователь с приватными полями - имя, возвраст, электронная почта.
// Класс должен иметь публичные методы - изменить имя, изменить возрвст, изменитиь электронную почту
// Которые будут изменять соответствующие поля объекта
// Также класс должен иметь статическое поле  - максимальный возраст,
// которое будет задавать максимально допустимый возраст для всех создаваемых объектов


class User {    
    // # - обозначение приватных полей
    static #maxAge = 100; // статические поля относятся к самому классу а не к его экземплярам

    #name;
    #age;
    #email;
    
    constructor(name, age, email) {
        this.#name = name;
        this.#age = age;
        this.#email = email;

        if (age > User.#maxAge) {
            throw new Error("Constructor - MaxAge musn't be generate than 100");   
        }
    }

    // получает приватное поле
    getName = () => this.#name;
    setName = (name) => {
        this.#name = name;
    }
    getAge = () => this.#age;
    setAge = (age) => {
        if (age > User.#maxAge) {
            throw new Error("MaxAge musn't be generate than 100");   
        }
        this.#age = age;
    }
    getEmail = () => this.#email;
    setEmail = (email) => {
        this.#email = email;
    }

}

const user1 = new User('Bob', 56, 'bob@MediaList.ru');

console.log(user1.getName());
user1.setName("Pavel");
console.log(user1.getName());

// обратиться к экземпляру и поменять возраст
user1.setAge(98);
user1.setEmail("pavel@MediaList.ru");
console.log(user1.getAge());
console.log(user1.getEmail());

const user2 = new User('Mikle', 130, 'mmm@mail.ru');

user2.setAge(110);
console.log(user2.getAge());