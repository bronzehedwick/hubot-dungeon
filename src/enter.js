module.exports = function(robot) {
  var startingCharacter = require('./data/starting/character.json'),
      make = require('./includes/make.js');

  return robot.respond(/dungeon me/i, function(msg) {
    var character = startingCharacter,
        weapon = make.weapon(0),
        armor = make.armor(0);

    // Check if the user is already created a character
    if (robot.brain.get(msg.message.user.name) !== null) {
      return msg.reply('You are already in the dungeon');
    }

    // Set the inital stats
    character.name = msg.message.user.name;
    character.inventory[weapon.name.toLowerCase().replace(/ /g, '_')] = weapon;
    //console.log(character.inventory);
    character.inventory[armor.name.toLowerCase().replace(/ /g, '_')] = armor;
    //console.log(character.inventory);

    // Save
    robot.brain.set(msg.message.user.name, character);

    return msg.send(msg.message.user.name + ' has entered the dungeon');
  });

};
