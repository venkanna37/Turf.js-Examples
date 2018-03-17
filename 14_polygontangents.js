var turf = require('turf');
var fs = require('fs');
var state = fs.readFileSync('./data/karnataka.geojson');
var point = fs.readFileSync('./data/point1.geojson');
point = JSON.parse(point);
state = JSON.parse(state);
var tangent = turf.polygonTangents(point,state);
console.log(tangent);
