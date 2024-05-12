interface Car {
    getModel(): string;
}
 
class Swift implements Car {
    getModel(): string {
        return 'Swift';
    }
}
 
class Baleno implements Car {
    getModel(): string {
        return 'Baleno';
    }
}
 
class VitaraBrezza implements Car {
    getModel(): string {
        return 'Vitara Brezza';
    }
}
 
// Define the CarFactory to create instances of different car models
class MarutiSuzukiFactory {
    createCar(model: string): Car {
        switch (model.toLowerCase()) {
            case 'swift':
                return new Swift();
            case 'baleno':
                return new Baleno();
            case 'vitarabrezza':
                return new VitaraBrezza();
            default:
                throw new Error('Invalid car model.');
        }
    }
}
 

const marutiFactory = new MarutiSuzukiFactory();
 

const swift = marutiFactory.createCar('Swift');
console.log(swift.getModel()); 
 
const baleno = marutiFactory.createCar('Baleno');
console.log(baleno.getModel()); 
 
const vitarabrezza = marutiFactory.createCar('VitaraBrezza');
console.log(vitarabrezza.getModel()); 