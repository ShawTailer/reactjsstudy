import express from "express";
import {PORT,mongoDBURL }from "./config.js";
import mongoose from "mongoose";
const app = express();

app.get('/', (request,response) =>{
    console.log("est");
    return response.send("1ello");
});



mongoose
    .connect(mongoDBURL)
    .then(()=>
    {
        console.log(`connect to database`);
        app.listen(PORT,()=>{
            console.log(`App listen to ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });