var turf = require('turf');
var fs = require('fs');
var points = fs.readFileSync('./data/state_cap.geojson');
points = JSON.parse(points);
var envelope = turf.envelope(points);
console.log(JSON.stringify(envelope));
fs.writeFileSync('./output/envelop.geojson',JSON.stringify(envelope));
