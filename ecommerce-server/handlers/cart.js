// createCart,
// getCart,
// updateCart

// get, post, put, delete
const db = require('../models');

// POST - /api/users/:id/products
exports.createCart = async function (req, res, next) {
  try {
    console.log(db.Cart)

    const cart = await db.Cart.create({
      cartValue: req.body.cartValue,
      productname: req.body.productname,
      price: req.body.price,
      email: req.body.email,

      userid: req.params.id,
      productid: req.params.productid
    });

    // find the user by id
    // const foundUser = await db.User.findById(req.params.id);
    // push the product id to the user's messages array
    // foundUser.products.push(product.id);
    // save the user
    // await foundUser.save();
    // send back the product with the user id
    // const foundCart= await db.Cart.findById(cart._id);
    return res.status(200).json(cart);
  } catch (err) {
    return next(err);
  }
};

// GET - /api/users/:id/products/:product_id
exports.getCart = async function (req, res, next) {
  try {
    const cart = await db.Cart.findById(req.params.product_id);
    return res.status(200).json(product);
  } catch (err) {
    return next(err);
  }
};

// PUT - /api/users/:id/products/:product_id
exports.updateCart = async function (req, res, next) {
  try {
    const product = await db.Product.findByIdAndUpdate(req.params.product_id, req.body);
    await product.save();
    return res.status(200).json(product);
  } catch (err) {
    return next(err);
  }
};