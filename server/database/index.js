const mongoose = require('mongoose');

<<<<<<< HEAD
const dbURI = 'mongodb+srv://asemOne:asem1234@cluster0.xqniz.mongodb.net/hotels?retryWrites=true&w=majority'
// mongoose.connect(process.env.MONGODB_URI ||dbURI, { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true, 'useFindAndModify': false })
const connect = mongoose.connect(dbURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

module.exports = connect;
||||||| 77aee37
const dbURI = 'mongodb+srv://asemOne:asem1234@cluster0.xqniz.mongodb.net/hotels?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGODB_URI ||dbURI, { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true, 'useFindAndModify': false })
const connect = mongoose.connect(dbURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
=======
const dbURI='mongodb+srv://gamesio:fwOQ12Ol9t6CiHnb@gamesio.h6rcl.mongodb.net/gamesio?retryWrites=true&w=majority'
const connect = mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true, 'useFindAndModify': false })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

exports.default = connect;
>>>>>>> ba4219816435feca1b9cddce1ca88dd7a4ce8347
