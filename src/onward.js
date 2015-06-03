module.exports = function(robot) {

  return robot.respond(/onward/i, function(msg) {
    var rooms = robot.brain.get('rooms');

    // Check if the user has created a character
    if (robot.brain.get(msg.message.user.name) === null) {
      return msg.reply('You\'re not in the dungeon yet!');
    }

    // Check if the user is in a fight
    if (robot.brain.get('mode') === 'fight') {
      return msg.reply('You can\'t move on until you defeat the monster.');
    }

    // If this is the last room on this level,
    // Increase the dungeon level and reset the room statistics
    if (rooms.current === rooms.max) {
      var level = robot.brain.get('level');
      robot.brain.set('rooms', initRoomStats());
      robot.brain.set('level', level + 1);

      return msg.send('Your party finds a staircase leading down, and you decend deeper into the dungeon.');
    }

    // Move to the next room
    rooms.current = rooms.current + 1;
    robot.brain.set('rooms', rooms);

    return msg.send('The party moves deeper into the dungeon.');
  });

};
