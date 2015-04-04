var random = require('./random.js');

exports.name = function(level) {
  if (level === 0) {
    var weaponNames = require('../data/nouns/weapon_names.json'),
      adjNeg = require('../data/adjectives/negative.json');

    return adjNeg[random(1, adjNeg.length)] + ' ' + weaponNames[random(1, weaponNames.length)];
  }
};
