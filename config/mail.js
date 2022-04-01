const nodemailer = require('nodemailer');
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
        
    },


});

module.exports = transporter;

transporter.verify().then(() =>{
    console.log('Ready for send emails');
});