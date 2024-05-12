// Define the Target interface expected by the client
interface ElectronicDevice {
    plug(): void;
}
 
// Adaptee: This is the existing class with an incompatible interface
class EuropeanDevice {
    plugInEurope(): void {
        console.log("Plugged into European outlet");
    }
}
 
class USDevice {
    plugInUS(): void {
        console.log("Plugged into US outlet");
    }
}
 
class IndianDevice {
    plugInIndia(): void {
        console.log("Plugged into Indian outlet");
    }
}
 
// Adapter: This class adapts the Adaptee interface to the Target interface
class Adapter implements ElectronicDevice {
    private adaptee: EuropeanDevice | USDevice | IndianDevice;
 
    constructor(device: EuropeanDevice | USDevice | IndianDevice) {
        this.adaptee = device;
    }
 
    plug(): void {
        console.log('Adapter converts Adaptee interface to ElectronicDevice interface');
        if (this.adaptee instanceof EuropeanDevice) {
            (this.adaptee as EuropeanDevice).plugInEurope();
        } else if (this.adaptee instanceof USDevice) {
            (this.adaptee as USDevice).plugInUS();
        } else if (this.adaptee instanceof IndianDevice) {
            (this.adaptee as IndianDevice).plugInIndia();
        }
    }
}
 
// Client code that expects the ElectronicDevice interface
function clientCode(device: ElectronicDevice): void {
    device.plug();
}
 
// Usage
const europeanDevice = new EuropeanDevice();
const europeanAdapter = new Adapter(europeanDevice);
 
const usDevice = new USDevice();
const usAdapter = new Adapter(usDevice);
 
const indianDevice = new IndianDevice();
const indianAdapter = new Adapter(indianDevice);
 
console.log('Client: I can work with the ElectronicDevice interface in Europe:');
clientCode(europeanAdapter);
 
console.log('Client: I can work with the ElectronicDevice interface in US:');
clientCode(usAdapter);
 
console.log('Client: I can work with the ElectronicDevice interface in India:');
clientCode(indianAdapter);