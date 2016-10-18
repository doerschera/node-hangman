var Letter = require('./letter.js');
var wordChoice = require('./word.js');
var Game = require('./game.js');
var inquirer = require('inquirer');
var currentState = [];
var word;
var guessCounter = 0;
var counterLimit;

function chooseLevel() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Choose a level:',
      choices: ['easy', 'medium', 'hard'],
      name: 'level'
    }
  ]).then(function(response) {
    // Get word based on level
    var level = response.level;
    var limit = wordChoice[level].words.length;
    var index = wordChoice.randomWord(limit);
    word = wordChoice[level].words[index];
    // number of allowed guesses
    counterLimit = wordChoice[level].guesses;

    // initial blanks. currentState tracks correct letters
    for(var i = 0; i < word.length; i++) {
      currentState.push('_');
    }
    console.log('\n'+ currentState.join(' ') +'\n');

    // begin game play
    play();
  })
}

function play() {
  inquirer.prompt([
    {
      message: 'Choose a letter.',
      name: 'letter'
    }
  ]).then(function(input) {
    // get user input and initialize game constructor
    var guess = input.letter;
    var newGame = new Game(guess);
    var correctLetters;

    // split target word to array, check letter again array indexes
    newGame.word = word.split('');
    newGame.check();
    correctLetters = newGame.indexes
    // check for wrong guess
    if(correctLetters.length < 1) {
      guessCounter++;
    }

    // passes letter constructor target word, letter guess, & indexes of correct letters
    var letterCheck = new Letter(word, guess, correctLetters);
    // keep track of correct letters
    letterCheck.blanks = currentState;
    // inserts correct letters
    letterCheck.getLetters();
    // set correct letters to current state
    currentState = letterCheck.blanks;

    // check for win
    letterCheck.isWin();
    // check for lose
    if(guessCounter === counterLimit) {
      letterCheck.winLose = true;
      console.log('\n---------------');
      console.log('You lost!\nThe word was: '+word);
      console.log('---------------\n');
    } else if(letterCheck.winLose == false) {
      play();
    }
  })
}

chooseLevel();
