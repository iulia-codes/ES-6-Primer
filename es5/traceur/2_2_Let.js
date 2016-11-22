"use strict";
(function() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Outside the for loop");
  console.log(i);
})();
(function() {
  if (true) {
    var onlyInBlock = 1;
    console.log(onlyInBlock);
  }
  for (var j = 0; j < 2; j++) {
    var onlyInBlock$__0 = 3;
    console.log(onlyInBlock$__0);
  }
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Outside the for loop");
  console.log(i);
})();
