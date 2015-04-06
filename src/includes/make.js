var random = require('./random.js');

// Generate a weapon
exports.weapon = function(level) {
  var weaponNames = require('../data/nouns/weapon_names.json');
  var thisWeapon = {};

  if (level === 0) {
    var adjNeg = require('../data/adjectives/negative.json');

    thisWeapon = {
      'equipped': 'true',
      'stats': {
        'attack': 0,
        'damage': 0,
        'defense': 0,
        'health': 0,
        'luck': 0,
      },
      'powers': {
        'passivePower': {},
        'activePower': {}
      }
    };
    thisWeapon.name = adjNeg[random(0, adjNeg.length)] + ' ' + weaponNames[random(0, weaponNames.length)];
    thisWeapon.type = 'weapon';
  }

  return thisWeapon;
};

// Generate armor
exports.armor = function(level) {
  var armorNames = require('../data/nouns/armor_names.json');
  var thisArmor = {};

  if (level === 0) {
    var adjNeg = require('../data/adjectives/negative.json'),
        animals = require('../data/nouns/animals.json');

    var armorName = armorNames[random(0, armorNames.length)];

    thisArmor = {
      'equipped': 'true',
      'stats': {
        'attack': 0,
        'damage': 0,
        'defense': 0,
        'health': 0,
        'luck': 0,
      },
      'powers': {
        'passivePower': {},
        'activePower': {}
      }
    };

    if (armorName === 'Hide') {
      thisArmor.name = animals[random(0, animals.length)] + ' ' + armorName + ' armor';
    }
    else {
      thisArmor.name = adjNeg[random(0, adjNeg.length)] + ' ' + armorName + ' armor';
    }
    thisArmor.type = 'armor';
  }

  return thisArmor;
};

// Generate hat
exports.hat = function(level) {
  var hatNames = require('../data/nouns/hat_names.json');
  var thisHat = {};

  if (level === 0) {
    var adjNeg = require('../data/adjectives/negative.json');

    thisHat = {
      'equipped': 'true',
      'stats': {
        'attack': 0,
        'damage': 0,
        'defense': 0,
        'health': 0,
        'luck': 0,
      },
      'powers': {
        'passivePower': {},
        'activePower': {}
      }
    };
    thisHat.name = adjNeg[random(1, adjNeg.length)] + ' ' + hatNames[random(1, hatNames.length)];
    thisHat.type = 'hat';
  }

  return thisHat;
};

// Generate boots
exports.boots = function(level) {
  var bootsNames = require('../data/nouns/boots_names.json');
  var thisBoots = {};

  if (level === 0) {
    var adjNeg = require('../data/adjectives/negative.json');

    thisBoots = {
      'equipped': 'true',
      'stats': {
        'attack': 0,
        'damage': 0,
        'defense': 0,
        'health': 0,
        'luck': 0,
      },
      'powers': {
        'passivePower': {},
        'activePower': {}
      }
    };
    thisBoots.name = adjNeg[random(1, adjNeg.length)] + ' ' + bootsNames[random(1, bootsNames.length)];
    thisBoots.type = 'boots';
  }

  return thisBoots;
};

// Generate ring
exports.ring = function(level) {
  var ringNames = require('../data/nouns/ring_names.json');
  var thisRing = {};

  if (level === 0) {
    var adjNeg = require('../data/adjectives/negative.json');

    thisRing = {
      'equipped': 'true',
      'stats': {
        'attack': 0,
        'damage': 0,
        'defense': 0,
        'health': 0,
        'luck': 0,
      },
      'powers': {
        'passivePower': {},
        'activePower': {}
      }
    };
    thisRing.name = adjNeg[random(1, adjNeg.length)] + ' ' + ringNames[random(1, ringNames.length)];
    thisRing.type = 'ring';
  }

  return thisRing;
};
