"use strict";

//ES5 

(function(){
	var lat =  47.070606;
	var lon =  15.4345208;
	var normalNull = 359;
	
	var pos = {
		lat: lat,
		lon: lon,
		normalNull: normalNull
	}
	//the position has a method print
	var posPrinter = {
		print: function(p)
		{
			console.log( `lat=${pos.lat} lon=${pos.lon} normalNull=${pos.normalNull}` );		
		}
	}

	posPrinter.print(pos);
	
}());

//ES6
(function(){
	var lat =  47.070606;
	var lon =  15.4345208;
	var normalNull = 359;
	
	var pos = { lat,lon,normalNull};
	//shorthand for properties and methods
	var posPrinter = {
		print(p){
			console.log( `lat=${pos.lat} lon=${pos.lon} normalNull=${pos.normalNull}` );		
		}
	}

	posPrinter.print(pos);
	
}());