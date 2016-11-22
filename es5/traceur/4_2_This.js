"use strict";
(function() {
  function Countdown() {
    this.count = 10;
    var timer = setInterval(function print() {
      console.log(this.count--);
      if (this.count === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
  new Countdown();
}());
(function() {
  function Countdown() {
    var that = this;
    this.count = 10;
    var timer = setInterval(function print() {
      console.log(that.count--);
      if (that.count === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
  new Countdown();
}());
(function() {
  function Countdown() {
    var $__0 = this;
    this.count = 10;
    var timer = setInterval(function() {
      console.log($__0.count--);
      if ($__0.count === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
  new Countdown();
}());
