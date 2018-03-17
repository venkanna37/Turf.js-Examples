var turf = require('turf');
var fs = require('fs');
var state = fs.readFileSync('./data/karnataka.geojson');
state = JSON.parse(state);
var turfpolygon = turf.polygon(state.features[0].geometry.coordinates);
var area = turf.area(turfpolygon);
console.log(area/1000000 + "  km^2");
