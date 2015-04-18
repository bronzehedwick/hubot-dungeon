module.exports = function(robot) {
  var startingCharacter = require('./data/starting/character.json'),
      make = require('./includes/make.js');

  return robot.respond(/dungeon me/i, function(msg) {
    var character = startingCharacter,
        weapon = make.weapon(0),
        armor = make.armor(0),
        hat = make.hat(0),
        boots = make.boots(0),
        ring = make.ring(0),
        level = robot.brain.get('level');

    // Check if the user is already created a character
    if (robot.brain.get(msg.message.user.name) !== null) {
      return msg.reply('You are already in the dungeon');
    }

    // Set the dungeon level if it doesn't already exist
    if (level === null) {
      robot.brain.set('level', 1);
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

    // Inform the chat what happened
    return msg.send(msg.message.user.name + ' has entered the dungeon');
  });

};
