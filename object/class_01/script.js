class car {
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

let c1 = new car("red", "Ferrari", "Italien");
let c2 = new car("green", "BMW");
c1.printSpecification();
c2.printSpecification();