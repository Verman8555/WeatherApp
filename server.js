const express = require("express")
const request = require("request")
const bodyParser = require("body-parser")
const app = express();

require("dotenv").config();

app.use(express.static('public'));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

let apiKey = `${process.env.ApiKey}`;

app.get('/',(req,res) => {
    console.log()
    res.render('index',{weather:null,error:null});
})

app.post('/',(req,res) => {
    let city = req.body.city;
    let url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}` 

    request(url, (err,respone,body) => {
        if(err){
            res.render('index',{weather:null,error:'Try Again'});
        } else {
            let weather = JSON.parse(body);
            if(weather==undefined){
                res.render('index',{weather:null,error:'Try Again'});
            } else {
                let weath = `The weather of ${city} is ${weather.main.temp} F`;
                res.render('index', {weather:weath, error:null});
            }
        }
    })
})

app.listen(3000, () => {
    console.log("Okk")
})