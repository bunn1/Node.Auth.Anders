// import database
import connectDatabase from '../configurations/mongodb.js';
let db = await connectDatabase();

// models | Schemas
import { UserSchema } from '../models/UserSchema.js';


async function listUsers() {
    let users = await db.collection("users").find({}).toArray();

    return users;
}

async function addUser(obj) {

    // check if obj passes schema validation
    // https://www.npmjs.com/package/validate
    const errors = UserSchema.validate(obj);

    // console.log("errors", errors);
    // big no-no to store password in plain text....
    // todo - use bcrypt to hash password  
    // https://www.npmjs.com/package/bcrypt

    // return
    if (errors.length > 0) {
        return {error: errors[0].message};
    }

    // if no errors - save to database, return result
    return await db.collection("users").insertOne(obj);
}

export { listUsers, addUser };




















































// // import database
// import connectDatabase from '../configurations/mongodb.js';
// let db = await connectDatabase();

// // models | Schemas
// import { UserSchema } from '../models/UserSchema.js';


// async function listUsers() {
//     let users = await db.collection("users").find({}).toArray();

//     return users;
// }

// async function addUser(obj) {

//     // check if obj passes schema validation
//     // https://www.npmjs.com/package/validate
//     // .validate() function returns an array of validation errors.
//     // let obj = {firstName: "Flisa", lastName: "Hedenhös"};
//     const errors = UserSchema.validate(obj);

//     console.log("errors", errors)

//     // big nono to store password in plain text...
    


//     // return

// if (errors.length > 0) {
//     return {error: errors[0].message}
// }

//  // if no errors - save to database...
//  return await db.collection("users").insertOne(obj);
   
// }

// export { listUsers, addUser };






















































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