/*
 * bowling-kata
 * https://github.com/sodper/bowling-kata
 *
 * Copyright (c) 2014 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

var toArray = function (string) {
	var array = [];
	for (var i = 0, l = string.length; i < l; i++) {
		array.push(string[i]);
	}
	return array;
};

exports.score = function(input) {
	var frames = toArray(input),
		score = 0,
		frame = '';
	while (frames.length > 0) {
		frame = frames.shift();
		if (frame === '-') {
			continue;
		} else if (/\d/.test(frame)) {
			score = score + parseInt(frame, 10);
		}
	}
	return score;
};
