// the will hold the schema for the user if explain thre differents fields of use how  it will be  stored in the mongodb


const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
     
      name : {
        type : String, 
        required : true
      },
      userID: {
        type : String,
        required : true,
        unique : true
      },
      password : {
        type :String,
        required : true
      },
      email :{
        type : String,
        required : true,
        unique :true,
        minLength: 10,
        lowercase : true
      },
      userType : {
        type :String,
        required : true,
        default : "CUSTOMER",
        enum : ["CUSTOMER", "ADMIN"]

      }

},{timestamps : true});


// define the collection name where it will be stored

 module.exports = mongoose.model("User", userSchema);


