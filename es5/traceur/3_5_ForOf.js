"use strict";
(function() {
  var $__23,
      $__24;
  var myArray = ["Element 1", "Element 2", "Element 3"];
  console.log("For .. of looping an array");
  var $__4 = true;
  var $__5 = false;
  var $__6 = undefined;
  try {
    for (var $__2 = void 0,
        $__1 = (myArray)[Symbol.iterator](); !($__4 = ($__2 = $__1.next()).done); $__4 = true) {
      var elem = $__2.value;
      {
        console.log(elem);
      }
    }
  } catch ($__7) {
    $__5 = true;
    $__6 = $__7;
  } finally {
    try {
      if (!$__4 && $__1.return != null) {
        $__1.return();
      }
    } finally {
      if ($__5) {
        throw $__6;
      }
    }
  }
  console.log("For .. in looping an array");
  for (var elem in myArray) {
    console.log(elem);
  }
  var dict = new Map();
  dict.set(4711, "A value");
  dict.set(4712, "Another value");
  dict.set("a", 123456);
  dict.set(123, {
    x: 1,
    y: 2
  });
  console.log("For .. of looping a map");
  var $__11 = true;
  var $__12 = false;
  var $__13 = undefined;
  try {
    for (var $__9 = void 0,
        $__8 = (dict.entries())[Symbol.iterator](); !($__11 = ($__9 = $__8.next()).done); $__11 = true) {
      var $__22 = $__9.value,
          key = ($__23 = $__22[Symbol.iterator](), ($__24 = $__23.next()).done ? void 0 : $__24.value),
          value = ($__24 = $__23.next()).done ? void 0 : $__24.value;
      {
        console.log(key + " : " + value);
      }
    }
  } catch ($__14) {
    $__12 = true;
    $__13 = $__14;
  } finally {
    try {
      if (!$__11 && $__8.return != null) {
        $__8.return();
      }
    } finally {
      if ($__12) {
        throw $__13;
      }
    }
  }
  var mySet = new Set();
  mySet.add(1);
  mySet.add(2);
  console.log(mySet.size);
  mySet.add(2);
  console.log(mySet.size);
  mySet.add("Hello");
  console.log("For .. of looping a set");
  var $__18 = true;
  var $__19 = false;
  var $__20 = undefined;
  try {
    for (var $__16 = void 0,
        $__15 = (mySet)[Symbol.iterator](); !($__18 = ($__16 = $__15.next()).done); $__18 = true) {
      var elem = $__16.value;
      {
        console.log(elem);
      }
    }
  } catch ($__21) {
    $__19 = true;
    $__20 = $__21;
  } finally {
    try {
      if (!$__18 && $__15.return != null) {
        $__15.return();
      }
    } finally {
      if ($__19) {
        throw $__20;
      }
    }
  }
  console.log("For .. in looping a set");
  for (var elem in mySet) {
    console.log(elem);
  }
}());
