const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  createProduct,
  getProduct,
  editProduct,
  deleteProduct
} = require('../handlers/products');

// prefix - /api/users/:id/products
router.route('/').post(createProduct);

router.get('/:product_id', getProduct);
router.put('/:product_id', editProduct);
router.delete('/:product_id', deleteProduct);

// prefix - /api/users/:id/messages/:message_id
// router.route('/:product_id').get(getMessage).delete(deleteMessage);

module.exports = router;