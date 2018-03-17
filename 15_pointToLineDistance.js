var turf = require('turf');
var fs = require('fs');
var line = fs.readFileSync('./data/line.geojson');
var point = fs.readFileSync('./data/point1.geojson');
line = JSON.parse(line);
point = JSON.parse(point);
var ptl = turf.pointToLineDistance(point,line);
console.log(ptl);
