const numArray = [2, 8, 16, 100, 200, 404];
const sum = numArray.reduce((acc, number) => acc += number, 0);
console.log('Результат сложения массива:', sum);

