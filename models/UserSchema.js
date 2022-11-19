// A user model: class | Schema | Mongoose mm
import Schema from 'validate'

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        length:  { min: 2, max: 32 }
    },
    lastName: {
        type: String,
        required: true,
        length:  { min: 2, max: 32 }
    }
})

export { UserSchema };











// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     // Validering av info
// set firstName(val) {
//     if (typeof val === 'string' && val.length > 1 && val.length <= 32){
//         this.firstName = val;
//     }
// }
// }


// let user = new User("Flisa", "Hedenhös");

// user = new User(123, null)

// let username = {fname: "...", lname: "..."}