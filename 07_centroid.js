var turf = require('turf');
var fs = require('fs');
var state = fs.readFileSync('./data/karnataka.geojson');
state = JSON.parse(state);
centroid = turf.centroid(state);
console.log(centroid);
