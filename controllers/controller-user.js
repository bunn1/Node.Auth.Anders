// import database
import connectDatabase from '../configurations/mongodb.js';
let db = await connectDatabase();

// models | Schemas
import { UserSchema } from '../models/UserSchema.js';


async function listUsers() {
    let users = await db.collection("users").find({}).toArray();

    return users;
}

async function addUser() {

    // check if obj passes schema validation
    // https://www.npmjs.com/package/validate
    // .validate() function returns an array of validation errors.
    let obj = {firstName: "Flisa", lastName: "Hedenhös"};
    const errors = UserSchema.validate(obj);

    // if no errors - save to database...
}



export { listUsers };






















































// Mvc pattern - 1:A routing styr till infon och därefter till controllern
// models | Schemas

// importera databas
// import connectDatabase from '../configurations/mongodb.js';
// let db = await connectDatabase();

// import {
//     UserSchema
// } from '../models/User.js';

// // check if obj passes schema validation

// let obj = {
//     firstName: "F",
//     lastName: "Hedenhöskjsdfgökjhakögjhasöflkjhsfklöjsgflökhsdfglkjsdflökjsdfglköjsdfglkj"
// };

// const errors = UserSchema.validate(obj);

// // console.log("errors", errors[1].message);

// // check : if errors skip database call....
// if (errors.length > 0) {

// }

// async function listUsers() {
//     // Hämtar upp eventuella användare i databasen
//     let users = await db.collection("users").find({}).toArray();

//     return users;
// }
// async function addUser() {
//     // check if obj passes schema validation
//     // https://www.npmjs.com/package/validate
//     // .validate() function returns an array of validation errors.
//     let obj = {
//         firstName: "Flisa",
//         lastName: "Hedenhös"
//     };
//     const errors = UserSchema.validate(obj);
//     // if no errors - save to database...
// }