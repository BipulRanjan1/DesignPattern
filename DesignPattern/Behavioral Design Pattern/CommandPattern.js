// Concrete command for starting the robot
var StartCommand = /** @class */ (function () {
    function StartCommand(robot) {
        this.robot = robot;
    }
    StartCommand.prototype.execute = function () {
        this.robot.start();
    };
    return StartCommand;
}());
// Concrete command for stopping the robot
var StopCommand = /** @class */ (function () {
    function StopCommand(robot) {
        this.robot = robot;
    }
    StopCommand.prototype.execute = function () {
        this.robot.stop();
    };
    return StopCommand;
}());
// Receiver class - the robot
var Robot = /** @class */ (function () {
    function Robot() {
    }
    Robot.prototype.start = function () {
        console.log("Robot started.");
    };
    Robot.prototype.stop = function () {
        console.log("Robot stopped.");
    };
    return Robot;
}());
// Invoker class - the remote control
var RobotRemoteControl = /** @class */ (function () {
    function RobotRemoteControl(robot) {
        this.startCommand = new StartCommand(robot);
        this.stopCommand = new StopCommand(robot);
    }
    RobotRemoteControl.prototype.pressStartButton = function () {
        this.startCommand.execute();
    };
    RobotRemoteControl.prototype.pressStopButton = function () {
        this.stopCommand.execute();
    };
    return RobotRemoteControl;
}());
// Usage
var robot = new Robot();
var remoteControl = new RobotRemoteControl(robot);
remoteControl.pressStartButton(); // Output: Robot started.
remoteControl.pressStopButton(); // Output: Robot stopped.
