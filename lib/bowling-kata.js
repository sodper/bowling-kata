/*
 * bowling-kata
 * https://github.com/sodper/bowling-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

var toArray = function(string) {
	var array = [];
	for (var i = 0, l = string.length; i < l; i++) {
		array.push(string[i]);
	}
	return array;
};

var peekScore = function(frames) {
	var toss = frames[0];
	if (toss === '-') {
		return 0;
	} else if (/[1-9]/.test(toss)) {
		return parseInt(toss, 10);
	}
};

exports.score = function(input) {
	var frames = toArray(input),
		score = 0,
		toss = '',
		prevToss = '',
		tossScore,
		bonusToss;

	while (frames.length > 0) {
		tossScore = 0;
		bonusToss = (frames.length === 1 && input.length > 20);
		toss = frames.shift();

		if (bonusToss) {
			break;
		}

		if (toss === '-') {
			continue;
		} else if (/[1-9]/.test(toss)) {
			tossScore = parseInt(toss, 10);
		} else if (/\//.test(toss)) {
			tossScore = (10 - parseInt(prevToss, 10)) + peekScore(frames);
		}
		
		score += tossScore;
		prevToss = toss;
	}
	return score;
};