// Задание 1: ""Управление персоналом компании""
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
//Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// Пример использования классов

// Вывод:
// Name: John Smith

// Вывод:
// Name: Jane Doe
// Department: Sales

class Employee {

    constructor(name) {
        this.name = name;
    }

    displayInfo = () => {
        console.log(`Сотрудника зовут: ${this.name}`);
    }
}

class Manager extends Employee {
    
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo = () => {
        console.log(`Сотрудника зовут: ${this.name}`);
        console.log(`Из отдела: ${this.department}`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// Сотрудника зовут: John Smith
// Сотрудника зовут: Jane Doe
// Из отдела: Sales