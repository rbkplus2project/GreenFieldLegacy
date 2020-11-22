const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
const Schema = mongoose.Schema;
let paymentSchema = new Schema({
    // userid: Number,
    userid: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Float,
        required: true
    },
    exp_year: {
        type: Number,
        required: true,
    },
    exp_month: {
        type: String,
        required: true,
    },
    line1: {
        type: String,
    },
    city: String,
    country: String,
    last4: {
        type: String,
        required: true
    }
}, { timestamps: true });
let Payment = mongoose.model('Payment', paymentSchema);
module.exports.Payment = Payment;