function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    
    this.getCarInfo = function() {
        return `${this.year} ${this.make} ${this.model} - ${this.color}`;
    };
}

const myCar = new Car('Toyota', 'Corolla', 2021, 'White');

console.log(myCar.getCarInfo());