"use strict";

//ES5

(function () {})();

//ES6

(function () {

	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	//here I call the function filter
	//the function filter has the argument num
	//the result will be saved in evens
	var evens = numbers.filter(num => {
		return num % 2 === 0;
	});

	console.log(evens);
})();