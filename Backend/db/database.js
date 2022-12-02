const mongoose = require("mongoose");

module.exports= DbConnect= ()=>{ mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log("db not connected");
})}