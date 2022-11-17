// Dependencies - import => package.json "type": "module",
//===============================================
import express from 'express';
import session from 'express-session'
import path from 'path'

//local modules
//===============================================
import {
    config,
    SITE_NAME,
    PORT,
    SESSION_SECRET,
    SESSION_MAXAGE
} from './configs.js'

import routeStart from './routes/route-start.js'
// variables
//===============================================
// const PORT = 3000;

// test - environment variables
// console.log(process.env);

// const PORT = process.env.PORT || 3000

// process.env.USER = "Niclas";

// express app environment
//===============================================
const app = express();

// express template engine - anv ejs - aktivera motorn här
//===============================================
app.set("view engine", "ejs");


// 1. middleware 
// funkar genom att räkna ut hur många gånger man besökt samma sida
// ========================================================================


// sessions - genererar unikt id - två parter kan kommunicera efter handslag - kommer ihåg att man loggat in
//===============================================
app.use(
    session({
        secret: 'SESSION_SECRET',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: SESSION_MAXAGE
        },
    })
);

// routes - / är rotkatalogen
//===============================================

// check sessions - get är klicka på en länk - * inkluderar alla länkar på localhost
// next fortsätter loopen - fortsätt till nästa

// 
app.get('*', (req, res, next) => {

    // property views - own setting to hold number of times user navigates on site (clicks)
    // condition if req.session.views not undefined
    // if (req.session.views) {

    //     // req.session.views is a number - increase
    //     req.session.views++;

    //  } else {

    //     // req.session.views is undefined - set value to 1
    //     // 
    //     req.session.views = 1;
    //  }

    // oneliner if condition - ternary operator ? :
    req.session.views ? req.session.views++ : req.session.views = 1;

    // show number of times users navigates before session been destroyed
    console.log("req.session.views", req.session.views); 

    next()
})

// Use local routes ....
app.use('/', routeStart)
app.use('/start', routeStart)
app.use('/home', routeStart)

// Render page using ejs - sker innan statiska filer 
// app.get('/', (req, res) => {

//     // use ejs method render - endpoint- 2 parametrar
//     // param 2 - pass object
//     res.render('index', {site:SITE_NAME})
// })


// app.get('/', (req, res) => {

//     // res.send(` Hello World ${config.SITE_NAME}`);

//     // send a file using express - path har förmåga - genväg för att hämta upp index.html
//     res.sendFile(path.resolve('./public/index.html'))

// });


// static files | folders | Hantera statiska filer
// ==============================================
app.use(express.static("public"));

// 404 not found
// ==============================================
app.use((req, res, next) => {
    res.status(404).send("Sorry - nothing to display");
    next();
})

// 500 server error
// ==============================================
app.use((err, req, res, next) => {

    // log server error server-side
    console.log("Error", err);

    res.status(500).send("Server error - please return later");
    next();
})

// listen on server requestsS
//===============================================
app.listen(PORT, (err, res) => {
    console.log(`Server running on port ${PORT}`)
});