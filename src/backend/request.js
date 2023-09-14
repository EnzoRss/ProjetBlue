const fs = require('fs')
const request = require("express");
const {exists} = require("fs");
const data_player = require("./game.json");
const data_event = require("./event.json");
const data_conse = require("./event-consequences.json");
const data_Marchand = require("./object.json")


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
    let game =" rien"
    if (obj == 1) {
        game = "Rocket_League"
    } else if (obj == 2) {
        game = "Valorant"
    } else if (obj == 3) {
        game = 'League_of_legends'
    }
    console.log("Popui : " + game)
    let calc_popu = 0;

    if (rep1 == "valorant") {
        calc_popu += 20
    } else if (rep1 == "rocketleague") {
        calc_popu += 50
    } else if (rep1 == "lol") {
        calc_popu -= 15
    }

    if (rep2 == "foryou") {
        calc_popu += 5
    } else if (rep2 == "fortheteam") {
        calc_popu += 50
    } else if (rep2 == "both") {
        calc_popu += 25
    }

    if (rep3 == "ragenbreak") {
        calc_popu -= 10
    } else if (rep3 == "rage") {
        calc_popu += 5
    } else if (rep3 == "calm") {
        calc_popu += 20
    }

    const Player = data_player[game]

    Player['username'] = nom
    Player['popu'] = calc_popu
    Data.Data['Player'] = Player
    fs.writeFile("./backend/data.json", JSON.stringify(Data), function (err) {
        if (err) {
            throw err
        }
    })

    return Data
}


let event = function event(id) {
    Data.Data.event = data_event.event[`${id}`]
    return Data
}

let cons = function consquence(id, choix) {

    if (choix === '1') {
        choix = "choix_1"
    } else {
        choix = "choix_2"
    }
    console.log("id : " + id)
    Data.Data.consequence['choix'] = data_conse.Consequences[`${id}`][`${choix}`];
    return Data
}


/*let Marchand = function Marchand(Data) {
    for(let i= 0; i< Data.Player['inventaire'].length;i++ ){
        for(let j = 0, i < data_Marchand['object'].length , j++){

        }
    }

}*/


module.exports = {Init, event, cons}
