// Необходимо получить список всех пользователей с помощью бесплатного API(https://jsonplaceholder.typicode.com/users) 
// и отобразить их на странице. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
// ДОПОЛНИТЕЛЬНАЯ НЕОБЯЗАТЕЛЬНАЯ ЧАСТЬ - Пользователь должен иметь возможность удалить любого пользователя из списка.
// При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage



const users = 'https://jsonplaceholder.typicode.com/users';

const getData = async (users) => {
    try {
        const res = await fetch(users);
        const data = await res.json();
        localStorage.setItem('users', JSON.stringify(data)); 
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

async function Asy() {
    const result = await getData(users);
    console.log(result);

    const body = document.querySelector('body');

    result.forEach((element) => {
        body.insertAdjacentHTML('beforeend',
            `<div class="list" id="${element.id}"> <!-- Добавили ID -->
            <h3 class="user">Пользователь ${element.id}</h3>
            <p class="name">name: ${element.name}</p>
            <p class="username">username: ${element.username}</p>
            <p class="email">email: ${element.email}</p>
            <button class="delete">Удалить пользователя</button>
        </div>
        `)

        const delButton = document.querySelectorAll('.delete');

        delButton.forEach((button) => {
            button.addEventListener('click', () => {
                const del_user = button.closest('.list');
                del_user.remove();
                //localStorage.removeItem('users');
                // localStorage.clear();

            })
            
        });
    })
};
Asy();

