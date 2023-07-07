const express = require('express');
const server = require("./configs/server.configs");
const serverConfigs = require('./configs/server.configs');
const mongoose = require('mongoose');
const app =  express();
const dbConfig = require('./configs/db.configs');


// logic to connect to mongodb  Need to have to mongodb to havbing a run machine

mongoose.connect(dbConfig.DB_URL);
const db  = mongoose.connection;

db.on("error",() =>{
    console.log("Error while connecting to DB");
});
db.once("open", () =>{
    console.log("databases is connected");
})

app.listen(7777, ()=>{
    console.log(`server started on the port number ${serverConfigs.PORT}`);
})