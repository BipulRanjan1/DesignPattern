var Tier1Support = /** @class */ (function () {
    function Tier1Support() {
        this.nextHandler = null;
    }
    Tier1Support.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    Tier1Support.prototype.handle = function (request) {
        if (request === 'Internet') {
            console.log(" Resolved by frontline support.");
        }
        else if (this.nextHandler) {
            console.log(" Unable to resolve by frontline support, escalating to Tier 2.");
            this.nextHandler.handle(request);
        }
        else {
            console.log(" Unable to resolve, ticket closed.");
        }
    };
    return Tier1Support;
}());
var Tier2Support = /** @class */ (function () {
    function Tier2Support() {
        this.nextHandler = null;
    }
    Tier2Support.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    Tier2Support.prototype.handle = function (request) {
        if (request === 'software') {
            console.log("Resolved by Tier 2 support.");
        }
        else if (this.nextHandler) {
            console.log("Unable to resolve by Tier 2, escalating to Tier 3.");
            this.nextHandler.handle(request);
        }
        else {
            console.log("Unable to resolve, ticket closed.");
        }
    };
    return Tier2Support;
}());
var Tier3Support = /** @class */ (function () {
    function Tier3Support() {
    }
    Tier3Support.prototype.setNext = function (handler) { return handler; };
    Tier3Support.prototype.handle = function (request) {
        if (request === 'network') {
            console.log(" Resolved by Tier 3 support.");
        }
        else {
            console.log(" Unable to resolve, ticket closed.");
        }
    };
    return Tier3Support;
}());
var frontline = new Tier1Support();
var tier2 = new Tier2Support();
var tier3 = new Tier3Support();
frontline.setNext(tier2).setNext(tier3);
frontline.handle('Internet');
frontline.handle('software');
frontline.handle('network');
frontline.handle('other');
