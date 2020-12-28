'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
let check = document.querySelector('.check');
let number = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector('.message');
let score = Number(document.querySelector('.score').textContent);
let guess = Number(document.querySelector('.guess').value);
let highScore = Number(document.querySelector('.highscore').textContent);
const again = document.querySelector('.again');
const body = document.querySelector('body');
const numberBox = document.querySelector('.number');

again.addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = 'black';
  numberBox.textContent = '?';
  document.querySelector('.guess').value = '';
  settingMessage('Start guessing...');
  numberBox.style.width = '15rem';
  score = 20;
});

check.addEventListener('click', function () {
  if (!guess) {
    settingMessage('No Number');
  } else if (guess === number) {
    settingMessage('You Win!');
    body.style.backgroundColor = 'green';
    numberBox.style.width = '30rem';
    numberBox.textContent = number;

    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== number) {
    if (score > 1) {
      settingMessage(guess > number ? 'Too High' : 'Too Low');
      score--;
    } else {
      settingMessage('You Lose!');
      score = 0;
      body.style.backgroundColor = 'red';
      numberBox.textContent = number;
      numberBox.style.width = '30rem';
    }
  }
});

const settingMessage = function (newMessage) {
  message.textContent = newMessage;
};
