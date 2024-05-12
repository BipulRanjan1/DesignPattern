
interface Command {
    execute(): void;
}

class StartCommand implements Command {
    private robot: Robot;

    constructor(robot: Robot) {
        this.robot = robot;
    }

    execute(): void {
        this.robot.start();
    }
}

// Concrete command for stopping the robot
class StopCommand implements Command {
    private robot: Robot;

    constructor(robot: Robot) {
        this.robot = robot;
    }

    execute(): void {
        this.robot.stop();
    }
}

// Receiver class - the robot
class Robot {
    start(): void {
        console.log("Robot started.");
    }

    stop(): void {
        console.log("Robot stopped.");
    }
}

// Invoker class - the remote control
class RobotRemoteControl {
    private startCommand: Command;
    private stopCommand: Command;

    constructor(robot: Robot) {
        this.startCommand = new StartCommand(robot);
        this.stopCommand = new StopCommand(robot);
    }

    pressStartButton(): void {
        this.startCommand.execute();
    }

    pressStopButton(): void {
        this.stopCommand.execute();
    }
}

// Usage
const robot = new Robot();
const remoteControl = new RobotRemoteControl(robot);

remoteControl.pressStartButton(); // Output: Robot started.
remoteControl.pressStopButton();  // Output: Robot stopped.
