var turf = require('turf');
var fs = require('fs');
var state = fs.readFileSync('./data/karnataka.geojson');
state = JSON.parse(state);
var center = turf.center(state);
console.log(center);
