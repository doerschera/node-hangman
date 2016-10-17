var Letter = require('./letter.js');
var word = require('./word.js');
var Game = require('./game.js');
var inquirer = require('inquirer');
var currentState = [];

console.log(word);

for(var i = 0; i < word.length; i++) {
  currentState.push('_');
}
console.log('\n'+ currentState.join(' ') +'\n');

function play() {
  inquirer.prompt([
    {
      message: 'Choose a letter.',
      name: 'letter'
    }
  ]).then(function(input) {
    var guess = input.letter;
    var newGame = new Game(guess);
    var correctLetters;

    newGame.word = word.split('');
    newGame.check();
    correctLetters = newGame.indexes

    var letterCheck = new Letter(word, guess, correctLetters);
    letterCheck.blanks = currentState;
    letterCheck.getLetters();
    currentState = letterCheck.blanks;

    letterCheck.isWin();

    if(letterCheck.win == false) {
      play();
    }
  })
}

play();
