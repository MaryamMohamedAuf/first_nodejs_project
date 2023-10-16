const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const article_schema = new Schema({
    title: String,
    body:String,
    number_of_likes:Number
})

const Article = mongoose.model("Article", article_schema)
module.exports = Article;