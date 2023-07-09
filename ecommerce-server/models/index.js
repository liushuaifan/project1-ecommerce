const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect("mongodb+srv://robinlingyunli:I998o724@chuwa-training.4wh4xpp.mongodb.net/?retryWrites=true&w=majority");

module.exports.User = require('./user');
// module.exports.Message = require('./message');