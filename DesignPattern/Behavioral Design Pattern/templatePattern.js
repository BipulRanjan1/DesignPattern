var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract class for House Builder
var HouseBuilder = /** @class */ (function () {
    function HouseBuilder() {
    }
    // Template method for building a house
    HouseBuilder.prototype.buildHouse = function () {
        this.buildFoundation();
        this.buildWalls();
        this.buildRoof();
    };
    return HouseBuilder;
}());
// Concrete House Builder: Wooden House Builder
var WoodenHouseBuilder = /** @class */ (function (_super) {
    __extends(WoodenHouseBuilder, _super);
    function WoodenHouseBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WoodenHouseBuilder.prototype.buildFoundation = function () {
        console.log("Building wooden house foundation");
    };
    WoodenHouseBuilder.prototype.buildWalls = function () {
        console.log("Building wooden house walls");
    };
    WoodenHouseBuilder.prototype.buildRoof = function () {
        console.log("Building wooden house roof");
    };
    return WoodenHouseBuilder;
}(HouseBuilder));
// Concrete House Builder: Concrete House Builder
var ConcreteHouseBuilder = /** @class */ (function (_super) {
    __extends(ConcreteHouseBuilder, _super);
    function ConcreteHouseBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteHouseBuilder.prototype.buildFoundation = function () {
        console.log("Building concrete house foundation");
    };
    ConcreteHouseBuilder.prototype.buildWalls = function () {
        console.log("Building concrete house walls");
    };
    ConcreteHouseBuilder.prototype.buildRoof = function () {
        console.log("Building concrete house roof");
    };
    return ConcreteHouseBuilder;
}(HouseBuilder));
// Client
var HomeDirector = /** @class */ (function () {
    function HomeDirector(builder) {
        this.houseBuilder = builder;
    }
    HomeDirector.prototype.constructHouse = function () {
        this.houseBuilder.buildHouse();
    };
    return HomeDirector;
}());
// Usage
var woodenHouseBuilder = new WoodenHouseBuilder();
var concreteHouseBuilder = new ConcreteHouseBuilder();
var woodenHouseDirector = new HomeDirector(woodenHouseBuilder);
woodenHouseDirector.constructHouse();
var concreteHouseDirector = new HomeDirector(concreteHouseBuilder);
concreteHouseDirector.constructHouse();
