const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//this one will be the as favorite cards, so the same Hotel info(schema) with an id  
const favoriteSchema = new Schema = ({
    id: Number,
    name: String,
    price: Float32Array,
    thumbnailUrl: String,
    destId: Number,
    badge: String,
    countryN: String,
    rating: Float32Array,
    userid: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},
    { timestamps: true }
);

let Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports.Favorite = Favorite;
