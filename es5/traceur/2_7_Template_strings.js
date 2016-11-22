"use strict";
(function() {
  var $__2,
      $__3;
  var coords = [47.070606, 15.4345208, 359];
  var $__1 = coords,
      lat = ($__2 = $__1[Symbol.iterator](), ($__3 = $__2.next()).done ? void 0 : $__3.value),
      lon = ($__3 = $__2.next()).done ? void 0 : $__3.value,
      normalNull = ($__3 = $__2.next()).done ? void 0 : $__3.value;
  console.log("lat=" + lat + " lan = " + lon + " normalNull = " + normalNull);
}());
(function() {
  var $__2,
      $__3;
  var coords = [47.070606, 15.4345208, 359];
  var $__1 = coords,
      lat = ($__2 = $__1[Symbol.iterator](), ($__3 = $__2.next()).done ? void 0 : $__3.value),
      lon = ($__3 = $__2.next()).done ? void 0 : $__3.value,
      normalNull = ($__3 = $__2.next()).done ? void 0 : $__3.value;
  console.log(("lat=" + lat + " lan=" + lon + " normalNull=" + normalNull));
}());
(function() {
  var coords = [47.070606, 15.4345208, 359];
  var k = {
    lat: 47.070606,
    lon: 15.4345208,
    normalNull: 359
  };
  console.log(("lat=" + k.lat + " lan=" + k.lon + " normalNull=" + k.normalNull));
}());
