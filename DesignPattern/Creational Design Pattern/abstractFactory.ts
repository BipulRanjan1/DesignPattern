// Abstract Movie interface
interface Movie {
    getName(): string;
}
 
// Concrete Bollywood Movie
class BollywoodMovie implements Movie {
    private name: string;
 
    constructor(name: string) {
        this.name = name;
    }
 
    getName(): string {
        return this.name;
    }
}
 
// Concrete Hollywood Movie
class HollywoodMovie implements Movie {
    private name: string;
 
    constructor(name: string) {
        this.name = name;
    }
 
    getName(): string {
        return this.name;
    }
}
 
// Concrete Tollywood Movie
class TollywoodMovie implements Movie {
    private name: string;
 
    constructor(name: string) {
        this.name = name;
    }
 
    getName(): string {
        return this.name;
    }
}
 
// Abstract MovieFactory interface
interface MovieFactory {
    createMovie(name: string): Movie;
}
 
// Concrete Bollywood MovieFactory
class BollywoodMovieFactory implements MovieFactory {
    createMovie(name: string): Movie {
        return new BollywoodMovie(name);
    }
}
 
// Concrete Hollywood MovieFactory
class HollywoodMovieFactory implements MovieFactory {
    createMovie(name: string): Movie {
        return new HollywoodMovie(name);
    }
}
 
// Concrete Tollywood MovieFactory
class TollywoodMovieFactory implements MovieFactory {
    createMovie(name: string): Movie {
        return new TollywoodMovie(name);
    }
}
 
// Usage
const bollywoodFactory: MovieFactory = new BollywoodMovieFactory();
const bollywoodMovie: Movie = bollywoodFactory.createMovie("Gully Boy");
 
const hollywoodFactory: MovieFactory = new HollywoodMovieFactory();
const hollywoodMovie: Movie = hollywoodFactory.createMovie("Avengers: Endgame");
 
const tollywoodFactory: MovieFactory = new TollywoodMovieFactory();
const tollywoodMovie: Movie = tollywoodFactory.createMovie("Bahubali");
 
console.log(bollywoodMovie.getName()); // Output: Gully Boy
console.log(hollywoodMovie.getName()); // Output: Avengers: Endgame
console.log(tollywoodMovie.getName()); // Output: Bahubali