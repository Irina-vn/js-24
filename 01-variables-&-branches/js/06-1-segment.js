/*
 * Напиши скрипт который проверяет вхождение числа
 * в отрезок обозначенный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 */

const x1 = 10;
const x2 = 30;
const number = 45;

// const result1 = number < x1;
// console.log(result1);

// const result2 = number > x2;
// console.log(result2);

const result1 = x1 < number && x2 > number;
console.log(result1);

const result2 = x1 > number || x2 < number;
console.log(result2);

console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);
console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);

// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

// 15 > 10 && 15 < 30
// true && true
// true

console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, result1);
console.log(
  `Число ${number} попадает в отрезок до ${x1} или после ${x2}? `,
  result2
);
