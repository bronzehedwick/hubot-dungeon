module.exports = function(robot) {

  return robot.respond(/onward/i, function(msg) {
    var initRoom = require('./includes/init_room.js'),
        spawn = require('./includes/spawn.js');

    var rooms = robot.brain.get('rooms'),
        level = robot.brain.get('level');

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
      robot.brain.set('rooms', initRoom());
      robot.brain.set('level', level + 1);

      return msg.send('Your party finds a staircase leading down, and you decend deeper into the dungeon.');
    }

    // Move to the next room
    rooms.current = rooms.current + 1;
    robot.brain.set('rooms', rooms);

    var monster = spawn.monster(level);
    console.log(monster.name);

    return msg.send('The party moves deeper into the dungeon. Also, there is a ' + monster.name);
  });

};
