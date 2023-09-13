const express= require('express');
let bodyParser = require("body-parser");
const serveur = require("express");
const app = express();
const port= 443;
let request =require("./request.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/s", express.static('../front'))

request.Init()
request.event(6)
request.cons(6)

app.listen(port,()=>console.log(`Server listening on port ${port}`));
