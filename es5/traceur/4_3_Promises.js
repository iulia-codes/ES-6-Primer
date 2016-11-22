"use strict";
(function() {
  function timeout(msg, name) {
    var duration = arguments[2] !== (void 0) ? arguments[2] : 0;
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        return resolve((name + ":  " + msg));
      }, duration);
    });
  }
  timeout("Test", "Direct", 500).then(function(msg) {
    return timeout(msg, "Promise 1", 200);
  }).then(function(msg) {
    return timeout(msg, "Promise 2", 200);
  }).then(function(msg) {
    return console.log(msg);
  });
}());
