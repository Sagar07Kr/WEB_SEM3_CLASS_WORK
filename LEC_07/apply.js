let obj1={
    name:"vikash",
    age:23
}

let obj2={
    name:"Anmol",
    age:22,
    payment:false,
}

function payment (...args){
    console.log(this);
    console.log(args);   
}

payment.apply(obj2,["Mathura","India","Ghoda","Nikhil"])
payment.apply(obj1,["bhajbeva","giuhrw","hougwr","piwgr","uorwg"])


////////////Questions//////////////////

let parth={
    name:"parth",
    display:function(){
        console.log(this.name);
    }
}

let sagar={
    name:"sagar",
    display:function(){
        console.log(this.name);//if arrow function then give undefined;
    },
    display1:()=>{
        console.log("hiiii...");
        console.log(this);//if arrow function then give undefined;
        console.log(this.name);
    }
}

sagar.display();//sagar
sagar.display.call(obj1);//parth
sagar.display1.call(obj1);