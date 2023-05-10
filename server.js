const express = require("express")
const request = require("request")
const bodyParser = require("body-parser")
const app = express();

require("dotenv").config();

let apiKey = `${process.env.ApiKey}`;
let city = 'Patna';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

const data = request(url, (err,res,body) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(body);
    }
});

app.get('/',(req,res) => {
    res.send(data);
})

app.listen(3000, () => {
    console.log("Okk")
})