const mongoose = require('mongoose');

const dbURI='mongodb+srv://gamesio:fwOQ12Ol9t6CiHnb@gamesio.h6rcl.mongodb.net/gamesio?retryWrites=true&w=majority'
const connect = mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true, 'useFindAndModify': false })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

exports.default = connect;
