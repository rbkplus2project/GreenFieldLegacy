// Create Email Options
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
    to: process.env.SENDGRID_TO, // Change to your recipient
    from: process.env.SENDGRID_FROM, // Change to your verified sender
    subject: 'From gamsio.com',
    text: 'Weclome to our host Gaming website, Hope you Enjoy your experience',
    html: '<strong>Weclome to our host Gaming website, Hope you Enjoy your experience</strong>',
}
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
    