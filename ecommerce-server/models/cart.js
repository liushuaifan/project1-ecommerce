const mongoose = require('mongoose');
const User = require('./user');

const cartSchema = new mongoose.Schema({
  cartValue: {
    type: Number,
    required: true, 
  },
  productname: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true, 
  },
  price: {
    type: Number,
    required: true, 
  },
  userid: {
    type: String,
    required: true, 
  },

  productid: {
    type: String,
    required: true, 
  },

  imageurl: {
    type: String,
    required: true, 
  }

});



const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;