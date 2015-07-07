module.exports = function(robot) {
  var utils = require('./includes/utils.js');

  return robot.hear(/how deep/i, function(msg) {
    var level = robot.brain.get('level');

    // Check if the user is already created a character
    if (robot.brain.get(msg.message.user.name) === null) {
      return msg.reply('You\'re not in the dungeon yet!');
    }

    // Return the dungeon level
    return msg.send('You\'re party is ' + level + ' ' + utils.pluralize('level', level) + ' deep in the dungeon');
  });

};
