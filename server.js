const express = require('express');
const server = require("./configs/server.configs");
const serverConfigs = require('./configs/server.configs');
const app =  express();


app.listen(7777, ()=>{
    console.log(`server started on the port number ${serverConfigs.PORT}`);
})