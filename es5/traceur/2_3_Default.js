"use strict";
(function() {
  function CalculateBrutto(netto, tax) {
    if (tax === undefined) {
      tax = 19;
    }
    return netto * (1 + tax / 100);
  }
  console.log(CalculateBrutto(150));
  console.log(CalculateBrutto(150, 7));
}());
(function() {
  function CalculateBrutto(netto) {
    var tax = arguments[1] !== (void 0) ? arguments[1] : 19;
    return netto * (1 + tax / 100);
  }
  console.log(CalculateBrutto(150));
  console.log(CalculateBrutto(150, 7));
}());
