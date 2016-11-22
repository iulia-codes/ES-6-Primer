"use strict";

//ES5

(function () {

	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	var evens = numbers.filter(function (num) {
		return num % 2 === 0;
	});

	console.log(evens);
})();

//ES6 - one parameter to the arrow function
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

//ES6 - one parameter to the arrow function
(function () {

	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	//here we can remove the extra () when there is only one parameter
	var evens = numbers.filter(num => {
		return num % 2 === 0;
	});

	console.log(evens);
})();

//ES6 - one parameter to the arrow function + one line in the body

(function () {

	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	//here we can remove the extra {} when there is only one line in the function body
	var evens = numbers.filter(num => num % 2 === 0);

	console.log(evens);
})();