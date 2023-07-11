require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');
const db = require('./models'); 

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/users/:id/products',
  productRoutes
);

app.use('/api/users/:id/carts',
  cartRoutes
);


app.get('/api/products', async function (req, res, next) {
  try {
    const products = await db.Product.find()
      .sort({ createdAt: 'desc' });
    return res.status(200).json(products);
  } catch (err) {
    return next(err);
  }
});

app.get('/api/carts', async function (req, res, next) {
  try {
    const carts = await db.Cart.find()
      .sort({ createdAt: 'desc' });
    return res.status(200).json(carts);
  } catch (err) {
    return next(err);
  }
});




app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
