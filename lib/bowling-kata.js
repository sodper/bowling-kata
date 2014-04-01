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

var getScore = function(toss) {
	if (miss.test(toss)) {
		return 0;
	} else if (point.test(toss)) {
		return parseInt(toss, 10);
	}
};

exports.score = function(input) {
	var frames = toArray(input),
		score = 0,
		toss = '',
		prevToss = '',
		tossScore = 0,
		bonusToss;

	while (frames.length > 0) {
		bonusToss = (frames.length === 1 && input.length > 20);
		toss = frames.shift();

		if (bonusToss) {
			break;
		}
		if (miss.test(toss)) {
			continue;
		}
		if (point.test(toss)) {
			tossScore = parseInt(toss, 10);
		}
		if (spare.test(toss)) {
			tossScore = (10 - parseInt(prevToss, 10)) + getScore(frames[0]);
		}
		if (strike.test(toss)) {
			tossScore = 10 + getScore(frames[0]) + getScore(frames[1]);
		}

		score += tossScore;
		prevToss = toss;
	}

	return score;
};