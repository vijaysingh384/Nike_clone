const mongoose  = require('mongoose');  

const userSchema =  mongoose.Schema({
    fullname: String,
    email: String,
    password: { type: String, required: true, select: false },
    cart: [],
    orders: [],
    contact: Number,
    picture: String,
});

module.exports = mongoose.model('users' , userSchema);
