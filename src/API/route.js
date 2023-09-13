const express = require('express');
const routes = express.Router();
const control =require("./controleurs.js")


routes.get("/player/:name",control.getplayerdata)
routes.get("/event/:id",control.getEventData)
routes.get('/cons/:id/:choix',control.getConsData)

module.exports =routes
