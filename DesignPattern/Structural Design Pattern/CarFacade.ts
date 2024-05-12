// Subsystem: Engine
class Engine {
    start(): void {
        console.log("Engine started");
    }
 
    stop(): void {
        console.log("Engine stopped");
    }
}
 
// Subsystem: AC
class AirConditioner {
    turnOn(): void {
        console.log("AC turned on");
    }
 
    turnOff(): void {
        console.log("AC turned off");
    }
}
 
// Subsystem: Lights
class Lights {
    turnOn(): void {
        console.log("Lights turned on");
    }
 
    turnOff(): void {
        console.log("Lights turned off");
    }
}
 
// Facade: CarFacade
class CarFacade {
    private engine: Engine;
    private ac: AirConditioner;
    private lights: Lights;
 
    constructor() {
        this.engine = new Engine();
        this.ac = new AirConditioner();
        this.lights = new Lights();
    }
 
    startCar(): void {
        this.engine.start();
        this.ac.turnOn();
        this.lights.turnOn();
        console.log("Car started");
    }
 
    stopCar(): void {
        this.engine.stop();
        this.ac.turnOff();
        this.lights.turnOff();
        console.log("Car stopped");
    }
}
 
// Usage
const carFacade = new CarFacade();
 
// Start the car
console.log("Starting the car...");
carFacade.startCar();
 
// Stop the car
console.log("\nStopping the car...");
carFacade.stopCar();
 