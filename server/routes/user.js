const express = require('express')
const router = express.Router()
const { User } = require('../database/User')
const bcrypt = require('bcrypt')
const crypto = require('crypto');
const sgMail = require('@sendgrid/mail')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

router.get("/auth", auth, (req, res) => {
  if (req.user) {
    res.json({
      id: req.user._id,
      displayName: req.user.displayName,
      favorites: req.user.favorites,
      reservations: req.user.reservations,
      email: req.user.email,
      admin: req.body.admin
    })
  } else {
    res.json()
  }
})


router.get("/allusers", (req, res) => {
  User.find({ admin: false })
    .then(data => res.status(200).json({ users: data }))
    .catch(err => res.status(404).json({ err: err.message }))
})

router.get("/alladmins", (req, res) => {
  User.find({ admin: true })
    .then(data => res.status(200).json({ admins: data }))
    .catch(err => res.status(404).json({ err: err.message }))
})

router.post("/deleteuser", (req, res) => {
  User.findOne({ displayName: req.body.displayName })
    .then(user => {
      User.remove({ _id: user._id })
        .then(() => res.status(201).json({ msg: "user was deleted" }))
    })
    .catch(err => res.status(404).json({ err: err.message }))
})

router.post("/getuser", (req, res) => {
  User.findOne({ displayName: req.body.displayName }, (err, data) => {
    if (data === null) {
      res.status(201).send("error getting the data")
    } else {
      res.status(200).json(data)
    }
  })
  // .then((data) => res.status(200).json(data))
  // .catch((err) => res.status(404).send("error getting the data"))
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
          data.admin = false
          data.master = false
          let user = new User(data)
          user.save()
            .then((data) => jwt.sign({ id: data._id }, 'mysecret', { expiresIn: 86400 }, (err, token) => {
              res.header("jwt-auth", token).json({
                sucess: true,
                token: token,
                displayName: data.displayName,
                admin: data.admin,
                master: data.master
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
        // console.log("here =========>", data)
        bcrypt.compare(req.body.password, data.password)
          .then(data1 => {
            // console.log("here =========>", data1)
            if (data1) {
              jwt.sign({ id: data._id }, 'mysecret', { expiresIn: 86400 }, (err, token) => {
                if (err) return res.json({ message: "err creating the token" })
                res.header("jwt-auth", token).json({
                  success: true,
                  token: token,
                  displayName: data.displayName,
                  admin: data.admin,
                  master: data.master,
                  // reservations: data.reservations,
                  // favorites: data.favorites,
                  // email: data.email,
                  // id: data._id

                })
              })
            } else {
              throw Error("incorrect password")
            }
          })
          .catch(err => res.status(404).json({ success: false }))
      } else {
        throw Error("incorrect email")
      }
    })
    .catch(err => res.status(404).json({ success: false }))
})

router.get("/signout", (req, res) => {
  res.header("jwt-auth", "", { maxAge: 1 }).json({
    token: "",
    currentUser: ""
  })
})

router.post("/forgot-password", async (req, res, next) => {

  const { email } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return 'No user found with that email address.'
  }

  const token = crypto.randomBytes(32).toString('hex');

  var expireDate = new Date().getTime() + 10800000;

  await User.findOneAndUpdate({ email: req.body.email }, { expiration: expireDate, token: token, used: 0 })

    const msg = {
      to: user.email, // Change to your recipient  //req.headers.host  //process.env.SENDGRID_TO
      from: process.env.SENDGRID_FROM, // Change to your verified sender  
      subject: 'From hotels.com',
      text: 'Weclome to our hotel booking website, Hope you Enjoy your experience. You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://' + "localhost:3000" + '/reset/' + token + '\n\n' +
        'The link will remain valid for 3 hours only. If you did not request this, please ignore this email and your password will remain unchanged.\n'
    }
    await sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
        res.status(200);
        next();

      })
      .catch((error) => {
        console.error(error)
      })
})


router.post("/reset/:token", async(req, res) => {
  const { password, token } = req.body
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  const user = await User.findOne({ token })
  console.log("user", user)
  if (!user) {
    return 'Password reset token is invalid or has expired.'
  }

  if (user.expiration > new Date().getTime() && user.used < 1) {
    await User.findOneAndUpdate({ token: req.body.token }, { password: hash, used: 1 });
  }

})

router.post("/getuser", (req, res) => {
  User.findOne({ displayName: req.body.displayName })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send("error getting the data"))
})
// update the loged in user
router.put('/:displayName', async(req, res) => {
    User.update(req.params, req.body, (err, data) => {
      console.log(req.params, req.body, data)
      if (data.ok === 0) {
        res.sendStatus(400)
      }
      else {
        res.json(data)
      }
    })
});

module.exports = router
