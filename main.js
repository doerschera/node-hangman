var Letter = require('./letter.js');
var word = require('./word.js');
var Game = require('./game.js');
var inquirer = require('inquirer');

console.log(word);

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
})
