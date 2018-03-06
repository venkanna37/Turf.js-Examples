var rp = require('request-promise-native');

var url = 'https://www.openstreetmap.org/api/0.6/relation/2255830';
var xml2json = require('xml-json-convert');
rp(url).then((res) => {
  // console.log(res);
  // var json = xml2json(res);
  console.log(res);
 });

// function fetchFeature(url) {
//   return rp(url);
// }
