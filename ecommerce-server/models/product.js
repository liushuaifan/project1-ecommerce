const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  imageurl : {
    type: String,
    required: true
  }
  // messages: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Product'
  //   }
  // ]
});

const Product = mongoose.model('Product', userSchema);

module.exports = Product;