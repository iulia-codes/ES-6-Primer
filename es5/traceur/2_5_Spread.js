"use strict";
(function() {
  function AddNumbers(nr1, nr2, nr3) {
    var result = nr1 + nr2 + nr3;
    return result;
  }
  var numbers = [1, 2, 3];
  console.log(AddNumbers(numbers[0], numbers[1], numbers[3]));
  console.log(AddNumbers.apply(null, numbers));
  var otherNumbers = [4, 5, 6];
  Array.prototype.push.apply(numbers, otherNumbers);
  console.log(numbers);
}());
(function() {
  var $__0;
  function AddNumbers(nr1, nr2, nr3) {
    var result = nr1 + nr2 + nr3;
    return result;
  }
  var numbers = [1, 2, 3];
  console.log(AddNumbers.apply((void 0), $traceurRuntime.spread(numbers)));
  var otherNumbers = [4, 5, 6];
  ($__0 = numbers).push.apply($__0, $traceurRuntime.spread(otherNumbers));
  console.log(numbers);
  var arrayLiteral = $traceurRuntime.spread([0], numbers, [7, 8]);
  console.log(arrayLiteral);
}());
