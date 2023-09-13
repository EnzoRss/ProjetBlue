const express= require('express');
let bodyParser = require("body-parser");
const serveur = require("express");
const app = express();
const port= 443;
let request =require("./request.js");
let render = require('jsrender')
const fs = require('fs')
const path = process.cwd()+"/front"

app.use(express.static(path))
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/s", express.static('../front'))
app.engine('html', render.__express); // Set JsRender as template engine for .html files
app.set('view engine', 'html');
app.set('views',path); // Folder location for JsRender templates for Express

let list_event= []
let nbr_tour = 0
let data = {Data :{},type : ""}
app.get("/test",function (req, res, ) {
    let type ;
    if (nbr_tour === 0){
        request.Init("nzo","40","20",(-30))
    }
    let nb_event =Math.floor(Math.random() * (9 - 1) +1)
    list_event.push()
    console.log(nb_event)
    if (nbr_tour % 2 === 0){
        type = "event"
        console.log("ajout event")
        request.event(2)
    } else{
        type = "consequence"
        request.cons(id,choix)
    }
    console.log(data)
    fs.readFile('./backend/data.json', 'utf8', function (err, content) {
        data.Data = content;
        console
        data.type = type
        console.log("data : "+ data )
        let test =JSON.parse(data.Data) + data.type-
        console.log(test)
        res.render('dynamic-page.html',test.Data)
    });

})





app.listen(port,()=>console.log(`Server listening on port ${port}`));
