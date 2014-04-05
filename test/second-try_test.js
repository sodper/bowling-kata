'use strict';

var bowling = require('../lib/second-try.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var game;

var rollMany = function(n, pins) {
  for (var i = 0; i < n; i++) {
      game.roll(pins);
  }
};

var rollSpare = function() {
  game.roll(5);
  game.roll(5);
};

exports.setUp = function(callback) {
  game = new bowling.Game();
  callback();
};

exports.score = {
  'all misses': function(test) {
    test.expect(1);

    rollMany(20, 0);

    test.equal(game.score(), 0);
    test.done();
  },
  'one pin on each roll': function(test) {
    test.expect(1);

    rollMany(20, 1);

    test.equal(game.score(), 20);
    test.done();
  },
  'one spare': function(test) {
    test.expect(1);

    rollSpare();
    game.roll(3);
    rollMany(17, 0);

    test.equal(game.score(), 16);
    test.done();
  },
  'one strike': function(test) {
    test.expect(1);

    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);

    test.equal(game.score(), 24);
    test.done();
  },
};
