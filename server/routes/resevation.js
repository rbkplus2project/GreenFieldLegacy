const express = require('express')
const router = express.Router()
const { User } = require('../database/User')


router.post('/add', (req, res) => {
    // console.log(req.body)
    User.findOne({ displayName: req.body.displayName }, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
        .then((result) => {
            console.log(result)
            let arr = result.reservations
            if (!arr.includes(req.body.reservations))
                arr.push(req.body.reservations)
            result.updateOne({ reservations: arr })
                .then(() => {
                    res.end()
                    console.log('saved')
                })
                .catch((err) => {
                    console.log('errrrrrr')
                })
        })

})

router.post('/delete', (req, res) => {
    User.findOne({ displayName: req.body.displayName }, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
        .then((result) => {
            let arr = result.reservations
            let index = arr.indexOf(req.body.reservations)
            arr.splice(index, 1)
            result.updateOne({ reservations: arr })
                .then(() => {
                    res.end()
                    console.log('saved')
                })
                .catch((err) => {
                    console.log('errrrrrr')
                })
        })
})


module.exports = router