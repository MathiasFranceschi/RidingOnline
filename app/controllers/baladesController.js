const Post = require("../models/post");

const baladesController = {

    async index (req, res) {
        const posts = await Post.findPosts();
        res.render('balades', {posts});
    },

    async oneBalad (req, res) {
        const post = await Post.findPost();
        res.render('balade', {post})
    }

};

module.exports = baladesController;