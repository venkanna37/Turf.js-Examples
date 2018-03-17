var turf = require('turf');
var fs = require('fs');
var point = fs.readFileSync('./data/point1.geojson');
point = JSON.parse(point);
point = point.features[0].geometry.coordinates;
var distance = 100;
var bearing = 100;
var destination = turf.destination(point,distance,bearing);
console.log(destination);
