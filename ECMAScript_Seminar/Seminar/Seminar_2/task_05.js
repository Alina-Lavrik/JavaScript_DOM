// Задание 5 (Class 30 минут)
// Создайте класс BankAccount, который представляет банковский счет. 
// У него должны быть свойства accountNumber (номер счета) и balance 
// (баланс), а также методы deposit(amount) для пополнения счета и 
// withdraw(amount) для снятия денег со счета. Класс должен иметь 
// также статическое свойство bankName, которое содержит название 
// банка.


class BankAccount {
    static bankName = "MyBank"; 

    constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    console.log(`New account in ${BankAccount.bankName}`); // New account in MyBank
    }
    // попорлнение счета
    deposit = (amount) => {
        this.balance += amount;
        this.newBalance('Deposited', amount);
    }
    // снятие со счета
    withdraw = (amount) => {
    // проверяем достаточно ли денег для списания
        if (this.balance - amount > 0) {
            this.balance -= amount;
            this.newBalance('Withdraw', amount);
        } else {
            console.log(`Недостаточно средств на счете: ${this.accountNumber}`);
        }

    }

    newBalance = (operation, amount) => {
        console.log(`${operation} ${amount} into account ${this.accountNumber}. 
        New balance: ${this.balance}`);
    }
 
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890
console.log(BankAccount.bankName);