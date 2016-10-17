
var words = ['pumpkin', 'ghost', 'autumn'];
var limit = words.length;
var word;

function randomWord() {
  var index = Math.floor(Math.random()*limit);
  word = words[index];
}

module.exports = word;
