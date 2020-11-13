const express = require('express');
const bodyParser = require('body-parser');
const { User } = require("./database")
const cors = require("cors")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.post('/signup', (req, res) => {
  // console.log(req.body)


  //generating a hash for the password
  //saving the data in the db
  //generating a token and send it the header(cookie) in the res

  const password = req.body.password
  const saltRounds = 10
  let data = req.body

  bcrypt.genSalt(saltRounds)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hashedPassword) => {
      data.password = hashedPassword
      let user = new User(data)
      user.save()
        .then((data) => jwt.sign({ id: data._id }, 'mysecret'))
        .then(token => res.cookie("jwt", token))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  // bcrypt.genSalt(saltRounds, function (err, salt) {
  //   if (err) {
  //     throw err
  //   } else {
  //     bcrypt.hash(password, salt, function (err, hashedpassword) {
  //       if (err) {
  //         throw err
  //       } else {
  //         let data = req.body
  //         data.password = hashedpassword
  //         console.log(data)
  //         let user = new User(data)
  //         user.save()
  //           .then(data => {
  //             console.log(data._id)
  //             return jwt.sign({ id: data._id }, 'mysecret');
  //           })
  //           .then((token) => res.cookie('jwt', token))
  //           .catch(err => console.log(err))
  //       }
  //     })
  //   }
  // })
})

// app.use('/', router);

let port = 5000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
