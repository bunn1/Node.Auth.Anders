// dependencies - import => package.json "type": "module",
// ========================================
import express from "express";
import session from "express-session";

// local modules
import { config, SITE_NAME, PORT, SESSION_SECRET, SESSION_MAXAGE } from "./configs.js";
import routeStart from './routes/route-start.js';
import routeUser from './routes/route-user.js';


// express app environment
// ========================================
const app = express();


// express template engine
// ========================================
app.set("view engine", "ejs");


// middleware
// ========================================


// sessions
// ========================================
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: SESSION_MAXAGE },
    })
);

// handle method post - request body as json 
// if app uses upload files - route actions before this step...
// ========================================
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// routes
// ========================================

// check sessions
// make sure using next as 3rd argument
app.get('*', (req, res, next) => {

    // oneliner if condition - ternary operator  ? :  ;
    req.session.views ? req.session.views++ : req.session.views = 1;
    
    // show number of times users navigates before session been destroyed
    console.log("req.session.views", req.session.views);

    next();
});

// use local routes ...
app.use('/', routeStart);
app.use('/start', routeStart);
app.use('/home', routeStart);

app.use('/user', routeUser);


// static files | folders
// ========================================
app.use(express.static("./public"));

// 404 not found
// ========================================
app.use((req, res, next) => {
    res.status(404).send("Sry - nothing to display");
    next();
});


// 500 server error
// ========================================
app.use((err, req, res, next) => {
    
    // log server error server-side
    console.log("Error", err); 

    res.status(500).send("Server error - please return later");
    next();
});

// listen on server requests
// ========================================
app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});



































// Dependencies - import => package.json "type": "module",
//===============================================

// import express from 'express';
// import session from 'express-session'
// // import path from 'path'

// //local modules
// //===============================================
// import {
//     config,
//     SITE_NAME,
//     PORT,
//     SESSION_SECRET,
//     SESSION_MAXAGE
// } from './configs.js'

// import routeStart from './routes/route-start.js'
// import routeUser from './routes/route-user.js'
// // variables
// //===============================================
// // const PORT = 3000;

// // test - environment variables
// // console.log(process.env);

// // const PORT = process.env.PORT || 3000

// // process.env.USER = "Niclas";

// // express app environment
// //===============================================
// const app = express();

// // express template engine - anv ejs - aktivera motorn h??r
// //===============================================
// app.set("view engine", "ejs");


// // 1. middleware 
// // funkar genom att r??kna ut hur m??nga g??nger man bes??kt samma sida
// // ========================================================================


// // sessions - genererar unikt id - tv?? parter kan kommunicera efter handslag - kommer ih??g att man loggat in
// //===============================================
// app.use(
//     session({
//         secret: 'SESSION_SECRET',
//         resave: false,
//         saveUninitialized: true,
//         cookie: {
//             maxAge: SESSION_MAXAGE
//         },
//     })


// );

// // handle method post - req body as json
// // if app uses upload files - route actions before this step
// // ================================
// app.use(express.json());
// app.use(express.urlencode({extended:true}));

// // routes - / ??r rotkatalogen
// //===============================================

// // check sessions - get ??r klicka p?? en l??nk - * inkluderar alla l??nkar p?? localhost
// // next forts??tter loopen - forts??tt till n??sta

// // 
// app.get('*', (req, res, next) => {

//     // property views - own setting to hold number of times user navigates on site (clicks)
//     // condition if req.session.views not undefined
//     // if (req.session.views) {

//     //     // req.session.views is a number - increase
//     //     req.session.views++;

//     //  } else {

//     //     // req.session.views is undefined - set value to 1
//     //     // 
//     //     req.session.views = 1;
//     //  }

//     // oneliner if condition - ternary operator ? :
//     req.session.views ? req.session.views++ : req.session.views = 1;

//     // show number of times users navigates before session been destroyed
//     console.log("req.session.views", req.session.views); 

//     next()
// })

// // Use local routes ....
// app.use('/', routeStart)
// app.use('/start', routeStart)
// app.use('/home', routeStart)


// app.use('/user', routeUser)


// // Render page using ejs - sker innan statiska filer 
// // app.get('/', (req, res) => {

// //     // use ejs method render - endpoint- 2 parametrar
// //     // param 2 - pass object
// //     res.render('index', {site:SITE_NAME})
// // })


// // app.get('/', (req, res) => {

// //     // res.send(` Hello World ${config.SITE_NAME}`);

// //     // send a file using express - path har f??rm??ga - genv??g f??r att h??mta upp index.html
// //     res.sendFile(path.resolve('./public/index.html'))

// // });


// // static files | folders | Hantera statiska filer
// // ==============================================
// app.use(express.static("./public"));

// // 404 not found
// // ==============================================
// app.use((req, res, next) => {
//     res.status(404).send("Sorry - nothing to display");
//     next();
// })

// // 500 server error
// // ==============================================
// app.use((err, req, res, next) => {

//     // log server error server-side
//     console.log("Error", err);

//     res.status(500).send("Server error - please return later");
//     next();
// })

// // listen on server requestsS
// //===============================================
// app.listen(PORT, (err, res) => {
//     console.log(`Server running on port ${PORT}`)
// });












