// get, post, put, delete
const db = require('../models');

// POST - /api/users/:id/products
exports.createProduct = async function (req, res, next) {
  try {
    console.log(db.Product)

    const product = await db.Product.create({
      productname: req.body.productname,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      imageurl: req.body.imageurl,
      user: req.params.id
    });

    // find the user by id
    const foundUser = await db.User.findById(req.params.id);
    // push the product id to the user's messages array
    foundUser.products.push(product.id);
    // save the user
    await foundUser.save();
    // send back the product with the user id
    const foundProduct= await db.Product.findById(product._id).populate(
      'user',
      {
        username: true
      }
    );
    return res.status(200).json(foundProduct);
  } catch (err) {
    return next(err);
  }
};

// GET - /api/users/:id/products/:product_id
exports.getProduct = async function (req, res, next) {
  try {
    const product = await db.Product.findById(req.params.product_id);
    return res.status(200).json(product);
  } catch (err) {
    return next(err);
  }
};

// PUT - /api/users/:id/products/:product_id
exports.editProduct = async function (req, res, next) {
  try {
    const product = await db.Product.findByIdAndUpdate(req.params.product_id, req.body);
    await product.save();
    return res.status(200).json(product);
  } catch (err) {
    return next(err);
  }
};