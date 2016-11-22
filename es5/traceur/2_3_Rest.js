"use strict";
(function() {
  function AddNumbers(nr1, nr2) {
    var result = nr1 + nr2;
    for (var i = 2; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  console.log(AddNumbers(1, 2));
  console.log(AddNumbers(1, 2, 3, 4, 5));
}());
(function() {
  function AddNumbers(nr1, nr) {
    for (var numbers = [],
        $__0 = 2; $__0 < arguments.length; $__0++)
      numbers[$__0 - 2] = arguments[$__0];
    var result = nr1 + nr2;
    for (var i = 0; i < numbers.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  console.log(AddNumbers(1, 2));
  console.log(AddNumbers(1, 2, 3, 4, 5));
}());
