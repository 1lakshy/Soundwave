const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true // `email` must be unique
    },
    feedText: {
      type: String,
      require: true,
    },
    feedImage: {
      type: String,
      require: false,
    },
    feedVideo: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feed", userSchema, "feeds");
