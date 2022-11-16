// Dependencies - import => package.json "type": "module",
//===============================================
import express from 'express';
import session from 'express-session'
import path from 'path'

//local modules
//===============================================
import { config, SITE_NAME, PORT, SESSION_SECRET, SESSION_MAXAGE } from './configs.js'

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

// sessions - genererar unikt id - två parter kan kommunicera efter handslag - kommer ihåg att man loggat in
//===============================================
app.use(
    session({
    secret: 'SESSION_SECRET',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: SESSION_MAXAGE },
})
);

// routes - / är rotkatalogen
//===============================================

// check sessions - get är klicka på en länk - * inkluderar alla länkar på localhost
// next fortsätter loopen - fortsätt till nästa
// 1. middleware - make sure using next as 3rd argument - agerar mellan saker
// funk räkna hur många gånger man besökt samma sida
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

    // show number of times users navigates before session been destroyed
    console.log("req.session.views", req.session.views);

    // oneliner if condition - ternary operator ? :
    req.session.views ? req.session.views++ : req.session.views = 1;
    next()

})

app.get('/', (req, res) => {
    
    // res.send(` Hello World ${config.SITE_NAME}`);

    // send a file using express - path har förmåga - genväg för att hämta upp index.html
    res.sendFile(path.resolve('./public/index.html'))

});

// listen on server requestsS
//===============================================
app.listen(PORT, (err, res) => {
    console.log(`Server running on port ${PORT}`)
});