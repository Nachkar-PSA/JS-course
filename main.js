//Вибір через select, radio
const select = document.querySelector("#country");
select.addEventListener("change", function () {
  console.log("Select country:", select.value);
});

const radioButtons = document.querySelectorAll(".gender");
radioButtons.forEach(function (radio) {
  radio.addEventListener("change", function () {
    console.log("Selected gender:", radio.value);
  });
});

//Підтвердження вибору через checkbox
const form = document.querySelector("form");
const name = document.querySelector("#name");
const checkbox = document.querySelector("#checkbox");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = name.value;
  console.log("Ім'я:", nameValue);
});

checkbox.addEventListener("change", function () {
  const isCheckboxChecked = checkbox.checked;
  name.disabled = !isCheckboxChecked;
  console.log("Чекбокс вибраний:");
});

//Перевірка правильності введення імені та email
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Запобігає відправці форми
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  if (name === "") {
    alert("Введіть ім'я");
  }
  if (!email.includes("@")) {
    alert("Введіть коректний email");
  }
});

//округление до целого числа
let number = 7.6;
roundedNumber = Math.round(number);
console.log(roundedNumber);

// вычисление длины строки
let text = "Hello, world!";
let characterCount = text.length;
console.log(characterCount);

// логические операторы
let a = 5;
let b = 10;
let c = 15;

let isLess = a < b && b < c;
let isEqual = a === 10 || b === 10 || c === 10;
console.log(isLess);
console.log(isEqual);

// функция, которая принимает число и возвращает его факториал
function factorial(n) {
  if (n === 0 || n < 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(-1));

// функция, которая принимает массив чисел и возвращает минимальное число
const numbers = [5, 3, 7, 10, -5];
function findMin(arr) {
  if (arr.langth === 0) {
    throw new Error("Масив пустий");
  }
  return Math.min(...arr);
}
console.log(findMin(numbers));
