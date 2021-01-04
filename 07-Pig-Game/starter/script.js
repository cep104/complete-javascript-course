'use strict';
// Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer, playing;

// let scores = [0, 0]; //make array to have scores of both players
// let currentScore = 0;
// let activePlayer = 0; //set as zero because they are first player position 0
// let playing = true;
// //setting scores to zero to start and changing dice
// score0Element.textContent = 0;
// score1Element.textContent = 0;
// diceElement.classList.add('hidden');
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    //if playing is true you can click here
    //1.Generating a random dice roll
    // Math.random() will display number between 0 - .9999
    //Times 6 will give us 0-5
    // plus 1 will give us 1-6
    //Math.trunc() rounds the number to a whole number removing fraction
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display the dice
    diceElement.classList.remove('hidden');
    // .src can set the source link it will be dice- whatever number(dice) then .png
    diceElement.src = `dice-${dice}.png`;
    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      //Add dice to current score
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      switchPlayer();
      //Switch to next player
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to score of active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //2. check if players score is >= 100
    if (scores[activePlayer] >= 100) {
      //Finish Game
      playing = false;
      diceElement.classList.add('hidden'); //hide dice when game is won
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. If not switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
