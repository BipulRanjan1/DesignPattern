// Flyweight interface
interface Robot {
    display(x: number, y: number): void;
}
 
// Concrete flyweight: Robot implementation
class ConcreteRobot implements Robot {
    private type: string;
 
    constructor(type: string) {
        this.type = type;
    }
 
    display(x: number, y: number): void {
        console.log(`Robot type: ${this.type}, Position: (${x}, ${y})`);
    }
}
 
// Flyweight factory
class RobotFactory {
    private robots: { [key: string]: Robot } = {};
 
    getRobot(type: string): Robot {
        if (!this.robots[type]) {
            console.log(`Creating new robot of type ${type}`);
            this.robots[type] = new ConcreteRobot(type);
        }
        return this.robots[type];
    }
}
 
// Usage
const factory = new RobotFactory();
 
const robot1 = factory.getRobot("Small");
robot1.display(10, 20); // Creating new robot of type Small, Robot type: Small, Position: (10, 20)
 
const robot2 = factory.getRobot("Large");
robot2.display(30, 40); // Creating new robot of type Large, Robot type: Large, Position: (30, 40)
 
const robot3 = factory.getRobot("Small");
robot3.display(50, 60); // Robot type: Small, Position: (50, 60) - Reusing existing small robot
 
const robot4 = factory.getRobot("Large");
robot4.display(70, 80); // Robot type: Large, Position: (70, 80) - Reusing existing large robot