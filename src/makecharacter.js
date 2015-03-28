(function() {
  module.exports = function(robot) {
    //var playerClass = message.split( '!makecharacter' )[1].trim().toLowerCase();
    //var classes = require('data/classes.json');

    return robot.respond(/class/i, function(msg) {
      return msg.send('Well fuuuuuck you!');
    });

    //if ( classes.hasOwnProperty( playerClass ) ) {
      //// Success! Create the new character
      //var character = {
        //_id: from,
        //class: playerClass,
        //muscularity: classes[playerClass].muscularity,
        //agilosity: classes[playerClass].agilosity,
        //toughstitution: classes[playerClass].toughstitution,
        //luckification: classes[playerClass].luckification,
        //passivepower: classes[playerClass].passivepower,
        //activepower: classes[playerClass].activepower,
        //weapon: classes[playerClass].weapon,
        //armor: classes[playerClass].armor,
        //equipment: classes[playerClass].equipment,
        //gold: '0'
      //};

      //// Save the new character
      //db.insert( character, function( err, newDoc ) {
        //if ( err ) {
          //if ( err.errorType === 'uniqueViolated' ) {
            //// We use the nick as the db key to enforce one character per nick
            //client.say( options.channel, from + ', you already have a character!' );
          //}
          //else {
            //throw err;
          //}
        //}
        //else {
          //client.say(options.channel, from + ' is playing a ' + playerClass);
        //}
      //});
    //}
    //else {
      //// The idiot picked a non-existant class.
      //client.say(options.channel, 'Choose a real class, ' + from + '. Come one.');
    //}
  };

}).call(this);
