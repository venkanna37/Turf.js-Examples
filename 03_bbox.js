var turf = require('turf');
var fs =require('fs');
var line = fs.readFileSync('./data/line.geojson');
line = JSON.parse(line);
line = turf.lineString(line.features[0].geometry.coordinates);
bbox = turf.bbox(line);
bbox_polygon = turf.bboxPolygon(bbox);
console.log(bbox);
console.log(bbox_polygon);
fs.writeFileSync('./output/bbox.geojson',JSON.stringify(bbox_polygon));
