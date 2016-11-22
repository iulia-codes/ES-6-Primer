# ES-6 - What's new?

ECMAScript is the name under the ECMA-262 standard

Javascript is an implementation of this standard. In June 2015, the new version of the standard appeared - with many changes.
<a href="https://kangax.github.io/compat-table/es6/">https://kangax.github.io/compat-table/es6/</a> explains the implementation in different browsers for ECMA Script vesion.

There are the so called "transpilers" (compilers/polyfills) that compile the ES6 to ES5 such as Babel core-js or Traceur.

###  Workspace

A development of ES6 programs can be done in an editor that offers intellisense and other options.  Editor options:

* Webstorm

One of those is Webstorm - buy to use, from JetBrains.

* Sublime Text

Another option is Sublime Text - a very loved editor that works on all OS's. The actual version is Sublime 3. 

* Atom

Another version is Atom, that is an open editor from Github, based on Javascript.

*Visual Studio Code

The tutorial uses Visual Studio Code - that is a free editor from Microsoft. 

###Transpiler

It is like a compiler, but it transfers code from one standard to another, generally from ES6 to ES5.

There are two transpilers:

* Traceur (Google)
* <a href="http://www.babeljs.io">Babel (Github)</a>	

It is better to automate the transpiler functions by using for example, <a href="http://gulp.io">Gulp</a>

#### Install Gulp

To install the Gulp, go at the command line.  Initialize a simple repository by adding all the information to it.

```javascript
npm init 

```

Leave empty the fields which are not completed yet. At the end, type ```yes``` to finish the generation of the package.json.

Install gulp:

```javascript
 npm install -g gulp 
 ```
```javascript
 npm install gulp --save-dev
```

```javascript
 npm install gulp-babel --save-dev 
```

```javascript
 npm install gulp-traceur --save-dev
```

Now we have installed __Gulp__ and both the modules installed.

Run the gulpfile in your favourite editor:

```javascript
 code gulpfile.js 
```

We want to have every js file from folder __es6__ transpiled into __es5__ folder.

```javascript
var gulp = require('gulp'),
	traceur = require('gulp-traceur'),
	babel = require('gulp-babel'),
	es6Path = 'es6/*.js',
	compilePath = 'es5';

gulp.task('traceur', function(){
	gulp.src([es6Path])
		.pipe(traceur({blockBinding: true}))
		.pipe(gulp.dest(compilePath + '/traceur'));
});

gulp.task('babel', function(){
	gulp.src([es6Path])
		.pipe(babel())
		.pipe(gulp.dest(compilePath + '/babel'));
});

gulp.task('watch', function(){
	gulp.watch([es6Path], ['traceur', 'babel']);	
});

gulp.task('default', ['traceur', 'babel', 'watch']);

```

Save the file above and run it from the command line.

Now we should have a gulp file and the package.json (with all modules that we already installed)

To finally run the script, you must have the folders created:

```javascript
es5
	babel
	traceur
es6
```

The final folder structure should look like:

```javascript
es5
	babel
	traceur
es6
node_modules
gulpfile.js
package.json
```

... then simply run from the command line 

```javascript
gulp
```
Now, the __gulp__ watch has already started.


##### Test gulp

Create in __es6/person.js__ a class called __Person__

```javascript
class Person {
	constructor (name){
		this.name = name;
	}
}

```

Now the result of this file will appear in both the folders. They look quite different.

Overview of steps:
* npm init
* Install gulp globally
* Install gulp babel, gulp traceur 
* Created the gulpfile, and made the connection the the babel and traceur exits
* Started gulp from command line, and let it watch the files

_End._

### Install Node.js

From the command line, run ``` node ``` to start the node REPL.

##Declaring constants

Previously, in ES5, it was possible to change the value of a variable by using the var.

__ES-5 __ : This will print by turn, __3.14__ and __5__

```javascript
var pi = 3.14;

console.log(pi);

pi = 5;

console.log(pi);
```

In ES-6, it is possible to declare a __const__, that does not allow the change of the variable anymore.

__ES-6__ : This will print by turn, __3.14__ and __Error__

```javascript
const pii = 3.14;

console.log(pii);

pii = 5;

console.log(pii);
```

```javascript

/*
2_1_Const.js:17 Uncaught TypeError: Assignment to constant variable.(…)(anonymous function) @ 2_1_Const.js:17
*/

```

##Declaring variables with Let - Block Scope

The __let__ keyword enables us to define a variable block level.

Whereas in __ES5__ the value of __i__ would have been printed to the console as __5__
in __ES6__ printing the value of __i__ outside the loop, will trigger an error. 

```Uncaught ReferenceError: i is not defined(…) (line 43)```

```javascript
//ES5
(function(){
	for (var i = 0; i < 5 ; i++) {
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
(function(){

	if (true)
	{
		let onlyInBlock = 1;
		console.log(onlyInBlock);
	}

	//therefore, it is possible to declare block level variables with ES-6
	for (let j = 0; j < 2 ; j++) {
		let onlyInBlock = 3;
		console.log(onlyInBlock);
	}

	for (let i = 0; i < 5 ; i++) {
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

```

##The Default parameter

It is possible to send a default parameter value (quick & easy:

```javascript
function CalculateBrutto(netto, tax = 19){	
		return netto * (1 + tva / 100);
	}

```

##The Rest parameter

It is possible to send any number of arguments to a function, as can be seen in the function below:

```javascript
(function(){
	function AddNumbers(nr1, nr2){
		var result = nr1 + nr2;		
		for (var i = 2; i < arguments.length; i++) {
			result += arguments[i];
		}
		return result;
	}

	console.log(AddNumbers(1,2));
	console.log(AddNumbers(1,2,3,4,5));
	
}());
```

The result is : __3__ and __15__

The __rest__ paramter handles all the other parameters that may come in as arguments to a function. This is a similar to the 
__args[]__ from other programming languages (like C#)

```javascript
(function(){
	function AddNumbers(nr1, nr, ...numbers ){
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

	console.log(AddNumbers(1,2));
	console.log(AddNumbers(1,2,3,4,5));
	
}());
```

##The Spread keyword

Let us say that we have a function that adds 3 numbers. What if the arguments are an array? Then we have to process the array elements into the solution:

```javascript
//ES5
(function(){
	function AddNumbers(nr1, nr2, nr3){
		var result = nr1 + nr2 + nr3;	
		return result;
	}

	var numbers = [1,2,3];
	//option 1
	console.log(AddNumbers(numbers[0], numbers[1], numbers[3]));

	//option 2: apply in the current scope (this) in our case null and the numbers	
	console.log(AddNumbers.apply(null, numbers));	

	//add other numbers
	var otherNumbers = [4,5,6];
	Array.prototype.push.apply(numbers, otherNumbers);

	console.log(numbers);
	
}());
```
The cleaner __ES6__ variant, instead of using apply, simply use __...numbers__

Syntax:

```javascript

...[argument]

```

We can now concatenate arrays, add more items to the array and change the number of parameters. The syntax is similar to rest.

```javascript
(function(){
	function AddNumbers(nr1, nr2, nr3){
		var result = nr1 + nr2 + nr3;	
		return result;
	}

	var numbers = [1,2,3];
	console.log(AddNumbers(...numbers));
	
	var otherNumbers = [4,5,6];
	numbers.push(...otherNumbers);
	console.log(numbers);

	var arrayLiteral = [0, ...numbers,7,8];
	console.log(arrayLiteral);
	
}());
```

##Destructuring assignment

The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.

We are given three geographical coordinates, langitute, latitute and normal null.

These 3 coordinates are defined into an array. From an array we create an own variable. It is possible to jump over an empty value:

```javascript
var [lat, lon, , normalNull] = coords;
```
We can assemble them:

```javascript
var coords = [47.070606, 15.4345208, 359];

	//in this case, we have used a destructing construction
	//all the three vars are now assembled into an array
	var [lat, lon, normalNull] = coords;
```

Both functions will print the content of the variables.

```javascript
//ES5
(function(){
	var coords = [47.070606, 15.4345208, 359];
	var lat = coords[1];
	var len = coords[2];
	//https://en.wikipedia.org/wiki/Normalnull
	//Normalnull ("standard zero") or Normal-Null (short N. N. or NN ) is an outdated official vertical datum used in Germany. 
	//Elevations using this reference system were to be marked "Meter über Normal-Null" (“meters above standard zero”). 
	//Normalnull has been replaced by Normalhöhennull (short NHN).
	var normalNull = coords[3];

	console.log("lat="+ lat + " lan = " + len + " normalNull = " + normalNull );
	
}());


//ES6
(function(){
	
	var coords = [47.070606, 15.4345208, 359];

	//in this case, we have used a destructing construction
	//all the three vars are now assembled into an array
	var [lat, lon, normalNull] = coords;
	
}());
```

##Template strings

It is no longer needed to concatenate the values, simply use the string literal.

__Syntax:__

```javascript
`${[variable]}`
```

Notice the usage of ``` ` ``` The template string must defined between these special characters.

Template literals can be used to replace expression like these:


```javascript
console.log("lat="+ lat + " lan = " + lon + " normalNull = " + normalNull );

```

to these:

```javascript
console.log( `lat=${lat} lan=${lon} normalNull=${normalNull}` );
```

For Firefox, an object must be defined to implement the string literal:


```javascript
//ES5
(function(){
	var coords = [47.070606, 15.4345208, 359];
	
	var [lat, lon, normalNull] = coords;

	console.log("lat="+ lat + " lan = " + lon + " normalNull = " + normalNull );
	
}());


//ES6
(function(){
	var coords = [47.070606, 15.4345208, 359];
	
	var [lat, lon, normalNull] = coords;

	console.log( `lat=${lat} lan=${lon} normalNull=${normalNull}` );
	
}());

//ES6 - Firefox
(function(){
	var coords = [47.070606, 15.4345208, 359];
	
	var k = {
		lat: 47.070606,
		lon: 15.4345208,
		normalNull: 359
	}

	console.log( `lat=${k.lat} lan=${k.lon} normalNull=${k.normalNull}` );
	
}());
```


##Classes

In ES5, there are many lines of code necessary to define a class and properties. In this example, we are definining a ```BankAccount``` class.
The class has:
-  two __private properties__ ```_accountNumber``` and ```_balance```-  
-  two __methods__ ```deposit``` and ```withdraw```
-  two getters for the private properties, making them accessible from outside (by convention notation is ```_property```)
-  a redefinition of the ```toString``` method, which returns info about the account

For example, to define a property, we must write:

```javascript
	Object.defineProperty(BankAccount.prototype, "balance", {
		get: function () {
			return this._balance;
		},
		enumerable: true,
		configurable: true
	});
```

We have just defined a read-only property that returns the state of the account.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript">MDN Introduction to OOP</a>

In ES6, it is much easier to define classes, using the ``` Class ``` keyword. 

- Using the ``` constructor ``` keyword - define a constructor 
- Using the ``` get ``` keyword - define a getter for the properties
- Using the ``` set ``` keyword - set a setter for the properties
- Define a method by ``` methodName(methodParameters) ```

```javascript
"use strict";

//ES5
(function()
{
var BankAccount = (function()
{
	function BankAccount(accountNumber, holder, balance)	{
		this._accountNumber = accountNumber;
		this.accountHolder = holder;
		this._balance = balance;
	}
	//define a property balance that returns the current state of the account
	//there are many lines of code necessary to define properties
	Object.defineProperty(BankAccount.prototype, "balance", {
		get: function () {
			return this._balance;
		},
		enumerable: true,
		configurable: true
	});

	Object.defineProperty(BankAccount.prototype, "accountNumber", {
		get: function () {
			return this._accountNumber;
		},
		enumerable: true,
		configurable: true
	});

	//method - deposit
	BankAccount.prototype.deposit = function (amount){
		if (amount < 0 ){
			return;
		}
		this._balance += amount;
	};

	//method - withdraw
	BankAccount.prototype.withdraw = function (amount) {
		if (amount < 0 || amount > this._balance){
			return;
		}
		this._balance -= amount;
	};

	BankAccount.prototype.toString = function (){
		return "Account" + this._accountNumber + ", holder: " + this.accountHolder + ", account state " + this._balance;
	};

	return BankAccount;
})();

var account = new BankAccount(4711, "Wilhelm Brause", 100);
account.deposit(200);
account.withdraw(50);
console.log(account.toString());

})();

//ES6
(function()
{
	class BankAccount
	{
		// Changes:
		// - remove functions, add constructor
		// - remove ;
		// - remove return of the BankAccount
		// - remove the : before the properties
		//define - constructor
		constructor(accountNumber, holder, balance)	{
			this._accountNumber = accountNumber;
			this.accountHolder = holder;
			this._balance = balance;
		}
		//define a property balance that returns the current state of the account
		//there are many lines of code necessary to define properties	
		get balance() {
				return this._balance;
		}	
		
		//setter
		/*
		set balance(value){
			this._balance = value;
		}*/

		get accountNumber () {
				return this._accountNumber;
		}

		//method - deposit
		deposit (amount){
			if (amount < 0 ){
				return;
			}
			this._balance += amount;
		}

		//method - withdraw
		withdraw (amount) {
			if (amount < 0 || amount > this._balance){
				return;
			}
			this._balance -= amount;
		}

		toString (){
			return `Account:  ${this._accountNumber}  holder: ${this.accountHolder} account state:  ${this._balance}`;
		};
	}

	var account = new BankAccount(4711, "Wilhelm Beethoven", 100);
	account.deposit(2000);
	account.withdraw(500);
	console.log(account.toString());
})();



```

## Inheritance

Starting from the previously defined ```BankAccount``` class, we want to create a child account which has some difference from the main account:

- it is not possible to extract more than 50eur at a time
- name of a parent must be given


In ES6, it possible to extend a class, using the ``` extends ``` keyword. 

- Using the ``` super ``` keyword - call the same method from the parent class. 

```javascript
	constructor(accountNumber, holder, balance, parentName ){
			super(accountNumber, holder, balance);
			this.parentName = parentName;
		}
```
- one may overwrite a constructor by adding additional parameters to the parent constructor. Here ```super``` is called, then a new property is added to the class.

```javascript
	constructor(accountNumber, holder, balance, parentName ){
			super(accountNumber, holder, balance);
			this.parentName = parentName;
		}
```

Full code, this will print:

```Account:  4711  holder: Wilhelm Brause account state:  250 ```
```Account:  4712  holder: Peter Brause account state:  70 Parent:  Wilhelm Brause ```

```javascript
"use strict";

//ES6
(function()
{
	class BankAccount
	{
		// Changes:
		// - remove functions, add constructor
		// - remove ;
		// - remove return of the BankAccount
		// - remove the : before the properties
		//define - constructor
		constructor(accountNumber, holder, balance)	{
			this._accountNumber = accountNumber;
			this.accountHolder = holder;
			this._balance = balance;
		}
		//define a property balance that returns the current state of the account
		//there are many lines of code necessary to define properties	
		get balance() {
				return this._balance;
		}	
		
		//setter
		/*
		set balance(value){
			this._balance = value;
		}*/

		get accountNumber () {
				return this._accountNumber;
		}

		//method - deposit
		deposit (amount){
			if (amount < 0 ){
				return;
			}
			this._balance += amount;
		}

		//method - withdraw
		withdraw (amount) {
			if (amount < 0 || amount > this._balance){
				return;
			}
			this._balance -= amount;
		}

		toString (){
			return `Account:  ${this._accountNumber}  holder: ${this.accountHolder} account state:  ${this._balance}`;
		};
	}
	


	class ChildBankAccount extends BankAccount{
		//define a constructor if there are additional parameters
		constructor(accountNumber, holder, balance, parentName ){
			super(accountNumber, holder, balance);
			this.parentName = parentName;
		}

		withdraw(amount){
			if (amount > 50 )
			{
				return;
			}
			super.withdraw(this, amount);
		};

		toString (){
			return super.toString() + ` Parent:  ${this.parentName}`;
		};


	}

	var account = new BankAccount(4711, "Wilhelm Brause", 100);
	account.deposit(200);
	account.withdraw(50);
	console.log(account.toString());

	//here Wilhelm Brause is the parent of Peter Brause
	var childAccount = new ChildBankAccount(4712, "Peter Brause", 30 , "Wilhelm Brause");
	childAccount.deposit(40);
	childAccount.withdraw(51);
	console.log(childAccount.toString());

})();
```

## Shorthands

In our next example, we define three variables ```lat```, ```lon```, ```normalNull``` (that gives a geographical position). We do this by:

- being redundant in defining the variables, by setting ```lat: lat``` and so on. 
- defining the method ```print``` inside the variable using the ``function`` keyword


```javascript
//ES5
(function(){
	var lat =  47.070606;
	var lon =  15.4345208;
	var normalNull = 359;
	
	var pos = {
		lat: lat,
		lon: lon,
		normalNull: normalNull
	}
	//the position has a method print
	var posPrinter = {
		print: function(p)
		{
			console.log( `lat=${pos.lat} lon=${pos.lon} normalNull=${pos.normalNull}` );		
		}
	}

	posPrinter.print(pos);
	
}());
```
In __ES6__, when the variable name is the same as the variable that gets the value from, the primary variable names can be removed:

```javascript
var pos = { lat,lon,normalNull};
```
and we can remove the ``function`` keyword:

```javascript
var posPrinter = {
		print: function(p)
		{
			console.log( `lat=${pos.lat} lon=${pos.lon} normalNull=${pos.normalNull}` );		
		}
	}
```

Put together:

```javascript
(function(){
	var lat =  47.070606;
	var lon =  15.4345208;
	var normalNull = 359;
	
	var pos = { lat,lon,normalNull};
	//shorthand for properties and methods
	var posPrinter = {
		print(p){
			console.log( `lat=${pos.lat} lon=${pos.lon} normalNull=${pos.normalNull}` );		
		}
	}

	posPrinter.print(pos);
	
}());
```

## Maps and Sets

In ES5, only ``arrays`` were available to administrate lists.

With __ES6__, two more data structures are available:
* ``Map`` - comparable to a Dictionary from other languages. The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.
 
For each entry, there is a key and a value. Possible operations:
- ``new Map(); `` - initialize (var dict = new Map();)
- ``set`` - set a value (property)
- ``get`` - gets a value (property)
- ``has`` - a method that checks if a key exists (method)
 
* ``Set`` - The Set object lets you store unique values of any type, whether primitive values or object references.

- ``new Set(); `` - initialize
- ``add`` - adds a value (property)
- ``size`` - gets the size of a set (method)


```javascript
//ES6
(function(){
	
	var dict = new Map();
	dict.set(4711, "A value");
	dict.set(4712, "Another value");
	dict.set("a", 123456);
	dict.set(123, {x:1, y:2});

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

	
}());
```

## The ``for ... of`` loop

In __ES6__ a new loop type was introduced. With this loop it is possible to iterate over arrays, maps, sets.

In our example, we have defined three elements which are part of the array. We then want to iterate the elements.

- `for ... of ` iterates over the contents of the properties
- `for ... in ` iterates over property names and has __no effect on set iteration__

```javascript

(function(){
	
	var myArray = ["Element 1", "Element 2", "Element 3"];

	console.log("For .. of looping an array");

	//ES6
	for(var elem of myArray){
		console.log(elem);
	}
	
	console.log("For .. in looping an array");
	//ES5
	for(var elem in myArray){
		console.log(elem);
	}
}());
```

The result:

```javascript
For .. of looping an array
Element 1
Element 2
Element 3
For .. in looping an array
0
1
2
```

Let us now define a map with some values, and an object and iterate over it.

```javascript

	var dict = new Map();
	dict.set(4711, "A value");
	dict.set(4712, "Another value");
	dict.set("a", 123456);
	dict.set(123, {x:1, y:2});
	console.log("For .. of looping a map");
	for(var [key, value] of dict.entries()){
		console.log(key + " : " + value);
	}
```

Let us define a set, with some values, and iterate over it in both ways.

```javascript
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
```

The result is that the second way with ``for .. in`` , has absolutely no effect.

## Arrow functions

Functions may be sent as arguments to other functions in JS. This can happen quite often. An example of these are the ``callback`` functions.

Let us define an array of numbers ranging from 1 to 9. 

```javascript
	var numbers = [1,2,3,4,5,6,7,8,9];
```

We want to print only the even numbers. The way to implement this is by using the ``numbers.filter`` in conjunction with creating a ``function``. The function verifies if a number is even. When the function completes, the result is loaded into another array ``evens`` 


```javascript
	var evens = numbers.filter(function(num){
		return num % 2 === 0;
	});

```
All in one in ES5:

```javascript
//ES5
(function(){
	
	var numbers = [1,2,3,4,5,6,7,8,9];

	var evens = numbers.filter(function(num){
		return num % 2 === 0;
	});

	console.log(evens);
}());
```
In __ES6__, the arrow functions are available. The code will be more clean & compact. The keyword ``function`` is removed and the arrow `=>` is introduced.

```javascript
(function(){
	
	var numbers = [1,2,3,4,5,6,7,8,9];

	//here I call the function filter
	//the function filter has the argument num
	//the result will be saved in evens
	var evens = numbers.filter((num) => {
		return num % 2 === 0;
	});

	console.log(evens);
}());
```
If there is only __one parameter__, the extra paranthesis can be removed:

```javascript
(function(){
	
	var numbers = [1,2,3,4,5,6,7,8,9];

	//here we can remove the extra () when there is only one parameter
	var evens = numbers.filter(num => {
		return num % 2 === 0;
	});

	console.log(evens);
}());
```
If there is only __one line in the body of the function__, the extra `{}` can be removed for a more compact writing:

```javascript
	var evens = numbers.filter(num => num % 2 === 0);
```

## This

Let us define a Countdown function, which starts at 10. Define timeout which runs every second, and where we print the counter. If the counter is 0, then delete the interval.

```javascript
(function(){
	
	function Countdown(){
		this.count = 10;

		var timer = setInterval(function print(){
			console.log(this.count--);
			if (this.count === 0 ){
				clearInterval(timer);
			}
		}, 1000);
	}

	new Countdown();
}());
```

After running the function, we observe that the result is ``NaN``. What is the problem with this code?

The problem is that this in:

``if (this.count === 0 ){``

is not the same ``this`` as in

``this.count = 10;``

The solution is to keep the state of ``this`` in a variable, usually ``that``: 

```javascript
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
```
In __ES6__, it is no longer needed to save the state in a different variable. Instead, we can use an arrow function.

Replace:

```javascript
var timer = setInterval(function print(){...})
```

with:

```javascript
var timer = setInterval(() => {..})
```

while still using the this keyword.

```javascript
//ES6
(function(){
	
	function Countdown(){				
		this.count = 10;

		var timer = setInterval(() => {
			console.log(this.count--);
			//that is the the same as this
			if (this.count === 0 ){
				clearInterval(timer);
			}
		}, 1000);
	}

	new Countdown();
}());

```

This eliminates completely the usage of extra variables to safe the state. Nice addition!


## Promises

Promises are a promise that something will happen in the future. They are chainable and can be executed one after another. What is new in __ES6__ is that we do not need an extra library anymore to use the promises, it is directly included in __ES6__. For example:


```javascript
"use strict";

//ES56
(function(){
	
	//the timeout was usually given for callback functions, in the past
	//For example, we make a web request, and when the answer comes, we want to execute the callback function
	//Now, we take the result of the callback, and call another web service (service 2)
	//We give again a callback function for when the response for service 2 comes .. and so on

	function timeout(msg, name, duration = 0) {
		return new Promise((resolve, reject) => {
			setTimeout( () => resolve(`${name}:  ${msg}`), duration);
		})
	}

	timeout("Test", "Direct", 500)
		.then (msg => timeout (msg, "Promise 1", 200))
		.then (msg => timeout (msg, "Promise 2", 200))
		.then (msg => console.log(msg));

}());
```

Here we define a function timeout that gets a ``message``, ``name`` and a ``duration``. The function then returns a new object: ``Promise`` that gets as input a ``resolve`` and ``reject`` parameters. This tells us if everything went well with the promise, or not.

In the Promise we define a ``timeout`` that calls the ``resolve`` at each given ``duration`` time.

To run this practical example, we set ``message`` ``Test`` and the ``name`` to be ``Direct`` with a timeout of ``500 ms``. Then call again the timeout functions, with a shorter duration. At the end, print the ``msg``

After executing the code, this will print:

``Promise 2:  Promise 1:  Direct:  Test``


