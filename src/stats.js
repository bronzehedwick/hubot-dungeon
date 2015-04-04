(function Stats() {
  module.exports = function(robot) {

    return robot.respond('/stats/i', function(msg) {
      var character = robot.brain.get(msg.message.user.name);

      // Make sure the user has a character to print stats for
      if (character === null) {
        return msg.send(msg.message.user.name + ' must enter the dungeon first');
      }

      for (var stat in character) {
        if (character.hasOwnProperty(stat)) {
          if (stat !== 'name') {
            msg.reply(stat + ' = ' + character[stat]);
          }
        }
      }

      return true;
    });

  };
}());
