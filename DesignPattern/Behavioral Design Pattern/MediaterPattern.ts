// Mediator interface
interface AirTrafficControl {
    sendMessage(message: string, sender: Aircraft): void;
}

// Concrete Mediator: Air Traffic Control Tower
class AirTrafficControlTower implements AirTrafficControl {
    private aircrafts: Aircraft[] = [];

    registerAircraft(aircraft: Aircraft): void {
        this.aircrafts.push(aircraft);
    }

    sendMessage(message: string, sender: Aircraft): void {
        console.log(`Message from ${sender.name}: ${message}`);
        this.aircrafts.forEach(aircraft => {
            if (aircraft !== sender) {
                aircraft.receiveMessage(message);
            }
        });
    }
}

// Colleague interface
interface Aircraft {
    name: string;
    sendMessage(message: string): void;
    receiveMessage(message: string): void;
}

// Concrete Colleague: Aircraft
class Airplane implements Aircraft {
    constructor(public name: string, private airTrafficControl: AirTrafficControl) {
        this.airTrafficControl.registerAircraft(this);
    }

    sendMessage(message: string): void {
        this.airTrafficControl.sendMessage(message, this);
    }

    receiveMessage(message: string): void {
        console.log(`${this.name} received: ${message}`);
    }
}


const controlTower = new AirTrafficControlTower();

const airplane1 = new Airplane("Flight 123", controlTower);
const airplane2 = new Airplane("Flight 456", controlTower);

airplane1.sendMessage("Ready for landing clearance.");
airplane2.sendMessage("Please confirm takeoff clearance.");


