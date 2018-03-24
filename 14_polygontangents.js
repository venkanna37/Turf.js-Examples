var turf = require('@turf/turf');
var fs = require('fs');
var polygon = turf.polygon([[[11, 0], [22, 4], [31, 0], [31, 11], [21, 15], [11, 11], [11, 0]]]);
var point = turf.point([61, 5]);

var tangents = turf.polygonTangents(point, polygon)

console.log(tangents);
fs.writeFileSync('./output/tangents,geojson', JSON.stringify(tangents));
