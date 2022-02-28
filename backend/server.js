require("dotenv").config();

const express = require("express")

const app = express();

const PORT = process.env.PORT || 5500; 

app.get("/" , (req,res)=>{

    res.send("hellow from express side")
})

app.listen(PORT , () => `listening to port ${PORT}` );