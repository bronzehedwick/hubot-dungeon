module.exports = function(robot) {

  return robot.respond(/look/i, function(msg) {
    var rooms = robot.brain.get('rooms');

    // Check if the user is already created a character
    if (robot.brain.get(msg.message.user.name) === null) {
      return msg.reply('You\'re not in the dungeon yet!');
    }

    // Return the dungeon level
    return msg.send(rooms.description);
  });

};
