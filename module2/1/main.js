'use strict';
const compareOfNumbers = function() {
  const firstNumber = parseInt(prompt('Вас приветствует интерфейс сравнения двух чисел! Пожалуйста, напишите первое число'));
  const secondNumber = parseInt(prompt('Пожалуйста, напишите второе число'));

  if (firstNumber == secondNumber) {
    alert('Вы ввели: ' + firstNumber + ' и ' + secondNumber + '. Первое число равно второму.');
  } else if (firstNumber > secondNumber)  {
    alert('Вы ввели: ' + firstNumber + ' и ' + secondNumber + '. Первое число больше второго.');
  } else if (firstNumber < secondNumber)  {
    alert('Вы ввели: ' + firstNumber + ' и ' + secondNumber + '. Первое число меньше второго.');
  } else {
    alert('Возникла ошибка при вводе чисел. Пожалуйста, повторите ввод!');
  };
}
compareOfNumbers();



