(function() {
  module.exports = function(robot) {

    return robot.respond(/dungeon me/i, function(msg) {
      var character = {
        'name': msg.message.user.name,
        'muscularity': '1',
        'agilosity': '1',
        'toughstitution': '1',
        'luckification': '1',
        'healthMax': '10',
        'healthCurrent': '10',
        'weapon': {
          'name': 'Dumb Sword',
          'attack': '0'
        },
        'armor': {
          'name': 'Moldy leather',
          'defense': '0'
        },
        'hat': {
          'name': 'Stupid cap'
        },
        'boots': {
          'name': 'Cracked sandles'
        },
        'gold': '0'
      };

      robot.brain.set(msg.message.user.name, character);

      return msg.send(msg.message.user.name + ' has entered the dungeon');
    });

  };
}).call(this);
