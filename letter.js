
function Letter(word, letter, indexes) {
  this.winLose = false;
  this.blanks = [];
  this.getLetters = function() {
    for(var i = 0; i < indexes.length; i++) {
      var letterIndex = indexes[i];
      this.blanks[letterIndex] = letter;
    }
    this.printBlanks();
  };
  this.printBlanks = function() {
    console.log(this.blanks.join(' '));
  }
  this.isWin = function() {
    if(this.blanks.join('') == word) {
      this.winLose = true;
      console.log('\n---------------');
      console.log('Yay! You win!');
      console.log('---------------\n');
    }
  }
}

module.exports = Letter;
