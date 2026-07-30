let obj={
    "name":"sagar",
    "age":20,
    "district":"madhubani",
    "state":"Bihar",
    displayInfo:function(){
        console.log(this); 
        console.log(this.a);//give error because this keyword refrecnce to local object and in local object there is no "a" variable. 
    }
}

console.log(obj.displayInfo);//give function object
console.log(obj.displayInfo());//obj print hoga then undefined aayega



var a=90;
let obj1={
    "name":"sagar kumar",
    "age":21,
    "district":"madhubaniiiii",
    "state":"Biharrrrrr",
    displayInfo:()=>{
        console.log(this);  //this give global object that is window in case of brower because of array function.
        console.log(this.a);//here this denote global object so give 90 as output because of arrow function.
        
    }
}
console.log(obj.displayInfo);//give function object
console.log(obj.displayInfo());//global object print hoga  then undefined aayega

