'use strict';

//remember these elements: five questions, username displayed at beginning and end
//for class 3 lab add:
//a 6th question to the guessing game that takes in a numeric input
//by prompting the user to guess a number.
//Indicates through an alert if the guess is “too high” or “too low”.
//It should give the user exactly four opportunities to get the correct answer.

//Consider using a loop of some sort for this question.
//adjust the final score to include the two new questions.


console.log('hello');
//Five questions with yes or no answers
alert('Welcome to all about me!');
let username = prompt('What is your name?');
console.log(`Question: What is your name? Response: ${username}`);
let score = 0;

function firstQuestion(username) {
  let ques1 = prompt(`Hi ${username}, I'm going to ask you a series of yes or no questions. For each correct answer, you get one point. Are you ready?`).toLowerCase();
  //console.log(`Question: Are you ready? Response: ${ques1}`);

  if (ques1 === 'yes' || ques1 === 'y') {
    score = score + 1;
    alert(`Ok ${username} that was an easy one. Your score is ${score}.`);
    //console.log(`Ok ${username} that was an easy one. Your score is ${score}.`);
  }

  return score;
}
alert('Next question!');

let ques2 = prompt('Will I ever be a super awesome code fiend?').toLowerCase();
//console.log(`Question: Will I ever be a super awesome code fiend? Response: ${ques2});

if (ques2 === 'yes' || ques2 === 'y') {
  score = score + 1;
  alert(`Oh ${username}, your confidence is inspiring! Your score is ${score}.`);
  //console.log(`Oh ${username}, your confidence is inspiring! Your score is ${score}.`);
}
else {
  alert('Hmm. Well I don\'t know about that. Let\'s try another one.');
}
let ques3 = prompt(`So ${username}, do you think I'll ever meet a plane I don't want to get on?`).toLowerCase();
//console.log(`Question: Do you think I'll ever meet a plane I don't want to get on? Response: ${ques3});

if (ques3 === 'yes' || ques3 === 'y') {
  score = score + 1;
  alert(`Well, you're right, ${username}. There are a few places I wouldn't want to end up! Your score is ${score}.`);
  //console.log(`Well, you're right, ${username}. There are a few places I wouldn't want to end up! Your score is ${score}.`);
}
else {
  alert('Oh I don\'t know, there are a few places I wouldn\'t want to end up!');
}

let ques4 = prompt(`Next question ${username}, is purple my favorite color?`).toLowerCase();
//console.log(`Question: Is purple my favorite color? Response: ${ques4}`);

if (ques4 === 'yes' || ques4 === 'y') {
  score = score + 1;
  alert(`What gave it away?!? Your score is ${score}.`);
  //console.log(`What gave it away?!? Your score is ${score}.`);
}
else {
  alert(`It certainly is, ${username}, but blue is my second favorite, so I understand the confusion.`);
}

let ques5 = prompt(`Listen ${username}, I need a serious answer. Do you like my new hat?`).toLowerCase();
//console.log(`Question: Do you like my new hat? Response: ${ques5}`);

if (ques5 === 'yes' || ques5 === 'y') {
  score = score + 1;
  alert(`It IS kind of a great party hat. Your score is ${score}.`);
  //console.log(`It IS kind of a great party hat. Your score is ${score}.`);
}
else {
  alert(`Not a fan of Go, Dog, Go, ${username}? That's ok.`);
}

let goodguess = Math.floor(Math.random() * 101);
console.log(goodguess);
//math code string found at https://www.w3schools.com/js/js_random.asp

let ques6 = prompt(`Let's try something else, ${username}. I'm thinking of a number between 1 and 100. Try to guess the number.`);
//ques6 = Number(ques6); if we wanted to use strictly not equal this code would go here and at lines 93 and 96
let guesses = 4;

while (ques6 !== goodguess && guesses >= 1) {
  //console.log(`for loop`);
  if (ques6 > goodguess) {
    ques6 = prompt(`Too high, ${username}. You have ${guesses} tries left. Next guess?`);
    guesses--;
  }
  else if (ques6 < goodguess) {
    ques6 = prompt(`Too low, ${username}. You have ${guesses} tries left. Try again?`);
    guesses--;
  }
}
//console.log('You\'re out of the loop.');
if (ques6 === goodguess) {
  score++;
  alert(`You got it, ${username}! Your score is ${score}.`);
}
if (guesses === 0) {
  alert(`Oh no, ${username}! You ran out of guesses! The answer was ${goodguess}.`);

  firstQuestion(username);
}

alert(`${username}, you've been a great sport! Your ending score is ${score}, but don't worry, there's no prize except the satisfaction of a game well played.`);
