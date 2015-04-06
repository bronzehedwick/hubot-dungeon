module.exports = function(robot) {

  return robot.respond('/stats/i', function(msg) {
    var character = robot.brain.get(msg.message.user.name),
        argument = msg.message.text.split(' '), item, statCount = 0;

    // Make sure the user has a character to print stats for
    if (character === null) {
      return msg.send(msg.message.user.name + ' must enter the dungeon first');
    }

    // See if the user is asking for the stats of something specific
    if (argument.length > 2) {
      argument.splice(0, 2);
      argument = argument.join('_').toLowerCase();
      item = character.inventory[argument];

      if (item === undefined) {
        return msg.reply('There is no item in your inventory by that name');
      }

      // If an item has a stat bonus, print it
      for (var itemStat in item.stats) {
        if (item.stats.hasOwnProperty(itemStat) && item.stats[itemStat] !== 0) {
          msg.reply(itemStat + ': ' + item.stats[itemStat]);
          statCount++;
        }
      }

      // Print a message if there are no stat bonuses
      if (statCount === 0) {
        msg.reply('It\'s nothing special');
      }

      return true;
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
