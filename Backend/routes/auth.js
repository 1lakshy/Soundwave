const router = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";
require("../passport/passport");
const CLIENT = "http://localhost:3000";
const userModels = require("../models/user-models");

// passport js login code
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: False,
    message: "Failed to login",
  });
});

router.get("/login/success", async (req, res) => {
  // if (req.user) {

    // console.log(req.user);
    // generating refresh token
    // const { accessToken, refreshToken } = TokenService.generateTokens({
    //   _id: req.user._id,
    //   activated: true,
    // });

    // saving tokens in cookies
    // res.cookie("refreshToken", refreshToken, {
    //   expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
    //   httpOnly: true,
    // });
    // res.cookie("Name", req.user.name, {
    //   expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
    //   httpOnly: true,
    // });
    // res.cookie("Avatar", req.user.avatar, {
    //   expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
    //   httpOnly: true,
    // });

    // res.cookie("accessToken", accessToken, {
    //   expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
    //   httpOnly: true,
    // });
  

    // adding token to database
    // await TokenService.storeRefreshToken(refreshToken, req.user._id);
  // }

  
// const user = await userModels.findOne()
try{
  userGot = req.user

  res.json({userName : userGot.name})
  
    res.redirect("http://localhost:3000/");
}catch(err){

  
  res.status(404).json({Error : "error in auth.js"})
}

});

router.get("/logout", (req, res) => {
  
  req.logout();
  res.redirect("http://localhost:3000/login");
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
);

module.exports = router;
