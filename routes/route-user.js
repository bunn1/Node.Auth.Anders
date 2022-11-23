import express from 'express';
import { SITE_NAME } from '../configs.js';
const router = express.Router();


import { listUsers } from '../controllers/controller-user.js';


router.get("/", (req, res) => {
    res.render("user", {site: SITE_NAME})
});


// user/register route for get
router.get("/register", (req, res) => {
    res.render("register", {site: SITE_NAME})
});

// user/register route for post method
router.post("/register", (req, res) => {

    console.log("Någon postade ngt....")
    res.end();

    // om formulär hanteras endast serversida och inte asynkron kod är önskvärd
    // res.redirect()

    // om formulär hanteras endast serversida och asynkron
    // kod är önskvärd = sidan laddas inte om
    // res.json


    
});


    // listUsers().then(data => {
    //     console.log("data", data);
    //     res.json(data);    
    // });

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