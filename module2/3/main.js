'use strict';
const sumNumbers = function() {
  let sum = 0;
  
  while (true) {
    let messageValue = parseInt(prompt('Пожалуйста, введите число или нажмите «Отмена» чтобы вывести сумму ранее введенных чисел.'));
    if (!messageValue) break;
    sum += messageValue;
  }
  alert('Сумма: ' + sum)
}
sumNumbers();