/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

let stars = 4;
let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такого кол-ва звезд нет");
// }
// console.log(price, "$");

// Используем SWITCH  ! ! !
// НА РАВЕНСТВО проверяет
// break - для остановки на правильном значении, иначе выдаст последний. Прервать выполнение после найденого правильного варианта.
// default - во всех остальных случаях

switch (stars) {
  case 1:
    price = 20;
    break;
  case 2:
    price = 30;
    break;
  case 3:
    price = 50;
    break;
  case 4:
    price = 70;
    break;
  case 5:
    price = 120;
    break;
  default:
    console.log("Такого кол-ва звезд нет");
}
console.log(price);

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//     console.log("Такого кол-ва звезд нет");
// }
// console.log(price, "$");

switch (stars) {
  case 1:
  case 2:
    price = 20;
    break;
  case 3:
  case 4:
    price = 30;
    break;
  case 5:
    price = 120;
    break;
  default:
    console.log("Такого кол-ва звезд нет");
}
console.log(price);

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */
let option = 2;
let message = "";

// if (option === "самовывоз") {
//   message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
// } else if (option === "курьер") {
//   message = "Курьер доставит заказ завтра с 9:00 до 18:00";
// } else if (option === "почта") {
//   message = "Посылка будет отправлена сегодня";
// } else {
//   message = "Вам перезвонит менеджер";
// }
// console.log(message);

switch (option) {
  case 1:
    message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
    break;
  case 2:
    message = "Курьер доставит заказ завтра с 9:00 до 18:00";
    break;
  case 3:
    message = "Посылка будет отправлена сегодня";
    break;
  default:
    console.log("Вам перезвонит менеджер");
}
console.log(message);
