const mongoose  = require('mongoose');  
const config = require('config');
// const dbgr = require("debug")("development:mongoose");
const mongoURI = config.get("MONGODB_URI");

console.log("Attempting to connect to MongoDB:", mongoURI);

mongoose.connect(mongoURI)
.then(function(){
    console.log("MongoDB connected successfully");
}).catch(function(err){
    console.log("MongoDB connection failed:", err);
})


module.exports = mongoose.connection;