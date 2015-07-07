/* jshint browser: false, node: true */
/* globals describe, beforeEach, afterEach, it */
var expect = require('chai').expect,
    TextMessage = require('hubot/src/message').TextMessage,
    helper = require('hubot-mock-adapter-helper');

describe('Dungeonbot, the dungeon crawling robot', function() {
  var _ref = {},
      robot = _ref.robot,
      user = _ref.user,
      adapter = _ref.adapter;

  beforeEach(function(done) {

    return helper.setupRobot(function(ret) {
      robot = ret.robot;
      user = ret.user;
      adapter = ret.adapter;

      return done();
    });

  });

  afterEach(function() {
    return robot.shutdown();
  });

  return it('enters the dungeon', function(done) {

    adapter.on('reply', function(envelope, strings) {
      expect(envelope.user.name).to.equal('mocha');

      return expect(strings[0]).to.include('has entered the dungeon');
    }, done);

    return adapter.receive(new TextMessage(user, 'dungeon me'));
  });
});
