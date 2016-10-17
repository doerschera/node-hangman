
function Letter(word, letter, indexes) {
  this.blanks = [];
  this.getBlanks = function() {
    for(var i = 0; i < word.length; i++) {
      this.blanks.push('_');
    }
  };
  this.getLetters = function() {
    for(var i = 0; i < indexes.length; i++) {
      var letterIndex = indexes[i];
      this.blanks[letterIndex] = letter;
    }
  };
  this.printBlanks = function() {
    console.log(this.blanks.join(' '));
  }
  this.win = function() {
    if(this.blanks.findIndex('_') == -1) {
      console.log('\n---------------');
      console.log('Yay! You win!');
      console.log('---------------\n');
    }
  }
}

module.exports = Letter;
