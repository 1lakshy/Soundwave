require("dotenv").config();

const Jimp = require("jimp");
const path = require("path");
const userService = require("../services/user-service");
const UserDto = require("../dtos/user-dtos");
const imageToBase64 = require("image-to-base64");
const fs = require("fs");
// const passportData = require("../passport/passport.js");

// const {user:userPass} = require("../passport/passport")
class ActivateController {
  async activate(req, res) {
    // activation logic

    var { name, avatar, ava } = req.body;
    let avaBuf;
    if (!avatar) {
      // agar direct path likenge to yoh root folder se find karne ki kosis kara ha
      avatar = path.join(__dirname, `../avatar/av${ava}.png`);

      // it will return buffer
      avaBuf = await fs.readFileSync(`${avatar}`);
    }
    console.log(avaBuf);

    // console.log( typeof avatar)
    // console.log (`${avatar}`)
    // console.log(`${name} , ${avatar}`);

    if (!name || !ava) {
      res.status(400).json({ message: "All fields are required" });
    }

    // name to users avatar
    const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

    //  image Base64

    const buffer = await Buffer.from(
      avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
      "base64"
    );

    console.log(typeof buffer);

    if (avaBuf) {
      const defAva = await Jimp.read(avaBuf);
      try {
        defAva
          .resize(140, Jimp.AUTO)
          .write(path.resolve(__dirname, `../storage/${imagePath}`));
      } catch (err) {
        res.status(500).json({
          message: "avatar not send tryed to set default avatar but failed",
        });
      }

      console.log("ok in object");
    } else {
      console.log("ok in else");
      try {
        const jimResp = await Jimp.read(buffer);
        jimResp
          .resize(140, Jimp.AUTO)
          .write(path.resolve(__dirname, `../storage/${imagePath}`));
      } catch (err) {
        res.status(500).json({ message: "could not process image" });
      }
    }

    const userId = req.user._id;
    // update user
    try {
      const user = await userService.findUser({ _id: userId });
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }

      user.activated = true;
      user.name = name;
      user.avatar = `/storage/${imagePath}`;
      user.save();

      res.json({ user: new UserDto(user), auth: true });
    } catch (err) {
      res.status(500).json({ message: "something went wrong" });
    }
  }

//   async passAuth(req,res){
//  const userPass = user
//     try {
  
//       if (!userPass) {
//         res.status(404).json({ message: "User not found" });
//       }


//       res.json({ user: new UserDto(userPass), auth: true });
//     } catch (err) {
//       res.status(500).json({ message: "something went wrong" });
//     }
//   }
  
}

module.exports = new ActivateController();
