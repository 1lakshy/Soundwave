const OtpService = require("../services/otp-service")
const HashService = require("../services/hash-otp")
const UserService = require("../services/user-service")
const TokenService = require("../services/token-service")
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer")
const UserDto = require("../dtos/user-dtos.js")


class AuthController {

    async sendOtp(req, res) {

        try {
            // lOGIC
            // const {phone} = req.body;
            const {email} = req.body;

            if (!email) {
                res.status(400).json({ message: "email Id is required!" });
            }

            // console.log(process.env.FROM_EMAIL)

            // generate Otp
            const otp = await OtpService.generateOtp();
            console.log(otp)

            // otp = 7856;
            // res.json({ otp : otp})

            // hashing 
            console.log("otp")
            const ttl = 1000 * 60 * 10;
            const expires = Date.now() + ttl
            const data = `${otp}.${expires}`;
            const hash = await bcrypt.hash(data, 10);

            console.log(data)

            // res.json({ hash : hash});



            // otp sending

            try {
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    secure: false,
                    auth: {
                        user: process.env.FROM_EMAIL,
                        pass: process.env.PASSWORD
                    }

                })

                const mailOptions = {
                    from: process.env.FROM_EMAIL,
                    to: email,
                    subject: "Testing",
                    text: `Otp for Your Registration is ${otp}`,
                }

                transporter.sendMail(mailOptions, function (err, success) {
                    if (err) {
                        console.log(err)
                    } else {
                        res.json({
                            hash: `${hash}.${expires}`,
                            email,
                            otp
                        })
                        console.log("Email send sucessful")
                    }
                })
            } catch (err) {
                console.log(err)
            }

        } catch (err) {
            res.status(404).send("error")
        }
    }

    async verifyOtp(req, res) {

    const {email} = req.body

        try {
            const {hash} = req.body
            console.log(hash)
            const [halfHash1,halfHash2, newExpires] = hash.split(".");

            const hashedOtp = `${halfHash1}.${halfHash2}`
            console.log(newExpires)


            if (!hashedOtp || !hash || !newExpires) {
                res.status(400).json({ message: "error from client side" });
            }

            if (Date.now() > +newExpires) {
                res.status(400).json({ otp: "expires!!" })
            }

            const {otp} = req.body

            const data = `${otp}.${newExpires}`;
            const newHash = await bcrypt.hash(data, 10)

            const validating = await bcrypt.compare(hashedOtp, newHash)
            if (validating) {
                console.log("mached")
            }

            let user;


            try{

                user = await UserService.findUser({ email: email});

                if(!user){
                 user = await UserService.createUser({ email: email});
                }

            }catch(err){
                console.log(err)
                res.status(500).json({ message: "error in userCreating"})

            }

            // Token 

            const {accessToken,refreshToken} = TokenService.generateTokens({
                _id: user._id , 
                activated: false
            })


            await TokenService.storeRefreshToken(refreshToken , user._id)
            res.cookie("refreshToken", refreshToken,  {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30) ,
                httpOnly : true
            })

            res.cookie("accessToken", accessToken,  {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30) ,
                httpOnly : true
            })


            const userDto = new UserDto(user)
            res.json({ auth:true , user: userDto})


        } catch (err) {
            console.log(err)
        }
    }



}

module.exports = new AuthController();
// jo uper lika ha use single al ton pattern kaha ta ha it means apppan ko same object milaga
// har wakt