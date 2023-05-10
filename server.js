const express = require("express")
const request = require("request")
const bodyParser = require("body-parser")
const app = express();

app.get('/',(req,res) => {
    res.send("Hello")
})

app.listen(3000, () => {
    console.log("Okk")
})