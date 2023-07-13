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

// userSchema.pre('save', async function (next) {
//   try {
//     if (!this.isModified('password')) {
//       return next();
//     }
//     let hashedPassword = await bcrypt.hash(this.password, 10);
//     this.password = hashedPassword;
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });

// userSchema.methods.comparePassword = async function (candidatePassword, next) {
//   try {
//     let isMatched = await bcrypt.compare(candidatePassword, this.password);
//     return isMatched;
//   } catch (err) {
//     return next(err);
//   }
// };

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;