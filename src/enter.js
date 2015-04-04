module.exports = function(robot) {
  var startingCharacter = require('./data/starting/character.json'),
      weapon = require('./includes/weapon.js');

  return robot.respond(/dungeon me/i, function(msg) {
    var character = startingCharacter;

    // Check if the user is already created a character
    if (robot.brain.get(msg.message.user.name) !== null) {
      return msg.reply('You are already in the dungeon');
    }

    // Set the inital stats
    character.name = msg.message.user.name;
    character.equipped.weapon.name = weapon.name(0);

    // Save
    robot.brain.set(msg.message.user.name, character);

    return msg.send(msg.message.user.name + ' has entered the dungeon');
  });

};
