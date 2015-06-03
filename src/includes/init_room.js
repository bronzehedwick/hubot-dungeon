module.exports = function(word, num) {
  // Generate initial room statistics
  var random = require('./random.js');

  return {
    'current': 1,
    'max': random(1, 5) + 5,
    'description': 'This bare chamber echos with unfinished emptiness.'
  };
};
