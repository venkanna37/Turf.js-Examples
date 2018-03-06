var turf = require('turf');
var fs = require('fs');
var line = fs.readFileSync('./data/line.geojson');
line = JSON.parse(line);
//var turfLine = turf.lineString(line.features[2].coordinates);
var alongOfLine = turf.along(line,200);
