var random = require('./random.js'),
    utils = require('./utils.js');

function makeMonster(level) {
  var types = require('../data/monster_types.json'),
      type = types[random(0, types.length)];

  var monster = {
    'name': utils.capitalizeFirstLetter(type),
    'level': level,
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
  if (typeof makeMonster[type] === 'function') {
    return makeMonster[type].call(monster);
  }

  return monster;
}

makeMonster.fairy = function fairy() {
  if (random(1, 100) === 100) {
    this.name = 'Leprechaun';
  }

  return this;
};

makeMonster.lycanthrope = function lycanthrope() {
  var animals = require('../data/animals.json');

  this.name = 'Were' + animals[random(0, animals.length)].toLowerCase();

  return this;
};

makeMonster.zombie = function zombie() {
  var genders = require('../data/genders.json'),
      relationships = require('../data/relationships.json');

  var gender = genders[random(0, genders.length)],
      relationship = relationships[gender][random(0, relationships[gender].length)],
      relationNames;

  if (relationship !== 'Mom' || relationship !== 'Dad') {
    gender = (gender === 'either' ? genders[random(0, 1)] : gender);
    relationNames = require('../data/names_' + gender);
    relationship = relationship + ' ' + relationNames[random(0, relationNames.length)];
  }

  this.name = 'Zombie that used to be your ' + relationship;

  return this;
};

makeMonster.animal = function animal() {
  var animals = require('../data/animals.json');

  this.name = 'Angery ' + animals[random(0, animals.length)];

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

makeMonster.dragon = function dragon() {
  var colors = require('../data/colors.json');

  this.name = utils.capitalizeFirstLetter(colors[random(0, colors.length)]) + ' Dragon';

  return this;
};

makeMonster.dinosaur = function dinosaur() {
  var dinosaurs = require('../data/dinosaurs.json');

  this.name = dinosaurs[random(0, dinosaurs.length)];

  return this;
};

makeMonster.plant = function plant() {
  var plants = require('../data/plants.json');

  this.name = plants[random(0, plants.length)];

  return this;
};

// Generate a monster
exports.monster = function(level) {
  return makeMonster(level);
};
