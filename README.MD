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

__ES-6 __ : This will print by turn, __3.14__ and __Error__

```javascript
const pii = 3.14;

console.log(pii);

pii = 5;

console.log(pii);
```

```javascript

2_1_Const.js:17 Uncaught TypeError: Assignment to constant variable.(…)(anonymous function) @ 2_1_Const.js:17

```