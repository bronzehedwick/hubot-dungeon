var random = require('./random.js');

var baseStats = {
  'equipped': 'true',
  'attack': '0',
  'damage': '0',
  'defense': '0',
  'health': '0',
  'luck': '0',
  'passivePower': {},
  'activePower': {}
};

// Generate a weapon
exports.weapon = function(level) {
  var weaponNames = require('../data/nouns/weapon_names.json');
  var weapon = {};

  if (level === 0) {
    var adjNeg = require('../data/adjectives/negative.json');

    weapon = baseStats;
    weapon.name = adjNeg[random(0, adjNeg.length)] + ' ' + weaponNames[random(0, weaponNames.length)];
    weapon.type = 'weapon';
  }

  console.log(weapon);
  return weapon;
};

// Generate armor
exports.armor = function(level) {
  var armorNames = require('../data/nouns/armor_names.json');
  var armor = {};

  if (level === 0) {
    var adjNeg = require('../data/adjectives/negative.json'),
        animals = require('../data/nouns/animals.json');

    var armorName = armorNames[random(0, armorNames.length)];

    armor = baseStats;

    if (armorName === 'Hide') {
      armor.name = animals[random(0, animals.length)] + ' ' + armorName + ' armor';
    }
    else {
      armor.name = adjNeg[random(0, adjNeg.length)] + ' ' + armorName;
    }
    armor.type = 'armor';
  }

  return armor;
};

// Generate hat
exports.hat = function(level) {
  var hatNames = require('../data/nouns/hat_names.json');
  var hat = {};

  if (level === 0) {
    var adjNeg = require('../data/adjectives/negative.json');

    hat = baseStats;
    hat.name = adjNeg[random(1, adjNeg.length)] + ' ' + hatNames[random(1, hatNames.length)];
    hat.type = 'hat';
  }

  return hat;
};

// Generate boots
exports.boots = function(level) {
  var bootsNames = require('../data/nouns/boots_names.json');
  var boots = {};

  if (level === 0) {
    var adjNeg = require('../data/adjectives/negative.json');

    boots = baseStats;
    boots.name = adjNeg[random(1, adjNeg.length)] + ' ' + bootsNames[random(1, bootsNames.length)];
    boots.type = 'boots';
  }

  return boots;
};

// Generate ring
exports.ring = function(level) {
  var ringNames = require('../data/nouns/ring_names.json');
  var ring = {};

  if (level === 0) {
    var adjNeg = require('../data/adjectives/negative.json');

    ring = baseStats;
    ring.name = adjNeg[random(1, adjNeg.length)] + ' ' + ringNames[random(1, ringNames.length)];
    ring.type = 'ring';
  }

  return ring;
};
