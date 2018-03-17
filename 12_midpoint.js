var turf = require('turf');
var fs = require('fs');
var point1 = fs.readFileSync('./data/point1.geojson');
var point2 = fs.readFileSync('./data/point2.geojson');
point1 = JSON.parse(point1);
point2 = JSON.parse(point2);
point1 = point1.features[0].geometry.coordinates;
point2 = point2.features[0].geometry.coordinates;
var midpoint = turf.midpoint(point1,point2);
console.log(midpoint);
