//singleton
var Singleton = /** @class */ (function () {
    function Singleton() {
        // Private constructor to prevent instantiation from outside the class
        this.data = Math.random(); // Example initialization
    }
    Singleton.getInstance = function () {
        // Static method to get the singleton instance
        if (!Singleton.instance) {
            // Create the instance if it doesn't exist
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.getData = function () {
        // Example method to access data
        return this.data;
    };
    Singleton.instance = null; // Static variable to hold the singleton instance
    return Singleton;
}());
// Usage
var singleton1 = Singleton.getInstance();
var singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // Output: true, both instances are the same
console.log(singleton1.getData()); // Output: Some random number
console.log(singleton2.getData()); // Output: Same random number as singleton1
