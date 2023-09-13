const data_event = require("./event.json")
const data_player= require("./player.json")
const data_conse = require('./event-consequences.json')
const e = require("express");


exports.getplayerdata = (req,res) =>{
    const game =req.params.name;
    console.log(game)
    const player = data_player[game]
    console.log(player)
    if(!player) {
        return res.status(404).send("joueur non trouver");
    } else {
        res.status(200).json({
            message: "joueur trouver",
            Player : player
        });
    }
};

exports.getEventData =(req,res) => {
    const id =parseInt(req.params.id)
    const event = data_event.event[`${id}`]

    if(!event) {
        return res.status(404).send("event non trouver");
    } else {
        res.status(200).json({
            message: "event trouver",
            Event :event
        });
    }
}

exports.getConsData=(req,res)=>{
    const id = req.params.id;
    const conse = data_conse.Consequences[`${id}`];
    if(!conse) {
        return res.status(404).send("conséqence non trouver");
    } else {
        res.status(200).json({
            message: "conséqence trouver",
            Consequence : conse
        });
    }
}