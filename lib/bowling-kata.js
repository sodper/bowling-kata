/*
 * bowling-kata
 * https://github.com/sodper/bowling-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

var miss = /-/,
	point = /\d/,
	spare = /\//,
	strike = /X/;

var toArray = function(string) {
	var array = [];
	for (var i = 0, l = string.length; i < l; i++) {
		array.push(string[i]);
	}
	return array;
};

var isBonusToss = function(frameCount) {
	return (frameCount >= 10);
};

var getScore = function(toss) {
	if (miss.test(toss)) {
		return 0;
	}
	if (point.test(toss)) {
		return parseInt(toss, 10);
	}
	if (strike.test(toss)) {
		return 10;
	}
};

var frameScore = function(frames) {
	var firstToss = frames.shift(),
		secondToss,
		firstTossScore = getScore(firstToss);
	
	// no second toss on strike
	if (strike.test(firstToss)) {
		return 10 + getScore(frames[0]) + getScore(frames[1]);
	}

	secondToss = frames.shift();
	if (miss.test(secondToss)) {
		return firstTossScore;
	}
	if (point.test(secondToss)) {
		return firstTossScore + getScore(secondToss);
	}
	if (spare.test(secondToss)) {
		return 10 + getScore(frames[0]);
	}
};

exports.score = function(input) {
	var frames = toArray(input),
		score = 0,
		frameCount = 0;

	while (frames.length > 0) {

		if (isBonusToss(frameCount)) {
			break;
		}
		
		score += frameScore(frames);
		frameCount++;
	}

	return score;
};