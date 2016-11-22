"use strict";

//ES5

(function () {
	var coords = [47.070606, 15.4345208, 359];

	var [lat, lon, normalNull] = coords;

	console.log("lat=" + lat + " lan = " + lon + " normalNull = " + normalNull);
})();

//ES6
(function () {
	var coords = [47.070606, 15.4345208, 359];

	var [lat, lon, normalNull] = coords;

	console.log(`lat=${ lat } lan=${ lon } normalNull=${ normalNull }`);
})();