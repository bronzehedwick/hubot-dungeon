module.exports = function(robot) {
  var pluralize = require('./includes/pluralize.js');

  return robot.respond(/how deep/i, function(msg) {
    var level = robot.brain.get('level');

    // Check if the user is already created a character
    if (robot.brain.get(msg.message.user.name) === null) {
      return msg.reply('You\'re not in the dungeon yet!');
    }

    // Return the dungeon level
    return msg.send('You\'re party is ' + level + ' ' + pluralize('level', level)  + ' deep in the dungeon');
  });

};
