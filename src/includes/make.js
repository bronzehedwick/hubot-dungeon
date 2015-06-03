var random = require('./random.js');

// Generate a weapon
exports.weapon = function(level) {
  var weaponNames = require('../data/weapon_names.json'),
      adjNeg = require('../data/adj_negative.json');

  var thisWeapon = {},
      weaponLevelChance = random(1, 100),
      dmgMin, dmgMax, weaponLevel;

  // Determine weapon level, based on dungeon level
  if (weaponLevelChance >= 80) {
    // 20%: weapon level is higher than dungeon level
    weaponLevel = level + 1;
  }
  else if (weaponLevelChance >= 30) {
    // 50%: weapon level is the same as dungeon level
    weaponLevel = level;
  }
  else {
    // 30%: weapon level is lower than dungeon level
    weaponLevel = level - 1;
    weaponLevel = (weaponLevel < 1 ? 1 : weaponLevel);
  }

  // Weapon damage formula
  dmgMin = Math.floor(weaponLevel / 2);
  dmgMin = (dmgMin < 1 ? 1 : dmgMin);
  dmgMax = weaponLevel + random(1, Math.floor(weaponLevel / 2));

  thisWeapon = {
    'equipped': false,
    'level': weaponLevel,
    'stats': {
      'attack': 0,
      'damage': {
        'min': dmgMin,
        'max': dmgMax
      },
      'dodge': 0,
      'health': 0,
      'luck': 0,
    },
    'powers': {
      'passive': {},
      'active': {}
    }
  };

  thisWeapon.name = adjNeg[random(0, adjNeg.length)] + ' ' + weaponNames[random(0, weaponNames.length)];
  thisWeapon.type = 'weapon';

  return thisWeapon;
};

// Generate armor
exports.armor = function(level) {
  var armorNames = require('../data/armor_names.json');
  var thisArmor = {};

  if (level === 1) {
    var adjNeg = require('../data/adj_negative.json'),
        animals = require('../data/animals.json');

    var armorName = armorNames[random(0, armorNames.length)];

    thisArmor = {
      'equipped': true,
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
  var hatNames = require('../data/hat_names.json');
  var thisHat = {};

  if (level === 1) {
    var adjNeg = require('../data/adj_negative.json');

    thisHat = {
      'equipped': true,
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
  var bootsNames = require('../data/boots_names.json');
  var thisBoots = {};

  if (level === 1) {
    var adjNeg = require('../data/adj_negative.json');

    thisBoots = {
      'equipped': true,
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
  var ringNames = require('../data/ring_names.json');
  var thisRing = {};

  if (level === 1) {
    var adjNeg = require('../data/adj_negative.json');

    thisRing = {
      'equipped': true,
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
