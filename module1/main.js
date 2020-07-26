var userName = prompt('Пожалуйста, напишите ваше имя');
var userSurname = prompt('Пожалуйста, напишите вашу фамилию?');
var userGreeting = userName + ' ' + userSurname + '!';
var userBirthYear = prompt('Введите ваш год рождения');
var date = new Date();
var thisYear = date.getFullYear();
var age = thisYear - userBirthYear;

var greeting = function (age) {
  if (age < 20) {
    alert('Привет, ' + userGreeting);
  }
  else if (age >= 20 && age < 40) {
    alert('Добрый день, ' + userGreeting);
  }
  else {
    alert('Здравствуйте, ' + userGreeting);
  };
}

greeting();