// createCart,
// getCart,
// updateCart

// get, post, put, delete
const db = require('../models');

// create - /api/users/:id/carts/:productid
exports.createCart = async function (req, res, next) {
  try {
    console.log(db.Cart)

    const cart = await db.Cart.create({
      cartValue: req.body.cartValue,
      productname: req.body.productname,
      price: req.body.price,
      email: req.body.email,
      userid: req.params.id,
      productid: req.params.productid,
      imageurl:req.body.imageurl
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

// GET - /api/users/:id/carts/:product_id
exports.getCart = async function (req, res, next) {
  try {
    const cart = await db.Cart.find({"userid" : req.params.id, "productid" : req.params.productid});
    return res.status(200).json(cart);
  } catch (err) {
    return next(err);
  }
};

// PUT - /api/users/:id/carts/:product_id
exports.updateCart = async function (req, res, next) {
  try {
    const cart = await db.Cart.findOneAndUpdate(
      {"productid": req.params.productid, "userid":req.params.id},
      {"cartValue" : req.body.cartValue}
    );

    return res.status(200).json(cart);
  } catch (err) {
    return next(err);
  }
};

exports.deleteCart = async function (req, res, next) {
  try {
    const cart = await db.Cart.deleteMany(
      {"productid": req.params.productid, "userid":req.params.id}
    );

    return res.status(200).json(cart);
  } catch (err) {
    return next(err);
  }
};