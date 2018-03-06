var turf = require('@turf/turf');

var feature = {
  "type": "FeatureCollection",
  "properties": {
    "result:location_changed": 0.12678764101667986,
    "result:significant_tag": true,
    "result:count_tag": 8
  },
  "features": [
    {
      "type": "Feature",
      "id": "way!110041164!3",
      "properties": {
        "highway": "motorway",
        "name": "日本海東北自動車道",
        "oneway": "no",
        "source": "YahooJapan/ALPSMAP",
        "osm:type": "way",
        "osm:id": 110041164,
        "osm:version": 3,
        "osm:changeset": 37949901,
        "osm:timestamp": 1458452022000,
        "osm:uid": 2392788,
        "osm:user": "shakingnine"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            139.8028061,
            38.8174395
          ],
          [
            139.8025477,
            38.8189558
          ],
          [
            139.8024254,
            38.8200311
          ],
          [
            139.802359,
            38.821112
          ],
          [
            139.8023536,
            38.822193
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way!110041164!2",
      "properties": {
        "name": "山形自動車道",
        "oneway": "no",
        "source": "YahooJapan/ALPSMAP",
        "highway": "motorway",
        "yh:TYPE": "高速自動車国道",
        "yh:WIDTH": "13.0m以上",
        "yh:LINE_NUM": "1020",
        "yh:LINE_NAME": "山形自動車道",
        "yh:STRUCTURE": "地上",
        "yh:TOTYUMONO": "供用中",
        "yh:WIDTH_RANK": "1",
        "osm:type": "way",
        "osm:id": 110041164,
        "osm:version": 2,
        "osm:changeset": 13605457,
        "osm:timestamp": 1350999648000,
        "osm:uid": 699554,
        "osm:user": "7dhd"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            139.8028061,
            38.8174395
          ],
          [
            139.8025477,
            38.8189558
          ],
          [
            139.8024254,
            38.8200311
          ]
        ]
      }
    }
  ]
}
// console.log(feature.features[0]);
var length = turf.length(feature.features[0], {units: 'kilometers'});
console.log(length);
