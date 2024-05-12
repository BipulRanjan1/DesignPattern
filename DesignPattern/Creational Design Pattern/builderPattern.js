var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.car = new Car();
    }
    CarBuilder.prototype.setSeats = function (seats) {
        this.car.setSeats(seats);
        return this;
    };
    CarBuilder.prototype.setEngine = function (engine) {
        this.car.setEngine(engine);
        return this;
    };
    CarBuilder.prototype.getResult = function () {
        return this.car;
    };
    return CarBuilder;
}());
var MotorcycleBuilder = /** @class */ (function () {
    function MotorcycleBuilder() {
        this.motorcycle = new Motorcycle();
    }
    MotorcycleBuilder.prototype.setSeats = function (seats) {
        this.motorcycle.setSeats(seats);
        return this;
    };
    MotorcycleBuilder.prototype.setEngine = function (engine) {
        this.motorcycle.setEngine(engine);
        return this;
    };
    MotorcycleBuilder.prototype.getResult = function () {
        return this.motorcycle;
    };
    return MotorcycleBuilder;
}());
var car = new CarBuilder().setSeats(2).setEngine("V-12").getResult();
var motorcycle = new MotorcycleBuilder().setSeats(2).setEngine("V-4").getResult();
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.buildFerrari = function () {
        return new CarBuilder().setSeats(2).setEngine("V-12").getResult();
    };
    Director.prototype.buildToyota = function () {
        return new CarBuilder().setSeats(7).setEngine("V-6").getResult();
    };
    Director.prototype.buildHonda = function () {
        return new MotorcycleBuilder().setSeats(2).setEngine("V-4").getResult();
    };
    Director.prototype.buildYamaha = function () {
        return new MotorcycleBuilder().setSeats(1).setEngine("V-2").getResult();
    };
    return Director;
}());
var director = new Director();
director.buildFerrari();
director.buildToyota();
director.buildHonda();
director.buildYamaha();
