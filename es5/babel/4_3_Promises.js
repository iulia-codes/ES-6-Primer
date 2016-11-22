"use strict";

//ES56

(function () {

	//the timeout was usually given for callback functions, in the past
	//For example, we make a web request, and when the answer comes, we want to execute the callback function
	//Now, we take the result of the callback, and call another web service (service 2)
	//We give again a callback function for when the response for service 2 comes .. and so on

	function timeout(msg, name, duration = 0) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(`${ name }:  ${ msg }`), duration);
		});
	}

	timeout("Test", "Direct", 500).then(msg => timeout(msg, "Promise 1", 200)).then(msg => timeout(msg, "Promise 2", 200)).then(msg => console.log(msg));
})();