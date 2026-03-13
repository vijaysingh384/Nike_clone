
const mongoose  = require('mongoose');  


const productSchema =  mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discountedprice: Number,
    bgcolor: String,
    panelcolor: String,
    textcolor: String,
});

module.exports = mongoose.model('products' , productSchema);
