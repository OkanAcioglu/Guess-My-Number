'use strict'

//? -------------- SELECTING AND MANIPULATING ELEMENTS ----------
// * Like in the CSS we can "select element" by their "class" or "ID names" in "JS".
// ! querySelector() basically is a method that is available ob the document object
// ! In method we put selector exactly same what we did in CSS

//document.querySelector('.message') // "p" element selectted
//console.log(document.querySelector('.message')) // "p" element in HTML written.

//document.querySelector('.message').textContent // "text" inside the "p" elemenet selected.
console.log(document.querySelector('.message').textContent) // "text" inside the "p" elemenet written.

// ! Beside GETTING text content, we can also SET the content of the element.

document.querySelector('.message').textContent = 'Correct Number!!' // SET smth. else
console.log(document.querySelector('.message').textContent)

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value
console.log(document.querySelector('.guess').value) // Coming "empty" because nothing there.
document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)

// ! Note that there are other ways to select elements...

//? -------------- HANDLING CLICK EVENT ----------
// * We will use "Event Listener Method".
// * There are "multiple ways" to "listen for events in JS" but "Event Listener Method" is "best" and "most used".
// * Event is smth. that happens on the page. Mouse click, mouse move, key press...
// * First select element where the event will occur in this case Check Button.
// * Into the "Event Listener" we should pass "type of the event". In this case it is actually "click"
// * Then we need to specify the reaction (have to say what to do.)
// * This will done with a function and this function name is "event handler"
// * addEventListener() is a special function that as a second argument it will expect a "event handler function"

document.querySelector('.check').addEventListener('click', function () {
  //const guess = document.querySelector('.guess').value
  //console.log(typeof guess) // string
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess) // number
  if (!guess) {
    // if no guess is written(no input) then click --> will come "0" from the input
    document.querySelector('.message').textContent = '⛔️ No Number'
  }
})
// ! Note that we do not call the function here anywhere. We only define and pass it to the event listener. But the JS engine that will call this function as soon as the event happens.
// !!! Usually whenever we get smth. from the user interface ie. from an input field, it usually always a string.
