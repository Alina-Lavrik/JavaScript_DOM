// 1 Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
// 2 Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
// 3 Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

// 1
const arr = [1, 5, 7, 9];

const findMin = Math.min(...arr); 
console.log(findMin); // 1

// 2

function createCounter(def) {
    return {
        value: def,
        increment() {
            this.value += 1;
            return this.value;
        },
        decrement() {
            this.value -= 1;
            return this.value;
        }
    }
}

const object = createCounter(100);
console.log(object.increment()); // 101
console.log(object.decrement()); // 100

const object1 = createCounter(58);
console.log(object1.decrement()); // 57

// 3

let findElement = [];
function findElementByClass(rootEl, classEl) {
   if (rootEl.hasChildNodes()) {
      for (let element of rootEl.children) {
         if (element.className === classEl) {
            findElement.push(element);
            if (findElement[0].className !== classEl) {
               findElement = [];
               findElement.push(element);
            }
         }
         findElementByClass(element, classEl);
      }
   }
   return findElement[0];
}

const rootElement = document.getElementById('main');
const targetElement = findElementByClass(rootElement, 'body');
console.log(targetElement);

const rootElement_1 = document.getElementById('number');
const targetElement_1 = findElementByClass(rootElement_1, 'report_2');
console.log(targetElement_1);