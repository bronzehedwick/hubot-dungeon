/* jshint browser: false, node: true */
/* globals describe, beforeEach, afterEach, it, Robot, TextMessage */
var path   = require('path'),
    chai   = require('chai'),
    expect = chai.expect;

var Robot       = require('hubot/src/robot'),
    TextMessage = require('hubot/src/message').TextMessage;

describe('Dungeonbot, the dungeon crawling robot', function() {
  var robot, user, adapter;

  beforeEach(function(done) {
    // create new robot, without http, using the mock adapter
    robot = new Robot(null, 'mock-adapter', false, 'dungeonbot');

    robot.adapter.on('connected', function() {
      // only load scripts we absolutely need, like auth.coffee
      //process.env.HUBOT_AUTH_ADMIN = '1';
      //robot.loadFile(
        //path.resolve(
          //path.join('node_modules/hubot/src/scripts')
        //),
        //'auth.coffee'
      //);

      // load the module under test and configure it for the
      // robot.  This is in place of external-scripts
      require('../index')(robot);

      // create a user
      user = robot.brain.userForId('1', {
        name: 'mocha',
        room: '#mocha'
      });

      adapter = robot.adapter;

      console.log('finishing beforeEach');
      done();
    });

    robot.run();
  });

  afterEach(function() {
    robot.shutdown();
  });

  it('enters the dungeon', function(done) {
    // here's where the magic happens!
    console.log('entering dungeon function');
    adapter.on('message', function(envelope, strings) {
      expect(strings[0]).to.include('has entered the dungeon');
      console.log('finishing reply');
      done();
    });

    console.log('about to send text to hubot');
    adapter.receive(new TextMessage(user, 'dungeon me'));
  });
});
