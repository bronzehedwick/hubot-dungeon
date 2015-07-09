/**
 * Formulas!
 */

// Damage
exports.damage = function damage(level) {
  var random = require('./random.js');

  var dmgMin, dmgMax;

  dmgMin = Math.floor(level / 2);
  dmgMin = (dmgMin < 1 ? 1 : dmgMin);
  dmgMax = level + random(1, Math.floor(level / 2));

  return {min: dmgMin, max: dmgMax};
};
