// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript


class Students {

    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}

const student1 = new Students("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Students("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"

const student3 = new Students("Lora Paulo", 15, "10th grade");
student3.displayInfo();