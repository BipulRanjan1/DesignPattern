// Concrete implementation of the Card interface
var ConcreteCard = /** @class */ (function () {
    function ConcreteCard(cardNumber, balance) {
        this.cardNumber = cardNumber;
        this.balance = balance;
    }
    ConcreteCard.prototype.getCardNumber = function () {
        return this.cardNumber;
    };
    ConcreteCard.prototype.getBalance = function () {
        return this.balance;
    };
    ConcreteCard.prototype.addFunds = function (amount) {
        this.balance += amount;
        console.log("Added ".concat(amount, " to the card. New balance: ").concat(this.balance));
    };
    ConcreteCard.prototype.makePayment = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Payment of ".concat(amount, " successful. Remaining balance: ").concat(this.balance));
        }
        else {
            console.log("Insufficient balance. Payment of ".concat(amount, " failed."));
        }
    };
    return ConcreteCard;
}());
// Proxy for the Card interface
var CardProxy = /** @class */ (function () {
    function CardProxy(cardNumber, balance, isAdmin) {
        this.card = new ConcreteCard(cardNumber, balance);
        this.isAdmin = isAdmin;
    }
    CardProxy.prototype.getCardNumber = function () {
        return this.card.getCardNumber();
    };
    CardProxy.prototype.getBalance = function () {
        return this.card.getBalance();
    };
    CardProxy.prototype.addFunds = function (amount) {
        if (this.isAdmin) {
            this.card.addFunds(amount);
        }
        else {
            console.log("Permission denied. Only administrators can add funds.");
        }
    };
    CardProxy.prototype.makePayment = function (amount) {
        this.card.makePayment(amount);
    };
    return CardProxy;
}());
// Example usage
var userCard = new CardProxy("1234-5678-9012-3456", 100, false);
console.log(userCard.getCardNumber()); // Output: "1234-5678-9012-3456"
console.log(userCard.getBalance()); // Output: 100
userCard.addFunds(50); // Output: "Permission denied. Only administrators can add funds."
userCard.makePayment(75); // Output: "Payment of 75 successful. Remaining balance: 25"
