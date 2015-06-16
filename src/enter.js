module.exports = function(robot) {
  var startingCharacter = require('./data/starting_character.json'),
      make = require('./includes/make.js'),
      initRoom = require('./includes/init_room.js');

  var rooms = robot.brain.get('rooms');

  return robot.respond(/dungeon me/i, function(msg) {
    // Set the dungeon level if it doesn't already exist
    var level = robot.brain.get('level');
    if (level === null) {
      robot.brain.set('level', 1);
      level = 1;
    }

    // Generate the default stats and equipment
    var character = startingCharacter,
        weapon = make.weapon(level),
        armor = make.armor(level),
        hat = make.hat(level),
        boots = make.boots(level),
        ring = make.ring(level);

    // Check if the user is already created a character
    if (robot.brain.get(msg.message.user.name) !== null) {
      return msg.reply('You are already in the dungeon');
    }

    // Set the inital stats
    character.name = msg.message.user.name;
    character.inventory[weapon.name.toLowerCase().replace(/ /g, '_')] = weapon;
    character.inventory[armor.name.toLowerCase().replace(/ /g, '_')] = armor;
    character.inventory[hat.name.toLowerCase().replace(/ /g, '_')] = hat;
    character.inventory[boots.name.toLowerCase().replace(/ /g, '_')] = boots;
    character.inventory[ring.name.toLowerCase().replace(/ /g, '_')] = ring;

    // Save the character
    robot.brain.set(msg.message.user.name, character);

    // Set the rooms statistics if they don't exist
    if (rooms === null) {
      robot.brain.set('rooms', initRoom());
    }

    // Inform the chat what happened
    return msg.send(msg.message.user.name + ' has entered the dungeon');
  });

};
