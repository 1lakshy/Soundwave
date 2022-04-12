require("dotenv").config();

const express = require("express")
const DbConnect = require("./database")
const cookieParser = require("cookie-parser")
const app = express();
const router = require("./routes");
const cors = require("cors")

app.use(cookieParser());
// to remove cors error in browser 
const corsOptions = {
    credentials:true,
    origin:["http://localhost:3000"]
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