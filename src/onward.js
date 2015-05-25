module.exports = function(robot) {
  var random = require('./includes/random.js');

  // Generate initial room statistics
  function initRoomStats() {
    return {
      'current': 1,
      'max': random(1, 5) + 5,
      'description': 'This bare chamber echos with unfinished emptiness.'
    };
  }

  return robot.respond(/onward/i, function(msg) {
    // Check if the user has created a character
    if (robot.brain.get(msg.message.user.name) === null) {
      return msg.reply('You\'re not in the dungeon yet!');
    }

    // Set the rooms statistics if the don't exist
    var rooms = robot.brain.get('rooms');
    if (rooms === null) {
      robot.brain.set('rooms', initRoomStats());
      rooms = robot.brain.get('rooms');
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

    console.log(robot.brain.get('rooms'));
    return msg.send('The party moves deeper into the dungeon.');
  });

};
