require("dotenv").config();

const express = require("express")
const DbConnect = require("./database")
const cookieParser = require("cookie-parser")
const app = express();
const router = require("./routes");
const cors = require("cors")
const passport = require("passport")

const authRoute = require("./routes/auth.js")

var session = require('cookie-session');
app.use(session({ name:"session",keys:["secret"],maxAge:24*60*60*1000}));

app.use(cookieParser());

// passport require
require("./passport/passport")(passport)
app.use(passport.initialize())
app.use(passport.session())

// auth with passport js
app.use("/auth",authRoute)

// to serve uploaded image directly as url
app.use("/storage" , express.static("storage"))
// to remove cors error in browser 
const corsOptions = {
    credentials:true,
    origin:["http://localhost:3000","http://localhost:5500"],
    methods:"GET,POST,PUT,DELETE"
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5500; 

app.use(express.json({ limit: "8mb"}));
app.use(router);
DbConnect();
app.get("/" , (req,res)=>{

    res.send("hellow from express side")
})

// const server = 
app.listen(PORT , () => console.log(`listening to port ${PORT}`) );

// handle unhandeled promiise

// process.on("unhandledRejection" , err =>{
//     console.log(`ERROR : ${err.message}`);
//     console.log(`shutting down the server `);
//     server.close(() =>{
//         process.exit(1)
//     })
// })