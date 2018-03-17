var turf = require('turf');
var fs = require('fs');
var line = fs.readFileSync('./data/line.geojson');
line = JSON.parse(line);
var length = turf.Length(line);
console.log(length);
