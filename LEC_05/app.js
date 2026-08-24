
class car{

    price;
    color;
    model_no;
    constructor(price,color,model_no){
        this.price=price;
        this.color=color;
        this.model_no=model_no;
    }
    start(){
        console.log("Car is Starting");
    }
    stop(){
        console.log("Car is Stoping");
    }
}

let tata=new car;
console.log(tata);

let mahindra=new car;
console.log(mahindra);

let tata_Punch=new car(100000,"red",123);
console.log(tata_Punch);



