var Swift = /** @class */ (function () {
    function Swift() {
    }
    Swift.prototype.getModel = function () {
        return 'Swift';
    };
    return Swift;
}());
var Baleno = /** @class */ (function () {
    function Baleno() {
    }
    Baleno.prototype.getModel = function () {
        return 'Baleno';
    };
    return Baleno;
}());
var VitaraBrezza = /** @class */ (function () {
    function VitaraBrezza() {
    }
    VitaraBrezza.prototype.getModel = function () {
        return 'Vitara Brezza';
    };
    return VitaraBrezza;
}());
// Define the CarFactory to create instances of different car models
var MarutiSuzukiFactory = /** @class */ (function () {
    function MarutiSuzukiFactory() {
    }
    MarutiSuzukiFactory.prototype.createCar = function (model) {
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
    };
    return MarutiSuzukiFactory;
}());
var marutiFactory = new MarutiSuzukiFactory();
var swift = marutiFactory.createCar('Swift');
console.log(swift.getModel());
var baleno = marutiFactory.createCar('Baleno');
console.log(baleno.getModel());
var vitarabrezza = marutiFactory.createCar('VitaraBrezza');
console.log(vitarabrezza.getModel());
