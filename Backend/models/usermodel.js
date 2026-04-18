const mongoose  = require('mongoose');  

const userSchema =  mongoose.Schema({
    fullname: String,
    email: String,
    password: { type: String, required: true, select: false },
  cart: [
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
],
    orders: [],
    contact: Number,
    picture: String,
});

module.exports = mongoose.model('users' , userSchema);
