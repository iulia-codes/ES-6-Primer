"use strict";
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
  var ChildBankAccount = function($__super) {
    function ChildBankAccount(accountNumber, holder, balance, parentName) {
      $traceurRuntime.superConstructor(ChildBankAccount).call(this, accountNumber, holder, balance);
      this.parentName = parentName;
    }
    return ($traceurRuntime.createClass)(ChildBankAccount, {
      withdraw: function(amount) {
        if (amount > 50) {
          return;
        }
        $traceurRuntime.superGet(this, ChildBankAccount.prototype, "withdraw").call(this, this, amount);
      },
      toString: function() {
        return $traceurRuntime.superGet(this, ChildBankAccount.prototype, "toString").call(this) + (" Parent:  " + this.parentName);
      }
    }, {}, $__super);
  }(BankAccount);
  var account = new BankAccount(4711, "Wilhelm Brause", 100);
  account.deposit(200);
  account.withdraw(50);
  console.log(account.toString());
  var childAccount = new ChildBankAccount(4712, "Peter Brause", 30, "Wilhelm Brause");
  childAccount.deposit(40);
  childAccount.withdraw(51);
  console.log(childAccount.toString());
})();
