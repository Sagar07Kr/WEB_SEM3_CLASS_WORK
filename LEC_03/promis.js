
console.log("Before promise");

setTimeout(()=>{
    console.log("hellow");
    
},1000)

let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise 1 resolved")
    }, 1000);
})

p1.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
    
})
console.log("after promise");
