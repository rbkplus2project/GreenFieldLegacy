const mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('dotenv').config()

const dbURI = process.env.MONGODB;
mongoose.connect(process.env.MONGODB_URI ||dbURI, { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true, 'useFindAndModify': false })
const connect = mongoose.connect(dbURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
