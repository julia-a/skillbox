'use strict';
const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n); 
};

const isLeapYear = function() {
  return ((i % 4 === 0) && (i % 100 !== 0)) || (i % 400 === 0);
};

const showLeapYear = function() {
  let startYear = prompt('Вас приветствует интерфейс определения високосных годов. Пожалуйста, введите начальный год (или оставьте значение по-умолчанию: 1900 год).', 1900);
  if (startYear === null) {
    return;
  }

  if (!isNum(startYear)) {
    alert('Ошибка! Значение начального года не является числом. Пожалуйста, перезагрузите страницу и повторите ввод.');
    return;
  }
  
  let endYear = prompt('Пожалуйста, введите конечный год (или оставьте значение по-умолчанию: 2000 год).', 2020);
  if (endYear === null) {
    return;
  }

  if (!isNum(endYear)) {
    alert('Ошибка! Значение конечного года не является числом. Пожалуйста, перезагрузите страницу и повторите ввод.');
    return;
  }

  if (startYear >= endYear) {
    for (let i = startYear; i > endYear; i --) {
      if (isLeapYear) {
        console.log('year: ' + i);
      }
    };
  } else {
    for (let i = startYear; i <= endYear; i ++) {
      if (isLeapYear) {
        console.log('year: ' + i);
      }
    };
  }
};
showLeapYear();
