'use strict';
const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n); 
};

const sumNumbers = function() {
  let sum = 0;
  
  while (true) {
    let messageValue = prompt('Пожалуйста, введите число или нажмите «Отмена» чтобы вывести сумму ранее введенных чисел.');
    if (messageValue === null) {
      break;
    } else if (isNum(messageValue)) {
      console.log(messageValue);
      sum += +messageValue;
    }
  }
  alert('Сумма: ' + sum);
};
sumNumbers();