const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    email:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    avatar:{
        type: String,
        require: true
    },
    userPath:{
        type: String,
        require: true
    },
},{
    timestamps:true
})


module.exports = mongoose.model("User", userSchema,"users");