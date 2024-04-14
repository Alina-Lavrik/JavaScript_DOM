// "Управление списком заказов"

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Order {

    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }


    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        if (this.products?.length) {
            let totalPrice = 0;
            this.products.forEach((element) => {
                totalPrice += element.price;
            });
            return `Общая стоимость заказа ${this.orderNumber}: ${totalPrice}`;
        } else {
            return `Заказ не создан`;
        }
    }
}
class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order1 = new Order(1);

const product1 = new Product("Phone", 500);
order1.addProduct(product1);

const product2 = new Product("Headphones", 100);
order1.addProduct(product2);

console.log(order1.getTotalPrice()); // Общая стоимость заказа 1: 600

//

const order2 = new Order(2);

const position1 = new Product("Milk", 50);
order2.addProduct(position1);
const position2= new Product("Oil", 100);
order2.addProduct(position2);
const position3= new Product("Bread", 90);
order2.addProduct(position3);
console.log(order2.getTotalPrice()); // Общая стоимость заказа 2: 240

