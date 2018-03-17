var turf = require('turf');
var fs = require ('fs');
var bbox = [-71.6497,41.434,-70.4443,42.8886];
var cellSide = 10;
//var options = {units: 'kelometers'};
var hexagrid = turf.hexGrid(bbox, cellSide );
fs.writeFileSync('./boston_hexaGrid.geojson', JSON.stringify(hexagrid));
