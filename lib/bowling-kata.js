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

exports.score = function(input) {
	var frames = toArray(input),
		score = 0,
		toss = '',
		prevToss = '',
		tossScore = 0,
		frameCount = 0;

	while (frames.length > 0) {
		tossScore = 0;
		toss = frames.shift();

		if (isBonusToss(frameCount)) {
			//console.log('bonus toss');
			break;
		}

		if (miss.test(toss)) {
			prevToss = toss;
			toss = frames.shift();
			
			if (miss.test(toss)) {
				frameCount++;
				//console.log([frameCount, 'miss', 'miss', tossScore]);
				continue;
			} else if (point.test(toss)) {
				tossScore = parseInt(toss, 10);
				frameCount++;
				//console.log([frameCount, 'miss', 'point', tossScore]);
			} else if (spare.test(toss)) {
				tossScore = (10 - parseInt(prevToss, 10)) + getScore(frames[0]);
				frameCount++;
				//console.log([frameCount, 'miss', 'spare', tossScore]);
			}
		} else if (point.test(toss)) {
			tossScore = parseInt(toss, 10);
			prevToss = toss;
			toss = frames.shift();
			
			if (miss.test(toss)) {
				frameCount++;
				//console.log([frameCount, 'point', 'miss', tossScore]);
			} else if (point.test(toss)) {
				tossScore += parseInt(toss, 10);
				frameCount++;
				//console.log([frameCount, 'point', 'point', tossScore]);
			} else if (spare.test(toss)) {
				tossScore += (10 - parseInt(prevToss, 10)) + getScore(frames[0]);
				frameCount++;
				//console.log([frameCount, 'point', 'spare', tossScore]);
			}
		} else if (strike.test(toss)) {
			tossScore = 10 + getScore(frames[0]) + getScore(frames[1]);
			frameCount++;
			//console.log([frameCount, 'strike', tossScore]);
		}
		//console.log([frameCount, tossScore]);
		score += tossScore;
		prevToss = toss;
	}

	return score;
};