"use strict";

//ES5
(function(){
	function CalculateBrutto(netto, tax){
		if (tax === undefined ) {
			tax = 19;
		}
		return netto * (1 + tax / 100);
	}

	console.log(CalculateBrutto(150));
	console.log(CalculateBrutto(150,7));
}());


//ES6
(function(){
	function CalculateBrutto(netto, tax = 19){	
		return netto * (1 + tax / 100);
	}

	console.log(CalculateBrutto(150));
	console.log(CalculateBrutto(150,7));
}());
