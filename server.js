// Dependencies - import => package.json "type": "module",
//===============================================
import express from 'express';

//local modules
//===============================================
import { config, SITE_NAME, PORT } from './configs.js'

// variables
//===============================================
// const PORT = 3000;

// test - environment variables
console.log(process.env);

// const PORT = process.env.PORT || 3000


// process.env.USER = "Niclas";

// express app environment
//===============================================
const app = express();

// routes - / är rotkatalogen
//===============================================
app.get('/', (req, res) => {
    res.send(` Hello World ${config.SITE_NAME}`);
});

// listen on server requests
//===============================================
app.listen(3000, (err, res) =>{
    console.log(`Server running on port 3000`)
});