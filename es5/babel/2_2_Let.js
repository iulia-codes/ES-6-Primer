"use strict";

//ES5

(function () {
	for (var i = 0; i < 5; i++) {
		console.log(i);
	}

	//in the most programming languages, this is not possible
	//i is inside the scope of the loop and not visibel
	console.log("Outside the for loop");
	//but the variable is visible even though it is outside the loop
	//the JS: the var is visible although outside the loop
	console.log(i);
})();

//ES6
(function () {

	if (true) {
		let onlyInBlock = 1;
		console.log(onlyInBlock);
	}

	//therefore, it is possible to declare block level variables with ES-6
	for (let j = 0; j < 2; j++) {
		let onlyInBlock = 3;
		console.log(onlyInBlock);
	}

	for (let i = 0; i < 5; i++) {
		console.log(i);
	}

	//in the most programming languages, this is not possible
	//i is inside the scope of the loop and not visibel
	console.log("Outside the for loop");
	//but the variable is visible even though it is outside the loop
	//the ES6: we can use block scoping, so the i is not visible anymore outside the loop
	//this will trigger an error
	console.log(i);
})();