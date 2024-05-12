// Concrete Mediator: Air Traffic Control Tower
var AirTrafficControlTower = /** @class */ (function () {
    function AirTrafficControlTower() {
        this.aircrafts = [];
    }
    AirTrafficControlTower.prototype.registerAircraft = function (aircraft) {
        this.aircrafts.push(aircraft);
    };
    AirTrafficControlTower.prototype.sendMessage = function (message, sender) {
        console.log("Message from ".concat(sender.name, ": ").concat(message));
        this.aircrafts.forEach(function (aircraft) {
            if (aircraft !== sender) {
                aircraft.receiveMessage(message);
            }
        });
    };
    return AirTrafficControlTower;
}());
// Concrete Colleague: Aircraft
var Airplane = /** @class */ (function () {
    function Airplane(name, airTrafficControl) {
        this.name = name;
        this.airTrafficControl = airTrafficControl;
        this.airTrafficControl.registerAircraft(this);
    }
    Airplane.prototype.sendMessage = function (message) {
        this.airTrafficControl.sendMessage(message, this);
    };
    Airplane.prototype.receiveMessage = function (message) {
        console.log("".concat(this.name, " received: ").concat(message));
    };
    return Airplane;
}());
// Usage
var controlTower = new AirTrafficControlTower();
var airplane1 = new Airplane("Flight 123", controlTower);
var airplane2 = new Airplane("Flight 456", controlTower);
airplane1.sendMessage("Ready for landing clearance.");
airplane2.sendMessage("Please confirm takeoff clearance.");
// Output:
// Message from Flight 123: Ready for landing clearance.
// Flight 456 received: Ready for landing clearance.
// Message from Flight 456: Please confirm takeoff clearance.
// Flight 123 received: Please confirm takeoff clearance.
