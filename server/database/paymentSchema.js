let payment = mongoose.Schema({
    userid: {
      type: Number,
      unique: true
    },
    Goodthru: String,
    pin: {
      type: Number,
      unique: true
    },
  
  }, { timestamps: true });



  module.exports.payment = payment;
