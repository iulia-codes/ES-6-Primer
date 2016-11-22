"use strict";
(function() {
  var lat = 47.070606;
  var lon = 15.4345208;
  var normalNull = 359;
  var pos = {
    lat: lat,
    lon: lon,
    normalNull: normalNull
  };
  var posPrinter = {print: function(p) {
      console.log(("lat=" + pos.lat + " lon=" + pos.lon + " normalNull=" + pos.normalNull));
    }};
  posPrinter.print(pos);
}());
(function() {
  var lat = 47.070606;
  var lon = 15.4345208;
  var normalNull = 359;
  var pos = {
    lat: lat,
    lon: lon,
    normalNull: normalNull
  };
  var posPrinter = {print: function(p) {
      console.log(("lat=" + pos.lat + " lon=" + pos.lon + " normalNull=" + pos.normalNull));
    }};
  posPrinter.print(pos);
}());
