const bcrypt = require("bcryptjs");
const crypto = require("crypto")
const nodemailer = require("nodemailer")



class Otpservice {
 async generateOtp(){

    const otp = crypto.randomInt( 1000 , 9999);
    return otp
}

 send(email , otp ){

    try{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        secure: false,
        auth: {
            user: process.env.USER ,
            pass: process.env.PASSWORD
        }
    
    })
    
    const mailOptions = {
        from: process.env.USER,
        to: email ,
        subject: "Testing",
        text: `Otp for Your Registration is ${otp}` ,
    }

    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err)
        } else {
            return
            res.json({
                hash: `${hash}.${expires}`,
                email,
            })
            console.log("Email send sucessful")
        }})
    }catch(err){
        console.log(err)
    }


}

verifyOtp(){


}

}
module.exports = new Otpservice; 