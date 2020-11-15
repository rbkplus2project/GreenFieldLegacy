const express = require('express');
const bodyParser = require('body-parser');
const { User } = require("./database")
const cors = require("cors")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const {auth,checkUser} = require("./middleware/auth")

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser())





app.get("/auth", auth, (req, res) => {
  console.log(req.user)
  if(req.user){
    res.json({
      id: req.user._id,
      displayName: req.user.displayName,
      email: req.user.email
    })
  }
 
})

app.post('/signup', (req, res) => {
  // console.log(req.body)
  //generating a hash for the password
  //saving the data in the db
  //generating a token and send it the header(cookie) in the res

  const password = req.body.password
  const saltRounds = 10
  let data = req.body

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) return res.json({ message: "email already exists" })

      bcrypt.genSalt(saltRounds)
        .then((salt) => bcrypt.hash(password, salt))
        .then((hashedPassword) => {
          data.password = hashedPassword
          let user = new User(data)
          user.save()
            .then((data) => jwt.sign({ id: data._id }, 'mysecret', { expiresIn: 86400 }, (err, token) => {
              res.header("jwt-auth", token).json({
                sucess:true,
                token: token
              })
            }))
            .catch(err => res.status(404).send(err))
        })
    })
    .catch(err => res.send(err))
})

app.post('/signin', (req, res) => {

  User.findOne({ email: req.body.email })
    .then(data => {
      if (data) {
        bcrypt.compare(req.body.password, data.password)
          .then(data1 => {
            if (data1) {
              jwt.sign({ id: data._id }, 'mysecret', { expiresIn: 86400 }, (err, token) => {
                if (err) return res.json({ message: "err creating the token" })
                res.header("jwt-auth", token).json({
                  sucess:true,
                  token: token
                })
              })
            } else {
              throw Error("incorrect password")
            }
          })
      } else {
        throw Error("incorrect email")
      }
    })
    .catch(err => res.status(404).send(err))
})

app.get("signout",(req,res)=>{
  res.header("jwt-auth","",{maxAge:1}).json({
    token:""
  })
})

// app.use('/', router);

let port = 5000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
