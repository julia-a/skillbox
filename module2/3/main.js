'use strict';
const sumNumbers = function() {
  let sum = 0;
  
  while (true) {
    let messageValue = prompt('Пожалуйста, введите число или нажмите «Отмена» чтобы вывести сумму ранее введенных чисел.');
    if (messageValue == null) {
      break;
    } else if (messageValue == '') {
      continue;
    } else {
      messageValue = parseInt(messageValue);
    };
    sum += messageValue;
  }
  alert('Сумма: ' + sum)
}
sumNumbers();