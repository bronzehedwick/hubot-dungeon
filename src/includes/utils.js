/**
 * Various utilities.
 */

// Pluralize words
exports.pluralize = function pluralize(word, num) {
  if (num === 1) {
    return word;
  }

  return word + 's';
};

// Capitalize first letter of a string
exports.capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// TODO: Write description
exports.levelSpread = function levelSpread(level) {
  var random = require('./random.js');

  var roll = random(1, 100);

  // Determine level, based on dungeon level
  if (roll >= 80) {
    // 20%: level is higher than dungeon level
    return level + 1;
  }
  else if (roll >= 30) {
    // 50%: level is the same as dungeon level
    return level;
  }
  else {
    // 30%: level is lower than dungeon level
    return ((level - 1) < 1 ? 1 : (level - 1));
  }
};
