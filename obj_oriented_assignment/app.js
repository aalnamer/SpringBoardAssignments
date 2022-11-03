// Create a class for vehicle. Each vehicle instance should have the following properties:

// make
// model
// year
// Each vehicle instance should have access to a method called honk, which returns the string “Beep.”

// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk(); // "Beep."

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "beep";
  }
  toString() {
    return `This vechicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
const honda = new Vehicle();

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!";
  }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
  constructor(capacity) {
    this.vechicles = [];
    this.capacity = capacity;
  }
  add(newVehicle) {
    if (this.vechicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vechicles.push(newVehicle);
    return "Vehicle Added!";
  }
}

let garage = new Garage(2);
