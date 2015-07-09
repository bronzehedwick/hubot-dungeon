module.exports = function(robot) {

  return robot.enter(function(res) {
    console.log(res);
    process.env.HUBOT_DUNGEON_NUM_PLAYERS = (process.env.DUNGEON_NUM_PLAYERS ? process.env.HUBOT_DUNGEON_NUM_PLAYERS + 1 : 1);
    console.log(process);
  });

};
