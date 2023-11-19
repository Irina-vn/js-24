// Получаем ссылку на кнопку сначала. а потом вешаем на нее слушатель событий
const btnAdd = document.querySelector("button[data-add]");
// console.log(btnAdd.textContent);
const valueInput = document.querySelector("input[data-value]");
const outputEl = document.querySelector(".js-output");
// console.log(outputEl);
const btnReset = document.querySelector("button[data-reset]");
// console.log(btnReset);

// btnAdd.textContent = "qweqwe"; можно поменять название кнопки

// Слушатель событий вешаем на элемент, чтобы управлять им
// 1 - тип событий - н-р - клик
// и 2 - функция

let total = 0;

btnAdd.addEventListener("click", () => {
  // тут пишем код, который будет выполняться при клике(тип события)
  console.log("click Add");
  // получаем значение инпута, при клике на кнопку
  const value = Number(valueInput.value);
  console.log(value);

  total += value;

  outputEl.textContent = total;
  console.log("total:", total);

  valueInput.value = "";
  //   console.log(typeof Number(valueInput.value));
});
// или
btnAdd.addEventListener("click", function () {
  // тут пишем код, который будет выполняться при клике(тип события)
  console.log("click hehehe");
});
btnReset.addEventListener("click", () => {
  console.log("reset");
  total = 0;
  outputEl.textContent = 0;
  console.log("total:", total);
});

// AND more...
/////includes & toLowerCase()
function checkForSpam(message) {
  let result;
  const normalizedMessage = message.toLowerCase();

  if (
    normalizedMessage.includes("spam") ||
    normalizedMessage.includes("sale")
  ) {
    result = true;
    console.log(result);
  } else {
    result = false;
    console.log(result);
  }

  return result;
}

checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
