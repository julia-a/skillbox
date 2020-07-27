'use strict';
const date = new Date();
const thisYear = date.getFullYear();

let greeting = function() {
  const userName = prompt('Пожалуйста, напишите ваше имя') || 'Уважаемый';
  const userSurname = prompt('Пожалуйста, напишите вашу фамилию?') || 'пользователь';
  const userGreeting = userName + ' ' + userSurname + '!';
  const userBirthYear = prompt('Введите ваш год рождения');
  const age = thisYear - userBirthYear;

  if (age < 20) {
    alert('Привет, ' + userGreeting);
  } else if (age >= 20 && age < 40) {
    alert('Добрый день, ' + userGreeting);
  } else {
    alert('Здравствуйте, ' + userGreeting);
  }
};
greeting();
