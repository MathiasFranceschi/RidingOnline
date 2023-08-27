const CoreModel = require("./coremodel");

class User extends CoreModel {
    firstname;
    lastname;
    email;
    password;
    user_id;
    post_id;

    static table = 'user';

    constructor(obj) {
        super(obj);
    }
}

module.exports = Comment;