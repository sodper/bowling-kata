'use strict';

var bowling = require('../lib/bowling-kata.js');

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

var testScore = function(test, input, expected) {
  test.expect(1);
  test.equal(bowling.score(input), expected);
  test.done();
};

exports.point = {
  'all misses returns 0': function(test) {
    testScore(test, '--------------------', 0);
  },
  'all misses but one': function(test) {
    testScore(test, '9-------------------', 9);
  },
  'all points and misses': function(test) {
    testScore(test, '9-9-9-9-9-9-9-9-9-9-', 90);
  },
};

exports.spare = {
  'spare followed by miss': function(test) {
    testScore(test, '5/-------------------', 10);
  },
  'spare followed by point': function(test) {
    testScore(test, '5/5------------------', 20);
  },
  'all spares and one bonus throw': function(test) {
    testScore(test, '5/5/5/5/5/5/5/5/5/5/5', 150);
  },
};

exports.strike = {
  'strike followed by miss': function(test) {
    testScore(test, 'X-------------------', 10);
  },
  'strike followed by one point': function(test) {
    testScore(test, 'X5------------------', 20);
  },
  'strike followed by two points': function(test) {
    testScore(test, 'X55-----------------', 30);
  },
  'strike followed by one strike': function(test) {
    testScore(test, 'XX----------------', 30);
  },
  'strike followed by one strike and two points': function(test) {
    testScore(test, 'XX55--------------', 55);
  },
  'all strikes (two bonus rounds)': function(test) {
    testScore(test, 'XXXXXXXXXXXX', 300);
  },
};
