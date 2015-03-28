(function() {

  var Path = require('path');

  module.exports = function(robot) {
    var path = Path.resolve(__dirname, 'src');

    return robot.load(path);
  };

}).call(this);
