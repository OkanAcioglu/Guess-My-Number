'use strict'
//? -------------- GAME LOGIC ----------
// * To continue to the "game logic", we should first define "secret number" because we need to smth. that we can "compare" and "that is secret number".
// ! We should define it outside of the event because we need it only ones.

const secretNumber = Math.trunc(Math.random() * 20) + 1 // create random number btw. 0 to 20
let score = 20 // create "variable" for "score" (used "let" as we decrease it)
document.querySelector('.number').textContent = secretNumber // when the page is refresh different random number created.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number'
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number'
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤔 Too High!'
      score-- // after wrong guess --> score will down by 1
      document.querySelector('.score').textContent = score // Reassign of score
    } else {
      document.querySelector('.message').textContent = 'You lost the game!🫵'
      document.querySelector('.score').textContent = 0
    }
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

// !!! We can store "score" basically in the DOM.this score basically in the DOM and to do that we would always just read it from the DOM decrease it and write it back to the DOM. But then we would not have that value in our code. So our application have no way to knowing that score at all points. So its always good to keep a variable which actually hold a data in our code and not just rely the DOM to hold our data.

// !!! let score = 20 --> called "state variable" because this score is part of the so-called application state which is basically all the data that is relevant to the application.
