'use strict'
//? -------------- DRY PRINCIPLE ------------
// * We will use the "refactoring technique" to "Dry" our code.
// * "Refactoring" basically means to "restructure" the code "without changing" "how it work"
// * First identify duplicated code like in this one "too high" and "too low" case.
// * Then with "ternary operator" bind them.
// * Secondly find the "repeated lines" (For example: document.querySelector('.message').textContent) and put them into the "function".

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)
  // When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔️ No Number'
    displayMessage('⛔️ No Number')
    // When player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🏆 Correct Number'
    displayMessage('🏆 Correct Number')
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? '🤔 Too High!' : '🤔 Too Low!'
      displayMessage(guess > secretNumber ? '🤔 Too High!' : '🤔 Too Low!')
      score--
      document.querySelector('.score').textContent = score
    } else {
      //document.querySelector('.message').textContent = 'You lost the game!🫵'
      displayMessage('You lost the game!🫵')
      document.querySelector('.score').textContent = 0
    }
  }
  /* // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤔 Too High!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost the game!🫵'
      document.querySelector('.score').textContent = 0
    }

    /* When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤔 Too Low!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost the game!🫵'
      document.querySelector('.score').textContent = 0
    }
  } */
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  //document.querySelector('.message').textContent = 'Start guessing...'
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('.number').style.width = '15rem'
})
