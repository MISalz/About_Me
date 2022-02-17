'use strict';

console.log('greetings user');
let user = prompt('Thank you for visiting my page, whats your name?');
console.log('hi ' + user)

let q1 = prompt('do you know me?').toLowerCase;

if (q1 === 'yes' || q1 === 'y') {
  alert('Great! but I bet you dont know these little facts about me?');
} else if (q1 === 'no' || q1 === 'n') {
  alert('No? Well heres a few little fun facts about me.')
}
// console.log (user+' I asked if you knew me and your answer was '+q1)

let q2 = prompt('Did you know this is my second try at Codefellows 201 course?').toLowerCase;

if (q2 === 'yes' || q2 === 'y') {
  alert(`${user}  Im so glad were in this class together and hope that we get to know each other better.`);
} else if (q2 === 'no' || q2 === 'n') {
  alert(`${user}  Its been two years since I took my first course and Im nervous because I hope that its truly like riding a bicicle.`)
}
// console.log (user+' Im so glad we are taking this course together ')

let q3 = prompt('do you think I had prior coding or programming experience prior to attending codefellows?').toLowerCase;
if (q3 === 'yes' || q3 === 'y') {
  alert(`${user}  Yes, actually I did. I had taken some courses during college and even self taught myself a little of HTML during the myspace days.`);
} else if (q3 === 'no' || q3 === 'n') {
  alert(`${user}  Its been so long since I took CIS course in college, but I did have prior experience with programming languages prior to attending CF`)
}
// console.log (user+' now you know a bit more about me and my journey to Codefellows.')

let q4 = prompt('Am I currently employed').toLowerCase;
if (q4 === 'yes' || q4 === 'y') {
  alert(`${user}  Actually not right now. I am taking a break to focus on school`);
} else if (q4 === 'no' || q4 === 'n') {
  alert(`${user}  you are correct, currently taking a break to attend this course`)
}
// console.log (user+' now you know a bit more about me and my journey to Codefellows.')
let q5 = prompt('Do I know what im doing this time around?').toLowerCase;
if (q5 === 'yes' || q5 === 'y') {
  alert(`${user}  not really, I remember some of the lessons but it has not hit me yet where I feel like an expert.`);
} else if (q5 === 'no' || q5 === 'n') {
  alert(`${user}  you are correct, I am currently like everyone else in the class right now learning from the beginning.`)
}
// console.log (user+' now you know a bit more about me and my journey to Codefellows.')
//------------------
/* Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
Indicates through an alert if the guess is “too high” or “too low”.
 It should give the user exactly four opportunities to get the correct answer.
 After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.*/

let attempts = 4;
let years = 3;
console.log(`q6 works`)

while (attempts) {
  attempts--;
  let userGuess = prompt('How many years have I lived in Seattle?');

  if (+userGuess === years) {
    alert('that is correct I have lived in seattle for 3 years');
    break;
  }
  else if (userGuess < years) {
    alert('too low');
  }
  else {
    alert('too high');
  }
  if (attempts === 0) {
    alert('correct answer was 3')
  }
}

/*   Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.*/

let attemptsTwo = 6;
let cities = ['seattle', 'phoenix', 'san diego', 'la'];
console.log(`q7 works`)

while (attemptsTwo) {
  attemptsTwo--;
  let citiGuess = prompt('guess 4 major cities ive lived in?');

  for (let i = 0; i < cities.length; i++) {
    if (citiGuess === cities[i]) {
      alert('thats correct');
      attemptsTwo = 1;
    }
    else if (citiGuess !== cities) {
      alert('thats incorrect');
    }
  }
}