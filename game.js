function Word(letter) {
  this.word = [];
  this.indexes = [];
  this.check = function() {
    for(var i = 0; i < this.word.length; i++) {
      if(this.word[i] === letter) {
        this.indexes.push(i);
      }
    }
  }
}

module.exports = Word;
