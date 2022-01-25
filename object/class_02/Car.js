export default class Car {
    horsePower = 70;
    constructor(color, brand, country="Deutschland") {
        this.color = color;
        this.brand = brand;
        this.country = country;
    }

    printSpecification() {
        console.log(this.color + " - " + this.brand + " - " + this.horsePower + " - " + this.country);
    }
}