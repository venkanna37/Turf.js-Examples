// Importing turf module
var turf = require('turf');
//Importing file system module, it allows working with file system on computer
var fs = require('fs');
// getting geojson file from data folder using file system module
var line = fs.readFileSync('./data/line.geojson');
// converting geojson to JSON
line = JSON.parse(line);
//getting coordinates from JSON
var turfLine = turf.lineString(line.features[0].geometry.coordinates);
var along = turf.along(turfLine, 200);
console.log(along);
