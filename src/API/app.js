const express= require('express');
const app = express();
const port= 80;
const routegame = require('route.js');

app.use(cors({
    origin: '*'
}))

app.use(routegame);

app.listen(port,()=>console.log(`Server listening on port ${port}`));