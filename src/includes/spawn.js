var random = require('./random.js'),
    utils = require('./utils.js');

function makeMonster(level) {
  var types = require('../data/monster_types.json');

  var monster = {
    'name': 'Monster',
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
  this.name = 'Goblin';

  return this;
};

makeMonster.fairy = function fairy() {
  this.name = 'Fairy';

  return this;
};

makeMonster.lycanthrope = function lycanthrope() {
  var animals = require('../data/animals.json');

  this.name = 'Were' + animals[random(0, animals.length)].toLowerCase();

  return this;
};

makeMonster.zombie = function zombie() {
  this.name = 'Zombie';

  return this;
};

makeMonster.skeleton = function skeleton() {
  this.name = 'Skeleton';

  return this;
};

makeMonster.vampire = function vampire() {
  this.name = 'Vampire';

  return this;
};

makeMonster.animal = function animal() {
  var animals = require('../data/animals.json');

  this.name = animals[random(0, animals.length)];

  return this;
};

makeMonster.blob = function blob() {
  var colors = require('../data/colors.json');

  this.name = utils.capitalizeFirstLetter(colors[random(0, colors.length)]) + ' Ooze';

  return this;
};

makeMonster.animalHybrid = function animalHybrid() {
  var animals = require('../data/animals.json'),
      bodyParts = require('../data/body_parts.json');

  this.name = 'Creature with the ' + bodyParts[random(0, bodyParts.length)] + ' of a ' + animals[random(0, animals.length)] + ' and the ' + bodyParts[random(0, bodyParts.length)] + ' of a ' + animals[random(0, animals.length)];

  return this;
};

makeMonster.animalPeople = function animalPeople() {
  var animals = require('../data/animals.json');

  this.name = 'Anthropomorphic ' + animals[random(0, animals.length)];

  return this;
};

makeMonster.bandit = function bandit() {
  this.name = 'Bandit';

  return this;
};

makeMonster.dragon = function dragon() {
  var colors = require('../data/colors.json');

  this.name = utils.capitalizeFirstLetter(colors[random(0, colors.length)]) + ' Dragon';

  return this;
};

makeMonster.ghost = function ghost() {
  this.name = 'Ghost';

  return this;
};

// Generate a monster
exports.monster = function(level) {
  return makeMonster(level);
};
