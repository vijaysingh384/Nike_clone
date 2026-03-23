const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: Buffer,
    name: String,
    description : String,
    price: Number,
});

module.exports = mongoose.model('products', productSchema);
