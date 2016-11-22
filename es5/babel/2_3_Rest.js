"use strict";

//ES5

(function () {
	function AddNumbers(nr1, nr2) {
		var result = nr1 + nr2;
		//arguments[0]	1
		//arguments[1]	2
		//arguments[2]	3
		//arguments[3]	4
		//arguments[4]	5
		for (var i = 2; i < arguments.length; i++) {
			result += arguments[i];
		}
		return result;
	}

	console.log(AddNumbers(1, 2));
	console.log(AddNumbers(1, 2, 3, 4, 5));
})();

//ES6
// define the rest parameter with ...numbers
// all the extra parameters are in the ...numbers handled, therefore it is no longer necessary 
// to  use the arguments call
(function () {
	function AddNumbers(nr1, nr, ...numbers) {
		var result = nr1 + nr2;
		//arguments[0]	1
		//arguments[1]	2
		//arguments[2]	3
		//arguments[3]	4
		//arguments[4]	5
		for (var i = 0; i < numbers.length; i++) {
			result += arguments[i];
		}
		return result;
	}

	console.log(AddNumbers(1, 2));
	console.log(AddNumbers(1, 2, 3, 4, 5));
})();