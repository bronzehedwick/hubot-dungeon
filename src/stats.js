module.exports = function(robot) {

  return robot.respond('/stats/i', function(msg) {
    var character = robot.brain.get(msg.message.user.name);

    // Make sure the user has a character to print stats for
    if (character === null) {
      return msg.send(msg.message.user.name + ' must enter the dungeon first');
    }

    for (var stat in character.stats) {
      if (character.stats.hasOwnProperty(stat)) {
        if (stat === 'health') {
          msg.reply(stat.charAt(0).toUpperCase() + stat.slice(1) + ' : ' + character.stats[stat].max + ' / ' + character.stats[stat].current);
        }
        else {
          msg.reply(stat.charAt(0).toUpperCase() + stat.slice(1) + ' bonus : ' + character.stats[stat]);
        }
      }
    }

    return true;
  });

};
