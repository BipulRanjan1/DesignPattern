// Concrete State: Red Light
var RedLight = /** @class */ (function () {
    function RedLight() {
    }
    RedLight.prototype.transitionTo = function (nextState) {
        console.log("Transitioning from Red to", nextState.constructor.name);
    };
    RedLight.prototype.display = function () {
        console.log("Red Light - STOP");
    };
    return RedLight;
}());
// Concrete State: Yellow Light
var YellowLight = /** @class */ (function () {
    function YellowLight() {
    }
    YellowLight.prototype.transitionTo = function (nextState) {
        console.log("Transitioning from Yellow to", nextState.constructor.name);
    };
    YellowLight.prototype.display = function () {
        console.log("Yellow Light - PREPARE TO STOP");
    };
    return YellowLight;
}());
// Concrete State: Green Light
var GreenLight = /** @class */ (function () {
    function GreenLight() {
    }
    GreenLight.prototype.transitionTo = function (nextState) {
        console.log("Transitioning from Green to", nextState.constructor.name);
    };
    GreenLight.prototype.display = function () {
        console.log("Green Light - GO");
    };
    return GreenLight;
}());
// Context: Traffic Light Control System
var TrafficLight = /** @class */ (function () {
    function TrafficLight(initialState) {
        this.currentState = initialState;
    }
    TrafficLight.prototype.setState = function (newState) {
        this.currentState = newState;
    };
    TrafficLight.prototype.displayCurrentState = function () {
        this.currentState.display();
    };
    TrafficLight.prototype.changeState = function (nextState) {
        this.currentState.transitionTo(nextState);
        this.currentState = nextState;
    };
    return TrafficLight;
}());
// Usage
var redLight = new RedLight();
var yellowLight = new YellowLight();
var greenLight = new GreenLight();
var trafficLight = new TrafficLight(redLight);
trafficLight.displayCurrentState(); // Output: Red Light - STOP
trafficLight.changeState(yellowLight); // Output: Transitioning from Red to YellowLight
trafficLight.displayCurrentState(); // Output: Yellow Light - PREPARE TO STOP
trafficLight.changeState(greenLight); // Output: Transitioning from Yellow to GreenLight
trafficLight.displayCurrentState(); // Output: Green Light - GO
