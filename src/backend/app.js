const express= require('express');
let bodyParser = require("body-parser");
const serveur = require("express");
const app = express();
const port= 443;
let request =require("./request.js");
let render = require('jsrender')
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/s", express.static('../front'))
app.engine('html', render.__express); // Set JsRender as template engine for .html files
app.set('view engine', 'html');
app.set('views',process.cwd()+"/front"); // Folder location for JsRender templates for Express


app.use("/test",function (req, res, ) {
    let data
    fs.readFile('./backend/Player.json', 'utf8', function (err, content) {
        data = content;
        //console.log(content);
        let test =JSON.parse(data)
        console.log(test)
        res.render('dynamic-page.html',test)
    });


})





app.listen(port,()=>console.log(`Server listening on port ${port}`));
