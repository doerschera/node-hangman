
module.exports = {
  easy: {
    words: ['ghost', 'thread', 'weird', 'swear'],
    guesses: 3
  },
  medium: {
    words: ['pallid', 'pumpkin', 'autumn', 'measure'],
    guesses: 5
  },
  hard: {
    words: ['indefagitable', 'ecstatic', 'harbinger', 'antideluvian'],
    guesses: 7
  },
  randomWord: function(limit) {
    return Math.floor(Math.random()*limit);
  }
}
