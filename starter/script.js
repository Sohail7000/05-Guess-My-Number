'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let maxScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No Number✨');
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent =
      'You have guessed a correct Number✨';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Maintaing a high score
    maxScore = Math.max(maxScore, score);
    document.querySelector('.highscore').textContent = maxScore;
  } else if (guess != secretNumber) {
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'TOO HIGH😒' : 'TOO LOW🤦‍♀️';
    } else {
      document.querySelector('.message').textContent = 'You"ve lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('body').style.backgroundColor = ' #222';

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';
  displayMessage('Start guessing...');
});

// let maxScore = 0;
// maxScore = Math.max(maxScore,score);
// document.querySelector('.highscore')  = '

// When the guess is greater
// else if (guess > secretNumber) {
//   score--;
//   if (score > 0) {
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent = 'TOO HIGH😁';
//   } else {
//     document.querySelector('.message').textContent = 'You"ve lost the game';
//   }
// }
// // When the guess is smaller
// else if (guess < secretNumber) {
//   score--;
//   if (score > 0) {
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent = 'TOO LOW😁';
//   } else {
//     document.querySelector('.message').textContent = 'You"ve lost the game';
//   }
// }
