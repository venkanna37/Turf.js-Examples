var turf = require('@turf/turf');
var fs = require('fs');
var pt = turf.point([0, 0]);
var line = turf.lineString([[1, 1],[-1, 1]]);
var distance = turf.pointToLineDistance(pt, line);
console.log(distance);
