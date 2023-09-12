const fs = require('fs')
const request = require("express");
const {exists} = require("fs");
let Data = {"Data": ""}


let DataPlayer = {"PLayer": ""}
fs.writeFile('./data.json'," ",function (err) {
    if (err) throw err;
    console.log('contenue effacé !');
});


let Init = function init(nom, rep1, rep2, rep3) {
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
let data_event = {"Event": ""}
let event = function event(id) {
    fetch(`http://localhost:80/event/${id}`)
        .then(reponse => {
            return reponse.json()
        })
        .then(data => {
            fs.readFile('./data.json', 'utf8', function (err, content) {
                Data.Data = content;
                console.log(content);
            });
            data_event.Event = data.Event
            Data.Data.event = data_event.Event
            console.log(Data.Data)
            fs.writeFile('./data.json',JSON.stringify(Data),function (err) {
                if (err) throw err;
                console.log('contenue effacé !');
            });
        })
}

module.exports = {Init, event}
