const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//this one will be the as favorite cards, so the same Hotel info(schema) with an id  
const favoriteSchema = new Schema = ({
    id: Number,
    name: String,
    price: Float32Array,
    thumbnailUrl: String,
    destId: Number,
    landmarks: {
        label: String,
        distance: String
    },
    badge: String,
    countryN: String,
    rating: Float32Array
},
    { timestamps: true }
);

let Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;
