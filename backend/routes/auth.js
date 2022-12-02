const router = require("express").Router();
const passport = require("passport");
const UserDto = require("../dtos/user-dtos");
// const tokenService = require("../services/token-service");
const TokenService = require("../services/token-service");
const CLIENT_URL = "http://localhost:3000/rooms";
require("../passport/passport");
const CLIENT = "http://localhost:3000";

let userData;

// passport js login code
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: False,
    message: "Failed to login",
  });
});

router.get("/login/success", async (req, res) => {
  if (req.user) {
    // res.status(200).json({
    //   success: true,
    //   message: "login successful",
    //   user: req.user,
    //   cookies: req.cookies,
    // });
const Avatar = req.user.avatar
console.log(Avatar.length +"####################################")
    const sliceAvatar =  Avatar.slice(2,38)
    const modifiedAvatar = `http://localhost:5500${sliceAvatar}`

    // generating refresh token
    const { accessToken, refreshToken } = TokenService.generateTokens({
      _id: req.user._id,
      activated: true,
    });

    // saving tokens in cookies
    res.cookie("refreshToken", refreshToken, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
      httpOnly: true,
    });
    res.cookie("Name", req.user.name, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
      // httpOnly: true,
    });
    res.cookie("Avatar", modifiedAvatar, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
      // httpOnly: true,
    });

     console.log(req.user.avatar)

    res.cookie("accessToken", accessToken, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
      httpOnly: true,
    });

    // sending user data to frontend
    // const userPass = req.user
    // try {
  
    //   if (!userPass) {
    //     res.status(404).json({ message: "User not found" });
    //   }

    //   res.status(200).json({ user:{
  
    //     activated: false,
    //     email:userPass.email,
    //     name:userPass.name,
    //     avatar:userPass.avatar
    //    }
    //     , auth:true})
      // res.json({ user: new UserDto(userPass), auth: true });
    // } catch (err) {
    //   res.status(500).json({ message: "something went wrong" });
    // }
  

    // adding token to database
    await TokenService.storeRefreshToken(refreshToken, req.user._id);
  }

  res.redirect("http://localhost:3000/rooms");
});

router.get("/logout", (req, res) => {
  
  req.logout();
  res.redirect("http://localhost:3000/");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    accessType: "offline",
    approvalPrompt: "force",
  }
  
  )
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/login/success",
    failureRedirect: "/auth/login/failed",
  })

  // ,(req,res)=>{
  //    console.log("hellow refreshtoken"+passportData.refreshToken)
  //    console.log("hellow user"+passportData.user)

  //    console.log("token me hu")
  //        res.cookie("refreshToken",passportData.refreshToken, {
  //         expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
  //         httpOnly: true,
  //       });

  //       res.cookie("accessToken",passportData.accessToken, {
  //         expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
  //         httpOnly: true,
  //       });
  // }
);

module.exports = router;
