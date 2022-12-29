'use strict'
//? -------------- FUNCTIONALITY OF AGAIN ------------
// * Firstly hide of the secret number problem will be solved by put it in the when player wins case

// ! Again button basically reset the entire interface.

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number'

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number'
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤔 Too High!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost the game!🫵'
      document.querySelector('.score').textContent = 0
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤔 Too Low!'
      score-- // after wrong guess --> score will down by 1
      document.querySelector('.score').textContent = score // Reassign of score
    } else {
      document.querySelector('.message').textContent = 'You lost the game!🫵'
      document.querySelector('.score').textContent = 0
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = '' // empty string means absence of any value
  document.querySelector('.number').style.width = '15rem'
})
