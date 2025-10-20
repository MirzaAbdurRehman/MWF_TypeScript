

// Getter Setter Functions with accessing private variables

class Product{
    private _pName: string = "";

    constructor(name: string){
        this._pName = name;
    }

    get pName(): string{
        return this._pName;
    }

    set pName(newName: string){
        if(newName.length > 0){
            this._pName = newName;
        } else {
            console.log("Invalid Product Name");
        }
    }
    displayProductName(): string{
        return `Product Name is: ${this._pName}`;
    }
}

let product = new Product("Laptop");
console.log(product.displayProductName());




//  Inheritance with classes


class BankAccount {

    protected balance: number;
    protected accountNumber: string;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    deposit(amount: number): void {
        this.balance += amount;  // balance = amount + balance
        console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
    }


    widthdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;  // balance = balance - amount
            console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
        }  
    }

    getBalance(): number {
        return this.balance;
    }
}


class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    applyInterest(): void {
        const interest = this.balance * this.interestRate / 100;
        this.deposit(interest);
        console.log(`Applied interest: $${interest}. New Balance: $${this.balance}`);
    }
}

class CheckingAccount extends BankAccount {
    private overdraftLimit: number;

    constructor(accountNumber: string, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    OverDraftwidthdraw(amount: number): void {
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Exceeded overdraft limit");
        } else {
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
checkingAccount.OverDraftwidthdraw(200);  // This should exceed overdraft limit
console.log("Final Checking Account Balance:", checkingAccount.getBalance());



// Static keyword Members in Classes  (no creating objects)

class MathUtils {
    static PI: number = 3.14159;

    static calculateCircumference(radius: number): number {
        return 2 * MathUtils.PI * radius;
    }
}

console.log("Value of PI:", MathUtils.PI);
console.log("Circumference of circle with radius 5:", MathUtils.calculateCircumference(5));


