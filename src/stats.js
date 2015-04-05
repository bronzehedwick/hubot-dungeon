module.exports = function(robot) {

  return robot.respond('/stats/i', function(msg) {
    var character = robot.brain.get(msg.message.user.name),
        argument = msg.message.text.split(' ');

    // Make sure the user has a character to print stats for
    if (character === null) {
      return msg.send(msg.message.user.name + ' must enter the dungeon first');
    }

    // See if the user is asking for the stats of something specific
    if (argument.length === 3) {
      argument.splice(0, 2).toString().toLowerCase();

      return msg.reply(argument);
    }

    // Print out all stats
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
