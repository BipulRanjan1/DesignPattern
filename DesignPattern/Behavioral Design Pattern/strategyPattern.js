// Concrete Strategy: Credit Card Payment
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment(cardNumber, expiryDate, cvv) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
    }
    CreditCardPayment.prototype.pay = function (amount) {
        console.log("Paying $".concat(amount, " with credit card ").concat(this.cardNumber));
        // Add logic to process payment with credit card
    };
    return CreditCardPayment;
}());
// Concrete Strategy: PayPal Payment
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment(email, password) {
        this.email = email;
        this.password = password;
    }
    PayPalPayment.prototype.pay = function (amount) {
        console.log("Paying $".concat(amount, " with PayPal account ").concat(this.email));
        // Add logic to process payment with PayPal
    };
    return PayPalPayment;
}());
// Concrete Strategy: Bank Transfer Payment
var BankTransferPayment = /** @class */ (function () {
    function BankTransferPayment(accountNumber, routingNumber) {
        this.accountNumber = accountNumber;
        this.routingNumber = routingNumber;
    }
    BankTransferPayment.prototype.pay = function (amount) {
        console.log("Paying $".concat(amount, " via bank transfer to account ").concat(this.accountNumber));
        // Add logic to process payment via bank transfer
    };
    return BankTransferPayment;
}());
// Context: Payment Processing System
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
    }
    PaymentProcessor.prototype.setPaymentStrategy = function (strategy) {
        this.paymentStrategy = strategy;
    };
    PaymentProcessor.prototype.processPayment = function (amount) {
        if (!this.paymentStrategy) {
            throw new Error("Payment strategy not set");
        }
        this.paymentStrategy.pay(amount);
    };
    return PaymentProcessor;
}());
// Usage
var paymentProcessor = new PaymentProcessor();
// Set credit card payment strategy
paymentProcessor.setPaymentStrategy(new CreditCardPayment("1234 5678 9012 3456", "12/25", "123"));
paymentProcessor.processPayment(100);
// Set PayPal payment strategy
paymentProcessor.setPaymentStrategy(new PayPalPayment("example@example.com", "password"));
paymentProcessor.processPayment(50);
// Set bank transfer payment strategy
paymentProcessor.setPaymentStrategy(new BankTransferPayment("123456789", "987654321"));
paymentProcessor.processPayment(200);
