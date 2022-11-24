import express from "express";
import { SITE_NAME } from "../configs.js";
const router = express.Router();

import { listUsers, addUser } from "../controllers/controller-user.js";

router.get("/", (req, res) => {
    res.render("user", { site: SITE_NAME });
});

router.get("/register", (req, res) => {
    res.render("register", { site: SITE_NAME });
});

router.get("/login", (req, res) => {
    res.render("login", { site: SITE_NAME });
});


router.post("/register", (req, res) => {

    // formulärdata finns i req 
    // - se till att express hanterar formulär data som json
    console.log("req.body", req.body);

    // prepare obj reply
    let reply = { result: "", message: "" };

    addUser(req.body)
        .then((data) => {
            console.log("data", data);
            if (data.error !== undefined) {
                reply.result = "fail";
                reply.message = data.error;
            } else {
                reply.result = "success";
                reply.message = "användare sparades till databasen";
            }
        })
        .catch((error) => {
            console.log("error");
        })
        .finally((data) => {
            res.json(reply);
        });
});

router.post("/login", (req, res) => {
    console.log("login...", req.body);

      // prepare obj reply
      let reply = { result: "", message: "" };

    // contoller method...
    

});



// listUsers().then(data => {
//     console.log("data", data);
//     res.json(data);
// });

export default router;































// import express from "express";
// import { SITE_NAME } from "../configs.js";
// const router = express.Router();

// import { listUsers, addUser } from "../controllers/controller-user.js";

// router.get("/", (req, res) => {
//     res.render("user", { site: SITE_NAME });
// });

// router.get("/register", (req, res) => {
//     res.render("register", { site: SITE_NAME });
// });

// router.get("/login", (req, res) => {
//     res.render("login", { site: SITE_NAME });
// });

// router.post("/register", (req, res) => {

//     // formulärdata finns i req 
//     // - se till att express hanterar formulär data som json
//     console.log("req.body", req.body);

//     // prepare obj reply
//     let reply = { result: "", message: "" };

//     addUser(req.body)
//         .then((data) => {
//             console.log("data", data);
//             if (data.error !== undefined) {
//                 reply.result = "fail";
//                 reply.message = data.error;
//             } else {
//                 reply.result = "success";
//                 reply.message = "användare sparades till databasen";
//             }
//         })
//         .catch((error) => {
//             console.log("error");
//         })
//         .finally((data) => {
//             res.json(reply);
//         });
// });

// router.post("/login", (req, res) => {
//     console.log("login..", req.body)

//       // prepare obj reply
//       let reply = { result: "", message: "" };

//     // controller method...

// })

// // listUsers().then(data => {
// //     console.log("data", data);
// //     res.json(data);
// // });

// export default router;












































// import express from 'express';
// import { SITE_NAME } from '../configs.js';
// const router = express.Router();


// import { listUsers, addUser } from '../controllers/controller-user.js';


// router.get("/", (req, res) => {
//     res.render("user", {site: SITE_NAME})
// });


// // user/register route for get
// router.get("/register", (req, res) => {
//     res.render("register", {site: SITE_NAME})
// });

// // user/register route for post method
// router.post("/register", (req, res) => {

//     console.log("Någon postade ngt....")

//     // formulär data finns i req - se till att express hanterar formulär data som json
//     console.log("req.body", req.body)

//     // let result = addUser(req.body);
//     // console.log("result", result)


//     // prepare obj reply
//     let reply = {result: "", message: ""};


// // Vad får vi för resultat av det
//     addUser(req.body).then((data) => {

//         console.log("data", data);
//         if (data.error !== undefined){
//             reply.result = "fail";
//             reply.message = data.error
//         } else {
//             reply.result = "success";
//             reply.message = "användare sparades till databasen"
//         }


//     }).catch((err) => {
//         console.log("error")

//     }).finally((data) =>{
//         res.json(reply);
//     })

//     // res.end();

//     // om formulär hanteras endast serversida och inte asynkron kod är önskvärd
//     // res.redirect()

//     // om formulär hanteras endast serversida och asynkron
//     // kod är önskvärd = sidan laddas inte om
//     // res.json


    
// });


//     // listUsers().then(data => {
//     //     console.log("data", data);
//     //     res.json(data);    
//     // });

// export default router;















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