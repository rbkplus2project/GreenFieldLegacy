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
  username : {
    type :String,
    unique : true
  },
  password :String,
  email : {
    type : String,
    unique : true
  },
  reservation : []   
}, { timestamps: true });


let payment = mongoose.Schema({
  userid: {
    type :Number,
    unique : true
  },
  Goodthru :String,
  pin : {
    type : Number,
    unique : true
  },
  arrayOffavouirt : []   
}, { timestamps: true });



let User = mongoose.model('User', userSchema);
let payment = mongoose.model('payment', payment);


module.exports.User = User;
module.exports.payment = payment;