'use strict';
const isLeapYear = function () {
  let startYear = (parseInt(prompt('Вас приветствует интерфейс определения високосных годов. Пожалуйста, введите начальный год (или оставьте значение по-умолчанию: 1900 год).', 1900))) || 1900;
  let endYear = (parseInt(prompt('Пожалуйста, введите конечный год (или оставьте значение по-умолчанию: 2000 год).', 2020))) || 2020;

  if (startYear >= endYear) {
    alert('Ошибка! Начальный год равен или больше конечного. Пожалуйста, повторите ввод');
  } 

  for (let i = startYear; i <= endYear; i += 4) {
    if (i % 100 === 0 && i % 400 !== 0) {
      continue
    }
    console.log('year: ' + i);
  }
};
isLeapYear();