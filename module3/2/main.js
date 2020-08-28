'use strict';
const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

const getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n); 
};

// Функция запрашивает ввод числа и передает его для сравнения с рандомным числом 
// в следующую функцию numberСheck
const getUserNumber = function() {
  const inputNumber = prompt('Привет! Сыграем в игру? Я загадал число от 1 до 10. Попробуй отгадать его: введи в окошко ниже свой вариант и нажми «ОК».');

  if (inputNumber === null) {
    return alert('Пока! Как-нибудь сыграем ещё.');
  } else if (isNum(inputNumber)) {
    alert('Введено число: ' + inputNumber + '. Сравню его с загаданным.');
    return +inputNumber;
  } else {
    alert('Что-то пошло не так: введено не число! Пожалуйста, попробуй еще раз.');
    getUserNumber();
  }
};

// Функция, сверяющая введенное число с рандомным
const numberСheck = function() {
  const number = getUserNumber();

  if (randomNumber === number) {
    alert('Bingo! Ты отгадал!');
  } else if (number > randomNumber) {
    alert('Много.');
  } else if (number < randomNumber) {
    alert('Мало.');
  }
};
numberСheck();
