// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос Samba смотри в листинге 13.

// Создадим робот пылесос Samba.

const Samba5 = new SambaN(101); // передаем серийный номер 101

// Попробуем обратиться к стандартному методу toString, 
// хоть мы его и не объявляли ни в одном из объектов.

console.log(Samba5.toString()); // [object Object]

// Создадим пустой объект без прототипа.
const Samba6 = Object.create(null);

// Попробуем обратиться к стандартному методу toString и 
// посмотреть на свойство __proto__
console.log(Samba6.toString); // undefined
console.log(Samba6.__proto__); // undefined