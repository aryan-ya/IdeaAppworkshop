const express = require('express');

const serverConfigs = require('./configs/server.configs');
const mongoose = require('mongoose');
const app =  express();
const dbConfig = require('./configs/db.configs');

const userModel  =  require('./models/user.model');
const bcrypt = require('bcrypt');



// logic to connect to mongodb  Need to have to mongodb to havbing a run machine

mongoose.connect(dbConfig.DB_URL);
const db  = mongoose.connection;

db.on("error",() =>{
    console.log("Error while connecting to DB");
});
db.once("open", () =>{
    console.log("db is connected");

    init();
})


 async function init() {
// check if the admin  user is already present
let admin  =  await userModel.findOne({
    userID : "admin"
})
if (admin) {
    console.log("Admin user Already present");
    return;
}
 


    // initialize the mongodb
    admin = await userModel.create( {
        name : "Aryan yadav",
        userId : "admin",
        email : "ay344@gmail.com",
        userType : "ADMIN",
        password : bcrypt.hashSync("Welcome1",8)
    });
    console.log(admin);

 
 }
app.listen(7777, ()=>{
    console.log(`server started on the port number ${serverConfigs.PORT}`);
});