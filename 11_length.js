var turf = require('@turf/turf');
var fs = require('fs');
var line = fs.readFileSync('./data/line.geojson');
line = JSON.parse(line);
var length = turf.length(line);
console.log(length);
