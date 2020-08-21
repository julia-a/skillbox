'use strict';
const randomNumber = Math.round(Math.random() * 10);

const guessNumber = function() {
  const inputNumber = prompt('Привет! Сыграем в игру? Я загадал число от 0 до 9. Попробуй отгадать его: введи в окошко ниже свой вариант и нажми «ОК».');
  console.log(randomNumber);
  console.log(inputNumber);
  
  if (inputNumber === null) {
    alert('Пока! Как-нибудь сыграем ещё.');
  } else if (randomNumber === parseInt(inputNumber)) {
    alert('Bingo! Ты отгадал!');
  } else if (randomNumber > parseInt(inputNumber)) {
    alert('Мало. Попробуй ещё раз!');
    guessNumber();
  } else if (randomNumber < parseInt(inputNumber)) {
    alert('Много. Попробуй ещё раз!');
    guessNumber();
  } else {
    alert('Вводить нужно числа. Попробуй ещё раз!');
    guessNumber();
  }
};
guessNumber();