const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  createCart,
  getCart,
  updateCart,
  deleteCart
} = require('../handlers/cart');

// prefix - /api/users/:id/messages
// router.route('/').post(createCart);
router.route('/').post(createCart);
// // prefix - /api/users/:id/messages/:message_id
router.get('/', getCart);
router.put('/', updateCart);
router.delete('/', deleteCart)

module.exports = router;