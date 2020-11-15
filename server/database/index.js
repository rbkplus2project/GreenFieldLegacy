const mongoose = require('mongoose');


const dbURI = 'mongodb+srv://asemOne:asem1234@cluster0.xqniz.mongodb.net/hotels?retryWrites=true&w=majority'
const connect = mongoose.connect(dbURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

let userSchema = mongoose.Schema({
  displayName: String,
  email: String,
  password: String
}, { timestamps: true });


let User = mongoose.model('User', userSchema);


module.exports.User = User;