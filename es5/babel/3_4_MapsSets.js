"use strict";

//ES6

(function () {

	var dict = new Map();
	dict.set(4711, "A value");
	dict.set(4712, "Another value");
	dict.set("a", 123456);
	dict.set(123, { x: 1, y: 2 });

	var x = dict.get(4711);
	console.log(x);
	console.log(dict.has(4711));
	dict.delete(4711);
	console.log(dict.has(4711));

	var mySet = new Set();
	mySet.add(1);
	mySet.add(2);
	console.log(mySet.size);
	mySet.add(2);
	console.log(mySet.size);
	mySet.add("Hello");
})();