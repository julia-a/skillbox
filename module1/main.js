'use strict';
var date = new Date();
var thisYear = date.getFullYear();

var greeting = function () {
  var userName = prompt('Пожалуйста, напишите ваше имя') || 'Уважаемый';
  var userSurname = prompt('Пожалуйста, напишите вашу фамилию?') || 'пользователь';
  var userGreeting = userName + ' ' + userSurname + '!';
  var userBirthYear = prompt('Введите ваш год рождения');
  var age = thisYear - userBirthYear;

  if (age < 20) {
    alert('Привет, ' + userGreeting);
  } else if (age >= 20 && age < 40) {
    alert('Добрый день, ' + userGreeting);
  } else {
    alert('Здравствуйте, ' + userGreeting);
  }
};
greeting();
