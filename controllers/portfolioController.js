const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');


// transport function
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: process.env.API_SENDGRID
        }
    })
)
const sendEmailController = (req, res) => {



    try {
        // logic to send email with nodemailer
        const { name, email, message } = req.body;

        // validation
        if (!name || !email || !message) {
            return res.status(500).send({
                success: false,
                message: 'All fields are required'
            });
        }

        // send email matter
        transporter.sendMail({
            to: 'lwinyonal@gmail.com',
            from: 'lwinyonal@gmail.com',
            subject: 'Regarding E-Portfolio',
            html: `
                <h1>Detail Information</h1>
                <br/>
                <h3>Name: ${name} </h3>
                <h3>Email: ${email} </h3>
                <p>Message: ${message} </p>
            `
        });

        return res.status(200).send({
            success: true,
            message: 'Email Sent Successfully'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'Send Email API Error',
            error
        })
    }
}

module.exports = { sendEmailController }