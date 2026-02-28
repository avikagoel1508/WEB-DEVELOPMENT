class vehicle{
    constructor(name, price, model){
        this.name=name;
        this.price=price;
        this.model=model;
    }
}
class car extends vehicle{
    constructor(name, price, model, type, fuel, horsePower){
        super(name, price, model)
        this.type=type;
        this.fuel=fuel;
        this.horsePower=horsePower
    }

}
class Bike extends vehicle{
    constructor( name, price, model, cc, acceleration, standtype){
        super(name, price, model)
        this.cc=cc;
        this.acceleration=acceleration;
        this.standtype=standtype
    }
}
let b=new Bike("Honda", 4000000, "new")
console.log(b)