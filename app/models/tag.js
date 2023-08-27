const CoreModel = require("./coremodel");

class Tag extends CoreModel {
    name;
    static table = 'table';
    constructor(obj) {
        super(obj);
    }
}

module.exports = Tag;