const express = require('express')
const router = express.Router()
const { User } = require('../database/User')


router.post('/add', (req, res) => {  
    console.log(req.body)
 
    User.findOne({ displayName: req.body.displayName }, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
        .then((result) => {
            console.log(result)
            let arr = result.favorites
            if (!arr.includes(req.body.favorites))
                arr.push(req.body.favorites)
            result.updateOne({ favorites: arr })
                .then((data) => {
                    res.json(data)
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
            let arr = result.favorites
            let index = -1
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name === req.body.name)
                    index = i
            }
            arr.splice(index, 1)
            result.updateOne({ favorites: arr })
                .then((data) => {
                    res.json(data)
                    console.log('saved')
                })
                .catch((err) => {
                    console.log('errrrrrr')
                })
        })
})


module.exports = router

// router.get("/data",(req,res)=>{
//     Favorite.find()
//     .then((data) => res.status(200).send(data))
//     .catch((err) => res.status(404).send("error getting the data"))
// })

// router.post('/add', (req, res) => {
//    const  {id,name, price, thumbnailUrl,destId,badge, countryN,rating, userid}=req.body
// favorite =new Favorite({
//     id,
//     name,
//     price,
//     thumbnailUrl,
//     destId,
//     badge,
//     countryN,
//     rating,
//     userid
// })
// favorite.save()
// .then((data) => res.status(201).send(data))
// .catch((err) => res.status(404).send("error creating a fav"))

// })

// router.delete('/delete', (req, res) => {
//     Favorite.findOne({id:req.body.id})
// })


module.exports = router