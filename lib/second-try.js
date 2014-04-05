/*
 * second-try
 * https://github.com/sodper/bowling-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

var BowlingGame = function () {
	this._rolls = [];
	this._currentRoll = 0;
};

BowlingGame.prototype.roll = function(pins) {
	this._rolls[this._currentRoll++] = pins;
};

BowlingGame.prototype.score = function() {
	var score = 0;
	this._rolls.forEach(function(roll) {
		score += roll;
	});
	return score;
};

var Frame = function () {};
Frame.prototype.score = function() {};

var Roll = function() {};

exports.Game = BowlingGame;