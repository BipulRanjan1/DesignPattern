// Concrete flyweight: Robot implementation
var ConcreteRobot = /** @class */ (function () {
    function ConcreteRobot(type) {
        this.type = type;
    }
    ConcreteRobot.prototype.display = function (x, y) {
        console.log("Robot type: ".concat(this.type, ", Position: (").concat(x, ", ").concat(y, ")"));
    };
    return ConcreteRobot;
}());
// Flyweight factory
var RobotFactory = /** @class */ (function () {
    function RobotFactory() {
        this.robots = {};
    }
    RobotFactory.prototype.getRobot = function (type) {
        if (!this.robots[type]) {
            console.log("Creating new robot of type ".concat(type));
            this.robots[type] = new ConcreteRobot(type);
        }
        return this.robots[type];
    };
    return RobotFactory;
}());
// Usage
var factory = new RobotFactory();
var robot1 = factory.getRobot("Small");
robot1.display(10, 20); // Creating new robot of type Small, Robot type: Small, Position: (10, 20)
var robot2 = factory.getRobot("Large");
robot2.display(30, 40); // Creating new robot of type Large, Robot type: Large, Position: (30, 40)
var robot3 = factory.getRobot("Small");
robot3.display(50, 60); // Robot type: Small, Position: (50, 60) - Reusing existing small robot
var robot4 = factory.getRobot("Large");
robot4.display(70, 80); // Robot type: Large, Position: (70, 80) - Reusing existing large robot
