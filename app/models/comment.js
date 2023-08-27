const CoreModel = require("./coremodel");

class Comment extends CoreModel {
    title;
    content;
    note;
    user_id;
    post_id;
    static table = 'comment';

    constructor(obj) {
        super(obj);
    }
}

module.exports = Comment;