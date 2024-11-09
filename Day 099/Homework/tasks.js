class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    };
};

const BMWJeep = new Car("BMW", "Jeep");

console.log(BMWJeep.make);
console.log(BMWJeep.model);

console.log(BMWJeep);