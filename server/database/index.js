const mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('dotenv').config()

const dbURI = process.env.MONGODB;
// const dbURI = 'mongodb+srv://gamesio:fwOQ12Ol9t6CiHnb@gamesio.h6rcl.mongodb.net/gamesio?retryWrites=true&w=majority'

mongoose.set('useFindAndModify', false);

// mongoose.connect(process.env.MONGODB_URI ||dbURI, { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true, 'useFindAndModify': false })

const connect = mongoose.connect(dbURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

exports.default = connect;
