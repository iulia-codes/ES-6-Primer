"use strict";

//ES5

(function () {
	var coords = [47.070606, 15.4345208, 359];
	var lat = coords[1];
	var len = coords[2];
	//https://en.wikipedia.org/wiki/Normalnull
	//Normalnull ("standard zero") or Normal-Null (short N. N. or NN ) is an outdated official vertical datum used in Germany. 
	//Elevations using this reference system were to be marked "Meter über Normal-Null" (“meters above standard zero”). 
	//Normalnull has been replaced by Normalhöhennull (short NHN).
	var normalNull = coords[3];

	console.log("lat=" + lat + " lan = " + len + " normalNull = " + normalNull);
})();

//ES6
(function () {

	var coords = [47.070606, 15.4345208, 359];

	//in this case, we have used a destructing construction
	//all the three vars are now assembled into an array
	var [lat, lon, normalNull] = coords;
})();