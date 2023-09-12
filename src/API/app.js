const express= require('express');
const app = express();
const cors = require("cors")
const port= 80;
const routegames = require('./route.js');

app.use(cors({
    origin: '*'
}))

app.use(routegames);

app.listen(port,()=>console.log(`Server listening on port ${port}`));