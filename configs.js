// dotenv
//=======================================
import dotenv from 'dotenv';

// const PORT = process.env.PORT || 3000

//test read .env file
// console.log(dotenv.config().parsed);

// read .env content into variable config
const config = dotenv.config().parsed;

const SITE_NAME = config.SITE_NAME
const PORT = Number(config.PORT);
const SESSION_SECRET = config.SESSION_SECRET
const SESSION_MAXAGE = Number(config.SESSION_MAXAGE);


// export {config};
// export {config, SITE_NAME};
export {config, SITE_NAME, PORT, SESSION_SECRET, SESSION_MAXAGE};