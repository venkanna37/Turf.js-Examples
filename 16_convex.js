var turf = require('turf');
var fs = require('fs');
var aoi = fs.readFileSync('./data/aoi.geojson');
aoi = JSON.parse(aoi);
var convexOfAoi = turf.convex(aoi);
fs.writeFileSync('./output/convex.geojson', JSON.stringify(convexOfAoi));
