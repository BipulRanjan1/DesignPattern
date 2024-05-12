// Subsystem: Engine
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        console.log("Engine started");
    };
    Engine.prototype.stop = function () {
        console.log("Engine stopped");
    };
    return Engine;
}());
// Subsystem: AC
var AirConditioner = /** @class */ (function () {
    function AirConditioner() {
    }
    AirConditioner.prototype.turnOn = function () {
        console.log("AC turned on");
    };
    AirConditioner.prototype.turnOff = function () {
        console.log("AC turned off");
    };
    return AirConditioner;
}());
// Subsystem: Lights
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.turnOn = function () {
        console.log("Lights turned on");
    };
    Lights.prototype.turnOff = function () {
        console.log("Lights turned off");
    };
    return Lights;
}());
// Facade: CarFacade
var CarFacade = /** @class */ (function () {
    function CarFacade() {
        this.engine = new Engine();
        this.ac = new AirConditioner();
        this.lights = new Lights();
    }
    CarFacade.prototype.startCar = function () {
        this.engine.start();
        this.ac.turnOn();
        this.lights.turnOn();
        console.log("Car started");
    };
    CarFacade.prototype.stopCar = function () {
        this.engine.stop();
        this.ac.turnOff();
        this.lights.turnOff();
        console.log("Car stopped");
    };
    return CarFacade;
}());
// Usage
var carFacade = new CarFacade();
// Start the car
console.log("Starting the car...");
carFacade.startCar();
// Stop the car
console.log("\nStopping the car...");
carFacade.stopCar();
