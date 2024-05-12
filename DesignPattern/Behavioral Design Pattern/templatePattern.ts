// Abstract class for House Builder
abstract class HouseBuilder {
    abstract buildFoundation(): void;
    abstract buildWalls(): void;
    abstract buildRoof(): void;

    // Template method for building a house
    buildHouse(): void {
        this.buildFoundation();
        this.buildWalls();
        this.buildRoof();
    }
}

// Concrete House Builder: Wooden House Builder
class WoodenHouseBuilder extends HouseBuilder {
    buildFoundation(): void {
        console.log("Building wooden house foundation");
    }

    buildWalls(): void {
        console.log("Building wooden house walls");
    }

    buildRoof(): void {
        console.log("Building wooden house roof");
    }
}

// Concrete House Builder: Concrete House Builder
class ConcreteHouseBuilder extends HouseBuilder {
    buildFoundation(): void {
        console.log("Building concrete house foundation");
    }

    buildWalls(): void {
        console.log("Building concrete house walls");
    }

    buildRoof(): void {
        console.log("Building concrete house roof");
    }
}

// Client
class HomeDirector {
    private houseBuilder: HouseBuilder;

    constructor(builder: HouseBuilder) {
        this.houseBuilder = builder;
    }

    constructHouse(): void {
        this.houseBuilder.buildHouse();
    }
}

// Usage
const woodenHouseBuilder = new WoodenHouseBuilder();
const concreteHouseBuilder = new ConcreteHouseBuilder();

const woodenHouseDirector = new HomeDirector(woodenHouseBuilder);
woodenHouseDirector.constructHouse();

const concreteHouseDirector = new HomeDirector(concreteHouseBuilder);
concreteHouseDirector.constructHouse();
