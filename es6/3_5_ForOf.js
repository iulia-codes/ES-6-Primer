"use strict";

//ES6
(function(){
	
	var myArray = ["Element 1", "Element 2", "Element 3"];

	console.log("For .. of looping an array");

	for(var elem of myArray){
		console.log(elem);
	}
	
	console.log("For .. in looping an array");

	for(var elem in myArray){
		console.log(elem);
	}


	//define a map, with values and lastyl with an object
	var dict = new Map();
	dict.set(4711, "A value");
	dict.set(4712, "Another value");
	dict.set("a", 123456);
	dict.set(123, {x:1, y:2});
	console.log("For .. of looping a map");
	for(var [key, value] of dict.entries()){
		console.log(key + " : " + value);
	}

	//define a set, loop over it
	var mySet = new Set();
	mySet.add(1);
	mySet.add(2);
	console.log(mySet.size);	
	mySet.add(2);
	console.log(mySet.size);	
	mySet.add("Hello");

	console.log("For .. of looping a set");
	for(var elem of mySet){
		console.log(elem);
	}

	console.log("For .. in looping a set");
	for(var elem in mySet){
		console.log(elem);
	}


}());
