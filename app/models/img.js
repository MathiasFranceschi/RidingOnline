const CoreModel = require("./coremodel");

class Image extends CoreModel {
    img_path;
    img_name;
    post_id;

    static table = 'img';

    constructor(obj) {
        super(obj);
    }
}

module.exports = Image;