module.exports = function(robot) {

  return robot.hear('/inventory/i', function(msg) {
    var character = robot.brain.get(msg.message.user.name),
        argument = msg.message.text.split(' ');

    // Make sure the user has a character to print inventory for
    if (character === null) {
      return msg.send(msg.message.user.name + ' must enter the dungeon first');
    }

    // Check if user only wants to print equipped items
    if (argument.length === 3 && argument[2] === 'equipped') {
      for (var eqItem in character.inventory) {
        if (character.inventory.hasOwnProperty(eqItem) && character.inventory[eqItem].equipped) {
          msg.reply(character.inventory[eqItem].name);
        }
      }

      return true;
    }

    // Print all inventory items
    for (var item in character.inventory) {
      if (character.inventory.hasOwnProperty(item)) {
        msg.reply(character.inventory[item].name);
      }
    }

    return true;
  });

};
