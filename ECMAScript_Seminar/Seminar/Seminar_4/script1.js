
const myPromis = new Promise((resolve, reject) => {});

console.log(myPromis);

myPromis.then(res => res.json()).then(data => console.log(data)).catch(error => console.error(error));
// then обрабатывает ответ от сервера

fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    console.log(response);
    return response.json();
}).then(json => console.log(json)).catch(error => console.log(error, "внимание - ошибка"))

// [object Object]
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

// [object Error]
// {} "внимание - ошибка"

// async await - самая популярная асинхронная функция , можно переиспользовать меняя ссылку

const getData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error.message);
        
    }
}

async function As() {
    const fetchData = await getData();
    console.log(fetchData);
};
As();