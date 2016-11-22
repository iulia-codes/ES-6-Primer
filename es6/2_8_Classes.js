"use strict";

//ES5
(function()
{
var BankAccount = (function()
{
	function BankAccount(accountNumber, holder, balance)	{
		this._accountNumber = accountNumber;
		this.accountHolder = holder;
		this._balance = balance;
	}
	//define a property balance that returns the current state of the account
	//there are many lines of code necessary to define properties
	Object.defineProperty(BankAccount.prototype, "balance", {
		get: function () {
			return this._balance;
		},
		enumerable: true,
		configurable: true
	});

	Object.defineProperty(BankAccount.prototype, "accountNumber", {
		get: function () {
			return this._accountNumber;
		},
		enumerable: true,
		configurable: true
	});

	//method - deposit
	BankAccount.prototype.deposit = function (amount){
		if (amount < 0 ){
			return;
		}
		this._balance += amount;
	};

	//method - withdraw
	BankAccount.prototype.withdraw = function (amount) {
		if (amount < 0 || amount > this._balance){
			return;
		}
		this._balance -= amount;
	};

	BankAccount.prototype.toString = function (){
		return "Account" + this._accountNumber + ", holder: " + this.accountHolder + ", account state " + this._balance;
	};

	return BankAccount;
})();

var account = new BankAccount(4711, "Wilhelm Brause", 100);
account.deposit(200);
account.withdraw(50);
console.log(account.toString());

})();

//ES6
(function()
{
	class BankAccount
	{
		// Changes:
		// - remove functions, add constructor
		// - remove ;
		// - remove return of the BankAccount
		// - remove the : before the properties
		//define - constructor
		constructor(accountNumber, holder, balance)	{
			this._accountNumber = accountNumber;
			this.accountHolder = holder;
			this._balance = balance;
		}
		//define a property balance that returns the current state of the account
		//there are many lines of code necessary to define properties	
		get balance() {
				return this._balance;
		}	
		
		//setter
		/*
		set balance(value){
			this._balance = value;
		}*/

		get accountNumber () {
				return this._accountNumber;
		}

		//method - deposit
		deposit (amount){
			if (amount < 0 ){
				return;
			}
			this._balance += amount;
		}

		//method - withdraw
		withdraw (amount) {
			if (amount < 0 || amount > this._balance){
				return;
			}
			this._balance -= amount;
		}

		toString (){
			return `Account:  ${this._accountNumber}  holder: ${this.accountHolder} account state:  ${this._balance}`;
		};
	}

	var account = new BankAccount(4711, "Wilhelm Beethoven", 100);
	account.deposit(2000);
	account.withdraw(500);
	console.log(account.toString());
})();