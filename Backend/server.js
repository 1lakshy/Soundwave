require("dotenv").config();
const express = require("express");
const app = express();
const passport = require("passport")
const session = require("cookie-session");
const cors = require("cors")
const authRoute = require("./routes/auth.js")
const DbConnect = require("./db/database")
const socket = require("socket.io");
const { isObjectIdOrHexString } = require("mongoose");

app.use(session({ name:"session" , keys:["secret"], maxAge:24*60*60*1000}))
DbConnect()

// cors fix
const corsOptions = {
    credentials:true,
    origin:["http://localhost:3000","http://localhost:5500"],
    methods:"GET,POST,PUT,DELETE"
}

app.use(cors(corsOptions));
// passport require
require("./passport/passport.js")(passport)
app.use(passport.initialize())
app.use(passport.session())

// auth with passport js
app.use("/auth",authRoute)



app.listen(process.env.PORT , ()=>{
    console.log("server started")
});

const server = app.listen("5500",()=>{
    console.log("listening at 5500")
})


// socket

const io = socket(server,{
    cors:{
        origin:"http://localhost:3000",
        credentials:true,
    },
});

global.onlineUsers = new Map();

io.on("connection",(socket) =>{
    global.chatSocket = socket;
    socket.on("add-user", (userId)=>{
        onlineUsers.set(userId,socket.id)
    })
})
