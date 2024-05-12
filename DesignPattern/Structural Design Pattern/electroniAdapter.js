// Adaptee: This is the existing class with an incompatible interface
var EuropeanDevice = /** @class */ (function () {
    function EuropeanDevice() {
    }
    EuropeanDevice.prototype.plugInEurope = function () {
        console.log("Plugged into European outlet");
    };
    return EuropeanDevice;
}());
var USDevice = /** @class */ (function () {
    function USDevice() {
    }
    USDevice.prototype.plugInUS = function () {
        console.log("Plugged into US outlet");
    };
    return USDevice;
}());
var IndianDevice = /** @class */ (function () {
    function IndianDevice() {
    }
    IndianDevice.prototype.plugInIndia = function () {
        console.log("Plugged into Indian outlet");
    };
    return IndianDevice;
}());
// Adapter: This class adapts the Adaptee interface to the Target interface
var Adapter = /** @class */ (function () {
    function Adapter(device) {
        this.adaptee = device;
    }
    Adapter.prototype.plug = function () {
        console.log('Adapter converts Adaptee interface to ElectronicDevice interface');
        if (this.adaptee instanceof EuropeanDevice) {
            this.adaptee.plugInEurope();
        }
        else if (this.adaptee instanceof USDevice) {
            this.adaptee.plugInUS();
        }
        else if (this.adaptee instanceof IndianDevice) {
            this.adaptee.plugInIndia();
        }
    };
    return Adapter;
}());
// Client code that expects the ElectronicDevice interface
function clientCode(device) {
    device.plug();
}
// Usage
var europeanDevice = new EuropeanDevice();
var europeanAdapter = new Adapter(europeanDevice);
var usDevice = new USDevice();
var usAdapter = new Adapter(usDevice);
var indianDevice = new IndianDevice();
var indianAdapter = new Adapter(indianDevice);
console.log('Client: I can work with the ElectronicDevice interface in Europe:');
clientCode(europeanAdapter);
console.log('Client: I can work with the ElectronicDevice interface in US:');
clientCode(usAdapter);
console.log('Client: I can work with the ElectronicDevice interface in India:');
clientCode(indianAdapter);
