import express from 'express';
import { SITE_NAME } from '../configs.js';
const router = express.Router();


import { listUsers } from '../controllers/controller-user.js';

// send json response
router.get("/", (req, res) => {
    listUsers().then(data => {
        console.log("data", data);
        res.json(data);    
    });
});

export default router;















// // Dirigera till en ny url
// import express from 'express'

// import { SITE_NAME } from '../configs.js';
// // Tillgång för att ändra i trafiken
// const router = express.Router();

// import connectDatabase from '../configurations/mongodb.js'

// let db = await connectDatabase();

// // Render page using ejs - sker innan statiska filer 
// router.get('/', (req, res) => {

//     // use ejs method render - endpoint- 2 parametrar
//     // param 2 - pass object
//     res.render('index', {site:SITE_NAME})
// })

// export default router;