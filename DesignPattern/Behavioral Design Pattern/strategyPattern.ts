// Strategy interface
interface PaymentStrategy {
    pay(amount: number): void;
}

// Concrete Strategy: Credit Card Payment
class CreditCardPayment implements PaymentStrategy {
    constructor(private cardNumber: string, private expiryDate: string, private cvv: string) {}

    pay(amount: number): void {
        console.log(`Paying $${amount} with credit card ${this.cardNumber}`);
        // Add logic to process payment with credit card
    }
}

// Concrete Strategy: PayPal Payment
class PayPalPayment implements PaymentStrategy {
    constructor(private email: string, private password: string) {}

    pay(amount: number): void {
        console.log(`Paying $${amount} with PayPal account ${this.email}`);
        // Add logic to process payment with PayPal
    }
}

// Concrete Strategy: Bank Transfer Payment
class BankTransferPayment implements PaymentStrategy {
    constructor(private accountNumber: string, private routingNumber: string) {}

    pay(amount: number): void {
        console.log(`Paying $${amount} via bank transfer to account ${this.accountNumber}`);
        // Add logic to process payment via bank transfer
    }
}

// Context: Payment Processing System
class PaymentProcessor {
    private paymentStrategy: PaymentStrategy;

    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    processPayment(amount: number): void {
        if (!this.paymentStrategy) {
            throw new Error("Payment strategy not set");
        }
        this.paymentStrategy.pay(amount);
    }
}

// Usage
const paymentProcessor = new PaymentProcessor();

// Set credit card payment strategy
paymentProcessor.setPaymentStrategy(new CreditCardPayment("1234 5678 9012 3456", "12/25", "123"));
paymentProcessor.processPayment(100);

// Set PayPal payment strategy
paymentProcessor.setPaymentStrategy(new PayPalPayment("example@example.com", "password"));
paymentProcessor.processPayment(50);

// Set bank transfer payment strategy
paymentProcessor.setPaymentStrategy(new BankTransferPayment("123456789", "987654321"));
paymentProcessor.processPayment(200);
