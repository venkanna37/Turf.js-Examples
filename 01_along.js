var turf = require('turf');
var fs = require('fs');
var line = fs.readFileSync('./data/line.geojson');
line = JSON.parse(line);
var turfLine = turf.lineString(line.features[0].geometry.coordinates);
var along = turf.along(turfLine, 200);
console.log(along);
