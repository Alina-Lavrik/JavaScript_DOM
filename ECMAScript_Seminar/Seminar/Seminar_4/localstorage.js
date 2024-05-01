// Ценность
// Объект Storage, который может быть использован для доступа к локальному хранилищу текущего источника.

const data = localStorage.setItem('myData', 'Some data');
const data1 = localStorage.getItem('myData');

console.log(data1);

// localStorage.removeItem('myData');
// localStorage.clear();    // полностью вычищает локальное хранилице

console.log(localStorage.key(0));   // указываем индекс по которому нужно получить данные - свм ключ
// Вывод
// myData

localStorage.user = {
    name: 'John'
}

console.log(localStorage.user);

// преобразовываем в строку

localStorage.user = JSON.stringify(
    {
        name: 'John'
    }
);

console.log(localStorage.user);