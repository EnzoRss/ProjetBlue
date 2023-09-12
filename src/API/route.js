const express = require('express');
const routes = express.Router();
const control =require("./controleurs.js")


routes.get("/player/:name",control.getplayerdata)
routes.get("/event/:id",control.getEventData)

module.exports =routes
