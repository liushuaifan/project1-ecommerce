const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect('mongodb+srv://fanliushuai:C3B59mNzPjpgze2G@cluster0.rosjo38.mongodb.net/');

module.exports.User = require('./user');
// module.exports.Message = require('./message');