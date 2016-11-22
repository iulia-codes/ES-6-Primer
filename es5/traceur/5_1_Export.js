"use strict";
Object.defineProperties(module.exports, {
  __esModule: {value: true},
  Person: {
    enumerable: true,
    get: function() {
      return Person;
    }
  }
});
var Person = function() {
  function Person(name) {
    this.name = name;
  }
  return ($traceurRuntime.createClass)(Person, {sayName: function() {
      console.log(("Hello, my name is " + this.name));
    }}, {});
}();
