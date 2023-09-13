const fs = require('fs')
const request = require("express");
const {exists} = require("fs");
const data_player = require("./game.json");
const data_event = require("./event.json");
const data_conse = require("./event-consequences.json");

let Data = {
    "Data": {
        "Player": {"username": "", "popu": " ", "argent": "", "inventaire": ""},
        "event": {"Description": "", "Choix_1": "", "Choix_2": ""},
        "consequence": {
            "choix": {"text": "", "or": "", "popu": ""},
        }
    }
}

let Init = function Init(nom, rep1, rep2, rep3, obj) {
    let game
    if (obj == 1) {
        game = "Rocket_League"
    } else if (obj == 2) {
        game = "Valorant"
    } else if (obj == 3) {
        game = 'League_of_legends'
    }
    const Player =data_player[game]
    Player['username'] = nom
    Player['popu'] = Number(rep1) + Number(rep3) + Number(rep1);
    Data.Data['Player'] = Player
    return Data
}


let event = function event(id) {
    Data.Data.event = data_event.event[`${id}`]
    return Data
}

let cons = function consquence(id, choix) {

    if (choix === '1'){
        choix = "choix_1"
    }else{
        choix = "choix_2"
    }
    Data.Data.consequence = data_conse.Consequences[`${id}`][`${choix}`];
    return Data
}
module.exports = {Init, event, cons}
