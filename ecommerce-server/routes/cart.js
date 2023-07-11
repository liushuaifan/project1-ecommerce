const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  createCart
} = require('../handlers/cart');

// prefix - /api/users/:id/messages
// router.route('/').post(createCart);
router.route('/').post(createCart);
// // prefix - /api/users/:id/messages/:message_id
// router.get('/:email', getCart);
// router.put('/:email', updateCart);

module.exports = router;