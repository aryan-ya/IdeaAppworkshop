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
        required : true
      }

});