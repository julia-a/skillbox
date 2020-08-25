'use strict';
const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n); 
};

const getUserNumber = function() {
  const messageValue = prompt('Пожалуйста, введи число или нажми «Отмена», чтобы прекратить работу программы.');

  if (messageValue === null) {
    return;
  } else if (isNum(messageValue)) {
    alert('Ура! Введено число: ' + messageValue);
    return;
  } else {
    alert('Что-то пошло не так: введено не число! Пожалуйста, попробуй еще раз.');
    getUserNumber();
  }
};
getUserNumber();