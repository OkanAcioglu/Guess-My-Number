'use strict'
//? -------------- MANIPULATING CSS STYLE ------------
// * To "manipulate" the "CSS", first we reach the "style" that we want to change. For this we simple use "querySelector" and we choose which "element" we want to change. Then with using "dot" we write "style" and one more "dot" and write which "style type" we want to change. But note that in "JS" "style types" written with using "Camel Case".
// ! Whenever we are manipulating a style, we always need to specify a string. For example --> "30rem" , "white" , "50%"
// ! What we change with using "CSS Manipulating" change the "property" by using "inline CSS"

const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number'

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number'
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
