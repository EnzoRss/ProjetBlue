const fs = require('fs')
const request = require("express");
const {exists} = require("fs");
let Data = {"Data": ""}

let Init = function init(nom, rep1, rep2, rep3) {
    fs.writeFile('./data.json'," ",function (err) {
        if (err) throw err;
        console.log('contenue effacé !');
    });
    let DataPlayer = {"PLayer": ""}
    fetch("http://localhost:80/player/Rocket_League")
        .then(reponse => {
            return reponse.json();
        })
        .then(data => {
            DataPlayer.PLayer = data.Player
            DataPlayer.PLayer['username'] = nom
            DataPlayer.PLayer['popu'] = Number(rep1) + Number(rep3) + Number(rep1)
            Data.Data = DataPlayer
            fs.writeFile('data.json', JSON.stringify(Data), function (err) {
                if (err) throw err;
                console.log('Fichier créé !');
            });
            fs.createReadStream('data.json').pipe(fs.createWriteStream('Player.json'));
        })
}

let event = function event(id) {
    let data_event ;
    fetch(`http://localhost:80/event/${id}`)
        .then(reponse => {
            return reponse.json()
        })
        .then(data => {
            fs.readFile('./data.json', 'utf8', function (err, content) {
                Data.Data = content;
                //console.log(content);
            });
            data_event= data.Event
            Data.Data.event = data_event
            fs.writeFile('./data.json',JSON.stringify(Data),function (err) {
                if (err) throw err;
                console.log('contenue ajouté !');
            });
            fs.writeFile('./event.json',JSON.stringify(data_event),function (err) {
                if (err) throw err;
                console.log('contenue ajouter !');
            });
        })
}

let cons = function consquence(id){
    let data_cons = {"Consequence":""}
    fetch(`http://localhost:80/cons/${id}`)
        .then(reponse =>{
            return reponse.json();
        })
        .then(data =>{
            fs.readFile('./data.json', 'utf8', function (err, content) {
                Data.Data = content;
                //console.log(content);
            });
            data_cons.Consequence = data['Consequence'];
            console.log(data_cons)
            Data.Data.conseqence = data_cons.Consequence
            /*console.log(Data.Data)*/
            fs.writeFile('./data.json',JSON.stringify(Data),function (err) {
                if (err) throw err;
                console.log('contenue ajouté !');
            });
            fs.writeFile('./consequence.json',JSON.stringify(data_cons),function (err) {
                if (err) throw err;
                console.log('contenue ajouter !');
            });
        })
}
module.exports = {Init, event,cons}
