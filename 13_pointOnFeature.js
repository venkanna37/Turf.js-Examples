var turf = require('@turf/turf');
var fs = require('fs');
var state = fs.readFileSync('./data/karnataka.geojson');
state = JSON.parse(state);
var pointOnFeature = turf.pointOnFeature(state);
console.log(pointOnFeature);
