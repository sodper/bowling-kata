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
	var frameIndex = 0;
	for (var frame = 0; frame < 10; frame++) {
		if (this._isStrike(frameIndex)) {
			score += 10 + this._strikeBonus(frameIndex);
			frameIndex++;
		} else if (this._isSpare(frameIndex)) {
			score += 10 + this._spareBonus(frameIndex);
			frameIndex += 2;
		} else {
			score += this._sumOfBallsInFrame(frameIndex);
			frameIndex += 2;
		}
	}
	return score;
};

BowlingGame.prototype._isSpare = function(frameIndex) {
	return (this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10);
};

BowlingGame.prototype._spareBonus = function(frameIndex) {
	return this._rolls[frameIndex + 2];
};

BowlingGame.prototype._sumOfBallsInFrame = function(frameIndex) {
	return this._rolls[frameIndex] + this._rolls[frameIndex + 1];
};

BowlingGame.prototype._isStrike = function(frameIndex) {
	return (this._rolls[frameIndex] === 10);
};

BowlingGame.prototype._strikeBonus = function(frameIndex) {
	return this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
};

// var Frame = function () {};
// Frame.prototype.score = function() {};

// var Roll = function() {};

exports.Game = BowlingGame;