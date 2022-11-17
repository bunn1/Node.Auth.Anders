import express from 'express';
import { SITE_NAME } from '../configs.js';
// Tillgång för att ändra i trafiken
const router = express.Router();

// Render page using ejs - sker innan statiska filer 
router.get('/', (req, res) => {

    // use ejs method render - endpoint- 2 parametrar
    // param 2 - pass object
    res.render('index', {site:SITE_NAME})
})

export default router;