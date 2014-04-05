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

exports.score = {
  'all misses': function(test) {
    test.expect(1);

    var game = new bowling.Game();

    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }

    test.equal(game.score(), 0);
    test.done();
  }
};
