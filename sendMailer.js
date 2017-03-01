// https://github.com/nodemailer/nodemailer

var nodemailer = require("nodemailer");
var smtpConfig = require("./smtp.config.json");

function sendMail(sendMailOptions){
    var transporter = nodemailer.createTransport(smtpConfig);
    var mailOptions = {
        from: smtpConfig.auth.user,
        to: sendMailOptions.to || smtpConfig.auth.user,
        subject: smtpConfig.subject,
        text: sendMailOptions.text,
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        console.log("message sent:" + info.response);
    });
}

module.exports = {
    send: sendMail
};