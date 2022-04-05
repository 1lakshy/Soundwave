require("dotenv").config();

const express = require("express")
const DbConnect = require("./database")

const app = express();
const router = require("./routes");
const cors = require("cors")


// to remove cors error in browser 
const corsOptions = {
    credentials:true,
    origin:["http://localhost:3000"]
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5500; 

app.use(express.json());
app.use(router);
DbConnect();
app.get("/" , (req,res)=>{

    res.send("hellow from express side")
})

app.listen(PORT , () => console.log(`listening to port ${PORT}`) );