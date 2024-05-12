// Observer interface
interface Observer {
    update(stockName: string, price: number): void;
}

// Subject interface
interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(stockName: string, price: number): void;
}

// Concrete Subject: StockMarket
class StockMarket implements Subject {
    private observers: Observer[] = [];

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(stockName: string, price: number): void {
        this.observers.forEach(observer => {
            observer.update(stockName, price);
        });
    }

    // Simulate stock price update
    updateStockPrice(stockName: string, price: number): void {
        console.log(`Stock price update for ${stockName}: $${price}`);
        this.notifyObservers(stockName, price);
    }
}

// Concrete Observer: StockInvestor
class StockInvestor implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(stockName: string, price: number): void {
        console.log(`${this.name} received update for ${stockName}: $${price}`);
    }
}

// Usage
const stockMarket = new StockMarket();

const investor1 = new StockInvestor("John");
const investor2 = new StockInvestor("Alice");

stockMarket.registerObserver(investor1);
stockMarket.registerObserver(investor2);

// Simulate stock price updates
stockMarket.updateStockPrice("Apple", 150.25);
stockMarket.updateStockPrice("Google", 280.50);


