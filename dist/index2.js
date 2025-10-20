"use strict";
// Getter Setter Functions with accessing private variables
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name) {
        this._pName = "";
        this._pName = name;
    }
    get pName() {
        return this._pName;
    }
    set pName(newName) {
        if (newName.length > 0) {
            this._pName = newName;
        }
        else {
            console.log("Invalid Product Name");
        }
    }
    displayProductName() {
        return `Product Name is: ${this._pName}`;
    }
}
let product = new Product("Laptop");
console.log(product.displayProductName());
//  Inheritance with classes
class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount; // balance = amount + balance
        console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
    }
    widthdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        }
        else {
            this.balance -= amount; // balance = balance - amount
            console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
        }
    }
    getBalance() {
        return this.balance;
    }
}
class SavingsAccount extends BankAccount {
    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    applyInterest() {
        const interest = this.balance * this.interestRate / 100;
        this.deposit(interest);
        console.log(`Applied interest: $${interest}. New Balance: $${this.balance}`);
    }
}
class CheckingAccount extends BankAccount {
    constructor(accountNumber, initialBalance, overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    OverDraftwidthdraw(amount) {
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Exceeded overdraft limit");
        }
        else {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
        }
    }
}
let saving = new SavingsAccount("SA123", 1000, 5);
saving.deposit(500);
saving.widthdraw(200);
saving.applyInterest();
console.log("Final Savings Account Balance:", saving.getBalance());
let checkingAccount = new CheckingAccount("CA123", 500, 200);
checkingAccount.deposit(300);
checkingAccount.widthdraw(700);
checkingAccount.OverDraftwidthdraw(200); // This should exceed overdraft limit
console.log("Final Checking Account Balance:", checkingAccount.getBalance());
// Static Members in Classes  (no creating objects)
class MathUtils {
    static calculateCircumference(radius) {
        return 2 * MathUtils.PI * radius;
    }
}
MathUtils.PI = 3.14159;
console.log("Value of PI:", MathUtils.PI);
console.log("Circumference of circle with radius 5:", MathUtils.calculateCircumference(5));
//# sourceMappingURL=index2.js.map