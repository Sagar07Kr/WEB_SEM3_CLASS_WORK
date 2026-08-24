
function greet(city,state,country){
    console.log(this);
    console.log("hii..");
    console.log(city);
    this.name="sagar";
    console.log(this);  
}


const user={
    name:"vikash",
    age:20,
}

let greetbind=greet.bind(user);//soft core
// let greetbind=greet.bind(user,"madhubani","bihar","india")//hard core
greetbind("madhubani","bihar","india");
user.name="nikhil";
greetbind("lucknoww","bihar","india");