'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
let check = document.querySelector('.check');
let number = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector('.message');
const again = document.querySelector('.again');
const body = document.querySelector('body');

again.addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
});
check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  let score = Number(document.querySelector('.score').textContent);
  let highScore = Number(document.querySelector('.highscore').textContent);

  if (!guess) {
    message.textContent = 'No Number';
  } else if (guess === number) {
    message.textContent = 'You Win!';
    body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > number) {
    if (score > 1) {
      message.textContent = 'Too High';
      document.querySelector('.score').textContent = score - 1;
    } else {
      message.textContent = 'You Lose!';
      document.querySelector('.score').textContent = 0;
      body.style.backgroundColor = 'red';
      document.querySelector('.number').textContent = number;
      document.querySelector('.number').style.width = '30rem';
    }
  } else if (guess < number) {
    if (score > 1) {
      message.textContent = 'Too Low';
      document.querySelector('.score').textContent = score - 1;
    } else {
      message.textContent = 'You Lose!';
      document.querySelector('.score').textContent = 0;
      body.style.backgroundColor = 'red';
      document.querySelector('.number').textContent = number;
      document.querySelector('.number').style.width = '30rem';
    }
  }
});
