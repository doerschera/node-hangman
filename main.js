var Letter = require('./letter.js');
var word = require('./word.js');
var Game = require('./game.js');
var inquirer = require('inquirer');

console.log(word);
var blanks = '';

for(var i = 0; i < word.length; i++) {
  blanks += '_ ';
}
console.log('\n'+ blanks +'\n');

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
  letterCheck.getBlanks();
})
