const fs = require('fs')
const request = require("express");
const {exists} = require("fs");
let Data = {"Data": {"Player" : {},"event":{},"consequence" : {}}}

let Init = function  init(nom, rep1, rep2, rep3)  {
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
            Data.Data.Player = data['Player']
            Data.Data.Player['username'] = nom;
            Data.Data.Player['popu'] = Number(rep1) + Number(rep3) + Number(rep1);
            fs.writeFile('./backend/data.json', JSON.stringify(Data), function (err) {
                if (err) throw err;
                console.log('Fichier créé !');
            });
            return DataPlayer
        })
    return DataPlayer
}

let event = function event(id) {
    fetch(`http://localhost:80/event/${id}`)
        .then(reponse => {
            return reponse.json()
        })
        .then(data => {
            Data.Data.event = data['Event']
            fs.writeFile('./backend/data.json',JSON.stringify(Data),function (err) {
                if (err) throw err;
                console.log('contenue ajouté !');
            });
        })
}

let cons = function consquence(id,choix){
    let data_cons = {"Consequence":""}
    fetch(`http://localhost:80/cons/${id}/${choix}`)
        .then(reponse =>{
            return reponse.json();
        })
        .then(data =>{
            Data.Data.conseqence  = data['Consequence'];
            fs.writeFile('./backend/data.json',JSON.stringify(Data),function (err) {
                if (err) throw err;
                console.log('contenue ajouté !');
            });
        })
}
module.exports = {Init, event,cons}
