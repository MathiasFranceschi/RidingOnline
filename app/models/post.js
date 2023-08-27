const CoreModel = require("./coremodel");
const client = require("../database.js");

class Post extends CoreModel {
    title;
    content;
    slug;
    static table = 'post';

    constructor(obj) {
        super(obj);
        this.title = obj.title;
        this.content = obj.content;
        this.slug = obj.slug
    }

    static async findPosts() {
        const results = await client.query(`SELECT title, content, slug, post.created_at, post.updated_at, tag.name, img_path, img_name FROM "post" JOIN "img" ON post.id = img.post_id JOIN "tag" ON post.id = tag.id;`);
        let instances = [];
        if (results.rowCount) {
            for (const rawData of results.rows) {
                // suite au join je ne peux pas utiliser le modèle avec new sinon je ne peux pas récupérer les valeurs des join.
                let data_obj = new this(rawData);
                data_obj.name = rawData.name;
                data_obj.img_path = rawData.img_path;
                data_obj.img_name = rawData.img_name;
                instances = [...instances, data_obj];
            }

            return instances;
        }

        return "Nous n'avons pas trouvé cette chose";
    }

    static async findPost(slug) {
        console.log(slug);
        const results = await client.query(`SELECT post.title, post.content, post.slug, post.created_at, post.updated_at, tag.name, img_path, img_name, comment.title, comment.content, comment.note, "user".firstname, "user".lastname FROM "post"
        JOIN "img" ON post.id = img.post_id
        JOIN "tag" ON post.id = tag.id
        JOIN "comment" ON post.id = comment.id
        JOIN "user" ON "user".id = comment.user_id WHERE slug = '${slug}';`);
        let instances = [];
        console.log(results.rowCount);
        if (results.rowCount) {
            for (const rawData of results.rows) {
                // suite au join je ne peux pas utiliser le modèle avec new sinon je ne peux pas récupérer les valeurs des join.
                
                let data_obj = new this(rawData);

                data_obj.name = rawData.name;
                data_obj.img_path = rawData.img_path;
                data_obj.img_name = rawData.img_name;
                
                instances = [...instances, data_obj];
            }

            return instances;
        }

        return "Nous n'avons pas trouvé cette chose";
    }
    
} 

module.exports = Post;