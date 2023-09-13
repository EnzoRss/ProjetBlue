const express = require('express');
let bodyParser = require("body-parser");
const serveur = require("express");
const app = express();
const port = 443;
let request = require("./request.js");
let render = require('jsrender')
const fs = require('fs')
const {cons} = require("./request");
const path = process.cwd() + "/front"
let list_event = []
let nbr_tour = 0
let data = {Data: {}, type: ""}

app.engine('html', render.__express); // Set JsRender as template engine for .html files
app.set('view engine', 'html');
app.set('views', path); // Folder location for JsRender templates for Express
app.use(express.static(path))
app.use(bodyParser.urlencoded({extended: true}));
app.use("/start", function (req, res) {
    res.sendFile(path + '/index.html')
})
app.use("/create", function (req, res) {
    res.sendFile(path + '/creation-perso.html')
})


app.post("/game", function (req, res,) {
    let type;
    let choix_cons = req.body['choix_cons']
    console.log("CHOIX :  "+choix_cons)
    if (choix_cons === "choix_1" || choix_cons === "choix_2") {
        console.log("ici cc les copain")
        nbr_tour++;
    }
    if (nbr_tour === 0) {
        let obj = req.body['options']
        let name = req.body['username']
        let rep1 = req.body['item']
        let rep2 = req.body['game']
        let rep3 = req.body['question']
        data.Data = request.Init(name, rep1, rep2, rep3, obj)
    }
    if (nbr_tour % 2 === 0) {
        let nb_event
        while (true) {
            let verif = 0;
            nb_event = Math.floor(Math.random() * (9 - 1) + 1)
            for (let i = 0; i < list_event.length; i++) {
                if (nb_event !== list_event[i]) {
                    verif++
                }
            }
            if (verif === list_event.length){
                break;
            }
        }
        list_event.push()
        console.log(nb_event)
        type = "event"
        console.log("ajout event")
        data.Data = request.event(nb_event)
    } else {
        type = "consequence"
        data.Data=request.cons(list_event[(nbr_tour/2)],choix_cons)
    }
    data.type = type
    console.log("Data" + JSON.stringify(data))
    res.render('dynamic-page.html', data)
})


app.listen(port, () => console.log(`Server listening on port ${port}`));
