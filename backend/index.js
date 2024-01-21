import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js"
import mongoose, { connect } from "mongoose";
const app = express();

app.get('/', (request, response) =>{
    console.log(request);
    return response.status(234).send("Welcome to MERN Stack Tutorial");
});

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log(`App connected to Database`);
    app.listen(PORT,() => {
        console.log(`App is Listening to port: ${PORT}`);
    });
})
.catch((error) =>{
    console.log("mongoDBURL connect error:",error);
});