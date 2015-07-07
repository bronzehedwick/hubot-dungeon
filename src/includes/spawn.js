var random = require('./random.js');

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
  };

  // Call monster-specific override functions
  if (typeof makeMonster[monster.type] === 'function') {
    return makeMonster[monster.type].call(monster);
  }

  return monster;
}

makeMonster.goblin = function goblin() {
  return this;
};

makeMonster.fairy = function fairy() {
  return this;
};

makeMonster.lycanthrope = function lycanthrope() {
  return this;
};

makeMonster.zombie = function zombie() {
  return this;
};

makeMonster.skeleton = function skeleton() {
  return this;
};

makeMonster.vampire = function vampire() {
  return this;
};

makeMonster.animal = function animal() {
  return this;
};

makeMonster.blob = function blob() {
  return this;
};

makeMonster.animalHybrid = function animalHybrid() {
  return this;
};

makeMonster.animalPeople = function animalPeople() {
  return this;
};

makeMonster.bandit = function bandit() {
  return this;
};

makeMonster.dragon = function dragon() {
  return this;
};

makeMonster.ghost = function ghost() {
  return this;
};

// Generate a monster
exports.monster = function(level) {
  return makeMonster(level);
};
