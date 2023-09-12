const express = require('express');
const routes = express.Router();
const control =require("./controleurs.js")


routes.get("/player/:name",control.getplayerdata)

module.exports =routes
