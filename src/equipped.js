module.exports = function(robot) {

  return robot.respond('/equipped/i', function(msg) {
    var character = robot.brain.get(msg.message.user.name);

    // Make sure the user has a character to print equippment for
    if (character === null) {
      return msg.send(msg.message.user.name + ' must enter the dungeon first');
    }

    for (var item in character.equipped) {
      if (character.equipped.hasOwnProperty(item)) {
        if (character.equipped[item].name !== '') {
          msg.reply(item + ': ' + character.equipped[item].name);
        }
      }
    }

    return true;
  });

};
