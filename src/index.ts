/**
 * The HelloWorld program implements an application that
 * simply displays energy released question to the standard output.
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
let insertNumber: number | undefined
let turn = 0

const randomNumber = Math.floor(Math.random() * 6) + 1
for (let loopCounter = 0; loopCounter < loopCounter + 1; loopCounter++) {
  const insertString = prompt('Insert your guessed number between 1 and 6: ')
  insertNumber = parseInt(insertString)
  if (isNaN(insertNumber)) {
    console.log('Invalid number!')
  } else if (insertNumber < 1 || insertNumber > 6) {
    console.log('This number is not between 1 to 6.')
  } else if (insertNumber >= 1 && insertNumber <= 6) {
    if (insertNumber > randomNumber) {
      console.log('You guessed too big.')
    } else if (insertNumber < randomNumber) {
      console.log('You guessed too small.')
    } else {
      break
    }
  } else {
    console.log('Invalid number!')
  }
  console.log('Please try again.\n')
  turn = loopCounter + 1
}
turn = turn + 1
console.log(`Your guess is right! The correct answer is ${randomNumber}`)
console.log(`It takes you ${turn} turns to guess right.`)
console.log('\nDone.')
