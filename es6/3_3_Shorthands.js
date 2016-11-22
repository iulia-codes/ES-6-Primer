"use strict";

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
	


	class ChildBankAccount extends BankAccount{
		//define a constructor if there are additional parameters
		constructor(accountNumber, holder, balance, parentName ){
			super(accountNumber, holder, balance);
			this.parentName = parentName;
		}

		withdraw(amount){
			if (amount > 50 )
			{
				return;
			}
			super.withdraw(this, amount);
		};

		toString (){
			return super.toString() + ` Parent:  ${this.parentName}`;
		};


	}

	var account = new BankAccount(4711, "Wilhelm Brause", 100);
	account.deposit(200);
	account.withdraw(50);
	console.log(account.toString());

	//here Wilhelm Brause is the parent of Peter Brause
	var childAccount = new ChildBankAccount(4712, "Peter Brause", 30 , "Wilhelm Brause");
	childAccount.deposit(40);
	childAccount.withdraw(51);
	console.log(childAccount.toString());

})();