const express=require("express");
const app=express();

const is_mobile_Authencticated=(req,res,next)=>{
    console.log("two step verification...");
    //condition
    console.log("middleware mobile auth");
    next();
}

module.exports={is_mobile_Authencticated};