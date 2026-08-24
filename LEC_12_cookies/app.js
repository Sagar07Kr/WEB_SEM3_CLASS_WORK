
const express=require("express");
const app=express();
const port=3000;

const {isAuthencticated}=require("./middleware/isAuthendicated.js"); //{}destructring
const {is_mobile_Authencticated}=require("./middleware/mobileAuth.js")

// app.use("/",(req,res,next)=>{
//     console.log("middleware 1");//run when pattern matched ("/", "/dipesh", "/payment")->run for all because "/" matched:
//     //condition
//     next();  
// });

app.get("/",(req,res)=>{
    res.send("home page...")      //home page
})

// app.use((req,res,next)=>{
//     console.log("middleware 1");
//     //condition                      //universal middleware
//     next();  
// })


// const isAuthencticated=(req,res,next)=>{
//     console.log("two step verification...");
//     //condition
//     console.log("middleware 2");
//     next();
// }


app.get("/dashboard",isAuthencticated,(req,res)=>{
    console.log("dashboard protected route");
    // res.render("dashboard"); //page is live 
    res.send("dashboard"); //message 
})

app.get("/paymentRoute",isAuthencticated,is_mobile_Authencticated,(req,res)=>{
    console.log("payment protected route");
    // res.render("dashboard"); //page is live 
    res.send("payment Done...."); //message 
})

app.listen(port,()=>{
    console.log("server is live on port no 3000");
})