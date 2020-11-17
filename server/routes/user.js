const express = require('express')
const router = express.Router()
const { User } = require('../database/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

router.get("/auth", auth, (req, res) => {
  console.log(req.user)
  if (req.user) {
    res.json({
      id: req.user._id,
      displayName: req.user.displayName,
      favorites:req.user.favorites,
      reservations:req.user.reservations,
      email: req.user.email
    })
  }
})
router.post("/getuser", (req, res) => {
  User.findOne({displayName:req.body.displayName})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send("error getting the data"))
})
router.post('/signup', (req, res) => {
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
                sucess: true,
                token: token
              })
            }))
            .catch(err => res.status(404).send(err))
        })
    })
    .catch(err => res.send(err))
})

router.post('/signin', (req, res) => {

  User.findOne({ email: req.body.email })
    .then(data => {
      if (data) {
        bcrypt.compare(req.body.password, data.password)
          .then(data1 => {
            if (data1) {
              jwt.sign({ id: data._id }, 'mysecret', { expiresIn: 86400 }, (err, token) => {
                if (err) return res.json({ message: "err creating the token" })
                res.header("jwt-auth", token).json({
                  sucess: true,
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

router.get("/signout", (req, res) => {
  res.header("jwt-auth", "", { maxAge: 1 }).json({
    token: ""
  })
})

module.exports = router