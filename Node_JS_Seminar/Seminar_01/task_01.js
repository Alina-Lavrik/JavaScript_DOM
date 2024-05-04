function calculateDiscriminant(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

const a = 1;
const b = -3;
const c = 2;

const discriminant = calculateDiscriminant(a, b, c);
console.log("Дискриминант: ", discriminant);

// Необходимо описать состояние стека вызовов по мере выполнения скрипта
// Call stack
// 1.
// 2. calculateDiscriminant();
// 3. calculateDiscriminant(), Math.pow();
// 4. calculateDiscriminant();
// 5. console.log("Дискриминант: ", discriminant);
// 6.

function sumOfNumbers(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumOfNumbers(n - 1); // рекурсивный вызов суммы для n-1
    }
}
// в стеке 4 функции sumOfNumbers(n);
const n = 4;
const sum = sumOfNumbers(n);

console.log("Сумма ряда натуральных чисел до ", n, ":", sum);