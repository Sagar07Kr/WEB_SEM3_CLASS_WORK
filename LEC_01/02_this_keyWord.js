
console.log(this);// broser -->GLOBAL OBJECT(WINDOW OBJECT)
                 //  Node-->GLOBAL OBJECT(EMPTY OBJECT --> {})

                 
let obj={
    // full name:"sagar"-->error(space in key so use string for key or use scorebar(standard))
    "full name":"sagar kumar",
    full_name:"sagar",
    "age":20,
    "dis":"MADHUBANI",
    "state":"BIHAR",
    " ":"MITHILA",
    displayInfo:function(){
        console.log("hii");
        console.log(this);  
    }
}

obj.displayInfo();//full object display 
console.log(obj.displayInfo);//function 

console.log(obj.dis);
console.log(obj["state"]);
console.log(obj[" "]);
// console.log(obj. );error for mithila
console.log(obj.full_name);
console.log(obj.displayInfo());



let obj2={

    "full name":"sagar kumar",
    full_name:"sagar",
    "age":20,
    "dis":"MADHUBANI",
    "state":"BIHAR",
    " ":"MITHILA",
    displayInfo:function(){
        console.log("hii");
        console.log(this);  
        return this;
    }
}

obj2.displayInfo;
obj2.displayInfo();
console.log(obj2.displayInfo());//undefined if no return
console.log(obj2.displayInfo());//if this return then all obj 2
