const Jimp = require("jimp");
const path = require("path");
const userService = require("../services/user-service");
const UserDto = require("../dtos/user-dtos");

class ActivateController {
  async activate(req, res) {
    // activation logic

    const { name, avatar } = req.body;
    if (!name || !avatar) {
      res.status(400).json({ message: "All fields are required" });
    }

    // name to users avatar
    const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

    //  image Base64

    const buffer = Buffer.from(
      avatar.replace(/^data:image\/png;base64,/, ""),
      "base64"
    );

    try {
      const jimResp = await Jimp.read(buffer);
      jimResp
        .size(140, Jimp.AUTO)
        .write(path.resolve(__dirname, `../storage/${imagePath}`));
    } catch (err) {
     
      res.status(500).json({ message: "could not process image" });
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
}

module.exports = new ActivateController();
