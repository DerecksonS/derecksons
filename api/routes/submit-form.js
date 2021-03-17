const { Router } = require('express')
const nodemailer = require('nodemailer');

const router = Router()

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 587,
    secure: true,
    auth: {
        user: 'email',
        pass: 'pass'
    }
});

let countIP = 0;
const limitIP = 5;
let firstIP = null;
/* GET users listing. */
router.post('/submit-form', (req, res, next) => {

    let data = req.body;
    const getIPAddress = req.connection.address();
    let checkIP = validateIP(getIPAddress.address);
    if (!checkIP) {
        res.sendStatus(418);
        return;
    }
    if (data) {
        const checkValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email);
        if (!checkValidEmail) {
            res.sendStatus(500);
            return;
        }
        let dataEmail = {
            to: 'dere.santana@gmail.com',
            subject: '[Contact Me] - Dereckson.dev',
            text: `Email: ${data.email}
            Message: ${data.msg}`
        };


        transporter.sendMail(dataEmail, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.sendStatus(200);
            }
        });
    } else {
        res.sendStatus(500);
    }

});

const validateIP = function (ipAddress) {
    firstIP = !firstIP ? ipAddress : firstIP;
    if (ipAddress == firstIP) {
        ++countIP;
    }

    if (countIP <= limitIP) {
        return false;
    }

    return true;
}


module.exports = router;