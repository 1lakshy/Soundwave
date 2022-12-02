const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const mongoose = require("mongoose");
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const userModels = require("../models/user-models");
const imageDownloader = require("node-image-downloader");
const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
const imagePathDB = `${imagePath}.png`;
const avatar = `../storage/${imagePathDB}`;

// User folder
const fs = require("fs");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
          let user = await userModels.findOne({
            email: profile.emails[0].value,
          });
          if (user) {
            done(null, user);
          } else {
            await imageDownloader({
              imgs: [
                {
                  uri: profile.photos[0].value,
                  filename: `${imagePath}`,
                },
              ],
              dest: `C:/Users/laksh/OneDrive/Desktop/Projects/YOME/backend/storage/profile`,
            })
              .then((info) => {
                console.log("all done", info);
              })
              .catch((error, response, body) => {
                console.log("something goes bad!");
                console.log(error);
              });

            // directory path
            const userFirstName = profile.name.givenName;
            const userFolder = `${userFirstName}-${Math.round(
              Math.random() * 1e9
            )}`;
            const userPath = `../storage/${userFolder}`;
            const dir = `./storage/${userFolder}`;

            // create new directory
            fs.mkdir(dir, (err) => {
              if (err) {
                throw err;
              }
              console.log("Directory is created.");
            });

            const newUser = {
              email: profile.emails[0].value,
              name: profile.displayName,
              avatar: avatar,
              userPath: userPath,
            };

            user = await userModels.create(newUser);

            done(null, user);
          }

          console.log(profile);
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
  });
};
