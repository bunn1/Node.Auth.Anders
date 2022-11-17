// A user model: class | Schema | Mongoose mm
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}



let user = new User("Flisa", "Hedenhös");

export { User };