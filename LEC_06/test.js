class person{
    name;
    age;
    district;
    constructor(name,age,district){
        this.name=name;
        this.age=age;
        this.district=district;
    }
    walk(){
        console.log(this.name ,"is Walking");
    }

    run(){
        console.log(this.name ,"is runing");
    }
}

let aman=new person("aman",24,"bhagalpur");
aman.walk();
aman.run();
let aj=new person("aj",23,"vaishali")
aj.walk();
aj.run();