module.exports = function(robot) {

  return robot.respond('/inventory/i', function(msg) {
    var character = robot.brain.get(msg.message.user.name);

    // Make sure the user has a character to print inventory for
    if (character === null) {
      return msg.send(msg.message.user.name + ' must enter the dungeon first');
    }

    for (var item in character.inventory) {
      if (character.inventory.hasOwnProperty(item)) {
        msg.reply(character.inventory[item].name);
      }
    }

    return true;
  });

};
