var random = require('./random.js');

// Generate a monster
exports.monster = function(level) {
  return makeMonster(level);
};

function makeMonster(level) {
  var types = require('../data/monster_types.json');

  var monster = {
    'level': level,
    'type': types[random(0, types.length)],
    'damage': 0,
    'dodge': 0,
    'health': {
      'max': 0,
      'current': 0
    },
    'powers': {
      'passive': {},
      'active': {}
    },
    'description': ''
  }

  // Call monster-specific override functions
  if (typeof makeMonster[monster.type] === 'function') {
    makeMonster[monster.type].call(monster);
  }
}

makeMonster.goblin = function() {
  console.log(this);
}

makeMonster.fairy = function() {
  console.log(this);
}

makeMonster.lycanthrope = function() {
   console.log(this);
}

makeMonster.zombie = function() {
   console.log(this);
}

makeMonster.skeleton = function() {
   console.log(this);
}

makeMonster.vampire = function() {
   console.log(this);
}

makeMonster.animal = function() {
   console.log(this);
}

makeMonster.blob = function() {
   console.log(this);
}

makeMonster.animalHybrid = function() {
   console.log(this);
}

makeMonster.animalPeople = function() {
   console.log(this);
}

makeMonster.bandit = function() {
   console.log(this);
}

makeMonster.dragon = function() {
   console.log(this);
}

makeMonster.ghost = function() {
   console.log(this);
}
