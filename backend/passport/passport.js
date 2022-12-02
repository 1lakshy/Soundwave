const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const userService = require("../services/user-service");
const passport = require("passport");
const userModels = require("../Models/user-models");
const { storeRefreshToken } = require("../services/token-service");
const imageDownloader = require("node-image-downloader");
const activateController = require("../controllers/activate-controller")
const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
const imagePathDB = `${imagePath}.png`
const avatar = `../storage/${imagePathDB}`;

module.exports = function(passport){
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      let user;
      const newUser = {
        email: profile.emails[0].value,
        name : profile.displayName,
        avatar: avatar,
        activated: true,
    }

      try {
        let user = await userModels.findOne({email: profile.emails[0].value})
        if(user){
        
          done(null,user)
         
          console.log("5"+ refreshToken,accessToken)
        }else{
          await imageDownloader({
            imgs: [
              {
                uri: profile.photos[0].value,
                filename: `${imagePath}`,
              },
            ],
            dest: `C:/Users/laksh/OneDrive/Desktop/Projects/Calling-app/backend/storage`,
          })
            .then((info) => {
              console.log("all done", info);
            })
            .catch((error, response, body) => {
              console.log("something goes bad!");
              console.log(error);
            });

            user = await userModels.create(newUser);
            done(null,user)
        }


        //   res.cookie("refreshToken", refreshToken, {
        //     expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
        //     httpOnly: true,
        //   });

        //   res.cookie("accessToken", refreshToken, {
        //     expires: new Date(Date.now() + 1000 * 60 * 60 * 60 * 24 * 30),
        //     httpOnly: true,
        //   });
      
        console.log(refreshToken,accessToken)
        console.log(profile);

        // await storeRefreshToken(refreshToken, user._id);
      } catch (err) {
        console.log(err);
      }

    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
})
}


