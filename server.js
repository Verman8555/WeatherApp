const express = require("express")
const request = require("request")
const bodyParser = require("body-parser")
const app = express();

require("dotenv").config();

app.use(express.static('public'));
app.set("view engine","ejs");

let apiKey = `${process.env.ApiKey}`;
let city = 'Patna';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

const data = request(url, (err,res,body) => {
    if(err){
        console.log(err);
    }
    else{
        let weather = JSON.parse(body);
        //console.log(weather);
        let msg = `The temperature in ${city} is ${weather.main.temp} F`;
        console.log(msg);
    }
});

app.get('/',(req,res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log("Okk")
})