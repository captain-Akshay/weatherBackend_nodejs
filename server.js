const express=require("express");
const bodyParser=require("body-parser");
require('dotenv').config();
const cors=require("cors");
const helmet=require("helmet");
const app=express();

app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(cors());
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));



app.get("/:location", async (req,res)=>{
    const location=req.params.location;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid="+process.env.WEATHERAPI;
    const response = await fetch(url);
    const jsonData = await response.json();
    res.send(jsonData);
});


app.listen(process.env.PORT||"3001",()=>{
    console.log("Server is Running!");
});