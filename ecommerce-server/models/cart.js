const mongoose = require('mongoose');
const User = require('./user');

const cartSchema = new mongoose.Schema({
  user: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
 
  },


  cartList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',

  }]

  // messages: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Product'
  //   }
  // ]
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

const Cart = mongoose.model('Cart', userSchema);

module.exports = Cart;