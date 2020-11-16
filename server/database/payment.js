const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let paymentSchema = new Schema({
    id: Number,
    userid: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Goodthru: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true,
    },
    pin: {
        type: Number,
        unique: true,
        required: true
    }
}, { timestamps: true });

let Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
