
function payment (city,country){
    console.log("payent completed");
    console.log(this); 
    console.log(this.name);
    console.log(this.age);
    console.log(city);
    console.log(country); 
    this.name="vikash mathura",
    console.log(this.name),
    this.payment=true
}


let obj1={
    name:"vikash",
    age:23
}

let obj2={
    name:"Anmol",
    age:22,
    payment:false,
}

// payment()//this ->refer to global object(window object)
payment.call(obj2,"Delhi","India");
console.log(obj2);

function greet(){
    console.log(this);
}

let user={
    name:"sagar",
    age:23,
}

// greet()//this ->refer to global object(window object)
greet.call(user);//refer to object user