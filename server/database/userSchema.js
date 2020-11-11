let userSchema = mongoose.Schema({
    username: {
      type: String,
      unique: true
    },
    password: String,
    email: {
      type: String,
      unique: true
    },
    reservation: []
  }, { timestamps: true });
  
  let userSchema = mongoose.model('userSchema', payment);
  module.exports.userSchema = User;
  