"use strict";

//ES5

(function () {
	function AddNumbers(nr1, nr2, nr3) {
		var result = nr1 + nr2 + nr3;
		return result;
	}

	var numbers = [1, 2, 3];
	//option 1
	console.log(AddNumbers(numbers[0], numbers[1], numbers[3]));

	//option 2: apply in the current scope (this) in our case null and the numbers	
	console.log(AddNumbers.apply(null, numbers));

	//add other numbers
	var otherNumbers = [4, 5, 6];
	Array.prototype.push.apply(numbers, otherNumbers);

	console.log(numbers);
})();

//ES6
(function () {
	function AddNumbers(nr1, nr2, nr3) {
		var result = nr1 + nr2 + nr3;
		return result;
	}

	var numbers = [1, 2, 3];
	console.log(AddNumbers(...numbers));

	var otherNumbers = [4, 5, 6];
	numbers.push(...otherNumbers);
	console.log(numbers);

	var arrayLiteral = [0, ...numbers, 7, 8];
	console.log(arrayLiteral);
})();