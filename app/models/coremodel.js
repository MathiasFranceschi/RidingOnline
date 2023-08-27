const client = require("../database.js");

class CoreModel {
    #id;
    created_at;
    updated_at;

    static table = null;

    constructor(obj) {
        
        this.#id = obj.id;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    }

    /* static async findAll() {
        const results = await client.query(`SELECT "title", "content" FROM "${this.table}"`);
        let instances = [];

        if (results.rowCount) {
            for (const rawData of results.rows) {
                const data_obj = new this(rawData);
                instances = [...instances, data_obj];
            }

            return instances;
        }

        return "Nous n'avons pas trouvé cette chose";
    } */
}

module.exports = CoreModel;
