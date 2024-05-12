// Define the Card interface
interface Card {
    getCardNumber(): string;
    getBalance(): number;
    addFunds(amount: number): void;
    makePayment(amount: number): void;
}

// Concrete implementation of the Card interface
class ConcreteCard implements Card {
    private cardNumber: string;
    private balance: number;

    constructor(cardNumber: string, balance: number) {
        this.cardNumber = cardNumber;
        this.balance = balance;
    }

    getCardNumber(): string {
        return this.cardNumber;
    }

    getBalance(): number {
        return this.balance;
    }

    addFunds(amount: number): void {
        this.balance += amount;
        console.log(`Added ${amount} to the card. New balance: ${this.balance}`);
    }

    makePayment(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Payment of ${amount} successful. Remaining balance: ${this.balance}`);
        } else {
            console.log(`Insufficient balance. Payment of ${amount} failed.`);
        }
    }
}

// Proxy for the Card interface
class CardProxy implements Card {
    private card: ConcreteCard;
    private isAdmin: boolean;

    constructor(cardNumber: string, balance: number, isAdmin: boolean) {
        this.card = new ConcreteCard(cardNumber, balance);
        this.isAdmin = isAdmin;
    }

    getCardNumber(): string {
        return this.card.getCardNumber();
    }

    getBalance(): number {
        return this.card.getBalance();
    }

    addFunds(amount: number): void {
        if (this.isAdmin) {
            this.card.addFunds(amount);
        } else {
            console.log("Permission denied. Only administrators can add funds.");
        }
    }

    makePayment(amount: number): void {
        this.card.makePayment(amount);
    }
}

// Example usage
const userCard = new CardProxy("1234-5678-9012-3456", 100, false);
console.log(userCard.getCardNumber()); // Output: "1234-5678-9012-3456"
console.log(userCard.getBalance()); // Output: 100
userCard.addFunds(50); // Output: "Permission denied. Only administrators can add funds."
userCard.makePayment(75); // Output: "Payment of 75 successful. Remaining balance: 25"
