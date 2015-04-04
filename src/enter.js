module.exports = function(robot) {
  var startingCharacter = require('./data/starting_character.json');

  return robot.respond(/dungeon me/i, function(msg) {
    var character = startingCharacter;
    character.name = msg.message.user.name;

    robot.brain.set(msg.message.user.name, character);

    return msg.send(msg.message.user.name + ' has entered the dungeon');
  });

};
