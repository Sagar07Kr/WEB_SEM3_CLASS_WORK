
const express=require("express");
const app=express();

const isAuthencticated=(req,res,next)=>{
    console.log("two step verification...");
    //condition
    console.log("middleware 2");
    next();
}

module.exports={isAuthencticated};