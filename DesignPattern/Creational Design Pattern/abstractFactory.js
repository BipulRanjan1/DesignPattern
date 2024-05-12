// Concrete Bollywood Movie
var BollywoodMovie = /** @class */ (function () {
    function BollywoodMovie(name) {
        this.name = name;
    }
    BollywoodMovie.prototype.getName = function () {
        return this.name;
    };
    return BollywoodMovie;
}());
// Concrete Hollywood Movie
var HollywoodMovie = /** @class */ (function () {
    function HollywoodMovie(name) {
        this.name = name;
    }
    HollywoodMovie.prototype.getName = function () {
        return this.name;
    };
    return HollywoodMovie;
}());
// Concrete Tollywood Movie
var TollywoodMovie = /** @class */ (function () {
    function TollywoodMovie(name) {
        this.name = name;
    }
    TollywoodMovie.prototype.getName = function () {
        return this.name;
    };
    return TollywoodMovie;
}());
// Concrete Bollywood MovieFactory
var BollywoodMovieFactory = /** @class */ (function () {
    function BollywoodMovieFactory() {
    }
    BollywoodMovieFactory.prototype.createMovie = function (name) {
        return new BollywoodMovie(name);
    };
    return BollywoodMovieFactory;
}());
// Concrete Hollywood MovieFactory
var HollywoodMovieFactory = /** @class */ (function () {
    function HollywoodMovieFactory() {
    }
    HollywoodMovieFactory.prototype.createMovie = function (name) {
        return new HollywoodMovie(name);
    };
    return HollywoodMovieFactory;
}());
// Concrete Tollywood MovieFactory
var TollywoodMovieFactory = /** @class */ (function () {
    function TollywoodMovieFactory() {
    }
    TollywoodMovieFactory.prototype.createMovie = function (name) {
        return new TollywoodMovie(name);
    };
    return TollywoodMovieFactory;
}());
// Usage
var bollywoodFactory = new BollywoodMovieFactory();
var bollywoodMovie = bollywoodFactory.createMovie("Gully Boy");
var hollywoodFactory = new HollywoodMovieFactory();
var hollywoodMovie = hollywoodFactory.createMovie("Avengers: Endgame");
var tollywoodFactory = new TollywoodMovieFactory();
var tollywoodMovie = tollywoodFactory.createMovie("Bahubali");
console.log(bollywoodMovie.getName()); // Output: Gully Boy
console.log(hollywoodMovie.getName()); // Output: Avengers: Endgame
console.log(tollywoodMovie.getName()); // Output: Bahubali
