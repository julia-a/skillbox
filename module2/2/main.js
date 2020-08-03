'use strict';
const showLeapYear = function() {
  let startYear = prompt('Вас приветствует интерфейс определения високосных годов. Пожалуйста, введите начальный год (или оставьте значение по-умолчанию: 1900 год).', 1900);
  if (startYear == null) {
    return
  };
  
  if (!isNaN(parseFloat(startYear)) && isFinite(startYear)) {
  } else {
    alert('Ошибка! Значение начального года не является числом. Пожалуйста, перезагрузите страницу и повторите ввод.');
    return
  };
   
  let endYear = prompt('Пожалуйста, введите конечный год (или оставьте значение по-умолчанию: 2000 год).', 2020);
  if (endYear == null) {
    return
  };
  
  if (!isNaN(parseFloat(endYear)) && isFinite(endYear)) {
  } else {
    alert('Ошибка! Значение конечного года не является числом. Пожалуйста, перезагрузите страницу и повторите ввод.');
    return
  };

  if (startYear >= endYear) {
    alert('Ошибка! Начальный год равен или больше конечного. Пожалуйста, перезагрузите страницу и повторите ввод.');
    return
  };  

  for (let i = startYear; i <= endYear; i ++) {
    if (((i % 4 === 0) && (i % 100 !==0)) || (i % 400 === 0)) {
      console.log('year: ' + i);
    }
  }
};
showLeapYear();
