"use strict";

//ES5
(function(){
	
	function Countdown(){		
		this.count = 10;

		var timer = setInterval(function print(){
			console.log(this.count--);
			//the next this is not the same as in this.count
			if (this.count === 0 ){
				clearInterval(timer);
			}
		}, 1000);
	}

	new Countdown();
}());

//ES5
(function(){
	
	function Countdown(){		
		//keep the state of the variable in the current scope
		var that = this;
		this.count = 10;

		var timer = setInterval(function print(){
			console.log(that.count--);
			//that is the the same as this
			if (that.count === 0 ){
				clearInterval(timer);
			}
		}, 1000);
	}

	new Countdown();
}());


//ES6
(function(){
	
	function Countdown(){				
		this.count = 10;

		var timer = setInterval(() => {
			console.log(this.count--);
			//this in the context is kept 
			if (this.count === 0 ){
				clearInterval(timer);
			}
		}, 1000);
	}

	new Countdown();
}());