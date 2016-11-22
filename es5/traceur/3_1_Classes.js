"use strict";
(function() {
  var BankAccount = (function() {
    function BankAccount(accountNumber, holder, balance) {
      this._accountNumber = accountNumber;
      this.accountHolder = holder;
      this._balance = balance;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
      get: function() {
        return this._balance;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "accountNumber", {
      get: function() {
        return this._accountNumber;
      },
      enumerable: true,
      configurable: true
    });
    BankAccount.prototype.deposit = function(amount) {
      if (amount < 0) {
        return;
      }
      this._balance += amount;
    };
    BankAccount.prototype.withdraw = function(amount) {
      if (amount < 0 || amount > this._balance) {
        return;
      }
      this._balance -= amount;
    };
    BankAccount.prototype.toString = function() {
      return "Account" + this._accountNumber + ", holder: " + this.accountHolder + ", account state " + this._balance;
    };
    return BankAccount;
  })();
  var account = new BankAccount(4711, "Wilhelm Brause", 100);
  account.deposit(200);
  account.withdraw(50);
  console.log(account.toString());
})();
(function() {
  var BankAccount = function() {
    function BankAccount(accountNumber, holder, balance) {
      this._accountNumber = accountNumber;
      this.accountHolder = holder;
      this._balance = balance;
    }
    return ($traceurRuntime.createClass)(BankAccount, {
      get balance() {
        return this._balance;
      },
      get accountNumber() {
        return this._accountNumber;
      },
      deposit: function(amount) {
        if (amount < 0) {
          return;
        }
        this._balance += amount;
      },
      withdraw: function(amount) {
        if (amount < 0 || amount > this._balance) {
          return;
        }
        this._balance -= amount;
      },
      toString: function() {
        return ("Account:  " + this._accountNumber + "  holder: " + this.accountHolder + " account state:  " + this._balance);
      }
    }, {});
  }();
  var account = new BankAccount(4711, "Wilhelm Beethoven", 100);
  account.deposit(2000);
  account.withdraw(500);
  console.log(account.toString());
})();
