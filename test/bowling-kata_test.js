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

exports.score = {
  'all misses returns 0': function(test) {
    test.expect(1);
    test.equal(bowling.score('--------------------'), 0);
    test.done();
  },
  'all misses but one': function(test) {
    test.expect(1);
    test.equal(bowling.score('9-------------------'), 9);
    test.done();
  },
  'all points and misses': function(test) {
    test.expect(1);
    test.equal(bowling.score('9-9-9-9-9-9-9-9-9-9-'), 90);
    test.done();
  },
  'spare followed by miss': function(test) {
    test.expect(1);
    test.equal(bowling.score('5/-------------------'), 10);
    test.done();
  },
  'spare followed by point': function(test) {
    test.expect(1);
    test.equal(bowling.score('5/5------------------'), 20);
    test.done();
  },
  'all spares and one bonus throw': function(test) {
    test.expect(1);
    test.equal(bowling.score('5/5/5/5/5/5/5/5/5/5/5'), 150);
    test.done();
  },
  'strike followed by miss': function(test) {
    test.expect(1);
    test.equal(bowling.score('X-------------------'), 10);
    test.done();
  },
  'strike followed by one point': function(test) {
    test.expect(1);
    test.equal(bowling.score('X5------------------'), 20);
    test.done();
  },
  'strike followed by two points': function(test) {
    test.expect(1);
    test.equal(bowling.score('X55-----------------'), 30);
    test.done();
  },
  'strike followed by one strike': function(test) {
    test.expect(1);
    test.equal(bowling.score('XX----------------'), 30);
    test.done();
  },
  'strike followed by one strike and two points': function(test) {
    test.expect(1);
    test.equal(bowling.score('XX55--------------'), 55);
    test.done();
  },
};
