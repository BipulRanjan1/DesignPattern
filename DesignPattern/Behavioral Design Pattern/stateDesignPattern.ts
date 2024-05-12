// Interface for Traffic Light States
interface TrafficLightState {
    transitionTo(nextState: TrafficLightState): void;
    display(): void;
}

// Concrete State: Red Light
class RedLight implements TrafficLightState {
    transitionTo(nextState: TrafficLightState): void {
        console.log("Transitioning from Red to", nextState.constructor.name);
    }

    display(): void {
        console.log("Red Light - STOP");
    }
}

// Concrete State: Yellow Light
class YellowLight implements TrafficLightState {
    transitionTo(nextState: TrafficLightState): void {
        console.log("Transitioning from Yellow to", nextState.constructor.name);
    }

    display(): void {
        console.log("Yellow Light - PREPARE TO STOP");
    }
}

// Concrete State: Green Light
class GreenLight implements TrafficLightState {
    transitionTo(nextState: TrafficLightState): void {
        console.log("Transitioning from Green to", nextState.constructor.name);
    }

    display(): void {
        console.log("Green Light - GO");
    }
}

// Context: Traffic Light Control System
class TrafficLight {
    private currentState: TrafficLightState;

    constructor(initialState: TrafficLightState) {
        this.currentState = initialState;
    }

    setState(newState: TrafficLightState): void {
        this.currentState = newState;
    }

    displayCurrentState(): void {
        this.currentState.display();
    }

    changeState(nextState: TrafficLightState): void {
        this.currentState.transitionTo(nextState);
        this.currentState = nextState;
    }
}

// Usage
const redLight = new RedLight();
const yellowLight = new YellowLight();
const greenLight = new GreenLight();

const trafficLight = new TrafficLight(redLight);

trafficLight.displayCurrentState(); // Output: Red Light - STOP

trafficLight.changeState(yellowLight); // Output: Transitioning from Red to YellowLight
trafficLight.displayCurrentState(); // Output: Yellow Light - PREPARE TO STOP

trafficLight.changeState(greenLight); // Output: Transitioning from Yellow to GreenLight
trafficLight.displayCurrentState(); // Output: Green Light - GO
