const mongoose = require('mongoose');
require('dotenv').config()


const dbURI = process.env.MONGODB;
// const dbURI = 'mongodb+srv://gamesio:fwOQ12Ol9t6CiHnb@gamesio.h6rcl.mongodb.net/gamesio?retryWrites=true&w=majority'

mongoose.set('useFindAndModify', false);

const connect = mongoose.connect(dbURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

exports.default = connect;



