// Concrete Subject: StockMarket
var StockMarket = /** @class */ (function () {
    function StockMarket() {
        this.observers = [];
    }
    StockMarket.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    StockMarket.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    StockMarket.prototype.notifyObservers = function (stockName, price) {
        this.observers.forEach(function (observer) {
            observer.update(stockName, price);
        });
    };
    // Simulate stock price update
    StockMarket.prototype.updateStockPrice = function (stockName, price) {
        console.log("Stock price update for ".concat(stockName, ": $").concat(price));
        this.notifyObservers(stockName, price);
    };
    return StockMarket;
}());
// Concrete Observer: StockInvestor
var StockInvestor = /** @class */ (function () {
    function StockInvestor(name) {
        this.name = name;
    }
    StockInvestor.prototype.update = function (stockName, price) {
        console.log("".concat(this.name, " received update for ").concat(stockName, ": $").concat(price));
    };
    return StockInvestor;
}());
// Usage
var stockMarket = new StockMarket();
var investor1 = new StockInvestor("John");
var investor2 = new StockInvestor("Alice");
stockMarket.registerObserver(investor1);
stockMarket.registerObserver(investor2);
// Simulate stock price updates
stockMarket.updateStockPrice("Apple", 150.25);
stockMarket.updateStockPrice("Google", 280.50);
